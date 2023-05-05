const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.navList');
    const navLinks = document.querySelector('.navList li');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active')
    })

    const products = [{cow: 12, milk: 5}, {cheese: 4, water: 'coke'}]

    products.forEach((item, index) => {
        console.log(`${index} is is a position in array of ${item}`);
    })
}

const prom = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(new Error('something went wrong'))
    }, 2000)
});
console.log(+'19');
prom.then(value => console.log(value))

const age = +prompt('how old are you??')
console.log(age);

navSlide();
