const BASE_URL = 'http://localhost:3000/';
const CHAPTER_BOOKS = 'books/';

function updateBookById(update, bookId) {
    const options = {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(update),
    };

    return fetch(
        `${BASE_URL}${CHAPTER_BOOKS}${bookId}`,
        options,
    ).then(res => res.json());
}

updateBookById(
    {
        title: 'Большая тестовая книга по JS',
        genres: ['Большие приключения по JS'],
    },
    9,
).then(console.log);
updateBookById({ rating: 2 }, 2).then(console.log);
updateBookById({ author: 'Какой-то мужик', rating: 5 }, 1);

// author
