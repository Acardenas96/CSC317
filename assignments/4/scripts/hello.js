// hello.js
// This script demonstrates a simple greeting message using JavaScript.

/**
 * A constant string representing the default greeting name.
 * @type {string}
 */
const greeting = "JavaScript";

/**
 * Creates a personalized greeting message for the given name.
 * @param {string} name - The name to include in the greeting.
 * @returns {string} A formatted greeting message.
 */
const createMessage = (name) => {
    return `Hello, ${name}!`;
};

// Log the greeting message to the console using the default greeting
console.log(createMessage(greeting));