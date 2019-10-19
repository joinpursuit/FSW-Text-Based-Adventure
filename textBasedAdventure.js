const readline = require('readline-sync')

const  play = () => {
    let userInput;
    userInput = readline.question('Would you like to play?') 
    while (userInput !== "yes") {
        console.log("Really?")
        userInput = readline.question("Would you like to play? Enter yes or no?")
    } 
    if (userInput === "yes"); {
            console.log("You've made the right choice.")
    userInput = readline.question("Are you having a good day or a bad day?")
    while (userInput === "good day"||"Good Day"||"Good"||"good") {
        goodDay()
    }  else {
            badDay()
        }

    }
const badDay = () =>{

}
const goodDay = () =>{

}