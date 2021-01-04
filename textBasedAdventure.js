const readline1 = require("readline-sync");

// console.log(`Hello ${nameInput}!  Welcome to my game.`)

// const readLineSync = require("readline-sync");

// const name = readLineSync.question("What's your name? ");
// console.log("Hello " + name + " it's nice to meet you!")
// Whoever is grading my story, that first problem was funny

let nameInput = readline1.question("Enter your name: ");

let doorChoice;

const intro = () => {
  console.log("Welcome to my winter adventure, " + nameInput + "!");
  console.log(
    "To play, just read the text and answer the questions when you're asked to make a choice."
  );
  console.log("");
  console.log("You are in a room with three doors: a, b and c");
};

intro();

const doorLocked = () => {
  doorChoice = readline1.question("Which door do you choose (a, b or c)? ");
  if (doorChoice === "a") {
    console.log("\nThis door is locked. Please, try another (b or c).");
    tryAgain();
  } else if (doorChoice === "b") {
    console.log(
      "\nYou enter a room with a table. \nThere is a cup of hot chocolate on it.");
    chocQuestion();
  } else if (doorChoice === "c") {
    doorChoiceC();
  } else {
    console.log("\nPlease make a valid selection (a, b or c).\n");
    tryAgain();
  }
};

const doorChoiceC = () => {
  console.log(
    `\nThis door takes you outside. \nYou see a friendly snowperson. \nThe snowperson says: "Hello! What is your name?"`
  );
  console.log(
    "You look at it up and down but don't trust it. You give a fake name."
  );
  nameInputB = readline1.question("Tell the snowperson your name:\n");
  if (nameInputB.toLowerCase() === nameInput.toLowerCase()) {
    console.log("You are really trusting.");
  }
  console.log(`\nThe snowperson says, "Wow, ${nameInputB} is my name too!"`);
  console.log(
    `"Whoa, I just got déjà vu. \nAnyway have this diamond. You are now rich!" \nTHE END\n`
  );
  afterMike();
};

const tryAgain = () => {
  doorLocked();
};

const chocQuestion = () => {
  if (readline1.keyInYNStrict("Do you want to drink the hot cocoa? ")) {
    console.log(
      "\nYou feel very warm and content. Now you are ready to play outside in the snow. You leave this room and go back where you came."
    );
    tryAgain();
  } else {
    console.log(
      "\nThere is nothing else to do here and you start to feel very cold. \nWouldn't a nice warm cup of hot chocolate warm you up?"
    );
    chocQuestion();
  }
};
const afterMike = () => {
  console.log("Or is it...\n");
  console.log("\nIt's not. :/\n");
  tapRub();
};

const tapRub = () => {
  console.log("Tap your head and rub your belly simultaneously");
  canYouTapRub();
};

const canYouTapRub = () => {
  if (readline1.keyInYNStrict("Can you complete this challnge? ")) {
    console.log(
      "\nExcellent work! \nThe troll thats hiding under a bridge that you didn't notice allows you passage."
    );
    console.log(
      `You say to yourself, "Self, if there's a bridge, I'm gonna cross it!"`
    );
    spirit = readline1.question(
      "Now, who has a 'can do' spirit? \n a: Me! Me! Me! I do! I do! \n b: Huh?\n",
      {
        limit: ["a", "b"],
        limitMessage: `\nThere are only two options friend: \n"a" or "b"\n`,
      }
    );
    if (spirit.toLowerCase() === "a") {
      console.log("\nYea, you do! And you're gonna need all that spirit.");
      console.log("This next part is gonna be rough!");
      threeWeapons
      ();
    } else {
      console.log("\nKeep on truckin' buddy, I have faith in you!");
      console.log("How about a task to give you some confidence?");
      threeWeapons
      ();
    }
  } else console.log("\nYou have failed! Punishment is death by troll!");
  gameOver();
};

const threeWeapons
 = () => {
  console.log(
    "Look to your right. \nNext to the tree, on the floor are 3 weapons."
  );
  console.log(
    `My friend, we're gonna have to kill that troll. \nAnd by "we", I mean "YOU"!`
  );
  console.log(
    "I'm sorry, I didn't tell you before but that troll was going to kill you if you couldn't tap your head and rub your belly."
  );
  const weapon = () => {
    weaponChoice = readline1.question(
      "Pick a weapon: \n 1. Sword \n 2. Mace \n 3. Gun \n 4. I don't want to\n",
      {
        limit: ["1", "2", "3", "4"],
        limitMessage: "4 options here. Please input a number from 1 - 4.",
      }
    );
  };
  const weaponNoOption = () => {
    weaponChoice = readline1.question(
      "Pick a weapon: \n 1. Sword \n 2. Mace \n 3. Gun \n",
      {
        limit: ["1", "2", "3"],
        limitMessage: "3 options here. Please input a number from 1 - 3.",
      }
    );
    if (weaponChoice === "1") {
      console.log("\nYou Psycho! You left a bloody mess!");
      console.log("Did you have fun? Stay away please. I need a minute...");
      theRoad();
    } else if (weaponChoice === "2") {
      console.log("\nYou're sick! It's just some nasty mashed potatoes left!");
      console.log("What's wrong with you?!");
      theRoad();
    } else if (weaponChoice === "3") {
      console.log(
        "\nYou got 3 shots off but the troll quickly closed the gap..."
      );
      console.log("Not enough stopping power... \nIt was a quick death...\n");
      gameOver();
    }
  };
  weapon();
  if (weaponChoice === "1") {
    console.log("\nYou Psycho! You left a bloody mess!");
    console.log("Did you have fun? Go away please. I need a minute...");
    theRoad();
  } else if (weaponChoice === "2") {
    console.log("\nYou're sick! It's just some nasty mashed potatoes left!");
    console.log("What's wrong with you?!");
    theRoad();
  } else if (weaponChoice === "3") {
    console.log(
      "\nYou got 3 shots off but the troll quickly closed the gap..."
    );
    console.log("Not enough stopping power... \nIt was a quick death...\n");
    gameOver();
  } else {
    console.log(
      "\nIt was going to kill you if you couldn't tap your head and rub your belly!"
    );
    console.log(
      "Plus it will kill the next person. I mean, look at the victims under the bridge."
    );
    weaponNoOption();
  }
};

