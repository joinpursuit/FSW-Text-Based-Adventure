const Helper = require("./Helper.js");
const Travel = require("./Travel.js");

class Breakfast extends Helper{
    constructor(player) {
        super()
        this.player = player;
    }

    breakfast() {
        console.clear();
        console.log("You finish your bathroom routine and continue about your day.");
        if(this.YN("Do you eat breakfast?")) {
            this.eatBreakfast();

            this.answersPush(this.player, "Yes");
        } else {
            this.dontEatBreakfast();

            this.answersPush(this.player, "No");
        }
    
        //Array
        this.questionsPush(this.player, "Do you eat breakfast?");

    }// End of breakfast() function
    
    eatBreakfast() {
        console.clear();
        console.log(`The most important meal of the day! Serving it up ${this.player.name}'s way!`);
    
        this.newLine();
        console.log("While walking into the kitchen you feel a movement.");
        console.log("A loud growl is felt deep within your stomach!");
    
        // Health && Check
        let stomachGrowl = this.randomInt(10, 1);
        this.player.isDead(stomachGrowl);
    
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
    
        }// End of stomachCounter switch
    }// End of eatBreakfast() function
    
    
    eatCereal() {
        console.clear();
        console.log("You prepare a bowl of cereal.");
        console.log("As you're eating you remember that you're lactose intolerant!");
        console.log("The milk hurts your stomach but you sate your appetite.");
    
        //Health && Check
        this.player.isDead(5);
    
        //Array
        this.answersPush(this.player, "Eat a bowl of cereal.");
    
        //End loop
        this.travel();
    
    }// End of eatCereal() function
    
    
    makePancakes(stomachGrowl) {
        console.clear();
        console.log("The waft of the pancakes as they cook on the pan alert your stomach.");
        console.log("Out of impatience your stomach growls again, hurting you.");
    
        //Health && Check
        this.player.isDead(stomachGrowl);
    
        console.log("The pancakes fill your stomach, and make you feel refreshed.");
        this.player.health += 10;
        if(this.player.health > 100) {
            this.player.health = 100;
        }
        console.log(`You heal 10 health! You have ${this.player.health}HP.`)
    
        //Array
        this.answersPush(this.player, "Make pancakes.");
    
        //End loop
        this.travel();
    
    }// End of makePancakes() function
    
    
    haveCoffee(stomachGrowl) {
        console.clear();
        console.log("The coffee energizes you.");
        console.log("However your hunger isn't sated. Your stomach is upset.");
    
        //Health && Check
        this.player.isDead(stomachGrowl * 2);
    
        //Array
        this.answersPush("Have a coffee");
    
        //End loop
        this.travel();
    
    }// End of haveCoffee() function
    
    
    dontEatBreakfast() {
        console.clear();
        console.log("Angry that you never use it, your Waffle Iron attacks!");
        console.log("The waffle iron uses 'face press'!");
    
        //Health && check
        let waffleAttack = this.randomInt(25, 1); // Random Integer between 1 and 25
        this.player.isDead(waffleAttack)
    
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
    }// End of dontEatBreakfast() function
    
    
    unplugWaffleIron() {
        console.clear();
        console.log("You reach for the plug and yank it out of the socket!");
        console.log("The waffle iron is defeated.");
    
        //Array
        this.answersPush("Unplug the waffle iron");
    }// End of unplugWaffleIron() function

    splashWater() {
        //If the user chooses choice 2 the move kills both the player and the waffle iron creating a game over
        newLine();
        console.log("You turn on the sink and throw a load of water at the Waffle Iron.");
        console.log("The water creates a fire and explodes.");
        console.log("The explosion reaches to you and defeats you.");
    
        //Kills the user
        healthCheck(health);
    
        //Array
        answersPush("Splash water");
    
        //End loop
        waffleBattleComplete = true;
        endGame();
    
    }// End of splashWater() function
    
    
    jumpOnIt() {
        //If the user chooses choice 3 the move kills the waffle iron and hurts the user
        console.clear()
        console.log("You leap into the air and land on the waffle iron. The move is super effective!");
        console.log("The heat from the waffle iron burns your legs.");
        
        //Health && Check
        healthCheck(15);
    
        //Array
        answersPush("Jump on it");
    
        //End Loop
        waffleBattleComplete = true;
        travel();
    
    }// End of jumpOnIt() function
    
    
    walkAway() {
        //If the user chooses choice 4 the waffle iron lives, but kills the player and creates a game over
        console.clear();
        console.log("You turn your back to the waffle iron to escape.");
        console.log("The waffle iron's anger grows.");
        console.log("The waffle iron uses 'waffle throw!'");
    
        //Health && Check
        healthCheck(health);
    
        //Array
        answersPush("Just walk away.");
    
        //End loop
        endGame();
    
    }// End of walkAway() function

    travel() {
        console.log("hi");
    }
    
}

module.exports = Breakfast;