const readline1 = require("readline-sync");

let nameInput = readline1.question("Enter your name: ", { limit: String });
let score = 0;

const restart = () => {
  console.log(`Hope you enjoyed this game ${nameInput}. \n`);
  if (readline1.keyInYNStrict(`Care to play again? `)) {
    console.clear();
    console.log(`Weclome back ${nameInput}. Let's go! \n \n`);
    score = 0;
    guessCount = 5;
    question1();
  } else {
    leaveGame();
  }
};

const scoreTally = () => {
  let patchOptions = [
    "Grooming",
    "Jewelry Appraisal",
    "Dance",
    "CPR",
    "Community Service",
    "Divorce Court",
    "International Affairs",
    "Sushi Appreciation",
    "Fire Prevention",
    "Gardening with Glamour",
  ];
  let newArr = [];

  for (let i = 0; i < (score + 1); i++) {
    newArr.push(patchOptions[i]);
  }
  console.log(
    `Your current score is ${score}. \n CONGRATULATIONS!!  You've earned all of these patches! ${newArr.join(
      ", "
    )} \n Be sure to decorate your sash! \n \n`
  );
  restart();
};


const question10= () => {
    if (
      readline1.keyInYN(
        `Question 7: Actor, Tasha Scott's vocals were recorded for the smash hit tune, "Cookie Time". `
      )
    ) {
      console.log(`They sure did! \n So gather you friends of mine... \nWe're wilderness girls and it's "Cookie Time"!`);
      score += 1;
      console.clear();
      scoreTally();
    } else {
      console.log("Try again.");
      question10();
    }
  };


// QUESTION 9 IS NOT FUNCTIONING PROPERLY. I'VE COMMENTED IT OUT BECAUSE IT 
// BLOCKS THE GAME AND I DON'T WANT IT TO STOP THE FUNCTIONALITY. I BELIEVE THERE ARE STILL 10 OPTIONS FOR MAKING CHOICES AND RE-ENTERING/EXITING THE GAME. VANESSA


// const question9a = () => {
//     console.clear()
//     let troopMembersA = readline1.question("Question 9: There were ____ members of Troop Beverly Hills? ").trim();
//   if (troopMembersA > "8") {
//     console.log("Your guess is too high. \n Try again. \n");
//     question9();
//   } else if (troopMembersA < "8") {
//     console.log("Your guess is too low \n Try again. \n");
//     question9();
//   }
// };

  
//   const question9 = () => {
//   console.clear()
//   let troopMembers = readline1.question("Question 9: There were ____ members of Troop Beverly Hills? ").trim();
//   if (troopMembers === "8") {
//     console.log("You betcha! ");
//     score += 1;
//     question10();
//   } else {
//     question9a()
//   }
// }
  

const question8 = () => {
  let flavorOptions = ["peanut butter", "sugar & spice", "mint", "samoa"];
  console.table(flavorOptions);
  let flavorQuestion = readline1
    .question(
      "Question 8: Which flavor isn't a Wilderness Girl cookie option?   "
    )
    .trim()
    .toLowerCase();

  if (flavorQuestion === "samoa") {
    console.log("BINGO! That flavor belongs to the Girl Scouts. \n");
    score += 1;
    question10();
    // question9();
  } else {
    console.clear();
    console.log("Try again \n");
    console.log("*HINT*  Type the flavor name.");
    question8();
  }
};

const question7 = () => {
  if (
    readline1.keyInYN(
      "Question 7: Actor, Betty Thomas went on to direct Hollywood blockbusters.   "
    )
  ) {
    console.log("That's right!");
    score += 1;
    console.clear();
    question8();
  } else {
    console.log("Try again.");
    question7();
  }
};

const question6 = () => {
  let firstAppear = ["Tori Spelling", "Carla Gugino", "Kellie Martin"];
  console.log(firstAppear);

  let firstAppearQ = readline1
    .question(
      "Question 6: Each of these teen stars made their 'big break' in this film. Which of them lied about being 13 during casting when she was actually 16? \n** HINT ** TYPE THEIR FRIST NAME ONLY  "
    )
    .trim()
    .toLowerCase();

  if (firstAppearQ === "carla") {
    console.log(`That's right! \n`);
    console.log(
      `Guigino was 16 and told the director after filming had already began. \n \n`
    );
    score += 1;
    question7();
  } else {
    console.clear();
    console.log("Try again");
    question6();
  }
};

const question5a = () => {
  console.log(`For your last chance... \n`);
  console.log("*Here's a hint* ... think of LeBron James' age \n");
  let guessFivea = readline1.questionInt(
    "How many patches did the girls earn? \n"
  );
  if (guessFivea === 36) {
    console.log("That's right! And it only took them 3 weeks to do it!");
    score += 1;
    console.clear();
    question6();
  } else {
    console.log(
      "Oops, looks like you didn't get this one. No worries. Let's move on. \n \n"
    );
    question6();
  }
};

let guessCount = 5;
const question5 = () => {
  console.log(
    `Now - you've got ${guessCount} guesses to figure out how many patches the girls earned. \n`
  );
  let guess = readline1.questionInt("How many patches did the girls earn? \n");

  if (guessCount >= 1.9) {
    if (guess === 36) {
      console.log("That's right! And it only took them 3 weeks to do it!");
      score += 1;
      console.clear();
      question6();
    } else if (guess > 36) {
      console.log("Your guess is too high");
      guessCount--;
      question5();
    } else if (guess < 36) {
      console.log("Your guess is too low");
      guessCount--;
      question5();
    }
  } else if (guessCount < 1.9) {
    console.clear();
    question5a();
  } else {
    console.clear();
    question5();
  }
};

