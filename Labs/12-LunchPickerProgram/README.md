# LunchPickerProgram

Build a Lunch Picker Program Project.

## Source Code

```js
let lunches = [];

function addLunchToEnd(arr, strValue) {
  if (!strValue) {
    console.log("No lunch to add.");
    return arr;
  }
  console.log(`${strValue} added to the end of the lunch menu.`);
  arr.push(strValue);
  return arr;
}

function addLunchToStart(arr, strValue) {
  if (!strValue) {
    console.log("No lunch to add.");
    return arr;
  }
  console.log(`${strValue} added to the start of the lunch menu.`);
  arr.unshift(strValue);
  return arr;
}

function removeLastLunch(arr) {
  if (arr.length === 0) {
    console.log("No lunches to remove.");
  }
  const removedItem = arr.pop();
  console.log(`${removedItem} removed from the end of the lunch menu.`);
  return arr;
}

function removeFirstLunch(arr) {
  if (arr.length === 0) {
    console.log("No lunches to remove.");
    return;
  }

  const removedItem = arr.shift();
  console.log(`${removedItem} removed from the start of the lunch menu.`);
  return arr;
}

function getRandomLunch(arr) {
  if (arr.length === 0) {
    console.log("No lunches available.");
    return;
  }

  const min = 0,
    max = arr.length - 1;
  const randomIndex = Math.floor(Math.random() * (max - min + 1)) + min;
  console.log(`Randomly selected lunch: ${arr[randomIndex]}`);
  return arr;
}

function showLunchMenu(arr) {
  if (arr.length === 0) {
    console.log("The menu is empty.");
    return;
  }

  console.log(`Menu items: ${arr.join(", ")}`);
  return arr;
}

// Empty array.
console.log("---------- Empty array -----------");
addLunchToEnd(lunches, "");
addLunchToStart(lunches, "");
removeLastLunch(lunches);
removeFirstLunch(lunches);
getRandomLunch(lunches);
showLunchMenu(lunches);

// Valid data.
console.log("---------- Valid Data ------------");
let data = addLunchToEnd(lunches, "Beans");
console.log(data);
data = addLunchToEnd(lunches, "Pizza");
console.log(data);
data = addLunchToEnd(lunches, "Sushi");
console.log(data);
data = addLunchToStart(lunches, "Corns");
console.log(data);
data = addLunchToStart(lunches, "Greens");
console.log(data);
data = addLunchToStart(lunches, "Burger");
console.log(data);

data = removeFirstLunch(lunches);
console.log(data);
data = removeLastLunch(lunches);
console.log(data);
getRandomLunch(lunches);
data = showLunchMenu(lunches);
console.log(data);
```

## Output

![Image](https://github.com/user-attachments/assets/b81e68fd-28a0-464b-9c52-687d1538c382)
