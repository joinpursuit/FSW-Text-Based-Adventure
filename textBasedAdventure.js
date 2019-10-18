const readline = require('readline-sync');
let titleCard = readline.question("CAVE HERO! PRESS ENTER TO BEGIN!");
console.log(`${titleCard}`);
let nameInput = readline.question("Enter your name: ");
console.log(`Greetings ${nameInput}!`);

///STATS
let health = 100
let damagePoints = 20
let goblinHealth = 50
let GoblinKingHealth = 100
let swordDamage = damagePoints + 20
let sword = swordDamage
let caveHeroWeapons = []
let caveHero =  {
    name: `${nameInput}`,
    health: health,
    atk: damagePoints,
    weapon: "",  
}

let checkStatus = caveHero


let overviewStatement = "We need your help. Our princess has been captured, and we need you to rescue her. Can we count on you?"
let missionStart = readline.question(`${overviewStatement} Type yes.`)

missionStart = missionStart.toLowerCase()
let caveEntrance = readline.question("You arrive at the entrance of a dimly lit cave aligned with torches. From the torchlight you see there are three tunnel entrances: One to the left, one to the right, and one to the center. Which tunnel will you enter? Enter LEFT, CENTER, RIGHT, CHECK STATUS: ")
caveEntrance = caveEntrance.toLowerCase()

let directionChoice2 = "back"

const goBack = (str) => {
    // str = str.toLowerCase()
    let back = readline.question("Type back to go back")
    if (back = directionChoice2) {
        return caveEntrance
    }
    return back
}

function startGame(choice) {
    if (missionStart === "yes") {
        console.log(caveEntrance)
    } 
}
    
const takeDamage = (num) => {
    health -= num
}

const healthUp = (num) => {
    health += num
}

const goblinKingTakesDmage = (num) => {
    GoblinKingHealth -= num
}

const goblinTakesDamage = (num) => {
    goblinHealth -= num
}

// //ITEM VARIABLES 

let meat = 3
let monsterSword = damagePoints + 30
let doorKey = 6

let itemDropArr = [{ sword: sword},{meat: meat}, {monsterSword: monsterSword}, {doorKey: doorKey},{nothing: "nothing"}]

function itemDrop(arr) {
    for (let i = 0; i < arr.length; i++) {
        Math.floor(Math.random([i]) * 20)
        let result = console.log(arr[i])
        return `${nameInput} obtained ${result}`
    }
}



//     //
// let enemyCampArr = [
//     {name: "Goblin King", hP: 20, atk: 5, spd: 2,},
//     {name: "Goblin Grunt", hp: 5, atk: 1, spd: 2,},
//     {name: "Death Worm", hp: 3, atk: 3, spd: 5,},
//     {name: "Bat", hp: 2, atk: 1, spd: 3, atk: 3,}
// ]

// let randEnemy = enemyCampArr[Math.floor(Math.random() * enemyCampArr.length)]

// let battleStart = readline.question("You encountered a " + enemyTinyArr[0]["name"] + " ! What will you do?: TYPE ATTACK or RUN ");
// let battleStart2 = readline.question("You encountered a " + enemyTinyArr[1]["name"] + " What will you do?: TYPE ATTACK  or RUN ");
// battleStart = battleStart.toLowerCase()
// battleStart2 = battleStart2.toLowerCase()

if (caveEntrance === "check status") {
    console.table(checkStatus)
    goBack("back")   
}  else if (caveEntrance === "left") {
   console.log(`${nameInput} went left!`);
   console.log(itemDrop(itemDropArr))
} else if (caveEntrance === "center") {
    console.log(`${nameInput} chose the center path!`);
    console.log(itemDropArr)
    // console.log(string)  
} else if (caveEntrance === "right") {
    console.log(`${nameInput} chose the rightmost path!`)
    console.log(itemDrop(itemDropArr))
}
    //    console.log(string) 
    
