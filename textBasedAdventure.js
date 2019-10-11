const readline = require('readline-sync')

let nameInput = readline.question("Wah gwan yout? Enter unnah name: ")

console.log(`${nameInput}? Welcome bredrin.`)

let answerInput = readline.question("Unnah ready fi di story?")



if (answerInput === "yes") {
console.log(`${answerInput} ? Good! Start it up!`);
}    else if (answerInput === "no") {
console.log(`${answerInput} ?! Oh well! We starting anyway!`);
} else {
    console.log("Well then move ya rassss!");
}


// // something that asks for the age 
// // less than 21

// // { console.log("It's cool. We'll keep it PG!") }
// // enter game

let nameStoryA = readline.question("You're walking to the mall. It's midnight. It's super dark and you notice one of those weird vans following behind you real slow. What do you do? A: Keep walking! It doesn't scare me! B: I might do a little power walk. C: RUNNNN! ... and probably duck down the alley too.");
// let a = "Keep walking! It doesn't scare me!"
// let b = "I might do a little power walk."
// let c = "RUNNNN! ... and probably duck down the alley too."


 if (nameStoryA === "a") {
    console.log("Congratulations. You've been kidnapped. Game OVER!");
} else if (nameStoryA === "b") {
    console.log ("I mean... I see your point but you still got kidnapped :( Game over.")
} else if (nameStoryA === "c") {
    console.log(readline.question("Oh, you smart. You're safe... for now. You see 2 doors. Door A is cracked open a bit and Door B is shut real tight. What do you do. [D] Bang on door B! I'm not entering some random door or [E] I'm going through Door A"))
} else {
    console.log("Error. Start over."); 
}

let nameStoryB = readline.question("You see 2 doors. Door A is cracked open a bit and Door B is shut real tight. What do you do. [A] Bang on door B! I'm not entering some random door or [B] I'm going through Door A");
// // let D = "Bang on door B! I'm not entering some random door."
// // let E = "I'm going through Door A"

