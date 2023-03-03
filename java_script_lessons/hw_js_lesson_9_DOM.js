
// - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.

/*
let div = document.createElement('div');
div.innerText = 'Hi there!';
div.classList.add('wrap', 'collapse', 'alpha', 'beta');
div.style.background = 'silver';
div.style.color = 'purple';
div.style.fontSize = 18;
document.body.appendChild(div);
document.body.appendChild(div.cloneNode(true));
*/

// - Є масив:
/*let arr = ['Main','Products','About us','Contacts']
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)

let ul = document.createElement('ul');
document.body.appendChild(ul);
for (const item of arr) {
    let li = document.createElement('li');
    li.innerText = item;
    ul.appendChild(li);
};*/

// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title
// та monthDuration. Завдання робити через цикли.

/*for (const item of coursesAndDurationArray) {
    let div = document.createElement('div');
    div.innerText = `Name of course - ${item.title},  Duration of course - ${item.monthDuration}`
        document.body.appendChild(div);
};
*/
// =========================
//
//     - Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.
/*for (const item of coursesAndDurationArray) {
    let div = document.createElement('div');
    div.classList.add('item');

    let h1 = document.createElement('h1');
    h1.classList.add('heading');
    h1.innerText = `${item.title}`;

    let p = document.createElement('p');
    p.classList.add('description');
    p.innerText = `Duration of the course : ${item.monthDuration}`;

    div.appendChild(h1);
    div.appendChild(p);
    document.body.appendChild(div);
};*/
// ==========================
//
// - є масив simpsons, котрий лежить в arrays.js (на цей момент ви вже знаєте де
// він знаходиться)
// Проітерувати його, створиши для кожного об'єкту  масиву <div class='member'>
// та наповнити його данними з об'єкту.
//     Якщо людською мовою: під кожного члена родини зробити блок та наповнити
//     його інформацією з цього об'єкту
/*let simpsons = [
    {
        name: 'Bart',
        surname: 'Simpson',
        age: 10,
        info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
        photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
    },
    {
        name: 'Homer',
        surname: 'Simpson',
        age: 40,
        info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
        photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
    },
    {
        name: 'Marge',
        surname: 'Simpson',
        age: 38,
        info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
    },
    {
        name: 'Lisa',
        surname: 'Simpson',
        age: 9,
        info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
    },
    {
        name: 'Maggie',
        surname: 'Simpson',
        age: 1,
        info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
    },
];
let container = document.createElement('div');
document.body.appendChild(container);
for (const member of simpsons) {
    let block = document.createElement('div');
    block.classList.add('member');

    let img = document.createElement('img');
    img.setAttribute('src', `${member.photo}`);

    let h2 = document.createElement('h2');
    h2.innerText = `${member.name}`;

    let h3 = document.createElement('h3');
    h3.innerText = `${member.surname}`;

    let h4 = document.createElement('h4');
    h4.innerText = `${member.age}`;

    let p = document.createElement('p');
    p.innerText = `${member.info}`;
    block.append(img, h2, h3, p);
    container.appendChild(block);
};*/
// =========================
//     Цикл в циклі
// - Є масив coursesArray котрий лежить в arrays.js (на цей момент ви вже знаєте
// де він знаходиться)
//
// Створити для кожного елементу масиву свій блок, блок розділити блоками, в
// яких будуть зберігатись значення окремих властивостей, для властивості modules
// зробити список з елементами
// Приклад структири знаходиться у файлі example.png який лежить в папці з
// поточним фйлом

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
let container = document.createElement('div');
container.classList.add('container', 'flex');
for (const item of coursesArray) {
    let mainBlock = document.createElement('div');
    mainBlock.classList.add('mainblock', 'flex');

    let block1 = document.createElement('div');
    block1.innerText = `${item.title}`;
    block1.classList.add('block1', 'flex');

    let durationBlock = document.createElement('div');

    let block2 = document.createElement('div');
    block2.innerText = `Month Duration - ${item.monthDuration}`;
    block2.classList.add('block2', 'flex');

    let block3 = document.createElement('div');
    block3.innerText = `Hour Duration - ${item.hourDuration}`;
    block3.classList.add('block3', 'flex');

    durationBlock.append(block2, block3);
    durationBlock.classList.add('duration', 'flex')

    let block4 = document.createElement('ul');
    block4.innerText = 'Modules:';
    block4.classList.add('block4', 'flex');

    mainBlock.append(block1, durationBlock, block4);

    for (const module of item.modules) {
        let li = document.createElement('li');
        li.innerText = `${module}`;
        block4.appendChild(li);
    }
    container.appendChild(mainBlock);
    document.body.appendChild(container);
};
// ------------------
//     - Створити довільний елемент з id = text та створити кнопку.Використовуючи
//     JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з
//     id="text".
/*let p = document.createElement('p');
p.id = 'text';
p.innerText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad doloribus impedit molestiae?';
let button = document.createElement('button');
button.style.width = '100px';
button.innerText = 'press me';
button.onclick = function() {
    document.getElementById('text').style.display = 'none';
}
document.querySelector('body').append(p,button);

console.log(button);*/

//     - створити інпут який приймає вік людини та кнопку яка підтверджує дію.
//     При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік
//     чи меньше він ніж 18, та повідомити про це користувача

/*let form = document.createElement('form');
let input = document.createElement('input');
input.type = 'number';
input.placeholder = 'enter your age';
input.value = '';
input.name = 'user_age';

form.append(input)
document.body.append(form);

let btn = document.createElement('button');
btn.innerText = 'check your age';
btn.onclick = function (e) {
    if (input.value < 18 && input.value > 0) {
        alert('your age is under 18');
    }else if (input.value >= 18) {
        alert('your are adult');
    }
};
document.body.appendChild(btn);*/

// *** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий -
// кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка,
//     з відповідним вмістом.
// (Додатковачастина для завдання)*/
/*
let form = document.createElement('form');
let inputRow = document.createElement('input');
inputRow.type = 'number';
let inputCol =  document.createElement('input');
inputCol.type = 'number';
let inputInnerText =  document.createElement('input');

form.append(inputRow, inputCol, inputInnerText);
document.body.appendChild(form);

let btn = document.createElement('button');
btn.innerText = 'define table size';
document.body.appendChild(btn);

btn.onclick = function() {
    let table = document.createElement('table');

    for (let i = 0; i < inputRow.value; i++) {
        let tr = document.createElement('tr');
        table.appendChild(tr);

        for (let j = 0; j < inputCol.value; j++) {
            let td = document.createElement('td');
            td.innerText = `${inputInnerText.value}`;
            tr.appendChild(td);
        }
    }
    document.body.appendChild(table);
};*/
