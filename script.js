const myLibrary = [];

function Book(title, author, pages, readBook) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readBook = readBook;
    this.info = function() {
        return `${title} by ${author}, ${pages} pages, ${readBook ? 'has read' : 'not read yet'}`;
    }
}

function addBookToLibrary(title, author, pages, readBook) {
    const newBook = new Book(title, author, pages, readBook);
    myLibrary.push(newBook);
    displayBooks();
}

function displayBooks() {
    const bookDisplay = document.getElementById('book-display');
    bookDisplay.innerHTML = '';

    myLibrary.forEach((book, index) => {
        const bookCard = document.createElement('div');
        bookCard.classList.add('book-card');

        const bookTitle = document.createElement('h3');
        bookTitle.textContent = book.title;
        bookCard.appendChild(bookTitle);

        const bookAuthor = document.createElement('p');
        bookAuthor.textContent = `Author: ${book.author}`;
        bookCard.appendChild(bookAuthor);

        const bookPages = document.createElement('p');
        bookPages.textContent = `Pages: ${book.pages}`;
        bookCard.appendChild(bookPages);

        const bookStatus = document.createElement('p');
        if (book.readBook) {
            bookStatus.textContent = 'Status: Read';
            bookStatus.classList.add('read-status');
        } else {
            bookStatus.textContent = 'Status: Not Read';
            bookStatus.classList.add('not-read-status');
        }
        bookCard.appendChild(bookStatus);

        bookDisplay.appendChild(bookCard);
    });
}

addBookToLibrary('The Hobbit', 'J.R.R. Tolkien', 310, false);
addBookToLibrary('1984', 'George Orwell', 328, true);
addBookToLibrary('The Great Gatsby', 'F. Scott Fitzgerald', 180, false);