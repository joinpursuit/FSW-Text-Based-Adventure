const readline = require('readline-sync')

let race = [ "human", "elf","orc"]

let weapon = ["Sword","Axe","Spear","Fist"]

let playerHealth = 0;
let playerAttack = 0;
let armedPlayer = 0;

let nameInput = readline.question("Enter your name: ")

console.log(`Hello ${nameInput}!  Welcome to your first adventure.`)

let raceInput = readline.question(`Choose your race ${race}.`)


let raceStat = ''

if (raceInput === "human"){
    raceStat = [10,10];
} else if (raceInput === "elf"){
    raceStat = [12,8]
} else if (raceInput === "orc"){
    raceStat = [8,12];
}


playerHealth = raceStat[0]
playerAttack = raceStat[1]

console.log(`your race is ${raceInput} health ${playerHealth} attack ${playerAttack}`)

let weaponInput = readline.question(`Choose your weapon ${weapon}.`)

let weaponStat = 0


if (weaponInput === "sword"){
    weaponStat = 1;
} else if (weaponInput === "axe"){
    weaponStat = 2
} else if (weaponInput === "spear"){
    weaponStat = 3;
} else if (weaponInput === "fist"){
    weaponStat = 4;
}

console.log(`You have chosen ${weaponInput}. Your attack power has gone up by ${weaponStat}`)
