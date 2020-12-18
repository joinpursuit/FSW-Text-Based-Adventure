const readline1 = require('readline-sync')

const beginGame = () => {
    console.log("Welcome to my game.")
    let nameInput = readline1.question("What is your name? \n")
   // console.log(`Hello ${nameInput}!  Welcome to my game.`)
    
    console.log(`Hello ${nameInput}! You're a bank robber and the decisions that you enter in the console determine whether you will go to jail or not, but you don't know which path takes you where and you have chances to escape. Good luck!`)
    if(readline1.keyInYN("Do you want to play?")){
        startGame()
    } else {
        console.log("Maybe next time!")
        console.clear()
        beginGame()
    }
}
beginGame() //This goes at the last line


const restartGame = () => {
    if(readline1.keyInYN("Play again?")){
        beginGame()
    } else {
        console.log("Thanks for playing!")
        console.clear()
        process.exit()
    }
}
