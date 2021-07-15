import '../css/common.css';
import BSN from 'bootstrap.native';

const refs = {
    modal: document.querySelector('#subscription-modal'),
    closeModal: document.querySelector(
        'button[data-dismiss="modal"]',
    ),
    subscribeBtn: document.querySelector(
        'button[data-subscribe]',
    ),
};
const PROMPT_DELAY = 3000;
const MAX_PROMPT_ATTEMPTS = 3;
let promptCounter = 0;
let timeoutID = null;
let hasSubscribed = false;
const modal = new BSN.Modal('#subscription-modal');

openModal();
refs.subscribeBtn.addEventListener(
    'click',
    onSubscribeBtnClick,
);
refs.closeModal.addEventListener('click', closeBtn);
refs.modal.addEventListener('hide.bs.modal', openModal);

// let hasSubscribed = false;
// let inervalID = null;

function openModal() {
    if (
        promptCounter === MAX_PROMPT_ATTEMPTS ||
        hasSubscribed
    ) {
        console.log(
            `Максимальное количество надоедианий ${MAX_PROMPT_ATTEMPTS} или подписался (состояние подписки ${hasSubscribed})`,
        );
        clearTimeout(timeoutID);
        return;
    }
    timeoutID = setTimeout(() => {
        console.log('Открываем надоедалку');

        modal.show();

        promptCounter += 1;
    }, PROMPT_DELAY);
}
function onSubscribeBtnClick() {
    hasSubscribed = true;
    closeBtn();
}
function closeBtn() {
    modal.hide();
}
// inervalID = setInterval(() => {
//     if (
//         promptCounter === MAX_PROMPT_ATTEMPTS ||
//         !hasSubscribed
//     ) {
//         console.log('Отсанавливаем интервал');
//         clearInterval(inervalID);
//         return;
//     }
//     console.log(`Подпишись на рассылку! - ` + Date.now());
//     promptCounter += 1;
// }, PROMPT_DELAY);
