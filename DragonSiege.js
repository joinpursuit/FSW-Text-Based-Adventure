/*
world map, kept a copy here
                           ___Cliff___
              ___Forest___/           \  ___Graveyard__
___Village___/            \___Bridge___\/              \___Dragon Lair__
             \___Swamp____/            /\___Mountain___/
                          \___River___/

I found out I can use emoji from VS Code when I was trying to get more familiar with the program  Edit -> Emoji & Symbols
web pages I have used
https://stackoverflow.com/questions/14226803/wait-5-seconds-before-executing-next-line  delay terminal text function
https://stackoverflow.com/questions/9781218/how-to-change-node-jss-console-font-color   text color code
*/

const playerInput = require('readline-sync')

const map0 = " \n \n \n__*Village*__\n \n \n"
const map00 = " \n \n              __*Forest*__\n___Village___/\n \n \n"
const map01 = " \n \n \n___Village___\n             \\__*Swamp*___\n \n"
const map000 = " \n                           __*Cliff*__\n              ___Forest___/\n___Village___/\n \n \n"
const map001 = " \n \n              ___Forest___\n___Village___/            \\__*Bridge*__\n \n \n"
const map010 = " \n \n \n___Village___              __*Bridge*__\n             \\___Swamp____/\n \n"
const map011 = " \n \n \n___Village___\n             \\___Swamp____\n                          \\__*River*__\n"
const map0000 = " \n                           ___Cliff___\n              ___Forest___/           \\  __*Graveyard*_\n___Village___/                         \\/\n \n \n"
const map0001 = " \n                           ___Cliff___\n              ___Forest___/           \\\n___Village___/                         \\\n                                        \\__*Mountain*__\n \n"
const map0010 = " \n \n              ___Forest___               __*Graveyard*_\n___Village___/            \\___Bridge____/\n \n \n"
const map0011 = " \n \n              ___Forest___\n___Village___/            \\___Bridge____\n                                        \\__*Mountain*__\n \n"
const map0100 = " \n \n                                         __*Graveyard*_\n___Village___              ___Bridge____/\n             \\___Swamp____/\n \n"
const map0101 = " \n \n \n___Village___              ___Bridge____\n             \\___Swamp____/             \\__*Mountain*__\n \n"
const map0110 = " \n \n                                         __*Graveyard*_\n___Village___                           /\n             \\___Swamp____             /\n                          \\___River___/\n"
const map0111 = " \n \n \n___Village___\n             \\___Swamp____             /\\__*Mountain*__\n                          \\___River___/\n"
const map00000 = " \n                           ___Cliff___\n              ___Forest___/           \\  ___Graveyard__\n___Village___/                         \\/              \\__*Dragon Lair*_\n \n \n"
const map00010 = " \n                           ___Cliff___\n              ___Forest___/           \\\n___Village___/                         \\                __*Dragon Lair*_\n                                        \\___Mountain___/\n \n"
const map00100 = " \n \n              ___Forest___               ___Graveyard__\n___Village___/            \\___Bridge____/              \\__*Dragon Lair*_\n \n \n"
const map00110 = " \n \n              ___Forest___\n___Village___/            \\___Bridge____                __*Dragon Lair*_\n                                        \\___Mountain___/\n \n"
const map01000 = " \n \n                                         ___Graveyard__\n___Village___              ___Bridge____/              \\__*Dragon Lair*_\n             \\___Swamp____/\n \n"
const map01010 = " \n \n \n___Village___              ___Bridge____                __*Dragon Lair*_\n             \\___Swamp____/             \\___Mountain___/\n \n"
const map01100 = " \n \n                                         ___Graveyard__\n___Village___                           /              \\__*Dragon Lair*_\n             \\___Swamp____             /\n                          \\___River___/\n"
const map01110 = " \n \n \n___Village___                                           __*Dragon Lair*_\n             \\___Swamp____             /\\___Mountain___/\n                          \\___River___/\n"
let worldMap = map0
let route = "0"                 //  h  mh   a   d   s   r   xp   g
const goblin =     ["Goblin",      12, 12, 13, 10, 10, 40,  40, 250] //monstername, 1 hp, 2 maxHP, 3 atk, 4 def, 5 speed, 6 run away chance, 7 exp, 8 gold
const harpy =      ["Harpy",       40, 40, 23, 12, 21, 25, 100, 550]
const minotaur =   ["Minotaur",    40, 40, 25, 13, 20, 30, 120, 550]
const ghoul =      ["Ghoul",       46, 46, 38, 28, 27, 20, 160, 850]
const ogre =       ["Ogre",        48, 48, 37, 28, 27, 20, 150, 850]
const skeleton =   ["Skeleton",    46, 46, 38, 29, 27, 20, 170, 850]
const chimera =    ["Chimera",     56, 56, 47, 38, 34, 10, 200, 1100]
const gargoyle =   ["Gargoyle",    55, 55, 48, 39, 34, 10, 200, 1100]
const darkdragon = ["Dark Dragon", 70, 70, 59, 54, 42,  0, 400, 2000]
const swords = ["filler", ["Short Sword", 5],["Middle Sword", 15],["Long Sword", 25],["Omega Sword", 35],["Legendary Sword", 50]]//value atk
const armor = ["filler", ["Leather Armor", 8], ["Thin Plate Armor", 16], ["Heavy Plate Armor", 24], ["Full Plate Armor", 32], ["Battle Plate Armor", 40]]//value def
const boots = ["filler", ["Leather Boots", 6], ["Light Boots", 12], ["Sturdy Boots", 18], ["Heavy Boots", 24], ["Battle Boots", 30]]//value spd
const levelExp = [0, 45, 90, 140, 200, 270, 350, 440, 550, 700, 1000]
let player = ["name", "1 hp", "2 max hp", "3 attack", "4 defense", "5 speed", "6 potion", "7 exp", "8 level", "9 gold", "10 sword", "11 armor", "12 boots"]
let playerInvSwords = [] //store array swords' index
let playerInvArmor = []
let playerInvBoots = []
const potionValue = 30 // how much hp a potion restores
let battleMon = []
let ranAway = false
let seconds = 1500 //delay time 1000 = 1 second

