const readline = require('readline-sync')

console.log("Beep Beep Beep! The sound of the neighborhood snow removal truck woke you up. Glancing outside your window, another 8 inches of snow has fallen since last night.")
console.log ("The hill behind your backyard looks very much like Narnia, but a look-alike Santa's sleigh tracks caught your attention.\n")

const exitGame = () => {
    console.log(`Goodbye!`)
    process.exit()
}


const playAgain = () => {
    let answerPlayAgain = readline.question("Would you like to play again?\n")
    if (answerPlayAgain.toLowerCase === "yes" || answerPlayAgain.toLowerCase === "y") {
        newGame()
    } else {
        exitGame
    }
}

const nameInput = readline.question("Please enter your name: \n")
const ageInput = readline.question ("Please enter your age: \n")

const newGame = () => {    
    console.log("\x1b[33m%s\x1b[0m", `Hello, good morning ${nameInput}!~`)
    console.log("\x1b[33m%s\x1b[0m", "Today is December 25th, Christmas day.")
    console.log("\x1b[33m%s\x1b[0m", "I have left a present for you last night, it is up to you to find where it is hidden!")
    console.log("\x1b[33m%s\x1b[0m", "With love, Santa! Ho! Ho! Ho!~\n")
    let answerPresentHunt = readline.question("Would you like to go on a present hunt? Yes[Y] or No[N]\n")
    if (answerPresentHunt.toLowerCase() === "yes" || answerPresentHunt.toLowerCase() === "y") {
        console.log("\nGlad to hear! Which room would you like to check out first?")
        enterRoom()
    } else {
        exitGame ()
    }
}


const livingRoomTemp = () => {
    let userInputTemp = readline.question(`${nameInput}. What temperature do you see on thermostat? (Input has to be a number)\n`)
    if (userInputTemp >= 32) {
        console.log("The temp is warm enough for you to take a peek outside the front porch in your PJs! You slowly open the front door and CONGRATS!")
        console.log("The present that Santa left is right infront of your eyes! Good job!~\n")
        playAgain()
    } else {
        console.log("It's too cold outside, even with jacket and gloves, you'll freeze! Staying indoor is a much better option.\n")
        enterRoom()
    }
}

const lightInBasement = () => {
    let userInputOnOff = readline.question(`${nameInput}. Would you like to turn on the lights?\n`)
    if(userInputOnOff.toLowerCase === "on") {
        console.log ("You reach and flip light switch. The fluorescent light flickers for a few second before turning on. Nothing but spider webs here")
    } else if (userInputOnOff.toLowerCase === "off") {
        console.log("Guess you aren't ready to face your fears\n")
        enterRoom()
    } else {
        console.log ("Please enter: turn on or keep off")
        lightInBasement()
    }
}


const enterRoom = () => {
    let pickRoom = readline.question("Please enter a room. (Input has to be lowercase) \n")
    let room = ["bedroom", "living room", "kitchen", "basement" ]
    for(let i = 0; i <= room.length - 1; i++){
        if (pickRoom === room[0]) {
            console.log("\nYou're already in bedroom. No present in here.")
            break;
        } else if (pickRoom === room[1]){
            console.log("\nYou walk towards the living room. Infront of the fireplace, there are faint santa footprints.")
            console.log("Your eyes wander over to the temperature reading on the wall, you walk towards it.\n")
            livingRoomTemp()
            break;
        } else if (pickRoom === room[2]){
            console.log("\nWalking towards the kitchen. The full plate of cookies you left on counter last night is now half emptied with crumbs everywhere.")
            break;
        } else if (pickRoom === room[3]) {
            console.log("\nYou open the door that leds to the basement, it's pitch dark.")
            lightInBasement()
            break;
        } else {
            console.log ("\nPlease move toward any of these rooms: bedroom, living room, kitchen, or basement to continue the game.")
            break;
        }
    }
    enterRoom ()
}




if (ageInput <= 12) {
    console.log ("\nSlowly sitting up, you reach for the glass of water on your nightstand. Instead, you feel something else. A letter with your name on it. \n")
    console.log ("Opening the letter ...\n")
    newGame()
} else {
    console.log("\nSowwie. You're old enough to know Santa is fake, dont pretend like he exists. :)")
    exitGame()
}















