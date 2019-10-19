const readline = require('readline-sync')
//Intro

let intro = ("~ Welcome to 'Tales of Pursuit' ~");
console.log(intro)
let dialogue = ("In this adventure you will be embark on a quest to find yourself and possibly others who will help you along the way. ");
console.log(dialogue)
enterGame = readline.question("Press 'enter' to continue:")
let nameInput = readline.question("What is your name? ")
readline.question(`Hi ${nameInput}! Let us begin with a game of chance. You will now be given a random number. `)
let num1 = Math.floor((Math.random() * 10) * 15);
readline.question(`Your number is ${num1}. Remember this number. "${num1}"`)
readline.question((`So ${nameInput}, what is your favorite number?   `))
let number = readline.question(`Is your number + ${num1} greater than 150? yes or no    `)
if(number === "yes") {
    console.log()
        readline.question("The journey ahead will be very difficult.  ")
        readline.question("You will not meet anyone on this quest and will have to go it alone.")
    } else if (number === "no") {
        console.log()
            readline.question("You will encounter many travelers on your quest to finding yourself.")
}
// Story 

readline.question("As the sun sets and you enter a nearby town called 'Dalmasca'.")
readline.question("You find a room in the deserted town and get some rest.")
let question1 = readline.question("Do you want to enter explore the town? yes or no   ")


// /* Backstory */

// readline.question("As the sun sets and you enter a nearby town called 'Dalmasca'.")
// console.log()
// readline.question("How many letters are in the town name    ")
// let townName = "Dalmasca"
// for (let i = 0; i = townName.length; i++) {
//     if (i === townName.length) {
//         readline.question("You find a room in the deserted town and get some rest.")
//     } if (i !== 8) {
//         readline.question("You go for a walk through town and search for clues.")
//     }
// }

let backstory = readline.question("Pick a number between 1 and 3 ")
backstory = 1 < 3
    backstory = readline("Pick a number between 1 and 3")
switch(backstory) {
     case '1': 
         setting  = "You find a room in the deserted town and get some rest.";
         break;
     case '2':
         setting = "You go for a walk through town and search for clues.";
         break;
     case '3':
         setting = "You get lost in your thoughts try to remember your past.";
         break;
     default:
         setting = "You are lost";
 }


``
let numInput;
    numInput= 1 < 10
       numInput = readline.question("How many pieces? Pick a number from 0-10");
   switch (numInput) {
     case '10':
       console.log("Wow! You're a chocoholic like me! Enjoy! Come back for more chocolate making any time!! Thank you for playing my game!");
       break;
     case '9':
     case '8':
     case '7':
     case '6':
       console.log("Cool! You have enough for sharing--or not! Come back for more! Thanks for playing!" );
       break;
       case '5':
       case '4':
       case '3':
       case '2':
       case '1':
       console.log("That's great, just enough to tantilize ya! I hope you come back for more! Thanks for playing!" );
       break;
     default:
       console.log("That's too bad! Come back when you change your mind!");
   }
   }