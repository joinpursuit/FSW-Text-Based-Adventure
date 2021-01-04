const readline = require("readline-sync");
const chalk = require("chalk");
let nameInput = readline.question(chalk.yellow("Enter your name:"));

console.log(`Hello ${nameInput}!  Welcome to my game.`);

function startGame() {
  console.log(chalk.yellow("This is a game in which you open doors until you get a cookie ... or you don't! \n \n "));
  if (readline.keyInYNStrict("Shall we begin?")) {
    beginGame();
  } else {
    quitGame();
  }
}

function beginGame() {
  console.log(chalk.yellow("Good Choice!! Now to get the cookie, choose from one of 2 doors."));
  choice1();
}

function choice1() {
  let doors = ["Door 1", "Door 2"];
  console.log(chalk.yellow("Which would you like to open? Hint: It's not the one you just chose..."));
  answ = readline.keyInSelect(doors);
  choices = doors[answ];
  if (choices === doors[0]) {
  console.log(chalk.red("Sorry, this door isn't for cookie searching wimps! It's for beef eating men. Try again"));
    choice1();
  } else if (choices === doors[1]) {
    console.log(chalk.red("You got milk but no cookie. But there are two other doors which you can try"));
    if (readline.keyInYNStrict(chalk.yellow("Would you like to continue?"))) {
        doorSets1();
    }else {
        quitGame();
    }
}   
}

function doorSets1() {
    let doors = ["Door 3", "Door 4"];
    console.log(chalk.green("Which would you like to open now?"));
    answ = readline.keyInSelect(doors);
    choices = doors[answ];
    if(choices === doors[0]){
        console.log(chalk.red("Close but no cigar!"));
        if (readline.keyInYNStrict(chalk.yellow("Would you like to try door 4?"))){
            door4();
        }else{
            quitGame();
        }
    } else if(choices === doors[1]){
        door4();
        
    }
}

    
function door4() {
    console.log(chalk.green("Yay!! you got the cookie but so did the mouse and it left you just one chip! Enjoy!!"));
    if (readline.keyInYNStrict(chalk.yellow("Still hungry? Would you like play again?"))) {
        beginGame();
      } else {
        quitGame();
    }
}
function quitGame() {
  console.log(chalk.yellow("Guess you're not that hungry. Better luck next time!!"));
  process.exit();
}
startGame();