const gameIntro = () => {
    let playerChoice = 0

    wait(seconds/2)
    textColorTitle("\n\n❖ ❖ ❖ ❖ ❖ ❖ ❖ ❖ ❖ ❖ ❖ ❖ ❖ ❖ ❖\n❖ ❖ ❖ ❖ Dragon Siege  ❖ ❖ ❖ ❖\n❖ ❖ ❖ ❖ ❖ ❖ ❖ ❖ ❖ ❖ ❖ ❖ ❖ ❖ ❖\n"); wait(seconds);
    setTextSpeed()
    textColorWorld("If you are new to Dragon Siege, I strongly recommend you not to skip the tutorial."); wait(seconds);
    textColorWorld("If you already know Dragon Siege, feel free to skip."); wait(seconds);
    while(playerChoice !== "y" && playerChoice !== "yes" && playerChoice !== "n" && playerChoice !== "no"){
        playerChoice = playerInput.question(textColorAction("Do you want to skip the tutorial? Please select: 🆈 /🅽")) //.keyInYN() doesn't work as expected when passing function
        playerChoice = playerChoice.toLowerCase()
        if(playerChoice !== "y" && playerChoice !== "yes" && playerChoice !== "n" && playerChoice !== "no"){
            textColorRed("Invalid choice"); wait(seconds/2);
        }
    }
    if(playerChoice === "y" || playerChoice === "yes"){
        textColorTitle("\nGreat! Entering Dragon Siege world..."); wait(seconds*3)
    } else {
        textColorWorld("\nGame Tutorial"); wait(seconds);
        textColorWorld("You can make decision simply by type in the answer or number."); wait(seconds);
        textColorWorld("For example, please select: high or low"); wait(seconds);
        textColorWorld("You can choose high/🅷  or low/🅻  as an answer."); wait(seconds);
        textColorWorld("Please select: 1️⃣  attack  2️⃣  use potion  3️⃣  run away"); wait(seconds);
        textColorWorld("You can choose 1️⃣  2️⃣  3️⃣  as an answer."); wait(seconds);
        playerChoice = 0
        while(playerChoice !== "y" && playerChoice !== "yes" && playerChoice !== "n" && playerChoice !== "no"){
            playerChoice = playerInput.question(textColorAction("Easy enough? Please select: 🆈 /🅽"))
            playerChoice = playerChoice.toLowerCase()
            if(playerChoice !== "y" && playerChoice !== "yes" && playerChoice !== "n" && playerChoice !== "no"){
                textColorRed("Invalid choice"); wait(seconds/2);
            }
        }
        if(playerChoice === "y" || playerChoice === "yes"){
            textColorWorld("Great job!"); wait(seconds);
        } else {
            textColorWorld("You already did it without knowing it!"); wait(seconds);
        }
        textColorWorld("Game Statistics"); wait(seconds);
        textColorWorld("Attack: amount of damage the character can deal to an enemy."); wait(seconds);
        textColorWorld("Defense: amount of damage the character can absorb without losing HP."); wait(seconds);
        textColorWorld("Speed: determines the character can attack first or not."); wait(seconds);
        textColorWorld("Friendly reminder, use equip to equip your new equipments after getting them!"); wait(seconds);
        textColorWorld("One last thing, you can use help any time to see game options after the game started."); wait(seconds);
        while(playerChoice !== "help"){
            playerChoice = playerInput.question(textColorAction("Give it a try right now! Please enter: help"))
            playerChoice = playerChoice.toLowerCase()
            if(playerChoice !== "help"){
                textColorRed("Invalid choice"); wait(seconds/2);
            }
        }
        menuHelp(true)
        textColorWorld("That's all for the tutorial."); wait(seconds*2);
        textColorTitle("Entering Dragon Siege world..."); wait(seconds*3);
    }
}
const gameWorld = () => {
    let playerChoice = 0
    player = ["", 30, 30, 15, 10, 12, 0, 0, 1, 30, 1, 1, 1]
    playerInvSwords = [0, 1] // 0 is just filler
    playerInvArmor = [0, 1]
    playerInvBoots = [0, 1]
    ranAway = false
    route = "0"
    worldMap = map0

    textColorWorld("\nThousand years ago, Dark Dragon led hordes of evil monsters to conquer the world."); wait(seconds);
    textColorWorld("A hero fought back, defeated Dark Dragon and sealed Dark Dragon away."); wait(seconds);
    textColorWorld("Dark Dragon vowed to return in thousand years."); wait(seconds);
    textColorWorld("Time passed, Dark Dragon was forgotten by all,"); wait(seconds);
    textColorWorld("until dark creatures start appearing again to break thousand year peace."); wait(seconds);
    textColorWorld("The world is awaiting a new hero ...\n"); wait(seconds);
    textColorAction("Will you help us? It will be an adventure!"); wait(seconds);
    while(player[0] === "" || player[0].length > 15){
        player[0] = playerInput.question(textColorAction("What is your name?"))
        if(player[0] === ""){
            textColorRed("Please enter a valid name.")
        }
        if(player[0].length > 15){
            textColorRed("Please use a shorter name, limit to 15 characters.")
        }
    }
    textColorWorld(`\n${player[0]}, thank you!`); wait(seconds);
    textColorWorld("Before you go, please have those health potions."); wait(seconds);
    textColorWorld(`Each potion will restore ${potionValue} HP.`); wait(seconds);
    textColorAction("You received 3 health potions and 70 gold."); wait(seconds*3)
    player[6] += 3
    player[9] += 70
    textColorWorld("\nYou come across a village, you heard a big screem \"HELP! HELP! HELP!\""); wait(seconds);
    textColorWorld("You look at the way where the sound comes from, a villager is being attacked by a goblin."); wait(seconds);
    battlePhase(goblin)
    textColorWorld("Another goblin appears!"); wait(seconds);
    battlePhase(goblin)
    if(!ranAway){ //first and only event
        textColorWorld("Thank you for saving me, hero!"); wait(seconds);
        textColorWorld("What is your name?")   ; wait(seconds);
        textColorWorld(`${player[0]}, thank you so much, please have this.`); wait(seconds);
        textColorAction("You receive 2 health potions and 100 gold.\n"); wait(seconds);
        player[6] += 2
        player[9] += 100
    } else {
        textColorWorld("You heard more and more villagers screeming \"HELP\" behind you."); wait(seconds);
        textColorWorld("You are afraid to go back.\n"); wait(seconds);
    }
    textColorWorld("You come across a shop.")
    shopWorld(2)
    textColorWorld("You left the village, there are 2 paths. Upper path leads to Dark Forest, lower path leads to Cry Swamp."); wait(seconds);
    playerChoice = choiceMenuWorld()
    setWorldMap(playerChoice)
    if(playerChoice === 11){
        textColorWorld("You are going through Dark Forest, a harpy appears!"); wait(seconds);
        battlePhase(harpy)
        textColorWorld("You found a shop near exit"); wait(seconds);
        shopWorld(3)
        textColorWorld("You passed Dark Forest, there are 2 paths. Upper path will go over Mesa Cliff, lower path will go over Silver Bridge."); wait(seconds);
    }
    else {
        textColorWorld("You are going through Cry Swamp, a minotaur appears!"); wait(seconds);
        battlePhase(minotaur)
        textColorWorld("You found a shop near exit"); wait(seconds);
        shopWorld(3)
        textColorWorld("You passed Cry Swamp, there are 2 paths. Upper path will go over Silver Bridge, lower path will follow Missi River."); wait(seconds);
    }
    playerChoice = choiceMenuWorld()
    setWorldMap(playerChoice)
    if(route.charAt(route.length-2) === "0"){
        if(playerChoice === 11){
            textColorWorld("You go over Mesa Cliff, a ghoul appears!"); wait(seconds);
            battlePhase(ghoul)
            textColorWorld("You found a shop near exit"); wait(seconds);
            shopWorld(4)
            textColorWorld("You passed Mesa Cliff, there are 2 paths. Upper path will lead to Undead Graveyard, lower path will lead to Death Mountain."); wait(seconds);
        } else {
            textColorWorld("You go over Silver Bridge, an ogre appears!"); wait(seconds);
            battlePhase(ogre)
            textColorWorld("You found a shop near exit"); wait(seconds);
            shopWorld(4)
            textColorWorld("You passed Silver Bridge, there are 2 paths. Upper path will lead to Undead Graveyard, lower path will lead to Death Mountain."); wait(seconds);
        }
    } else if(playerChoice === 11){
        textColorWorld("You go over Silver Bridge, an ogre appears!"); wait(seconds);
        battlePhase(ogre)
        textColorWorld("You found a shop near exit"); wait(seconds);
        shopWorld(4)
        textColorWorld("You passed Silver Bridge, there are 2 paths. Upper path will lead to Undead Graveyard, lower path will lead to Death Mountain."); wait(seconds);
    } else {
        textColorWorld("You follow Missi River, a skeleton appears!"); wait(seconds);
        battlePhase(skeleton)
        textColorWorld("You found a shop near exit"); wait(seconds);
        shopWorld(4)
        textColorWorld("You followed the river and reach a cross point, there are 2 paths. Upper path will lead to Undead Graveyard, lower path will lead to Death Mountain."); wait(seconds);
    }
    playerChoice = choiceMenuWorld()
    setWorldMap(playerChoice)
    if(playerChoice === 11){
        textColorWorld("You are passing through Undead Graveyard, a gargoyle appears!"); wait(seconds);
        battlePhase(gargoyle)
    } else {
        textColorWorld("You are passing through Death Mountain, a chimera appears!"); wait(seconds);
        battlePhase(chimera)
    }
    setWorldMap()
    textColorWorld("You found a shop before going to Dark Dragon's Lair"); wait(seconds);
    shopWorld(5)
    textColorWorld("Finally, you reach Dark Dragon's Lair."); wait(seconds);
    battlePhase(darkdragon)
    textColorTitle("You defeated Dark Dragon, the world returns to peace once again!"); wait(seconds*2);
    textColorTitle(`That is the story, thank you ${player[0]}!!!\n\n`); wait(seconds*2);
    gameOver(1)
}
const gameOver = (n = 0) => {
    let playerChoice = 0

    if(n === 0){
        textColorRed("\nYou are dead.\n"); wait(seconds);
    } else {
        textColorTitle("Congratulations!"); wait(seconds);
    }
    while(playerChoice !== "y" && playerChoice !== "yes" && playerChoice !== "n" && playerChoice !== "no"){
        playerChoice = playerInput.question(textColorAction("Do you want to restart the game? 🆈/🅽"))
        playerChoice = playerChoice.toLowerCase()
        if(playerChoice !== "y" && playerChoice !== "yes" && playerChoice !== "n" && playerChoice !== "no"){
            textColorRed("Invalid choice"); wait(seconds/2);
        }
    }
    if(playerChoice === "y" || playerChoice === "yes"){
        textColorAction("Game restarting...\n"); wait(seconds*2);
        gameWorld()
    } else {
        quitGame()
    }
}
const quitGame = () => {
    textColorTitle("\nThank you for playing! Goodbye.\n"); wait(seconds*2);
    process.exit()
}
const battlePhase = (mon) => {
    let playerChoice = 0
    let battleOver = false
    let turnCount = 0
    let skipTurn = false
    let criticalHit = 1
    let statHolder = 0
    let doubleAttack = 1
    battleMon = [...mon]

    textColorBattle(`\nYou enter a battle.\n`); wait(seconds);
    if(player[5] < battleMon[5])
        skipTurn = true
    while(!battleOver){
        if(!skipTurn){
            textColorBattle(`Turn ${++turnCount}`); wait(seconds);
            playerChoice = choiceMenuBattle()
            if(playerChoice === 11){
                probability(3) ? doubleAttack = 2 : doubleAttack = 1 //dodge attack 5%, critical attack 8%, double attack 3%, done!
                for(let k = 0; k < doubleAttack; k++) {
                    if(!battleOver){
                        if(k === 1){
                            textColorBattle(`You attack ${battleMon[0]} again.`); wait(seconds);
                        } else {
                            textColorBattle(`You attack ${battleMon[0]}.`); wait(seconds);
                        }
                        probability(8) ? criticalHit = 2 : criticalHit = 1
                        if(probability(5)){
                            textColorBattle(`${battleMon[0]} dodges your attack.`); wait(seconds);
                        } else if(player[3] - battleMon[4] > 1){
                            textColorBattle(`You deal ${(player[3] - battleMon[4]) * criticalHit} ${criticalHit > 1 ? "critical damages" : "damages"} to ${battleMon[0]}.`); wait(seconds);
                            battleMon[1] -= (player[3] - battleMon[4]) * criticalHit
                        } else {
                            textColorBattle(`You deal ${criticalHit} ${criticalHit > 1 ? "critical damages" : "damage"} to ${battleMon[0]}.`); wait(seconds);
                            battleMon[1] -= criticalHit
                        }
                        if(hpCheck()){
                            textColorBattle(`You defeated ${battleMon[0]}!`); wait(seconds);
                            textColorBattle(`You gain ${battleMon[7]} experiences.`); wait(seconds);
                            textColorBattle(`You gain ${battleMon[8]} gold.`); wait(seconds);
                            player[7] += battleMon[7]
                            player[9] += battleMon[8]
                            for(let j = player[7]; j >= levelExp[player[8]]; j -= levelExp[player[8] - 1]){
                                player[7] -= levelExp[player[8]]
                                player[8]++
                                textColorAction(`\nCongratulations! Your level is increased to ${player[8]}!`); wait(seconds);
                                for(let i = 2; i < 6; i++){
                                    statHolder = statLevelUp()
                                    if(statHolder > 0){
                                        textColorAction(`Your ${i === 2 ? "HP" : i === 3 ? "attack" : i === 4 ? "defense" : "speed"} is increased by ${statHolder}!`); wait(seconds);
                                        player[i] += statHolder
                                    }
                                }
                            }
                            console.log("")//needed for screen formatting
                            battleOver = true
                        } else {
                            textColorBattle(`${battleMon[0]} has ${battleMon[1]}/${battleMon[2]} HP left.\n`); wait(seconds);
                        }
                    }
                }
            } else if(playerChoice === 21){
                usePotion()
            } else if(playerChoice === 31){
                battleOver = true
            }
        }
        if(!battleOver){
            textColorBattle(`Turn ${++turnCount}`); wait(seconds);
            probability(3) ? doubleAttack = 2 : doubleAttack = 1 
            for(let i = 0; i < doubleAttack; i++){
                if(i === 1){
                    textColorBattle(`${battleMon[0]} attacks you again.`); wait(seconds);
                } else {
                    textColorBattle(`${battleMon[0]} attacks you.`); wait(seconds);
                }
                probability(5) ? criticalHit = 2 : criticalHit = 1
                if(probability(8)){
                    textColorBattle(`You dodge ${battleMon[0]}\'s attack.`); wait(seconds);
                } else if(battleMon[3] - player[4] > 1){
                    textColorBattle(`${battleMon[0]} deals ${(battleMon[3] - player[4]) * criticalHit} ${criticalHit > 1 ? "critical damages" : "damages"} to you.`); wait(seconds);
                    player[1] -= (battleMon[3] - player[4]) * criticalHit
                } else {
                    textColorBattle(`${battleMon[0]} deals ${criticalHit} ${criticalHit > 1 ? "critical damages" : "damage"} to you.`); wait(seconds);
                    player[1] -= criticalHit
                }
                hpCheck(1)
                textColorBattle(`You have ${player[1]}/${player[2]} HP left.\n`); wait(seconds);
            }
            if(turnCount === 1){
                skipTurn = false
            }
        }
    }
}
const hpCheck = (n = 0) =>{ //pass 1 to check player, else check monster to return dead or not
    if(n === 1){
        if(player[1] <= 0){
            gameOver()
        } else if(player[1] <= player[2] * 0.3){
            textColorRed("WARNING, low health!"); wait(seconds);
        }
    } else if(battleMon[1] <= 0){
        return true
    }
    return false
}
const statLevelUp = () => { //7% 0, 38% +1, 25% +2, 20% +3, 10% +4
    if(probability(10)){
        return 4
    } else if(probability(22)){
        return 3
    } else if(probability(36)){
        return 2
    } else if(probability(85)){
        return 1
    } else {
        return 0
    }
}
const probability = (prob = 0) => prob >= Math.floor(Math.random() * 100) + 1 //generate a number from 1 to 100 to simulate 100%
const choiceMenuBattle = () => {
    let playerChoice = 0

    while(playerChoice !== "1" && playerChoice !== "2" && playerChoice !== "3"){
        playerChoice = playerInput.question(textColorAction("Please select action:  1️⃣  attack  2️⃣  use potion  3️⃣  run away"))
        playerChoice = playerChoice.toLowerCase()
        if(playerChoice === "1"){
            textColorAction("You selected attack."); wait(seconds);
            return 11
        } else if(playerChoice === "2"){
            if(player[6] > 0) {
                textColorAction("You selected use potion."); wait(seconds);
                return 21
            }
            else {
                textColorAction("You have no more potion left."); wait(seconds);
                playerChoice = 0
            }
        } else if(playerChoice === "3"){
            textColorAction("You selected run away."); wait(seconds);
            if(probability(battleMon[6])){
                textColorAction("You have sucessfully run away.\n"); wait(seconds);
                ranAway = true
                return 31
            }
            else {
                textColorAction("You failed to run away.\n"); wait(seconds);
                return 32
            }
        } else if(playerChoice === "status"){
            menuPlayer()
        } else if(playerChoice === "equip"){
            menuEquip()
        } else if(playerChoice === "map"){
            menuMap()
        } else if(playerChoice === "help"){
            menuHelp()
        } else if(playerChoice === "speed"){
            setTextSpeed()
        } else if(playerChoice === "restart"){
            textColorAction("Game restarting...\n"); wait(seconds*2);
            gameWorld()
        } else if(playerChoice === "quit"){
            quitGame()
        } else {
            textColorRed("Invalid choice\n"); wait(seconds/2);
        }
    }
}
const choiceMenuWorld = () => {
    let playerChoice = 0

    while(playerChoice !== "u" && playerChoice !== "l" && playerChoice !== "upper" && playerChoice !== "lower"){
        playerChoice = playerInput.question(textColorAction("Please select upper or lower path: 🆄 /🅻"))
        playerChoice = playerChoice.toLowerCase()
        if(playerChoice === "u" || playerChoice === "upper"){
            textColorAction("You selected upper path.\n"); wait(seconds);
            return 11
        } else if(playerChoice === "l" || playerChoice === "lower"){
            textColorAction("You selected lower path.\n"); wait(seconds);
            return 21
        } else if(playerChoice === "status"){
            menuPlayer()
        } else if(playerChoice === "potion"){
            if(player[6] > 0) {
                textColorAction("You used a potion."); wait(seconds);
                usePotion()
            } else {
                textColorAction("You have no more potion left."); wait(seconds);
            }
        } else if(playerChoice === "equip"){
            menuEquip()
        } else if(playerChoice === "map"){
            menuMap()
        } else if(playerChoice === "help"){
            menuHelp()
        } else if(playerChoice === "speed"){
            setTextSpeed()
        } else if(playerChoice === "restart"){
            textColorAction("Game restarting...\n"); wait(seconds*2);
            gameWorld()
        } else if(playerChoice === "quit"){
            quitGame()
        } else {
            textColorRed("Invalid choice\n"); wait(seconds/2);
        }
    }
}
const usePotion = () => {
    if(player[1] + potionValue > player[2]){
        textColorAction(`You have restored ${player[2] - player[1]} HP.\n`); wait(seconds);
        player[1] = player[2]
    } else {
        textColorAction(`You have restored ${potionValue} HP.\n`); wait(seconds);
        player[1] += potionValue
    }
    player[6]--
}
const setWorldMap = (choice = 11) => {
    if(choice === 11){
        route += "0"
    } else {
        route += "1"
    }
    switch(route){
        case "00": worldMap = map00; break;
        case "01": worldMap = map01; break;
        case "000": worldMap = map000; break;
        case "001": worldMap = map001; break;
        case "010": worldMap = map010; break;
        case "011": worldMap = map011; break;
        case "0000": worldMap = map0000; break;
        case "0001": worldMap = map0001; break;
        case "0010": worldMap = map0010; break;
        case "0011": worldMap = map0011; break;
        case "0100": worldMap = map0100; break;
        case "0101": worldMap = map0101; break;
        case "0110": worldMap = map0110; break;
        case "0111": worldMap = map0111; break;
        case "00000": worldMap = map00000; break;
        case "00010": worldMap = map00010; break;
        case "00100": worldMap = map00100; break;
        case "00110": worldMap = map00110; break;
        case "01000": worldMap = map01000; break;
        case "01010": worldMap = map01010; break;
        case "01100": worldMap = map01100; break;
        default: worldMap = map01110
    }
}
const menuPlayer = () => {  // name, 1 hp, 2 maxHP, 3 attack, 4 defense, 5 speed, 6 potion, 7 exp, 8 level, 9 gold, 10 sword, 11 armor, 12 boots
    textColorStatus(`\n${player[0]}  Lv ${player[8]}`); wait(seconds/2);
    textColorStatus(`HP    ${player[1]}/${player[2]}`); wait(seconds/2);
    textColorStatus(`Attack   ${player[3]}`); wait(seconds/2);
    textColorStatus(`Defense  ${player[4]}`); wait(seconds/2);
    textColorStatus(`Speed    ${player[5]}`); wait(seconds/2);
    textColorStatus(`Exp   ${player[7]}/${levelExp[player[8]]}`); wait(seconds/2);
    textColorStatus(`Gold     ${player[9]}`); wait(seconds/2);
    textColorStatus(`Equipped: ${swords[player[10]][0]} (${swords[player[10]][1]} attack)`); wait(seconds/2);
    textColorStatus(`Equipped: ${armor[player[11]][0]} (${armor[player[11]][1]} defense)  `); wait(seconds/2);
    textColorStatus(`Equipped: ${boots[player[12]][0]} (${boots[player[12]][1]} speed)`); wait(seconds/2);
    textColorStatus(`${player[6] > 1 ? "Potions" : "Potion"} ${player[6]}\n`); wait(seconds);
}
const menuMap = () => {
    textColorStatus(worldMap); wait(seconds);
}
const menuHelp = (intro = false) => {
    textColorWorld("\nYou can access following options at any time."); intro ? wait(seconds) : wait(seconds/2);
    textColorStatus("status   shows player's current status"); intro ? wait(seconds) : wait(seconds/2);
    textColorStatus("potion   use potion outside of battle"); intro ? wait(seconds) : wait(seconds/2);
    textColorStatus("equip    change player's current equipments"); intro ? wait(seconds) : wait(seconds/2);
    textColorStatus("map      shows player's current location"); intro ? wait(seconds) : wait(seconds/2);
    textColorStatus("help     shows this manual"); intro ? wait(seconds) : wait(seconds/2);
    textColorStatus("speed    change text scrolling speed"); intro ? wait(seconds) : wait(seconds/2);
    textColorStatus("restart  restart the game"); intro ? wait(seconds) : wait(seconds/2);
    textColorStatus("quit     exit the game\n"); wait(seconds);
}
const menuEquip = () => {
    let playerChoice = 0
    let playerChoiceTwo = 0
    let shown = false

    while(playerChoice !== "6" && playerChoice !== "cancel"){
        playerChoice = playerInput.question(textColorAction("Please select: 1️⃣ Swords  2️⃣ Armor  3️⃣ Boots  4️⃣ Equip all 3  5️⃣ Show all 3  6️⃣ Cancel"))
        playerChoice = playerChoice.toLowerCase()
        if(playerChoice === "1" || playerChoice === "2" || playerChoice === "3" || playerChoice === "4" || playerChoice === "5"){
            if(playerChoice === "1" || playerChoice === "4" || playerChoice === "5"){
                textColorStatus("\nAvailable sword equipment list -------------"); wait(seconds/2);
                for(let i = 1; i < playerInvSwords.length; i++) { //prints the list of available swords, index 0 is filler
                    if(player[10] === playerInvSwords[i] && !shown){
                        textColorAction(`${i}  ${swords[playerInvSwords[i]][0]}: ${swords[playerInvSwords[i]][1]} attack  *equipped`); wait(seconds/2);
                        shown = true
                    } else {
                        textColorStatus(`${i}  ${swords[playerInvSwords[i]][0]}: ${swords[playerInvSwords[i]][1]} attack`); wait(seconds/2);
                    }
                }
                textColorStatus("--------------------------------------------"); wait(seconds/2);
                shown = false
            }
            if(playerChoice === "2" || playerChoice === "4" || playerChoice === "5"){
                textColorStatus("\nAvailable armor equipment list -------------"); wait(seconds/2);
                for(let i = 1; i < playerInvArmor.length; i++) {
                    if(player[11] === playerInvArmor[i] && !shown){
                        textColorAction(`${i}  ${armor[playerInvArmor[i]][0]}: ${armor[playerInvArmor[i]][1]} defense  *equipped`); wait(seconds/2);
                        shown = true
                    } else {
                        textColorStatus(`${i}  ${armor[playerInvArmor[i]][0]}: ${armor[playerInvArmor[i]][1]} defense`); wait(seconds/2);
                    }
                }
                textColorStatus("--------------------------------------------"); wait(seconds/2);
                shown = false
            }
            if(playerChoice === "3" || playerChoice === "4" || playerChoice === "5"){
                textColorStatus("\nAvailable boots equipment list -------------"); wait(seconds/2);
                for(let i = 1; i < playerInvBoots.length; i++) {
                    if(player[12] === playerInvBoots[i] && !shown){
                        textColorAction(`${i}  ${boots[playerInvBoots[i]][0]}: ${boots[playerInvBoots[i]][1]} speed  *equipped`); wait(seconds/2);
                        shown = true
                    } else {
                        textColorStatus(`${i}  ${boots[playerInvBoots[i]][0]}: ${boots[playerInvBoots[i]][1]} speed`); wait(seconds/2);
                    }
                }
                textColorStatus("--------------------------------------------"); wait(seconds/2);
                shown = false
            }
            if(playerChoice === "1" || playerChoice === "4"){
                playerChoiceTwo = 0
                while(playerChoiceTwo >= playerInvSwords.length || playerChoiceTwo < 1){
                    playerChoiceTwo = playerInput.questionInt(textColorAction("Please select sword to equip"))
                    if(playerChoiceTwo >= playerInvSwords.length || playerChoiceTwo < 1){
                        textColorRed("Invalid choice, please select one from the list to equip\n"); wait(seconds/2);
                    }
                }
                player[3] = player[3] - swords[player[10]][1] + swords[playerInvSwords[playerChoiceTwo]][1] //attack - old sword stat + new sword stat
                player[10] = playerInvSwords[playerChoiceTwo] //playerInvSwords & player[10] store array swords' index
                textColorAction(`${swords[player[10]][0]} is equipped.\n`); wait(seconds);
            }
            if(playerChoice === "2" || playerChoice === "4"){
                playerChoiceTwo = 0
                while(playerChoiceTwo >= playerInvArmor.length || playerChoiceTwo < 1){
                    playerChoiceTwo = playerInput.questionInt(textColorAction("Please select armor to equip"))
                    if(playerChoiceTwo >= playerInvArmor.length || playerChoiceTwo < 1){
                        textColorRed("Invalid choice, please select one from the list to equip\n"); wait(seconds/2);
                    }
                }
                player[4] = player[4] - armor[player[11]][1] + armor[playerInvArmor[playerChoiceTwo]][1]
                player[11] = playerInvArmor[playerChoiceTwo]
                textColorAction(`${armor[player[11]][0]} is equipped.\n`); wait(seconds);
            }
            if(playerChoice === "3" || playerChoice === "4"){
                playerChoiceTwo = 0
                while(playerChoiceTwo >= playerInvBoots.length || playerChoiceTwo < 1){
                    playerChoiceTwo = playerInput.questionInt(textColorAction("Please select boots to equip"))
                    if(playerChoiceTwo >= playerInvBoots.length || playerChoiceTwo < 1){
                        textColorRed("Invalid choice, please select one from the list to equip\n"); wait(seconds/2);
                    }
                }
                player[5] = player[5] - boots[player[12]][1] + boots[playerInvBoots[playerChoiceTwo]][1]
                player[12] = playerInvBoots[playerChoiceTwo]
                textColorAction(`${boots[player[12]][0]} is equipped.\n`); wait(seconds);
            }
        } else if(playerChoice === "status"){
            menuPlayer()
        } else if(playerChoice === "potion"){
            if(player[6] > 0) {
                textColorAction("You used a potion."); wait(seconds);
                usePotion()
            } else {
                textColorAction("You have no more potion left."); wait(seconds);
            }
        } else if(playerChoice === "map"){
            menuMap()
        } else if(playerChoice === "help"){
            menuHelp()
        } else if(playerChoice === "speed"){
            setTextSpeed()
        } else if(playerChoice === "restart"){
            textColorAction("Game restarting...\n"); wait(seconds*2);
            gameWorld()
        } else if(playerChoice === "quit"){
            quitGame()
        } else if(playerChoice !== "6" && playerChoice !== "cancel"){
            textColorRed("Invalid choice, please choose 1️⃣ 2️⃣ 3️⃣ 4️⃣ 5️⃣ 6️⃣\n"); wait(seconds/2);
        }
    }
}
const shopWorld = (shopLv = 1) => { //shopLv reprensents also the index of swords/armor/boots
    let nickName = ""
    let playerChoice = 0
    let potionQty = Math.ceil(shopLv / 2)

    if(probability(25)){ //25% each
        nickName = "stranger"
    } else if(probability(33)){
        nickName = "traveler"
    } else if(probability(50)){
        nickName = "my friend"
    } else {
        nickName = "hero"
    }
    textColorShop(`\nWelcome, ${nickName}. ${probability(50) ? "Take" : "Have"} a look at what I have.\n`); wait(seconds);
    while(playerChoice !== "goodbye"){
        textColorShop(`You have ${player[9]} gold.`); wait(seconds/2);
        textColorShop(`1️⃣  ${swords[shopLv][0]}  (${swords[shopLv][1]} attack)  ${60*shopLv} Gold`); wait(seconds/2);
        textColorShop(`2️⃣  ${armor[shopLv][0]}  (${armor[shopLv][1]} defense)  ${50*shopLv} Gold`); wait(seconds/2);
        textColorShop(`3️⃣  ${boots[shopLv][0]}  (${boots[shopLv][1]} speed)  ${40*shopLv} Gold`); wait(seconds/2);
        if(potionQty === 0){
            textColorShop(`4️⃣  Health Potion  SOLD OUT`); wait(seconds/2);
        } else {
            textColorShop(`4️⃣  Health Potion  (Quantity: ${potionQty})  ${30 + 10 * (shopLv - 2)} Gold each`); wait(seconds/2);
        }
        playerChoice = playerInput.question(textColorShop("What do you like? If you want to go, say goodbye."))
        playerChoice = playerChoice.toLowerCase()
        if(playerChoice === "1"){
            if(player[9] - shopLv * 60 >= 0){
                player[9] -= shopLv * 60
                playerInvSwords.push(shopLv)
                textColorShop(`You bought ${swords[shopLv][0]}.\n`); wait(seconds);
            } else {
                textColorShop("You do not have enough gold.\n"); wait(seconds/2);
            }
        } else if(playerChoice === "2"){
            if(player[9] - shopLv * 50 >= 0){
                player[9] -= shopLv * 50
                playerInvArmor.push(shopLv)
                textColorShop(`You bought ${armor[shopLv][0]}.\n`); wait(seconds);
            } else {
                textColorShop("You do not have enough gold.\n"); wait(seconds/2);
            }
        } else if(playerChoice === "3"){
            if(player[9] - shopLv * 40 >= 0){
                player[9] -= shopLv * 40
                playerInvBoots.push(shopLv)
                textColorShop(`You bought ${boots[shopLv][0]}.\n`); wait(seconds);
            } else {
                textColorShop("You do not have enough gold.\n"); wait(seconds/2);
            }
        } else if(playerChoice === "4"){
            if(player[9] - (30 + 10 * (shopLv - 2)) >= 0){
                if(potionQty > 0){
                    player[9] -= 30 + 10 * (shopLv - 2)
                    player[6]++
                    potionQty--
                    textColorShop("You bought 1 health potion.\n"); wait(seconds);
                } else {
                    textColorShop("Health potion is sold out.\n"); wait(seconds);
                }
            } else {
                textColorShop("You do not have enough gold.\n"); wait(seconds/2);
            }
        } else if(playerChoice === "goodbye"){
            textColorShop(`Goodbye, ${nickName}.\n`); wait(seconds);
        } else if(playerChoice === "status"){
            menuPlayer()
        } else if(playerChoice === "potion"){
            if(player[6] > 0) {
                textColorAction("You used a potion."); wait(seconds);
                usePotion()
            } else {
                textColorAction("You have no more potion left."); wait(seconds);
            }
        } else if(playerChoice === "equip"){
            menuEquip()
        } else if(playerChoice === "map"){
            menuMap()
        } else if(playerChoice === "help"){
            menuHelp()
        } else if(playerChoice === "speed"){
            setTextSpeed()
        } else if(playerChoice === "restart"){
            textColorAction("Game restarting...\n"); wait(seconds*2);
            gameWorld()
        } else if(playerChoice === "quit"){
            quitGame()
        } else {
            textColorShop("I don't have what you\'re looking for.\n"); wait(seconds/2);
        }
    }
}
const wait = (ms) => { //learned from google delay time
    let start = new Date().getTime()
    let end = start

    while(end < start + ms){
        end = new Date().getTime()
    }
}
const setTextSpeed = () => {
    let playerChoice = 0

    textColorAction("Please select text scrolling speed:"); wait(seconds);
    while(playerChoice !== 1 && playerChoice !== 2 && playerChoice !== 3 && playerChoice !== 4){
        playerChoice = playerInput.questionInt(textColorAction("1️⃣ Slowest  2️⃣ Slow   3️⃣ Normal   4️⃣ Fast"))
        if(playerChoice !== 1 && playerChoice !== 2 && playerChoice !== 3 && playerChoice !== 4){
            textColorRed("Invalid choice, please choose 1️⃣ 2️⃣ 3️⃣ 4️⃣\n"); wait(seconds/2);
        }
    }
    if(playerChoice === 4){
        seconds = 700
        textColorAction("Text scrolling speed is set to Fast.\n"); wait(seconds);
    } else if(playerChoice === 3){
        seconds = 1500
        textColorAction("Text scrolling speed is set to Normal.\n"); wait(seconds);
    } else if(playerChoice === 2){
        seconds = 2200
        textColorAction("Text scrolling speed is set to Slow.\n"); wait(seconds);
    } else {
        seconds = 3000
        textColorAction("Text scrolling speed is set to Slowest.\n"); wait(seconds);
    }
}
const textColorTitle = (message) => console.log('\x1b[35m%s\x1b[0m', message) //magenta
const textColorWorld = (message) => console.log('\x1b[1;34m%s\x1b[0m', message) //light blue
const textColorBattle = (message) => console.log('\x1b[36m%s\x1b[0m', message) //cyan
const textColorStatus = (message) => console.log('\x1b[1;36m%s\x1b[0m', message) //light cyan
const textColorAction = (message) => console.log('\x1b[33m%s\x1b[0m', message)  //yellow
const textColorShop = (message) => console.log('\x1b[32m%s\x1b[0m', message) //green
const textColorRed = (message) => console.log('\x1b[31m%s\x1b[0m', message)  //red

gameIntro()
gameWorld()