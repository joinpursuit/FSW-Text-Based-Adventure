"use strict"; // prevents unintentional declaration of global const variables
const readline = require("readline-sync");
const chalk = require('chalk');

//////////////////////// Arrays ////////////////////////

let paths = ["cat", "dog", "kangaroo"];
let verbs = ["climb","hunt","run","jump","dig","hide","strut","kick","hop",];
let bodyParts = ["leg","foot","hand","ear","eye","arm","toe","finger","lip",];
let adjectives = ["remarkable", "strange", "replusive", "magnificent", "energetic", "outrageous", "annoying", "strange", "terrible"]
let adverbs = ["slowly", "rapidly", "angerly", "hastily", "cleverly", "lively", "briskly", "effortlessly", "akwardly",]
let exclamations = ["Yikes", "Wow", "Yes", "Great", "Wonderful", "Awsome", "Bravo", "Kaboom", "Fantastic",]

/////////////////////// Variables ////////////////////////////////
let randomNum = Math.floor(Math.random());
let path;
let adjective = "testing3"; /////////////////////////
let verb;
let adverb;
let number;
let bodyPart1 = "testing1"; ///////////////////////////////
let bodyPart;
let exclamation = "testing2"; ////////////////////////////
let threeChoices; // reset when function is called

//////////////////////// Functions //////////////////////////////

const quitGame = () => {
  console.log(chalk.blue(`Okay, see ya!`));
  process.exit();
};

const randomizedArray = (array) => {
  threeChoices = [];
  for (let i = 0; i < 3; i++) {
    let indexRandom = randomNum * array.length - 1;
    threeChoices.push(array.splice(indexRandom, 1));
  }
};

const roll = () => {
  return Math.floor(Math.random() * 12 + 2);
};

const choosenPath = () => {
  if (path === "cat") {
    catMadLibs();
  } else if (path === "dog") {
    dogMadLibs();
  } else {
    aussieMadLibs();
  }
};

///////////////////////// Mad Libs Functions ////////////////////////////

const catMadLibs = () => {
  console.log(`
  ${exclamation} Here are some purr-fect reasons why cats make wonderful pets:
  Cats come and ${verb} as they please, exploring the neighbor's yard, climbling tall trees, or basking in the midday sun.
  Cats are mysterious.
  Take one look into a cat's diamond-shaped eyes, and you're sure it's reading your thoughts.
  Cats are known for their adjective cleanliness.
  They wash themselves by licking their fur with their scratchy ${bodyPart} .
  Cats purr. It's ${adverb} a soothing sound that can even win the heart of a non-cat lover.
  Finally, a cat is reputed to have ${number} lives, which makes it the cat's meow!`);
};

const dogMadLibs = () => {
  console.log(`
  ${exclamation} Here are few reasons why dogs are considered man's best friend:
  Dogs are adjective companions. They love to play.
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
  The most ${exclamation} animal is the kangaroo, which carries its baby in a/an ${bodyPart} on its belly
  The koala is another popular Australian animal.
  This furry, creature loves to eat leaves from eucalyptus trees.
  If you are a bird-watcher, emu will ${verb} your socks off.
  It is a bird that cannot fly, but it can run fast.
  Perhaps the adjective of all Australian animals is the platypus.
  It has a bill that resembles a duck's bill.
  It is one of only two mammals that lay eggs instead of giving birth to their young.
  If you are a nature lover, you must put this exotic land Australia as number ${number} on your places-to-go list!`);
};

///////////////////////// Greeting/Instructions //////////////////////////////////////

let name = readline.question(chalk.blue(`Hi! What's your name?\n`),{
  limit: String, limitMessage: chalk.red(`STRANGER DANGER!!! STRANGER DANGER!!!\n`)});

console.clear();

console.log(chalk.blue(`
Thank you for coming ` + chalk.green(`${name}`) + `.
My name is Maggie and I will be assisting you, during your adventure.`)); // greeting

readline.keyInPause();
console.clear();

console.log(chalk.blue(`
You will be one of the first to test out Wacky Mad Lib VR Adventure.
At the end, you will receive a personalized postcard for participating in the trial run.
Throughout your adventure you will be confronted by different situations.
These events will personalize your experience.`)); // instructions

readline.keyInPause();
console.clear();

///////////////////////////////  Game Loop ///////////////////////////////////////

