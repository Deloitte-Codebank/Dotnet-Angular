let numbers = [12, 23, 34, 45, 56, 67, 78];
//access all array elements
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}
//for..of es6 syntax
for (let i of numbers) {
    console.log(i);
}