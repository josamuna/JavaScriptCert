/*
    This Lab is about to build a function that returns the length of the longest word in the provided sentence.
*/

function findLongestWordLength(str) {
  let longestWordLength = 0;

  if (!str || typeof str !== "string") {
    return;
  }
  // Create an array because string is immutable data type.
  const strArr = str.toLowerCase().split(" ");

  // Order string values descending, then the first element inside the array is the greather string.
  // console.log("Before", strArr);

  // Sort more optimized with less loop
  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      if (strArr[i].length < strArr[j].length) {
        const temp = strArr[i];
        strArr[i] = strArr[j];
        strArr[j] = temp;
      }
    }
  }
  /*
  const n = strArr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
      if (strArr[j].length < strArr[j + 1].length) {
        const temp = strArr[j];
        strArr[j] = strArr[j + 1];
        strArr[j + 1] = temp;
      }
    }
  }*/

  // console.log("After", strArr);
  return strArr[0].length;
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
console.log(longestWordLen); // 6

longestWordLen = findLongestWordLength("May the force be with you");
console.log(longestWordLen); // 5

longestWordLen = findLongestWordLength("Google do a barrel roll");
console.log(longestWordLen); // 6

longestWordLen = findLongestWordLength("Googling do a barrel roll");
console.log(longestWordLen); // 8

longestWordLen = findLongestWordLength(
  "What is the average airspeed velocity of an unladen swallow",
);
console.log(longestWordLen); // 8

longestWordLen = findLongestWordLength(
  "What if we try a super-long word such as otorhinolaryngology",
);
console.log(longestWordLen); // 19
