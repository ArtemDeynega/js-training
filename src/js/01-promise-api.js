/*
 * Создание промиса
 *  - Класс Promise
 *  - resolve
 *  - reject
 *  - Promise.prototype.then(onResolve, onReject)
 */

// const promise = new Promise((resolve, reject) => {
//     const canFulfill = Math.random() > 0.5;

//     setTimeout(() => {
//         if (canFulfill) {
//             resolve('Все ок');
//         }
//         reject('Промис выполнился с ошибкой');
//     }, 1000);
// });
// promise.then(
//     result => {
//         console.log(`✅ ${result}`);
//     },
//     error => {
//         console.log(`❌ ${error}`);
//     },
// );

// promise.then(onFulfilled, onRejected);

/*
 * Цепочки промисов (chaining)
 * Promise.prototype.catch(error)
 * Promise.prototype.finally()
 */

// console.log(promise);
// promise
//     .then(result => {
//         return 10;
//     })
//     .then(x => {
//         x *= 10;
//         return x;
//     })
//     .then(y => {
//         y *= 5;
//         return y;
//     })
//     .then(e => {
//         console.log(
//             `Then выполнился полностью и равeн ${e}`,
//         );
//     })
//     .catch(error => {
//         console.log(error);
//     })
//     .finally(() => {
//         console.log(`Finalle в любом случае`);
//     });
