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

function addProduct(productObject) {
  // Excluded null, undefined or empty object.
  if (!productObject || Object.keys(productObject).length === 0) {
    return;
  }

  if (
    !Object.hasOwn(productObject, "name") ||
    !Object.hasOwn(productObject, "quantity")
  ) {
    return;
  }

  if (inventory.length === 0) {
    const { name, quantity } = productObject;
    inventory.push({ name: name.toLowerCase(), quantity: quantity });
    console.log(`${name.toLowerCase()} added to inventory`);
  } else {
    let isQuantityUpdated = false;

    for (let i = 0; i < inventory.length; i++) {
      if (productObject.name.toLowerCase() === inventory[i].name) {
        inventory[i].quantity += productObject.quantity;
        if (findProductIndex(productObject.name) > -1) {
          console.log(`${productObject.name.toLowerCase()} quantity updated`);
          isQuantityUpdated = true;
          break;
        }
      }
    }
    if (!isQuantityUpdated) {
      // Add the Object to the Array.
      const { name, quantity } = productObject;
      inventory.push({ name: name.toLowerCase(), quantity: quantity });
      console.log(`${name.toLowerCase()} added to inventory`);
    }
  }
}

function removeProduct(productName, productQuantity) {
  if (!productName) {
    return;
  }

  if (typeof productQuantity != "number" || productQuantity < 0) {
    return;
  }

  if (inventory.length === 0) {
    console.log(`${productName.toLowerCase()} not found`);
  } else {
    // The product should exist to proceed.
    if (findProductIndex(productName) > -1) {
      for (let i = 0; i < inventory.length; i++) {
        if (productName.toLowerCase() === inventory[i].name) {
          // Not enought quantity to substract.
          if (inventory[i].quantity < productQuantity) {
            console.log(
              `Not enough ${productName.toLowerCase()} available, remaining pieces: ${inventory[i].quantity}`,
            );
            break;
          } else if (inventory[i].quantity === productQuantity) {
            // The substraction will result to zero, then remove the product from array.
            inventory.splice(i, 1);
            break;
          } else {
            // The substraction will be positive.
            inventory[i].quantity -= productQuantity;
            console.log(
              `Remaining ${productName.toLowerCase()} pieces: ${inventory[i].quantity}`,
            );
            break;
          }
        }
      }
    } else {
      // product not found.
      console.log(`${productName.toLowerCase()} not found`);
    }
  }
}

let indexProduct = findProductIndex("flour");
console.log(indexProduct); //13

indexProduct = findProductIndex("FloUr");
console.log(indexProduct); //13

indexProduct = findProductIndex("Flou");
console.log(indexProduct); // -1

addProduct({ name: "mouse", quantity: 45 });
console.log(inventory); // added

addProduct({ name: "mouse", quantity: 30 });
console.log(inventory); // updated

addProduct({ name: "keyboard", quantity: 22 });
console.log(inventory); // added

addProduct({ name: "keyboard", quantity: 10 });
console.log(inventory); // updated

addProduct({ name: "hub", quantity: 60 });
console.log(inventory); // added

addProduct({ name: "FLOUR", quantity: 5 });
console.log(inventory); // added

addProduct({ name: "FLOUR", quantity: 50 });
console.log(inventory); // updated

removeProduct("KEYBOARD", 2);
console.log(inventory); // substract

removeProduct("KEYBOARD", 50);
console.log(inventory); // Not enough

removeProduct("keyboards", 50);
console.log(inventory); // Not found

removeProduct("keyboard", 30);
console.log(inventory); // Remove
