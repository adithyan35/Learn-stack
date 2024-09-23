/*
The event loop is a fundamental part of JavaScript's concurrency model, allowing asynchronous operations to be executed in a non-blocking manner. It enables JavaScript to perform tasks like handling user events, performing I/O operations, and making network requests while keeping the application responsive.

How the Event Loop Works

Call Stack:
This is where function execution occurs. It follows a Last-In-First-Out (LIFO) order.
When a function is called, it is added to the stack. When it returns, it is removed from the stack.

Event Queue:
Also known as the task queue or callback queue.
Holds tasks (like user interactions, I/O operations, etc.) that are ready to be executed.
Tasks are added to the queue by asynchronous operations like setTimeout, setInterval, or AJAX requests.

Microtask Queue:
Also known as the job queue or next tick queue.
Holds microtasks like promises and MutationObserver callbacks.
Microtasks have higher priority than tasks in the event queue and are processed before the event loop continues to the next task.

Event Loop:
Continuously checks if the call stack is empty.
If empty, it takes the first task from the microtask queue and executes it.
After processing all microtasks, it processes the next task from the event queue.


Methods and Properties Related to the Event Loop

setTimeout(callback, delay):
Purpose: Schedules a callback function to be executed after a specified delay.

setInterval(callback, interval):
Purpose: Repeatedly executes a callback function with a fixed time delay between each call.

clearTimeout(timeoutId):
Purpose: Cancels a timeout previously established by setTimeout().

clearInterval(intervalId):
Purpose: Cancels a repeating interval previously established by setInterval().

requestAnimationFrame(callback):
Purpose: Schedules a function to be called before the next repaint. It is often used for smooth animations.

queueMicrotask(callback):
Purpose: Adds a microtask to the microtask queue, which will be processed after the current script and before the next event loop iteration.

Summary:

Event Loop: Manages the execution of code, handling asynchronous operations and ensuring the application remains responsive.
Call Stack: Where function execution happens in a LIFO order.
Event Queue: Holds tasks (callbacks) ready to be executed.
Microtask Queue: Holds microtasks (like promises) with higher priority than tasks.
Methods:
setTimeout(), setInterval(), clearTimeout(), clearInterval(): Used for scheduling and clearing tasks.
requestAnimationFrame(): Used for scheduling animations.
queueMicrotask(): Adds a microtask to be executed after the current script.
*/


console.log('Start');

setTimeout(() => {
    console.log('setTimeout'); // Task (event queue)
}, 0);

setInterval(() => {
    console.log('setInterval'); // Repeated task
}, 1000);

const timeoutId = setTimeout(() => {
    console.log('This should not run');
}, 2000);

clearTimeout(timeoutId); // Cancels the timeout

queueMicrotask(() => {
    console.log('Microtask 1');
});

Promise.resolve()
    .then(() => {
        console.log('Promise 1');
        return Promise.resolve();
    })
    .then(() => {
        console.log('Promise 2');
    });

console.log('End');
