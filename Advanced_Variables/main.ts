let variableAny: any;
console.log("Variable Any value: ", variableAny);
variableAny = "Hello";
console.log("Variable Any value: ", variableAny);
variableAny = 10;
console.log("Variable Any value: ", variableAny);
variableAny = true;
console.log("Variable Any value: ", variableAny);

let variableUnknown: unknown;
console.log("Variable Unknown value: ", variableUnknown);
variableUnknown = "Hello";
console.log("Variable Unknown value: ", variableUnknown);
variableUnknown = 10;
console.log("Variable Unknown value: ", variableUnknown);
variableUnknown = true;
console.log("Variable Unknown value: ", variableUnknown);

if (typeof variableUnknown === "string") {
  console.log("Variable Unknown value: ", variableUnknown);
}

function throwError(message: string): never {
  throw new Error(message);
}

// throwError("This is an error");

function logMessage(message: string): void {
  console.log("Message: ", message);
}

logMessage("Hello");
