# AllTruePropertyValidator

Building an All True Poject Validator Project.

## Source Code

```js
/*
    This lab is about building test a specific property of each object in 
    an array to see if it always has a truthy value or not. 

    For example, you could be asked to test one property of the objects in an array like the following:

    [{
        name: "Quincy",
        role: "Founder",
        isBot: false
    }, {
        name: "Naomi",
        role: "",
        isBot: false
    }, {
        name: "Camperbot",
        role: "Bot",
        isBot: true
    }]

    If you were asked to test the name property, in the objects of this array the property 
    name has the values of "Quincy", "Naomi", and "Camperbot", so it is always truthy.

    If you were asked to test the role property, the values are "Founder", "", and "Bot", 
    in this case "" is a falsy value, so the values are not always truthy.
*/

function truthCheck(collection, pre) {
  if (!Array.isArray(collection) || collection.length === 0) {
    return;
  }

  const isTruthValue = collection.every((obj) => {
    return Object.hasOwn(obj, pre) && obj[pre];
  });
  return isTruthValue;
}

let isTruth = truthCheck(
  [
    { name: "Quincy", role: "Founder", isBot: false },
    { name: "Naomi", role: "", isBot: false },
    { name: "Camperbot", role: "Bot", isBot: true },
  ],
  "isBot",
);
console.log(isTruth); // false

isTruth = truthCheck(
  [
    { name: "Quincy", role: "Founder", isBot: false },
    { name: "Naomi", role: "", isBot: false },
    { name: "Camperbot", role: "Bot", isBot: true },
  ],
  "name",
);
console.log(isTruth); // true

isTruth = truthCheck(
  [
    { name: "Quincy", role: "Founder", isBot: false },
    { name: "Naomi", role: "", isBot: false },
    { name: "Camperbot", role: "Bot", isBot: true },
  ],
  "role",
);
console.log(isTruth); // false

isTruth = truthCheck(
  [
    { name: "Pikachu", number: 25, caught: 3 },
    { name: "Togepi", number: 175, caught: 1 },
  ],
  "number",
);
console.log(isTruth); // true

isTruth = truthCheck(
  [
    { name: "Pikachu", number: 25, caught: 3 },
    { name: "Togepi", number: 175, caught: 1 },
    { name: "MissingNo", number: NaN, caught: 0 },
  ],
  "caught",
);
console.log(isTruth); // false

isTruth = truthCheck(
  [
    { name: "Pikachu", number: 25, caught: 3 },
    { name: "Togepi", number: 175, caught: 1 },
    { name: "MissingNo", number: NaN, caught: 0 },
  ],
  "caught",
);
console.log(isTruth); // false

isTruth = truthCheck(
  [
    { name: "Quincy", username: "QuincyLarson" },
    { name: "Naomi", username: "nhcarrigan" },
    { name: "Camperbot" },
  ],
  "username",
);
console.log(isTruth); // false

isTruth = truthCheck(
  [
    { name: "freeCodeCamp", users: [{ name: "Quincy" }, { name: "Naomi" }] },
    { name: "Code Radio", users: [{ name: "Camperbot" }] },
    { name: "", users: [] },
  ],
  "users",
);
console.log(isTruth); // true

isTruth = truthCheck(
  [
    { id: 1, data: { url: "https://freecodecamp.org", name: "freeCodeCamp" } },
    {
      id: 2,
      data: { url: "https://coderadio.freecodecamp.org/", name: "CodeRadio" },
    },
    { id: null, data: {} },
  ],
  "data",
);
console.log(isTruth); // true

isTruth = truthCheck(
  [
    { id: 1, data: { url: "https://freecodecamp.org", name: "freeCodeCamp" } },
    {
      id: 2,
      data: { url: "https://coderadio.freecodecamp.org/", name: "CodeRadio" },
    },
    { id: null, data: {} },
  ],
  "id",
);
console.log(isTruth); // false
```

## Output

![Image](https://github.com/user-attachments/assets/3301d11c-0586-4a4d-9347-1af645a88937)
