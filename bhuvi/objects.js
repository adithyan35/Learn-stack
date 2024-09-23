/*
Objects in JavaScript are collections of key-value pairs, where keys are strings (or Symbols) and values can be of any data type. 

Objects can be 
Creating Objects: Using literals {} or Object constructor.
Accessing Properties: Using dot notation or bracket notation.
Adding/Modifying Properties: Directly assigning values.
Deleting Properties: Using the delete operator.
Methods: Functions defined as properties.
Iterating: Using for...in, Object.keys(), Object.values(), and Object.entries().
Destructuring: Unpacking properties into variables.
Prototypes and Inheritance: Using prototypes for inheritance.
Object.create(): Creating objects with a prototype.
Object.assign(): Copying properties between objects.
*/

// 1. Creating an object using object literal
let person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    email: 'john.doe@example.com',
    
    // Method to return full name
    fullName: function() {
      return `${this.firstName} ${this.lastName}`;
    }
  };
  
  // 2. Accessing and modifying properties
  console.log(`Full Name: ${person.fullName()}`); // Output: John Doe
  console.log(`Email: ${person['email']}`); // Output: john.doe@example.com
  
  person.age = 31; // Modify property
  person.address = '123 Main St'; // Add new property
  console.log(`Updated Age: ${person.age}`); // Output: 31
  console.log(`Address: ${person.address}`); // Output: 123 Main St
  
  // 3. Deleting a property
  delete person.email;
  console.log(`Email after deletion: ${person.email}`); // Output: undefined
  
  // 4. Iterating over properties
  for (let key in person) {
    console.log(`${key}: ${person[key]}`);
    // Output:
    // firstName: John
    // lastName: Doe
    // age: 31
    // address: 123 Main St
  }
  
  // 5. Using Object.keys(), Object.values(), Object.entries()
  console.log(`Keys: ${Object.keys(person)}`); // Output: ['firstName', 'lastName', 'age', 'address']
  console.log(`Values: ${Object.values(person)}`); // Output: ['John', 'Doe', 31, '123 Main St']
  console.log(`Entries: ${Object.entries(person)}`); 
  // Output: [['firstName', 'John'], ['lastName', 'Doe'], ['age', 31], ['address', '123 Main St']]
  
  // 6. Object Destructuring
  let { firstName, lastName } = person;
  console.log(`Destructured Name: ${firstName} ${lastName}`); // Output: John Doe
  
  // 7. Prototypes and Inheritance
  function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  
  Person.prototype.fullName = function() {
    return `${this.firstName} ${this.lastName}`;
  };
  
  let person1 = new Person('Alice', 'Smith');
  console.log(person1.fullName()); // Output: Alice Smith
  
  // 8. Object.create()
  let animal = {
    eats: true
  };
  
  let rabbit = Object.create(animal);
  rabbit.jumps = true;
  
  console.log(`Rabbit eats: ${rabbit.eats}`); // Output: true
  console.log(`Rabbit jumps: ${rabbit.jumps}`); // Output: true
  
  // 9. Object.assign()
  let source = {
    occupation: 'Engineer',
    country: 'USA'
  };
  
  let target = Object.assign({}, person, source);
  console.log(`Merged Object: ${JSON.stringify(target)}`);
  // Output: {"firstName":"John","lastName":"Doe","age":31,"address":"123 Main St","occupation":"Engineer","country":"USA"}
  