/*
Write a function sortYears() that takes in an array of years, and, using the built-in .sort() method, returns that array with the years sorted in descending order.
*/

const years = [1970, 1999, 1951, 1982, 1963, 2011, 2018, 1922];

const sortYears = (arr) => arr.sort().reverse();

console.log(sortYears(years));
