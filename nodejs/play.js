const person = {
  name: "CBJ",
  age: 29,
  greet() {
    console.log("Hi. I am " + this.name);
  },
};

const people = {
  name: "ABC",
};

const printName = ({ age }) => {
  console.log(age);
};

printName(person);

const { name, age } = person;

const hobbies = ["Soccer", "Cooking"];
const [a, b] = hobbies;
console.log(a, b);

// for (let hobby of hobbies) {
//   console.log(hobby);
// }

// console.log(hobbies.map((hobby) => "Hobby is " + hobby));
// console.log(hobbies);
