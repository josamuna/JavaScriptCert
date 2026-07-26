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
  if (
    typeof rawData === "undefined" ||
    rawData === null ||
    typeof rawData.length !== "number"
  ) {
    console.log("Invalid input array.");
    return;
  }

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
      /*singleObj.sku = currentRawData[0];
      singleObj.name = currentRawData[1];
      singleObj.qty = parseInt(currentRawData[2]);
      singleObj.expires = currentRawData[3];*/
      qty = parseInt(qty);
      // Add Object to the output array: sku, name, qty, expires, zone.
      outputArr.push({ sku, name, qty, expires, zone });
    }
  }

  return outputArr;
}

let outputShipment = parseShipment(rawData);
console.log(outputShipment);
