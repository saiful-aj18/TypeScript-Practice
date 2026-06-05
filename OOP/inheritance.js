"use strict";
class Users {
    userName;
    age;
    constructor(userName, age) {
        this.userName = userName;
        this.age = age;
    }
    display() {
        console.log(`username: ${this.userName}, age: ${this.age}`);
    }
}
class Student extends Users {
    studentId;
    constructor(userName, age, studentId) {
        super(userName, age);
        this.studentId = studentId;
    }
    display() {
        console.log(`username: ${this.userName}, age: ${this.age}, id: ${this.studentId}`);
    }
}
let student1 = new Student('kayak', 31, 1302020015);
student1.display();
let users1 = new Users('Saiful Islam', 25);
users1.display();
// let users2 = new Users("Rabeya Islam", 31);
// users2.display();
