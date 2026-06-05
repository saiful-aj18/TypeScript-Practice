"use strict";
class User {
    // properties, methods, constructor
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
let user1 = new User('Saiful Islam', 24);
user1.display();
let user2 = new User('Raisul Islam', 20);
user2.display();
let user3 = new User('XYZZ ABC', 28);
user3.display();
