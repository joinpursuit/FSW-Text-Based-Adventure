const readline = require('readline-sync')

let nameInput = readline.question("Enter your name: ")

console.log(`Hello ${nameInput}!  Welcome to my game.`)

let portal = readline.question("Pick a Portal 1-3: ");

const area1 = "Coliseum";
const area2 = "AREA 51";
const area3 = "President Trump's Office";
    
let player = {
    name: nameInput,
    health: 100,
}

let gladiator = {
    name: "Gladiator",
    health: 100,
}


while(portal !== '1' && portal !== '2' && portal !== '3'){
    portal = readline.question("Please pick a Portal 1-3: ");
}

    switch(portal){             // Switch statement to see which world the Player goes to

        case '1': //****** --------------------------------------------------------------------------------------------------------- case 1 is WORLD 1 - The COLISEUM 
        console.clear();    
        console.log("You have teleported to " + area1);

            let a1 = readline.question("Welcome to the COLISEUM's ARENA. You are summoned to fight against an opposing gladiator." + "\n" +
            "You can either 1- dodge, 2- defend, or 3 - attack: ");

            
            while(a1 !== '1' && a1 !== '2' && a1 !== '3' && a1 !== 'dodge' && a1 !== 'defend' && a1 !== 'attack'){
                a1 = readline.question("Please pick an action. " + "You can either 1- dodge, 2- defend, or 3 - attack: ");
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
                    a1 = readline.question("Please pick an action. " + "You can either 1- dodge, 2- defend, or 3 - attack: ");
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
                    a1 = readline.question("Please pick an action. " + "You can either 1- dodge, 2- defend, or 3 - attack: ");
                } else if (a1 === '3' || a1.toLowerCase() === 'attack'){
                    console.clear();
                    console.log("Moving with swiftness, you attack the gladiator by suprise");
                    let hit3 = Math.floor(Math.random() * 40) + 20;
                    gladiator.health -= hit3;
                    console.log(`Gladiator lost ${hit3} health.`)
                    console.log(player);
                    console.log(gladiator);
                    a1 = readline.question("Please pick an action. " + "You can either 1- dodge, 2- defend, or 3 - attack: ");
                }
                else {
                    a1 = readline.question("Please pick an action. " + "You can either 1- dodge, 2- defend, or 3 - attack: ");
                }
            }
            console.clear();
            if (gladiator.health <= 0){
                console.log("You've defeated the gladiator. CONGRATULATIONS, you are the Champion of the arena!! YOU WIN!! ");
                console.log("Try going to a different portal next time, winner!");
            }
            if (player.health <= 0){
                console.log("You tried your best to defeat the gladiator, but it was you who were defeated instead... GAME OVER!")
            }

        break; //****** ------ END CASE 1: WORLD 1

        case '2': //****** --------------------------------------------------------------------------------------------------------- case 2 is WORLD 2 - MARS
        console.clear();    
        console.log("You have teleported to " + area2);
            
            let doors0 = ["left","left door", "right", "right door"];
            let doors1 = ["traverse down", "traverse", "down", "go back", "back"];
            let doors2 = ["open", "open door"]
            let damage = Math.floor(Math.random() * 20) + 10;

            console.log(`Welcome to ${area2}.`)
            let path = readline.question(`You look around and see that you are in a room with two doors. Which door should you go through? Left or Right? `)
            while ( path.toLowerCase() !== doors0[0] && path.toLowerCase() !== doors0[1] && path.toLowerCase() !== doors0[2] && path.toLowerCase() !== doors0[3]){
                path = readline.question("Sorry, I couldn't understand. Which door do you choose? Left door or right door? ")
            }

            // condition: left
            if (path.toLowerCase() === doors0[0] || path.toLowerCase() === doors0[1]){  
                console.clear();   
                let leftPath1 = readline.question(`You enter through the left door and there is a huge corridor that stretches down for almost a mile. A horrifying stench fills the corridor. Traverse down the corridor or go back? `);
                while ( leftPath1.toLowerCase() !== doors1[0] && leftPath1.toLowerCase() !== doors1[1] && leftPath1.toLowerCase() !== doors1[2] && leftPath1.toLowerCase() !== doors1[3] && leftPath1.toLowerCase() !== doors1[4]){
                    leftPath1 = readline.question(`Sorry, didn't understand that. Traverse down or go back? `)
                }
                if(leftPath1.toLowerCase() === doors1[0] || leftPath1.toLowerCase() === doors1[1] || leftPath1.toLowerCase() === doors1[2]){
                    console.clear();    
                    let leftPath2 = readline.question("You reach the end of the corridor and the stench has completely obliterated your sense of smell. There is huge door that seems unlocked in front of you. Open it? ");
                    while( leftPath2.toLowerCase() !== doors2[0] && leftPath2.toLowerCase() !== doors2[1]){
                        leftPath2 = readline.question("Sorry couldn't understand that. Open it? ");
                    }
                    if(leftPath2.toLowerCase() === doors2[0] || leftPath2.toLowerCase() === doors2[1]){
                        console.log("You open the door and a strange figure is seen in the middle of the room. It shifts towards you in an instant and you feel a prick on your chest. OUCH. The figure then disappears mysteriously out of thin air.")
                        player.health -= damage;
                        // CONTINUE console.log("You took "
                    }
                } else {

                }
            }

            // condition: right
            else{                                                                         
                console.log("what happens here if you go right");
            }

        break; //****** ------ END CASE 2: WORLD 2

        case '3':
            console.log("You have teleported to " + area3);

        break; //****** ------ END CASE 3: WORLD 3

    }