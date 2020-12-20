 const readline = require('readline-sync')
//  const { quitGame } = require('../Guessing-Game-cli-lab/game')
//  let yourVariableHere = readline.question()
let nameInput = readline.question("And you're name dear?: ")
let restart = readline.question("would you like to play the game?")
//let nameInput = readline.question("Enter your name: ")

function investment(type, amount){}
function bidAmount
function randomNumber(number){
    return Math.floor(Math.random * 100)
}
function beginingDialogue (){
    console.log('Greetings. My name is Debonaire.')
    let nameInput = readline.question("And you're name dear?: ")
    console.log(`${nameInput}, ...${nameInput} I think I knew a ${nameInput} once.`)
    console.log('Peculiar indivisual')
    console.log("Anyway. I am  your long lost cousin's brother's aunt. Three times removed. Or something of that sorts.")
    console.log("My point is, you're family. And as family, I've been instructed to give you a portion of the family's wealth")
    if(readline.keyInYN("Are you interested in a portion of our family's wealth?:")
    {console.log("Of course you do. Who doens't love free money")} else {
            console.log("That's okay, I have a proposition for you either way")
        }
    console.log(" I can't just hand over the money, my dear. At least not without knowing if you're responsible enought to handle it")
    console.log("You'll have to prove yourself. ")
    console.log("How do you prove yourself? I am glad you asks")
    console.log(`I have a test for you, ${nameInput}. A game, if that suits you better`)
    console.log(restart)
    if(restart.toUpperCase === 'YES'){
        console.log("Wonderful darling. Let me explain the rules")
    } else {
        console.log("Well, riches aren't for everyone. Ill be on my way then. Goodbye, dear")
        quitGame()
    }
}

function randomInvestingResponse(){}
function randonBankingResponse(){}
function bankAccount (money){
    return savedAmount + investment
    console.log()
}
investments = ["Stocks", "Bonds", "Options", "Annuities", "Precious Metals", "Mutual Fund", "Real Estate"]

// console.log(`Hello ${nameInput}!  Welcome to my game.`)


// Lets the user choose an item from list:
// animals = ['Lion', 'Elephant', 'Crocodile', 'Giraffe', 'Hippo'],
// index = readlineSync.keyInSelect(animals, 'Which animal?');
// console.log('Ok, ' + animals[index] + ' goes to your room.');


//Produces a visual ranger a user can slide back and forth
// An UI like the Range Slider:
// (Press Z or X key to change a value, and Space Bar to exit)
// var readlineSync = require('readline-sync'),
//   MAX = 200, MIN = 0, value = 30, key;
// console.log('\n\n' + (new Array(20)).join(' ') +
//   '[Z] <- -> [X]  FIX: [SPACE]\n');
// while (true) {
//   console.log('\x1B[1A\x1B[K|' +
//     (new Array(value + 1)).join('-') + 'O' +
//     (new Array(MAX - value + 1)).join('-') + '| ' + value);
//   key = readlineSync.keyIn('',
//     {hideEchoBack: true, mask: '', limit: 'zx '});
//   if (key === 'z') { if (value > MIN) { value--; } }
//   else if (key === 'x') { if (value < MAX) { value++; } }
//   else { break; }
// }
// console.log('\nA value the user requested: ' + value);


// prosperity-game name OR Bank or Bust

// start game

startGame = () =>{
beginingDialogue()

    
}
//randomly generate number
// Math.floor(Math.random()* 100)
console.log(startGame())
//end game
//const quitGame = () => {}

//game loops
//const gameLoop = () => {}

// start game
// const startGame = () =>{}