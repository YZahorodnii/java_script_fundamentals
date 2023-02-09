
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
for (let i=0; i < 10; i++) {
    document.write(`<div>I'm new block</div>`)
};
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
for (let i=0; i < 10; i++) {
    document.write(`<div>I'm new block # ${i + 1}</div>`)
};
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
let variable = 0;
while (variable < 20) {
    document.write(`<h1>New heading</h1>`)
    variable++;
};
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
let newVar = 0;
while (newVar < 20) {
    document.write(`<h1>New heading # ${newVar+1}</h1>`)
    newVar++;
};
// - Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Масив:

let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
document.write(`<ul>`)
for (let i = 0; i < listOfItems.length; i++) {
    document.write(`<li>ITEM OF ARRAY</li>`)
};
document.write(`</ul>`)
// ШАБЛОН:
    // <ul>
    //     <li>ITEM OF ARRAY</li>
    //     <!--
    //         і тд інші об'єкти масиву
    //          ...
    //          ...
    //          ...
    //     -->
    // </ul>

// замість 'ITEM OF ARRAY' підставити елемент з масиву щоб получився цілий
// список з даними з масиву
document.write(`<ul>`)
for (let i = 0; i < listOfItems.length; i++) {
    document.write(`<li>${listOfItems[i]}</li>`)
};
document.write(`</ul>`)
// -----------------------------------------------

//     Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону  Зробити адекватну стилізацію
// Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон
//
let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
    },
];
// for (i = 0; i < products.length; i++) {
//     document.write(`<div class="product-card">
//     <h3 class="product-title">TITLE. Price - PRICE</h3>
//     <img src="IMAGE" alt="" class="product-image">
//     </div>
// `)
// };
// ШАБЛОН
// <div class="product-card">
//     <h3 class="product-title">TITLE. Price - PRICE</h3>
// <img src="IMAGE" alt="" class="product-image">
// </div>
// Замість TITLE PRICE IMAGE - підставити відповідні поля з об'єкту
for (i = 0; i < products.length; i++) {
    document.write(`<div class="product-card">
    <h3 class="product-title">${products[i].title}. Price - ${products[i].price}</h3>
    <img src="${products[i].image}" alt="item" class="product-image">
    </div>
`)
};
// --------------------
//     є масив
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
// за допомоги циклу вивести:
//     - користувачів зі статусом true
// - користувачів зі статусом false
// - користувачів які старші за 30 років
for (const i in users) {
    if (users[i].status == true){
        console.log(users[i]);
    }
};

for (const i in users) {
    if (users[i].status == false){
        console.log(users[i]);
    }
};

for (const i in users) {
    if (users[i].age > 30){
        console.log(users[i]);
    }
};

                // ADDITIONAL TASK1

// --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль
let arr = [];
for (let i = 0; i < 5; i++) {
    arr.push(i);
};
console.log(arr);

let arr1 = [];
for (let i = 0; i < 5; i++) {
    arr1.push('string')
};
console.log(arr1);

let arr2 = [];
for (let i = 0; i < 5; i++) {
    arr2.push(i);
    arr2.push('string')
    arr2.push(false)
};
console.log(arr2);

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись
// до конкретного індексу. Вивести в консоль
let newArr = [];
newArr[0] = 'string';
newArr[1] = '5';
newArr[2] = true;
newArr[3] = false;
console.log(newArr);
// - є масив [2,17,13,6,22,31,45,66,100,-18] :
// 1. перебрати його циклом while
let array = [2,17,13,6,22,31,45,66,100,-18];
var i = 0;
while (i < array.length) {
    console.log(array[i]);
    i++;
};
//     2. перебрати його циклом for
for (i = 0; i < array.length; i++) {
    console.log(array[i]);
};
//     3. перебрати циклом while та вивести  числа тільки з непарним індексом
let a = 1;
while (a < array.length) {
    console.log(array[a]);
    a += 2;
};
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
for (let i = 1; i < array.length; i += 2) {
    console.log(array[i]);
};
// 5. перебрати циклом while та вивести  числа тільки парні  значення
let b = 0;
while (b < array.length) {
    console.log(array[b]);
    b += 2;
};
// 6. перебрати циклом for та вивести  числа тільки парні  значення
for (let i = 0; i < array.length; i += 2) {
    console.log(array[i]);
};
// 7. замінити кожне число кратне 3 на слово "okten"
// for (i = 0; i < array.length; i++) {
//     if (array[i] % 3 == 0) {
//         array[i] = 'okten';
//     }
// };
// console.log(array);
// 8. вивести масив в зворотньому порядку.
for (i = array.length-1; i >= 0; i--) {
    console.log(array[i]);
};
// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
let c = array.length-1;
while (c >= 0) {
    console.log(array[c]);
    c--;
};

for (i = array.length-1; i >= 0; i--) {
    console.log(array[i]);
};

let d = array.length-1;
while (d >= 0) {
    console.log(array[d]);
    d -= 2;
};

let e = 0;
while (e < array.length) {
    console.log(array[e]);
    e += 2;
};
// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
let newArray = [1,2,3,4,5,6,7,8,9,10];
for (const number of newArray) {
    console.log(newArray[number-1]);;
};
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
let letArray = ['aa','bb','cc','dd','ee','ff','gg','hh','ii','jj'];

