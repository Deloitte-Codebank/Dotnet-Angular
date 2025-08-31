//Using map() to extract specific property values from an array of objects
//map(callback(element, index, array), thisArg)
// element - The current element being processed in the array.
// index - The index of the current element being processed in the array.
// array - The array map was called upon.
// thisArg - Value to use as this when executing callback.
let subscribers = [
    { name: "Alice", email: "alice@example.com" },
    { name: "Bob", email: "bob@example.com" }
];

let names = subscribers.map(sub => sub.name);
console.log(names); // Output: ["Alice", "Bob"]

let flowers = ["Rose", "Lilly", "Tulips"];
let result = flowers.map(item => item.length);
console.log(result);
result = flowers.map(item => item.toUpperCase());
console.log(result);
result = flowers.map(item => item.length > 5);
console.log(result);