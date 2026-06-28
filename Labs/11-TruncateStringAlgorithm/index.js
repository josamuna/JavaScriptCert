function truncateString(strValue, num) {
  if (!strValue) {
    return;
  }
  if (Number.isNaN(num)) {
    return;
  }

  if (strValue.length > num) {
    return strValue.slice(0, num).concat("...");
  } else {
    return strValue;
  }
}

// Invalid inputs.
console.log(truncateString(null, 11));
console.log(truncateString(undefined, 6));
console.log(truncateString("Absolutely Longer", Number.NaN));
console.log(truncateString("Absolutely Longer", 0 / 0));

// Valid inputs.
console.log(truncateString("Peter Piper picked a peck of pickled peppers", 11));
console.log(
  truncateString(
    "A-tisket a-tasket A green and yellow basket",
    "A-tisket a-tasket A green and yellow basket".length,
  ),
);
console.log(truncateString("A-", 1));
console.log(truncateString("Absolutely Longer", 2));
