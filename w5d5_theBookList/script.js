var books = [
  {
    title: "The Design of EveryDay Things",
    author: "Don Norman",
    alreadyRead: false,
    img: "https://blackwells.co.uk/jacket/500x500/9780465050659.webp",
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true,
    img: "https://images.thalia.media/00/-/d2bd20cc4e1b4835ad6eee81b9ab2963/the-most-human-human-taschenbuch-brian-christian-englisch.jpeg",
  },
];

let rootList = document.createElement("ul");

document.body.appendChild(rootList);

books.forEach((item) => {
  let HTMLresult = document.createElement("li");

  const resultTitle = document.createElement("p");
  resultTitle.innerText = `Title of the book: ${item.title}`;
  const resultAuthor = document.createElement("p");
  resultAuthor.innerText = `Title of the book: ${item.author}`;
  const resultImg = document.createElement("img");
  resultImg.src = item.img;

  HTMLresult.appendChild(resultImg);
  HTMLresult.appendChild(resultTitle);
  HTMLresult.appendChild(resultAuthor);

  HTMLresult.classList.add(`${item.alreadyRead ? "read" : "notRead"}`);

  rootList.appendChild(HTMLresult);
});