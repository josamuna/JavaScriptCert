/*
    This lab is about building an inventory management program that will allow you to add, update, find and remove products from the inventory.
    The inventory is represented as an array of objects where each object will have name and quantity as the keys.
*/

let inventory = [];

function findProductIndex(productName) {
  if (!productName || typeof productName !== "string") {
    return;
  }

  let productIndex = -1;

  for (let i = 0; i < inventory.length; i++) {
    if (inventory[i].name === productName.toLowerCase()) {
      return i;
    }
  }

  return productIndex;
}

inventory = [
  { name: "mouse", quantity: 45 },
  { name: "keyboard", quantity: 22 },
  { name: "monitor", quantity: 12 },
  { name: "hub", quantity: 60 },
  { name: "drive", quantity: 35 },
  { name: "headphones", quantity: 18 },
  { name: "mousepad", quantity: 50 },
  { name: "chair", quantity: 8 },
  { name: "lamp", quantity: 25 },
  { name: "webcam", quantity: 15 },
  { name: "stand", quantity: 30 },
  { name: "cable", quantity: 85 },
  { name: "outlet", quantity: 40 },
  { name: "flour", quantity: 10 },
  { name: "batteries", quantity: 120 },
  { name: "earbuds", quantity: 14 },
];

let indexProduct = findProductIndex("flour");
console.log(indexProduct); //13

indexProduct = findProductIndex("FloUr");
console.log(indexProduct); //13

indexProduct = findProductIndex("Flou");
console.log(indexProduct); // -1
