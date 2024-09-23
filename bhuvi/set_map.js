/*
Set and Map are two built-in objects that provide alternative data structures to handle collections of unique values and key-value pairs, respectively.

set:
A Set is a collection of unique values. It allows you to store values of any type, whether primitive values or object references. Duplicate values are not allowed.
Store unique values.
Methods: add(), delete(), has(), clear(), values(), entries().
Iteration: forEach(), for...of.

map:
A Map is a collection of key-value pairs where both keys and values can be of any type. Unlike objects, keys in a Map can be any value (including objects), and they are ordered.
Store key-value pairs.
Methods: set(), get(), has(), delete(), clear(), keys(), values(), entries().
Iteration: forEach(), for...of.
*/

// Create a Set with initial values
let uniqueNumbers = new Set([1, 2, 3, 4, 5, 1, 2]);

// Adding values
uniqueNumbers.add(6); // Add a new value
uniqueNumbers.add(3); // Duplicate value (will not be added)

// Deleting values
uniqueNumbers.delete(2); // Remove a value

// Checking for existence
console.log(`Has 3: ${uniqueNumbers.has(3)}`); // Output: true
console.log(`Has 2: ${uniqueNumbers.has(2)}`); // Output: false

// Get size of the Set
console.log(`Size of Set: ${uniqueNumbers.size}`); // Output: 5

// Iterating over Set using forEach
console.log('Values in Set using forEach:');
uniqueNumbers.forEach(value => console.log(value));

// Iterating over Set using for...of
console.log('Values in Set using for...of:');
for (let value of uniqueNumbers) {
  console.log(value);
}

// Creating a Set from another Set (copy)
let anotherSet = new Set(uniqueNumbers);

// Adding new values to the copied Set
anotherSet.add(7);
anotherSet.add(8);

// Checking the difference between sets
let difference = new Set([...anotherSet].filter(x => !uniqueNumbers.has(x)));

console.log('Values in anotherSet but not in uniqueNumbers:');
console.log([...difference]); // Output: [7, 8]

// Clearing the Set
uniqueNumbers.clear();
console.log(`Size of Set after clearing: ${uniqueNumbers.size}`); // Output: 0

// Using Set with objects
let personSet = new Set([
  { name: 'Alice' },
  { name: 'Bob' },
  { name: 'Alice' } // Object references are unique, so this will be considered a different object
]);

// Iterating over Set with objects
console.log('Objects in Set:');
personSet.forEach(person => console.log(person.name));

// Adding and removing objects
let alice = { name: 'Alice' };
personSet.add(alice); // Adding same object reference

console.log('Objects in Set after adding Alice:');
personSet.forEach(person => console.log(person.name));

personSet.delete(alice);
console.log('Objects in Set after deleting Alice:');
personSet.forEach(person => console.log(person.name));


//map

console.log("map..........")
// Create a Map with initial key-value pairs
let userMap = new Map([
    ['id', 1],
    ['name', 'Alice'],
    ['age', 30]
  ]);
  
  // Adding and updating key-value pairs
  userMap.set('email', 'alice@example.com'); // Add a new pair
  userMap.set('age', 31); // Update existing key
  
  // Retrieving values
  console.log(`Name: ${userMap.get('name')}`); // Output: Alice
  console.log(`Email: ${userMap.get('email')}`); // Output: alice@example.com
  
  // Checking for the existence of a key
  console.log(`Has 'age': ${userMap.has('age')}`); // Output: true
  console.log(`Has 'address': ${userMap.has('address')}`); // Output: false
  
  // Deleting a key-value pair
  userMap.delete('email');
  console.log(`Has 'email' after deletion: ${userMap.has('email')}`); // Output: false
  
  // Get size of the Map
  console.log(`Size of Map: ${userMap.size}`); // Output: 3
  
  // Iterating over Map using forEach
  console.log('Key-Value Pairs in Map using forEach:');
  userMap.forEach((value, key) => console.log(`${key}: ${value}`));
  
  // Iterating over Map using for...of
  console.log('Key-Value Pairs in Map using for...of:');
  for (let [key, value] of userMap) {
    console.log(`${key}: ${value}`);
  }
  

  
  // Creating a Map from another Map (copy)
  let anotherMap = new Map(userMap);
  
  // Adding new key-value pairs to the copied Map
  anotherMap.set('country', 'USA');
  anotherMap.set('hobby', 'Reading');
  
  // Checking the difference between maps
  let keysInAnotherMap = new Set([...anotherMap.keys()]);
  let differ = [...userMap.keys()].filter(key => !keysInAnotherMap.has(key));
  
  console.log('Keys in anotherMap but not in userMap:');
  console.log(differ); // Output: ['country', 'hobby']
  
  // Clearing the Map
  userMap.clear();
  console.log(`Size of Map after clearing: ${userMap.size}`); // Output: 0
  
  // Using Map with objects as keys
  let objectMap = new Map();
  let obj1 = { id: 1 };
  let obj2 = { id: 2 };
  
  objectMap.set(obj1, 'Object 1');
  objectMap.set(obj2, 'Object 2');
  objectMap.set(obj1, 'Updated Object 1'); // Update value for existing key
  
  // Iterating over Map with objects as keys
  console.log('Objects as keys in Map:');
  objectMap.forEach((value, key) => console.log(`Key id: ${key.id}, Value: ${value}`));
  