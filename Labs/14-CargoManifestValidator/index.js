function normalizeUnits(manifest) {
  const normalized = { ...manifest };

  if (normalized.unit === "lb") {
    normalized.weight = normalized.weight * 0.45;
    normalized.unit = "kg";
  }

  return normalized;
}

function validateManifest(manifest) {
  const manifestResult = {};

  if (!Object.hasOwn(manifest, "containerId")) {
    // Missing containerId property.
    manifestResult.containerId = "Missing";
  } else if (
    typeof manifest.containerId !== "number" ||
    Number.isNaN(manifest.containerId) ||
    !Number.isInteger(manifest.containerId) ||
    manifest.containerId <= 0
  ) {
    // Invalid containerId property.
    manifestResult.containerId = "Invalid";
  }

  if (!Object.hasOwn(manifest, "destination")) {
    // Missing destination property.
    manifestResult.destination = "Missing";
  } else if (
    typeof manifest.destination !== "string" ||
    manifest.destination.trim() === ""
  ) {
    // Invalid destination property.
    manifestResult.destination = "Invalid";
  }

  if (!Object.hasOwn(manifest, "weight")) {
    // Missing weight property.
    manifestResult.weight = "Missing";
  } else if (
    typeof manifest.weight !== "number" ||
    Number.isNaN(manifest.weight) ||
    manifest.weight <= 0
  ) {
    // Invalid weight property.
    manifestResult.weight = "Invalid";
  }

  if (!Object.hasOwn(manifest, "unit")) {
    // Missing unit property.
    manifestResult.unit = "Missing";
  } else if (manifest.unit !== "kg" && manifest.unit !== "lb") {
    // Invalid unit property.
    manifestResult.unit = "Invalid";
  }

  if (!Object.hasOwn(manifest, "hazmat")) {
    // Missing hazmat property.
    manifestResult.hazmat = "Missing";
  } else if (typeof manifest.hazmat !== "boolean") {
    // Missing hazmat property.
    manifestResult.hazmat = "Invalid";
  }

  return manifestResult;
}

function processManifest(manifest) {
  const manifestResult = validateManifest(manifest);

  if (Object.keys(manifestResult).length === 0) {
    // Object that return empty Object {} and valid manifest.
    const normalized = normalizeUnits(manifest);

    console.log(`Validation success: ${manifest.containerId}`);
    console.log(`Total weight: ${normalized.weight} kg`);
  } else {
    // Invalid manifest.
    console.log(`Validation error: ${manifest.containerId}`);
    console.log(manifestResult);
  }
}

// Invalid inputs.
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

// Valid inputs.

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

console.log("=============== validateManifest ===============");

manifest = {
  containerId: 1,
  destination: "Santa Cruz",
  weight: 304,
  unit: "kg",
  hazmat: false,
};

console.log(validateManifest(manifest));

manifest = {}; // Empty manifest

console.log(validateManifest(manifest));

manifest = {
  containerId: null,
  destination: "Santa Cruz",
  weight: 304,
  unit: "kg",
  hazmat: false,
};

console.log(validateManifest(manifest));

manifest = {
  containerId: 0,
  destination: 405,
  weight: -84,
  unit: "pounds",
  hazmat: "no",
};

console.log(validateManifest(manifest));

manifest = { containerId: -2 };

console.log(validateManifest(manifest));

manifest = { containerId: 3.5 };

console.log(validateManifest(manifest));

manifest = { destination: "  " };

console.log(validateManifest(manifest));

manifest = { weight: NaN };

console.log(validateManifest(manifest));

console.log("=============== processManifest ===============");

manifest = {
  containerId: 55,
  destination: "Carmel",
  weight: 400,
  unit: "lb",
  hazmat: false,
};

processManifest(manifest);

manifest = { containerId: -88, destination: "Soledad", weight: NaN };

processManifest(manifest);

manifest = { destination: "Watsonville", hazmat: true };

processManifest(manifest);
