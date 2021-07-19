/*
 * Промисификация:
 * - Поблема доступа к результату промиса с колбеком
 * - Функция которая возвращает промис
 */

// const makeOrder = dish => {
//     const DELAY = 1000;

//     return new Promise((resolve, reject) => {
//         const passed = Math.random() > 0.3;
//         setTimeout(() => {
//             if (passed) {
//                 resolve(`✅ Вот ваш заказ ${dish}`);
//             }

//             reject('❌ Извените закончились продукты');
//         }, DELAY);
//     });
// };

// makeOrder('Пирожок')
//     .then(onMakeOrderSeccess)
//     .catch(onMakeOrderError);

// function onMakeOrderSeccess(result) {
//     console.log('onMakeOrderSeccess');
//     console.log(result);
// }
// function onMakeOrderError(error) {
//     console.log('onMakeOrderError');
//     console.log(error);
// }

/*
 * Промисификация «синхронных» функций
 * - Promise.resolve()
 * - Promise.reject()
 */

// const makeOrder = dish => {
//     return Promise.resolve(`✅ Вот ваш заказ ${dish}`);
// };

// makeOrder('пирожок')
//     .then(onMakeOrderSuccess)
//     .catch(onMakeOrderError);
// function onMakeOrderSuccess(result) {
//     console.log('onMakeOrderSuccess');
//     console.log(result);
// }

// function onMakeOrderError(error) {
//     console.log('onMakeOrderError');
//     console.log(error);
// }

/*
 * Покемоны с https://pokeapi.co/
 */

// function fetchPokemonById(id) {
//     return fetch(
//         `https://pokeapi.co/api/v2/pokemon/${id}`,
//     ).then(r => r.json());
// }

// fetchPokemonById(515)
//     .then(onFetchSuccess)
//     .catch(onFetchError);

// fetchPokemonById(615)
//     .then(onFetchSuccess)
//     .catch(onFetchError);
// fetchPokemonById(715)
//     .then(onFetchSuccess)
//     .catch(onFetchError);

// function onFetchSuccess(pokemon) {
//     console.log(pokemon);
// }
// function onFetchError(error) {
//     console.log('Ето в Кетч');
//     console.log(error);
// }

const makePromise = () => {
    return new Promise((resolve, reject) => {
        const DELAY = 2000;
        setTimeout(() => {
            const passed = Math.random() > 0.3;
            if (passed) {
                resolve('✅ куку это resolve');
            }
            reject('❌ произошла ошибка');
        }, DELAY);
    });
};
makePromise()
    .then(result => console.log(result))
    .catch(error => console.log(error));
