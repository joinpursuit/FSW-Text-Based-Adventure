const rls = require("readline-sync");
//This line of code is welcoming the user to the game//
console.clear();
let nameInput = rls.question("\nHey wassup, what's your name: ");
console.log(`\nHello ${nameInput}!  Welcome to Etherly.`); //Insert name of Game!//
//Possibly an age requirement//
//This line of code is describing to the user how to play//
console.log(
  "\nTo participate, you will be asked to input some answers or pick one of many options.\nRemember to answer as truthfully as you can! \nPlease do not think too hard, just go with your gut!"
);


const giveNickName=()=>{
  let nick= ''
  for(let i = 0; i < nameInput.length; i ++) {
      if(nameInput.length >= 3){
      }
      else { 
        nick += (nameInput[i] + 'a')
       }
}
return nick
}

function nickName(){
  console.log(`\nYou know, ${nameInput}, I love giving people nicknames.`)
  let input = rls.keyInYNStrict('Can I please give you a nickname?')
  if(input){
    console.log(giveNickName())
    let like = rls.keyInYNStrict('Do you like it?')
      if(like){
        console.log(`You are so nice but, ${nameInput}, just sounds better.`)
        startGame()
      } else{ console.log(`I agree, I don't think I know you enough to call you that.`)}
        startGame()

  } else{
    console.log('I agreee, I do not know you too well yet')
    startGame()
  }
}

/** Game Loop Section
 * Decision One: The user must enter a string to make a decision
 * Decision Two: The user must enter a number to make a decision
 * Invalid entires are re-prompted
 */

