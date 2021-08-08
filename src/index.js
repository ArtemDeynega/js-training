import './css/common.css';

//Создание (create, POST)

// const postToAdd = {
//     author: 'Mango',
//     content: 'CRUD is awesome',
// };

// fetch('https://jsonplaceholder.typicode.com/posts', {
//     method: 'POST',
//     body: JSON.stringify(postToAdd),
//     headers: {
//         'Content-Type': 'application/json; charset=UTF-8',
//     },
// })
//     .then(response => {
//         console.log('Response: ', response);
//         return response.json();
//     })
//     .then(post => console.log(post))
//     .catch(error => console.log(error));

// Чтение (read, GET)

// const postId = 2;

// fetch(
//     `https://jsonplaceholder.typicode.com/posts/${postId}`,
// )
//     .then(response => response.json())
//     .then(posts => console.log(posts))
//     .catch(error => console.log(error));

// Обновление (update, PUT и PATCH)

// const postId = 10;
// const postToUpdate = {
//     content: 'CRUD is really awesome',
// };

// fetch(
//     `https://jsonplaceholder.typicode.com/posts/${postId}`,
//     {
//         method: 'PATCH',
//         body: JSON.stringify(postToUpdate),
//         headers: {
//             'Content-Type':
//                 'application/json; charset=UTF-8',
//         },
//     },
// )
//     .then(response => {
//         console.log('Response: ', response);
//         return response.json();
//     })
//     .then(post => console.log(post))
//     .catch(error => console.log(error));

// Удаление (delete, DELETE)

// const postIdToDelete = 1;

// fetch(
//     `https://jsonplaceholder.typicode.com/posts/${postIdToDelete}`,
//     {
//         method: 'DELETE',
//     },
// )
//     .then(() => console.log('succes'))
//     .catch(error => console.log('ERROR' + error));

// Асинхронные функции

// const getUsers = async () => {
//     const response = await fetch(
//         'https://jsonplaceholder.typicode.com/users',
//     );
//     const users = response.json();

//     return users;
// };

// getUsers().then(users => console.log(users));

/////////////////
// const getUsers = async () => {
//     try {
//         const result = await fetch(
//             'https://jsonplaceholder.typicode.com/users',
//         );
//         console.log(result);
//     } catch (err) {
//         throw err;
//     }
// };

// getUsers()
//     .then(users => console.log(users))
//     .catch(error => console.log(error));

// Теперь перепишем наш код, используя асинхронную функцию.

const getUsersFriends = async () => {
    const user = await fetch('/user-profile');
    const idList = await fetch(`/users/${user.id}/friends`);
    const promise = idList.map(id => fetch(`users/${id}`));
    const friends = await Promise.all(promise);

    return friends;
};

// Асинхронная функция всегда вернет промис

const promise = getUsersFriends();

promise.then(friends => console.log(friends));
