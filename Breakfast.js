const Helper = require("./Helper.js");
const Travel = require("./Travel.js");

class Breakfast extends Helper{
    constructor(player) {
        super()
        this.player = player;
    } // End of constructor()

    breakfast() {
        console.clear();
        console.log("You finish your bathroom routine and continue about your day.");

        this.questionsPush(this.player, "Do you eat breakfast?");
        if(this.YN("Do you eat breakfast?")) {
            this.answersPush(this.player, "Yes");
            this.eatBreakfast();

        } else {
            this.answersPush(this.player, "No");
            this.dontEatBreakfast();

        }

    } // End of breakfast() function
    
    eatBreakfast() {
        console.clear();
        console.log(`The most important meal of the day! Serving it up ${this.player.name}'s way!`);
    
        this.newLine();
        console.log("While walking into the kitchen you feel a movement.");
        console.log("A loud growl is felt deep within your stomach!");
    
        // Health && Check
        let stomachGrowl = this.randomInt(10, 1);
        if(this.player.isDead(stomachGrowl)) {
            this.endGame(this.player);
        }
    
        let stomachChoices = ["Eat a bowl of cereal", "Make pancakes", "Have a coffee"];
        let index = this.choiceSelection(stomachChoices, "Which action do you take? ");
    
        //Array
        this.questionsPush(this.player, "Which action do you take against the hungry stomach?");
    
        while(!stomachChoices[index]) {
            console.clear();
            console.log("I do not understand.");
            index = this.choiceSelection(stomachChoices, "Which action do you take? ");
        }

        switch(index) {
            case 0:
                this.eatCereal();
                break;
    
            case 1:
                this.makePancakes(stomachGrowl);
                break;
    
            case 2:
                this.haveCoffee(stomachGrowl);
                break;
    
        } // End of stomachCounter switch
    } // End of eatBreakfast() function
    
    
    eatCereal() {
        console.clear();
        console.log("You prepare a bowl of cereal.");
        console.log("As you're eating you remember that you're lactose intolerant!");
        console.log("The milk hurts your stomach but you sate your appetite.");
    
        this.answersPush(this.player, "Eat a bowl of cereal.");

        //Health && Check
        if(this.player.isDead(5)) {
            this.endGame(this.player);
        }        
    
        //End loop
        this.travel();
    
    } // End of eatCereal() function
    
    
    makePancakes(stomachGrowl) {
        console.clear();
        console.log("The waft of the pancakes as they cook on the pan alert your stomach.");
        console.log("Out of impatience your stomach growls again, hurting you.");
    
        this.answersPush(this.player, "Make pancakes.");

        //Health && Check
        if(this.player.isDead(stomachGrowl)) {
            this.endGame(this.player);
        }
    
        console.log("The pancakes fill your stomach, and make you feel refreshed.");
        this.player.health += 10;
        if(this.player.health > 100) {
            this.player.health = 100;
        }
        console.log(`You heal 10 health! You have ${this.player.health}HP.`)
    
        //End loop
        this.travel();
    
    } // End of makePancakes() function
    
    
    haveCoffee(stomachGrowl) {
        console.clear();
        console.log("The coffee energizes you.");
        console.log("However your hunger isn't sated. Your stomach is upset.");

        this.answersPush(this.player, "Have a coffee");
    
        //Health && Check
        if(this.player.isDead(stomachGrowl * 2)) {
            this.endGame(this.player);
        }
    
        //End loop
        this.travel();
    
    } // End of haveCoffee() function
    
    
    dontEatBreakfast() {
        console.clear();
        console.log("Angry that you never use it, your Waffle Iron attacks!");
        console.log("The waffle iron uses 'face press'!");
    
        //Health && check
        let waffleAttack = this.randomInt(25, 1); // Random Integer between 1 and 25
        if(this.player.isDead(waffleAttack)) {
            this.endGame(this.player);
        }
    
        //User attack choice
        this.newLine();
        let waffleChoices = ["Unplug the waffle iron", "Splash water", "Jump on it", "Just walk away"];
        let index = this.choiceSelection(waffleChoices, "Which action do you take? ");
    
        //Array
        this.questionsPush(this.player, "Which action do you take against the waffle iron?");
    
        while (!waffleChoices[index]) {
            console.clear();
            console.log("I do not understand");
            index = this.choiceSelection(waffleChoices, "Which action do you take? ");
        }

        switch(index) {
            case 0:
                this.unplugWaffleIron();
                break;
    
            case 1:
                this.splashWater();
                break;

            case 2:
                this.jumpOnIt();
                break;
    
            case 3:
                this.walkAway();
                break;
        }// End of waffleBattle Validity check

        this.travel();
    } // End of dontEatBreakfast() function
    
    
    unplugWaffleIron() {
        console.clear();
        console.log("You reach for the plug and yank it out of the socket!");
        console.log("The waffle iron is defeated.");
    
        //Array
        this.answersPush(this.player, "Unplug the waffle iron");
    } // End of unplugWaffleIron() function

    splashWater() {
        this.newLine();
        console.log("You turn on the sink and throw a load of water at the Waffle Iron.");
        console.log("The water creates a fire and explodes.");
        console.log("The explosion reaches to you and defeats you.");
        this.answersPush(this.player, "Splash water");
    
        //Kills the user
        if(this.player.isDead(this.player.health)) {
            this.endGame(this.player);
        }
    
    } // End of splashWater() function
    
    
    jumpOnIt() {
        console.clear()
        console.log("You leap into the air and land on the waffle iron. The move is super effective!");
        console.log("The heat from the waffle iron burns your legs.");
        
        this.answersPush(this.player, "Jump on it");

        //Health && Check
        if(this.player.isDead(15)) {
            this.endGame(this.player);
        }        
    
    } // End of jumpOnIt() function
    
    
    walkAway() {
        console.clear();
        console.log("You turn your back to the waffle iron to escape.");
        console.log("The waffle iron's anger grows.");
        console.log("The waffle iron uses 'waffle throw!'");

        this.answersPush(this.player, "Just walk away.");
    
        //Health && Check
        if(this.player.isDead(this.player.health)) {
            this.endGame(this.player);
        }
    
    } // End of walkAway() function

    travel() {
        new Travel(this.player).travel();
    } // End of travel() function
    
}

module.exports = Breakfast;