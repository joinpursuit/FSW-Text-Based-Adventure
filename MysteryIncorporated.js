//Game Foundation
const readline1 = require("readline-sync");

let nameInput = readline1.question("Enter your name: ");

console.log(`Hello ${nameInput}! \nWelcome to Mystery Inc.`);
game();


function game() {
  if (readline1.keyInYN("Would you like to play and decide your own fate?")) {
    console.clear()
    intro();
  } else {
    quitGame();
  }
}

function quitGame() {
  console.log("Sorry to hear, enjoy not knowing");
  process.exit();
}

//Would you like to try again
function resetGame(){
  if (readline1.keyInYN("Would you like to play again?")){
    console.clear()
    console.log(`Hello Again ${nameInput}!`)
    console.log(
      "Life is a mystery and things are always changing.\nEvery ACTION has a REACTION so BE CAREFUL it could cost you your LIFE. \nIt's raining and dark outside, the fog clouds your vision as you open the front door. The hairs on the back of your neck begin to stand, something is wrong. What do you do?"
    )
    startGame();
  } else {
    quitGame();
  }
}

function intro(){
  console.log(
    "Life is a mystery and things are always changing.\nEvery ACTION has a REACTION so BE CAREFUL it could cost you your LIFE. \nIt's raining and dark outside, the fog clouds your vision as you open the front door. The hairs on the back of your neck begin to stand, something is wrong. What do you do?"
  )
  startGame()
}
//Game Foundation

//First Decision

function startGame() {
  
  let answer1 = ["A", "B", "C"];
  while (answer1 !== null) {
    readline1.setDefaultOptions({
      limit: answer1,
      limitMessage:
      "PLEASE CHOOSE ONE OF THE OPTION,OR YOU WILL NEVER FULLFILL YOUR DESTINY",
    });
    let location = readline1
    .question(
      "Do you want to go to, A: School, B: Stay Home or C: Hangout with Friends\n"
      )
      .toUpperCase();
      
      switch (location) {
        case "A":
          console.clear()
          toSchool();
          break;
          case "B":
            console.clear()
            stayHome();
            break;
            case "C":
              console.clear()
              hangWithFriends();
              break;
              default:
              }
              break;
    }
 }

 //First Decision


//Decisions to change option and without running through the entire senerio.
//1. Options: backHome or hangWithFriends      
function chooseDifferentOption1(){
  answer1=["A","B"];
  while(answer1 !== null){
    readline1.setDefaultOptions({
    limit:answer1,
    limitMessage:
   "HURRY UP BEFORE IT MEANS YOUR LIFE",
     });
  location = readline1
  .question("You decided to turn back you only have two options now \n A:To School B: Back Home.\n")
  .toUpperCase()
  switch (location) {
    case "A":
    backHome();
    break;
    case "B":
    hangWithFriends();
    break;
    }
    break;
   }
}



function Away(){
    answer1=["A","B"];
    while(answer1 !== null){
      readline1.setDefaultOptions({
        limit:answer1,
        limitMessage:
        "HURRY UP BEFORE IT MEANS YOUR LIFE",
      });
     location = readline1
      .question("You decided to turn back you only have two options now \n A:To School B: Back Home.\n")
      .toUpperCase()
      switch (location) {
        case "A":
          toSchool();
          break;
          case "B":
          backHome();
            break;
           // default:
       }
            break;
      }
}

//Decisions to change option and without running through the entire senerio.



//Primary Branching

function toSchool(){
    if (readline1.keyInYN("You open the door and notice that the Hallways are all empty.There's an ominous presence in the air. Would you still like to enter? ")) {
      hallway();
    } else {
      chooseDifferentOption1();
    }
  };
  
  
//Options do you walk into the empty school Y/N
//Adventure: Has player wall down the hallway and has a fork in the road should they go L or R. One could decide if you live or they die. 
//Adventure: Create Variable (Left) = Gym  (Right) = Lunchroom
// 
function stayHome() {
   answer1 = ["A", "B"];
  while (answer1 !== null) {
    readline1.setDefaultOptions({
      limit: answer1,
      limitMessage:
        "HURRY UP BEFORE IT MEANS YOUR LIFE",
    });
    location = readline1
      .question(
         "You go back to bed. You being to dose off and all of a sudden you hear the wooden floors begin to creek towards you... Somone is in the house. Do you hide in the A:closet or under the B:bed? "
        )
        .toUpperCase()
        switch (location) {
          case "A":
            Closet();
            break;
          case "B":
            Bed();
            break; 
            default:
          }
          break;
      }
    }



function hangWithFriends(){
      answer1=["A","B"];
      while(answer1 !== null){
        readline1.setDefaultOptions({
          limit:answer1,
          limitMessage:
          "HURRY UP BEFORE IT MEANS YOUR LIFE",
        });
       let location = readline1
        .question("You begin walking to the park and you see a whole bunch of people walking towards you. \nDo you walk A: Towards or B: Away From\n")
        .toUpperCase()
        switch (location) {
          case "A":
            Toward();
            break;
            case "B":
              Away();
              break;
             // default:
              }
              break;
            }
          }
//Primary Branching



//Secondary Branching

function Closet(){
  if (readline1.keyInYN("You open the door and notice that the Hallways are all empty. There's an ominous presence in the air. Would you still like to enter? ")) {
        hallway();
      } else {
        ;
      }
    }


function Bed(){
      
    }
  
// the creeking is getting louder towards your bedroom. Do you hide in the closet or under the bed?
//Adventure: Create Variable (Closet)= Life  (Bed)= Death
  
         


// // You begin walking to the park and you see a whole bunch of people walking towards you do you walk towards then or away from them.
// //Adventure: Create Variable (A: Toward)= Death  (B: Away)=Life
function Toward(){
  console.clear()
  console.log("I'M SORRY WRONG DECISION, AND BECAUSE OF YOUR CHOICE YOU WERE KILLED BY A GROUP OF SOCIOPATHS \nNever walk toward something or someone without having a full understanding of the impact.")
  resetGame()
  // create a function that allows the program to reset giving the player the chance to replay 
}



function hallway(){
  //   You walk down the hallway and hear a scream to your right do you go head to the right and try to be a hero, head left to save your own skin or head back towards the building exit?"
   }

    
    
    
//Secondary Branch
  

// Create hidden path that allows the player to identify certain details within the text to choose correct direction.