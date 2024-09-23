/*
Currying is a functional programming technique where a function with multiple arguments is transformed into a series of functions each taking a single argument. It allows partial application of a function’s arguments, making it easier to build complex functions from simpler ones and reuse functions with pre-set arguments.

How Currying Works
Transforming a Function: A function that takes multiple arguments is transformed into a series of functions, each taking one argument.
Partial Application: You can provide arguments one at a time, creating intermediate functions that remember the previously provided arguments.
Completion: The final function in the chain computes the result once all arguments are provided.

Methods and Properties Related to Currying

Currying Function (curry):
Purpose: Transforms a function into a curried version that can be called with arguments one at a time.
Parameters: The function fn to be curried.
Returns: A curried version of the function.

Function Binding (bind):
Purpose: Creates a new function with some arguments pre-set.
Parameters: bind can be used to fix some of the function’s arguments.
*/

// General-purpose currying function
function curry(fn) {
    const arity = fn.length;
    return function curried(...args) {
      if (args.length >= arity) {
        return fn(...args);
      } else {
        return function(...args2) {
          return curried(...args, ...args2);
        };
      }
    };
  }

  // Example functions
  function add(a, b, c) {
    return a + b + c;
  }

  function multiply(a, b) {
    return a * b;
  }

  // Curried functions
  const curriedAdd = curry(add);
  const curriedMultiply = curry(multiply);

  // Partial application using bind
  const double = curriedMultiply(2);
  const resultAdd = curriedAdd(1)(2)(3); // 1 + 2 + 3 = 6
  const resultMultiply = double(5); // 2 * 5 = 10

  console.log('Curried Add Result:', resultAdd); // Output: 6
  console.log('Curried Multiply Result:', resultMultiply); // Output: 10

  // Function composition
  function compose(f, g) {
    return function(x) {
      return f(g(x));
    };
  }

  function increment(x) {
    return x + 1;
  }

function square(x) {
    return x * x;
  }

  const incrementAndSquare = compose(square, increment);
  const composedResult = incrementAndSquare(4); // (4 + 1) ^ 2 = 25

  console.log('Composed Result:', composedResult); // Output:25