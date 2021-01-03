const readline = require("readline-sync");
const chalk = require('chalk')

let inventory;

function play() {
  inventory = ["phone"];
  let nameInput = readline.question("What is your name?: ");
  console.log("\n");
  console.log(chalk.cyan(`Hello ${nameInput}!  Welcome to Escape the Land`));
  console.log("\n");
  console.log(
    "The story will lead you to choices or actions while you progress."
  );
  console.log("Your adventure is set in the happiest place in the world");
  console.log("\n");
  if (readline.keyInYNStrict("Do you want to play?")) {
    console.clear ();
    startGame();
  } else {
    leaveGame();
  }
  
}

function startGame() {
  let yourChoice;
  while (yourChoice !== "metal hatch" || yourChoice !== "small window") {
    console.log("You awaken to the eyes of Donald Duck staring back at you.");
    console.log(
      "You took a nap in one of the many Disney World costume closets, all the exits have been locked."
    );
    console.log(
      "You must find an escape since no one will find you for another four weeks due to the winter break."
    );

    console.log(
      "You begin to search the massive closet. After several minutes pass you find two options for escape."
    );
    console.log("\n")
    let yourChoice = readline.question(
      "A metal hatch on the floor or a small window. Which do you choose?"
      
    );
    console.clear();
    if (yourChoice === "metal hatch" || yourChoice === "hatch") {
      metalHatch();
    } else if (yourChoice === "small window" || yourChoice === "window") {
      smallWindow();
    }
  }

  function smallWindow() {
    let yourChoice;
    console.log(
      "You break the window and place one of the costumes on the broken shards."
    );
    console.log(
      "Trying to wiggle your way out, you get stuck and the glass begins to dig into your skin. \nStuck and with no way out, you bleed out and die."
    );
    console.log("\n");
    if (
      (yourChoice = readline.keyInYNStrict("Would you like to start over?"))
    ) {
      startGame();
    } else {
      leaveGame();
    }
  }

  function metalHatch() {
    let yourChoice;
    while (
      yourChoice !== "black" ||
      yourChoice !== "red" ||
      yourChoice !== "blue"
    ) {
      console.log(
        "The metal hatch leads down to what looks like a hospital or a lab (clean and crisp)."
      );
      let yourChoice = readline.question(
        "There are 3 doors in front of you. 'black', 'red' and 'blue' doors. Which do you choose?"
      );
      console.clear();
      if (yourChoice === "black") {
        blackDoor();
      } else if (yourChoice === "red") {
        redDoor();
      } else if (yourChoice === "blue") {
        blueDoor();
      }
    }
  }
}

function blueDoor() {
  let yourAction;
  while (yourAction !== "grab") {
    console.log(
      "When entering the room, it appears to look like a normal break room. With lockers on the back wall, you begin to search them."
    );
    console.log(
      "Searching through the lockers you find a key card, 'grab' action is available now"
    );
    yourAction = readline.prompt("grab");
    if (yourAction === "grab") {
      keyCard();
    }
  }
}
function keyCard() {
  inventory.push("keycard");
  for (element in inventory) {
    if (inventory[element] === "keycard") {
      console.log("\n")
      console.log(chalk.yellow("key card found"));
      console.log("\n")
      blueDoorRoom();
    }
  }
}

function blueDoorRoom() {
  console.log("With the key card found, you head back to the red door");
  redDoor();
}

function blackDoor() {
  let yourChoice;
  while (yourChoice !== "red" || yourChoice !== "blue") {
    console.log("\n");
    console.log("The door opens with ease, you look in and find ...");
    console.log(
      "A simple janitors closet, with no way out you turn back into the hallway and choose a new door."
    );
    console.log("\n");
    let yourChoice = readline.question("'red' door or 'blue' door?");
    console.clear();
    if (yourChoice === "red") {
      redDoor();
    } else if (yourChoice === "blue") {
      blueDoor();
    }
  }
}

function redDoor() {
  if (
    (yourAnswer = readline.keyInYNStrict(
      "This door requires a key card, Do you have the keycard?"
    ))
  ) {
    if (inventory.includes("keycard")) {
      redDoorAccess();
    } else {
      redDoorNoAccess();
    }
  }
}

function redDoorNoAccess() {
  let yourChoice;
  while (yourChoice !== "black" || yourChoice !== "blue") {
    console.log(chalk.red("NO ACCESS, KEYCARD REQUIRED"));
    console.log("\n")
    let yourChoice = readline.question("'black' door or 'blue' door?");
    if (yourChoice === "black") {
      blackDoor();
    } else if (yourChoice === "blue") {
      blueDoor();
    }
  }
}

