/*
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

*/
