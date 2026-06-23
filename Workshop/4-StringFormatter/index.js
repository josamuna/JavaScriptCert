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
