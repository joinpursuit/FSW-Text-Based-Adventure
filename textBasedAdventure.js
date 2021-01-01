const readline = require("readline-sync");

let nameInput = readline.question("What is your name?: ");

console.log(`Hello ${nameInput}!  Welcome to my game.`);

console.log("You awaken to the eyes of Donald Duck staring back at you.");
console.log(
  "You took a nap in one of the many Disney World costume closets, all the exists have been locked."
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
    "Trying to wiggle your way out, you get stuck and the glass begins to dig into your skin. Stuck and with no way out, you begin to bleed out and die."
  );
  if ((yourChoice = readline.keyInYN("Would you like to start over?"))) {
    startGame();
  } else {
    leaveGame();
  }
}

function metalHatch() {
  console.log(
    "The metal hatch leads down to what looks like a hosptial or a lab (clean and crisp)."
  );
  let yourChoice = readline.question(
    "There are 3 doors in front of you. A 'black', 'red' and 'blue' doors. Which do you choose?"
  );
  if (yourChoice === "black") {
    blackDoor();
  } else if (yourChoice === "red") {
    redDoor();
  } else if (yourChoice === "blue") {
    blueDoor();
  }
}

function blueDoor() {
  console.log(
    "When entering the room, it appears to look like a normal break room. With lockers on the back wall, you begin to search them."
  );
  console.log("Searching through the lockers you find a key card, 'grab' action is available now");
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

function blueDoorRoom () {
    console.log("With the key card found, you head back to the red door")
    redDoor();
}


function blackDoor() {
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

function redDoor() {
  if ((yourAnswer = readline.keyInYN("This door requires a key card, Do you have the keycard?"))
  ) {
    redDoorAccess();
  } else {
    redDoorNoAccess();
  }
}

function redDoorNoAccess() {
  console.log("NO ACCESS, KEYCARD REQUIRED");
  let yourChoice = readline.question("'black' door or 'blue' door?");
  if (yourChoice === "black") {
    blackDoor();
  } else if (yourChoice === "blue") {
    blueDoor();
  }
}

function redDoorAccess () {
    console.log ("ACCESS GRANTED")
    console.log ("Walking into the large room, you see giant glass containers of humanoid versions of Disney characters.")
    console.log ("Suddenly on the floor you see glass shards, you then hear snarling and as you down the room a hulked out Mickey Mouse is blocking the exit")
    let yourChoice = readline.question("How will you find a way out? 'Hide', 'Distract', or 'Fight'?")
    if (yourChoice === "hide") {
        hideStory();
    } else if (yourChoice ==="distract") {
        distractStory();
    } else if (yourChoice === "fight") {
        fightStory();
    }
}

function leaveGame() {
  console.log("Guess you want to be stuck here forever. Good luck ;)");
  process.exit();
}
