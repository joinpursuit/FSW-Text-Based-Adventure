const readline1 = require('readline-sync')

const chalk = require('chalk')

let nameInput = readline1.question("Enter your name: ")

console.log(`Hello ${nameInput}!  Welcome to The Flame Of Ragnarok.`)
console.log(readline1.keyInYN(chalk.red.bold('Would you like to play my game? ')))
