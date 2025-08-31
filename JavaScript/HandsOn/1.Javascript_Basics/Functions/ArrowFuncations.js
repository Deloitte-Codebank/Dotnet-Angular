//arrow functions
//Arrow functions are a more concise way to write functions, 
// introduced in ES6
// let func=(arg1,arg2,....)=>expression
let Hello = () => 'Hello World'
let result = Hello();
console.log(result);
const multiply = (x, y) => x * y;
console.log(multiply(4, 5)); // Output: 20
let Greet = (n) => {
  let message = 'Hello ' + n;
  return message;
}
console.log(Greet('Sachin'));

let sum = (a, b) => a + b;
console.log(sum(2, 5));
let age = 18;
let message = age >= 18 ? () => 'you can vote' : () => 'try next time'
console.log(message());
function f(f1, f2) {
  //  console.log( f1()+' '+f2());
  return f1() + " " + f2();
}
result = f(() => 'Hello ', () => 'Tina')
console.log(result);
