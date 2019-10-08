const readline = require('readline-sync')

let nameInput = readline.question("Enter your name: ")

console.log(`Hello ${nameInput}!  Welcome to my game.`)

//Open the box
let readlineSync = require('readline-sync');
if(readlineSync.keyInYN("You are at a park and find a box with your name on it. Would you like to open the box? (Y/N)")) {
    //'Y' key was pressed
 console.log("There is $10,000 in the box!");
} else {
    //N was pressed
 console.log("You missed out on $10,000 :( ")
}


//How will you spend it?
let readlineSync1 = require('readline-sync'),
  decisions = ['quit my job', 'invest', 'travel'],
  index = readlineSync1.keyInSelect(decisions, 'Which option?');
console.log('Ok,' + " you chose " + decisions[index]);

//





