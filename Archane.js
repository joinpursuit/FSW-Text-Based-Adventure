const rls = require('readline-sync')


//Introduction function
const startGame = () => {
    console.clear()
    console.log("Welcome to Archane: A Choose Your Own Adventure Game!")
    console.log("This game has been developed by Jailene DeVine-Jones.")
    console.log("\nInstructions:\nUse the keyboard to type in your answers. Pretty simple, right?\n")
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
    playerName = rls.question("\nWhat is your name? \n")
    console.log(`\nHello ${playerName}! Please select your class.`)
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
            console.log("\nGreat! Here are your stats: ")
            playerStats()
            logPlayerStats()
        } else {
            console.log("Please reselect a class: ")
            selectClass();
        } 
}
}

//Player Stats randomized using rollDieTen()
const playerStats = () => {
    playerStrength = rollDieTwenty() //Measuring Physical Power
    playerDexterity = rollDieTwenty() // Measuring Agility
    playerConstitution = rollDieTwenty() //Measuring Endurance
    playerIntelligence = rollDieTwenty() //Measuring Reasoning and Memory
    playerWisdom = rollDieTwenty() //Measuring Perception and Insight
    playerCharisma = rollDieTwenty() //Measuring Force of Personality
}

//Logging Player Stats 
const logPlayerStats = () => {
    console.log(`
    Strength: ${playerStrength}
    Dexterity: ${playerDexterity}
    Constitution: ${playerConstitution}
    Intelligence: ${playerIntelligence}
    Wisdom: ${playerWisdom}
    Charisma: ${playerCharisma}\n`)
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

//Rolling a 10-sided die to determing player stats.
const rollDieTwenty = () => {
    return Math.floor((Math.random() * 20) + 1)
}

startGame()

