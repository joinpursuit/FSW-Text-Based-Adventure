const readline = require('readline-sync')

let nameInput = readline.question("Enter your name: ")

console.log(`Hello ${nameInput}!  Welcome to my game.`)

let portal = readline.question("Please pick a Portal 1-3: ")

const area1 = "Area 51";
const area2 = "Mars";
const area3 = "";

switch(portal){
    case '1': 
        console.log("You have teleported to " + area1);
        let x1 = readline.question("Welcome to the ARENA. You are fighting against another gladiator." + "\n" +
        "You can either 1- dodge, 2- defend, or 3 - attack");
        if (x1 === "1" ){
            "You s"
        } else if (x1 === "2"){
            
        }
        break;

    case '2':
        console.log("You have teleported to " + area2);
        
        break;

    case '3':
        console.log("You have teleported to " + area3);

        break;

    default:
        console.log("Please pick a valid portal number. Examples: 1, 2, or 3");
}