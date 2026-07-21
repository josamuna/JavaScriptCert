/*
    This Lab is abou to build a function that returns the length of the longest word in the provided sentence.
*/

function findLongestWordLength(str) {
  let longestWordLength = 0;

  if (!str || typeof str !== "string") {
    return;
  }

  return longestWordLength;
}

// Invalid entries.
let longestWordLen = findLongestWordLength(null);
console.log(longestWordLen); // undefined

longestWordLen = findLongestWordLength("");
console.log(longestWordLen); // undefined

longestWordLen = findLongestWordLength(1234);
console.log(longestWordLen); // undefined

// Valid entries.
longestWordLen = findLongestWordLength(
  "The quick brown fox jumped over the lazy dog",
);
console.log(longestWordLen);
