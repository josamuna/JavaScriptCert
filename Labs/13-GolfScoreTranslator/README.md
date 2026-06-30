# GolfScoreTranslator

Build a Golf Score Translator Project.

## Source Code

```js
const names = [
  "Hole-in-one!",
  "Eagle",
  "Birdie",
  "Par",
  "Bogey",
  "Double Bogey",
  "Go Home!",
];

function golfScore(par, strokes) {
  let value = "";
  if (par < 0 || strokes < 0) {
    value = "Invalid inputs provided.";
  }
  if (
    Number.isNaN(par) ||
    Number.isNaN(strokes) ||
    typeof par !== "number" ||
    typeof strokes !== "number"
  ) {
    value = "Invalid inputs numbers provided.";
  }

  if (strokes === 1) {
    value = names[0]; // Hole-in-one!
  } else if (strokes <= par - 2) {
    value = names[1]; // Eagle
  } else if (strokes === par - 1) {
    value = names[2]; // Birdie
  } else if (strokes === par) {
    value = names[3]; // Par
  } else if (strokes === par + 1) {
    value = names[4]; // Bogey
  } else if (strokes === par + 2) {
    value = names[5]; // Double Bogey
  } else if (strokes >= par + 3) {
    value = names[6]; // Go Home!
  }
  return value;
}

// Invalid inputs.
console.log("---------- Invalid inputs -----------");
let scoreName = golfScore(Number.NaN, Number.NaN);
console.log(scoreName);
scoreName = golfScore(0 / 0, 0 / 0);
console.log(scoreName);

// Valid inputs.
console.log("---------- Valid inputs -----------");
scoreName = golfScore(1, 1);
console.log(scoreName);
scoreName = golfScore(3, 1);
console.log(scoreName);
scoreName = golfScore(4, 1);
console.log(scoreName);
scoreName = golfScore(5, 1);
console.log(scoreName);
scoreName = golfScore(4, 2);
console.log(scoreName);
scoreName = golfScore(5, 2);
console.log(scoreName);
scoreName = golfScore(3, 2);
console.log(scoreName);
scoreName = golfScore(4, 3);
console.log(scoreName);
scoreName = golfScore(5, 4);
console.log(scoreName);
scoreName = golfScore(3, 3);
console.log(scoreName);
scoreName = golfScore(4, 4);
console.log(scoreName);
scoreName = golfScore(3, 4);
console.log(scoreName);
scoreName = golfScore(4, 5);
console.log(scoreName);
scoreName = golfScore(5, 6);
console.log(scoreName);
scoreName = golfScore(3, 5);
console.log(scoreName);
scoreName = golfScore(4, 6);
console.log(scoreName);
scoreName = golfScore(5, 7);
console.log(scoreName);
scoreName = golfScore(3, 7);
console.log(scoreName);
scoreName = golfScore(4, 8);
console.log(scoreName);
scoreName = golfScore(5, 9);
console.log(scoreName);
```

## Output

![Image](https://github.com/user-attachments/assets/691c9c37-3cea-4c2f-84f6-ccf8ab064525)
