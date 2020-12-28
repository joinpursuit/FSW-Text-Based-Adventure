const rls = require("readline-sync");

/// --LEAVE GAME
const leaveGame = () => {
  console.log(
    `\n--* Hmmm, Hope you had fun.
    So long ${userName}.`
  );
  //console.clear();
  process.exit();
};

/// --INCAPACITATED
const incapacitated = () => {
  let choice;
  console.log("-*- INCAPACITATED -*-");
  console.log("-*- GAME OVER -*- \n");
  console.log(
    `--* Do you want to play again or leave the game?
    YES To play again
    NO To leave`
  );
  while (choice !== "yes" && choice !== "no") {
    choice = rls.question("yes? or no? \n");
    choice = choice.trim().toLowerCase();
    if (choice !== "yes" && choice !== "no") {
      console.log("\n--* I know you're seeing stars but, FOCUS!");
    }
  }
  if (choice === "yes") {
    console.clear();
    startGame();
  } else {
    leaveGame();
  }
};

///--CHOICE 8 -- inside
// const diner = () => {}; --> loop to fruit or cake
// const decline = () => {}; --> hit in the head incapacitated
const diner = () => {
  let choice;
  console.log(
    `\n--* Blah
    Blah
    Blah\n`
  );
  while (choice !== "fruit" && choice !== "cake") {
    choice = rls.question("Do you eat the fruit or the cake?\n");
    choice = choice.trim().toLowerCase();
    if (choice !== "fruit" && choice !== "cake") {
      console.log("\nI don't think so.");
    }
  }
  if (choice === "fruit") {
    fruit();
  } else {
    cake();
  }
};
const decline = () => {
  console.log(
    `\n--* You stumble your way to the bathroom to splash some cold water on your face.
        Just as you turn the corner and take a few steps a door opens suddenly and
        slams into your head knocking you out cold.\n`
  );
  console.log("--* ooooh. That's gonna leave a nasty bruise. \n");
  incapacitated();
};

///--CHOICE 7 -- inside
// const wave = () => {}; --> diner or decline
// const hide = () => {}; --> loop to the basement
const wave = () => {
  let choice7;
  console.log(
    `\n--* Before you realize it, you are drowning in the most beautiful brown eyes you have ever seen.
        Beautiful One: That was quite a performance up there. 
        You: I'd offer an encore but .... 
        Beautiful One: You ok?
        You: Yup.
        Beautiful One: You look like you could use a cup of something not alcoholic and warm.
        There's a diner up the street. Come on. \n
        --* What do you do?\n`
  );
  while (choice7 !== "diner" && choice7 !== "decline") {
    choice7 = rls.question("--* Go to the diner or decline?\n");
    choice7 = choice7.trim().toLowerCase();
    if (choice7 !== "diner" && choice7 !== "decline") {
      console.log("\nSober up Dearie.");
    }
  }
  if (choice7 === "diner") {
    diner();
  } else {
    decline();
  }
};
const hide = () => {
  console.log(
    `\n--* You stumble your way as quickly as you can away from the table and head towards
    the back. Just as you get near the kitchen area you feel really sick.
    Quickly  you duck into the nearest room you can find. 
    Only it's not a room at all and you fall down a shaft.`
  );
  door2();
};

/// --CHOICE 6 -- inside
// const stay = () => {}; --> meet someone --> wave or hide?
// const leave = () => {}; --> loop to function outside
const stay = () => {
  let choice6;
  console.log(
    `\n--* You give the ogre who took your spotlight a stank look and exit stage left as graceful 
    as only someone drunk can.
    While you are sitting at you table trying to collect yourself, you notice a beautiful 
    specimen of a human being looking right at you.\n
    What do you do?
    Wave and smile semi-soberly? or Find somewhere to hide?\n`
  );
  while (choice6 !== "wave" && choice6 !== "hide") {
    choice6 = rls.question("--* Wave? or Hide? \n");
    choice6 = choice6.trim().toLowerCase();
    if (choice6 !== "wave" && choice6 !== "hide") {
      console.log("\nDo you need coffee or something?");
    }
  }
  if (choice6 === "wave") {
    wave();
  } else {
    hide();
  }
};

