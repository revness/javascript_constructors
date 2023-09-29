function books(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
}

const book = new books("Book One", "John Doe", "2013");
console.log(book);

books.prototype.getSummary = function () {
  return `${this.title} was written by ${this.author} in ${this.year}`;
};

console.log(book.getSummary());
