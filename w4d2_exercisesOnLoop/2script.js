// Exercise Odd / even reporter
// Prompt for a number between 0 and 20.
// Check if the given number is even or odd.
// Report the result to the screen (e.g. "2 is even").

let myNumber = +prompt("Enter an integer number between 0 and 20:")

if (myNumber % 2){
  console.log(`${myNumber} is odd`)
} else {
  console.log(`${myNumber} is even`)
}