const readline = require('readline-sync')

let nameInput = readline.question("Enter your name: ")

console.log(`Hello ${nameInput}!  Welcome to my game.`)

let portal = readline.question("Pick a Portal 1-3: ");

const area1 = "Coliseum";
const area2 = "Mars";
const area3 = "President Trump's Office";
    
let player = {
    name: nameInput,
    health: 100,
}

let gladiator = {
    name: "Gladiator",
    health: 100,
}


    switch(portal){             // Switch statement to see which world the Player goes to

        case '1': //****** --------------------------------------------------------------------------------------------------------- case 1 is WORLD 1 - The COLISEUM 
            console.log("You have teleported to " + area1);

            let a1 = readline.question("Welcome to the ARENA. You are fighting against an opposing gladiator." + "\n" +
            "You can either 1- dodge, 2- defend, or 3 - attack: ");

            
            while(a1 !== '1' && a1 !== '2' && a1 !== '3' && a1 !== 'dodge' && a1 !== 'defend' && a1 !== 'attack'){
                a1 = readline.question("Please pick an action. " + "You can either 1- dodge, 2- defend, or 3 - attack: You can either 1- dodge, 2- defend, or 3 - attack: ");
            }
            
            while(player.health > 0 && gladiator.health > 0) {
                if (a1 === "1" || a1.toLowerCase() === 'dodge' ){
                    console.clear();
                    console.log("You evade the gladiators attack but he successfully grazes you.")
                    let hit1 = Math.floor(Math.random() * 10) + 1;  
                    player.health -= hit1;
                    console.log(`You lost ${hit1} health.`);
                    console.log(player);
                    console.log(gladiator)
                    a1 = readline.question("Please pick an action. " + "You can either 1- dodge, 2- defend, or 3 - attack: You can either 1- dodge, 2- defend, or 3 - attack: ");
                } else if (a1 === "2" || a1.toLowerCase() === 'defend'){
                    console.clear();
                    console.log("You defend the attack with your shield and attempt to counter attack the gladiator. You and the gladiator end up simulatenously getting hit.");
                    let hit2 = Math.floor(Math.random() * 20) + 10;
                    player.health -= hit2;
                    gladiator.health -= hit2;
                    console.log(`You lost ${hit2} health.`);
                    console.log(`Gladiator lost ${hit2} health.`);
                    console.log(player);
                    console.log(gladiator);
                    a1 = readline.question("Please pick an action. " + "You can either 1- dodge, 2- defend, or 3 - attack: You can either 1- dodge, 2- defend, or 3 - attack: ");
                } else if (a1 === '3' || a1.toLowerCase() === 'attack'){
                    console.clear();
                    console.log("Moving with swiftness, you attack the gladiator by suprise");
                    let hit3 = Math.floor(Math.random() * 40) + 20;
                    gladiator.health -= hit3;
                    console.log(`Gladiator lost ${hit3} health.`)
                    console.log(player);
                    console.log(gladiator);
                    a1 = readline.question("Please pick an action. " + "You can either 1- dodge, 2- defend, or 3 - attack: You can either 1- dodge, 2- defend, or 3 - attack: ");
                }
                else {
                    a1 = readline.question("Please pick an action. " + "You can either 1- dodge, 2- defend, or 3 - attack: You can either 1- dodge, 2- defend, or 3 - attack: ");
                }
            }
            console.clear();
            if (gladiator.health <= 0){
                console.log("You've defeated the gladiator. CONGRATULATIONS, you are the Champion of the arena!! YOU WIN!! ");
            }
            if (player.health <= 0){
                console.log("You tried your best to defeat the gladiator, but it was you who were defeated instead... GAME OVER!")
            }
        break;

        case '2': //****** --------------------------------------------------------------------------------------------------------- case 2 is WORLD 2 - MARS
            console.log("You have teleported to " + area2);
        
        break;

        case '3':
            console.log("You have teleported to " + area3);

        break;

        default:
            while(portal !== '1' && portal !== '2' && portal !== '3'){
                portal = readline.question("Please pick a Portal 1-3: ");
            }
    }