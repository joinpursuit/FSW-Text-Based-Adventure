const readline = require('readline-sync')

let nameInput = readline.question("Enter your name: \n")
let ageInput = readline.question ("Enter your age: \n")


const exitGame = () => {
    console.log(`Goodbye ${nameInput}!`)
    process.exit()
}


const createRandomRoom = () => {
    // let randomRoom = "";
    let whichRoom = readline.question("Please enter a room. \n")
    let area = ["bedroom", "living room", "kitchen", "basement" ]
    for(let i = 0; i <= area.length - 1; i++){
        if (whichRoom === area[0]) {
            console.log("You're already in bedroom.")
            break;
        } else if (whichRoom === area[1]){
            console.log("You walk towards the living room. Infront of the fireplace, there are faint santa boots footprints.")
            break;
        } else if (whichRoom === area[2]){
            console.log("Walking towards the kitchen. The full plate of cookies you left on counter last night is now half emptied.")
            break;
        } else if (whichRoom === area[3]) {
            console.log("You open the door that leds to the basement, it's pitch dark, you reach for the light switch. Nothing but spider webs here.")
            break;
        } else {
            console.log ("Please move toward any of these rooms: bedroom, living room, kitchen, or basement to continue the game.")
        }
    }

}





const gamePlay = () => {    
    console.log(`Hello, good morning ${nameInput}!~`)
    console.log("Today is December 25th, Christmas day.")
    console.log("Santa has left a present for you last night, would you like to join me on a present hunt?")
    let answer = readline.keyInYN("Y or N")
    if (answer) {
        console.log("Glad to hear! Where would you like to go next? bathroom? kitchen? living room or basement?")
        createRandomRoom()
    } else {
        exitGame ()
    }
}

if (ageInput >= 6) {
    gamePlay()
} else {
    console.log("Sowwie. You must be at least 6 to play this game, come back when you're old enough :)")
    exitGame()
}

gamePlay ()



















