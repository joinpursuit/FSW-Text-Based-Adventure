const readline = require('readline-sync')

//console.clear(); clears the terminal can use when entering new scenario

const startGame = () => {

    if(readline.keyInYN('Would you like to play a game?')){
        console.log('Let\'s start!');
        gameLoop();
    }else{
        console.log('Have a nice life!');
        quitGame();
    }

    let nameInput = readline.question("Enter your name: ");
    console.log(`Hello ${nameInput}!  Welcome to my game.`);
}

const quitGame = () => {
    process.exit();
}

const gameLoop = () =>{
    console.log('Game started');
}

startGame();

