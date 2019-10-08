const readline = require('readline-sync')

console.log("                       Street Explorer: The journey that no one wants to go on                       ")


let nameInput = readline.question("Please enter your name: ")

let name = nameInput

console.log(`What's up ${nameInput}!  Welcome to my game.`)
console.log(readline.question(name + ", are you over the age of 18? Please answer yes or no: "))
if ("yes"|| "Yes"|| "yEs"|| "yeS"|| "yES"|| "YeS"|| "YES"){
    console.log("you've received your Hood Pass " + name)
} else if ("no" || "No" || "nO") {
    console.log("come back when you are 18," + name)
} else {
    console.log("Please answer yes or no")
}

