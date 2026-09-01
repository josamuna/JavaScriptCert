# SymmetricDifferenceFunction

Building a Symmetric Difference FunctionProject.

## Source Code

```js
/*
    This lab is about comparing two arrays and return a new array with any items only found 
    in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

    Example:

    Array A: ["diamond", "stick", "apple"]

    Array B: ["stick", "emerald", "bread"]

    Result: ["diamond", "apple", "emerald", "bread"]
*/

function diffArray(values1, values2) {
  if (!Array.isArray(values1)) {
    return;
  }

  if (!Array.isArray(values2)) {
    return;
  }

  let differenceArrays = [];

  const results1 = values1.filter((value1) => {
    return !values2.includes(value1);
  });
  const results2 = values2.filter((value2) => {
    return !values1.includes(value2);
  });

  differenceArrays = [...results1, ...results2];

  return differenceArrays;
}

let diffArrays = diffArray(
  ["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"],
  ["diorite", "andesite", "grass", "dirt", "dead shrub"],
);
console.log(diffArrays); // ["pink wool"]

diffArrays = diffArray(
  ["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"],
  ["andesite", "grass", "dirt", "dead shrub"],
);
console.log(diffArrays); // ["diorite", "pink wool"]

diffArrays = diffArray(["pen", "book"], ["book", "pencil", "notebook"]);
console.log(diffArrays); // ["pen", "pencil", "notebook"]

diffArrays = diffArray(
  ["car", "bike", "bus"],
  ["bike", "train", "plane", "bus"],
);
console.log(diffArrays); // ["car", "train", "plane"]

diffArrays = diffArray(
  ["apple", "orange"],
  ["apple", "orange", "banana", "grape"],
);
console.log(diffArrays); // ["banana", "grape"]

diffArrays = diffArray([], ["apple", "banana"]);
console.log(diffArrays); // ["apple", "banana"]

diffArrays = diffArray(["apple", "banana"], []);
console.log(diffArrays); // ["apple", "banana"]

diffArrays = diffArray([], []);
console.log(diffArrays); // []
```

## Output

![Image](https://github.com/user-attachments/assets/e619cc69-a0b1-4c40-ad2c-14baf3fcdaed)
