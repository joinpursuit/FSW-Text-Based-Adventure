const readline1 = require("readline-sync");
console.clear()

let nameInput = readline1.question("Enter your name: ");
console.clear()

console.log(`Hello ${nameInput}!  Welcome to Will you sleep? `);

console.log(
  "\nYou will be given different choices on whether you want to remain asleep or stay awake \n"
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
};

function checkItOut() {
  console.clear();
  console.log("Let's go check! should we...\n");

  person = readline1.question(
    "A: Get dressed! and see if neighbors are up?   B: Look out the window?      C: Go back to sleep?\n"
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
};

function rollOver() {
  console.clear();
  person = readline1.question("Good job! sleeping is IMPORTANT!! ");
  decisions();
};

function whoAmIKidding() {
  console.clear();
  console.log(
    "Who am I kidding! I always knew it would end somehow/someday! \n"
  );
  decisions();
};

function getDressed() {
  console.clear();
  console.log(
    "You got dressed and go out into the hallway to find out where the explosion sound came from\n"
  );
  console.log("You see everyone's confused in the hallway in their pajamas \n");

  person = readline1.question(
    "A: Do you ask clueless neighbors,    B: Follow dog,    C: Put on your pjs back on \n"
  );
  if (person === "A".trim().toLowerCase()) {
    askNeighbors();
  } else if (person === "B".trim().toLowerCase()) {
    followDog();
  } else if (person === "C".trim().toLowerCase()) {
    putOnPjs();
  }
};

function theWindow() {
  console.clear();
  console.log(
    "You get up and look out the window. To then realize the loud explosion sound was just thunderstorm. \n"
  );
  console.log("You turn back to your bed and go to sleep! \n");

  decisions();
};

function askNeighbors() {
  console.clear();
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
};

function followDog() {
  console.clear();
  console.log("You see a dog!");
  console.log(
    "The dog was trying to get your attention. So you follow it outside \n"
  );
  console.log(
    "The dog ended up peeing at a hydrant... Complete waste of time! \n"
  );
  person = readline1.keyInYN("Go back upstairs? \n");
  if (person === readline1.keyInYN()) {
    console.clear()
    console.log("\nGood choice go back upstairs and go to sleep. \n");
    decisions();
    } else {
      console.clear()
      console.log("\nBeautiful night! \n");
      console.log("I guess I'll take a walk there's a full moon out tonight!! \n")
    decisions();
  }
};

function putOnPjs() {
  console.clear();
  console.log("You go back to your room and change into your pjs. Back to sleep you go! \n"
  );decisions();
};

function stayPut() {
  console.clear();
  console.log("You got tired of trying to figure out what was wrong.");
  console.log("So you went back to your room and stayed put in your bed. \n");
  console.log("Back to sleep you go! \n");

  decisions();
};

function toBasement() {
  console.clear();
  console.log("You got down to the basement and the power is out \n");
  person = readline1.question(
    "A: Go back up to get flashlight?     B: Keep going and you'll find The LIGHT!! \n"
  );

  if (person === "A".trim().toLowerCase()) {
    getFlashlight();
  } else if (person === "B".trim().toLowerCase()) {
    keepGoing();
  }
};

function getFlashlight() {
  console.clear();
  console.log("You on your way back upstairs \n");
  console.log("You get to your room \n");
  console.log("But your bed is calling you \n");
  person = readline1.question("A: Go to sleep ?    B: Find flashlight? \n");

  if (person === "A".trim().toLowerCase()) {
    goToSleep();
  } else if (person === "B".trim().toLowerCase()) {
    findFlashlight();
  }
};

function keepGoing() {
  console.clear();
  console.log(
    "You trying to move around the basement without killing yourself in the dark \n"
  );
  console.log(
    "It just occurred to you that you're terribly scared of the dark!"
  );
  console.log("You hear a loud Noise!! \n");
  person = readline1.keyInYN("Do You run out and SCREAM BLOODY MURDER!! \n");
  if (person === readline1.keyInYN()) {
    console.clear();
    console.log(
      "Neighbor B laughs at you and ask if you want to press charges. \n"
    );
    console.log("Neighbor A scolds at you. " + '"I told you to STAY put!!" \n');
    console.log(
      "You roll your eyes and walk past them to your room and go to sleep! \n"
    );
  } else {
    console.log(
      "\nIf loud noises don't scare you! Why the heck did you wake up in the first place! GO BACK TO BED!! \n"
    );
  }

  decisions();
};

function findFlashlight() {
  console.clear()
  console.log(
    "You in your room and find the flashlight but it doesn't have any batteries \n"
  );
  console.log("You're tired!! You was woken out of your sleep. Do you... \n");
  person = readline1.question("A: Look for batteries?         B: Who has time to look for batteries? \n");
  if (person === "A".trim().toLowerCase()) {
    batteries();
  } else if (person === "B".trim().toLowerCase()) {
    goToSleep();

  }
  // let userInput =
  // if (person === ) {

  // }
};

function batteries() {
  console.clear();
  console.log("Actually do you really want to go off looking for batteries? \n");
  console.log("I didn't think so. by the time you do find those batteries it will be daylight \n");
  console.log("Your brain is not even capable enough right now to even do the math.  \n"); //To calculate how many batterries!
  // console.log("Stay in bed! nothing to find out there. No need for batteries!! \n");
  console.log(`Stay in bed, ${nameInput}! nothing to find out there. No need for batteries!!  `);
  goToSleep()
};

function goToSleep() {
  console.clear();
  console.log(`Stay in bed, ${nameInput}! nothing to find out there. No need for batteries!!  `);
  console.log("\nYou fall to the urges of your bed and go to sleep!! \n");
  console.log("Ultimately you chose SLEEP!! \n");
  console.log("Good thing! Whats better than sleep anyways? \n");
  console.log("Moral of the story mind your business! \n");

  process.exit();
};

// startGame()
