// JavaScript is dynamically typed, similar to TypeScript's 'any'
let dynamicVariable = "Hello";
console.log("Initial value:", dynamicVariable);

// Can be reassigned to any type
dynamicVariable = 42;
console.log("Number value:", dynamicVariable);

// Can be reassigned to boolean
dynamicVariable = true;
console.log("Boolean value:", dynamicVariable);

// Type checking in JavaScript
function processValue(value) {
    if (typeof value === "string") {
        console.log("String length:", value.length);
    } else if (typeof value === "number") {
        console.log("Number doubled:", value * 2);
    } else {
        console.log("Other type:", typeof value);
    }
}

// Examples of type checking
processValue("Hello");    // String
processValue(42);         // Number
processValue(true);       // Boolean 