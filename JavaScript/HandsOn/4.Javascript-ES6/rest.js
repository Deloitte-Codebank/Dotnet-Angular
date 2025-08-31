//Rest: collects remaining elements
function sum(...args) {
    return args.reduce((a, b) => a + b, 0); // Rest
}
console.log(sum(1, 2, 3, 4)); // 10
console.log(sum(5, 10, 15)); // 30