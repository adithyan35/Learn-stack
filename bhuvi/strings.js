/*
Strings in JavaScript are sequences of characters used to represent text.
Strings can be created using single quotes ('), double quotes ("), or backticks (`) for template literals.

methods and properties
length: Gets the number of characters in the string.
charAt(index): Returns the character at the specified index.
charCodeAt(index): Returns the Unicode code of the character at the specified index.
concat(...strings): Joins two or more strings.
includes(substring): Checks if the string contains the specified substring.
indexOf(substring): Returns the index of the first occurrence of a substring.
lastIndexOf(substring): Returns the index of the last occurrence of a substring.
replace(searchValue, newValue): Replaces the first occurrence of a substring.
slice(start, end): Extracts a section of the string.
split(separator): Splits the string into an array of substrings.
substring(start, end): Returns a substring.
toLowerCase(): Converts to lowercase.
toUpperCase(): Converts to uppercase.
trim(): Removes whitespace from both ends.
*/

// Define a string
let str = '   Hello, JavaScript World! Welcome to the coding universe.   ';

// 1. Length of the string
console.log(`Length of the string: ${str.length}`); // Output: 47

// 2. Trim whitespace from both ends
let trimmedStr = str.trim();
console.log(`Trimmed string: '${trimmedStr}'`); // Output: 'Hello, JavaScript World! Welcome to the coding universe.'

// 3. Convert to uppercase
let upperStr = trimmedStr.toUpperCase();
console.log(`Uppercase string: '${upperStr}'`); // Output: 'HELLO, JAVASCRIPT WORLD! WELCOME TO THE CODING UNIVERSE.'

// 4. Convert to lowercase
let lowerStr = trimmedStr.toLowerCase();
console.log(`Lowercase string: '${lowerStr}'`); // Output: 'hello, javascript world! welcome to the coding universe.'

// 5. Find the position of a substring
let index = trimmedStr.indexOf('World');
console.log(`Index of 'World': ${index}`); // Output: 21

// 6. Check if the string contains a substring
let containsWorld = trimmedStr.includes('World');
console.log(`Contains 'World': ${containsWorld}`); // Output: true

// 7. Replace a substring
let replacedStr = trimmedStr.replace('World', 'Galaxy');
console.log(`Replaced string: '${replacedStr}'`); // Output: 'Hello, JavaScript Galaxy! Welcome to the coding universe.'

// 8. Extract a substring using slice
let slicedStr = trimmedStr.slice(7, 22);
console.log(`Sliced string: '${slicedStr}'`); // Output: 'JavaScript World'

// 9. Split the string into an array of substrings
let splitStr = trimmedStr.split(' ');
console.log('Split string:', splitStr);
// Output: ['Hello,', 'JavaScript', 'World!', 'Welcome', 'to', 'the', 'coding', 'universe.']

// 10. Get character at a specific index
let charAtIndex = trimmedStr.charAt(10);
console.log(`Character at index 10: '${charAtIndex}'`); // Output: 'J'

// 11. Get Unicode of the character at a specific index
let charCode = trimmedStr.charCodeAt(10);
console.log(`Unicode of character at index 10: ${charCode}`); // Output: 74 (Unicode for 'J')

// 12. Concatenate with another string
let additionalStr = ' Let\'s start coding!';
let concatenatedStr = trimmedStr.concat(additionalStr);
console.log(`Concatenated string: '${concatenatedStr}'`);
// Output: 'Hello, JavaScript World! Welcome to the coding universe. Let's start coding!'

// 13. Extract a substring using substring
let substringStr = trimmedStr.substring(7, 22);
console.log(`Substring using substring: '${substringStr}'`); // Output: 'JavaScript World'

// 14. Use template literals for interpolation
let name = 'Alice';
let greeting = `Hello, ${name}! Welcome to the world of JavaScript.`;
console.log(greeting); // Output: 'Hello, Alice! Welcome to the world of JavaScript.'

// 15. Multi-line string using template literals
let multiLineStr = `This is a string
that spans multiple lines.`;
console.log(multiLineStr);
// Output:
// This is a string
// that spans multiple lines.