function redDoorAccess() {
  let yourChoice;
  while (
    yourChoice !== "hide" ||
    yourChoice !== "distract" ||
    yourChoice !== "fight"
  ) {
    console.log("\n");
    console.log(chalk.blue("ACCESS GRANTED"));
    console.log("\n");
    console.log(chalk.yellow("Checkpoint Reached"));
    console.log("\n")
    console.log(
      "Walking into the large room, you see giant glass containers of humanoid versions of Disney characters."
    );
    console.log(
      "On the floor you see glass shards, you then hear snarling across the room you see a hulked out Mickey Mouse blocking the exit"
    );
    console.log("\n")
    let yourChoice = readline.question(
      "How will you find a way out? 'Hide', 'Distract', or 'Fight'?"
    );
    console.clear();
    if (yourChoice === "hide") {
      hideStory();
    } else if (yourChoice === "distract") {
      distractStory();
    } else if (yourChoice === "fight") {
      fightStory();
    }
  }
}

function hideStory() {
  let yourChoice;
  console.log(
    "You hide inside a cabinet, after several minutes, you do not hear the snarling anymore or any footsteps"
  );
  console.log(
    "You decide to leave the cabinet, the minute you exit, Mickey Mouse pops out from the corner, grabs you and pulls you apart."
  );
  console.log("\n")
  if (
    (yourChoice = readline.keyInYNStrict(
      "YOU DIED. Would you like to start over from checkpoint?"
    ))
  ) {
    redDoorAccess();
  } else {
    leaveGame();
  }
}

function distractStory() {
  console.log(
    "You find a large metal pole on the ground, quietly you move closer to the creature"
  );
  console.log(
    "You throw the pole towards the opposite side of the room, Mickey Mouse begins to run to the sound, you sprint towards the exit."
  );
  console.log("\n");
  finalRoom();
}

function fightStory() {
  let yourChoice;
  while (
    yourChoice !== "trident" ||
    yourChoice !== "staff" ||
    yourChoice !== "light saber"
  ) {
    console.log(
      "On the wall you see Disney character weapons: Posiedons trident, Maleficents staff, and Lukes Light Saber"
    );
    console.log("\n")
    let yourChoice = readline.question("Which weapon do you choose?");
    if (yourChoice === "trident" || yourChoice === "staff") {
      mickeyFight();
    } else if (yourChoice === "light saber" || yourChoice === "saber") mickeyFightLoss();
  }
}
function mickeyFight() {
  console.log(
    " After grabbing your weapon, you call for Mickey Mouse. It begins to run towards you"
  );
  console.log(
    "Mickey mouse is inches from you, seconds before he reach you, you squat down and plunge the weapon into the creature"
  );
  console.log("You run towards the exit");
  console.log("\n")
  finalRoom();
}

function mickeyFightLoss() {
  let yourChoice;
  console.log("You grab the light saber and run towards the Mickey Mouse");
  console.log(
    "Just as you are about to reach the creature, you activate the sabers laser: ITS JUST A TOY"
  );
  console.log("\n")
  console.log(chalk.red("The creature grabs you and rips you apart: YOU HAVE DIED"));
  console.log("\n")
  if (
    (yourChoice = readline.keyInYNStrict(
      "HA HA HA, you thought light sabers are real. Would you like to start over from checkpoint?"
    ))
  ) {
    console.clear();
    redDoorAccess();
  } else {
    leaveGame();
  }
}

function finalRoom() {
  console.log(
    "When you enter the room, you immediately run to the exit door, however, the door requires a 4 digit key code."
  );
  console.log("\n")
  console.log(
    "Searching through the cubicles in the room, you see a post it note that reads 'hey idiot, stop forgetting the exit pin code, heres a hint-"
  );
  console.log("\n")
  console.log(
    "The hint reads: A scar killed my father and I am to be king of my pride, What year was my story released?"
  );
  finalRoomDoor();
}

