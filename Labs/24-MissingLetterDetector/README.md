# MissingLetterDetector

Build a Missing Letter Detector Project.

## Source Code

```js
/*
  This lab is about to find the missing letter in an input string.
*/

function fearNotLetter(str) {
  if (!str || typeof str !== "string") {
    return "Invalid input entry.";
  }

  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  let missingLetters = [];

  // Allow to match the start element index with the corresponding element in alphabet value.
  const startIndex = alphabet.indexOf(str[0]);

  for (let i = startIndex, j = 0, count = 0; j < str.length; i++, j++) {
    if (str[j] !== alphabet[i]) {
      missingLetters[count] = alphabet[i];
      count++;
    }
  }

  return missingLetters[0];
}

// Invalid input.
let outputValue = fearNotLetter("");
console.log(outputValue);

outputValue = fearNotLetter(null);
console.log(outputValue);

outputValue = fearNotLetter(36890);
console.log(outputValue);

// Valid input.
outputValue = fearNotLetter("abce");
console.log(outputValue); // d

outputValue = fearNotLetter("abcdefghjklmno");
console.log(outputValue); // i

outputValue = fearNotLetter("stvwx");
console.log(outputValue); // u

outputValue = fearNotLetter("bcdf");
console.log(outputValue); // e

outputValue = fearNotLetter("abcdefghijklmnopqrstuvwxyz");
console.log(outputValue); // undefined
```

## Output

![Image](https://github.com/user-attachments/assets/f9c973ff-d052-4168-91da-4810c521f553)
