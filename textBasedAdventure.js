const rls = require("readline-sync");

const chalk = require("chalk");

let playerGold = 0;

// ask if player wants to play? (DONE)
const wannaPlay = () => {
  let answer = rls.keyInYN("Would you like to play a game? \n");
  if (answer) {
    let playerName = rls.question("What is your name? \n");
    global.playerName = playerName;
    console.log(chalk.hex("#eb99ff")(`Welcome ${playerName}! \n`));
    let playerAge = rls.question("How old are you? \n", {
      hideEchoBack: true,
      mask: require("chalk").hex("#eb99ff")("\u1f47c"),
    });
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
    chalk.hex("#f9f2ec")(
      "You have been travelling for a long time and find yourself on a meadow near a forrest. \nNearby you can see a small town. You can go to the forrest where you will have to fight monsters. \nIf you win, you might find cold coins. Then you can go to town and spend it allll"
    )
  );
  forrestOrTown();
}

// go to forest or go to town? (DONE)
function forrestOrTown() {
  forOrTown = ["Forrest", "Town"];
  let answer = rls.question(
    "Would you like to go to the forrest or to the town? \n"
  );

  switch (answer) {
    case "forrest":
      chooseFight();
      break;
    case "town":
      chooseVisitLong();
      break;
    default:
      console.log("Please enter a valid selection");
      forrestOrTown();
  }
}

// replaced the code below with switch statements
//   if (answer === "forrest") {
//     chooseFight();
//   } else if (answer === "town") {
//     chooseVisit();
//   } else {
//     console.log("Please enter a valid selection");
//     forrestOrTown();
//   }
// }

// choose what to fight (DONE)
function chooseFight() {
  enemy = ["Troll", "Orc", "Goblin", "Ogre"];
  enemyIndex = rls.keyInSelect(
    enemy,
    "You encountered the enemy. What would you like to fight?"
  );

  switch (enemyIndex) {
    case 0:
      console.log(`Ok, ${playerName} is going to fight ` + enemy[enemyIndex]);
      fightEnemy(0);
      break;
    case 1:
      console.log(`Ok, ${playerName} is going to fight ` + enemy[enemyIndex]);
      fightEnemy(1);
      break;
    case 2:
      console.log(`Ok, ${playerName} is going to fight ` + enemy[enemyIndex]);
      fightEnemy(2);
      break;
    case 3:
      console.log(`Ok, ${playerName} is going to fight ` + enemy[enemyIndex]);
      fightOgre();
      break;
    case -1:
      forrestOrTown();
  }
}

//fight function general
function fightEnemy(enemyIndex) {
  if (enemyIndex === 0) {
    console.log(chalk.hex("#ff3333")("You have encountered a Troll."));
  } else if (enemyIndex === 1) {
    console.log(chalk.hex("#ff3333")("You have encountered an Orc"));
  } else if (enemyIndex === 2) {
    console.log(chalk.hex("#ff3333")("You have encountered a Goblin."));
  }

  let playerHP = 15;
  for (let i = 0; i < 3; i++) {
    let attack = rls.keyIn("Press a to attack \n", { limit: "a" });
    playerHP = playerHP - (Math.random() * (6 - 3) + 3);
  }

  if (playerHP > 0) {
    if (enemyIndex === 0) {
      console.log(
        chalk.hex("#ffff00")(
          "Congrats, you win. Also, you found 15 gold coins in Troll's pocket"
        )
      );
      playerGold += 15;
      console.log(`You now have ${playerGold} gold coins`);
      forrestOrTown();
    } else if (enemyIndex === 1) {
      console.log(
        chalk.hex("#ffff00")(
          "Congrats, you win. Also, you found 10 gold coins in Orc's pocket"
        )
      );
      playerGold += 10;
      console.log(`You now have ${playerGold} gold coins`);
      forrestOrTown();
    } else if (enemyIndex === 2) {
      console.log(
        chalk.hex("#ffff00")(
          "Congrats, you win. Also, you found 5 gold coins in Goblin's pocket"
        )
      );
      playerGold += 5;
      console.log(`You now have ${playerGold} gold coins`);
      forrestOrTown();
    }
  } else {
    if (enemyIndex === 0) {
      console.log(
        chalk.hex("#ccd9ff")(
          "Sorry, the Troll knocked you out! \n You wake up several hours later, and discover that while you were out someone stole your gold..."
        )
      );
      playerGold = 0;
      console.log(`You now have ${playerGold} gold coins`);
      forrestOrTown();
    } else if (enemyIndex === 1) {
      console.log(
        chalk.hex("#ccd9ff")(
          "Sorry, the Orc knocked you out! \n You wake up several hours later, and discover that while you were out someone stole your gold..."
        )
      );
      playerGold = 0;
      console.log(`You now have ${playerGold} gold coins`);
      forrestOrTown();
    } else if (enemyIndex === 2) {
      console.log(
        chalk.hex("#ccd9ff")(
          "Sorry, the Goblin knocked you out! \n You wake up several hours later, and discover that while you were out someone stole your gold..."
        )
      );
      playerGold = 0;
      console.log(`You now have ${playerGold} gold coins`);
      forrestOrTown();
    }
  }
}

