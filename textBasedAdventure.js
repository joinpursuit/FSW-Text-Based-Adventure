const rls = require("readline-sync");

/// --LEAVE GAME
const leaveGame = () => {
  console.log(`Hmmm. ${nameInput}, you're no fun.`);
  console.log("So long");
  //console.clear();
  process.exit();
};

const inside = () => {};
const outside = () => {};

/// --START GAME
// let nameInput = rls.question("Enter your name: ");
// console.log(`Hello ${nameInput}!  Welcome to my Text Adventure Game.`);
const startGame = () => {
  console.log("Testing, testing, 1, 2, 3");
  let choice;
  while (choice !== "inside" && choice !== "outside") {
    choice = rls.question("Inside or Outside? \n");
    choice = choice.trim().toLocaleLowerCase();
    if (choice !== "inside" && choice !== "outside") {
      console.log("Uhmmm, NO!");
      console.log("Let's try this again.");
    }
  }
};

//   while (choice){
//     let choice = rls.question("Inside or Outside?")
//     if(choice !== "inside" && choice !== "outside") {
//         console.log("Uhmmm, NO!");
//         console.log("Let's try this again. ")
//     }}
// };

/// --PLAY
// const play = () => {
//   console.log("OK. Here we go.");
//   if (rls.keyInYN("Ready to play?")) {
//     startGame();
//   } else {
//     leaveGame();
//   }
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
