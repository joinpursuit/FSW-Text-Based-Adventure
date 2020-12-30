const readLineSync = require("readline-sync");
const leaveGame = () => {
  console.log(
    "I don't blame you for wanting out! This adventure is not for the weak of heart!"
  );
  process.exit();
};

let name = [];

const greeting = () => {
  console.log("Hello! Welcome to my adventure!");
  name = readLineSync.question("What is your name? ");
  if (readLineSync.keyInYN("Hello " + name + "! Would you like to begin?")) {
    gameIntro();
  } else {
    leaveGame();
  }
};

const gameIntro = () => {
  console.log(
    "\n It is a blistering cold and snowy December evening in New York.\n"
  );
  console.log(
    "You are walking around midtown doing some last minute Christmas shopping\n"
  );
  console.log(
    "While shopping you encounter a pitch black alleyway with a curious sight\n"
  );
  console.log(
    "at the very end of the alleyway is a glowing blue portal the size of a car\n"
  );

  if (readLineSync.keyInYN("\n Do you wish to enter the alleyway?")) {
    startGame();
  } else {
    leaveGame();
  }
};

const youDied = () => {
  console.log("\n YOU DIED");
  console.log("Better watch your step next time!");
  process.exit();
};

const startGame = () => {
  console.log("\n As you enter the alleyway you notice it is dead silent\n");
  console.log(
    "the surrounding city is empty now and you can only hear the howling of the nigth wind\n"
  );
  console.log(
    "As you approach the orb it silently grows in size and you notice something else..\n"
  );
  console.log(
    "off to the side and close to the portal is a homeless looking man in a cloak with his head down\n"
  );

  let talkOrJump;
  while (
    talkOrJump !== "jump into the portal" &&
    talkOrJump !== "talk to the cloaked man"
  ) {
    talkOrJump = readLineSync.question(
      "\n Do you jump into the portal or talk to the cloaked man? \n"
    );
    talkOrJump = talkOrJump.trim().toLocaleLowerCase();
    if (
      talkOrJump !== "jump into the portal" ||
      talkOrJump !== "talk to the cloaked man"
    ) {
      console.log("Please enter either..\n");
      console.log("1. Jump into the portal\n");
      console.log("2. talk to the cloaked man");
    }
  }
  if (talkOrJump === "jump into the portal") {
    youDied();
  } else {
    talkToYoda();
  }
};

const talkToYoda = () => {
  console.log("\n The cloaked man begins to speak in a familiar voice..");
  console.log("\n Look lost you do young human");
  console.log("\n great adventure it is obvious you seek..");
  console.log("\n required your assistance is, a great battle awaits");
  console.log("\n a fabled warrior the Republic seeks..");
  console.log(
    "\n this person's name has been foretold to me, it is " + name + "!"
  );

  if (
    readLineSync.keyInYN(
      "\n do you wish to fullfil your destiny and join the resistance? \n"
    )
  ) {
    orbSplitLevel();
  } else {
    leaveGame();
  }
};



const orbSplitLevel = () => {
  console.log("\n May the force be with you..");
  console.log("\n what was once one portal separates slowly into 3.. ");
  console.log("\n Yoda: your help each of these 3 worlds requires...");
  let storySelection = [
    "Forests of Endor",
    "Podracing on Tatooine",
    "The Rescue",
  ];
  console.log("Where would you like to assist first?");
  storySelectionIndex = readLineSync.keyInSelect(storySelection);
  storySelectionChoice = storySelection[storySelectionIndex];
  if (storySelectionChoice === "Forests of Endor") {
    forestsOfEndorLevel();
  } else if (storySelectionChoice === "Podracing on Tatooine") {
    podracingOnTatooineLevel();
  } else if (storySelectionChoice === "The Rescue") {
    theRescueLevel();
  } else {
    leaveGame();
  }
};

const forestsOfEndorLevel = () => {
  console.log("\n Yoda: A wise choice..")
  console.log("\n Godspeed to you on your journey " + name + "!")
  console.log("\n and may the Force be with you..")


}


greeting();
