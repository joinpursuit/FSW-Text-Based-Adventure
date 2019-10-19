const readline = require('readline-sync')
//Intro

let intro = ("~ Welcome to 'Tales of Persona' ~");
console.log(intro)
let dialogue = ("In this adventure you will be embark on a quest to find yourself and possibly others who will help you along the way. ");
console.log(dialogue)
enterGame = readline.question("Press 'enter' to continue:")
let nameInput = readline.question("What is your name? ")
readline.question(`Hi ${nameInput}! Let us begin with a game of chance. You will now be given a random number. `)
let num1 = Math.floor((Math.random() * 10) * 15);
readline.question(`Your number is ${num1}. Remember this number. "${num1}"`)
let favoriteNumber = readline.question((`So ${nameInput}, what is your favorite number?   `))
let number = readline.question(`Is your number ${favoriteNumber} + ${num1} greater than 150? yes or no    `)
if(number === "yes") {
    console.log()
        readline.question("The journey ahead will be very difficult.  ")
        readline.question("You will not meet anyone on this quest and will have to go it alone.")
    } else if (number === "no") {
        console.log()
            readline.question("You will encounter many travelers on your quest to finding yourself.")
}
// Story 

readline.question("As the sun sets, you enter a nearby town called 'Dalmasca'.")
readline.question("You find a room in the deserted town and get some rest.")
let question1 = readline.question("Do you want to explore the town? yes or no   ")
if (question1 === "yes") {
    readline.question("You walk around to see if anyone is around.")
} else if (question1 === "no") {
    readline.question("You prepare to exit the town.")
}
console.log("It is morning of a new day and you seek answers to the questions you've been keeping.")
let response = readline.question(`Who am I ${nameInput}, you ask yourself?    `)
readline.question(`I am ${response}`)
backstory = 1 < 3
    backstory = readline.question("Pick a number between 1 and 3")
switch(backstory) {
     case '1': 
         console.log("You are sweating as anxiety begins to kick in.")
         break;
     case '2':
         console.log("You begin to run for no reason.")
         break;
     case '3':
         console.log("You explore your inner thoughts trying to remember your past.")
         break;
     default:
         console.log("You are lost")
 }




let hunt = []
for (let i = 0; i < age.length; i++) {
    if (age[i] > 21) {
        canHunt.push[i];
    }
}














