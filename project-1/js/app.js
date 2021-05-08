// преобразование типов данных

let value;

// Numer to string
value = String(10);
value = String(10 + 10);
value = (40).toString();

//Boolean to string

value = String(false);

// Array to String 
value = String([1, 2, 3, 4]);

//Object to String
value = String({ name: 'Fikus' });

value = 30 + '' + 30;

value = 30 - ' dg '; //NaN
value = 30 - '5';
value = 30 + '' + undefined;
value = true + 10; // Явное преобразование
value = true + undefined; //NaN 

// String to Number
value = Number('23');
value = Number(false);
value = Number(null); //0
value = Number('false'); // NaN
value = Number([1, 2, 3]); // NaN

value = parseInt('200px'); // Выделит целое число
value = parseFloat('200.5cm'); // Выделит дробное число

//Boolean

value = Boolean('Hello'); // true
value = Boolean(''); //false
value = Boolean(0); // false
value = Boolean(-100); //true
value = Boolean(undefined); //false
value = Boolean(null); //false
value = Boolean({}); //true
value = Boolean([]); //true


console.log(value);
console.log(typeof value);