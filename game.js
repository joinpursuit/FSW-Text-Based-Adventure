const readline = require('readline-sync')


/** Game open, ask name
 * 
 * Let's play " Choices: ADITL as $(name)!"
 * - take name assign as variable
 * 
 *"It's Wednesday, you get paid on Friday and you only have $13.75 to get you through the week! Let's make something happen ;-)" Are you ready? YN
 * 
 * -Y -> the time is 6:30 am. you have to be at work by 8:30 am and your commute is approximately and hour and seven minutes (1)
 * 
 * - N -> Thank you! Come Again!
 * 
 * 
 * Hit snooze?
 * -Y "Alright! You're more rested! The time is now 6:55 am"
 * 
 * 
 */

let userName = ""
const promptUserForName = () => {
    userName = readline.question("What are you called: ")
    console.log('Hi ' + userName + ',')
    console.log("")
    console.log("It's Wednesday, you get paid on Friday and you only have $13.75 to get you through the week! Let's make something happen ;-)")
    console.log("")
}

let cash = 13.75
let time = 120
let leaveHome = -22
let transport = ""
let userWillPay = ""



const goWork = () => {

    if (transport === 'train') {
        if (userWillPay === 'yes') {
            cash = cash - 2.75
            console.log("You have $" + cash + " remaining")
        } else if (userWillPay === 'no') {
            console.log("Lucky!" + userName + ", you're on your way to work and saved money!")
        }

    } else if (transport === 'bus') {
        if (userWillPay === 'yes') {
            cash = cash - 2.75
            console.log("You have $" + cash + " remaining")
        } else if (userWillPay === 'no') {
            console.log("Lucky!" + userName + ", you're on your way to work and saved money!")
        }
    }
}

const promptUserToPay = () => {
    userWillPay = readline.question("You have $" + cash + " left, do you want to pay?: ")
}

const morningRoutine = () => {
    if (readline.keyInYN("You hear your alarm, do you want to hit snooze?")) {
        let timeSnooze = time - 20
        console.log("Nice! You feel well rested!")
        console.log("You have " + timeSnooze + " minutes left to get to work")
    } else {
        console.log("Up by the first alarm? Awesome!")
        console.log("You have " + time + " left")

    }
}

const selectModeOfTransport = () => {
    console.log("Keep in mind that it costs $2.75 to take the train and $2.00 to take the bus but the bus is much slower")
    transport = readline.question("Do you want to take the train or bus?: ", { limit: ['train', 'bus'] })
    console.log("Okay! let's take the " + transport)
    console.log("")
}


// const actionOnWorkCommute = () => {
//     while (transport === 'train'){
//         if(userWillPay === yes){

//         }
//     }
// }

// const triggerPanhandle = () =>{
//     console.log("A few stops away from your destination you hear 'It's SHOWTIME' and your attention is drawn to the show" )

// }

const leaveGame = () => {
    console.log("Until next time!")
}





const userIsReady = () => {
    const userIsReady = readline.keyInYN("Are you ready?!")
    if (userIsReady) {
        console.log("")
        console.log("Let's begin :)")
        console.log("")
        console.log("Good Morning " + userName + ", the time is 6:30 am and you have to be at work in 120 minutes")
    } else {
        console.log("The day will repeat until you come back and finish it!")
    }
    return userIsReady
}



const playAgain = () => {
    if (readline.keyInYN("Play again? ")) {
        console.clear();
        startGame();
    } else {
        leaveGame();
    }
}





const continueGame = () => {
    morningRoutine();
    selectModeOfTransport();
    promptUserToPay();
    goWork();
    playAgain();
}

const startGame = () => {
    promptUserForName();
    if (userIsReady()) {
        continueGame();
    } else {
        leaveGame();
    }
}

startGame();

