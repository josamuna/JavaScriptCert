/*
    This lab is about building a function that returns an array consisting of the largest number from each provided sub-array.
*/

function largestOfAll(array) {
  if (!Array.isArray(array) || array.length === 0) {
    return;
  }

  let arr = [0];

  return arr;
}

// Invalid input.
let largest = largestOfAll(null);
console.log(largest); // undefined.

largest = largestOfAll(undefined);
console.log(largest); // undefined.

largest = largestOfAll(5);
console.log(largest); // undefined.

largest = largestOfAll("array");
console.log(largest); // undefined.

// Valid input.
largest = largestOfAll([
  [4, 5, 1, 3],
  [13, 27, 18, 26],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1],
]);
console.log(largest); // []

largest = largestOfAll([
  [13, 27, 18, 26],
  [4, 5, 1, 3],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1],
]);
console.log(largest); // [27, 5, 39, 1001]

largest = largestOfAll([
  [4, 9, 1, 3],
  [13, 35, 18, 26],
  [32, 35, 97, 39],
  [1000000, 1001, 857, 1],
]);
console.log(largest); // [9, 35, 97, 1000000]

largest = largestOfAll([
  [17, 23, 25, 12],
  [25, 7, 34, 48],
  [4, -10, 18, 21],
  [-72, -3, -17, -10],
]);
console.log(largest); // [25, 48, 21, -3]
