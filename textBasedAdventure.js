const readline = require('readline-sync')

let nameInput = readline.question("Enter your name: ")

console.log(`Hello ${nameInput}! Welcome to my game.`)

const play = () => {
  let userInput;
  while(userInput !== 'yes') {
    userInput = readline.question('Would you like to play, yes or no? ')
  }
  console.log('Lets get started')
}

play()

const maze = () => {
  console.log('Welcome to the maze. To escape the maze, you must defeat the guard in a game of Rock, Paper, Scissors ')
}

maze()

// Create user choice
const playerGuess = () => {
 let playerChoice = readline.question("Choose rock, paper, or scissors. ".toLowerCase())
    playerChoice = playerChoice.toLowerCase()
   if(playerChoice === "rock" ||   playerChoice === "paper" ||  playerChoice === "scissors" ) {
          return playerChoice;
   }
  console.log("Error");
  playerGuess();
}

// Create Guard choice
const guardGuess= () => {
  let choice = Math.random();
  if(choice < 0.34) {
    return "rock";
  } else if(choice <= 0.67) {
    return "paper";
  } else {
  return "scissors";
}
}

//Compare Guesses
const compareGuesses= (guess1, guess2) => {
  console.log(nameInput + " chose: " + guess1 + " and the Guard chose: " + guess2 + "!");
  if(guess1 === guess2) {
    console.log(nameInput + " and the Guard guessed the same thing. Try Again ");
    return 0; 
  }
  if(
    (guess1 === "rock" && guess2 === "scissors"
                       ||
     guess1 === "paper" && guess2 === "rock"
                       ||
    guess1 === "scissors" && guess2 === "paper"))
    {
   console.log(nameInput + " wins the round! ");
    return 1;
    }
   console.log("Guard wins the round! ");
   return 2;
}



const updateScores = (result, points) => {
    if(result === 1) {
      playerScore += points;
    } else if(result === 2) {
      guardSCore += points;
    } else if (result === 0) {
      guardSCore += 0;
      playerScore += 0;
    }
}


let playerScore = 0;
let guardSCore = 0;


function playGame(numOfRounds) {
  do {
    let player = playerGuess();
    let guard = guardGuess();
    let result = compareGuesses(player, guard);
    updateScores(result, 1);
    if(result !== 0) {
      numOfRounds--;
    }
  }while(numOfRounds > 0);

  if(playerScore > guardSCore) {
    console.log( nameInput + " has " + playerScore + " points compared to the Guards's " + guardSCore + " points. " + "So " + nameInput + " wins." + " You have escaped the maze!");
  } else {
    console.log("The Guard has " + guardSCore + " points compared to " + nameInput + "'s " + playerScore + " points. So the Guard wins." + ' You are stuck in the maze forever!');
  }


}


playGame(3)

