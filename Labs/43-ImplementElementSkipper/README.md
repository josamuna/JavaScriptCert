# ImplementElementSkipper

Implement an Implement an Element Skipper Project.

## Source Code

```js
/*
    This lab is about creating a function that skips elements in an array until it 
    finds an acceptable one based on a specific test function. 
*/

function dropElements(numbers, isMatchCriteria) {
  if (!Array.isArray(numbers) || numbers.length === 0) {
    return;
  }

  if (typeof isMatchCriteria !== "function") {
    return;
  }

  let outputNumbers = [];

  // Loop through the array of numbers to check for any matches.
  for (let i = 0; i < numbers.length; i++) {
    if (isMatchCriteria(numbers[i])) {
      // Once the first match is found, use slice to copy the remaining values starting from this match to an output array and stop the loop.
      outputNumbers = numbers.slice(i);
      break;
    }
  }

  return outputNumbers;
}

// Invalid inputs.
let outputDropedElements = dropElements(null, null);
console.log(outputDropedElements); // undefined

outputDropedElements = dropElements(undefined, undefined);
console.log(outputDropedElements); // undefined

outputDropedElements = dropElements([], function (n) {
  return n >= 3;
});
console.log(outputDropedElements); // undefined

// Valid inputs.
outputDropedElements = dropElements([1, 2, 3, 4], function (n) {
  return n >= 3;
});
console.log(outputDropedElements); // [3, 4]

outputDropedElements = dropElements([0, 1, 0, 1], function (n) {
  return n === 1;
});
console.log(outputDropedElements); // [1, 0, 1]

outputDropedElements = dropElements([1, 2, 3], function (n) {
  return n > 0;
});
console.log(outputDropedElements); // [1, 2, 3]

outputDropedElements = dropElements([1, 2, 3, 7, 4], function (n) {
  return n > 3;
});
console.log(outputDropedElements); // [7, 4]

outputDropedElements = dropElements([1, 2, 3, 9, 2], function (n) {
  return n > 2;
});
console.log(outputDropedElements); // [3, 9, 2]
```

## Output

![Image](https://github.com/user-attachments/assets/8328f30c-1855-4103-8ecc-9d85d84811f7)
