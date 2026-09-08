/*
  This Lab is about creating a function that takes an array of two numbers and returns 
  the least common multiple (LCM) of those two numbers and all the numbers between them.   

  1. You should have a smallestCommons function that accepts an array of two numbers as an argument.
  2. The smallestCommons function should return the smallest common multiple that is evenly divisible 
  by both numbers and all sequential numbers in the range between them.
  3. The function should handle input where the two numbers are not in numerical order.
*/

function smallestCommons(numbers) {
  if (!Array.isArray(numbers) || numbers.length === 0) {
    return;
  }

  if (numbers.length > 2) {
    return;
  }

  //numbers.filter(num => )
}
