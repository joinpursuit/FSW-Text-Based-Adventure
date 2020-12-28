const readline = require('readline-sync');
const mapBuild = require('./map');

let fName;
let lName;

const startGame = () => {
    gameLoop();
}

const quitGame = () => {
    console.log('Have a nice life!');
    process.exit();
}

const gameLoop = () => {
    input = readline.keyInYN('Would you like to play?');
    if(!input){
        quitGame();
    }else{
        console.log('Hello World');
        getPlayerName();
        getPlayerLocation();
        // playerlocation = mapBuild.map[pLX][pLY];
        // if(playerLocation === 'Bridge'){
            // console.log(`${fName} ${lName} is in the bridge`);
        // }
    }
}

const getPlayerLocation = () => {
    // testing
}

const getPlayerName = () => {
    fName = readline.question('What would you like to name your character\'s first name?\n');
    lName = readline.question('What would you like to name your character\'s last name?\n');
}

startGame();

module.exports = {
    gameLoop,
    getPlayerName
};