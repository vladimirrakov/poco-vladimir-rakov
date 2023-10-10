// Exercise_5 What is loop

let number = 1;

while(number <= 100){
    if(number % 5 === 0 && number % 7 === 0){
        console.log("PowerCoders");
    } else if (number % 5 === 0){
        console.log("Power");
    } else if (number % 7 === 0){
        console.log("Coders");
    } else {
        console.log(number);
    }
    // increment number to end loop some time
    // number = number + 1;
    number++;
}

console.log("The end of the loop");