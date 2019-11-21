function job(transportChoice) {
    newLine();
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
    youreFired = randomInt(30, 1);
    healthCheck(youreFired);

    console.log("Which action do you take?");
    console.log("1. 'No u'");
    console.log("2. Ask why.");
    console.log("3. Accept your fate");
    let responseToBoss = userInput("(Input a number between 1 and 3) ");

    //Array
    questionsPush("Which action do you take against your intimidating boss?");

    //Checking for valid user inputs, loops until the input is valid
    let intimadtingBossComplete = false;
    let bossChoice = 0;
    intimadtingBossComplete:
    while(intimadtingBossComplete === false) {
        switch(responseToBoss) {
            case "1":
                noU(transportChoice, bossChoice);

            case "2":
                askWhy();

            case "3":
                acceptFate(transportChoice, bossChoice);

            default:
                newLine();
                console.log("I do not understand.");
                console.log("Which action do you take?");
                console.log("1. 'No u'");
                console.log("2. Ask why.");
                console.log("3. Accept your fate");
                responseToBoss = userInput("(Input a number between 1 and 3) ");

        }// End of responseToBoss switch
    }// End of intimidatingBoss Validity check
}// End of job() function


function noU(transportChoice, bossChoice) {
    console.clear();
    console.log("Your boss is shocked.");
    console.log("Never did she expect such a reversal!");
    console.log("She apologizes, turns around to her office and begins packing her bags.");
    console.log("Surprised that it works you take it upon yourself to be the new boss of the office!");

    //Health && Check
    noUHeal = randomInt(10, 5);
    health += noUHeal;
    if(health > 100) {
        health = 100;
    }
    console.log(`You heal ${noUHeal} health! You have ${health}HP.`)

    //Array
    answersPush("'No u'");

    //End loop
    bossChoice = 1;
    intimadtingBossComplete = true;
    returnHome(bossChoice, transportChoice);

}// End of noU() function


function askWhy() {
    console.clear();
    console.log("Your boss is astonished that you would ask such a question.");
    console.log("'Because I am all powerful!' she answers as her eyes roll into the back of her head and she levitates.");
    console.log("The last thing you see is a flash of light.");
    console.log("You are unable to comprehend what had just happened.");

    //Health && Check
    healthCheck(health);

    //Array
    answersPush("Ask why.");

    //End loop & Program            
    intimadtingBossComplete = true;

}// End of askWhy() function


function acceptFate(transportChoice, bossChoice) {
    console.clear();
    console.log("Impressed by your acceptance your boss decides to let you go freely.");
    console.log("You pack the rest of your bags and leave the office.")

    //Array
    answersPush("Accept your fate.");

    //End loop
    bossChoice = 3;
    intimadtingBossComplete = true;
    returnHome(bossChoice, transportChoice);

}// End of acceptFate() function
