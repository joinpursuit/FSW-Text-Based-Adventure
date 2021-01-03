"use strict"; // prevents unintentional declaration of global const variables
const readline = require("readline-sync");

//////////////////////// Arrays ////////////////////////

let paths = ["cat", "dog", "kangaroo"];
let verbs = [
  "climb",
  "hunt",
  "run",
  "jump",
  "dig",
  "hide",
  "fly",
  "soar",
  "walk",
];
let bodyParts = [
  "leg",
  "wing",
  "pouch",
  "ear",
  "eye",
  "arm",
  "toe",
  "finger",
  "lip",
];

/////////////////////// Variables ////////////////////////////////
let randomNum = Math.round(Math.random());
let path;
let adjective = "testing3"; /////////////////////////
let verb;
let adverb;
let number;
let bodyPart1 = "testing1"; ///////////////////////////////
let bodyPart;
let exclamation = "testing2"; ////////////////////////////

//////////////////////// Functions //////////////////////////////

let threeChoices; // reset when function is called
const randomArray = (array) => {
  threeChoices = [];
  for (let i = 0; i < 3; i++) {
    let indexRandom = randomNum * array.length - 1;
    threeChoices.push(array.splice(indexRandom, 1));
  }
};

const roll = () => {
  return Math.floor(Math.random() * 12) + 2;
};

///////////////////////// Greeting/Instructions //////////////////////////////////////

let name = readline.question(
  `"Hi! What's your name?"
`,
  { limit: String, limitMessage: `STRANGER DANGER!!! STRANGER DANGER!!!` }
);

console.log(`
"Thank you for coming ${name}."
"My name is Maggie and I will be assisting you, during your adventure."`); // greeting

readline.keyInPause();
console.clear();

console.log(`
"You will be one of the first to test out Wacky Mad Lib VR Adventure.
At the end, you will receive a personalized postcard for participating in the trial run.
Throughout your adventure you will be confronted by different situations.
These events will personalize your experience".`); // instructions

readline.keyInPause();
console.clear();

///////////////////////////////  Game Loop ///////////////////////////////////////

