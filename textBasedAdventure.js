const readline = require('readline-sync')

let nameInput = readline.question("Enter your name: ")

console.log(`Hello ${nameInput}!  Welcome to my game.`)

let portal = "";
while(portal !== '1' || portal !== '2' || portal !== '3'){
    portal = readline.question("Please pick a Portal 1-3: ");
}


const area1 = "Coliseum";
const area2 = "Mars";
const area3 = "President Trump's Office";
    

    switch(portal){             // Switch statement to see which world the Player goes to

        case '1': // case 1 is World 1 - The COLISEUM
            console.log("You have teleported to " + area1);
            let a1 = readline.question("Welcome to the ARENA. You are fighting against another gladiator." + "\n" +
            "You can either 1- dodge, 2- defend, or 3 - attack: ");
            if (a1 === "1" || a1.toLowerCase() === 'dodge' ){
                console.clear();
                console.log("You try to dodge the incoming gladiator's attack, but tripped on a rock and he impales you with his blade. GAME OVER!");
            } else if (a1 === "2" || a1.toLowerCase() === 'defend'){
                console.clear();
                console.log("You try to defend the attack. The opponent's blade is far too sharp and cracks yours' into two. Being at a major disadvantage - he ends up impaling you with his blade. GAME OVER!");
            } else if (a1 === '3' || a1.toLowerCase() === 'attack'){
                console.clear();
                console.log("Moving with swiftness, you lunge forward towards the gladiator. Startled, he swings his blade with inaccuracy and misses his counterattack. You impale him while his guard is low." + "\n" + "The battle is won!");
                
                let p1 = readline.question("You are now crowned the champion of the Coliseum. You are selected to choose a prize: Bag of gold, Dragon head, or Remote with big red button: ");
                if (p1.toLowerCase() === "bag of gold" || p1.toLowerCase() === "bag" || p1.toLowerCase() === "gold"){
                    console.clear();
                    console.log(`You chose the Bag of Gold. Filled with excitement, you hurry to a market nearby to buy things you would like to take home with you. Along the way, a small hooded figure crashes into you. "SO sorry SO sorry!"
                    Your eyes gaze upon a shiny golden sword hanging above the first shops' seller. Without hesistation you reach into your pocket for the bag of gold, BUT WAIT IT isn't there anymore! Where could it have went?? Damn that hooded person! You run out of money to survive in the city and end up wandering the outskirts of the civilization. Frail and weak, a lion hunts you down. GAME OVER! `);
                } else if(p1.toLowerCase() === "dragon head" || p1.toLowerCase() === "dragon" || p1.toLowerCase() === "head"){
                    console.clear();
                    console.log(`You chose the Dragon head. While traveling on your next adventure, you wonder about what the head does. Frustrated that it had no significant use, you smash it into millions of pieces. A loud screech is heard from the mountains afar. Behind it a huge dragon is seen flying towards you. As he comes closer you see its malicious eyes, brooding and out for blood. You try to run away but the dragon easily catches up to you. He uses his fire breath and scorches you alive. GAME OVER!`);
                } else if (p1.toLowerCase() === "big red remote" || p1.toLowerCase() === "remote" || p1.toLowerCase() === "remote with red button" || p1.toLowerCase() === "remote with big red button" || p1.toLowerCase() === "red button"){
                    console.clear();
                    console.log("You chose the Remote with the BIG RED button. The remote looks very out of place in this era of time and it also gives off a very mysterious aura. Might as well see what the button does. You press down on the big red button. Your life flashes before your eyes. You wake up back in your normal body and normal time. Thank goodness. YOU WIN!!");
                } else{
                    console.clear();
                    console.log("You reject the offer of a prize and the King is disgustingly insulted. He orders the guards to take you to the chamber. There you are beheaded by the chamber's ward. GAME OVER!")
                }
                break;
            } else {
                console.log("Please choose an action 1-3 or perish");
            }
            break;

        case '2':   // case 2 is 
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