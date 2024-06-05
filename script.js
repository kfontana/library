const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  /*this.info = function () {
    return (
      this.title + " by " + this.author + ", " + this.pages + ", " + this.read
    );*/
  };
}

function addBookToLibrary() {
  const title = [The Hobbit];
  const author = prompt("Author");
  const pages = prompt("Pages");
  const read = prompt("Read");
  myLibrary.push(new Book(title, author, pages, read));
}

function showBooks() {
  const bookshelf = document.getElementById("bookshelf");
  myLibrary.forEach((object) => {
    const div = document.createElement("div");
    for (let key in object) {
      const para = document.createElement("p");
      para.textContent = object[key];
      bookshelf.appendChild(para);
      bookshelf.appendChild(div);
    }
  });
}

addBookToLibrary();

showBooks();

/*
for (let object in myLibrary) {
  for (let key in myLibrary[object]) {
    const div = document.createElement("div");
    div.textContent = myLibrary[object][key];
    bookshelf.appendChild(div);
  }
}
*/

/*const theHobbit = new Book(
  "The Hobbit",
  "J.R.R Tolkien",
  "295 pages",
  "not read yet"
);

console.log(theHobbit.info());*/
