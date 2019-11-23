const readline = require('readline-sync')//DO NOT CHANGE

let time = 3.00, GSP = 0;
let current = (`Current time is: ${time} hrs & current GSP is ${GSP}`);

const play = () => {
    let userInput;
    while (userInput !== "yes") {
        userInput = readline.question("Are you ready to play the: Good Samaritan Race (yes || no)?! ").toLowerCase();
    }
    
    console.log("Awesome, lets get started!");
    userInput = readline.question("Enter your name: ");
    
    console.log(`${userInput} here's a brief discription of the game: You'll have 3hrs to complete the race. \n Along the way you'll be helping friends in need.\n You'll gain \"Good Samaritan Points\" aka GSP as you go. \n Your final score will depend on both. Note to the wise choose wisely who you help as it will cost you Time`);

    console.clear();
    
    console.log(current);

    userInput = readline.question("On your way out the door your mother calls to you. Do you stop and ask what she needs (yes || no)? ").toLowerCase();


    if (userInput !== "yes" && userInput !== "no") {
        console.log("You trip and sprang your ankle on the way out the door. :-( try again next time");   
         startOver();
    } else if (userInput === "yes") {
        helpMom();
    } else {
        enRouteToRace();
    }
}


const helpMom = () => {
    console.clear();
    
    let momHelp = readline.question("Mom: Could you load the diswhaser and take out the trash before you head out? This will cost you 30 mins time. Will you help your mom (yes || no)? ").toLowerCase();
    
    if (momHelp !== "yes" && momHelp !== "no") {
        console.log("You trip and sprang your ankle on the way out the door. :-( try again next time");
        startOver();
    } else if (momHelp === "yes") {
        console.log("Mom: Thank you so much let me drive you to the race, since you were able to do that for me I'll be on time for work and can drop you on my way!");
        console.clear();
        
        console.log("You only lost 10 mins, youre mother driving you saves you time on yopur commute!")
        time =- .10;
        GSP += 15;
    } else if (momHelp === "no") {
        console.log("Mom: Okay thanks anyway and good luck!");
        
    }
    enRouteToRace();
}


const enRouteToRace = () => {
    console.clear();

    let helpELderlyMan = readline.question("You have to take the bus and train to get to the start line. \n Train was delayed costing you 30 mins and the bus will take another 10. \n You see an older man struggling to get across the street do you go to offer him assistence (yes || no)? ").toLowerCase();

    let timeCheck = current + " If you help him it will cost you 10 minutes";


    console.log(timeCheck);

    if(helpELderlyMan === "yes")  {
        time -= .40;
        GSP += 35;
        timeCheck = `${current}`
        console.log("Elderly man: Thank you so much for you're help. I don't know what I would have done without you!\n")
    } else if (helpELderlyMan === "no") {
        console.log(`${current}\n You made it!!!`)
    }
    startLine();
}


const startLine = () => {
    console.clear();

    console.log(`You can take the designated route in front of you (forward), follow the shady looking shorcut sign in the bushes (right), or cross the lake in the random small boat to the (left)? `);
    let forkInTheRoad = readline.question(`Which will it be (forward || right || left)? `).toLowerCase();

    switch (forkInTheRoad) {
        case "forward" :
            console.log("Forward and on ward lets get to the finishline...")
            designatedRoute()
            break;
        case "right" :
            console.log("You start your decent down around and through the dirt path in front of you...")
            shadyShortCut()
            break;
        case "left" :
            console.log("You wobble and slightly rock the boat as you climb in and get ready for your short trip across the lake...")
            boat()
            break;

    }     
}


const designatedRoute = () => {
    console.clear();

    let helpVendor = readline.question("As you're running you see a street vendor who looks like they're in need of help, will you stop to lend him a hand (yes || or)? ").toLowerCase()

    let vendorChoice = ("yes" , "no")

    // while (helpVendor !== vendorChoice) {
    //     readline.question("As you're running you see a street vendor who looks like they're in need of help, will you stop to lend him a hand (yes || or)? ").toLowerCase();
    // }

    switch (helpVendor) {
        case "yes" :
            GSP += 20;
            time -= .35;
            console.log(`${timeCheck} \n The vendor is beyond grateful, he offers you free food as thanks`)
            bathroomSprint()
            break;
        case "no" :
            console.log(`${timeCheck} You're making grate progress!!! We're getting closer to the finishline, don't forget your GSP!`)
            break;
    }
}


