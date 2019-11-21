const Helper = require("./Helper.js");
const Breakfast = require("./Breakfast.js");

class Bathroom extends Helper {
    constructor(player) {
        super();
        this.player = player;
    } // End of constructor()

    bathroom() {
        this.newLine();
        console.log("You wake up after a good nights rest and walk to the bathroom.");
        console.log("Oh no! Bad breath attacks!");
    
        //Health && Check
        let breathDamage = this.randomInt(15, 1); // Takes a random integer for damage
        this.player.isDead(breathDamage);

        this.firstStep();
        this.bathroomHeal(breathDamage);
    } // End of bathroom() function

    firstStep() {
        let firstStep = this.userInput("What's the first step of your bathroom routine? ");
    
        //Arrays
        this.questionsPush(this.player, "What's the first step of your bathroom routine? ");
        this.answersPush(this.player, firstStep);
    
        this.newLine();
        console.log(`${firstStep} heals you.`);
    } // End of firstStep() function

    bathroomHeal(damage) {
        //Array
        this.questionsPush(this.player, "How many health points do you recover? ");

        //Checking for valid user inputs, loops until the input is valid
        let bathroomHeal = this.userInput("How many health points do you recover? ");

        let notANum = isNaN(bathroomHeal);
        let cheaterInput = Number(bathroomHeal) > damage;
        let negativeInput = Number(bathroomHeal) < 0;

        while (notANum || cheaterInput || negativeInput) {
            if(notANum) {
                this.newLine();
                console.log("I do not understand.");

            } else if(cheaterInput) {
                this.newLine();
                console.log("So you're trying to cheat? I've caught you.");

            } else if(negativeInput) {
                this.newLine();
                console.log(`You can't heal ${bathroomHeal} points!`);
                
            }

            bathroomHeal = this.userInput("How many health points do you recover? ");
            notANum = isNaN(bathroomHeal);
            cheaterInput = Number(bathroomHeal) > damage;
            negativeInput = Number(bathroomHeal) < 0;
            
        }
        
        if (Number(bathroomHeal) === damage) {
            this.fullyHealed(bathroomHeal);
            
        } else if (Number(bathroomHeal) === 0) {
            this.healNothing();
    
        } else if (Number(bathroomHeal) > 0 && Number(bathroomHeal) < damage) {
            this.refreshing(bathroomHeal);
        }
   
        //Array
        this.answersPush(this.player, bathroomHeal);

        this.breakfast();
    } // End of bathroomHeal() function

    fullyHealed(heal) {
        this.player.health += Number(heal);
        this.newLine();
        console.log("Fully healed!");
 
    } // End of fullyHealed() function

    healNothing() {
        this.newLine();
        console.log("You heal nothing!");
    } // End of healNothing() function

    refreshing(heal) {
        this.newLine();
        this.player.health += Number(heal);
        console.log("Ah, refreshing.");
    } // End of refreshing() function

    breakfast() {
        new Breakfast(this.player).breakfast();
    } // End of breakfast() function
}

module.exports = Bathroom;