const question4 = () => {
  let cameo = [
    "Jane Fonda",
    "Kareem Abdul-Jabbar",
    "Robin Leach",
    "Chaka Khan",
  ];
  console.log(cameo);

  let cameoAppear = readline1
    .question(
      "Question 4: Which of these stars did NOT have a cameo in the film? \n** HINT ** TYPE THEIR FULL NAME  "
    )
    .trim()
    .toLowerCase();
  if (cameoAppear === "chaka khan") {
    console.log(`That's right!`);
    console.log(`You're doing a great job. \n \n`);
    score += 1;
    console.clear();
    console.log(`Question 5: `);
    question5();
  } else if (cameoAppear === "jane fonda") {
    console.clear();
    console.log(
      "Oh, you must have missed it. Jane Fonda's workout is playing in the background while Phyllis fought with the bottle of mayonaise."
    );
    console.log("Try again");
    question4();
  } else if (cameoAppear === "kareem abdul-jabbar") {
    console.clear();
    console.log(
      "This NBA legend happened to have bought cookies from the Red Feathers instead of our Beverly Hills girls. \nBut we still think he's great!"
    );
    console.log("Try again");
    question4();
  } else if (cameoAppear === "robin leach") {
    console.clear();
    console.log(
      "This host of all hosts did a fantastic job at the 'Cookies & Couture' event."
    );
    console.log("Try again");
    question4();
  } else {
    console.clear();
    console.log("Try again");
    question4();
  }
};

const question3 = () => {
  let flags = ["yellow", "green", "red", "blue"];
  console.log(
    "Question 3: What color flags did the Beverly Hills troop follow during the Jamboree? "
  );
  let flagColor = readline1.keyInSelect(flags);
  let chosenFlag = flags[flagColor];

  if (chosenFlag === "blue") {
    console.log(`Those ${flags[3]} led them straight to victory!`);
    console.log("Way to go! \n \n ");
    score += 1;
    question4();
  } else if (chosenFlag === "red") {
    console.clear();
    console.log(`Sorry, the ${flags[2]} flags belonged to Culver City.`);
    console.log("Try again.");
    question3();
  } else if (chosenFlag === "green") {
    console.clear();
    console.log(`Sorry, the ${flags[1]} flags belonged to Pomona.`);
    console.log("Try again.");
    question3();
  } else if (chosenFlag === "yellow") {
    console.clear();
    console.log(`Sorry, the ${flags[0]} flags belonged to Redondo Beach.`);
    console.log("Try again.");
    question3();
  } else {
    console.clear();
    console.log("Try again.");
    question3();
  }
};

const question2 = () => {
  let boxes = ["100", "2002", "1508", "4732", "662"];
  console.log(
    "Question 2: How many boxes of cookies did Troop Beverly Hills sell? "
  );
  let boxNumbers = readline1.keyInSelect(boxes);
  let cookiesSold = boxes[boxNumbers];
  if (cookiesSold === "4732") {
    console.log(`They sure did sell ${boxes[3]} boxes of cookies!`);
    console.log("Good Job \n \n");
    score += 1;
    question3();
  } else if (cookiesSold === "1508") {
    console.clear();
    console.log(`You thought they sold ${boxes[2]} boxes, but that's too low`);
    console.log("Try again.");
    question2();
  } else if (cookiesSold === "2002") {
    console.clear();
    console.log(`You thought they sold ${boxes[1]} boxes, but that's too low`);
    console.log("Try again.");
    question2();
  } else if (cookiesSold === "662") {
    console.clear();
    console.log(`You thought they sold ${boxes[4]} boxes, but that's too low`);
    console.log("Try again.");
    question2();
  } else if (cookiesSold === "100") {
    console.clear();
    console.log(`You thought they sold ${boxes[0]} boxes, but that's too low`);
    console.log("Try again.");
    question2();
  } else {
    console.clear();
    console.log("Try again.");
    question2();
  }
};

const question1 = () => {
  //   let correctAnswer = 0;
  //   let questionCounter = 15;
  if (
    readline1.keyInYN(
      "Question 1: Leading lady, Phyllis Nefler claims to have a 'black belt in shopping'. \n Does she?  "
    )
  ) {
    console.log("That's right!");
    score += 1;
    console.clear();
    question2();
  } else {
    console.log(`Whoops!`);
    console.log("Try again.");
    question1();
  }
};

const leaveGame = () => {
  console.log("Sad to see you go! Ta ta! \n");
  process.exit();
};

const introSection = () => {
  console.clear();
  console.log("1989 was a banner year...");
  console.log(
    "Gas was $1.00 per gallon. Stamps cost 25¢. And 'The Golden Girls' was the most popular TV program. \n"
  );
  console.log(
    `Most importantly, the cult classic film, "Troop Beverly Hills" was released AND it just so happens to be one of my favorites! \n`
  );
  console.log("Here's trivia game is based on that film. \n");
  console.log(
    "Let's see which patches you can get. \n"
  );
  if (readline1.keyInYNStrict("Ready to play?   ")) {
    console.clear();
    question1(); 
  } else {
    leaveGame();
  }
};

console.log(
  `Hello ${nameInput}!  Welcome to "Beverly Hills, What A Thrill!" \n  `
);
if (readline1.keyInYNStrict(`Do you want to know more? \n  `)) {
  introSection();
} else {
  leaveGame();
}
