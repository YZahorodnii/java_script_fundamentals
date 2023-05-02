
// - Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
// Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів
// {
//     id: 1,
//         name: 'Leanne Graham',
//     username: 'Bret',
//     email: 'Sincere@april.biz',
//     address: {
//     street: 'Kulas Light',
//         suite: 'Apt. 556',
//         city: 'Gwenborough',
//         zipcode: '92998-3874',
//         geo: {
//         lat: '-37.3159',
//             lng: '81.1496'
//     }
// },
//     phone: '1-770-736-8031 x56442',
//         website: 'hildegard.org',
//     company: {
//     name: 'Romaguera-Crona',
//         catchPhrase: 'Multi-layered client-server neural-net',
//         bs: 'harness real-time e-markets'
// }
// }
/*
class Client {
    constructor(id, name, username, email, street, suite, city, zipcode,
                GeoLat, GeoLng, phone, website, companyName, companyCatchPhrase, companyBs) {
        this.name = name;
        this.username = username;
        this.email = email;
        this.address = {};
        this.address.street = street;
        this.address.suite = suite;
        this.address.city = city;
        this.address.zipcode = zipcode;
        this.address.geo = {};
        this.address.geo.lat = GeoLat;
        this.address.geo.lng = GeoLng;
        this.phone = phone;
        this.website = website;
        this.company = {};
        this.company.name = companyName;
        this.company.catchPhrase = companyCatchPhrase;
        this.company.bs = companyBs;
    }
};



let newClient = new Client(1,'Yurko', 'yarkoz', 'yurkoz@gmail.com', 'Shevchenka', 29, 'Kyiv', 03134, '456.643', '654.876', '0444585666', 'www.yayaya.com', 'SelfEmployed LTD', 'You will never know, I will never show...', 'IT services', );
console.log(newClient);
*/

//
// -  Створити функцію конструктор / клас  який описує об'єкт тегу
// Поля :
//     -назва тегу ()
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
/*
class Tag {
    constructor(titleOfTag, action) {
        this.titleOfTag = titleOfTag;
        this.action = action;
        this.attrs = [];
        this.addAttr = function(titleOfAttr, actionOfAttr) {
            this.attrs.push(new Attribute(titleOfAttr, actionOfAttr));
        }
}
};
class Attribute {
constructor(titleOfAttr, actionOfAttr) {
    this.titleOfAttr = titleOfAttr;
    this.actionOfAttr = actionOfAttr;
}
};

let aTag = new Tag('a', 'the main purpose is to create links');
aTag.addAttr('href', 'sets address to the link of document');
aTag.addAttr('tabindex', 'determines order of passing between links using TAB')
aTag.addAttr('rel', 'determines relations between current and linked document')

let divTag = new Tag('div', 'help to select blocks and change their appearence');
divTag.addAttr('align', 'aligns objects');
divTag.addAttr('title', 'adds descriptional text to container');

let h1Tag = new Tag('h1', 'the most important heading');
h1Tag.addAttr('align', 'aligns heading');
h1Tag.addAttr('title', 'adds descriptional text to container');

let spanTag = new Tag('span', 'helps to select and design row elements');
spanTag.addAttr('hidden', 'hide the content inside the tag');
spanTag.addAttr('style', 'adds style to the row using CSS rules');
spanTag.addAttr('spellcheck', 'tells browser to check spelling or not');

let inputTag = new Tag('input', 'allows to create different interface elements in forms');
inputTag.addAttr('accept', 'define type of document that can be uploaded through tag');
inputTag.addAttr('autocomplete', 'switch on/off autocomplete');

let formTag = new Tag('form', 'establish connection between server and user to share files');
formTag.addAttr('method', 'define method of HTTP protocol');
formTag.addAttr('name', 'add form name');

let optionTag = new Tag('option', 'defines individual items of list that created nwith select tag');
optionTag.addAttr('label', 'specify mark of item of list');
optionTag.addAttr('value', 'defines the value that deliver to server or read by script');

let selectTag = new Tag('select', 'allows to create element with drop down list');
selectTag.addAttr('accesskey', 'allows to proceed to the list using special keys');
selectTag.addAttr('multiple', 'allows user to select more than one element from the list');

console.log(aTag);
console.log(divTag);
console.log(h1Tag);
console.log(spanTag);
console.log(inputTag);
console.log(formTag);
console.log(optionTag);
console.log(selectTag);
*/

