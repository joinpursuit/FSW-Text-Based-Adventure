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
        let breakfastInput = userInput("Do you eat breakfast?(Y/N) ");
    
        //Array
        questionsPush("Do you eat breakfast?(Y/N) ");
    
        //Checking for valid user inputs, loops until the input is valid
        breakfastInput = breakfastInput.toUpperCase();
        let breakfastComplete = false;
        while (breakfastComplete === false) {
            switch (breakfastInput) {
                case "Y":
                    eatBreakfast();
    
                    //Array
                    answersPush(breakfastInput);
    
                    break;
    
                case "N":
                    dontEatBreakfast();
    
                    //Array
                    answersPush(breakfast);
    
                    break;
    
                default:
                    //If any of the above are not true then a redo is required
                    console.clear();
                    console.log("I do not understand.");
                    breakfastInput = userInput("Do you eat breakfast?(Y/N) ");
                    breakfastInput = breakfast.toUpperCase();
    
            }// End of breakfast switch
        }// End of breakfastComplete Validity Loop
    }// End of breakfast() function
    
    
    eatBreakfast() {
        // If the user eats breakfast then this branch is followed
    
        console.clear();
        console.log(`The most important meal of the day! Serving it up ${nameInput}'s way!`);
    
        newLine();
        console.log("While walking into the kitchen you feel a movement.");
        console.log("A loud growl is felt deep within your stomach!");
    
        // Health && Check
        let stomachGrowl = randomInt(10, 1);
        healthCheck(stomachGrowl);
    
        console.log("Which action do you take?");
        choiceCreation("Eat a bowl of cereal", "Make pancakes", "Have a coffee");
        let stomachCounter = userInput("(Input a number between 1 and 3) ");
    
        //Array
        questionsPush("Which action do you take against the hungry stomach?");
    
    
        //Checking for valid user inputs, loops until the input is valid
        let hungryStomachComplete = false;
        hungryStomach:
            while(hungryStomachComplete === false) {
                switch(stomachCounter) {
                    case "1":
                        eatCereal();
                        break;
    
                    case "2":
                        makePancakes(stomachGrowl);
                        break;
    
                    case "3":
                        haveCoffee(stomachGrowl);
                        break;
    
                    default:
                        console.clear();
                        console.log("I do not understand.");
                        console.log("Which action do you take?");
                        choiceCreation("Eat a bowl of cereal", "Make pancakes", "Have a coffee");
                        stomachCounter = userInput("(Input a number between 1 and 3) ");
    
                }// End of stomachCounter switch
            }// End of hungryStomach Validity check
    }// End of eatBreakfast() function
    
    
    eatCereal() {
        console.clear();
        console.log("You prepare a bowl of cereal.");
        console.log("As you're eating you remember that you're lactose intolerant!");
        console.log("The milk hurts your stomach but you sate your appetite.");
    
        //Health && Check
        healthCheck(5);
    
        //Array
        answersPush("Eat a bowl of cereal.");
    
        //End loop
        hungryStomachComplete = true;
        travel();
    
    }// End of eatCereal() function
    
    
    makePancakes(stomachGrowl) {
        console.clear();
        console.log("The waft of the pancakes as they cook on the pan alert your stomach.");
        console.log("Out of impatience your stomach growls again, hurting you.");
    
        //Health && Check
        healthCheck(stomachGrowl);
    
        console.log("The pancakes fill your stomach, and make you feel refreshed.");
        health += 10;
        if(health > 100) {
            health = 100;
        }
        console.log(`You heal 10 health! You have ${health}HP.`)
    
        //Array
        answersPush("Make pancakes.");
    
        //End loop
        hungryStomachComplete = true;
        travel();
    
    }// End of makePancakes() function
    
    
    haveCoffee(stomachGrowl) {
        console.clear();
        console.log("The coffee energizes you.");
        console.log("However your hunger isn't sated. Your stomach is upset.");
    
        //Health && Check
        healthCheck(stomachGrowl * 2);
    
        //Array
        answersPush("Have a coffee");
    
        //End loop
        hungryStomachComplete = true;
        travel();
    
    }// End of haveCoffee() function
    
    
    dontEatBreakfast() {
        console.clear();
        console.log("Angry that you never use it, your Waffle Iron attacks!");
        console.log("The waffle iron uses 'face press'!");
    
        //Health && check
        let waffleAttack = randomInt(25, 1); // Random Integer between 1 and 25
        healthCheck(waffleAttack)
    
        //User attack choice
        newLine();
        console.log("Which action do you take?");
        // console.log("1. Unplug the waffle iron.");
        // console.log("2. Splash water.");
        // console.log("3. Jump on it.");
        // console.log("4. Just walk away.");
        choiceCreation("Unplug the waffle iron", "Splash water", "Jump on it", "Just walk away");
        let waffleCounter = userInput("(Input a number between 1 and 4) ");
    
        //Array
        questionsPush("Which action do you take against the waffle iron?");
    
        //Checking for valid user inputs, loops until the input is valid
        let waffleBattleComplete = false;
    
        waffleBattle: 
        while (waffleBattleComplete === false) {
            switch(waffleCounter) {
                case "1":
                    unplugWaffleIron();
                    break;
    
                case "2":
                    splashWater();
                    break;
    
                case "3":
                    jumpOnIt();
                    break;
    
                case "4":
                    walkAway();
                    break;
    
                default:
                    //If the user doesn't do a correct input then it asks for a repeat
                    console.clear();
                    console.log("I do not understand");
                    console.log("Which action do you take?");
                    console.log("1. Unplug the waffle iron.");
                    console.log("2. Splash water.");
                    console.log("3. Jump on it.");
                    console.log("4. Just walk away.");
                    waffleCounter = userInput("(Input a number between 1 and 4) ");
    
            }// End of waffleCounter switch
        }// End of waffleBattle Validity check
        travel();
    }// End of dontEatBreakfast() function
    
    
    unplugWaffleIron() {
        //If the user chooses choice 1 the move is super effective and defeats the waffle iron
        console.clear();
        console.log("You reach for the plug and yank it out of the socket!");
        console.log("The waffle iron is defeated.");
    
        //Array
        answersPush("Unplug the waffle iron");
    
        //End loop
        waffleBattleComplete = true;
        travel();
    
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
    
}

module.exports = Breakfast;