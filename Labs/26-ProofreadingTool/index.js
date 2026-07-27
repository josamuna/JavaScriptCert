/*
    This lab is about building a proofreading tool that analyzes arrays of words for palindromes and repeated phrases.
*/

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

// Invalid inputs.

let palindrome = isPalindrome(null);
console.log(palindrome); // undefined

palindrome = isPalindrome("");
console.log(palindrome); // undefined

palindrome = isPalindrome(100);
console.log(palindrome); // undefined

// Valid inputs.
palindrome = isPalindrome("racecar");
console.log(palindrome);
