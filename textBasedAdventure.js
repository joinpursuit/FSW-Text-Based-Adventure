"use strict"; // prevents unintentional declaration of global const variables
const readline = require('readline-sync')

// let nameInput = readline1.question("Enter your name: ")

// console.log(`Hello ${nameInput}!  Welcome to my game.`)

/////////////////////// Variables ////////////////////////////////
let path;
// let adjective; /////////////////////////
let verb;
let adverb;
let number;
// let bodyPart1; ///////////////////////////////
let bodyPart2;
// let exclamation; ////////////////////////////
///////////////////////// Greeting //////////////////////////////////////

let name = readline.question("Hi! What's your name?\n");
console.log(`Thank you for coming ${name}.\n`);
readline.keyInPause();

console.log(
  `You will be one of the first to test out Wacky Mad Lib VR Adventure.`
);
console.log(
  "At the end, you will receive a personalized postcard for participating in the trial run.\n"
);

///////////////////////////////  Game Loop ///////////////////////////////////////

const gameLoop = () => {
  console.log(`\nYou put on the V/R goggles and earbuds. Instantly, you are standing in the woods.`);
  console.log(`You hear Maggie in your ear, "Hey ${name}, can you hear me ok?"`);
  console.log("You nod slowly, in shocked at how real everything looks.");
  readline.keyInPause();
  if (readline.keyInYNStrict(`\nShe ask you again, "Hey ${name}, can you hear me ok?’ You answer."`)) {
    console.log(`\n"Great!", Maggie responds.`);
  } else {
    console.log(`"So how come you’re answering me? Ha, Ha, Ha, Just kidding", she says jokingly.`);
    readline.keyInPause();
  }
  console.log(`\nShe continues, "Throughout your adventure things will appear that will cause you to make decisions."`);
  console.log(`These events will personalize your adventure.`);
  readline.keyInPause();
  console.log(`\nLook ahead, you should see a path. Follow it and your adventure begins. I will be with you all the way. Hope you enjoy.`);
  readline.keyInPause();
  console.log(`\nYou see THREE paths in front of you. To mark each path, there is a wooden sign shaped as an arrow with an engraving.`);
  console.log(`The one on the left is marked cat, the one in the middle dog and the one on the left bird.`);
  path = readline.question(`Which do you choose?\n`, {limit: ["cat", "dog", "bird"]});
  console.log(`\nApprehensive at the idea, you choose the path with the sign marked ${path}.`);
  console.log(`You think to yourself, this V/R experience would be the best time to get over your fears of ${path}s.`);
  console.log(`\nHeistately, you start walking along the path. After sometime, You hear rustling in the bushes around you.`);
  verb = readline.question(`What action do you take? enter a verb:\n`);




// const woodenHouse = () => {

console.log(`\nYou ${verb}, then you see a small wooden house a short distance away. You approach the front door.`)
let woodenHouse = readline.question(`Do you knock? Try the handle and go in? or go around the back?\n`, {limit:[`knock`, `go in`, `go around back`]})
    if(woodenHouse === "knock") {
        console.log(`No one answers\n`)
        woodenHouse = readline.question(`Do you try the handle and go in? or go around the back?\n`, {limit:[`go in`, `go around back`]})   
    }
    if(woodenHouse === `go in`) {
        console.log(`\nYou see a/an ...`)
        let adjective = readline.question(`enter an adjective\n`)
        console.log(`\nYou see a/an ${adjective} old man at a large black pot stirring something with a large wooden spoon.`)
        console.log(`He turns to you and says,`)
        let exclamation = readline.question("enter an exclamation\n")
        console.log(`\n${exclamation}! "You're just in time for dinner. Have a seat."`) 
        let houseOut = readline.question(`\nDo you sit? Continue to stand? Or walk back out?\n`, {limit:["sit", "stand", "walk"]}) 
            if (houseOut === "sit" || houseOut === "stand") {
                console.log(`\nAs you ${houseOut} watching the man stir the pot, you see a/an`)
                let bodyPart1 = readline.question(`enter a singular bodyPart\n`) // entry ending in “s” console.log(“try another ${bodypart}`)
                console.log(`\nYou ask what's for dinner?`)
                console.log(`The ${adjective} old man replies, "Oh, it's my specialty."`)
                console.log(`As he continues, he is interrupted by the sound of a trap bell ringing. "I got another one! Damn ${path}s keep getting in my garden."`)
                console.log(`You start to ease your way out the house. And close the door.`)
                readline.keyInPause();
            }
        } 
        
        console.log(`\nAs you try to quietly walk around the back. You trip over a`)
        bodyPart2 = readline.question(`enter a singular bodyPart\n`); // entry ending in “s” console.log(“try another ${bodypart}`)    
        console.log(`\nYour immediate reaction is to scream.`)
        console.log(`Instantly, you hear Maggie say, "Oh! You must have come across the snake pit."`)
        console.log(`"Don't worry. It's not real. Remember you’re in a V/R experience."`)
        console.log(`"We need to record all different emotions. You'll be fine. Just walk past it."\n`)
        readline.keyInPause();

        console.log(`\nYou reply to Maggie,`)
        let end = readline.question(`"I would like to end the adventure now?"\n 
                         OR           
                        \n"You’re right. This is only V/R," you walk past the ${bodyPart2} and continue.\n`, {limit:[`end now`, `continue`]})
        if (end === `end now`) {
            console.log(`\nYou hear Maggie repeat the same message, but this time it skips and you realize it’s a recording.\n`)
            readline.keyInPause();
        }

        console.log(`\nYou see a rabbit`)
        adverb = readline.question(`enter an adverb (word usually ending with "ly")\n`)
        console.log(`\n${adverb} the rabbit hops down the path.`)
        console.log(`Curious. You follow it. The rabbit starts moving faster and you lose sight of it.\n`)
        readline.keyInPause();
        //     const diceGame = () => {
                console.log(`The path leads to pavement. You see a couple of guys sitting on milk cartons by a basketball court playing dice.`)
            
            if (readline.keyInYNStrict(`Do you join?`)) {
                number = readline.question(`press enter to roll.\n`, {defaultInput: Math.ceil(Math.random() * 12)})
                console.log(`You roll ${number}`)
                readline.keyInPause();
                console.log(`\n"We're playing two out of three. Roll again.", one of the guys mentions.`)
                readline.keyInPause();
                console.log(`\nAs you pick you the dice you hear a loud bang! The guys deburst.`)
                console.log(`Frustrated, you yell out to Maggie.`)
                readline.keyInPause();
                console.log(`\n"What does any of this have to do with ${path}s?"`)
                console.log(`She responds, "Just relax. You’re doing great! The adventure is almost over"\n`)
                readline.keyInPause();
            } 
                
        console.log(`You keep walking and you see the sign for Mazey Mad Libs V/R Experience.`)
        console.log(`You feel relieved and say, "I’m glad this is over. I’ve had enough excitement for one day."\n`)
        readline.keyInPause();
        console.log(`You reach in your bag, shifting things around to make room for the V/R gear.`)
        console.log(`You feel a piece of paper that you don’t recall being there before.`)
        readline.keyInPause();
        console.log(`\nYou take it out of your bag. It’s an old fashioned postcard with a stamp posted mark ‘February 2nd 2020`)
        console.log(`You read it out loud.\n`)
        readline.keyInPause();
        `\n${choosenPath()}\n`///////////////////////////////////////////////////////////////////////////////////////////////////
        console.log(`Completely puzzled you continue on as you reach the same spot you first meet Maggie.`)
        console.log(`There she is standing with a smile and says.`)
    
        startGame()
    }


    ///////////////////////// Mad Libs ////////////////////////////////////

