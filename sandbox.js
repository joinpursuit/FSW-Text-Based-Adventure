"use strict"; // prevents unintentional declaration of global const variables
const readline = require("readline-sync");

//////////////// Questions //////////////////////
// variables - function nested if ()
// undefined - after choosenPath()
// keyInSelect - randomization undefined -1 or not
// code is messy - help organize it - add a function 

////////////////////////////////////////////////
// function noOs(str) {
//     let output = "";
//     for(let i = 0; i < str.length; i++) { // i starts at 0
//         let currChar = str[i].toLowerCase(); // at the key of i //converts all capitals to lower case
//         if(currChar !== "o") {
//             output += currChar;
//         }
//         console.log(output);
//     }

//     return output;
// }

// // console.log(noOs("corey"))
// console.log(noOs("mOOse"))

// /////////////////////////
// for (let i = 0; i <= 10; i++) {
//     if(i % 2 === 0){
//         console.log(i + " is even");
// } else {
//     console.log(i + " is odd")
// }
// }

/////////////add comparision////////////////

// let number;

// if (readline.keyInYNStrict(`Do you join?`)) {
//     for(let i = 0; i < 3; i++) {
//         let roll = Math.floor(Math.random() * 12) + 2;
//             number = readline.question(`press enter to roll.`, { defaultInput: roll });
//         {
//             console.log(`You roll ${number}`);
//         }
//         }
//     }
//     else {
//         console.log(`You continue to walk pass the court`);
// }

// console.log(number)

//////////////////////////////

// if(number > num1) {
//     num2 = num1
//     num1 = number
//     console.log(`${num1} num1 is bigger`)
// } else if(number > num2){
//     num2 = number
//     console.log(`${num2} num2 is bigger`)
// }

///////////////////////////////////////////
//  let num1 = 2;
//  let num2 = 5;
//  if (num1 > num2) {
//     console.log(num1);
//   } else if (num1 < num2) {
//     console.log(num2);
//   } else
//       console.log(num1);

//////////works add another if statement//////////////

// let number;
// const roll = () => {
//     return Math.floor(Math.random() * 12) + 2
// }

// if (readline.keyInYNStrict(`Do you join?`)) {
//     for(let i = 0; i < 2; i++) {
//         number = readline.question(`press enter to roll.`, { defaultInput: roll()});
//         console.log(`You roll ${number}`);
//     }
//     console.log("bang!")
// } else {
//     number = roll()
//     console.log(`You continue to walk pass the court`);
// } 
// console.log(number)

/////////don't touch////////////
// let number;
// if (readline.keyInYNStrict(`Do you join?`)) {
//     for(let i = 0; i < 3; i++) {
//         let roll = Math.floor(Math.random() * 12) + 2;
//         number = readline.question(`press enter to roll.`, { defaultInput: roll });
//         console.log(`You roll ${number}`);
//     }
// } else {
//     number = Math.floor(Math.random() * 12) + 2
//     console.log(`You continue to walk pass the court`);
// } 
// console.log(number)

//////////works but remove do you join from loop///////////

// let number;
// for(let i = 0; i < 3; i++) {
//     let roll = Math.floor(Math.random() * 12) + 2;
//         if (readline.keyInYNStrict(`Do you join?`)) {
//             number = readline.question(`press enter to roll.`, { defaultInput: roll });
//         {
//             console.log(`You roll ${number}`);
//         }
//         } else {
//             console.log(`You continue to walk pass the court`);
//         }
// }

////////////////////////////////

// let number;
// // for(let i = 0; i < 3; i++) {

// // }

// if (readline.keyInYNStrict(`Do you join?`)) {number = readline.question(`press enter to roll`, { defaultInput: Math.floor(Math.random() * 12) + 2}); {
//     for(let i = 0; i < 3; i++) {
//         console.log(`You roll ${number}`);

//     }
// }
// } else {
//     console.log(`You continue to walk pass the court`);
// }

//////////this works/////////////
// if (readline.keyInYNStrict(`Do you join?`)) {number = readline.question(`press enter to roll`, { defaultInput: Math.floor(Math.random() * 12) + 2}); {
//     console.log(`You roll ${number}`);
// }
// } else {
//     console.log(`You continue to walk pass the court`);
// }

// /////////////////////////
// let i = 0;
// while(i <= 10) {
//     if(i % 2 === 0){
//         console.log(i + " is even");
// } else {
//     console.log(i + " is odd")
// }
// i++
// }

// /////////////////////////
// let roll
// let number;
// if (readline.keyInYNStrict(`Do you join?`)) {
//     number = readline.question(`press enter to roll.`, {defaultInput: Math.floor(Math.random() * 12) + 2}); {

//         while(roll <= 3) {console.log(`You roll ${number}`); roll++ }
//         // console.log(`let's roll`)
//     }

// } else {
//     console.log(`You continue to walk pass the court`);
// }

////////////////////////////
// const randomChoices = (array) => {
//     if (array === - 1) {
//         return threeChoices[randomNum * threeChoices.length - 1];
//     }
// }
// if (verb === -1) {
//     verb = threeChoices[randomNum * threeChoices.length - 1];
/////////////////////////////////////

//     // undefined
//     console.log(`
//     You ${verb}, then you see a small wooden house a short distance away. You approach the front door.`);
//   } else {
//     console.log(`
//     You ${threeChoices[verb]}, then you see a small wooden house a short distance away. You approach the front door.`);
//   }

//////////////////randomize man adjectives ////////////////////////

// randomArray(verbs);
// verb = readline.keyInSelect(
//   threeChoices,
//   `Which do you choose?
// `,
//   { cancel: `choose for me` }
// ); // decision 3 - user enters number
// if (verb === -1) {
//   verb = threeChoices[randomNum * threeChoices.length]; // undefined
//   console.log(`
//   You ${verb}, then you see a small wooden house a short distance away. You approach the front door.`);
// } else {
//   console.log(`
//   You ${threeChoices[verb]}, then you see a small wooden house a short distance away. You approach the front door.`);
// }

// /////////////////////////////////
// console.log(`
// You see a rabbit`);
// randomArray(adverbs);verb = readline.keyInSelect(
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
// 

randomizeArray(exclamation);
exclamation = readline.keyInSelect(threeChoices, `choose an exclamatory word`,{cancel: `choose for me`});
// console.clear()

if (exclamation === - 1) {
    exclamation = threeChoices[Math.floor(Math.random() * threeChoices.length)];
    console.log(chalk.green(`${exclamation}!`) + chalk.cyan(` You're just in time for dinner. Have a seat.`));
} else {
    console.log(chalk.green(`${threeChoices[exclamation]}!`) + chalk.cyan(` You're just in time for dinner. Have a seat.`));
}