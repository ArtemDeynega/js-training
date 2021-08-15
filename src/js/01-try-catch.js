// Обработка ошибок с try...catch
//  - Синтаксис
//  - Какие ошибки ловит
//    - ❌ ошибки парсинга (parsing errors)
//    - ✅ ошибки выполнения (runtime errors)
//  - Ловит только ошибки в синхронном коде
//    - Как словить ошибку в асинхронном коде
//  - Объект ошибки
//    - name
//    - message
//    - stack
//  - Блок catch без объекта ошибки

// try {
//     console.log('Внутри try');

//     setTimeout(() => {
//         myvar;
//     }, 1000);
// } catch (error) {
//     console.log('Ошибка!');
// }

setTimeout(() => {
    try {
        console.log('Внутри try');
        myvar;
    } catch {
        console.log('Ошибка!');
    }
}, 1000);
console.log('После try...catch');
