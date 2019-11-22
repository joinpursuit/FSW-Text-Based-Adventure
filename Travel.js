const Helper = require("./Helper.js");
const Job = require("./Job.js");

class Travel extends Helper{    
    constructor(player) {
        super();
        this.player = player;
    }

    travel() {
        this.newLine();
        console.log("Finally your morning routine is complete.");
        console.log("You leave your house.");

        this.newLine();
        let travelChoices = ["Still decide to drive.", "Still take the train."];
        let index = this.choiceSelection(travelChoices, "Traffic looks crazy today. And your train is also having delays. Do you: ");

        //Array
        this.questionsPush(this.player, "Do you drive or take the train?");

        while (!travelChoices[index]) {
            console.log("I do not understand.");
            index = this.choiceSelection(travelChoices, "Traffic looks crazy today. And your train is also having delays. Do you: ");
        }
        
        switch (index) {
            case 0:
                this.drive();
                break;

            case 1:
                this.train();
                break;

        } // End of transportation switch
    } // End of travel() function


    drive() {                
        //Array
        this.answersPush(this.player, "Take your car.");
        let transportChoice = 1;

        console.clear();
        console.log("You decide to drive.");
        console.log("On your drive you get cut off by a reckless driver.");
        console.log("In response you honk your horn.");
        console.log("The reckless driver didn't like this, and when a red light was reached he exited his car.");
        console.log("The road rager attacks.");
        console.log("The road rager uses 'insult'.");

        //Health && Check
        let roadRageInsultDamage = this.randomInt(25, 1);
        this.player.isDead(roadRageInsultDamage);
                
        this.newLine();
        let roadRageChoices = ["Insult back", "Honk your horn", "Ignore the road rage"];
        let index = this.choiceSelection(roadRageChoices, "Which action do you take? ");

        //Array
        this.questionsPush(this.player, "Which action do you take against the Road Rager?");

        while (!roadRageChoices[index]) {
            console.clear();
            console.log("I do not understand.");
            index = this.choiceSelection(roadRageChoices, "Which action do you take? ");
        }

        switch (index) {
            case 0:
                this.insult();
                break;

            case 1:
                this.honkHorn(transportChoice);
                break;

            case 2:
                this.ignore(transportChoice);
                break;

        }// End of roadRage switch
    }// End of drive() function


    insult() {
        console.clear();
        console.log("Your insult does nothing!");
        console.log("Road Rager uses 'Mom insult'");
        console.log(`You take ${this.player.health} points of damage!`);

        //Array
        this.answersPush(this.player, "Insult back");

        this.endGame(this.player);

    }// End of insult() function


    honkHorn(transportChoice) {
        console.clear();
        console.log("You slam your hand on your steering wheel.");
        console.log("Your horn shocks the road rager.");
        console.log("He picks up a rock and throws it at your car.");
        console.log("The rock misses your car completely.");
        console.log("The road rager returns to his car in shame.");
        console.log("You continue driving to your job.");

        //Array
        this.answersPush(this.player, "Honk your horn");

        this.job(transportChoice);

    }// End of honkHorn() function


    ignore(transportChoice) {
        console.clear();
        console.log("You pay no attention to the road rager.");
        console.log("The road rager uses 'Middle Finger'");
        console.log("It has no effect on you!");
        console.log("The road rager angrily returns to his car after no response.");
        console.log("You continue driving to your job.");

        //Array
        this.answersPush(this.player, "Ignore the road rager");

        this.job(transportChoice);

    }//End of ignore() function

    train() {
        //Battle with a subway rat

        //Array
        this.answersPush(this.player, "Take the train");
        let transportChoice = 2;

        console.clear();
        console.log("You decide to take the train.");
        console.log("You arrive at the station.");
        console.log("You notice an entirely empty bench, except for a lone slice of pizza, and take a seat.");
        console.log("After a few minutes of sitting you feel a brush against your leg.");
        console.log("Out of fear you jump up and catch the attention of a subway rat!");
        console.log("The rat leaps at you and uses 'Bite'");

        //Health && Check
        let ratAttack = this.randomInt(10, 1);
        this.player.isDead(ratAttack);

        this.newLine();
        let ratChoices = ["Kick the rat", "Pick the rat up and throw it at the train.", 
                          "Walk to the other side of the platform.", "Give the rat the pizza left on the bench."];
        let index = this.choiceSelection(ratChoices, "Which action do you take?");

        //Array
        this.questionsPush(this.player, "Which action do you take against the rat?");

        //Checking for valid user inputs, loops until the input is valid
        while (!ratChoices[index]) {
            console.clear();
            console.log("I do not understand.");
            index = this.choiceSelection(ratChoices, "Which action do you take?");
        }

            switch (index) {
                case 0:
                    this.kickRat();
                    break;

                case 1:
                    this.pickUpRat(transportChoice);
                    break;

                case 2:
                    this.walkAwayFromRat(transportChoice);
                    break;

                case 3:
                    this.giveRatPizza(transportChoice);
                    break;
            }// End of ratCounter switch
    }// End of train() function


    kickRat() {
        console.clear();
        console.log("You lift your leg to kick the rat.");
        console.log("Mid swing the rat jumps and latches onto your leg with it's claws.");
        console.log("While attempting to get the rat off you stumble and hit your head on the bench.");

        //Array
        this.answersPush(this.player, "Kick the rat.");

        //Health && Check
        this.player.isDead(this.player.health);

    }// End of kickRat() function


    pickUpRat(transportChoice) {
        console.clear();
        console.log("Your inner neanderthal shows itself.");
        console.log("You grab the rat by it's tail and throw it at the incoming train.");
        console.log("The rat explodes on impact and it's remains splatter you.");

        //Health && Check
        this.player.isDead(5);

        console.log("Your train arrives and you continue on your adventure to work.");

        //Array
        this.answersPush(this.player, "Pick the rat up and throw it at the train.");

        //End loop
        this.job(transportChoice);

    }// End of pickUpRat() function


    walkAwayFromRat(transportChoice) {
        console.clear();
        console.log("After the rat lands you immediately sprint to the other side of the platform.");
        console.log("Upon reaching it you turn to see the rat is nowhere to be found.");
        console.log("You are safe for the time being.");
        console.log("Your train arrives and you continue on your adventure to work.");

        //Array
        this.answersPush(this.player, "Walk to the other side of the platform.");

        //End loop
        this.job(transportChoice);

    }// End of walkAwayFromRat() function


    giveRatPizza(transportChoice) {
        console.clear();
        console.log("You grab the slice of pizza and throw it next to the rat.");
        console.log("The rat looks at you, then the pizza, then back at you.");
        console.log("It stands on it's hind legs, and bows.");
        console.log("Four turtles emerge from under the bench and help the rat carry the slice away.");
        console.log("You can't help but feel like you've made new friends.");
        console.log("Your train arrives and you continue on your adventure to work.");

        //Array
        this.answersPush(this.player, "Give the rat the pizza left on the bench.");

        //End loop
        this.job(transportChoice);

    }// End of giveRatPizza() function

    job(transportChoice) {
        new Job(this.player, transportChoice).job();
    }
}

module.exports = Travel;