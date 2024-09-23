/*
Conditional statements in JavaScript are used to execute different code based on certain conditions. They allow you to control the flow of your program based on logical expressions.

If Statement: Executes code if the condition is true.
If-Else Statement: Provides an alternative block of code if the condition is false.
If-Else If-Else Statement: Checks multiple conditions in sequence.
Switch Statement: Evaluates an expression and executes code based on matching case values.
Ternary Operator: Shorter syntax for if-else statements.
Logical Operators: Combine conditions with &&, ||, and !.
*/

// if
let num = 10;

if (num > 5) {
  console.log('Number is greater than 5');
}

// if else
let numbers = 3;

if (numbers > 5) {
  console.log('Number is greater than 5');
} else {
  console.log('Number is 5 or less');
}

// if else if else
let number = 7;

if (number > 10) {
  console.log('Number is greater than 10');
} else if (number > 5) {
  console.log('Number is greater than 5 but 10 or less');
} else {
  console.log('Number is 5 or less');
}

// switch
let day = 3; // 1 = Monday, 2 = Tuesday, 3 = Wednesday, ...

switch (day) {
  case 1:
    console.log('Monday');
    break;
  case 2:
    console.log('Tuesday');
    break;
  case 3:
    console.log('Wednesday');
    break;
  default:
    console.log('Other day');
    break;
}

// ternary operator
let ages = 20;
let isAdult = (ages >= 18) ? 'Adult' : 'Not an adult';

console.log(isAdult); // Output: Adult

// logical operators
let age = 20;
let hasTicket = true;
let hasPermission = false; // Added missing variable declaration
let isLoggedIn = false;    // Added missing variable declaration

if (age >= 18 && hasTicket) {
  console.log('Allowed to enter');
} else if (age >= 18 || hasPermission) {
  console.log('Allowed to enter');
} else if (!isLoggedIn) {   // Changed 'else' to 'else if' and fixed syntax
  console.log('Please log in');
}
