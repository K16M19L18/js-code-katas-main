/**
The OddEvenPrime Kata

Write a program that prints numbers within specified range lets say 1 to 100.
- If number is odd print 'Odd' instead of the number.
- If number is even print 'Even' instead of number.
- Print number as a string, if number is Prime.
 */
import { isPrime } from "./fizzBuzzWhizz";

const game = (num) => {
  let result = '';
  result =IsTipo(num)
  return result 
};

const IsTipo = (num) => {
  if (isPrime(num)) {
    return ''+num
  } else if (num % 2 == 0) {
    return "par"
  } else {
    return "impar"
  }

}
export { IsTipo, game };