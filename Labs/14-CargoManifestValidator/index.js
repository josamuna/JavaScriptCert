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
    // All missing properties except destination.
    !Object.hasOwn(manifest, "containerId") &&
    Object.hasOwn(manifest, "destination") &&
    !Object.hasOwn(manifest, "weight") &&
    !Object.hasOwn(manifest, "unit") &&
    !Object.hasOwn(manifest, "hazmat")
  ) {
    // Destination with spaces.
    if (manifest.destination.toString().trim() === "") {
      return {
        containerId: "Missing",
        destination: "Invalid",
        weight: "Missing",
        unit: "Missing",
        hazmat: "Missing",
      };
    }
  } else if (
    // All missing properties except weight.
    !Object.hasOwn(manifest, "containerId") &&
    !Object.hasOwn(manifest, "destination") &&
    Object.hasOwn(manifest, "weight") &&
    !Object.hasOwn(manifest, "unit") &&
    !Object.hasOwn(manifest, "hazmat")
  ) {
    // Weight with NaN value.
    if (Number.isNaN(manifest.weight)) {
      return {
        containerId: "Missing",
        destination: "Missing",
        weight: "Invalid",
        unit: "Missing",
        hazmat: "Missing",
      };
    }
  } else if (
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
    /*
        Missing properties: destination, weight, unit and hazmat.
        1. Invalid containerId (null, undefined, string or NaN), containerId <= 0, containerId not Integer but Floating point.
        */
    if (
      Number.isNaN(manifest.containerId) ||
      typeof manifest.containerId !== "number" ||
      manifest.containerId <= 0 ||
      !Number.isInteger(manifest.containerId)
    ) {
      return {
        containerId: "Invalid",
        destination: "Missing",
        weight: "Missing",
        unit: "Missing",
        hazmat: "Missing",
      };
    } else {
      return {
        containerId: manifest.containerId,
        destination: "Missing",
        weight: "Missing",
        unit: "Missing",
        hazmat: "Missing",
      };
    }
  } else if (
    Object.hasOwn(manifest, "containerId") &&
    Object.hasOwn(manifest, "destination") &&
    !Object.hasOwn(manifest, "weight") &&
    !Object.hasOwn(manifest, "unit") &&
    !Object.hasOwn(manifest, "hazmat")
  ) {
    /*
        Missing properties: weight, unit and hazmat.

        1. Invalid containerId (null, undefined, string or NaN), containerId <= 0, containerId not Integer but Floating point.
        2. Invalid destination (empty string, null or undefined), destination is a string with space at the start of end, destination not string.
        */
    if (
      (Number.isNaN(manifest.containerId) ||
        typeof manifest.containerId !== "number" ||
        manifest.containerId <= 0 ||
        !Number.isInteger(manifest.containerId)) &&
      (!manifest.destination || typeof manifest.destination !== "string")
    ) {
      return {
        containerId: "Invalid",
        destination: "Invalid",
        weight: "Missing",
        unit: "Missing",
        hazmat: "Missing",
      };
    } else {
      return {
        containerId: manifest.containerId,
        destination: manifest.destination,
        weight: "Missing",
        unit: "Missing",
        hazmat: "Missing",
      };
    }
  } else if (
    Object.hasOwn(manifest, "containerId") &&
    Object.hasOwn(manifest, "destination") &&
    Object.hasOwn(manifest, "weight") &&
    !Object.hasOwn(manifest, "unit") &&
    !Object.hasOwn(manifest, "hazmat")
  ) {
    /*
        Missing properties: unit and hazmat.

        1. Invalid containerId (null, undefined, string or NaN), containerId <= 0, containerId not Integer but Floating point.
        2. Invalid destination (empty string, null or undefined), destination is a string with space at the start of end, destination not string.
        3. Invalid weight (string, null, undefined or NaN), weight <= 0.
        */
    if (
      (Number.isNaN(manifest.containerId) ||
        typeof manifest.containerId !== "number" ||
        manifest.containerId <= 0 ||
        !Number.isInteger(manifest.containerId)) &&
      (!manifest.destination || typeof manifest.destination !== "string") &&
      (Number.isNaN(manifest.weight) ||
        typeof manifest.weight !== "number" ||
        manifest.weight <= 0)
    ) {
      return {
        containerId: "Invalid",
        destination: "Invalid",
        weight: "Invalid",
        unit: "Missing",
        hazmat: "Missing",
      };
    } else {
      return {
        containerId: manifest.containerId,
        destination: manifest.destination,
        weight: manifest.weight,
        unit: "Missing",
        hazmat: "Missing",
      };
    }
  } else if (
    Object.hasOwn(manifest, "containerId") &&
    Object.hasOwn(manifest, "destination") &&
    Object.hasOwn(manifest, "weight") &&
    Object.hasOwn(manifest, "unit") &&
    !Object.hasOwn(manifest, "hazmat")
  ) {
    /*
        Missing properties: hazmat.

        1. Invalid containerId (null, undefined, string or NaN), containerId <= 0, containerId not Integer but Floating point.
        2. Invalid destination (empty string, null or undefined), destination is a string with space at the start of end, destination not string.
        3. Invalid weight (string, null, undefined or NaN), weight <= 0.
        4. Invalid unit (empty string, null or undefined), Invalid unit (Not lb or not kg).
        */
    if (
      ((Number.isNaN(manifest.containerId) ||
        typeof manifest.containerId !== "number" ||
        manifest.containerId <= 0 ||
        !Number.isInteger(manifest.containerId)) &&
        (!manifest.destination || typeof manifest.destination !== "string") &&
        (Number.isNaN(manifest.weight) ||
          typeof manifest.weight !== "number" ||
          manifest.weight <= 0) &&
        !manifest.unit) ||
      manifest.unit !== "lb" ||
      manifest.unit !== "kg"
    ) {
      return {
        containerId: "Invalid",
        destination: "Invalid",
        weight: "Invalid",
        unit: "Invalid",
        hazmat: "Missing",
      };
    } else {
      return {
        containerId: manifest.containerId,
        destination: manifest.destination,
        weight: manifest.weight,
        unit: manifest.unit,
        hazmat: "Missing",
      };
    }
  } else if (
    Object.hasOwn(manifest, "containerId") &&
    Object.hasOwn(manifest, "destination") &&
    Object.hasOwn(manifest, "weight") &&
    Object.hasOwn(manifest, "unit") &&
    Object.hasOwn(manifest, "hazmat")
  ) {
    // No missing property.
    if (manifest.containerId === null || manifest.containerId === undefined) {
      // Null or undefined containerId.

      return {
        containerId: "Invalid",
      };
    } else if (
      ((Number.isNaN(manifest.containerId) ||
        typeof manifest.containerId !== "number" ||
        manifest.containerId <= 0 ||
        !Number.isInteger(manifest.containerId)) &&
        (!manifest.destination || typeof manifest.destination !== "string") &&
        (Number.isNaN(manifest.weight) ||
          typeof manifest.weight !== "number" ||
          manifest.weight <= 0) &&
        !manifest.unit) ||
      ((manifest.unit !== "lb" || manifest.unit !== "kg") &&
        typeof manifest.hazmat !== "boolean")
    ) {
      /*
        All invalid properties.
        1. Invalid containerId (null, undefined, string or NaN), containerId <= 0, containerId not Integer but Floating point.
        2. Invalid destination (empty string, null or undefined), destination is a string with space at the start of end, destination not string.
        3. Invalid weight (string, null, undefined or NaN), weight <= 0.
        4. Invalid unit (empty string, null or undefined), Invalid unit (Not lb or not kg).
        5. Invalid hazmat (not boolean).
        */
      return {
        containerId: "Invalid",
        destination: "Invalid",
        weight: "Invalid",
        unit: "Invalid",
        hazmat: "Invalid",
      };
    } else {
      // valid manifest
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

console.log(validateManifest(manifest));

manifest = { containerId: -2 };

console.log(validateManifest(manifest));

manifest = { containerId: 3.5 };

console.log(validateManifest(manifest));

manifest = { destination: "  " };

console.log(validateManifest(manifest));

manifest = { weight: NaN };

console.log(validateManifest(manifest));
