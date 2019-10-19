//textBasedAdventure game
// created by Ohidur Rahman
// © 2019 all rights reserved
// this game is meant to be story driven.

const readline = require('readline-sync')
const rl = readline.createInterface =
({
  input: process.stdin,
  output: process.stdout
});


const  play = () => {
    let userInput;
    while(userInput !== "start") {
        userInput = readline.question("Type start:  ")
    }



console.log("You're awake I see, please tell me your name.");

let nameInput = readline.question("Enter your name: ")

console.log(`${nameInput}? that name...Could it be? We do not have much time!`)
console.log("We can't stay here for long please, do you have a weapon you'd like to take with you? Theres no coming back...");
let firstItem = readline.question("Enter (sword, sheild, staff ): ")
console.log(`a ${firstItem}? odd choice, lets go!`);


console.log("PART UNO");
console.log("");

console.log("Narrorator: "+ `Both ${nameInput} and the MysteryMan make their way out of the rubble from the aftermath`);
//console.clear();
console.log(`${nameInput} and the MysteryMan are greeted with Two roads diverged in a yellow wood,`);
console.log("");
userChoice = readline.question(`MysteryMan: Do you believe in destiny`)//console.log(`MysteryMan: Do you believe in destiny ${nameInput}?`);

  if(userChoice === "yes"){
    destiny(); //left
  } else {
    fool(); //right
  }
}

// const destiny = () => {
//   console.clear()
//   console.log("MysteryMan: so this is your answer, you know how this will end. Its destined we go left. ");
//   console.log("");
//   console.log("Narrorator: The two decide to the left path ");
//   console.log("MysteryMan(to himself): sorry I could not travel both and be one traveler. ");
//
// }

const fool = () => {
  console.clear()
  console.log("MysteryMan: Foolish child! alright then, lead the way, left or right? ");
  userDirection = readline.question("What will it be? choose wisely, left or right:")
    if(userDirection === "right"){
         console.log("Narrorator: The two decide to the right path ");
         console.log("MysteryMan(to himself): I took the one less traveled by. ");
         //fate();
    } else {(userDirection === "left")
      console.log("MysteryMan guess Left is the way.");
      destiny();
    }
    console.log("Narrorator: The two wonder endlessly...");
    console.log("");
    console.log("Are you going to tell me who you are? What's going on? Where are we?");
    console.log("");
    console.log("MysteryMan: Now is not the time! We need to find her before it's too late! it will all make sense soon.");
    console.log(".....");
    console.log("... *WHOOSH*");
    console.log("What the?");
    console.log("");
    console.log("MysteryMan: Stand back!");
    console.log("FortunePoe: Well, well well! What do we have here? If it isn't MysteryMan and hmm, I don't think I've met you. But no worries, lets play a game shall we?");
    console.log("");
    console.log("MysteryMan: This is no time for games!");
    console.log("FortunePoe: This isn't for MysteryMan. you over there, Whatdoya say?")
      let userInput = readline.question("yes/no?")
      if (userInput === "yes"){
        console.clear()
        console.log("FortunePoe: Great, pick 2 set of numbers.");
        fate(); // game
      } else {
        console.log("FortunePoe: Guess I have no choice to give you the fortune of doom");
        console.log("You are dead.");
      }

}
const destiny = () => {
  console.clear()
  console.log("MysteryMan: so this is your answer, you know how this will end. Its destined we go left. ");
  console.log("");
  console.log("Narrorator: The two decide to the left path ");
  console.log("MysteryMan(to himself): sorry I could not travel both and be one traveler. ");

}
const fate = () => {
  console.log("pick a set.(letter in Caps)")
  sum1 = 0;
  sum2 = 0;
  sum3 = 0;
  let set1 = [0,2,8,3,0] // 13
  let set2 = [0,0,0,0,1] // 1
  let set3 = [7,7,7,7,7] // 35
  console.log("A: " + set1);
  console.log("B: " + set2);
  console.log("C: " + set3);
  userSet = readline.question();
  if(userSet ===  "A"){
    for(i = 0; i < set1.length, i++;){
      sum1+= set1[i]

    }
      console.log(sum1 + " Is your lucky number.");
  }


//   let sum = 0;
//   //let inputNum = readline.question([]);
//   let userNum = [];
//   for(let i = 0; i < 5; i++){
//     let inputNum = readline.question([]);
//     inputNum +=
//     //userNum.push(inputNum[i])
// //console.log(inputNum);
//   }

  //console.log(userNum);

}
// let userDirection = readline.question()
// if(userDirection === "right"){
//   right();
// } else {
//   left();
// }
// const right = () => {
//   console.log("Narrorator: The two decide to the right path ");
//   console.log("MysteryMan(to himself): I took the one less traveled by. ");
// }
// const left = () => {
//   console.log("Narrorator: The two decide to the left path ");
//   console.log("MysteryMan(to himself): sorry I could not travel both and be one traveler.");

//}

play();

// let choice1 = readline.question("Enter Yes or No: ")
// console.log(`${nameInput}: ${choice1}`);
// echo -e "\a"
