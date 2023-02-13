// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function areaRect(a, b) {
    return a * b;
};
// - створити функцію яка обчислює та повертає площу кола з радіусом r
function areaCircle(r) {
    const Pi = 3.14;
    return Pi * r**2;
};
// - створити функцію яка обчислює та повертає площу циліндру висотою h,
// та радіутом r
function areaCylinder(h,r) {
    return 2*Pi*r * (h + r);
};
// - створити функцію яка приймає масив та виводить кожен його елемент
function looping(arr) {
    for (const arrElement of arr) {
        console.log(arrElement);
    }
};
// - створити функцію яка створює параграф з текстом. Текст задати через
// аргумент
function write(text) {
    document.write(`<p>${text}</p>`)
};
// - створити функцію яка створює ul з трьома елементами li. Текст li
// задати через аргумент всім однаковий
/*
function listing(textForLi) {
    document.write(`<ul>
<li>${textForLi}</li>
<li>${textForLi}</li>
<li>${textForLi}</li>
</ul>`)
};
*/
// - створити функцію яка створює ul з трьома елементами li. Текст li
// задати через аргумент всім однаковий. Кількість li визначається другим
// аргументом, який є числовим (тут використовувати цикл)
function listing(textForLi,n) {
    document.write(`<ul>`)
    for (let i = 0; i < n; i++) {
        document.write(`<li>${textForLi}</li>`)
    }
    document.write(`</ul>`)
};
// - створити функцію яка приймає масив примітивних елементів
// (числа,стрінги,булеві), та будує для них список
function makeUl(arr) {
    document.write(`<ul>`)
    for (let i = 0; i < arr.length; i++) {
        document.write(`<li>${arr[i]}</li>`)
    }
    document.write(`</ul>`)
};
// - створити функцію яка приймає масив об'єктів з наступними полями id,
// name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
function writeInDoc(arr) {
    document.write(`<div class="container">`)
    for (let i = 0; i < arr.length; i++){
        document.write(`
                        <div class="user-block">
                            <h3>id - ${arr[i].id}</h3>
                            <h3>name - ${arr[i].name}</h3>
                            <h3>age - ${arr[i].age}</h3>
                        </div>
                        `)
    }
    document.write(`</div>`)
};

// let arr = [
//     {
//         id: 1,
//         name: 'Klusha',
//         age: 34
//     },
//     {
//         id: 2,
//         name: 'Ann',
//         age: 25
//     },
//     {
//         id: 3,
//         name: 'Lola',
//         age: 20
//     }
// ];
// - створити функцію яка повертає найменьше число з масиву

// для масиву довжиною "3"
function smallest(arr) {
    if (arr[0] < arr[1] && arr[1] < arr[2]) {
        console.log(arr[0]);
    }
    if (arr[0] > arr[1] && arr[1] < arr[2]) {
        console.log(arr[1]);
    }
    if (arr[0] > arr[1] && arr[1] > arr[2]) {
        console.log(arr[2]);
    }
    if (arr[0] < arr[1] && arr[1] > arr[2] && arr[0] > arr[2]) {
        console.log(arr[2]);
    }
    if (arr[0] < arr[1] && arr[1] > arr[2] && arr[0] < arr[2]) {
        console.log(arr[0]);
    }
};
// - створити функцію sum(arr)яка приймає масив чисел, сумує значення
// елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
function sum(arr) {
    let result = 0
    for (let i = 0; i < arr.length; i++) {
        result += arr[i];
    }
    return result;
};
// - створити функцію swap(arr,index1,index2). Функція міняє місцями
// заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
// array = [22,33,44]; /*0, 1*/
function swap(arr,index1,index2) {
   let c = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = c;
    return array;
};
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues, exchangeCurrency)
// Приклад exchange (10000,[{currency:'USD',value:40},{currency:'EUR', value:42}],'USD') // => 250
// let currencyValues = [{currency: 'USD', value: 40}, {currency: 'EUR', value: 42}];
// let exchangeCurrency = 'USD';
// let sumUAH = 10000;
function exchange(sumUAH,currencyValues, exchangeCurrency) {
    for (let i = 0; i < currencyValues.length; i++) {
        if (exchangeCurrency == currencyValues[i].currency) {
            let value = currencyValues[i].value;
            let result = sumUAH / value;
            console.log(result);
        }
    }
};
