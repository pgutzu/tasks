// Если мы перечислим все натуральные числа ниже 10, которые кратны 3 или 5, мы получим 3, 5, 6 и 9. Сумма этих кратных 23.
// Завершите решение так, чтобы оно возвращало сумму всех кратных 3 или 5 числам ниже переданного числа. 
// solution(10) => 23
// solution(12) => 33
// solution(23) => 119

function solution(num){
    numbers = 0
    for (let i = 0; i < num; i++) {
    if(i % 3 == 0 || i % 5 == 0) {
        numbers += i
        }
    }  return numbers
}

console.log(solution(10));