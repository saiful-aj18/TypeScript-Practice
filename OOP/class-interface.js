class User {
    fullName;
    age;
    constructor(fullName, age) {
        this.fullName = fullName;
        this.age = age;
    }
    formatUser = () => {
        return `name: ${this.fullName}, age: ${this.age}`;
    };
}
let user = new User("Mr. Potato", 32);
console.log(user);
console.log(user.formatUser());
export {};
