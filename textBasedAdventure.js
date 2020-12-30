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

function smallWindow () {
    console.log("You break the window and place one of the costumes on the broken shards.")
    console.log("Trying to wiggle your way out, you get stuck and the glass begins to dig into your skin. Stuck and with no way out, you begin to bleed out and die.")
    if (yourChoice = readline.keyInYN("Would you like to start over?")) {
        startGame()
    } else {
        leaveGame()
}
}

function metalHatch () {
    console.log("The metal hatch leads down to what looks like a hosptial or a lab (clean and crisp).")
    let yourChoice = readline.question("There are 3 doors in front of you. A 'Wooden', 'Metal' and 'Bronze' doors. Which do you choose?")
    if (yourChoice === "Wooden") {
        WoodenDoor();
    } else if (yourChoice === "Metal") {
        MetalDoor();
    } else if (yourChoice === "Bronze") {
        BronzeDoor();
    }
}


function BronzeDoor () {
    console.log("When entering the room, it appears to look like a normal break room. With lockers on the back wall, you begin to search them.")
    console.log("Searching through the lockers you find a key card")
    if (readline.prompt("grab")) {
        keyCard("Key card has been found, can be used on metal door.")
    }
    
}

function WoodenDoor () {
    console.log("The door opens with ease, you look in and find ...")
    console.log("A simple janitors closet, with no way out you turn back into the hallway and choose a new door.")
    let yourChoice = readline.question("'Metal' door or 'Bronze' door?")
    if (yourChoice === "Metal") {
        MetalDoor();
}   else if (yourChoice === "Bronze") {
    BronzeDoor();
}
}

function keyCard () {
    
}

function leaveGame () {
  console.log("Guess you want to be stuck here forever. Good luck ;)");
  process.exit();
}
