# FortuneTeller

Build a Fortune Teller Project.

## Source Code

```js
const fortune1 = "Your cat will look very cuddly today.";
const fortune2 = "The weather will be nice tomorrow.";
const fortune3 = "Be cautious of your new neighbors.";
const fortune4 = "You will find a new hobby soon.";
const fortune5 = "It would be wise to avoid the color red today.";
let selectedFortune = "";
const min = 1;
const max = 6;
const randomNumber = Math.floor(Math.random() * (max - min)) + min;

if (randomNumber === 1) {
  selectedFortune = fortune1;
} else if (randomNumber === 2) {
  selectedFortune = fortune2;
} else if (randomNumber === 3) {
  selectedFortune = fortune3;
} else if (randomNumber === 4) {
  selectedFortune = fortune4;
} else if (randomNumber === 5) {
  selectedFortune = fortune5;
}

console.log(selectedFortune);
```

## Output

![Image](https://github.com/user-attachments/assets/0395f2fc-2ab9-4393-a257-9c980fd538b5)
