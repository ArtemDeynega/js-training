import '../css/common.css';

/*
 - Создание
 - Unix-время
 - Методы
 - Разница времени
 - Date.now()
*/

const date1 = Date.now();
console.log(date1);

setTimeout(() => {
    const date2 = Date.now();
    console.log('date1', date1);
    console.log('date2', date2);

    console.log(date1 - date2);
}, 3000);
