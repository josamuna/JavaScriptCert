function factorialCalculator(num) {
  let result = 1;

  if (typeof num != "number" || Number.isNaN(num) || num < 0) {
    return "Invalid input value.";
  }

  for (let i = num; i > 0; i--) {
    result *= i;
  }
  return result;
}

// Invalid inputs.
let num = null;
let factorial = factorialCalculator(num);
let resultMsg = `Factorial of ${num} is ${factorial}`;
console.log(resultMsg);

num = "u";
factorial = factorialCalculator(num);
resultMsg = `Factorial of ${num} is ${factorial}`;
console.log(resultMsg);

num = NaN;
factorial = factorialCalculator(num);
resultMsg = `Factorial of ${num} is ${factorial}`;
console.log(resultMsg);

num = -3;
factorial = factorialCalculator(num);
resultMsg = `Factorial of ${num} is ${factorial}`;
console.log(resultMsg);

// Valid inputs.
num = 0;
factorial = factorialCalculator(num);
resultMsg = `Factorial of ${num} is ${factorial}`;
console.log(resultMsg);

num = 1;
factorial = factorialCalculator(num);
resultMsg = `Factorial of ${num} is ${factorial}`;
console.log(resultMsg);

num = 5;
factorial = factorialCalculator(num);
resultMsg = `Factorial of ${num} is ${factorial}`;
console.log(resultMsg);

num = 10;
factorial = factorialCalculator(num);
resultMsg = `Factorial of ${num} is ${factorial}`;
console.log(resultMsg);

num = 15;
factorial = factorialCalculator(num);
resultMsg = `Factorial of ${num} is ${factorial}`;
console.log(resultMsg);

num = 20;
factorial = factorialCalculator(num);
resultMsg = `Factorial of ${num} is ${factorial}`;
console.log(resultMsg);
