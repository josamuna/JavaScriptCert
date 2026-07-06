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
    !Object.hasOwn(manifest, "containerId") &&
    !Object.hasOwn(manifest, "destination") &&
    !Object.hasOwn(manifest, "weight") &&
    !Object.hasOwn(manifest, "unit") &&
    Object.hasOwn(manifest, "hazmat")
  ) {
    // All missing properties except hazmat.
    if (typeof manifest.hazmat !== "boolean") {
      // Invalid hazmat.
      return {
        containerId: "Missing",
        destination: "Missing",
        weight: "Missing",
        unit: "Missing",
        hazmat: "Invalid",
      };
    } else {
      // Valid hazmat
      return {
        containerId: "Missing",
        destination: "Missing",
        weight: "Missing",
        unit: "Missing",
        hazmat: manifest.hazmat,
      };
    }
  } else if (
    !Object.hasOwn(manifest, "containerId") &&
    !Object.hasOwn(manifest, "destination") &&
    !Object.hasOwn(manifest, "weight") &&
    Object.hasOwn(manifest, "unit") &&
    !Object.hasOwn(manifest, "hazmat")
  ) {
    // All missing properties except unit.
    if (!manifest.unit || manifest.unit !== "lb" || manifest.unit !== "kg") {
      // Invalid unit.
      return {
        containerId: "Missing",
        destination: "Missing",
        weight: "Missing",
        unit: "Invalid",
        hazmat: "Missing",
      };
    } else {
      // Valid unit
      return {
        containerId: "Missing",
        destination: "Missing",
        weight: "Missing",
        unit: manifest.unit,
        hazmat: "Missing",
      };
    }
  } else if (
    !Object.hasOwn(manifest, "containerId") &&
    !Object.hasOwn(manifest, "destination") &&
    !Object.hasOwn(manifest, "weight") &&
    Object.hasOwn(manifest, "unit") &&
    Object.hasOwn(manifest, "hazmat")
  ) {
    // All missing properties except unit and hazmat.
    if (
      (!manifest.unit || manifest.unit !== "lb" || manifest.unit !== "kg") &&
      typeof manifest.hazmat !== "boolean"
    ) {
      // Invalid unit and hazmat.
      return {
        containerId: "Missing",
        destination: "Missing",
        weight: "Missing",
        unit: "Invalid",
        hazmat: "Invalid",
      };
    } else {
      // Valid unit and haznat.
      return {
        containerId: "Missing",
        destination: "Missing",
        weight: "Missing",
        unit: manifest.unit,
        hazmat: manifest.hazmat,
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
    if (
      Number.isNaN(manifest.weight) ||
      typeof manifest.weight !== "number" ||
      manifest.weight <= 0
    ) {
      // Invalid weight (string, null, undefined or NaN), weight <= 0.
      return {
        containerId: "Missing",
        destination: "Missing",
        weight: "Invalid",
        unit: "Missing",
        hazmat: "Missing",
      };
    } else {
      // Valid weight.
      return {
        containerId: "Missing",
        destination: "Missing",
        weight: manifest.weight,
        unit: "Missing",
        hazmat: "Missing",
      };
    }
  } else if (
    // All missing properties except weight and haznat.
    !Object.hasOwn(manifest, "containerId") &&
    !Object.hasOwn(manifest, "destination") &&
    Object.hasOwn(manifest, "weight") &&
    !Object.hasOwn(manifest, "unit") &&
    Object.hasOwn(manifest, "hazmat")
  ) {
    if (
      (Number.isNaN(manifest.weight) ||
        typeof manifest.weight !== "number" ||
        manifest.weight <= 0) &&
      typeof manifest.hazmat !== "boolean"
    ) {
      // Invalid weight (string, null, undefined or NaN), weight <= 0 and haznat.
      return {
        containerId: "Missing",
        destination: "Missing",
        weight: "Invalid",
        unit: "Missing",
        hazmat: "Invalid",
      };
    } else {
      // Valid weight and haznat.
      return {
        containerId: "Missing",
        destination: "Missing",
        weight: manifest.weight,
        unit: "Missing",
        hazmat: manifest.haznat,
      };
    }
  } else if (
    // All missing properties except weight and unit.
    !Object.hasOwn(manifest, "containerId") &&
    !Object.hasOwn(manifest, "destination") &&
    Object.hasOwn(manifest, "weight") &&
    Object.hasOwn(manifest, "unit") &&
    !Object.hasOwn(manifest, "hazmat")
  ) {
    if (
      (Number.isNaN(manifest.weight) ||
        typeof manifest.weight !== "number" ||
        manifest.weight <= 0) &&
      (!manifest.unit || manifest.unit !== "lb" || manifest.unit !== "kg")
    ) {
      // Invalid weight (string, null, undefined or NaN), weight <= 0 and Invalid unit (empty string, null or undefined, Not lb or not kg).
      return {
        containerId: "Missing",
        destination: "Missing",
        weight: "Invalid",
        unit: "Invalid",
        hazmat: "Missing",
      };
    } else {
      // Valid weight and unit.
      return {
        containerId: "Missing",
        destination: "Missing",
        weight: manifest.weight,
        unit: manifest.unit,
        hazmat: "Missing",
      };
    }
  } else if (
    // All missing properties except weight, unit and haznat.
    !Object.hasOwn(manifest, "containerId") &&
    !Object.hasOwn(manifest, "destination") &&
    Object.hasOwn(manifest, "weight") &&
    Object.hasOwn(manifest, "unit") &&
    Object.hasOwn(manifest, "hazmat")
  ) {
    if (
      (Number.isNaN(manifest.weight) ||
        typeof manifest.weight !== "number" ||
        manifest.weight <= 0) &&
      (!manifest.unit || manifest.unit !== "lb" || manifest.unit !== "kg") &&
      typeof manifest.hazmat !== "boolean"
    ) {
      // Invalid weight (string, null, undefined or NaN), weight <= 0, Invalid unit (empty string, null or undefined, Not lb or not kg) and Invalid hazmat (not boolean).
      return {
        containerId: "Missing",
        destination: "Missing",
        weight: "Invalid",
        unit: "Invalid",
        hazmat: "Invalid",
      };
    } else {
      // Valid weight, unit and haznat.
      return {
        containerId: "Missing",
        destination: "Missing",
        weight: manifest.weight,
        unit: manifest.unit,
        hazmat: manifest.hazmat,
      };
    }
  } else if (
    // All missing properties except destination.
    !Object.hasOwn(manifest, "containerId") &&
    Object.hasOwn(manifest, "destination") &&
    !Object.hasOwn(manifest, "weight") &&
    !Object.hasOwn(manifest, "unit") &&
    !Object.hasOwn(manifest, "hazmat")
  ) {
    if (
      !manifest.destination ||
      typeof manifest.destination !== "string" ||
      manifest.destination.toString().trim() === ""
    ) {
      // Invalid destination (empty string, null, undefined, with empty spaces at the start of end or not string).
      return {
        containerId: "Missing",
        destination: "Invalid",
        weight: "Missing",
        unit: "Missing",
        hazmat: "Missing",
      };
    } else {
      // Valid destination
      return {
        containerId: "Missing",
        destination: manifest.destination,
        weight: "Missing",
        unit: "Missing",
        hazmat: "Missing",
      };
    }
  } else if (
    // All missing properties except destination and haznat.
    !Object.hasOwn(manifest, "containerId") &&
    Object.hasOwn(manifest, "destination") &&
    !Object.hasOwn(manifest, "weight") &&
    !Object.hasOwn(manifest, "unit") &&
    Object.hasOwn(manifest, "hazmat")
  ) {
    if (
      (!manifest.destination ||
        typeof manifest.destination !== "string" ||
        manifest.destination.toString().trim() === "") &&
      typeof manifest.hazmat !== "boolean"
    ) {
      // Invalid destination (empty string, null, undefined, with empty spaces at the start of end or not string) and Invalid hazmat (not boolean).
      return {
        containerId: "Missing",
        destination: "Invalid",
        weight: "Missing",
        unit: "Missing",
        hazmat: "Invalid",
      };
    } else {
      // Valid destination and haznat
      return {
        containerId: "Missing",
        destination: manifest.destination,
        weight: "Missing",
        unit: "Missing",
        hazmat: manifest.hazmat,
      };
    }
  } else if (
    // All missing properties except destination and unit.
    !Object.hasOwn(manifest, "containerId") &&
    Object.hasOwn(manifest, "destination") &&
    !Object.hasOwn(manifest, "weight") &&
    Object.hasOwn(manifest, "unit") &&
    !Object.hasOwn(manifest, "hazmat")
  ) {
    if (
      (!manifest.destination ||
        typeof manifest.destination !== "string" ||
        manifest.destination.toString().trim() === "") &&
      (!manifest.unit || manifest.unit !== "lb" || manifest.unit !== "kg")
    ) {
      // Invalid destination (empty string, null, undefined, with empty spaces at the start of end or not string) and Invalid unit (empty string, null or undefined, Not lb or not kg.
      return {
        containerId: "Missing",
        destination: "Invalid",
        weight: "Missing",
        unit: "Invalid",
        hazmat: "Missing",
      };
    } else {
      // Valid destination and unit
      return {
        containerId: "Missing",
        destination: manifest.destination,
        weight: "Missing",
        unit: manifest.unit,
        hazmat: "Missing",
      };
    }
  } else if (
    // All missing properties except destination, unit and haznat.
    !Object.hasOwn(manifest, "containerId") &&
    Object.hasOwn(manifest, "destination") &&
    !Object.hasOwn(manifest, "weight") &&
    Object.hasOwn(manifest, "unit") &&
    Object.hasOwn(manifest, "hazmat")
  ) {
    if (
      (!manifest.destination ||
        typeof manifest.destination !== "string" ||
        manifest.destination.toString().trim() === "") &&
      (!manifest.unit || manifest.unit !== "lb" || manifest.unit !== "kg") &&
      typeof manifest.hazmat !== "boolean"
    ) {
      // Invalid destination (empty string, null, undefined, with empty spaces at the start of end or not string), Invalid unit ,empty string, null or undefined, Not lb or not kg and Invalid hazmat (not boolean).
      return {
        containerId: "Missing",
        destination: "Invalid",
        weight: "Missing",
        unit: "Invalid",
        hazmat: "Invalid",
      };
    } else {
      // Valid destination, unit and haznat.
      return {
        containerId: "Missing",
        destination: manifest.destination,
        weight: "Missing",
        unit: manifest.unit,
        hazmat: manifest.hazmat,
      };
    }
  } else if (
    // All missing properties except destination and weight.
    !Object.hasOwn(manifest, "containerId") &&
    Object.hasOwn(manifest, "destination") &&
    Object.hasOwn(manifest, "weight") &&
    !Object.hasOwn(manifest, "unit") &&
    !Object.hasOwn(manifest, "hazmat")
  ) {
    if (
      (!manifest.destination ||
        typeof manifest.destination !== "string" ||
        manifest.destination.toString().trim() === "") &&
      (Number.isNaN(manifest.weight) ||
        typeof manifest.weight !== "number" ||
        manifest.weight <= 0)
    ) {
      // Invalid destination (empty string, null, undefined, with empty spaces at the start of end or not string) and Invalid weight (string, null, undefined or NaN), weight <= 0.
      return {
        containerId: "Missing",
        destination: "Invalid",
        weight: "Invalid",
        unit: "Missing",
        hazmat: "Missing",
      };
    } else {
      // Valid destination and weight.
      return {
        containerId: "Missing",
        destination: manifest.destination,
        weight: manifest.destination,
        unit: "Missing",
        hazmat: "Missing",
      };
    }
  } else if (
    // All missing properties except destination, weight and haznat.
    !Object.hasOwn(manifest, "containerId") &&
    Object.hasOwn(manifest, "destination") &&
    Object.hasOwn(manifest, "weight") &&
    !Object.hasOwn(manifest, "unit") &&
    Object.hasOwn(manifest, "hazmat")
  ) {
    if (
      (!manifest.destination ||
        typeof manifest.destination !== "string" ||
        manifest.destination.toString().trim() === "") &&
      (Number.isNaN(manifest.weight) ||
        typeof manifest.weight !== "number" ||
        manifest.weight <= 0) &&
      typeof manifest.hazmat !== "boolean"
    ) {
      // Invalid destination (empty string, null, undefined, with empty spaces at the start of end or not string), Invalid weight (string, null, undefined or NaN), weight <= 0 and Invalid hazmat (not boolean).
      return {
        containerId: "Missing",
        destination: "Invalid",
        weight: "Invalid",
        unit: "Missing",
        hazmat: "Invalid",
      };
    } else {
      // Valid destination, weight and haznat.
      return {
        containerId: "Missing",
        destination: manifest.destination,
        weight: manifest.destination,
        unit: "Missing",
        hazmat: manifest.hazmat,
      };
    }
  } else if (
    // All missing properties except destination, weight and unit.
    !Object.hasOwn(manifest, "containerId") &&
    Object.hasOwn(manifest, "destination") &&
    Object.hasOwn(manifest, "weight") &&
    Object.hasOwn(manifest, "unit") &&
    !Object.hasOwn(manifest, "hazmat")
  ) {
    if (
      (!manifest.destination ||
        typeof manifest.destination !== "string" ||
        manifest.destination.toString().trim() === "") &&
      (Number.isNaN(manifest.weight) ||
        typeof manifest.weight !== "number" ||
        manifest.weight <= 0) &&
      (!manifest.unit || manifest.unit !== "lb" || manifest.unit !== "kg") &&
      typeof manifest.hazmat !== "boolean"
    ) {
      // Invalid destination (empty string, null, undefined, with empty spaces at the start of end or not string), Invalid weight (string, null, undefined or NaN), weight <= 0 and and Invalid unit (empty string, null or undefined, Not lb or not kg.
      return {
        containerId: "Missing",
        destination: "Invalid",
        weight: "Invalid",
        unit: "Invalid",
        hazmat: "Missing",
      };
    } else {
      // Valid destination, weight and unit.
      return {
        containerId: "Missing",
        destination: manifest.destination,
        weight: manifest.destination,
        unit: manifest.unit,
        hazmat: "Missing",
      };
    }
  } else if (
    // All missing properties except destination, weight, unit and haznat.
    !Object.hasOwn(manifest, "containerId") &&
    Object.hasOwn(manifest, "destination") &&
    Object.hasOwn(manifest, "weight") &&
    Object.hasOwn(manifest, "unit") &&
    Object.hasOwn(manifest, "hazmat")
  ) {
    if (
      (!manifest.destination ||
        typeof manifest.destination !== "string" ||
        manifest.destination.toString().trim() === "") &&
      (Number.isNaN(manifest.weight) ||
        typeof manifest.weight !== "number" ||
        manifest.weight <= 0) &&
      (!manifest.unit || manifest.unit !== "lb" || manifest.unit !== "kg") &&
      typeof manifest.hazmat !== "boolean"
    ) {
      // Invalid destination (empty string, null, undefined, with empty spaces at the start of end or not string), Invalid weight (string, null, undefined or NaN), weight <= 0, Invalid unit (empty string, null or undefined, Not lb or not kg) and Invalid hazmat (not boolean).
      return {
        containerId: "Missing",
        destination: "Invalid",
        weight: "Invalid",
        unit: "Invalid",
        hazmat: "Invalid",
      };
    } else {
      // Valid destination, weight, unit and haznat.
      return {
        containerId: "Missing",
        destination: manifest.destination,
        weight: manifest.weight,
        unit: manifest.unit,
        hazmat: manifest.hazmat,
      };
    }
  } else if (
    // All missing properties except containerId.
    Object.hasOwn(manifest, "containerId") &&
    !Object.hasOwn(manifest, "destination") &&
    !Object.hasOwn(manifest, "weight") &&
    !Object.hasOwn(manifest, "unit") &&
    !Object.hasOwn(manifest, "hazmat")
  ) {
    if (
      Number.isNaN(
        manifest.containerId ||
          typeof manifest.containerId !== "number" ||
          manifest.containerId <= 0 ||
          !Number.isInteger(manifest.containerId),
      )
    ) {
      // Invalid containerId (null, undefined, string or NaN), containerId <= 0, containerId not Integer but Floating point.
      return {
        containerId: "Invalid",
        destination: "Missing",
        weight: "Missing",
        unit: "Missing",
        hazmat: "Missing",
      };
    } else {
      // Valid containerId
      return {
        containerId: manifest.containerId,
        destination: "Missing",
        weight: "Missing",
        unit: "Missing",
        hazmat: "Missing",
      };
    }
  } else if (
    // All missing properties except containerId and hazmat.
    Object.hasOwn(manifest, "containerId") &&
    !Object.hasOwn(manifest, "destination") &&
    !Object.hasOwn(manifest, "weight") &&
    !Object.hasOwn(manifest, "unit") &&
    Object.hasOwn(manifest, "hazmat")
  ) {
    if (
      Number.isNaN(
        manifest.containerId ||
          typeof manifest.containerId !== "number" ||
          manifest.containerId <= 0 ||
          !Number.isInteger(manifest.containerId),
      ) &&
      typeof manifest.hazmat !== "boolean"
    ) {
      // Invalid containerId (null, undefined, string or NaN), containerId <= 0, containerId not Integer but Floating point and Invalid hazmat (not boolean).
      return {
        containerId: "Invalid",
        destination: "Missing",
        weight: "Missing",
        unit: "Missing",
        hazmat: "Invalid",
      };
    } else {
      // Valid containerId and haznat.
      return {
        containerId: manifest.containerId,
        destination: "Missing",
        weight: "Missing",
        unit: "Missing",
        hazmat: manifest.hazmat,
      };
    }
  } else if (
    // All missing properties except containerId and unit.
    Object.hasOwn(manifest, "containerId") &&
    !Object.hasOwn(manifest, "destination") &&
    !Object.hasOwn(manifest, "weight") &&
    Object.hasOwn(manifest, "unit") &&
    !Object.hasOwn(manifest, "hazmat")
  ) {
    if (
      Number.isNaN(
        manifest.containerId ||
          typeof manifest.containerId !== "number" ||
          manifest.containerId <= 0 ||
          !Number.isInteger(manifest.containerId),
      ) &&
      (!manifest.unit || manifest.unit !== "lb" || manifest.unit !== "kg")
    ) {
      // Invalid containerId (null, undefined, string or NaN), containerId <= 0, containerId not Integer but Floating point and Invalid unit (empty string, null or undefined, Not lb or not kg).
      return {
        containerId: "Invalid",
        destination: "Missing",
        weight: "Missing",
        unit: "Invalid",
        hazmat: "Missing",
      };
    } else {
      // Valid containerId and unit.
      return {
        containerId: manifest.containerId,
        destination: "Missing",
        weight: "Missing",
        unit: manifest.unit,
        hazmat: "Missing",
      };
    }
  } else if (
    // All missing properties except containerId, unit and hazmat.
    Object.hasOwn(manifest, "containerId") &&
    !Object.hasOwn(manifest, "destination") &&
    !Object.hasOwn(manifest, "weight") &&
    Object.hasOwn(manifest, "unit") &&
    Object.hasOwn(manifest, "hazmat")
  ) {
    if (
      Number.isNaN(
        manifest.containerId ||
          typeof manifest.containerId !== "number" ||
          manifest.containerId <= 0 ||
          !Number.isInteger(manifest.containerId),
      ) &&
      (!manifest.unit || manifest.unit !== "lb" || manifest.unit !== "kg") &&
      typeof manifest.hazmat !== "boolean"
    ) {
      // Invalid containerId (null, undefined, string or NaN), containerId <= 0, containerId not Integer but Floating point,  Invalid unit (empty string, null or undefined, Not lb or not kg) and Invalid hazmat (not boolean).
      return {
        containerId: "Invalid",
        destination: "Missing",
        weight: "Missing",
        unit: "Invalid",
        hazmat: "Invalid",
      };
    } else {
      // Valid containerId, unit and hazmat.
      return {
        containerId: manifest.containerId,
        destination: "Missing",
        weight: "Missing",
        unit: manifest.unit,
        hazmat: manifest.hazmat,
      };
    }
  } else if (
    // All missing properties except containerId and weight.
    Object.hasOwn(manifest, "containerId") &&
    !Object.hasOwn(manifest, "destination") &&
    Object.hasOwn(manifest, "weight") &&
    !Object.hasOwn(manifest, "unit") &&
    !Object.hasOwn(manifest, "hazmat")
  ) {
    if (
      Number.isNaN(
        manifest.containerId ||
          typeof manifest.containerId !== "number" ||
          manifest.containerId <= 0 ||
          !Number.isInteger(manifest.containerId),
      ) &&
      (Number.isNaN(manifest.weight) ||
        typeof manifest.weight !== "number" ||
        manifest.weight <= 0)
    ) {
      // Invalid containerId (null, undefined, string or NaN), containerId <= 0, containerId not Integer but Floating point,  Invalid unit (empty string, null or undefined, Not lb or not kg) and Invalid weight (string, null, undefined or NaN), weight <= 0.
      return {
        containerId: "Invalid",
        destination: "Missing",
        weight: "Invalid",
        unit: "Missing",
        hazmat: "Missing",
      };
    } else {
      // Valid containerId and weight.
      return {
        containerId: manifest.containerId,
        destination: "Missing",
        weight: manifest.weight,
        unit: "Missing",
        hazmat: "Missing",
      };
    }
  } else if (
    // All missing properties except containerId, weight and hazmat.
    Object.hasOwn(manifest, "containerId") &&
    !Object.hasOwn(manifest, "destination") &&
    Object.hasOwn(manifest, "weight") &&
    !Object.hasOwn(manifest, "unit") &&
    Object.hasOwn(manifest, "hazmat")
  ) {
    if (
      Number.isNaN(
        manifest.containerId ||
          typeof manifest.containerId !== "number" ||
          manifest.containerId <= 0 ||
          !Number.isInteger(manifest.containerId),
      ) &&
      (Number.isNaN(manifest.weight) ||
        typeof manifest.weight !== "number" ||
        manifest.weight <= 0) &&
      typeof manifest.hazmat !== "boolean"
    ) {
      // Invalid containerId (null, undefined, string or NaN), containerId <= 0, containerId not Integer but Floating point,  Invalid unit (empty string, null or undefined, Not lb or not kg), Invalid weight (string, null, undefined or NaN), weight <= 0 and Invalid hazmat (not boolean).
      return {
        containerId: "Invalid",
        destination: "Missing",
        weight: "Invalid",
        unit: "Missing",
        hazmat: "Invalid",
      };
    } else {
      // Valid containerId, weight and hazmat.
      return {
        containerId: manifest.containerId,
        destination: "Missing",
        weight: manifest.weight,
        unit: "Missing",
        hazmat: manifest.hazmat,
      };
    }
  } else if (
    // All missing properties except containerId, weight and unit.
    Object.hasOwn(manifest, "containerId") &&
    !Object.hasOwn(manifest, "destination") &&
    Object.hasOwn(manifest, "weight") &&
    Object.hasOwn(manifest, "unit") &&
    !Object.hasOwn(manifest, "hazmat")
  ) {
    if (
      Number.isNaN(
        manifest.containerId ||
          typeof manifest.containerId !== "number" ||
          manifest.containerId <= 0 ||
          !Number.isInteger(manifest.containerId),
      ) &&
      (Number.isNaN(manifest.weight) ||
        typeof manifest.weight !== "number" ||
        manifest.weight <= 0) &&
      (!manifest.unit || manifest.unit !== "lb" || manifest.unit !== "kg")
    ) {
      // Invalid containerId (null, undefined, string or NaN), containerId <= 0, containerId not Integer but Floating point,  Invalid unit (empty string, null or undefined, Not lb or not kg), Invalid weight (string, null, undefined or NaN), weight <= 0, Invalid unit (empty string, null or undefined, Not lb or not kg).
      return {
        containerId: "Invalid",
        destination: "Missing",
        weight: "Invalid",
        unit: "Invalid",
        hazmat: "Missing",
      };
    } else {
      // Valid containerId, weight and unit.
      return {
        containerId: manifest.containerId,
        destination: "Missing",
        weight: manifest.weight,
        unit: manifest.unit,
        hazmat: "Missing",
      };
    }
  } else if (
    // All missing properties except containerId, weight, unit and hazmat.
    Object.hasOwn(manifest, "containerId") &&
    !Object.hasOwn(manifest, "destination") &&
    Object.hasOwn(manifest, "weight") &&
    Object.hasOwn(manifest, "unit") &&
    Object.hasOwn(manifest, "hazmat")
  ) {
    if (
      Number.isNaN(
        manifest.containerId ||
          typeof manifest.containerId !== "number" ||
          manifest.containerId <= 0 ||
          !Number.isInteger(manifest.containerId),
      ) &&
      (Number.isNaN(manifest.weight) ||
        typeof manifest.weight !== "number" ||
        manifest.weight <= 0) &&
      (!manifest.unit || manifest.unit !== "lb" || manifest.unit !== "kg") &&
      typeof manifest.hazmat !== "boolean"
    ) {
      // Invalid containerId (null, undefined, string or NaN), containerId <= 0, containerId not Integer but Floating point,  Invalid unit (empty string, null or undefined, Not lb or not kg), Invalid weight (string, null, undefined or NaN), weight <= 0, Invalid unit (empty string, null or undefined, Not lb or not kg) and Invalid hazmat (not boolean).
      return {
        containerId: "Invalid",
        destination: "Missing",
        weight: "Invalid",
        unit: "Invalid",
        hazmat: "Invalid",
      };
    } else {
      // Valid containerId, weight, unit and hazmat.
      return {
        containerId: manifest.containerId,
        destination: "Missing",
        weight: manifest.weight,
        unit: manifest.unit,
        hazmat: manifest.hazmat,
      };
    }
  } else if (
    // All missing properties except containerId and destination.
    Object.hasOwn(manifest, "containerId") &&
    Object.hasOwn(manifest, "destination") &&
    !Object.hasOwn(manifest, "weight") &&
    !Object.hasOwn(manifest, "unit") &&
    !Object.hasOwn(manifest, "hazmat")
  ) {
    if (
      (Number.isNaN(manifest.containerId) ||
        typeof manifest.containerId !== "number" ||
        manifest.containerId <= 0 ||
        !Number.isInteger(manifest.containerId)) &&
      (!manifest.destination || typeof manifest.destination !== "string")
    ) {
      // Invalid containerId (null, undefined, string or NaN), containerId <= 0, containerId not Integer but Floating point and Invalid destination (empty string, null, undefined, with empty spaces at the start of end or not string).
      return {
        containerId: "Invalid",
        destination: "Invalid",
        weight: "Missing",
        unit: "Missing",
        hazmat: "Missing",
      };
    } else {
      return {
        // Valid containerId and destination.
        containerId: manifest.containerId,
        destination: manifest.destination,
        weight: "Missing",
        unit: "Missing",
        hazmat: "Missing",
      };
    }
  } else if (
    // All missing properties except containerId, destination and hazmat.
    Object.hasOwn(manifest, "containerId") &&
    Object.hasOwn(manifest, "destination") &&
    !Object.hasOwn(manifest, "weight") &&
    !Object.hasOwn(manifest, "unit") &&
    Object.hasOwn(manifest, "hazmat")
  ) {
    if (
      (Number.isNaN(manifest.containerId) ||
        typeof manifest.containerId !== "number" ||
        manifest.containerId <= 0 ||
        !Number.isInteger(manifest.containerId)) &&
      (!manifest.destination || typeof manifest.destination !== "string") &&
      typeof manifest.hazmat !== "boolean"
    ) {
      // Invalid containerId (null, undefined, string or NaN), containerId <= 0, containerId not Integer but Floating point,  Invalid destination (empty string, null, undefined, with empty spaces at the start of end or not string) and Invalid hazmat (not boolean).
      return {
        containerId: "Invalid",
        destination: "Invalid",
        weight: "Missing",
        unit: "Missing",
        hazmat: "Invalid",
      };
    } else {
      return {
        // Valid containerId, destination and hazmat.
        containerId: manifest.containerId,
        destination: manifest.destination,
        weight: "Missing",
        unit: "Missing",
        hazmat: manifest.hazmat,
      };
    }
  } else if (
    // All missing properties except containerId, destination and unit.
    Object.hasOwn(manifest, "containerId") &&
    Object.hasOwn(manifest, "destination") &&
    !Object.hasOwn(manifest, "weight") &&
    Object.hasOwn(manifest, "unit") &&
    !Object.hasOwn(manifest, "hazmat")
  ) {
    if (
      (Number.isNaN(manifest.containerId) ||
        typeof manifest.containerId !== "number" ||
        manifest.containerId <= 0 ||
        !Number.isInteger(manifest.containerId)) &&
      (!manifest.destination || typeof manifest.destination !== "string") &&
      (!manifest.unit || manifest.unit !== "lb" || manifest.unit !== "kg")
    ) {
      // Invalid containerId (null, undefined, string or NaN), containerId <= 0, containerId not Integer but Floating point,  Invalid destination (empty string, null, undefined, with empty spaces at the start of end or not string) and Invalid unit (empty string, null or undefined, Not lb or not kg).
      return {
        containerId: "Invalid",
        destination: "Invalid",
        weight: "Missing",
        unit: "Invalid",
        hazmat: "Missing",
      };
    } else {
      return {
        // Valid containerId, destination and unit.
        containerId: manifest.containerId,
        destination: manifest.destination,
        weight: "Missing",
        unit: manifest.unit,
        hazmat: "Missing",
      };
    }
  } else if (
    // All missing properties except containerId, destination, unit and hazmat.
    Object.hasOwn(manifest, "containerId") &&
    Object.hasOwn(manifest, "destination") &&
    !Object.hasOwn(manifest, "weight") &&
    Object.hasOwn(manifest, "unit") &&
    Object.hasOwn(manifest, "hazmat")
  ) {
    if (
      (Number.isNaN(manifest.containerId) ||
        typeof manifest.containerId !== "number" ||
        manifest.containerId <= 0 ||
        !Number.isInteger(manifest.containerId)) &&
      (!manifest.destination || typeof manifest.destination !== "string") &&
      (!manifest.unit || manifest.unit !== "lb" || manifest.unit !== "kg") &&
      typeof manifest.hazmat !== "boolean"
    ) {
      // Invalid containerId (null, undefined, string or NaN), containerId <= 0, containerId not Integer but Floating point,  Invalid destination (empty string, null, undefined, with empty spaces at the start of end or not string), Invalid unit (empty string, null or undefined, Not lb or not kg) and Invalid hazmat (not boolean).
      return {
        containerId: "Invalid",
        destination: "Invalid",
        weight: "Missing",
        unit: "Invalid",
        hazmat: "Invalid",
      };
    } else {
      return {
        // Valid containerId, destination, unit and hazmat.
        containerId: manifest.containerId,
        destination: manifest.destination,
        weight: "Missing",
        unit: manifest.unit,
        hazmat: manifest.hazmat,
      };
    }
  } else if (
    // All missing properties except containerId, destination and weight.
    Object.hasOwn(manifest, "containerId") &&
    Object.hasOwn(manifest, "destination") &&
    Object.hasOwn(manifest, "weight") &&
    !Object.hasOwn(manifest, "unit") &&
    !Object.hasOwn(manifest, "hazmat")
  ) {
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
      // Invalid containerId (null, undefined, string or NaN), containerId <= 0, containerId not Integer but Floating point,  Invalid destination (empty string, null, undefined, with empty spaces at the start of end or not string) and Invalid weight (string, null, undefined or NaN), weight <= 0.
      return {
        containerId: "Invalid",
        destination: "Invalid",
        weight: "Invalid",
        unit: "Missing",
        hazmat: "Missing",
      };
    } else {
      return {
        // Valid containerId, destination and weight.
        containerId: manifest.containerId,
        destination: manifest.destination,
        weight: manifest.weight,
        unit: "Missing",
        hazmat: "Missing",
      };
    }
  } else if (
    // All missing properties except containerId, destination, weight and hazmat.
    Object.hasOwn(manifest, "containerId") &&
    Object.hasOwn(manifest, "destination") &&
    Object.hasOwn(manifest, "weight") &&
    !Object.hasOwn(manifest, "unit") &&
    Object.hasOwn(manifest, "hazmat")
  ) {
    if (
      (Number.isNaN(manifest.containerId) ||
        typeof manifest.containerId !== "number" ||
        manifest.containerId <= 0 ||
        !Number.isInteger(manifest.containerId)) &&
      (!manifest.destination || typeof manifest.destination !== "string") &&
      (Number.isNaN(manifest.weight) ||
        typeof manifest.weight !== "number" ||
        manifest.weight <= 0) &&
      typeof manifest.hazmat !== "boolean"
    ) {
      // Invalid containerId (null, undefined, string or NaN), containerId <= 0, containerId not Integer but Floating point,  Invalid destination (empty string, null, undefined, with empty spaces at the start of end or not string), Invalid weight (string, null, undefined or NaN), weight <= 0 and Invalid hazmat (not boolean).
      return {
        containerId: "Invalid",
        destination: "Invalid",
        weight: "Invalid",
        unit: "Missing",
        hazmat: "Invalid",
      };
    } else {
      return {
        // Valid containerId, destination, weight and hazmat.
        containerId: manifest.containerId,
        destination: manifest.destination,
        weight: manifest.weight,
        unit: "Missing",
        hazmat: manifest.hazmat,
      };
    }
  } else if (
    // All missing properties except containerId, destination, weight and unit.
    Object.hasOwn(manifest, "containerId") &&
    Object.hasOwn(manifest, "destination") &&
    Object.hasOwn(manifest, "weight") &&
    Object.hasOwn(manifest, "unit") &&
    !Object.hasOwn(manifest, "hazmat")
  ) {
    if (
      (Number.isNaN(manifest.containerId) ||
        typeof manifest.containerId !== "number" ||
        manifest.containerId <= 0 ||
        !Number.isInteger(manifest.containerId)) &&
      (!manifest.destination || typeof manifest.destination !== "string") &&
      (Number.isNaN(manifest.weight) ||
        typeof manifest.weight !== "number" ||
        manifest.weight <= 0) &&
      (!manifest.unit || manifest.unit !== "lb" || manifest.unit !== "kg")
    ) {
      // Invalid containerId (null, undefined, string or NaN), containerId <= 0, containerId not Integer but Floating point,  Invalid destination (empty string, null, undefined, with empty spaces at the start of end or not string), Invalid weight (string, null, undefined or NaN), weight <= 0 and Invalid unit (empty string, null or undefined, Not lb or not kg).
      return {
        containerId: "Invalid",
        destination: "Invalid",
        weight: "Invalid",
        unit: "Missing",
        hazmat: "Invalid",
      };
    } else {
      return {
        // Valid containerId, destination, weight and unit.
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

function processManifest(manifest) {
  const manifestResult = validateManifest(manifest);
  if (
    Object.keys(manifestResult).length === 0 &&
    manifestResult.constructor === Object
  ) {
    // Valid manifest.
    const containerId = manifest.containerId;
    console.log(`Validation success: ${containerId}`);
    console.log(`Total weight: ${normalizeUnits(manifest).weight} kg`);
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
