// EXERCISE: Multiplication tables
// Prompt for a number between 0 and 10.
// Multiply the given number by 9.
// Log the result (e.g. "2 * 9 = 18").

let myNumber = prompt("Enter an integer number between 0 and 10:")
while (myNumber >= 0 && myNumber <= 10){
    let myResult = myNumber * 9;
    console.log(`${myNumber} * 9 = ${myResult}`);
    break;
}