const readline1 = require("readline-sync");

let nameInput = readline1.question("Enter your name: ");

console.log(`Hello ${nameInput}! \nWelcome to Mystery Inc.`);

function quitGame() {
  console.log("Sorry to hear, enjoy not knowing");
  process.exit();
}


function game() {
  if (readline1.keyInYN("Would you like to play and decide your own fate?")) {
    intro();
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


function startGame() {
  
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
    if (readline1.keyInYN("You open the door and notice that the Hallways are all empty.There's an ominous presence in the air. Would you still like to enter? ")) {
      hallway();
    } else {
      startGame();
    }
  };
  
//Options do you walk into the empty school Y/N
//Adventure: Has player wall down the hallway and has a fork in the road should they go L or R. One could decide if you live or they die. 
//Adventure: Create Variable (Left) = Gym  (Right) = Lunchroom
// 
// function stayHome() {
//   let answer1 = ["1", "2"];
//   while (answer1 !== null) {
//     readline1.setDefaultOptions({
//       limit: answer1,
//       limitMessage:
//         "HURRY UP BEFORE IT MEANS YOUR LIFE",
//     });
//     let location = readline1
//       .question(
//          "You go back to bed. You being to dose off and all of a sudden you hear the wooden floors begin to creek towards you... Somone is in the house. Do you hide in the 1:closet or under the 2:bed?"
//         ).toUpperCase();
      
//       }
  
// the creeking is getting louder towards your bedroom. Do you hide in the closet or under the bed?
//Adventure: Create Variable (Closet)= Life  (Bed)= Death
function hangWithFriends() {}
// You begin walking to the park and you see a whole bunch of people walking towards you do you walk towards then or away from them.
//Adventure: Create Variable (Toward)= Life  (Away)=Life
game();




function hallway(){
  //You walk down the hallway and hear a scream to your right do you go head to the right and try to be a hero, head left to save your own skin or head back towards the building exit?"
}
// function printArray(){
//   let arr=[ 2,3,4,5,6]
//   for (let i = 0; i < arr )}


// write a function that takes in an array and returns a 
// new array with every element in the array doubled. 

// const doubleArr = (arr)=>{
//   let newArray=[]
//   arr.forEach((element) => {
//     newArray.push(element*2)
//     }); 
//     return newArray
//}



//doubleArr([1, 2, 3]) // => [2, 4, 6]


//write a function that takes in an array 
// and returns a new array with only words that were already capitialized.

// const onlyCaps = (arr) => {
//   return arr.filter((el)=>{
//     return el.toCapitalCase
//   })

//   }

// console.log(onlyCaps(["Hello", "CAT", "word"])) // => ["CAT"]
  

