const myLibrary = [];

function Book(title, author, pages, readBook) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readBook = readBook;
    this.info = function() {
        return (`${title} by ${author}, ${pages} pages, ${readBook ? 'has read' : 'not read yet'}`)
    }
}

function addBookToLibrary() {
  // do stuff here
}
