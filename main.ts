// Example of 'any' type
let anyVariable: any = "Hello";
anyVariable = 42;        // Can be reassigned to any type
anyVariable = true;      // No type checking
anyVariable.toFixed(2);  // No error, even though it might not be a number

// Example of 'unknown' type
let unknownVariable: unknown = "Hello";
// unknownVariable.toUpperCase(); // Error: Object is of type 'unknown'

// Type checking with 'unknown'
if (typeof unknownVariable === "string") {
    console.log(unknownVariable.toUpperCase()); // Now it's safe
}

// Type assertion with 'unknown'
let value: unknown = "Hello World";
let stringLength: number = (value as string).length; 