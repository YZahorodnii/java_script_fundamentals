
// - Напишите функцию cutString(str, n), которая делит строку на подстроки,
// состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]

let cutString = (str, n) => {
    let arr = [];
    for (let i = 0; i < str.length; i += n) {
        arr.push(str.substring(i, i + n));
    }
    return arr;
};
console.log(cutString('наслаждение', 3));

// - Напишіть функцію delete_characters(str, length), яка повертає підрядок,
// що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый

let delete_characters = (str, n) => {
    let split = str.split(' ');
    for (const string of split) {
        if (string.length === n) {
            return string;
        }
    }
};
console.log(delete_characters('Каждый охотник желает знать', 3));

// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє
// тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'
let insert_dash = (str) => {
let split = str.trim().split(' ').join('-').toUpperCase();
return split;
}
console.log(insert_dash(" HTML JavaScript PHP" ));
// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого
// символу рядка з нижнього регістру у верхній.
let toUpperCase = (str) => {
    let firstLetter = str.trim().substring(0,1).toUpperCase();
    console.log(firstLetter);
    let result = firstLetter + str.trim().substring(1)
    return result;
};
console.log(toUpperCase('    lorem ipsum dolor sit amet, consectetur adipisicing elit'));
// - Дано список імен.
let n1 = 'Harry......Potter'
let n2 = 'Ron---Whisley'
let n3 = 'Hermione__Granger'
let specialChar = ['-', '_', '.'];
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в
// наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'
let nameCorrector = (str) => {
    newStr = '';
    flag = false;
    for (let i = 0; i < str.length; i++) {
        let chr = str.charCodeAt(i);
        if ((chr > 65 && chr < 91) || (chr > 96 && chr < 123)) {
            newStr = newStr.concat(str[i])
        }
        else if ((chr < 65 || (chr >= 91 && chr < 97) || chr >= 123) && !flag ) {
            newStr = newStr.concat(' ')
            flag = true;
        }
    }
    return newStr;
};
console.log(nameCorrector(n3));

//     - створити функцію, яка генерує масив рандомних числових цілих значень в
//     діапазоні від 0 до 100. Math.floor(Math.random(arrSize)*100)
let randomizer = arrNumber => {
    let arr = [];
    for (let i = 0; i < arrNumber; i++) {
        arr[i] = Math.floor(Math.random(arrNumber)*101);
    }
    return arr;
};
console.log(randomizer(10));
// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних
// цілих числових значень. Відсортувати його за допомоги sort
let arr = [20, 68, 31, 43, 52, 39, 50, 81, 56, 41];
console.log(randomizer(10).sort((a, b) => b - a));
// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних
// цілих числових значень. відфільтрувати  його за допомоги filter, залишивши
// тільки парні числа (без 0!)
console.log(randomizer(10).filter(value => {
        if (value % 2 === 0 && value != 0) {
            return value;
        }
}));
// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово
// починається з великої літери.
console.log('a'.toUpperCase());
let capitalize = (str) => {
    let newStr = '';
    flag = false;
    for (let i = 0; i < str.length; i++) {
        if (str.codePointAt(i) >96 && str.codePointAt(i) < 123 && str[i-1] === " " || !flag)  {
            newStr = newStr.concat(str[i].toUpperCase());
            flag = true;
        } else {
            newStr = newStr.concat(str[i]);
            flag = true;
        }
    }
    return newStr;
};

console.log(capitalize('lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus ex inventore quo.'));

// - Створити функцію-валідатор для адрес електронної пошти. Перевірка повинна
// включати в себе :данні до знака равлика(@), наявність равлика, крапку яка
// знаходиться не меньше ніж на 2 символ далі після равлика, функція не чутлива до
// регістру (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)
// Протестувати на значеннях
let e1 = 'df@fdd.com';
let e2 = 'someeMAIL;@gmail.com';
let e3 = 'someeMAIL;@i.ua';
console.log(e1.indexOf('@'));
// some.email@gmail.com
// Примітка
// Для тих, хто дуже розумний, та почне використовувати регулярні вирази одразу "ні".
// Своїм мозком подумайте над протоколом, з регулярками будете потім бавитись.
let validator = (email) => {

   if (email.indexOf('@') < 0) {
       return 'Invalid email'
   }

    for (let i = 0; i < email.length; i++) {
        if (email[i] !== '@') {
        } else if (email[i] === '@' && i > 1) {
            flag = true;
            if (email[i + 1] === '.') {
                return '.dot is too close to @';
            } else {
                return 'Email confirmed';
            }
        }
    }
    };
console.log(validator(e3));
console.log(validator(e2));
console.log(validator(e1));

// - є масив
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
]
// відсортувати його в спадаючому порядку за кількістю елементів в полі modules
console.log(coursesArray.sort((a, b) => b.modules.length - a.modules.length));;
// - Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.
let count = (str, stringsearch) => {
    let countSymbols = 0;
    for (const strElement of str) {
        if (strElement === stringsearch) {
            countSymbols++
        }
    }
return countSymbols
}
console.log(count("Астрономия это наука о небесных объектах", 'о'));//5

// - Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str,залишивши у ній n слів.
let deleteString = (str, n) => {
    let newstr = '';
    let j = 0;
    if (str.split(' ').length === n) {
        return str;
    }
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== ' ') {
            newstr = newstr.concat(`${str[i]}`);
        } if (str[i] === ' ' && j < n) {
            newstr = newstr.concat(`${str[i]}`);
            j++
            console.log(j);
        } if (str[i] === ' ' && j === n) {
            return newstr
        }
    }
}
console.log(deleteString("Сила тяжести приложена к центру масс тела", 7));
// document.writeln(cutString(str, 5)) // 'Сила тяжести приложена к центру'
//
// -стоврити масив книжок (назва, кількість сторінок, автори , жанри).
let newBooks = [{
    title:'Harry Potter',
    pageCount:500,
    authors:['Rowling'],
    genre:['fantasy']
}, {
    title:'Open Andrea Agassi',
    pageCount:250,
    authors:['Andrea Agassi', 'Helper'],
    genre:['autobiography', 'motivational']
}, {
    title:'Shantaram',
    pageCount:350,
    authors: ['Gregory David','Roberts'],
    genre:['adventure', 'autobiography']
}];
// -знайти наібльшу книжку.

console.log(newBooks.filter(item => {
    let maxPages = 0;
    for (const item of newBooks) {
        if (maxPages < item.pageCount) {
            maxPages = item.pageCount
        }
    }
    return item.pageCount === maxPages
}));

// - знайти книжку/ки з найбільшою кількістю жанрів
console.log(newBooks.filter(item => {
    let maxGenre = 0;
    for (const item of newBooks) {
        if (maxGenre < (item.genre).length) {
            maxGenre = (item.genre).length
        }
    }
    return item.genre.length === maxGenre;
}));

// - знайти книжку/ки з найдовшою назвою
console.log(newBooks.filter(item => {
    let maxTitle = 0;
    for (const item of newBooks) {
        if (maxTitle < item.title.length) {
            maxTitle = item.title.length;
        }
    }
    return item.title.length === maxTitle;
}));
// - знайти книжку/ки які писали 2 автори
console.log(newBooks.filter(item => item.authors.length === 2));
// - знайти книжку/ки які писав 1 автор
console.log(newBooks.filter(item => item.authors.length === 1));
// - вісортувати книжки по кількості сторінок по зростанню
console.log(newBooks.sort((a, b) => a.pageCount - b.pageCount));
