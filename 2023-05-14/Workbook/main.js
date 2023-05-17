import * as helper from "./modules/helper.js";

// Ex 1
function intersection(arr1, arr2) {
  return arr1.filter((item) => arr2.includes(item));
}
console.log(intersection([1, 2, 4, 5, 6], [1, 6, 8, 9, 0]));

// Ex 2
function add5(arr) {
  return arr.map((item) => item + 5);
}
console.log(add5([1, 54, 6, 7]));

// Ex 3
const ignoreArr = [1, 8, 10, 96, 7];
function removeIgnore(arr1, arr2) {
  let arr = [...arr1, ...arr2];
  return arr.filter((item) => !ignoreArr.includes(item));
}

console.log(removeIgnore([1, 2, 4, 5, 6, 7], [3, 5, 675, 8, 96]));

// Ex 4
function convertPlayersToObject(players) {
  const obj = {};
  for (let i = 0; i < players.length; i++) {
    const key = `l${i + 1}`;
    obj[key] = players[i];
  }
  return obj;
}

let players = [
  { id: 11, name: "Messi", age: 33 },
  { id: 12, name: "Ronaldo", age: 34 },
  { id: 13, name: "Young", age: 35 },
  { id: 14, name: "Mane", age: 21 },
  { id: 15, name: "Salah", age: 24 },
];

console.log(convertPlayersToObject(players));

// Ex 5
let A = [1, 5, 3, 8, 10];
console.log(helper.averageSum(A));
console.log(helper.reverseSort(A));
console.log(helper.sumPositive(A));
console.log(helper.sumOdd(A));
console.log(helper.secondLargest(A));
console.log(helper.countSquareNumbers(A));
