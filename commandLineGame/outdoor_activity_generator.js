const readLineSync = require("readline-sync");

const name = readLineSync.question("Hello! What's your name? \n");
console.log(`Nice to meet you, ${name}! I am the COVID Activity Generator. \n`);

const play = () => {
  console.log("I will ask you a series of questions to recommend COVID safe and fun activities you can enjoy in New York State, today!");
  if (readLineSync.keyInYN("Shall we get started? ")){
    beginGame();
  } else {
    endGame();
  }
};

let aloneOrGroup;
let temp;
let ifActive;

const beginGame = () => {
  while (aloneOrGroup !== "self" && aloneOrGroup !== "group") {
    aloneOrGroup = readLineSync.question(
      "Do you plan on doing this activity by yourself or with a group? Type in either: self or group \n");
    aloneOrGroup = aloneOrGroup.toLowerCase().trim();
  }
  temp = Math.round(readLineSync.question("What is the current local temperature in degrees Fahrenheit? \n"));
  if (ifActive = readLineSync.keyInYN("Would you like to do something physically active? ")) {
    active();
  } else {
    notActive();
  }
};

let input;
const active = () => {
  while (input !== "light" && input !== "moderate" && input !== "vigorous") {
  input = readLineSync.question(("Please type in your level of preferred level of activity: light, moderate, or vigorous. \n"));
  }
  console.log(`Excellent! I'll keep'${input} in mind.`)
  console.log("Now, let’s play rock, paper, scissors to decide your activity for the day! Instructions are simple: we each chose either rock, paper, or scissors. Doesn't matter who wins, it's just a fun way to decide what activity I recommend for the day. \n");
  rockPaperScissors();
};

function notActive() {
console.log(`Excellent! I will make sure to include activities that don't require much physical activity.`)
console.log("Now, let’s play rock, paper, scissors to decide what you will do today! Instructions are simple: we each chose either rock, paper, or scissors. Doesn't matter who wins, it's just a fun way to decide what activity I recommend for the day. \n");
rockPaperScissors();
};



function rockPaperScissors() {
let userInput;
while (userInput !== 'rock' && userInput !== 'paper' && userInput !== 'scissors'){
  userInput = readLineSync.question(("Choose either: rock, paper, or scissors. \n"));
  } 
  const userRPS = userInput;
  const compRPS = compChoice();
  console.log(`You picked ${userRPS}. I picked ${compRPS}`);
  if (ifActive !== true && temp <= 65){
  console.log(inactiveTemp65OrLess(userRPS, compRPS));
  endGame();
  } else if (ifActive !== true && temp >= 66){
    console.log(inactiveTemp66OrMore(userRPS, compRPS))
    endGame();
  }
  else if(ifActive = true && temp <= 65 && input === "light" && input === "moderate" && input === "vigorous"){
    console.log(activeTemp65OrLess(userRPS, compRPS));
    endGame();
  }else (ifActive = true && temp >= 66 && input === "light" && input === "moderate" && input === "vigorous")
    console.log(activeTemp66OrMore(userRPS, compRPS));
    endGame();
  
};


const compChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber){
      case 0:
        return 'rock';
      case 1:
        return 'paper';
      case 2:
        return 'scissors';
    }
  };


function activeTemp65OrLess(userInput, compChoice) {
  if (userInput === compChoice) {
    return `${govCuomo()}`;
  }
  if (userInput === 'rock') {
    if (compChoice === 'paper') {
      return `I won! ${name}, because it's ${temp}°F, I recommend you go ${physActive[0]}.`;
    } else {
      return `Congrats, you won! ${name}, because it's ${temp}°F, I recommend to ${physActive[1]}.`;
    }
  }

  if (userInput === 'paper') {
    if (compChoice === 'scissors') {
      return `I won! ${name}, because it's ${temp}°F, I recommend you go ${physActive[2]}.`;
    } else {
      return `Congrats, you won! ${name}, because it's  ${temp}°F, I recommend you go ${physActive[3]}.`;
    }
  }

  if (userInput === 'scissors') {
    if (compChoice === 'rock') {
      return `I won! ${name}, because it's ${temp}°F, I recommend you go ${physActive[4]}.`;
    } else {
      return `Congrats, you won! ${name}, because it's ${temp}°F, I recommend you go ${physActive[5]}.`;
    }
  }
};

function activeTemp66OrMore(userInput, compChoice) {
  if (userInput === compChoice) {
    return `${govCuomo()}`;
  }
  if (userInput === 'rock') {
    if (compChoice === 'paper') {
      return `I won! ${name}, because it's ${temp}°F, I recommend you go ${physActive[6]}.`;
    } else {
      return `Congrats, you won! ${name}, because it's ${temp}°F, I recommend: ${physActive.slice(7,9)}.`;
    }
  }

  if (userInput === 'paper') {
    if (compChoice === 'scissors') {
      return `I won! ${name}, because it's ${temp}°F, I recommend: ${physActive.slice(9,11)}.`;
    } else {
      return `Congrats, you won! ${name}, because it's  ${temp}°F, I recommend: ${physActive.slice(11,13)}.`;
    }
  }

  if (userInput === 'scissors') {
    if (compChoice === 'rock') {
      return `I won! ${name}, because it's ${temp}°F, I recommend: ${physActive.slice(13,15)}.`;
    } else {
      return `Congrats, you won! ${name}, because it's ${temp}°F, I recommend you go ${physActive[15]}.`;
    }
  }
};


