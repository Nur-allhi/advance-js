const student = [
  { id: 21, name: "Montu" },
  { id: 31, name: "Bullte" },
  { id: 41, name: "Pakna" },
  { id: 51, name: "Bekub" },
];
// const names = student.map((s) => s.name);
// console.log(names);
// const ids = student.filter((s) => s.id > 30);
// console.log(ids);
const finder = student.find((s) => s.id < 40);
console.log(finder);
