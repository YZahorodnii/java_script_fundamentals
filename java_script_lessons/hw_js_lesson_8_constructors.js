// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
};

// створити пустий масив, наповнити його 10 об'єктами new User(....)
let users = [
    new User(1 ,'Yurko', 'Yurchenko', 'yurko@i.ua', '380998765454'),
    new User(2 ,'Zhorko', 'Zhorchenko', 'zhorko@gmail.com', '380998767777'),
    new User(3 ,'Anna', 'Simonenko', 'simka@gmail.com', '380976543999'),
    new User(4 ,'Julia', 'Antonenko', 'tonia@yahoo.com', '380976546599'),
    new User(5 ,'Hulio', 'Segeda', 'hulio@gmail.com', '380987746599'),
    new User(6 ,'Olia', 'Yushchuk', 'olya@gmail.com', '380991146599'),
    new User(7 ,'Kolia', 'Kucher', 'kkolia@hotmail.com', '380991146599'),
    new User(8 ,'Hanna', 'Shmidt', 'germany@hotmail.com', '380671188599'),
    new User(9 ,'Kostia', 'Kusto', 'kniaz@gmail.com', '380671188666'),
    new User(10 ,'Roman', 'Grusha', 'fruit@gmail.com', '380679999666'),
    ]
console.log(users);

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

console.log(users.filter(item => item.id % 2 === 0));
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

console.log(users.sort((a, b) => a.id - b.id));
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
class Client {
    constructor(id, name, surname , email, phone, order) {
        User.call(this, id, name, surname , email, phone);
        this.order = order;
    }
};

let newClient = [
    new Client(1 ,'Yurko', 'Yurchenko', 'yurko@i.ua', '380998765454', ['milk', 'salt','sugar', 'water']),
    new Client(2 ,'Zhorko', 'Zhorchenko', 'zhorko@gmail.com', '380998767777', ['blueberries', 'salt', 'sausages', 'water']),
    new Client(3 ,'Anna', 'Simonenko', 'simka@gmail.com', '380976543999', ['milkyway', 'saltison','sweets', 'water']),
    new Client(4 ,'Julia', 'Antonenko', 'tonia@yahoo.com', '380976546599', ['bread', 'chicken','sugar']),
    new Client(5 ,'Hulio', 'Segeda', 'hulio@gmail.com', '380987746599', ['wine', 'cheese', 'prawns', 'salt','sugar', 'water']),
    new Client(6 ,'Olia', 'Yushchuk', 'olya@gmail.com', '380991146599', ['milk', 'beef','burgers', 'water']),
    new Client(7 ,'Kolia', 'Kucher', 'kkolia@hotmail.com', '380991146599', ['tomatoes', 'iceberg', 'salt','sugar', 'water']),
    new Client(8 ,'Hanna', 'Shmidt', 'germany@hotmail.com', '380671188599', ['pork meat', 'cola', 'milk', 'salt','sugar', 'water']),
    new Client(9 ,'Kostia', 'Kusto', 'kniaz@gmail.com', '380671188666', ['nutella', 'cucumbers','boots', 'beer']),
    new Client(10 ,'Roman', 'Grusha', 'fruit@gmail.com', '380679999666', ['milk', 'salt','nuts', 'ham', 'jam', 'water'])
    ]
console.log(newClient);

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
console.log(newClient.sort((a, b) => a.order.length - b.order.length));
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

function Carr(model, manufacturer, prodYear, maxSpeed, engineCapacity) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.prodYear = prodYear;
    this.maxSpeed = maxSpeed;
    this.engineCapacity = engineCapacity;
    this.drive = function () {
        return `Drive on speed ${this.maxSpeed} per hour`;
    };
    this.info = function () {
        console.log(`
                Model - ${this.model}
                Manufacturer - ${this.manufacturer}
                Production Year - ${this.prodYear}
                Max Speed - ${this.maxSpeed}
                Engine Capacity - ${this.engineCapacity}`);
    };
    this.increaseMaxSpeed = function (newSpeed) {
        this.maxSpeed = newSpeed;
    };
    this.changeYear = function (newValue) {
        this.prodYear = newValue
    };
    this.addDriver = function (driver) {
        this.driver = driver;
    };
};

let newCarr = new Carr('Model S', 'Tesla', '2022', 250, '0');

newCarr.drive();
newCarr.increaseMaxSpeed(300)
newCarr.changeYear(2023)
newCarr.info();
newCarr.addDriver('Yaaaa')
console.log(newCarr);
console.log(newCarr.drive());;
newCarr.increaseMaxSpeed(300)
newCarr.changeYear(2023)
newCarr.info();
newCarr.addDriver('Yaaaa')
console.log(newCarr);
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
class Car {
constructor (model, manufacturer, prodYear, maxSpeed, engineCapacity) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.prodYear = prodYear;
    this.maxSpeed = maxSpeed;
    this.engineCapacity = engineCapacity;
    this.drivers = [];
    this.drive = function () {
        console.log(`Drive on speed ${this.maxSpeed} per hour`);
    };
    this.info = function () {
        console.log(`
                Model - ${this.model}
                Manufacturer - ${this.manufacturer}
                Production Year - ${this.prodYear}
                Max Speed - ${this.maxSpeed}
                Engine Capacity - ${this.engineCapacity}`);
    };
    this.increaseMaxSpeed = function (newSpeed) {
        this.maxSpeed = newSpeed;
    };
    this.changeYear = function (newValue) {
        this.prodYear = newValue
    };

    this.addDriver = function(name, age, experience) {
        this.drivers.push(new Driver(name, age, experience));
    };

}
};

class Driver {
    constructor(name, age, experience) {
        this.name = name;
        this.age = age;
        this.experience = experience;
    }
};

let newCar = new Car('Model S', 'Tesla', '2022', 250, '0');

newCar.drive();
newCar.increaseMaxSpeed(300)
newCar.changeYear(2023)
newCar.info();
newCar.addDriver('Miko', '35', '10');
console.log(newCar);

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги.
// Створити масив з 10 попелюшок.
class Cinderella {
    constructor (name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
};
let cinderellas = [
    new Cinderella('Anna', '19', '34'),
    new Cinderella('Olya', '18', '35'),
    new Cinderella('Julia', '17', '36'),
    new Cinderella('Svitlana', '21', '39'),
    new Cinderella('Kris', '21', '35'),
    new Cinderella('Katia', '19', '35'),
    new Cinderella('Simona', '19', '36'),
    new Cinderella('Samanta', '19', '36'),
    new Cinderella('Alisa', '22', '37'),
    new Cinderella('Polina', '21', '38'),
];
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
class Prince extends Cinderella {

};
let princeFound = new Prince('Polina', '21','38');
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
for (const girl of cinderellas) {

    girl.name === princeFound.name && girl.footSize === princeFound.footSize
        ? console.log(girl)
        : console.log('Please look better')
};
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
console.log(cinderellas.find(item => item.name === princeFound.name && item.footSize === princeFound.footSize));

