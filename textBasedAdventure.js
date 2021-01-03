const readline = require('readline-sync')


const startGame = () => {
if(readline.keyInYN(`${nameInput} do you want to play a game?`)){
    playGame()
}else{
    leaveGame1()
}
};


const leaveGame1 = () => {
    console.log("You were a bad candidate anyway. Goodbye!");
    process.exit()
};

const leaveGame2 = () => {
    console.log(`Come back when you're 18. See ya later ${nameInput}!`);
    process.exit()
};

const leaveGame3 = () =>{
    console.log('You died. GAME OVER')
    process.exit()
}

let nameInput = readline.question("What is your name? \n")
const playGame = () => {
console.log(`Perfect! Welcome to my experiment ${nameInput}.....I mean...game. \n`);

let ageInput = readline.question('How old are you?\n')
    if(ageInput < 18){
        console.log("Oh no, you're just a baby! Enjoy your life!");
        leaveGame2()
    }else{
        console.log("Yes! " + ageInput + "," + " you're old...the perfect candidate for my experi- .....game. \n");
    }
};

function howToPlay(){
console.log('Here is how you play:');

let movement = ["'forward'", "'right'", "'left'", "'up'", "'down'"]
    for(let i = 0; i < movement.length; i++){
        console.log(`Type ${movement[i]} to move in that direction`);
    }
        console.log('Type "grab" to grab an item.');
        console.log('Type "swing" to swing your arm');

};


const story = () => {
 if(readline.keyInYN('Are you ready? \n')){
    console.log('You wake up alone in a room lit with red lighting');
    console.log('As you move to look around, you notice pain in your body');
    console.log('You hear beeping noises all around you');
    console.log('You look down at your body and see 2 wires attached to it');
    console.log('One wire for each of your lungs');
    console.log('You must get your organs so you can go home');
    console.log('The building you\'re in only has electricity for a few hours \n');
    console.log('Before you are 2 doors');
    console.log('Door 1 is an exit that leads you outside. Door 2 leads to your organs.....');
    console.log('The nearest hospital is miles away...');
    console.log('If you choose to stay, just know there are traps all througout the building')
}else{
     leaveGame1()
 }
};

const doorChoice = () => {
console.log('The door you choose holds your destiny \n');
let doorChoice = readline.question('Which door will you choose, 1 or 2? \n');
let firstDoor = '1'
let SecondDoor = '2'
if(doorChoice = firstDoor){   
    console.log('It smells disgusting');
    console.log('Must be your organs rotting');
    console.log('Hurry Up! \n');
}else if(doorChoice = SecondDoor){
    console.log('The door behind you is shut')
    console.log('The forest surrounds you on all sides')
    console.log(`There is nowhere to go ${nameInput}`)
    leaveGame3();
}else{
    console.log(`That wasn't a choice ${nameInput}`)
    console.log('You don\'t listen')
    leaveGame1()
}
};

const move1 = () =>{
console.log('To the right of you there is a long dark hallway with loud music');
console.log('To the left there is a dark, long hallway with a very bright light at the end');
let r = 'right'
let l = 'left'
let move1 = readline.question('Which path will you take, right or left? \n')
    if(move1 === r){

        console.log(`I see that you like music ${nameInput}`);
        console.log('Lets hope that love leads to your organs');
        console.log('The music gets louder with every step you take');
        console.log("But you can't seem to find the source")
    }else if(move1 === l){
        console.log("You're walking the very long and dark hallway");
    }else{
        console.log(`You don\'t listen ${nameInput}`);
        leaveGame3();
    }
};

const move2 = () =>{
console.log("You've reached anoter crossroads");
console.log('Both paths are dark');
if(readline.keyInYN('Do you want to keep walking?')){
    console.log("You're so brave, that takes a lot of guts!")
}else{
    console.log(`This game isn't for scary cats like you ${nameInput}`)
    leaveGame3()
}
    let r = 'right'
    let l = 'left'
    console.log('ADD') // add sonethibg here
    let move2 = readline.question('Which path will you take, right or left? \n')
        if(move2 === r){
            console.log('It seems you like making the "right" choice');
            console.log('Lets hope this leads to your organs');
        }else if(move2 === l){
            console.log('The floor is sliperry');
            console.log('The smell of iron consumes you');
            console.log('Moonlight comes in through the window');
            console.log('you see a clear bloody glass box');
            console.log('It\'s your lungs!')
                if(readline.keyInYN('Are you ready to brake the glass, and get your lungs? \n')){
                    console.log('You should make better choices')
                    console.log('You have no object to brake the glass');
                    console.log('You cut your arm while braking the class and bled out');
                    leaveGame3()
                }else{
                    console.log('Great choice!');
                    console.log('You need a hammer to brake the glass')
                }
        }else{
            console.log(`You don\'t listen ${nameInput}`);
            leaveGame3();
        }
    };

const action = () =>{
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
        console.log('You\'re determination is truly breathtaking')
    }else{
        console.log('You should have swang');
        leaveGame3()
    }
}else if(action === choice2){
    console.log('You don\'t really make good choices');
    console.log('Why would you leave?')
    leaveGame3()
}else{
    console.log('You don\'t listen');
    leaveGame3()
}

};




startGame();
howToPlay();
story();
doorChoice();
move1();
move2();
action();
// if user types 'help', run the howToPlay function let input = help maybe?
//  function for movements + things to log in movements 
//functions for actions ''
//function to restart game 
