let numbers = [12, 3, 45, 56, 78];
numbers.push(56); //item added at last
numbers.unshift(10); //item added at begining
console.log(numbers);
numbers.pop(); //last item removed
console.log(numbers);
numbers.shift(); //item remove from begining
console.log(numbers);

//slice
//slice(startIndex,endIndex) endIndex not included
//returns a new array, does not modify the original array
let arr1 = [23, 45, 67, 78, 89, 90, 12]
let arr2 = arr1.slice(1, 4);
console.log(arr2);

//concat
let arr = [23, 45, 67, 78, 89, 90, 12]
arr = arr.concat(100, 300)
console.log(arr);
console.log(arr1.indexOf(78))
console.log(arr1.lastIndexOf(78))


let str = 'Rose,Lilly,Jasmine,Tulip';
let ar = str.split(',')
console.log(ar)
//join
let a1 = ["Rose", "Lilly", "Jasmine"]
let s1 = a1.join(':');
console.log(s1);
console.log([1, 2, 3, 4, 11, 5].sort())