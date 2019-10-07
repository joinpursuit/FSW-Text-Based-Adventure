const readline = require('readline-sync')

let nameInput = readline.question("Enter your name: ")

console.log(`Hello ${nameInput}!  Welcome to my game.`)

let portal = readline.question("Please pick a Portal 1-3: ");

const area1 = "Coliseum";
const area2 = "Mars";
const area3 = "President Trump's Office";
    

    switch(portal){

        case '1': 
            console.log("You have teleported to " + area1);
            let a1 = readline.question("Welcome to the ARENA. You are fighting against another gladiator." + "\n" +
            "You can either 1- dodge, 2- defend, or 3 - attack: ");
            if (a1 === "1" || a1.toLowerCase() === 'dodge' ){
                console.log("You try to dodge the incoming gladiator's attack, but tripped on a rock and he impales you with his blade. GAME OVER!");
            } else if (a1 === "2" || a1.toLowerCase() === 'defend'){
                console.log("You try to defend the attack. The opponent's blade is far too sharp and cracks yours' into two. Being at a major disadvantage - he ends up impaling you with his blade. GAME OVER!");
            } else if (a1 === '3' || a1.toLowerCase() === 'attack'){
                console.log("Moving with swiftness, you lunge forward towards the gladiator. Startled, he swings his blade with inaccuracy and misses his counterattack. You impale him while his guard is low." + "\n" + "The battle is won!");
                
                let p1 = readline.question("You are now crowned the champion of the Coliseum. You are selected to choose a prize: 100000 gold, Champion sword, or Shield: ");
                while (p1){
                    if (p1)
                }
                
                break;
            } else {
                console.log("Please choose an action 1-3 or perish");
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