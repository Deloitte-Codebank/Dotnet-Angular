//array.splice(startIndex, deleteCount, item1, item2, ...)
//startIndex - Index at which to start changing the array.
//deleteCount - An integer indicating the number of elements to remove from startIndex.
//item1, item2, ... - The elements to add to the array, starting from startIndex. If not specified, splice() will only remove elements from the array.
//.splice()  can add, remove, or replace elements in an array.
let colors = ["red", "green", "blue"];
colors.splice(1, 1, "yellow"); // Removes "green", inserts "yellow"
console.log(colors); // ["red", "yellow", "blue"]
let todos = ["Buy milk", "Clean room", "Pay bills"];
todos.splice(2, 1, "Pay electricity bill"); // Replace task
let arr1 = [23, 45, 67, 78, 89, 90, 12]
console.log(arr1);
arr1.splice(0, 2); //removed 2 items from 0th index
console.log(arr1);
arr1.splice(0, 2, 200, 100); //removed first 2 items and replaced with 200,100
console.log(arr1);