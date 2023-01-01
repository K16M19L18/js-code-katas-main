/**
Write a simple String Sum utility with a function string Sum(string num1, string num2),
which can accept only natural numbers and will return their sum.
Replace entered number with 0 (zero) if entered number is not a natural number.

Extra: accept more string numbers to get the addiction
 */
function sum(...numbers) {
  const numericValues = getNumericValuesFromStringArray(numbers);
  return getSumFromArray(numericValues);
}

function getNumericValuesFromStringArray(data) {
  return data.map((number) => getNumericValueFromString(number))
}

function getSumFromArray(data) {
  return data.reduce(getSum, 0);
}

function getSum(total, number) {
  return total + number;
}

function isEmptyString(string) {
  return string.trim().length === 0;
}

function getNumericValueFromString(string) {
  if (isEmptyString(string)) {
      return 0;
  }

  const numericValue = parseInt(string);
  if (numericValue < 0) {
      return 0;
  }

  return numericValue;
}

export { sum };