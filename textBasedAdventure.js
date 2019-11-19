const readline = require('readline-sync')//DO NOT CHANGE

//could probably use while loopo for the time varible. as the player helps others the time will go down if they run out of time before they make it to the finish line then the loo0p will end and they will be told. >0 play <= 2.5 "show warning half way" 1hr < another warning BUUUUT if you keep updating and showing them in the game play then you wont really need a warning
// ex while time 
// could also have a meters or something varible that will be added to their final score
// Player variables:
// time
// GSP

let time = 3.00, GSP = 0;
let current = (`Current time is: ${time} hrs & current GSP is ${GSP}`);

const play = () => {
    let userInput;
    while (userInput !== "yes") {
        userInput = readline.question("Are you ready to play the: Good Samaritan Race (yes || no)?! ");
    }
    
    console.log("Awesome, lets get started!");
    userInput = readline.question("Enter your name: ");
    
    console.log(`${userInput} here's a brief discription of the game: You'll have 3hrs to complete the race. \n Along the way you'll be helping friends in need.\n You'll gain \"Good Samaritan Points\" aka GSP as you go. \n Your final score will depend on both. Note to the wise choose wisely who you help as it will cost you Time`);

    console.clear();
    
    console.log(current);

    userInput = readline.question("On your way out the door your mother calls to you. Do you stop and ask what she needs (yes || no)?");


    if (userInput !== "yes" && userInput !== "no") {
        console.log("You trip and sprang your ankle on the way out the door. :-( try again next time")
    } else if (userInput === "yes") {
        helpMom();
    } else {
        enRouteToRace();
    }
}


const helpMom = () => {
    console.clear();
    let momHelp = readline.question("Mom: Could you load the diswhaser and take out the trash be fore you head out? This will cost you 30 mins time. Will you help your mom (yes || no)?")
    if (momHelp !== "yes" && momHelp !== "no") {
        console.log("You trip and sprang your ankle on the way out the door. :-( try again next time")
    } else if (momHelp === "yes") {
        console.log("Mom: Thank you so much let me drive you to the race, since you were able to do that for me I'll be on time for work and can drop you on my way!");
        console.clear();
        console.log("You only lost 10 mins, youre mother driving you saves you time on yopur commute!");
        time = 2.50;
        GSP = 15;
    } else if (momHelp === "no") {
        console.log("Mom: Okay thanks anyway and good luck!");
        console.log(current)
    }
    enRouteToRace()
}

const enRouteToRace = () => {
    
}

const startLine = () => {
    
}

play()

//Choose when/where to place time and GSP meter 