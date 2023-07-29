//test1

// 1)
// //выведите в консоли значение name через точку
let str1 = '{"name": "Alex", "age": 24}';
let str1JN = JSON.parse(str1);
console.log(str1JN.name);

// 2)
// //выведите в консоли значение name через квадратные скопки
let str2 = '{"name": "Alex", "age": 24}';
let str2JN = JSON.parse(str2);
console.log(str2JN["name"]);


// // 3)
// // //как называется обьект находячщийся в JSON?

// //литерал объекта JSON

//test2

// 1)
// //в чем + стрелочных функций?

//они укорачивают запись кода и занимают меньше памяти и времени

// 2)
// //превратите функцию ниже в стрелочную
function newUser(name, age) {
    if (age > 18) {
        console.log(`${name} ты стар`);
    } else {
        console.log(`${name} ты не дорос`);
    }
};

const newUser2 = (name, age) => {
    if (age > 18) {
        console.log(`${name} ты стар`);
    } else {
        console.log(`${name} ты не дорос`);
    }
};


// 3)
// //сделай скрипт ниже короче
let call = (a, b) => {return a + b};
let call2 = (a, b) => a + b;

//test3

// 1)
// //как называется функция 
// function showMessage(параметры) {
//     //код
// }

// showMessage

// 2)
// //как называется функция 
// let showMessage = function(параметры) {
//     //код
// }

//showMessage

// 3)
// //как называется функция 
// let showMessage = (параметры) => {
//     //код
// }

//showMessage

// 4)
// //создайте функцию которая выводит в консоли текст 'Запуск' и вызовите функцию

function getReady(){
    console.log('Запуск')
}

getReady()


// 5)
// //создайте функцию которая в качестве пареметров принимает 'a' и 'b' и возвращает сумму полученных параметров

function sum1(a, b){
    return a + b
}

console.log(sum1(1, 3))

// // 6)
// //конвертируйте функцию ниже в функциональное вырожение
function sum(text='text', age=24) {
    return `${text} ${age}`;
}

const sum2 = (text='text', age=24) => `${text} ${age}`;

// 7)
// //создайте функцию с помощбю конструктора которая в качестве параметра принимает 'a', 'b' и возвращает сумму полученных параметров 

function sum3(a, b) {
    this.a = a;
    this.b = b;
    return this.a + this.b
}
   
console.log(sum3(1,2));
    

// 8)
// //можно ли вызвать функцию до ее обьявления?

//да

// 9)
// //создайте самовызывающуюся функцию которая выводит в консоли слово 'Запуск'

(function() {
    console.log('Запуск');
})();
    
    

// 10)
// //что такое arguments в функциях?
// function sum(text, age) {
//     console.log(arguments);
// }

// sum('text', 24);

// text и age которые принимают значения 'text' и 24

// 11)
// //выведите в консоли обьект с параметрами из функции
function sum(text, age) {
    console.log({text, age})
}

// sum('text', 24);

// 12)
// //задайте параметру text значение 'some text' по умолчанию
// function sum(text = "some text", age) {
//     //код
// }



// sum('text', 24);

// 13)
// //вызовите функцию ниже
function sum5(text, age, job) {
    //код
}

sum('text', 24, 'developer');



// 14)
// //вызовите и передайте параметры второго обьекта в функцию внутри первого обьекта с помощью call()
const person = {
    firstFunc: function() {
    console.log(`${this.firstName} ${this.lastName}`);
}
}

const person1 = {
    firstName: 'Samuil',
    lastName: 'Farzaliyev'
}

person.firstFunc.call(person1);

// 15)
// //вызовите и передайте параметры второго обьекта в функцию внутри первого обьекта с помощью apply()
const person2 = {
    firstFunc: function() {
    console.log(`${this.firstName} ${this.lastName}`);
}
}

const person3 = {
    firstName: 'Samuil',
    lastName: 'Farzaliyev'
}
    
person.firstFunc.apply(person1);

// 16)
// //какой из методов может принять массив параметров
// call()
// apply()

// apply()

// 17)
// //с помощью какого метода можно вывести максимально большое число из списка
// //1, 2, 3

Math.max(1, 2, 3);

// 18)
// //с помощью какого метода можно вывести максимально большое число из массива
// //[1, 2, 4]

const numbers1 = [1, 2, 4];
Math.max(...numbers1);

// 19)
// //с помощью какого метода можно вывести самое маленькое число из списка
// //1, 2, 3

Math.min(1, 2, 3);

// 20)
// //с помощью какого метода можно вывести маленькое число из массива
// //[1, 2, 4]

const numbers2 = [1, 2, 4];
Math.min(...numbers2);






