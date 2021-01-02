const readline = require('readline-sync')


const startGame = () => {
if(readline.keyInYN("Do you want to play a game?")){
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
    console.log('Come back when you\'re 18. See ya later!');
    process.exit()
};

const leaveGame3 = () =>{
    console.log('You died. GAME OVER')
    process.exit()
}

const playGame = () => {
let nameInput = readline.question("What is your name? \n")
console.log(`Hello ${nameInput}! Welcome to my experiment muahaha!.....I mean...game. \n`);

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
    console.log('You look down at your body and see different wires attached to it');
    console.log('One wire for each organ');
    console.log('HEART, LUNGS, KIDNEYS. \n');
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
let door1 = '1'
let door2 = '2'
if(doorChoice === door1){
    console.log('It smells disgusting');
    console.log('Must be your organs rotting');
    console.log('Hurry Up! \n');
}else if(doorChoice === door2){
    console.log('The door behind you is shut')
    console.log('You never made it to the hospital')
    leaveGame3();
}else{
    console.log("That wasn't a choice")
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

        console.log('I see that you like music');
        console.log('Lets hope that love leads to your organs');
        console.log('The music gets louder with every step you take');
    }else if(move1 === l){
        console.log("You're walking the very long and dark hallway");
    }else{
        console.log('You don\'t listen');
        leaveGame3();
    }
}

startGame();
howToPlay();
story();
doorChoice();
move1();

// if user types 'help', run the howToPlay function let input = help maybe?
//  function for movements + things to log in movements 
//functions for actions ''
//function to restart game 
