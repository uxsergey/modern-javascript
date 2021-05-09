// Numbers

const num1 = 10;
const num2 = 20;
let value;

// + * / 

value = num1 + num2;
value = value + 100;
value += 100;
value = 4;
// value = 5 % 2;
value++; // Инкимент
value--; // Дикримент
--value; //Если Инкимент/Дикримент стоит перед переменной то измненения 
++value; // произойдут на этойже строке если после то на следующей

value = 0.6 + 0.7; // не точные вычисления

//Методы испаравления при не тчных вычислениях

// value = parseFloat(value.toFixed(1));
value = (0.6 * 10 + 0.7 * 10) / 10;

//Method Math

value = Math.PI;
value = Math.random();
value = Math.round(2.4);
value = Math.ceil(2.1); // Округление в большую сторону
value = Math.floor(2.9); // Округление в меньшую сторону
value = Math.min(2, 12, 15, 0, 12);
value = Math.max(2, 12, 15, 0, 12);
value = Math.floor(Math.random() * 10 + 1); // Рандомне число до 10

const arr = ['black',
    'red',
    'yellow',
    'pink',
    'white',
    'blue',
    'orange',
    'green'
];
value = Math.floor(Math.random() * arr.length); // Рандомное значение и массива arr

console.log(value, arr[value]);