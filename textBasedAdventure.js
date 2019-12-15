const readline = require('readline-sync')

let nameInput = readline.question("Enter your name: ")

console.log(`Hello ${nameInput}!  Welcome to my game.`)




// if (truthy conditional) {
// 	Do code block
// } else if (diff truthy conditional) {
// 	Do this code block
// } else {
// 	The code block to run on default. 

const startGame = ()=>{
  
    let lurePlayerin = readline.question("Are you ready to Play? Please type an answer of yes or no into the console: ")

    if (lurePlayerin === "yes" ){

        let cool = "the name of this game is unicorns and dragons. a game of fate and mystical powers";
       console.log(cool)
    } else if (lurePlayerin === "no"){
        let scram = "scram then. you must be scared"
        console.log(scram)
    } else {
    console.log("You must answer with either yes or no")
    }
}
startGame()

const gameOn = ()=>{
let uni = 'Your magical power is Unicorn Dust. It will allow you to temporarily freeze time, make yourself invisible, or temporarily blind your opponent. Now that you are in the forrest. You see a cave to your right, and glittering road to your left. You must either type in the word "cave" to enter cave, or type in the word "road" to continue down the road. Type in your choice:'
let drag = 'Your magical power is Dragon Flame. It will allow you to temporarily slow time, shield yourself with fire, or temporarily cage your opponent in fire. Now that you are in the forrest. You see a cave to your right, and glittering road to your left. You must either type in the word "cave" to enter cave, or type in the word "road" to continue down the road. Type in your choice:'

let questOneInput = "";

if (questOneInput !== "unicorn" && questOneInput !== "dragon") {
  
    const insideStart = (holder)=>{

        if (holder==="cave")
   { let caving = readline.question("You enter the cave and it looks like a cozy home. There is a dinner table set up in the middle of the room with 4 place settings heaping with food. You dont know if any or if all of the food is poisoned,but you must pick one. Please type in a number from 1 to for to choose which meal you will eat to fill your belly or meat your demise");
if (caving === Math.floor(Math.random() * 10)){let winone = readline.question(" You picked a meal that is nutritous and gives you magical powers to rule the forrest. You win!")
return winone}
else{let lostone = readline.question(" You picked the poisonous plate of food and die. You lose!")}
}else if(holder==="road"){
    let roading = readline.question("You begin to walk down the road and it feels like you have been walking for hours before you reach a fork in the road. You don't know where any of these four roads lead. It could be to your demise or it could be to warmth shelter and a happy ending. Please type in a number form 1 to 4 to choose a road along with your destiny");
if (roading === Math.floor(Math.random() * 10)){let win = readline.question(" You picked the road to fame and fortune. You win!")
return win}
else {let lost = readline.question(" you picked the road that will get you eaten by a bear. Sorry!! you lose the game")
return lost}
}

    }

    
let questOneInput = readline.question("In order to play you must first choose if you want to be a unicorn or if you want to be a dragon. You must type in your choice now:")

switch(questOneInput) {
    
case "unicorn":  
let forrestUni = readline.question(`excellent choice ${nameInput}. ${uni}` )
insideStart(forrestUni)
break;
case "dragon":
let forrestDrag = readline.question(`excellent choice ${nameInput}. ${drag}` )
insideStart(forrestDrag)
break;
default:
readline.question("You can only choose a unicorn or dragon. Please type in your choice now: ");

}




}


}            
gameOn()

 