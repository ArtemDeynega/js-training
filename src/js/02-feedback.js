import trottle from 'lodash.throttle';
import '../css/feedback-form.css';
import '../css/common.css';

const STORAGE_KEY = 'feedback-msg';

const refs = {
    form: document.querySelector('.js-feedback-form'),
    textarea: document.querySelector('.js-feedback-form textarea'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.textarea.addEventListener(
    'input',
    trottle(onTextereaInput, 1000),
);

populateTextarea();

function onFormSubmit(evt) {
    evt.preventDefault();

    console.log('Отправляем форму');

    evt.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
}

function onTextereaInput(evt) {
    const message = evt.target.value;

    localStorage.setItem(STORAGE_KEY, message);
}

function populateTextarea() {
    const savedMessage = localStorage.getItem(STORAGE_KEY);

    if (savedMessage) {
        refs.textarea.value = savedMessage;
        console.log(savedMessage);
    }
}

// Домой
// сделать так чтобы сохраняло не только сообщение но и имя, и все в одном обьекте

// const formData = {};

// refs.form.addEventListener('input', e => {
//   // console.log(e.target.name);
//   // console.log(e.target.value);

//   formData[e.target.name] = e.target.value;

//   console.log(formData);
// });
