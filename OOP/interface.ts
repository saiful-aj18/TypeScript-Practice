// with interface
interface Person {
  id: number;
  name: string;
  age: number;
}

let people: Person[] = [];

let person1: Person = { id: 1, name: 'Mr. Xyz', age: 23 };
let person2: Person = { id: 2, name: 'Ms. Zyx', age: 21 };

people.push(person1);
people.push(person2);

const printUserInfo = (person: Person) => {
  console.log(`userid = ${person.id}, name = ${person.name}, age = ${person.age}`);
};

people.forEach((person) => printUserInfo(person));