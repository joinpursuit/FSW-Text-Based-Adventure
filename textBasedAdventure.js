const readline = require('readline-sync')

//Everyone's health and attack declared
let warriorHp = 35
let warriorAtt = Math.floor(Math.random() * 20);
let minion1Hp = 15
let minion1Att = Math.floor(Math.random() * 7);
let minion2Hp = 20
let minion2Att = Math.floor(Math.random() * 10);
let minotaurHp = 40
let minotaurAtt = Math.floor(Math.random() * 15);
let Inventory = 2
let potionUse = 20
//Delay in terminal
function wait(ms){
    var start = new Date().getTime();
    var end = start;
    while(end < start + ms) {
      end = new Date().getTime();
   }
 }
let nameInput = readline.question("Enter your name: ")
wait(1500)

console.log(`Hello ${nameInput}!  Welcome to Jovanni's RPG retro game`)
wait(1500)

let classInput = readline.question('Choose a class: Warrior or Mage or Archer? '); wait(1500); {
    if(classInput === "warrior" || classInput === "warrior") wait(1500); {
        console.log("Hahaha, there is no free will, you'll be a warrior anyway.")
        console.log("Ah, a mighty Warrior equipped with shield and axe, a fine choice, are you ready?")
        let player = {
            Name: nameInput,
            Class: "Warrior",
            Health: warriorHp
         } //story starting as a warrior
        wait(1500)
        console.log(player)
        wait(1500)
        console.log("-------------------------------------------------")
        wait(1500)
        console.log("You begin your journey by entering a dark dungeon commanded by your King")
        wait(2000)
        console.log("He may have mentioned something about slaying a large beast but you weren't paying much attention")
        wait(2000)
        let choice1 = readline.question(`You follow a path, however, it spilts into two, do you go left or right? `);{
                if(choice1 === "left" || choice1 === "Left") {
                    console.log("You find an empty room with nothing, maybe everyone left"); wait(2000);
                } else { {
                player["Inventory"] = 2
                console.log("You find a minion inside the room, you two stare at each other and then he lunges at you"); wait(1500);
                console.log("Prepare for battle"); wait(1500); //loop coming up for battle update
                console.log("-------------------------------------------------"); wait(1500);
                for(let i = warriorHp; i > -1; i --){
                    i -= minion1Att
                    console.log("Health: " + warriorHp + " Potions: " + Inventory); wait(1500);
                    let battleInput = readline.question(`Do you wish to attack or use a potion? `);{
                        if(battleInput === "attack" || battleInput === "Attack") {
                            console.log(`You attack for ${warriorAtt}`); wait(1500);
                            console.log(`Minion's health is now ${minion1Hp - warriorAtt}`); wait(1500);
                            minion1Hp = (minion1Hp - warriorAtt)
                            console.log(`Minion attacks you for ${minion1Att}`); wait(1500);
                            // console.log(`Your health is now at ${warriorHp - minion1Att}`); remove for now
                            console.log("-------------------------------------------------"); wait(1500);
                            warriorHp = (warriorHp - minion1Att)
                            if (minion1Hp <= 0){
                                console.log ("You've defeated the minion and exit to the next hallway"); wait(1500); //end of battle room loop with only minion health; add your health
                                break
                                } else if ( warriorHp <= 0) {
                                    console.log ("You have been killed! GAME OVER: Try Again"); wait(1500);
                                    process.exit() //completely exit the script like an ending
                                }
                                    } else {
                                            if( Inventory < 1) {
                                                console.log("Out of potions"); wait(1500);
                                                } else {
                                                        warriorHp = warriorHp + potionUse
                                                        Inventory = Inventory - 1 // how to get it to stop at 0 potions and repeat: SOLVED!
                                                        }
                                                    }
                                                }
                                            }
                                        } 
                                    } console.log ("You find a door on the other side of the room and continue down its hall"); wait(2000);
                                    console.log("The hall once again, splits into two, game developers aren't that creative anymore"); wait(2000);
                                    let choice2 = readline.question(`So you know how this goes, do you go left or right? `); wait(1500);
                                    console.log("-------------------------------------------------"); wait(1500);
                                    if(choice2 === "right" || choice2 === "Right") {
                                        console.log("You find an empty room with nothing, you're starting to get really bored of this, so you move on"); wait(2000);
                                        } else {
                                        console.log("You find a minion inside the room, you two stare at each other and then he lunges at you"); wait(1500);
                                        console.log("Prepare for battle"); wait(1500); //loop coming up for battle update
                                        console.log("-------------------------------------------------"); wait(1500);
                                        for(let i = warriorHp; i > -1; i --){
                                            i -= minion2Att
                                            console.log("Health: " + warriorHp + " Potions: " + Inventory); wait(1500);
                                            let battleInput = readline.question(`Do you wish to attack or use a potion? `);{
                                                if(battleInput === "attack" || battleInput === "Attack") {
                                                    console.log(`You attack for ${warriorAtt}`); wait(1500);
                                                    console.log(`Minion's health is now ${minion2Hp - warriorAtt}`); wait(1500);
                                                    minion2Hp = (minion2Hp - warriorAtt)
                                                    console.log(`Minion attacks you for ${minion2Att}`); wait(1500);
                                                    // console.log(`Your health is now at ${warriorHp - minion2Att}`); remove for now
                                                    console.log("-------------------------------------------------"); wait(1500);
                                                    warriorHp = (warriorHp - minion2Att)
                                                    if (minion2Hp <= 0){
                                                        console.log ("You've defeated the minion and exit to the next hallway"); wait(1500); //end of battle room loop with only minion health; add your health
                                                        break
                                                    } else if ( warriorHp <= 0) {
                                                        console.log ("You have been killed! GAME OVER: Try Again"); wait(1500);
                                                        process.exit() //completely exit the script like an ending
                                                        }
                                                    } else {
                                                        if( Inventory < 1) {
                                                            console.log("Out of potions"); wait(1500);
                } else {
                    warriorHp = warriorHp + potionUse
                    Inventory = Inventory - 1 // how to get it to stop at 0 potions and repeat: SOLVED!
                    }
                } 
            }
        }
    }
        console.log(`You've made it this far, right? Go take a break, leave the computer, but you won't do that`); wait(2000);
        console.log("You walk towards a large door, the sounds get louder, you prepare yourself for whats on the other side and give a big push"); wait(4000);
        console.log('Nothing happens, how anticlimactic. You noticed a rug under you and you find a key, you unlocked the door and gently push'); wait(2000);
        console.log("-------------------------------------------------"); wait(1500);
        console.log("Inside you find the largest ugliest minotaur you've ever seen in your life, granted you've never actually seen a minotaur before."); wait(2000);
        console.log("The minotaur roars and charges at you"); wait(2000);
        console.log("Prepare for battle"); wait(1500); //loop coming up for battle update
        console.log("-------------------------------------------------"); wait(1500); {
        for(let i = warriorHp; i > -1; i --){
            i -= minotaurAtt
            console.log("Health: " + warriorHp + " Potions: " + Inventory); wait(1500);
            let battleInput = readline.question(`Do you wish to attack or use a potion? `);{
                if(battleInput === "attack" || battleInput === "Attack") {
                    console.log(`You attack for ${warriorAtt}`); wait(1500);
                    console.log(`Minotaur's health is now ${minotaurHp - warriorAtt}`); wait(1500);
                    minotaurHp = (minotaurHp - warriorAtt)
                    console.log(`Minotaur attacks you for ${minotaurAtt}`); wait(1500);
                    // console.log(`Your health is now at ${warriorHp - minotaurAtt}`); remove for now
                    console.log("-------------------------------------------------"); wait(1500);
                    warriorHp = (warriorHp - minotaurAtt)
                    if (minotaurHp <= 0){
                        console.log ("Congrats! You've defeated the Minotaur"); wait(1500); //end of battle room loop with only minion health; add your health
                        break
                        } else if ( warriorHp <= 0) {
                            console.log ("You have been killed! GAME OVER: Try Again"); wait(1500);
                            process.exit() //completely exit the script like an ending
                        }
                    } else {
                        if( Inventory < 1) {
                            console.log("Out of potions"); wait(1500);
                        } else {
                            warriorHp = warriorHp + potionUse
                            Inventory = Inventory - 1 // how to get it to stop at 0 potions and repeat: SOLVED!
                        }
                    }
                }
            }
        }
            console.log("Congratulations! You've finished the game!"); wait(1500);
            console.log("You return to the castle all tired but to a huge parade thrown by the King"); wait(1500);
            console.log("Turns out he is celebrating his reign and taking credit for taking care of the Minotaur"); wait(1500);
            console.log("You shrug and go to bed in your chambers")
            console.log("Thank you for playing!"); wait(1500);
            }
        }
    }