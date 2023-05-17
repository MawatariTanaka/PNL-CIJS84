export function averageSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}

export function reverseSort(arr) {
  return arr.sort((a, b) => b - a);
}

export function sumPositive(arr) {
  return arr.filter((item) => item > 0).reduce((a, b) => a + b);
}

export function sumOdd(arr) {
  return arr.filter((item) => item % 2 !== 0).reduce((a, b) => a + b);
}

export function secondLargest(arr) {
  return arr.sort((a, b) => b - a)[1];
}

export function countSquareNumbers(arr) {
  return arr.filter((item) => Math.sqrt(item) % 1 === 0).length;
}