const gameLoop = () => {

console.log(`
You put on the V/R goggles and earbuds.
Instantly, you are standing in the woods.
You hear Maggie in your ear,\n` + chalk.blue(`
Hey `+ (chalk.green(`${name}`))) + chalk.blue(`, can you hear me ok?
You nod slowly, in shocked at how real everything looks.`));

  readline.keyInPause();
  console.clear();

  if (readline.keyInYNStrict(`She ask you again,\n` + chalk.blue(`Hey `+ (chalk.green(`${name}`))) + chalk.blue(`, can you hear me ok?`))) {
    console.clear()
    console.log(chalk.blue(`\nGreat!`) + `, Maggie responds.`)
  } else {
    console.clear()
    console.log(chalk.blue(`So how come you’re answering me? He, He, He, Just kidding", she snickers.`));
  }

  readline.keyInPause();
  console.clear();

  console.log(chalk.blue(`Look ahead, you should see a path.\nFollow it and your adventure begins.\nI will be with you all the way.\nHope you enjoy.`));
  readline.keyInPause();
  console.clear();

  console.log(`You see THREE paths in front of you.\nTo mark each path, there is a wooden sign shaped as an arrow with an engraving.\nThe one on the left is marked ${paths[0]},\nthe one in the middle ${paths[1]} and the one on the left ${paths[2]}.`);
  path = readline.keyInSelect(paths,`Choose one:`,{cancel: `choose for me`});
  console.clear();

  if (path === -1) {
    path = paths[Math.floor(Math.random() * paths.length)];
    console.log(`Apprehensive at the idea, you choose the path with the sign marked ` + chalk.green(`${path}`) + `.\nYou think to yourself, this V/R experience would be the best time to get over your fears of ` + chalk.green(`${path}s`) + `.\nHeistately, you start walking along the path. After sometime, You hear rustling in the bushes around you.`);
  } else {
    console.log(`Apprehensive at the idea, you choose the path with the sign marked ` + chalk.green(`${paths[path]}`) + `.\nYou think to yourself, this V/R experience would be the best time to get over your fears of ` + chalk.green(`${path[path]}s`) + ` .\nHeistately, you start walking along the path. After sometime, You hear rustling in the bushes around you.`);
  }
  
  randomizedArray(verbs);
  verb = readline.keyInSelect(threeChoices,`Which do you choose?`,{cancel: `choose for me`});

  console.clear();

  if (verb === -1) {
    verb = threeChoices[Math.floor(Math.random() * threeChoices.length)]; // undefined
    console.log(`You ` + chalk.green(`${verb}`) + `, then you see a small wooden house a short distance away.\nYou approach the front door.`);
  } else {
    console.log(`You ` + chalk.green(`${threeChoices[verb]}`) + `, then you see a small wooden house a short distance away. You approach the front door.`);
  }
  //////////////// woodenHouse /////////////////////////////////
  let woodenHouse = readline.question(`Do you knock? Try the handle and go in? or go around the back?\n`, {
    limit: [`knock`, `go in`, `go around back`]
  });
  console.clear();

  if (woodenHouse === "knock") {
    console.clear()
    console.log(`No one answers`);
    woodenHouse = readline.question(`Do you try the handle and go in? or go around the back?\n`, {limit: [`go in`, `go around back`]});
  }

  console.clear()
  if (woodenHouse === `go in`) {
    console.log(`You see a/an ...`);
    ////////////////// Random threeChoices //////////////////
    //??WHY AREN'T YOU UPDATING???????NOT UPDATING IN MADLIB()????????????//
    randomizedArray(adjectives);
    adjective = readline.keyInSelect(threeChoices, `choose an adjective`,{cancel: `choose for me`});
    console.clear()

    if (adjective === -1) {
      adjective = threeChoices[Math.floor(Math.random() * threeChoices.length)];
      console.log(`You see a/an ` + chalk.green(`${adjective}`) + ` old man at a large black\npot stirring something with a large wooden spoon.\nHe turns to you and says,`);
    } else {
    console.log(`You see a/an ${threeChoices[adjective]} old man at a large black\npot stirring something with a large wooden spoon.\nHe turns to you and says,`);
  }
    
    exclamation = readline.question("enter an exclamation word\n", {limit: String, limitMessage: "Please try again"});
    console.clear();
    console.log(chalk.green(`${exclamation}!`) + chalk.cyan(` You're just in time for dinner. Have a seat.`));
    let houseOut = readline.question(`Do you sit? Continue to stand? Or walk back out?\n`, {limit: ["sit", "stand", "walk"]});
    console.clear();

    if (houseOut === "sit" || houseOut === "stand") {
      console.log(`As you ${houseOut} watching the ` + chalk.green(`${adjective}`) + ` old man stir the pot, you see a/an`);
      bodyPart1 = readline.question(`enter a singular body part\n`,{limit: String, limitMessage: `Please try again`});
      console.clear()
      
      console.log(`You ask what's for dinner?\nThe ` + chalk.green(`${adjective}`) + ` old man replies,\n`
      + chalk.cyan(`Oh!, You're in for a treat. I'm making my specialty.\n`)
      + `\nAs he continues, he is interrupted by the sound of a trap bell ringing.\n`
      + chalk.cyan(`I got another one! Darn `) + chalk.green(`${path}s`)
      + chalk.cyan(` keep getting in my garden.\n`) 
      + `You start to ease your way out the house. And close the door.`);

      readline.keyInPause();
      console.clear();
    }
  }

  console.log(`As you try to quietly walk around the back. You trip over a/an`);
  bodyPart = readline.question(`enter a singular body part\n`,{
    limit: String, limitMessage: "Please try again"
  });
  console.clear()
  
  console.log(`Your immediate reaction is to scream.\nInstantly, you hear Maggie say,\n`
  + chalk.blue(`Oh! You must have come across the snake pit.\nDon't worry. It's not real.\nRemember you’re in a V/R experience.\nWe need to record all different emotions. You'll be fine. Just walk past it.`));

  readline.keyInPause();
  console.clear();

  console.log(`You reply to Maggie,`);
  let end = readline.question(`I would like to end the adventure now?\n

                        or\n
  
  You’re right. This is only V/R," you walk past the`+ chalk.green(`${bodyPart} `)+ `and continue.\n`,{
    limit: [`end now`, `continue`]});
  console.clear();

  if (end === `end now`) {
    console.log(`You hear Maggie repeat the same message,\nbut this time it skips and you realize it’s a recording.`);
  }

  readline.keyInPause();
  console.clear();

  // console.log(`
  // You see a rabbit`);
  // randomizedArray(adverbs);verb = readline.keyInSelect(
  //     threeChoices,
  //     `Which do you choose?
  //   `,
  //     { cancel: `choose for me` }
  //   );
  //   if (adverb === - 1) {
  //     console.log(`
  //     The rabbit ${adverb} hops down the path.
  //     Curious. You follow it. The rabbit starts moving faster and you lose sight of it.
  //   `)} // decision 12 - user enters string
  // console.log(`
  // The rabbit ${threeChoices[adverb]} hops down the path.
  // Curious. You follow it. The rabbit starts moving faster and you lose sight of it.
  // `);


  console.log(`You see a rabbit`);
  adverb = readline.question(`enter an adverb (word usually ending with "ly")`,{
    limit: String, limitMessage: "Please try again"});
  console.log(`The rabbit` + chalk.green(`${adverb}`) + `hops down the path.\nCurious. You follow it.\nThe rabbit starts moving faster and you lose sight of it.`);

  readline.keyInPause();
  console.clear();

  ///////////////////////// diceGame ////////////////////
  console.log(`The path leads to pavement. You see a couple of guys sitting on milk cartons by a basketball court playing dice.`);
  if (readline.keyInYNStrict(`Do you join?`)) {
    for (let i = 0; i < 2; i++) {
      number = readline.question(`press enter to roll.`, {defaultInput: roll(),});
      console.clear();
      console.log(`You roll ${number}`);
    }

    console.log(`As you pick you the dice...`);
    readline.keyInPause();
    console.clear();

    console.log(`you hear a loud bang! The guys deburst.`);
    readline.keyInPause();
    console.clear();

    console.log(`Frustrated, you yell out to Maggie.`);
    readline.keyInPause();
    console.clear();

    console.log(`What does any of this have to do with ` + chalk.green(`${path}s`) + `?\nShe responds, ` + chalk.blue(`Just relax. You’re doing great! The adventure is almost over`));
    readline.keyInPause();
    console.clear();

  } else {
    number = roll();
    console.log(`You walk pass the court`);
  }

  console.log(`As you continue walking, you see the sign for Mazey Mad Libs V/R Experience.\nYou feel relieved and say, "I’m glad this is over. I’ve had enough excitement for one day."`);
  readline.keyInPause();
  console.clear();

  console.log(`You reach in your bag, shifting things around to make room for the V/R gear.\nYou feel a piece of paper that you don’t recall being there before.`);
  readline.keyInPause();
  console.clear();

  console.log(`You take it out of your bag.\nIt’s an old fashioned postcard with a stamp post marked "February 2nd 2020"\nYou read it out loud...`);
  readline.keyInPause();
  console.clear();

  choosenPath();
  readline.keyInPause();
  console.clear();

  console.log(`Completely puzzled you continue on as you reach the same spot you first meet Maggie.\nThere she is standing with a smile and says.`);

  readline.keyInPause();
  console.clear();
  startGame();
};

//////////////////////////// Start Game ////////////////////////////////

const startGame = () => {
  if (readline.keyInYNStrict(chalk.blue(`Ready to start your adventure?`))) {
    console.clear();
    console.log(chalk.blue(`Great!\nIn your bag, you’ll find a pair of V/R goggles and earbuds.\nPlease, put them on now.`));
    readline.keyInPause();
    console.clear();
    gameLoop();
  } else {
    quitGame();
  }
};
startGame();