//fight Troll (DONE) replaced this function with fightEnemy()
// function fightTroll() {
//   console.log(chalk.hex("#ff3333")("You have encountered a Troll."));
//   let playerHP = 15;
//   for (let i = 0; i < 3; i++) {
//     let attack = rls.keyIn("Press a to attack \n", { limit: "a" });
//     playerHP = playerHP - (Math.random() * (6 - 3) + 3);
//   }
//   if (playerHP > 0) {

//     console.log(chalk.hex("#ffff00")(
//       "Congrats, you win. Also, you found 15 gold coins in Troll's pocket")
//     );
//     playerGold += 15;
//     console.log(`You now have ${global.playerGold} gold coins`);
//     forrestOrTown();
//   } else {
//     console.log(chalk.hex("#ccd9ff")("Sorry, the Troll knocked you out! \n You wake up several hours later, and discover that while you were out someone stole your gold..."));
//     playerGold = 0
//     console.log(`You now have ${global.playerGold} gold coins`);
//     forrestOrTown();
//   }
// }

//fight Orc (DONE) replaced this function with fightEnemy ()
// function fightOrc() {
//   console.log(chalk.hex("#ff3333")("You have encountered an Orc."));
//   let playerHP = 15;
//   for (let i = 0; i < 3; i++) {
//     let attack = rls.keyIn("Press a to attack \n", { limit: "a" });
//     playerHP = playerHP - (Math.random() * (6 - 3) + 3);
//   }
//   if (playerHP > 0) {
//     console.log(playerGold);
//     console.log(chalk.hex("#ffff00")(
//       "Congrats, you win. Also, you found 10 gold coins in Orc's pocket")
//     );
//     playerGold += 10;
//     console.log(`You now have ${global.playerGold} gold coins`);
//     forrestOrTown();
//   } else {
//     console.log(chalk.hex("#ccd9ff")("Sorry, the Orc knocked you out! \n You wake up several hours later, and discover that while you were out someone stole your gold..."));
//     playerGold = 0
//     console.log(`You now have ${global.playerGold} gold coins`);
//     forrestOrTown();
//   }
// }

//fight Goblin (DONE) replaced this function with fightEnemy ()
// function fightGoblin() {
//   console.log(chalk.hex("#ff3333")("You have encountered a Goblin."));
//   let playerHP = 15;
//   for (let i = 0; i < 3; i++) {
//     let attack = rls.keyIn("Press a to attack \n", { limit: "a" });
//     playerHP = playerHP - (Math.random() * (6 - 3) + 3);
//   }
//   if (playerHP > 0) {
//     console.log(chalk.hex("#ffff00")(
//       "Congrats, you win. Also, you found 5 gold coins in Goblin's pocket")
//     );

//     playerGold += 5;
//     console.log(`You now have ${global.playerGold} gold coins`);
//     forrestOrTown();
//   } else {
//     console.log(chalk.hex("#ccd9ff")("Sorry, the Goblin knocked you out! \n You wake up several hours later, and discover that while you were out someone stole your gold..."));
//     playerGold = 0
//     console.log(`You now have ${global.playerGold} gold coins`);
//     forrestOrTown();
//   }
// }

//fight Ogre and most likely lose
function fightOgre() {
  console.log(chalk.hex("#ff3333")("Oh oh, you have encountered an Ogre"));
  let playerHP = 15;

  while (playerHP > 0) {
    let attack = rls.keyIn("Press a to attack \n", { limit: "a" });
    playerHP = playerHP - (Math.random() * (6 - 3) + 3);
  }

  if (playerHP > 1) {
    console.log(
      chalk.hex("#ffff00")(
        "Congrats, you win. Also, you found 100 gold coins in Ogre's pocket"
      )
    );
    playerGold += 100;
    console.log(`You now have ${playerGold} gold coins`);
    forrestOrTown();
  } else {
    console.log(
      chalk.hex("#ccd9ff")(
        "Sorry, the Ogre knocked you out! \n You wake up several hours later, and discover that while you were out someone stole your gold..."
      )
    );
    playerGold = 0;
    console.log(`You now have ${playerGold} gold coins`);
    forrestOrTown();
  }
}

