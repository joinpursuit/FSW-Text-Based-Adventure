const rls = require('readline-sync')

const chalk = require('chalk')



function gameStart() {
    let nameInput = rls.question("Enter your name: ")
    
    console.log(`Welcome to my game ${nameInput}! \nI invite you to play this game with the intent of getting the best possible ending. Remember that - much like in real life - your choices matter!`)

    let startPrompt = rls.keyInYN(chalk.blue.bgMagenta.bold("Would you like to play my game? "))
        if (startPrompt) {
            gameLoop()
        }
        else {
            endGame()
        }
}


function endGame() {
    console.log("Come back when you're ready to play. You won't regret it!")
    process.exit()
}


function gameLoop() {

    scenarioOne()
    
}


// This increments at the end of every scenario
let timeCounter = 0
function timeIncrement() {
    return timeCounter = timeCounter + 1
}


//This either increments or decrements at the end of every scenario
let loveCounter = 0
function loveIncrement () {
    loveCounter = loveCounter + 1
    console.log(`You have ${loveCounter} love points`)
    return loveCounter
}
function loveDecrement () {
    loveCounter = loveCounter - 1
    console.log(`You have ${loveCounter} love points`)
}


function scenarioOne() {
    console.log("\nThe alarm rings. Oh no! You’re late to class! After scrounging for your belongings, you run for the bus. You’re almost there. You see the bus approach to drop passengers off. You’re seconds away from missing it. The bus stop is right around the corner. If you slow down, you risk missing the bus. If you run past the corner, you don’t know what’s beyond it.")
    let answer = rls.keyInYN("Will you continue to run as you round the corner?")
    
    if (answer) {
        console.log("You knock over a young lady. You stop to help her to her feet. You notice an angry look on her face. She yells 'Was running for the bus worth it?!' The bus takes off. To your amazement, the scowl on her face reverts. She gazes at your face with a confusing look of captivation. You apologize profusely. While she gives the body language that she still seems to mind, she simultaneously seems enchanted. She asks you what your name is. You’ve got an hour before the next bus shows up so you can make it to your next class. The two of you begin conversing. Her name is Ella.\n")
        loveDecrement()
    }
    else if (answer === false) {
        console.log("You slow down. You notice a young lady reaching the corner just as you round it. You have missed the bus. The young lady has noticed that you’ve slowed down and missed the bus. She thanks you for being careful. She gazes at your face with a look of allure. She doesn’t understand why. She asks you what your name is. You’ve got an hour before the next bus shows up so you can make it to your next class. The two of you begin conversing. Her name is Ella.\n")
        loveIncrement()
    }
    else {
        console.log("invalid input")
        console.log(answer)
    }
            
    timeIncrement()		 
}		//end scenarioOne



gameStart()