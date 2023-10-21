// function declaration
function sayGoodMorning(name) {
  //do something
  console.log(`Good Morning ${name}`);
  //return true
}
// call the function with a string value "Marwa"
sayGoodMorning("Marwa");
// call the function with a number value "5"
sayGoodMorning(5);

// joins values of two arrays in one thanks to ES6 Syntax
const names1 = ["Joe", "Tom", "Sam"];
const names2 = ["Samuel", "Johnathan", "Jennifer"];
const allNames = [...names1, ...names2];
console.log(allNames);

// declare a variable, assign a value, use it in the function
let theWinner = "Stefan";
sayGoodMorning(theWinner);

// declare an arrow function "sayHello"
const sayHello = (name) => {
  console.log(`Hello ${name}`);
};
// call this function
sayHello("Sema");

// Methods and Objects

const book1 = {
  title: "Harry Potter #1",
  author: "J.K. Rowling",
  series: "Harry Potter 3",
  published: 2002,
  getBookInfo: function () {
    console.log(
      `"${this.title}" was written by ${this.author} and published in ${this.published}`
    );
  },
};

book1.getBookInfo();

const book2 = {
  title: "Harry Potter #2",
  author: "J.K. Rowling",
  series: "Harry Potter 3",
  published: 2002,
  getBookInfo() {
    console.log(
      `"${this.title}" was written by ${this.author} and published in ${this.published}`
    );
  },
  getSeries() {
    console.log(`"${this.title}" is of the series ${this.series}.`);
  },
};

book2.getBookInfo();

// how to call functions

(param) => {
  console.log(param);
};

() => {
  console.log("Hello");
};

(a, b) => {
  console.log(a + b);
};

const sum = (a, b) => a + b;

const sumFunction = function (a, b) {
  return a + b;
};

// example of using forEach loop with an arrow function for an array

// example with normal function
var fruits = ["apple", "banana", "orange"];

fruits.forEach(function (element, index) {
  console.log("Index: " + index + ", Element: " + element);
});

// example with arrow function
const numbers = [1, 2, 3, 4, 5];

numbers.forEach((element, index) => {
  console.log(`Index: ${index}, Element: ${element}`);
});

/* Two types of functions:
NORMAL FUNCTION
    function (element, index) {}
ARROW FUNCTION
    (element, index) => {}
*/

/*
IMPORTANT: you cannot directly use the forEach loop with an object in JavaScript. The forEach method is specifically designed for iterating over the elements of an array.

However, if you want to iterate over the properties of an object, you can use a for...in loop or Object.entries() method instead.

Here's an example of using a "for...in" loop to iterate over the properties of an object:
*/

const person = {
    name: 'John',
    age: 30,
    occupation: 'Developer'
  };
  
  for (let key in person) {
    if (person.hasOwnProperty(key)) {
      console.log(`Key: ${key}, Value: ${person[key]}`);
    }
  }

  /*
  Alternatively, you can use the Object.entries() method to get an array of key-value pairs from the object, and then use a forEach loop on that array:
  */

  const persona = {
    name: 'Chuck',
    age: 99,
    occupation: 'Old man'
  };
  
  Object.entries(persona).forEach(([key, value]) => {
    console.log(`Key: ${key}, Value: ${value}`);
  });