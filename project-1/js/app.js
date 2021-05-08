// однострочный комментарий
/*
многострочный комментарий
*/

/**
 * JSDoc комментарий 
 */

/**
 * Типы данны:
 * 1. Примитивные
 * - Number: 2019, 1.5, NaN, Infinity
 * - String: "Hello", 'Hello', `Hello`
 * - Boolen: true, false
 * - Null: Null
 * - Undifindet: undifindet,
 * - Symbol()
 */

console.log(2021, 1.5) //Number
console.log(20 * 'Word'); //NaN
console.log(1 / 0); // Infinity

console.log('Hello', "Hello", `Hello`); //String
console.log(true, false); //Boolen
console.log(null); //null
console.log(undefined);
console.log(Symbol()); //Symbol

/**
 * Типы данны:
 * 2. Object. (Reference Type) Передаются по ссылке
 * -Object: {name: 'Sergey', age: '30'}
 *  * Array: [1, 2, 3]
 *  * Function: function foo() {}
 *  * Date: new Date()
 *  ...
 */

console.log({ name: 'Sergey', age: '30' }); //Object
//            ^ Key    ^ Value
console.table({ name: 'Sergey', age: '30' });
console.log([1, 2, 3, 4]); //Array

/**
 * Особенности:
 * 1. JS динамически типизированый язык
 * 2. Одна и таже переменная хранить в себе любой тип данных
 * 3.Нам не нужно определять тип данных при создании переменных 
 * 4. Если мы хотим хотим статическую  типизацию можно использовать
 * TypeScript или Flow
 */