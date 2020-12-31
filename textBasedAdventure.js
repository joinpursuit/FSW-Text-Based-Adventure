const readline = require('readline-sync')

const startGame = () => {
if(readline.keyInYN("Do you want to play a game?")){
    playGame()
}else{
    leaveGame1()
}
};


const leaveGame1 = () => {
    console.log("You were a bad candidate anyway. Goodbye!")
    process.exit()
};

const leaveGame2 = () => {
    console.log('Come back when you\'re 18. See ya later!')
    process.exit()
}

const playGame = () => {
let nameInput = readline.question("What is your name? \n")
console.log(`Hello ${nameInput}! Welcome to my experiment muahaha!.....I mean game. \n`)

let ageInput = readline.question('How old are you?\n')
    if(ageInput < 18){
        console.log("Oh no, you're just a baby! Enjoy your life!")
        leaveGame2()
    }else{
        console.log("Hmmm, you're the perfect candidate for my experiment....I mean game.")
    }
};

startGame()

