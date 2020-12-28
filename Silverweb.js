const readline1 = require('readline-sync');
const chalk = require('chalk');

let nameInput = readline1.question("Enter your name: \n")

//console.log(`Hello ${nameInput}!  Welcome to my game.`)

const intro = () => {
   console.log(`Hello ` + (chalk.underline.redBright`${nameInput}`) + ` Welcome to the game.`)
}

intro()

const introGameSequence = () => {

   let x = 18;
   let age = '';

   readline1.questionInt('How old are you? \n');
   if (age >= x) {
      console.log('Proceed with caution!');
   } else (age < 18) 
     console.log('You are too young for the underbelly of the silver web');
     process.exit() 
}





const quitGame = () => {
   console.log('Probably a good choice, bye.');
   process.exit();
}

const loadingVisual = () => {
   let scroll = ['♕', '♔', '♖', '♘']
   let i = 0

   return setInterval(() => {
     i = (i > 3) ? 0 : i;
     console.clear();
     console.log(scroll[i]);
      i++;
    }, 300);
  }
  


const beginGame = () => {
   let startQuestion = readline1.keyInYN('Do you want to enter the silver web?')
   if (startQuestion) {
   introGameSequence();
   } else {
      quitGame();
   }
}

beginGame()






