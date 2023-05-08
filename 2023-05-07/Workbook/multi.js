const arr = [1, 2, 3, 4, 5];
const total = arr
  .filter((item) => item % 2 === 0)
  .reduce((value, item) => value + item, 10);
console.log(total);

const date = {
  d: 1,
  m: 2,
  y: 3,
};

const { d: day, m, y: year = 2023 } = date;
console.log(day);
