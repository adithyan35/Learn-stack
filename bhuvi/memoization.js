/*
Memoization is an optimization technique used to improve the performance of functions by caching the results of expensive function calls and reusing those cached results when the same inputs occur again. It is particularly useful in scenarios involving recursive functions or functions with repetitive calculations.

How Memoization Works
Cache Storage: Stores the results of function calls along with their arguments.
Lookup: Before executing a function, checks if the result for the given arguments is already in the cache.
Return Cached Result: If the result is in the cache, it returns the cached result, avoiding redundant computations.
Compute and Cache: If the result is not in the cache, it computes the result, stores it in the cache, and then returns it.

Methods and Properties
memoize(fn):
Purpose: Wraps a function fn to add memoization capabilities.
Parameters: A function fn that you want to memoize.
Returns: A new function that caches the results of fn.

Cache Implementation:
Data Structure: Typically, a Map or plain object is used to store cached results.
Key Generation: Often achieved by serializing function arguments (e.g., using JSON.stringify).


summary
Memoization: Caches the results of expensive function calls to improve performance by avoiding redundant computations.
Basic Memoization: Uses a Map to store results with a key based on function arguments.
Advanced Techniques:
Multiple Arguments: Handles functions with multiple arguments.
Cache Expiry: Adds a time-to-live (TTL) to limit cache size and memory usage.
*/

// Basic Memoization Function
function basicMemoize(fn) {
    const cache = new Map();
    return function (...args) {
        const key = JSON.stringify(args);
        if (cache.has(key)) {
            return cache.get(key);
        }
        const result = fn(...args);
        cache.set(key, result);
        return result;
    };
}

// Memoize Function with Multiple Arguments
function multipleArgsMemoize(fn) {
    const cache = new Map();
    return function (...args) {
        const key = args.map(arg => JSON.stringify(arg)).join('-');
        if (cache.has(key)) {
            return cache.get(key);
        }
        const result = fn(...args);
        cache.set(key, result);
        return result;
    };
}

// Memoize Function with Cache Expiry
function expiredMemoize(fn, ttl = 60000) {
    const cache = new Map();
    return function (...args) {
        const key = JSON.stringify(args);
        const now = Date.now();
        if (cache.has(key)) {
            const { value, timestamp } = cache.get(key);
            if (now - timestamp < ttl) {
                return value;
            } else {
                cache.delete(key);
            }
        }
        const result = fn(...args);
        cache.set(key, { value: result, timestamp: now });
        return result;
    };
}

// Example Functions
function slowFactorial(n) {
    if (n <= 1) return 1;
    return n * slowFactorial(n - 1);
}

function add(a, b) {
    return a + b;
}

function slowAddition(a, b) {
    // Simulate expensive computation
    return a + b;
}

// Create memoized versions of functions
const memoizedFactorial = basicMemoize(slowFactorial);
const memoizedAdd = multipleArgsMemoize(add);
const memoizedAddition = expiredMemoize(slowAddition, 5000);

// Usage of Memoized Functions
console.log('Basic Memoization Example:');
console.log(memoizedFactorial(5)); // Computes and caches result
console.log(memoizedFactorial(5)); // Returns cached result

console.log('\nMultiple Arguments Memoization Example:');
console.log(memoizedAdd(3, 4)); // Computes and caches result
console.log(memoizedAdd(3, 4)); // Returns cached result
console.log(memoizedAdd(4, 5)); // Computes and caches new result

console.log('\nCache Expiry Memoization Example:');
console.log(memoizedAddition(2, 3)); // Computes and caches result
setTimeout(() => {
    console.log(memoizedAddition(2, 3)); // Returns cached result if within TTL
}, 2000);

setTimeout(() => {
    console.log(memoizedAddition(2, 3)); // Cache expired, recomputes result
}, 6000);