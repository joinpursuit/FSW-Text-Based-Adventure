const readline = require('readline-sync');

//testing out import features
const mapBuild = require('./map');

let fName;
let lName;
// set starting location in map
let initialX;
let initialY;

const startGame = () => {
    initialX = 0;
    initialY = 0;
    gameLoop();
}

const quitGame = () => {
    console.log('Have a nice life!');
    process.exit();
}

const gameLoop = () => {
    // input = readline.keyInYN('Would you like to play?');
    // if(!input){
        // quitGame();
    // }else{
        // getPlayerName();
        console.log(`You are in the ${mapBuild.map[0][0]} you see a door south that leads to the Conference Room`);
        while(initialX < 4 || initialY < 3){
            getPlayerLocation(initialX,initialY)
        }
    // }
}

const getPlayerLocation = (initialX, initialY) => { 
    x = initialX;
    y = initialY;
    goToLocation(x,y);
}
const cantMove = () => {
    cantMoveOutput = console.log('You can\'t go that direction any more.');
}
const goToLocation = (x,y) => {
    readline.setDefaultOptions({limit: ['north', 'south', 'east', 'west', 'ladder', 'exit', 'map']});
    input = (readline.question('What direction do you want to head to?\n')).toLowerCase();
    if(input === 'ladder'){
        useLadder(input);
    }else if(input === 'north'){
        goNorth(input);
    }else if(input === 'south'){
        goSouth(input);
    }else if(input === 'east'){
        goEast(input);
    }else if(input === 'west'){
        goWest(input);
    }else if(input === 'exit'){
        exitShip(input);
    }else if(input === 'map'){
        showMap(input);
    }
}
const goNorth = input => {
    if((x === 0 && y === 0) || (x === 0 && y === 1) || (x === 0 && y === 2)){
        if(x === 0 && y === 1){
            x;
            y--;
            isOnUpperLv(x,y);
        }else if(x === 0 && y === 2){
            x;
            y--;
            isOnUpperLv(x,y);
        }else{
            cantMove();
        }
    }else{
        if((x === 1 && y === 0) || (x === 1 && y === 1) || (x === 1 && y === 2)){
            cantMove();
        }else{
            if(x === 2 && y === 0){
                // if you are in Crew Quarters
                // you go north to Med Bay
                x--;
                isOnLowerLv(x,y);
            }else if(x === 3 && y === 0){
                // if you are in Crew Quaters
                // you go north to Escape Pod
                x--;
                isOnLowerLv(x,y);
            }else if(x === 2 && y === 1){
                // if you are in Main Hold
                // you go north to Engine Room
                x--;
                isOnLowerLv(x,y);
            }else if(x === 3 && y === 1){
                // if you are in Ramp
                // you go north to Main Hold
                x--;
                isOnLowerLv(x,y);
            }else if(x === 2 && y === 2){
                // if you are in Cargo Elevator
                // you go north to Cargo Hold
                x--;
                isOnLowerLv(x,y);
            }else if(x === 3 && y === 2){
                // if you are in Storage Room
                // you go north to Cargo Elevator
                x--;
                isOnLowerLv(x,y);
            }
        }
    }
}
const goSouth = input => {
    if((x === 0 && y === 0) || (x === 0 && y === 1) || (x === 0 && y === 2)){
        if(x === 0 && y === 0){
            x;
            y++;
            isOnUpperLv(x,y);
        }else if(x === 0 && y === 1){
            x;
            y++;
            isOnUpperLv(x,y);
        }else if(x === 0 && y === 2){
            cantMove();
        }
    }else{
        if((x === 3 && y === 0) || (x === 3 && y === 1) || (x === 3 && y === 2)){
            cantMove();
        }else{
            if(x === 1 && y === 0){
                // if you are in Med Bay
                // you go south to Crew quarters
                x++;
                isOnLowerLv(x,y);
            }else if(x === 2 && y === 0){
                // if you are in Crew Quarters
                // you go south to Escape Pod
                x++;
                isOnLowerLv(x,y);
            }else if(x === 1 && y === 1){
                // if you are in Engine Room
                // you go south to Main Hold
                x++;
                isOnLowerLv(x,y);
            }else if(x === 2 && y === 1){
                // if you are in Main Hold
                // you go south to Ramp
                x++;
                isOnLowerLv(x,y);
            }else if (x === 1 && y === 2){
                // if you are in Cargo Hold
                // you go south to Cargo Elevator
                x++;
                isOnLowerLv(x,y);
            }else if (x === 2 && y === 2){
                // if you are in Cargo Elevator
                // you go south to Storage
                x++;
                isOnLowerLv(x,y);
            }
        }
    }
}
const goEast = input => {
    if(x === 1 && y === 0){
        // if you are in Med Bay
        // you go east to Main Hold
        x++;
        y++;
        isOnLowerLv(x,y);
    }else if(x === 2 && y === 0){
        // if you are in Crew Quarters
        // you go east to Main Hold
        y++
        isOnLowerLv(x,y);
    }else if(x === 2 && y === 1){
        readline.setDefaultOptions({limit: ['cargo', 'elevator', 'storage']});
        let choiceDoor = (readline.question('Do you want to enter the Cargo Hold(cargo),Cargo Elevator(elevator), or the Storage Room(storage)?\n')).toLowerCase();
        if(choiceDoor === 'cargo'){
            // if you are in Main Hold
            // you go east to Cargo Hold
            x--;
            y++;
            isOnLowerLv(x,y);
        }else if(choiceDoor === 'elevator'){
            // if you are in Main Hold
            // you go east to Cargo Elevator
            y++;
            isOnLowerLv(x,y);
        }else if(choiceDoor === 'storage'){
            // if you are in Main Hold
            // you go east to Storage Room
            x++;
            y++;
            isOnLowerLv(x,y);
        }
    }else{
        cantMove();
    }
}
const goWest = input => {
    if(x === 1 && y === 2){
        // if you are in Cargo Hold
        // you go east to Main Hold
        x++;
        y--;
        isOnLowerLv(x,y);
    }else if(x === 2 && y === 2){
        // if you are in Cargo Elevator
        // you go east to Main Hold
        y--;
        isOnLowerLv(x,y);
    }else if(x === 3 && y === 2){
        // if you are in Storage Room
        // you go east to Main Hold
        x--;
        y--;
        isOnLowerLv(x,y);
    }else if(x === 2 && y === 1){
        readline.setDefaultOptions({limit: ['med', 'crew' ]});
        let choiceDoor = (readline.question('Do you want to enter the Med Bay(med) or the Crew\'s Quarters(crew)?\n')).toLowerCase();
        if(choiceDoor === 'med'){
            // if you are in Main Hold
            // you go east to Med Bay
            x--;
            y--;
            isOnLowerLv(x,y);
        }else if(choiceDoor === 'crew'){
            // if you are in Main Hold
            // you go east to Crew Quarters
            y--;
            isOnLowerLv(x,y);
        }
    }else{
        cantMove();
    }
}
const useLadder = input => {
    if(x === 0 && y === 1){
        x+=2;
        y;
        isOnLowerLv(x,y);
    }else if(x === 2 && y === 1){
        x-=2;
        y;
        isOnUpperLv(x,y);
    }else{
        console.log('There is no ladder in this room');
    }
}
const exitShip = input => {
    if(x === 3 && y === 1){
        input = readline.keyInYN('Would you like to play again?');
        if(!input){
            console.log('Thank you for playing!')
            quitGame();
        }else{
            startGame()
        }
    }else{
        console.log('You need to head to the ramp to exit ship.');
    }
}
const showMap = input => {
    if((x === 0 && y === 0) || (x === 0 && y === 1) || (x === 0 && y === 2)){
        mapBuild.showUpperMap();
    }else{
        mapBuild.showLowerMap();
    }
}

