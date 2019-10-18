const readline = require('readline-sync')

let nameInput = readline.question("Enter your name: ")

console.log(`Hello ${nameInput}!  Welcome to my game, Survive.`)


const play = () => {
    let userInput;
    while (userInput !== "yes") {
        userInput = readline.question("Would you like to play? yes or no?")
        if (userInput === "no") {
            console.log("Come on, it's just one game...")
            userInput = readline.question("Are you going to play? okay or no?")
            break;
        } else {
            console.log("Glad I could convince you.")
        }
    }
}
play()

readline.question("This is a game of survival where your choices will determine your future. Are you ready to fight for your life? yes or no?")
