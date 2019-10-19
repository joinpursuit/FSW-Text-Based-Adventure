const readline = require('readline-sync')
const readlineSync = require('readline-sync')
// const currentDefaultOptions = readlineSync.setDefaultOptions([newDefaultOptions])

let playGame = true
let playerHealth = 0
let playerAttack = 0
let playerDefense = 0
let playableRace = ["Elf","Human","Orc"]
let playerRaceStat = {
    "Elf":[12,8,8], //array = healh,attack,Defence
    "Human":[10,10,10],
    "Orc":[8,12,12]
}
let availWeapon =["Sword","Axe","Spear","Fist"]
let weaponStat = {
    Sword: 2,
    Axe: 3,
    Spear: 4,
    Fist: 6
}

let floorEnemy = [
    {race : "Gaint Rat", stat :[6,4,4]},
    {race : "orc", stat :[10,6,6]},
    {race : "skeleton", stat :[4,4,4]},
    {race : "goblin", stat :[8,8,8]}
]
let floorBoss = [
    { boss : "Dragon", stat:[30,12,12]},
    { boss : "Lich", stat :[30,13,13]},
    { boss: "Dark Knight", stat :[30,11,11]},
]
let roundOneCounter = 0
let position = {
    x : 0,
    y : 0
};

const healthCheck = () =>{
    if(playerHealth <= 0){
        return playGame = false; 
    }
}


//choose which direction to go
const upDownLeftRight = () =>{ 
    let upDownLeftRightChoice;
    while(upDownLeftRightChoice !== "u" && upDownLeftRightChoice !== "l" && upDownLeftRightChoice !== "d" && upDownLeftRightChoice !== "r" ){
        upDownLeftRightChoice = readline.question('Which room would you like to move to? Up [u], Down [d], left [l], right [r]');
        console.log(upDownLeftRightChoice)
    }

    if(String(upDownLeftRightChoice) === "u"){
       return position["y"] += 1;
    } else if(String(upDownLeftRightChoice) === "l"){
       return position["x"] -= 1;
    } else if(String(upDownLeftRightChoice) === "d"){
       return position["y"] -= 1;
    } else if(String(upDownLeftRightChoice) === "r"){
       return position["x"] += 1;
}
}

//random number generator to determine if chest found
const chestChance = () =>{
    let cContains;
    cContains = Math.floor((Math.random() * 4) + 1);
    return cContains
}


//Determines what's in the chest
const chestContains = () =>{
    if(chestChance() === 1){
        console.log(`The chest contains a magic potion 🧪. Your health went up by 4 pts`)
        return playerHealth += 4
    } else if(chestChance() === 2){
        console.log(`The chest contained a booby trap. You took 6 pts of damage`)
        return playerHealth -= 6
    } else if(chestChance() === 3){
        console.log(`The chest contained a crystal. Your Defence went up by 3 pts of damage`)
        return playerDefense += 3
    } else {
        console.log(`The chest was empty. Better luck next time`)
    }
}

//Combines chance to find and what chest contains
const chest = () =>{
    let findChest = Math.floor((Math.random() * 3) + 1)
    if( findChest === 1){
        let openChest;
        while(openChest !== "y" && openChest !== "n"){
            openChest = readline.question('You found a chest. Do you want to open it? Yes [y] No [n]');
        }
        if( String(openChest) === "y" ){
            return chestContains()
        } else {
            console.log("Chest contain helpful items, open one next time")
        }
    }
}

const enemyEncounter = () =>{
    let eEncounterChan = Math.floor((Math.random() * 4)+1)
    if(eEncounterChan === 1) {
        console.log("the room is empty")
    } else if(eEncounterChan === 2){
            console.log("Gaint rat appears you take 2 pt of damage")
            return playerHealth -= 2
    } else if (eEncounterChan === 3 ){
            console.log("Gaint goblin appears you take 3 pt of damage")
            return playerHealth -=3
            // goblin()
    } else if(eEncounterChan === 4) {
            console.log("Gaint orc appears you take 4 pt of damage")
            return playerHealth -=4
    }
}


const roundOne = () =>{
    while(roundOneCounter < 3){
        healthCheck()
        if(playGame === false){break}
        console.log("you enter a new room")
        enemyEncounter()
        healthCheck()
        if(playGame === false){break}
        chest()
        healthCheck()
        if(playGame === false){break}
        roundOneCounter += 1
        upDownLeftRight()
    }
}

console.log("Welcome to my world player. Seems this is your first time to this world")

let nameInput = readline.question("What's your name child, can't keep calling you stranger ")

console.log(`${nameInput}, that is a mighty warrior's name.`)

let  raceInput = readlineSync.keyIn(`Haven't seen one of you kind before, what's your race? 
[0] Elf 🧝
[1] Human
[2] Orc `,
{limit: '${0-2}'});

let chosenRace = playableRace[raceInput]

playerHealth = playerRaceStat[chosenRace][0]
playerAttack = playerRaceStat[chosenRace][1]
playerDefense = playerRaceStat[chosenRace][2]

while(playGame === true){
console.log(`My good friend ${nameInput}. You have been teleported to a dungeon world.
You must fight your way to the surface and escape this world. `)

let  weaponInput = readlineSync.keyIn(`I know your eager to find your way home, but before you head out. You should arm yourself, what weapon do you choose? 
[0] Sword ⚔️
[1] Axe ⛏️
[2] Spear 🔱
[3] fist 👊 `,
{limit: `$<0-3>`});


let chosenWeapon = weaponInput
playerAttack += weaponStat[availWeapon[chosenWeapon]]


console.log(`Now that you are armed, you can start your journey. Be careful young one as there are many dark and evil things in this world.`)

upDownLeftRight()
roundOne()
upDownLeftRight()

healthCheck()
if(playGame === false){break}

console.log("Congrats, seems my predction was correct and you are mighty warrior. You have reached the final doorway before your freedom")

let  doorwayInput = readlineSync.keyIn(`Two doors are before you. One leads your freedom, the other to your Doom. Choose wiesely.
[1] left
[2] right `,
{limit: '${1-2}'});

let deathChan = Math.floor((Math.random() * 2) + 1)

if(doorwayInput === deathChan){
    console.log(`Wow, you have some great. This door leads to the outside and the start of your more dangerous journey.
    My the odds ever be in your favor`)
    playGame = false
} else {
    console.log(`My good friend it seems your good fortune has come to an end`)
    console.log("The great Dragon Kur burts through the door. He unleases a mighty fire blast.")
    console.log("======Game Over=====")
    playGame = false
}
}

