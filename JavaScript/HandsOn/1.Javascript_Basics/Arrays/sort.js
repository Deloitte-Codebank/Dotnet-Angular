//sort() sorts elements as strings by default
//sort(compareFunction)
// compareFunction(a, b) return <0 a comes before b
// return >0 b comes before a
// return 0 no change
let scores = [100, 25, 300, 75];
scores.sort(); // Incorrect: [100, 25, 300, 75]
scores.sort((a, b) => a - b); // Correct: [25, 75, 100, 300]
let products = [
    { name: "Laptop", price: 900 },
    { name: "Phone", price: 600 },
    { name: "Tablet", price: 300 }
];

products.sort((a, b) => a.price - b.price);