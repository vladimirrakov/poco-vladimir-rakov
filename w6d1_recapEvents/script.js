const imgTags = document.querySelectorAll("img");
// I take each image and set an event listener for it for an error event
imgTags.forEach(img => {
    // img.addEventListener("error", handleErrorEvent);
    img.addEventListener("error", () => {
        console.log(e.currentTarget);
        img.src = "default-avatar.png";
    });
    img.addEventListener("mouseover", handleMouseOver());
});

const pTag = document.querySelector("p");
pTag.addEventListener("mouseover", () => {
    alert("Hover over p-Tag");
    const nestedImgTag = pTag.querySelector("img");
    nestedImgTag.removeEventListener("mouseover", handleMouseOver, true);
});

const formTag = document.querySelector("form");
formTag.addEventListener("submit", handleFormSubmission);

function handleMouseOver(
    alert("Hover over img-Tag");
);

// event = e, evt (shortcuts)
function handleFormSubmission(event) {
    event.preventDefault();
    const inputValue = document.querySelector("#fname").value;
    console.log(`Welcome and good welcome, ${inputValue}`);
    console.table(event);
};
