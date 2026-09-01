/*
    This lab is about creating a function that takes an initial array as its first argument, 
    followed by one or more additional arguments representing the values to remove.

    1. You should have a destroyer function that accepts an array and one or more additional arguments.
    2. The destroyer function should return a new array excluding all elements from the first argument that match any of the subsequent arguments.
    3. The function must accept an indeterminate number of arguments.
*/

function destroyer(values, ...args) {
  if (!Array.isArray(values) || values.length === 0) {
    return;
  }

  if (args.length === 0) {
    return;
  }

  return values.filter((value) => !args.includes(value));
}

let destroyerResults = destroyer([1, 2, 3, 1, 2, 3], 2, 3);
console.log(destroyerResults); // [1, 1]

destroyerResults = destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3);
console.log(destroyerResults); // [1, 5, 1]

destroyerResults = destroyer([2, 3, 2, 3], 2, 3);
console.log(destroyerResults); // []

destroyerResults = destroyer(["tree", "hamburger", 53], "tree", 53);
console.log(destroyerResults); // ["hamburger"]

destroyerResults = destroyer(
  [
    "possum",
    "trollo",
    12,
    "safari",
    "hotdog",
    92,
    65,
    "grandma",
    "bugati",
    "trojan",
    "yacht",
  ],
  "yacht",
  "possum",
  "trollo",
  "safari",
  "hotdog",
  "grandma",
  "bugati",
  "trojan",
);
console.log(destroyerResults); // [12, 92, 65]