const gameLoop = () => {
  console.log(`
You put on the V/R goggles and earbuds. Instantly, you are standing in the woods.
You hear Maggie in your ear, "Hey ${name}, can you hear me ok?"
You nod slowly, in shocked at how real everything looks.`);

  readline.keyInPause();
  console.clear();

  readline.keyInYNStrict(`
  She ask you again, "Hey ${name}, can you hear me ok?’ You answer."`)
    ? console.log(`
  "Great!", Maggie responds.`)
    : console.log(
        `"So how come you’re answering me? Ha, Ha, Ha, Just kidding", she says jokingly.`
      ); // decision 1 - user enters number

  readline.keyInPause();
  console.clear();

  console.log(`
  Look ahead, you should see a path.
  Follow it and your adventure begins.
  I will be with you all the way. Hope you enjoy.`);
  readline.keyInPause();
  console.clear();

  console.log(`
  You see THREE paths in front of you.
  To mark each path, there is a wooden sign shaped as an arrow with an engraving.
  The one on the left is marked ${paths[0]},
  the one in the middle ${paths[1]} and the one on the left ${paths[2]}.`);
  path = readline.keyInSelect(
    paths,
    `Choose one:
  `,
    { cancel: `choose for me` }
  ); // decision 2 - user enters number
  if (path === -1) {
    path = paths[randomNum * paths.length]; // undefined
    console.log(path);
    console.log(`
    Apprehensive at the idea, you choose the path with the sign marked ${path}.
    You think to yourself, this V/R experience would be the best time to get over your fears of ${path}s.
    Heistately, you start walking along the path. After sometime, You hear rustling in the bushes around you.`);
  } else {
    console.log(`
  Apprehensive at the idea, you choose the path with the sign marked ${paths[path]}.
  You think to yourself, this V/R experience would be the best time to get over your fears of ${paths[path]}s.
  Heistately, you start walking along the path. After sometime, You hear rustling in the bushes around you.`);
  }
  randomArray(verbs);
  verb = readline.keyInSelect(
    threeChoices,
    `Which do you choose?
  `,
    { cancel: `choose for me` }
  ); // decision 3 - user enters number
  if (verb === -1) {
    verb = threeChoices[randomNum * threeChoices.length]; // undefined
    console.log(`
    You ${verb}, then you see a small wooden house a short distance away. You approach the front door.`);
  } else {
    console.log(`
    You ${threeChoices[verb]}, then you see a small wooden house a short distance away. You approach the front door.`);
  }
  //////////////// woodenHouse /////////////////////////////////
  let woodenHouse = readline.question(
    `Do you knock? Try the handle and go in? or go around the back?
  `,
    { limit: [`knock`, `go in`, `go around back`] }
  ); // decision 4 - user enters string

  if (woodenHouse === "knock") {
    console.log(`No one answers
    `);
    woodenHouse = readline.question(
      `Do you try the handle and go in? or go around the back?
    `,
      { limit: [`go in`, `go around back`] }
    ); // decision 5 - user enters string
  }

  if (woodenHouse === `go in`) {
    console.log(`
    You see a/an ...`);
    adjective = readline.question(
      `enter an adjective
    `,
      { limit: String, limitMessage: "Please try again" }
    ); // decision 6 - user enters string //???????????????WHY AREN'T YOU UPDATING???????????????????//
    console.log(`
    You see a/an ${adjective} old man at a large black pot stirring something with a large wooden spoon.
    He turns to you and says,`);
    exclamation = readline.question(`"enter an exclamation"
    , {limit: String, limitMessage: "Please try again"}`); // decision 7 - user enters string //???????????????WHY AREN'T YOU UPDATING???????????????????//
    console.log(`
    ${exclamation}! "You're just in time for dinner. Have a seat."`);
    let houseOut = readline.question(
      `
    Do you sit? Continue to stand? Or walk back out?
    `,
      { limit: ["sit", "stand", "walk"] }
    ); // decision 8 - user enters string

    if (houseOut === "sit" || houseOut === "stand") {
      console.log(`
      As you ${houseOut} watching the man stir the pot, you see a/an`);
      bodyPart1 = readline.question(
        `enter a singular body part
      `,
        { limit: String, limitMessage: "Please try again" }
      ); // decision 9 - user enters string //???????????????WHY AREN'T YOU UPDATING???????????????????//
      console.log(`
      You ask what's for dinner?
      The ${adjective} old man replies, "Oh, it's my specialty."
      As he continues, he is interrupted by the sound of a trap bell ringing. "I got another one! Damn ${path}s keep getting in my garden."
      You start to ease your way out the house. And close the door.`);

      readline.keyInPause();
      console.clear();
    }
  }

  console.log(`
  As you try to quietly walk around the back. You trip over a/an`);
  bodyPart = readline.question(
    `enter a singular body part
  `,
    { limit: String, limitMessage: "Please try again" }
  ); // decision 10 - user enters string
  console.log(`
  Your immediate reaction is to scream.
  Instantly, you hear Maggie say, "Oh! You must have come across the snake pit."
  "Don't worry. It's not real. Remember you’re in a V/R experience."
  "We need to record all different emotions. You'll be fine. Just walk past it."
  `);

  readline.keyInPause();
  console.clear();

  console.log(`
  You reply to Maggie,`);
  let end = readline.question(
    `"I would like to end the adventure now?" OR
  "You’re right. This is only V/R," you walk past the ${bodyPart} and continue.
  `,
    { limit: [`end now`, `continue`] }
  ); // decision 11

  if (end === `end now`) {
    console.log(`
    You hear Maggie repeat the same message, but this time it skips and you realize it’s a recording.
    `);
  }

  readline.keyInPause();
  console.clear();

  console.log(`
  You see a rabbit`);
  adverb = readline.question(
    `enter a word ending with "ly")
  `,
    { limit: String, limitMessage: "Please try again" }
  ); // decision 12 - user enters string
  console.log(`
  The rabbit ${adverb} hops down the path.
  Curious. You follow it. The rabbit starts moving faster and you lose sight of it.
  `);

  readline.keyInPause();
  console.clear();

  ///////////////////////// diceGame ////////////////////
  console.log(
    `The path leads to pavement. You see a couple of guys sitting on milk cartons by a basketball court playing dice.`
  );

  // let number;
  // const roll = () => {
  //   return Math.floor(Math.random() * 12) + 2;
  // };

  if (readline.keyInYNStrict(`Do you join?`)) {
    for (let i = 0; i < 2; i++) {
      number = readline.question(`press enter to roll.`, {
        defaultInput: roll(),
      });
      console.clear();
      console.log(`You roll ${number}`);
    }
    console.log(`
    As you pick you the dice...`);
    readline.keyInPause();
    console.clear();
    console.log(`you hear a loud bang! The guys deburst.`);
    readline.keyInPause();
    console.clear();
    console.log(`
    Frustrated, you yell out to Maggie.`);
    readline.keyInPause();
    console.clear();

    console.log(`
    "What does any of this have to do with ${path}s?"
    She responds, "Just relax. You’re doing great! The adventure is almost over"`);
    readline.keyInPause();
    console.clear();
  } else {
    number = roll();
    console.log(`You walk pass the court`);
  }

  console.log(`
  As you continue walking, you see the sign for Mazey Mad Libs V/R Experience.
  You feel relieved and say, "I’m glad this is over. I’ve had enough excitement for one day."`);
  readline.keyInPause();
  console.clear();

  console.log(`
  You reach in your bag, shifting things around to make room for the V/R gear.
  You feel a piece of paper that you don’t recall being there before.`);
  readline.keyInPause();
  console.clear();

  console.log(`
  You take it out of your bag. It’s an old fashioned postcard with a stamp post marked ‘February 2nd 2020
  You read it out loud.`);
  readline.keyInPause();
  console.clear();

  choosenPath(); // undefined after
  console.log(`Completely puzzled you continue on as you reach the same spot you first meet Maggie.
  There she is standing with a smile and says.`);

  startGame();
};

