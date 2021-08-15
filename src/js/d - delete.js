const BASE_URL = 'http://localhost:3000/';
const CHAPTER_BOOKS = 'books/';

function deleteBook(bookId) {
    const options = {
        method: 'DELETE',
    };
    return fetch(
        `${BASE_URL}${CHAPTER_BOOKS}${bookId}`,
        options,
    ).then(res => res.json());
}

deleteBook(11);
deleteBook(10);
