const readline = require('readline-sync');

//testing out import features
const mapBuild = require('../supportFiles/maps');
// const directions = require('./directions');
const thePlayer = require('../supportFiles/playerStats');

// initialize starting location in map
let initialX;
let initialY;
let isNewStart;
let shipRepaired;

const startGame = () => {
    readline.setDefaultOptions({limit: null});
    isNewStart = true;
    shipRepaired = false;
    console.clear();
    // Set starting location on the map
    initialX = 0;
    initialY = 0;
    menuOptions = [];
    menuOptions[1] = "New Game";
    menuOptions[2] = "Load Game(Work in Progress)";
    menu();
}
const menu = () => {
    // Only place that asks for a number
    while (menuOptions != 0) {
        let gameMenu = readline.keyInSelect(menuOptions, 'Please choose your option',{cancel: 'Quit Game'});
        switch (gameMenu) {
            case 1:
                if (isNewStart === true) {
                    gameLoop();
                    break;
                } else {
                    gameLoop();
                    break;
                }
            case 2:
                if (isNewStart === true) {
                    console.clear();
                    console.log('Load not working yet');
                    break;
                } else {
                    console.clear();
                    console.log('Save not working yet');
                    break;
                }
            case 3:
                console.clear();
                console.log('Load not working yet');
                break;
            default:
                quitGame();
        }
    }
}
const quitGame = () => {
    console.log('Have a nice life!');
    process.exit();
}
const playIntro = () => {
    console.log('\n');
    console.log('Welcome to the Star Wars Explorer');
    console.log('Now let\'s begin.............');
    console.log('......');
    console.log('......');
    console.log('......');
    console.log('You just woken up from a deep sleep after a long hyperspace trip.');
    console.log('Upon exiting hyperspace you encountered pirates and after a long battle,');
    console.log('you were able to shoot them down and began to inpect your ship for damage')
    console.log(`You are in the ${mapBuild.map[initialX][initialY]} you see a door \'south\' that leads to the Conference Room`);
    console.log('or you can try to \'use\' the navicomputer');
}
const gameLoop = () => {
    console.clear();
    if (isNewStart === true) {
        thePlayer.createCharacter();
        //calls the stats
        playerStat = thePlayer.getCharacter();
        console.clear();
        console.log(`Your name is ${playerStat.firstName} ${playerStat.lastName}`);
        console.log(`You're a ${playerStat.class} of the ${playerStat.species} species from the planet ${playerStat.homeWorld}\n`);
        showHelp();
        playIntro();
        isNewStart = false;
    }
    while (initialX < 4 || initialY < 3) {
        getPlayerLocation(initialX,initialY)
    }
}
const getPlayerLocation = (initialX, initialY) => { 
    x = initialX;
    y = initialY;
    actions(x,y);
}
const cantMove = () => {
    console.clear();
    cantMoveOutput = console.log('You can\'t go that direction any more.');
    console.log(`${mapBuild.map[initialX][initialY]}`);
}
const actions = () => {
    avaliableActions = ['north', 'south', 'east', 'west', 'ladder', 'exit', 'use', 'map', 'menu', 'help', 'quit']
    readline.setDefaultOptions({limit: avaliableActions,  limitMessage: 'Please use \'north\',\'south\',\'east\',\'west\', or \'help\' for more commands'});
    input = (readline.prompt()).toLowerCase();
    if (input === 'north'){
        console.clear();
        goNorth(input);
    } else if (input === 'south'){
        console.clear();
        goSouth();
    } else if (input === 'east') {
        console.clear();
        goEast();
    } else if (input === 'west') {
        console.clear();
        goWest();
    } else if (input === 'ladder') {
        console.clear();
        useLadder();
    } else if (input === 'exit') {
        console.clear();
        exitShip();
    } else if (input === 'use') {
        // console.clear();
        useItem();
    } else if (input === 'map') {
        console.clear();
        showMap();
        console.log(`You are currently in the ${mapBuild.map[initialX][initialY]}`);
    } else if (input === 'menu') {
        console.clear();
        menuOptions[1] = "Resume Game";
        menuOptions[2] = "Save Game(Work in Progress)";
        menuOptions[3] = "Load Game(Work in Progress)";
        menu();
    } else if (input === 'help') {
        console.clear();
        showHelp();
    } else if (input === 'quit') {
        console.clear();
        quitGame();
    }
}
const goNorth = () => {
    if ((mapBuild.map[initialX][initialY] === 'Bridge') || (mapBuild.map[initialX][initialY] === 'Conference Room') || (mapBuild.map[initialX][initialY] === 'Captain\'s Quarters')){
        if (mapBuild.map[initialX][initialY] === 'Conference Room'){
            x;
            y--;
            isOnUpperLv(x,y);
        } else if (mapBuild.map[initialX][initialY] === 'Captain\'s Quarters') {
            x;
            y--;
            isOnUpperLv(x,y);
        } else {
            cantMove();
        }
    }
    /*
    // if ((x === 0 && y === 0) || (x === 0 && y === 1) || (x === 0 && y === 2)) {
    //     if (x === 0 && y === 1) {
    //         x;
    //         y--;
    //         isOnUpperLv(x,y);
    //     } else if (x === 0 && y === 2) {
    //         x;
    //         y--;
    //         isOnUpperLv(x,y);
    //     } else {
    //         cantMove();
    //     }
    }*/ else {
        if ((x === 1 && y === 0) || (x === 1 && y === 1) || (x === 1 && y === 2)) {
            cantMove();
        } else {
            if (x === 2 && y === 0) {
                // if you are in Crew Quarters
                // you go north to Med Bay
                x--;
                isOnLowerLv(x,y);
            } else if (x === 3 && y === 0) {
                // if you are in Crew Quaters
                // you go north to Escape Pod
                x--;
                isOnLowerLv(x,y);
            } else if (x === 2 && y === 1) {
                // if you are in Main Hold
                // you go north to Engine Room
                x--;
                isOnLowerLv(x,y);
            } else if (x === 3 && y === 1) {
                // if you are in Ramp
                // you go north to Main Hold
                x--;
                isOnLowerLv(x,y);
            } else if (x === 2 && y === 2) {
                // if you are in Cargo Elevator
                // you go north to Cargo Hold
                x--;
                isOnLowerLv(x,y);
            } else if (x === 3 && y === 2) {
                // if you are in Storage Room
                // you go north to Cargo Elevator
                x--;
                isOnLowerLv(x,y);
            }
        }
    }
}
const goSouth = () => {
    if ((x === 0 && y === 0) || (x === 0 && y === 1) || (x === 0 && y === 2)) {
        if (x === 0 && y === 0) {
            x;
            y++;
            isOnUpperLv(x,y);
        } else if (x === 0 && y === 1) {
            x;
            y++;
            isOnUpperLv(x,y);
        } else if (x === 0 && y === 2) {
            cantMove();
        }
    } else {
        if ((x === 3 && y === 0) || (x === 3 && y === 1) || (x === 3 && y === 2)) {
            cantMove();
        } else {
            if (x === 1 && y === 0) {
                // if you are in Med Bay
                // you go south to Crew quarters
                x++;
                isOnLowerLv(x,y);
            } else if (x === 2 && y === 0) {
                // if you are in Crew Quarters
                // you go south to Escape Pod
                x++;
                isOnLowerLv(x,y);
            } else if (x === 1 && y === 1) {
                // if you are in Engine Room
                // you go south to Main Hold
                x++;
                isOnLowerLv(x,y);
            } else if (x === 2 && y === 1) {
                // if you are in Main Hold
                // you go south to Ramp
                x++;
                isOnLowerLv(x,y);
            } else if (x === 1 && y === 2) {
                // if you are in Cargo Hold
                // you go south to Cargo Elevator
                x++;
                isOnLowerLv(x,y);
            } else if (x === 2 && y === 2) {
                // if you are in Cargo Elevator
                // you go south to Storage
                x++;
                isOnLowerLv(x,y);
            }
        }
    }
}
const goEast = () => {
    if (x === 1 && y === 0) {
        // if you are in Med Bay
        // you go east to Main Hold
        x++;
        y++;
        isOnLowerLv(x,y);
    } else if (x === 2 && y === 0) {
        // if you are in Crew Quarters
        // you go east to Main Hold
        y++
        isOnLowerLv(x,y);
    } else if (x === 2 && y === 1) {
        readline.setDefaultOptions({limit: ['cargo', 'elevator', 'storage'], limitMessage: 'Please type \'cargo\', \'elevator\' or \'storage\'.'});
        let choiceDoor = (readline.question('Do you want to enter the Cargo Hold(cargo),Cargo Elevator(elevator), or the Storage Room(storage)?\n')).toLowerCase();
        if (choiceDoor === 'cargo') {
            console.clear();
            // if you are in Main Hold
            // you go east to Cargo Hold
            x--;
            y++;
            isOnLowerLv(x,y);
        } else if (choiceDoor === 'elevator') {
            console.clear();
            // if you are in Main Hold
            // you go east to Cargo Elevator
            y++;
            isOnLowerLv(x,y);
        } else if (choiceDoor === 'storage') {
            console.clear();
            // if you are in Main Hold
            // you go east to Storage Room
            x++;
            y++;
            isOnLowerLv(x,y);
        }
    } else {
        cantMove();
    }
}
const goWest = () => {
    if (x === 1 && y === 2) {
        // if you are in Cargo Hold
        // you go east to Main Hold
        x++;
        y--;
        isOnLowerLv(x,y);
    } else if (x === 2 && y === 2) {
        // if you are in Cargo Elevator
        // you go east to Main Hold
        y--;
        isOnLowerLv(x,y);
    } else if (x === 3 && y === 2) {
        // if you are in Storage Room
        // you go east to Main Hold
        x--;
        y--;
        isOnLowerLv(x,y);
    } else if (x === 2 && y === 1) {
        readline.setDefaultOptions({limit: ['med', 'crew' ],  limitMessage: 'Please type \'med\' or \'crew\'.'});
        let choiceDoor = (readline.question('Do you want to enter the Med Bay(med) or the Crew\'s Quarters(crew)?\n')).toLowerCase();
        if (choiceDoor === 'med') {
            console.clear();
            // if you are in Main Hold
            // you go east to Med Bay
            x--;
            y--;
            isOnLowerLv(x,y);
        } else if (choiceDoor === 'crew') {
            console.clear();
            // if you are in Main Hold
            // you go east to Crew Quarters
            y--;
            isOnLowerLv(x,y);
        }
    } else {
        cantMove();
    }
}
const useLadder = () => {
    if (x === 0 && y === 1) {
        x+=2;
        y;
        isOnLowerLv(x,y);
    } else if (x === 2 && y === 1) {
        x-=2;
        y;
        isOnUpperLv(x,y);
    } else {
        console.log('There is no \'ladder\' in this room');
    }
}
const exitShip = () => {
    if (mapBuild.map[initialX][initialY] === mapBuild.map[3][1]) {
        input = readline.keyInYNStrict('Would you like to play again?');
        if(!input){
            console.log('Thank you for playing!')
            quitGame();
        }else{
            startGame()
        }
    } else{ 
        console.log('You need to head to the ramp to exit ship.');
    }
}
const showMap = () => {
    if ((x === 0 && y === 0) || (x === 0 && y === 1) || (x === 0 && y === 2)) {
        mapBuild.showUpperShipMap();
    } else {
        mapBuild.showLowerShipMap();
    }
}
const showHelp = () => {
    console.log('Here is a list of commands you can enter: ')
    console.log(`    Type 'north', 'south', 'east', 'west' to move on the map
    Type 'map' to see the current floor map you are on
    Type 'menu' to pause, save, load or quit the game
    In some areas you may need to perform these actions below inside a particular room: 
    'ladder', 'exit', 'use'`);
}
const useItem = () => {
    if (mapBuild.map[initialX][initialY] === mapBuild.map[0][0]) {
        if (shipRepaired === true){
            console.log('You used the navicomputer');
            input = readline.keyInYNStrict('Would you like to play again?');
            if(!input){
                console.log('Thank you for playing!');
                quitGame();
            }else{
                startGame();
            }
        } else {
            console.log(`You still need to head to the ${mapBuild.map[1][1]} to fix the hyperdrive`);
        }
    } else if (mapBuild.map[initialX][initialY] === mapBuild.map[1][1]) { 
        if (shipRepaired === false) {
            console.log('You repaired the hyperdrive.')
            shipRepaired = true;
        } else {
            console.log('The hyperdrive is working properly.')
        }
    } else {
        console.log('Nothing is in this room you can use.')
    }
}
const isOnUpperLv = (x,y) => {
    if (x === 0 && y === 0) {
        console.log(`You are in the ${mapBuild.map[0][0]} you see a door 'south' that leads to the ${mapBuild.map[0][1]} or you can 'use' the Navicomputer to explore the galaxy`);
        initialX = x;
        initialY = y;
        getPlayerLocation(initialX,initialY);
    } else if (x === 0 && y === 1) {
        console.log(`You are in the ${mapBuild.map[0][1]} you see a door \'north\' to the ${mapBuild.map[0][0]},`)
        console.log(`a door \'south\' to the ${mapBuild.map[0][2]} and a \'ladder\' leading down to the lower deck`);
        initialX = x;
        initialY = y;
        getPlayerLocation(initialX,initialY);
    } else if (x === 0 && y === 2) {
        console.log(`You are in the ${mapBuild.map[0][2]} you see a door \'north\' that leads to the ${mapBuild.map[0][1]}`);
        initialX = x;
        initialY = y;
        getPlayerLocation(initialX,initialY);
    }
}
const isOnLowerLv = (x, y) => {
    if (x === 1 && y === 0) {
        console.log(`You are in the ${mapBuild.map[1][0]} you see a door 'south' to the ${mapBuild.map[2][0]} 
and a door 'east' to the ${mapBuild.map[2][1]}`);
        initialX = x;
        initialY = y;
        getPlayerLocation(initialX,initialY);
    } else if (x === 1 && y === 1) {
        if (shipRepaired === false) {
            console.log(`You are in the ${mapBuild.map[1][1]} you see a door 'south' to the ${mapBuild.map[2][1]}`);
            console.log(`You can 'use' the hyperdrive to repair it`);
        } else {
            console.log(`You are in the ${mapBuild.map[1][1]} you see a door 'south' to the ${mapBuild.map[2][1]}`);
        }
        initialX = x;
        initialY = y;
        getPlayerLocation(initialX,initialY);
    } else if (x === 1 && y === 2) {
        console.log(`You are in the ${mapBuild.map[1][2]} you see a door 'south' to the ${mapBuild.map[2][2]}
and a door 'west' to the ${mapBuild.map[2][1]}`);
        initialX = x;
        initialY = y;
        getPlayerLocation(initialX,initialY);
    } else if (x === 2 && y === 0) {
        console.log(`You are in the ${mapBuild.map[2][0]} you see a door 'north' to the ${mapBuild.map[1][0]},
a door 'south' to the ${mapBuild.map[3][0]}, and a door 'east' to the ${mapBuild.map[2][1]}`);
        initialX = x;
        initialY = y;
        getPlayerLocation(initialX,initialY);
    } else if (x === 2 && y === 1) {
        console.log(`You are in the ${mapBuild.map[2][1]} there is a door 'north' to the Engine Room, \n` +
        '2 doors that head \'west\' to the Med Bay or Crew\'s Quarters, \n' + 
        '3 doors that head \'east\' to the Cargo Hold, Cargo Elevator, or Storage Room, \n' +
        'a \'ladder\' that leads up to the upper deck \n' +
        'and a Ramp \'south\' leads to outside the ship');
        initialX = x;
        initialY = y;
        getPlayerLocation(initialX,initialY);
    } else if (x === 2 && y === 2) {
        console.log(`You are in the ${mapBuild.map[2][2]} there is a door 'north' to the ${mapBuild.map[1][2]},
a door 'south' to the ${mapBuild.map[3][2]}, and a door 'west' to the ${mapBuild.map[2][1]}`);
        initialX = x;
        initialY = y;
        getPlayerLocation(initialX,initialY);
    } else if (x === 3 && y === 0) {
        console.log(`You are in the ${mapBuild.map[3][0]} you see a door 'north' to the ${mapBuild.map[2][0]}`);
        initialX = x;
        initialY = y;
        getPlayerLocation(initialX,initialY);
    } else if (x === 3 && y === 1) {
        console.log(`You have approached the ${mapBuild.map[3][1]} you can head \'north\' to the ${mapBuild.map[2][1]}
or you can \'exit\' the ship`);
        initialX = x;
        initialY = y;
        getPlayerLocation(initialX,initialY);
    } else if (x === 3 && y === 2) {
        console.log(`You are in the ${mapBuild.map[3][2]} there is a door 'north' to the ${mapBuild.map[2][2]} and 
a door 'west' to the ${mapBuild.map[2][1]}`);
        initialX = x;
        initialY = y;
        getPlayerLocation(initialX,initialY);
    }
}

startGame();