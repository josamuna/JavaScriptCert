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
      // Get values from slitted array.
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
  /*if(typeof pantry === "undefined" || pantry === null || typeof pantry.length !== "number") {
    console.log("Invalid input array.");
    return;
  }*/

  const actions = [];
  let type = "";

  for (let i = 0; i < shipment.length; i++) {
    if (shipment[i].qty <= 0) {
      type = "discard";
    } else if (shipment[i].sku === pantry[i].sku) {
      type = "restock";
    } else {
      type = "donate";
    }

    // Populate the actions array with expected Object.
    actions.push({ type: type, item: shipment[i] });
  }

  return actions;
}

function groupByZone(actions) {}

const shipment = parseShipment(rawData);
console.log(shipment);

const outputPlanRestock = planRestock(pantry, shipment);
console.log(outputPlanRestock);
