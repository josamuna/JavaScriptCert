/*
    This lab is about building a proofreading tool that analyzes arrays of words for palindromes and repeated phrases.
*/

const words = [
  "racecar",
  "hello",
  "fabric",
  "abc",
  "cheese",
  "hello",
  "fabric",
  "level",
  "hello",
  "hi",
  "abc",
  "racecar",
  "hi",
];

function isPalindrome(word) {
  if (!word || typeof word !== "string") {
    return;
  }

  let forward = "",
    backward = "";

  for (let i = 0, j = word.length - 1; i < word.length, j > 0; i++, j--) {
    forward += word[i].toLowerCase();
    backward += word[j].toLowerCase();
  }

  if (forward === backward) {
    // Same result.
    return true;
  }

  return false;
}

function findPalindromeBreaks(words) {
  if (!Array.isArray(words)) {
    return;
  }

  if (words.length === 0) {
    return [];
  }

  let notPalindrome = [];

  for (let i = 0; i < words.length; i++) {
    if (!isPalindrome(words[i])) {
      notPalindrome.push(i);
    }
  }

  return notPalindrome;
}

function findRepeatedPhrases(words, phraseLength) {
  if (!Array.isArray(words)) {
    return;
  }

  if (typeof phraseLength !== "number" || phraseLength <= 0) {
    return;
  }

  if (phraseLength >= words.length) {
    return [];
  }

  let occurrences = [];

  for (let i = 0; i <= words.length - phraseLength; i++) {
    const phrase = words.slice(i, i + phraseLength).join(" ");

    if (!occurrences[phrase]) {
      analyzeTexts;
      occurrences[phrase] = [];
    }

    occurrences[phrase].push(i);
  }

  const result = [];

  for (let phrase in occurrences) {
    if (occurrences[phrase].length > 1) {
      // Use of spread operator to add single value inside the result array.
      result.push(...occurrences[phrase]);
    }
  }

  // Sort the array element ascending in case they are not.
  for (let i = 0; i < result.length - 1; i++) {
    for (let j = 0; j < result.length - 1 - i; j++) {
      if (result[j] > result[j + 1]) {
        const temp = result[j];
        result[j] = result[j + 1];
        result[j + 1] = temp;
      }
    }
  }

  return result;
}

function analyzeTexts(texts, phraseLength) {
  if (!Array.isArray(texts)) {
    return;
  }

  if (typeof phraseLength !== "number" || phraseLength <= 0) {
    return;
  }

  if (texts.length === 0) {
    return [];
  }

  const arrResult = [];

  for (let i = 0; i < texts.length; i++) {
    arrResult.push({
      repeatedPhrases: findRepeatedPhrases(texts[i], phraseLength),
      palindromeBreaks: findPalindromeBreaks(texts[i]),
    });
  }
  return arrResult;
}

// Invalid inputs.

let palindrome = isPalindrome(null);
console.log(palindrome); // undefined

palindrome = isPalindrome("");
console.log(palindrome); // undefined

palindrome = isPalindrome(100);
console.log(palindrome); // undefined

// Valid inputs.
palindrome = isPalindrome("racecar");
console.log(palindrome); // [ 1, 2, 3, 4, 5, 6, 8, 9, 10, 12 ]

const notPalindrome = findPalindromeBreaks(words);
console.log(notPalindrome);

let repeated = findRepeatedPhrases(words, 2);
console.log(repeated); // [ 1, 5 ]

repeated = findRepeatedPhrases(["a", "a", "a", "a", "b", "a", "c"], 2);
console.log(repeated); // [ 0, 1, 2 ]

repeated = findRepeatedPhrases(words, 3);
console.log(repeated); // []

let analyze = analyzeTexts(words, 3);
console.log(analyze);

analyzeTexts(words, 2);
console.log(analyze);