const leave = () => {
  outside();
};

/// --CHOICE 5 -- inside
/// const dance = () => {}; --> fall down and hit your head --> incapacitated
/// const sing = () => {}; --> embarass yourself --> stay or leave
/// --CHOICE 5 -- inside
/// const fruit = () => {} --> hallucinate --> Enchanted Forrest
/// const cake = () => {} --> hallucinate --> Dark Woods
/// const friend = () => {};
/// const foe = () => {};
/// const approach = () => {};
/// const retreat = () => {};
const dance = () => {
  console.log(
    `\n--* You get on the dance floor showing off your cool moves.
    You bust another cool move. 
    Go ${userName}! Go ${userName}! Go ${userName}! 
    uh-oh, you slip and fall banging your head on something really hard.`
  );
  console.log("--* ooooh. That's gonna leave a nasty bruise. \n");
  incapacitated();
};

const sing = () => {
  let choice5;
  console.log(
    `\n--* You grab the mic and start to let the vibes flow.
    A low rumble is building in the room but you are so drunk and happy that you could care less.
    Just as you are about to give them the grand finalie. 
    Someone grabs your mic and you hear the voice again. 
    The Voice: You think this is American Idol Auditions?!
    Laughter erupts and you are mortified.\n
    Do you want to stay or leave?`
  );
  while (choice5 !== "stay" && choice5 !== "leave") {
    choice5 = rls.question("CHOOSE: Stay? or Leave? \n");
    choice5 = choice5.trim().toLowerCase();
    if (choice5 !== "stay" && choice5 !== "leave") {
      console.log("\n--* Get it together!");
    }
  }
  if (choice5 === "stay") {
    stay();
  } else {
    leave();
  }
};

const friend = () => {
  console.log(`\n--* friend text`);
  //console.log("Testing, testing 1, 2, 3");
};

const foe = () => {
  console.log(`\n--* foe text`);
  //console.log("Testing, testing 1, 2, 3");
};

const approach = () => {
  console.log(`\n--* approach text`);
  //console.log("Testing, testing 1, 2, 3");
};
const retreat = () => {
  console.log(`\n--* retreat text`);
  //console.log("Testing, testing 1, 2, 3");
};

const fruit = () => {
  let choiceEnchanted;
  console.log(`\n--* Welcome to the Enchanted Forrest`);
  //console.log("Testing, testing 1, 2, 3");
  if (choiceEnchanted === "approach") {
    approach();
  } else {
    retreat();
  }
};

const cake = () => {
  let choiceDarkWood;
  console.log(`\n--* Welcome to the Dark Wood Forrest`);
  //console.log("Testing, testing 1, 2, 3");
  if (choiceDarkWood === "friend") {
    friend();
  } else {
    foe();
  }
};

/// --CHOICE 4 --inside
// const martini = () => {}; --> dance or sing
// const box = () => {}; -->  fruit or cake
// const laugh = () => {}
// const cry = () => {}
/// --CHOICE 4 -- outside
// const left = () => {} -->
// const right = () => {} -->
// const car1 = () => {} -->
// const car2 = () => {} -->
const left = () => {
  console.log(`\n`);
  console.log("Testing, testing 1, 2, 3");
};

const right = () => {
  console.log(`\n`);
  console.log("Testing, testing 1, 2, 3");
};

const car = () => {
  console.log("Testing, testing 1, 2, 3");
}; //--> CAR 1 or CAR 2

// ***UNKNOWN AS YET
// const enchanted = () => {console.log("Testing, testing 1, 2, 3");}; //-->
// const woods = () => {console.log("Testing, testing 1, 2, 3");}; //-->

