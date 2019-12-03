const readline = require('readline-sync')

let nameInput = readline.question("Yurrrr washpoppingg? What's your name?: ")

console.log(`${nameInput}?` + " wassup?")

let answerInput = readline.question("Are you ready for this?")


if (answerInput.toLowerCase() === "yes") {
    console.log(`${answerInput} ? Good! Start it up!`);
} else {
    console.log("Oh well, we're starting anyway...");
} 


const acceptAge = (num) => {
    for(let i = 0; i < 21; i++) {
        if(num >= 21) {
            console.log(storyNodeOneQ)
        } else {
            console.log("Damn kid, access denied!");
            break;
        }
    }
}

let ageInput = readline.question("Before we start, enter your age!")
console.log(acceptAge())


for(let i = 0; i < 0; i++)
if(acceptAge >= 21) {
    console.log("Let get this game started baybeee.")
}

let input = 0;
let output = []



// let secretInput = readline.question("I need to make sure you're not a robot. What's 9 + 10?")
let storyNodeOneOptions = [
    {1: "Keep walking! It does not scare me."}, 
    {2: "I might do a little power walk."},
    {3: "RUNNNN! ... and probably duck down the alley too."},
]

let storyNodeTwoOptions = [
    {1: "Door A, it's already opened."},
    {2: "Knock on Door B kinda soft but loud, someone has to come to my rescue."}
]

let storyNodeThreeOptions = [
    {1: "The one that's lit up, duh."},
    {2: "The one that's pretty dark. Sue me."}
]

let storyNodeFourOptions = [
    {1: "Not for nothing... I would have screamed."}, 
    {2: "Mini heart attack but real G's move in silence like lasagna."}
]

let storyNodeFiveOptions = [
    {1: "left"},
    {2: "Right"},
    {3: "Straight"}
]

let storyNodeSixOptions = [
    {1: "The ladder heading to the roof."},  
    {2: "The ladder going further undergroud."}
]

let storyNodeSevenOptions = [
    {1: "German"},
    {2: "Russian"},
    {3: "Italian"}
]

let storyNodeEightOptions = [
    {1: "Left, toward the rocks."},
    {2: "Right, towards the trees."}
]

let storyNodeNineOptions = [
    {1: "Yes"}.toLowerCase(),
    {2: "No"}.toLowerCase()
]

let storyNodeTenOptions = [
    {1: "Red pill"},
    {2: "Blue pill"}
]





let storyNodeOneQ = readline.question("You are walking to the mall. It is midnight which means it is super dark out and you notice one of those weird vans following behind you real slow. What do you do?")
console.log(storyNodeOneOptions)

let storyNodeTwoQ = readline.question("You see 2 doors. Door A is cracked open a bit and Door B is shut real tight. What do you do?")
console.log(storyNodeTwoOptions)

let storyNodeThreeQ = readline.question("You enter the open door and you see a hallway forking into 2 directions. One is lit up and one is super dark. Which one are you walking through?")
console.log(storyNodeThreeOptions)

let storyNodeFourQ = readline.question("You're down the hallway and of course it's super dark and dusty. You feel something brush past your leg. What do you do?")
console.log(storyNodeFourOptions)

let storyNodeFiveQ = readline.question("Okay you've made it this far based off of some sort of common sense. Let's see how well you do with luck. You get to the end of the hallway. You see it fork again but into 3 different hallways. Which one are you picking?")
console.log(storyNodeFiveOptions)

let storyNodeSixQ = readline.question("You make it to the end of the hallway. You see 2 ladders leading to 2 very different parts of the building. Which ladder are you taking? ")
console.log(storyNodeSixOptions)

let storyNodeSevenQ = readline.question("You're underground and you see 3 giant red buttons. You can't understand what they're saying because they're in different languages but you have to pick one. Which one are you going for?")
console.log(storyNodeSevenOptions)

let storyNodeEightQ = readline.question("You've been transported to a beautiful paradise. The Polynesian islands to be exact. Too bad the creepy people somehow found their way there too. You see a giant rock to hide behind to the left and some trees to your right. Which way are you heading?")
console.log(storyNodeEightOptions)

let storyNodeNineQ = readline.question("Have you watched that movie The Matrix before?")
console.log(storyNodeNineOptions)

