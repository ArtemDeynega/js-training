const BASE_URL = 'http://localhost:3000/';
const RESURSE_BOOKS = 'books';

function addBook(book) {
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(book),
    };

    return fetch(
        `${BASE_URL}${RESURSE_BOOKS}`,
        options,
    ).then(res => res.json());
}

addBook({
    title: 'Тестовая книга',
    author: 'Я',
    genres: ['приключения JS'],
    rating: 10,
}).then(console.log);
addBook({
    title: 'Тестовая книга по HTML',
    author: 'Я',
    genres: ['приключения HTML'],
    rating: 3,
}).then(console.log);
addBook({
    title: 'Тестовая книга по CSS',
    author: 'Я',
    genres: ['приключения CSS'],
    rating: 5,
}).then(console.log);
addBook({
    title: 'Тестовая книга по JS',
    author: 'Я',
    genres: ['приключения JS'],
    rating: 8,
}).then(console.log);
