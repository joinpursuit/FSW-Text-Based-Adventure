const readline1 = require("readline-sync");

let nameInput = readline1.question("Enter your name: ");

console.log(`Hello ${nameInput}! \nWelcome to Mystery Inc.`);

function quitGame() {
  console.log("Sorry to hear, enjoy not knowing");
  process.exit();
}

function game() {
  if (readline1.keyInYN("Would you like to play and decide your own fate?")) {
    startGame();
  } else {
    quitGame();
  }
}

function startGame() {
  console.log(
    "Life is a mystery and things are always changing.\nEvery ACTION has a REACTION so BE CAREFUL it could cost you your LIFE. \nIt's raining and dark outside, the fog clouds your vision as you open the front door. The hairs on the back of your neck begin to stand, something is wrong. What do you do?"
  );
  let answer1 = ["A", "B", "C"];
  while (answer1 !== null) {
    readline1.setDefaultOptions({
      limit: answer1,
      limitMessage:
        "PLEASE CHOOSE ONE OF THE OPTION,OR JUST WILL NEVER FULLFILL YOU DESTINY",
    });
    let location = readline1
      .question(
        "Do you want to go to, A: School, B: Stay Home or C: Hangout with Friends\n"
      )
      .toUpperCase();

    switch (location) {
      case "A":
        toSchool();
        break;
      case "B":
        stayHome();
        break;
      case "C":
        hangWithFriends();
        break;
      default:
    }
    break;
  }
}
const toSchool = () => {
  console.log("You open the door and notice that the Hallways are all empty. ");
};
//Options do you walk into the empty school Y/N
//Adventure: Has player wall down the hallway and has a fork in the road should they go L or R. One could decide if you live or they die. 
//Adventure: Create Variable (Left) = Gym  (Right) = Lunchroom
// 
function stayHome() {
  console.log(
    "You heard the creeking floor, and wonder if someone is in the house with you"
  );
}
// the creeking is getting louder towards your bedroom. Do you hide in the closet or under the bed?
//Adventure: Create Variable (Closet)= Life  (Bed)= Death
function hangWithFriends() {}
// You begin walking to the park and you see a whole bunch of people walking towards you do you walk towards then or away from them.
//Adventure: Create Variable (Toward)= Life  (Away)=Life
game();
