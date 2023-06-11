import random
from collections import deque


random.seed(2023)

grid = [
    [0, 1, 1, 0],
    [2, 1, 1, 3],
    [4, 4, 5, 6],
    [7, 8, 9, 9],
    [10, 11, 12, 12],
]

target_grid = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 1, 1, 0],
    [0, 1, 1, 0],
]

height, row = len(grid), len(grid[0])
number_of_pieces = max([max(row) for row in grid]) + 1


def init_table(number_of_pieces, row, height):
    return [
        [
            [random.randint(0, pow(2, 64)) for _ in range(number_of_pieces)]
            for _ in range(row)
        ]
        for _ in range(height)
    ]


def calculate_hash(current_grid, hash_table):
    hash_value = 0
    height, row = len(grid), len(grid[0])
    for i in range(height):
        for j in range(row):
            hash_value ^= hash_table[i][j][current_grid[i][j]]
    return hash_value


ZobristTable = init_table(number_of_pieces, row, height)


def get_possible_moves(current_grid, current_hash):
    moves = []
    directions = [(0, 1), (0, -1), (1, 0), (-1, 0)]

    for piece in range(number_of_pieces):
        piece_locations = set()

        for direction in directions:
            allowed = True

            for i in range(height):
                for j in range(row):
                    if current_grid[i][j] == piece:
                        piece_locations.add((i, j))
                        new_i, new_j = i + direction[0], j + direction[1]

                        if not (
                            0 <= new_i < height
                            and 0 <= new_j < row
                            and current_grid[new_i][new_j] in {0, piece}
                        ):
                            allowed = False
                            break

                if not allowed:
                    break

            if allowed:
                new_grid = [row[:] for row in current_grid]
                for location in piece_locations:
                    new_grid[location[0]][location[1]] = 0
                for location in piece_locations:
                    new_grid[location[0] + direction[0]][
                        location[1] + direction[1]
                    ] = piece
                moves.append((new_grid, calculate_hash(new_grid, ZobristTable)))

    return moves


def solve(start_grid, end_grid):
    init_hash = calculate_hash(start_grid, ZobristTable)
    grid_queue = deque([(start_grid, init_hash)])
    visited_grid = {init_hash}
