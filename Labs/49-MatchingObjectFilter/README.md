/\*
This lab is about createing a function that filters an array of objects and returns only
those objects that match all key-value pairs in a given source object.

    1. You should have a whatIsInAName function that accepts two arguments, an array of objects and a source object.
    2. The whatIsInAName function should return a new array containing only the objects from the collection that
       have all the key–value pairs present in the source object.
    2. If no objects match all the key–value pairs from the source, the function should return an empty array.

    For example:

whatIsInAName(
[
{ first: "Romeo", last: "Montague" },
{ first: "Mercutio", last: null },
{ first: "Tybalt", last: "Capulet" }
],
{ last: "Capulet" }
);
// should return [{ first: "Tybalt", last: "Capulet" }]

\*/

function whatIsInAName(names, sourceObj) {
if(!Array.isArray(names) || names.length === 0) {
return;
}

if(Object.keys(sourceObj).length === 0) {
return;
}

    const keys = Object.keys(sourceObj);
    let arrayNames = [];
    keys.forEach((key) => {
      arrayNames = (names.filter((name) => {
    return Object.hasOwn(name, key) && name[key] === sourceObj[key];

}));
});

return arrayNames;
}

let outputResult = whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
console.log(outputResult); // [{ first: "Tybalt", last: "Capulet" }]

outputResult = whatIsInAName([{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }], { "apple": 1 });
console.log(outputResult); // [{"apple": 1}, {"apple": 1}, {"apple": 1, "bat": 2}]

outputResult = whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 });
console.log(outputResult); // [{"apple": 1, "bat": 2}, {"apple": 1, "bat": 2, "cookie": 2}]

outputResult = whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 });
console.log(outputResult); // [{"apple": 1, "bat": 2, "cookie": 2}]

outputResult = whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }, { "bat": 2 }], { "apple": 1, "bat": 2 });
console.log(outputResult); // [{"apple": 1, "bat": 2}, {"apple": 1, "bat": 2, "cookie": 2}]====

outputResult = whatIsInAName([{"a": 1, "b": 2, "c": 3}], {"a": 1, "b": 9999, "c": 3}); //
console.log(outputResult); //

outputResult = whatIsInAName([{"a": 1, "b": 2, "c": 3, "d": 9999}], {"a": 1, "b": 9999, "c": 3}); //
console.log(outputResult); //
