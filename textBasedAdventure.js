const readline1 = require('readline-sync')

let nameInput = readline1.question('Enter your name Player: ')

const startGame = () => {

        console.log('Hello ' + nameInput + '! Welcome to Escaping Shadows \n');

    if(readline1.keyInYN('Would you like to play?\n')) {
    playGame();
    } else {
    leaveGame();

    }

}

const playGame = () => {
    
    console.log('Before you try to escape let me tell you about the game first.');
    console.log("You were kidnapped and are being held for ransom, However you kidnapper is most likely going to kill you once he get's the money. Your goal is to escape from the abandoned motel you've been placed in.\n")
    console.log("HOW TO PLAY: In this game you will be givin choices that will be wrapped in '' to choose the option you wan type choice, wether it be to choose a road or picking a piece of equipment and what you have to do it type the option that you will like, but do please choose wisely.\n")
    console.log('LOADING...\n');
    console.log("You have just arrived at motel your eyes are covered and your mouth duct-taped shut your arms are tied you smell the scent of tobacco in the air. your capturer lifts the blind fold and rips the tape off your mouth. while slowly trying to slip through the ties you see the man infront of you standing infront of a intense light but all you see is a silhouette.\n");
    console.log("he doesn't say a word he walks away towards the door he takes one last look at you before he steps out for a smoke almost as if checking for any way for you to escape.")
    console.log("the room is empty and only has 1 door and 1 sealed of window with a hole on the bottom-left corner of it Who know's what inside?")
    
    searchOrExit()
    stairsOrDarkness()
    

}

const leaveGame = () => {
    console.log("thanks for playing my game, please play again if you would like. till next time :-)")
}

const leaveGameWin = () => {
    console.log("CONGRATS! YOU ESCAPED!!!")
    console.log('Thanks for playing my game, till next time :)');
    process.exit()

}

const leaveGameLose = () => {
    console.log("you were so close, Hope you enjoyed my game please play again to discover other routes.")
    process.exit()
}

const restartGame = () => {
          
    if(readline1.keyInYN('are you sure you want to restart?')){
           playGame()
       }    
}

function searchOrExit () {
    let input = readline1.question("you finally slip through the ties you can either 'exit' the room or 'search' the hole by the window. What do you choose?\n");
    if (input === 'exit') {
        console.log("you exit the room and find your self in the middle of a hallway, on your left there are 'stairs' that lead downstairs and your right is the hallway that fades out into the 'darkness'");
    } else if (input === 'search') {
        console.log("you search the hole and find a box of matches with the name 'Sunshine Motel' if you find a phone it will be easy to get the police to come. you step outside the room and see 'stairs' on your left that lead downstairs on your right the hallway stretches into 'darkness'.");
    } else if (input === 'restart') {
        restartGame()
    } 
    else {
        invalidInput();
        searchOrExit()
    }
    
}

function stairsOrDarkness () {
    let input = readline1.question("which way do you choose?\n")
    if(input === 'stairs') {
        console.log("you take the stairs down and find a glass 'bottle' you can pick it up or 'leave' it")
        bottle()
    } else if (input === 'darkness') {
        console.log("you walk into the darkness and after walking 20 steps you find a small 'vent' opened to your left with grate hangin by the hinges. You can either enter the vents or keep moving 'forward'.")
        ventOrForward()
    } else if(input === 'restart') {
        restartGame()
    } else {
        invalidInput();
        stairsOrDarkness()
    }
}

function bottle() {
    let input = readline1.question("what do you choose?\n")
    if(input === 'bottle') {
        console.log('decoy item aquired! you continue to move downstairs')
    } else if (input === 'leave') {
        console.log('you move continue going downstairs.')
    } else if (input === 'restart') {
        restartGame()
    }  else {
        invalidInput();
        bottle();  
    }
 }

function ventOrForward() {
    let input = readline1.question("what do you choose?\n")
    if (input === 'vent') {
        console.log("you enter the vent you crawl throught the vents you get up to a intersection you can either move 'left' or 'right'.\n")
        leftOrRight()
    } else if (input === 'forward') {
        console.log("you keep moving forward and see a room, you enter the room It's empty with a broken window, the 'window' is big enough for someone to fit in.\n")
        window()
    } else if (input === 'restart') {
        restartGame()
    } else {
        invalidInput();
        ventOrForward()
    }
}

function window () {
    let input = readline1.question("what do you choose?\n")
    if (input === 'window') {
        console.log("you slowly and steady move outside throught the window however you slip and fall glass breaks behind you as you fall and now your kidnapper knows where you are. He sprints towards the sound and see's you limping away he runs outside and reaches you with ease. YOU HAVE BEEN CAPTURED AND KILLED.\n")
        leaveGameLose()
    } else if (input === 'restart') {
        restartGame()
    } else {
        invalidInput();
        window()
    }
}

function leftOrRight () {
    let input = readline1.question("what do you choose?\n")
    if (input === 'left') {
        console.log("you crawl left as you keep on going the vent breaks apart under you as you fall you break your left ankle.\n")
        console.log("you manage to get up however you start to hear footsteps closing in on you. you move you way to a open area, You see 2 doors infront of you. door'1' has bloodstains on the door knob, door'2' has spiderwebs on the doorknob.")
        ventBreak()
        } else if (input === 'right') {
            console.log("you crawl right and move you way through the vent you open the grill and find yourself outside. you can either 'stay' or 'run' away.\n")
            stayOrRun()
        } else if (input === 'restart') {
            restartGame()
        } else {
            invalidInput()
            leftOrRight()
        }
}

function invalidInput() {
    console.log("Invalid input please type the option you want which is surrounded by ''.")
}

function stayOrRun () {
    let input = readline1.question("which do you choose?\n")
    if (input === 'stay') {
        console.log("are you crazy!? RRRRUUUUUNNNNN\n")
        stayOrRun()
    } else if (input === 'run') {
        console.log("great choice!")
        console.log("you run away and live to see another day.\n")
        leaveGameWin()
    } else if (input === 'restart') {
        restartGame()
    } else {
        invalidInput()
        stayOrRun()
    }
}


    
startGame()

/*(input > 1){
    console.log("you open the door and find your kidnapper on the opposite side. he captures you. You have failed to escape.")
    leaveGameLose()
    */ 
   