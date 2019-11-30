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

    underBridge()
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
        underBridge()
    } else if (dragonRequest === "no") {
        console.log("In fury the dragon unleashes fire burning you and the boat to a crisp!");
        startOver();
    }
}


const bathroomSprint = () => {
    console.clear();

let findStall = readline.question("You've continuned on your route and your stomache starts to bubble, you see a public bathroom coming up. \n It looks and smell disgusting! But any second longer and you may have an accident!!! \n There are four stalls, which do you choose (1, 2 || 3) please enter a number? ");

if (findStall !== Number) {
    console.log("Please enter a number (1, 2 || 3)!")//What else do I need to put here? to make sure it runs again? or is aloop even okay here
}
let stalls = [1, 2, 3, 4]
for (let i = 0; i < stalls.length; i++) {

    if (stalls[i] === 1) {
        console.log("You chose stall 1. Just your luck theres no tissue! You lose 40 minuets trying to find some!")
        time -= .20
    } else if (stalls[i] === 2) {
        console.log("The stall you chose has no toilet tissue. You have to wait until someone comes to pass you tissue! You lost 30 mins")
        GSP
        time -= .30;
    } else if (stalls[i] === 3) {
        console.log("You chose well my friend. You handled your buisness, you only lost 15 minuets")
        GSP 
        time -= .15
    }
    underBridge()
}

}


const talkingSpider = () => {
    console.clear();

    console.log("You stop and notice the spider. \n Spider: 'You dare come into my home causing a ruckus! Now I haven't had any visitors in a while so I want to do something nice for you.'");

    let userAge = readline.question("Go on head tell me how old you are:(enter number for age) ");


    if (userAge <= 10) {
        console.log("Get a few more years on you and I'll give you something nice")
    } else if (userAge <= 20) {
        console.log("You've been around for while, here's some extra time! Good luck with the race!")
        time += .40;
    } else if (userAge <= 30) {
        console.log(`Wow that's really something ${56} years old. I have faith in people and if you've been around for that long I'm sure you've lent a helping hand here and there. Here's some GSP! Good luck on the race!`)
        GSP += userAge//convert user input "string to number and add that to the GSP"
    } else if (userAge <= 40) {
        console.log("something")
    } else if (userAge <= 100) {
        console.log(`${56} years whoo, thats really something! Here's some loving`)
        time += .20;
        GSP += 30;
    } 
    
}

const underBridge = () => {
    console.clear();
    let underBridge = readline.question("As you're nearing the home stretch, running under a bridge you see a small figure and hear a cry for help. Will you stop to see what's going on or continue to the finsihline (stop || ignore)? ")

    if (underBridge !== "stop" && underBridge !== "ignore") {
        readline.question("Will you stop to see what's going on or continue to the finsihline (stop || ignore)? ")
    }
    if (underBridge === "ignore") {
        console.log("You trip and fall to your doom, ripping a muscle, better luck next time");
        startOver()
    } else if (underBridge === "stop") {
        console.log("Listeniong intesly, the cry for hepl stutters. Then suddenly the small figure darts towards you! ")
    }
    trollUnderBridge()
}

const trollUnderBridge = () => {
    console.clear();

    let figure = readline.question("What do you in response to the darting figure, runners kick backflip or drop to your knees (runners || knees)? ");

    if (figure === "runners") {
        let keepfighting = readline.question("It's a troll! in an effort to protect themselves, they knock you over the head with their cane, will you keep fighting or back away to talk (fight || talk)? ")
        if(keepfighting === "fight") {
            console.clear();

            let whatsNext = readline.question("The figure somehow manages to get you in a head lock, you can continue the tussle or surrender (continue || surrender)? ") 
            if (whatsNext === "continue") {
                console.log("The figure uses so wizarding world of Harry Potter magic on you causing your body to go numb, sorry you're out. This is the end for you")
                startOver();
            } else if (whatsNext === "surrender") {
                let helpFigure = readline.question("You are worthy opponent with much heart, however I can't find my little one do you think you could help (yes || no)? ") 
                if (helpFigure === "yes") {
                    findLittleOne();
                } else if(helpFigure === "no") {
                    console.log("Well thanks anyway best of luck on the race!")
                    nearingFinishline()
                }
            }
            
        } else if (keepfighting === "talk") {
            console.log("Silly man help me would you");
            findLittleOne();

        }
    } else if (figure === "knees") {
        let helpFind = readline.question("Why'd you swing at me man? I am just trying to find my little one. Do you think you could help me with that (yes || no)? ")
        if (helpFind === "yes") {
            findLittleOne();
        }
    } else {
        nearingFinishline()
    }
}

const findLittleOne = () => {
    console.clear();
    
    let whereIsLittleOne = readline.question("Troll: We were out for our daily walk, when I just turned for a second to grad a snack for the lad. When I looked back they were nowhere to be seen. They usually enjoy following the flowers down the path there. I am not fast enough to follow to catch up I am afraid. Could you go for me (yes || no) ?")
     if (whereIsLittleOne === "no") {
         console.log("Well then my friend you may as well go on your way, I'll just slow you down. But thanks for stopping");
         nearingFinishline();
     } else if (whereIsLittleOne === "yes") {
         followTheFlowers();
     }
}

