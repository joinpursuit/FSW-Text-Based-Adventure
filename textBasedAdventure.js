const readline = require('readline-sync')

// Example
// let nameInput = readline.question("Enter your name: ")
// console.log(`Hello ${nameInput}!  Welcome to my game.`)

// Introduction - Question 1
let nameInput = readline.question("Enter your first name: ");
console.log(`Good morning ${nameInput}!`);
console.log("");
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
    } else if(Number(bathroomHeal) > 0 && Number(bathroomHeal) < breathDamage){
        //If the number is between 0 and the damage the user is healed
        health += Number(bathroomHeal);
        console.log("Ah, refreshing.");
        healComplete = true;
        break;
    } else {
        //If any of the above are not true then a redo is required
        console.log("I do not understand.");
        bathroomHeal = readline.question("How many health points do you recover? ");
    }
}

// Breakfast & Question 4
console.log("You finish your bathroom routine and continue about your day.");
let breakfast = readline.question("Do you eat breakfast?(Y/N) ");

// Branching switch for breakfast.
breakfast = breakfast.toUpperCase();
let breakfastComplete = false;
let favoriteBreakfast; // Initializing favoriteBreakfast so it can be called outside of the while loop if necessary
while (breakfastComplete === false) {
    switch(breakfast) {
        case "Y": 
            // If the user eats breakfast then this branch is followed
            console.log(`The most important meal of the day! Serving it up ${nameInput}'s way!`);
            favoriteBreakfast = readline.question("What's your favorite breakfast food? ");
            console.log(`No way! I love ${favoriteBreakfast}`);
            breakfastComplete = true;
            break;
        case "N":
            // If the user does not eat breakfast then this branch is followed
            // Add in a battle with a waffle iron because it hasn't been used in forever
            console.log("This angered your waffle iron. It attacks!");
            console.log("The waffle iron uses 'face press'!");
            let waffleAttack = Math.floor(Math.random() * 25) + 1);
            health -= waffleAttack;
            console.log(`You have ${health}HP`);
            console.log("Which action do you take?");
            console.log("1. Unplug the waffle iron.");
            console.log("2. Splash water.");
            console.log("3. Jump on it.");
            console.log("4. Just walk away.");
            let waffleCounter = readline.question("(Input a number between 1 and 4) ");
            let waffleBattleComplete = false;
            while (waffleBattleComplete === false) {
                    if(waffleCounter === "1") {
                        waffleBattleComplete = true;
                        break;
                    } else if(waffleCounter === "2") {
                        waffleBattleComplete = true;
                        break;
                    } else if (waffleCounter === "3") {
                        waffleBattleComplete = true;
                        break;
                    } else if (waffleCounter === "4") {
                        waffleBattleComplete = true;
                        break;
                    } else {
                        console.log("I do not understand");
                        waffleCounter = readline.question("(Input a number between 1 and 4) ");
                    }
            }
            breakfastComplete = true;
            break;
        default:
            //If any of the above are not true then a redo is required
            console.log("I do not understand.");
            breakfast = readline.question("Do you eat breakfast?(Y/N) ");
    }
}