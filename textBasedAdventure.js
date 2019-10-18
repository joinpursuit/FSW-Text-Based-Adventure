const readline = require('readline-sync')

let intro = ("~ Welcome to 'Tales of Pursuit' ~");
console.log(intro)
console.log()
let dialogue = ("In this adventure you will be embark on a quest to find yourself and others who will help you along the way. ");
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

if(num1 > 50) {
    confirm("The journey ahead will be very difficult")

    num1 = readline.question("")
} else if (num < 50) {
    confirm("You will encounter many friends on your path to ")
}

