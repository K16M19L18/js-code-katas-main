import { sum } from "./stringSum";

describe('String Sum code kata', () => {
  test('should return 0 when num1 and num2 are empty strings', () => {
    const num1 = '';
    const num2 = '';
    const result = 0;
    const sumResult = sum(num1, num2);
    expect(sumResult).toBe(result);
  });
  test('should return 0 when num1 and num2 are zero strings', () => {
    const num1 = '0';
    const num2 = '0';
    const result = 0;
    const sumResult = sum(num1, num2);
    expect(sumResult).toBe(result);
  });
  test('should return 5 when num1 is 2 and num2 is 3', () => {
    const num1 = '2';
    const num2 = '3';
    const result = 5;
    const sumResult = sum(num1, num2);
    expect(sumResult).toBe(result);
  });
  test('should return 50 when num1 is an empty string and num2 is 50', () => {
    const num1 = '';
    const num2 = '20';
    const result = 20;
    const sumResult = sum(num1, num2);
    expect(sumResult).toBe(result);
  });
  test('should return 10 when num1 is 10 and num2 is non natural', () => {
    const num1 = '10';
    const num2 = '-60';
    const result = 10;
    const sumResult = sum(num1, num2);
    expect(sumResult).toBe(result);
  });
  test('should return correct result with more parameters', () => {
    const num1 = '10';
    const num2 = '-20';
    const num3 = '4';
    const num4 = '-2';
    const result = 14;
    const sumResult = sum(num1, num2, num3, num4);
    expect(sumResult).toBe(result);
  });
});
