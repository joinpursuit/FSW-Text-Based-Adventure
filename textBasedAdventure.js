const readline = require('readline-sync')//DO NOT CHANGE

let nameInput = readline.question("Enter your name: ")

console.log(`Hello ${nameInput}!`)

let wouldYouLikeToPlay = readline.question("Are you ready to play the: Good Samaritan Race (yes || no)? ")
if (wouldYouLikeToPlay === "yes") {
    console.log("Lets get started!!!")
} else {
    console.log("Go stretch those hamstrings and your good conscious muscles and come back!!!")
}

let gamePlayDescription = "You have been preping for the Big Race for months now. You'll have 5hrs to complete the race. There's one thing, the race isn't just about making it to finish line in time but also helping friends in need as you as you go. You'll gain \"Good Samaritan Points\" aka GSP as you go. Your final score will depend on both. Helping will cost you time though so choose wisely who you help"
