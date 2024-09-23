// Arithmetic Operators
let a = 10;
let b = 5;

let sum = a + b;         // Addition: Adds two values.
let difference = a - b;  // Subtraction: Subtracts one value from another.
let product = a * b;     // Multiplication: Multiplies two values.
let quotient = a / b;    // Division: Divides one value by another.
let remainder = a % b;   // Modulus: Returns the remainder of a division.
let power = a ** b;      // Exponentiation: Raises a number to the power of another.

// Assignment Operators
let x = 5;
x += 3; // Addition Assignment: Adds and assigns.
x -= 3; // Subtraction Assignment: Subtracts and assigns.
x *= 3; // Multiplication Assignment: Multiplies and assigns.
x /= 3; // Division Assignment: Divides and assigns.
x %= 3; // Modulus Assignment: Applies modulus and assigns.
x **= 3; // Exponentiation Assignment: Applies exponentiation and assigns.

// Comparison Operators
let isEqual = (a == b);     // Equal to: Checks if two values are equal (type coercion occurs).
let isStrictEqual = (a === b); // Strict Equal to: Checks if two values are equal and of the same type.
let isNotEqual = (a != b);     // Not Equal to: Checks if two values are not equal (type coercion occurs).
let isStrictNotEqual = (a !== b); // Strict Not Equal to: Checks if two values are not equal or not of the same type.
let isGreater = (a > b);      // Greater Than: Checks if one value is greater than another.
let isLess = (a < b);         // Less Than: Checks if one value is less than another.
let isGreaterOrEqual = (a >= b); // Greater Than or Equal to: Checks if one value is greater than or equal to another.
let isLessOrEqual = (a <= b);    // Less Than or Equal to: Checks if one value is less than or equal to another.

// Logical Operators
let andResult = (true && false); // Logical AND: Returns true if both operands are true.
let orResult = (true || false);  // Logical OR: Returns true if at least one operand is true.
let notResult = !true;           // Logical NOT: Returns true if the operand is false, and vice versa.

// Bitwise Operators
let andBitwise = 5 & 3;     // Bitwise AND: Performs a bitwise AND.
let orBitwise = 5 | 3;      // Bitwise OR: Performs a bitwise OR.
let xorBitwise = 5 ^ 3;     // Bitwise XOR: Performs a bitwise XOR.
let notBitwise = ~5;        // Bitwise NOT: Performs a bitwise NOT.
let leftShift = 5 << 1;    // Left Shift: Shifts bits to the left.
let rightShift = 5 >> 1;   // Right Shift: Shifts bits to the right.
let unsignedRightShift = -5 >>> 1; // Unsigned Right Shift: Shifts bits to the right with zero fill.

// Conditional (Ternary) Operator
let result = (a > b) ? 'a is greater' : 'b is greater'; // Ternary: Evaluates a condition and returns one of two values.

// Type Operators
let typeOfA = typeof a;      // typeof: Returns the type of a variable.
let isInstance = (new Date() instanceof Date); // instanceof: Tests if an object is an instance of a particular class or constructor.

// Unary Operators
let num = +'5';         // Unary Plus: Converts a value to a number.
let neg = -5;           // Unary Minus: Negates a value.
let count = 5;
count++; // Increment: Increases a value by 1.
count--; // Decrement: Decreases a value by 1.
let bool = !true;      // Logical NOT: Converts a value to a boolean and inverts it.

console.log({
  sum, difference, product, quotient, remainder, power,
  x, isEqual, isStrictEqual, isNotEqual, isStrictNotEqual,
  isGreater, isLess, isGreaterOrEqual, isLessOrEqual,
  andResult, orResult, notResult,
  andBitwise, orBitwise, xorBitwise, notBitwise, leftShift, rightShift, unsignedRightShift,
  result, typeOfA, isInstance,
  num, neg, count, bool
});

