/**
 * 1. Loading the user data
 * 2. Find inputs in DOM
 * 3. Listening to event "submit"
 * 4. Get input values
 * 5. Loop through user data
 * 6. Check if input values are found in user data => show welcome message and we are done
 * 7. If values are not found => show an error message and let them try again
 * 8. Refactor your code
 */

const h1Tag = document.querySelector("h1");
const formTag = document.querySelector("form");
const emailInput = document.querySelector("input[type=email]");
const pwdInput = document.querySelector("#pwd");

formTag.addEventListener("submit", async e => {
    e.preventDefault();
    // The database of users is taken from a dummy JSON file 
    // A real life solution would not use open for public access file with user data, e.g passwords
    const response = await fetch("https://dummyjson.com/users");
    const data = await response.json();
    const users = data.users;

    let emailValue = emailInput.value;
    let pwdValue = pwdInput.value;
    clearMessages();

    // The user to be authenticated: hbingley1@plala.or.jp, CQutx25i8r
    for(let user of users){
        if(user.email.toLowerCase() === emailValue.toLowerCase() && user.password === pwdValue){
            showWelcomeMessage(user.firstName);
            return;
        }              
    }

    showErrorMessage();
});

function showWelcomeMessage(fname){
    h1Tag.innerText = `Welcome, ${fname}`;
    formTag.style.display = "none";
}

function clearMessages(){
    const pTags = document.querySelectorAll("p");
    pTags.forEach(pTag => {
        pTag.remove();
    });
}

function showErrorMessage(){
    const pTag = document.createElement("p");
    pTag.innerText = "Login was not found. Please try again.";
    h1Tag.insertAdjacentElement("afterend", pTag);
}