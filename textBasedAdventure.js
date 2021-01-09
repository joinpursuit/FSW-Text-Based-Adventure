const readlineSync = require("readline-sync");
let chances;
const playGameAgain = () => {
  if (readlineSync.keyInYN("\n Play again? \n ")) {
    console.clear();
    startGame();
  } else {
    leaveGame();
    Process.exit();
  }
};

//  Play Again
// // Question Twelve
const isQuestionTwelve = () => {
  let first;
  first = readlineSync.keyInYNStrict(
    "\n 12. Covid 19 is from a family of viruses called corona viruses? \n"
  );
  if (first === true) {
    console.log("\n You won! Is your IQ 2000 or something? \n");
    playGameAgain();
  } else {
    console.log("\n Oh man that was an easy one. \n");
    chances--;
    if(chances === 0){
      console.log("No more chances, have a good life!")
      leaveGame();
    }
    console.log(`\n You have ${chances} chances left!\n`);
    answer = readlineSync.keyInYN(
      "\n That's incorrect, do you want to try again?\n"
    );
    if (answer === true) {
      isQuestionTwelve();
    }
  }
};

// // Question Eleven
const questionEleven = () => {
  let impeachedPres;
  while (impeachedPres !== "3" && impeachedPres !== "three") {
    impeachedPres = readlineSync.question(
      "\n 11. How many presidents have been impeached? \n"
    );
    impeachedPres = impeachedPres.trim().toLowerCase();
    if (impeachedPres !== "3" && impeachedPres !== "three") {
      console.log("\n I know , i know who cares\n");
      chances--;
      if(chances === 0){
        console.log("No more chances, have a good life!")
        leaveGame();
      }
      console.log(`\n You have ${chances} chances left!\n`);
      answer = readlineSync.keyInYN(
        "\n That's incorrect, do you want to try again?\n"
      );
      if (answer === true) {
        questionEleven();
      }
    }
    if (impeachedPres === "3" || impeachedPres === "three") {
      isQuestionTwelve();
    } else {
      isQuestionTwelve();
    }
  }
};

// // Question Ten
const questionTen = () => {
  let cartoonCharacter;
  while (cartoonCharacter !== "sponge bob") {
    cartoonCharacter = readlineSync.question(
      "\n 10. Which cartoon character lives in a pineapple under the sea? \n"
    );
    cartoonCharacter = cartoonCharacter.trim().toLowerCase();
    if (cartoonCharacter !== "sponge bob") {
      console.log(
        "\n Whoooo lives in a pineapple under the sea...sponge bob square pants!\n"
      );
      chances--;
      if(chances === 0){
        console.log("No more chances, have a good life!")
        leaveGame();
      }
      console.log(`\n You have ${chances} chances left!\n`);
      answer = readlineSync.keyInYN(
        "\n That's incorrect, do you want to try again?\n"
      );
      if (answer === true) {
        questionTen();
      }
    }
    if (cartoonCharacter === "sponge bob") {
      questionEleven();
    } else {
      questionEleven();
    }
  }
};

