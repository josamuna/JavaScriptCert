/*
    This lab is about implementing an array flattening algorithm.
    
    Flattening an array means turning a nested array of any depth into a single, 
    one-dimensional array. The process extracts all elements in order, 
    unwrapping only arrays. Other types are left unchanged.

    For example:

    Original                        Flattened
    [[1], [], [2, [3]]]             [1, 2, 3]
    [1, {"foo": "bar"}, [2]]        [1, {"foo": "bar"}, 2]
    ["baz", [1, 2], {}]             ["baz", 1, 2, {}]

    1. You should have a function named steamrollArray.
    2. The steamrollArray function should accept one argument: 
       a nested array.
    3. The function should flatten the nested array, accounting for varying l
       evels of nesting.
    4. Your solution should not use the Array.prototype.flat() or Array.prototype.
       flatMap() methods.
    5. Global variables should not be used.
*/

function steamrollArray(values) {
  if (!Array.isArray(values)) {
    return;
  }

  const outputValues = [];

  values.forEach((value) => {
    if (Array.isArray(value)) {
      outputValues.push(...steamrollArray(value));
    } else {
      outputValues.push(value);
    }
  });

  return outputValues;
}

let flattenedArray = steamrollArray([[["a"]], [["b"]]]);
console.log(flattenedArray); // ["a", "b"]

flattenedArray = steamrollArray([1, [2], [3, [[4]]]]);
console.log(flattenedArray); // [1, 2, 3, 4]

flattenedArray = steamrollArray([1, [], [3, [[4]]]]);
console.log(flattenedArray); // [1, 3, 4]

flattenedArray = steamrollArray([1, {}, [3, [[4]]]]);
console.log(flattenedArray); // [1, {}, 3, 4]
