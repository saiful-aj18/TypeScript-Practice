"use strict";
// Here we will try public, private, protected, readonly
// setter and getter
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
class Students extends Users {
    studentId;
    constructor(userName, age, studentId) {
        super(userName, age);
        this.studentId = studentId;
    }
    display() {
        console.log(`username: ${this.userName}, age: ${this.age}, id: ${this.studentId}`);
    }
    setStudentId(studentId) {
        this.studentId = studentId;
    }
    getStudentId() {
        return this.studentId;
    }
}
let students1 = new Students("Saiful", 23, 1243020015);
students1.setStudentId(1234020017);
console.log(students1.getStudentId());
// students1.display();
let user1 = new Users("nobi", 33);
console.log(user1.userName);
// user1.display();
