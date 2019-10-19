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
if (question1 === "yes") {
    readline.question("You walk around to see if anyone is around.")
} else if (question1 === "no") {
    readline.question("You prepare to exit the town.")
}
console.log("It is morning of a new day and you seek answers to the questions you've been keeping.")
readline.question(`Who am I ${nameInput}, you ask yourself. `)
















