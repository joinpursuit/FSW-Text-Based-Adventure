const rls = require("readline-sync");

/// --LEAVE GAME
const leaveGame = () => {
  console.log(
    `--* Hmmm, you're no fun.
    So long ${nameInput}.`
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
      console.log("--* I know you're seeing stars but, FOCUS!");
    }
  }
  if (choice === "yes") {
    console.clear();
    startGame();
  } else {
    leaveGame();
  }
};

/// --CHOICE 6
// const stay = () => {}; --> meet someone --> wave or hide?
// const leave = () => {}; -->
const stay = () => {
  console.log(
    `\n--* You give the ogre who took your spotlight a stank look and exit stage left as graceful 
    as only someone drunk can.
    While you are sitting at you table trying to collect yourself, you notice a beautiful 
    specimen of a human being staring right at you.\n
    What do you do?`
  );
  // while (choice6 !== "" && choice6 !== "") {
  //   choice6 = rls.question(" or  \n");
  //   choice6 = choice6.trim().toLowerCase();
  //   if (choice6 !== "" && choice6 !== "") {
  //     console.log("");
  //   }
  // }
  // if (choice6 === "") {
  //     ();
  //   } else {
  //     ();
  //   }
};

const leave = () => {
  console.log("Testing, testing 1, 2, 3");
  console.log("Testing, testing 1, 2, 3");
};

/// --CHOICE 5
// const dance = () => {}; --> fall down and hit your head -- incapacitated
// const sing = () => {}; --> embarass yourself --> stay or leave
const dance = () => {
  console.log(
    `\n--* You get on the dance floor showing off your cool moves.
    You bust another cool move. 
    Go ${nameInput}! Go ${nameInput}! Go ${nameInput}! 
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
    Someone grabs your mic and asks real loud. You think this is the American Idol Audition?!
    Laughter erupts and you are mortified.\n`
  );
  while (choice5 !== "stay" && choice5 !== "leave") {
    choice5 = rls.question("--* Do you want to stay or leave? \n");
    choice5 = choice5.trim().toLowerCase();
    if (choice5 !== "stay" && choice5 !== "leave") {
      console.log("--* Get it together!");
    }
  }
  if (choice5 === "stay") {
    stay();
  } else {
    leave();
  }
};

/// --CHOICE 4
// const martini = () => {}; --> dance or sing
const martini = () => {
  let choice4;
  console.log(
    `\n--* Looks like someone has had a few too many martinis. 
    They are pretty tasty.
    You decide to go with the flow and have some fun.`
  );
  while (choice4 !== "dance" && choice4 !== "sing") {
    choice4 = rls.question("Do want to dance? or sing? \n");
    choice4 = choice4.trim().toLowerCase();
    if (choice4 !== "dance" && choice4 !== "sing") {
      console.log("--* I know you're a bit loopy but, FOCUS!");
    }
  }
  if (choice4 === "dance") {
    dance();
  } else {
    sing();
  }
};

const box = () => {
  console.log("Testing, testing 1, 2, 3");
}; //--> takes you to DRIVE
// const basement = () => {}; //-->
// const walk = () => {}; -->
// const drive = () => {}; --> CAR 1 or CAR 2
// const enchanted = () => {}; -->
// const woods = () => {}; -->

///--CHOICE 3
// const door1 = () => {}; --> take you to the roof --> martini or mystery box
// const door2 = () => {}; --> takes you to the basment -->
// const city = () => {}; --> walk or drive
// const country = () => {}; --> enchanted forrest or through the woods
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
      console.log(`--* ${nameInput}, please pay attention.`);
    }
  }
  if (choice3 === "martini") {
    martini();
  } else {
    box();
  }
};
const door2 = () => {
  // you are in the basement -->
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
const city = () => {
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
  let choice2;
  console.log(`\n--* Welcome to my Parlor, ${nameInput} darling.
    Just the number please.`);
  //console.log(" describe the room a bit");
  while (choice2 !== "1" && choice2 !== "2") {
    choice2 = rls.question("Door 1 or Door 2? \n");
    choice2 = choice2.trim().toLowerCase();
    if (choice2 !== "1" && choice2 !== "2") {
      console.log("--* Really?");
      console.log("--* Let's try this again.");
    }
  }
  if (choice2 === "1") {
    door1();
  } else {
    door2();
  }
};

const outside = () => {
  let choice2a;
  console.log(`\n--* Ahhh. The great outdoors.`);
  while (choice2a !== "city" && choice2a !== "country") {
    choice2a = rls.question("City or Country? \n");
    choice2a = choice2a.trim().toLowerCase();
    if (choice2a !== "city" && choice2a !== "country") {
      console.log("--* Really?");
      console.log("--* Let's try this again.");
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
    choice1 = rls.question("Inside or Outside? \n");
    choice1 = choice1.trim().toLocaleLowerCase();
    if (choice1 !== "inside" && choice1 !== "outside") {
      console.log("--* Uhmmm, NO!");
      console.log("--* Let's try this again.");
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
};

/// -- INTRO
let nameInput = rls.question("Enter your name: ");
console.log(`--* Hello ${nameInput}!  Welcome to my Text Adventure Game.`);

/// --WANT TO PLAY?
if (rls.keyInYN("--* Do you want to play a game with me?")) {
  console.log("\n--* Sweet! \n");
  rules();
} else {
  leaveGame();
}

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
