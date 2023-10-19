const currentYear = new Date().getFullYear();

let currentAge = +prompt("What is your age?");
let retirementAge = +prompt("At what age would you like to retire?");

if (retirementAge <= currentAge) {
  alert("You can already retire.");
} else {
  const yearsUntilRetirement = retirementAge - currentAge;
  const retirementYear = currentYear + yearsUntilRetirement;

  alert(`You have ${yearsUntilRetirement} years left until you can retire.`);
  alert(`It's ${currentYear}, so you can retire in ${retirementYear}.`);
}