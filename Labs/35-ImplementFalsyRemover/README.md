# ImplementFalsyRemover

Build a Implement Falsy Remover Project.

## Source Code

```js
/*
    This lab is about creating a function that removes all falsy values from an array.
    Falsy values in JavaScript are :
        - false, 
        - null, 
        - 0, 
        - "", 
        - undefined, and 
        - NaN
*/

function bouncer(values) {
  let noFalsyValues = [];

  for (let i = 0; i < values.length; i++) {
    if (values[i]) {
      // Not falsy values.
      noFalsyValues.push(values[i]);
    }
  }

  return noFalsyValues;
}

let bouncerValue = bouncer([7, "ate", "", false, 9]);
console.log(bouncerValue); // [7, "ate", 9]

bouncerValue = bouncer(["a", "b", "c"]);
console.log(bouncerValue); // ["a", "b", "c"]

bouncerValue = bouncer([false, null, 0, NaN, undefined, ""]);
console.log(bouncerValue); // []

bouncerValue = bouncer([null, NaN, 1, 2, undefined]);
console.log(bouncerValue); // [1, 2]

bouncerValue = bouncer([]);
console.log(bouncerValue); // []
```

## Output

![Image](https://github.com/user-attachments/assets/5fe7e795-ce37-448d-a4f6-483d4bd85372)
