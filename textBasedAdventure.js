const readline1 = require("readline-sync");

let nameInput = readline1.question("Enter your name: ");

console.log(`Hello ${nameInput}!  Welcome to Will you sleep or Wake.`);

console.log(
  "You will be given different choices on whether you want to remain asleep or stay awake \n"
);

console.log("Its 5am and a explosion wakes you up!\n");

let startGame = decisions();
let endGame = process.exit();

function decisions() {
  let person = readline1.question(
    "Do you A: roll over? Or B: go check it out?\n"
  );
  if (person === "B".trim().toLowerCase()) {
    checkItOut();
  } else if (person === "A".trim().toLowerCase()) {
    rollOver();
  }
}

function checkItOut() {
  console.log("Let's go check! should we...\n");

  person = readline1.question(
    "A: Get dressed! and see if neighbors are up?   B: Look out the window      C: Go back to sleep?\n"
  );
  // person = readline1.question();
  // person = readline1.questionFloat("C: Put on your pjs and go back to sleep")
  // choice = [ , "Get dressed! and see if neighbors are up? ", "Look out the window? "],
  // index = readline1.keyInSelect(choice)
  // person = readline1.question("Look out the window? ");
  // person = readline1.question("Who am i kidding! I always knew it would end somehow! ")
  if (person === "A".trim().toLowerCase()) {
    getDressed();
  }
  if (person === "B".trim().toLowerCase()) {
    theWindow();
  } else if (person === "C".trim().toLowerCase()) {
    whoAmIKidding();
  }
}

function rollOver() {
  person = readline1.question("Good job! sleeping is IMPORTANT!! \n");
  
  decisions();
  
}

function whoAmIKidding() {
  console.log(
    "Who am I kidding! I always knew it would end somehow/someday! \n"
  );
  
  
  decisions();
}

function getDressed() {
  console.log(
    "You got dressed and go out into the hallway to find out where the explosion sound came from\n"
  );

  console.log("You see everyone's confused in the hallway in their pajamas \n");

  person = readline1.question(
    "A: Do you ask clueless neighbors,    B: Follow dog,    C: Put on your pjs back on \n"
  );
  // choice1 = ["Do you ask clueless neighbors", "Follow dog", "Put on your pjs and go back to sleep"],
  // index = readline1.keyInSelect([choice1]);
  if (person === "A".trim().toLowerCase()) {
    askNeighbors();
  } else if (person === "B".trim().toLowerCase()) {
    followDog();
  } else if (person === "C".trim().toLowerCase()) {
    putOnPjs();
  }
}

function theWindow() {
  console.log(
    "You get up and look out the window. To then realize the loud explosion sound was just thunderstorm \n"
  );
  console.log("You turn back to your bed and go to sleep! \n");

  decisions();
}

function askNeighbors() {
  console.log("You walk down the hall to talk to your neighbors.");
  console.log(
    "Neighbor A says to stay put and see how it plays out. Neighbor B says they think the noise was coming from the basement \n"
  );
  person = readline1.question(
    "A: Listen to neighbor A and stay put?     B: Listen to neighbor B and go to the basment and investigate? \n"
  );

  if (person === "A".trim().toLowerCase()) {
    stayPut();
  } else if (person === "B".trim().toLowerCase()) {
    toBasement();
  }
}

function followDog() {
  console.log("You see a dog!");
  console.log(
    "The dog was trying to get your attention. So you follow it outside"
  );
  console.log("The dog ended up peeing at a hydrant. Complete waste of time!");
  person = readline1.keyInYN("Go back upstairs? ");
}

function putOnPjs() {
  console.log(
    "You got back to your room and change into your pjs. Back to sleep you go! \n"
  );

  
  decisions();
}

function stayPut() {
  console.log("You got tired of trying to figure out what was wrong.");
  console.log("So you went back to your room and stayed put in your bed.");
  console.log("Back to sleep you go! \n");

  decisions();
}

function toBasement() {
  console.log("You got down to the basement and the power is out \n");
  person = readline1.question(
    "A: Go back up to get flashlight?     B: Keep going and you'll find The LIGHT!! \n"
  );

  if (person === "A".trim().toLowerCase()) {
    getFlashlight();
  } else if (person === "B".trim().toLowerCase()) {
    keepGoing();
  }
}

function getFlashlight() {
  console.log("You on your way back upstairs");
  console.log("You get to your room");
  console.log("Your bed is calling you");
  person = readline1.question("A: Go to sleep ?    B: Find flashlight? \n");

  if (person === "A".trim().toLowerCase()) {
    goToSleep();
  } else if (person === "B".trim().toLowerCase()) {
    findFlashlight();
  }
}

// function keepGoing() {
//   console.log(
//     "You trying to move around the basement without killing yourself in the dark"
//   );
//   console.log("It just occurred to you that you're terribly scared of the dark!");
//   console.log("You hear a loud Noise!!");
//   if(person = readline1.keyInYN("Do You run out and SCREAM BLOODY MURDER!! \n")) {
//   if(person === "Y".trim().toLowerCase()) {
//       console.log("Neighbor B laughs at you and if you want to press charges. ")
//       console.log("Neighbor A scolds at you. " + "I told you to stay put! ");
//       console.log("You roll your eyes and walk past them and go to sleep")
//     } else if(person === "N".trim().toLowerCase()) {
//         console.log("If loud noises don't scare you! Why the heck did you wake up in the first place! GO TO BACK TO BED!!")
//     }
  
//   decisions();
// }

function findFlashlight() {
  console.log(
    "You in your room and find the flashlight but it doesn't have any batteries"
  );
}

function goToSleep() {
  console.log("You fall to the urges of your bed and go to sleep!!");
  decisions();
  process.exit();
}

// startGame()
