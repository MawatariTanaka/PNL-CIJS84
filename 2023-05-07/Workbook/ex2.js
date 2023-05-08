function removeDuplicateElement(arr) {
  return [...new Set(arr)];
}

function removeDuplicateElement(arr) {
  return arr.filter((element, index) => arr.indexOf(element) === index);
}

console.log(removeDuplicateElement(["a", "b", "c", "c", "d"]));

console.log(removeDuplicateElement([1, 2, 3, 5, 4, 2, 6, 4]));
