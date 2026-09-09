/*
  This Lab is about creating a function that takes an array of two numbers and returns 
  the least common multiple (LCM) of those two numbers and all the numbers between them.   

  1. You should have a smallestCommons function that accepts an array of two numbers as an argument.
  2. The smallestCommons function should return the smallest common multiple that is evenly divisible 
  by both numbers and all sequential numbers in the range between them.
  3. The function should handle input where the two numbers are not in numerical order.
*/

function smallestCommons(numbers) {
  if (!Array.isArray(numbers) || numbers.length !== 2) {
    return;
  }

  // Gets the threshold values.
  const start = Math.min(numbers[0], numbers[1]);
  const end = Math.max(numbers[0], numbers[1]);

  // create an array from values between the treshold.
  const newNumbers = [];

  for (let i = start; i <= end; i++) {
    newNumbers.push(i);
  }

  // The final output value should be at least divisible by the greatest number, which is the largest threshold value.
  let count = end;

  while (true) {
    const matched = newNumbers.every((num) => count % num === 0);

    if (matched) {
      return count;
    }
    // The new value should always be a multiple of the largest threshold, which is end.
    count += end;
  }
}

let smallestCommonsValue = smallestCommons([1, 5]);
console.log(smallestCommonsValue); // 60

smallestCommonsValue = smallestCommons([5, 1]);
console.log(smallestCommonsValue); // 60

smallestCommonsValue = smallestCommons([2, 10]);
console.log(smallestCommonsValue); // 2520

smallestCommonsValue = smallestCommons([1, 13]);
console.log(smallestCommonsValue);
360360;

smallestCommonsValue = smallestCommons([23, 18]);
console.log(smallestCommonsValue); // 6056820

// ===================================================================

// THIS FUNCTION WORKS ONLY FOR THE TWO VALUES PASSED AS PARAMETERS

/* function smallestCommons(numbers) {
  if (!Array.isArray(numbers) || numbers.length === 0) {
    return;
  }

  if (numbers.length > 2) {
    return;
  }

  const multiples1 = [],
    multiples2 = [];
  let count = 1;

  while (true) {
    multiples1.push(numbers[0] * count);
    multiples2.push(numbers[1] * count);
    count++;

    const lcm = multiples1.filter((num) => {
      return multiples2.includes(num);
    });

    if (lcm.length !== 0) {
      return lcm[0];
    }
  }
}

let smallestCommonsValue = smallestCommons([1, 5]);
console.log(smallestCommonsValue); // 5

smallestCommonsValue = smallestCommons([5, 1]);
console.log(smallestCommonsValue); // 5

smallestCommonsValue = smallestCommons([2, 10]);
console.log(smallestCommonsValue); // 10

smallestCommonsValue = smallestCommons([1, 13]);
console.log(smallestCommonsValue); // 13

smallestCommonsValue = smallestCommons([23, 18]);
console.log(smallestCommonsValue); // 414 */
