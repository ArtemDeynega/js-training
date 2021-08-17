import axios from 'axios';
axios.defaults.baseURL =
    'https://611bbc4622020a00175a46be.mockapi.io/api/v1/';

const BASE_URL =
    'https://611bbc4622020a00175a46be.mockapi.io/api/v1/';

const COLECTIONS = 'users/';
const user1 = {
    name: 'Anton Pivovarov',
    phone: '+380986654532',
    email: 'anton.piv@gmail.com',
};

/////   AXIOS

// axios
//     .get(`${COLECTIONS}2`)
//     .then(response => console.log(response.data))
//     .catch(error => console.log(error.message));

// async function fetchConnections(userId) {
//     const response = await axios.get(
//         `${COLECTIONS}${userId}`,
//     );
//     return response.data;
// }
// fetchConnections(3)
//     .then(data => console.log(data))
//     .catch(error => error.message);

// axios
//     .delete(`${COLECTIONS}53`)
//     .then(console.log);

// fetch(`${BASE_URL}${COLECTIONS}`, {
//     method: 'POST',
//     body: JSON.stringify({
//         name: 'Adroan Cross',
//         email: 'a.cross@gmail.com',
//         phone: '+38093387897',
//     }),
// })
//     .then(res => res.json())
//     .then(console.log);

// axios
//     .post(`${COLECTIONS}`, {
//         name: 'Adroan Cross',
//         email: 'a.cross@gmail.com',
//         phone: '+38093387897',
//     })
//     .then(response => console.log(response.data))
//     .catch(error => console.log(error));

// const createUsers = async data => {
//     const response = await axios.post(
//         `${COLECTIONS}`,
//         data,
//     );
//     return response.data;
// };
// createUsers({
//     name: 'Adroan Cross',
//     email: 'a.cross@gmail.com',
//     phone: '+38093387897',
// });
//     .then(data => console.log(data))
//     .catch(error => console.log(error.message));

// axios
//     .put(`${COLECTIONS}61`, {
//         name: 'Anton Gorodash',
//         email: 'anton-d-b@gmail.com',
//         phone: '+380679542211',
//     })
//     .then(response => console.log(response))
//     .catch(error => console.log(error));

// const updateUsers = async (userId, data) => {
//     const response = await axios.put(
//         `${COLECTIONS}${userId}`,
//         data,
//     );
//     return response.data;
// };
// updateUsers(67, user1)
//     .then(data => console.log(data))
//     .catch(error => console.log(error));
// axios
//     .delete(`${COLECTIONS}62`)
//     .then(response => console.log(response))
//     .catch(error => console.log(error));

const deleteUser = async id => {
    const response = await axios.delete(
        `${COLECTIONS}${id}`,
    );

    return response.data;
};

deleteUser(64)
    .then(data => console.log(data))
    .catch(error => console.log(error.message));

// fetch(`${BASE_URL}${COLECTIONS}`, {
//     method: 'GET',
// })
//     .then(res => res.json())
//     .then(data => console.log(data));

// fetch(`${BASE_URL}${COLECTIONS}/43`, {
//     method: 'PUT',
//     body: JSON.stringify(user1),
// })
//     .then(res => res.json)
//     .then(console.log);

// fetch(`${BASE_URL}${COLECTIONS}/43`, {
//     method: 'DELETE',
// })
//     .then(res => res.json())
//     .then(console.log);

// async function addUser(user) {
//     const options = {
//         method: 'POST',
//         body: JSON.stringify(user),
//     };

//     const resposne = await fetch(
//         `${BASE_URL}${COLECTIONS}`,
//         options,
//     );

//     const data = await resposne.json();

//     return data;
// }
// addUser(user1);

// async function deleteUser(userId) {
//     const options = {
//         method: 'DELETE',
//     };
//     const resposne = await fetch(
//         `${BASE_URL}${COLECTIONS}${userId}`,
//         options,
//     );

//     const date = await resposne.json();
//     return date;
// }

// deleteUser(50);

// async function updateUser(userId) {
//     const options = {
//         method: 'PUT',
//         body: JSON.stringify(user1),
//     };

//     const resposne = await fetch(
//         `${BASE_URL}${COLECTIONS}${userId}`,
//         options,
//     );

//     const data = await resposne.json();

//     return data;
// }
// updateUser(3);