function inactiveTemp65OrLess(userInput, compChoice) {
  if (userInput === compChoice) {
    return `${govCuomo()}`;
  }
  if (userInput === 'rock') {
    if (compChoice === 'paper') {
      return `I won! ${name}, because it's ${temp}°F, I recommend to visit an ${notPhysActive[0]}.`;
    } else {
      return `Congrats, you won! ${name}, because it's ${temp}°F, I recommend to watch a ${notPhysActive[1]}.`;
    }
  }

  if (userInput === 'paper') {
    if (compChoice === 'scissors') {
      return `I won! ${name}, because it's ${temp}°F, I recommend: ${notPhysActive[2]} for your ${aloneOrGroup}.`;
    } else {
      return `Congrats, you won! ${name}, because it's  ${temp}°F, I recommend to: ${notPhysActive[3]}.`;
    }
  }

  if (userInput === 'scissors') {
    if (compChoice === 'rock') {
      return `I won! ${name}, because it's ${temp}°F, I recommend to relax while ${notPhysActive[4]}.`;
    } else {
      return `Congrats, you won! ${name}, because it's ${temp}°F, I recommend you ${notPhysActive[5]}.`;
    }
  }
};

function inactiveTemp66OrMore(userInput, compChoice) {
  if (userInput === compChoice) {
    return `${govCuomo()}`;
  }
  if (userInput === 'rock') {
    if (compChoice === 'paper') {
      return `I won! ${name}, because it's ${temp}°F, I recommend to host an ${notPhysActive[6]}.`;
    } else {
      return `Congrats, you won! ${name}, because it's ${temp}°F, I recommend to host an ${notPhysActive[7]}.`;
    }
  }

  if (userInput === 'paper') {
    if (compChoice === 'scissors') {
      return `I won! ${name}, because it's ${temp}°F, I recommend a ${notPhysActive[8]}.`;
    } else {
      return `Congrats, you won! ${name}, because it's  ${temp}°F, I recommend to go ${notPhysActive[9]}.`;
    }
  }

  if (userInput === 'scissors') {
    if (compChoice === 'rock') {
      return `I won! ${name}, because it's ${temp}°F, I recommend to ${notPhysActive[10]}.`;
    } else {
      return `Congrats, you won! ${name}, because it's ${temp}°F, I recommend to ${notPhysActive[11]}.`;
    }
  }
};


function govCuomo(){
console.log("We tied! SURPRISE! Gov. Cuomo is giving two free tickets to the Buffalo Bills game today at Bills Stadium!")
if (readLineSync.keyInYN("Would you like to reserve your tickets?")) {
  console.log("Great! Make sure your latest PCR test results are within 72 hours prior to today's date.")
  if(readLineSync.keyInYN("Do your recent test results meet the 72 hour window?")){
    console.log("Great! Ticket's are yours!")
    endGame();
  }
  else{
    console.log("That's OK. Let's play another round to decide what activity you'll to today.")
    rockPaperScissors();
  }
}else{
  console.log("Since you don't want to reserve available tickets, lets play another round of rock, paper, scissors till I can recommend an activity.")
  rockPaperScissors();
}
endGame();
};


const endGame = () => {
  console.log("Remember to wear your mask everywhere you go. Have a great day!");
  process.exit(); //this exit fully leaves the interaction w the terminal
};


let physActive = [
"ice skating", //LIGHT. <= 65
"build a snowman", //LIGHT <= 65
"skiing", //MODERATE. <= 65
"snowboarding", //MODERATE. <= 65
"sledding", //MODERATE  <= 65
"ice climbing", // VIGOROUS temp <= 65
"fishing and hunting", //LIGHT. temp >= 66 
"walking", //LIGHT         temp >= 66
"golfing", //LIGHT temp >= 66
"rollerblading or biking", //MODERATE temp >= 66
"kayaking, canoeing, diving, or sailing", //MODERATE temp >= 66
"fitness classes, held outside or virtually, that allow distance", //MODERATE temp >= 66
"swimming pools and beaches", //MODERATE temp >= 66
"running", //VIGOROUS  temp >= 66
"hiking", //VIGOROUS     temp >= 66
"rock climbing",//VIGOROUS temp >= 66  
];

let notPhysActive = [
  "outdoor farmers market", //0 temp<=65 ; temp>65
  "drive-in movie", //1 temp<=65 ; temp>65
  "restaurant dining", //2 temp<=65 ; temp>65
  "relax outdoors", //3 temp<=65 ; temp>65
  "boating", //4 temp<=65 ; temp>65
  "visit a museum", //5 temp<=65 ; temp>65
  "outdoor barbecue", //6 temp>65
  "outdoor potluck", //7 temp>65
  "Picnic", //8 temp>65
  "bird watching", //9 temp>65
  "video call a friend(s)", //10 temp>65
  "write a letter to a freind(s)", //11 temp>65
];



play(); //prints the instructions
