const readLineSync = require("readline-sync");
const leaveGame = () => {
  console.log(
    "I don't blame you for wanting out! This adventure is not for the weak of heart!"
  );
  process.exit();
};
const gameIntro = () => {
  console.log(
    "It is a blistering cold and snowy December evening in New York.\n"
  );
  console.log(
    "You are walking around midtown doing some last minute Christmas shopping\n"
  );
  console.log(
    "While shopping you encounter a pitch black alleyway with a curious sight\n"
  );
  console.log(
    "at the very end of the alleyway is a glowing blue orb the size of a car\n"
  );

  if (readLineSync.keyInYN("\n Do you wish to enter the alleyway?")) {
    startGame();
  } else {
    leaveGame();
  }
};

const youDied = () => {
  console.log("YOU DIED");
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
    "off to the side and close to the orb is a homeless looking man in a cloak with his head down\n"
  );

  let talkOrJump;
  while (
    talkOrJump !== "jump into the portal" &&
    talkOrJump !== "talk to the cloaked man"
  ) {
    talkOrJump = readLineSync.question(
      "Do you jump into the portal or talk to the cloaked man? \n"
    );
    talkOrJump = talkOrJump.trim().toLocaleLowerCase();
    if (
      talkOrJump !== "jump into the portal" &&
      talkOrJump !== "talk to the cloaked man"
    ) {
      console.log("Please enter either..\n");
      console.log("1. Jump into the portal\n");
      console.log("2. talk to the cloaked man");
    }
    if (talkOrJump === "jump into the portal") {
      youDied();
    } else {
      talkToYoda();
    }
  }
};

gameIntro();
