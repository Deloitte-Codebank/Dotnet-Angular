//Callback Function Example
// A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.
// 💡 Common Use Cases:
// Asynchronous operations (e.g., setTimeout, API calls)
// Array methods like .map(), .filter(), .forEach()
function greetUser(name, callback) {
    console.log("Hello, " + name);
    callback();
}

function sayBye() {
    console.log("Goodbye!");
}

greetUser("Santosh", sayBye);
// Output:
// Hello, Santosh
// Goodbye!
function delayedMessage() {
    console.log("This message is delayed by 2 seconds.");
}
//setTimeout(function, delayInMilliseconds)
setTimeout(delayedMessage, 2000); // 2000 milliseconds = 2 seconds
function fetchData(url, callback) {
    setTimeout(() => {
        const data = { name: "Santosh", age: 30 };
        callback(data);
    }, 1000);
}
function displayData(data) {
    console.log("User Data:", data);
}
fetchData("https://api.example.com/user", displayData);