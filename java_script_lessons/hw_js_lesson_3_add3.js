// 1. Створити пустий масив та :
//     a. заповнити його 50 парними числами за допомоги циклу.
/*
let arr = [];
let j = 0;
for (let i = 0; i < 100; i++) {
    if (i % 2 == 0) {
        arr[j] = i;
        j++;
    }
}
console.log(arr);
 */
//     b. заповнити його 50 непарними числами за допомоги циклу.
/*
let arr = [];
let j = 0;
for (let i = 1; i < 100; i += 2) {
    arr[j] = i;
    j++;
}
console.log(arr);
*/
//     c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
/*
let arr = [];
for (let i = 0; i < 20; i++) {
    arr[i] = Math.floor(Math.random() * 100);
}
console.log(arr);
 */
// d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google:Generate random number JS)
/*
let arr = [];
for (let i = 0; i < 20; i++) {
    arr[i] = Math.floor(Math.random(8) * 732);
}
console.log(arr);
 */
// 2. Вивести за допомогою console.log кожен третій елемен
/*
for (let i = 2; i < arr.length; i +=3) {
    console.log(arr[i]);
};
 */
// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
/*
for (let i = 2; i < arr.length; i +=3) {
    if (arr[i] % 2 == 0) {
        console.log(arr[i]);
    }
};

 */
// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та

// записати їх в новий масив
/*
let newArr = [];
let j = 0;
for (let i = 2; i < arr.length; i += 3) {
    if (arr[i] % 2 == 0) {
        newArr[j] = arr[i];
        j++;
    }
};
console.log(newArr);
*/

// 5. Вивести кожен елемент масиву, сусід справа якого є парним
// example [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56
/*
for (let i = 0; i < arr.length; i++) {
    if (arr[i+1] % 2 == 0) {
        console.log(arr[i]);
    }
};
 */
// 6. Є масив з числами
let numberArr = [100,250,50,168,120,345,188]
// Які характеризують вартість окремої покупки.
// Обрахувати середній чек.
/*
let sum = 0;
for (let i = 0; i < numberArr.length; i++) {
    sum += numberArr[i];
}
let average = sum/numberArr.length;
console.log(average);
 */
// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх
// в інший масив.
/*
let rndmArr = [];
let rndmMult = [];
for (let i = 0; i < 20; i++) {
    rndmArr[i] = Math.floor(Math.random(1)*50);
    rndmMult[i] = (rndmArr[i] * 5);
}
console.log(rndmMult);
 */
// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо
// елемент є числом - додати його в інший масив.
/*
let newArr = [4, 'kiki', false, 'chichi', 78, true, 877, '565'];
let arrElement = [];
let j = 0;
for (let i = 0; i < newArr.length; i++) {
    if (typeof(newArr[i]) == 'number') {
        arrElement[j] = newArr[i]
            j++;
    }
}
console.log(arrElement);
 */
// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
let usersWithId = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false}
];

let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];
//
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив
// Example:
//     let usersWithCities = [
//             {
//                 id: 1, // <===
//                 name: 'vasya',
//                 age: 31,
//                 status: false,
//                 address: {
//                     user_id: 1, // <===
//                     country: 'Ukraine',
//                     city: 'Ternopil'
//                 }
//             },
//             // TO BE CONTINUED .....
//         ]
/*
for (let i = 0; i < usersWithId.length; i++) {
    for (let k = 0; k < citiesWithId.length; k++) {
        if (usersWithId[i].id == citiesWithId[k].user_id) {
            usersWithId[i].address = citiesWithId[k];
        }
    }
};
 */
//
// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи,
//   значення яких є парними.
/*
let randomArr = [];
for (let i = 0; i < 10; i++) {
    randomArr[i] = Math.floor(Math.random(4) * 100);
    if (randomArr[i] % 2 == 0) {
        console.log(randomArr[i]);
    }
};
 */
// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого
// циклу скопіювати значення одного масиву в інший.
/*
let array = [1,2,3,4,5,6,7,8,9,10];
let newArray = [];
let i = 0;
for (const element of array) {
    newArray[i] = element;
    i++;
}
console.log(newArray);
 */
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
let arr = ['a','b','c'];
let str = '';
/*
for (let i = 0; i < arr.length; i++) {
    str = arr[i-2] + arr[i-1] + arr[i]
};
console.log(str);
 */
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.

let i = 0;
while (i < arr.length) {
    str += arr[i]
    i++;
}
console.log(str);

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
/*
let arr = ['a','b','c'];
let str = '';
for (const arrElement of arr) {
    str += arrElement
}
console.log(str);
 */
// Зацикленість
function foo(name, age) {
    let user = {name, age};

    return {
        getName() {
            return user.name;
        },
        getAge() {
            return user.age;
        }
    }
};

let foo1 = foo( 'Vasya', 34);
console.log(foo1.getName());
console.log(foo1.getAge());




