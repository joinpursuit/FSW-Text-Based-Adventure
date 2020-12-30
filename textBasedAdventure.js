const readline = require('readline-sync')

console.log("Beep Beep Beep! The sound of the neighborhood snow removal truck woke you up. Glancing outside your window, another 8 inches of snow has fallen since last night.")
console.log ("The hill behind your backyard looks very much like Narnia, but a look-alike Santa's sleigh tracks caught your attention.\n")

const exitGame = () => {
    console.log(`Goodbye!`)
    process.exit()
}


const nameInput = readline.question("Please enter your name: \n")
const ageInput = readline.question ("Please enter your age: \n")



const enterRoom = () => {
    let pickRoom = readline.question("Please enter a room. (Input has to be lowercase) \n")
    let room = ["bedroom", "living room", "kitchen", "basement" ]
    for(let i = 0; i <= room.length - 1; i++){
        if (pickRoom === room[0]) {
            console.log("You're already in bedroom. Nothing in here.")
            break;
        } else if (pickRoom === room[1]){
            console.log("You walk towards the living room. Infront of the fireplace, there are faint santa boots footprints.")
            break;
        } else if (pickRoom === room[2]){
            console.log("Walking towards the kitchen. The full plate of cookies you left on counter last night is now half emptied.")
            break;
        } else if (pickRoom === room[3]) {
            console.log("You open the door that leds to the basement, it's pitch dark, you reach for the light switch. Nothing but spider webs here.")
            break;
        } else {
            console.log ("Please move toward any of these rooms: bedroom, living room, kitchen, or basement to continue the game.")
            break;
        }
    }
    enterRoom ()
}


const newGame = () => {    
    console.log("\x1b[33m%s\x1b[0m", `Hello, good morning ${nameInput}!~`)
    console.log("\x1b[33m%s\x1b[0m", "Today is December 25th, Christmas day.")
    console.log("\x1b[33m%s\x1b[0m", "I have left a present for you last night, it is up to you to find where it is hidden!")
    console.log("\x1b[33m%s\x1b[0m", "With love, Santa! Ho! Ho! Ho!~\n")
    let answer = readline.question("Would you like to go on a present hunt? Yes[Y] or No[N]\n")
    if (answer.toLowerCase() === "yes" || answer.toLowerCase() === "y") {
        console.log("\nGlad to hear! Which room would you like to check out first?")
        enterRoom()
    } else {
        exitGame ()
    }
}

if (ageInput <= 12) {
    console.log ("\nSlowly sitting up, you reach for the glass of water on your nightstand. Instead, you feel something else. A letter with your name on it. \n")
    console.log ("Opening the letter ...\n")
    newGame()
} else {
    console.log("\nSowwie. You're old enough to know Santa is fake, dont pretend like he exists. :)")
    exitGame()
}















