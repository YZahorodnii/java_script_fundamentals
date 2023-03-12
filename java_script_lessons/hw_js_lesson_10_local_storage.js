// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив
// sessions зберігається інформація про дату та час відвідування сторінки. Є ще сторінка
// sessions.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію
// про відвідування сторінки index.html. Інфу НЕ виводити в консоль, а побудувати дом структуру
// під кожну сессію

const url = window.location.href;
if (url.includes('index')) {

    let json = localStorage.getItem('session');
    let sessions = json ? JSON.parse(json) : [];

    sessions.push({
        day: new Date().getDate(),
        month: new Date().getMonth(),
        year: new Date().getFullYear(),
        hours: new Date().getHours(),
        minutes: new Date().getMinutes(),
        seconds: new Date().getSeconds(),
    });
    localStorage.setItem('session', JSON.stringify(sessions));
} if (url.includes('session')){
    let json = localStorage.getItem('session');
    let sessions = json ? JSON.parse(json) : [];
    for (const session of sessions) {
        console.log(session);
        let container = document.createElement('div');
        container.classList.add('container');
        let date = document.createElement('div');
        date.classList.add('date');
        date.innerText = `${session.day}.${session.month}.${session.year}`;
        let time = document.createElement('div');
        time.classList.add('date');
        time.innerText = `${session.hours}:${session.minutes}:${session.seconds}`;
        container.append(date, time);
        document.body.appendChild(container);
    }
}