const martini = () => {
  let choice4;
  console.log(
    `\n--* Looks like someone has had a few too many martinis. 
    They are pretty tasty.
    You decide to go with the flow and have some fun.
    Do want to dance? or sing? \n`
  );
  while (choice4 !== "dance" && choice4 !== "sing") {
    choice4 = rls.question("--* CHOOSE: Dance? or Sing?\n");
    choice4 = choice4.trim().toLowerCase();
    if (choice4 !== "dance" && choice4 !== "sing") {
      console.log("\n--* I know you're a bit loopy but, FOCUS!");
    }
  }
  if (choice4 === "dance") {
    dance();
  } else {
    sing();
  }
};

const box = () => {
  let choice4Box;
  console.log(`\n`);
  while (choice4Box !== "fruit" && choice4Box !== "cake") {
    choice4Box = rls.question("CHOOSE: fruit? or cake?\n");
    choice4Box = choice4Box.trim().toLowerCase();
    if (choice4Box !== "fruit" && choice4Box !== "cake") {
      console.log("\n Try Again.");
    }
  }
  if (choice4Box === "fruit") {
    fruit();
  } else {
    cake();
  }
};

// const ??? = () => {
//   console.log(`\n`);
//   console.log("Testing, testing 1, 2, 3");
// };

const laugh = () => {
  console.log(`\n`);
  console.log("Testing, testing 1, 2, 3");
};

const cry = () => {
  console.log(`\n`);
  console.log("Testing, testing 1, 2, 3");
};

///--CHOICE 3 -- inside
// const door1 = () => {}; --> take you to the roof --> martini or mystery box
// const door2 = () => {}; --> takes you to the basment -->
///--CHOICE 3 -- outside
// const city = () => {}; --> left or right
// const country = () => {}; --> car1 or car2
const door1 = () => {
  let choice3;
  console.log(
    `\n--* You are now at a rooftop party.
    A waiter approaches and offers you a tray of delectable martinis.
    In the middle of the tray is a box.`
  );
  while (choice3 !== "martini" && choice3 !== "box") {
    choice3 = rls.question("CHOOSE: Martini? or Box? \n");
    choice3 = choice3.trim().toLowerCase();
    if (choice3 !== "martini" && choice3 !== "box") {
      console.log(`\n--* ${userName}, please pay attention.`);
    }
  }
  if (choice3 === "martini") {
    martini();
  } else {
    box();
  }
};
const door2 = () => {
  let choiceEmotion;
  console.log(
    `\n--* You are now in a pitch black room. At least you think it's a room.
      You hear the faint drip, drip of liquid in the distance.
      The Voice: Laughing... Oh we're about to have some real fun now.
      You feel like you are about to have a nervous breakdown.\n
      What do you do laugh or cry?`
  );
  while (choiceEmotion !== "laugh" && choiceEmotion !== "cry") {
    choiceEmotion = rls.question("CHOOSE: Laugh? or Cry?\n");
    choiceEmotion = choice.trim().toLowerCase();
    if (choiceEmotion !== "laugh" && choiceEmotion !== "cry") {
      console.log("Oh, come on!");
    }
  }
  if (choiceEmotion === "laugh") {
    laugh();
  } else {
    cry();
  }
};

const city = () => {
  let choiceDirection;
  console.log("");
  console.log("");
  while (choiceDirection !== "left" && choiceDirection !== "right") {
    choiceDirection = rls.question("CHOOSE: Left? or Right?\n");
    choiceDirection = choiceDirection.trim().toLowerCase();
    if (choiceDirection !== "left" && choiceDirection !== "right") {
      console.log("One more time.");
    }
  }
  if (choiceDirection === "left") {
    left();
  } else {
    right();
  }
};
const country = () => {
  // let choice;
  // console.log("");
  // console.log("")
  // while (choice !== "" && choice !== "") {
  //   choice = rls.question(" or  \n");
  //   choice = choice.trim().toLowerCase();
  //   if (choice !== "" && choice !== "") {
  //     console.log("");
  //   }
  // }
  // if (choice === "") {
  //     ();
  //   } else {
  //     ();
  //   }
};

