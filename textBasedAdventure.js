const readline = require('readline-sync')

let race = [ "human", "elf","orc"]

let weapon = ["Sword","Axe","Spear"]

let weaponStat = {
    Sword:0,
    Axe:0,
    Spear:0
}
let playerHealth = 0;
let playerAttack = 0;
let armedPlayer = 0;

let nameInput = readline.question("Enter your name: ")

console.log(`Hello ${nameInput}!  Welcome to your first adventure.`)

let raceInput = readline.question(`Choose your race ${race}.`)

let raceStat = []

if (raceInput = "human"){
    raceStat = [10,10];
} else if (raceInput = "elf"){
    raceStat = [12,8]
} else if (raceInput = "orc"){
    raceStat = [8,12];
}


playerHealth = raceStat[0]
playerAttack = raceStat[1]

console.log(`your race is ${raceInput} health ${playerHealth} attack ${playerAttack}`)


// do{ let raceInputError = readline.question(`Sorry, that's not a correct race, Choose your race ${race}.`);
// if(raceInputError === "human" || raceInputError === "elf" || raceInputError === "orc"){break;}
// }
// while(raceInputError !== "human" || raceInputError !== "elf" || raceInputError !== "orc");
// raceInputError.tolowercase;



// let beginStat = ""

// if(chosenRace === "human"){
//     beginStat = raceStat["Human"]
// } else if (chosenRace === "elf"){
//     beginStat = raceStat["Elf"]
// } else if (chosenRace === raceStat["orc"]){
//     beginStat = raceStat["Orc"]
// }

// console.log(`your starting stats are ${Number(beginStat)}`)
