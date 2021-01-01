"use strict"; // prevents unintentional declaration of global const variables
const readline = require("readline-sync");

// let nameInput = readline1.question("Enter your name: ")

// console.log(`Hello ${nameInput}!  Welcome to my game.`)

//////////////////////// Arrays ////////////////////////

let paths = ["cat", "dog", "kangaroo","bird", "lion", "frog"]
let verbs = ["climb", "hunt", "run", "jump", "dig", "hide", "fly", "soar", "walk"]
let bodyParts = ["leg", "wing", "pouch", "ear", "eye", "arm", "toe", "finger", "lip"]

/////////////////////// Variables ////////////////////////////////
let path;
let adjective = "testing3"; /////////////////////////
let verb;
let adverb;
let number;
let bodyPart1 = "testing1"; ///////////////////////////////
let bodyPart;
let exclamation = "testing2"; ////////////////////////////

//////////////////////// Functions //////////////////////////////

let threeChoices = []
// console.log(`This is verbs before function ${verbs}`)
const randomArray = (array) => {
    for(let i = 0; i < 3; i++) {
        let indexRandom = Math.round(Math.random() * array.length - 1)
        // console.log(`This indexRandom in the function ${indexRandom}`)
        threeChoices.push(array.splice(indexRandom,1))  
    }
}
// randomArray(verbs)
// console.log(`This is verbs after function ${verbs}`)
// console.log(threeChoices)

// console.log(readline.keyInSelect(threeChoices,`Which do you choose?\n`, {cancel : `choose for me`}));

///////////////////////// Greeting //////////////////////////////////////

let name = readline.question("Hi! What's your name?\n");
console.log(`Thank you for coming ${name}.\n`);
readline.keyInPause();
console.log(`You will be one of the first to test out Wacky Mad Lib VR Adventure.\nAt the end, you will receive a personalized postcard for participating in the trial run.\n`);

///////////////////////////////  Game Loop ///////////////////////////////////////

const gameLoop = () => {
  console.log(`\nYou put on the V/R goggles and earbuds. Instantly, you are standing in the woods.\nYou hear Maggie in your ear, "Hey ${name}, can you hear me ok?"\nYou nod slowly, in shocked at how real everything looks.`);
  readline.keyInPause();

  if (readline.keyInYNStrict(`\nShe ask you again, "Hey ${name}, can you hear me ok?’ You answer."`)) { // ternary
    console.log(`\n"Great!", Maggie responds.`);
  } else {
    console.log(`"So how come you’re answering me? Ha, Ha, Ha, Just kidding", she says jokingly.`);
    readline.keyInPause();
  }

  console.log(`\nShe continues, "Throughout your adventure things will appear\nthat will cause you to make decisions."\nThese events will personalize your adventure.`);
  readline.keyInPause();
  console.log(`\nLook ahead, you should see a path.\nFollow it and your adventure begins.\nI will be with you all the way. Hope you enjoy.`);
  readline.keyInPause();
  console.log(`\nYou see THREE paths in front of you.\nTo mark each path, there is a wooden sign shaped as an arrow with an engraving.\nThe one on the left is marked cat,\nthe one in the middle dog and the one on the left bird.`);
  randomArray(paths)
  path = readline.keyInSelect(threeChoices,`Which do you choose?\n`, {cancel : `choose for me`});
  if (path === -1) {
    path = paths[Math.round(Math.random() * paths.length - 1)]
    // console.log(path)
    console.log(`\nApprehensive at the idea, you choose the path with the sign marked ${path}.\nYou think to yourself, this V/R experience would be the best time to get over your fears of ${paths[path]}s.\nHeistately, you start walking along the path. After sometime, You hear rustling in the bushes around you.`);
  } else {console.log(`\nApprehensive at the idea, you choose the path with the sign marked ${paths[path]}.\nYou think to yourself, this V/R experience would be the best time to get over your fears of ${paths[path]}s.\nHeistately, you start walking along the path. After sometime, You hear rustling in the bushes around you.`);
}  
  verb = readline.question(`What action do you take? enter a verb:\n`);
  // const woodenHouse = () => {
  console.log(`\nYou ${verb}, then you see a small wooden house a short distance away. You approach the front door.`);
  let woodenHouse = readline.question(`Do you knock? Try the handle and go in? or go around the back?\n`,{limit: [`knock`, `go in`, `go around back`] });

  if (woodenHouse === "knock") {
    console.log(`No one answers\n`);
    woodenHouse = readline.question(  `Do you try the handle and go in? or go around the back?\n`,{limit:[`go in`, `go around back`]});
  }
  console.log(`${adjective} ${bodyPart1} ${exclamation}`);

  if (woodenHouse === `go in`) {
    console.log(`\nYou see a/an ...`);
    adjective = readline.question(`enter an adjective\n`); //???????????????WHY AREN'T YOU UPDATING???????????????????//
    console.log(`\nYou see a/an ${adjective} old man at a large black pot stirring something with a large wooden spoon.\nHe turns to you and says,`);
    exclamation = readline.question("enter an exclamation\n"); //???????????????WHY AREN'T YOU UPDATING???????????????????//
    console.log(`\n${exclamation}! "You're just in time for dinner. Have a seat."`);
    let houseOut = readline.question(  `\nDo you sit? Continue to stand? Or walk back out?\n`, {limit: ["sit", "stand", "walk"] });

    if (houseOut === "sit" || houseOut === "stand") {
      console.log(`\nAs you ${houseOut} watching the man stir the pot, you see a/an`);
      bodyPart1 = readline.question(`enter a singular body part\n`); //???????????????WHY AREN'T YOU UPDATING???????????????????//
      console.log(`\nYou ask what's for dinner?\nThe ${adjective} old man replies, "Oh, it's my specialty."\nAs he continues, he is interrupted by the sound of a trap bell ringing. "I got another one! Damn ${paths[path]}s keep getting in my garden."\nYou start to ease your way out the house. And close the door.`);
    readline.keyInPause();
    }
  }
  
  console.log(`${adjective} ${bodyPart1} ${exclamation}`);

  console.log(`\nAs you try to quietly walk around the back. You trip over a/an`);
  bodyPart = readline.question(`enter a singular body part\n`);
  console.log(`\nYour immediate reaction is to scream.\nInstantly, you hear Maggie say, "Oh! You must have come across the snake pit."\n"Don't worry. It's not real. Remember you’re in a V/R experience."\n"We need to record all different emotions. You'll be fine. Just walk past it."\n`);
  readline.keyInPause();
  console.log(`\nYou reply to Maggie,`);
  let end = readline.question(`"I would like to end the adventure now?" OR\n"You’re right. This is only V/R," you walk past the ${bodyPart} and continue.\n`,{limit: [`end now`, `continue`] });

  if (end === `end now`) {
    console.log(  `\nYou hear Maggie repeat the same message, but this time it skips and you realize it’s a recording.\n`);
    readline.keyInPause();
  }

  console.log(`\nYou see a rabbit`);
  adverb = readline.question(`enter a word ending with "ly")\n`);
  console.log(`\nThe rabbit ${adverb} hops down the path.\nCurious. You follow it. The rabbit starts moving faster and you lose sight of it.\n`);
  readline.keyInPause();
  //     const diceGame = () => {
  console.log(`The path leads to pavement. You see a couple of guys sitting on milk cartons by a basketball court playing dice.`);

  if (readline.keyInYNStrict(`Do you join?`)) {
    number = readline.question(`press enter to roll.\n`, {defaultInput: Math.floor(Math.random() * 12) + 2,});
    console.log(`You roll ${number}`);
    readline.keyInPause();
    console.log(  `\n"We're playing two out of three. Roll again.", one of the guys mentions.`);
    readline.keyInPause();
    console.log(  `\nAs you pick you the dice you hear a loud bang! The guys deburst.\nFrustrated, you yell out to Maggie.`);
    readline.keyInPause();
    console.log(  `\n"What does any of this have to do with ${paths[path]}s?"\nShe responds, "Just relax. You’re doing great! The adventure is almost over"\n`);
    readline.keyInPause();
  }

  console.log(`You keep walking and you see the sign for Mazey Mad Libs V/R Experience.\nYou feel relieved and say, "I’m glad this is over. I’ve had enough excitement for one day."\n`);
  readline.keyInPause();
  console.log(`You reach in your bag, shifting things around to make room for the V/R gear.\nYou feel a piece of paper that you don’t recall being there before.`);
  readline.keyInPause();
  console.log(`\nYou take it out of your bag. It’s an old fashioned postcard with a stamp post marked ‘February 2nd 2020\nYou read it out loud.\n`);
  readline.keyInPause();
  choosenPath();
  console.log(`Completely puzzled you continue on as you reach the same spot you first meet Maggie.\nThere she is standing with a smile and says.`);

  startGame();
};

