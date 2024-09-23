/*
every object has a built-in property called prototype that allows objects to inherit properties and methods from other objects. This is part of JavaScript’s prototype-based inheritance model.

When you create an object (using a constructor function, class, or literal), JavaScript automatically attaches a prototype to that object. This prototype is used as a blueprint for inheritance, meaning the object can access properties and methods defined in its prototype.

Key Concepts of Prototypes
Prototype: An object from which other objects can inherit properties.
Prototype Chain: When an object doesn’t have a certain property or method, it looks for it in its prototype, which may have its own prototype (forming a chain). This is how inheritance works in JavaScript.
Object.prototype: The top of the prototype chain; all objects eventually inherit from Object.prototype.

hasOwnProperty(): Checks if the object has a property as its own (not inherited).
isPrototypeOf(): Checks if an object is in another object’s prototype chain.
toString(): Returns a string representation of the object.
valueOf(): Returns the primitive value of the object.
constructor: References the function that created the object’s prototype.

Prototype Chain
When you access a property or method on an object, JavaScript first looks for it on the object itself. If it’s not found, JavaScript then checks the object’s prototype, and continues up the chain until it reaches Object.prototype. If the property is not found anywhere, undefined is returned.
*/


// Constructor function
function Vehicle(type) {
    this.type = type;
  }

  // Adding a method to Vehicle's prototype
  Vehicle.prototype.getType = function() {
    return `This is a ${this.type}.`;
  };

  // Creating an object instance
  const car = new Vehicle('car');

  // Accessing prototype method
  console.log(car.getType()); // Output: This is a car.

  // Checking if a property exists on the object itself or prototype
  console.log(car.hasOwnProperty('type'));  // Output: true
  console.log(car.hasOwnProperty('getType'));  // Output: false (from prototype)

  // Inheriting prototype properties
  function ElectricCar(type, batteryLife) {
    Vehicle.call(this, type);
    this.batteryLife = batteryLife;
  }

  // Inherit from Vehicle prototype
  ElectricCar.prototype = Object.create(Vehicle.prototype);
  ElectricCar.prototype.constructor = ElectricCar;

  // Adding a new method to ElectricCar's prototype
  ElectricCar.prototype.getBatteryLife = function() {
    return `Battery life is ${this.batteryLife} hours.`;
  };

  const tesla = new ElectricCar('electric car', 24);

  console.log(tesla.getType()); // Output: This is an electric car.
  console.log(tesla.getBatteryLife()); // Output: Battery life is 24 hours.