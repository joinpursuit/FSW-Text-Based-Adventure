const readLineSync = require("readline-sync");
const leaveGame = () => {
  console.log(
    "I don't blame you for wanting out! This adventure is not for the weak of heart!"
  );
  tryAgain();
};

const tryAgain = () => {
  if (readLineSync.keyInYN("Would you like to try again?")) {
    greeting();
  } else {
    process.exit();
  }
};

let name = [];

const greeting = () => {
  console.log("Hello! Welcome to my adventure!");
  name = readLineSync.question("What is your name? ");
  console.log(
    "Nice to meet you " +
      name +
      "! The instructions for my game are simple..DON'T DIE...and enjoy the show..."
  );
  if (readLineSync.keyInYN("Would you like to begin?")) {
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
  console.log("\n Better watch your step next time!");
  tryAgain();
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
    "Battle of Alderaan",
    "Podracing on Tatooine",
    "The Rescue",
  ];
  console.log("Where would you like to assist first?");
  storySelectionIndex = readLineSync.keyInSelect(storySelection);
  storySelectionChoice = storySelection[storySelectionIndex];
  if (storySelectionChoice === "Battle of Alderaan") {
    battleOfAlderaanLevel();
  } else if (storySelectionChoice === "Podracing on Tatooine") {
    podracingOnTatooineLevel();
  } else if (storySelectionChoice === "The Rescue") {
    theRescueLevel();
  } else {
    leaveGame();
  }
};

const battleOfAlderaanLevel = () => {
  console.log("\n Yoda: A wise choice..");
  console.log("\n Godspeed to you on your journey " + name + "!");
  console.log("\n and may the Force be with you..");
  console.log("\n YOU JUMPED INTO THE PORTAL");
  console.log("\n ---------------------------------------------------");
  console.log("_________________THE BATTLE OF ALDERAAN_______________");
  console.log("\n IN A GALAXY FAR FAR AWAY..");
  console.log(
    "\n You are instantly transported to an X-wing hangar on Alderaan, Princess Leia's home planet"
  );
  console.log(
    "\n A rebel alliance general is breifing a squadron of pilots preparing to go on their next mission"
  );
  console.log(
    "\n\n General Jailene: Rebels, Alderaan is under grave threat by a new weapon created by the Empire"
  );
  console.log(
    "\n This new weapon can destroy our planet with only one shot, it is called.. the Death Star"
  );
  console.log(
    "\n We have only one way of saving our planet: Flying a device that can deliver an electromagnetic"
  );
  console.log(
    "\n pulse strong enough to disable the Death Star temporarily so our full batallion of rebel X-wings"
  );
  console.log(
    "\n can destroy it from the inside. This is our last chance people. Fail and it's over..."
  );
  if (readLineSync.keyInYN("\n Is that understood?")) {
    console.log(
      "\n Good. Good luck. Godspeed. And May the Force be with you.."
    );
    console.log(
      "\n General Jailene now turns her attention to you. You there, " +
        name +
        " is it?"
    );
    if (readLineSync.keyInYN("\n You're a new pilot, right?")) {
      console.log(
        "\n Good. We need all the new pilots we can get. You're rear formation. You'll have more of a chance to breathe there."
      );
      console.log("\n Stay sharp. Don't die. Down with the Empire!");
      if (readLineSync.keyInYN("\n Are you ready?")) {
        battleOfAlderaanRearFormation();
      } else {
        leaveGame();
      }
    } else {
      console.log(
        "\n Interesting. I was told you had no prior battle experience. We need all the experience pilots"
      );
      console.log("\n we can get. We'll put you on the front line");
      if (readLineSync.keyInYN("\n Are you ready?")) {
        battleOfAlderaanFrontLine();
      } else {
        leaveGame();
      }
    }
  } else {
    console.log(
      "\n" +
        name +
        " I know you. You're one of the new fighters we just picked up." +
        name
    );
    if (readLineSync.keyInYN("Are we going to have a problem here?")) {
      youDied();
    } else {
      console.log(
        "\n Good. We need all the new pilots we can get. You're rear formation. You'll have more of a chance to breathe there."
      );
      console.log("\n Stay sharp. Don't die. Down with the Empire!");
      if (readLineSync.keyInYN("\n Are you ready?")) {
        battleOfAlderaanRearFormation();
      } else {
        leaveGame();
      }
    }
  }
};

greeting();
