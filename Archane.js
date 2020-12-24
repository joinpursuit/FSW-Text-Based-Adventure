const rls = require('readline-sync')

//Introduction function
const startGame = () => {
    console.log("Welcome to Archane: A Choose Your Own Adventure Game!")
    console.log("This game has been developed by MiKode Tech Inc.")
    if (rls.keyInYN("Would you like to play?")){
        partOne();
    } else {
        endGame();
    }
}

//End game function
const endGame = () => {
    console.log("Terminating game...")
    process.exit();
}

//Part One function
const partOne = () => {
    playerName = rls.question("What is your name? \n")
    console.log(`Hello ${playerName}! Please select your class.`)
    selectClass();
}


//Player is selecting class

const selectClass = () => {
    let classOptions = ["Bard", "Wizard", "Assassin", "Warrior", "Mage"]
    classSelect = rls.keyInSelect(classOptions)
    playerClass = classOptions[classSelect]
    if (playerClass === undefined){
        if (rls.keyInYN("Would you like to cancel selecting a class?")){
            sideEndingOne();
        } else{
            console.log("Please select a class:")
            selectClass();
        }
    } else{
        if (rls.keyInYN(`You have selected the ${playerClass} Class. Is that correct?`)){
            console.log("Great! Here are your stats: \n")
            //playerStats()
    } 
}
}

//Side Ending if Player does not select class.

const sideEndingOne = () => {
    console.log(`\nYou decide not to select a class. The village you and your family reside in has been torn into ruins by the goblins. 
There are no traces of anyone. You live out your days in loneliness until a goblin finds you and kills you.
You should have picked a class, ${playerName}. \n`)
    if (rls.keyInYN("Would you like to restart?")){
        startGame();
    } else {
        endGame();
    }
}

//Rolling a 6-sided die to determine the hit points.
const rollDieSix = () => {
    return Math.floor((Math.random() * 6) + 1)
}

startGame()

// selectClass()