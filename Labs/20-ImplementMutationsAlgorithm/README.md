# ImplementMutationsAlgorithm

Implement MutationsAlgorithm Project.

## Source Code

```js
function mutation(arr) {
  if (
    typeof arr === "undefined" ||
    arr === null ||
    typeof arr.length !== "number"
  ) {
    console.log("Invalid array provided.");
    return;
  }

  const firstStr = arr[0].toLowerCase();
  const secondStr = arr[1].toLowerCase();
  let result = [];

  for (const char of secondStr) {
    if (firstStr.includes(char)) {
      result.push(true);
    } else {
      break;
    }
  }

  if (result.length === secondStr.length) {
    return true;
  }

  return false;
}

// Invalid inputs.
let result = mutation(undefined);
console.log(result); // undefined

result = mutation(null);
console.log(result); // undefined

// Valid inputs.
result = mutation(["hello", "Hello"]);
console.log(result); // true

result = mutation(["hello", "hey"]);
console.log(result); // false

result = mutation(["Alien", "line"]);
console.log(result); // true

result = mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]);
console.log(result); // true

result = mutation(["Mary", "Aarmy"]);
console.log(result); // true

result = mutation(["floor", "for"]);
console.log(result); // true

result = mutation(["hello", "neo"]);
console.log(result); // false

result = mutation(["voodoo", "no"]);
console.log(result); // false

result = mutation(["ate", "date"]);
console.log(result); // false

result = mutation(["tiger", "Zebra"]);
console.log(result); // false

result = mutation(["Noel", "Ole"]);
console.log(result); // true
```

## Output

![Image](https://github.com/user-attachments/assets/3a5962e1-7230-4d86-98bc-ed8710a6d143)
