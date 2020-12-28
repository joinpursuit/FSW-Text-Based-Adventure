const readline = require('readline-sync');
// console.clear(); // clears the terminal can use when entering new scenario

const startGame = () => {
    menuOptions = [];
    menuOptions[1] = "New Game";
    menuOptions[2] = "Load Game(Work in Progress)";
    menu();

}

const quitGame = () => {
    console.log('Have a nice life!');
    process.exit();
}

const gameLoop = () =>{
    console.log('Game started');
    playerShip();
}

const menu = () => {
    do {
        let gameMenu = readline.keyInSelect(menuOptions, 'Please choose your option',{cancel: 'Quit Game'});
        switch(gameMenu) {
            case 1:
                console.log('Let\'s start!');
                gameLoop();
                break;
            case 2:
                console.log('Load not working yet');
                break;
            case 3:
                console.log('Save not working yet');
                break;
            default:
                quitGame();
        }
    } while(gameMenu != 4);
}

const actions = () => {
    let item = ['weapon', 'ship'];
    while (true) {
        availableActions = ['left', 'right', 'forward', 'back', 'up', 'down', 'inventory',
                            'grab', 'use', 'enter', 'exit', 'map', 'help', 'menu', 'quit'];
        input = readline.prompt({limit: availableActions});      
        if (input === 'left') {
            console.log(`You moved ${input}`);
            // readline.keyInYN('Would you like to move again?');
        }
        if (input === 'right') {
            console.log(`You moved ${input}`);
        }
        if (input === 'forward') {
            console.log(`You moved ${input}`);
        }
        if (input === 'back') {
            console.log(`You moved ${input}`);
        }
        if (input === 'up') {
            console.log(`You moved ${input}`);
        }
        if (input === 'down') {
            console.log(`You moved ${input}`);
        }
        if (input === 'inventory'){
            console.log(`You opened ${input}`);
        }
        if (input === 'grab'){
            console.log(`You ${input}bed ${item[0]}`);
        }
        if (input === 'use'){
            console.log(`You ${input}d a ${item[0]}`);
        }
        if (input === 'enter'){
            playerShip();
            console.log(`You ${input}ed the ${item[1]}`);
        }
        if (input === 'exit'){
            console.log(`You ${input}ed the ${item[1]}`);
        }
        if (input === 'map'){
            console.log(`You opened up the ${input}`);
        }
        if (input === 'help'){
            console.log(`You requested ${input}`);
        }
        if (input === 'menu'){
            menuOptions[3] = "Save Game(Work in Progress)";
            menu();
        }
        if (input === 'quit') {
            quitGame();
        }
    }
}

const playerShip = () =>{
    actions();
    let upperDeck, bridge, lowerDeck, conferenceRoom;
    let captainsQuaters, mainHold, engineRoom;
    // if in the bridge you can only go to the converence room
    // if in the converence room you can go to the bridge or captain's quarters
    // also conference room as access to lower deck
    if(upperDeck){
        if(bridge){
            if (input === 'use') {
                console.log(`You used the Navicomputer`);
            }
            if (input === 'back') {
                console.log(`You moved ${input} into the Conference Room`);
                conferenceRoom = true;
            } 
        }else if (conferenceRoom){
            if (input === 'forward') {
                console.log(`You moved ${input} into the Bridge`);
                bridge = false;
            } 
            if (input === 'back') {
                console.log(`You moved ${input} into the Captain's Quarters`);
            }
            if (input === 'use') {
                console.log(`You ${input}d the latter to go to the lower deck`);
                upperDeck = false;
                lowerDeck = true;
            } 
        }else if(captainsQuaters){
            if (input === 'forward') {
                console.log(`You moved ${input} into the Conference Room`);
            } 
        }
    }
    else if(lowerDeck){
        if(mainHold){
            console.log('You are in the Main Hold');
            console.log('You see troop bay release door');
        }else if(engineRoom){
            console.log('You are in the Engine Room');
        }else if(enterRamp){
            console.log('You used the Entry Ramp to enter the ship');
        }
    }
    // View of
        // Medical Bay
        // Crew Quarters
        // Cargo Hold
        // Escape Pod
        // Cargo Elevator
        // Storage
    // }
    // Outside Ship
        // 2 Laser Cannons
}

startGame();