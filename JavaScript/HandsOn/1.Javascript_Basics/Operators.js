//Operators
//Arithmetic + - * / %
let a = 10;
let b = 3;

console.log(a + b); // 13
console.log(a - b); // 7
console.log(a * b); // 30
console.log(a / b); // 3.333...
console.log(a % b); // 1 (remainder)
console.log(a ** b);
//Assignment = += -= *= /= %= **=
let x = 5;

x += 2; // same as x = x + 2
console.log(x); // 7

x *= 3; // same as x = x * 3
console.log(x); // 21
//Comparison == === != !== > < >= <=
let age = 18;

console.log(age == "18");   // true (loose equality)
console.log(age === "18");  // false (strict equality)
console.log(age != 20);     // true
console.log(age < 21);      // true
console.log(age >= 18);     // true
//Logical && || !
let isLoggedIn = true;
let isAdmin = false;

console.log(isLoggedIn && isAdmin); // false
console.log(isLoggedIn || isAdmin); // true
console.log(!isLoggedIn);           // false
//Ternary operator
let canVote = (age >= 18) ? "Yes" : "No";
console.log(`Can Vote: ${canVote}`);
//string operators
let firstName = "Santosh";
let lastName = "Kumar";

let fullName = firstName + " " + lastName;
console.log(fullName); // Santosh Kumar
//Type checking operator
let value = 42;

console.log(typeof value); // "number"

let items = [1, 2, 3];
console.log(items instanceof Array); // true