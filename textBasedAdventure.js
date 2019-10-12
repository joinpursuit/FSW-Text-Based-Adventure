const readline = require('readline-sync')

let payGame = true

let race = [ "human", "elf","orc"]

let weapon = ["Sword","Axe","Spear","Fist"]

let playerHealth = 0;
let playerAttack = 0;
let playerDefense = 0;
let armedPlayer = 0;

let nameInput = readline.question("Enter your name: ")

console.log(`Hello ${nameInput}!  Welcome to your first adventure.`)

let raceInput = readline.question(`Choose your race ${race}.`)


let raceStat = ''

if (raceInput === "human"){
    raceStat = [10,10,10];
} else if (raceInput === "elf"){
    raceStat = [12,8,8]
} else if (raceInput === "orc"){
    raceStat = [8,12,12];
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

console.log(`You have chosen ${weaponInput}. Your attack power has gone up by ${weaponStat}. Now it's time for your first challenge. 
    A goblin appears.`)
playerAttack = weaponStat+playerAttack

let goblinHealth = 30;
let goblinAttack = 12;
let goblinDefense = 6;
let roundOneCounter = 0
let actionAvailable = ["attack", "defend", "runAway"]
let roundOneContinue = true;
let damageRoundOnePlayer = Math.abs(goblinDefense-playerAttack)
let damageRoundOneGoblin = Math.abs(playerDefense-goblinAttack)

let actionRoundOne = ""
actionRoundOne = readline.question(`Choose your action. ${actionAvailable}.`);

while(roundOneContinue === true && actionRoundOne !== ""){
    // actionRoundOne = readline.question(`Choose your action. ${actionAvailable}.`);
    for(roundOneCounter = 1; roundOneCounter <= 3; roundOneCounter += 1){
        if(playerHealth <= 0){
            console.log("fail")
            roundOneContinue = false;
            playGame = false;
        } else if(roundOneCounter === 3 && playerHealth > 0){
            console.log("success");
            roundOneContinue = false
        } else if (playerHealth > 0 ){
            let goblinAction = Math.floor(Math.random() * 2);
            if(actionRoundOne === "attack"){
                if(goblinAction === 0){
                    goblinHealth -= damageRoundOnePlayer;
                    if(playyerHealth >0 && goblinHealth > 0){console.log(`You successfully attacked, and delt ${damageRoundOnePlayer} in damage. ${playerHealth} ${goblinHealth}`);
                    } else if (playerHealth >0 && goblinHealth <= 0){
                        console.log(`goblin defeated - attack`)
                        roundOneContinue = false

                }   else if (playerHealth <= 0){
                    console.log('you died')
                    roundOneContinue = false
                    playGame = false
                    
                }
                    actionRoundOne = ""
                } else if (goblinAction === 1){
                    goblinHealth -= damageRoundOnePlayer
                    playerHealth -= damageRoundOneGoblin
                    console.log(`You successfully attacked, and delt ${damageRoundOnePlayer} in damage. Your enemy also delt ${damageRoundOneGoblin}  ${playerHealth} ${goblinHealth}`);
                    // actionRoundOne = ""
                    actionRoundOne = readline.question(`Choose your action. ${actionAvailable}.`);
                } else if(goblinAction === 2){
                    playerHealth -= damageRoundOneGoblin
                    console.log(`You attacked failed, and your enemy delt ${damageRoundOneGoblin}  ${playerHealth} ${goblinHealth}`);
                    // actionRoundOne = ""
                    actionRoundOne = readline.question(`Choose your action. ${actionAvailable}.`);
                }
            }
        }
}
}