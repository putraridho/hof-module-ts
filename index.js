const { hof } = require("./dist/index");

const people = [
  { name: "John Doe", age: 30, gender: "M" },
  { name: "Jane Doe", age: 24, gender: "F" },
  { name: "Bob Doe", age: 8, gender: "M" },
  { name: "Eugene Doe", age: 83, gender: "M" },
  { name: "Karen Doe", age: 43, gender: "F" },
];

const A = hof.filter(people, (person) => person.age <= 30);

const B = hof.sort(A, (a, b) => a.age > b.age);

const C = hof.map(B, (person) => person.name);

const D = hof.reduce(C, (acc, name) => acc + ", " + name);

console.log("hof.filter() =", A);
console.log("hof.sort() =", B);
console.log("hof.map() =", C);
console.log("hof.reduce() =", D);
