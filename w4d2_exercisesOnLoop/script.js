// Exercise - Translate days of the week
// For each single day of the week log the translated output
// e.g. if it is Monday, log "Montag" and so on
// Choose any language you like
// Try different ways: is it possible with if or switch?

// take each dayName in English one by one
// print its German translation
// finish when all week days are translated and printed

let inputOfUser = prompt(
  "Write a name of a week day in English to be translated in German starting the name with a capital letter:"
);

let dayName = inputOfUser.toLowerCase();

switch (dayName) {
  case "monday":
    console.log("Montag");
    break;
  case "tuesday":
    console.log("Dienstag");
    break;
  case "wednesday":
    console.log("Mittwoch");
    break;
  case "thursday":
    console.log("Donnerstag");
    break;
  case "friday":
    console.log("Feitag");
    break;
  case "saturday":
    console.log("Samstag");
    break;
  case "sunday":
    console.log("Sonntag");
    break;
  default:
    console.log("Enter a valid week day name");
    break;
}