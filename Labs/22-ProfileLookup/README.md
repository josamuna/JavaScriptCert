# ProfileLookup

Build a Profile Lookup Project.

## Source Code

```js
/*
    This lab is about to build a profile lookup that looks up information about people in a contacts list.
    For this example imagine there is a contact named Akira Laine, the lookUpProfile("Akira", "lastName") should return Laine
*/

let contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, property) {
  if (!name || typeof name !== "string") {
    return;
  }

  // Loop through the array of object and analyze each one.
  for (let i = 0; i < contacts.length; i++) {
    if (contacts[i].firstName === name) {
      if (!Object.hasOwn(contacts[i], property)) {
        return "No such property";
      }
      return contacts[i][property];
    }
  }
  return "No such contact";
}

// Invalid inputs.
let outputData = lookUpProfile(null, "lastName");
console.log(outputData); // undefined

outputData = lookUpProfile(undefined, "lastName");
console.log(outputData); // undefined

outputData = lookUpProfile("", "lastName");
console.log(outputData); // undefined

outputData = lookUpProfile(1997, "lastName");
console.log(outputData); // undefined

outputData = lookUpProfile(null, "salary");
console.log(outputData); // undefined

// Valid inputs.
outputData = lookUpProfile("Kristian", "lastName");
console.log(outputData); // Vos

outputData = lookUpProfile("Sherlock", "likes");
console.log(outputData); // [ 'Intriguing Cases', 'Violin' ]

outputData = lookUpProfile("Harry", "likes");
console.log(outputData); // [ 'Hogwarts', 'Magic', 'Hagrid' ]

outputData = lookUpProfile("Bob", "number");
console.log(outputData); // No such contact

outputData = lookUpProfile("Bob", "potato");
console.log(outputData); // No such contact

outputData = lookUpProfile("Akira", "address");
console.log(outputData); // No such property
```

## Output

![Image](https://github.com/user-attachments/assets/63072b9a-6ca6-4def-935a-3296ad6f8289)
