const rls = require("readline-sync");

const chalk = require("chalk");

// ask if player wants to play? (DONE)
const wannaPlay = () => {
  let answer = rls.keyInYN("Would you like to play a game? \n");
  if (answer) {
    let playerName = rls.question("What is your name? \n");
    global.playerName = playerName;
    console.log(chalk.hex("#eb99ff")(`Welcome ${playerName}! \n`));
    let playerAge = rls.question("How old are you? \n");
    if (playerAge >= 18) {
      console.log(chalk.cyan("Let's play then!"));
      startGame();
    } else {
      quitGame18();
    }
  } else {
    quitGameNo();
  }
};

//GAME
function startGame() {
  console.log(
    "You have been travelling for a long time and find yourself on a meadow near a forrest. Nearby you can see a small town"
  );
  forrestOrTown();
}

// stay in forest or go to town? (DONE)
function forrestOrTown() {
  forOrTown = ["Forrest", "Town"];
  let answer = rls.question(
    "Would you like to go to the forrest or to the town? \n"
  );
  if (answer === "forrest") {
    chooseFight();
  } else if (answer === "town") {
    chooseVisit();
  } else {
    console.log("Please enter a valid selection")
    forrestOrTown();
  }
}

// choose what to fight (DONE)
function chooseFight() {
  enemy = ["Troll", "Orc", "Goblin"];
  index = rls.keyInSelect(
    enemy,
    "You encountered the enemy. What would you like to fight?");

  if (index === 0) {
    console.log(`Ok, ${playerName} is going to fight ` + enemy[index]);
    fightTroll();
  } else if (index === 1) {
    console.log(`Ok, ${playerName} is going to fight ` + enemy[index]);
    fightOrc();
  } else if (index === 2) {
    console.log(`Ok, ${playerName} is going to fight ` + enemy[index]);
    fightGoblin();
  } else if (index === -1) {
    forrestOrTown();
  } 
}

//fight Troll (DONE)
function fightTroll() {
  console.log("You have encountered a Troll.");
  let playerHP = 15
  for (let i = 0; i < 3; i++) {
  let attack = rls.keyIn("Press a to attack \n", {limit: 'a'});
playerHP = playerHP - (Math.random() * (7 - 4) + 4)
}
if (playerHP > 0) {
  console.log("Congrats, you win. Also, you found 15 gold coins in Troll's pocket")
  let playerGold = 15
  global.playerGold = global.playerGold + playerGold
  forrestOrTown();
} else {
  console.log("Sorry, you lose")
  forrestOrTown();
}
  
}

//fight Orc
function fightOrc() {
  console.log("You have encountered an Orc.");
  let playerHP = 15
  for (let i = 0; i < 3; i++) {
  let attack = rls.keyIn("Press a to attack \n", {limit: 'a'});
playerHP = playerHP - (Math.random() * (7 - 4) + 4)
}
if (playerHP > 0) {
  console.log("Congrats, you win. Also, you found 10 gold coins in Orc's pocket")
  let playerGold = 10
  global.playerGold = playerGold
  forrestOrTown();
} else {
  console.log("Sorry, you lose")
  forrestOrTown();
  
}

//fight Goblin
function fightGoblin() {
  console.log("You have encountered a Goblin.");
  let playerHP = 15
  for (let i = 0; i < 3; i++) {
  let attack = rls.keyIn("Press a to attack \n", {limit: 'a'});
playerHP = playerHP - (Math.random() * (7 - 4) + 4)
}
if (playerHP > 0) {
  console.log("Congrats, you win. Also, you found 5 gold coins in Goblin's pocket")
  let playerGold = 5
  global.playerGold = playerGold
  forrestOrTown();
} else {
  console.log("Sorry, you lose")
  forrestOrTown();
}

//choose what to visit
function chooseVisit() {
  (places = ["Church", "Tavern", "Market", "City Gates"]),
    (index = rls.keyInSelect(places, "Where would you like to go?"));
  
  if (index === 0) {
    console.log(`Ok, ${playerName} is going to ` + places[index]);
    visitChurch();
  } else if (index === 1) {
    console.log(`Ok, ${playerName} is going to ` + places[index]);
    visitTavern();
  } else if (index === 2) {
    console.log(`Ok, ${playerName} is going to ` + places[index]);
    visitMarket();
  } else if (index === 3) {
    console.log(`Ok, ${playerName} is going to ` + places[index]);
    visitCityGates();
  } else if (index === -1) {
    forrestOrTown()
  }
}

//visit Church
function visitChurch() {}

//visit Tavern
// drink
// sleep
function visitTavern() {
let answer = rls.question("Welcome to our tavern. Here you can spend a night or drink some artisanal beer. So, what would you like to do, sleep or drink? \n")
if (answer === "sleep") {
  if (global.playerGold >= 8) {
  console.log("You had a good night sleep and ready to explore the town")
  global.playerGold = global.playerGold - 8
  chooseVisit()
  } else {
    console.log("Not enough gold")
    chooseVisit()
}
} else if (answer === "drink") {
  if (global.playerGold >= 10) {
  console.log("You spent the night drinking and not really ready to explore the town but stil....")
  global.playerGold = global.playerGold - 10
  chooseVisit()
  } else {
    console.log("Not enough gold")
    chooseVisit()
  }
} else {
  console.log("Please enter a valid selection")
  visitTavern()
}
}





//visit Market
//buy sword
//buy leather armor
function visitMarket () {
  let answer = rls.question("Welcome to our market. Here you can buy a sword or a leather armor So, what would you like to buy, sword or armor? \n")
  if (answer === "sword") {
    if (global.playerGold >= 8) {
    console.log("You had a good night sleep and ready to explore the town")
    global.playerGold = global.playerGold - 8
    chooseVisit()
    } else {
      console.log("Not enough gold")
      chooseVisit()
  }
  } else if (answer === "drink") {
    if (global.playerGold >= 10) {
    console.log("You spent the night drinking and not really ready to explore the town but stil....")
    global.playerGold = global.playerGold - 10
    chooseVisit()
    } else {
      console.log("Not enough gold")
      chooseVisit()
    }
  } else {
    console.log("Please enter a valid selection")
    visitTavern()
  }
}


// visit City Gates
function visitCityGates() {
  let answer = rls.keyInYN("Would you like to leave this town? \n");
  if (answer) {
    quitGameEnd();
  } else {
    let answer = rls.question("Would you like to start over? \n")
    if (answer === "yes") {
      reStart()
    } else if(answer === "no")
  quitGameEnd()
  }
}

//restart the game (DONE)
function reStart () {
  forrestOrTown()
  global.playerHP = 15
  global.playerGold = 0
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
  console.log("Good choice, go study!");
  process.exit();
};

//Quit game if age less than 18
const quitGame18 = () => {
  console.log("Sorry, you do not meet the age requirement");
  process.exit();
};

// Quit game after playing
const quitGameEnd = () => {
  console.log("Good luck on your journey, come visit us again");
  process.exit();
}

wannaPlay()