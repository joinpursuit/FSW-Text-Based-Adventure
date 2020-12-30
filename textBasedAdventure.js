const readlineSync = require("readline-sync");

const playGameAgain = () => {
    if(readlineSync.keyInYN("Play again? ")) {
        console.clear();
        startGame();
    } else {
        leaveGame();
        Process.exit();
    }
}

//  Play Again 
// // Question Twelve
const isQuestionTwelve = () => {
  let first;
  let second;
  let chances;
  while (first !== "true" && first !== "false") {
        first = readlineSync.question("12A. Is the world round? \n");
        console.log(" ");
        first = first.trim().toLowerCase();
        if (first !== "true" && first !== "false") {
        console.log(" ");
        console.log("Oh man that was an easy one.");
        }
    }
        if (first === "true") {
            while (second !== "true" && second !== "false") {
            second = readlineSync.question("12B. Is the sky blue? \n");
            console.log(" ");
            second = second.trim().toLowerCase();
                if (second !== "true" && second !== "false") {
                    console.log(" ");
                    console.log("Oh man , that was an easy one.");
                    console.log(" ");
                }
            }
            if (second === "true")
            console.log(" ");
            console.log("You won! Is your IQ 2000 or something?");
            console.log(" ");
            playGameAgain();
        } else {
            // chances--
            console.log("You lose! Keep trying!");
            console.log(" ");
            playGameAgain();
        }
};

// // Question Eleven
const questionEleven = () => {
  let impeachedPres;
  let chances;
  while (impeachedPres !== "3" && impeachedPres !== "three") {
    impeachedPres = readlineSync.question(
      "11. How many presidents have been impeached? \n"
    );
    impeachedPres = impeachedPres.trim().toLowerCase();
    if (impeachedPres !== "3" && impeachedPres !== "three") {
        console.log(" ");
      console.log("I know , i know who cares");
      console.log(" ");
    }
  }
  if (impeachedPres === "3" || impeachedPres === "three") {
      console.log(" ");
    isQuestionTwelve();
  } else {
    // chances--
    isQuestionEleven();
  }
};

// // Question Ten
const questionTen = () => {
  let cartoonCharacter;
  let chances;
  while (cartoonCharacter !== "sponge bob") {
    cartoonCharacter = readlineSync.question(
      "10. Which cartoon character lives in a pineapple under the sea? \n"
    );
    cartoonCharacter = cartoonCharacter.trim().toLowerCase();
    if (cartoonCharacter !== "sponge bob") {
        console.log(" ");
      console.log("Whoooo lives in a pineapple under the sea...sponge bob square pants!");
      console.log(" ");
    }
  }
  if (cartoonCharacter === "sponge bob") {
      console.log(" ");
    questionEleven();
  } else {
    // chances--
    questionTen();
  }
};

// // Question Nine
const questionNine = () => {
  let numberOfFlims;
  let chances;
  while (numberOfFlims !== "3") {
    numberOfFlims = readlineSync.question(
      "9. How many Lord of The Rings Films are there? \n"
    );
    numberOfFlims = numberOfFlims.trim().toLowerCase();
    if (numberOfFlims !== "3") {
        console.log(" ");
      console.log("Better luck next time...");
      console.log(" ");
    }
  }
  if (numberOfFlims === "3") {
      console.log(" ");
    questionTen();
  } else {
    // chances--
    questionNine();
  }
};
// // Question eight
const questionEight = () => {
  let literature;
  let chances;
  while (literature !== "william shakespeare") {
    literature = readlineSync.question("8. Who wrote Merchant of Venice?\n");
    literature = literature.trim().toLowerCase();
    if (literature !== "william shakespeare") {
        console.log(" ");
      console.log("Not a vaild answer, dont you know your literature? sheesh");
      console.log(" ");
    }
    if (literature === "william shakespeare") {
        console.log(" ");
      questionNine();
    } else {
      // chances--
      questionEight();
    }
  }
};
// question seven
const questionSeven = () => {
  let fabricOfOurLives;
  let chances;
  while (fabricOfOurLives !== "cotton" && fabricOfOurLives !== "cotton") {
    fabricOfOurLives = readlineSync.question(
      "7. According to the commerical: What is the fabric of our lives? \n"
    );
    fabricOfOurLives = fabricOfOurLives.trim().toLowerCase();
    if (fabricOfOurLives !== "cotton" && fabricOfOurLives !== "cotton") {
        console.log(" ");
      console.log("Watch somemore TV or not, your choice");
      console.log(" ");
    }
  }
  if (fabricOfOurLives === "cotton") {
      console.log(" ");
    questionEight();
  } else {
    // chances--
    questionSeven();
  }
};
// // question six
const questionSix = () => {
  let number;
  let chances;
  while (number !== "10" && number !== "ten") {
    number = readlineSync.question(
      "6. How many Grammy awards did John Legend win? \n"
    );
    number = number.trim().toLowerCase();
    if (number !== "10" && number !== "ten") {
        console.log(" ");
      console.log("Better luck on your next try buddy!");
      console.log(" ");
    }
  }
  if (number === "10" || number === "ten") {
      console.log(" ");
    questionSeven();
  } else {
    // chances--
    questionSix();
  }
};

