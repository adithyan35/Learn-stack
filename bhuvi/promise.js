/*
Promises are a modern JavaScript feature used for handling asynchronous operations. They represent a value that may be available now, or in the future, or never. Promises allow you to write asynchronous code in a more readable and manageable way compared to traditional callback-based approaches.

Basic Concept of Promises
A Promise has three possible states:

Pending: The initial state; the promise is neither fulfilled nor rejected.
Fulfilled: The operation completed successfully, and the promise has a result.
Rejected: The operation failed, and the promise has an error.

Creating a Promise
To create a new promise, you use the Promise constructor, which takes an executor function that receives two arguments:
resolve: A function that is called when the promise is fulfilled.
reject: A function that is called when the promise is rejected.

setTimeout() and setInterval() are used for time-based operations in JavaScript.

Promises represent a value that will be available in the future or never, and they provide a cleaner way to handle asynchronous operations compared to callbacks.

Promise Methods:
then: Adds success and error handlers.
catch: Adds an error handler.
finally: Adds a handler that runs regardless of promise outcome.

properties:
Promise.all: Waits for all promises to be resolved or any to be rejected.
Promise.race: Resolves or rejects as soon as one promise resolves or rejects.
Promise.allSettled: Waits for all promises to be settled (fulfilled or rejected).
Promise.any: Resolves as soon as one promise resolves, or rejects if all promises are rejected.



async/await with Promises

async and await are modern JavaScript features introduced in ES2017 (ES8) that simplify working with asynchronous code and promises. They provide a more synchronous-like approach to handle asynchronous operations, making the code easier to read and maintain compared to traditional promise chains.

async Function:

Declaring a function with the async keyword automatically makes it return a promise.
Inside an async function, you can use the await keyword.

await Expression:

The await keyword can only be used inside an async function.
It pauses the execution of the async function and waits for the promise to resolve or reject.
Once the promise is resolved, it returns the resolved value; if the promise is rejected, it throws the rejected value.
*/



// Simulate an asynchronous operation with a promise
function simulateAsyncOperation(name, delay, shouldSucceed = true) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (shouldSucceed) {
                resolve(`${name} completed successfully`);
            } else {
                reject(`${name} failed`);
            }
        }, delay);
    });
}

// Promise Methods and Properties
function promiseMethodsExample() {
    // Create promises
    const promise1 = simulateAsyncOperation('Task 1', 1000);
    const promise2 = simulateAsyncOperation('Task 2', 2000, false); // This one fails
    const promise3 = simulateAsyncOperation('Task 3', 3000);

    // Promise.then()
    promise1
        .then(result => console.log(result))
        .catch(error => console.error(error))
        .finally(() => console.log('Task 1 has been settled'));

    // Promise.all()
    Promise.all([promise1, promise3])
        .then(results => console.log('All tasks completed:', results))
        .catch(error => console.error('One or more tasks failed:', error));

    // Promise.race()
    Promise.race([promise1, promise2, promise3])
        .then(result => console.log('First completed:', result))
        .catch(error => console.error('First failed:', error));

    // Promise.allSettled()
    Promise.allSettled([promise1, promise2, promise3])
        .then(results => {
            results.forEach((result, index) => {
                if (result.status === 'fulfilled') {
                    console.log(`Task ${index + 1} fulfilled with: ${result.value}`);
                } else {
                    console.error(`Task ${index + 1} rejected with: ${result.reason}`);
                }
            });
        });

    // Promise.any()
    Promise.any([promise2, promise3])
        .then(result => console.log('Any task completed:', result))
        .catch(error => console.error('All tasks failed:', error));
}

// Async/Await Example
async function asyncAwaitExample() {
    try {
        console.log('Starting async operations...');
        const result1 = await simulateAsyncOperation('Async Task 1', 1000);
        console.log(result1);

        const result2 = await simulateAsyncOperation('Async Task 2', 2000, false); // This one fails
        console.log(result2);

        const result3 = await simulateAsyncOperation('Async Task 3', 3000);
        console.log(result3);

        // Handle multiple promises with await and Promise.all
        const [result4, result5] = await Promise.all([
            simulateAsyncOperation('Async Task 4', 1500),
            simulateAsyncOperation('Async Task 5', 2500)
        ]);
        console.log('All tasks completed with:', result4, result5);

    } catch (error) {
        console.error('Error occurred:', error);
    } finally {
        console.log('Async operations have been completed');
    }
}

// Execute examples
promiseMethodsExample();
asyncAwaitExample();


//fetch api from the server using promise 

function fetchDataFromAPI() {
    //let promise = fetch('https://jsonplaceholder.com/posts') 
    let promise = fetch('https://jsonplaceholder.typicode.com/posts') 
      .then((response) => {
        if (!response.ok) {
          throw new Error('network error');
        }
        return response.json(); 
      });
  
    
    console.log('Promise State: Pending........');
  
   
    promise
      .then((data) => {
       
        console.log('Promise State: Fulfilled.');
        console.log('Fetched Data:', data); 
      })
      .catch((error) => {
        
        console.log('Promise State: Rejected');
        console.error('Error:', error.message); 
      })
      .finally(() => {
        
        console.log('Promise State: Finally - Request Completed');
      });
  }
  
 
  fetchDataFromAPI();
  

//fetch the data from the local using promise
const fs = require('fs').promises;

function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      fs.readFile('text.json', 'utf-8')
      //fs.readFile('txt.json', 'utf-8')
        .then((jsonData) => {
          console.log('Data Loaded Successfully');
          resolve(JSON.parse(jsonData));
        })
        .catch((error) => {
          console.error('Error:', 'Failed to fetch data: ' + error.message);
          reject(error);
        });
    }, 1000);
  });
}

fetchData()
  .then((data) => {
    console.log('Data:', JSON.stringify(data, null, 2));  // Display formatted data
  })
  .catch((error) => {
   console.log("there may be error in fetching the data")
  });
