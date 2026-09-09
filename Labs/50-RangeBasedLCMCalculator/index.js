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

  // create an array from values between the treshold.
  const newNumbers = [];
  if (numbers[0] > numbers[1]) {
    for (let i = numbers[1]; i <= numbers[0]; i++) {
      newNumbers.push(i);
    }
  } else {
    for (let i = numbers[0]; i <= numbers[1]; i++) {
      newNumbers.push(i);
    }
  }

  let count = 1;

  while (true) {
    const multiples = newNumbers.map((num) => {
      return count % num === 0 ? count : num;
    });
    console.log(multiples);
    const matched = multiples.every((numValue) => {
      return numValue === count;
    });

    //console.log("------>", count, matched);

    if (matched) {
      return count;
    }
    count++;
  }
}

let smallestCommonsValue = smallestCommons([23, 18]);
console.log(smallestCommonsValue); // 60

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
