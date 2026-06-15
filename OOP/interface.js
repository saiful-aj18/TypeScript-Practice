"use strict";
let people = [];
let person1 = { id: 1, name: 'Mr. Xyz', age: 23 };
let person2 = { id: 2, name: 'Ms. Zyx', age: 21 };
people.push(person1);
people.push(person2);
const printUserInfo = (person) => {
    console.log(`userid = ${person.id}, name = ${person.name}, age = ${person.age}`);
};
people.forEach((person) => printUserInfo(person));
