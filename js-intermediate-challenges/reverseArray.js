/*
Write a function, reverseArray(), that takes in an array as an argument and returns a new array with the elements in the reverse order.

There’s a built-in method that does a lot of this work for you, but here you’re not allowed to use it. Don’t worry you’ll have plenty of opportunities to use built-in methods later on!
*/

const reverseArray = (arr) => {
  const reversedArray = [];
  arr.map((element) => reversedArray.unshift(element));
  return reversedArray;
};

const sentence = ["sense.", "make", "all", "will", "This"];

console.log(reverseArray(sentence));
