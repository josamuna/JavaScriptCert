function normalizeUnits(manifest) {
  let formatedManifest = {};
  if (Object.hasOwn(manifest, "unit") && Object.hasOwn(manifest, "weight")) {
    if (manifest.unit === "lb") {
      if (
        typeof manifest.weight !== "number" ||
        Number.isNaN(manifest.weight)
      ) {
        return formatedManifest;
      }

      // Convert lb to kg : 1lb = 0.45 kg
      const lbWeight = manifest.weight;
      const kgWeight = parseFloat(lbWeight * 0.45);
      formatedManifest.weight = kgWeight;

      // Updating the object by referenced the new one to return
      formatedManifest.containerId = manifest.containerId;
      formatedManifest.destination = manifest.destination;
      formatedManifest.unit = "kg";
      formatedManifest.hazmat = manifest.hazmat;

      return formatedManifest;
    }

    formatedManifest = manifest;
  }

  return formatedManifest;
}

function validateManifest(manifest) {}

function processManifest(manifest) {}

// Invalid input
let manifest = {
  containerId: 68,
  destination: "Salinas",
  weight: NaN,
  unit: "lb",
  hazmat: true,
};

console.log(normalizeUnits(manifest)); // {}

manifest = {
  containerId: 68,
  destination: "Salinas",
  weight: undefined,
  unit: "lb",
  hazmat: true,
};

console.log(normalizeUnits(manifest)); // {}

manifest = {
  containerId: 68,
  destination: "Salinas",
  weight: "weight",
  unit: "lb",
  hazmat: true,
};

console.log(normalizeUnits(manifest)); // {}

manifest = {
  containerId: 68,
  destination: "Salinas",
  weight: "5",
  unit: "lb",
  hazmat: true,
};

console.log(normalizeUnits(manifest)); // {}

// Valid inputs

manifest = {
  containerId: 68,
  destination: "Salinas",
  weight: 101,
  unit: "lb",
  hazmat: true,
};

console.log(normalizeUnits(manifest));

manifest = {
  containerId: 68,
  destination: "Salinas",
  weight: 101,
  unit: "kg",
  hazmat: true,
};

console.log(normalizeUnits(manifest));
