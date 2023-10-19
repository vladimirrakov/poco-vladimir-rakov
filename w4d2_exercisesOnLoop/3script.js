// EXERCISE: Odd / even reporter 2.0
// Write a for loop that will iterate from 0 to 20.
// For each iteration, it will check if the current number is even or odd.
// Report the result to the screen (e.g. "2 is even").

let myNumber = 12;

while (myNumber < 21) {
  if (myNumber % 2) {
    console.log(`${myNumber} is odd`);
  } else {
    console.log(`${myNumber} is even`);
  }

  myNumber++;
}

// ALTERNATIVE SOLUTION
// for (let myNumber = 0; myNumber <= 10; myNumber++) {
//   if (myNumber % 2) {
//     console.log(`${myNumber} is odd`);
//   } else {
//     console.log(`${myNumber} is even`);
//   }
// }
