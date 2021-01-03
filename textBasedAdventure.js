const readline1 = require("readline-sync");

let nameInput = readline1.question("Enter your name: ", {limit: String});
let questionCounter = 15;
let correctAnswer = 0;
questionCounter--;
correctAnswer++;
let score = 0;

// const startGame = () => {
// };

const scoreTally = () => {
  console.log(`Your current score is ${score}. \n`);
  console.log(`Your current score is ${score}. \n`);
  // let tally = score.console.log(score); // change this array into a string and then into numbers and then add to give thse score!!
  // let score = "";  //need to
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
    scoreTally();
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
      "Question 6: Each of these teen stars made their 'big break' in this film. Which of them lied about being 13 during casting when she was actually 16? \n** HINT ** TYPE THEIR FRIST NAMES ONLY  "
    )
    .trim()
    .toLowerCase();

  if (firstAppearQ === "carla") {
    console.log(`That's right!`);
    console.log(
      `Guigino was 16 and told the director after filming had already began.`
    );
    score += 1;
    console.clear();
    question7();
  } else {
    console.clear();
    console.log("Try again");
    question6();
  }
};

let guessCount = 5;
const question5 = () => {
  console.log("Question 5: ");
  console.log(`Now - you've got ${guessCount} guesses to figure out how many patches the girls earned. \n`);
let guess = readline1.questionInt("How many patches did the girls earn? \n");
  
  
  
  
  
  
  
  
  for (let guessCount = 5; guessCount > 1; guessCount--) {
    console.log(
      `Now - you've got ${guessCount} guesses to figure out how many patches the girls earned. \n`
    );
    let guess = readline1.questionInt(
      "How many patches did the girls earn? \n"
    );
    if (guess === 36) {
      console.log("That's right! And it only took them 3 weeks to do it!");
      score += 1;
      console.clear();
      question6();
    } else if (guess > 36) {
      console.log("Your guess is too high");
    } else if (guess < 36) {
      console.log("Your guess is too low");
    }
  }
  while ((guessCount = 1)) {
    console.clear();
    console.log(`For your last chance... \n`);
    console.log("*Here's a hint* ... think of LeBron James' age \n");
    {
      let guess = readline1.questionInt(
        "How many patches did the girls earn? \n"
      );
      if (guess === 36) {
        console.log(
          "That's right! And it only took them 3 weeks to do it! \n \n "
        );
        score += 1;
        console.clear();
        question6();
      } else {
        console.log(
          "Oops, looks like you didn't get this one. No worries. Let's move on. \n \n"
        );
        question6();
      }
    }
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
  let correctAnswer = 0;
  let questionCounter = 15;
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
  console.log("Sad to see you go! Ta ta!");
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
    "There are 7 questions in total. Let's see if you can get them all. \n"
  );
  if (readline1.keyInYNStrict("Ready to play?   ")) {
    console.clear();
    question1(); // I'M STARTING THE GAME HERE, BUT THE START GAME FUNCTION DOESN'T ACTUALLY HAVE ANYTHING IN IT....????
  } else {
    leaveGame();
  }
};

console.log(
  `Hello ${nameInput}!  Welcome to "Beverly Hills, What A Thrill!"   `
);
if (readline1.keyInYNStrict(`Do you want to know more?   `)) {
  introSection();
} else {
  leaveGame();
}
