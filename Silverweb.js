const rls = require("readline-sync");
const say = require('say')
const chalk = require("chalk");
const startTitle = require("figlet");

// Logo styles graphic that will apear when game is completed
startTitle("Silver Web", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});

// Global variable for users stored named
const nameInput = rls.question("Enter your name: \n");

let nInput = say.speak(`Hello ${nameInput}`)

// users stored name and game greeting
const intro = () => {
  console.log(
    `Hello ` + nInput + chalk.red` ${nameInput} ` + `Welcome to the game.`
  );
};

intro();

// Loading loop for game choices
const loadingVisual = () => {
  let scroll = ["⌜", "⌞", "⌟", "⌝"];
  let i = 0;

  return setInterval(() => {
    i = i > 3 ? 0 : i;
    console.clear();
    console.log(scroll[i]);
    i++;
  }, 250);
};

// Game rules. How to play instructions
const rules = () => {
  console.log(
    `\tThis isn't a game for the faint of heart. \n ` +
      chalk.blue("\tYou") +
      ` have decided you want to help us take down the worst offenders of the web. \n` +
      ` \tEach choice you make will send you deeper into the web where you will either choose to infiltrate until we can apprehend or risk getting caught. \n \tChoose wisely hacker, They are always watching. \n`
  );
};

// First game oriented choice into the game
const choices = () => {
  let optionOne = ["Report", "Invitation"];
  let decisionOne = `\nWhich option will you be taking?`;
  //let index = rls.keyInSelect(optionOne)

  console.log(
    `${nameInput} you have found an advertisement for an event that says ` +
      (chalk.underline.red(`invitation only.`) +
        ` You have the option to report your findings or try to get an invitation to this "exclusive" virtual gathering.`)
  );

  console.log(decisionOne);
  let index = rls.keyInSelect(optionOne);

  if (index == [0]) {
    console.log(
      "\nYou have found out that you were recruited as a decoy for a crooked cop. You won't make it out alive."
    );

    let startLoop = rls.keyInYN("Do you want to play again?");

    if (startLoop) {
      beginLoop();
    } else {
      process.exit;
    }
  } else if (index == [1]) {
    console.log(
      "\nYou find yourself tracing the IP address that posted the advertisement. Finish entering the last part of your trace by solving the question: \n"
    );
    let questOne = Math.floor(Math.random() * 20 + 1);
    let questTwo = Math.floor(Math.random() * 20 + 1);

    let solution = questOne * questTwo;
    let probSolve = rls.question(`What is ${questOne} * ${questTwo}: \n`);

    const userAnswer = () => {
      if (probSolve == solution) {
         let nInput2 = say.speak('Access Granted')
        console.log(
           nInput2 + chalk.green("\nACCESS")
           );
      } else if (probSolve != solution) {
         let nInput3 = say.speak('Warning! Warning!')
        console.log(
          nInput3 + chalk.red("\nWARNING!") +
            "They have located you trying to access their servers. We must shut down now❗️❗️❗️"
        );
        process.exit;
      }
    };
    userAnswer();
  }
};

// Resets the game
const beginLoop = () => {
  const nameInput = rls.question("Enter your name: \n");
  nameInput;
  intro();
  beginGame();
  choices();
};

// First series of entry questions
const introGameSequence = () => {
  let x = 18;

  let age = rls.questionInt("Verify your age: \n");

  age;
  if (age >= x) {
    console.log("PROCEED WITH CAUTION!");
    //loadingVisual()
    rules();
  } else if (age < x) {
    console.log("You are too young for the underbelly of the silver web");
  }
};

// end the game function
const quitGame = () => {
  console.log("Probably a good choice, bye.");
  let startLoop = rls.keyInYN("Do you want to play again?");

  if (startLoop) {
    beginLoop();
  } else 
     process.exit;
};

const beginGame = () => {
  let startQuestion = rls.keyInYN("Do you want to enter the silver web?");
  if (startQuestion) {
    introGameSequence();
  } else quitGame();
};

const choiceTwo = () => {
   randomInvitationNumber = 
   console.log(`\nGreat Work ${nameInput}! We are one step closer. \n Now that you have an invitation you can attend the event. \nYou press enter and a series on numbers that generate a invitation number where you see a waiting graphic of a red curtain and a very active participant chat of people saying 'We hope this is better than the last one`)
};

beginGame();

choices();
