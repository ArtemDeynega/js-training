import '../css/common.css';

/*
 * Метод window.setTimeout(callback, delay, args)
 */

// const logMessage = () => {
//     console.log(
//         'Лог при вызове callback-функции через 3 секунды',
//     );
// };
// setTimeout(
//     x => {
//         console.log(x);
//         console.log('Внутри callback  для setTimeout');
//     },
//     2000,
//     10,
// );

// console.log('До вызова setTimeout');
// console.log('После вызова setTimeout');
/*
 * Очистка таймаута с clearTimeout(timeoutId)
 */

const logger = time => {
    console.log(
        `Лог через ${time}ms, потому что не отменили таймаут`,
    );
};

const timerId = setTimeout(logger, 2000, 3000);

const shouldCancelTimer = Math.random() > 0.3;
console.log(shouldCancelTimer);

if (!shouldCancelTimer) {
    clearTimeout(timerId);
}
