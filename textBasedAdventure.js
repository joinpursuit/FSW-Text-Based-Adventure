//Initialize readlineSync

const readlineSync = require("readline-sync");

//Game Controls

//Welcome Massage 

const play = () => {
  console.log("Welcome to this game of survival");
  console.log("In this game you are a passenger on the SS New York,");
  console.log("a ocean liner that has struck a rock and is rapidly sinking.");
  console.log("You have to make your way from your cabin on F deck to the boats on A deck before the ship sinks.");
  console.log("You will be presented with a scenarios and you will have to make the right choice to ensure survival.");
  console.log("Fail, and you will have to start over.")

 //Take in userName

 const userName = readlineSync.question("To begin, what is your name? \n");
 console.log("Hi " + userName + ", Welcome!");

 //Ask the user if they are ready

 if (readlineSync.keyInYN(userName + ", are you ready?")) {
   startGame()
 } else {
   leaveGame
 }
}
const startGame = () => {}

const leaveGame = () => {
  console.log("Okay :( see you later!")
  process.exit()
}

const loseGame = () => {
  console.log("You lose!")
  process.exit()
}
//can a timer be added? 

const winGame = () => {
  console.log("YOU ARE ULTIMATELY SAVED BY THE USS PURSUIT. WHO SAW THE LIGHT OF THE FLARE. YOU ARE CARRIED ABOARD AND PLACED INTO A WARM BED WHERE YOU STAY UNTIL YOU REACH NEW YORK WHERE YOU GREETING BY YOUR FAMILY.")
  console.log("CONGRATULATIONS!!! You have survived the sinking of the USS New York and won this game!!!")
  console.log("*******************************************************************************************************************************");
  console.log("*******************************************************************************************************************************");
}


//start

play() //Calling play

scenarioOne() //Call Function

function scenarioOne() {

  console.log("SCENARIO ONE: You are awaken from a your deep sleep by panicked voices in the hallway outside your cabin. There are talks that the ship is sinking!!");
  console.log("You wonder if you should wait for a steward to tell you what to do or should you try to follow your intuition and try to escape on your own?");
//each escape method will have it's own name// 

let readlineSync = require('readline-sync'),
escapeMethod1 = ['Intuion', 'Steward'];//reminder: [0, 1]

index = readlineSync.keyInSelect(escapeMethod1, 'What will you do?')

//------ Solution source: https://stackoverflow.com/questions/34334952/array-issue-using-js --------

if (index == 0) { //remember Arrays start at 0!!!
  console.log('Good job! Time is important in any disaster'); }
else if (index == 1) {
  console.log("Unfortunately, the steward never came and you didn't try to escape until it was too late. You wen't down with the ship.");
  loseGame()
}

}

scenarioTwo() //Call Function

function scenarioTwo() {

console.log("----------------------------------------"); //inserted for easy readability
console.log("SCENARIO TWO: Now you're out in the hallway in front of your cabin.");
console.log("The hallway is deserted and all you hear is silence and the a erie groaning of the ships hull.");
console.log("You are on F deck have to make your way up to B deck");
console.log("You have two ways up: the elevators or the steps");

let readlineSync = require('readline-sync'),
escapeMethod2 = ['Elevator', 'Stairs'];

index = readlineSync.keyInSelect(escapeMethod2, 'Should you take the elevators or the steps?')

if (index == 0) {
  console.log('Bad choice! Any elevator is one of the worst places to be in a sinking ship. The power goes out, leaving you trapped in the elevator in the rapidly sinking ship.')
  loseGame()
} else if (index == 1) {
  console.log('Great job! The stairs are a much safer bet than an elevator which can easily short out in a sinking ship.');
}

}

scenarioThree() //Call Function

function scenarioThree() {

 console.log("----------------------------------------"); 
 console.log("SCENARIO THREE: Unfortunately the stairwell you took only goes as far up as C deck!");
 console.log("And worse, the door requires a key! Your only option is to go down.");
 console.log("You look down the stairwell and see that F deck is now starting to flood.");
 console.log("Your only other option is D deck but you know nothing about the layout");

let readlineSync = require('readline-sync'), 
escapeMethod3 = ['D deck', 'F deck'],

index = readlineSync.keyInSelect(escapeMethod3, 'What deck should you take your chance on?')

if (index == 0) {
  console.log('Good job. Water inside sinking ships can create dangerous currents than can sweep you away. Best to stay on dry decks for now'); 
} else if (index == 1) {
  console.log('Bad choice. The water on F deck starts at a manageable level, but suddenly rises and a current sweeps you down a corridor.');
  loseGame()
}

}

scenarioFour() //Call Function

function scenarioFour () {

console.log("----------------------------------------"); 
console.log("SCENARIO FOUR: You are on D deck, looks like this deck is for crew only. You see a door though to the kitchen which obviously leads to a passenger deck and a sign that says 'crew passage'. ");

let readlineSync = require('readline-sync'),
escapeMethod4 = ['kitchen', 'Crew Passage'],

index = readlineSync.keyInSelect(escapeMethod4, 'Should you go though the kitchen or down the crew passage?')

if (index == 0) {
  console.log("Good job! According to the sign the kitchen leads to the lower dinning hall, and upper dinning halls which happens to be on C deck. You are well on our way out! ");
} else  if (index == 1) {
  console.log("Unforunately the crews passage literally leads to dressing rooms and a storage locker aka a Dead End....and even better, a ladder to A deck!! You turn around to see a wall of water rushing toward you. It is too late.");
loseGame();
}

}

scenarioFive() //Call Function

