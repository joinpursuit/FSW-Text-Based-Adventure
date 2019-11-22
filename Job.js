const Helper = require("./Helper.js");
const Nightmare = require("./Nightmare.js");

class Job extends Helper { 
    constructor(player, transportChoice) {
        super();
        this.player = player;
        this.transportChoice = transportChoice;
        this.bossChoice;
    }

    job() {
        this.newLine();
        console.log("After what seems like forever you finally arrive outside of your office building");
        console.log("You step inside the building.");
        console.log("The security guard makes eye contact with you and you smile back.");
        console.log("She says your boss had been trying to get into contact with you.");
        console.log("You became worried as to what it was about.");
        console.log("When you enter the your space in the office you see it had been mostly emptied.");
        console.log("You feel a presence behind you and turn around.");
        console.log("Your boss was standing there, looking very intimadting.");
        console.log("'YOU'RE FIRED' she screams to you.");

        //Health && Check
        let youreFired = this.randomInt(30, 1);
        this.player.isDead(youreFired);

        let bossResponse = ["'No u.'", "Ask why.", "Accept your fate."];
        let index = this.choiceSelection(bossResponse, "Which action do you take?");

        //Array
        this.questionsPush(this.player, "Which action do you take against your intimidating boss?");

        //Checking for valid user inputs, loops until the input is valid
        while(!bossResponse[index]) {
            console.clear();
            console.log("I do not understand.");
            index = this.choiceSelection(bossResponse, "Which action do you take?");
        }

        switch(index) {
            case 0:
                this.noU();
                break;

            case 1:
                this.askWhy();
                break;

            case 2:
                this.acceptFate();
                break;

            }// End of responseToBoss switch
    }// End of job() function


    noU() {
        console.clear();
        console.log("Your boss is shocked.");
        console.log("Never did she expect such a reversal!");
        console.log("She apologizes, turns around to her office and begins packing her bags.");
        console.log("Surprised that it works you take it upon yourself to be the new boss of the office!");

        //Health && Check
        let noUHeal = this.randomInt(10, 5);
        this.player.health += noUHeal;
        if(this.player.health > 100) {
            this.player.health = 100;
        }
        console.log(`You heal ${noUHeal} health! You have ${this.player.health}HP.`)

        //Array
        this.answersPush(this.player, "'No u'");

        //End loop
        this.bossChoice = 1;
        this.returnHome();

    }// End of noU() function


    askWhy() {
        console.clear();
        console.log("Your boss is astonished that you would ask such a question.");
        console.log("'Because I am all powerful!' she answers as her eyes roll into the back of her head and she levitates.");
        console.log("The last thing you see is a flash of light.");
        console.log("You are unable to comprehend what had just happened.");

        //Health && Check
        this.player.isDead(this.player.health);

        //Array
        this.answersPush(this.player, "Ask why.");

        //End loop & Program            
        this.endGame(this.player);

    }// End of askWhy() function


    acceptFate() {
        console.clear();
        console.log("Impressed by your acceptance your boss decides to let you go freely.");
        console.log("You pack the rest of your bags and leave the office.")

        //Array
        this.answersPush(this.player, "Accept your fate.");

        //End loop
        this.bossChoice = 3;
        this.returnHome();

    }// End of acceptFate() function

    returnHome() {
        new Nightmare(this.player, this.transportChoice, this.bossChoice).returnHome();
    }
}

module.exports = Job;