//choose what to visit (initial, long version)
function chooseVisitLong() {
  (places = ["Church", "Tavern", "Market", "City Gates"]),
    (index = rls.keyInSelect(
      places,
      "You walk to the town to see what it has to offer. \n The local tavern has artisanal beer and rooms to rest.  \n Nearby marketplace has a variety of shops to browse, e.g. an armory stocked with all sorts of swords and leather armor. \n You can also see the steeple of a a local church. \n A little bit further down you can see the high towers of city gates where you can leave the town and continue your journey. \n Where would you like to go?"
    ));

  switch (index) {
    case 0:
      console.log(`Ok, ${playerName} is going to ` + places[index]);
      visitChurch();
      break;
    case 1:
      console.log(`Ok, ${playerName} is going to ` + places[index]);
      visitTavern();
      break;
    case 2:
      console.log(`Ok, ${playerName} is going to ` + places[index]);
      visitMarket();
      break;
    case 3:
      console.log(`Ok, ${playerName} is going to ` + places[index]);
      visitCityGates();
      break;
    case -1:
      forrestOrTown();
  }
}

// choose Visit short
function chooseVisit() {
  (places = ["Church", "Tavern", "Market", "City Gates"]),
    (index = rls.keyInSelect(places, "Where would you like to go?"));
  switch (index) {
    case 0:
      console.log(`Ok, ${playerName} is going to ` + places[index]);
      visitChurch();
      break;
    case 1:
      console.log(`Ok, ${playerName} is going to ` + places[index]);
      visitTavern();
      break;
    case 2:
      console.log(`Ok, ${playerName} is going to ` + places[index]);
      visitMarket();
      break;
    case 3:
      console.log(`Ok, ${playerName} is going to ` + places[index]);
      visitCityGates();
      break;
    case -1:
      forrestOrTown();
  }
}

//visit Church
// make a donation?
function visitChurch() {
  let answer = rls.keyInYN(
    `The church is quiet. The priest asks you if you would like to make a donation. You have ${playerGold} coins \n`
  );
  if (answer) {
    let donation = rls.question("How much would you like to donate? \n");
    if (donation <= playerGold) {
      playerGold -= donation;

      console.log("Thank you for your donation");
      chooseVisit();
    } else {
      console.log("Not enough gold");
      chooseVisit();
    }
  } else {
    console.log("Thanks anyway");
    chooseVisit();
  }
}

//visit Tavern
// drink
// sleep

function visitTavern() {
  //console.log(playerGold);
  let answer = rls.question(
    `The tavern is bustling with the local folk. \nHere they offer artisanal beer for Ξ5 or you could stay the night for only Ξ8. \nYou now have ${playerGold} gold coins. So, what would you like to do, sleep or drink? \n`
  );

  if (answer === "sleep") {
    if (playerGold >= 8) {
      console.log("You had a good night sleep and ready to explore the town");

      playerGold -= 8;

      chooseVisit();
    } else {
      console.log("Not enough gold");
      chooseVisit();
    }
  } else if (answer === "drink") {
    if (playerGold >= 5) {
      console.log(
        "You spent the whole night drinking and not really ready to explore the town but ... "
      );

      playerGold -= 5;

      chooseVisit();
    } else {
      console.log("Not enough gold");
      chooseVisit();
    }
  } else {
    console.log("Please enter a valid selection");
    visitTavern();
  }
}

//visit Market
//buy sword
//buy leather armor
function visitMarket() {
  let answer = rls.question(
    `The marketplace is booming with activity. \nThe armory is stocked with wide selection of swords for Ξ7 a piece or leather armor for Ξ4 \n You now have ${playerGold} gold coins. So, what would you like to buy, sword or armor? \n`
  );
  if (answer === "sword") {
    if (playerGold >= 7) {
      console.log("Here is your beautiful sword");

      playerGold -= 7;

      chooseVisit();
    } else {
      console.log("Not enough gold");
      chooseVisit();
    }
  } else if (answer === "armor") {
    if (playerGold >= 4) {
      console.log("Here is your beautiful armor");
      playerGold -= 4;
      chooseVisit();
    } else {
      console.log("Not enough gold");
      chooseVisit();
    }
  } else {
    console.log("Please enter a valid selection");
    visitMarket();
  }
}

// visit City Gates
function visitCityGates() {
  let answer = rls.keyInYN("Would you like to leave this town? \n");
  if (answer) {
    quitGameEnd();
  } else {
    let answer = rls.question("Would you like to start over? \n");

    answer === "yes" ? reStart() : quitGameEnd();
  }
}

//restart the game (DONE)
function reStart() {
  playerGold = 0;
  forrestOrTown();
}

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
};

wannaPlay();
