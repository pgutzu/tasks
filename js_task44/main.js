// Ваша задача написать функцию, которая принимает в качестве параметра целое число 
// и возводит в квадрат каждую цифру числа. Результат также необходимо вернуть в виде целого числа.

// Например:

// squareDigits(9119) --> 811181


let squareDigits = num => {
  return Number( 
    num.toString()
    .split('')
    .map(item => item * item) 
    .join('') 
  );
}

console.log(squareDigits(9119));
