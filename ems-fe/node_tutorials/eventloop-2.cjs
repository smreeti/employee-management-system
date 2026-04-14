// # Instructions
// you will see five `console.log` statements. Your goal is to have them log to the console in the order that they state without rearanging them.

// The output should look like this:

// ```bash
// Print First
// Print Second
// Print Third
// Print Forth
// Print Fifth
// ```

// Your solution should include one `console.log` left as is.

// The other statements should use globals available within node.js to run the `console.log` statement at the appropriate time in the event loop.
// There are multiple ways to accomplish this, but you must **use at least three different methods**.
// After you have writtend your code, run the `index.js` file using `node.js` to test your work.

/**
 * Options for logging:
synchronous - using nothing.
setTimeout - assigning to 0 or a second iteration.
setInterval - could have used a loop of 1 to run one time at 0 or in another iteration.
process.nextTick - to run after the synchronous code or after the polling phase if used with the file system module.
fs - with synchronous code inside to run after the polling phase.
setImmediate - within fs call to run during the check phase.
process.on - to run beforeExit or at exit.
 * 
 */

const fs = require('fs');

process.on('beforeExit', () => {
    console.log('Print Fifth');
});

setTimeout(() => console.log('Print Third'), 0);

process.nextTick(() => console.log('Print Second'));

console.log('Print First');

fs.readFile(__filename, () => {
    console.log('Print Fourth');
})