// Тролли атакуют ваш раздел комментариев!
// Распространенный способ справиться с этой ситуацией - убрать все гласные из комментариев троллей, нейтрализуя угрозу.
// Ваша задача - написать функцию, которая принимает строку и возвращает новую строку со всеми удаленными гласными.
// Например, строка «Этот сайт для лузеров ЛОЛ!» стал бы "тт сйт дл лзрв ЛЛ!"
// function deleteVowels(str) {

// return
// }




// let vowels = ['А', 'а','У', 'у', 'Е', 'е', 'ё', 'Ё', 'Ъ', 'ъ', 'О', 'о', 'Э', 'э', 'Я', 'я', 'И', 'и', 'Ь', 'ь', 'Ю', 'ю'];

// let result = [];

// let deleteVowels = (str) => {
//   (str) = str.split('');
//   // console.log(str)
//   for (let i = 0; i < str.length; i++) {
//     if (!vowels.includes(str[i])) {
//       result[i] = str[i];
//   }}
//   (result) = result.join('');
//   return result
// }

// console.log(deleteVowels('Этот сайт для лузеров ЛОЛ!'));



let vowels = ['А', 'а','У', 'у', 'Е', 'е', 'ё', 'Ё', 'Ъ', 'ъ', 'О', 'о', 'Э', 'э', 'Я', 'я', 'И', 'и', 'Ь', 'ь', 'Ю', 'ю'];

let deleteVowels = (str) => {return str.split('').filter(item => !vowels.includes(item)).join('')};

console.log(deleteVowels('Этот сайт для лузеров ЛОЛ!'));
