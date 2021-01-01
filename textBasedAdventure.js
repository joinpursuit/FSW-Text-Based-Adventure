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
    console.log(
      "I don't blame you for wanting out! This adventure is not for the weak of heart!"
    );
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
        rearFormation();
      } else {
        leaveGame();
      }
    } else {
      console.log(
        "\n Interesting. I was told you had no prior battle experience. We need all the experience pilots"
      );
      console.log("\n we can get. We'll put you on the front line");
      if (readLineSync.keyInYN("\n Are you ready?")) {
        frontFormation();
      } else {
        leaveGame();
      }
    }
  } else {
    console.log(
      "\n" +
        name +
        " I know you. You're one of the new fighters we just picked up. " +
        name
    );
    if (readLineSync.keyInYN(" are we going to have a problem here?")) {
      youDied();
    } else {
      console.log(
        "\n Good. We need all the new pilots we can get. You're rear formation. You'll have more of a chance to breathe there."
      );
      console.log("\n Stay sharp. Don't die. Down with the Empire!");
      if (readLineSync.keyInYN("\n Are you ready?")) {
        rearFormation();
      } else {
        leaveGame();
      }
    }
  }
};
frontFormation = () => {
  nextMoveAmbush = [
    "Continue Ascent",
    "Bank left",
    "Cut all power and stop in place",
  ];
  nextMovePincer = [
    "Roll left",
    "Roll right",
    "Cut all power and stop in place",
  ];
  console.log(
    "\n As you exit the hangar and make your ascent off Alderaan at 600 mph, you are immediately"
  );
  console.log("\n ambushed by a squadron of TIE fighters! Do you:");

  nextMoveAmbushIndex = readLineSync.keyInSelect(nextMoveAmbush);
  nextMoveAmbushChoice = nextMoveAmbush[nextMoveAmbushIndex];
  if (nextMoveAmbushChoice === "Continue Ascent") {
    console.log(
      "You encounter TIE fighters trying to intercept you from above and below in a pincer movement"
    );
    console.log("\n Do you..");
    nextMovePincerIndex = readLineSync.keyInSelect(nextMovePincer);
    nextMovePincerChoice = nextMovePincer[nextMovePincerIndex];
    if (nextMovePincerChoice === "Roll left") {
      console.log(
        "\n You rolled left and were picked off by a waiting TIE fighter"
      );
      youDied();
    } else if (nextMovePincerChoice === "Roll right") {
      console.log(
        "\n You rolled right and were picked off by a waiting TIE fighter"
      );
      youDied();
    } else if (nextMovePincerChoice === "Cut all power and stop in place") {
      dogFight();
    } else {
      leaveGame();
    }
  } else if (nextMoveAmbushChoice === "Bank left") {
    console.log(
      "You quickly bank left and are immediately picked off an intercepting TIE fighter!"
    );
    youDied();
  } else if (nextMoveAmbushChoice === "Cut all power and stop in place") {
    dogFight();
  } else {
    leaveGame();
  }
};
dogFight = () => {
  dogFightNextMove = [
    "Continue your ascent out of Alderaan",
    "Help out with the Dogfight",
  ];
  dogFightShootDown = [
    "The left TIE fighter",
    "The middle TIE fighter",
    "The right TIE fighter",
  ];
  console.log(
    "\n You cut the power to your X-wing and the two TIE fighters waiting to ambush you"
  );
  console.log("\n do not expect this move and crash into eachother! Whoohoo!");
  console.log(
    "\n your celebration is cut short however when you see a dogfight up ahead that badly needs your assistance"
  );
  console.log("\n Do you..");
  dogFightSelectionIndex = readLineSync.keyInSelect(dogFightNextMove);
  dogFightSelectionChoice = dogFightNextMove[dogFightSelectionIndex];
  if (dogFightSelectionChoice === "Continue your ascent out of Alderaan") {
    youDied();
  } else {
    console.log(
      "\n As you approach the dogfight you see one of your friends OBI in desperate need of help"
    );
    console.log(
      "\n He is being chased by 3 TIE fighters coming in FAST. We need to shoot one of them down. Otherwise OBI is a goner"
    );
    console.log("\n Which TIE fighter pursuing OBI do we shoot down?");
    dogFightShootDownIndex = readLineSync.keyInSelect(dogFightShootDown);
    dogFightShootDownSelection = dogFightShootDown[dogFightShootDownIndex];
  }
  if (dogFightShootDownSelection === "The left TIE fighter") {
    alderaanExitAtmosphere();
  } else if (dogFightShootDownSelection === "The middle TIE fighter") {
    console.log(
      "Oh no the middle TIE fighter made a quick descend and you SHOT DOWN OBI"
    );
    youDied();
  } else if (dogFightShootDownSelection === "The right TIE fighter") {
    alderaanExitAtmosphere();
  }
};

