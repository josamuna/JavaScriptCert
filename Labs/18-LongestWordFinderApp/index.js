/*
    This Lab is abou to build a function that returns the length of the longest word in the provided sentence.
*/

function findLongestWordLength(str) {
  let longestWordLength = 0;

  if (!str || typeof str !== "string") {
    return;
  }
  // Create an array because string is immutable data type.
  const strArr = str.toLowerCase().split(" ");

  // Order string values descending, then the first element inside the array is the greather string.
  console.log("Before", strArr);
  const n = strArr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
      //console.log(`i = ${i}, j = ${j}, strArr[${i}] = ${strArr[i]}, str[${j}] = ${strArr[j]}`)
      if (strArr[j].length < strArr[j + 1].length) {
        const temp = strArr[j];
        strArr[j] = strArr[j + 1];
        strArr[j + 1] = temp;
      }
    }
  }

  console.log("After", strArr);
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
console.log(longestWordLen);
