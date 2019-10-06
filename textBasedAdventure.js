const readline = require('readline-sync')

// Example
// let nameInput = readline.question("Enter your name: ")
// console.log(`Hello ${nameInput}!  Welcome to my game.`)

// Introduction - Question 1
let nameInput = readline.question("Enter your name: ");
console.log(`Good morning ${nameInput}!`);
console.log("You wake up after a good nights rest and walk to the bathroom.");

// Bathroom attack
console.log("Oh no! Bad breath attacks!");
let health = 100;
let breathDamage = Math.floor(Math.random() * 15) + 1;
health -= breathDamage;
console.log(`You take ${breathDamage} points of damage!`);