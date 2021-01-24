const readline1 = require("readline-sync");
console.clear();

let nameInput = readline1.question("Enter your name: ");
console.clear();

console.log(`Hello ${nameInput}!  Welcome to Will you sleep? `);

console.log(
  "\nTo play this game, you will be given different choices on whether you want to remain asleep or stay awake! \n"
);

const ageRequirement = () => {
  let age = readline1.question("How old are you?\n");
  if (age < 18) {
    console.log("You are a minor");
    endGame()
  } else if (age === 18) {
    console.log(`${age}, finally! Congratulations on being an adult!`);
    startGame()
  } else {
    console.log(`You're old enough to play!\n`);
    startGame()
  }
};

function decisions() {
  console.log("\nIts 5am and a explosion wakes you up!\n");
  let person = ["Roll over", "Go check it out"];
  let index = readline1.keyInSelect(person, "Do you?");
  switch (person[index]) {
    case person[0]:
      rollOver();
      break;
    case person[1]:
      checkItOut();
      break;
    case person[-1]:
        startGame()
        break; 
  }
}

function checkItOut() {
  console.clear();
  console.log("Let's go check! should we...\n");
let person = ['Get dressed! and see if neighbors are up?','Look out the window?', 'Go back to sleep?"']
let index = readline1.keyInSelect(person, 'Do you?')
  if (person[0]) {
    getDressed();
  } else if (person[1]) {
    theWindow();
  } else if (person[2]) {
    whoAmIKidding();
  } else {
      startGame
  }

}

function rollOver() {
  console.clear();
  person = readline1.question("Good job! sleeping is IMPORTANT!! ");
  startGame();
}

function whoAmIKidding() {
  console.clear();
  console.log(
    "Who am I kidding! I always knew it would end somehow/someday! \n"
  );
  startGame();
}

function getDressed() {
  console.clear();
  console.log(
    "You get dressed and go out into the hallway to find out where the explosion sound came from\n"
  );
  console.log("You see everyone's confused in the hallway in their pajamas \n");

  let person = readline1.question(
    "A: Do you ask clueless neighbors,    B: Follow dog,    C: Put on your pjs back on \n"
  );
  person = person.toUpperCase()
  if (person === "A") {
    askNeighbors();
  } else if (person === "B") {
    followDog();
  } else if (person === "C") {
    putOnPjs();
  } else {
    startGame()
  }
}

function theWindow() {
  console.clear();
  console.log(
    "You get up and look out the window. To then realize the loud explosion sound was just thunderstorm. \n"
  );
  console.log("You turn back to your bed and go to sleep! \n");

  startGame();
}
1
function askNeighbors() {
  console.clear();
  console.log("You walk down the hall to talk to your neighbors.");
  console.log(
    "Neighbor A says to stay put and see how it plays out. Neighbor B says they think the noise was coming from the basement \n"
  );
  let person = readline1.question(
    "A: Listen to neighbor A and stay put?     B: Listen to neighbor B and go to the basment and investigate? \n"
  );
person = person.toUpperCase()
  if (person === "A") {
    stayPut();
  } else if (person === "B") {
    toBasement();
  }
}

function followDog() {
  console.clear();
  console.log("You see a dog!");
  console.log(
    "The dog was trying to get your attention. So you follow it outside \n"
  );
  console.log(
    "The dog ended up peeing at a hydrant... Complete waste of time! \n"
  );
  person = readline1.keyInYN("Go back upstairs? \n");
  if (person) {
    console.clear();
    console.log("\nGood choice go back upstairs and go to sleep. \n");
    startGame();
  } else {
    console.clear();
    console.log("\nBeautiful night! \n");
    console.log(
      "I guess I'll take a walk there's a full moon out tonight!! \n"
    );
    startGame();
  }
}

function putOnPjs() {
  console.clear();
  console.log(
    "You go back to your room and change into your pjs. Back to sleep you go! \n"
  );
  startGame();
}

function stayPut() {
  console.clear();
  console.log("You got tired of trying to figure out what was wrong.");
  console.log("So you went back to your room and stayed put in your bed. \n");
  console.log("Back to sleep you go! \n");

  startGame();
}

