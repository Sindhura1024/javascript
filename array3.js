//more array methods - finding elements
//includes, indexOf, lastIndexOf, find, findIndex()	Finding Elements
let arr = [1, 2, 3, 4, 5];
console.log(arr.includes(3)); // true
console.log(arr.indexOf(3)); // 2
console.log(arr.lastIndexOf(3)); // 2
//console.log(arr.find(element => element > 3)); // 4
//console.log(arr.findIndex(element => element > 3)); // 3
let myArray = [5, 12, 8, 130, 44];
let itemIndex = myArray.findIndex(function(eachItem) {
  console.log(eachItem);
  return eachItem > 10;
})
console.log(itemIndex); // 1 (index of first element > 10)
//find
let found = myArray.find(function(eachItem) {
  console.log(eachItem);
  return eachItem > 10;
})
console.log(found); // 12 (first element > 10)