//A function that takes in a number user age and returns a value representing how old they basically are to young people. Decision(1)//
function growUp() {
  console.log(
    `\nWe are in different times ${nameInput}. \nApparently, people who may consider themselves young, are now actually considered old. \nLet's find out where you fall.`
  );
  let actualAge = rls.questionInt("How old are you now?:");
  let realAge = actualAge * 3; // while loop for age requirement ?
  if(realAge < 40) {
    console.log("I dont think you should be playing this game kid")
    quitGame()
  } else {
  console.log(`\nAccording to young people, specifically Gen-Z, you are ${realAge}. \n${realAge}! I know "How?!" right. Sorry to break it to you, they think we are disgusting!`)
  let dec = rls.keyInYNStrict(`\nWould you like to continue living?`);
    if (dec) {
      console.log(
        "\nSmart thinking, you should not care about what those kids have to say. \nWe are in our prime! \nThey cannot wait to be like us!"
      );
      fourSeasons();
    } else {
      console.log("\nYou seem to be an ageist and I do not like it!");
      restartGame();
    }
}
}
// A function that takes in a string. Decision(2)// restrict the answers? with array and .include?
function fourSeasons() {
  season = rls.question(`\nSo...tell me ${nameInput}, what is your favorite season?`);
  console.log("\nWOW " + season.toUpperCase() + "! That's my favorite season too!");
  console.log("\nThe " + season + " is the time of the year when I like to use my coloring book.");
  let dec = rls.keyInYNStrict("Want to color with me now?");
  if (dec) {
    pickColor();
  } else {
    console.log("I dont think you know how to have fun.");
    restartGame();
  }
}
//Function that uses KeyInSelect to allow th user to pick between multiple options. Followed by switch  that takes them to 4 differenct scenarios. Decision(3)//
function pickColor() {
  console.log(
    "\nIts time to draw in your coloring book! \nOh no, all your color pencils are broken and you can only sharpen one! \nWhich is it going to be ?"
  );
  let colors = ["Green", "Brown", "Blue", "Red", "Orange", "Grey", "Yellow"];
  let index = rls.keyInSelect(colors, "Which color?");
  console.log("You chose: " + colors[index]);
  switch (colors[index]) {
    case "Green":
      earthBender();
      break;
      case "Brown":
        earthBender();
        break;
    case "Blue":
      waterBender();
      break;
    case "Red" :
      fireBender();
      break;
    case "Orange":
      fireBender();
      break;
    case "Grey":
      airBender();
      break;
    case "Yellow":
      airBender();
      break;
    default:
      console.log("Invalid input: there's no room for creativity here");
      restartGame();
  }
}
//Decision(4)
function earthBender() {
  console.log(
    "I love your drawing, your color choice went perfect with the trees and the grass."
  );
  console.log(
    "We worked so hard coloring, now we must rest. Would you like to:"
  );
  let rest = ["Eat food", "Go shopping", "Connect with Nature"];
  let index = rls.keyInSelect(rest, "Which sounds most recharging");
  restChoice = rest[index];
  switch (rest[index]) {
    case "Eat food":
      console.log("You are a Taurus");
      amIRight();
      break;
    case "Go shopping":
      console.log("You are a Capricorn");
      amIRight();
      break;
    case "Connect with Nature":
      console.log("You are a Virgo");
      amIRight();
      break;
  }
}
//D5
function waterBender() {
  console.log(
    "I love your drawing, your color choice went perfect with the ocean and the bubbles."
  );
  console.log(
    "We worked so hard coloring, now we must rest. Would you like to:"
  );
  let rest = [
    "Write a poem",
    "Dive deep into research at home",
    "Discuss your feelings with your loving partner",
  ];
  let index = rls.keyInSelect(rest, "Which sounds most recharging");
  restChoice = rest[index];
  switch (rest[index]) {
    case "Write a poem":
      console.log("You are a Pisces");
      amIRight();
      break;
    case "Dive deep into research at home":
      console.log("You are a Scorpio");
      amIRight();
      break;
    case "Discuss your feelings with your loving partner":
      console.log("You are a Cancer");
      amIRight();
      break;
  }
}
//D6
function airBender() {
  console.log(
    "I love your drawing, your color choice went perfect with the clouds and the sunshine."
  );
  console.log(
    "We worked so hard coloring, now we must rest by having a good conversation. Would you like to:"
  );
  let rest = [
    "Discuss the ways we can improve our living existence as humans",
    "Discuss fairness and fashion",
    "Discuss a little of everything!",
  ];
  let index = rls.keyInSelect(rest, "Which sounds most recharging");
  restChoice = rest[index];
  switch (rest[index]) {
    case "Discuss the ways we can improve our living existence as humans":
      console.log("You are a Aquarius");
      amIRight();
      break;
    case "Discuss fairness and fashion":
      console.log("You are a Libra");
      amIRight();
      break;
    case "Discuss a little of everything, why stop there!":
      console.log("You are a Gemini");
      amIRight();
      break;
  }
}
//D7
function fireBender() {
  console.log(
    "I love your drawing, your color choice went perfect with the blazing sun."
  );
  console.log(
    "We worked so hard coloring, now we must have fun. Would you like to:"
  );
  let rest = [
    "Travel to a different country",
    "Play to win , with your friends",
    "Go out with your friends and take pics",
  ];
  let index = rls.keyInSelect(rest, "Which sounds most recharging");
  restChoice = rest[index];
  switch (rest[index]) {
    case "Travel to a different country":
      console.log("You are a Sagittarius");
      amIRight();
      break;
    case "Play to win , with your friends":
      console.log("You are a Aries");
      amIRight();
      break;
    case "Go out with your friends and take pics":
      console.log("You are a Leo");
      amIRight();
      break;
  }
}
//D8
function amIRight() {
  answer = rls.keyInYNStrict("Did I get it right?");
  if (answer) {
    console.log('\nMy work is done here.')
      if(answer){
      restartGame();
      }
  } else {
    experience();
  }
}
//D9//
function experience() {
  console.clear();
  let experiences = [
    "touch",
    "feel",
    "smell",
    "taste",
    "mold",
    "sing",
    "create",
    "listen",
    "play",
    "run",
    "soar",
    "compete",
    "observe",
    "breathe",
    "discuss",
    "wonder",
    "learn",
  ];
  let index = rls.keyInSelect(experiences, "What calls to you most?");
  switch (experiences[index]) {
    case "touch":
      earthAffirm();
      break;
    case "feel":
      earthAffirm();
      break;
    case "smell":
      earthAffirm();
      break;
    case "taste":
      earthAffirm();
      break;
    case "mold":
      waterAffirm();
      break;
    case "sing":
      waterAffirm();
      break;
    case  "create":
      waterAffirm();
      break;
    case "breathe":
      waterAffirm();
      break;
    case "play":
      fireAffirm();
      break;
    case "run":
      fireAffirm();
      break;
    case "soar":
      fireAffirm();
      break;
    case "compete":
      fireAffirm();
      break;
    case "observe":
      airAffirm();
      break;
    case  "discuss":
      airAffirm();
      break;
    case "wonder":
      airAffirm();
      break;
    case "learn":
      airAffirm();
      break;
    case "listen":
      airAffirm();
      break;
    default:
    restartGame()
    break;
  }
}
//D10
function earthAffirm() {
  let affirm = rls.keyInYNStrict("Ready for your affirmation:");
  if (affirm) {
    console.clear()
    console.log(
      "You are connected to earth. You are grounded. You are centered. You are confident"
    );
    restartGame()
  } else {
    restartGame()
  }
}
function waterAffirm() {
  let affirm = rls.keyInYNStrict("Ready for your affirmation:");
  if (affirm) {
    console.clear()
    console.log(
      "You are connected to water. Water can mold to whatever form its in or even shatter that which contains it. You are a creator."
    );
    restartGame()
  } else {
    restartGame()
  }
}
function fireAffirm() {
  let affirm = rls.keyInYNStrict("Ready for your affirmation:");
  if (affirm) {
    console.clear()
    console.log(
      "You are connected to fire. Fire is energy, it can be warm and calming or hot and consuming. You bring vitality."
    );
    restartGame()
  } else {
    restartGame()
  }
}
function airAffirm() {
  let affirm = rls.keyInYNStrict("Ready for your affirmation:");
  if (affirm) {
    console.clear()
    console.log(
      "You are connected to air. Air is breathing, it is information of what is here and what is to come. You are wisdom and connection."
    );
    restartGame()
  } else{
    restartGame()
  }
}

// readlineSync.promptLoop(inputHandler[, options]) // do you think this is annoying//

/**This function begins the game
 *
 */
const startGame = () => {
  let answer = rls.keyInYN("\nReady to begin?");
  if (answer) {
    console.log("Let's start!");
    console.clear();
    growUp();
  } else {
    console.log("Have a nice life!");
    quitGame();
  }
};
//This function uses proces.exit to quit game//
const quitGame = () => {
  console.log("Goodbye!");
  process.exit();
};

/**This function prompts user to restart game using KeyInYN
 * Yes, begins game use console clear function.
 * No, says goodbye then terminates game.
 *  */
const restartGame = () => {
  let answer = rls.keyInYN("Hmm okay, you are interesting. \nLet's try this one more time. Would you like to play again?!");
  if (answer) {
    console.clear();
    growUp();
  } else {
    console.log(
      "\nSad to see you go, but you chose what was right for you. \nSee you soon!"
    );
    quitGame();
  }
};

nickName();