const readline = require("readline-sync");

let nameInput = readline.question("What is your name?: ");

console.log(`Hello ${nameInput}!  Welcome to my game.`);

console.log("You awaken to the eyes of Donald Duck staring back at you.");
console.log("You took a nap in one of the many Disney World costume closets, all the exists have been locked.");
console.log("You must find an escape since no one will find you for another four weeks due to the winter break.");

  if (
    (yourChoice = readline.keyInYN("Do you want to play and find a way out?"))
  ) {
    startGame();
  } else {
    leaveGame();
  }

function startGame () {
  console.log("You begin to search the massive closet. After several minutes pass you find two options for escape.");
  let yourChoice = readline.question("A metal hatch on the floor or a small window. Which do you choose?")
  if (yourChoice === "metal hatch") {
    metalHatch();
} else if (yourChoice === "small window") {
    smallWindow();
}
}
function metalHatch () {
    console.log("The metal hatch leads down to what looks like a hosptial or a lab (clean and crisp).")
    let yourChoice = readline.question("There are 3 doors in front of you. Left, right and straight ahead. Which do you choose?")
    if (yourChoice === "Left") {
        leftDoor ();
    } else if (yourChoice === "Right") {
        rightDoor();
    } else {
        straightAheadDoor();
    }

}
function leftDoor () {
    console.log("When entering the room, it appears to look like a normal break room. With lockers on the back wall you begin to search them.")
    let yourChoice = readline.question("Searching through the lockers, you find a key card. Do you 'pick up' or 'leave it'")
    if (yourChoice === "pick up") {
        straightAheadDoorAccess()
    } else {
        straightAheadDoorNoAccess()
    }
}

function smallWindow () {
    console.log("You break the window and place one of the costumes on the broken shards.")
    console.log("Trying to wiggle your way out, you get stuck and the glass begins to dig into your skin. Stuck and with no way out, you begin to bleed out and die.")
    if (yourChoice = readline.keyInYN("Would you like to start over?")) {
        startGame()
    } else {
        leaveGame()
}
}

function leaveGame () {
  console.log("Guess you want to be stuck here forever. Good luck ;)");
  process.exit();
};
