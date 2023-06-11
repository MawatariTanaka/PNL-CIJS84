import { createContext, useReducer } from "react";

export const GameContext = createContext();

function generateColor(numberOfColors) {
  let colors = [];
  for (let i = 0; i < numberOfColors; i++) {
    colors.push(
      `rgb(0, ${Math.floor(Math.random() * 255)}, ${Math.floor(
        Math.random() * 255
      )})`
    );
  }
  return colors;
}

function getInitialGrid() {
  return [
    [0, 1, 1, 0],
    [2, 1, 1, 3],
    [4, 4, 5, 6],
    [7, 8, 9, 9],
    [10, 11, 12, 12],
  ];
}

const initialState = {
  initialGrid: getInitialGrid(),
  grid: getInitialGrid(),
  targetGrid: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 1, 1, 0],
    [0, 1, 1, 0],
  ],
  listColor: generateColor(20),
  currentPiece: 1,
  gridRendered: false,
  mousePosition: { x: 0, y: 0 },
  allowedMovement: false,
  moveCounter: 0,
  finished: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_GRID":
      let newGrid = action.payload;
      let newFinishedState = true;
      for (let i = 0; i < newGrid.length; i++) {
        for (let j = 0; j < newGrid[i].length; j++) {
          if (newGrid[i][j] !== 1 && state.targetGrid[i][j] === 1) {
            newFinishedState = false;
            break;
          }
        }
      }
      let moveCount = state.moveCounter + 1;
      if (JSON.stringify(newGrid) === JSON.stringify(state.initialGrid)) {
        moveCount = 0;
      } else if (JSON.stringify(newGrid) === JSON.stringify(state.grid)) {
        moveCount = state.moveCounter;
      }
      return {
        ...state,
        grid: action.payload,
        gridRendered: true,
        allowedMovement: false,
        moveCounter: moveCount,
        finished: newFinishedState,
      };
    case "UPDATE_CURRENT_PIECE":
      return { ...state, currentPiece: action.payload, allowedMovement: false };
    case "UPDATE_MOUSE_POSITION":
      return { ...state, mousePosition: action.payload, allowedMovement: true };
    default:
      return state;
  }
};

export const GameContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <GameContext.Provider value={{ state, dispatch }}>
      {children}
    </GameContext.Provider>
  );
};
