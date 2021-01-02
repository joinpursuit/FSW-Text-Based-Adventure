const rls = require('readline-sync')

let playerInventory = []

//Introduction function
const startGame = () => {
    console.clear();
    console.log("Welcome to Archane: A D&D Inspired Adventure Game!");
    console.log("This game has been developed by Jailene DeVine-Jones.");
    console.log("\nInstructions:\nUse the keyboard to type in/select your answers. Pretty simple, right?\n");
    if (rls.keyInYN("Would you like to play?")){
        playerNameInput();
    } else {
        endGame();
    }
}

//End game function
const endGame = () => {
    console.log("The fate of Archane continues to rest on your shoulders...");
    process.exit();
}

//Restart game function
const restartGame = () => {
    if (rls.keyInYNStrict("Would you like to restart?")){
        startGame();
    } else {
        endGame();
    }
}

//Rolling a 4-sided die to determine the hit points
const rollDieFour = () => {
    return Math.floor((Math.random() * 4) + 1);
}

//Rolling a 6-sided die to detemine the hit points
const rollDieSix = () => {
    return Math.floor((Math.random() * 6) + 1)
}

//Rolling a 10-sided die to determing player stats
const rollDieTwenty = () => {
    return Math.floor((Math.random() * 20) + 1);
}

//Player Name function
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
        if (rls.keyInYNStrict("Would you like to cancel selecting a class?")){
            sideEndingOne();
        } else{
            console.log("Please select a class:")
            selectClass();
        }
    } else{
        if (rls.keyInYN(`You have selected to become a(n) ${playerClass}. Is that correct?`)){
            console.log(`You start off with a weapon and 100 Gold.`)
            console.log(`\nHere is your inventory: `)
            playerWeapon(playerClass);
            logplayerInventory();
            console.log("\nHere are your stats: ");
            playerStats();
            logPlayerStats();
            console.log(`You can see your stats/inventory anytime by typing "stats" or "inventory" at any input opportunity (except for Y/N inputs or number inputs).\n`)
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

//Player Weapon depending on Player Class
const playerWeapon = (playerClass) => {
    if (playerClass === "Bard"){
        playerClassWeapon = "Whip"
        playerGold = 100
        playerInventory.push(playerClassWeapon, playerGold)
        return playerClassWeapon
    } else if (playerClass === "Wizard"){
        playerClassWeapon = "Quarterstaff"
        playerGold = 100
        playerInventory.push(playerClassWeapon, playerGold)
        return playerClassWeapon
    } else if (playerClass === "Assassin"){
        playerClassWeapon = "Daggers"
        playerGold = 100
        playerInventory.push(playerClassWeapon, playerGold)
        return playerClassWeapon
    } else if (playerClass === "Warrior"){
        playerClassWeapon = "Greatsword"
        playerGold = 100
        playerInventory.push(playerClassWeapon, playerGold)
        return playerClassWeapon
    } else if (playerClass === "Mage"){
        playerClassWeapon = "Bracers"
        playerGold = 100
        playerInventory.push(playerClassWeapon, playerGold)
        return playerClassWeapon
    }
}

//Logging Player Inventory
const logplayerInventory = () => {
    console.log(playerInventory)
}

//Side Ending if Player does not select class
const sideEndingOne = () => {
    console.log(`\nYou decide not to select a class. The village you and your family reside in has been torn into ruins by the goblins. 
There are no traces of anyone. You live out your days in loneliness until a goblin finds you and kills you.
You should have picked a class, ${playerName}. \n`)
    restartGame();
}

//Actual part one of the game
const partOne = () => {
    console.log(`Your name is ${playerName} and you are a(n) ${playerClass}.
You are a human currently residing in the village of Archane at the Grande Inn, a hotspot for adventurers. 
After signing up with the Adventurers' Guild, you receive your first quest: 
Retreive the Scroll of Resurrection from the Dragon Prince of Alistair, Ember Demir.
You are determined to complete this quest.

You exit the Grande Inn and make your way to your destination.
You enter the Archanian Forest. You are met with a fork in the road.\n`)
    forkInRoad();
}

//Spooky Fork In Road Go Brrrrr
const forkInRoad = () => {
    rightOrLeft = rls.question("Do you go right or left? \n")
    rightOrLeft = rightOrLeft.trim().toLowerCase()
    if (rightOrLeft === "right"){
        rightPath();
    } else if (rightOrLeft === "left"){
        leftPath();
    } else if (rightOrLeft === "stats"){
        logPlayerStats();
        forkInRoad();
    } else if (rightOrLeft === "inventory"){
        logplayerInventory();
        forkInRoad();
    } else {
        forkInRoad();
    }

}

//For the right-handed folks
const rightPath = () => {
    console.log(`\nYou decide to take the path to the right.
Upon walking down the path, you encounter a goblin!
The goblin is about 3 feet in height, carrying a wooden axe!\n`)
    rollforInitiative();
}

//For the left-handed folks
const leftPath = () => {
    console.log(`\nYou decide to take the path to the left.
Upon walking down the path, you encounter two mysterious potion bottles.
One potion bottle has a green liquid that shimmers in the sunlight that peeks between the branches of the trees.
The other potion bottle has a blue liquid. It appears to have glitter.\n`)
    potionChoice();
}

//Choosing a potion
const potionChoice = () => {
    potion = rls.question(`Do you drink the green potion, the blue potion, or do you decide to not drink any at all? \n`)
    potion = potion.trim().toLowerCase()
    if (potion === "blue" || potion === "blue potion"){
        console.log(`\nYou decide to drink the blue potion. 
Your insides start burning as you ingest the blue liquid.
Your blood pressure increases and you start to hear your heartbeat.
Your vision becomes blurry, eventually fading to black.
You collapse in the middle of the path as the potion circulates through your body, killing all of your organs.
You lay there lifeless as the wildlife eventually feed on your body.
You died.\n`)
        restartGame();
    } else if (potion === "green" || potion === "green potion"){
        playerStrength += 5
        playerIntelligence += 3
        playerCharisma += 5
        console.log(`\nYou decide to drink the green potion.
Your body feels strong and healthy. (+5 Strength [Strength is now: ${playerStrength}])
Your mind feels clear. (+3 Intelligence [Intelligence is now: ${playerIntelligence}])
You feel sexier. (+5 Charisma [Charisma is now: ${playerCharisma}])\n`)
        dragonCastle();
    } else if (potion === "none" || potion === "no" || potion === "do not drink" || potion === "do not drink any at all"){
        console.log(`\nYou decide not to drink any potions.\n`)
        dragonCastle();
    } else if (potion === "stats"){
        logPlayerStats();
        potionChoice();
    } else if (potion === "inventory"){
        logplayerInventory(playerInventory);
        potionChoice();
    } else {
        potionChoice();
    }
}

//Rolling to see who gets the first hit
const rollforInitiative = () => {
    console.log(`Roll for initiative!`)
    playerRoll = rollDieTwenty() + playerDexterityStatModifier(playerDexterity)
    goblinRoll = rollDieTwenty()
    if (playerRoll > goblinRoll){
        console.log(`\nYou rolled a ${playerRoll}! (Dexterity Modifier of ${playerDexterityStatModifier(playerDexterity)})`)
        console.log(`The goblin rolled a ${goblinRoll}!`)
        console.log(`You get the first hit!\n`)
        goblinBattlePlayerAdvantage();
    } else if (goblinRoll > playerRoll){
        console.log(`\nYou rolled a ${playerRoll}! (Dexterity Modifier of ${playerDexterityStatModifier(playerDexterity)})`)
        console.log(`The goblin rolled a ${goblinRoll}!`)
        console.log(`The goblin gets the first hit!`)
        goblinBattleGoblinAdvantage();
    }
}

//Goblin Battle. Player gets first hit
const goblinBattlePlayerAdvantage = () => {
    let playerHealth = 20;
    let goblinHealth = 10;
    let playerOptions = ["Attack", "Surrender"]
    let playerSelect = rls.keyInSelect(playerOptions)
    playerOptionSelect = playerOptions[playerSelect]
    if (playerOptionSelect === "Attack"){
        while (playerHealth > 0 && goblinHealth > 0){
            console.log(`Your health: ${playerHealth}
Goblin's Health: ${goblinHealth}\n`)
            if (playerStrength <= 3 ){
                playerHitPoints = rollDieSix() + playerStrengthStatModifier(playerStrength)
            } else {
                playerHitPoints = rollDieFour() + playerStrengthStatModifier(playerStrength)
            }
            console.log(`\nYou attack the goblin! The goblin gets ${playerHitPoints} damage! (Strength Modifier of ${playerStrengthStatModifier(playerStrength)})`)
            if (playerHitPoints > 0){
                goblinHealth -= playerHitPoints
            } 
            goblinHitPoints = rollDieSix()
            console.log(`The Goblin attacks you! You get ${goblinHitPoints} damage!\n`)
            playerHealth -= goblinHitPoints
            if (goblinHealth <= 0){
                console.log(`You defeated the goblin! 
The goblin drops a pouch containing 1000 gold.`)
                lootGoblin();
            } else if (playerHealth <= 0){
                playerInventory.pop()
                console.log(`You were defeated by the goblin!
The goblin knocks you down and takes your Gold!\n`)
                dragonCastle();
            }  
        } 
    } else if (playerOptionSelect === "Surrender"){
        playerInventory.pop()
        console.log(`\nYou surrender to the goblin!
The goblin loots you and runs off with your gold!`)
        dragonCastle();
    } else if (playerOptionSelect === undefined){
        goblinBattlePlayerAdvantage();
    }
    
}

//Goblin Battle. Goblin gets first hit
const goblinBattleGoblinAdvantage = () => {
    let playerHealth = 20;
    let goblinHealth = 10;
    let playerOptions = ["Attack"]
    goblinHitPoints = rollDieSix()
    console.log(`The Goblin attacks you! You get ${goblinHitPoints} damage!\n`)
    playerHealth -= goblinHitPoints
    let playerSelect = rls.keyInSelect(playerOptions)
    playerOptionSelect = playerOptions[playerSelect]
    if (playerOptionSelect === "Attack"){
            while (playerHealth > 0 && goblinHealth > 0){
                console.log(`Your health: ${playerHealth}
Goblin's Health: ${goblinHealth}\n`)
                if (playerStrength <= 3 ){
                    playerHitPoints = rollDieSix() + playerStrengthStatModifier(playerStrength)
                } else {
                    playerHitPoints = rollDieFour() + playerStrengthStatModifier(playerStrength)
                }
                console.log(`\nYou attack the goblin! The goblin gets ${playerHitPoints} damage! (Strength Modifier of ${playerStrengthStatModifier(playerStrength)})`)
                goblinHitPoints = rollDieSix()
                console.log(`The Goblin attacks you! You get ${goblinHitPoints} damage!\n`)
                playerHealth -= goblinHitPoints
                if (playerHitPoints > 0){
                    goblinHealth -= playerHitPoints
                } 
                if (goblinHealth <= 0){
                    console.log(`You defeated the goblin! 
The goblin drops a pouch containing 1000 gold. The goblin also drops `)
                    lootGoblin();
                } else if (playerHealth <= 0){
                    playerInventory.pop()
                    console.log(`\nYou were defeated by the goblin!
The goblin knocks you down and takes your Gold!`)
                    dragonCastle();                
            }  
        }
    } else if (playerOptionSelect === "Surrender"){
        playerInventory.pop()
        console.log(`You surrender to the goblin!
The goblin loots you and runs off with your gold!`)
        dragonCastle();
    } else if (playerOptionSelect === undefined){
        goblinBattleGoblinAdvantage();
    }
    
}

//Goblin pouch go kaching kaching
const lootGoblin = () => {
    if (rls.keyInYN("Do you take the pouch of 1000 gold?")){
        console.log(`You decide to take the pouch, storing it in your inventory.\n`)
        playerInventory[1] += 1000
        dragonCastle();
    } else {
        console.log(`You decide not to take the pouch.\n`)
        dragonCastle();
    }
}

const dragonCastle = () => {
    console.log(`\nYou make your way to down to the rest of the path.
Further down you see a large, black gated entrance with a Dragonborn guard standing in front.
The guard is wielding a large spear. By their feet seems to be blood.
It seems that someone has already met their demise.\n`)
    console.log(`Three options come to mind:
You can either scope out the area to see if there are hidden entrances you can take to get into the castle.
You can attack the guard headon, or you can persuade the guard to grant you entry.\n`)
    entranceOption();
}


const entranceOption = () => {
    let entranceChoices = ["Scope", "Attack", "Persuade"]
    console.log(`Which would you like to choose?\n`)
    playerEntranceChoices = rls.keyInSelect(entranceChoices)
    playerEntranceChoice = entranceChoices[playerEntranceChoices]
    if (playerEntranceChoice === "Scope"){
        console.log(`\nYou decide to scope the area. Roll for Perception!`)
        playerPerception = rollDieTwenty() + playerWisdomStatModifier(playerWisdom)
        console.log(`You roll a ${playerPerception}! (Wisdom modifier of ${playerWisdomStatModifier(playerWisdom)})`)
        if (playerPerception <=10){
            console.log(`You scope out the area. However, you are unable to find a hidden entrance.`)
            entranceChoices.shift()
            console.log(`You now have two choices:`)
            playerEntranceChoices = rls.keyInSelect(entranceChoices)
            playerEntranceChoiceNoScope = entranceChoices[playerEntranceChoices]
            if (playerEntranceChoiceNoScope === "Attack"){
                console.log(`\nYou decide to attack the guard! Roll for Initiative!`)
                rollforInitiativeGuardBattle();
            } else if (playerEntranceChoiceNoScope === "Persuade"){
                console.log(`\nYou decide to persuade the guard. Roll for Persuasion!`)
                playerPersuasion = rollDieTwenty() + playerCharismaStatModifier(playerCharisma)
                console.log(`You roll a ${playerPersuasion}! (Charisma modifier of ${playerCharismaStatModifier(playerCharisma)})`)
                if (playerPersuasion <= 10){
                    console.log(`You try to persuade the guard but unfortunately they do not believe one word you say.
They immediately knock you unconscious. 
While you are unconscious, the guard brings you straight to the Dragon Prince himself.`)
                    dragonPrince();
                } else {
                    playerCharisma += 10
                    console.log(`You were able to persuade the guard to let you in.
You feel more confident in your ability to persuade. (+10 Charisma [Charisma is now: ${playerCharisma}]) `)
                    insideDragonCastle();
                }
            }
        } else {
            playerWisdom += 10
            console.log(`You scope out the area, hidden from the Dragonborn guard.
You eventually find part of the gate that has been stretched wide that an average human can fit through.
You slip through the gate and find a side door to the castle. Surprisingly the door was unlocked.
You make your way into the castle.
You feel more confident in your ability to scope. (+10 Wisdom [Wisdom is now: ${playerWisdom}])`)
            insideDragonCastle();
        }
    } else if (playerEntranceChoice === "Attack"){
        console.log(`\nYou decide to attack the guard! Roll for Initiative!`)
        rollforInitiativeGuardBattle();
    } else if (playerEntranceChoice === "Persuade"){
        console.log(`\nYou decide to persuade the guard. Roll for Persuasion!`)
        playerPersuasion = rollDieTwenty() + playerCharismaStatModifier(playerCharisma)
        console.log(`You roll a ${playerPersuasion}! (Charisma modifier of ${playerCharismaStatModifier(playerCharisma)})`)
        if (playerPersuasion <= 10){
            console.log(`You try to persuade the guard but unfortunately they do not believe one word you say.
They immediately knock you unconscious. 
While you are unconscious, the guard brings you straight to the Dragon Prince himself.`)
            dragonPrince();
        } else {
           playerCharisma += 10
           console.log(`You were able to persuade the guard to let you in.
You feel more confident in your ability to persuade. (+10 Charisma [Charisma is now: ${playerCharisma}]) `)
           insideDragonCastle();
        }

    } else if (playerEntranceChoice === undefined){
        entranceOption();
    }

}

const rollforInitiativeGuardBattle = () => {
    playerRollGuardBattle = rollDieTwenty() + playerDexterityStatModifier(playerDexterity)
    dragonGuardRoll = rollDieTwenty()
    console.log(`\nYou rolled a ${playerRollGuardBattle}! (Dexterity modifier of ${playerDexterityStatModifier(playerDexterity)})`)
    console.log(`The guard rolled a ${dragonGuardRoll}!`)
    if (playerRollGuardBattle > dragonGuardRoll){
        console.log(`You get the first hit!`)
        dragonGuardBattlePlayerAdvantage();
    } else if (dragonGuardRoll > playerRollGuardBattle){
        console.log(`The guard gets the first hit!`)
        dragonGuardBattleGuardAdvantage();

    }
}

const dragonGuardBattlePlayerAdvantage = () => {
    let playerHealth = 20;
    let guardHealth = 10;
    let playerOptions = ["Attack", "Surrender"]
    let playerSelect = rls.keyInSelect(playerOptions)
    playerOptionSelect = playerOptions[playerSelect]
    if (playerOptionSelect === "Attack"){
            while (playerHealth > 0 && guardHealth > 0){
                console.log(`Your health: ${playerHealth}
                Guard's Health: ${guardHealth}\n`)
                if (playerStrength <= 3 ){
                    playerHitPoints = rollDieSix() + playerStrengthStatModifier(playerStrength)
                } else {
                    playerHitPoints = rollDieFour() + playerStrengthStatModifier(playerStrength)
                }
                console.log(`\nYou attack the guard! The guard gets ${playerHitPoints} damage! (Strength Modifier of ${playerStrengthStatModifier(playerStrength)})`)
                if (playerHitPoints > 0){
                    guardHealth -= playerHitPoints
                } 
                guardHitPoints = rollDieSix()
                console.log(`The guard attacks you! You get ${guardHitPoints} damage!\n`)
                playerHealth -= guardHitPoints
                if (guardHealth <= 0){
                    playerStrength += 10
                    console.log(`You defeated the guard! 
The guard drops to the ground and lays there unconscious.
You make your way through the gate inside the Dragon Prince's Castle.`)
                    insideDragonCastle();
            } else if (playerHealth <= 0){
                console.log(`You were defeated by the guard!
They immediately knock you unconscious. 
While you are unconscious, the guard brings you straight to into the Dragon Castle..`)
                insideDragonCastleTied(); 
            }  
        }
    } else if (playerOptionSelect === "Surrender"){
        console.log(`You surrender to the guard!
They immediately knock you unconscious. 
While you are unconscious, the guard brings you straight into the Dragon Castle.`)
        insideDragonCastleTied();
        }
    
}

const dragonGuardBattleGuardAdvantage = () => {
    let playerHealth = 20;
    let guardHealth = 10;
    let playerOptions = ["Attack", "Surrender"]
    guardHitPoints = rollDieSix()
    console.log(`The guard attacks you! You get ${guardHitPoints} damage!\n`)
    playerHealth -= guardHitPoints
    let playerSelect = rls.keyInSelect(playerOptions)
    playerOptionSelect = playerOptions[playerSelect]
    if (playerOptionSelect === "Attack"){
            while (playerHealth > 0 && guardHealth > 0){
                console.log(`Your health: ${playerHealth}
                Guard's Health: ${guardHealth}\n`)
                if (playerStrength <= 3 ){
                    playerHitPoints = rollDieSix() + playerStrengthStatModifier(playerStrength)
                } else {
                    playerHitPoints = rollDieFour() + playerStrengthStatModifier(playerStrength)
                }
                console.log(`\nYou attack the guard! The guard gets ${playerHitPoints} damage! (Strength Modifier of ${playerStrengthStatModifier(playerStrength)})`)
                if (playerHitPoints > 0){
                    guardHealth -= playerHitPoints
                } 
                guardHitPoints = rollDieSix()
                console.log(`The guard attacks you! You get ${guardHitPoints} damage!\n`)
                playerHealth -= guardHitPoints
                if (guardHealth <= 0){
                    playerStrength += 10
                    console.log(`\nYou defeated the guard! 
    The guard drops to the ground and lays there unconscious.
    You make your way through the gate inside the Dragon Prince's Castle.`)
                    insideDragonCastle();
            } else if (playerHealth <= 0){
                console.log(`\nYou were defeated by the guard!
They immediately knock you unconscious. 
While you are unconscious, the guard brings you straight into the Dragon Castle.`)
                insideDragonCastleTied(); 
            }  
        }
    } else if (playerOptionSelect === "Surrender"){
        console.log(`\nYou surrender to the guard!
They immediately knock you unconscious. 
While you are unconscious, the guard brings you straight into the Dragon Castle.`)
        insideDragonCastleTied();
    }

}

const insideDragonCastle = () => {
    console.log(`\nYou make your way into the castle.
After exploring the castle undetected, you reach a hallway with three doors.`)
    threeDoors();
}

const insideDragonCastleTied = () => {
    console.log(`\nYou wake up and find yourself tied up to a chair by rope.
Your head continues to pound as you fix your bearings.
You notice that you do not have your weapon on you.`)
    console.log(`You can either try to release yourself from the ropes
Or you can loosen the ropes to give the impression that you are bound even though you're able to slide out.`)
    playerChairChoice();

}

//Fun fact: The Dragonborn do not believe in locked doors.
const playerChairChoice = () => {
    playerChairChoices = rls.question("\nDo you try to release yourself fully or give an impression? (Release/Impression): ")
    playerChairChoices.trim().toLowerCase()
    if (playerChairChoices === "release"){
        console.log(`\nYou decide to release yourself from the chair. Dexterity Check!`)
        playerDexterityRoll = rollDieTwenty() + playerDexterityStatModifier(playerDexterity)
        console.log(`You roll a ${playerDexterityRoll} (Dexterity Modifier of ${playerDexterityStatModifier(playerDexterity)})`)
        if (playerDexterityRoll >= 11){
            console.log(`\nYou release yourself from the chair. You make your way to the door.
Surprisingly, the door is unlocked. You make your way out of the room into the hallway.`)
            console.log(`Roll for Perception!`)
            playerPerception = rollDieTwenty() + playerWisdomStatModifier(playerWisdom)
            console.log(`You roll a ${playerPerception}! (Wisdom Modifier of ${playerWisdomStatModifier(playerWisdom)})`)
            if (playerPerception >= 11 ){
                console.log(`\nYou were able to scope the area and find three doors down the hallway.`)
                threeDoors();
            } else {
                console.log(`\nYou tried scoping the area, however, you were unable to find anything.
In this case, you decided to go with your second plan. Pretend that you are bound until the guard finds you.`)
                console.log(`Roll for Deception!`)
                playerDeceptionRoll = rollDieTwenty() + playerCharismaStatModifier(playerCharisma)
                console.log(`You roll a ${playerDeceptionRoll} (Charisma Modifier of ${playerCharismaStatModifier(playerCharisma)})`)
                if (playerDeceptionRoll >= 11) {
                    console.log(`\nYou decide to go back to the room you were held in.
You then wrap the rope back around you, but not tight so that you have room to escape if needed.
You wait until the guard comes.`)
                    guardAppearance();
                } else {
                    console.log(`\nYou decide to go back to the room you were held in.
You then wrap the rope back around you, but it is obvious that the guard isn't going to believe you.`)
                    guardAppearance();
                }
            }
        } else {
            console.log(`\nYou try to free yourself from the rope.
You end up giving yourself a cramp in your arm.
You also unintentonally made the rope tighter around you.`)
            guardAppearance();
        }
    } else if (playerChairChoices === "impression"){
        console.log(`\nRoll for Deception!`)
        playerDeceptionRoll = rollDieTwenty() + playerCharismaStatModifier(playerCharisma)
        console.log(`You roll a ${playerDeceptionRoll} (Charisma Modifier of ${playerCharismaStatModifier(playerCharisma)})`)
        if (playerDeceptionRoll >= 11) {
            console.log(`\nYou were able to loosen up the rope around you, giving the impression that you are still tied up but are able to slip out at any time.`)
            guardAppearance();
        } else {
            console.log(`\nYou try to free yourself from the rope.
You end up giving yourself a cramp in your arm.
You also unintentonally made the rope tighter around you.`)
            guardAppearance();
        }
    } else if (playerChairChoices === "stats") {
        logPlayerStats();
        playerChairChoice();
    } else if (playerChairChoice === "inventory"){
        logplayerInventory();
        playerChairChoice();
    } else{
        playerChairChoice();
    }
}

const threeDoors = () => {
    doors = ["First Door", "Second Door", "Third Door"]
    console.log(`Which door do you go through?`)
    doorChoice = rls.keyInSelect(doors)
    playerDoorChoice = doors[doorChoice]
    if (playerDoorChoice = "First Door"){
        console.log(`\nYou decided to go through the first door.
When you walk in, you see an abundance of books. It's a library.
On your immediate right there is a table with four books on top. The titles read:
The Curse of The Magi (Vol. 2)
Magic for Beginners (Vol. 8)
The Best Cookbook for Dragonborns (Vol. 5)
How To Train Your Pet Human (Vol. 3)

You take a look around and realize there is nothing really useful here.
You go back into the hallway.`)
        doors.shift()
        console.log("\nWhich door do you choose?")
        doorChoice = rls.keyInSelect(doors)
        playerDoorChoice = doors[doorChoice]
        if (playerDoorChoice === "Second Door"){
            console.log(`\nYou decided to go through the second door.
When you walk in, you are greeted with the smell of delicious food... as well as a multitude of guards.
They ended up killing you.
You died. `)
            restartGame();
        } else if (playerDoorChoice === "Third Door"){
            let numberOfTries = 3
            if (playerInventory.includes(playerWeapon(playerClass))){
                console.log(`\nYou decided to go through the third door.
You see a chest that requires a code. 
You try at opening the chest. (Hint: Pay attention to the volume numbers.)`)
                for (i = 0; i < numberOfTries; i++ ){
                    console.log()
                }
            }
        }
    } else if (playerDoorChoice === "Second Door") {
        console.log(`\nYou decided to go through the second door.
When you walk in, you are greeted with the smell of delicious food... as well as a multitude of guards.
They ended up killing you.
You died. `)
        restartGame();
    } else if (playerDoorChoice === "Third Door"){

    }
    
}

const guardAppearance = () => {

}

startGame()