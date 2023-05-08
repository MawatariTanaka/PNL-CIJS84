const arr = [1, 2, 3];
console.log(arr);
console.log(...arr);
const [a, b, c] = arr;
console.log(a, b, c);
const { x, y, ...rest } = { x: 1, y: 2, a: 3, b: 4 };
console.log(x, y, rest);

function sum_parameter(...args) {
  return args.reduce((a, b) => a + b, 0);
}
console.log(sum_parameter(1, 2, 3, 4, 5));
