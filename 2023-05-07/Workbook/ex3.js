function countMaxAppearanceElement(arr) {
  let maxCount = 0;
  let maxElement = "";

  for (let i = 0; i < arr.length; i++) {
    let count = 1;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        count++;
      }
    }

    if (count > maxCount) {
      maxCount = count;
      maxElement = arr[i];
    }
  }

  return { value: maxElement, count: maxCount };
}

console.log(countMaxAppearanceElement([1, 2, 3, 5, 6, 4, 2, 1, 6, 3, 5, 3]));
console.log(countMaxAppearanceElement(["a", "b", "c", "c", "d"]));
