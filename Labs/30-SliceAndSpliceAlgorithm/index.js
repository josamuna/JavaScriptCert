/*
    This lab is about creating an algorithm to merge two arrays.
*/

function frankenSplice(nums1, nums2, index) {
  if (
    !Array.isArray(nums1) ||
    nums1.length === 0 ||
    !Array.isArray(nums2) ||
    nums2.length === 0
  ) {
    return;
  }

  if (index <= 0) {
    return;
  }

  const outputs = [];
  return outputs;
}

// Invalid input.
let arrayCopy = frankenSplice(null, null, 0);
console.log(arrayCopy); // undefined

arrayCopy = frankenSplice([1, 2, 3], [null], -1);
console.log(arrayCopy); // undefined

// Valid input
arrayCopy = frankenSplice([1, 2, 3], [4, 5], 1);
console.log(arrayCopy); // [4, 1, 2, 3, 5]

arrayCopy = frankenSplice([1, 2], ["a", "b"], 1);
console.log(arrayCopy); // ["a", 1, 2, "b"]

arrayCopy = frankenSplice(
  ["claw", "tentacle"],
  ["head", "shoulders", "knees", "toes"],
  2,
);
console.log(arrayCopy); // ["head", "shoulders", "claw", "tentacle", "knees", "toes"]
