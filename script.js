/*
All of your book objects are going to be stored in a simple array, so add a function to the 
script (not the constructor) that can take user’s input and store the new book objects into 
an array. Your code should look something like this:

const myLibrary = [];

function Book() {
// the constructor...
}

function addBookToLibrary() {
// do stuff here
}
*/
const myLibrary = [];

function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}
/*
3. Write a function that loops through the array and displays each book on the page. 
You can display them in some sort of table, or each on their own “card”. 
It might help for now to manually add a few books to your array so you can see the display.
*/
book1 = new Book("The Hobbit", "J.R.R. Tolkien", 1937);
book2 = new Book("The Fellowship of the Ring", "J.R.R. Tolkien", 1954);
book3 = new Book("The Two Towers", "J.R.R. Tolkien", 1954);

addBookToLibrary(book1);
addBookToLibrary(book2);
addBookToLibrary(book3);

function createBooksTable() {
  const container = document.querySelector("#books");
  const table = document.createElement("table");
  table.setAttribute("id", "books-table");
  const header = table.createTHead();
  const headerRow = header.insertRow(0);
  const headerTitle = headerRow.insertCell(0);
  const headerAuthor = headerRow.insertCell(1);
  const headerYear = headerRow.insertCell(2);
  headerTitle.innerHTML = "<b>Title</b>";
  headerAuthor.innerHTML = "<b>Author</b>";
  headerYear.innerHTML = "<b>Year</b>";
  const body = table.createTBody();
  for (let i = 0; i < myLibrary.length; i++) {
    const row = body.insertRow(i);
    const title = row.insertCell(0);
    const author = row.insertCell(1);
    const year = row.insertCell(2);
    const deleteButton = row.insertCell(3);
    deleteButton.innerHTML = `<button id="deleteButton${i}">Delete</button>`;
    deleteButton.addEventListener("click", (e) => {
      e.preventDefault();
      console.log(`delete button ${i} clicked!`);
      // remove book from library
      myLibrary.splice(i, 1);
      // update table
      const table = document.querySelector("#books-table");
      table.remove();
      createBooksTable();
    });
    const readButton = row.insertCell(4);
    readButton.innerHTML = `<button id="readButton${i}">Read</button>`;
    readButton.addEventListener("click", (e) => {
      e.preventDefault();
      console.log(`read button ${i} clicked!`);
      // toggle read status
      if (myLibrary[i].read) {
        myLibrary[i].read = false;
      } else {
        myLibrary[i].read = true;
      }
      // update table
      const table = document.querySelector("#books-table");
      table.remove();
      createBooksTable();
    });
    if (myLibrary[i].read) {
      readButton.innerHTML = `<button id="readButton${i}">Read</button>`;
    } else {
      readButton.innerHTML = `<button id="readButton${i}">Not Read</button>`;
    }
    title.innerHTML = myLibrary[i].title;
    author.innerHTML = myLibrary[i].author;
    year.innerHTML = myLibrary[i].year;
  }
  container.appendChild(table);
}

createBooksTable();

/*
4.Add a “NEW BOOK” button that brings up a form allowing users to input the details 
for the new book: author, title, number of pages, whether it’s been read and anything 
else you might want. How you decide to display this form is up to you. For example, 
you may wish to have a form show in a sidebar or you may wish to explore dialogs and 
modals using the <dialog> tag. However you do this, you will most likely encounter an 
issue where submitting your form will not do what you expect it to do. That’s because 
the submit input tries to send the data to a server by default. If you’ve done the 
bonus section for the calculator assignment, you might be familiar with 
event.preventDefault();. Read up on the event.preventDefault documentation again and 
see how you can solve this issue!
*/

const newBookButton = document.querySelector("#newBookButton");
const newBookForm = document.querySelector("#dialog");
const newBookFormTitle = document.querySelector("#newBookFormTitle");
const newBookFormAuthor = document.querySelector("#newBookFormAuthor");
const newBookFormYear = document.querySelector("#newBookFormYear");
const newBookFormSubmit = document.querySelector("#newBookFormSubmit");
const newBookFormCancel = document.querySelector("#newBookFormCancel");

newBookButton.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("button clicked!");
  // show dialog
  newBookForm.showModal();
});

newBookFormCancel.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("cancel clicked!");
  // hide dialog
  newBookForm.close();
});

newBookFormSubmit.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("submit clicked!");
  // hide dialog
  newBookForm.close();
  // add book to library
  const book = new Book(
    newBookFormTitle.value,
    newBookFormAuthor.value,
    newBookFormYear.value
  );
  addBookToLibrary(book);
  // update table
  const table = document.querySelector("#books-table");
  table.remove();
  createBooksTable();
});
/*
Add a button on each book’s display to remove the book from the library.
 ✅
*/