///////////////////////// Mad Libs ////////////////////////////////////

const catMadLibs = () => {
  console.log(`Here are some purr-fect reasons why cats make wonderful pets:\nCats come and ${verb} as they please, exploring the neighbor's yard, climbling tall trees, or basking in the midday sun.\nCats are mysterious.\nTake one look into a cat's diamond-shaped eyes, and you're sure it's reading your thoughts.\nCats are known for their extreme cleanliness.\nThey wash themselves by licking their fur with their scratchy ${bodyPart} .\nCats purr. It's truly soothing sound that can even win the heart of a non-cat lover.\nFinally, a cat is reputed to have ${number} lives, which makes it the cat's meow!`);
};

const dogMadLibs = () => {
  console.log(`Here are few reasons why dogs are considered man's best friend:\nDogs are wonderful companions. They love to play.\nYou can ${verb} a rubber ball and a dog will ${adverb} chase it and carry it back to you in its mouth at least ${number} times.\nDogs can keep your house safe.\nTheir keen sense of hearing and sense of smell justify the term watchdog.\nThere are more than a hundred breeds of dogs and each will have its own personality.\nYou can't get a more loyal pet than a dog.\nJust rub a dog's ${bodyPart} and you will have a/an noun for life.\nAnd the good news - a dog's bark is usually worse than its bit!`);
};

const aussieMadLibs = () => {
  console.log(`Australia, also known as the land Down Under, is famous for its unique wildlife.\nThe most famous animal is the kangaroo, which carries its baby in a/an pouch on its belly\nThe koala is another popular Australian animal.\nThis furry, creature loves to eat leaves from eucalyptus treesn.\nIf you are a bird-watcher, emu will ${verb} your socks off.\nIt is a bird that cannot fly, but it can run fast.\nPerhaps the strangest of all Australian animals is the platypus.\nIt has a bill that resembles a duck's bill.\nIt is one of only two mammals that lay eggs instead of giving birth to their young.\nIf you are a nature lover, you must put this exotic land Australia as number ${number} on your places-to-go list!`);
};

//////////////////////// Function Declarations /////////////////////////

const choosenPath = () => {
  console.log(`${adjective} ${bodyPart1} ${exclamation}`);
  console.log(`${path}, ${verb}, ${adverb}, ${number}, ${bodyPart}, ${name}`);
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
    console.log(  `"Great! My name is Maggie and I will be assisting you, during your adventure."\nIn your bag, you’ll find a pair of V/R goggles and earbuds. Please, put them on now.`);
    readline.keyInPause();
    gameLoop();
  } else {
    quitGame();
  }
};

startGame();
