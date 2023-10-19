//The greater number of 5 and 10 is 10.
//The smaller number of 5 and 10 is 5.

let number1 = 5;
let number2 = 10;

if (number1 > number2) {
  console.log(`The greater number of ${number1} and ${number2} is ${number1}.`);
} else if (number2 > number1) {
  console.log(`The greater number of ${number1} and ${number2} is ${number2}.`);
} else {
  console.log(`Both numbers ${number1} and ${number2} are equal.`);
}

if (number1 < number2) {
  console.log(`The smaller number of ${number1} and ${number2} is ${number1}.`);
} else if (number2 < number1) {
  console.log(`The smaller number of ${number1} and ${number2} is ${number2}.`);
} else {
  console.log(`Both numbers ${number1} and ${number2} are equal.`);
}

// Hello World in four languages

function helloWorld(languageCode) {
  switch (languageCode) {
    case "es":
      return "Hola, Mundo";
    case "de":
      return "Hallo, Welt";
    case "en":
    default:
      return "Hello, World";
  }
}

console.log(helloWorld("es"));
console.log(helloWorld("de"));
console.log(helloWorld("en"));
console.log(helloWorld("fr"));