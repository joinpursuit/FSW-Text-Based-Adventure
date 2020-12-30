const readline = require('readline-sync');

//testing out import features
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
    // input = readline.keyInYN('Would you like to play?');
    // if(!input){
        // quitGame();
    // }else{
        console.log('Hello World');
        // getPlayerName();
        goToLocation();
        // getPlayerLocation();
        // playerLocation = [mapBuild.map[0][0]];
        // console.log(playerLocation[0]);
        // if(playerLocation[0] === 'Bridge'){
        //     console.log(`${fName} ${lName} is in the bridge`);
        // }
    // }
}

const getPlayerLocation = () => {
    // testing
}
const cantMove = () => {
    cantMoveOutput = console.log('You can\'t go that direction any more.');
}

const goToLocation = () => {
    readline.setDefaultOptions({limit: ['north', 'south', 'east', 'west']});
    input = (readline.question('What direction do you want to head to?\n')).toLowerCase();
    x = 2;
    y = 1;
    if(input === 'north'){
        if((x === 0 && y === 0) || (x === 0 && y === 1) || (x === 0 && y === 2)){
            if(y === 1){
                y--;
                isOnUpperLv(y);
            }else if(y === 2){
                y--;
                isOnUpperLv(y);
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
    if(input === 'south'){
        if((x === 0 && y === 0) || (x === 0 && y === 1) || (x === 0 && y === 2)){
            if(y === 0){
                y++;
                isOnUpperLv(y);
            }else if(y === 1){
                y++;
                isOnUpperLv(y);
            }else{
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
    if(input === 'east'){
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
            readline.setDefaultOptions({limit: ['cargo', 'elevator', 'storage' ]});
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
    if(input === 'west'){
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
}

const isOnUpperLv = (y) => {
    if(y === 0){
        console.log(mapBuild.map[0][0]);
    }else if(y === 1){
        console.log(mapBuild.map[0][1]);
    }else if(y === 2){
        console.log(mapBuild.map[0][2]);
    }
}

const isOnLowerLv = (x, y) => {
    if(x === 1 && y === 0){
        console.log(mapBuild.map[1][0]);
    }else if(x === 1 && y === 1){
        console.log(mapBuild.map[1][1]);
    }else if(x === 1 && y === 2){
        console.log(mapBuild.map[1][2]);
    }else if(x === 2 && y === 0){
        console.log(mapBuild.map[2][0]);
    }else if(x === 2 && y === 1){
        console.log(mapBuild.map[2][1]);
    }else if(x === 2 && y === 2){
        console.log(mapBuild.map[2][2]);
    }else if(x === 3 && y === 0){
        console.log(mapBuild.map[3][0]);
    }else if(x === 3 && y === 1){
        console.log(mapBuild.map[3][1]);
    }else if(x === 3 && y === 2){
        console.log(mapBuild.map[3][2]);
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