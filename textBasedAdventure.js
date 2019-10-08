const readline = require('readline-sync')

let race = [ "Human", "Elf","Orc"]

let weapon = ["Sword","Axe","Spear"]

let raceStat = {
    Human:[10,10],
    Elf:[12,8],
    Orc:[8,12]
}
let weaponStat = {
    Sword:0,
    Axe:0,
    Spear:0
}

let nameInput = readline.question("Enter your name: ")

console.log(`Hello ${nameInput}!  Welcome to your first adventure.`)

let raceInput = readline.question(`Choose your race ${race}.`)
let chosenRace = raceInput
console.log(raceInput)


raceInputError = chosenRace
do{ let raceInputError = readline.question(`Sorry, that's not a correct race, Choose your race ${race}.`);
}
while(chosenRace !== "human" || chosenRace !== "elf" || chosenRace !== "orc");



let beginStat = ""

if(chosenRace === "human"){
    beginStat = raceStat["Human"]
} else if (chosenRace === "elf"){
    beginStat = raceStat["Elf"]
} else if (chosenRace === raceStat["orc"]){
    beginStat = raceStat["Orc"]
}

console.log(`your starting stats are ${Number(beginStat)}`)
