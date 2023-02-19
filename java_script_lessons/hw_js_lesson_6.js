// - Знайти та вивести довижину настипних стрінгових значень
let str1 = 'hello world';
let str2 = 'lorem ipsum';
let str3 = 'javascript is cool';
console.log(str1.length);
console.log(str2.length);
console.log(str3.length);
// - Перевести до великого регістру наступні стрінгові значення
let str4 = 'hello world';
let str5 = 'lorem ipsum';
let str6 = 'javascript is cool';
console.log(str4.toUpperCase());
console.log(str5.toUpperCase());
console.log(str6.toUpperCase());

// - Перевести до нижнього регістру настипні стрінгові значення
let str7 = 'HELLO WORLD';
let str8 = 'LOREM IPSUM';
let str9 = 'JAVASCRIPT IS COOL';
console.log(str7.toLowerCase());
console.log(str8.toLowerCase());
console.log(str9.toLowerCase());
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let testStr = ' dirty string   ';
let result = '';
start = false;
for (let i = 0; i < testStr.length; i++) {
    if (!start && testStr[i] !== ' ') {
        result = result + testStr[i]
        start = true;
    }
    else if (start == true && (testStr[i] !== ' ' || (testStr[i] == ' ' && testStr[i+1] && testStr[i+1] !== ' '))) {
        result = result + testStr[i];
    }
}
console.log(result);

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
    let str10 = 'Ревуть воли як ясла повні';
let stringToarray = (str) => {return str.split(' ')};
console.log(stringToarray(str10));;

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти
// ' + 'в масиві на стрінгові.
let arr = [10,8,-7,55,987,-1011,0,1050,0];
let mapp = arr.map(value => {
    if (value > 0) {
        return `${value}`;
    }if (value <= 0) {
        return value
    }
})
console.log(mapp);
// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до
// меньшого, або навпаки в залежності від значення аргументу direction.
    let nums = [11,21,3];
let sortNums = (arr, direction) => {
    if (direction === 'ascending') {
        arr.sort((a,b) => a - b)
        return arr;
    }
    if (direction === 'descending') {
        arr.sort((a, b) => b - a)
        return arr;
    }
};

console.log(sortNums(nums, 'ascending')); // [3,11,21]
console.log(sortNums(nums, 'descending')); // [21,11,3]

// ==========================
// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration
let sorted1 = coursesAndDurationArray.sort((a,b) => {
    if (a.monthDuration < b.monthDuration) {
        return 1;
    }
    if (a.monthDuration > b.monthDuration) {
        return -1;
    }
    if (a.monthDuration === b.monthDuration) {
        return 0;
    }
});
console.log(sorted1);
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
let filtered = coursesAndDurationArray.filter(item => item.monthDuration > 5);
console.log(filtered);
// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
let map = coursesAndDurationArray.map((value, index) => {
    return {id: index+1, title: value.title, monthDuration: value.monthDuration}
});
console.log(map);
// =========================
//     описати колоду карт (від 6 до туза без джокерів)
let cards = [
    {cardSuit: 'hearts', color: 'red', value : ['6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace']},
    {cardSuit: 'diamonds', color: 'red', value : ['6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace']},
    {cardSuit: 'spades', color: 'black', value: ['6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace']},
    {cardSuit: 'clubs', color: 'black', value: ['6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace']}
];
// - знайти піковий туз
let ace = cards.map(item => {
    if (item.cardSuit === 'spades') {
        console.log(`ACE has value index #${item.value.indexOf('Ace')}`);
    }
});
// - всі шістки
let sixth = cards.map(item => item.value.indexOf('6'))
console.log(sixth);
// - всі червоні карти
let reds = cards.filter(item => {
    if (item.color === 'red') {
        console.log(item.value);
    }
});
// - всі буби
let diamonds = cards.filter(item=> {
    if (item.cardSuit === 'diamonds') {
        console.log(item.value);
    }
});
// - всі трефи від 9 та більше
cards.filter(item => {
    if (item.cardSuit === 'clubs') {
        let newArr = [];
        for (let i = 3; i < (item.value).length; i++) {
            newArr.push(item.value[i]);
        }
        console.log(newArr);
    }
});
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
//
// =========================
//
//     Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }
/*
cards.reduce((accum, element) => {
    if (element.cardSuit == 'hearts') {
        for (const item of element.value) {
            accum.hearts.push(item);
        }
    } if (element.cardSuit == 'spades') {
        for (const item of element.value) {
            accum.spades.push(item);
        }
        console.log(accum);
    } if (element.cardSuit === 'diamonds') {
        for (const item of element.value) {
            accum.diamonds.push(item);
        }
    } if (element.cardSuit === 'clubs') {
        for (const item of element.value) {
            accum.clubs.push(item);
        }
        return accum;
    }
}, {hearts: [], spades: [], diamonds: [], clubs: []});
*/

// =========================
//     взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
// --написати пошук всіх об'єктів, в який в modules є sass
let sass = coursesArray.filter(value => {
    for (const element of value.modules) {
        if (element === 'sass') {
            return value;
        }
    }
});
console.log(sass);
// --написати пошук всіх об'єктів, в який в modules є docker
let docker = coursesArray.filter(value => {
    for (const element of value.modules) {
        if (element === 'docker') {
            return value;
        }
    }
});
console.log(docker);