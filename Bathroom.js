class Bathroom {
    constructor() {

    }

    bathroom() {
        newLine();
        console.log("You wake up after a good nights rest and walk to the bathroom.");
        console.log("Oh no! Bad breath attacks!");
    
        //Health && Check
        let breathDamage = randomInt(15, 1); // Takes a random integer for damage
        healthCheck(breathDamage);
    
        let firstStep = userInput("What's the first step of your bathroom routine? ");
    
        //Arrays
        questionsPush("What's the first step of your bathroom routine? ");
        answersPush(firstStep);
    
        newLine();
        console.log(`${firstStep} heals you.`);
    
        //Array
        questionsPush("How many health points do you recover? ");
    
        //Checking for valid user inputs, loops until the input is valid
        let bathroomHeal = userInput("How many health points do you recover? ");
        let healComplete = false;
        while (healComplete === false) {
            if (Number(bathroomHeal) > breathDamage) {
                //If the heal is greater than the damage taken requires a redo of the heal input
    
                newLine();
                console.log("So you're trying to cheat? I've caught you.");
                bathroomHeal = userInput("How many health points do you recover? ");
    
            } else if (Number(bathroomHeal) === breathDamage) {
                //If the heal is equal to the damage taken then user is fully healed
    
                health += Number(bathroomHeal);
                newLine();
                console.log("Fully healed!");
    
                //Array
                answersPush(bathroomHeal);
    
                //End loop
                healComplete = true;
                breakfast();
    
            } else if (Number(bathroomHeal) === 0) {
                //If the heal is equal to 0 the user heals nothing
    
                newLine();
                console.log("You heal nothing!");
    
                //Array
                answersPush(bathroomHeal);
    
                //End loop
                healComplete = true;
                breakfast();
    
            } else if (Number(bathroomHeal) < 0) {
                //If the user enters a negative number requires a redo of the heal input
                
                newLine();
                console.log(`You can't heal ${bathroomHeal} points!`);
                bathroomHeal = userInput("How many health points do you recover? ");
    
            } else if (Number(bathroomHeal) > 0 && Number(bathroomHeal) < breathDamage) {
                //If the number is between 0 and the damage the user is healed
    
                newLine();
                health += Number(bathroomHeal);
                console.log("Ah, refreshing.");
    
                //Array
                answersPush(bathroomHeal);
    
                //End loop
                healComplete = true;
                breakfast();
    
            } else {
                //If any of the above are not true then a redo is required
    
                console.clear();
                console.log("I do not understand.");
                bathroomHeal = userInput("How many health points do you recover? ");
    
            } // End of bathroomHeal validity check
        }// End of bathroomHeal loop
    }// End of bathroom() function
}