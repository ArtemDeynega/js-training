import '../css/common.css';

/**
 * - Показываем и скрываем добавляя/удаляя класс is-visible
 * - Скрываем через определённое время
 * - Скрываем при клике
 * - Не забываем чистить таймер
 */
const NOTIFICATION_DELAY = 5000;

let timeoutIf = null;

const refs = {
    notification: document.querySelector('.js-alert'),
};

refs.notification.addEventListener(
    'click',
    onNotificationClick,
);
/*
 * Функции
 */
showNotification();

function onNotificationClick() {
    heideNotification();
    clearTimeout(timeoutIf);
}

function showNotification() {
    refs.notification.classList.add('is-visible');

    timeoutIf = setTimeout(() => {
        console.log(
            'Закрываем алерт автоматически что бы не висел',
        );
        heideNotification();
    }, NOTIFICATION_DELAY);
}

function heideNotification() {
    refs.notification.classList.remove('is-visible');
}
