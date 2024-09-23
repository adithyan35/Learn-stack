/*
Functions in JavaScript are fundamental building blocks for organizing and reusing code. They allow you to encapsulate code into reusable blocks that can be executed when needed. 
*/

//function declaration-> A function declaration defines a named function. It is hoisted, meaning it can be called before its definition in the code.
function greet(name) {
  return `Hello, ${name}!`;
}

console.log(greet('Alice')); // Output: Hello, Alice!

//Function Expression-> A function expression defines a function as part of an expression. It is not hoisted, so it must be defined before it is called.
const square = function (x) {
  return x * x;
};

console.log(square(4)); // Output: 16

//Arrow Function-> Arrow functions provide a shorter syntax and do not have their own this context, which can be useful in certain scenarios. They are always anonymous.
const multiply = (a, b) => a * b;

console.log(multiply(3, 5)); // Output: 15

//Immediately Invoked Function Expression (IIFE)-> An IIFE is a function that is executed immediately after its definition.
(function () {
  console.log('This function runs immediately!');
})();

//Function Parameters and Arguments-> Functions can have parameters (placeholders for values) and arguments (values passed to the function).
function add(a, b) {
  return a + b;
}

console.log(add(2, 3)); // Output: 5

//default parameter-> provide default values for parameters.
function greet(name = 'Guest') {
  return `Hello, ${name}!`;
}

console.log(greet()); // Output: Hello, Guest!

//rest parameter-> The ... syntax allows you to represent an indefinite number of arguments as an array.
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4)); // Output: 10

//return values-> Functions can return values using the return statement. If no return statement is present, the function returns undefined.
function subtract(a, b) {
  return a - b;
}

console.log(subtract(10, 4)); // Output: 6

//function scope-> Variables defined inside a function are local to that function and not accessible outside it.
function localScopeExample() {
  let localVar = 'I am local';
  console.log(localVar); // Output: I am local
}

localScopeExample();
console.log(localVar); // ReferenceError: localVar is not defined

//closure-> A closure is a function that retains access to its lexical scope even when the function is executed outside that scope.
function createCounter() {
  let count = 0;
  return function () {
    count += 1;
    return count;
  };
}

const counter = createCounter();
console.log(counter()); // Output: 1
console.log(counter()); // Output: 2

//function constructor->Functions can also be created using the Function constructor, though this is less common and generally not recommended due to potential security risks.
const addFunction = new Function('a', 'b', 'return a + b;');
console.log(addFunction(5, 7)); // Output: 12
/*
functions are treated as first-class citizens (or first-class functions). This means that functions can be:

Assigned to variables.
Passed as arguments to other functions.
Returned as values from other functions.
Stored in data structures like arrays or objects.
*/
// Assigning a function to a variable
const greet = function (name) {
  return `Hello, ${name}!`;
};

console.log(greet('Alice')); // Output: Hello, Alice!

// Storing a function in an object
const actions = {
  sayHello: function () {
    return 'Hello!';
  }
};

console.log(actions.sayHello()); // Output: Hello!

/*
A higher-order function is a function that:

Takes one or more functions as arguments (i.e., it accepts a function as a parameter).
Returns a function as its result.
Higher-order functions allow us to abstract common patterns or behaviors and can greatly improve the flexibility and reusability of code.
*/

// Higher-order function that takes another function as an argument
function repeatAction(action, times) {
  for (let i = 0; i < times; i++) {
    action(); // Calling the passed-in function
  }
}

// A simple function to pass to the higher-order function
function sayHello() {
  console.log('Hello!');
}

// Using the higher-order function
repeatAction(sayHello, 3);
// Output:
// Hello!
// Hello!
// Hello!

// Higher-order function that returns another function
function createMultiplier(multiplier) {
  return function (number) {
    return number * multiplier;
  };
}

const double = createMultiplier(2);
console.log(double(5)); // Output: 10

const triple = createMultiplier(3);
console.log(triple(5)); // Output: 15


//combined example 
// First-class function: assigning a function to a variable
const sayGoodbye = function (name) {
  return `Goodbye, ${name}!`;
};

console.log(sayGoodbye('Alice')); // Output: Goodbye, Alice!

// Higher-order function: takes a function as a parameter
function executeAction(action, name) {
  return action(name);
}

// Passing a first-class function as an argument to a higher-order function
console.log(executeAction(sayGoodbye, 'Bob')); // Output: Goodbye, Bob!

// Higher-order function that returns a function
function createGreeter(greeting) {
  return function (name) {
    return `${greeting}, ${name}!`;
  };
}

// Using the higher-order function to create specific greeting functions
const sayHello = createGreeter('Hello');
const sayGoodbyeAgain = createGreeter('Goodbye');

console.log(sayHello('Charlie')); // Output: Hello, Charlie!
console.log(sayGoodbyeAgain('Charlie')); // Output: Goodbye, Charlie!

/*
A pure function is a function that:

Always produces the same output for the same input.
Has no side effects, meaning it doesn’t modify external state or variables and doesn’t rely on external data that might change.
Pure functions are predictable and easier to test because they don't interact with the outside world. Their behavior depends solely on their input arguments.

Characteristics of Pure Functions:
No side effects (e.g., modifying global variables, writing to files, changing DOM).
Deterministic: Given the same input, it always returns the same output.

An impure function is a function that:

Produces different output for the same input due to reliance on external factors (like global variables or state).
Has side effects, such as modifying global variables, logging to the console, interacting with external systems (like a database or file system), or changing the DOM.
Impure functions are less predictable and harder to test because their behavior might change depending on external conditions.

Characteristics of Impure Functions:
May rely on external state or global variables.
May modify external state or cause side effects (e.g., console logging, DOM manipulation).
Non-deterministic: The same input can yield different outputs depending on the state.

*/

// Pure function: Same input always produces the same output
function multiply(a, b) {
  return a * b;
}

console.log(multiply(2, 3)); // Output: 6
console.log(multiply(2, 3)); // Output: 6 (always the same output)

// Impure function: Depends on external state
let globalCount = 0;

function incrementCount() {
  globalCount++; // Modifies external state
  return globalCount;
}

console.log(incrementCount()); // Output: 1
console.log(incrementCount()); // Output: 2 (output changes due to external state modification)
