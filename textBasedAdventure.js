const rls = require("readline-sync");

/// --LEAVE GAME
const leaveGame = () => {
  console.log(`Hmmm. ${nameInput}, you're no fun.`);
  console.log("So long");
  //console.clear();
  process.exit();
};
///--CHOICE 3
// const door1 = () => {};
// const door2 = () => {};
// const city = () => {};
// const country = () => {};
const door1 = () => {};
const door2 = () => {};
const city = () => {};
const country = () => {};

/// --CHOICE 2 
//const inside = () => {} --> doors
//const outside = () => {} --> city or country
const inside = () => {
  let choice2;
  console.log(`Welcome to my Parlor ${nameInput}`);
  console.log("Just the number please.")
  while (choice2 !== "1" && choice2 !== "2") {
    choice2 = rls.question("Door 1 or Door 2? \n");
    choice2 = choice2.trim().toLowerCase();
    if (choice2 !== "1" && choice2 !== "2") {
      console.log("Really?");
      console.log("Let's try this again.");
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
  console.log(`Ahhh. The great outdoors.`);
  while (choice2a !== "city" && choice2a !== "country") {
    choice2a = rls.question("City or Country? \n");
    choice2a = choice2a.trim().toLowerCase();
    if (choice2a !== "city" && choice2a !== "country") {
      console.log("Really?");
      console.log("Let's try this again.");
    }
  }
  if (choice2a === "city") {
    city();
  } else {
    country();
  }
};

/// --START GAME --> CHOICE 1
//const inside = () => {}
//const outside = () => {}
const startGame = () => {
  let choice1;
  while (choice1 !== "inside" && choice1 !== "outside") {
    choice1 = rls.question("Inside or Outside? \n");
    choice1 = choice1.trim().toLocaleLowerCase();
    if (choice1 !== "inside" && choice1 !== "outside") {
      console.log("Uhmmm, NO!");
      console.log("Let's try this again.");
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
  console.log("Here are the rules:");
  console.log(
    "You will be asked a series of questions and you will choose the path we take."
  );
  console.log("If you get yourself ...let's say killed or incapacitated...");
  console.log("Yeah, You lose.");
  if (rls.keyInYN("Ready to play?")) {
    startGame();
  } else {
    leaveGame();
  }
};

/// -- INTRO
let nameInput = rls.question("Enter your name: ");
console.log(`Hello ${nameInput}!  Welcome to my Text Adventure Game.`);

/// --WANT TO PLAY?
if (rls.keyInYN("Do you want to play a game with me?")) {
  console.log("Sweet!");
  rules();
} else {
  leaveGame();
  //console.log(`Hmmm. ${nameInput}, you're no fun.`);
  //can also just call leaveGame with a standard message
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
