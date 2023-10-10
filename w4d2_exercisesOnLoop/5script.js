// EXERCISE: Multiplication tables 2.0
// Write a for loop that will iterate from 0 to 10.
// For each iteration of the for loop, it will multiply the number by 9.
// Log the result (e.g. "2 * 9 = 18").

let myNumber = 0;

while (myNumber < 11) {
  let myResult = myNumber * 9;
  console.log(`${myNumber} * 9 = ${myResult}`);

  myNumber++;
}

// ALTERNATIVE SOLUTION
// for (let myNumber = 0; myNumber <= 10; myNumber++) {
//   let myResult = myNumber * 9;
//   console.log(`${myNumber} * 9 = ${myResult}`);
// }