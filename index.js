const people = [
  { name: "John Doe", age: 30, gender: "M" },
  { name: "Jane Doe", age: 24, gender: "F" },
  { name: "Bob Doe", age: 8, gender: "M" },
  { name: "Eugene Doe", age: 83, gender: "M" },
  { name: "Karen Doe", age: 43, gender: "F" },
];

function my_map(array) {
  const returnedArray = [];
  for (let i = 0; i < array.length; i++) {
    const person = array[i];
    returnedArray.push(person.name);
  }
  return returnedArray;
}

const A = my_map(people);
const B = people.map((person) => person.name);
