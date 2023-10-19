// Exercise_4 Age calculator

// Constraints:
// 1) futureYear has to be greater or equal to birthYear
// 2) both input values are integers
// 3) the length of a year should be four digits
// 4) they are positive numbers
// 5) the year should not be older than 1900
// We focus on positive integers

let birthYear = 0;
do {
  birthYear = +prompt("Please, enter your birth year to be a positive integer (e.g. 1995)");
} while (isNaN(birthYear) || birthYear<=0); 

let futureYear = 0;
do {
  futureYear = +prompt("Please, enter the desired year to be a positive integer (e.g. 1995)");
} while (isNaN(futureYear) || futureYear<=0); 
debugger;
if(futureYear >= birthYear){
  let age = futureYear - birthYear;
  console.log(`I will be either ${age-1} or ${age} in ${futureYear}`);
} else if(futureYear === birthYear){
    console.log(`I am born in ${futureYear}`);
} else {
  console.log(`I am not yet born in` + futureYear)
}