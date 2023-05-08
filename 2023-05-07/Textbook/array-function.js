const arr = [1, 2, 3];
const double_arr = arr.map((x) => x * 2);
console.log(double_arr);
const odd_only_arr = arr.filter((x) => x % 2 === 1);
console.log(odd_only_arr);
const reduce_sum = arr.reduce((a, b) => a + b, 0);
console.log(reduce_sum);
const reduce_sum_start_1 = arr.reduce((a, b) => a + b, 1);
console.log(reduce_sum_start_1);
