const BASE_URL = 'http://localhost:3000';

async function addBook({ params }) {
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(book),
    };

    const response = await fetch(
        `${BASE_URL}/books`,
        options,
    );

    const newBook = await response.json();

    return newBook;
}

// addBook({
//     title: 'Тестовая книга по CSS',
//     author: 'Я',
//     genres: ['CSS'],
//     rating: 9,
// })
//     .then(renderBook)
//     .catch(console.log);

// function renderBook(book) {
//     console.log('Пришел ответ от бекенда можно рисовать');
//     console.log(book);
// }

// async function addBookAndUpdateUi() {
//     try {
//         const book = await addBook({});
//         console.log(book);
//     } catch (error) {
//         console.log(error);
//     }
// }

async function fetchBooks() {
    const response = await fetch(`${BASE_URL}/books`);

    const book = await response.json();

    return book;
}

// fetchBooks();
// fetchBookById(2);
// fetchBookById(4);

async function fetchBookById(bookId) {
    const response = await fetch(
        `${BASE_URL}/books/${bookId}`,
    );

    const book = await response.json();

    return book;
}

async function removeBook(bookId) {
    const url = `${BASE_URL}/books/${bookId}`;
    const options = {
        method: 'DELETE',
    };

    const response = await fetch(url, options);

    return response;
}

async function updateBookById(update, bookId) {
    const options = {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(update),
    };

    const response = await fetch(
        `${BASE_URL}/books/${bookId}`,
        options,
    );
    const data = await response.json();
    return data;
}
