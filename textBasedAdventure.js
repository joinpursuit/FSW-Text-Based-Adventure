const readline = require('readline-sync')

let nameInput = readline.question("Yurrrr washpoppingg? What's your name?: ")

console.log(`${nameInput}? Pull up then.`)

let answerInput = readline.question("You ready for this?")


if (answerInput == "yes") {
console.log(`${answerInput} ? Good! Start it up!`);
} else { 
    console.log("Oh well, we starting it up anyway...");
} 

let ageInput = readline.question("...but wait.. how old are you? 👀")

// const storyNodeOne = [
//     {
//         id: 1, 
//         text: 'You are walking to the mall. It is midnight which means it is super dark out and you notice one of those weird vans following behind you real slow. What do you do?',
//         options: [ 
//             {
//                 text: 'A: Keep walking! It does not scare me.',
//              },
//              {
//                  text: 'B: I might do a little power walk.',
//               },
//               {
//                   text: 'C: RUNNNN! ... and probably duck down the alley too.'
//               }
//             ]
//         }
//         ]


// might need to do a for loop so that it can check any number

let age = []
for (i = 0; i > 17; i -- ) {
    if (age <= 17) {
        console.log(age + "? Damn kid. Access denied.")
    } else {
        console.log(age + "? Oh bet, let's get to it.")
    }
}
// if(age >= 18) {
//     console.log(`${ageInput} ? Oh bet, let's get to it!`);
// } else {
//     console.log(`${ageInput} ? Damn. Access denied kid.`);
//     { break; }
// }


// let nameStoryA = readline.question("You're walking to the mall. It's midnight. It's super dark and you notice one of those weird vans following behind you real slow. What do you do? A: Keep walking! It doesn't scare me! B: I might do a little power walk. C: RUNNNN! ... and probably duck down the alley too.");
// // let a = "Keep walking! It doesn't scare me!"
// // let b = "I might do a little power walk."
// // let c = "RUNNNN! ... and probably duck down the alley too."


//  if (nameStoryA === "a") {
//     console.log("Congratulations. You've been kidnapped. Game OVER!");
// } else if (nameStoryA === "b") {
//     console.log ("I mean... I see your point but you still got kidnapped :( Game over.")
// } else if (nameStoryA === "c") {
//     console.log(readline.question("Oh, you smart. You're safe... for now. You see 2 doors. Door A is cracked open a bit and Door B is shut real tight. What do you do. [D] Bang on door B! I'm not entering some random door or [E] I'm going through Door A"))
// } else {
//     console.log("Error. Start over.");
// }
// break;

// // let nameStoryB = readline.question("You see 2 doors. Door A is cracked open a bit and Door B is shut real tight. What do you do. [A] Bang on door B! I'm not entering some random door or [B] I'm going through Door A");
// // // // let D = "Bang on door B! I'm not entering some random door."
// // // // let E = "I'm going through Door A"

//if they went through door B -----> console.log("You'd be right in the real world but since this is a game... the creepy people heard you from down the block and now they've got you.")
// if door A ---> console.log("Niceee but don't do that in real life. Congrats, you're still in the game.")



// next part of the story--> You enter the open door and you see a hallway forking into 2 directions. One is lit up and one is super dark. Which one are you walking through?

// Options ---> A. The one that's lit up, duh.
//              B. The one that's pretty dark. Sue me.

// if A. --> console.log("Damn. Some people affiliated with the people from the van were at the end of it. You got GOT!")
// if B. --> console.log("Oh whatever, you're safe.. for now.")




// next part of the story --> You're down the hallway and of course it's super dark and dusty. You feel something brush past your leg. What do you do?

// --> Options ----> A. Not for nothing... I would have screamed.
//                   B. Mini heart attack but real G's move in silence like lasgna

// if A. --> console.log("I mean... you don't even have to ask me if you're still alive right now lol")
// if B. --> console.log("I'm not sure how you did it but congrats to a real one. It was a rat so ew.")





// next part of the story ---> Okay you've made it this far based off of some sort of common sense. Let's see how well you do with luck. You get to the end of the hallway. You see it fork again but into 3 different hallways. Which one are you picking. 

// options ---> A. left
//         ---> B. right
//         ---> C. straight 

// if A ---> console.log("Damn, your luck is off to a good start.") 
// if B ---> console.log("Damn. A booby trap was on the ceiling. A saw just swung at you. You ducked but then you fell down an endless pit. Till this day, you're falling.")
// if C ---> console.log("Sir. Ma'am. A gas bomb just went off. Bye.")






// next part of the story ---> You make it to the end of the hallway. You see 2 ladders leading to 2 very different parts of the building. Which ladder are you taking?

//Options ---> A. The ladder heading to the roof
//        ---> B. The ladder going further undergroud 

// ----> if A ---> console.log("Oh no... you thought you did something.. There were 10 hungry rottweilers up there. Hope you can throw hands.")
// ----> if B ---> console.log("Oh you got good luck. Aoowww.")






// next part of the story ----> You're underground and you see 3 giant red buttons. You can't understand what they're saying because they're in different languages but you have to pick one. Which one are you going for?

// Options ---> A. ---> German
//         ---> B. ---> Russian 
//         ---> C. ---> Italy


// if A. ---> console.log("You got transported to 1765 Germany. Idk what was going on then but sorry, you didn't make it.")
// if B. ---> console.log("...not sure why this was your answer but no, you didn't make it either.")
// if C. ---> console.log("I see you're moving on up. Okrrrrr.")





// next part of the story ----> "You've been transported to a beautiful paradise. The Polynesian islands to be exact. Too bad the creepy people somehow found their way there too. You see a giant rock to hide behind to the left and some trees to your right. Which way are you heading?"

// Options ---> A. ---> left, toward the rocks
//         ---> B. ---> right, to the trees

// if A. ---> console.log("A flying arrow literally came out of nowhere. Wow, wasn't expecting that. Sorry. Bye.") 
// if B. ---> console.log("You made it to those trees safe and sound. One more hill to climb.")


// last part of the story ---> "Have you watched that movie The Matrix before?"

// Options ---> A. ---> yes 
//         ---> B. ---> no

// if yes ---> console.log("So do you remeber how Neo had to pick between the red and blue pill? Cool. Red pill or blue pill?")
// if no ---> console.log("You really made it this far only to lose because you didn't watch the movie. A damn shame.")


// Options ---> A. ---> Blue pill
//         ---> B. ---> Red pill

// if A. ---> console.log("Congratulations! It was just your best friends this whole time trying to surprise you with an all expense paid vacation to Bali. Who knew? 😅")
// if B. ---> console.log("Wow.. all that for nothing. You transported right back to where you started like that one episode of Black Mirror where the girl was stuck in a loop.")