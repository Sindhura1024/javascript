//push, unshift, splice	Adding Elements
//pop, shift, splice	Removing Elements
let myArray = [1, 2, 3, 4, 5];
//push - adds an element to the end of the array
myArray.push(6);
console.log(myArray);
//unshift - adds an element to the beginning of the array
myArray.unshift(0);
console.log(myArray);
//splice - adds an element at a specific index
myArray.splice(3, 0, 'a');
console.log(myArray);
//pop - removes the last element of the array
myArray.pop();
console.log(myArray);
//shift - removes the first element of the array
myArray.shift();
console.log(myArray);
//splice - removes an element at a specific index
myArray.splice(2, 1);
console.log(myArray);
//replacing an element using splice
myArray.splice(2, 1, 'b');
console.log(myArray);
