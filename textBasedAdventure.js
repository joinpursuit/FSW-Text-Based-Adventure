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

for(a = 0; a <= Infinity; a++)
    if (a !== 'y' || a === 'n'){
  let a = readlineSync2.question("You started your project and realized you're stuck, so you ask your friend Tom for help and he offers you a pill to help you concentrate. Do you take the pill?[y/n]")
  if (a === 'y') {
     //'y' was pressed
  console.log("You took the pill")
  break
 } 
  if(a === 'n') {
     //'n' key was pressed
  console.log("You didnt take the pill [Answer yes]");

 }
}

//4. Enter your password
var readlineSync3 = require('readline-sync');
menuId = readlineSync3.question('You forgot your password to your github, but you know that your last three passwords are either 369, 246, or 51015. Guess your password: ', {limit: 51015});

var readlineSync3 = 51015 
switch (readlineSync3) {

case 369:
console.log("Incorrect Password")

case 246:
console.log("Incorrect Password")

case 51015:
console.log("Logging in...")
break;

default:
console.log("Incorrect Password")

}

//5. 