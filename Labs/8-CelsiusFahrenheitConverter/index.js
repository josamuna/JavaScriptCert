function convertCtoF(celsiusTemp) {
  if (Number.isNaN(celsiusTemp)) {
    return;
  }
  // F = C * (9/5) + 32.

  return celsiusTemp * (9 / 5) + 32;
}

// Test with invalid inputs.
let celsius = Number.NaN;
console.log(convertCtoF(celsius)); // undefined
celsius = 0 / 0;
console.log(convertCtoF(celsius)); // undefined
celsius = undefined;
console.log(convertCtoF(celsius)); // undefined
celsius = null;
console.log(convertCtoF(celsius)); // NaN
celsius = "value";
console.log(convertCtoF(celsius)); // NaN

// Test with valid inputs.
celsius = 0;
console.log(`${celsius} C = ${convertCtoF(celsius)} F`); // 32 F
celsius = -30;
console.log(`${celsius} C = ${convertCtoF(celsius)} F`); // -22 F
celsius = -10;
console.log(`${celsius} C = ${convertCtoF(celsius)} F`); // 14 F
celsius = 20;
console.log(`${celsius} C = ${convertCtoF(celsius)} F`); // 68 F
celsius = 30;
console.log(`${celsius} C = ${convertCtoF(celsius)} F`); // 86 F
