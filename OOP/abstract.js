"use strict";
class User {
    userName;
    age;
    constructor(userName, age) {
        this.userName = userName;
        this.age = age;
    }
}
class Student extends User {
    studentId;
    constructor(userName, age, studentId) {
        super(userName, age);
        this.studentId = studentId;
    }
    display() {
        console.log(`username: ${this.userName}, age: ${this.age}, id: ${this.studentId}`);
    }
}
let student1 = new Student("Saiful", 23, 1302020015);
student1.display();
