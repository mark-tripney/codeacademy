/*
Write a function shoutGreetings() that takes in an array of strings and returns a new array. This new array should contain all the strings from the argument array but with capitalized letters and an exclamation point appended to the end: 'heya' will become 'HEYA!'

You can use any technique you want to accomplish this task.
*/

const greetings = ["hello", "hi", "heya", "oi", "hey", "yo"];

const shoutGreetings = (arr) => {
  const shouts = arr.map((greeting) => `${greeting.toUpperCase()}!`);
  return shouts;
};

console.log(shoutGreetings(greetings));
