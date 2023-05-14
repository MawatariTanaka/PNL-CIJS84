const sum = (a, b) => a + b;
const squareInteger = (num) => num ** 2;

console.log(sum(2, 3));
console.log(squareInteger(5));

function sumUnknownArgs(...args) {
  let sum = 0;
  for (let i = 0; i < args.length; i++) {
    sum += args[i];
  }
  return sum;
}

console.log(sumUnknownArgs(2, 3, 4, 5));
