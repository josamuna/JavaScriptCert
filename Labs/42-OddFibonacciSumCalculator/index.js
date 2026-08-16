/*
    This lab is about building odd Fibonacci sum calculator that computes the sum of all odd Fibonacci numbers that are less than or equal to a given positive integer. 
*/

function sumFibs(positiveNumber) {
  if (
    typeof positiveNumber !== "number" ||
    Number.isNaN(positiveNumber) ||
    positiveNumber < 0
  ) {
    return;
  }

  let sum = 0;
  const allFibo = [];

  for (let i = 0; i <= positiveNumber; i++) {
    if (i === 0 || i === 1) {
      allFibo.push(i);
    } else {
      let index = i - 2; //5-2=3
      let newFibonacciValue = 0;
      for (let j = index; j < i; j++) {
        //1 ; j < 3
        newFibonacciValue += j; // 0,1,1,2,3,5,8,13,21
      }
      console.log(newFibonacciValue);
      allFibo.push(newFibonacciValue);
    }
  }

  return allFibo;
}

let oddFibonacci = sumFibs(10);
console.log(oddFibonacci);
