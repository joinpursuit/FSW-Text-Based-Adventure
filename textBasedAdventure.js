const readline = require('readline-sync')

// Input name
let nameInput = readline.question("Enter your name: ")
console.log(`Hello ${nameInput}!  Welcome to my game.`)


// Portal 1 or  Portal 2
let portal = readline.question("Pick a portal, 1 (BATTLE) or 2 (ADVENTURE) ? ");

const area1 = "Coliseum";
const area2 = "AREA 51";


// OBJECTS for game ------------------------------------------------
let player = {
    name: nameInput,
    health: 100,
}

let gladiator = {
    name: "Gladiator",
    health: 100,
}


// FUNCTIONS --------------------------------------------------------
function play (){       // play() to initialize game
    while(portal !== '1' && portal !== '2' ){
        portal = readline.question("Please pick a Portal 1 or 2: ");
    }
    switch (portal){
        case '1':
            console.log("You have teleported to " + area1);
            portal1();
            break;
        case '2':
            console.log("You have teleported to " + area2);
            console.log(`Welcome to ${area2}.`)
            portal2();
            break;
    }
}

// PORTAL 1
const portal1 = () =>{         // portal1 = coliseum (battle arena)
    let a1 = readline.question("Welcome to the COLISEUM's ARENA. You are summoned to fight against an opposing gladiator." + "\n" +
            "You can either 1- dodge, 2- defend, or 3 - attack: ");
    while(a1 !== '1' && a1 !== '2' && a1 !== '3' && a1 !== 'dodge' && a1 !== 'defend' && a1 !== 'attack'){
        a1 = readline.question("Please pick an action. " + "You can either 1- dodge, 2- defend, or 3 - attack: ");
    }
    while(player.health > 0 && gladiator.health > 0) {
        if (a1 === "1" || a1.toLowerCase() === 'dodge' ){
            console.clear();
            console.log("You evade the gladiators attack but he successfully slashes you.")
            let hit1 = Math.floor(Math.random() * 24) + 10;  
            player.health -= hit1;
            console.log(`You lost ${hit1} health.`);
            console.log(player);
            console.log(gladiator);
            a1 = readline.question("Please pick an action. " + "You can either 1- dodge, 2- defend, or 3 - attack: ");
            while(a1 !== '1' && a1 !== '2' && a1 !== '3' && a1 !== 'dodge' && a1 !== 'defend' && a1 !== 'attack'){
                a1 = readline.question("Please pick an action. " + "You can either 1- dodge, 2- defend, or 3 - attack: ");
            }
        } else if (a1 === "2" || a1.toLowerCase() === 'defend'){
            console.clear();
            console.log("You defend the attack with your shield and attempt to counter attack the gladiator. You and the gladiator end up simulatenously getting hit.");
            let hit2 = Math.floor(Math.random() * 15) + 5;
            player.health -= hit2;
            gladiator.health -= hit2;
            console.log(`You lost ${hit2} health.`);
            console.log(`Gladiator lost ${hit2} health.`);
            console.log(player);
            console.log(gladiator);
            a1 = readline.question("Please pick an action. " + "You can either 1- dodge, 2- defend, or 3 - attack: ");
            while(a1 !== '1' && a1 !== '2' && a1 !== '3' && a1 !== 'dodge' && a1 !== 'defend' && a1 !== 'attack'){
                a1 = readline.question("Please pick an action. " + "You can either 1- dodge, 2- defend, or 3 - attack: ");
            }
        } else if (a1 === '3' || a1.toLowerCase() === 'attack'){
            console.clear();
            console.log("Moving with swiftness, you attack the gladiator by suprise");
            let hit3 = Math.floor(Math.random() * 28) + 12;
            gladiator.health -= hit3;
            console.log(`Gladiator lost ${hit3} health.`)
            console.log(player);
            console.log(gladiator);
            a1 = readline.question("Please pick an action. " + "You can either 1- dodge, 2- defend, or 3 - attack: ");
            while(a1 !== '1' && a1 !== '2' && a1 !== '3' && a1 !== 'dodge' && a1 !== 'defend' && a1 !== 'attack'){
                a1 = readline.question("Please pick an action. " + "You can either 1- dodge, 2- defend, or 3 - attack: ");
            }
        }
        if (player.health <= 0){
            console.log("You tried your best to defeat the gladiator, but it was you who were defeated instead... GAME OVER!");
            console.log("Try again!");
        }
        if (gladiator.health <= 0){
            console.log("You've defeated the gladiator. CONGRATULATIONS, you are the Champion of the arena!! YOU WIN!! ");
            console.log("Try going to a different portal next time, winner!");
        }
    }
    console.clear();
    if (gladiator.health <= 0 && player.health <= 0){
        console.log("The crowd goes wild. The match is a draw! This marks history in our arena where two of our gladiators have fallen at the same time! ... ");
        console.log("GAME IS OVER. Please pick a different portal");
    }else if (gladiator.health <= 0){
        console.log("You've defeated the gladiator. CONGRATULATIONS, you are the Champion of the arena!! YOU WIN!! ");
        console.log("Try going to a different portal next time, winner!");
    } else if (player.health <= 0){
        console.log("You tried your best to defeat the gladiator, but it was you who was defeated instead... GAME OVER!")
    }

} // END FUNCTION portal1

//functions - different pathways that split for Area51 
// PORTAL 2
const portal2 = () =>{         // portal2 = area51
    console.clear();
    let userInput = readline.question(`You look around and see that you are in a room with two doors. Which door should you go through? Left or Right? `);
    while(userInput.toLowerCase() !== 'left' && userInput.toLowerCase() !== 'right'){
        userInput = readline.question(`You look around and see that you are in a room with two doors. Which door should you go through? Left or Right? `);
    }
    if(userInput.toLowerCase() === 'left'){
        startLeft();
    } else{
        startRight();
    }
}

// LEFT
const startLeft = () => {
    let userInput = readline.question(`You enter through the left door and there is a huge corridor that stretches down for almost a mile. A horrifying stench fills the corridor. Traverse down the corridor or go back? `);
    while(userInput.toLowerCase() !== 'traverse' && userInput.toLowerCase() !== 'down' && userInput.toLowerCase() !== 'back' && userInput.toLowerCase() !== 'go back'){
        userInput = readline.question(`You enter through the left door and there is a huge corridor that stretches down for almost a mile. A horrifying stench fills the corridor. Traverse down the corridor or go back? `);
    }
    if(userInput.toLowerCase() === 'traverse' || userInput.toLowerCase() === 'down' || userInput.toLowerCase() === 'traverse down'){
        middleLeft();
    } else{
        portal2();
    }

}

const middleLeft = () => {

}

const endLeft = () => {

}

// RIGHT
const startRight = () => {

}


// INITIALIZE GAME
play();