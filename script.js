const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    return (
      this.title + " by " + this.author + ", " + this.pages + ", " + this.read
    );
  };
}

function addBookToLibrary() {
  const title = "The Hobbit"; // prompt("Title");
  const author = "J.R.R Tolkien";
  const pages = "295 pages";
  const read = "not read yet";
  myLibrary.push(new Book(title, author, pages, read));
}

function showBooks() {
  const bookshelf = document.getElementById("bookshelf");
  myLibrary.forEach((book) => {
    const div = document.createElement("div");
    for (let key in book) {
      div.textContent = book[key];
      bookshelf.appendChild(div);
    }
  });
}

addBookToLibrary();
addBookToLibrary();
addBookToLibrary();
addBookToLibrary();

showBooks();

for (let object in myLibrary) {
  for (let key in myLibrary[object]) {
    const div = document.createElement("div");
    div.textContent = myLibrary[object][key];
    bookshelf.appendChild(div);
  }
}

/*const theHobbit = new Book(
  "The Hobbit",
  "J.R.R Tolkien",
  "295 pages",
  "not read yet"
);

console.log(theHobbit.info());*/
