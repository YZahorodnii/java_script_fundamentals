// Всі функції повинні бути описані стрілочним типом!!!!
// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
let minInt = (a,b,c) => {
    let min = a;
    if (a < b && b < c) {
        console.log(a);
    }else if (a > b && b < c) {
        console.log(b);
    }else if (a > b && b > c) {
        console.log(c);
    }else if (a < b && b > c && c < a) {
        console.log(c);
    }else if (a < b && b > c && a < c) {
        console.log(a);
    }
};
minInt(3, 2, 1);
// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
let maxInt = (a, b, c) => {
    if (a > b && b > c) {
        console.log(a);
    }
    else if (a > b && b < c && a > c) {
        console.log(a);
    }
    else if (a > b && b < c && a < c) {
        console.log(c);
    }
    else if (a < b && b > c) {
        console.log(b);
    }
    else if (a < b && b < c) {
        console.log(c);
    }
};
maxInt(30, 8, 10);
// - створити функцію яка повертає найбільше число з масиву
let maxIntArr = (array) => {
    let max = array[0];
    for (const item of array) {
        if (max < item) {
            max = item;
        }
    }
    return max;
};
console.log(maxIntArr([1, 2000, 300, 40, 5, 6]));
// - створити функцію яка повертає найменьше число з масиву
let minIntArr = (array) => {
    let min = array[0];
    for (item of array) {
        if (min > item) {
            min = item;
        }
    }
    return min;
};
console.log(minIntArr([1, 2, 3, 0.4, 5, 6]));
// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та
// повертає його. Приклад [1,2,10]->13
let sumArr = (array) => {
    let sum = 0;
    for (const item of array) {
        sum += item;
    }
    return sum;
};
console.log(sumArr([1, 2, 3, 4, 5, 6]));
// - Дано натуральное число n. Выведите все числа от 1 до n.
let logItems = (n) => {
for (let i = 1; i <= n; i++) {
    console.log(i);
}
};
logItems(7)
// - Даны два целых числа A и В . Выведите все числа от A до B включительно,
// в порядке возрастания, если A < B, или в порядке убывания в противном случае.
let numbers = (A, B) => {
    if (A < B) {
        for (let i = A; i <= B; i++) {
            console.log(i);
        }
    } else if (A > B) {
        for (let i = A; i >= B; i--) {
            console.log(i);
        }
    }
};
numbers(8, 3);
// -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться
// в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]
let swap = (array, index) => {
    let copy = array[index];
    array[index] = array[index+1];
    array[index+1] = copy;
    return array;
};
console.log(swap([11, 22, 33, 44, 55], 2));
// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву.
// Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]

// let ftZero = (arr) => {
//     for (i = 0; arr.length-i ==1; i++) {
//         if (arr[i] === 0 && arr[i+1]) {
//             let c = arr[i];
//             arr[i] = arr[i+1];
//             arr[i+1] = c;
//         }
//     }
//     return arr;
// };
/*let ftZero = (arr) => {
    let sumZero = 0;
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 0) {
            sumZero++;
        } else if (arr[i] !== 0) {
            newArr.push(arr[i]);
        }
    }
    for (let j = 0; j < sumZero; j++) {
        newArr.push(0);
    }
    return newArr
};*/
/*let ftnZero = (arr) => {
    let swap = false;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0 && (arr[i+1] && arr[i+1] !== 0)) {
            c = arr[i];
            arr[i]= arr[i+1];
            arr[i+1] = c;
            swap = true;
        }
        if (swap && i == arr.length-1) {
            i = 0;
            swap = false;
        }
    }

    return arr;
};*/

let ftnZero = (arr) => {
    for (let i = arr.length; i >= 0; i--) {
        // console.log("i : " + i);
        for (let j = 0; j < i; j++) {
            // console.log("arr[j] : " + arr[j]);
            if (arr[j] === 0 && arr[j + 1]) {
                c = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = c;
            }

        }

    }
    console.log(arr);
};

ftnZero([9, 6, 0, 0, 0, 5, 0, 9]);

let arr = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
        console.log(arr[i][j]);

    }

}

/*callback practice*/
function filter(arr, callback) {
    let exitArr = [];
    for (const item of arr) {
        if (callback(item)) {
            exitArr[exitArr.length] = item;
        }
    }
    return exitArr;
};

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
    {name: 'max', age: 31, status: true}];

console.log(filter(users, function (user) {
    return user.age > 30
}));