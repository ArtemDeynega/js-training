const BASE_URL = 'http://localhost:3000/';
const RESURS_BOOKS = 'books/';

function fetchBooks() {
    return fetch(`${BASE_URL}${RESURS_BOOKS}`)
        .then(res => res.json())
        .then(console.log);
}

function fetchBookById(bookId) {
    return fetch(`${BASE_URL}${RESURS_BOOKS}${bookId}`)
        .then(res => res.json())
        .then(console.log);
}

fetchBooks();
fetchBookById(3);
