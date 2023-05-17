const sum = (a, b) => a + b;
const squareInteger = (num) => num ** 2;

console.log(sum(2, 3));
console.log(squareInteger(5));

function sumUnknownArgs(init = 0, ...args) {
  let sum = init;
  for (let i = 0; i < args.length; i++) {
    sum += args[i];
  }
  return sum;
}

console.log(sumUnknownArgs(2, 3, 4, 5));
console.log(sumUnknownArgs());

function doubleArr(arr) {
  return arr.map((num) => num * 2);
}

console.log(doubleArr([1, 1, 2, 3, 5]));

function filterOddArr(arr) {
  return arr.filter((num) => num % 2 === 1);
}

console.log(filterOddArr([1, 2, 3, 4, 5]));
