const readline = require('readline-sync')

let nameInput = readline.question("Enter your name: ")

console.log(`Hello ${nameInput}!  Welcome to my game.`)

//1.Create a video game
let readlineSync = require('readline-sync');
let i =""


while(i !== 'y' || i === 'n'){
    i = readlineSync.question("Your task is to create a video game. Do you want to complete the task?(y/n)")
   

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
let readlineSync2 = require('readline-sync')

for(a = 0; a <= 1; a++)
    if (a !== 'y' || a === 'n'){
  let a = readlineSync2.question("You started your project and realized you're stuck, so you ask your friend Tom for help and he offers you a caffeine pill to stay up to practice coding. Do you take the pill?[y/n]")
  if (a === 'y') {
     //'y' was pressed
  console.log("You took the caffeine pill")
  break
 } 
  if(a === 'n') {
     //'n' key was pressed
  console.log("You didnt take the caffeine pill[Answer yes]");

 }
}

//4.

