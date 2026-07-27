/*
    This lab is about building a proofreading tool that analyzes arrays of words for palindromes and repeated phrases.
*/

function isPalindrome(word) {
  if (!word || typeof word === "string") {
    return;
  }

  let forward = "",
    backword = "";

  for (let i = 0, j = word.length; i < word.length, j > 0; i++, j--) {
    forward += word[i].toLowerCase();
    backword += word[j].toLowerCase();
  }
  console.log("forward = ", forward, "backword = ", backword);
  if (forward === backword) {
    // Same result.

    return true;
  }

  return false;
}

const palindrome = isPalindrome("racecar");
console.log(palindrome);
