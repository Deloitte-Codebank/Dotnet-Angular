// The reduce() method executes a reducer function on each 
// element of the array, resulting in a single output value.
//reduce(callback(accumulator, currentValue), initialValue)
// accumulator - accumulates the callback's return values
// currentValue - the current element being processed
// initialValue - value to use as the first argument to the first call of the callback
let arr = [1, 2, 3, 4, 5];
let result = arr.reduce((sum, current) => sum + current, 0)
console.log(result); //sum of array elements
let cart = [
    { item: "Book", price: 20 },
    { item: "Pen", price: 5 },
    { item: "Notebook", price: 15 }
];
// Using reduce to sum up prices
// Calculate total price
let total = cart.reduce((sum, product) => sum + product.price, 0);
console.log("Total:", total); // Output: Total: 40

let pageViews = [120, 300, 250, 400];

// Find average views
let average = pageViews.reduce((sum, views) => sum + views, 0) / pageViews.length;
console.log("Average Views:", average); // Output: 267.5