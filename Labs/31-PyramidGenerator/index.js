/*
    This lab is about creating pyramid pattern.
*/

function pyramid(patternCharacter, rows, inverted) {
  if (!patternCharacter || typeof patternCharacter !== "string") {
    return;
  }

  if (rows < 0) {
    return;
  }

  let outputPyramid = "\n"; //Initialize with a new line at the begining.

  if (!inverted) {
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < rows - i - 1; j++) {
        outputPyramid += " ";
      }

      for (let k = 0; k < 2 * i + 1; k++) {
        outputPyramid += patternCharacter;
      }

      outputPyramid += "\n";
    }
  } else {
    for (let i = rows - 1; i >= 0; i--) {
      for (let j = 0; j < rows - i - 1; j++) {
        outputPyramid += " ";
      }

      for (let k = 0; k < 2 * i + 1; k++) {
        outputPyramid += patternCharacter;
      }
      outputPyramid += "\n";
    }
  }

  return outputPyramid;
}

function pyramidShort(patternCharacter, rows, inverted) {
  if (!patternCharacter || typeof patternCharacter !== "string") {
    return;
  }

  if (rows < 0) {
    return;
  }

  let outputPyramid = "\n";

  if (!inverted) {
    for (let i = 0; i < rows; i++) {
      outputPyramid += " ".repeat(rows - i - 1);
      outputPyramid += patternCharacter.repeat(2 * i + 1);
      outputPyramid += "\n";
    }
  } else {
    for (let i = rows - 1; i >= 0; i--) {
      outputPyramid += " ".repeat(rows - i - 1);
      outputPyramid += patternCharacter.repeat(2 * i + 1);
      outputPyramid += "\n";
    }
  }

  return outputPyramid;
}

// Invalid inputs.
let outputPyramid = pyramid(null, 4, false);
console.log(outputPyramid); // undefined

outputPyramid = pyramid("=", -6, false);
console.log(outputPyramid); // undefined

// Valid inputs.
outputPyramid = pyramid("o", 4, false);
console.log(outputPyramid);
/*
   o
  ooo
 ooooo
ooooooo
 */

outputPyramid = pyramid("p", 5, true);
console.log(outputPyramid);
/*
ppppppppp
 ppppppp
  ppppp
   ppp
    p
 */

outputPyramid = pyramidShort("k", 4, false);
console.log(outputPyramid);
/*
   k
  kkk
 kkkkk
kkkkkkk
 */

outputPyramid = pyramidShort("!", 5, true);
console.log(outputPyramid);
/*
!!!!!!!!!
 !!!!!!!
  !!!!!
   !!!
    !
 */
