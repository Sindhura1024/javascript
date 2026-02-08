//iterating through array using different types of loop
let arr = [1, 2, 3, 4, 5];
//for loop
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
//for...of loop
for (let element of arr) {
    console.log(element);
}
//forEach method
arr.forEach(function(element) {
    console.log(element);
});
//forEach with arrow function
arr.forEach(element => console.log(element));
//for...in loop (not recommended for arrays)
for (let index in arr) {
    console.log(arr[index]);
}
//while loop
let i = 0;
while (i < arr.length) {
    console.log(arr[i]);
    i++;
}
//do...while loop
let j = 0;
do {
    console.log(arr[j]);
    j++;
} while (j < arr.length);
