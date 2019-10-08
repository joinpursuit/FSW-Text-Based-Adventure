const readline = require('readline-sync')
let titleCard = readline.question("CAVE HERO! PRESS ENTER TO BEGIN!")
console.log(`${titleCard}`)
let nameInput = readline.question("Enter your name: ")
console.log(`Greetings ${nameInput}!`)
let caveHero =  {
    name: `${nameInput}`,
    hP: 10,
    aP: 2,
    weapon: "",
    item: "",   
}

let checkStatus = caveHero


let caveEntrance = "You arrive at the entrance of a dimly lit cave aligned with torches. From the torchlight you see there are three tunnel entrances: One to the left, one to the right, and one to the center. Which tunnel will you enter?"
let overviewStatement = "We need your help. Our princess has been captured, and we need you to rescue her. Can we count on you?"
let missionStart = readline.question(`${overviewStatement} Type yes or no.`)

let smallEnemy = {
    name: "Goblin",
    attackPower: 1,
    health: 5,
}

let bigEnemy = {
    name: "Orc Soldier",
    attackPower: 3,
    health: 10,
}
let enemyTinyArr = [smallEnemy, bigEnemy];
let battleStart = readline.question("You encountered an" + smallEnemy + " ! What will you do?: TYPE ATTACK or RUN ");
let battleStart2 = readline.question("You encountered an" + bigEnemy + " What will you do?: TYPE ATTACK  or RUN ");

battleStart = battleStart.toLowerCase()
battleStart2 = battleStart2.toLocaleLowerCase()

missionStart = missionStart.toLowerCase()

                if (missionStart === "yes") {
                    console.log(caveEntrance)
                } else {     
                    console.log("Your cowardice shames us - Good day!")
                }


let tunnels = readline.question("Enter LEFT, CENTER, RIGHT, CHECK STATUS: ")
tunnels = tunnels.toLowerCase()

let tunnelOutcomesArr = ["Battle Start!","You rescued her!","Nothing here. Go back?"]
let randomOutcome = Math.floor(Math.random() * 10)

// ENEMY VARIABLES


//ITEM VARIABLES 
let sword = 1
let shield = 2
let meat = 3
let torch = 4
let monsterSword = 5
let doorKey = 6
let itemDropArr = [sword, shield, meat, torch, monsterSword, doorKey]

// 

// if (tunnels === "check status") {
//     console.table(checkStatus)
// } else {

// }
    
// let tunnelChoice = []

// let tunnelOutcomes = 

if (tunnels === "check status") {
    console.table(checkStatus)
} else if (tunnels === "left") {
   console.log("You went left!")
   console.log(string)
} else if (tunnels === "center") {
    console.log("You chose the center path!")
    console.log(string)  
} else if (tunnels === "right") {
    console.log("You chose the rightmost path!")
       console.log(string) 
} else {
       console.log(string)
}

// console.log(tunnelOutcomesArr)
let string = ""
let i = 0

for (i; i < tunnelOutcomesArr.length; i ++) {
if (randomOutcome > 6) {
    string = tunnelOutcomesArr[0];
} else if (randomOutcome > 3) {
    string = tunnelOutcomesArr[1]
} else {
    string = tunnelOutcomesArr[2]
}    
}
