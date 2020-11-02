/*
Write a function, squareNums(), that takes in an array of numbers and, using .map(), returns an array with the square of each of the elements of that array.
*/

const numbers = [2, 7, 9, 171, 52, 33, 14];
const toSquare = (num) => num * num;

const squareNums = (arr) => {
  const squaredNumbers = arr.map((number) => toSquare(number));
  return squaredNumbers;
};

console.log(squareNums(numbers));
