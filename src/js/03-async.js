// Синтаксис async/await
// Последовательные операции
// Паралельные операции с Promise.all()
// try...catch

function getFruit(name) {
    const fruits = {
        strawberry: '🍓',
        kiwi: '🥝 ',
        apple: '🍎',
    };

    return new Promise(resolve =>
        setTimeout(() => {
            resolve(fruits[name]);
        }, 1000),
    );

    // return fruits[name];
}

async function asyncMakeSmooyhie() {
    try {
        // console.time('asyncMakeSmooyhie');
        const apple = getFruit('apple');
        // console.log(apple);

        const kiwi = getFruit('kiwi');
        // console.log(kiwi);
        const berry = getFruit('strawberry');

        const fruits = await Promise.all([
            apple,
            kiwi,
            berry,
        ]);

        // console.log(fruits);
        // console.timeEnd('asyncMakeSmooyhie');

        return fruits;
    } catch (error) {
        console.log(error);
    }
}
asyncMakeSmooyhie().then(res => console.log(res));

function makeSmooyhie() {
    getFruit('strawberry').then(apple => {
        console.log(apple);
        getFruit('kiwi').then(console.log);
    });
}

// function getFruit(name) {
//     const fruits = {
//         strawberry: '🍓',
//         kiwi: '🥝 ',
//         apple: '🍎',
//     };

//     return new Promise((resolve, reject) =>
//         setTimeout(() => resolve(fruits[name]), 500),
//     );
// }

// async function aMakeSmoothie() {
//     try {
//         console.time('aMakeSmoothie');
//         const apple = getFruit('apple');
//         const kiwi = getFruit('kiwi');
//         const berry = getFruit('strawberry');

//         const fruits = await Promise.all([
//             apple,
//             kiwi,
//             berry,
//         ]);
//         console.log(fruits);
//         console.timeEnd('aMakeSmoothie');

//         return fruits;
//     } catch (error) {
//         console.log('Ошибка');
//     }
// }

// aMakeSmoothie();

// async function fn () {}

// const fn  = async function () {}
