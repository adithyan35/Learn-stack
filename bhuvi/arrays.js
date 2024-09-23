/*
Arrays in JavaScript are used to store multiple values in a single variable.
Arrays can be created using array literals ([]) or the Array constructor.

methods and properties
length: Gets the number of elements in the array.
push(): Adds elements to the end.
pop(): Removes the last element.
shift(): Removes the first element.
unshift(): Adds elements to the beginning.
splice(): Adds or removes elements at a specified index.
slice(): Extracts a portion of the array.
concat(): Merges arrays.
join(): Joins array elements into a string.
forEach(): Executes a function for each element.
find(): Finds the first element that satisfies a condition.
filter(): Filters elements based on a condition.
map(): Transforms elements into a new array.
reduce(): Reduces elements to a single value.
sort(): Sorts elements.
reverse(): Reverses the array.
*/

// Create an array of numbers
let numbers = [5, 3, 8, 1, 2];

// 1. Length of the array
console.log(`Length of the array: ${numbers.length}`); // Output: 5

// 2. Add elements to the end of the array
numbers.push(10, 12);
console.log(`After push: ${numbers}`); // Output: [5, 3, 8, 1, 2, 10, 12]

// 3. Remove the last element from the array
let lastNumber = numbers.pop();
console.log(`Removed element: ${lastNumber}`); // Output: 12
console.log(`After pop: ${numbers}`); // Output: [5, 3, 8, 1, 2, 10]

// 4. Add elements to the beginning of the array
numbers.unshift(0);
console.log(`After unshift: ${numbers}`); // Output: [0, 5, 3, 8, 1, 2, 10]

// 5. Remove the first element from the array
let firstNumber = numbers.shift();
console.log(`Removed element: ${firstNumber}`); // Output: 0
console.log(`After shift: ${numbers}`); // Output: [5, 3, 8, 1, 2, 10]

// 6. Add and remove elements at a specific index
numbers.splice(2, 1, 7, 9);
console.log(`After splice: ${numbers}`); // Output: [5, 3, 7, 9, 1, 2, 10]

// 7. Extract a portion of the array
let slicedNumbers = numbers.slice(2, 5);
console.log(`Sliced array: ${slicedNumbers}`); // Output: [7, 9, 1]

// 8. Merge two arrays
let moreNumbers = [11, 12, 13];
let allNumbers = numbers.concat(moreNumbers);
console.log(`Concatenated array: ${allNumbers}`); // Output: [5, 3, 7, 9, 1, 2, 10, 11, 12, 13]

// 9. Join array elements into a string
let numberString = allNumbers.join(', ');
console.log(`Joined string: '${numberString}'`); // Output: '5, 3, 7, 9, 1, 2, 10, 11, 12, 13'

// 10. Execute a function for each element
allNumbers.forEach((num, index) => {
  console.log(`Index ${index}: ${num}`);
  // Output:
  // Index 0: 5
  // Index 1: 3
  // Index 2: 7
  // Index 3: 9
  // Index 4: 1
  // Index 5: 2
  // Index 6: 10
  // Index 7: 11
  // Index 8: 12
  // Index 9: 13
});

// 11. Find the first element that satisfies a condition
let foundNumber = allNumbers.find(num => num > 10);
console.log(`First number greater than 10: ${foundNumber}`); // Output: 11

// 12. Filter elements based on a condition
let evenNumbers = allNumbers.filter(num => num % 2 === 0);
console.log(`Even numbers: ${evenNumbers}`); // Output: [10, 12]

// 13. Transform elements into a new array
let squaredNumbers = allNumbers.map(num => num * num);
console.log(`Squared numbers: ${squaredNumbers}`); // Output: [25, 9, 49, 81, 1, 4, 100, 121, 144, 169]

// 14. Reduce elements to a single value
let sum = allNumbers.reduce((total, num) => total + num, 0);
console.log(`Sum of all numbers: ${sum}`); // Output: 65

// 15. Sort elements in ascending order
allNumbers.sort((a, b) => a - b);
console.log(`Sorted array: ${allNumbers}`); // Output: [1, 2, 3, 5, 7, 9, 10, 11, 12, 13]

// 16. Reverse the order of elements
allNumbers.reverse();
console.log(`Reversed array: ${allNumbers}`); // Output: [13, 12, 11, 10, 9, 7, 5, 3, 2, 1]
