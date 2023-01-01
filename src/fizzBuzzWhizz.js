/**
For a given natural number greater zero return
● “Fizz” if the number is divisible by 3
● “Buzz” if the number is divisible by 5
● The number if it is not divisible by both 3 and 5
  Input Result
  1       1
  2       2
  3       Fizz
  4       4
  5       Buzz
  6       Fizz
  9       Fizz
  10      Buzz
  15      FizzBuzz
  20      Buzz
  30      FizzBuzz
  75      FizzBuzz

Bonus
Add the following new rule, if a number is prime return Whizz. Only worry about numbers up to 100.
  Input Result
  1      1
  2      Whizz
  3      FizzWhizz
  4      4
  5      BuzzWhizz
 */

  //Metodo para verificar si el numero es primo 

const isPrime = num => {
  for(let i = 2; i < num; i++) {
    if(num % i === 0) {
      return false;
    }
  } 
  return num > 1;
}
// ,etodo del juego 
const game = (num) => {
  let result = '';
  if (isMultiple(num, 3)) {
    result += 'Fizz';
  }

  if (isMultiple(num, 5)) {
    result += 'Buzz';
  }

  if (isPrime(num)) {
    result += 'Whizz';
  }

  return getGameResult(num, result);
};
//metodo para identificar si el numero es multiplo
const isMultiple = (num, divisor) => num % divisor === 0;
//metodo para el resutado 
const getGameResult = (num, word) => word.trim().length > 0 ? word : String(num);

//expotar metodos 
export { isPrime, game };