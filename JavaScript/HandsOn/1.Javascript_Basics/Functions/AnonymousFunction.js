//Anonymous Function Example
// A function without a name is called an anonymous function.
// Anonymous functions are often used as arguments to other functions or assigned to variables.
const sayHi = function () {
    console.log("Hi there!");
};

sayHi(); // Output: Hi there!
const sayHello = function (name) {
    return "Hello, " + name;
};

console.log(sayHello("Santosh")); // Output: Hello, Santosh
const square = function (x) {
    return x * x;
};

console.log(square(5)); // Output: 25
//💡 Why use it?
// Can be anonymous
// Useful for passing functions as arguments
// Enables closures and IIFE (Immediately Invoked Function Expressions)