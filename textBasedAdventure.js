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
    console.log(`You currently have ${loveCounter}`)
    console.log(`Time counter: ${timeCounter}`)
    scenarioTwo()
    console.log(`You currently have ${loveCounter}`)
    console.log(`Time counter: ${timeCounter}`)
}


// This increments at the end of every scenario
let timeCounter = 0
function timeIncrement() {
    return timeCounter = timeCounter + 1
}


//This either increments or decrements at the end of every scenario
let loveCounter = 0
function loveIncrement(num) {
    return loveCounter = loveCounter + num
}
function loveDecrement () {
    return loveCounter = loveCounter - 1
}


function scenarioOne() {
    console.log("\nThe alarm rings. Oh no! You’re late to class! After scrounging for your belongings, you run for the bus. You’re almost there. You see the bus approach to drop passengers off. You’re seconds away from missing it. The bus stop is right around the corner. If you slow down, you risk missing the bus. If you run past the corner, you don’t know what’s beyond it.")
    let leaveLoop = 0

    while (leaveLoop < 1) {
        let answer = rls.keyInYN("Will you continue to run as you round the corner?")   

        if (answer === true) {
            console.log("You knock over a young lady. You stop to help her to her feet. You notice an angry look on her face. She yells 'Was running for the bus worth it?!' The bus takes off. To your amazement, the scowl on her face reverts. She gazes at your face with a confusing look of captivation. You apologize profusely. While she gives the body language that she still seems to mind, she simultaneously seems enchanted. She asks you what your name is. You’ve got an hour before the next bus shows up so you can make it to your next class. The two of you begin conversing. Her name is Ella.\n");
            loveDecrement();
            leaveLoop++
            }
        else if (answer === false) {
            console.log("You slow down. You notice a young lady reaching the corner just as you round it. You have missed the bus. The young lady has noticed that you’ve slowed down and missed the bus. She thanks you for being careful. She gazes at your face with a look of allure. She doesn’t understand why. She asks you what your name is. You’ve got an hour before the next bus shows up so you can make it to your next class. The two of you begin conversing. Her name is Ella.\n");
            loveIncrement(1);
            leaveLoop++
        }
        else {
            console.log("Invalid input. Please provide a valid response of either y/n")
        }
}
    timeIncrement()		 
}		//end scenarioOne


function scenarioTwo() {
    console.log("You wonder why such an attractive young lady is giving you the time of day. She’s so interesting. She’s nothing like the generic expectations you’d normally have if you saw her but hadn’t spoken to her. You begin thinking of the age-old paradox of the dating game: if you come across as too enthusiastic, you risk repelling the very person you’re attracted to.")

    let options = ["Play aloof. She might like me more.", "Show interest, but don't engage so much that it comes off as desperate.", "Playing it cool is bs. This girl is awesome, and I want to show her how awesome she is."]
    //let leaveLoop = 0

    //while (leaveLoop < 1) {
        let answer = rls.keyInSelect(options, "What's your gameplan? (1-3)") 

        if (answer === 1) {
            console.log("You play it cool. She tries to tell you of all these interesting things, but you seem unresponsive. She feels like she’s talking to herself. She wonders if you’re even interested. Her fervor starts to die down. In a desperate attempt to retain her interest, you start talking about how much you loved that movie by Takashi Miike she mentioned earlier. She asks why you remained quiet as she spoke about it. You lie that you just didn’t feel talking, even though you were dying to nerd out. Sounds like a cheap excuse.")
            loveDecrement()
            //leaveLoop++
        }
        else if (answer === 2) {
            console.log("She goes off on the movies she's into. You reciprocate with a little back and forth, but you aren't letting her know exactly how much you're loving this conversation. You try to hold back a huge smile every time you feel it coming across your face. She seems happy that she met somebody with similar interests, but a part of her feels like she should be more reserved. She wishes you shared the same enthusiasm that she does.")
            loveIncrement(1)
            //leaveLoop++
        }
        //else if (answer === 3) {
        else {
            console.log("A voice inside tells you not to care so much what others think. You let go of your reservations. The more you do this, the more positively she responds. You forget you're talking to somebody you're attracted to. Not doing so left you acting standoffish in the past, mostly as some type of defense mechanism, so you pretended that you didn't care. This is different. You talk about your favorite animes. You share a love of biology and chemistry. You even get into you past experiences, and even touch on traumas. She stops suddenly. It seems like something she's uncomfortable sharing, so you don't press it.")
            loveIncrement(2)
            //leaveLoop++
        }
    
        // else {
        //     console.log("Invalid input. Please choose from numbers 1-3")
        // }
    //}
    timeIncrement()
        
}       //end scenarioTwo








gameStart()