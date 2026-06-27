# BooleanCheckFunction

Build a Boolean Check Function Project.

## Source Code

```js
function booWho(value) {
  if (typeof value === "boolean") {
    return true;
  }

  return false;
}

console.log(booWho(true)); // true
console.log(booWho(false)); // true
console.log(booWho([1, 2, 3])); // false
console.log(booWho([].slice)); // false
console.log(booWho({ a: 1 })); // false
console.log(booWho(1)); // false
console.log(booWho(NaN)); // false
console.log(booWho("a")); // false
console.log(booWho("true")); // false
console.log(booWho("false")); // false
```

## Output

![Image](https://github.com/user-attachments/assets/cdfafc57-2047-4fc5-af84-0303b21c9f73)