const shadyShortCut = () => {
    console.clear();

    let bugDrop = readline.question("As you're making your way through the shady path a bug jumps from a tree and lands on your FACE!!! Fight, run or kill? Which do you choose(fight, run || kill)? ").toLowerCase();

    while (bugDrop !== "run" || bugDrop !== "kill" || bugDrop !== "fight") {
        bugDrop = readline.question("You're making your way through the shady path when a bug jumps from a tree landing on your FACE!!! Do you fight, run or kill (fight, run || kill)? ").toLowerCase();

        if (bugDrop === "run") {
            let stayAndChat = readline.question("As you try to flee the bug begains to speak, do you stop to listen or high tale it out of there (listen || run)? ").toLowerCase()

                if (stayAndChat === "listen") {
                    talkingSpider();
                    
                }
        } else if (bugDrop === "fight" || bugDrop === "kill") {
            let didYouHearThat = readline.question("as you're fighting to kill the bug you hear someone yell:'Now wait a second man! Will you stop to see where it's coming from or go for the kill squash (squash || look)? ").toLowerCase();
                if (didYouHearThat === "look") {
                    talkingSpider();
                } else if (didYouHearThat === "squash") {
                    console.log("The spider bites you and you have to call for help... SOrry try again")
                    startOver()
                }
            }
    }

    // next choice/function call
}


const boat = () => {
    console.clear();

    console.log("While rowing on the boat you feel a tug at the ore. A droagon appears. \n Dragon: 'Mere mortal who gave you permission to use my boat?.. No response is necessary. As you've already used it you must now ' As payment for using it, you have to retrive something for him")

    let dragonRequest = readline.question("Dragon: If you can swim feel free to hop out now and swim the rest of the of way... Other wise your task will be to bring me a bacon egg and cheese sandwhich! Will you accept (yes || no)? ")

    while (dragonRequest !== "yes" || dragonRequest !== "no") {
        readline.question("If you can swim feel free to hop out now and swim the rest of the of way... Other wise your task will be to bring me a bacon egg and cheese sandwhich! Will you accept (yes || no)? ").toLowerCase();
    }

    if (dragonRequest === "yes") {
        console.log("I'm in a good mood and can wait until you're done with you're race... Don't have me waiting for very long. I know your scent now I'll find you!");
        //function call/next steps.
    } else if (dragonRequest === "no") {
        console.log("In fury the dragon unleashes fire burning you and the boat to a crisp!");
        startOver();
    }
}


const bathroomSprint = () => {
    console.clear();

let findStall = readline.question("You've continuned on your route and your stomache starts to bubble, you see a public bathroom coming up. \n It looks and smell disgusting! But any second longer and you may have an accident!!! \n There are four stalls, which do you choose (1, 2, 3 || 4) please enter a number? ");

if (findStall !== Number) {
    console.log("Please enter a number!")//What else do I need to put here? to make sure it runs again? or is aloop even okay here
    // Also decide what will be next after this choice
}
let stalls = [1, 2, 3, 4]
for (let i = 0; i < stalls.length; i++) {

    if (stalls[i] === 1) {
        console.log("You chose stall 1. Just your luck theres no tissue! You lose 20 minuets trying to find some!")
        time -= .20
    } else if (stalls[i] === 2) {
        console.log("")
    } else if (stalls[i] === 3) {

    } else if (stalls[i] === 4) {

    }
}

}


const talkingSpider = () => {
    console.clear();
    console.log("You stop and notice the spider. \n Spider: 'You dare come into my home causing a ruckus! Now I haven't had any visitors in a while so I want to do something nice for you.'");
    let userAge = readline.question("Go on head tell me how old you are:(enter number for age) ");

    let i = userAge;

    while (i <= userAge) {
        if (i <= 10) {

        } else if (i >= 15) {

        } else if (i >= 20) {

        } else if (i <= 25) {

        } else if (i <= 30) {

        } else {

        }
    }
     // enter number
    // make a loop that will give prizes point and or time depending on the age
    //Choose next step/fucntion call
    
}



const startOver = () => {
    console.clear();

    console.log(`Sorry ${UserInput} your run has come to an end. This is your final score ${timeCheck} \n Thanks for playing and rememebr to sto and help those around you!!!`)
    let playAgain = readline.question("Would oyu like to play again (yes || no) ?")

    if (playAgain === "yes") {
        play();
    } else {
        console.log("Over");
    }
}


// play()
// startLine()
// designatedRoute()
shadyShortCut()
// bathroomSprint()
