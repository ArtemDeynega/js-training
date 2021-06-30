// const user = {
//   name: 'Mango',
//   age: 2,
// };
// console.log(JSON.stringify(user));

// const saveUserDate = '{"name":"Mango","age":2}';

// console.log(JSON.parse(saveUserDate));

// console.log(localStorage);

localStorage.setItem(
    'my-data',
    JSON.stringify({ name: 'Mango', age: 2 }),
);

const saveData = localStorage.getItem('my-data');
const parseData = JSON.parse(saveData);
console.log(parseData);
