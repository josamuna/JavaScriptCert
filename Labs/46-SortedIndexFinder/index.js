/*
    This lab is about creating a function that returns the lowest index at which a value 
    should be inserted into an array once it has been sorted in ascending order.
*/

function getIndexToIns(values, num) {
  if (!Array.isArray(values)) {
    return;
  }
  if (Number.isNaN(num) || num < 0) {
    return;
  }

  const sortedValues = values.sort((a, b) => a - b);
  console.log(sortedValues);

  if (values.length === 0) {
    return 0;
  }

  let numIndex = sortedValues.findIndex(
    (value, index, tab) => num >= tab[index] && num <= tab[index + 1],
  );

  // Index matches the first array value.
  num === sortedValues[0] ? numIndex : numIndex++;

  return numIndex;
}

console.log(getIndexToIns([1, 2, 3, 4], 1.5)); // 1

console.log(getIndexToIns([20, 3, 5], 19)); // 2

console.log(getIndexToIns([10, 20, 30, 40, 50], 35)); // 3

console.log(getIndexToIns([10, 20, 30, 40, 50], 30)); // 2

console.log(getIndexToIns([40, 60], 50)); // 1

console.log(getIndexToIns([3, 10, 5], 3)); // 0

console.log(getIndexToIns([5, 3, 20, 3], 5)); // 2

console.log(getIndexToIns([2, 20, 10], 19)); // 2

console.log("===3", getIndexToIns([3, 10, 5], 11)); // 3 | 0

console.log(getIndexToIns([], 5)); // 0
