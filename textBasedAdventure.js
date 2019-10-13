const readline = require('readline-sync')

let nameInput = readline.question("Enter your name: ")

console.log(`Hello ${nameInput}!  Welcome to my game.`)

//1.Create a video game
let readlineSync = require('readline-sync');
let i =""


while(i !== 'y' || i === 'n'){
    i = readlineSync.question("Your task is to create a video game. Do you want to complete the task?")
   

 if(i === 'y') {
     //'Y' key was pressed
  console.log("You accepted the task!");
  break
 } 
  if (i === 'n') {
     //'N' was pressed
  console.log("You rejected the task. (Answer yes)")
  
 }


}

//2.How will you spend your time
let readlineSync1 = require('readline-sync'),
  decisions = ["Start the day before it's due", 'Start now', 'Ask someone for help'],
  index = readlineSync1.keyInSelect(decisions, 'You only have 2 weeks to complete this task. What will you do next?');
console.log('Ok,' + " you chose " + decisions[index]);

//3.You need help
const readline1 = require('readline-sync')
let seeFriend = readline1.question("You started your project and realized you're stuck, so you ask your friend Tom for help")
for(let conversation = 2; conversation > 1; conversation--)
if (conversation !== 2 && conversation === 1 ){
console.log("Take the help")
} else {
  console.log("No, thanks I don't need it")
}






