/*  */

const food = {
  calories: 250,
  vitamins: ["B12", "C", "A"],
  name: "banana",
  contains: ["nut", "gluten"],
  vegetarian: true,
  halal: true,
  expiry_date: "2023-10-18",
  category: "meat dish",
  price: 5.9,
  edible: function () {
    let today = new Date();
    // console.log(today);
    // console.log(today.toISOString());
    // console.log(today.toISOString().split['T']);
    if (today.toISOString().split("T")[0] < this.expiry_date_date) {
      return true;
    }
    return false;
  },
};

// Object constructor

/*  First I create a function to add instances to 
my object later */

function Food2(
  calories,
  vitamins = [],
  name,
  contains,
  halal,
  expiry_date,
  category,
  price,
  vegetarian = true
) {
  this.calories = calories;
  this.vitamins = vitamins;
  this.name = name;
  this.contains = contains;
  this.vegetarian = vegetarian;
  this.halal = halal;
  this.expiry_date = expiry_date;
  this.category = category;
  this.price = price;
  this.isEdible = function () {
    let today = new Date();
    if (today.toISOString().split("T")[0] < this.expiry_date_date) {
      return true;
    }
    return false;
  };
}

// Here I add a new instance in the object

const tomato = new Food2(
  333,
  ["B12", "C", "A"],
  "tomato",
  ["nut", "gluten"],
  true,
  true,
  "2023-10-18",
  "meat dish",
  3.33
);
tomato.mushy = true;
tomato.expiry_date = "2023-10-16";
console.log(tomato.isEdible());

// Print it to Console

console.table(food);
console.table(tomato);

// Create classes as templates for food types

class Food {
  constructor(
    calories,
    vitamins = [],
    name,
    contains,
    halal,
    expiry_date,
    category,
    price,
    vegetarian = true
  ) {
    this.calories = calories;
    this.vitamins = vitamins;
    this.name = name;
    this.contains = contains;
    this.vegetarian = vegetarian;
    this.halal = halal;
    this.expiry_date = expiry_date;
    this.category = category;
    this.price = price;
    // Methods are not part of a class constructor
  }
  isEdible() {
    let today = new Date();
    if (today.toISOString().split("T")[0] < this.expiry_date_date) {
      return true;
    }
    return false;
  }
}

// Create a new food item in the object

let apple = new Food(
  777,
  ["B12", "C", "A"],
  "banana",
  ["nut", "gluten"],
  true,
  true,
  "2023-10-18",
  "meat dish",
  7.77
);

console.table(apple);
console.log(apple.isEdible());

// EXPERIMENTAL CODE

// console.table(food);

// console.log(food.name);
// console.log(food["expiry_date"]);

// console.log(`Is my ${food.name} still edible?`);