/// --CHOICE 2
//const inside = () => {} --> door1 or door 2
//const outside = () => {} --> city or country
const inside = () => {
  let choiceDoors;
  console.log(
    `\n--* You step into a darkened room that is a bit warm when you hear a voice say.
      Welcome to my Parlor, ${userName} darling. 
      You look around nervously but you can't see who is speaking. \n
      The Voice: Pick a door to begin your adventure darling. 
      Just tell me what number you want Door number 1 or Door number 2.`
  );
  while (choiceDoors !== "1" && choiceDoors !== "2") {
    choiceDoors = rls.question("CHOOSE: 1? or 2? \n");
    choiceDoors = choiceDoors.trim().toLowerCase();
    if (choiceDoors !== "1" && choiceDoors !== "2") {
      console.log("\n--* Seriously?");
    }
  }
  if (choiceDoors === "1") {
    door1();
  } else {
    door2();
  }
};

const outside = () => {
  let choice2a;
  console.log(`\n--* Ahhh. The great outdoors.`);
  while (choice2a !== "city" && choice2a !== "country") {
    choice2a = rls.question("CHOOSE: City? or Country? \n");
    choice2a = choice2a.trim().toLowerCase();
    if (choice2a !== "city" && choice2a !== "country") {
      console.log(`\n--* Really? Let's try this again.`);
    }
  }
  if (choice2a === "city") {
    city();
  } else {
    country();
  }
};

/// --START GAME --> CHOICE 1
//const inside = () => {} --> doors
//const outside = () => {} --> city or country
const startGame = () => {
  let choice1;
  while (choice1 !== "inside" && choice1 !== "outside") {
    choice1 = rls.question("CHOOSE: Inside? or Outside? \n");
    choice1 = choice1.trim().toLocaleLowerCase();
    if (choice1 !== "inside" && choice1 !== "outside") {
      console.log(`\n--* Uhmmm, NO!.
      Let's try this again.`);
    }
  }
  if (choice1 === "inside") {
    inside();
  } else {
    outside();
  }
};

//   while (choice){
//     let choice = rls.question("Inside or Outside?")
//     if(choice !== "inside" && choice !== "outside") {
//         console.log("Uhmmm, NO!");
//         console.log("Let's try this again. ")
//     }}
// };

/// --RULES
const rules = () => {
  console.log("--* Here are the rules:");
  console.log(
    `--* You will be asked a series of questions and you will choose the path we take.
    If you get yourself ...let's say killed or incapacitated...
    Yeah, You lose.\n`
  );
  if (rls.keyInYN("--* Ready to play?")) {
    startGame();
  } else {
    leaveGame();
  }
}; //FIX THE NOT Y OR N RESPONSE

/// -- INTRO
let userName = rls.question("Enter your name: ");
console.log(`--* Hello ${userName}!  Welcome to my Text Adventure Game.`);

/// --WANT TO PLAY?
// let answer;
// while( answer !== Y && answer !== N) {
//     answer = rls.keyInYN("--* Do you want to play a game with me?")
//  console.log("Please enter Y for yes, or N for no.")
// }
if (rls.keyInYN("--* Do you want to play a game with me?")) {
  console.log("\n--* Sweet! \n");
  rules();
} else {
  leaveGame();
} //FIX THE NOT Y OR N RESPONSE

/// --SAMPLE of .trim() and .toLowerCase()
// while(highOrLow !== "high" && highOrLow !== "low") {
//     let highOrLow;
//     highOrLow = rls.question("Was I high or low? \n");
//     highOrLow =highOrLow.trim().toLowerCase();
//     // .trim() remove any leading or trailing white space(s)
//     // .toLowerCase() converts the input to all lowercase letters
//     if(highOrLow !== "high" && highOrLow !== "low") {
//         console.log("Not a valid guess. Must be high ot low.")
//     }
// }

/// --PLAY
// const play = () => {
//   console.log("OK. Here we go.");
//   if (rls.keyInYN("Ready to play?")) {
//     startGame();
//   } else {
//     leaveGame();
//   }
// };
