/*
an iterable is any object that defines an iteration behavior. This means it can be iterated over, like in a for...of loop or by using spread syntax. Common iterables include arrays, strings, sets, maps, and more. To be iterable, an object must implement the Symbol.iterator method, which is responsible for returning an iterator object.

Key Concepts:
Iterable: An object that can be iterated over. Examples: Arrays, Strings, Sets, Maps.
Iterator: An object that provides the next() method, which returns an object with two properties: value (the current value) and done (a boolean indicating if the iteration is complete).
Iterable Protocol: Any object that implements the Symbol.iterator method is considered iterable. This method returns an iterator, which allows sequential access to the elements of the object.

Built-in Iterables in JavaScript:
Arrays
Strings
Sets
Maps
Typed Arrays
Arguments object
NodeLists (in the DOM)

Iterating over Iterables

Using for...of Loop:
The for...of loop is used to iterate over iterable objects such as arrays, strings, sets, and maps.

Using Spread Syntax (...):
The spread syntax is used to spread the elements of an iterable into a new array or function arguments.

Custom Iterables:
You can create custom iterables by implementing the Symbol.iterator method in any object.

Iterators
An iterator is an object that defines a next() method. This method returns an object with two properties:

value: the current value in the iteration.
done: a boolean indicating whether the iteration is complete.
Iterators allow sequential access to elements, and are used under the hood by iterable objects.

Generators:
Generators are a special type of iterable. They are functions that can be paused and resumed, and they return an iterator. They are defined using the function* syntax and yield keyword.

Array: map(), filter()
String: toUpperCase(), split()
Set: add(), delete(), has()
Map: get(), set(), has()
Custom Iterable: Implements Symbol.iterator
Generator: Uses yield to generate values lazily.
Iterator: next() method returns { value, done }.
*/

// Array Iteration
const array = [10, 20, 30];
console.log("Array Iteration:");
for (let value of array) {
    console.log(value); // Output: 10, 20, 30
}

// Array Methods
console.log("Array Methods:");
console.log(array.map(val => val * 2));  // Output: [20, 40, 60]
console.log(array.filter(val => val > 15));  // Output: [20, 30]

// String Iteration
const str = "Hello";
console.log("String Iteration:");
for (let char of str) {
    console.log(char);  // Output: H, e, l, l, o
}

// String Methods
console.log("String Methods:");
console.log(str.toUpperCase()); // Output: HELLO
console.log(str.split('')); // Output: ['H', 'e', 'l', 'l', 'o']

// Set Iteration
const set = new Set([1, 2, 3, 4]);
console.log("Set Iteration:");
for (let value of set) {
    console.log(value);  // Output: 1, 2, 3, 4
}

// Set Methods
console.log("Set Methods:");
set.add(5); // Adding a new value
set.delete(2); // Removing a value
console.log(set.has(3));  // Output: true
console.log([...set]);  // Spread syntax: Output: [1, 3, 4, 5]

// Map Iteration
const map = new Map([
    ['a', 1],
    ['b', 2],
    ['c', 3]
]);
console.log("Map Iteration:");
for (let [key, value] of map) {
    console.log(`${key}: ${value}`);  // Output: a: 1, b: 2, c: 3
}

// Map Methods
console.log("Map Methods:");
console.log(map.get('a'));  // Output: 1
map.set('d', 4);  // Add a new key-value pair
console.log(map.has('d'));  // Output: true
console.log([...map]);  // Spread syntax: Output: [['a', 1], ['b', 2], ['c', 3], ['d', 4]]

// Custom Iterable Object
const customIterable = {
    values: ['x', 'y', 'z'],
    [Symbol.iterator]() {
        let index = 0;
        return {
            next: () => {
                if (index < this.values.length) {
                    return { value: this.values[index++], done: false };
                } else {
                    return { value: undefined, done: true };
                }
            }
        };
    }
};

console.log("Custom Iterable:");
for (let value of customIterable) {
    console.log(value);  // Output: x, y, z
}

// Generator Function Example
function* generator() {
    yield 10;
    yield 20;
    yield 30;
}

console.log("Generator Function:");
const gen = generator();
console.log(gen.next().value);  // Output: 10
console.log(gen.next().value);  // Output: 20
console.log(gen.next().value);  // Output: 30
console.log(gen.next().done);   // Output: true

// Manual Iterator Example
function manualIterator(arr) {
    let index = 0;
    return {
        next: function () {
            if (index < arr.length) {
                return { value: arr[index++], done: false };
            } else {
                return { value: undefined, done: true };
            }
        }
    };
}

const arrIterator = manualIterator([100, 200, 300]);
console.log("Manual Iterator:");
console.log(arrIterator.next().value);  // Output: 100
console.log(arrIterator.next().value);  // Output: 200
console.log(arrIterator.next().value);  // Output: 300
console.log(arrIterator.next().done);   // Output: true
