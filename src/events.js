import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/brands';
import '@fortawesome/fontawesome-free/js/fontawesome';
import 'modern-normalize/modern-normalize.css';
import { format } from 'date-fns';
// // import { uk } from 'date-fns/locale';
import upcomingEvents from './upcoming-events.json';
import eventsTemplate from './templates/events.hbs';
import './sass/modules/events/index.scss';

const eventBoard = document.querySelector(
    '.js-event-board',
);

eventBoard.innerHTML = eventsTemplate(
    upcomingEvents.map(evt => {
        return {
            ...evt,
            start: format(
                Date.parse(evt.start),
                'dd MMMM yyyy, HH:mm',
            ),
        };
    }),
);
// console.log(Date.parse('2022-02-17T14:30:00'));
// console.log(
//     upcomingEvents.map(evt => {
//         return {
//             ...evt,
//             start: format(
//                 Date.parse(evt.start),
//                 'dd MMMM yyyy, HH:mm',
//             ),
//         };
//     }),
// );
