class User {
  // properties, methods, constructor
  userName: string;
  age: number;

  constructor(userName: string, age: number) {
    this.userName = userName;
    this.age = age;
  }

  display(): void {
    console.log(`username: ${this.userName}, age: ${this.age}`);
  }
}

let user1 = new User('Saiful Islam', 24);
user1.display();

let user2 = new User('Raisul Islam', 20);
user2.display();

let user3 = new User('XYZZ ABC', 28);
user3.display();