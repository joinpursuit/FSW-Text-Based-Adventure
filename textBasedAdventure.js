
const readline = require('readline-sync')

let intro = ("Welcome to 'Soul Searcher'");
console.log(intro)
let dialogue = ("In this adventure you will be embark on a quest to find your missing soul mate");
console.log(dialogue)

let enterGame = readline.question("Press 'enter' to continue")

let nameInput = readline.question("Who are you?")
let hello = readline.question(`Hi ${nameInput}`)
let Number = readline.question("What's your favorite number?")
console.log(typeof Number)



// console.log(`Hello ${nameInput}!  Welcome to my Soul Searcher.`)
