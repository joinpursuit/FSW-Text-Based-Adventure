const readline = require('readline-sync')

let nameInput = readline.question("Yurrrr washpoppingg? What's your name?: ")

console.log(`${nameInput}? Pull up then.`)

let answerInput = readline.question("You ready for this?")


if (answerInput === "yes" || "Yes" || "YES") {
console.log(`${answerInput} ? Good! Start it up!`);
} else { 
    console.log("Oh well, we starting it up anyway...");
} 

// let age = [18]
// let ageInput = readline.question("...but wait.. how old are you? 👀")

// for (i = 0; i > 17; i -- ) {
//     if (age <= 17) {
//         console.log(age + "? Damn kid. Access denied.")
//     } else {
//         console.log(age + "? Oh bet, let's get to it.")
//     }

let storyNodeOne = readline.question("You are walking to the mall. It is midnight which means it is super dark out and you notice one of those weird vans following behind you real slow. What do you do?   [A] Keep walking! It does not scare me.  [B] I might do a little power walk.  [C] RUNNNN! ... and probably duck down the alley too.")
let storyNodeTwo = readline.question("You see 2 doors. Door A is cracked open a bit and Door B is shut real tight. What do you do.  [A] Bang on door B! I'm not entering some random door or    [B] I'm going through Door A")

if (storyNodeOne === "a") {
    console.log("Congratulations. You've been kidnapped. Game OVER!");
} else if (storyNodeOne === "b") {
        console.log("I mean... I see your point but you still got kidnapped :( Game over.");
} else if (storyNodeOne === "c") {
        console.log("Oh, you smart. You're safe... for now." + storyNodeTwo);
} else {
        console.log("Error. Start game over.");
    }

let storyNodeThree = readline.question("You enter the open door and you see a hallway forking into 2 directions. One is lit up and one is super dark. Which one are you walking through?    [A] The one that's lit up, duh. [B] The one that's pretty dark. Sue me.")

if (storyNodeTwo === "a") {
    console.log("You'd be right in the real world but since this is a game... the creepy people heard you from down the block and now they've got you.");
} else if (storyNodeTwo === "b") {
    console.log("Niceee but don't do that in real life. Congrats, you're still in the game." + storyNodeThree);
} else {
    console.log("Error. Start game over.");
}

let storyNodeFour = readline.question("You're down the hallway and of course it's super dark and dusty. You feel something brush past your leg. What do you do? [A] Not for nothing... I would have screamed.   [B] Mini heart attack but real G's move in silence like lasagna.")


if (storyNodeThree === "a") {
    console.log("Damn. Some people affiliated with the people from the van were at the end of it. You got GOT!")
} else if (storyNodeThree === "b") {
    console.log("Oh whatever, you're safe.. for now." + storyNodeFour);
} else {
    console.log("Error. Start game over.");
}

let storyNodeFive = readline.question("Okay you've made it this far based off of some sort of common sense. Let's see how well you do with luck. You get to the end of the hallway. You see it fork again but into 3 different hallways. Which one are you picking.     [A] left    [B] right   [C] straight")

if (storyNodeFour === "a") {
    console.log("I mean... you don't even have to ask me if you're still alive right now lol");
} else if (storyNodeFour === "b") {
    console.log("I'm not sure how you did it but congrats to a real one. It was a rat so ew." + storyNodeFive);
} else {
    console.log("Error. Start game over.");
}

let storyNodeSix = readline.question("You make it to the end of the hallway. You see 2 ladders leading to 2 very different parts of the building. Which ladder are you taking?  [A] The ladder heading to the roof.   B] The ladder going further undergroud.")

if (storyNodeFive === "a") {
    console.log("Damn, your luck is off to a good start." + storyNodeSix); 
} else if (storyNodeFive === "b") {
    console.log("Damn. A booby trap was on the ceiling. A saw just swung at you. You ducked but then you fell down an endless pit. Till this day, you're falling.");
} else if (storyNodeFive === "c") {
    console.log("Sir. Ma'am. A gas bomb just went off. Bye.");
} else {
    console.log("Error. Start game over.");
}

let storyNodeSeven = readline.question("You're underground and you see 3 giant red buttons. You can't understand what they're saying because they're in different languages but you have to pick one. Which one are you going for?  [A] German  [B] Russian  [C] Italian")

if (storyNodeSix === "a") {
    console.log("Oh no... you thought you did something.. There were 10 hungry rottweilers up there. Hope you can throw hands.");
} else if (storyNodeSix === "b") {
    console.log("Oh you got good luck. Aoowww." + storyNodeSeven);
} else {
    console.log("Error. Start game over.");
}

let storyNodeEight = readline.question("You've been transported to a beautiful paradise. The Polynesian islands to be exact. Too bad the creepy people somehow found their way there too. You see a giant rock to hide behind to the left and some trees to your right. Which way are you heading?  [A] left, toward the rocks  [B] right, to the trees.")

if (storyNodeSeven === "a") {
    console.log("You got transported to 1765 Germany. Idk what was going on then but sorry, you didn't make it.");
} else if (storyNodeSeven === "b") {
    console.log("...not sure why this was your answer but no, you didn't make it either.");
} else if (storyNodeSeven === "c") {
    console.log("I see you're moving on up. Okrrrrr." + storyNodeEight);
}

let storyNodeNine = readline.question("Have you watched that movie The Matrix before?   [A] yes     [B] no")


if (storyNodeEight === "a") {
    console.log("A flying arrow literally came out of nowhere. Wow, wasn't expecting that. Sorry. Bye.");
} else if (storyNodeEight === "b") {
    console.log("You made it to those trees safe and sound. One more hill to climb." + storyNodeNine);
} else {
    console.log("Error. Start game over.");
}

let storyNodeTen = readline.question("[A] Red pill     [B] Blue pill")

if (storyNodeNine === "a") {
    console.log("So do you remeber how Neo had to pick between the red and blue pill? Cool. Pick one." + storyNodeTen);
} else if (storyNodeNine === "b") {
    console.log("You really made it this far only to lose because you didn't watch the movie. A damn shame. You're out of here.");
} else {
    console.log("Error. Start game over.");
}

if (storyNodeTen === "a") {
    console.log("Wow.. all that for nothing. You transported right back to where you started like that one episode of Black Mirror where the girl was stuck in a loop.");
} else if (storyNodeTen === "b") {
    console.log("Congratulations! It was just your best friends this whole time trying to surprise you with an all expense paid vacation to Bali. Who knew? 😅");
} else {
    console.log("Error. Start game over.");
}