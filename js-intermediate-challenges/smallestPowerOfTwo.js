const numbers = [5, 3, 9, 30];

const smallestPowerOfTwo = (arr) => {
  let results = [];
  for (let i = 0; i < arr.length; i++) {
    let number = arr[i];
    let j = 1;
    while (j < number) {
      j = j * 2;
    }
    results.push(j);
  }
  return results;
};

console.log(smallestPowerOfTwo(numbers));
// Should print the returned array [ 8, 4, 16, 32 ] instead prints the returned array [8]