// // Question Nine
const questionNine = () => {
  let numberOfFlims;
  while (numberOfFlims !== "3") {
    numberOfFlims = readlineSync.question(
      "\n 9. How many Lord of The Rings Films are there? \n"
    );
    numberOfFlims = numberOfFlims.trim().toLowerCase();
    if (numberOfFlims !== "3") {
      console.log("\n Better luck next time...\n");
      chances--;
      if(chances === 0){
        console.log("No more chances, have a good life!")
        leaveGame();
      }
      console.log(`\n You have ${chances} chances left!\n`);
      answer = readlineSync.keyInYN(
        "\n That's incorrect, do you want to try again?\n"
      );
      if (answer === true) {
        questionNine();
      }
    }
    if (numberOfFlims === "3") {
      questionTen();
    } else {
      questionTen();
    }
  }
};
// // Question eight
const questionEight = () => {
  let literature;
  while (literature !== "william shakespeare") {
    literature = readlineSync.question("\n 8. Who wrote Merchant of Venice?\n");
    literature = literature.trim().toLowerCase();
    if (literature !== "william shakespeare") {
      console.log(
        "\n Not a vaild answer, dont you know your literature? sheesh\n"
      );
      chances--;
      if(chances === 0){
        console.log("No more chances, have a good life!")
        leaveGame();
      }
      console.log(`\n You have ${chances} chances left!\n`);
      answer = readlineSync.keyInYN(
        "\n That's incorrect, do you want to try again?\n"
      );
      if (answer === true) {
        questionEight();
      }
    }
    if (literature === "william shakespeare") {
      questionNine();
    } else {
      questionNine();
    }
  }
};
// question seven
const questionSeven = () => {
  let fabricOfOurLives;
  while (fabricOfOurLives !== "cotton" && fabricOfOurLives !== "cotton") {
    fabricOfOurLives = readlineSync.question(
      "\n 7. According to the commerical: What is the fabric of our lives? \n"
    );
    fabricOfOurLives = fabricOfOurLives.trim().toLowerCase();
    if (fabricOfOurLives !== "cotton" && fabricOfOurLives !== "cotton") {
      console.log("\n Watch somemore TV or not, your choice\n");
      chances--;
      if(chances === 0){
        console.log("No more chances, have a good life!")
        leaveGame();
      }
      console.log(`\n You have ${chances} chances left!\n`);
      answer = readlineSync.keyInYN(
        "\n That's incorrect, do you want to try again?\n"
      );
      if (answer === true) {
        questionSeven();
      }
    }
    if (fabricOfOurLives === "cotton") {
      questionEight();
    } else {
      questionEight();
    }
  }
};
// // question six
const questionSix = () => {
  let number;
  while (number !== "10" && number !== "ten") {
    number = readlineSync.question(
      "\n 6. How many Grammy awards did John Legend win? \n"
    );
    number = number.trim().toLowerCase();
    if (number !== "10" && number !== "ten") {
      console.log("\n Better luck on your next try buddy!\n");
      chances--;
      if(chances === 0){
        console.log("No more chances, have a good life!")
        leaveGame();
      }
      console.log(`\n You have ${chances} chances left!\n`);
      answer = readlineSync.keyInYN(
        "\n That's incorrect, do you want to try again?\n"
      );
      if (answer === true) {
        questionSix();
      }
    }
    if (number === "10" || number === "ten") {
      questionSeven();
    } else {
      questionSeven();
    }
  }
};

// // question five
const questionFive = () => {
  let choice1;
  let choice2;
  while (choice1 !== "10000" && choice2 !== "4000") {
    choice1 = readlineSync.question(
      "\n 5. How many taste buds do humans have? \n"
    );
    choice1 = choice1.trim().toLowerCase();
    if (choice1 !== "10000" && choice2 !== "4000") {
      console.log("\n dum da dum dummmm...\n");
      chances--;
      if(chances === 0){
        console.log("No more chances, have a good life!")
        leaveGame();
      }
      console.log(`\n You have ${chances} chances left!\n`);
      answer = readlineSync.keyInYN(
        "\n That's incorrect, do you want to try again?\n"
      );
      if (answer === true) {
        questionFive();
      }
    }
    if (choice1 === "10000") {
      questionSix();
    } else {
      questionSix();
    }
  }
};
// // question four
const questionFour = () => {
  let ans;
  while (ans !== "oyster") {
    ans = readlineSync.question("\n 4. Pearls are found in which animal? \n");
    ans = ans.trim().toLowerCase();
    if (ans !== "oyster") {
      console.log("\n Come on, explore the ocean a bit!\n");
      chances--;
      if(chances === 0){
        console.log("No more chances, have a good life!")
        leaveGame();
      }
      console.log(`\n You have ${chances} chances left!\n`);
      answer = readlineSync.keyInYN(
        "\n That's incorrect, do you want to try again?\n"
      );
      if (answer === true) {
        questionFour();
      }
    }
    if (ans === "oyster") {
      questionFive();
    } else {
      questionFive();
    }
  }
};
// // // Question Three
const questionThree = () => {
  let response;
  while (response !== "web browsers") {
    response = readlineSync.question(
      "\n 3. Google Chrome, Safari, Firefox, and Explorer are different types of what? \n"
    );
    response = response.trim().toLowerCase();
    if (response !== "web browsers") {
      console.log("\n oOppsey \n");
      chances--;
      if(chances === 0){
        console.log("No more chances, have a good life!")
        leaveGame();
      }
      console.log(`\n You have ${chances} chances left!\n`);
      answer = readlineSync.keyInYN(
        "\n That's incorrect, do you want to try again?\n"
      );
      if (answer === true) {
        questionThree();
      }
    }
    if (response === "\n web browsers \n") {
      questionFour();
    } else {
      questionFour();
    }
  }
};

