/* 
The typeof operator is used to determine the type of a given operand. It returns a string representing the type of the variable or expression.
Type conversion refers to the process of converting one data type to another. JavaScript performs both implicit and explicit type conversions.
Type Conversion:
Implicit Conversion: JavaScript automatically converts types as needed.
Explicit Conversion: Use functions like String(), Number(), parseInt(), parseFloat(), and Boolean() to manually convert types.
*/

// Type checking with typeof
let data = [1, 'text', true, null, undefined, { key: 'value' }, function() {}];

data.forEach(item => {
  console.log(`Type of ${item}: ${typeof item}`);
});

// Type Conversion
let numStr = '123';
let num = Number(numStr);
console.log(`String to Number: ${num}`); // Output: 123

let boolValue = Boolean(num);
console.log(`Number to Boolean: ${boolValue}`); // Output: true

let strFromBool = String(boolValue);
console.log(`Boolean to String: ${strFromBool}`); // Output: "true"

let floatValue = parseFloat('123.456');
console.log(`String to Float: ${floatValue}`); // Output: 123.456

let intValue = parseInt('123', 10);
console.log(`String to Integer: ${intValue}`); // Output: 123

let combined = 'The value is ' + num;
console.log(combined); // Output: "The value is 123"
