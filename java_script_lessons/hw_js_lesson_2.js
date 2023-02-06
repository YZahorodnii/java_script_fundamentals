// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу,
// вивести кожен елемент в консоль
let arr = [12,'kiwi', 'pears', false, null, true, 222,'1','base', 444];
function simplyLog(array) {
    for (i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}
simplyLog(arr);
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,
// pageCount, genre.
let book1 = {
    title:'Harry Potter',
    pageCount:500,
    genre:'fantasy'
};
let book2 = {
    title:'Open',
    pageCount:250,
    genre:'autobiography'
};
let book3 = {
    title:'Shantaram',
    pageCount:350,
    genre:'adventure'
};
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,
// pageCount, genre, authors. Поле "автори" - являється  масивом.
// Кожен автор має поля name та age.
let newbook1 = {
    title:'Harry Potter',
    pageCount:500,
    genre:'fantasy',
    authors:[{name:'Rowling', age:50}, {name:'J. K.', age:55}]
};
let newbook2 = {
    title:'Open Andrea Agassi',
    pageCount:250,
    genre:'autobiography',
    authors:[{name: 'Andrea Agassi',age:45}, {name:'Helper', age:40}]
};
let newbook3 = {
    title:'Shantaram',
    pageCount:350,
    genre:'adventure',
    authors: [{name:'Gregory David', age:60}, {name:'Roberts', age:66}]
};
// - Створити масив з 10 об'єктами які описують сутніть "користувач".
// Поля: name, username,password. Вивести в консоль пароль кожного користувача
let user = [
    {name:'yaroslav', username:'yarko',password:'hukuku'},
    {name:'yurko', username:'gibon',password:'kilo'},
    {name:'sergiy', username:'serj',password:'poiuyt'},
    {name:'olya', username:'ol',password:'asdf'},
    {name:'kolya', username:'ko',password:'ghjkl'},
    {name:'julia', username:'july',password:'122345'},
    {name:'anna', username:'ann',password:'qwerty'},
    {name:'fedor', username:'fedya',password:'yuiop'},
    {name:'klava', username:'klawa',password:'098765'},
    {name:'denis', username:'den',password:'zxcvbn'}
]
function logPass(users) {
    for (i = 0; i < users.length; i++) {
        console.log(users[i].password);
    }
}
logPass(user);
// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть
//     'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
let x = -3;
    if (x !== 0) {
        console.log('Вірно');
    }
else
    {
        console.log('Невірно');
    }
// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код,
// який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
let time = -1;
if (time >= 0 && time <= 15) {
    console.log('first quarter')
} else if (time > 15 && time <= 30) {
    console.log('second quarter')
} else if (time > 30 && time <= 45) {
    console.log('third quarter')
} else if (time > 45 && time < 60) {
    console.log('fourth quarter')
} else {
    console.log('wrong input')
}
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку
// половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
let day = 0;
if (day >= 1 && day <= 10) {
    console.log('first decade')
} else if (day > 10 && day <= 20) {
    console.log('second decade')
} else if (day > 20 && day <= 31) {
    console.log('third decade')
} else {
    console.log('wrong input')
}
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить
// порядковий номер дня тижня і на екрані відображається інфа що
// заплановано на цей день (можна замість плану на день, назву дня англійською).
let weekDayNumber = 8;
switch(weekDayNumber) {
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    case 7:
        console.log('Sunday');
        break;
    default:
        console.log('no value found');
        break;
}
//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.
let enterNumber1 = prompt('enter number', 'e.g. 5');
let enterNumber2 = prompt('enter number', 'e.g. 7');
if (enterNumber1 > enterNumber2) {
    console.log(enterNumber1);
} else if (enterNumber1 < enterNumber2) {
    console.log(enterNumber2);
} else if (enterNumber1 === enterNumber2) {
    console.log(`${enterNumber1} is equal to ${enterNumber2}`);
} else {
    console.log('please enter only numbers');
}
//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число,
//     undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення
//         "default"  якщо значення змінної х являється falsy
//         (хибноподібні, тобто приводиться до false)
let xx = null;
if (xx == undefined || null || false) {
    xx = false;
}
console.log(xx);
//     - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив
//     coursesAndDurationArray. За допомоги іф перевірити кожен його
//     елемент на тривалість навчання. У випадку якщо тривалість довша
//     за 5 місяців вивести в консоль "Супер".
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

let number = 1;
if (coursesAndDurationArray[number].monthDuration > 5) {
    console.log('Супер');
} else {
    console.log('less than 5 month :(');
}