const readline = require("readline-sync");

let nameInput = readline.question("What is your name?: ");

console.log(`Hello ${nameInput}!  Welcome to my game.`);

console.log("You awaken to the eyes of Donald Duck staring back at you.");
console.log(
  "You took a nap in one of the many Disney World costume closets, all the exits have been locked."
);
console.log(
  "You must find an escape since no one will find you for another four weeks due to the winter break."
);

if (
  (yourChoice = readline.keyInYN("Do you want to play and find a way out?"))
) {
  startGame();
} else {
  leaveGame();
}

function startGame() {
  while (yourChoice !== "metal hatch" || yourChoice !== "small window") {
    console.log(
      "You begin to search the massive closet. After several minutes pass you find two options for escape."
    );
    let yourChoice = readline.question(
      "A metal hatch on the floor or a small window. Which do you choose?"
    );
    if (yourChoice === "metal hatch") {
      metalHatch();
    } else if (yourChoice === "small window") {
      smallWindow();
    }
  }

  function smallWindow() {
    console.log(
      "You break the window and place one of the costumes on the broken shards."
    );
    console.log(
      "Trying to wiggle your way out, you get stuck and the glass begins to dig into your skin. Stuck and with no way out, you bleed out and die."
    );
    if ((yourChoice = readline.keyInYN("Would you like to start over?"))) {
      startGame();
    } else {
      leaveGame();
    }
  }

  function metalHatch() {
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
  console.log(
    "When entering the room, it appears to look like a normal break room. With lockers on the back wall, you begin to search them."
  );
  console.log(
    "Searching through the lockers you find a key card, 'grab' action is available now"
  );
  if (readline.prompt("grab")) {
    KeyCard();
  }
}

function KeyCard() {
  let inventory = ["phone"];
  inventory.push("keycard");
  for (element in inventory) {
    if (inventory[element] === "keycard") {
      console.log("key card found");
      blueDoorRoom();
    }
  }
}

function blueDoorRoom() {
  console.log("With the key card found, you head back to the red door");
  redDoor();
}

function blackDoor() {
  while (yourChoice !== "red" || yourChoice !== "blue") {
    console.log("The door opens with ease, you look in and find ...");
    console.log(
      "A simple janitors closet, with no way out you turn back into the hallway and choose a new door."
    );
    let yourChoice = readline.question("'red' door or 'blue' door?");
    if (yourChoice === "red") {
      redDoor();
    } else if (yourChoice === "blue") {
      blueDoor();
    }
  }
}

function redDoor() {
  if (
    (yourAnswer = readline.keyInYN(
      "This door requires a key card, Do you have the keycard?"
    ))
  ) {
    redDoorAccess();
  } else {
    redDoorNoAccess();
  }
}

function redDoorNoAccess() {
  while (yourChoice !== "black" || yourChoice !== "blue") {
    console.log("NO ACCESS, KEYCARD REQUIRED");
    let yourChoice = readline.question("'black' door or 'blue' door?");
    if (yourChoice === "black") {
      blackDoor();
    } else if (yourChoice === "blue") {
      blueDoor();
    }
  }
}

function redDoorAccess() {
  while (
    yourChoice !== "hide" ||
    yourChoice !== "distract" ||
    yourChoice !== "fight"
  ) {
    console.log("ACCESS GRANTED");
    console.log(
      "Walking into the large room, you see giant glass containers of humanoid versions of Disney characters."
    );
    console.log(
      "On the floor you see glass shards, you then hear snarling and as you look down the room a hulked out Mickey Mouse is blocking the exit"
    );
    let yourChoice = readline.question(
      "How will you find a way out? 'Hide', 'Distract', or 'Fight'?"
    );
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
  console.log(
    "You hide inside a cabinet, after several minutes, you do not hear the snarling anymore or any footsteps"
  );
  console.log(
    "You decide to leave the cabinet, the minute you exit, Mickey Mouse pops out from the corner, grabs you and pulls you apart."
  );
  if (
    (yourChoice = readline.keyInYN(
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
  finalRoom();
}

function fightStory() {
  while (yourChoice !== "trident" || yourChoice !== "staff" || yourChoice !== "light saber") {
  console.log("On the wall you see Disney character weapons: Posiedons trident, Maleficents staff, and Lukes Light Saber");
    let yourChoice = readline.question("Which weapon do you choose?");
    if (yourChoice === "trident" || yourChoice === "staff") {
        mickeyFight();
    } else if (yourChoice === "light saber")
        mickeyFightLoss()
    }
}
function mickeyFight() {
    console.log(" After grabbing your weapon, you call for Mickey Mouse. It begins to run towards you")
    console.log("Mickey mouse is inches from you, seconds before he reach you, you squat down and plunge the weapon into the creature")
    console.log("You run towards the exit")
    finalRoom()
}

function mickeyFightLoss() {
    console.log("You grab the light saber and run towards the Mickey Mouse")
    console.log("Just as you are about to reach the creature, you activate the sabers laser: ITS JUST A TOY")
    console.log("The creature grabs you and rips you apart: YOU HAVE DIED")
    if ((yourChoice = readline.keyInYN("HA HA HA, you thought light sabers are real. Would you like to start over from checkpoint?"))) {
        redDoorAccess();
      } else {
        leaveGame();
}
}

function finalRoom() {
  console.log(
    "When you enter the room, you immediately run to the exit door, however, the door requires a 4 digit key code."
  );
  console.log(
    "Searching through the cubicles in the room, you see a post it note that reads 'hey idiot, stop forgetting the exit pin code, heres a hint-"
  );
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
function exitDoor () {
    while (yourChoice !== "ferry boat" || yourChoice !== "boat" || yourChoice !== "ferry" || yourChoice !== "bike") {
    console.log("You exit through the door and realize that you exited out of the castle")
    console.log("You run towards the entrance of the park")
    let yourChoice = readline.question("You make it to the entrance, there are 2 vehicle options: 'ferry boat' or 'bike'")
    if (yourChoice === "ferry boat" || yourChoice === "boat" || yourChoice === "ferry") {
        ferryStory();
    } else if (yourChoice === "bike") {
        bikeStory ()
    }
}
}
function noMoreTriesScene() {
    console.log ("NO MORE TRIES, THERE IS A TRESPASSER!, begins to blare ovehead")
    console.log ("Next thing you know a trap door appears and you fall below into a grabage disposal and the walls close in, crushing you")
    if ((yourChoice = readline.keyInYN("YOU HAVE DIED, Would you like to start over from checkpoint?"))) {
        redDoorAccess();
      } else {
        leaveGame();
}
}

function leaveGame() {
  console.log("Guess you want to be stuck here forever. Good luck ;)");
  process.exit();
}