rearFormation = () => {
  nextMovePincer = [
    "Roll left",
    "Roll right",
    "Cut all power and stop in place",
  ];
  rearFormationNextMove = [
    "Hit MAX power and speed and try to break the ambush",
    "Stay in the hanger and wait until the ambush is over",
  ];
  console.log(
    "As you exit the hanger from rear formation you start to see the frontline being picked off like flies"
  );
  console.log(
    "The TIE fighters know about the battleplans and you're being AMBUSHED. Do you:"
  );
  rearFormationIndex = readLineSync.keyInSelect(rearFormationNextMove);
  rearFormationSelection = rearFormationNextMove[rearFormationIndex];
  if (
    rearFormationSelection ===
    "Hit MAX power and speed and try to break the ambush"
  ) {
    console.log("\n General Jailene: SLICK MOVE " + name + "!!!");
    console.log(
      "\n You broke through the ambush and other new pilots followed your lead. You saved at least 5 lives!"
    );
    console.log("\n FULL SPEED AHEAD!!");
    console.log(
      "\n You encounter TIE fighters trying to intercept you from above and below in a pincer movement"
    );
    console.log("\n Do you..");
    nextMovePincerIndex = readLineSync.keyInSelect(nextMovePincer);
    nextMovePincerChoice = nextMovePincer[nextMovePincerIndex];
    if (nextMovePincerChoice === "Roll left") {
      console.log(
        "\n You rolled left and were picked off by a waiting TIE fighter"
      );
      youDied();
    } else if (nextMovePincerChoice === "Roll right") {
      console.log(
        "\n You rolled right and were picked off by a waiting TIE fighter"
      );
      youDied();
    } else if (nextMovePincerChoice === "Cut all power and stop in place") {
      dogFight();
    } else {
      leaveGame();
    }
  } else {
    console.log("General Jailene: " + name + "YOU NEED TO MOVE!!");
    console.log(
      "You're a sitting duck because you didn't move. A TIE fighter sends shoots a gamma burst into the hangar.."
    );
    youDied();
  }
};
alderaanExitAtmosphere = () => {
  console.log("\n\n WHOOO!! DIRECT HIT!!")
  console.log("OBI performs a roll and bank maneuver that completely confuses the other 2 TIE fighters. They crash into eachother")
  console.log("\n\n Thanks for the assist " + name + "!! We need more pilots like you who aren't afraid of a little dogfight!")
  if (readLineSync.keyInYN("\n Are you ready to exit orbit and deliver a gift to the empire")){
alderaanOrbit();
  } else {
    console.log("OBI: come one " + name + " I know this is intense, but YOU GOT THIS!!")
    alderaanOrbit();
  }
  }

  alderaanOrbit = () => {
    followOrCover = ["Cover OB from the Deathstar anti-aircraft guns", "Follow OB to the Deathstar"]
    console.log("\n\n As you enter Alderaan's orbit you notice the sheer size of the Death Star, its HUGE!")
    console.log("\n You are so close to setting off the EMP and disabling the monstrous weapon")
    console.log("\n\n OBI: It's particle beam is firing up, we dont have much time!")
    console.log("\n just then you notice that the anti-aircraft guns being loaded up against you and OBI")
    console.log("\n\n OBI: You cover me from the AA guns, I'm gonna get closer. I just need to get within a mile..")
    console.log("\n this is our last chance.." + name + " it has been an honor fighting alongside of you..")
    followOrCoverIndex = readLineSync.keyInSelect(followOrCover)
    followOrCoverSelection = followOrCover[followOrCoverIndex]
    if (followOrCoverSelection === "Cover OB from the Deathstar anti-aircraft guns"){
      console.log("\n\n As you shoot at the AA gun it stays focused on you instead of OBI")
      console.log("\n OBI guns it straight at the Deathstar, he reaches Mach 2 before finally firing up the EMP")
      console.log("\n As the EMP takes a few seconds to fire up you switch from firing at the AA gun to a long TIE fighter you see about to fire on OBI")
      console.log("\n\n ANOTHER DIRECT HIT!")
      console.log("\n\nas OBI is about to detonate the EMP, he looks back at you in appreciation")
      console.log("\n Good job kid! You really saved all of us today! Catch you on the other side...")
      console.log("\n\n the EMP device fires at the Deathstar and we see an instant loss of power...")
      winGame()
      tryAgain();
    } else {
      console.log("You failed to listen to OBI and didn't cover him. He was shot down by the AA gun and the EMP device was destroyed. Also,")
      youDied();
    }
    }
    
    winGame = () => {
      console.log("Thanks for playing my game " + name + "!!!")
      console.log("\n The END. All hail " + name + "! New hero of the Republic!!!")
      console.log("\n The END. All hail " + name + "! New hero of the Republic!!!")
      console.log("\n The END. All hail " + name + "! New hero of the Republic!!!")
      console.log("\n The END. All hail " + name + "! New hero of the Republic!!!")
      console.log("\n The END. All hail " + name + "! New hero of the Republic!!!")
      console.log("\n The END. All hail " + name + "! New hero of the Republic!!!")
      console.log("\n The END. All hail " + name + "! New hero of the Republic!!!")
      console.log("\n The END. All hail " + name + "! New hero of the Republic!!!")
  
    }
  
greeting();
