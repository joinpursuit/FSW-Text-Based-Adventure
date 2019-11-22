const Helper = require("./Helper.js");

class Nightmare extends Helper {
    constructor(player, transportChoice, bossChoice) {
        super();
        this.player = player;
        this.transportChoice = transportChoice;
        this.bossChoice = bossChoice;
    }

    returnHome() {
        this.newLine();

        this.travelHomeText();
    
        this.returnHomeText();
    
        //Health && Check
        let slamDamage = this.randomInt(25, 1);
        this.player.isDead(slamDamage);
    
        this.newLine();
        console.log("You slowly stand back on your feet.");
        let nightmareChoices = ["Sweep the leg.", "Go for it's eyes.", "Check your end table drawer.", "Open the window."];
        let index = this.choiceSelection(nightmareChoices, "Which action do you take?");
    
        //Array
        this.questionsPush(this.player, "Which action do you take against the nightmare (1)");
    
        //Checking for valid user inputs, loops until the input is valid
        while(!nightmareChoices[index]) {
            console.clear();
            console.log("I do not understand.");
            index = this.choiceSelection(nightmareChoices, "Which action do you take?");
        }
            
        switch(index) {
            case 0:
                this.sweepTheLeg();
                break;
    
            case 1:
                this.goForItsEyes();
                break;
                
            case 2:
                this.checkEndTable();
                break;
    
            case 3:
                this.openWindow();
                break;
    
            }// End of nightmareChoice switch
    }// End of returnHome() function

    travelHomeText() {
        if(this.bossChoice === 1) {
            console.log("After your long first day of being boss you return home exhausted.");
        } else {
            if(this.transportChoice === 1) {
                console.log("After packing your bags you return to your car.");
                console.log("You drive home listening to 'Everybody Hurts' by REM on repeat the whole way.");
            } else {
                console.log("After packing your bags you go return to the train station.");
                console.log("You put on your headphones and blast 'Everybody Hurts' by REM on repeat the whole way.");
            }
        }
    }

    returnHomeText() {
        console.log("Your bed calls to you as soon as you enter.");
        console.log("You slowly, and groggily make your way to your room.");
        console.log("As soon as you enter, you collapse.");
        console.log("You drift off into a deep sleep.");
        console.log("You awake in a pitch black room. You can only see a foot in front of you.");
        console.log("Two red lights flash in front of you, but you can't make out what it is.");
        console.log("'Who's there?' You scream out.");
        console.log("The lights start moving closer, and closer to you.");
        console.log("It gets close enough for you to finally make out a shape.");
        console.log("It's a nightmare of everything you've encountered in your day today.");
        console.log("It grabs you by your leg and slams you onto the floor.");
    }

    sweepTheLeg() {
        //Array
        this.answersPush(this.player, "Sweep the leg.")
    
        console.clear();
        this.sweepTheLegText();

        let sweepTheLegChoices = ["Put it in a guillotine.", "Put it in an armbar.", "Put it in an Omoplata."];
        let index = this.choiceSelection(sweepTheLegChoices, "Which action do you take?");
    
        //Array
        this.questionsPush(this.player, "Which action do you take against the nightmare (2)");
    
        //Checking for valid user inputs, loops until the input is valid
        while(!sweepTheLegChoices[index]) {
            console.clear();
            console.log("I do not understand.");
            index = this.choiceSelection(sweepTheLegChoices, "Which action do you take?");
        }

        switch(index) {
            case 0:
                this.guillotine();
                break;
                
            case 1:
                this.armbar();
                break;
    
            case 2:
                this.omoplata();
                break;
    
            }// End of nightmareChoice2 switch
    }// End of sweepTheLeg() function

    sweepTheLegText() {
        console.log("You crouch into position, and stick out your leg for the sweep attack.");
        console.log("The nightmare jumps to avoid it.");
        console.log("As it comes back down to the ground you react fast enough to grab its legs and take it down.");
        console.log("The nightmare lets out a loud screech.");
    }

    guillotine() {
        //Array
        this.answersPush(this.player, "Put it in a guillotine.")
    
        console.clear();
        console.log("You get underneath the nightmare to get in position.");
        console.log("The nightmare uses this to put all it's weight on you.");
        console.log("It crushes you between itself and the floor.");
    
        //Health && check
        this.player.isDead(this.player.health);
    
        //End loop
        this.endGame(this.player);
    }// End of guillotine() function

