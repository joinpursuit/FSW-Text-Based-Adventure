function travel() {
    newLine();
    console.log("Finally your morning routine is complete.");
    console.log("You leave your house.");

    newLine();
    console.log("Traffic looks crazy today. And your train is also having delays. Do you: ");
    console.log("1. Still decide to drive.");
    console.log("2. Still take the train.");
    let transportation = userInput("(Input either 1 or 2) ");

    //Array
    questionsPush("Do you drive or take the train?");

    //Checking for valid user inputs, loops until the input is valid
    let transportationComplete = false;
    let transportChoice = 0;

    transportationComplete: 
    while (transportationComplete === false) {
        switch (transportation) {
            case "1":
                drive();

            case "2":
                train();

            default:
                console.log("I do not understand.");
                console.log("Traffic looks crazy today. And your train is also having delays. Do you: ");
                console.log("1. Still decide to drive.");
                console.log("2. Still take the train.");
                transportation = userInput("(Input either 1 or 2) ");

        }// End of transportation switch
    }// End of transportation Validity check
}// End of travel() function


function drive() {
    //Battle with a road rager
            
    //Array
    answersPush("Take your car.");
    let transportChoice = 1;

    console.clear();
    console.log("You decide to drive.");
    console.log("On your drive you get cut off by a reckless driver.");
    console.log("In response you honk your horn.");
    console.log("The reckless driver didn't like this, and when a red light was reached he exited his car.");
    console.log("The road rager attacks.");
    console.log("The road rager uses 'insult'.");

    //Health && Check
    let roadRageInsultDamage = randomInt(25, 1);
    healthCheck(roadRageInsultDamage);
            
    newLine();
    console.log("Which action do you take?");
    console.log("1. Insult back");
    console.log("2. Honk your horn");
    console.log("3. Ignore the road rager");
    let roadRageCounter = userInput("(Input a number between 1 and 3) ");

    //Array
    questionsPush("Which action do you take against the Road Rager?");

    //Checking for valid user inputs, loops until the input is valid
    let roadRageComplete = false;
    roadRageComplete: 
    while (roadRageComplete === false) {
        switch (roadRageCounter) {
            case "1":
                insult();

            case "2":
                honkHorn(transportChoice);

            case "3":
                ignore(transportChoice);

            default:
                console.clear();
                console.log("Which action do you take?");
                console.log("1. Insult back");
                console.log("2. Honk your horn");
                console.log("3. Ignore the road rager");
                roadRageCounter = userInput("(Input a number between 1 and 3) ");

        }// End of roadRage switch
    }// End of roadRage Validity check
}// End of drive() function


function insult() {
    console.clear();
    console.log("Your insult does nothing!");
    console.log("Road Rager uses 'Mom insult'");
    console.log(`You take ${health} points of damage!`);

    //Array
    answersPush("Insult back");

    //End loop & program
    roadRageComplete = true;
    healthCheck(health);

}// End of insult() function


function honkHorn(transportChoice) {
    console.clear();
    console.log("You slam your hand on your steering wheel.");
    console.log("Your horn shocks the road rager.");
    console.log("He picks up a rock and throws it at your car.");
    console.log("The rock misses your car completely.");
    console.log("The road rager returns to his car in shame.");
    console.log("You continue driving to your job.");

    //Array
    answersPush("Honk your horn");

    //End loop
    roadRageComplete = true;
    job(transportChoice);

}// End of honkHorn() function


function ignore(transportChoice) {
    console.clear();
    console.log("You pay no attention to the road rager.");
    console.log("The road rager uses 'Middle Finger'");
    console.log("It has no effect on you!");
    console.log("The road rager angrily returns to his car after no response.");
    console.log("You continue driving to your job.");

    //Array
    answersPush("Ignore the road rager");

    //End loop
    roadRageComplete = true;
    job(transportChoice);

}//End of ignore() function


function train() {
    //Battle with a subway rat

    //Array
    answersPush("Take the train");
    let transportChoice = 2;

    console.clear();
    console.log("You decide to take the train.");
    console.log("You arrive at the station.");
    console.log("You notice an entirely empty bench, except for a lone slice of pizza, and take a seat.");
    console.log("After a few minutes of sitting you feel a brush against your leg.");
    console.log("Out of fear you jump up and catch the attention of a subway rat!");
    console.log("The rat leaps at you and uses 'Bite'");

    //Health && Check
    let ratAttack = randomInt(10, 1);
    healthCheck(ratAttack);

    newLine();
    console.log("Which action do you take?");
    console.log("1. Kick the rat.");
    console.log("2. Pick the rat up and throw it at the train.");
    console.log("3. Walk to the other side of the platform.");
    console.log("4. Give the rat the pizza left on the bench.");
    let ratCounter = userInput("(Input a number between 1 and 4) ");

    //Array
    questionsPush("Which action do you take against the rat?");

    //Checking for valid user inputs, loops until the input is valid
    let ratComplete = false;
    ratComplete: 
    while (ratComplete === false) {
        switch (ratCounter) {
            case "1":
                kickRat();

            case "2":
                pickUpRat(transportChoice);

            case "3":
                walkAwayFromRat(transportChoice);

            case "4":
                giveRatPizza(transportChoice);

            default:
                console.clear();
                console.log("I do not understand.");
                console.log("Which action do you take?");
                console.log("1. Kick the rat.");
                console.log("2. Pick the rat up and throw it at the train.");
                console.log("3. Walk to the other side of the platform.");
                console.log("4. Give the rat the pizza left on the bench.");
                ratCounter = userInput("(Input a number between 1 and 4) ");


        }// End of ratCounter switch
    }// End of ratCounter Validity check
}// End of train() function


function kickRat() {
    console.clear();
    console.log("You lift your leg to kick the rat.");
    console.log("Mid swing the rat jumps and latches onto your leg with it's claws.");
    console.log("While attempting to get the rat off you stumble and hit your head on the bench.");

    //Array
    answersPush("Kick the rat.");

    //Health && Check
    healthCheck(health);

}// End of kickRat() function


function pickUpRat(transportChoice) {
    console.clear();
    console.log("Your inner neanderthal shows itself.");
    console.log("You grab the rat by it's tail and throw it at the incoming train.");
    console.log("The rat explodes on impact and it's remains splatter you.");

    //Health && Check
    healthCheck(5);

    console.log("Your train arrives and you continue on your adventure to work.");

    //Array
    answersPush("Pick the rat up and throw it at the train.");

    //End loop
    ratComplete = true;
    job(transportChoice);

}// End of pickUpRat() function


function walkAwayFromRat(transportChoice) {
    console.clear();
    console.log("After the rat lands you immediately sprint to the other side of the platform.");
    console.log("Upon reaching it you turn to see the rat is nowhere to be found.");
    console.log("You are safe for the time being.");
    console.log("Your train arrives and you continue on your adventure to work.");

    //Array
    answersPush("Walk to the other side of the platform.");

    //End loop
    ratComplete = true;
    job(transportChoice);

}// End of walkAwayFromRat() function


function giveRatPizza(transportChoice) {
    console.clear();
    console.log("You grab the slice of pizza and throw it next to the rat.");
    console.log("The rat looks at you, then the pizza, then back at you.");
    console.log("It stands on it's hind legs, and bows.");
    console.log("Four turtles emerge from under the bench and help the rat carry the slice away.");
    console.log("You can't help but feel like you've made new friends.");
    console.log("Your train arrives and you continue on your adventure to work.");

    //Array
    answersPush("Give the rat the pizza left on the bench.");

    //End loop
    ratComplete = true;
    job(transportChoice);

}// End of giveRatPizza() function