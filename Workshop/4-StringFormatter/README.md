# StringFormatter

Build a String Formatter Project.

## Source Code

```js
const userInput = "   Hello World!   ";
console.log("Original input:");
console.log(userInput);

const cleanedInput = userInput.trim();
console.log("Result of trimming whitespace from both ends:");
console.log(cleanedInput);

const trimmedStart = userInput.trimStart();
console.log("After using the trimStart() method, leading spaces removed:");
console.log(trimmedStart);

const trimmedEnd = userInput.trimEnd();
console.log("After using the trimEnd() method, trailing spaces removed:");
console.log(trimmedEnd);

const upperCaseInput = cleanedInput.toUpperCase();
console.log("Result of using the toUpperCase() method:");
console.log(upperCaseInput);

const lowerCaseInput = cleanedInput.toLowerCase();
console.log("Result of using the toLowerCase() method:");
console.log(lowerCaseInput);

const lowercaseWord = "camelcase";
const camelCasedVersion =
  lowercaseWord.slice(0, 5) +
  lowercaseWord[5].toUpperCase() +
  lowercaseWord.slice(-3);
console.log("Camel cased version:");
console.log(camelCasedVersion);
```

## Output

![Image](https://github.com/user-attachments/assets/51152db8-d2e6-4fd0-b388-d34fa620e449)
