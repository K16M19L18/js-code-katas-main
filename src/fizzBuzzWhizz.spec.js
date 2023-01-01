import { game, isPrime } from "./fizzBuzzWhizz";
// retornar os numeros como string 
describe('FizzBuzz Game', () => {
  test('should return the same number as a string', () => {
    const numeros=[1,4,8];
    const ResultadoEsperados=['1','4','8']
    const result = numeros.map((num)=>game(num));
    expect(result).toEqual(ResultadoEsperados);
  });
//prueba si los numeros son multiplos de 3
  test('should return Fizz when is multiple of 3', () => {
    const numbers = [6, 9, 18];
    const expectedResult = ['Fizz', 'Fizz', 'Fizz'];
    const result = numbers.map((num) => game(num));
    expect(result).toEqual(expectedResult);
  });
  //prueba si los numeros son multiplos de 5
  test('should return Buzz when is multiple of 5', () => {
    const numbers = [10, 25, 35];
    const expectedResult = ['Buzz', 'Buzz', 'Buzz'];
    const result = numbers.map((num) => game(num));
    expect(result).toEqual(expectedResult);
  });
  //prueba si los numeros son multiplos de 3 y 5
  test('should return FizzBuzz when is multiple of 3 and 5', () => {

    const numbers = [15, 30, 60];
    const expectedResult = ['FizzBuzz', 'FizzBuzz', 'FizzBuzz'];
    const result = numbers.map((num) => game(num));
    expect(result).toEqual(expectedResult);
  });
  //prueba si los numeros son primos
  test('should return Whizz when is prime number', () => {
    const numbers = [2, 7];
    const expectedResult = ['Whizz', 'Whizz'];
    const result = numbers.map((num) => game(num));
    expect(result).toEqual(expectedResult);
  });
   //prueba si los numeros son primos y multilplos de 3
  test('should return FizzWhizz when is multiple of 3 and prime number', () => {
    const number = 3;
    const expectedResult = 'FizzWhizz';
    const result = game(number);
    expect(result).toBe(expectedResult);
  });
  //prueba si los numeros son primos y multilplos de 5
  test('should return BuzzWhizz when is multiple of 5 and prime number', () => {
    //ARRANGE
    const number = 5;
    const expectedResult = 'BuzzWhizz';
    //ACT
    const result = game(number);
    //ASSERT
    expect(result).toBe(expectedResult);
  });
});
describe('Prime function', () => {
  test('should return true if is prime number', () => {
    [2, 3, 5, 7, 11, 13, 17, 19, 23, 29].map(number => expect(isPrime(number)).toBeTruthy());
    
  });
});


