# ImplementDNAPairGenerator

Implement a DNA Pair Generator Project.

## Source Code

```js
/*
    This lab is about building a DNA Pair Generator to match the missing base pairs for the provided DNA strand.
    the bases are always paired together: if on one strand there is an A base, on the other strand directly in front there is a T base, the other pair is C and G.

    For example, for the input ATCG, return [["A", "T"], ["T", "A"], ["C", "G"], ["G", "C"]]

    The A base gets paired with a T base, the T base is paired with a A base, the C is paired with the G base, and finally the G base is paired with a C base.
*/

function pairElement(dnaSequence) {
  if (!dnaSequence || typeof dnaSequence !== "string") {
    return;
  }

  const newDnaSequence = dnaSequence.toUpperCase();
  const dnas = [];

  for (let i = 0; i < dnaSequence.length; i++) {
    const innerDna = [];
    switch (newDnaSequence[i]) {
      case "A":
        innerDna.push("A", "T");
        dnas.push(innerDna);
        break;
      case "T":
        innerDna.push("T", "A");
        dnas.push(innerDna);
        break;
      case "C":
        innerDna.push("C", "G");
        dnas.push(innerDna);
        break;
      case "G":
        innerDna.push("G", "C");
        dnas.push(innerDna);
        break;
      // If invalid characteris provided (other than A, T, C or G), the iteration should be ignore.
      default:
        continue;
    }
  }

  return dnas;
}

// invalid inputs.
let dnaValue = pairElement(null);
console.log(dnaValue); // undefined

dnaValue = pairElement(undefined);
console.log(dnaValue); // undefined

dnaValue = pairElement("");
console.log(dnaValue); // undefined

dnaValue = pairElement(10);
console.log(dnaValue); // undefined

dnaValue = pairElement("RTEDCFA");
console.log(dnaValue); // [["T","A"],["C","G"],["A","T"]]

// Valid inputs.
dnaValue = pairElement("ATCGA");
console.log(dnaValue); // [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]]

dnaValue = pairElement("TTGAG");
console.log(dnaValue); // [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]]

dnaValue = pairElement("CTCTA");
console.log(dnaValue); // [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]]
```

## Output

![Image](https://github.com/user-attachments/assets/1933e285-19f3-48c9-a897-5281cc746992)
