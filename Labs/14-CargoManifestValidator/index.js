function normalizeUnits(manifest) {
  if (Object.hasOwn(manifest, "unit") && Object.hasOwn(manifest, "weight")) {
    if (manifest.unit === "lb") {
      if (
        typeof manifest.weight !== "number" ||
        Number.isNaN(manifest.weight)
      ) {
        return {};
      }

      return {
        containerId: manifest.containerId,
        destination: manifest.destination,
        weight: manifest.weight * 0.45,
        unit: "kg",
        hazmat: manifest.hazmat,
      };
    }
  }
  return manifest;
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
