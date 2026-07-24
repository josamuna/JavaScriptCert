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

  if (!Object.hasOwn(contacts[0], property)) {
    return "No such property";
  }

  // Loop through the array of object and analyze each one.
  for (let i = 0; i < contacts.length; i++) {
    if (contacts[i][property] === name) {
      return contacts[i][property];
    }
  }
  return "No such contact";
}