// Question Two
const questionTwo = () => {
  let numberOfContinents;
  while (numberOfContinents !== "seven" && numberOfContinents !== "7") {
    numberOfContinents = readlineSync.question(
      "\n 2. How many continents are there? \n"
    );
    numberOfContinents = numberOfContinents.trim();
    if (
      numberOfContinents === "seven" ||
      numberOfContinents === "7" ||
      numberOfContinents === 7
    ) {
      questionThree();
    }
    if (numberOfContinents !== "seven" && numberOfContinents !== "7") {
      console.log("\n yikes!\n");
      chances--;
      if(chances === 0){
        console.log("No more chances, have a good life!")
        leaveGame();
      }
      console.log(`\n You have ${chances} chances left!\n`);
      answer = readlineSync.keyInYN(
        "\n That's incorrect, do you want to try again?\n"
      );
      if (answer === true) {
        questionTwo();
      } else {
        questionThree();
      }
    }
  }
};

// START GAME
const startGame = () => {
  console.log("\n Let's begin! \n");
  chances = 12;
  questionOne();
};

// Question one
const questionOne = () => {
  let yesOrNo;
  let answerWrong;
  while (yesOrNo !== true && yesOrNo !== false) {
    yesOrNo = readlineSync.keyInYN(
      "\n 1. Is Kamla Harris the first female vice president? \n"
    );
    if (yesOrNo !== true && yesOrNo !== false) {
      console.log("\n oopsey \n");
      chances--;
      if(chances === 0){
      console.log("No more chances, have a good life!")
        leaveGame();
      }
      console.log(`\n You have ${chances} chances left!\n`);
      answer = readlineSync.keyInYN(
        "\n That's incorrect, do you want to try again?\n"
      );
      if (answer === true) {
        questionOne();
      }
    }
  }
  if (yesOrNo === true) {
    questionTwo();
  } else {
    chances--;
    if(chances === 0){
      console.log("No more chances, have a good life!")
      leaveGame();
    }
    console.log(`\n You have ${chances} chances left!\n`);
    answerWrong = readlineSync.keyInYN(
      "\n That's incorrect, do you want to try again?\n"
    );
    if (answerWrong === true) {
      questionOne();
    }else{
      questionTwo();
    }
  }
};
// Leave Game
const leaveGame = () => {
  let finishGame;
  while (finishGame !== "No" && finishGame !== "no") {
    if (finishGame !== "No" && finishGame !== "no") {
      console.log(" ");
      console.log("\n Byeee!\n");
      process.exit();
    }
  }
};

// NAME INTRO
let userName = readlineSync.question("Welcome, what's your name? ");
console.log("hello " + userName + " it's nice to meet you!");
console.log(`Welcome to my game.`);
console.log(" ");

// INTRO TO GAME AND RULES
const intro = () => {
  console.log("\n The Fact Checker! \n");
  console.log(
    "\n This game ask random questions about topics from different categories \n"
  );
  console.log(" ");
  console.log(
    "Rules:You have 12 questions and 12 chances to guess the correct answer! \nIf you get a question correct you move on with all your chances intact! If you get a question wrong your chances decrease by one each time!"
  );
  console.log("\n Let's get ready to check the facts! \n");
};
intro();

//  Play y or n
if (readlineSync.keyInYN("Do you want to play ")) {
  console.log(" ");
  console.log("Game starts now!");
  console.log(" ");
  startGame();
} else {
  console.log(" ");
  console.log("Come back soon!");
  leaveGame();
}
