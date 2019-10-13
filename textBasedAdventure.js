const readline = require('readline-sync')

//Everyone's health and attack declared
let mageHp = 50
const mageAtt = Math.floor(Math.random() * 20);
let warriorHp = 75
let warriorAtt = Math.floor(Math.random() * 15);
let minion1Hp = 20
let minion1Att = Math.floor(Math.random() * 10);
let minion2Hp = 20
let minion2Att = Math.floor(Math.random() * 5);
let minotaurHp = 40
let minotaurAtt = Math.floor(Math.random() * 15);
let Inventory = 2
let potionUse = 20
function wait(ms){
    var start = new Date().getTime();
    var end = start;
    while(end < start + ms) {
      end = new Date().getTime();
   }
 }
let nameInput = readline.question("Enter your name: ")
wait(1000)

console.log(`Hello ${nameInput}!  Welcome to my game.`)
wait(1000)

let classInput = readline.question('Choose a class: Mage or Warrior? '); wait(1000); {
    if(classInput === "Mage" || classInput === "mage") wait(1000); {
        console.log("Ah, a master of the mystic arts I see, are you ready?")
        let player = {
            Name: nameInput,
            Class: "Mage",
            Health: mageHp
         } //story starting as a Mage
         wait(1000)
         console.log(player)
         wait(1000)
        console.log("-------------------------------------------------")
        wait(1000)
        console.log("You begin your journey by entering a dark dungeon commanded by your King")
        wait(1500)
        console.log("He may have mentioned something about slaying a large beast but you weren't paying much attention")
        wait(1500)
        let choice1 = readline.question(`You follow a path, however, it spilts into two, do you go left or right? `);{
                if(choice1 === "left" || choice1 === "Left") {
                    console.log("You find an empty room with nothing, maybe everyone left"); wait(1500);
                } else { {
            player["Inventory"] = 2
            console.log("You find a minion inside the room, you two stare at each other and then he lunges at you"); wait(1000);
            console.log("Prepare for battle"); wait(1000); //loop coming up for battle update
            console.log("-------------------------------------------------"); wait(1000);
            for(let i = 75; i > -1; i --){
                    i -= minion1Att
                    console.log("Health: " + mageHp + " Potions: " + Inventory); wait(1000);
                    let battleInput = readline.question(`Do you wish to attack or use a potion? `);{
                        if(battleInput === "attack" || battleInput === "Attack") {
                            console.log(`You attack for ${mageAtt}`); wait(1000);
                            console.log(`Minion's health is now ${minion1Hp - mageAtt}`); wait(1000);
                            minion1Hp = (minion1Hp - mageAtt)
                            console.log(`Minion attacks you for ${minion1Att}`); wait(1000);
                            // console.log(`Your health is now at ${mageHp - minion1Att}`); remove for now
                            console.log("-------------------------------------------------"); wait(1000);
                            mageHp = (mageHp - minion1Att)
                            if (minion1Hp <= 0){
                                console.log ("You've defeated the minion and exit to the next hallway"); wait(1000); //end of battle room loop with only minion health; add your health
                                break
                            } else if ( mageHp <= 0) {
                                console.log ("You have been killed! GAME OVER: Try Again"); wait(1000);
                                process.exit() //completely exit the script like an ending
                        }
                    } else {
                        if( Inventory < 1) {
                            console.log("Out of potions"); wait(1000);
                        } else {
                            mageHp = mageHp + potionUse
                            Inventory = Inventory - 1 // how to get it to stop at 0 potions and repeat: SOLVED!
                        }
                    }
                }
            }
        } 
    } console.log ("You find a door on the other side of the room and continue down its hall"); wait(1000);
    console.log("The hall once again, splits into two, game developers aren't that creative anymore"); wait(1000);
    let choice2 = readline.question(`So you know how this goes, do you go left or right? `); wait(1000);
    console.log("-------------------------------------------------"); wait(1000);
}
}
}
//     } else { //story starting as a warrior
//         console.log("Ah, a mighty swordsman you are, are you ready?")
//         let player2 = {
//             Name: nameInput,
//             Class: "Warrior",
//             Health: warriorHp
//         }
//         console.log(player2)
//     }
// }
// console.log("You begin your journey by entering a dark dungeon commanded by your King")
// console.log("He may have mentioned something about slaying a large beast but you weren't paying much attention")
// let choice1 = readline.question(`You follow a path, however, it spilts into two, do you go left or right? `);{
//     if(choice1 === "left" || choice1 === "Left") {
//         console.log("You find an empty room with nothing, maybe everyone left");
//     } else {
//     console.log("You find a minion inside the room, you two stare at each other and then he lunges at you");
//     console.log("Prepare for battle " + classInput)
//         }
// }

//     console.log(`You attack for ${mageAtt}`);
//     console.log(`Minion's health is now ${minion1Hp - mageAtt}`);
//     console.log(`Minion attacks you for ${minion1Att}`);
//     console.log(`Your health is now at ${mageHp - minion1Att}`);{
//         let choice2 = readline.question("Do you wish to attack or use a potion? "); {
//             if(choice2 === "attack");
//             console.log(`You attack for ${mageAtt}`);
//             console.log(`Minion's health is now ${minion1Hp - mageAtt}`);
//             console.log(`Minion attacks you for ${minion1Att}`);
//             console.log(`Your health is now at ${mageHp - minion1Att}`);{
//         }
//     }
    //     let choice2 = readline.question(`You go past the room and find another path, once again, do you go left or right? `); {
    //         if(choice2 = "right"); {
    //             console.log("You find another empty room, where did everyone go? But you hear something in the distance");
    //             console.log("You walk towards a large door, the sounds get louder, you prepare yourself for whats on the other side and give a big push");
    //             console.log("You find yourself face to face with a large minotaur!")
    //             let combatchoice = readline.question(`Do you attack or defend? `);{
    //                 if(combatchoice === "attack");{
    //                     console.log(`You attack for ${mageAtt}`)
    //                     console.log(`Minotaur's health is now ${minotaurHp - mageAtt}`)
    //                 }
    //             }
    //         }
    //     }
        
//     } 
// }