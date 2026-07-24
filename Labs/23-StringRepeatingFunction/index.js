/*
    This lab is about creating a function that repeats a given string a specific number of times. For the purpose of this lab, do not use the built-in .repeat() method.
*/

function repeatStringNumTimes(str, num) {
  if (num <= 0) {
    return "";
  }

  if (!str || typeof str !== "string") {
    return "";
  }

  let strValue = "";

  for (let i = 0; i < num; i++) {
    strValue += str;
  }

  return strValue;
}

// Invalid inputs.
let result = repeatStringNumTimes(null, 5);
console.log(result); // ""

result = repeatStringNumTimes(undefined, 5);
console.log(result); // ""

result = repeatStringNumTimes("=", -1);
console.log(result); // ""

result = repeatStringNumTimes("abc", 0);
console.log(result); // ""

// Valid inputs.
result = repeatStringNumTimes("*", 3);
console.log(result); // ***

result = repeatStringNumTimes("abc", 3);
console.log(result); // abcabcabc

result = repeatStringNumTimes("abc", 4);
console.log(result); // abcabcabcabc

result = repeatStringNumTimes("abc", 1);
console.log(result); // abc

result = repeatStringNumTimes("*", 8);
console.log(result); // ********

result = repeatStringNumTimes("*", 3);
console.log(result);

result = repeatStringNumTimes("*", 3);
console.log(result);
