const readline = require('readline-sync')
let nameInput = readline.question("Enter your name: ")
console.log(`${nameInput}! Behold the beguiling lands of Spirit Island.`)

readline.keyInPause("Ready to commit yourself and listen to the history of our present.")

readline.keyInPause("In the endless cresting waves on our shores and enshrined in the rhizomatic matrices of (in)organic pulses threading the soil beneath, we are those who have no face and abide by the dynamic equilibrium of our ancestral lands, and its Free People. We are the Guardians. And we face a new pestilence arriving upon its hallowed ground")

function pause(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > milliseconds){
        break;
      }
    }
  }


let spiritName
const becomeGuardian = () => {let joinFight = readline.keyInYNStrict("Will you join us in our struggle against the menace of colonization? ") 
    if (joinFight === true) {
    pause (1000)
    let newName = readline.question(`No longer will you be known as ${nameInput}. What is your nom de guerre - In what name will the warrior's call summon you?: `)
    spiritName = newName
    pause (2000)
    console.log(`Arise fledgling spirit. Arm yourself ${newName}. You are manifest.`)
    pause (5000)
    } else {
    console.log("You have forsaken the truth. Banish yourself from our lands in dishonor")
    setTimeout ( () => process.exit(), 1000)
    }
}
becomeGuardian()

console.log("|BEHOLD YOUR NEW SIGHT|")

pause(4000)

readline.keyInPause("Their vessels have landed. Their denizens, like exponential infectious hordes, scorch the lands with their mere vision, sowing and reaping with inexhaustible hunger and claiming the enclosure of everything within their putrefying grasp.")

readline.keyInPause(`Within two years of arrival into our realm, the invaders have built outposts and laid waste throughout the alluvial pampas of the river Mayu, on the Western-facing shores of Anahuac. It is our sworn pursuit, ${spiritName}, to annhilate the blight. Prove Yourself!`)

pause (2000)

///////////////////////////////////////////////////////////////////////////////////////////////
//GAME SET-UP

// Initial Health Indices
let spiritHealth = 150
let settlerCapitalHealth = 400
//let settlerCapitalStructuralHealth = 400
//let miningComplexStructuralHealth = 200
let frontierGHealth = 250
//let frontierGStructuralHealth = 300
//let damStructuralHealth = 200
let farmsHealth = 150
//let farmsStructuralHealth = 150

//Spirit Energy Nexus (Prisms)
let spiritEnergy = 100

//Prism Cost Sacrifice
let spiritFire = 15 // Burns Settler Physical Structures
let spiritFamine = 20 // Kills Settler Population and Destroys Food Supply
let spiritPlague = 20 // Kills Settler Population
let spiritDisorder = 20 // Terminates Settler Communication
let spiritDerangement = 25 // Kills Settler Population (Incites Mass Psychosis)
let spiritWraith = 25 // Ravenous shadows of the night - Feed and Kill Settler Population

//Settler Power Counter
let settlerCapitalPower = 50
let miningComplexPower = 30
let frontierGPower = 40
let damPower = 30
let farmsPower = 20

const energyUsage = () => {
    spiritEnergy += spiritPower[targetPower].Energy
}

const guardianPower = () => {
    spiritPower = [{power: "Ignite Hellfire ", Energy: "15 Prisms"}, {power: "Starve the Settler Progeny ", Energy: 20}, {power: "Infect the Settlers with a Mortal Plague ", Energy: 20}, {power: "Disrupt Settler Communication", Energy: 20}, {power: "Incite Mass Purge Psychosis", Energy: 25}, {power: "Unleash the Wraith", Energy: 25}] 
    targetPower = readline.keyInSelect(spiritPower, `Choose the Fate of the Outpost. Reckon with the sacrifice`,
    {cancel: "The Coward's Way"});
    console.log(`You have chosen to ${spiritPower[targetPower].power}. You have righteously sacrificed ${spiritPower[targetPower].Energy} Prisms from your energy nexus`)
    energyUsage()
}

// const settlerDamage = () => {
//     if (spiritPower[targetPower].power = spiritFire){
//         if (colonialOutpost[targetOutpost] === colonialOutpost[0])

//     }
// }

const attackSettler = () => {
    if (colonialOutpost[targetOutpost] === colonialOutpost[0]){
        guardianPower()
        settlerDamage()
    } else if (colonialOutpost[targetOutpost] === colonialOutpost[1]){
        guardianPower()
        settlerDamage()
    }
}


const spiritDamage = () => { 
    if (attack === settlerCapitalPower){
    spiritHealth += settlerCapitalPower
    } 
}   


//GAME SET-UP
///////////////////////////////////////////////////////////////////////////////////////////////

const outposts1 = () => {
    colonialOutpost = ["The Settler Capital on the river delta ", "The Lead Ore Mining Complex in the hills of the Progenitors ", "The Freeholder Farms on the great pampas ", "The Frontier Garrison on the river terraces ", "TheWall damning our sacred waters "]
    targetOutpost = readline.keyInSelect(colonialOutpost,`Which defiled outpost shall we attack ${spiritName}?`);
    console.log(`Sunder ${colonialOutpost[targetOutpost]} `);
    attackSettler()
}
outposts1()

// const outposts = () => {
//     colonialOutposts = ["The Settler Capital ", "The lead ore mining complex ", "The freeholder farms ", "The frontier garrison ", "The river wall "]
//     targetOutpost = readline.keyInSelect(colonialOutposts, `Which defiled outpost shall we attack next? ${spiritName}`);
//     console.log(` ${colonialOutposts[targetOutpost]} `);
//     }


    function nbYear(p0, percent, aug, p) {
        let year = 1
        for (let i = 0; i <= p; i++) {
            let popInc = p0 + (p0 * (percent/100)) + aug
            if (popInc < p) {
                year++
                p0 = popInc
            }  
        } 
        return year
    } 


    
    