const isOnUpperLv = (x,y) => {
    if(y === 0){
        console.log(`You are in the ${mapBuild.map[0][0]} you see a door south that leads to the Conference Room`);
        initialX = x;
        initialY = y;
        getPlayerLocation(initialX,initialY);
    }else if(y === 1){
        console.log(`You are in the ${mapBuild.map[0][1]} you see a door north to the Bridge,`)
        console.log(`a door south to the Captain's Quarters and a ladder leading down to the lower deck`);
        initialX = x;
        initialY = y;
        getPlayerLocation(initialX,initialY);
    }else if(y === 2){
        console.log(`You are in the ${mapBuild.map[0][2]} you see a door north that leads to the Conference Room`);
        initialX = x;
        initialY = y;
        getPlayerLocation(initialX,initialY);
    }
}

const isOnLowerLv = (x, y) => {
    if(x === 1 && y === 0){
        console.log(`You are in the ${mapBuild.map[1][0]}`);
        initialX = x;
        initialY = y;
        getPlayerLocation(initialX,initialY);
    }else if(x === 1 && y === 1){
        console.log(`You are in the ${mapBuild.map[1][1]}`);
        initialX = x;
        initialY = y;
        getPlayerLocation(initialX,initialY);
    }else if(x === 1 && y === 2){
        console.log(`You are in the ${mapBuild.map[1][2]}`);
        initialX = x;
        initialY = y;
        getPlayerLocation(initialX,initialY);
    }else if(x === 2 && y === 0){
        console.log(`You are in the ${mapBuild.map[2][0]}`);
        initialX = x;
        initialY = y;
        getPlayerLocation(initialX,initialY);
    }else if(x === 2 && y === 1){
        console.log(`You are in the ${mapBuild.map[2][1]}`);
        initialX = x;
        initialY = y;
        getPlayerLocation(initialX,initialY);
    }else if(x === 2 && y === 2){
        console.log(`You are in the ${mapBuild.map[2][2]}`);
        initialX = x;
        initialY = y;
        getPlayerLocation(initialX,initialY);
    }else if(x === 3 && y === 0){
        console.log(mapBuild.map[3][0]);
        initialX = x;
        initialY = y;
        getPlayerLocation(initialX,initialY);
    }else if(x === 3 && y === 1){
        console.log(`You have approached the ${mapBuild.map[3][1]}`);
        initialX = x;
        initialY = y;
        getPlayerLocation(initialX,initialY);
    }else if(x === 3 && y === 2){
        console.log(`${mapBuild.map[3][2]}`);
        initialX = x;
        initialY = y;
        getPlayerLocation(initialX,initialY);
    }
}

const getPlayerName = () => {
    fName = readline.question('What would you like to name your character\'s first name?\n');
    lName = readline.question('What would you like to name your character\'s last name?\n');
}

startGame();

// testing out export features
module.exports = {
    gameLoop,
    getPlayerName
};


// readline.setDefaultOptions({limit: ['north', 'south', 'east', 'west','use']});
// input = (readline.question('What direction do you want to head to?\n')).toLowerCase();
// if(input === 'use'){
//     x += 2;
//     y++;
//     isOnLowerLv(x,y);
// }else{