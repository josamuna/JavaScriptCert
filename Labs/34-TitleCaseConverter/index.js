/*
    This lab is about creating a function that converts a string to title case. Title case means that the first letter of each word is capitalized and the rest of the word is in lower case.
*/

function titleCase(strPhrase) {
  if (!strPhrase) {
    return;
  }

  let titleCase = "";

  const chuncks = strPhrase.split(" ");

  for (let index = 0; index < chuncks.length; index++) {
    if ((index + 1) % chuncks.length !== 0) {
      // Not last index.
      titleCase +=
        chuncks[index][0].toUpperCase() +
        chuncks[index].slice(1).toLowerCase() +
        " ";
    } else {
      // Last index
      titleCase +=
        chuncks[index][0].toUpperCase() + chuncks[index].slice(1).toLowerCase();
    }
  }

  return titleCase;
}

//Invalid inputs.
let title = titleCase(null);
console.log(title); // ndefined

title = titleCase("");
console.log(title); // ndefined

// Valid inputs.
title = titleCase("I like to code");
console.log(title); // I Like To Code

title = titleCase("javaScript is fun");
console.log(title); // JavaScript Is Fun

title = titleCase("sHoRt AnD sToUt");
console.log(title); // Short And Stout
