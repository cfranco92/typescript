var variableAny;
console.log("Variable Any value: ", variableAny);
variableAny = "Hello";
console.log("Variable Any value: ", variableAny);
variableAny = 10;
console.log("Variable Any value: ", variableAny);
variableAny = true;
console.log("Variable Any value: ", variableAny);
var variableUnknown;
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
function throwError(message) {
    throw new Error(message);
}
// throwError("This is an error");
function logMessage(message) {
    console.log("Message: ", message);
}
logMessage("Hello");
