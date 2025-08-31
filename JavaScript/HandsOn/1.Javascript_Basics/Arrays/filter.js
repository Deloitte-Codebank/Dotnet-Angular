//filter method creates a new array with all elements that pass the test implemented by the provided function.
//filter(callback(element, index, array), thisArg)
// element - The current element being processed in the array.
// index - The index of the current element being processed in the array.
// array - The array filter was called upon.
// thisArg - Value to use as this when executing callback.

let users = [
    { id: 1, name: "John", active: true },
    { id: 2, name: "Jane", active: false },
    { id: 3, name: "Bob", active: true }
];

// Filter active users
let activeUsers = users.filter(user => user.active);
console.log(activeUsers);
// Output: [{ id: 1, name: "John" }, { id: 3, name: "Bob" }]