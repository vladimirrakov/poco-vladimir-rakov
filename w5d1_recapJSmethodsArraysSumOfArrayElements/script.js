// function (prompt, alert), loops (while, do while), DOM manipulation (get elements of SOM, e.g. querySelectorAll etc.), conditions (ternary, switch), variables (const), different data types  (objects, array, strings incl. template literals), scope. events (click, blur, mouseover), events, class, debugging, operators for mathematical operations and comparisions, data conversion (string to number)

// Creates an array and prints in Console and on screen
const numberList = [6, 9, 1, 15, 20];
console.log(numberList);
document.write(numberList);

// Adds a value as the last element of an array
numberList.push(55);
console.log(numberList);

// Returns the last value of an array and deletes it
numberList.pop();
console.log(numberList);

// Returns elements of an array as a sting separated by commas
numberList.toString();
console.log(numberList);
document.write(numberList);

// Returns 1st element of an array and removes it
numberList.shift();
console.log(numberList);

// Adds a value as the 1st element of an array
numberList.unshift(99);
console.log(numberList);

/* Joins two arrays = adds new array [8, 9, 5] to
the end of numberList array */
let newArray = numberList.concat([8, 9, 5]);
console.log(newArray);

// Sorts an array in an ascending order
numberList.sort();
console.log(numberList);

// Sorts an array alphabetically
nameList = ["Joe", "Ben", "Tom"];
nameList.sort();
console.log(nameList);

/* A mixed array will be sorted 
first: in an ascending order
then: alphabetically */
itemList = [2, "Joe", 9, "Tom"];
itemList.sort();
console.log(itemList);

/* Removes 1 (one) element from an array
starting from the element number 2
(which is the 3rd one as the counting starts 
from 0. The removed element is assigned to 
another array */
let months = ["January", "February", "Monday", "Tuesday"];
let days = months.splice(2, 1);
console.log(days); // ["Monday"]
console.log(months); // ["January", "February", "Tuesday"]

// FUNCTIONS

// Array "numberList" was defined in line 26 as [1, 15, 20, 9, 99]
// Function returns the sum of elements of this array
function addValues(numbers) {
    let sum = 0;
    numbers.forEach(function(number){
        sum += number;
    });
    return sum;
}

console.log(addValues(numberList));