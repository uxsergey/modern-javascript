// var, let, const

var name = 'Sergey';
console.log(name);
name = 'Designer';
console.log(name);

var age;
console.log(age); // undefined
age = 30;
console.log(age);

var $name = "Ivan";
console.log($name);

var _name = 'Apple';
// var 1name = '';  unexpeted Token

var camelCase = 20;
var under_score = 30;
var UseName = 40; // так называют классы

// Использовать один тип наиминования
var car;
console.log(car); //Hosting effect
var car = 'bmw';
// var car = 'audi';
console.log(car);
console.clear();

// console.log(nickname); error
let nickname = 'damage';
nickname = 'dm';
console.log(nickname);

const color = 'red';
// color = 'blue'; не может быть переопределен
// const fillColor; нельзя вызвать до того как константа была определена
console.log(color);

const user = {
    name: 'Sergei',
    age: 33
};

user.age = 34; // Переопределение содержимого обьекта
console.log(user);