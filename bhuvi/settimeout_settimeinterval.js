/*
setTimeout() is typically used when you want to delay the execution of a function once after a specified time. It's useful for creating timed events, delays, and deferring actions.
setInterval() is used for repeatedly executing a function at regular intervals. It's ideal for tasks that need to happen repeatedly over time, like updating clocks, polling for data, or animation.
Cancelling setTimeout(): You can cancel a setTimeout() call using the clearTimeout() function if you no longer want the delayed function to execute.
Stopping setInterval(): You can stop the interval from repeating using the clearInterval() function.
*/


// Example of setTimeout: A single delayed message
setTimeout(() => {
    console.log('This will appear after 3 seconds');
}, 3000);

// Example of setInterval: A message that repeats every 2 seconds
const intervalId = setInterval(() => {
    console.log('This message appears every 2 seconds');
}, 2000);

// Stopping the interval after 8 seconds
setTimeout(() => {
    clearInterval(intervalId);
    console.log('Interval stopped after 8 seconds');
}, 8000);