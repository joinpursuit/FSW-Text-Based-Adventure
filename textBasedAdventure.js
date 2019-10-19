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
let goblinMallet = 25

let deathBatHealth = 30
let unholySpiritHealth = 50
let finalDragonHealth = 200

let swordDamage = damagePoints + 20
let sword = swordDamage
let caveHeroWeapons = []
let caveHero =  {
    name: `${nameInput}`,
    health: health,
    atk: damagePoints,
    weapon: caveHeroWeapons,  
}

let checkStatus = caveHero


let overviewStatement = "We need your help. Our princess has been captured, and we need you to rescue her. Can we count on you?"
let missionStart = readline.question(`${overviewStatement}`)

missionStart = missionStart.toLowerCase()
let caveEntrance = readline.question("You arrive at the entrance of a dimly lit cave aligned with torches. From the torchlight you see there are three tunnel entrances: One to the left, one to the right, and one to the center. Which tunnel will you enter? Enter LEFT, CENTER, RIGHT OR CHECK STATUS: ")
caveEntrance = caveEntrance.toLowerCase()

let directionChoice2 = "back"

const goBack = (str) => {
    // str = str.toLowerCase()
    let back = readline.question("Type back to go back")
    if (back === directionChoice2) {
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
    caveHero["health"] = health
}

const goblinKingTakesDmage = (num) => {
    GoblinKingHealth -= num
    enemyCampArr[0]["health"] = GoblinKingHealth
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
        caveHeroWeapons.push(arr[i])
        // console.log(caveHeroWeapons)
        return `${nameInput} obtained an item!`
    }
    return `${nameInput}'s items: ${caveHeroWeapons}`
}
///

let enemyCampArr = [{
    name: "Goblin King",
    health: GoblinKingHealth,
    weapon: goblinMallet,
}, {
    name: "Lesser Goblin",
    health: goblinHealth,
}, {
    name: "Death Bat",
    health: deathBatHealth,
}, {
    name: "Unholy Spirit",
    health: unholySpiritHealth,
}]

// const leftPathway = readline.question(`As ${nameInput} descends further into the depths of the cave, the sounds eminating from its base begins to grow louder. ${nameInput} quickly realizes that they have stumbled into a nesting area for the cave's native hostiles, the Goblins. Stowing themselves behind a nearby boulder, ${nameInput} observes the occupants surrounding a campfire, guarding a door decorated with bones. What will you do?: FIGHT, HIDE, RUN`)
// leftPathway = leftPathway.toLowerCase()
let outcome = ""
// const leftChoice = (str) => {
    
    // }
    
    if (caveEntrance === "check status") {
        console.table(checkStatus);
        goBack("back");   
    }  else if (caveEntrance === "left") {
        console.log(`${nameInput} went left!`);
        console.log(itemDrop(itemDropArr));
        const leftPathway = readline.question(`As ${nameInput} descends further into the depths of the cave, the sounds eminating from its base begin to grow louder. ${nameInput} quickly realizes that they have stumbled into a nesting area for the cave's native hostiles, the Goblins. Stowing themselves behind a nearby boulder, ${nameInput} observes the occupants surrounding a campfire, guarding a door decorated with bones. What will you do?: FIGHT, HIDE, RUN`)
        leftPathway = leftPathway.toLowerCase()
    } else if (caveEntrance === "center") {
        console.log(`${nameInput} chose the center path!`);
        console.log(itemDrop(itemDropArr));
        // console.log(string)  
    } else if (caveEntrance === "right") {
        console.log(`${nameInput} chose the rightmost path!`);
        console.log(itemDrop(itemDropArr));
        const rightPathway = `${nameInput} encountered an ${enemyCampArr[0]["name"]} !`
        console.log(rightPathway)
        let battleStart = readline.question("What will you do? ATTACK, RUN, DEFEND")
        battleStart = battleStart.toLowerCase()
            if (battleStart === "attack") {
                console.log(`${nameInput} unleashed an attack!`)
                goblinKingTakesDmage(sword)
                console.log(`${enemyCampArr[0]["name"]} took ${sword} damage!!` )
                console.log(`${enemyCampArr[0]["name"]} has ${enemyCampArr[0]["health"]} health remaining...`)
                takeDamage(enemyCampArr[0]["weapon"])
                console.log(`${caveHero["name"]} took ${goblinMallet} damage!!`)
                console.log(`${caveHero["name"]} has ${health} health remaining...`)
            }
    }



// let randEnemy = enemyCampArr[Math.floor(Math.random() * enemyCampArr.length)]

// let battleStart = readline.question("You encountered a " + enemyTinyArr[0]["name"] + " ! What will you do?: TYPE ATTACK or RUN ");
// let battleStart2 = readline.question("You encountered a " + enemyTinyArr[1]["name"] + " What will you do?: TYPE ATTACK  or RUN ");
// battleStart = battleStart.toLowerCase()
// battleStart2 = battleStart2.toLowerCase()

    //    console.log(string) 
    
