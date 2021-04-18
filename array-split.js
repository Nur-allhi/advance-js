const nums = [10, 12, 3, 4, 56, 3, 7, 8, 2, 9, 87];
const part = nums.slice(3, 5);
const removed = nums.splice(1, 3, 999);
// console.log(part);
// console.log(removed);
// console.log(nums);

const together = nums.join("num");
console.log(together);
