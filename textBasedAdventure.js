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


const play = () => {
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
console.log(`${nameInput} and the MysteryMan are greeted with two roads that are diverged in a yellow wood`);
console.log("");
userChoice = readline.question(`MysteryMan: Do you believe in destiny`)//console.log(`MysteryMan: Do you believe in destiny ${nameInput}?`);

  if(userChoice === "yes"){
    destiny(); //left
  } else {
    fool(); //right
  }
}



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
  //console.clear()
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
  console.log("1: " + set1);
  console.log("2: " + set2);
  console.log("3: " + set3);
  userSet = readline.question();
    if(userSet ===  "1"){
      for(i = 0; i < set1.length; i++){
      sum1+= set1[i]
    }
      console.log(sum1 + " Is your lucky number.");
      console.log("FortunePoe: Strange lucky number ain't it? well its your lucky day, Procceed onward");
      dungeon();
  } else if( userSet === "2"){
    for(let i = 0; i <set2.length; i++){
      sum2 += set2[i]
    }
      console.log(sum2 + " Is your lucky number.");
      console.log("FortunePoe: You're not worthy, go back to where you came from.");
      console.log("");
      console.log("Narrorator the two head back and take the left path this time.");
      destiny();

  }else if(userSet === "3") {
    for(let i = 0; i < set3.length; i++){
      sum3 += set3[i]
    }
      console.log(sum3 + " Is your lucky number.");
      console.log("FortunePoe: Just because the number 7 is associated with luck, you've entered a deep misfortune");
      console.log("Narrorator: MysteryMan is possessed and kills you. ");
    }
}
const dungeon = () => {
  console.clear();
  console.log("MysteryMan: What a strange encounter, we'll need to go through this cave");
  console.log("You don't say? I think can handle myself from now,");
  console.log("MysteryMan: *sigh* you haven't gorwn much since we last saw each other. ");
  console.log("");
  console.log("Narrorator: Walking onward into the dark cave, you encounter human remains and their belongings");
  console.log("");
  console.log("MysteryMan: Oh my God. This isnt safe we need to turn back");
  userFate = readline.question("Turn back? yes or no?. ")
    if(userFate === "no"){
      console.log("No, we got this far, theres some items on the ground, we only have space for one.");
      console.log("Pickaxe, Torch, and a map");
    } else{
      console.log("You're right, lets go back and take the left road this time.");
      destiny();
    }

      let item = userItem = readline.question()
        switch(item){
            case "pickaxe":
            console.log("Brute force your way out the cave ");
            break;
            case "torch":
            console.log("Illuminates the way");
            break;
            case "map":
            console.log("A travelers trusty companion");
            break;
                      }

                    }



play();
