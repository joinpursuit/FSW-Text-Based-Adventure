const readline = require('readline-sync')//DO NOT CHANGE

let time = 3.00, GSP = 0;
let current = (`Current time is: ${time} hrs & current GSP is ${GSP}`);

// const play = () => {
//     let userInput;
//     while (userInput !== "yes") {
//         userInput = readline.question("Are you ready to play the: Good Samaritan Race (yes || no)?! ").toLowerCase();
//     }
    
//     console.log("Awesome, lets get started!");
//     userInput = readline.question("Enter your name: ");
    
//     console.log(`${userInput} here's a brief discription of the game: You'll have 3hrs to complete the race. \n Along the way you'll be helping friends in need.\n You'll gain \"Good Samaritan Points\" aka GSP as you go. \n Your final score will depend on both. Note to the wise choose wisely who you help as it will cost you Time`);

//     console.clear();
    
//     console.log(current);

//     userInput = readline.question("On your way out the door your mother calls to you. Do you stop and ask what she needs (yes || no)? ").toLowerCase();


//     if (userInput !== "yes" && userInput !== "no") {
//         console.log("You trip and sprang your ankle on the way out the door. :-( try again next time")
//     } else if (userInput === "yes") {
//         helpMom();
//     } else {
//         enRouteToRace();
//     }
// }


// const helpMom = () => {
//     console.clear();
    
//     let momHelp = readline.question("Mom: Could you load the diswhaser and take out the trash be fore you head out? This will cost you 30 mins time. Will you help your mom (yes || no)? ").toLocaleLowerCase();
    
//     if (momHelp !== "yes" && momHelp !== "no") {
//         console.log("You trip and sprang your ankle on the way out the door. :-( try again next time")
//     } else if (momHelp === "yes") {
//         console.log("Mom: Thank you so much let me drive you to the race, since you were able to do that for me I'll be on time for work and can drop you on my way!")
//         console.clear()
//         console.log("You only lost 10 mins, youre mother driving you saves you time on yopur commute!")
//         time =- .10;
//         GSP += 15;
//     } else if (momHelp === "no") {
//         console.log("Mom: Okay thanks anyway and good luck!")
//         console.log(current)//HELP commented out code won't show on console
//     }
//     enRouteToRace()
// }

// const enRouteToRace = () => {
//     console.clear();
//     let helpELderlyMan = readline.question("You have to take the bus and train to get to the start line. The train was delayed costing you 30 mins and the bus will take another 10. You see an older man struggling to get across the street do you go to offer him assistence (yes|| no)?").toLowerCase();

//     let timeCheck = current + "If ypu help him it will cost you 10 minutes"


//     console.log(timeCheck)

//     if(helpELderlyMan === "yes")  {
//         time -= .40
//         GPS += 35
//         timeCheck = `${current}`
//         console.log("Elderly man: Thank you so much for you're help. I don't know what I would have done without you!\n")
//     } else if (helpELderlyMan === "no") {
//         console.log(`${current}\n You made it!!!`)
//     }
//     startLine()
// }

const startLine = () => {
    console.log(`You can take the designated route in front of you (forward), follow the shady looking shorcut sign in the bushes (right), or cross the lake in the random small boat to the (left)? `)
    let forkInTheRoad = readline.question(`Which will it be (forward || right || left)? `).toLowerCase()
    switch (forkInTheRoad) {
        case "forward" :
            console.log("hey")
            designatedRoute()
            break;
        case "right" :
            console.log("what")
            shadyShortCut()
            break;
        case "left" :
            console.log("NOW")
            boat()
            break;

    }     
}

const designatedRoute = () => {
    console.log("forward")
    //as youre running you rememerb didn't have any breakfast and you stop for street meat. The vendor asks you if you could watch his cart(yes || or no?)
        // helpvendor() leads to bathroom function
}

const shadyShortCut = () => {
    console.log("shady")
    // youre making your way down a bushy path when a bug jumps on you and talking spider asks you age 
    // enter number
    // make a loop that will give prizes point and or time depending on the age
    // next choice/function call
}

const boat = () => {
    console.log("boat")
    // while rowing on the boat you feel a tug at the ore. A droagon appears and asks how oyu got his boat? and as payment for using it you have to retrive something for him 1 being the eaisest and 5 the hardest which do you choose?//could use while loop here.
    //somthing small for each number choice be sure to display GSP and time
}

// play()
startLine()

// think of how you want to end the game... 
 