// 1)написати прогу яка вибирає зі введеної строки цифри і виводить їх через кому,
//     наприклад:
// st = 'as 23 fdfdg544' введена строка
// 2,3,5,4,4        #вивело в консолі.
//48 - 57
/*const str = 'as 23 fdfdg544';
let renderInt = (str) => {
    const arr = [];
    for (let i = 0; i < str.length; i++) {
        let char = str.charCodeAt(i);
        if (char <=57 && char >= 48) {
            arr.push(str[i])
        }
    }
    console.log(arr.join());
}
renderInt(str);*/


// #################################################################################
// 2)написати прогу яка вибирає зі введеної строки числа і виводить їх
// так як вони написані
// наприклад:
//     st = 'as 23 fdfdg544 34' #введена строка
// 23, 544, 34              #вивело в консолі
// st = 'as 23 fdfdg544 34'
/*let renderIntTogether = (string) => {
    let newArr = [];
    for (let i = 0; i < string.length; i++) {
        let char = string.charCodeAt(i);
        let charPlusOne = string.charCodeAt(i + 1);
        if ((char <= 57 && char >= 48) && (charPlusOne <= 57 && charPlusOne >= 48)) {
            newArr.push(string[i] + string[i + 1])
        } else if ((char <= 57 && char >= 48) && (charPlusOne > 57 && charPlusOne < 48)) {
            console.log('dgd');
        }
    }
    // console.log(newArr);
}*/

/*renderIntTogether(st)
// 1)Дан list:
const list = [22, 3, 5, 2, 8, 2, -23, 8, 23, 5]
//         - знайти мін число
let ftnMin = (arr) => {
    let min = 0;
    for (const element of arr) {
        if (min > element) {
            min = element;
        }
    }
    const result = min;
    console.log(result);
}
ftnMin(list);*/
// - видалити усі дублікати
/*let ftnDeleteDuble = (arr) => {
    let length = arr.length;
    let newArr = [];
    for (let i = 0; i < length; i++) {
        for (let j = i+1; j < length-1; j++) {
            if (arr[i] === arr[j]) {
                arr[i] = null;
            }
        }
    }
    for (const element of arr) {
        if(element !== null) {
            newArr.push(element)
        }
    }
    console.log(newArr);
}
ftnDeleteDuble(list);*/

// - замінити кожне 4-те значення на 'X'

/*let ftnChangeX = (arr) => {
    for (let i = 1; i < arr.length; i++) {
        if (i % 4 === 0) {
            arr[i] = 'X';
        }
    }
    console.log(arr);
};
ftnChangeX(list);*/

// 2) вивести на екран пустий квадрат з "*" сторона якого вказана як агрумент функції

/*let ftnSquare = (number) => {
    let str = '';
    for (let i = 0; i < number; i++) {
        for (let j = 0; j < number; j++) {
            if (i===0 || i===number-1) {
                str += ' *';
                if (j ===number-1) {
                    str += '\n';
                }
            }else {
                if (j===0 || j===number-1) {
                    str += ' *';
                    if (j ===number-1) {
                        str += '\n';
                    }
                }else {
                    str += '  ';
                }
            }
        }
    }
    console.log(str);
}
ftnSquare(20);*/

// 3) вывести табличку множення за допомогою цикла while

let i = 0;
let j = 0;
let str = '';
const number = 1;
while (i < 9){
    while (j<9) {
        if (i = 0) {
            if (j < 8) {
                str += `${j + 1}`;
            } else if (j === 8) {
                str += `${j + 1}\n`;
            }
            j++;
        }
    }
    i++;

}
console.log(str);

// 4) створити функцію котра буде повертати сумму розрядів числа у вигляді строки (також використовуемо типізацію)
//
// Приклад:
//
//     expanded_form(12) # return '10 + 2'
// expanded_form(42) # return '40 + 2'
// expanded_form(70304) # return '70000 + 300 + 4'