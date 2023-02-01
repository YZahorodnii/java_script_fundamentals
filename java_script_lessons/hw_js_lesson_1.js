//- Створити змінні. Присвоїти кожному з них значення:
// 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
// Вивести кожну змінну за допомогою: console.log

let aa = 'hello';
let bb = 'owu';
let cc = 'com';
let d = 'ua';
let e = 1;
let f = 10;
let g = -999;
let h = 123;
const PI = 3.14;
let i = 2.7;
let j = 16;
let k = true;
let l = false;

console.log(aa);
console.log(bb);
console.log(cc);
console.log(d);
console.log(e);
console.log(f);
console.log(g);
console.log(h);
console.log(PI);
console.log(i);
console.log(j);
console.log(k);
console.log(l);

//- Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм
// ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)

let firstName = 'Yaroslav';
let middleName = 'Oleksandrovich';
let lastName = 'Zahorodnii';
// let person = firstName +' '+ middleName +' '+lastName;
let person = `${firstName} ${middleName} ${lastName}`
console.log(person);

// - За допомогою оператора typeof визначити типи наступних змінних та
// вивести їх в консоль.
let a = 100; let b = '100'; let c = true;
console.log(typeof a);
console.log(typeof b);
console.log(typeof c);

// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими
// Імям, По-Батькові та роками. та вивести в консоль
let myName = prompt('Please enter your name', 'e.g. Harry');
let myLastName = prompt('Please enter your last name', 'e.g. Potter');
let myFatherName = prompt('Please enter your father\'\s name', 'e.g. James');
let personName = `${myName} ${myFatherName} ${myLastName}`;
console.log(personName);