// Spread operator with arrays
const fruits = ['Apple', 'Banana'];
const moreFruits = [...fruits, 'Cherry', 'Date'];
console.log('Fruits:', fruits);      // Output: Fruits: [ 'Apple', 'Banana' ]
console.log('More Fruits:', moreFruits); // Output: More Fruits: [ 'Apple', 'Banana', 'Cherry', 'Date' ]

// Spread operator with objects
const person = { name: 'John', age: 30 };
const updatedPerson = { ...person, city: 'New York' };
console.log('Person:', person);          // Output: Person: { name: 'John', age: 30 }
console.log('Updated Person:', updatedPerson); // Output: Updated Person: { name: 'John', age: 30, city: 'New York' }

// Rest operator in function parameters
function displayColors(...colors) {
  console.log('Colors:', colors);
}
displayColors('Red', 'Green', 'Blue'); // Output: Colors: [ 'Red', 'Green', 'Blue' ]

// Rest operator in destructuring
const [first, ...rest] = [1, 2, 3, 4, 5];
console.log('First:', first);  // Output: First: 1
console.log('Rest:', rest);    // Output: Rest: [ 2, 3, 4, 5 ]

// Rest operator in object destructuring
const { name, ...otherProps } = { name: 'Alice', age: 25, city: 'Wonderland' };
console.log('Name:', name);       // Output: Name: Alice
console.log('Other Props:', otherProps); // Output: Other Props: { age: 25, city: 'Wonderland' }

/*
Arithmetic Operators
+: Addition – Adds two values.
-: Subtraction – Subtracts one value from another.
*: Multiplication – Multiplies two values.
/: Division – Divides one value by another.
%: Modulus – Returns the remainder of a division.
**: Exponentiation – Raises a number to the power of another.
Assignment Operators
=: Assignment – Assigns a value to a variable.
+=: Addition Assignment – Adds and assigns.
-=: Subtraction Assignment – Subtracts and assigns.
*=: Multiplication Assignment – Multiplies and assigns.
/=: Division Assignment – Divides and assigns.
%=: Modulus Assignment – Applies modulus and assigns.
**=: Exponentiation Assignment – Applies exponentiation and assigns.
Comparison Operators
==: Equal to – Checks if two values are equal (type coercion occurs).
===: Strict Equal to – Checks if two values are equal and of the same type.
!=: Not Equal to – Checks if two values are not equal (type coercion occurs).
!==: Strict Not Equal to – Checks if two values are not equal or not of the same type.
>: Greater Than – Checks if one value is greater than another.
<: Less Than – Checks if one value is less than another.
>=: Greater Than or Equal to – Checks if one value is greater than or equal to another.
<=: Less Than or Equal to – Checks if one value is less than or equal to another.
Logical Operators
&&: Logical AND – Returns true if both operands are true.
||: Logical OR – Returns true if at least one operand is true.
!: Logical NOT – Returns true if the operand is false, and vice versa.
Bitwise Operators
&: Bitwise AND – Performs a bitwise AND.
|: Bitwise OR – Performs a bitwise OR.
^: Bitwise XOR – Performs a bitwise XOR.
~: Bitwise NOT – Performs a bitwise NOT.
<<: Left Shift – Shifts bits to the left.
>>: Right Shift – Shifts bits to the right.
>>>: Unsigned Right Shift – Shifts bits to the right with zero fill.
Conditional (Ternary) Operator
? :: Ternary – Evaluates a condition and returns one of two values.
Type Operators
typeof: Returns the type of a variable.
instanceof: Tests if an object is an instance of a particular class or constructor.
Unary Operators
+: Unary Plus – Converts a value to a number.
-: Unary Minus – Negates a value.
++: Increment – Increases a value by 1.
--: Decrement – Decreases a value by 1.
!: Logical NOT – Converts a value to a boolean and inverts it.

The spread operator allows you to expand an iterable (such as an array or object) into individual elements or properties. It’s useful for copying, merging, or combining arrays and objects.
The rest operator allows you to collect multiple elements into an array or object. It’s useful for functions to handle varying numbers of arguments or for destructuring assignments.
*/