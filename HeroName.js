const { question, keyInYN } = require("readline-sync");
let nameInput = question("Enter your name: ");
console.log(`Hello ${nameInput}!  Welcome to my game.`);


module.exports = nameInput