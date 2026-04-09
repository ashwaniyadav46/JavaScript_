console.log(5 > 3); // This will log 'true' to the console because 5 is greater than 3
console.log("5" > 3); // This will also log 'true' because the string "5" is converted to the number 5 before the comparison
console.log(null > 0); // This will log 'false' because null is converted to 0, and 0 is not greater than 0
console.log(null < 0); // This will also log 'false' because null is converted to 0, and 0 is not less than 0
console.log(null == 0); // This will log 'false' because null is only equal to undefined, and not equal to any other value including 0
console.log(null >= 0); // This will log 'true' because null is converted to 0, and 0 is greater than or equal to 0
console.log(null <= 0); // This will also log 'true' because null is converted to 0, and 0 is less than or equal to 0
console.log(undefined > 0); // This will log 'false' because undefined is converted to NaN, and any comparison with NaN results in false
console.log(undefined < 0); // This will also log 'false' because undefined is converted to NaN, and any comparison with NaN results in false
console.log(undefined == 0); // This will log 'false' because undefined is only equal to null, and not equal to any other value including 0
console.log(undefined >= 0); // This will log 'false' because undefined is converted to NaN, and any comparison with NaN results in false
console.log(undefined <= 0); // This will also log 'false' because undefined is converted to NaN, and any comparison with NaN results in false  
console.log(null == undefined); // This will log 'true' because null and undefined are considered equal in non-strict equality comparison
console.log(null === undefined); // This will log 'false' because null and undefined are not strictly equal (they are of different types)
console.log(null>=undefined); // This will log 'true' because null is converted to 0 and undefined is converted to NaN, and 0 is greater than or equal to NaN results in true
console.log(null<=undefined); // This will also log 'true' because null is converted to 0 and undefined is converted to NaN, and 0 is less than or equal to NaN results in true
console.log(null>undefined); // This will log 'false' because null is converted to 0 and undefined is converted to NaN, and 0 is not greater than NaN results in false
console.log(null<undefined); // This will also log 'false' because null is converted to 0 and undefined is converted to NaN, and 0 is not less than NaN results in false
console.log("apple" > "banana"); // This will log 'false' because in lexicographical order, "apple" comes before "banana"
console.log("apple" < "banana"); // This will log 'true' because in lexicographical order, "apple" comes before "banana"
console.log("apple" == "banana"); // This will log 'false' because the two strings are not equal
console.log("2"===2); // This will log 'false' because the string "2" and the number 2 are of different types, and strict equality (===) does not perform type coercion
