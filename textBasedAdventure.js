const readline = require('readline-sync')

let nameInput = readline.question("Enter your name: ")

console.log(`Hello ${nameInput}!  Welcome to my game.`)

//1.Create a video game
let readlineSync = require('readline-sync');
let i =""


while(i !== 'y' || i === 'n'){
    i = readlineSync.question("Your task is to create a video game. Would you like to create one?(y/n)")
   
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
  index = readlineSync1.keyInSelect(decisions, 'You only have 2 weeks to complete make a video game. What will you do next?');
console.log(" You decided to " + decisions[index]);

//3.You need help
let readlineSync2 = require('readline-sync')

for(a = 0; a <= Infinity; a++)
    if (a !== 'y' || a === 'n'){
  let a = readlineSync2.question("You started your project and realized you're stuck, so you ask your friend Tom for help and he offers you a cup of coffee to keep you up. Do you take the coffee?[y/n]")
  if (a === 'y') {
     //'y' was pressed
  console.log("You drank the coffee")
  break
 } 
  if(a === 'n') {
     //'n' key was pressed
  console.log("You didnt drink the coffee [Answer yes]");

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

//5. The coffee made you nervous
var readlineSync4 = require('readline-sync'),
  choices = ['take a walk', 'watch TV', 'call Tom'],
  index1 = readlineSync4.keyInSelect(choices, "You're caffiene sensitive! The coffee you drank made you nervous and you need to relax. What do you do?");
console.log('You decided to ' + choices[index1]);

//6. Finally start
const readlineSync = require('readline-sync')
answer = readlineSync.question('The caffiene wears off. Are you ready to start making your video game?', {
  trueValue: ['yes', 'y'],
  falseValue: ['no', 'n']
});
if (answer === true) {
  console.log("I'm ready to start");
//y was pressed
} else if (answer === false) {
  console.log("I don't know how to start!");
//n was pressed
} else {
//Unknown answer was pressed
  console.log('Invalid answer');
}

//7.

