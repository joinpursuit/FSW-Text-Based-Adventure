const readline = require('readline-sync');
const chalk = require('chalk');
const { bold } = require('chalk');

const startGame = () => {
if(wantToPlay = readline.keyInYN(chalk.red.bold(`Hello ${nameInput}, do you want to play a game?\n`))){
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
    console.log(chalk.blue.bold(`Come back when you're 18. See ya later ${nameInput}!`));
    process.exit();
};

const leaveGame3 = () =>{
    console.log(chalk.blue.bold('Seems you died my friend. GAME OVER'));
}


let nameInput = readline.question(chalk.red.bold("What is your name?\n"));

function gameIntro(){
    console.log(chalk.magenta.bold(`Welcome to my experiment ${nameInput}!.....I mean...game.\n`));
};

function howOld (){
let ageInput = readline.question(chalk.red.bold('How old are you?\n'));
    if(ageInput < 18){
        console.log(chalk.magenta.bold("Oh no, you're just a baby! Enjoy your life!"));
        leaveGame2()
    }else if(ageInput >= 18){
        console.log(chalk.magenta.bold("Yes! " + ageInput + "," + " you're old...the perfect candidate for my experi- .....game. \n"));
    }else{
        console.log(chalk.green.italic(`That was not a valid input ${nameInput}\n`));
        console.log(chalk.green.italic('I don\'t usually like repeating myself, but ahemmm.'));
        howOld();
    }
};

function howToPlay(){
console.log(chalk.red.bold('Here is how you play:'));
    let movement = ["'forward'", "'right'", "'left'", "'up'"]
        for(let i = 0; i < movement.length; i++){
            console.log(chalk.yellow.bold(`Type ${movement[i]} to move in that direction.\n`));
        }
            console.log(chalk.yellow.bold("Type 'grab' to grab an item.\n"));
            console.log(chalk.yellow.bold("Type 'swing' to swing your arm.\n"));
};

const story = () => {
if(readline.keyInYN(chalk.red.bold('Are you ready? \n'))){
    console.log(chalk.magenta.bold('You woke up alone in a cold, dimly lit room.'));
    console.log(chalk.magenta.bold('As you move to look around, you feel pain in your body.'));
    console.log(chalk.magenta.bold('You hear beeping noises all around you...you look down at your body and notice 2 wires attached to it.\n'));
    console.log(chalk.magenta.bold('One wire for each of your beautiful lungs.\n'));
    console.log(chalk.magenta.bold('Your goal here is to get your organs back so that you can go home to your family.'));
    console.log(chalk.magenta.bold('The building you\'re in only has electricity for the next few hours.\n'));
    console.log(chalk.magenta.bold('Before you are 2 doors'));
    console.log(chalk.magenta.bold('Door 1 leads to your organs...'));
    console.log(chalk.magenta.bold('Door 2 leads you to the outside world...\n'));
    console.log(chalk.magenta.bold('Just remember that the nearest hospital is miles away...'));
    console.log(chalk.magenta.bold('If you choose to stay, however, just know there are traps all througout the building \n'));
}else{
    leaveGame1();
}
};

const doorChoice = () => {
console.log(chalk.magenta.bold('The door you choose holds your destiny my friend.... \n'));
let choice = readline.question(chalk.red.bold('Which door will you choose, 1 or 2? \n'));
let firstDoor = '1'
let SecondDoor = '2'
    if(choice === firstDoor){   
        console.log(chalk.magenta.bold('It smells disgusting in here! Must be your organs rotting.'));
        console.log(chalk.magenta.bold('Hurry Up! \n'));
    }else if(choice === SecondDoor){
        console.log(chalk.magenta.bold('The door behind you just locked.'));
        console.log(chalk.magenta.bold('The forest surrounds you on all sides!'));
        console.log(chalk.magenta.bold(`There is nowhere to go ${nameInput}.`));
        leaveGame3();
        restartGame();
    }else{
        console.log(chalk.green.italic(`That wasn't a choice ${nameInput}. You don't really listen.`));
        console.log(chalk.green.italic('I don\'t usually like repeating myself, but ahemmm.'));
        doorChoice();
    }
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
    let thirdMove = readline.question('Which way will you go, right or up? \n')
        if(thirdMove === r){
            console.log('It seems you like making the "right" choice');
            console.log('Except this time, the "right choice, wasn\'t right');
            leaveGame3();
            restartGame();
        }else if(thirdMove === u){
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

const smashBox = () => {
let choiceOne = 'grab'
let choiceTwo = 'leave'
let choiceThree = 'swing'
console.log('The hammer is on the window sill');
let action = readline.question('Will you grab or leave the hammer? \n')
if(action === choiceOne){
    console.log('If you swing your arm, you\'ll brake the glass')
    console.log('You\'re so close to survival!');
    action = readline.question('Ready?..... Swing now!\n')
        if(action === choiceThree){
            console.log('congratulations, you\'ve acquired your lungs!');
            console.log('Your determination is truly breathtaking')
        }else{
            console.log('You should have swang');
            leaveGame3();
            restartGame();
            }
}else if(action === choiceTwo){
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

function chooseSurgeon (){
console.log('You must be out of breath my friend.');
console.log('Now that you have obtained your lungs, you must choose a surgeon.\n');
console.log('I\'ll let you choose the surgeon of your liking for now...\n');
let surgeonChoice = ['Butcher', 'Retired Clown', 'Award-Winning Surgeon', 'Magician'];
index = readline.keyInSelect(surgeonChoice, 'Which surgeon woudld you like?\n');
    if(index === -1){
       process.exit();
    }else if(index === 2){
        console.log('I don\'t understand why everyone keeps choosing the ' + surgeonChoice[index] +'.');
        console.log('\nlet me tell you a little story about the ' + surgeonChoice[index]);
        console.log('Five years ago, he was in a traggic accident where he lost all 4 of his limbs and a lung.');
        console.log('Now he sits in this building waiting for people like you ' + nameInput + '.' + ' People who choose to participate in this experiment.');
        console.log('Those who don\'t make it, become organ donors. donating their body parts, to him.');
        console.log('You can keep the ' + surgeonChoice[index] + ' or, you can try your luck with another surgeon.\n');
        console.log('This one will be appointed to you, however.');
            if(readline.keyInYN('Would you like to take your chances on another surgeon?')){
                givenSurgeon();
            }else{
                console.log(`Well, then I guess...good luck ${nameInput}, see ya never.`);
                restartGame();
            }
    }else if(index === 0){
        console.log('The ' + surgeonChoice[index] + '?' + ' That\'s a great choice!');
        console.log('Everyone always underestimates the ' + surgeonChoice[index] + ',' + ' but he\'s actually the best surgeon here.');
        console.log('He was a ' + surgeonChoice[index] + ' 10 years ago, but fell so much in love with cutting into muscle, that he decided to become a surgeon.\n');
        console.log(`Congratulations! You\'ve won the game ${nameInput}!`);
        process.exit();
    }else{
        console.log('The ' + surgeonChoice[index] + ' will be your surgeon and try to give you back the breath of life!\n');
        console.log('Good luck!' + nameInput);
        restartGame();
    }
};

function givenSurgeon (){
console.log('Since you decided to judge a book by it\'s cover, and made the wrong choice. You must now be appointed a surgeon.\n');
console.log(`Your life will be in their hands...may the odds be in your favor ${nameInput}.`);
if(readline.keyInYN('Are you ready to meet your surgeon?')){
let surgeon = ['Butcher', 'Retired Clown', 'Award-Winning Surgeon', 'Magician'];
 let giveSurgeon = surgeon[Math.floor(Math.random() * surgeon.length)]
    if(giveSurgeon === surgeon[2]){
        console.log(`Seems luck is just not on your side ${nameInput}.....the ${giveSurgeon} will still perform your surgery.`);
        console.log('See ya never!');
        restartGame();
    }else if(giveSurgeon === surgeon[0]){
        console.log('The ' + surgeon[index] + '?' + ' That\'s a great choice!');
        console.log('Everyone always underestimates the ' + surgeon[index] + ',' + ' but he\'s actually the best surgeon here.');
        console.log('He was a ' + surgeon[index] + ' 10 years ago, but he fell so much in love with cutting into muscle, that he decided to become a surgeon.\n');
        console.log(`Congratulations! You\'ve won the game ${nameInput}!`);
        process.exit();
    }else{
        console.log(`The ${giveSurgeon} will be your surgeon and try to give you back the breath of life!\n`);
        console.log('Good luck! ' + nameInput);
        restartGame();
    }
}else{
    console.log('How rude! What kind of person are you?');
    console.log('The surgeon was looking forward to meeting you!\n');
    console.log('There are no more surgeons availble for your procedure');
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
    givenSurgeon();
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
chooseSurgeon();
givenSurgeon();
restartGame();