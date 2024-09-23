/*
Looping statements in JavaScript allow you to execute a block of code multiple times based on certain conditions. They are useful for iterating over collections, performing repetitive tasks, and managing control flow in your programs.

For Loop: Executes a block of code a specific number of times.
While Loop: Executes a block of code as long as the condition is true.
Do-While Loop: Executes a block of code at least once, then continues as long as the condition is true.
For-In Loop: Iterates over the enumerable properties of an object.
For-Of Loop: Iterates over iterable objects like arrays and strings.
Break Statement: Exits a loop prematurely.
Continue Statement: Skips the current iteration and proceeds to the next one.
*/

//for loop
for (var i = 0; i < 5; i++) {
    console.log(i); // Output: 0 1 2 3 4
  }

//while loop
var i = 0;
while (i < 5) {
  console.log(i); // Output: 0 1 2 3 4
  i++;
}
//do while
var i = 0;
do {
  console.log(i); // Output: 0 1 2 3 4
  i++;
} while (i < 5);
//for in
let person = {
    name: 'Alice',
    age: 30,
    job: 'Engineer'
  };
  
  for (let key in person) {
    console.log(key + ': ' + person[key]);
    // Output:
    // name: Alice
    // age: 30
    // job: Engineer
  }
//for of
let numbers = [1, 2, 3, 4, 5];

for (let number of numbers) {
  console.log(number); // Output: 1 2 3 4 5
}
//break
for (var i = 0; i < 10; i++) {
    if (i === 5) {
      break; // Exits the loop when i equals 5
    }
    console.log(i); // Output: 0 1 2 3 4
  }

//continue
for (var i = 0; i < 10; i++) {
    if (i % 2 === 0) {
      continue; // Skips even numbers
    }
    console.log(i); // Output: 1 3 5 7 9
  }
  