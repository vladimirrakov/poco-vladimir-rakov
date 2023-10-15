//constraints:
//...

let birthYear;
console.log(birthYear); //undefined
birthYear = prompt("Please, enter your year of birth");
console.log(birthYear); //string
birthYear = Number(birthYear); //number

//birthYear should not be negative or 0
//birthYear should be not a text (NaN)
while (birthYear < 1 || isNaN(birthYear)) {
  alert("The input is not correct. Please, try again");
  birthYear = prompt("Please, enter your year of birth");
}

let targetYear;
//+ sign does upon prompt the same as number function in line 5
targetYear = +prompt("Pleaser, enter the targeted year"); //number

//targetYear should not be negative or 0
//targetYear should be not a text (NaN)
while (targetYear < 1 || isNaN(targetYear)) {
  alert("The input is not correct. Please, try again");
  targetYear = prompt("Please, enter the targeted year");
}

let age;
//targetYear should be >= birthYear
if (targetYear >= birthYear) {
  age = targetYear - birthYear;
} else {
  alert(`I was not yet born in ${targetYear}`);
}

alert(`You age in ${targetYear} will be ${age} or ${age - 1}`);