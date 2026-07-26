# SmartPantryRestocker

Build a Smart Pantry Restocker Project.

## Source Code

```js
/*
    This lab is about building a small pantry management program using basic JavaScript concepts like arrays, objects, loops, and conditionals.
*/

const pantry = [
  {
    sku: "A10",
    name: "Tomatoes",
    qty: 4,
    expires: "2027-01-01",
    zone: "fridge",
  },
  {
    sku: "D43",
    name: "Pineapples",
    qty: 2,
    expires: "2020-01-01",
    zone: "general",
  },
  {
    sku: "D43",
    name: "Pineapples",
    qty: 2,
    expires: "2020-01-01",
    zone: "general",
  },
  { sku: "B21", name: "Bananas", qty: -2, expires: "2027-01-01" },
];

const rawData = [
  "A10|Tomatoes|5|2027-01-01",
  "B21|Bananas|10|2027-01-01",
  "C32|Eggs|3|2027-01-01|fridge",
  "C32|Eggs|3|2027-01-01",
  "D43|Pineapples|0|2027-01-01",
  "E54|Peppers|-1|2027-01-01|fridge",
];

function parseShipment(rawData) {
  let arrSku = [],
    outputArr = [];

  for (let i = 0; i < rawData.length; i++) {
    const currentRawData = rawData[i].split("|");
    let zone = "";

    if (!arrSku.includes(currentRawData[0])) {
      arrSku.push(currentRawData[0]);

      // Zone exist.
      if (currentRawData.length === 5) {
        zone = currentRawData[4];
      } else {
        // Once zone doen't exist, replace it with 'general'.
        zone = "general";
      }
      // Get values from slitted array by using array destruturing.
      let [sku, name, qty, expires] = currentRawData;

      // Add Object to the output array: sku, name, qty, expires, zone.
      outputArr.push({
        sku: sku,
        name: name,
        qty: parseInt(qty),
        expires: expires,
        zone: zone,
      });
    }
  }

  return outputArr;
}

function planRestock(pantry, shipment) {
  const actions = [];

  for (let i = 0; i < shipment.length; i++) {
    let type = "";
    let found = false;

    for (let j = 0; j < pantry.length; j++) {
      if (shipment[i].sku === pantry[j].sku) {
        found = true;
        break;
      }
    }

    if (shipment[i].qty <= 0) {
      type = "discard";
    } else if (found) {
      type = "restock";
    } else {
      type = "donate";
    }

    // Populate the actions array with expected Object.
    actions.push({ type: type, item: shipment[i] });
  }

  return actions;
}

function groupByZone(actions) {
  const grouped = {};

  for (let i = 0; i < actions.length; i++) {
    const zone = actions[i].item.zone;

    if (!grouped[zone]) {
      grouped[zone] = [];
    }

    grouped[zone].push(actions[i]);
  }

  return grouped;
}

function clonePantry(pantry) {
  const clone = [];

  for (let i = 0; i < pantry.length; i++) {
    // Destructuring Object.
    const { sku, name, qty, expires, zone } = pantry[i];
    clone.push({
      sku: sku,
      name: name,
      qty: qty,
      expires: expires,
      zone: zone,
    });
  }

  return clone;
}

const shipment = parseShipment(rawData);
//console.log(shipment);

const actions = planRestock(pantry, shipment);
//console.log(outputPlanRestock);

const grouped = groupByZone(actions);
console.log(grouped);

const clone = clonePantry(pantry);
console.log(clone);
```

## Output

![Image](https://github.com/user-attachments/assets/01817f38-0f00-4c40-ade3-b50366b76c37)
