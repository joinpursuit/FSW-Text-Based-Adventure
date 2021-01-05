const readline = require('readline-sync');
const chalk = require('chalk');

const startGame = () => {
if(wantToPlay = readline.keyInYN(chalk.red.bold('Hello, do you want to play a game?'))){
    gameIntro();
}else{
    leaveGame1();
}
};


const leaveGame1 = () => {
    console.log(chalk.blue.bold("You were a bad candidate anyway. Goodbye!"));
    process.exit();
};

const leaveGame2 = () => {
    console.log(`Come back when you're 18. See ya later ${nameInput}!`);
    process.exit();
};

const leaveGame3 = () =>{
    console.log('Seems you died. GAME OVER');
}


let nameInput = readline.question("What is your name? \n")

function gameIntro(){
    console.log(`Welcome to my experiment ${nameInput}!.....I mean...game. \n`);
};

function howOld (){
let ageInput = readline.question('How old are you?\n')
    if(ageInput < 18){
        console.log("Oh no, you're just a baby! Enjoy your life!");
        leaveGame2()
    }else if(ageInput >= 18){
        console.log("Yes! " + ageInput + "," + " you're old...the perfect candidate for my experi- .....game. \n")
    }else{
        console.log(`That was not a valid input ${nameInput}`);
        console.log('Let\'s try this again');
        console.log('I don\'t like repeating myself, but ahem');
        howOld();
    }
};

function howToPlay(){
console.log('Here is how you play:');
    let movement = ["'forward'", "'right'", "'left'", "'up'"]
        for(let i = 0; i < movement.length; i++){
            console.log(`Type ${movement[i]} to move in that direction`);
        }
            console.log("Type 'grab' to grab an item.");
            console.log("Type 'swing' to swing your arm");
}

function story (){
if(readline.keyInYN('Are you ready? \n')){
    console.log('You wake up alone in a room lit with red lighting');
    console.log('As you move to look around, you notice pain in your body');
    console.log('You hear beeping noises all around you');
    console.log('You look down at your body and see 2 wires attached to it');
    console.log('One wire for each of your lungs');
    console.log('You must get your organs so you can go home');
    console.log('The building you\'re in only has electricity for a few hours \n');
    console.log('Before you are 2 doors');
    console.log('Door 1 leads to your organs...');
    console.log('Door 2 leads you to the outside...')
    console.log('The nearest hospital is miles away...');
    console.log('If you choose to stay, just know there are traps all througout the building \n')
}else{
        leaveGame1();
       };
    
};

function doorChoice(){
console.log('The door you choose holds your destiny \n');
let doorChoice = readline.question('Which door will you choose, 1 or 2? \n');
let firstDoor = '1'
let SecondDoor = '2'
    if(doorChoice === firstDoor){   
        console.log('It smells disgusting');
        console.log('Must be your organs rotting');
        console.log('Hurry Up! \n');
    }else if(doorChoice === SecondDoor){
        console.log('The door behind you is shut')
        console.log('The forest surrounds you on all sides')
        console.log(`There is nowhere to go ${nameInput}`)
        leaveGame3();
        restartGame();
    }else{
        console.log(`That wasn't a choice ${nameInput}`)
        console.log('You don\'t listen')
        doorChoice();
    };
};


const moveOne = () =>{
console.log('To the left of you there is a long dark hallway with loud music');
console.log('Infront of you there is a staircase, that leads down to a long hallway with a very bright light at the end');
let l = 'left'
let f = 'forward'
let firstMove = readline.question('Which path will you take, left or forward? \n')
    if(firstMove === l){
        console.log(`I see that you like music ${nameInput}`);
        console.log('Lets hope that love leads to your organs');
        console.log('The music gets louder with every step you take');
        console.log("But you can't seem to find the source")
    }else if(firstMove === f){
        console.log("You're walking the very long and dark hallway");
    }else{
        console.log(`You don\'t listen much ${nameInput}`);
        console.log('That was not a valid input');
        console.log("I don't like repeating myself, but ahem");
        moveOne();
    }
};

