const readline = require('readline-sync')

let nameInput = readline.question("Enter your name: ")

console.log(`Hello ${nameInput}!  Welcome to my game.`)

//Open the box
let readlineSync = require('readline-sync');
let i = readlineSync.keyInYN("You are at a park and find a box with your name on it. Would you like to open the box? (Y/N)")

while(i !== 'y' && i === 'n'){
  i = readlineSync.keyInYN("You are at a park and find a box with your name on it. Would you like to open the box? (Y/N)")
}
  if(readlineSync.keyInYN("You are at a park and find a box with your name on it. Would you like to open the box? (Y/N)")) {
      //'Y' key was pressed
   console.log("There is $10,000 in the box!");
  } else {
      //'N' was pressed
   console.log("You missed out on $10,000. (Answer yes) ")
  }



//How will you spend it?
let readlineSync1 = require('readline-sync'),
  decisions = ['pay off student loans', 'buy a new car', 'travel for a year'],
  index = readlineSync1.keyInSelect(decisions, 'Which option?');
console.log('Ok,' + " you chose " + decisions[index]);

//




