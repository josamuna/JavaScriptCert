/*
    This lab is about building a random password generator.
*/

function sumAll(numbers) {
  if (!Array.isArray(numbers) || numbers.length === 0) {
    return;
  }

  if (numbers.length === 1 || numbers.length > 2) {
    return;
  }

  let sum = 0;

  // Gets minimum and maximun treshold numbers from the input array.
  const min = Math.min(...numbers);
  const max = Math.max(...numbers);

  for (let num = min; num <= max; num++) {
    sum += num;
  }

  return sum;
}

// Invalid inputs;
let sumNumber = sumAll(null);
console.log(sumNumber); // undefined

sumNumber = sumAll(undefined);
console.log(sumNumber); // undefined

sumNumber = sumAll("[]");
console.log(sumNumber); // undefined

sumNumber = sumAll([10]);
console.log(sumNumber); // undefined

sumNumber = sumAll([10, 7, 4]);
console.log(sumNumber); // undefined

// Valid inputs;
sumNumber = sumAll([1, 4]);
console.log(sumNumber); // 10

sumNumber = sumAll([4, 1]);
console.log(sumNumber); // 10

sumNumber = sumAll([5, 10]);
console.log(sumNumber); // 45

sumNumber = sumAll([10, 5]);
console.log(sumNumber); // 45