function toBasement() {
  console.clear();
  console.log("You got down to the basement and the power is out \n");
let person = readline1.question(
    "A: Go back up to get flashlight?     B: Keep going and you'll find The LIGHT!! \n"
  );
person = person.toUpperCase()
  if (person === "A") {
    getFlashlight();
  } else if (person === "B") {
    keepGoing();
  }
}

function getFlashlight() {
  console.clear();
  console.log("You on your way back upstairs \n");
  console.log("You get to your room \n");
  console.log("But your bed is calling you \n");
let person = readline1.question("A: Go to sleep ?    B: Find flashlight? \n");
person = person.toUpperCase()
  if (person === "A") {
    goToSleep();
  } else if (person === "B") {
    findFlashlight();
  }
}

function keepGoing() {
  console.clear();
  console.log(
    "You trying to move around the basement without killing yourself in the dark \n"
  );
  console.log(
    "It just occurred to you that you're terribly scared of the dark!"
  );
  console.log("You hear a loud Noise!! \n");
  person = readline1.keyInYN("Do You run out and SCREAM BLOODY MURDER!! \n");
  if (person) {
    console.clear();
    console.log(
      "Neighbor B laughs at you and ask if you want to press charges. \n"
    );
    console.log("Neighbor A scolds at you. " + '"I told you to STAY put!!" \n');
    console.log(
      "You roll your eyes and walk past them to your room and go to sleep! \n"
    );
  } else {
    console.log(
      "\nIf loud noises don't scare you! Why the heck did you wake up in the first place! GO BACK TO BED!! \n"
    );
  }

  startGame();
}

function findFlashlight() {
  console.clear();
  console.log(
    "You in your room and find the flashlight but it doesn't have any batteries \n"
  );
  console.log("You're tired!! You was woken out of your sleep. Do you... \n");
let person = readline1.question(
    "A: Look for batteries?         B: Who has time to look for batteries? \n"
  );
  person =  person.toUpperCase()
  if (person === "A") {
    batteries();
  } else if (person === "B") {
    goToSleep();
  }
}

function batteries() {
console.clear()
let num = batteryNumber()
battery = num * 3
console.log(
    `Actually do you really want to go off looking for ${battery} batteries? \n`
  );
  console.log(
    `I didn't think so. by the time you do find ${battery} batteries it will be daylight! \n`
  );
  console.log(
    "Your brain is not even capable enough right now to even do the math.  \n"
  );
let next = readline1.keyInYN(`Isn't ${battery} too many?! Aren't you ready to go to sleep yet?`)
if(next){
    goToSleep()
} else {
    storyTime1()
    
}
}
function storyTime1(){
    let arr = ['pillow','duvet','cloud nine', 'sheets']
    let str = `\nOnce upon a time, there was a...`
    let array = []
    for(let i = 0; i < arr.length; i++){
    
      array.push(arr[i])
    }
    let story = str + array.join(" , ")
    console.log(story)
    console.log(storyTime2())
    
}

function storyTime2() {
    console.clear()
    console.log('\nWhich one sounds more appealing?\n')
    let choices = ['pillow', 'duvet', 'sheets', 'or', 'cloud nine'];
    let arr = []
  let text = "";
  let i = 0;
  while (i < choices.length) {
    text += choices[i];
    i++;
    // arr.push(choices[i])
  }
  let story2 = choices + arr.join(" , ")
  console.log(readline1.question())
}



function goToSleep() {
    
  console.log(
    `Stay in bed, ${nameInput}! nothing to find out there. No need for batteries!!  `
  );
  console.log("\nYou fall to the urges of your bed and go to sleep!! \n");
  console.log("Ultimately you chose SLEEP!! \n");
  console.log("Good thing! Whats better than sleep anyways? \n");
  console.log("Moral of the story mind your business! \n");
  endGame();
}
const batteryNumber=() =>{
    return Math.ceil(Math.random()*20)

}
const startGame = () => {
  let play = readline1.keyInYNStrict("Do you want to play?");
  if (play) {
    console.clear()
    decisions();
  } else {
    endGame();
  }
};
const endGame = () => {
  console.log(`Welp. \nOkay then, now I am going to bed. \nGoodnight ${nameInput}`)
  process.exit();
};

ageRequirement();
