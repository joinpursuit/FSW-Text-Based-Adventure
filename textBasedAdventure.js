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

// Bathroom Routine - Question 2
let firstStep = readline.question("What's the first step of your bathroom routine? ");
console.log(`${firstStep} heals you.`);

// Bathroom Routine - Question 3 (Number input)
let bathroomHeal = readline.question("How many health points do you recover? ");

// Bathroom Routine - While and if
let healComplete = false;
while(healComplete === false) {
    if(Number(bathroomHeal) > breathDamage) {
        //If the heal is greater than the damage taken requires a redo of the heal input
        console.log("So you're trying to cheat? I've caught you.")
        bathroomHeal = readline.question("How many health points do you recover? ");
    } else if(Number(bathroomHeal) === breathDamage) {
        //If the heal is equal to the damage taken then user is fully healed
        health += Number(bathroomHeal);
        console.log("Fully healed!");
        healComplete = true;
        break;
    } else if(Number(bathroomHeal) === 0) {
        //If the heal is equal to 0 the user heals nothing
        console.log("You heal nothing!");
        healComplete = true;
        break;
    } else if(Number(bathroomHeal) < 0) {
        //If the user enters a negative number requires a redo of the heal input
        console.log(`You can't heal ${bathroomHeal} points!`);
        bathroomHeal = readline.question("How many health points do you recover? ");
    } else {
        //If none of the above are true it heals the inputted amount
        health += Number(bathroomHeal);
        console.log("Ah, refreshing.");
        healComplete = true;
        break;
    }
}