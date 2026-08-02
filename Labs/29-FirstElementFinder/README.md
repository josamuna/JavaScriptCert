# FirstElementFinder

Build a First Element Finder Project.

## Source Code

```js
/*
    This lab is about creating a function that looks through an array and returns the first element that passes a test function (also known as a "truth test").

    The function would iterate through the array and test each element using the provided test function. At the end, it would return the first element where the test function returns true
*/

function findElement(nums, getFirstTruth) {
  if (!Array.isArray(nums) || nums.length === 0) {
    return;
  }

  for (const num of nums) {
    if (getFirstTruth(num)) {
      return num;
    }
  }

  return;
}

//Invalid input.
let firstTruth = findElement(null, null);
console.log(firstTruth); // undefined

// Valid input.
firstTruth = findElement([1, 3, 5, 8, 9, 10], function (num) {
  return num % 2 === 0;
});
console.log(firstTruth); // 8

firstTruth = findElement([1, 3, 5, 9], function (num) {
  return num % 2 === 0;
});
console.log(firstTruth); // undefined

firstTruth = findElement([1, 2, 3, 4], function (num) {
  return num > 2;
});
console.log(firstTruth); // 3

firstTruth = findElement(["hello", "world", "javascript"], function (str) {
  return str.length > 5;
});
console.log(firstTruth); // javascript

firstTruth = findElement(["cat", "dog", "bird"], function (str) {
  return str.length > 10;
});
console.log(firstTruth); // undefined

firstTruth = findElement([2, 4, 6, 8], function (num) {
  return num % 2 === 0;
});
console.log(firstTruth); // 2

firstTruth = findElement([], function (num) {
  return num > 0;
});
console.log(firstTruth); // undefined
```

## Output

![Image](https://github.com/user-attachments/assets/2d066955-95eb-44e1-8ec7-abf67af053f7)
