// зробити файл users.html
// з ендпоінту http://jsonplaceholder.typicode.com/users отримати всіх користувачів
//     вивести їх id + name списком та додати посилання з href = user-details.html?id=XXX
//     (замість ХХХ - айді юзера)
// при кліку на посилання перехід на відповідну сторінку, на якій буде вся інформація про
// користувача (всі 15 полів) отримана через додатковий запит
// (https://jsonplaceholder.typicode.com/users/XXX   ХХХ - айді користувача)
//

let url = new URL('http://jsonplaceholder.typicode.com/users');
fetch(url).then(user => user.json()).then(users => {
    console.log(users);
    for (const user of users) {
        let div = document.createElement('div');
        let a = document.createElement('a');
        a.innerText = `id: ${user.id} --- name: ${user.name}`;
        a.href = 'user-details.html?id=' + JSON.stringify(user.id);
        div.appendChild(a);
        document.body.appendChild(div);
    };
});