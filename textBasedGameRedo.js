const readline = require('readline-sync')

//1. Create a video game

const create = () => {

    let createGame = readline.question("Would you like to create a game? (Y/N) ")

    while(createGame.toUpperCase() !== "Y" && createGame.toUpperCase() !== "N") {
        console.log("Please enter 'Y' or 'N'")
        createGame = readline.question("Would you like to create a game? (Y/N) ")
    }

    switch(createGame.toUpperCase()) {
        case "Y": 
            time()
            break

        case "N":
            console.log("You rejected the task. (Answer yes)")
            create()
    }
}

//2. How will you spend your time

const time = () => {
    decisions = ["Start the day before it's due", "Start now", "Ask someone for help"],
    
    index = readline.keyInSelect(decisions, 'You only have 2 weeks to complete make a video game. What will you do next?')
    console.log("You decided to " + decisions[index])

    if(index === 1) {
        startDayBefore()
    } else if(index === 2) {
        StartNow()
    } else if (index === 3) {
        ask()
    } else {
        endGame()
    }
}
     

startDayBefore = () => {
            
}
        
startNow = () => {
    console.log("You decided to start now.")
    enterPassword()
}
        
ask = () => {
            
}
        
endGame = () => {
    console.log("Game Over")
}
    
        
//3. You need help

const help = () => {

}

//4. Enter your password

const enterPassword = () => {
    
    readline.question('Your password is either 369, 246, or 51015. Guess your password: ', {limit: 51015});
    
    let password = 51015 
        switch (password) {

        case 369:
        console.log("Incorrect Password")
            
        case 246:
        console.log("Incorrect Password")

        case 51015:
        coffee()
        break

        default:
        console.log("Incorrect Password")

    }
}

//5. The coffee made you nervous

const coffee = () => {

}

//6. Finally start
//7. Mom calls you for dinner
//8. You get distracted by the noise outside your window
//9. It starts raining
//10. Do you want to continue working on the game?

let nameInput = readline.question("Enter your name: ")

console.log(`Hello ${nameInput}! Welcome to my game.`)
create()