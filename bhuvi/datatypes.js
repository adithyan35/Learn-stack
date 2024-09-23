/*
Primitive Types:

Number: Numeric values (integers and floating-point).
String: Sequences of characters.
Boolean: true or false values.
Undefined: Variables that are declared but not assigned.
Null: Represents no value or object.
Symbol: Unique identifiers.
BigInt: Large integers beyond Number limits.
Non-Primitive Types:

Object: Collections of key-value pairs.
Array: Ordered lists of values.
Function: Callable blocks of code.
Date: Date and time.
RegExp: Regular expressions for pattern matching.
*/


// Primitive Data Types
let num = 42;                         // Number
let str = 'Hello, world!';            // String
let isActive = true;                  // Boolean
let undefinedVar;                     // Undefined (variable declared but not initialized)
let nullValue = null;                 // Null
let uniqueSymbol = Symbol('id');      // Symbol
let bigIntValue = 1234567890123456789012345678901234567890n; // BigInt

// Non-Primitive (Reference) Data Types
var person = {                        // Object
  name: 'Alice',
  age: 30,
  isActive: true
};

let numbers = [1, 2, 3, 4, 5];       // Array

function greet(name) {               // Function
  return `Hello, ${name}!`;
}

let today = new Date();              // Date
let regexPattern = /hello/i;        // RegExp (Regular Expression)

// Using the values
console.log('Number:', num);                         // 42
console.log('String:', str);                         // Hello, world!
console.log('Boolean:', isActive);                   // true
console.log('Undefined:', undefinedVar);             // undefined
console.log('Null:', nullValue);                     // null
console.log('Symbol:', uniqueSymbol);                // Symbol(id)
console.log('BigInt:', bigIntValue);                 // 1234567890123456789012345678901234567890n

console.log('Object:', person);                       // { name: 'Alice', age: 30, isActive: true }
console.log('Array:', numbers);                       // [1, 2, 3, 4, 5]

console.log('Function Call:', greet('Bob'));          // Hello, Bob!

console.log('Date:', today);                         // Current date and time
console.log('RegExp Test (hello world):', regexPattern.test('hello world')); // true

//null
var person = null; // person is intentionally set to have no value
console.log(person); // Output: null

//undefined
let car;
console.log(car); // Output: undefined

var person = { name: 'Alice' };
console.log(person.age); // Output: undefined (age property does not exist)

//null coalescing
let user;
let defaultName = 'Guest';

let name = user ?? defaultName;
console.log(name); // Output: Guest (since user is undefined)

user = 'Alice';
name = user ?? defaultName;
console.log(name); // Output: Alice (since user is not null or undefined)

// Using || Operator (not always ideal):
let value = 0;
let defaultValue = 5;

let result = value || defaultValue;
console.log(result); // Output: 5 (since 0 is falsy, it uses the default value)
