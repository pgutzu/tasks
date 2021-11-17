// Напишите функцию strip(str), которая удаляет все лишние пробелы из строки str.

// let str = " Pasha is a good boy "

// function strip(str) {};

// strip(str)

let str = " Pasha is a good boy ";

let strip = (str) => {return str.trim('')}
// ну это по ахуевшему, если пробелы только по краям

console.log(strip(str));
