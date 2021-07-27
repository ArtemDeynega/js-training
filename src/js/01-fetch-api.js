// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => {
//         return response.blob();
//     })
//     .then(data => {
//         console.log(data);
//     })
//     .catch(error => {
//         console.log(error);
//     });

// const headers = new Headers({
//     'Content-Type': 'application/json',
//     'X-Custom-Header': 'custom value',
// });
// headers.append('Content-Type', 'text/bash');
// headers.append('X-Custom-Header', 'custom value');
// headers.has('Content-Type');
// headers.get('Content-Type');
// headers.set('Content-Type', 'application/json');
// headers.delete('X-Custom-Header');

// fetch('https://jsonplaceholder.typicode.com/users', {
//     method: 'GET',
//     headers: {
//         Accept: 'application/json',
//     },
// }).then(response => {
//     console.log(response);
// });

////////////////////////////////////////////// 11111111111

// const btn = document.querySelector('#js-btn');
// const output = document.querySelector('#js-output');

// // Рассмотрим классическую ошибку при работе с асинхронным запросом
// // Начинающий разработчик пытается записать "результат fetch"
// // во внешнюю пременную и использовать ее
// // ниже по коду сразу за fetch
// let globalVariable = ''; // пустая строка

// const onClick = () => {
//     // Cделаем fetch к сервису
//     fetch('https://api.myjson.com/bins/k9i31')
//         .then(response => {
//             if (response.ok) return response.json();
//             throw new Error('Error fetching data');
//         })
//         .then(data => {
//             console.log('data inside then: ', data); // {name: "Mango", age: 2, mood: "happy"}

//             // Запишем результат в глобальную переменную
//             globalVariable = data;
//             // Тут все ок, данные есть в переменной
//             console.log(
//                 'globalVariable inside fetch: ',
//                 globalVariable,
//             );

//             output.textContent = JSON.stringify(data);
//         })
//         .catch(error => {
//             console.error('Error: ', error);
//         });

//     // Вне метода then данных нет, так как эта строка кода
//     // выполнится раньше чем придет ответ от сервера
//     // В это время переменная globalVariable еще содержит пустую строку
//     // Данные промиса доступны только в методе then самого промиса
//     console.log(
//         'globalVariable outside fetch: ',
//         globalVariable,
//     );
// };

// btn.addEventListener('click', onClick);

////////////////////////////// 22222222222
// const btn = document.querySelector('#js-btn');
// const output = document.querySelector('#js-output');

// const onClick = () => {
//     // по клику сделаем fetch к сервису хранения простых JSON конструкций.
//     // По указаному URL лежит JSON с данными о пользователе
//     fetch('https://api.myjson.com/bins/k9i31')
//         // fetch вернет промис, у которого есть метод then
//         .then(response => {
//             // в первом then всегда проверяется состояния ответа,
//             // если поле ok обьекта response правдиво (truthy)
//             // то возвращаем response.json() - сами данные,
//             // которые можно будет использовать в следующем then
//             if (response.ok) return response.json();

//             // если if не выполнился то "кидаем" ошибку
//             throw new Error('Error fetching data');
//         })
//         .then(data => {
//             // во втором then доступны данные которые мы
//             // вернули из первого then, результат responce.json()
//             console.log('data inside then: ', data); // {name: "Mango", age: 2, mood: "happy"}

//             // используем JSON.stringify для преобразования обьекта в строку,
//             // чтобы повесить результат как текстовый контент в абзац
//             output.textContent = JSON.stringify(data);
//         })
//         .catch(error => {
//             // catch обрабатывает возможную ошибку запроса
//             console.error('Error: ', error);
//         });
// };

// btn.addEventListener('click', onClick);

///////////////////////////////////Пример с ПРИВАТ БАНКОМ

const btn = document.querySelector('.js-get-data');
const tBody = document.querySelector('table > tbody');

btn.addEventListener('click', handleClick);

// Напишем функцию которая будет возвращать результат fetch (обещание) к указаному url

function getCurrencyRates() {
    return fetch(
        'https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11',
    )
        .then(response => {
            if (response.ok) return response.json();
            throw new Error('Error fetching data!');
        })
        .catch(err => {
            console.log('Error: ', err);
        });
}
// Получает массив объектов валют и рендерит результат
function updateView(currencies) {
    const htmlString = currencies.reduce(
        (acc, currency) => acc + createTableRow(currency),
        '',
    );
    tBody.innerHTML = htmlString;
}
// При клике вызовем getCurrencyRates и после того как
// обещание выполнятся, внутри then отрендерим результат по шаблону

function handleClick(params) {
    getCurrencyRates().then(updateView);
}
function createTableRow({ ccy, buy, sale }) {
    return ` <tr scope="row">
      <td>${ccy}</td>
      <td>${Number(buy).toFixed(2)}</td>
      <td>${Number(sale).toFixed(2)}</td>
    </tr>`;
}
