import '../css/common.css';

/*
 * Метод setInterval(callback, delay, args)
 */
// console.log('До вызова setInterval');
// const logger = time =>
//     console.log(`Лог каждый ${time}ms - ${Date.now()}`);

// // console.log('После вызова setInterval');
// // // setInterval(logger, 2000, 2000);
// // console.log('После вызова setInterval');

// /*
//  * Очистка интервала с clearInterval(intervalId)
//  */

// const intervalId = setInterval(logger, 2000, 0);
// const shouldCancelInterval = Math.random() > 0.3;
// console.log(shouldCancelInterval);

// if (!shouldCancelInterval) {
//     clearInterval(intervalId);
// }
// console.log('После вызова setInterval');

console.log('Дщ вызова setTimeout');

setTimeout(() => {
    console.log('вызов отложенной функции 2000');
}, 2000);
setTimeout(() => {
    console.log('вызов отложенной функции 3000');
}, 3000);

console.log('После вызова setTimeout');
