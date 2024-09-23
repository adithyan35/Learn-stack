/*
Destructuring is a syntax feature in JavaScript that allows you to unpack values from arrays, or properties from objects, into distinct variables. It makes extracting data from these structures concise and readable.

1. Array Destructuring
Array destructuring allows you to assign values from an array to individual variables.

2. Object Destructuring
Object destructuring allows you to unpack properties from an object into variables.

3. Function Parameter Destructuring
You can use destructuring in function parameters to extract values directly from objects or arrays.
*/


    // Array destructuring
    const colors = ['Red', 'Green', 'Blue'];
    const [primaryColor, , secondaryColor] = colors;
    console.log('Primary Color:', primaryColor);  // Output: Red
    console.log('Secondary Color:', secondaryColor); // Output: Blue

    // Object destructuring
    const car = {
      make: 'Tesla',
      model: 'Model 3',
      year: 2020,
      features: {
        color: 'White',
        autopilot: true
      }
    };

    const { make, model, features: { color, autopilot } } = car;
    console.log('Make:', make);       // Output: Tesla
    console.log('Model:', model);     // Output: Model 3
    console.log('Color:', color);     // Output: White
    console.log('Autopilot:', autopilot); // Output: true

    // Function parameter destructuring
    function getCarInfo({ make, model, year }) {
      return `${make} ${model}, Year: ${year}`;
    }

    console.log(getCarInfo(car)); // Output: Tesla Model 3, Year: 2020

    // Rest operator with destructuring
    const numbers = [1, 2, 3, 4, 5];
    const [first, second, ...rest] = numbers;
    console.log('First:', first);     // Output: 1
    console.log('Second:', second);   // Output: 2
    console.log('Rest:', rest);       // Output: [3, 4, 5]