const theRoad = () => {
  console.log("You start walking the road to take your mind off the troll.");
  console.log("Eventually, you get to a fork in the road.");
  fork = readline1.question("Left or right? \n", {
    limit: ["left", "right"],
    limitMessage: "Pick a direction: left or right \n",
  });
  if (fork.toLowerCase() === "left") {
    leftRoad();
  } else if (fork.toLowerCase() === "right") {
    rightRoad();
  }
}

const leftRoad = () => {
  console.log("\nYou've been walking for a long time now.");
  console.log("Your stomach starts to rumble.");
  console.log(
    "You see a house within walking distance and decide to go there."
  );
  enterHouse = readline1.keyInYNStrict("Do you enter? ");
  if (enterHouse) {
    console.log(
      `You should be ashamed of yourself ${nameInput}. But you don't starve.`
    );
    console.log("Confident and full of energy, you leave the house.");
    console.log(
      "Unfortunately for you, the owner was upstairs and drops a piano on you ask you exit the door."
    );
    gameOver();
  } else {
    console.log("\nYou keep walking but now you are thirsty too.");
    console.log("Slowly you start to fade the further you walk...");
    passOut();
  }
};

const rightRoad = () => {
  console.log("\nYou eventually come across a girl with a picnic basket.");
  console.log(
    "You tell her you are lost and hungry. \nShe allows you to choose one item from her basket."
  );
  foodBasket();
  console.log("You want to pay her for her help.");
  moneyPay();
};

const foodBasket = () => {
  foodItems = readline1.question(
    "Make your selection: \n 1. PB & J \n 2. Tuna \n 3. Grilled Cheese \n",
    {
      limit: ["1", "2", "3"],
      limitMessage:
        "3 different sandwiches. All delicious. Please choose from 1 - 3.",
    }
  );
  if (foodItems === "1") {
    console.log(
      "\nThat was delicious but now you have PB stuck in the roof of your mouth"
    );
    console.log("Regardless, you are greatful and want to pay the girl back\n");
    moneyPay();
  } else if (foodItems === "2") {
    console.log("\nThat was delicious but now your breath smells like fish.");
    console.log("Regardless, you are greatful and want to pay the girl back\n");
    moneyPay();
  } else {
    console.log(
      "\nThat was delicious but now the cheese is hurting your stomach."
    );
    console.log("Regardless, you are greatful and want to pay the girl back\n");
    moneyPay();
  }
};

const passOut = () => {
  console.log(
    "You wake up in the hospital. \nThe doctor says you are malnourished and have been hallucinating because of it."
  );
  console.log("The troll seemed so real.");
  observation = readline1.keyInYNStrict(
    "Will you leave before the doctor is done observing you?"
  );
  if (observation) {
    console.log("\nNot the best decision.");
    console.log("Umm, you should go home.");
    cab();
  } else {
    console.log("\nWise decision.");
    console.log("You stay overnight and they release you in the morning.");
    console.log(
      `You receive a clean bill of health! \n${nameInput} is 100% recovered!`
    );
    cab();
  }
};

const moneyPay = () => {
  console.log("You have four $5 bills");
  money = readline1.question(
    "How much money will you give the girl? \n 1. $5 \n 2. $10 \n 3. $15 \n 4. $20\n",
    {
      limit: ["1", "2", "3", "4"],
      limitMessage: "How many greenbacks? You only have four bills of $5",
    }
  );
  console.log("\nHow nice of you. You are a generous person.");
  cab();
};

const cab = () => {
  console.log("Hey, you know you could have taken a cab home this whole time.");
  cabChoice = readline1.question("What's it gonna be? \nUber or Lyft? \n", {
    limit: ["uber", "lyft"],
    limitMessage:
      "You have an account with both companies \nPick one so you can go home. \nYou've had a long day.",
  });
  cabChoice.toLowerCase();
  console.log(
    `${cabChoice}. Good Choice. Have a safe ride home. \nThanks for playing!`
  );
  gameOver();
};

const gameOver = () => {
  if (readline1.keyInYNStrict("\nDo you want to play again? ")) {
    console.clear();
    intro();
    doorLocked();
  } else {
    console.log("Ok! Goodbye!");
    process.exit();
  }
};

doorLocked();
gameOver();