    armbar() {
        //Array
        this.answersPush(this.player, "Put it in an armbar.")
    
        console.clear();
        console.log("You pull the nightmares arm and hold it in a position that should start to break it.");
        console.log("The nightmare lets out a loud screech as you slowly begin tearing off it's arm.");
        console.log("As it gets closer to ripping off the nightmare collapses.");
        console.log("You finish it off by ripping the arm out of it's socket.");
        console.log("You stand up, nightmare arm in hand and triumphantly look over at what you've done.");
        this.reflect();
    
        //End loop
        this.endGame(this.player);
    }// End of armbar() function

    omoplata() {
        //Array
        this.answersPush(this.player, "Put it in an Omoplata.")
    
        this.newLine();
        console.log("You flip to the nightmares side.");
        console.log("You grab it's arm in an Omoplata.");
        console.log("It screams in agony.");
        console.log("The nightmare uses it's weight to move you off of it.");
        console.log("It slams you against the wall and stands up again.");
    
        //Health Check
        let wallSlam = this.randomInt(15, 1);
        this.player.isDead(wallSlam);
    
        this.newLine();
        console.log("The nightmare stands back up at the same time as you.");
        let nightmareChoices = ["Go for it's eyes.", "Check your end table drawer.", "Open the window."];
        let index = this.choiceSelection(nightmareChoices, "Which action do you take?");
       
        //Array
        this.questionsPush(this.player, "Which action do you take against the nightmare (3)?");
    
        //Checking for valid user inputs, loops until the input is valid
        while(!nightmareChoices[index]) {
            console.clear();
            console.log("I do not understand.");
            index = this.choiceSelection(nightmareChoices, "Which action do you take?");
        }

        switch(index) {            
            case 0:
                this.goForItsEyes();
    
                this.endGame(this.player);
    
            case 1:
                this.checkEndTable();

                this.endGame(this.player);
    
            case 2:
                this.openWindow();
    
                this.endGame(this.player);
            }//End to nightmareChoice3 Switch
        
        this.endGame();
    }// End of omoplata() function

    goForItsEyes() {
        //Array
        this.answersPush(this.player, "Go for it's eyes.");
    
        console.clear();
        console.log("You run over to the nightmare and leap to it's head.");
        console.log("As you begin leaping it grabs hold of you and repeatedly slams you into the floor.");
        console.log("When it stops it's already too late for you.");
    
        //Health && check
        this.player.isDead(this.player.health);
    
        this.pressEnter();
    
        this.endGame(this.player);
        
    } //End of goForItsEyes() function

}




function checkEndTable() {
    //Array
    answersPush("Check your end table.");

    console.clear();
    console.log("You run over to your end table and open the drawer.");
    console.log("Inside is your pocket knife you have for safety.");
    console.log("You feel the nightmare stomping towards you so you jump and roll to the other side of the bed.");
    console.log("As the monster tries to stop it's momentum you take that chance to attack.");
    console.log("You climb onto the bed, leap, and grab onto the nightmares back.");
    console.log("It spins and swings trying to get you off of it.");
    console.log("However it can't seem to do it, you stab it in the back numerous times before winding up for one last stab to the head.");
    console.log("As you connect with it's head the nightmare stops moving and falls to the ground.");
    reflect();
    let space = userInput("");

    endGame();

}// End of checkEndTable() Function


function openWindow() {
    //Array
    answersPush("Open the window.");

    console.clear();
    console.log("You turn around to the window behind you and start to open it.");
    console.log("The nightmare, as it realizes you are trying to escape stomps over to you.");
    console.log("You're too fast and leap out of the open window.");
    console.log("Underestimating the size of the nightmare you begin to celebrate your escape.");
    console.log("As you're celebrating the nightmare bursts the wall like the Kool-Aid man. You'd almost expect for it to scream 'Oh yeah!'");
    console.log("Breaking free from your shock you run out to the street.");
    console.log("The nightmare chases you and as it walks into the street a truck drives by.");
    console.log("The truck at full speed crashes into the nightmare, exploding the nightmare into numerous pieces.");
    reflect();
    let space = userInput("");

    endGame();
}// End of openWindow() function

module.exports = Nightmare;