// ВСЕ ЗРОБИТИ СТРІЛОЧНИМИ ФУНКЦІЯМИ!
//     - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
let sqRect = (a,b) => a*b;
console.log(sqRect(4, 5));
// - створити функцію яка обчислює та повертає площу кола з радіусом r
let sqCircle = (r) => 3.14 * r * r;
console.log(sqCircle(5));
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
let sqCylindr = (r,h) => 2 * 3.14 * r * (h + r);
console.log(sqCylindr(4, 8));
// - створити функцію яка приймає масив та виводить кожен його елемент
let itemsArr = (arr) => {
    for (const arrElement of arr) {
        if (Array.isArray(arrElement)) {
            itemsArr(arrElement);
        } else {
            console.log(arrElement);
        }
    }
    };
itemsArr([1,0,2,[5,6,7,['a','g']]])
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
let writeP = (text) => {
    document.write(`<p>${text}</p>`);
};
writeP('Lorem ipsum dolor sit amet, consectetur adipisicing elit. A mollitia quisquam vero.')
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через
// аргумент всім однаковий
let writeUl = (textLi) => {
    document.write(`<ul>`);
    document.write(`<li>${textLi}</li>`);
    document.write(`<li>${textLi}</li>`);
    document.write(`<li>${textLi}</li>`);
    document.write(`</ul>`);
};
writeUl('Lorem ipsum dolor sit amet, consectetur adipisicing elit.');
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через
// аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим
// (тут використовувати цикл)
let writeNumLi = (textLi, qtyLi) => {
    document.write(`<ul>`);
    for (let i = 0; i < qtyLi; i++) {
        document.write(`<li>${textLi}</li>`);
    };
    document.write(`</ul>`);
};
writeNumLi('Lorem ipsum dolor sit amet, consectetur adipisicing elit.',5);
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві),
// та будує для них список
let ftArr = (array) => {
    document.write(`<ul>`);
    for (let i = 0; i < array.length; i++) {
        document.write(`<li>${array[i]}</li>`);
    };
    document.write(`</ul>`);
};
ftArr(['a', 4, true]);
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age ,
// та виводить їх в документ. Для кожного об'єкту окремий блок.
let writeInDoc = (array) => {
    document.write(`<div class="container">`)
    for (let i = 0; i < array.length; i++){
        document.write(`
                        <div class="user-block">
                            <h3>id - ${array[i].id}</h3>
                            <h3>name - ${array[i].name}</h3>
                            <h3>age - ${array[i].age}</h3>
                        </div>
                        `)
    }
    document.write(`</div>`)
};
writeInDoc( [
    {
        id: 1,
        name: 'Klusha',
        age: 34
    },
    {
        id: 2,
        name: 'Ann',
        age: 25
    },
    {
        id: 3,
        name: 'Lola',
        age: 20
    }
]);
// - створити функцію яка повертає найменьше число з масиву
let minInt = (arrayInt) => {
    let min = arrayInt[0];
    for (let i = 0; i < arrayInt.length; i++) {
        if (min > arrayInt[i]) {
            min = arrayInt[i];
        }
    }
    return min;
};
console.log(minInt([1, 2, 7]));
// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву
// та повертає його. Приклад sum([1,2,10]) //->13
let sumInt = (array) => {
    let sum = 0;
    for (const item of array) {
        sum += item;
    }
    return sum;
};
console.log(sumInt([5, 15, 20]));
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у
// відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
let swap = (arr, index1, index2) => {
    let copy =  arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = copy;
    return arr;
};
console.log(swap([11, 22, 33, 44],0,2));
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
let exchange = (sumUAH,currencyValues, exchangeCurrency) => {
    for (let i = 0; i < currencyValues.length; i++) {
        if (exchangeCurrency == currencyValues[i].currency) {
            let value = currencyValues[i].value;
            let result = sumUAH / value;
            return result
        }
    }
};
console.log(exchange(10000, [{currency: 'USD', value: 40}, {currency: 'EUR', value: 42}], 'USD'));;