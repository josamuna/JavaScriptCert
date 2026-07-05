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
  return { ...manifest };
}

function validateManifest(manifest) {
  if (
    !Object.hasOwn(manifest, "containerId") &&
    !Object.hasOwn(manifest, "destination") &&
    !Object.hasOwn(manifest, "weight") &&
    !Object.hasOwn(manifest, "unit") &&
    !Object.hasOwn(manifest, "hazmat")
  ) {
    // All missing properties.
    return {
      containerId: "Missing",
      destination: "Missing",
      weight: "Missing",
      unit: "Missing",
      hazmat: "Missing",
    };
  } else if (
    Object.hasOwn(manifest, "containerId") &&
    !Object.hasOwn(manifest, "destination") &&
    !Object.hasOwn(manifest, "weight") &&
    !Object.hasOwn(manifest, "unit") &&
    !Object.hasOwn(manifest, "hazmat")
  ) {
    // Missing properties: destination, weight, unit and hazmat.
    return {
      containerId: manifest.containerId,
      destination: "Missing",
      weight: "Missing",
      unit: "Missing",
      hazmat: "Missing",
    };
  } else if (
    Object.hasOwn(manifest, "containerId") &&
    Object.hasOwn(manifest, "destination") &&
    !Object.hasOwn(manifest, "weight") &&
    !Object.hasOwn(manifest, "unit") &&
    !Object.hasOwn(manifest, "hazmat")
  ) {
    // Missing properties: weight, unit and hazmat.
    return {
      containerId: manifest.containerId,
      destination: manifest.destination,
      weight: "Missing",
      unit: "Missing",
      hazmat: "Missing",
    };
  } else if (
    Object.hasOwn(manifest, "containerId") &&
    Object.hasOwn(manifest, "destination") &&
    Object.hasOwn(manifest, "weight") &&
    !Object.hasOwn(manifest, "unit") &&
    !Object.hasOwn(manifest, "hazmat")
  ) {
    // Missing properties: unit and hazmat.
    return {
      containerId: manifest.containerId,
      destination: manifest.destination,
      weight: manifest.weight,
      unit: "Missing",
      hazmat: "Missing",
    };
  } else if (
    Object.hasOwn(manifest, "containerId") &&
    Object.hasOwn(manifest, "destination") &&
    Object.hasOwn(manifest, "weight") &&
    Object.hasOwn(manifest, "unit") &&
    !Object.hasOwn(manifest, "hazmat")
  ) {
    // Missing properties: hazmat.
    return {
      containerId: manifest.containerId,
      destination: manifest.destination,
      weight: manifest.weight,
      unit: manifest.unit,
      hazmat: "Missing",
    };
  } else if (
    Object.hasOwn(manifest, "containerId") &&
    Object.hasOwn(manifest, "destination") &&
    Object.hasOwn(manifest, "weight") &&
    Object.hasOwn(manifest, "unit") &&
    Object.hasOwn(manifest, "hazmat")
  ) {
    // No missing properties.
    //Checking for the validity of property before returning the value.

    if (
      Number.isNaN(manifest.containerId) ||
      typeof manifest.containerId !== "number"
    ) {
      // Invalid containerId (null, undefined, string or NaN).
      return {
        containerId: "Invalid",
        destination: manifest.destination,
        weight: manifest.weight,
        unit: manifest.unit,
        hazmat: manifest.hazmat,
      };
    } else if (manifest.containerId <= 0) {
      // containerId (<= 0).
      return {
        containerId: "Invalid",
        destination: manifest.destination,
        weight: manifest.weight,
        unit: manifest.unit,
        hazmat: manifest.hazmat,
      };
    } else if (!Number.isInteger(manifest.containerId)) {
      // Not reached
      // containerId not Integer but Floating point.
      return {
        containerId: "Invalid",
        destination: manifest.destination,
        weight: manifest.weight,
        unit: manifest.unit,
        hazmat: manifest.hazmat,
      };
    } else if (!manifest.destination) {
      // Invalid destination (empty string, null or undefined).
      return {
        containerId: manifest.containedId,
        destination: "Invalid",
        weight: manifest.weight,
        unit: manifest.unit,
        hazmat: manifest.hazmat,
      };
    } else if (manifest.destination.trim() === "") {
      // Not working
      // Invalid destination (String with spaceat the start of end).
      return {
        containerId: manifest.containedId,
        destination: "Invalid",
        weight: manifest.weight,
        unit: manifest.unit,
        hazmat: manifest.hazmat,
      };
    } else if (typeof manifest.destination !== "string") {
      // Not reached
      // Invalid destination (Not string).
      return {
        containerId: manifest.containedId,
        destination: "Invalid",
        weight: manifest.weight,
        unit: manifest.unit,
        hazmat: manifest.hazmat,
      };
    } else if (
      Number.isNaN(manifest.weight) ||
      typeof manifest.weight !== "number"
    ) {
      // Not reached
      // Invalid weight (string, null, undefined or NaN).
      return {
        containerId: manifest.containedId,
        destination: manifest.destination,
        weight: "Invalid",
        unit: manifest.unit,
        hazmat: manifest.hazmat,
      };
    } else if (manifest.weight <= 0) {
      // Not reached
      // Invalid weight (<= 0).
      return {
        containerId: manifest.containedId,
        destination: manifest.destination,
        weight: "Invalid",
        unit: manifest.unit,
        hazmat: manifest.hazmat,
      };
    } else if (!manifest.unit) {
      // Invalid unit (empty string, null or undefined).
      return {
        containerId: manifest.containedId,
        destination: manifest.destination.trim,
        weight: manifest.weight,
        unit: "Invalid",
        hazmat: manifest.hazmat,
      };
    } else if (manifest.unit !== "lb" || manifest.unit !== "kg") {
      // Not reached
      // Invalid unit (Not lb or not kg).
      return {
        containerId: manifest.containedId,
        destination: manifest.destination,
        weight: manifest.weight,
        unit: "Invalid",
        hazmat: manifest.hazmat,
      };
    } else if (typeof manifest.hazmat !== "boolean") {
      // Invalid hazmat (not boolean).
      return {
        containerId: manifest.containedId,
        destination: manifest.destination.trim,
        weight: manifest.weight,
        unit: manifest.unit,
        hazmat: "Invalid",
      };
    } else {
      // Valid manifest.
      return {};
    }
  }
}

function processManifest(manifest) {}

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

console.log("=============== validateManifest===============");

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

console.log(validateManifest(manifest)); // Not working

manifest = { containerId: -2 };

console.log(validateManifest(manifest)); // Not full working

manifest = { containerId: 3.5 };

console.log(validateManifest(manifest)); // Not working

manifest = { destination: "  " };

console.log(validateManifest(manifest)); // Not working

manifest = { weight: NaN };

console.log(validateManifest(manifest)); // Not working
