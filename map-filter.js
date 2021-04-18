// const numbers = [3, 5, 4, 2, 7];
// const output = [];
// for (let i = 0; i < numbers.length; i++) {
//   const element = numbers[i];
//   const result = element * element;
//   output.push(result);
// }
// console.log(output);

const numbers = [3, 5, 4, 2, 7, 9, 2, 1];

// numbers.map(function (element) {
//   const result = element * element;
//   console.log(result);
// });

// const result = numbers.map((x) => x * x);
// console.log(result);

const bigger = numbers.filter((x) => x < 3);
const isThere = numbers.find((x) => x < 3);

console.log(isThere);
console.log(bigger);
