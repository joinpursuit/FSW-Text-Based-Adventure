"use strict"; // prevents unintentional declaration of global const variables
const readline = require("readline-sync");
const chalk = require("chalk");
const {paths, verbs, adjectives, adverbs, exclamations} = require("./exports.js");
/////////////////////// Variables ////////////////////////////////
let path = "";
let adjective = "";
let bodyPart = "";
let verb = "";
let adverb = "";
let exclamation = "";
let diceRoll = 0;
//////////////////////// Functions //////////////////////////////
const quitGame = () => {
    console.log(chalk.blue(`Okay, see ya!`));
    process.exit();
  };

//   console.log(quitGame());
  
  const randomizeArray = (array) => {
    const threeChoices = [];
    for (let i = 0; i < 3; i++) {
      let indexRandom = Math.floor(Math.random() * array.length);
      threeChoices.push(array.splice(indexRandom, 1));
    }
   return threeChoices
  };

//   console.log(randomizeArray(exclamations));
  
  const roll = () => {
    const die1 =  Math.floor(Math.random() * 6);
    const die2 =  Math.floor(Math.random() * 6);
    return diceRoll = die1 + die2;
  };
  
//   console.log(roll());

  ///////////////////////// Mad Libs Functions ////////////////////////////
const catMadLibs = () => {
    console.log(chalk.green(`${exclamation} `) + `Here are some purr-fect reasons why cats make wonderful pets: Cats come and ` + chalk.green(`${verb} `) + `as they please, exploring the neighbor's yard, climbling tall trees, or basking in the midday sun. Cats are mysterious. Take one look into a cat's diamond-shaped eyes, and you're sure it's reading your thoughts. Cats are known for their adjective cleanliness. They wash themselves by licking their fur with their scratchy ` + chalk.green(`${bodyPart} `) + `. Cats purr. It's ` + chalk.green(`${adverb} `) + `a soothing sound that can even win the heart of a non-cat lover. Finally, a cat is reputed to have ` + chalk.green(`${diceRoll} `) + `lives, which makes it the cat's meow!`);
  };
  
  const dogMadLibs = () => {
    console.log(chalk.green(`${exclamation} `) + `Here are few reasons why dogs are considered man's best friend: Dogs are adjective companions. They love to play. You can` + chalk.green(` ${verb} `) + `a rubber ball and a dog will ` + chalk.green(`${adverb} `) + `chase it and carry it back to you in its mouth at least ` + chalk.green(`${diceRoll} `) + `times. Dogs can keep your house safe. Their keen sense of hearing and sense of smell justify the term watchdog. There are more than a hundred breeds of dogs and each will have its own personality. You can't get a more loyal pet than a dog. Just rub a dog's ` + chalk.green(`${bodyPart} `) + `and you will have a pal for life. And the good news - a dog's bark is usually worse than its bit!`);
  };
  
  const aussieMadLibs = () => {
    console.log(`Australia, also known as the land Down Under, is famous for its unique wildlife. The most ` + chalk.green(`${exclamation} `) + `animal is the kangaroo, which carries its baby in a/an` + chalk.green(` ${bodyPart} `) + `on its belly The koala is another popular Australian animal. This furry, creature loves to eat leaves from eucalyptus trees. If you are a bird-watcher, emu will` + chalk.green(` ${verb} `) + `your socks off. It is a bird that cannot fly, but it can run fast. Perhaps the adjective of all Australian animals is the platypus. It has a bill that resembles a duck's bill. It is one of only two mammals that lay eggs instead of giving birth to their young. If you are a nature lover, you must put this exotic land Australia as number` + chalk.green(` ${diceRoll} `) + `on your places-to-go list!`);
  };

// path = -1;

  const choosePath = () => {
    if (path === 0) {;
      catMadLibs();
    } else if (path === 1) {;
      dogMadLibs();
    } else if (path === 2) {
      aussieMadLibs();
    }
  };

// console.log(choosePath())
