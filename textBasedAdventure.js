const readline = require('readline-sync')

let nameInput = readline.question("Enter your name: ")

console.log(`Hello ${nameInput}!  Welcome to my game.`)

let portal = readline.question("Please pick a Portal 1-3: ");

const area1 = "Coliseum";
const area2 = "Mars";
const area3 = "";
    
    switch(portal){

        case '1': 
            console.log("You have teleported to " + area1);
            let x1 = readline.question("Welcome to the ARENA. You are fighting against another gladiator." + "\n" +
            "You can either 1- dodge, 2- defend, or 3 - attack: ");
            if (x1 === "1" || x1.toLowerCase() === 'dodge' ){
                console.log("You try to dodge the incoming gladiator's attack, but tripped on a rock and he impales you with his blade. GAME OVER!");
                break;
            } else if (x1 === "2" || x1.toLowerCase() === 'defend'){
                console.log("You try to defend the attack. The opponent's blade is far too sharp and cracks yours' into two. Being at a major disadvantage - he ends up impaling you with his blade. GAME OVER!");
                break;
            } else if (x1 === '3' || x1.toLowerCase() === 'attack'){
                console.log("Moving with swiftness, you lunge forward towards the gladiator. Startled, he swings his blade with inaccuracy and misses his counterattack. You impale him while his guard is low." + "\n" + "The battle is won!");
                break;
            } else {
                console.log("Please choose an action 1-3 or perish")
                jump : 16
            }
        break;

        case '2':
            console.log("You have teleported to " + area2);
        
        break;

        case '3':
            console.log("You have teleported to " + area3);

        break;

        default:
            if(portal !== "1" || portal !== "2" || portal !== "3"){
                console.log("You mistakenly stepped into a black portal and lets just say you didn't make it through the other side .. GAME OVER!");
                console.log("Try portals 1-3 next time!");
            }
    }