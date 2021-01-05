const readlineSync = require("readline-sync");

const play = () => {
  let nameInput = readlineSync.question("Enter your name: \n");

  console.log("\nHello " + nameInput + ", welcome to my game! :)\n");

  console.log(
    "You’re standing on the corner of Broadway and W 47th Street.\nIt is 11:50pm on New Year’s Eve.\nYour view of the ball is currently obstructed.\nMake it to the front of the crowd before midnight."
  );
  //Decision 1
  if (readlineSync.keyInYNStrict("\nReady to start?\n")) {
    console.log("\nLet's begin, goodluck!\n");
    startGame();
  } else {
    leaveGame();
  }
};

const startGame = () => {
  //Decision 2
  console.log(
    "As you begin to cross over to 46th Street,\na middle-aged couple asks if you could please take their photograph."
  );

  if (readlineSync.keyInYNStrict("\nWhat do you say?\n")) {
    console.log("Taking their photo took two minutes.\n It is now 11:52pm");
  } else {
    console.log(
      "\nYou make it across the street right before the crosswalk is barricaded off.\nIt is 11:51pm"
    );
  }

  //Decision 3
  console.log(
    "\nYou’re so relieved to have advanced an entire block closer to the ball,\n you take your flask out for a celebratory sip.\nAn officer suspicious of your open container approaches and asks "
  );

  let ageInput = readlineSync.question("\nHow old are you?\n");
  if (Number(ageInput) >= 21) {
    console.log(
      "\nThe officer is surprised by how youthful you appear to be and allows you to carry-on.\n One minute has passed.\n"
    );
  } else {
    console.log(
      "\nThe officer confiscates your flask and puts you in handcuffs.\n"
    );
    leaveGame();
    //prompt to play again
  }

  //Decision 4
  console.log(
    "\nThere are still a few minutes left until the countdown.\n\nYou continue to navigate your way through the throng when you realize your left shoelace has come untied.\nEnter 1 to fix your lace with a single knot, so you can hurry on your way.\nEnter 2 to fix your lace with a double knot to ensure you will not have to stop to tie it again."
  );

  let knotType = readlineSync.question("\n1 or 2?\n");
  if (Number(knotType) === 1) {
    console.log(
      "\nYou have saved yourself some time living life on the edge.\n One minute has passed.\n"
    );
  } else if (Number(knotType) === 2) {
    console.log(
      "\nYou double-knotted your left lace so tightly that you had to\n re-tie your right shoelace in the same manner to make it even.\n Two minutes have passed."
    );
  } else {
    console.log("\nYour entry is invalid.\n");
    //re-prompt question here until valid entry received
  }

  //Decision 5

  console.log(
    "\nAs you reach the crosswalk of 44th street,\nyou glance to your right and see Lady Gaga performing from the top of a halal cart.\nDo you head down the block for a once in a lifetime opportunity to hear Pokerface live?"
  );
  if (readlineSync.keyInYNStrict("\nDo you head down the block?\n")) {
    console.log(
      "\nYou hurry West down 44th street and squeeze your way up to the front\n only to find a Gaga impersonator lip syncing.\nYou try to turn around and leave, but the crowd is too dense.\nYou hear the countdown begin and accept failure."
    );
    leaveGame();
  } else {
    console.log(
      "\nYou hurry on forward and reach 45th street.\nWay to keep your eye on the ball. (haha get it)"
    );
  }
  //Decsion 6
  console.log(
    "\nTimes Square is getting increasingly chaotic with only a few minutes left until the countdown.\nYou notice a group of people towards the center of the crowd wearing neon yellow beanies.\nPerhaps they are members of your Pursuit cohort."
  );
  if (readlineSync.keyInYNStrict("\nDo you make your way towards them?")) {
    console.log(
      "\nYour classmates are excited to see you.\nYou tell them you are trying to get closer for the perfect view,\nthey help you move forward to 44th street."
    );
  } else {
    console.log(
      "\nAs you continue to walk forward, you feel your phone vibrate.\nYou receive a picture via slack of the back of your head.\nYou try to turn back around to make your way to your classmates, but the crowd is too dense.\nYou hear the countdown begin and accept failure. "
    );
    leaveGame();
  }
  //Decision 7
  console.log(
    "\nYou are one block away from 43rd street.\nYou walk by a live broadcast being filmed and scream I love you mom to the camera.\nYour phone begins to vibrate in your pocket, it’s your mom. "
  );
  if (readlineSync.keyInYNStrict("\nDo you answer the call?")) {
    console.log(
      "\nYour mom is delighted by her on air shoutout.\nShe has a bird’s eye view of the crowd on tv and\n tells you there is an opening if you head South-East down Broadway."
    );
  } else {
    console.log(
      "\nAs you go to decline the call,\nyour phone slips out of your hand and the screen shatters on the ground.\nYou pick it up and keep walking, thankful you opted to get the 2-year warranty coverage."
    );
  }

  //Decision 8
  console.log(
    "\nYou are approached by a man selling glow sticks.\nHe tells you that his sales have been low for the night\ndue to the other major companies handing out free light-up gear."
  );
  if (
    readlineSync.keyInYNStrict(
      "\nDo you purchase a glow stick to support his small business?"
    )
  ) {
    console.log(
      "\nHe thanks you graciously as you place your glow necklace around your neck and hurry on your way."
    );
  } else {
    console.log(
      "\nThe salesman sticks his tongue out at you and strolls away into the night."
    );
  }
  //Decision 9
  console.log(
    "\nYou are almost at the optimal viewing spot.\nYou encounter a gathering of unpleasant smelling revelers who do not want to let you pass.\nThey have camped out at their spots for the past 24hrs\nand think it is unfair to let you skip ahead."
  );

  if (readlineSync.keyInYNStrict("\nDo you turn around and accept defeat?\n")) {
    console.log(
      "\nYou made it all this way for nothing.\nAs the countdown begins, you are engulfed by the stench of the crowd ahead.\nWhat a way to ring in the new year…"
    );
    leaveGame();
  } else {
    console.log(
      "\nThe campers respect your hustle and allow you to pass.\nYou are 10 feet away from the front."
    );
  }
  //Decision 10
  console.log(
    "\nYou have made it to the front of the crowd.\nThe countdown begins."
  );
  let languagePreference = readlineSync.question(
    "\nDo you want to hear it in english or spanish?"
  );

  if (languagePreference === "english") {
    //decrement from 10
    console.log("\n10\n9\n8\n7\n6\n4\n3\n2\n1\nHAPPY NEW YEAR");
  } else if (languagePreference === "spanish") {
    console.log(
      "\nDiez\nNueve\nOcho\nSiete\nSeis\nCinco\nCuatro\nDos\nUno\nFELIZ AÑO NUEVO"
    );
  }
};

const leaveGame = () => {
  let again = readlineSync.keyInYNStrict("Would you like to play again?");

  if (again) {
    startGame();
  } else console.log("\nSorry to hear that, there's always next year!");
  process.exit();
};

play();
