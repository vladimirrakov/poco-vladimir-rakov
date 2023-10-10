// The code is stored here, but practiced in Terminal in browser

// Exercise 1
let userName = prompt("What's your name?");
// Use ' ' quotes to place the text in
let greeting = `Hello, ${userName}! Welcome.`;
console.log(greeting);

// Exercise 2 was decided to be skipped

// Exercise_3 Option 1
let author = prompt("Enter your favorite author");
let quote = prompt("Enter your favorite quote from that author.");
console.log(author + ' says, "' + quote + '" .');

// Exercise_3 Option 2
let quote = prompt("Please, enter a quote");
let author = prompt("Please enter the author of the quote");
console.log(`${author} says, " ${quote} "`);

// Exercise_6 What is loop
// initialization
let number = 1;
do {
    if(number % 5 === 0 && number % 7 === 0){
        console.log("PowerCoders");
    } else if (number % 5 === 0){
        console.log("Power");
    } else if (number % 7 === 0){
        console.log("Coders");
    } else {
        console.log(number);
    }
    // increment number to end loop some time
    // number = number + 1;
    number++; // iterator
} while(number <= 100) // condition

console.log("The end of the loop");