const catMadLibs = () => {
    console.log(
      `The ${adjective} debate remains: Which pet is better, a cat or a dog?`
    );
    console.log(
      `Here are some purr-fect reasons why cats make ${adjective} pets:`
    );
    console.log(
      `Cats come and ${verb} as they please, exploring the neighbor's noun, climbling tall pluralnoun, or basking in the midday noun.`
    );
    console.log(`Cats are mysterious.`);
    // console.log(`Take one look into a cat's diamond-shaped ${bodyPartPlural}, and you're sure it's reading your noun.`)
    console.log(`Cats are known for their ${adjective} cleanliness.`);
    // console.log(`They wash themselves by licking their fur with their scratchy ${bodyPart}.`)
    // console.log(`Cats purr. It's truly ${adjective} sound that can even win the ${bodyPart} of a non-cat lover.`)
    console.log(
      `Finally, a cat is reputed to have ${number} lives, which makes it the cat's meow!`
    );
  };
  
  const dogMadLibs = () => {
    console.log(
      `Here are few ${adjective} reasons why dogs are considered man's noun:`
    );
    console.log(`Dogs are ${adjective} companions. They love to play.`);
    // console.log(`You can throw a rubber noun and a dog will ${adverb} chase it and carry it back to you in its ${bodyPart} at least ${number} times.`)
    console.log(`Dogs can keep your noun safe.`);
    console.log(
      `Their ${adjective} sense of hearing ${adjective} sense of smell justify the term watchdog.`
    );
    console.log(`There are more than ${number} breeds of dogs.`);
    console.log(
      `You can pick a/an ${adjective} Chihuahua or a/an ${adjective} Dane, and each will have its own ${adjective} personality.`
    );
    console.log(`You can't get a more loyal noun than a dog.`);
    console.log(
      `Just rub a dog's noun and you will have a/an noun for life.`
    );
    console.log(
      `And the good news - a dog's bark is usually worse than its noun!`
    );
  };
  
  const aussieMadLibs = () => {
    console.log(
      `Australia, also known as the noun Down Under, is famous for its ${adjective} wildlife.`
    );
    console.log(
      `The most famous animal is the kangaroo, which carries its baby in a/an noun on its belly`
    );
    // console.log(`and travels by hopping on its poweful hind ${bodyPartPlural}.`)
    console.log(`The koala is another popular Australian noun.`);
    console.log(
      `This furry, pluralnoun creature loves to eat leaves from eucalyptus pluralnoun.`
    );
    console.log(
      `If you are a bird-watcher, emu will knock your pluralnoun off.`
    );
    console.log(
      `It is a bird that has no pluralnoun and cannot fly, but it can run faster than a speeding noun.`
    );
    console.log(
      `Perhaps the strangest of all Australian pluralnoun is the platypus.`
    );
    console.log(
      `It has a bill that resembles a duck's noun and the body of a/an noun.`
    );
    console.log(
      `It is one of only two mammals that lay pluralnoun instead of giving birth to their young.`
    );
    console.log(
      `If you are a nature lover, you must put exotic and ${adjective} Australia on your places-to-go list!`
    );
  };
  
  
  
  //////////////////////// Function Declarations /////////////////////////
  
  const choosenPath = () => {
      console.log(`${adjective} ${bodyPart1} ${exclamation}`)
      console.log(`${path}, ${verb}, ${adverb}, ${number}, ${bodyPart2}, ${name}`)
    if (path === "cat") {
      console.log(catMadLibs());
    } else if (path === "dog") {
      console.log(dogMadLibs());
    } else {
      console.log(aussieMadLibs());
    }
  };
           
//////////////////////// Quit Game /////////////////////////////////////

const quitGame = () => {
  console.log(`Okay, see ya!`);
  process.exit();
};

//////////////////////////// Start Game ////////////////////////////////

const startGame = () => {
  if (readline.keyInYNStrict("Ready to start your adventure?")) {
    console.log(
      "Great! My name is Maggie and I will be assisting you, during your adventure.\n"
    );
    console.log(
      `In your bag, you’ll find a pair of V/R goggles and earbuds. Please, put them on now.`
    );
    readline.keyInPause();
    gameLoop();
  } else {
    quitGame();
  }
};
startGame();
