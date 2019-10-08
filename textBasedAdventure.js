const readline = require('readline-sync')

//Everyone's health and attack declared
let mageHp = 75
const mageAtt = Math.floor(Math.random() * 20);
let warriorHp = 100
let warriorAtt = Math.floor(Math.random() * 15);
let minion1Hp = 20
let minion1Att = Math.floor(Math.random() * 5);
let minion2Hp = 20
let minion2Att = Math.floor(Math.random() * 5);
let minotaurHp = 60
let minotaurAtt = Math.floor(Math.random() * 15);
let Inventory = 1
let potion = 20

let nameInput = readline.question("Enter your name: ")

console.log(`Hello ${nameInput}!  Welcome to my game.`)

let classInput = readline.question('Choose a class: Mage or Warrior? ');{
    if(classInput === "Mage" || classInput === "mage") {
        console.log("Ah, a master of the mystic arts I see, are you ready?")
        let Player = {
            Name: nameInput,
           Class: classInput,
          Health: mageHp
         }
         console.log(Player)
         } else if (classInput === "Warrior" || classInput === "warrior"); {
        console.log("Ah, a mighty swordsman you are, are you ready?")
        let Player2 = {
            Name: nameInput,
            Class: classInput,
            Health: warriorHp
        }
        console.log(Player2)
    } else {
        console.log("Try again")
    } 
}
// console.log("You begin your journey by entering a dark dungeon commanded by your King")
// console.log("He may have mentioned something about slaying a large beast but you weren't paying much atttention")
// let choice1 = readline.question(`You follow a path, however, it spilts into two, do you go left or right? `);{
//     if(choice1 === "left"); {
//         console.log("You find an empty room with nothing, maybe everyone left");
//     }
//         if(choice1 === "right");
//     console.log("You find a minion inside the room, you two stare at each other and then he lunges at you");
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