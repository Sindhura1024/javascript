//concat, slice	Combining & Slicing Arrays
//join	Joining Array Elements
//sort	Sorting Array Elements
//spread operator
let myArray = [3, 1, 4, 1, 5];
//concat - combines two or more arrays
let newArray = myArray.concat([9, 2, 6]);
console.log(newArray);
//concat with multiple arrays
let anotherArray = newArray.concat([5, 3], [5, 8]);
console.log(anotherArray);
//concat using spread operator
let spreadArray = [...myArray, 9, 2, 6];
console.log(spreadArray);
//slice - returns a shallow copy of a portion of an array
let slicedArray = myArray.slice(1, 4);
console.log(slicedArray);
//slice with negative indices
let negativeSlice = myArray.slice(-3, -1);
console.log(negativeSlice);
//join - joins all elements of an array into a string
let joinedString = myArray.join('-');
console.log(joinedString);
//sort - sorts the elements of an array
myArray.sort();
console.log(myArray);
//sort with a compare function
myArray.sort((a, b) => a - b);
console.log(myArray);
myArray.sort((a, b) => b - a);
console.log(myArray);   
//sort with strings
let stringArray = ['banana', 'apple', 'cherry'];
stringArray.sort();
console.log(stringArray);
//sort with case sensitivity
let mixedCaseArray = ['Banana', 'apple', 'Cherry'];
mixedCaseArray.sort();
console.log(mixedCaseArray);


//spread operator - creates a new array by spreading the elements of an existing array
let originalArray = [1, 2, 3];
let copiedArray = [...originalArray];
console.log(copiedArray);
//spread operator with additional elements
let extendedArray = [...originalArray, 4, 5];
console.log(extendedArray);
//spread operator with nested arrays
let nestedArray = [1, [2, 3], 4];
let copiedNestedArray = [...nestedArray];
console.log(copiedNestedArray);

