/*
let userName = "Alice";
let age = 30;
console.log(userName);
console.log(age);

// index.js
// without typescript
function addNumbers(num1, num2) {
  console.log(num1 + num2);
}

addNumbers(20, 30);
addNumbers(20, '30');

// with typescript
// without typescript
function addNumberss(num1: number, num2: number) {
  console.log(num1 + num2);
}

addNumberss(20, 30); // no error
addNumberss(20); // error
addNumberss(20, '30'); // error

// without typescript
let x;
x = 20; // correct
x = 'anisul'; // correct
x = true; // correct
x = [10, 20]; // correct

// with typescript
let num: number;
num = 20; // correct
num = '20'; // Not correct
num = true; // Not correct
num = [10, 20]; // Not correct
*/

let userId: number = 1073;
let decimal: number = 6;
let hex: number = 0xf00d;       // Hexadecimal
let binary: number = 0b1010;     // Binary
let octal: number = 0o744;      // Octal
let float: number = 3.14;      // Floating point
let negative: string = -0.123; // Negative number

let first: string = "Saiful";
let last: string = " Islam";
let isActive: boolean = true;

let fullName: string = first.concat(last);

console.log(`User ID: ${userId} , Full Name: ${fullName}, Is Active: ${isActive}`);

//void type
function logMessage(message: string): void {
  console.log(message);
}
logMessage("Hello, TypeScript!");


