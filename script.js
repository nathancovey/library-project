const myLibrary = [];

function Book(title, author, pages, readBook) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readBook = readBook;
}

Book.prototype.toggleReadStatus = function() {
    this.readBook = !this.readBook;
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

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove Book';
        removeButton.onclick = () => {
            myLibrary.splice(index, 1);
            displayBooks();
        };
        bookCard.appendChild(removeButton);

        const toggleButton = document.createElement('button');
        toggleButton.textContent = 'Toggle Read Status';
        toggleButton.classList.add('toggle-btn'); 
        toggleButton.onclick = () => {
            book.toggleReadStatus();
            displayBooks();
        };
        bookCard.appendChild(toggleButton);

        bookDisplay.appendChild(bookCard);
    });
}

const bookForm = document.getElementById('book-form');

bookForm.onsubmit = (e) => {
    e.preventDefault();
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const readBook = document.getElementById('readBook').checked;
    
    addBookToLibrary(title, author, pages, readBook);
    bookForm.reset();
    bookForm.classList.add('hidden');
};

// Example books
addBookToLibrary('The Hobbit', 'J.R.R. Tolkien', 310, false);
addBookToLibrary('1984', 'George Orwell', 328, true);
addBookToLibrary('The Great Gatsby', 'F. Scott Fitzgerald', 180, false);