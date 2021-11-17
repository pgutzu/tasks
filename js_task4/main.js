// Ваша задача написать функцию, которая принимает в качестве параметра 
// строку и увеличивает каждую "букву" 
// строки на число позиции, которую она занимает.

// Например:

// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt


// let accum = (str) => {
//   str = str.split('');
//   let newMass = []
//   for (i = 0; i < str.length; i++) {
//     let iNum = i+1;
//     for (j = 0; j < iNum; j++) {
//       newMass.push(str[i])
//     }
//   } 
//   newMass = newMass.join('-');
//   return newMass
// }

// console.log(accum("cwAt"));

let accum = (str) => {
  return str.split('').map((item, index) => {
    return item.repeat(index + 1)
  }).join('-')
}

console.log(accum("cwAt"));