const readline = require("readline-sync");
const chalk = require("chalk");
let nameInput = readline.question(chalk.blue("Enter your name: "));

console.log(`Hello ${nameInput}!  Welcome to my game.`);

function startGame() {
  console.log("This is a game in which you open doors until you get a cookie ... or DIE!");
  if (readline.keyInYNStrict("Shall we begin?")) {
    beginGame();
  } else {
    quitGame();
  }
}

function beginGame() {
  console.log("Good Choice!! Now to get the cookie, choose one of 3 doors");
  choice1();
}

function choice1() {
  let doors = ["Door 1", "Door 2"];
  console.log("Which would you like to open?");
  answ = readline.keyInSelect(doors);
  choices = doors[answ];
  if (choices === doors[0]) {
  console.log("Sorry, this door isn't for cookie searching wimps! It's for men that eat beef. Try again!! Sissy!!");
    choice1();
  } else if (choices === doors[1]) {
    console.log("You got milk but no cookie. But here are two other doors");
    if (readline.keyInYNStrict("Would you like to continue?")) {
        doorSets1();
    }else {
        quitGame();
    }
}   
}

function doorSets1() {
    let doors = ["Door 3", "Door 4"];
    console.log("Which would you like to open?");
    answ = readline.keyInSelect(doors);
    choices = doors[answ];
    if(choices === doors[0]){
        console.log("Close but no cigar!");
        if (readline.keyInYNStrict("Would you like to try door 4?")){
            door4();
        }else{
            quitGame();
        }
    } else if(choices === doors[1]){
        door4();
        
    }
}

    
function door4() {
    console.log("Yay you got the cookie but so did the mouse and it left you just one chip! Enjoy!!");
    if (readline.keyInYNStrict("Still hungry? Would you like play again?")) {
        beginGame();
      } else {
        quitGame();
    }
}
  
function quitGame() {
  console.log("You Godd*@$ Sissy!!");
  process.exit();
}

startGame();
