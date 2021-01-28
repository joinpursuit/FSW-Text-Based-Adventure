const readline = require('readline-sync');
const chalk = require('chalk');

const startGame = () => {
if(wantToPlay = readline.keyInYN(chalk.red.bold(`Hello ${nameInput}, do you want to play a game?\n`))){
    gameIntro();
}else{
    leaveGame();
}
};

const leaveGame = (goodbyeMessage) => {
goodbyeMessage = `You were a bad candidate anyway. Goodbye!`
    console.log(chalk.blue.bold(goodbyeMessage));
    process.exit();
};


let nameInput = readline.question(chalk.red.bold("What is your name?\n"));

function gameIntro(){
    console.log(chalk.magenta.bold(`Welcome to my experiment ${nameInput}!.....I mean...game.\n`));
};

function howOld (){
let ageInput = readline.question(chalk.red.bold('How old are you?\n'));
if(ageInput < 18){
    console.log(chalk.magenta.bold(`Oh no, you're just a baby!\nCome back when you're 18. See ya later ${nameInput}!`));
    leaveGame()
}else if(ageInput >= 18){
    console.log(chalk.magenta.bold("Yes! " + ageInput + "," + " you're old...the perfect candidate for my experi- .....game. \n"));
    howToPlay();
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
            console.log(chalk.yellow.bold("Type 'swing' to swing your arm."));
};

const story = () => {
if(readline.keyInYN(chalk.red.bold('Are you ready? \n'))){
    console.log(chalk.magenta.bold('You woke up alone in a cold, dimly lit room.\nAs you move to look around, you feel pain in your body'));
    console.log(chalk.magenta.bold('You hear beeping noises all around you...you look down at your body and notice two wires attached to it.\n'));
    console.log(chalk.magenta.bold('One wire for each of your beautiful lungs.\n'));
    console.log(chalk.magenta.bold('Your goal here is to get your organs back so that you can go home to your family.'));
    console.log(chalk.magenta.bold('The building you\'re in only has electricity for the next few hours.\n'));
    console.log(chalk.magenta.bold('Before you are two doors:\nDoor 1 leads to your organs...\nDoor 2 leads you to the outside world...\n'));
    console.log(chalk.magenta.bold('Just remember that the nearest hospital is miles away...'));
    console.log(chalk.magenta.bold('If you choose to stay, however, just know there are traps all througout the building.\n'));
}else{
    leaveGame();
}
};

const doorChoice = () => {
console.log(chalk.magenta.bold('The door you choose holds your destiny my friend.... \n'));
let choice = readline.question(chalk.red.bold('Which door will you choose, 1 or 2? \n'));
let firstDoor = '1'
let SecondDoor = '2'
while(choice){
    if(choice === firstDoor){
        console.log(chalk.magenta.bold('It smells disgusting in here! Must be your organs rotting.\nHurry Up!'));
        choice = false
        break;
    }else if(choice === SecondDoor){
        console.log(chalk.magenta.bold(`The door behind you just locked.\nThe forest surrounds you on all sides!\nThere is nowhere to go ${nameInput}.\n`));
        console.log(chalk.blue.bold('Seems you died my friend. GAME OVER'));
        choice = false
        restartGame()
    }else{
        console.log(chalk.green.italic(`That wasn't a choice ${nameInput}. You don't really listen.\nI don\'t usually like repeating myself, but ahemmm.`));
        choice = readline.question(chalk.red.bold('Which door will you choose, 1 or 2? \n'))
    }
}
};


const moveOne = () =>{
console.log(chalk.magenta.bold('To the left of you there is a long dark hallway with loud music.'));
console.log(chalk.magenta.bold('In front of you there is a staircase, that leads down to a long hallway with a very bright light at the end of it.'));
let l = 'left'
let f = 'forward'
let firstMove = readline.question(chalk.red.bold('Which path will you take, left or forward? \n'));
    if(firstMove === l){
        console.log(chalk.magenta.bold(`I see that you like music ${nameInput}. Lets hope that love leads to your organs!\n`));
        console.log(chalk.magenta.bold('As you\'re walking, you notice the music gets louder and louder with every step you take.\nHowever, you can\'t seem to find the source.\n'));
    }else if(firstMove === f){
        console.log(chalk.magenta.bold(`You're walking the very long and dark hallway. You might start feeling out of breath ${nameInput}.\n`));
    }else{
        console.log(chalk.green.italic(`You don\'t listen much ${nameInput}.\nThat was not a valid input!\nI don't like repeating myself, but ahemmmm.`));
        moveOne();
    }
};

const moveTwo = () =>{
console.log(chalk.magenta.bold(`Looks like you've reached another crossroads ${nameInput}.\nBoth paths are dark.`));
if(readline.keyInYN(chalk.red.bold('Do you want to keep walking?\n'))){
    console.log(chalk.magenta.bold('Your bravery takes my breath away. That takes a lot of guts!\n'));
}else{
    console.log(chalk.magenta.bold(`Unfortunately this game isn't for scary cats like you ${nameInput}!`));
    leaveGame()
    };
};

function moveThree(){
let r = 'right'
let u = 'up'
    console.log(chalk.magenta.bold('Before you is a staircase that leads to the kitchen, but I\'m sure you\'re not hungry.'));
    console.log(chalk.magenta.bold('To the right of you there is a bedroom with a refrigerator in it.....it reeks in there!\n'));
    console.log(chalk.magenta.bold(`Let's hope you choose the right path this time ${nameInput}.\n`));
    let thirdMove = readline.question(chalk.red.bold('Which way will you go, right or up? \n'));
        if(thirdMove === r){
            console.log(chalk.magenta.bold(`It seems you like making the "right" choice.\nExcept this time, the "right" choice, wasn\'t right ${nameInput}!\n`));
            console.log(chalk.blue.bold('Seems you died my friend. GAME OVER'));
            restartGame();
        }else if(thirdMove === u){
            console.log(chalk.magenta.bold('The stairs are sliperry, and the smell of iron consumes you.'));
            console.log(chalk.magenta.bold('Moonlight comes in through the window, allowing you to see a clear, bloody glass box.\n'));
            console.log(chalk.red.italic('It\'s your lungs!\n'));
                if(readline.keyInYN(chalk.red.bold('Are you ready to brake the glass, and get your lungs? \n'))){
                    console.log(chalk.magenta.bold(`You should make better choices ${nameInput}. You have no object to brake the glass with.\n`));
                    console.log(chalk.red.bold('You cut your arm while braking the class and bled out. What a bloody mess....\n'));
                    console.log(chalk.blue.bold('Seems you died my friend. GAME OVER'));
                    restartGame();
                }else{
                    console.log(chalk.red.italic('\nGreat choice!\n'));
                    console.log(chalk.magenta.bold('You will need a hammer to brake the glass!'));
                }
        }else{
            console.log(chalk.green.italic(`You don\'t listen much ${nameInput}. That was not a choice.\nI don\'t like repeating myself, but here goes nothing...`));
            moveThree();
            }
        };

const smashBox = () => {
let choiceOne = 'grab'
let choiceTwo = 'leave'
let choiceThree = 'swing'
console.log(chalk.magenta.bold('The hammer is on the window sill.\n'));
let action = readline.question(chalk.red.bold('Will you grab or leave the hammer? \n'));
if(action === choiceOne){
    console.log(chalk.red.italic('\nGreat choice!\n'));
    console.log(chalk.magenta.bold('If you swing your arm, you\'ll brake the glass.\nYou can almost smell the victory! You\'re so close to survival!'));
    action = readline.question(chalk.red.bold('Ready?..... Swing now!\n'));
        if(action === choiceThree){
            console.log(chalk.red.italic('\ncongratulations, you\'ve acquired your lungs!\n'));
            console.log(chalk.magenta.bold('Your determination is truly breathtaking.\n'));
        }else{
            console.log(chalk.magenta.bold(`You should have swang ${nameInput}.`));
            console.log(chalk.blue.bold('Seems you died my friend. GAME OVER'));
            restartGame();
            }
}else if(action === choiceTwo){
    console.log(chalk.magenta.bold(`You don\'t really make good choices ${nameInput}.`));
    console.log(chalk.magenta.bold('Why would you leave?'));
    leaveGame()
}else{
    console.log(chalk.green.italic('You don\'t listen'));
    console.log(chalk.green.italic(`That wasn\'t a choice ${nameInput}.`));
    console.log(chalk.green.italic('I guess I\'ll have to repeat myself...ahem'));
    smashBox();
    }
};

function chooseSurgeon (){
console.log(chalk.magenta.bold('You must be out of breath with all that swinging.'));
console.log(chalk.magenta.bold('Now that you have obtained your lungs, you must choose a surgeon.\n'));
console.log(chalk.magenta.bold('I\'ll let you choose the surgeon of your liking for now...\n'));
let surgeonChoice = ['Butcher', 'Retired Clown', 'Award-Winning Surgeon', 'Magician'];
index = readline.keyInSelect(surgeonChoice, 'Which surgeon woudld you like?\n');
    if(index === -1){
       process.exit();
    }else if(index === 2){
        console.log(chalk.magenta.bold('I don\'t understand why everyone keeps choosing the ' + surgeonChoice[index] +'.'));
        console.log(chalk.magenta.bold('\nlet me tell you a little story about the ' + surgeonChoice[index] + '.'));
        console.log(chalk.magenta.italic('\nFive years ago, he was in a traggic accident where he lost all 4 of his limbs, and punctured a lung.'));
        console.log(chalk.magenta.italic('Now he sits in this building waiting for people like you ' + nameInput + '.' + ' People who choose to participate in this experiment.'));
        console.log(chalk.magenta.italic('Those who don\'t make it, become organ donors. donating their body parts, to him.\n'));
        console.log(chalk.magenta.bold('You can keep the ' + surgeonChoice[index] + ' or you can try your luck with another surgeon.\n'));
        console.log(chalk.magenta.bold('This one will be appointed to you, however.\n'));
            if(readline.keyInYN(chalk.red.bold('Would you like to take your chances on another surgeon?\n'))){
                givenSurgeon();
            }else{
                console.log(chalk.magenta.bold(`\nWell, then I guess...good luck ${nameInput}, see ya never.`));
                console.log(chalk.blue.bold('Seems you died my friend. GAME OVER'));
                restartGame();
            }
    }else if(index === 0){
        console.log(chalk.red.italic('The ' + surgeonChoice[index] + '?' + ' That\'s a great choice!'));
        console.log(chalk.magenta.bold('Everyone always underestimates the ' + surgeonChoice[index] + ',' + ' but he\'s actually the best surgeon here.\n'));
        console.log(chalk.magenta.italic('He was a ' + surgeonChoice[index] + ' 10 years ago, but fell so much in love with cutting into muscle, that he decided to become a surgeon.\n'));
        console.log(chalk.yellow.bold(`Congratulations! You\'ve won the game ${nameInput}! You'll be home in no time!`));
        process.exit();
    }else{
        console.log(chalk.magenta.bold('The ' + surgeonChoice[index] + ' will be your surgeon and try to give you back the breath of life!\n'));
        console.log(chalk.magenta.bold('Good luck! ' + nameInput + '.' + ' You\'ll need it!'));
        console.log(chalk.blue.bold('Seems you died my friend. GAME OVER'));
        restartGame();
    }
};

function givenSurgeon (){
console.log(chalk.magenta.bold('Since you decided to judge a book by it\'s cover, and made the wrong choice. You must now be appointed a surgeon.\n'));
console.log(chalk.magenta.bold(`Your life will be in their hands...may the odds be in your favor ${nameInput}.`));
if(readline.keyInYN(chalk.red.bold('Are you ready to meet your surgeon?'))){
let surgeon = ['Butcher', 'Retired Clown', 'Award-Winning Surgeon', 'Magician'];
 let giveSurgeon = surgeon[Math.floor(Math.random() * surgeon.length)]
    if(giveSurgeon === surgeon[2]){
        console.log(chalk.green.bold(`Seems luck is just not on your side ${nameInput}.....the ${giveSurgeon} will still perform your surgery.\n`));
        console.log(chalk.green.bold('See ya never!'));
        console.log(chalk.blue.bold('Seems you died my friend. GAME OVER'));
        restartGame();
    }else if(giveSurgeon === surgeon[0]){
        console.log(chalk.red.italic('The ' + giveSurgeon + '!' + ' You\'re in luck!\n'));
        console.log(chalk.magenta.bold('Everyone always underestimates the ' + giveSurgeon + ',' + ' but he\'s actually the best surgeon here.\n'));
        console.log(chalk.magenta.italic('He was a ' + giveSurgeon + ' 10 years ago, but he fell so much in love with cutting into muscle, that he decided to become a surgeon.\n'));
        console.log(chalk.yellow.bold(`Congratulations! You\'ve won the game ${nameInput}!`));
        process.exit();
    }else{
        console.log(chalk.magenta.bold(`The ${giveSurgeon} will be your surgeon and try to give you back the breath of life!\n`));
        console.log(chalk.magenta.bold('Good luck! ' + nameInput + '.' + ' You\'ll need it!'));
        console.log(chalk.blue.bold('Seems you died my friend. GAME OVER'));
        restartGame();
    }
}else{
    console.log(chalk.cyan.bold('How rude! What kind of person are you?\nThe surgeon was looking forward to meeting you!\nThere are no more surgeons availble for your procedure.'));
    leaveGame();
}
};

function restartGame (){
if(readline.keyInYN(chalk.red.bold('Play Again?\n'))){
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
    leaveGame();
}
}


startGame();
howOld();
story();
doorChoice();
moveOne();
moveTwo();
moveThree();
smashBox();
chooseSurgeon();
givenSurgeon();
restartGame();