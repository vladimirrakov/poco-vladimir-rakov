// Just create a function and ad a condition to test when it is called

function q1() {
  let a = -3;
  if (a > 0 && a <= 3) {
    console.log(`a1 =  ${a}`);
  } else if (a > 3) {
    console.log(`a2 =  ${a}`);
  } else {
    console.log(`a3 =  ${a}`);
  }
}

q1();

// Call a function with a value of the variable

function greet(name) {
  console.log("Hello, " + name + "!");
}

// Calling the function with an argument
greet("Alice");

// Constructor invocation

function Person(name) {
  this.name = name;
}

var lady = new Person("Jennifer");
console.log(lady.name); // Output: Jennifer

// The function is called as a method in the object (object method)

var worker = {
  name: "Jahnathan",
  age: 30,
  message: function () {
    console.log("Hello, " + this.name + "!");
  },
};

worker.message(); // Output: Hello, Jahnathan!

// The function is called with an argument

function mansName(argument) {
  console.log("Hello, " + argument + "!");
}

mansName("Veronica");

// #1 function is called withOUT an argument

function mansNamez() {
  console.log("Hello World!");
}

// Function #1 invocation
mansNamez();

// #2 function is called withOUT an argument

function myFunction() {
  console.log("Gruzzi!");
}

// Function #2 invocation
myFunction();

/* Calling a function in a constructor of objects
An array with two initial objects is created.
The third object is added by a user using prompts.
The final array with three objects is displayed. */

function Fruit(fruitName, color, quantity) {
  this.fruitName = fruitName;
  this.color = color;
  this.quantity = quantity;
}

let myFruits = [
  new Fruit("apple", "green", 1),
  new Fruit("banana", "yellow", 2),
];

var userInputFruitName = prompt("Enter fruit name");
var userInputFruitColor = prompt("Enter fruit color");
var userInputFruitQuantity = prompt("Enter fruit quantity");

myFruits.push(
  new Fruit(userInputFruitName, userInputFruitColor, userInputFruitQuantity)
);

console.log(myFruits);