import '../css/common.css';

const horses = [
    'Secretariat',
    'Eclipse',
    'West Australian',
    'Flying Fox',
    'Seabiscuit',
];
const refs = {
    startBtn: document.querySelector('.js-start-race'),
    winnerField: document.querySelector('.js-winner'),
    progressField: document.querySelector('.js-progress'),
    tableBody: document.querySelector(
        '.js-results-table > tbody',
    ),
};

refs.startBtn.addEventListener('click', onStart);

function onStart() {
    const promises = horses.map(run);
    updateWinnerField('');

    updateProgressDield(
        '🤖 Заезд начался, ставки не принимаются!',
    );
    datermineWinner(promises);

    waitForAll(promises);
}

function updateWinnerField(message) {
    refs.winnerField.textContent = message;
}

function updateProgressDield(message) {
    refs.progressField.textContent = message;
}

function updateResultTable({ horse, time }) {
    const tr = `<tr><td>0</td><td>${horse}</td><td>${time}</td></tr>`;

    refs.tableBody.insertAdjacentHTML('beforeend', tr);
}

function datermineWinner(horsesP) {
    Promise.race(horsesP).then(({ horse, time }) => {
        updateWinnerField(
            `🏆 Победил ${horse}, финишировав за ${time} времени`,
        );
        updateResultTable({ horse, time });
    });
}
function waitForAll(horsesF) {
    Promise.all(horsesF).then(() => {
        updateProgressDield(
            `🏁 Заезд окончен, принимаются ставки!`,
        );
    });
}

// console.log(
//     `%c 🏆 Победил ${1}, финишировав за ${1} времени`,
//     'color: green; font-size: 14px',
// );

// console.log(
//     `%c 🏁 Заезд окончен, принимаются ставки!`,
//     'color: yellow; font-size: 14px',
// );

function run(horse) {
    return new Promise((resolve, reject) => {
        const time = getRandomTime(2000, 3500);
        setTimeout(() => {
            resolve({ horse, time });
        }, time);
    });
}

// run('Mango').then(x => console.log(x));

/*
 * Promise.race([]) для ожидания первого выполнившегося промиса
 */
// Promise.race(promises).then(({ horse, time }) => {
//     console.log(
//         `%c 🏆 Победил ${horse}, финишировав за ${time} времени`,
//         'color: green; font-size: 14px',
//     );
// });
/*
 * Promise.all([]) для ожидания всех промисов
 */
// Promise.all(promises).then(() =>
//     console.log(
//         `%c 🏁 Заезд окончен, принимаются ставки!`,
//         'color: yellow; font-size: 14px',
//     ),
// );

function getRandomTime(min, max) {
    return Math.floor(
        Math.random() * (max - min + 1) + min,
    );
}
