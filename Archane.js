const rls = require('readline-sync')
const chalk = require('chalk')

let playerInventory = []

//Introduction function
const startGame = () => {
    console.clear();
    console.log("Welcome to Archane©: A D&D Inspired Adventure Game! ");
    console.log("This game has been developed by Jailene DeVine-Jones.");
    console.log("All rights to characters, places, and story are reserved by Jailene DeVine-Jones")
    console.log("\nInstructions:\nUse the keyboard to type in/select your answers. Pretty simple, right?\n");
    if (rls.keyInYNStrict("Would you like to play?")) {
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
    if (rls.keyInYNStrict("Would you like to restart?")) {
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
    console.log(chalk`\nHello {rgb(153,50,204) ${playerName}}! Please select your class.`);
    selectClass();
}

//Player is selecting class
const selectClass = () => {
    let classOptions = [chalk.yellow("Bard"), chalk.blue("Wizard"), chalk.red("Assassin"), chalk.magenta("Warrior"), chalk.cyan("Mage")]
    classSelect = rls.keyInSelect(classOptions);
    playerClass = classOptions[classSelect];
    if (playerClass === undefined) {
        if (rls.keyInYNStrict("Would you like to cancel selecting a class?")) {
            sideEndingOne();
        } else {
            console.log("Please select a class:")
            selectClass();
        }
    } else {
        if (rls.keyInYN(`You have selected to become a(n) ${playerClass}. Is that correct?`)) {
            console.log(`You start off with a weapon and 100 Gold.`)
            console.log(`\nHere is your inventory: `)
            playerWeapon(playerClass);
            logplayerInventory();
            console.log("\nHere are your stats: ");
            playerStats();
            logPlayerStats();
            console.log(chalk`{bold.cyan You can see your stats/inventory anytime by typing "stats" or "inventory" at any input opportunity (except for Y/N inputs or number inputs).}\n`)
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
    console.log(chalk`
    {red Strength: }${playerStrength}
    {blue Dexterity: }${playerDexterity}
    {green Constitution: }${playerConstitution}
    {yellow Intelligence: }${playerIntelligence}
    {cyan Wisdom: }${playerWisdom}
    {magenta Charisma: }${playerCharisma}\n`)
}

//Strength Stat Modifier
const playerStrengthStatModifier = (playerStrength) => {
    //let playerStrength = playerStatArray[0]
    if (playerStrength <= 3) {
        statModifier = -5
    } else if (playerStrength <= 6) {
        statModifier = -3
    } else if (playerStrength <= 9) {
        statModifier = -1
    } else if (playerStrength <= 12) {
        statModifier = 0
    } else if (playerStrength <= 15) {
        statModifier = 1
    } else if (playerStrength <= 18) {
        statModifier = 3
    } else if (playerStrength <= 20) {
        statModifier = 5
    }
    return statModifier
}

//Dexterity Stat Modifier
const playerDexterityStatModifier = (playerDexterity) => {
    //let playerDexterity = playerStatArray[1]
    if (playerDexterity <= 3) {
        statModifier = -5
    } else if (playerDexterity <= 6) {
        statModifier = -3
    } else if (playerDexterity <= 9) {
        statModifier = -1
    } else if (playerDexterity <= 12) {
        statModifier = 0
    } else if (playerDexterity <= 15) {
        statModifier = 1
    } else if (playerDexterity <= 18) {
        statModifier = 3
    } else if (playerDexterity <= 20) {
        statModifier = 5
    }
    return statModifier
}

//Constitution Stat Modifier
const playerConstitutionStatModifier = (playerConstitution) => {
    //let playerConstitution = playerStatArray[2]
    if (playerConstitution <= 3) {
        statModifier = -5
    } else if (playerConstitution <= 6) {
        statModifier = -3
    } else if (playerConstitution <= 9) {
        statModifier = -1
    } else if (playerConstitution <= 12) {
        statModifier = 0
    } else if (playerConstitution <= 15) {
        statModifier = 1
    } else if (playerConstitution <= 18) {
        statModifier = 3
    } else if (playerConstitution <= 20) {
        statModifier = 5
    }
    return statModifier
}

//Intelligence Stat Modifier
const playerIntelligenceStatModifier = (playerIntelligence) => {
    //let playerIntelligence = playerStatArray[3]
    if (playerIntelligence <= 3) {
        statModifier = -5
    } else if (playerIntelligence <= 6) {
        statModifier = -3
    } else if (playerIntelligence <= 9) {
        statModifier = -1
    } else if (playerIntelligence <= 12) {
        statModifier = 0
    } else if (playerIntelligence <= 15) {
        statModifier = 1
    } else if (playerIntelligence <= 18) {
        statModifier = 3
    } else if (playerIntelligence <= 20) {
        statModifier = 5
    }
    return statModifier
}

//Wisdom Stat Modifier
const playerWisdomStatModifier = (playerWisdom) => {
    //let playerWisdom = playerStatArray[4]
    if (playerWisdom <= 3) {
        statModifier = -5
    } else if (playerWisdom <= 6) {
        statModifier = -3
    } else if (playerWisdom <= 9) {
        statModifier = -1
    } else if (playerWisdom <= 12) {
        statModifier = 0
    } else if (playerWisdom <= 15) {
        statModifier = 1
    } else if (playerWisdom <= 18) {
        statModifier = 3
    } else if (playerWisdom <= 20) {
        statModifier = 5
    }
    return statModifier
}

//Charisma Stat Modifier
const playerCharismaStatModifier = (playerCharisma) => {
    //let playerCharisma = playerStatArray[5]
    if (playerCharisma <= 3) {
        statModifier = -5
    } else if (playerCharisma <= 6) {
        statModifier = -3
    } else if (playerCharisma <= 9) {
        statModifier = -1
    } else if (playerCharisma <= 12) {
        statModifier = 0
    } else if (playerCharisma <= 15) {
        statModifier = 1
    } else if (playerCharisma <= 18) {
        statModifier = 3
    } else if (playerCharisma <= 20) {
        statModifier = 5
    }
    return statModifier
}

//Player Weapon depending on Player Class
const playerWeapon = (playerClass) => {
    if (playerClass === chalk.yellow("Bard")) {
        playerClassWeapon = "Whip"
        playerGold = 100
        playerInventory.push(playerClassWeapon, playerGold)
        return playerClassWeapon
    } else if (playerClass === chalk.blue("Wizard")) {
        playerClassWeapon = "Quarterstaff"
        playerGold = 100
        playerInventory.push(playerClassWeapon, playerGold)
        return playerClassWeapon
    } else if (playerClass === chalk.red("Assassin")) {
        playerClassWeapon = "Daggers"
        playerGold = 100
        playerInventory.push(playerClassWeapon, playerGold)
        return playerClassWeapon
    } else if (playerClass === chalk.magenta("Warrior")) {
        playerClassWeapon = "Greatsword"
        playerGold = 100
        playerInventory.push(playerClassWeapon, playerGold)
        return playerClassWeapon
    } else if (playerClass === chalk.cyan("Mage")) {
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
    console.log(chalk`Your name is {rgb(153,50,204) ${playerName}} and you are a(n) ${playerClass}.
You are a human currently residing in the village of Archane at the Grande Inn, a hotspot for adventurers. 
After signing up with the Adventurers' Guild, you receive your first quest: 
Retreive the {rgb(255,140,0) Scroll of Resurrection} from the Dragon Prince of Alistair, {red Ember Demir}.
You are determined to complete this quest.

You exit the Grande Inn and make your way to your destination.
You enter the Archanian Forest. You are met with a fork in the road.\n`)
    forkInRoad();
}

//Spooky Fork In Road Go Brrrrr
const forkInRoad = () => {
    rightOrLeft = rls.question("Do you go right or left? \n")
    rightOrLeft = rightOrLeft.trim().toLowerCase()
    if (rightOrLeft === "right") {
        rightPath();
    } else if (rightOrLeft === "left") {
        leftPath();
    } else if (rightOrLeft === "stats") {
        logPlayerStats();
        forkInRoad();
    } else if (rightOrLeft === "inventory") {
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
    console.log(chalk`\nYou decide to take the path to the left.
Upon walking down the path, you encounter two mysterious potion bottles.
One potion bottle has a {green green liquid} that shimmers in the sunlight that peeks between the branches of the trees.
The other potion bottle has a {blue blue liquid}. It appears to have glitter.\n`)
    potionChoice();
}

//Choosing a potion
const potionChoice = () => {
    potion = rls.question(chalk`Do you drink the {green green potion}, the {blue blue potion}, or do you decide to not drink any at all? \n`)
    potion = potion.trim().toLowerCase()
    if (potion === "blue" || potion === "blue potion") {
        console.log(chalk`\n{red You decide to drink the {blue blue potion}. 
Your insides start burning as you ingest the {blue blue liquid}.
Your blood pressure increases and you start to hear your heartbeat.
Your vision becomes blurry, eventually fading to black.
You collapse in the middle of the path as the potion circulates through your body, killing all of your organs.
You lay there lifeless as the wildlife eventually feed on your body.
You died.}\n`)
        restartGame();
    } else if (potion === "green" || potion === "green potion") {
        playerStrength += 5
        playerIntelligence += 3
        playerCharisma += 5
        console.log(chalk`\nYou decide to drink the {green green potion}.
Your body feels strong and healthy. {cyan (+5 Strength [Strength is now: ${playerStrength}])}
Your mind feels clear. {cyan (+3 Intelligence [Intelligence is now: ${playerIntelligence}])}
You feel sexier. {cyan (+5 Charisma [Charisma is now: ${playerCharisma}])}\n`)
        dragonCastle();
    } else if (potion === "none" || potion === "no" || potion === "do not drink" || potion === "do not drink any at all") {
        console.log(`\nYou decide not to drink any potions.\n`)
        dragonCastle();
    } else if (potion === "stats") {
        logPlayerStats();
        potionChoice();
    } else if (potion === "inventory") {
        logplayerInventory(playerInventory);
        potionChoice();
    } else {
        potionChoice();
    }
}

//Rolling to see who gets the first hit
const rollforInitiative = () => {
    console.log(chalk`{red Roll for initiative!}`)
    playerRoll = rollDieTwenty() + playerDexterityStatModifier(playerDexterity)
    goblinRoll = rollDieTwenty()
    if (playerRoll > goblinRoll) {
        console.log(chalk`\nYou rolled a {red ${playerRoll}}! {cyan (Dexterity Modifier of ${playerDexterityStatModifier(playerDexterity)})}`)
        console.log(chalk`The goblin rolled a {red ${goblinRoll}}!`)
        console.log(chalk`{green You get the first hit!}\n`)
        goblinBattlePlayerAdvantage();
    } else if (goblinRoll > playerRoll) {
        console.log(chalk`\nYou rolled a {red ${playerRoll}}! {cyan (Dexterity Modifier of ${playerDexterityStatModifier(playerDexterity)})}`)
        console.log(chalk`The goblin rolled a {red ${goblinRoll}}!`)
        console.log(chalk`{red The goblin gets the first hit!}`)
        goblinBattleGoblinAdvantage();
    }
}

//Goblin Battle. Player gets first hit
const goblinBattlePlayerAdvantage = () => {
    let playerHealth = 20;
    let goblinHealth = 10;
    let playerOptions = [chalk.red("Attack"), chalk.blue("Surrender")]
    let playerSelect = rls.keyInSelect(playerOptions)
    playerOptionSelect = playerOptions[playerSelect]
    if (playerOptionSelect === chalk.red("Attack")) {
        while (playerHealth > 0 && goblinHealth > 0) {
            console.log(chalk`Your health: {green ${playerHealth}}
Goblin's Health: {red ${goblinHealth}}\n`)
            if (playerStrength <= 3) {
                playerHitPoints = rollDieSix() + playerStrengthStatModifier(playerStrength)
            } else {
                playerHitPoints = rollDieFour() + playerStrengthStatModifier(playerStrength)
            }
            console.log(chalk`\n{green You attack the goblin}! The goblin gets {red ${playerHitPoints}} damage! {cyan (Strength Modifier of ${playerStrengthStatModifier(playerStrength)})}`)
            if (playerHitPoints > 0) {
                goblinHealth -= playerHitPoints
            }
            goblinHitPoints = rollDieSix()
            console.log(chalk`{red The Goblin attacks you}! You get {red ${goblinHitPoints}} damage!\n`)
            playerHealth -= goblinHitPoints
            if (goblinHealth <= 0) {
                console.log(chalk`{green You defeated the goblin}! 
The goblin drops a pouch containing {yellow 1000 gold}.`)
                lootGoblin();
            } else if (playerHealth <= 0) {
                playerInventory.pop()
                console.log(chalk`{red You were defeated by the goblin}!
The goblin knocks you down and takes your {yellow Gold}!\n`)
                dragonCastle();
            }
        }
    } else if (playerOptionSelect === chalk.blue("Surrender")) {
        playerInventory.pop()
        console.log(chalk`\n{red You surrender to the goblin}!
The goblin loots you and runs off with your {yellow Gold}!`)
        dragonCastle();
    } else if (playerOptionSelect === undefined) {
        goblinBattlePlayerAdvantage();
    }

}

//Goblin Battle. Goblin gets first hit
const goblinBattleGoblinAdvantage = () => {
    let playerHealth = 20;
    let goblinHealth = 10;
    let playerOptions = [chalk.red("Attack"), chalk.blue("Surrender")]
    goblinHitPoints = rollDieSix()
    console.log(chalk`{red The Goblin attacks you}! You get {red ${goblinHitPoints}} damage!\n`)
    playerHealth -= goblinHitPoints
    let playerSelect = rls.keyInSelect(playerOptions)
    playerOptionSelect = playerOptions[playerSelect]
    if (playerOptionSelect === chalk.red("Attack")) {
        while (playerHealth > 0 && goblinHealth > 0) {
            console.log(chalk`Your health: {green ${playerHealth}}
Goblin's Health: {red ${goblinHealth}}\n`)
            if (playerStrength <= 3) {
                playerHitPoints = rollDieSix() + playerStrengthStatModifier(playerStrength)
            } else {
                playerHitPoints = rollDieFour() + playerStrengthStatModifier(playerStrength)
            }
            console.log(chalk`\n{green You attack the goblin}! The goblin gets {green ${playerHitPoints}} damage! {cyan (Strength Modifier of ${playerStrengthStatModifier(playerStrength)})}`)
            goblinHitPoints = rollDieSix()
            console.log(chalk`{red The Goblin attacks you}! You get {red ${goblinHitPoints}} damage!\n`)
            playerHealth -= goblinHitPoints
            if (playerHitPoints > 0) {
                goblinHealth -= playerHitPoints
            }
            if (goblinHealth <= 0) {
                console.log(chalk`{green You defeated the goblin}! 
The goblin drops a pouch containing {yellow 1000 gold}.`)
                lootGoblin();
            } else if (playerHealth <= 0) {
                playerInventory.pop()
                console.log(chalk`\n{red You were defeated by the goblin}!
The goblin knocks you down and takes your {yellow Gold}!`)
                dragonCastle();
            }
        }
    } else if (playerOptionSelect === chalk.blue("Surrender")) {
        playerInventory.pop()
        console.log(chalk`{red You surrender to the goblin}!
The goblin loots you and runs off with your {yellow gold}!`)
        dragonCastle();
    } else if (playerOptionSelect === undefined) {
        goblinBattleGoblinAdvantage();
    }

}

//Goblin pouch go kaching kaching
const lootGoblin = () => {
    if (rls.keyInYN(chalk`Do you take the pouch of {yellow 1000 gold}?`)) {
        console.log(`You decide to take the pouch, storing it in your inventory.\n`)
        playerInventory[1] += 1000
        dragonCastle();
    } else {
        console.log(`You decide not to take the pouch.\n`)
        dragonCastle();
    }
}

const dragonCastle = () => {
    console.log(chalk`\nYou make your way down the rest of the path.
Further down you see a large, black gated entrance with a Dragonborn guard standing in front.
The guard is wielding a large spear. By their feet seems to be {red blood}.
It seems that someone has already met their demise.\n`)
    console.log(chalk`Three options come to mind:
You can either {blue scope} out the area to see if there are hidden entrances you can take to get into the castle.
You can {red attack} the guard headon, or you can {yellow persuade} the guard to grant you entry.\n`)
    entranceOption();
}


const entranceOption = () => {
    let entranceChoices = [chalk.blue("Scope"), chalk.red("Attack"), chalk.yellow("Persuade")]
    console.log(`Which would you like to choose?\n`)
    playerEntranceChoices = rls.keyInSelect(entranceChoices)
    playerEntranceChoice = entranceChoices[playerEntranceChoices]
    if (playerEntranceChoice === chalk.blue("Scope")) {
        console.log(chalk`\nYou decide to {blue scope} the area. {red Roll for Perception!}`)
        playerPerception = rollDieTwenty() + playerWisdomStatModifier(playerWisdom)
        console.log(chalk`You roll a {blue ${playerPerception}}! {cyan (Wisdom modifier of ${playerWisdomStatModifier(playerWisdom)})}`)
        if (playerPerception <= 10) {
            console.log(chalk`You {blue scope} out the area. However, you are unable to find a hidden entrance.`)
            entranceChoices.shift()
            console.log(`You now have two choices:`)
            playerEntranceChoices = rls.keyInSelect(entranceChoices)
            playerEntranceChoiceNoScope = entranceChoices[playerEntranceChoices]
            if (playerEntranceChoiceNoScope === chalk.red("Attack")) {
                console.log(chalk`\nYou decide to {red attack} the guard! {red Roll for Initiative!}`)
                rollforInitiativeGuardBattle();
            } else if (playerEntranceChoiceNoScope === chalk.yellow("Persuade")) {
                console.log(chalk`\nYou decide to {yellow persuade} the guard. {red Roll for Persuasion!}`)
                playerPersuasion = rollDieTwenty() + playerCharismaStatModifier(playerCharisma)
                console.log(chalk`You roll a {yellow ${playerPersuasion}}! {cyan (Charisma modifier of ${playerCharismaStatModifier(playerCharisma)})}`)
                if (playerPersuasion <= 10) {
                    console.log(chalk`You try to {yellow persuade} the guard but unfortunately they do not believe one word you say.
They immediately knock you unconscious. 
While you are unconscious, the guard brings you straight inside the Dragon Castle.`)
                    insideDragonCastleTied();
                } else {
                    playerCharisma += 10
                    console.log(chalk`You were able to {yellow persuade} the guard to let you in.
{cyan You feel more confident in your ability to {yellow persuade}. (+10 Charisma [Charisma is now: ${playerCharisma}])}`)
                    insideDragonCastle();
                }
            } else if (playerEntranceChoiceNoScope === undefined){
                console.log(`\nYou decided to not proceed further and go home, accepting defeat.
You go back to the Grande Inn empty-handed where you resign from being an adventurer.
You decide to live out your days as a farmer instead.

The end.`)
                restartGame();
            }
        } else {
            playerWisdom += 10
            console.log(chalk`You {blue scope} out the area, hidden from the Dragonborn guard.
You eventually find part of the gate that has been stretched wide that an average human can fit through.
You slip through the gate and find a side door to the castle. Surprisingly the door was unlocked.
You make your way into the castle.
{cyan You feel more confident in your ability to {blue scope}. (+10 Wisdom [Wisdom is now: ${playerWisdom}])}`)
            insideDragonCastle();
        }
    } else if (playerEntranceChoice === chalk.red("Attack")) {
        console.log(chalk`\nYou decide to {red attack} the guard! {red Roll for Initiative!}`)
        rollforInitiativeGuardBattle();
    } else if (playerEntranceChoice === chalk.yellow("Persuade")) {
        console.log(chalk`\nYou decide to {yellow persuade} the guard. {red Roll for Persuasion!}`)
        playerPersuasion = rollDieTwenty() + playerCharismaStatModifier(playerCharisma)
        console.log(chalk`You roll a {yellow ${playerPersuasion}}! {cyan (Charisma modifier of ${playerCharismaStatModifier(playerCharisma)})}`)
        if (playerPersuasion <= 10) {
            console.log(chalk`You try to {yellow persuade} the guard but unfortunately they do not believe one word you say.
They immediately knock you unconscious. 
While you are unconscious, the guard brings you straight inside the Dragon Castle.`)
            insideDragonCastleTied();
        } else {
            playerCharisma += 10
            console.log(chalk`You were able to {yellow persuade} the guard to let you in.
{cyan You feel more confident in your ability to {yellow persuade}. (+10 Charisma [Charisma is now: ${playerCharisma}])}`)
            insideDragonCastle();
        }

    } else if (playerEntranceChoice === undefined) {
        entranceOption();
    }

}

const rollforInitiativeGuardBattle = () => {
    playerRollGuardBattle = rollDieTwenty() + playerDexterityStatModifier(playerDexterity)
    dragonGuardRoll = rollDieTwenty()
    console.log(chalk`\nYou rolled a {red ${playerRollGuardBattle}}! {cyan (Dexterity modifier of ${playerDexterityStatModifier(playerDexterity)})}`)
    console.log(chalk`The guard rolled a {red ${dragonGuardRoll}}!`)
    if (playerRollGuardBattle > dragonGuardRoll) {
        console.log(chalk`{green You get the first hit!}`)
        dragonGuardBattlePlayerAdvantage();
    } else if (dragonGuardRoll > playerRollGuardBattle) {
        console.log(chalk`{red The guard gets the first hit!}`)
        dragonGuardBattleGuardAdvantage();
    } else {
        rollforInitiativeGuardBattle();
    }
}

const dragonGuardBattlePlayerAdvantage = () => {
    let playerHealth = 20;
    let guardHealth = 10;
    let playerOptions = [chalk.red("Attack"), chalk.blue("Surrender")]
    let playerSelect = rls.keyInSelect(playerOptions)
    playerOptionSelect = playerOptions[playerSelect]
    if (playerOptionSelect === chalk.red("Attack")) {
        while (playerHealth > 0 && guardHealth > 0) {
            console.log(chalk`Your health: {green ${playerHealth}}
Guard's Health: {red ${guardHealth}}\n`)
            if (playerStrength <= 3) {
                playerHitPoints = rollDieSix() + playerStrengthStatModifier(playerStrength)
            } else {
                playerHitPoints = rollDieFour() + playerStrengthStatModifier(playerStrength)
            }
            console.log(chalk`\n{green You attack the guard}! The guard gets {green ${playerHitPoints}} damage! {cyan (Strength Modifier of ${playerStrengthStatModifier(playerStrength)})}`)
            if (playerHitPoints > 0) {
                guardHealth -= playerHitPoints
            }
            guardHitPoints = rollDieSix()
            console.log(chalk`{red The guard attacks you}! You get {red ${guardHitPoints}} damage!\n`)
            playerHealth -= guardHitPoints
            if (guardHealth <= 0) {
                playerStrength += 10
                console.log(chalk`{green You defeated the guard}! 
The guard drops to the ground and lays there unconscious.
You make your way through the gate inside the Dragon Prince's Castle.`)
                insideDragonCastle();
            } else if (playerHealth <= 0) {
                console.log(chalk`{red You were defeated by the guard}!
They immediately knock you unconscious. 
While you are unconscious, the guard brings you straight to into the Dragon Castle..`)
                insideDragonCastleTied();
            }
        }
    } else if (playerOptionSelect === chalk.blue("Surrender")) {
        console.log(chalk`{red You surrender to the guard}!
They immediately knock you unconscious. 
While you are unconscious, the guard brings you straight into the Dragon Castle.`)
        insideDragonCastleTied();
    }

}

const dragonGuardBattleGuardAdvantage = () => {
    let playerHealth = 20;
    let guardHealth = 10;
    let playerOptions = [chalk.red("Attack"), chalk.blue("Surrender")]
    guardHitPoints = rollDieSix()
    console.log(chalk`\n{red The guard attacks you}! You get {red ${guardHitPoints}} damage!\n`)
    playerHealth -= guardHitPoints
    let playerSelect = rls.keyInSelect(playerOptions)
    playerOptionSelect = playerOptions[playerSelect]
    if (playerOptionSelect === chalk.red("Attack")) {
        while (playerHealth > 0 && guardHealth > 0) {
            console.log(chalk`Your health: {green ${playerHealth}}
Guard's Health: {red ${guardHealth}}\n`)
            if (playerStrength <= 3) {
                playerHitPoints = rollDieSix() + playerStrengthStatModifier(playerStrength)
            } else {
                playerHitPoints = rollDieFour() + playerStrengthStatModifier(playerStrength)
            }
            console.log(chalk`\n{green You attack the guard}! The guard gets {green ${playerHitPoints}} damage! {cyan (Strength Modifier of ${playerStrengthStatModifier(playerStrength)})}`)
            if (playerHitPoints > 0) {
                guardHealth -= playerHitPoints
            }
            guardHitPoints = rollDieSix()
            console.log(chalk`\n{red The guard attacks you}! You get {red ${guardHitPoints}} damage!\n`)
            playerHealth -= guardHitPoints
            if (guardHealth <= 0) {
                playerStrength += 10
                console.log(chalk`\n{green You defeated the guard}! 
The guard drops to the ground and lays there unconscious.
You make your way through the gate inside the Dragon Prince's Castle.`)
                insideDragonCastle();
            } else if (playerHealth <= 0) {
                console.log(chalk`\n{red You were defeated by the guard}!
They immediately knock you unconscious. 
While you are unconscious, the guard brings you straight into the Dragon Castle.`)
                insideDragonCastleTied();
            }
        }
    } else if (playerOptionSelect === chalk.blue("Surrender")) {
        console.log(chalk`\n{red You surrender to the guard}!
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
    console.log(chalk`You can either try to {blue release} yourself from the ropes
Or you can loosen the ropes to give the {magenta impression} that you are bound even though you're able to slide out.`)
    playerChairChoice();

}

//Fun fact: The Dragonborn do not believe in locked doors.
const playerChairChoice = () => {
    playerChairChoices = rls.question(chalk`\nDo you try to {blue release} yourself fully or give an {magenta impression}? ({blue Release}/{magenta Impression}): `)
    playerChairChoices.trim().toLowerCase()
    if (playerChairChoices === "release") {
        console.log(chalk`\nYou decide to {blue release} yourself from the chair. {red Dexterity Check!}`)
        playerDexterityRoll = rollDieTwenty() + playerDexterityStatModifier(playerDexterity)
        console.log(chalk`You roll a {red ${playerDexterityRoll}} {cyan (Dexterity Modifier of ${playerDexterityStatModifier(playerDexterity)})}`)
        if (playerDexterityRoll >= 11) {
            console.log(`\nYou release yourself from the chair. You make your way to the door.
Surprisingly, the door is unlocked. You make your way out of the room into the hallway.`)
            console.log(chalk`{red Roll for Perception!}`)
            playerPerception = rollDieTwenty() + playerWisdomStatModifier(playerWisdom)
            console.log(chalk`You roll a {red ${playerPerception}}! {cyan (Wisdom Modifier of ${playerWisdomStatModifier(playerWisdom)})}`)
            if (playerPerception >= 11) {
                console.log(`\nYou were able to scope the area and find three doors down the hallway.`)
                threeDoors();
            } else {
                console.log(`\nYou tried scoping the area, however, you were unable to find anything.
In this case, you decided to go with your second plan. Pretend that you are bound until the guard finds you.`)
                console.log(chalk`{red Roll for Deception!}`)
                playerDeceptionRoll = rollDieTwenty() + playerCharismaStatModifier(playerCharisma)
                console.log(chalk`You roll a {red ${playerDeceptionRoll}} {cyan (Charisma Modifier of ${playerCharismaStatModifier(playerCharisma)})}`)
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
            console.log(chalk`\nYou try to free yourself from the rope.
{red You end up giving yourself a cramp in your arm.}
You also unintentonally made the rope tighter around you.`)
            guardAppearance();
        }
    } else if (playerChairChoices === "impression") {
        console.log(chalk`\n{red Roll for Deception!}`)
        playerDeceptionRoll = rollDieTwenty() + playerCharismaStatModifier(playerCharisma)
        console.log(chalk`You roll a {red ${playerDeceptionRoll}} {cyan (Charisma Modifier of ${playerCharismaStatModifier(playerCharisma)})}`)
        if (playerDeceptionRoll >= 11) {
            console.log(chalk`\nYou were able to loosen up the rope around you, giving the {magenta impression} that you are still tied up but are able to slip out at any time.`)
            guardAppearance();
        } else {
            console.log(chalk`\nYou try to free yourself from the rope.
{red You end up giving yourself a cramp in your arm.}
You also unintentonally made the rope tighter around you.`)
            guardAppearance();
        }
    } else if (playerChairChoices === "stats") {
        logPlayerStats();
        playerChairChoice();
    } else if (playerChairChoice === "inventory") {
        logplayerInventory();
        playerChairChoice();
    } else {
        playerChairChoice();
    }
}

const threeDoors = () => {
    doors = [chalk.green("First Door"), chalk.yellow("Second Door"), chalk.red("Third Door")]
    console.log(`Which door do you go through?`)
    doorChoice = rls.keyInSelect(doors)
    playerDoorChoice = doors[doorChoice]
    if (playerDoorChoice === chalk.green("First Door")) {
        console.log(chalk`\nYou decided to go through the {green first door}.

When you walk in, you see an abundance of books. It's a library.
On your immediate right there is a table with four books on top. The titles read:

The Curse of The Magi (Vol. {magenta 2})
Magic for Beginners (Vol. {yellow 8})
The Best Cookbook for Dragonborns (Vol. {blue 5})
How To Train Your Pet Human (Vol. {green 3})

You take a look around and realize there is nothing really useful here.
You go back into the hallway.`)
        doors.shift()
        console.log("\nWhich door do you choose?")
        doorChoice = rls.keyInSelect(doors)
        playerDoorChoice = doors[doorChoice]
        if (playerDoorChoice === chalk.yellow("Second Door")) {
            console.log(chalk`\nYou decided to go through the {yellow second door}.
When you walk in, you are greeted with the smell of delicious food... as well as a multitude of guards.
They ended up killing you.
{red You died.} `)
            restartGame();
        } else if (playerDoorChoice === chalk.red("Third Door")) {
            let numberOfTries = 3
            if (playerInventory.includes(playerWeapon(playerClass))) {
                console.log(chalk`\nYou decided to go through the {red third door}.
You see a chest that requires a code. 
You try at opening the chest. {cyan (Hint: Pay attention to the volume numbers.)}`)
                for (i = numberOfTries; i !== 0; i++) {
                    console.log(chalk`\n{cyan You have {red ${numberOfTries}} tries left.}`)
                    playerCodeInput = rls.questionInt("What code do you try?: ")
                    if (playerCodeInput === 2853) {
                        chestOpen();
                    } else {
                        console.log("The chest remains locked.")
                        numberOfTries--
                        if (numberOfTries === 0) {
                            console.log(chalk`\nYou are unsuccessful in opening the lock.
You decide to leave the room and go back into the hallway.
You decide to just find the Dragon Prince since he has the {rgb(255,140,0) Scroll of Resurrection}.`)
                            dragonPrince()
                        }
                    }
                }
            }
        } else {
            playerInventory.push(playerWeapon(playerClass))
            console.log(chalk`\nYou decided to go through the {red third door}.
You find your weapon in the same room as the chest.
You see a chest that requires a code. 
You try at opening the chest. {cyan (Hint: Pay attention to the volume numbers.)}`)
            for (i = numberOfTries; i !== 0; i++) {
                console.log(chalk`{cyan You have {red ${numberOfTries}} tries left.}`)
                playerCodeInput = rls.questionInt("What code do you try?: ")
                if (playerCodeInput === 2853) {
                    chestOpen();
                } else {
                    console.log("The chest remains locked.")
                    numberOfTries--
                    if (numberOfTries === 0) {
                        console.log(chalk`You are unsuccessful in opening the lock.
You decide to leave the room and go back into the hallway.
You decide to just find the Dragon Prince since he has the {rgb(255,140,0) Scroll of Resurrection}.`)
                        dragonPrince();
                    }
                }
            }
        }
    } else if (playerDoorChoice === chalk.yellow("Second Door")) {
        console.log(chalk`\nYou decided to go through the {yellow second door}.
When you walk in, you are greeted with the smell of delicious food... as well as a multitude of guards.
They ended up killing you.
{red You died.} `)
        restartGame();
    } else if (playerDoorChoice === chalk.red("Third Door")) {
        let numberOfTries = 3
        if (playerInventory.includes(playerWeapon(playerClass))) {
            console.log(chalk`\nYou decided to go through the {red third door}.
You see a chest that requires a code. 
You try at opening the chest. {cyan (Hint: Pay attention to the volume numbers.)}`)
            for (i = numberOfTries; i !== 0; i++) {
                console.log(`You have ${numberOfTries} tries left.`)
                playerCodeInput = rls.questionInt("What code do you try?: ")
                if (playerCodeInput === 2853) {
                    chestOpen();
                } else {
                    console.log("The chest remains locked.")
                    numberOfTries--
                    if (numberOfTries === 0) {
                        console.log(chalk`You are unsuccessful in opening the lock.
You decide to leave the room and go back into the hallway.
You decide to just find the Dragon Prince since he has the {rgb(255,140,0) Scroll of Resurrection}.`)
                        dragonPrince()
                    }
                }
            }
        } else if (playerInventory.includes(playerWeapon(playerClass)) === false) {
            playerInventory.push(playerWeapon(playerClass))
            console.log(chalk`\nYou decided to go through the {red third door}.
You find your weapon in the same room as the chest.
You see a chest that requires a code. 
You try at opening the chest. {cyan (Hint: Pay attention to the volume numbers.)}`)
            for (i = numberOfTries; i !== 0; i++) {
                console.log(chalk`{cyan You have {red ${numberOfTries}} tries left.}`)
                playerCodeInput = rls.questionInt("What code do you try?: ")
                if (playerCodeInput === 2853) {
                    chestOpen();
                } else {
                    console.log("The chest remains locked.")
                    numberOfTries--
                    if (numberOfTries === 0) {
                        console.log(chalk`\nYou are unsuccessful in opening the lock.
You decide to leave the room and go back into the hallway.
You decide to just find the Dragon Prince since he has the {rgb(255,140,0) Scroll of Resurrection}.`)
                        dragonPrince();
                    }
                }

            }
        }

    } else {
        playerInventory.push(playerWeapon(playerClass))
        console.log(chalk`\nYou decided to go through the {red third door}.
You find your weapon in the same room as the chest.
You see a chest that requires a code. 
You try at opening the chest. {cyan (Hint: Pay attention to the volume numbers.)}`)
        for (i = numberOfTries; i !== 0; i++) {
            console.log(chalk`{cyan You have {red ${numberOfTries}} tries left.}`)
            playerCodeInput = rls.questionInt("What code do you try?: ")
            if (playerCodeInput === 2853) {
                chestOpen();
            } else {
                console.log("The chest remains locked.")
                numberOfTries--
                if (numberOfTries === 0) {
                    console.log(chalk`\nYou are unsuccessful in opening the lock.
You decide to leave the room and go back into the hallway.
You decide to just find the Dragon Prince since he has the {rgb(255,140,0) Scroll of Resurrection}.`)
                    dragonPrince();
                }
            }
        }

    }

}

const guardAppearance = () => {
    console.log(`\nThe guard comes back and sees that you are still tied up.
The guard proceeds to untie you from the chair and takes you to the Dragon Prince.`)
    dragonPrince();

}

const chestOpen = () => {
    playerInventory[1] += 10000
    console.log(chalk`\nYou were able to open the chest and find {yellow 1000 Gold}.
Without thought, you take the gold and make your way to see the Dragon Prince.`)
    dragonPrince();

}

const dragonPrince = () => {
    console.log(chalk`You meet with the Dragon Prince of Alistair, {red Ember Demir}.
He looks at you from head to toe.

"You are a very, very lucky person {rgb(153,50,204) ${playerName}}. I know exactly why you are here.
In order to obtain the {rgb(255,140,0) Scroll of Ressurection} from me, you have three choices:
{yellow Persuade} me to give you the {rgb(255,140,0) Scroll}, {red fight} me for the {rgb(255,140,0) Scroll}, or answer my {blue riddle}."`)
    dragonPrincePlayerChoice()

}

const dragonPrincePlayerChoice = () => {
    dpPlayerChoices = [chalk.yellow("Persuade"), chalk.red("Attack"), chalk.blue("Riddle")]
    console.log(`\nWhich option do you choose?`)
    dpPlayerChoice = rls.keyInSelect(dpPlayerChoices)
    dpPlayerSelect = dpPlayerChoices[dpPlayerChoice]
    if (dpPlayerSelect === chalk.yellow("Persuade")) {
        console.log(chalk`You decided to {yellow persuade} the Dragon Prince! {red Roll for Persuasion!}`)
        playerPersuasion = rollDieTwenty() + playerCharismaStatModifier(playerCharisma)
        console.log(chalk`You rolled a {red ${playerPersuasion}}! {cyan (Charisma Modifier of ${playerCharismaStatModifier(playerCharisma)})}`)
        if (playerPersuasion >= 11) {
            console.log(chalk`\nYou successfully {yellow persuaded} the Dragon Prince as he hands you the {rgb(255,140,0) Scroll of Resurrection}.
You leave the Dragon Castle and go back to the Grande Inn and return the Scroll to the Adventuer's Guild.
You then find out, the Adventurer's Guild and the Dragon Prince were in cahoots to see if you were brave enough to face the Dragon Prince.
The Dragon Prince is actually a very nice person.
The actual villain is his wife, {rgb(153,50,204) Miko Winters, the last Purple Heart Lycanthrope of Archane}.

The end.`)
            restartGame();
        } else {
            dpPlayerChoices.shift()
            console.log(`\nYou were unable to persuade the Dragon Prince.
You have two options left: Attack or Answer the Riddle.`)
            console.log(`Which option do you choose?`)
            dpPlayerChoice = rls.keyInSelect(dpPlayerChoices)
            dpPlayerSelect = dpPlayerChoices[dpPlayerChoice]
            if (dpPlayerSelect === chalk.red("Attack")) {
                console.log(chalk`{red Roll for Initiative!}`)
                dragonPrinceBattleInitiative();
            } else if (dpPlayerSelect === chalk.blue("Riddle")) {
                numberOfTries = 3
                console.log(`\nYou decide to answer the riddle.`)
                for (i = numberOfTries; i !== 0; i++) {
                    console.log(`You have ${numberOfTries} tries left.`)
                    playerRiddleAnswer = rls.question("The more of this there is, the less you see. What is it?: ")
                    playerRiddleAnswer.trim().toLowerCase()
                    if (playerRiddleAnswer === "darkness") {
                        console.log(`\nYou answer the riddle correctly.
The Dragon Prince hands you the Scroll of Resurrection.
You leave the Dragon Castle and go back to the Grande Inn and return the Scroll to the Adventuer's Guild.
You then find out, the Adventurer's Guild and the Dragon Prince were in cahoots to see if you were brave enough to face the Dragon Prince.
The Dragon Prince is actually a very nice person.
The actual villain is his wife, Miko Winters, the last Purple Heart Lycan of Archane.

The end.`)
                    } else {
                        console.log(`That's the incorrect answer.`)
                        numberOfTries--
                        if (numberOfTries === 0){
                            console.log(`You were unable to answer the riddle.
You go back to the Grande Inn empty-handed where you resign from being an adventurer.
You decide to live out your days as a farmer instead.

The end.`)
                            restartGame();
                        }
                    }

                }
            }
        }

    } else if (dpPlayerSelect === chalk.red("Attack")) {
        console.log(chalk`{red Roll for Initiative!}`)
        dragonPrinceBattleInitiative();
    } else if (dpPlayerSelect === chalk.blue("Riddle")) {
        numberOfTries = 3
        console.log(`\nYou decide to answer the riddle.`)
        for (i = numberOfTries; i !== 0; i++) {
            console.log(chalk`{cyan You have {red ${numberOfTries}} tries left.}`)
            playerRiddleAnswer = rls.question("The more of this there is, the less you see. What is it?: ")
            playerRiddleAnswer.trim().toLowerCase()
            if (playerRiddleAnswer === "darkness") {
                console.log(`\nYou answer the riddle correctly.
The Dragon Prince hands you the Scroll of Resurrection.
You leave the Dragon Castle and go back to the Grande Inn and return the Scroll to the Adventuer's Guild.
You then find out, the Adventurer's Guild and the Dragon Prince were in cahoots to see if you were brave enough to face the Dragon Prince.
The Dragon Prince is actually a very nice person.
The actual villain is his wife, Miko Winters, the last Purple Heart Lycan of Archane.

The end.`)
                restartGame();
            } else {
                console.log(`That's the incorrect answer.`)
                numberOfTries--
                if (numberOfTries === 0){
                    console.log(`You were unable to answer the riddle.
You go back to the Grande Inn empty-handed where you resign from being an adventurer.
You decide to live out your days as a farmer instead.

The end.`)
                    restartGame();
                }
            }
        }

    } else if (dpPlayerSelect === undefined) {
        dragonPrincePlayerChoice();
    }
}

const dragonPrinceBattleInitiative = () => {
    playerRollDPBattle = rollDieTwenty() + playerDexterityStatModifier(playerDexterity)
    dragonPrinceRoll = rollDieTwenty()
    console.log(`You rolled a ${playerRollDPBattle}! (Dexterity Modifier of ${playerDexterityStatModifier(playerDexterity)})`)
    console.log(`The Dragon Prince rolled a ${dragonPrinceRoll}!`)
    if (playerRollDPBattle > dragonPrinceRoll) {
        console.log(`You get the first hit!`)
        dragonPrinceBattlePlayerAdvantage();
    } else if (dragonPrinceRoll > playerRollDPBattle) {
        console.log(`The Dragon Prince gets the first hit!`)
        dragonPrinceBattleDPAdvantage();
    }
}

const dragonPrinceBattlePlayerAdvantage = () => {
    let playerHealth = 20;
    let dragonPrinceHealth = 20;
    let playerOptions = [chalk.red("Attack"), chalk.blue("Surrender")]
    let playerSelect = rls.keyInSelect(playerOptions)
    playerOptionSelect = playerOptions[playerSelect]
    if (playerOptionSelect === chalk.red("Attack")) {
        while (playerHealth > 0 && dragonPrinceHealth > 0) {
            console.log(chalk`Your health: {green ${playerHealth}}
Dragon Prince's Health: {red ${dragonPrinceHealth}}\n`)
            if (playerStrength <= 3) {
                playerHitPoints = rollDieSix() + playerStrengthStatModifier(playerStrength)
            } else {
                playerHitPoints = rollDieFour() + playerStrengthStatModifier(playerStrength)
            }
            console.log(chalk`\n{green You attack the Dragon Prince!} The Dragon Prince gets {green ${playerHitPoints}} damage! {cyan (Strength Modifier of ${playerStrengthStatModifier(playerStrength)})}`)
            if (playerHitPoints > 0) {
                dragonPrinceHealth -= playerHitPoints
            }
            dragonPrinceHitPoints = rollDieSix()
            console.log(chalk`{red The Dragon Prince attacks you!} You get {red ${dragonPrinceHitPoints}} damage!\n`)
            playerHealth -= dragonPrinceHitPoints
            if (dragonPrinceHealth <= 0) {
                playerStrength += 10
                console.log(chalk`{green You defeated the Dragon Prince!} 
The Dragon Prince defeatedly hands you the {rgb(255,140,0) Scroll of Resurrection}.
You leave the Dragon Castle and go back to the Grande Inn and return the {rgb(255,140,0) Scroll} to the Adventuer's Guild.
You then find out, the Adventurer's Guild and the Dragon Prince were in cahoots to see if you were brave enough to face the Dragon Prince.
The Dragon Prince is actually a very nice person.
The actual villain is his wife, {rgb(153,50,204) Miko Winters, the last Purple Heart Lycan of Archane}.

The end.`)
                restartGame();
            } else if (playerHealth <= 0) {
                console.log(chalk`{red You were defeated by the Dragon Prince!}
Unfortunately he deems you unfit to become a proper adventurer. 
You go back to the Grande Inn empty-handed where you resign from being an adventurer.
You decide to live out your days as a farmer instead.

The end.`)
                restartGame();
            }
        }
    } else if (playerOptionSelect === chalk.blue("Surrender")) {
        console.log(chalk`{red You surrender to the Dragon Prince!}
Unfortunately he deems you unfit to become a proper adventurer. 
You go back to the Grande Inn empty-handed where you resign from being an adventurer.
You decide to live out your days as a farmer instead.

The end.`)
        restartGame();
    }


}

const dragonPrinceBattleDPAdvantage = () => {
    let playerHealth = 20;
    let dragonPrinceHealth = 20;
    let playerOptions = [chalk.red("Attack"), chalk.blue("Surrender")]
    dragonPrinceHitPoints = rollDieSix()
    console.log(chalk`{red The Dragon Prince attacks you!} You get {red ${dragonPrinceHitPoints}} damage!\n`)
    playerHealth -= dragonPrinceHitPoints
    let playerSelect = rls.keyInSelect(playerOptions)
    playerOptionSelect = playerOptions[playerSelect]
    if (playerOptionSelect === chalk.red("Attack")) {
        while (playerHealth > 0 && dragonPrinceHealth > 0) {
            console.log(chalk`Your health: {green ${playerHealth}}
Dragon Prince's Health: {red ${dragonPrinceHealth}}\n`)
            if (playerStrength <= 3) {
                playerHitPoints = rollDieSix() + playerStrengthStatModifier(playerStrength)
            } else {
                playerHitPoints = rollDieFour() + playerStrengthStatModifier(playerStrength)
            }
            console.log(chalk`\n{green You attack the Dragon Prince!} The Dragon Prince gets {green ${playerHitPoints}} damage! {cyan (Strength Modifier of ${playerStrengthStatModifier(playerStrength)})}`)
            if (playerHitPoints > 0) {
                dragonPrinceHealth -= playerHitPoints
            }
            dragonPrinceHitPoints = rollDieSix()
            console.log(chalk`{red The Dragon Prince attacks you!} You get {red ${dragonPrinceHitPoints}} damage!\n`)
            playerHealth -= dragonPrinceHitPoints
            if (dragonPrinceHealth <= 0) {
                playerStrength += 10
                console.log(chalk`{green You defeated the Dragon Prince!} 
The Dragon Prince defeatedly hands you the {rgb(255,140,0) Scroll of Resurrection}.
You leave the Dragon Castle and go back to the Grande Inn and return the {rgb(255,140,0) Scroll} to the Adventuer's Guild.
You then find out, the Adventurer's Guild and the Dragon Prince were in cahoots to see if you were brave enough to face the Dragon Prince.
The Dragon Prince is actually a very nice person.
The actual villain is his wife, {rgb(153,50,204) Miko Winters, the last Purple Heart Lycan of Archane}.

The end.`)
                restartGame();
            } else if (playerHealth <= 0) {
                console.log(chalk`{red You were defeated by the Dragon Prince!}
Unfortunately he deems you unfit to become a proper adventurer. 
You go back to the Grande Inn empty-handed where you resign from being an adventurer.
You decide to live out your days as a farmer instead.

The end.`)
                restartGame();
            }
        }
    } else if (playerOptionSelect === chalk.blue("Surrender")) {
        console.log(chalk`{red You surrender to the Dragon Prince!}
Unfortunately he deems you unfit to become a proper adventurer. 
You go back to the Grande Inn empty-handed where you resign from being an adventurer.
You decide to live out your days as a farmer instead.

The end.`)
        restartGame();
    }


}

startGame()