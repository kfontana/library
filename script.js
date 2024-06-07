const myLibrary = [];

function Book(title, author, pages, read, dataAttribute) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.dataAttribute = myLibrary.length;
}

const btnNewBook = document.querySelector("#btnBook");
btnNewBook.addEventListener("click", addBookToLibrary);

const bookDialog = document.querySelector("#bookDialog");

btnNewBook.addEventListener("click", () => {
  bookDialog.showModal();
});

// Prevent return value at click close in the dialog. This duplicates cards.

const closeBtn = document.querySelector("#closeBtn");
closeBtn.addEventListener("click", () => {
  bookDialog.close();
  console.log("close");
});

function addBookToLibrary() {
  const titleInput = document.querySelector("#title");
  titleInput.addEventListener("change", (e) => {
    title = titleInput.value;
  });

  const authorInput = document.querySelector("#author");
  authorInput.addEventListener("change", (e) => {
    author = authorInput.value;
  });

  const pagesInput = document.querySelector("#pages");
  pagesInput.addEventListener("change", (e) => {
    pages = pagesInput.value;
  });

  const readInput = document.querySelector("#read");
  readInput.addEventListener("change", (e) => {
    read = readInput.value;
  });

  const dataAttribute = "";

  // If the confirmBtn is here the data can be collected before the input of the user.

  const confirmBtn = document.querySelector("#confirmBtn");
  confirmBtn.addEventListener("click", (event) => {
    event.preventDefault();
    myLibrary.push(new Book(title, author, pages, read, dataAttribute));
    createCard();
  });

  function createCard() {
    const bookshelf = document.getElementById("bookshelf");
    const div = document.createElement("div");
    div.setAttribute("id", dataAttribute);
    bookshelf.appendChild(div);
    addData();

    function addData() {
      let lastBook = myLibrary.slice(-1)[0];
      for (let key in lastBook) {
        const para = document.createElement("p");
        para.textContent = lastBook[key];
        div.appendChild(para);
      }
      addRemoveButton();
      addReadButton();
    }

    function addRemoveButton() {
      const btn = document.createElement("button");
      btn.textContent = "Remove";
      btn.setAttribute("class", "removeBtn");
      div.appendChild(btn);
    }

    function addReadButton() {
      const inputBtn = document.createElement("button");
      inputBtn.textContent = "Read";
      inputBtn.setAttribute("class", "toggleRead");
      div.appendChild(inputBtn);
    }

    // .toggleRead should read the status of the checkbox to assign a color

    const btnRead = document.querySelectorAll(".toggleRead");
    btnRead.forEach((btnRead) => (btnRead.style.backgroundColor = "red"));

    // This is WAI. TODO if flag toggle.

    btnRead.forEach((btnRead) =>
      btnRead.addEventListener("click", (e) => {
        btnRead.style.backgroundColor = "green";
      })
    );

    const btnRemove = document.querySelectorAll(".removeBtn");
    btnRemove.forEach((btnRemove) =>
      btnRemove.addEventListener("click", (e) => {
        e.target.parentNode.remove();
      })
    );
  }
}
