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

const becomeGuardian = () => {let joinFight = readline.keyInYNStrict("Will you join us in our struggle against the menace of colonization? ") 
    if (joinFight === true) {
        pause (1000)
        let spiritName = readline.question(`No longer will you be known as ${nameInput}. What is your nom de guerre - In what name will the warrior's call summon you?: `)
    pause (2000)
    console.log(`Arise fledgling spirit. Arm yourself ${spiritName}. You are manifest.`)
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

pause (4000)

readline.keyInPause(`Within two years of arrival into our realm, the invaders have built outposts and laid waste throughout the alluvial pampas of the river Mayu, on the Western-facing shores of Anahuac. It is our sworn pursuit, ${spiritName}, to annhilate the blight.`)

pause (2000)

//GAME SET-UP
let spiritHealth = 100
let settlerCapitalHealth = 400
let settlerCapitalStructuralHealth = 400
let miningComplexStructuralHealth = 200
let frontierGHealth = 250
let frontierGStructuralHealth = 300
let damStructuralHealth = 200
let farmsHealth = 150
let farmsStructuralHealth = 150

let spiritFire = 15 // Burns Settler Physical Structures
let spiritFamine = 20 // Kills Settler Population and Destroys Food Supply
let spiritPlague = 20 // Kills Settler Population
let spiritFlood = 15 // Floods Settler Physical Structures
let spiritDrought = 10 // Destroys Settler Food Supply
let spiritDisorder = 20 // Terminates Settler Communication
let spiritDerangement = 25 // Kills Settler Population (Incites Social Hysteria)
let spiritWraith = 25 // Mystical shadows of the night - Feed on Settler Population

let settlerCapitalPower = 50
let miningComplexPower = 30
let frontierGPower = 40
let damPower = 30
let farmsPower = 20

const attackSettler = () => {
    if (colonialOutpost[targetOutpost] = colonialOutpost[0])
    
}

const spiritDamage = num =>{ 
    } 


const outposts1 = () => {
    colonialOutpost = ["The Settler Capital on the river delta ", "The lead ore mining complex in the hills of the Progenitors ", "The freeholder farms on the great pampas ", "The frontier garrison on the river terraces ", "The wall damning our sacred waters "]
    targetOutpost = readline.keyInSelect(colonialOutposts, `Which defiled outpost shall we attack? ${spiritName}`);
    console.log(`Storm the ${colonialOutpost[targetOutpost]} `);
    attackSettler()
}
outposts1()





    
    // console.log(health) 
    // takeDamage(20)
    // console.log(health) 
    // console.log(takeDamage(30)) 

const outposts = () => {
    colonialOutposts = ["The Settler Capital ", "The lead ore mining complex ", "The freeholder farms ", "The frontier garrison ", "The river wall "]
    index = readline.keyInSelect(colonialOutposts, `Which defiled outpost shall we attack next? ${spiritName}`);
    console.log(` ${colonialOutposts[index]} `);
    }


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
    // while (true) {
    //     input = readlineSync.prompt();
    //     console.log(`You said "' + input + '"');
    //     if (input === 'bye') {
    //       break;
    //     }
    //   }
    //   console.log('It\'s exited from loop.');
    //   readlineSync.promptLoop(function(input) {
    //     console.log('-- You said "' + input + '"');
    //     return input === 'bye';
    //   });
    //   console.log('It\'s exited from loop.');

    
    