function finalRoomDoor() {
  let triesCount = 3;
  for (i = triesCount; i !== 0; i--) {
    let yourAnswer = readline.question("Pin Code required, Enter Code: ");
    if (yourAnswer === "1994") {
      exitDoor();
    } else {
      triesCount--;
      console.log("Invalid code, only " + triesCount + " tries left");
      if (triesCount === 0) {
        noMoreTriesScene();
      }
    }
  }
}
function exitDoor() {
  let yourChoice;
  while (
    yourChoice !== "ferry boat" ||
    yourChoice !== "boat" ||
    yourChoice !== "ferry" ||
    yourChoice !== "bike"
  ) {
    console.log("\n")
    console.log(
      "You exit through the door and realize that you exited out of the castle"
    );
    console.log("You run towards the entrance of the park");
    console.log("\n");
    let yourChoice = readline.question(
      "You make it to the entrance, there are 2 vehicle options: 'ferry boat' or 'bike'"
    );
    console.clear();
    if (
      yourChoice === "ferry boat" ||
      yourChoice === "boat" ||
      yourChoice === "ferry"
    ) {
      ferryStory();
    } else if (yourChoice === "bike") {
      bikeStory();
    }
  }
}
function noMoreTriesScene() {
  let yourChoice;
  console.log("\n");
  console.log(chalk.red(
    "NO MORE TRIES! \nTHERE IS A TRESPASSER!, (begins to blare overhead)"
  ));
  console.log("\n")
  console.log(
    "Next thing you know a trap door appears and you fall below into a grabage disposal where the walls close in and crush you"
  );
  console.log("\n");
  if (
    (yourChoice = readline.keyInYNStrict(
      "YOU HAVE DIED, Would you like to start over from checkpoint?"
    ))
  ) {
    redDoorAccess();
  } else {
    leaveGame();
  }
}

function ferryStory() {
  let yourChoice;
  while (yourChoice !== "explain" || yourChoice !== "flee") {
    console.log("\n")
    console.log(
      "You are able to steal the ferry and drive it out of the Disney's lagoon into a canal"
    );
    let yourChoice = readline.question(
      "Eventually the coast guard spots you: What do you do, stop and 'explain' what you saw or 'flee'?"
    );
    if (yourChoice === "explain") {
      explainEnding();
    } else if (yourChoice === "flee") {
      fleeEnding();
    }
  }
}

function bikeStory() {
  let yourChoice;
  console.log(
    "You are able to bike all the way to Downtown Disney and flag down a cab, and make it home"
  );
  console.log("\n")
  console.log("You then receive a text from a unrecognized number asking:")
  console.log(chalk.blue("DID YOU HAVE FUN TONIGHT?"));
    if ((yourChoice = readline.keyInYNStrict("Do you respond?"))) {
    yesEnding();
  } else {
    noEnding();
  }
}

function yesEnding() {
  let yourChoice;
  console.log("\n");
  console.log(
    "Suddenly pulsating lights display on your phone \n You wake up back in the costume closet, locked inside"
  );
  if (
    (yourChoice = readline.keyInYNStrict(
      "End of Adventure, \n Would you like to restart?"
    ))
  ) {
    play();
  } else {
    endGame();
  }
}

function noEnding() {
  let yourChoice;
  console.log("\n")
  console.log(
    "Suddenly pulsating lights display on your phone \nYou wake up the next day with no memory of the night before"
  );
  if (
    (yourChoice = readline.keyInYNStrict(
      "End of Adventure \nWould you like to restart?"
    ))
  ) {
    play();
  } else {
    endGame();
  }
}

function explainEnding() {
  let yourChoice;
  console.log(
    "You flag down the coast guard and explain what you saw back at the park, they tell you to take them to the evidence"
  );
  console.log(
    "When you head back the same way you left, everything has disappeared. With no evidence, the coast guard arrests you for theft."
  );
  console.log("\n")
  if (
    (yourChoice = readline.keyInYNStrict(
      "GAME OVER \nWould you like to restart?"
    ))
  ) {
    play();
  } else {
    endGame();
  }
}

function fleeEnding() {
  let yourChoice;
  console.log("\n")
  console.log(
    "You start a chase with the police and are able to lose them after several hours"
  );
  console.log(
    "The ferry runs out of gas near an island and you live their for the rest of your life"
  );
  if (
    (yourChoice = readline.keyInYNStrict(
      "End of Adventure \n Would you like to restart?"
    ))
  ) {
    console.clear();
    play();
  } else {
    endGame();
  }
}

function leaveGame() {
  console.log("\n")
  console.log(chalk.red("Guess you want to be stuck here forever. Good luck ;)"));
  process.exit();
}

function endGame() {
  console.log("\n")
  console.log(chalk.yellow("Thank you for playing :)"));
  process.exit();
}

play();
