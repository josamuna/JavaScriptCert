/*
    This lab is about creating an algorithm to merge two arrays.
*/

function frankenSplice(nums1, nums2, index) {
  if (!Array.isArray(nums1) || nums1.length === 0 || !Array.isArray(nums2)) {
    return;
  }

  if (index < 0) {
    return;
  }

  const outputs = [];

  // In case of the second array is empty.
  if (nums2.length === 0) {
    for (let index1 = 0; index1 < nums1.length; index1++) {
      outputs.push(nums1[index1]);
    }
    return outputs;
  }

  for (let index2 = 0; index2 < nums2.length; index2++) {
    if (index2 === index) {
      let startIndex = index;
      for (let index1 = 0; index1 < nums1.length; index1++) {
        outputs[startIndex] = nums1[index1];
        startIndex++;
      }
      // After adding all element from the first array, add the old value from the second array.
      outputs.push(nums2[index2]);
    } else {
      outputs.push(nums2[index2]);
    }
  }

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

arrayCopy = frankenSplice([1, 2, 3, 4], [], 0);
console.log(arrayCopy); // [ 1, 2, 3, 4 ]
