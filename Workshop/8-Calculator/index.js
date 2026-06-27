function calculateSum(num1, num2) {
  return num1 + num2;
}

console.log("2 + 5 = " + calculateSum(2, 5));
console.log("10 + 10 = " + calculateSum(10, 10));
console.log("5 + 5 = " + calculateSum(5, 5));

function calculateDifference(num1, num2) {
  return num1 - num2;
}

console.log("22 - 5 = " + calculateDifference(22, 5));
console.log("12 - 1 = " + calculateDifference(12, 1));
console.log("17 - 9 = " + calculateDifference(17, 9));

function calculateProduct(num1, num2) {
  return num1 * num2;
}

console.log("13 * 5 = " + calculateProduct(13, 5));

function calculateQuotient(num1, num2) {
  return num2 === 0 ? "Error: Division by zero" : num1 / num2;
}

console.log("7 / 11 = " + calculateQuotient(7, 11));
console.log("3 / 0 = " + calculateQuotient(3, 0));

function calculateSquare(num) {
  return num ** 2;
}

console.log("2 ^ 2 = " + calculateSquare(2));
console.log("9 ^ 2 = " + calculateSquare(9));

function calculateSquareRoot(num) {
  return Math.sqrt(num);
}

console.log("\u221a25 = " + calculateSquareRoot(25));
console.log("\u221a100 = " + calculateSquareRoot(100));
