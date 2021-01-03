const rls = require('readline-sync')

const chalk = require('chalk');

//let playerName = rls.question("What is your name? \n")



//const wannaPlay = () => {
  let answer = rls.keyInYN("Would you like to play a game? \n")
  if (answer) {
    let playerName = rls.question("What is your name? \n")
    console.log(chalk.hex('#eb99ff')(`Welcome ${playerName}! \n`))
    let playerAge = rls.question("How old are you? \n")
    if (playerAge >= 18) {
      console.log(chalk.cyan("Let's play then!"))
      startGame()
    } else {
      quitGame18()
    }
    
  }
  else {
    quitGameNo()
  }
//}



//GAME
function startGame() {
  console.log("You have been travelling for a long time and find yourself in a forest")
  forrestOrTown()
} 

// stay in forest or go to town?
function forrestOrTown () {
  forOrTown = ["Forrest", "Town"]
  index = rls.keyInSelect(forOrTown, "Would you like to stay in the forrest or go to town?")
  if (index === 0) {
    chooseFight()
  } else if (index === 1) {
    chooseVisit()
  } else {
    forrestOrTown()
  }
}

// choose what to fight
function chooseFight () {
  enemy = ["Troll", "Orc", "Goblin"]
  index = rls.keyInSelect(enemy, "You encountered the enemy. What would you like to fight?")
  console.log(`Ok, ${playerName} is going to fight ` + enemy[index])
if (index === 0) {
  fightTroll()
} else if (index === 1) {
  fightOrc()
} else if (index === 2) {
  fightGoblin()
} else {
  // choose something!!!
}
}

//fight Troll
function fightTroll () {
  console.log("You have encountered a troll.")

}

//fight Orc
function fightOrc () {
  console.log("You have encountered an Orc")

}

//fight Goblin


//choose what to visit
const chooseVisit = () => {
  places = ["Church", "Tavern", "Market", "City Gates"],
  index = rls.keyInSelect(places, "Where would you like to go?")
  console.log(`Ok, ${playerName} is going to ` + places[index])
}

//visit Church



//visit Tavern
// drink
// sleep

//visit Market
//buy sword
//buy leather armor

// visit City Gates
const visitCityGates = () => {

}










//   let randomNumber = generateRandomNumber()
//   let guessCount = 1

//   while (guessCount < 10) {

  
//   let userGuess = rls.questionInt()
//   if (userGuess === randomNumber) {
//     console.log("Congrats! You got it right!")
//     let answer = rls.keyInYN("Do you wan to play agtain? \n")
// if (answer) {
//   gameLoop()
// }
// else {
//   quitGame()
// }
//   }
//   else if (userGuess > randomNumber) {
//     console.log("Your guess is too high")
//   }
//   else if (userGuess < randomNumber) {
//     console.log("Your guess is too low")
//   }
// guessCount++

// }

// console.log("You lose!")
// quitGameEnd()
//}



















//Quit game if player does not want to play
const quitGameNo = () => {
  console.log("Good choice, go study!")
  process.exit()
  
}

//Quit game if age less than 18
const quitGame18= () => {
  console.log("Sorry, you do not meet the age requirement")
  process.exit()
  
}

// Quit game after playing
const quitGameEnd = () => {
  console.log("Good luck on your journey, come visit us again")
  process.exit()
  
}










wannaPlay()

// let nameInput = readline.question("Enter your name: ")

// console.log(chalk.cyan(`Hello ${nameInput}!  Welcome to my game.`))


// var readlineSync = require('readline-sync'),
//   animals = ['Lion', 'Elephant', 'Crocodile', 'Giraffe', 'Hippo'],
//   index = readlineSync.keyInSelect(animals, 'Which animal?');

//   if(index !== -1) {
//       console.log('Ok, ' + animals[index] + ' goes to your room.');
//   }

 