for (let j = 0; j < letArray.length; j++) {
    console.log(letArray[j]);
}
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
let massArr = [false, true, 4, 6, 10, 100, 'hghg', 'rtr', 4, 0];
for (let j = 0; j < massArr.length; j++) {
    console.log(massArr[j]);
};
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof
// вивести тільки булеві елементи
for (let j = 0; j < massArr.length; j++) {
    if (typeof(massArr[j]) == 'boolean') {
        console.log(massArr[j]);
    }
};
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof
// вивести тільки числові елементи
for (let j = 0; j < massArr.length; j++) {
    if (typeof(massArr[j]) == 'number') {
        console.log(massArr[j]);
    }
};
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof
// вивести тільки рядкові елементи
for (let j = 0; j < massArr.length; j++) {
    if (typeof(massArr[j]) == 'string') {
        console.log(massArr[j]);
    }
};
// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до
// конкретних індексів.
// Вивести в консоль всі його елементи в циклі.
let emptyArr = [];
emptyArr[0]= 66;
emptyArr[1] = 99
emptyArr[2] = 'hower'
emptyArr[3] = 'bull'
emptyArr[4] = false
emptyArr[5] = 'cool'
emptyArr[6] = 'true'
emptyArr[7] = true
emptyArr[8] = 0
emptyArr[9] = 123
for (let j = 0; j < emptyArr.length; j++) {
    console.log(emptyArr[j]);
};
// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та
// document.write
for (let j = 0; j < 10; j++) {
    console.log(j+1);
    document.write(`<p>step #${j+1}</p>`)
};
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та
// document.write
for (let j = 0; j < 100; j++) {
    console.log(j+1);
    document.write(`<p>step #${j+1}</p>`)
};
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та
// document.write
for (let j = 0; j < 100; j += 2) {
    console.log(j+1);
    document.write(`<p>step #${j+1}</p>`)
};
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
for (let j = 1; j < 100; j += 2) {
    console.log(j+1);
    document.write(`<p>step #${j+1}</p>`)
};
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
for (let j = 0; j < 100; j += 2) {
    console.log(j+1);
    document.write(`<p>step #${j+1}</p>`)
};
// стоврити масив книжок (назва, кількість сторінок, автори , жанри).
let books = [
{
    title:'Harry Potter',
    pageCount:500,
    authors:['Rowling', 'J.K.', 'Hagwards'],
    genre:['fantasy']
},
{
    title:'Open',
    pageCount:300,
    authors: ['Agasi', 'Andre'],
    genre:['autobiography','motivational']
},
{
    title:'Shantaram',
    pageCount:400,
    authors: ['Robert'],
    genre:['adventure', 'detective', 'autobiography']
}
];
// -знайти наібльшу книжку.
/*
if (books[0].pageCount > books[1].pageCount && books[0].pageCount > books[2].pageCount) {
    console.log(books[0]);
}
if (books[0].pageCount < books[1].pageCount && books[1].pageCount > books[2].pageCount) {
    console.log(books[1]);
}
if (books[0].pageCount < books[1].pageCount && books[1].pageCount < books[2].pageCount) {
    console.log(books[2]);
}
if (books[0].pageCount > books[1].pageCount && books[0].pageCount < books[2].pageCount
    && books[0].pageCount < books[2].pageCount) {
    console.log(books[0]);
};
*/
// // - знайти книжку/ки з найбільшою кількістю жанрів
/*
if ((books[0].genre).length > (books[1].genre).length && (books[0].genre).length > (books[2].genre).length) {
    console.log(books[0]);
}
if ((books[0].genre).length < (books[1].genre).length && (books[1].genre).length > (books[2].genre).length) {
    console.log(books[1]);
}
if ((books[0].genre).length < (books[1].genre).length && (books[1].genre).length < (books[2].genre).length) {
    console.log(books[2]);
}
if ((books[0].genre).length > (books[1].genre).length && (books[0].genre).length < (books[2].genre).length
    && (books[0].genre).length < (books[2].genre).length) {
    console.log(books[0]);
};

 */
// - знайти книжку/ки з найдовшою назвою
/*
if ((books[0].title).length > (books[1].title).length && (books[0].title).length > (books[2].title).length) {
    console.log(books[0]);
}
if ((books[0].title).length < (books[1].title).length && (books[1].title).length > (books[2].title).length) {
    console.log(books[1]);
}
if ((books[0].title).length < (books[1].title).length && (books[1].title).length < (books[2].title).length) {
    console.log(books[2]);
}
if ((books[0].title).length > (books[1].title).length && (books[0].title).length < (books[2].title).length
    && (books[0].title).length < (books[2].title).length) {
    console.log(books[0]);
};
*/
// - знайти книжку/ки які писали 2 автори
/*
for (let j = 0; j < books.length; j++) {
    if ((books[j].authors).length == 2) {
        console.log(books[j]);
    }
};
*/
// - знайти книжку/ки які писав 1 автор
/*
for (let j = 0; j < books.length; j++) {
    if ((books[j].authors).length == 1) {
        console.log(books[j]);
    }
};

 */