// ('href', 'sets address to the link of document')
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результуючого об'єкту
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/!*some props and values*!/},
//     {/!*...*!/},
//     {/!*...*!/},
// ]
//
// }

class User_Card {
    constructor(balance=100, transactionLimit=100, number, key=[1,2,3]) {
        this.balance = balance;
        this.transactionLimit = transactionLimit;
        this.userCard = function (number) {
            return 'userCard'
        }
        this.getCardOptions = function() {
            return 'getCardOptions'
        }
        this.historyLogs = [];
        this.key = key;


    }

}

card1 = new User_Card(90);
console.log(card1);
card2 = new User_Card();
console.log(card2);

/*
1) Створити карту користувача(User Card):
Створити функцію «userCard» яка приймає число(будь-яке число) і повертає об’єкт з методами:
    const card3 = userCard(3); // returns an object with methods

User Card методи:
    getCardOptions. Дана функція повертає об’єкт котрий містить інформацію про карту:
    card3.getCardOptions(); // returns options object with card info

Об’єкт має містити такі властивості:
    • balance (по замовчуванням 100)
    • transactionLimit (по замовчуванням 100. Це ліміт коштів які ви можете взяти з
    карти)
    • historyLogs (масив об’єктів який містить інформацію про операції та трансакції
    данної карти)
    • key (число в діапазоні[1; 3] залежить від числа яке ви передали в userCard
    функції. Кожна карта повинна мати унікальний key)

putCredits. Ця функція отримує певну кількість грошей і заповнює баланс
карти:
    card3.putCredits(150);
takeCredits. Ця функція отримує певну кількість грошей і віднімає ці кошти з баланса карти
(протилежний за дією від метода putCredits):
card3.takeCredits(100);
setTransactionLimit.
card3.setTransactionLimit(5000); transferCredits.
card3.transferCredits(50, card1);
Ви можете брати кошти з картки, якщо ліміт транзакцій та залишок коштів перевищують кількість
коштів, які ви бажаєте взяти. Якщо ні, то слід записати відповідне повідомлення у консолі
(скористайтеся console.error)
як ліміт транзакцій на картці
Ця функція приймає як аргумент число і встановлює його
Ця функція отримує два аргументи - кількість кредитів, які потрібно передати, та карту одержувача (інший об’єкт, створений функцією `userCard` - card1):
Кошти, які ви хочете передати, повинні обкладатися податками 0,5%.
Не забудьте перед перерахуванням перевірити залишок балансу та ліміт
транзакцій відправника кредитів (card3).

    Ви повинні відслідковувати тільки Put credits/Take credits/Transaction limit change операції і зберігайте history log. History log (Дивитись зображення 1) інформація має зберігатись в об’єктах з такими властивостями:
    • operationType (стрічка яка описує здійснену операцію)
• credits (кількість коштів)
• operationTime (формат: "27/07/2018, 03:24:53". Час коли була здійснена операція)
getCardOptions
2) Створити UserAccount:
    Зображення 1 — Приклад виклику функції
Створити класс `UserAccount` (для цього завдання можна використати ES6 класс або звичайну функцію):
const user = new UserAccount('Bob');
Класс має містити:
    Властивості акаунту користувача:
    - name (передати в конструкторі)
- cards (Масив карток користувача. Масив не має бути довшим ніж 3)
Методи акаунту користувача:
    - addCard. Створює нову карту (використовуйте ‘userCard’ функцію) та додайте її до cards:
    user.addCard();
Користувач повинен мати <= 3 карти.
- getCardByKey. Приймає число в діапазоні {1; 3} і повертає об’єкт карти
/!*
* Повертає об’єкт {
* key: 1,
* balance: 150,
* ...other card properties *}
*!/
user.getCardByKey(1); Код

Приклад переказу коштів:
    let user = new UserAccount('Bob'); user.addCard()
user.addCard()
let card1 = user.getCardByKey(1); let card2 = user.getCardByKey(2);
card1.putCredits(500); card1.setTransactionLimit(800); card1.transferCredits(300, card2);
card2.takeCredits(50); console.log(card1.getCardOptions()); // див зображення 2
Зображення 2 - Об’єкт властивостей card1 console.log(card2.getCardOptions()); // див зображення 3
Зображення 3 - Об’єкт властивостей card2 Посилання
- https://css-tricks.com/javascript-scope-closures/
- https://developer.mozilla.org/uk/docs/Web/JavaScript/Reference/Classes
*/


