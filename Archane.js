const rls = require('readline-sync')


//Introduction function
const startGame = () => {
    console.clear();
    console.log("Welcome to Archane: A Choose Your Own Adventure Game!");
    console.log("This game has been developed by Jailene DeVine-Jones.");
    console.log("\nInstructions:\nUse the keyboard to type in your answers. Pretty simple, right?\n");
    if (rls.keyInYN("Would you like to play?")){
        playerNameInput();
    } else {
        endGame();
    }
}

//End game function
const endGame = () => {
    console.log("Terminating game...");
    process.exit();
}

const restartGame = () => {
    if (rls.keyInYN("Would you like to restart?")){
        startGame();
    } else {
        endGame();
    }
}

//Rolling a 4-sided die to determine the hit points.
const rollDieFour = () => {
    return Math.floor((Math.random() * 4) + 1);
}

//Rolling a 6-sided die to detemine the hit points.
const rollDieSix = () => {
    return Math.floor((Math.random() * 6) + 1)
}

//Rolling a 10-sided die to determing player stats.
const rollDieTwenty = () => {
    return Math.floor((Math.random() * 20) + 1);
}

//Part One function
const playerNameInput = () => {
    playerName = rls.question("\nWhat is your name? \n");
    console.log(`\nHello ${playerName}! Please select your class.`);
    selectClass();
}

//Player is selecting class
const selectClass = () => {
    let classOptions = ["Bard", "Wizard", "Assassin", "Warrior", "Mage"]
    classSelect = rls.keyInSelect(classOptions);
    playerClass = classOptions[classSelect];
    if (playerClass === undefined){
        if (rls.keyInYN("Would you like to cancel selecting a class?")){
            sideEndingOne();
        } else{
            console.log("Please select a class:")
            selectClass();
        }
    } else{
        if (rls.keyInYN(`You have selected to become a(n) ${playerClass}. Is that correct?`)){
            console.log("\nGreat! Here are your stats: ");
            playerStats();
            logPlayerStats();
            partOne();
        } else {
            console.log("Please reselect a class: ");
            selectClass();
        } 
    }
}

//Player Stats randomized using rollDieTwenty()
const playerStats = () => {
    playerStrength = rollDieTwenty()  //Measuring Physical Power
    playerDexterity = rollDieTwenty()  // Measuring Agility
    playerConstitution = rollDieTwenty()  //Measuring Endurance
    playerIntelligence = rollDieTwenty()  //Measuring Reasoning and Memory
    playerWisdom = rollDieTwenty()  //Measuring Perception and Insight
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

//Strength Stat Modifier
const playerStrengthStatModifier = (playerStrength) => {
    //let playerStrength = playerStatArray[0]
    if (playerStrength <= 3){
        statModifier = -5
    } else if (playerStrength <= 6){
        statModifier = -3
    } else if (playerStrength <= 9){
        statModifier = -1
    } else if (playerStrength <= 12){
        statModifier = 0
    } else if (playerStrength <= 15){
        statModifier = 1
    } else if (playerStrength <= 18){
        statModifier = 3
    } else if (playerStrength <= 20){
        statModifier = 5
    }
    return statModifier
}

//Dexterity Stat Modifier
const playerDexterityStatModifier = (playerDexterity) => {
    //let playerDexterity = playerStatArray[1]
    if (playerDexterity <= 3){
        statModifier = -5
    } else if (playerDexterity <= 6){
        statModifier = -3
    } else if (playerDexterity <= 9){
        statModifier = -1
    } else if (playerDexterity <= 12){
        statModifier = 0
    } else if (playerDexterity <= 15){
        statModifier = 1
    } else if (playerDexterity <= 18){
        statModifier = 3
    } else if (playerDexterity <= 20){
        statModifier = 5
    }
    return statModifier
}

//Constitution Stat Modifier
const playerConstitutionStatModifier = (playerConstitution) => {
    //let playerConstitution = playerStatArray[2]
    if (playerConstitution <= 3){
        statModifier = -5
    } else if (playerConstitution <= 6){
        statModifier = -3
    } else if (playerConstitution <= 9){
        statModifier = -1
    } else if (playerConstitution <= 12){
        statModifier = 0
    } else if (playerConstitution <= 15){
        statModifier = 1
    } else if (playerConstitution <= 18){
        statModifier = 3
    } else if (playerConstitution<= 20){
        statModifier = 5
    }
    return statModifier
}

//Intelligence Stat Modifier
const playerIntelligenceStatModifier = (playerIntelligence) => {
    //let playerIntelligence = playerStatArray[3]
    if (playerIntelligence  <= 3){
        statModifier = -5
    } else if (playerIntelligence <= 6){
        statModifier = -3
    } else if (playerIntelligence <= 9){
        statModifier = -1
    } else if (playerIntelligence <= 12){
        statModifier = 0
    } else if (playerIntelligence <= 15){
        statModifier = 1
    } else if (playerIntelligence <= 18){
        statModifier = 3
    } else if (playerIntelligence <= 20){
        statModifier = 5
    }
    return statModifier
}

//Wisdom Stat Modifier
const playerWisdomStatModifier = (playerWisdom) => {
    //let playerWisdom = playerStatArray[4]
    if (playerWisdom  <= 3){
        statModifier = -5
    } else if (playerWisdom <= 6){
        statModifier = -3
    } else if (playerWisdom <= 9){
        statModifier = -1
    } else if (playerWisdom <= 12){
        statModifier = 0
    } else if (playerWisdom <= 15){
        statModifier = 1
    } else if (playerWisdom <= 18){
        statModifier = 3
    } else if (playerWisdom <= 20){
        statModifier = 5
    }
    return statModifier
}

//Charisma Stat Modifier
const playerCharismaStatModifier = (playerCharisma) => {
    //let playerCharisma = playerStatArray[5]
    if (playerCharisma <= 3){
        statModifier = -5
    } else if (playerCharisma <= 6){
        statModifier = -3
    } else if (playerCharisma <= 9){
        statModifier = -1
    } else if (playerCharisma <= 12){
        statModifier = 0
    } else if (playerCharisma <= 15){
        statModifier = 1
    } else if (playerCharisma <= 18){
        statModifier = 3
    } else if (playerCharisma <= 20){
        statModifier = 5
    }
    return statModifier
}

//Side Ending if Player does not select class.
const sideEndingOne = () => {
    console.log(`\nYou decide not to select a class. The village you and your family reside in has been torn into ruins by the goblins. 
There are no traces of anyone. You live out your days in loneliness until a goblin finds you and kills you.
You should have picked a class, ${playerName}. \n`)
    restartGame();
}

const partOne = () => {
    console.log(`Your name is ${playerName} and you are a(n) ${playerClass}.
You currently reside in the village of Archane at the Grande Inn, a hotspot for adventurers. 
After signing up with the Adventurers' Guild, you receive your first mission: 
Retreive the Scroll of Resurrection from the Dragon Prince of Alistair, Ember Demir.
You are detemined to complete this mission.`)   

}




startGame()

//Calling out Stat Modifiers to be used within code.
playerStrengthModifier = playerStrengthStatModifier(playerStrength)
playerDexterityModifier = playerDexterityStatModifier(playerDexterity)
playerConstitutionModifier = playerConstitutionStatModifier(playerConstitution)
playerIntelligenceModifier = playerIntelligenceStatModifier(playerIntelligence)
playerWisdomModifier = playerWisdomStatModifier(playerWisdom)
playerCharismaModifier = playerCharismaStatModifier(playerCharisma)
