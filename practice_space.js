const readline = require('readline-sync')

// let gramsToOz;
// gramsToOz = readline.question("The first thing we have to do is measure how much chocolate we'll need to melt! We want a big batch, so lets's go for 24 ounces! Would you help convert 24 ounces to grams? Just get the product of the mass value (24 oz.) by 28.35!");
// let arrGrams = [24, 28.35];
// for (i = 0; i < 680.40; i++) {
// if(arrGrams[0] * arrGrams[1] === 680.40) {
//     arrGrams += gramsToOz
//     gramsToOz = arrGrams[0] * arrGrams[1];
// }
// }
//  console.log("Cool! You did it! It's 680.40 grams!");

// let meltingPoint;
// meltingPoint = readline.question("Now, let's melt! We have to get up to the perfect melting point. Do you know what that is? Guess a number between 100-110!");
// if (meltingPoint) {
//       case '110':
//       case '109':
//         console.log("A little too high!");
//       break;
// }

// switch (meltingPoint) {
//       case '108':
//         console.log("Yes! You got it! 108 degrees is the perfect melting point for milk and dark chocolate!");
//             break;
// }

// switch (meltingPoint) {
//       case '107':
//       case '106':
//       case '105':
//         console.log("You'getting warmer!");
//         break;
// }

// switch (meltingPoint) {
//         case '104':
//         case '103':
//         case '102':
//         case '101':
//         case '100':
//         console.log("A little low for chocolate, keep going!");
//         break;
// }

// switch (meltingPoint) {
//         default:
//         console.log("Remember, only numbers betweeb 100 and 110!");
//         break;

// }

// let bangIt;
// bangIt = readline.question("Bang the mold on the counter 3 times in order to release the truffles! Ready-Set-GO! Enter 3 now!")
// let num = 0
// setInterval (() => {
//   num++
//   if (num === 3) {
//   //   clearInterval(timer);
//   // } else {
// console.log("BANG!");
//   }
// }, 1000);
        
// let timeToMold;
// timeToMold = readline.question("Pour your newly tempered chocolate into the pre-cooled ice-tray mold. There are 8 x 5 cavities in this mold! Multiply to get the total number of truffles we'll end up with!");

// let str = "Nice! 40 truffles!! Let's put it in the fridge to cool and get ready to pop out of the mold!"
// const multiply = (num1, num2, str) => {
//   if (num1 * num2 === 40) {
//   } 
//     return str
// }
// console.log(multiply(8, 5, str))


let bangIt;
bangIt = readline.question("Bang the mold on the counter 3 times in order to release the truffles! Ready-Set-GO! Enter 'bang' now!")
const bangManyTimes = (num, callback) => {
  for (let i = 0; i < num; i++) {
    callback(num)
  }
  return callback;
  }
bangManyTimes(3, (callback) => console.log("BANG!"))
readyOrNot = readline.question("HOORAY! You did it! You made truffles! Are you ready to reap the rewards??")
if (readyOrNot === "yes") {
  console.log("Hell yeahhhhh")
} else {
  console.log("Shucks, looks like I'll have to eat it all myself ;)")
}

// let whichOne;
// whichOne = readline.question("Pick your favorite! What's it gonna be?! Sweet, smooth, and creamy MILK CHOCOLATE |or| rich, robust, and decadent DARK CHOCOLATE? Enter milk or dark!");
// if (whichOne === "milk"){
//   console.log("Sweet! Milk chocolate it is!")
// } else {
//   console.log("Nice! Dark chocolate for you!")
//   }
