const readline = require('readline-sync')

let nameInput = readline.question("Enter your name: ")
let name = nameInput

console.log(`Hello ${nameInput}!  Welcome to my game.`)
console.log(readline.question(name + ", are you over the age of 18? Please answer yes or no: "))
if ("yes"|| "Yes"|| "yEs"|| "yeS"|| "yES"|| "YeS"|| "YES"){
    console.log('Welcome ' + name)
} else if ("no" || "No" || "nO") {
    console.log("come back when you are 18," + name)
} else {
    console.log("Please answer yes or no")
}
