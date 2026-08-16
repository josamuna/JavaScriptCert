# OddFibonacciSumCalculator

Implement a Odd Fibonacci Sum Calculator Project.

## Source Code

```js
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
  let previous = 0;
  let current = 1;

  while (current <= positiveNumber) {
    // Add odd Fibo number.
    if (current % 2 !== 0) {
      sum += current;
    }

    const next = previous + current;
    previous = current;
    current = next;
  }

  return sum;
}

let oddFibonacci = sumFibs(1);
console.log(oddFibonacci); // 2

oddFibonacci = sumFibs(1000);
console.log(oddFibonacci); // 1785

oddFibonacci = sumFibs(4000000);
console.log(oddFibonacci); // 4613732

oddFibonacci = sumFibs(4);
console.log(oddFibonacci); // 5

oddFibonacci = sumFibs(75024);
console.log(oddFibonacci); // 60696

oddFibonacci = sumFibs(75025);
console.log(oddFibonacci); // 135721
```

## Output

![Image](https://github.com/user-attachments/assets/a6b1c969-7307-4db1-a830-63241a7e92b2)
