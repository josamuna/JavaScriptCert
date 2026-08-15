# ImplementUniqueSortedUnion

Implementing an Unique Sorted Union Project.

## Source Code

```js
/*
    This lab is about implementing a unique sorted union by building an array that contains unique values from the argument arrays, in the order they are first found in the arguments.
*/

function uniteUnique(values1, ...values2) {
  if (!Array.isArray(values1)) {
    return;
  }

  const mergedValues = [];

  // Fill the output array with not repeated value, but in order.
  for (let i = 0; i < values1.length; i++) {
    const currentUnite = values1[i];
    if (!mergedValues.includes(currentUnite)) {
      mergedValues.push(currentUnite);
    }
  }

  // Same as the second array, but for each inner array (one or more using rest parameter).
  for (const items of values2) {
    for (let i = 0; i < items.length; i++) {
      const currentUnite = items[i];
      if (!mergedValues.includes(currentUnite)) {
        mergedValues.push(currentUnite);
      }
    }
  }

  return mergedValues;
}

let outputValues = uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
console.log(outputValues); // [ 1, 3, 2, 5, 4 ]

outputValues = uniteUnique([1, 2, 3], [5, 2, 1]);
console.log(outputValues); // [1, 2, 3, 5]

outputValues = uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]);
console.log(outputValues); // [1, 2, 3, 5, 4, 6, 7, 8]

outputValues = uniteUnique([1, 3, 2], [5, 4], [5, 6]);
console.log(outputValues); // [1, 3, 2, 5, 4, 6]

outputValues = uniteUnique([1, 3, 2, 3], [5, 2, 1, 4], [2, 1]);
console.log(outputValues); // [1, 3, 2, 5, 4]
```

## Output

![Image](https://github.com/user-attachments/assets/029c8d10-7ebd-4150-a67c-25d03dce1a33)
