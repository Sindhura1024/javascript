//creating an empty array
let arr = [];
console.log(arr); // []
//creating array with values
let arr1 = [1, 2, 3, 4, 5];
console.log(arr1); // [1, 2, 3, 4, 5]
//creating array with different data types
let arr2 = [1, 'hello', true, null, undefined];
console.log(arr2); // [1, 'hello', true, null, undefined]
//creating array with nested arrays
let arr3 = [1, [2, 3], [4, 5]];
console.log(arr3); // [1, [2, 3], [4, 5]]
//accessing array elements
console.log(arr1[0]);
console.log(arr1[1]);
console.log(arr1[2]);
console.log(arr1[3]);
console.log(arr1[4]);
//modifying array elements
arr1[0] = 10;
arr1[1] = 20;
arr1[2] = 30;
arr1[3] = 40;
arr1[4] = 50;
console.log(arr1);
//array length
console.log(arr1.length); // 5
//array methods
//push - adds an element to the end of the array
arr1.push(60);
console.log(arr1); // [10, 20, 30, 40, 50, 60]
//pop - removes the last element of the array
arr1.pop();
console.log(arr1); // [10, 20, 30, 40, 50]
//shift - removes the first element of the array
arr1.shift();
console.log(arr1); // [20, 30, 40, 50]
//unshift - adds an element to the beginning of the array
arr1.unshift(10);
console.log(arr1);