// // question five
const questionFive = () => {
  let choice1;
  let choice2;
  let chances;
  while (choice1 !== "10000" && choice2 !== "4000") {
    choice1 = readlineSync.question("5. How many taste buds do humans have? \n");
    choice1 = choice1.trim().toLowerCase();
    if (choice1 !== "10000" && choice2 !== "4000") {
        console.log(" ");
      console.log("dum da dum dummmm..");
      console.log(" ");
    }
  }
  if (choice1 === "10000") {
      console.log(" ");
    questionSix();
  } else {
    // chances--
    questionFive();
  }
};
// // question four
const questionFour = () => {
  let ans;
  let chances;
  while (ans !== "oyster") {
    ans = readlineSync.question("4. Pearls are found in which animal? \n");
    ans = ans.trim().toLowerCase();
    if (ans !== "oyster") {
        console.log(" ");
      console.log("Come on, explore the ocean a bit!");
      console.log(" ");
    }
  }
  if (ans === "oyster") {
      console.log(" ");
    questionFive();
  } else {
    // chances--
    questionFour();
  }
};
// // // Question Three
const questionThree = () => {
  let response;
  let chances;
  while (response !== "web browsers") {
    response = readlineSync.question(
      "3. Google Chrome, Safari, Firefox, and Explorer are different types of what? \n"
    );
    response = response.trim().toLowerCase();
    if (response !== "web browsers") {
        console.log(" ");
      console.log("oOppsey");
      console.log(" ");
    }
  }
  if (response === "web browsers") {
      console.log(" ");
    questionFour();
  } else {
    // chances--
    questionThree();
  }
};

// Question Two 
const questionTwo = () => {
  let numberOfContinents;
  let chances;
  while (numberOfContinents !== "seven" && numberOfContinents !== "7") {
    numberOfContinents = readlineSync.question(
      "2. How many continents are there? \n"
    );
    numberOfContinents = numberOfContinents.trim();
    if (numberOfContinents !== "seven" && numberOfContinents !== "7") {
        console.log(" ");
      console.log("yikes!");
      console.log(" ");
    }
  }
  if (
    numberOfContinents === "seven" ||
    numberOfContinents === "7" ||
    numberOfContinents === 7
  ) {
      console.log(" ");
    questionThree();
  } else {
    answer = readlineSync.keyInYN("Thats incorrect, do you want to try again?");
    if (answer === true ){
        questionTwo()
    }else{
        bottom = chances + 1;
    questionThree();
    }
  }                      
};  

// START GAME
const startGame = () => {
    console.log("Lets begin!");
    console.log(" ");
    let chances = 12;
    let bottom = 1;
    let top = 12;
//     switch(chances){
//         case 1:
//         questionOne();
//         break
//     }
    
            questionOne();
//         }else{
//             chances--;
//             console.log("Yikes, i only have " + chances + " left!")
//         }
           
//     }
    
};

// Question one 
const questionOne = () => {
    let chances;
  let yesOrNo;
  while (yesOrNo !== "yes" && yesOrNo !== "no") {
    yesOrNo = readlineSync.question("1. Is Kamla Harris the first female vice president? \n");
    yesOrNo = yesOrNo.trim().toLowerCase();
    if (yesOrNo !== "yes" && yesOrNo !== "no") {
      console.log("\n oopsey \n");
    }
  }
  if (yesOrNo === "yes") {
      top = chances - 1;
      console.log(" ");
    questionTwo();
  } else {
    answer = readlineSync.keyInYN("That's incorrect, do you want to try again?");
    if (answer === true ){
        questionOne()
    }else{
        bottom = chances + 1;
    questionTwo();
    }
  }                      
};
// Leave Game 
const leaveGame = () => {
    let finishGame;
    let chances = 12;
    while (finishGame !== "No" && finishGame !== "no") {
    //   finishGame = readlineSync.question("Are you ready to leave? \n");
    //   finishGame = finishGame.trim().toLowerCase();
      if (finishGame !== "No" && finishGame !== "no") {
          console.log(" ");
          console.log("Byeee!");
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
  console.log("The Fact Checker!");
  console.log(
    "This game ask random questions about topics from different categories"
  );
  console.log(" ");
  console.log(
    "Rules:You have 12 questions and 12 chances to guess the correct answer!\nIf you get a question correct you move on with all your chances intact! If you get a question wrong your chances decrease by one each time!"
  );
  console.log(" ");
  console.log("Lets get ready to check the facts!");
  console.log(" ");
};
intro();
console.log(" ");

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
