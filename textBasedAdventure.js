const readline = require('readline-sync')

let nameInput = readline.question("Hey! what's your name?: ")

console.log(`Hello ${nameInput}!`)

const gameIntro = (space = " ") => {

    let userInput = readline.question("Would you like to play The Dungeon Of Questions?: ")
console.clear()
if (userInput === "yes"){
    console.log(`Welcome to the Dungeon of Questions ${nameInput}!. You must navigate through the dungeon by going through various chambers. Each chamber is gaurded by the Questions  Reeper! Answer the question correctly, continue your path through the dungeon. Answer the question incorrectly, The reeperwill take your soul!, and you     will have to start your journey from the BEGINING Good Luck!`)
} else {
    console.log("Aww, Someone's afraid. Well you should be!, Come back at your own risk! ")
} 
return space
}
console.log(gameIntro());




const startGame = (space = " ") => {
   let userInput;  
   while (userInput !== "enter"){
   userInput = readline.question("Type enter when you are ready to enter the dungeon:")
}
console.clear() 
return space; {

}
}
console.log(startGame())
console.log("Reaper: Stop rite there!");