let storyNodeTenQ = readline.question("Which pill?")
console.log(storyNodeTenOptions)


const storyNodeOne = (input) => {
    // let input = []
    if(input === 1) {
        console.log("Congratulations. You've been kidnapped. Game OVER!")
    } else if(answer === 2) {
        console.log("I mean... I see your point but you still got kidnapped. Game over.") 
    } else if(answer === 3) {
        console.log("Oh, you smart. You're safe... for now." + storyNodeTwoQ)
    } else {
        console.log("Start over.")
    }
}

const storyNodeTwo = (input) => {
    if (input === "1") {
        console.log("You'd be right in the real world but since this is a game... the creepy people heard you from down the block and now they've got you.");
    } else if (input === "2") {
        console.log("Niceee but don't do that in real life. Congrats, you're still in the game." + storyNodeThree);
    } else {
        console.log("Error. Start game over.");
    }

const storyNodeThree = (input) => {
    if (input === "1") {
        console.log("Damn. Some people affiliated with the people from the van were at the end of it. You got GOT!")
} else if (input === "2") {
    console.log("Oh whatever, you're safe.. for now." + storyNodeFour);
} else {
    console.log("Error. Start game over.");
}
    }

const storyNodeFour = (input) => {
    if (input === "1") {
        console.log("I mean... you don't even have to ask me if you're still alive right now lol");
    } else if (input === "2") {
        console.log("I'm not sure how you did it but congrats to a real one. It was a rat so ew." + storyNodeFive);
    } else {
        console.log("Error. Start game over.");
    }
}
const storyNodeFive = (input) => {
    if (input === "1") {
        console.log("Damn, your luck is off to a good start." + storyNodeSix); 
    } else if (input === "2") {
        console.log("Damn. A booby trap was on the ceiling. A saw just swung at you. You ducked but then you fell down an endless pit. Till this day, you're falling.");
    } else if (input === "3") {
        console.log("Sir. Ma'am. A gas bomb just went off. Bye.");
    } else {
        console.log("Error. Start game over.");
    }
}
const storyNodeSix = (input) => {
    if (input === "1") {
        console.log("Oh no... you thought you did something.. There were 10 hungry rottweilers up there. Hope you can throw hands.");
    } else if (input === "2") {
        console.log("Oh you got good luck. Aoowww." + storyNodeSeven);
    } else {
        console.log("Error. Start game over.");
    }
}
const storyNodeSeven = (input) => {
    if (input === "1") {
        console.log("You got transported to 1765 Germany. Idk what was going on then but sorry, you didn't make it.");
    } else if (input === "2") {
        console.log("...not sure why this was your answer but no, you didn't make it either.");
    } else if (input === "3") {
        console.log("I see you're moving on up. Okrrrrr." + storyNodeEight);
    }
}
const storyNodeEight = (input) => {
    if (input === "1") {
        console.log("A flying arrow literally came out of nowhere. Wow, wasn't expecting that. Sorry. Bye.");
    } else if (input === "2") {
        console.log("You made it to those trees safe and sound. One more hill to climb." + storyNodeNine);
    } else {
        console.log("Error. Start game over.");
    }
}
const storyNodeNine = (input) => {
    if (input === "1") {
        console.log("So do you remeber how Neo had to pick between the red and blue pill? Cool. Pick one." + storyNodeTen);
    } else if (input === "2") {
        console.log("You really made it this far only to lose because you didn't watch the movie. A damn shame. You're out of here.");
    } else {
        console.log("Error. Start game over.");
    }

}
const storyNodeTen = (input) => {
    if (input === "1") {
        console.log("Wow.. all that for nothing. You transported right back to where you started like that one episode of Black Mirror where the girl was stuck in a loop.");
    } else if (input === "b2") {
        console.log("Congratulations! It was just your best friends this whole time trying to surprise you with an all expense paid vacation to Bali. Who knew? 😅");
    } else {
        console.log("Error. Start game over.");
    }

}


// // This game didn't really have any need for a switch statment but.... example for a bonus round

// let expr = ("Italian?")
// switch (expr) {
//     case 'Russian?':
//         console.log("Why'd you pick " + expr);
//         break;
//       case 'German':
//         console.log("Why'd you pick " + expr);
//         break;
//       default:
//         console.log("Why'd you pick " + expr);
// }
// }