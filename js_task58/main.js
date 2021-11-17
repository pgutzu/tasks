// Напишите функцию, которая принимает на вход целое число и возвращает количество битов, равных единице
// в двоичном представлении этого числа. Вы можете гарантировать, что ввод неотрицательный.
// двоичное представление 1234 - 10011010010, поэтому в этом случае функция должна вернуть 5.
// countBits(1234) => 5
// countBits(12341213) => 16
let countBits = function(num) {
  let bits = num.toString(2).split('')
  let result = bits.map(item => item == 1).reduce((sum, item) => sum + item , 0)
  return result
}

console.log(countBits(12341213));

