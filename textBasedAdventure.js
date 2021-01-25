const readlineSync = require('readline-sync');
const chalk = require('chalk');
//Game Start
const gameStart = () => {
console.log(chalk.blue('Hello user '));
console.log(chalk.blueBright('This Game is simple '));
console.log(chalk.blue('Just a yes no maybe so '));
console.log(chalk.blueBright('With a bit of numbers'));
console.log(chalk.green('Enjoy!'));
let nameInput = readlineSync.question('Please enter your name: ');
console.log(chalk.yellow(`Hello ${nameInput}!  Welcome to my game.`))
gameStart2()
gameLoop()
}
//Game loop
const gameLoop = () => {
    let tryCount = 3;
    for(let i = 10; i > 5; i--) {
        if(tryCount < 3) {
            gameLoop()
            
        }else{
            tryCount --;
            console.log("Number of remaing tries left " + tryCount)
            if(tryCount === 0) {
                gameFirst();
            }
            break;
        }
    }
}
//Game Start
const gameStart2 = () => {
if (readlineSync.question('Would you like to play? ')) {
    gameFirst()
   } else {
     gameLoop()
   }
}
//Game First Question
const gameFirst = () => {
let gameQues1 = readlineSync.question('How many letters are in the alphabet? '); 
    if(gameQues1 === '26') {
        console.log(chalk.blue('Nice! '));
    gameSecond()
    } else {
        console.log(chalk.red('Try Again '));
    gameLoop()
    }   

}
// Game Second Question
// throw error started in this line
const gameSecond = () => {
let gameQues2 = readlineSync.question('What year was the Roswell UFO incident? ');
    if(gameQues2 === '1947') {
        console.log(chalk.greenBright('Grrrrrreeeeaaaattt! '));
    gameThird()
    } else {
        console.log(chalk.red('Try Again '));
    gameSecond()
    }
    
}
// Game Third Question
const gameThird = () => {
let gameQues3 = readlineSync.question('What year was the declaration of independance signed? ');
    if(gameQues3 === '1776') {
        console.log(chalk.blueBright('All you can be! '));
    ques4()
    } else {
        console.log(chalk.redBright('Alllll goooood, Try again '));
    gameThird()
    }
}
// Game Forth Question
const ques4 = () => {
let gameQues4 = readlineSync.question('What year was Apple founded?')
    if(gameQues4 === '1976') {
        console.log(chalk.whiteBright('Greeeeeaaat Job! '));
    ques5();
    } else {
        console.log(chalk.yellowBright('Google it... '));
    ques4()
    }
}
// Game Fith Question 
const ques5 = () => {
    let gameQues5 = readlineSync.question('How many rings did Kobe win? ')
    if(gameQues5 === '5') {
        console.log(chalk.magentaBright('Kooooobbbeeeeee!! '))
        ques6();
    } else {
        console.log(chalk.red('Damn burhhhhhhh! '))
        ques5();
    }
}
// Game Sixith Question 
const ques6 = () => {
    let gameQues6 = readlineSync.question('What year was Pursuit founded? ')
    if(gameQues6 === '2011') {
        console.log(chalk.blueBright('You did your research! '));
        ques7();
    } else {
        console.log(chalk.red('Fail Foward '))
        ques6();
    }
}

// Game Seveneth Question
const ques7 = () => {
    let gameQues7 = readlineSync.question('Where is Area 51 located? ')
    if(gameQues7 === 'Groom Lake') {
        console.log(chalk.green('We come in peace '));
        ques8();
    }else { 
        console.log(chalk.yellow('Come with us.....'));
        ques7();
    }
}
// Game Eighth Question
const ques8 = () => {
    let gameQues8 = readlineSync.question('Who invented the general theory of relativity?')
    if(gameQues8 === 'Albert Einstein') {
        console.log(chalk.whiteBright('Great thinking there mate! '));
        gameEnd();
    } else {
        console.log(chalk.red('Go back to the drawing board.'))
        ques8();
    }
}
// Game End
const gameEnd = () => {
    if (readlineSync.question('Would you like to play again? ')) {
     gameStart()
    }else {
      endGame()
    }
}
gameStart()