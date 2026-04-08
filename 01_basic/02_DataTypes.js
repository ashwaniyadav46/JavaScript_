"use strict"; // Enabling strict mode for better error handling and to prevent certain actions that are considered bad practice in JavaScript newer versions. It helps catch common coding mistakes and "unsafe" actions such as assigning values to undeclared variables.
//alert(3 + 4); // Displaying an alert box with the result of the expression 3 + 4, which will show "7" in the alert dialog.
// Data Types in JavaScript 
let name = "Alice"; // String
let age = 30; // Number
let isStudent = false; // Boolean
//symbol and bigint are also data types in JavaScript, but they are less commonly used compared to the ones mentioned above. Symbol is a unique and immutable primitive value that can be used as an identifier for object properties, while BigInt is a numeric data type that can represent integers with arbitrary precision, allowing for very large numbers beyond the limits of the Number type.
let symbolExample = Symbol("uniqueIdentifier"); // Symbol
let bigIntExample = 1234567890123456789012345678901234567890n; // BigInt, the 'n' at the end indicates that this is a BigInt literal 


let hobbies = ["reading", "traveling", "coding"]; // Array
let address = {    
    street: "123 Main St",
    city: "New York",
    zipCode: "10001"
}; // Object
let nullValue = null; // Null
let undefinedValue; // Undefined
console.log("Name:", name); // Logging the value of the variable 'name' to the console cut signifying that it is a string data type 

console.log("Age:", age);
console.log("Is Student:", isStudent);
console.log("Hobbies:", hobbies);
console.log("Address:", address);
console.log("Null Value:", nullValue);
console.log("Undefined Value:", undefinedValue);
console.log("Symbol Example:", symbolExample);
console.log("BigInt Example:", bigIntExample);
console.log("Data Types:", typeof name, typeof age, typeof isStudent, typeof hobbies, typeof address, typeof nullValue, typeof undefinedValue, typeof symbolExample, typeof bigIntExample); // Logging the data types of the variables to the console using the 'typeof' operator 