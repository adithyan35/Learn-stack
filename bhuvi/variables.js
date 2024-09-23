/*
var is function-scoped and can be re-declared.
Hoisting moves the declaration to the top of the scope.
Global variables created with var become properties of the global object.
 
let is block-scoped, which means it's only accessible within the block it is defined in.
Hoisting with let does not initialize the variable until the declaration is reached, resulting in a "temporal dead zone."
Re-declaration of let variables within the same block is not allowed.
Global scope variables with let do not become properties of the global object.

const is block-scoped, like let.
Initialization: Must be assigned a value at the time of declaration.
Re-assignment: Not allowed; the variable cannot be reassigned.
Object Mutability: The object or array assigned to a const variable can still be modified.
Global Scope: const variables do not become properties of the global object.
*/

//var

//variable declaration
var myVariable = 10;

//function scope
function myFunction() {
    var localVariable = 'I am local';
    console.log(localVariable); // 'I am local'
  }
  
  console.log(localVariable); // ReferenceError: localVariable is not defined

//hoisting
console.log(myVar); // undefined
var myVar = 5;
console.log(myVar); // 5

//re declaration
var myVar = 1;
var myVar = 2;
console.log(myVar); // 2

//global object
var globalVar = 'I am global';
console.log(window.globalVar); // 'I am global'


//let

//block scope
if (true) {
    let blockScopedVariable = 'I am block scoped';
    console.log(blockScopedVariable); // 'I am block scoped'
  }
  
  console.log(blockScopedVariable); // ReferenceError: blockScopedVariable is not defined

  
//hoisting
console.log(myLetVar); // ReferenceError: Cannot access 'myLetVar' before initialization
let myLetVar = 10;
console.log(myLetVar); // 10

//re declaration
let myVariable = 1;
//let myVariable = 2; // SyntaxError: Identifier 'myVariable' has already been declared

//global object property
let globalLet = 'I am global';
console.log(window.globalLet); // undefined


//const

//block scope
if (true) {
    const blockScopedConst = 'I am block scoped';
    console.log(blockScopedConst); // 'I am block scoped'
  }
  
  console.log(blockScopedConst); // ReferenceError: blockScopedConst is not defined

  
//initalization
const myConst = 10; // Correct
//const myConst; // SyntaxError: Missing initializer in const declaration

//reassignment
const myConstant = 10;
myConstant = 20; // TypeError: Assignment to constant variable.

//object mutability
const myObject = { key: 'value' };
myObject.key = 'new value'; // This is allowed
console.log(myObject.key); // 'new value'

myObject = { newKey: 'another value' }; // TypeError: Assignment to constant variable.

//global object
const globalConst = 'I am global';
console.log(window.globalConst); // undefined


