function Square(n) {
    let result = n * n;
    return result;
}
function Greet(name) {
    let message = 'Hello ' + name;
    return message;
}
function add(a, b) {
    return a + b;
}


console.log(result); // Output: 8
function IsEven(number) {
    //let isEven=number%2==0?true:false;
    //return isEven;
    if (number % 2 == 0)
        return true;
    else
        return false;

}
let result = Square(10);
console.log(result);
result = add(5, 3);
console.log(result);
result = Greet('Dhoni');
console.log(result);
console.log(IsEven(110) == true ? 'Even' : 'Odd');
function toCelsius(fahrenheit) {
    return (5 / 9) * (fahrenheit - 32);
}

console.log(toCelsius(77)); // Output: 25
