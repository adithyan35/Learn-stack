/*
Getter: A method that retrieves the value of a property.
Setter: A method that sets the value of a property

How It Works
Getter:

Accessed like a regular property.
Executes a function that returns the value.
Useful for computed properties or encapsulating complex logic.
Setter:

Used to modify the value of a property.
Executes a function when a new value is assigned.
Useful for validation or transformation of the data.
*/


const person = {
    _firstName: 'John',
    _lastName: 'Doe',

    // Getter for full name
    get fullName() {
      return `${this._firstName} ${this._lastName}`;
    },

    // Setter for full name
    set fullName(name) {
      const [firstName, lastName] = name.split(' ');
      this._firstName = firstName || '';
      this._lastName = lastName || '';
    }
  };

  // Display initial full name
  console.log('Person Full Name:', person.fullName); // Output: John Doe

  // Update full name using setter
  person.fullName = 'Jane Smith';
  console.log('Updated Person Full Name:', person.fullName); // Output: Jane Smith

  // Class with getters and setters
  class Rectangle {
    constructor(width, height) {
      this._width = width;
      this._height = height;
    }

    // Getter for area
    get area() {
      return this._width * this._height;
    }

    // Setter for width
    set width(value) {
      if (value > 0) {
        this._width = value;
      } else {
        console.error('Width must be positive');
      }
    }

    // Getter for width
    get width() {
      return this._width;
    }
  }

  // Create a Rectangle instance
  const rect = new Rectangle(10, 20);

  // Display initial area
  console.log('Rectangle Area:', rect.area); // Output: 200

  // Update width using setter
  rect.width = 15;
  console.log('Updated Rectangle Width:', rect.width); // Output: 15
  console.log('Updated Rectangle Area:', rect.area);  // Output: 300

  // Attempt to set an invalid width
  rect.width = -5; // Output: Width must be positive