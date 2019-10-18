const readline = require('readline-sync')

let intro = ("~ Welcome to 'Tales of Pursuit' ~");
console.log(intro)
console.log()
let dialogue = ("In this adventure you will be embark on a quest to find yourself and possibly others who will help you along the way. ");
console.log(dialogue)
console.log()
enterGame = readline.question("Press 'enter' to continue:")
console.log()
let nameInput = readline.question("What is your name? ")
console.log()

readline.question(`Hi ${nameInput}! Let us begin with a game of chance. You will now be given a random number. `)
console.log()

let num1 = Math.floor((Math.random() * 10) * 15);
readline.question(`Your number is ${num1}. Remember this number. "${num1}"`) 
console.log()

let number = readline.question("Is your number greater than 50? yes or no    ")
if(number === "yes") {
    console.log()
    readline.question("The journey ahead will be very difficult.  ")
    readline.question("You will not meet anyone on this journey and will have to go it alone")
} else if (number === "no") {
    console.log()
    readline.question("You will encounter many friends on your path to finding yourself. ")
    readline.question("As the sun sets and you enter a nearby town you meet someone by the name of Kate. Kate is a healer. ")
}
 
if ("The journey ahead will be very difficult") {
    console.log()
    readline.question("You enter a strange forest and a moster appears.")
}



/*
let player = {
    health: 100
    attack: 20
}

let opponenet = {
    health: 200
    attack: 5
}

const */