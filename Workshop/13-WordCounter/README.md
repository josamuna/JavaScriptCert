# WordCounter

Build a Word Counter Project.

## Source Code

```js
function printCharacters(str) {
  for (const char of str) {
    console.log(char);
  }
}
printCharacters("hello");

function getMatchedWordCount(sentence, match) {
  let count = 0;

  for (const word of sentence) {
    if (word === match) {
      count++;
    }
    console.log(
      `Checking "${word}" against "${match}" | Running count: ${count}`,
    );
  }

  return count;
}

console.log(
  getMatchedWordCount(
    ["I", "really", "really", "really", "like", "to", "code"],
    "really",
  ),
);

console.log(
  getMatchedWordCount(["Do", "not", "fear", "the", "dandy", "lion"], "dandy"),
);
```

## Output

![Image](https://github.com/user-attachments/assets/3264075e-2771-4f0d-8b7c-785ebafe6195)
