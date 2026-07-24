/* 
    Write a function named chunkArrayInGroups that takes an array as first argument and a number as second argument. The function should split the array into smaller arrays of length equal to the second argument and returns them as a two-dimensional array.
*/

function chunkArrayInGroups(arr, num) {
  if (
    typeof arr === "undefined" ||
    arr === null ||
    typeof arr.length !== "number"
  ) {
    console.log("Invalid array input.");
    return;
  }

  if (num <= 0) {
    console.log("Invalid number function input.");
    return;
  }

  // Final output array.
  let dataChunked = [];

  // inner array for grouped values.
  let innerArray = [];
  let count = 0;

  // Loop through the array passed as parameter to get each single conent.
  for (let i = 0; i < arr.length; i++) {
    if (count < num) {
      innerArray.push(arr[i]);
      count++;
    } else {
      count = 0;
      dataChunked.push(innerArray);
      innerArray = [];
      innerArray.push(arr[i]);
      count++;
    }
  }
  // Add the last part inside the final array.
  dataChunked.push(innerArray);

  return dataChunked;
}

// Invalid inputs.
let chunkyMonkeyArr = chunkArrayInGroups(null, 2);
console.log(chunkyMonkeyArr); // undefined

chunkyMonkeyArr = chunkArrayInGroups(undefined, 2);
console.log(chunkyMonkeyArr); // undefined

chunkyMonkeyArr = chunkArrayInGroups(["a", "b"], -1);
console.log(chunkyMonkeyArr); // undefined

// Valid inputs.
chunkyMonkeyArr = chunkArrayInGroups(["a", "b", "c", "d"], 2);
console.log(chunkyMonkeyArr); // [ [ 'a', 'b' ], [ 'c', 'd' ] ]

chunkyMonkeyArr = chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3);
console.log(chunkyMonkeyArr); // [ [ 0, 1, 2 ], [ 3, 4, 5 ] ]

chunkyMonkeyArr = chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2);
console.log(chunkyMonkeyArr); // [ [ 0, 1 ], [ 2, 3 ], [ 4, 5 ] ]

chunkyMonkeyArr = chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4);
console.log(chunkyMonkeyArr); // [ [ 0, 1, 2, 3 ], [ 4, 5 ] ]

chunkyMonkeyArr = chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3);
console.log(chunkyMonkeyArr); // [ [ 0, 1, 2 ], [ 3, 4, 5 ], [ 6 ] ]

chunkyMonkeyArr = chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4);
console.log(chunkyMonkeyArr); // [ [ 0, 1, 2, 3 ], [ 4, 5, 6, 7 ], [ 8 ] ]

chunkyMonkeyArr = chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2);
console.log(chunkyMonkeyArr); // [ [ 0, 1 ], [ 2, 3 ], [ 4, 5 ], [ 6, 7 ], [ 8 ] ]
