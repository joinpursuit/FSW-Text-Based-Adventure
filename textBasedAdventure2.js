const readline =  require("readline-sync");
const play = () => {
    console.log("You wake up, feeling a sharp cold wind, and find yourself in the middle of a ragin storm.")
    let userInput;
    while(userInput!== "yes"){
       userInput = readline.question("You wke up after finding")
    }

}
play()