const followTheFlowers = () => {
    console.clear();

    let choosePath = readline.question("You follow the flowers as the Troll dad asks and you reach a fork in the road. You can go left and follow the yellow flowers or right and follow the puffy white ones. Which do you think a little one would enjoy more (left || right)? ")

    switch (choosePath) {
        case "left" :
            console.log("Running through the flowers, you miss a dip in the terrain and tumble down the side of a hill.");
            hillTumble();
            break;
        case "right" :
            console.log("As you're following the puffy white flowers you come across a snack that the dad troll had mentioned");
            snackFind();
             break;
    }
}
const snackFind = () => {
    console.clear();

    let snackTrail = readline.question("Do you want to constinue looking for the the young troll or go back to the race (yes || no)? ")

    switch (snackTrail) {
        case "yes" :
            console.log("You folow through the thick of the flowers and you heatr a youthful voice amongst a bunch of toher cheers. To your surprise you find the young troll and reach the finish line");
            GSP += 100;
            time -= .55;
            congratulations()
            break;
        case "no" :
            console.log("You went the opposite way from which you came prior to the scuffle with the Troll, you get lost and don't finish the race");
            startOver();
            break;
    }
}

const hillTumble = () => {
    console.clear();

    let getUpandGo = readline.question("You tumble and you roll all the way down the side of the hill. You are now pretty banged up and a little sore will you fidn help or keep going (help || continue)? ")
    if (getUpandGo === "yes") {
        time -= .55
        console.log("You lose time hobbling about, and no longer have a trail to follow to try to find the little troll ")
        nearingFinishline()
    } else if (getUpandGo === "help") {
        console.log("Sometimes you have to know when to throw in the towel. Nice run though!")
        help()
    }
}

const help = () => {
    console.clear();

    let hearSomeVoices = readline.question("As you're walking, looking for help you hear some vocie. Will you go towards them or in the opposite direction as you do not know wh you can trust (towards || opposite)? ")

    if (hearSomeVoices === "towards") {
        console.log("You go towards gthe voice and see the familiar numbers hanging off the backs of their shirts. They are also in the race liek you. They help you reach the finshline, where you also run into the little troll.")
    } else if (hearSomeVoices === "opposite") {
        console.log("You continue to wander to find help or the finish line. ..")
        nearingFinishline();
    }
}

const nearingFinishline = () => {
    console.clear();
    let gettingClose = readline.question("Runnign along you know you're getting closer to the finish line because you see a statue that stuck out on your map. But taking a closer look oyu see someone in pain leaning up against it. Will have one last act of kindness or keep on running (stop || run)? ");

        switch (gettingClose) {
            case "run" :
                console.log("Run, run, as fast as you can! You are almost at the end.")
                reachedFinishline()
                break;
            case "stop" :
                console.log("Woman: Thank you so much for stopping, I could really use a hand. I believe I may have pulled muscle")
            helpRunner();
            break;
        }
}

const helpRunner = () => {
    console.clear();
    
    let whatShouldWeDo = readline.question("Woman: I really would love it if I could walk across the line but also I do not think I can make it... Do you think you could help me hold my weight or could you just run and get help when you reach the end. Will you try to go together or will you go alone (together || alone)? ");

    if (whatShouldWeDo === "alone") {
        reachedFinishline();
    } else if (whatShouldWeDo === "together") {
        console.log("It's not easy but the woman is deeply greateful and apprecitive") 
    }
    reachedFinishline2()
}

const reachedFinishline = () => {
    console.clear();
    
    console.log("You made and helped so many along the way! No matter what the final score you are awesome");
    
    congratulations();
}
const reachedFinishline2 = () => {
    console.clear();
    
    console.log("Not only did you make it, but you also helped a stranded fellow racer make it as well!")
    GSP += 50
    
    congratulations();
}

const congratulations = () => {
    console.clear();

    console.log(`Thanks so much for playing! Hope to see back soon! \n ${current} this is your final score!`)
    playAgain();
}

const startOver = () => {
    console.clear();

    console.log(`Sorry ${UserInput} your run has come to an end. This is your final score ${timeCheck} \n Thanks for playing and rememebr to stop and help those around you!!!`)
    let playAgain = readline.question("Would you like to play again (yes || no) ?")

    if (playAgain === "yes") {
        play();
    } else {
        console.log("Over");
    }
}

const playAgain = () => {
    console.clear();

    let wouldYouLike = readline.question("Would you like to play again (yes || no)?")
    if (wouldYouLike === "yes") {
        play();
    } else {
        console.log("Thank you have a good day!!!")
    }
}
// play()
// startLine()
// designatedRoute()
// shadyShortCut()
// underBridge()

// bathroomSprint()