///////////////////////// Mad Libs ////////////////////////////////////

const catMadLibs = () => {
  console.log(`
  Here are some purr-fect reasons why cats make wonderful pets:
  Cats come and ${verb} as they please, exploring the neighbor's yard, climbling tall trees, or basking in the midday sun.
  Cats are mysterious.
  Take one look into a cat's diamond-shaped eyes, and you're sure it's reading your thoughts.
  Cats are known for their extreme cleanliness.
  They wash themselves by licking their fur with their scratchy ${bodyPart} .
  Cats purr. It's ${adverb} a soothing sound that can even win the heart of a non-cat lover.
  Finally, a cat is reputed to have ${number} lives, which makes it the cat's meow!`);
};

const dogMadLibs = () => {
  console.log(`
  Here are few reasons why dogs are considered man's best friend:
  Dogs are wonderful companions. They love to play.
  You can ${verb} a rubber ball and a dog will ${adverb} chase it and carry it back to you in its mouth at least ${number} times.
  Dogs can keep your house safe.
  Their keen sense of hearing and sense of smell justify the term watchdog.
  There are more than a hundred breeds of dogs and each will have its own personality.
  You can't get a more loyal pet than a dog.
  Just rub a dog's ${bodyPart} and you will have a pal for life.
  And the good news - a dog's bark is usually worse than its bit!`);
};

const aussieMadLibs = () => {
  console.log(`
  Australia, also known as the land Down Under, is famous for its unique wildlife.
  The most famous animal is the kangaroo, which carries its baby in a/an ${bodyPart} on its belly
  The koala is another popular Australian animal.
  This furry, creature loves to eat leaves from eucalyptus trees.
  If you are a bird-watcher, emu will ${verb} your socks off.
  It is a bird that cannot fly, but it can run fast.
  Perhaps the strangest of all Australian animals is the platypus.
  It has a bill that resembles a duck's bill.
  It is one of only two mammals that lay eggs instead of giving birth to their young.
  If you are a nature lover, you must put this exotic land Australia as number ${number} on your places-to-go list!`);
};

//////////////////////// Function Declarations /////////////////////////

const choosenPath = () => {
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
  if (
    readline.keyInYNStrict(`
Ready to start your adventure?`)
  ) {
    console.log(`
"Great! In your bag, you’ll find a pair of V/R goggles and earbuds. Please, put them on now."`);
    readline.keyInPause();
    console.clear();

    gameLoop();
  } else {
    quitGame();
  }
};

startGame();
