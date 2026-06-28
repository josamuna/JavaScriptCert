# CardCountingAssistant

Build a Card Counting Assistant Project.

## Source Code

```js
let count = 0;

function cardCounter(card) {
  if (typeof card === "number" && card <= 1) {
    console.log("Invalid card.");
    return;
  } else if (typeof card === "number" && card >= 2 && card <= 6) {
    count++;
  } else if (typeof card === "number" && card >= 7 && card <= 9) {
  } else if (
    (typeof card === "number" && card === 10) ||
    (typeof card === "string" &&
      (card === "J" || card === "Q" || card === "K" || card === "A"))
  ) {
    count--;
  }

  if (count > 0) {
    return `${count} Bet`;
  } else {
    return `${count} Hold`;
  }
}

// Invalid inputs.
let card = -1;
let result = cardCounter(card);
console.log(result);
card = 0;
result = cardCounter(card);
console.log(result);
card = 1;
result = cardCounter(card);
console.log(result);

// Valid inputs.
card = 2;
result = cardCounter(card);
console.log(result);
card = 3;
result = cardCounter(card);
console.log(result);
card = 4;
result = cardCounter(card);
console.log(result);
card = 5;
result = cardCounter(card);
console.log(result);
card = 6;
result = cardCounter(card);
console.log(result);
card = 7;
result = cardCounter(card);
console.log(result);
card = 8;
result = cardCounter(card);
console.log(result);
card = 9;
result = cardCounter(card);
console.log(result);
card = 10;
result = cardCounter(card);
console.log(result);
card = "J";
result = cardCounter(card);
console.log(result);
card = "Q";
result = cardCounter(card);
console.log(result);
card = "K";
result = cardCounter(card);
console.log(result);
card = "A";
result = cardCounter(card);
console.log(result);
card = 10;
result = cardCounter(card);
console.log(result);
card = "J";
result = cardCounter(card);
console.log(result);
card = 9;
result = cardCounter(card);
console.log(result);
card = 2;
result = cardCounter(card);
console.log(result);
card = 7;
result = cardCounter(card);
console.log(result);
```

## Output

![Image](https://github.com/user-attachments/assets/7c4f52a0-d107-4e7d-babd-561f3bc78df4)