const moveTwo = () =>{
console.log(`Looks like you've reached another crossroads ${nameInput}`);
console.log('Both paths are dark');
if(readline.keyInYN('Do you want to keep walking?')){
    console.log('Your bravery takes my breath away');
    console.log('That takes a lot of guts!');
}else{
    console.log(`Unfortunately this game isn't for scary cats like you ${nameInput}`)
    leaveGame3()
    restartGame();
    };
};
    function moveThree(){
    let r = 'right'
    let u = 'up'
    console.log('Before you is a staircase that leads to the kitchen');
    console.log('To the right of you there is a bedroom with a refrigerator in it.....it reeks in there!');
    console.log('Let\'s hope you choose the correct path this time');
    let secondMove = readline.question('Which way will you go, right or up? \n')
        if(secondMove === r){
            console.log('It seems you like making the "right" choice');
            console.log('Except this time, the "right choice, wasn\'t right');
            leaveGame3();
            restartGame();
        }else if(secondMove === u){
            console.log('The stairs are sliperry');
            console.log('The smell of iron consumes you');
            console.log('Moonlight comes in through the window');
            console.log('Allowing you to see a clear bloody glass box');
            console.log('It\'s your lungs!')
                if(readline.keyInYN('Are you ready to brake the glass, and get your lungs? \n')){
                    console.log('You should make better choices')
                    console.log('You have no object to brake the glass');
                    console.log('You cut your arm while braking the class and bled out');
                    leaveGame3();
                    restartGame();
                }else{
                    console.log('Great choice!');
                    console.log('You need a hammer to brake the glass')
                }
        }else{
            console.log(`You don\'t listen ${nameInput}. That was not a choice`);
            console.log('I don\'t like repeating myself, but here goes nothing')
            moveThree();
            }
        }

function smashBox (){
let choice1 = 'grab'
let choice2 = 'leave'
let choice3 = 'swing'
console.log('The hammer is on the window sill');
let action = readline.question('Will you grab or leave the hammer? \n')
if(action === choice1){
    console.log('If you swing your arm, you\'ll brake the glass')
    console.log('You\'re so close to survival!');
    action = readline.question('Ready?..... Swing now!\n')
        if(action === choice3){
            console.log('congratulations, you\'ve acquired your lungs!');
            console.log('Your determination is truly breathtaking')
        }else{
            console.log('You should have swang');
            leaveGame3();
            restartGame();
            }
}else if(action === choice2){
    console.log(`You don\'t really make good choices ${nameInput}`);
    console.log('Why would you leave?')
    leaveGame3();
    restartGame(); 
}else{
    console.log('You don\'t listen');
    console.log(`That wasn\'t a choice ${nameInput}`)
    console.log('I guess I\'ll have to repeat myself...ahem')
    smashBox();
    }
};

function givenSurgeon () {
console.log('You must be out of breath');
console.log('Now that you have your lungs, you must choose a surgeon');
console.log('I\'ll let you choose the surgeon of your liking for now');
let givenSurgeon = ['Butcher', 'Retired Clown', 'Award-Winning Surgeon', 'Magician']
index = readline.keyInSelect(givenSurgeon, 'Which surgeon?')
    if(index === -1){
       process.exit()
    }else if(index === 2){
        console.log('I knew you would pick' + givenSurgeon[index]);
        console.log('You can keep this, or try your luck with another surgeon')
        console.log('this one will be appointed to you')
            if(readline.keyInYN('Do you want to take your chances on another surgeon?')){
                chooseSurgeon();
            }else{
                console.log(`Well, good luck ${nameInput}, see ya never`);
                process.exit();
            }
    }else{
        console.log('Your' + givenSurgeon[index] + '.')
        console.log('Goodbye!');
        process.exit();
    }
};

const chooseSurgeon = () =>{
console.log('Now that you have your lungs');
console.log('You must be appointed a surgeon');
console.log('Your life will be in their hands');
console.log('May the odds be in your favor');
if(readline.keyInYN('Are you ready to meet your surgeon?')){
let surgeon = ['Butcher', 'Retired Clown', 'Award-Winning Surgeon', 'Magician'];
 let chosenSurgeon = surgeon[Math.floor(Math.random() * surgeon.length)]
    if(chosenSurgeon === surgeon[2]){
        console.log(`Seems luck was on your side.....the ${chosenSurgeon} will perform your surgery, and give you back the breath of life!`);
        restartGame();
    }else{
        console.log(`The ${chosenSurgeon} tried to give you back the breath of life but....`);
        leaveGame3();
        restartGame();
    }
}else{
    console.log('How rude! What kind of person are you?')
    console.log('Your surgeon was looking forward to meeting you')
    leaveGame1();
}
};

function restartGame (){
if(readline.keyInYN('Play Again?')){
    howToPlay();
    story();
    doorChoice();
    moveOne();
    moveTwo();
    moveThree();
    smashBox();
    chooseSurgeon();
}else{
    leaveGame1();
}
}


startGame();
howOld();
howToPlay();
story();
doorChoice();
moveOne();
moveTwo();
moveThree();
smashBox();
givenSurgeon();
chooseSurgeon();
restartGame();