function scenarioFive () {

console.log("----------------------------------------");
console.log(".....OR ARE YOU?");
console.log("SCENARIO FIVE: You head to the stairwell only to see that a fire is starting at the base of the stairs with deep dark smoke rising up the stairwell. ");
console.log("You have to act, and fast.");

let readlineSync = require('readline-sync')
escapeMethod5 = ['ladder', 'stairs'],

index = readlineSync.keyInSelect(escapeMethod5, 'Should you take the stairs which only go up to C deck, or take try to climb the ladder which will take you straight up to A deck where the boats are?')


if (index == 0) {
  console.log("Sadly it seems in your urgency to get to the boat deck that your forgot that smoke rises, and as you climb the ladder higher, the denser the smoke gets. You lose conciousness before you get to A deck. ");
  console.log("Starting over..........")
  loseGame();
} else if (index == 1) {
  console.log("Good choice! Remember smoke rises so you can't be in the stairwell too long. You take the stairs and get out of that stairwell quickly");
}

}

scenarioSix()

function scenarioSix () {

console.log("----------------------------------------");
console.log("You've entered the main dinning hall from the kitchen, it's a large opulent room the runs half the length of the ship.");
console.log("At the other end of the hall is a grand staircase that leads to the upper decks B and A, where the life boats are.");
console.log("As you run towards the starcase the ship lurches to the side and debris blocked the door. ");
console.log("You think there is no way out... until you see a door to the side that is maked 'BOAT DECK', this is your chance!")
console.log("You get to the door and see that their is a security passcode with the hint:'Half of SS New York length.'");
console.log("You remember reading that the SS New York was 882 feet long.")
console.log("You get ONE chance to enter the right code. What should you type in on the keypad?")

//Question goes here

let readlineSync = require('readline-sync'),
passcode = [289, 441, 442, 300, 441],

index = readlineSync.keyInSelect(passcode, "Half of SS New York length")

if (index == 1) {
  console.log('You got it! The door opened, giving you a passage way to the boat deck!')
} else  {
 console.log("Wrong! The keypad locked and you can't proceed any further!")
 loseGame();
}

}

scenarioSeven()

function scenarioSeven () {

console.log("----------------------------------------");
console.log("You are on the boat deck! The ship is abandoned except for you.")
console.log("Most the lifeboats are lowered and dot the ocean. They are too far for you to swim to.")
console.log("There is are remaining boats still hanging from it's davits that you can try to lower.")
console.log("But the ship is at a list (tilt) to port(left) of more than 45 degress.")
console.log("Which boat should you try to lower?")

let readlineSync = require('readline-sync'),
boatSide = ['port', 'starboard'],

index = readlineSync.keyInSelect(boatSide, "Which side should you go to catch a boat?")

if (index == 1) {
  console.log("You can't take the starboard boat due to the list to port, the boat smashes against the hull to SS New York, along with your chances of escaping the ship.")
  loseGame();
} else  {
 console.log("Good choice!!! The ship is listing, but allows for a clear passage to lower the boat past the hull, let's get to lowering this boat!")
}

}

scenarioEight() 

function scenarioEight () {

console.log("----------------------------------------");
console.log("The boat swings out and starts to lower")
console.log("You jump into the boat and ride down slowly until you feel the boat hit the water. ")
console.log("You try to unhook the davits only to see they are passcode protected (WHO DESIGNED THIS BOAT?)")
console.log("The hint says 'length of French Ocean liner Normandie'") //Hint: The Normandie was 1,037 feet long
console.log("Select the right code")


let readlineSync = require('readline-sync'),
davitCode = [882, 560, 1037, 447],

index = readlineSync.keyInSelect(davitCode, "Enter the length of SS Normandie")

if (index == 2) {
  console.log('Great job! The davits unhooked and your boat drifts away from the SS New York, which soon after, capsizes and goes under the sea')
} else  {
 console.log("Wrong! The davits don't unhook and when the SS New York makes it's final plunge, so do you.")
 loseGame();
}


}

scenarioNine()

function scenarioNine() {

console.log("----------------------------------------");
console.log('You have been at sea for almost 4 days.')
console.log('You are starving and extremly parched.') 
console.log("They're aren't many provision on the lifeboat.")
console.log('You have some old mouldy crackers and a canteen of water, which should you select? ')


let readlineSync = require('readline-sync'),
snack = ['crackers', 'water'],

index = readlineSync.keyInSelect(snack, 'Should you select the crackers or the water?')

if (index == 0) {
  console.log("Bad choice! A human can surive without water for only about 3 days. You were SO close!");
  loseGame();}
else  if (index == 1) {
  console.log("Good job! You can go more than a week without food, but not more than 3 days or so without water. You drink from the canteen and feel a new burst of energy. You can do this!!!");
}

}


salvation()

function salvation () {

console.log("----------------------------------------");
console.log('You have been floating for several hours since you drank from the canteen.')
console.log('You drift in and out of consiousness, losing hope that you will be saved.')
console.log('You hear something.')
console.log('It sounds like a ship!')
console.log('You search franticly around the lifeboat, and find a whistle and a flair')
console.log("You hear the ship's horn going further, you have to act NOW!")
console.log('Do you use the whistle or the flair? Hurry!')

let readlineSync = require('readline-sync'),
snack = ['whistle', 'flair'],

index = readlineSync.keyInSelect(snack, 'Should you select the crackers or the water?')

if (index == 0) {
  console.log("NO!!! The whistle's sound can't carry far enough and the ship can't hear you, the sound of the ships horn fades... futher and futher. You drift endlessly, never to be saved.....");
  loseGame()
} else  if (index == 1) {
  console.log("You fire the flair into the sky before collapsing out of exhaustion. You hear the ship's horn getting louder and you open you're weary eyes to see a large shape moving towards you.....");
winGame();
}
}

//Calling the functions
startGame()
play()

