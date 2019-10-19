"use strict";
// do all changes here!!!!!!!!!!!
let currentMoveupDown = 0; // value for index arr.[0][x]
let currentMoveLeftRight = 0; //value for index arr.[x][0]
let currentMove = ""; // takes in current move 'right' 'left' 'up' 'down'
let mapChar = ""; // the char user has choosen and the weapon
let displayChar = ""; // just the char
let outcomeOptions = ["🐺","🍃"]; // options of what happens when you break through
let outCome = "";
let text= "" // comments during play
let score = 0;
let health = ["❤️","❤️","❤️"] // health
let collectObj = []; // collection of objects as you navg
let Map = [
    [,,,,,,,,],
    [,,,,,,,,],
    [,,,,,,,,],
    [,,,,,,,,],
    [,,,,,,,,],
    [,,,,,,,,],
    [,,,,,,,,],
    [,,,,,,,,],
]


// prints map
function printMap(Map) {
    
    for (let i = 0; i < Map.length; i++){
        console.log((Map[i].join(" ")));
    
    }
   
 }

 // adds or subtacts to current move and keeps track of coordinates arr[x][x]

 function Move(currentMove){
let currentMovetemp = currentMove.toLowerCase()

//  if (currentMovetemp === "right" || currentMovetemp === "left" || currentMovetemp === "down" || currentMovetemp === "up") {

    if ( currentMovetemp === "d"){
        currentMoveLeftRight += 1;
        score +=100

        
    } else if (currentMovetemp === "a"){
        currentMoveLeftRight -= 1
        score +=100

    } else if (currentMovetemp === "s"){
        currentMoveupDown += 1
        score +=100

    } else if( currentMovetemp === "w") {

        currentMoveupDown -= 1
        score +=100
    }


    

    if(currentMoveLeftRight === 8){
        currentMoveLeftRight -= 1
        score -= 100
    } 
    if (currentMoveupDown === 8){
        currentMoveupDown -=1
        score -=100
    } 
    if(currentMoveLeftRight === -1){
        currentMoveLeftRight += 1
        score -= 100
    } 

    if (currentMoveupDown === -1){
        currentMoveupDown +=1
        score -=100
    } 


 }


 // changes previous move to grass
 function previousMoveChange (currentMoveupDown,currentMoveLeftRight){

    Map[currentMoveupDown][currentMoveLeftRight] = "🌱🌱🌱"
}
    

 //moves and saves character on to the new 
 function nextMovechar (currentMoveupDown,currentMoveLeftRight,outCome){
    if(Map[currentMoveupDown][currentMoveLeftRight].includes( "🌳🍄🌳")){
        score += 200
        text = "Look at you finding that Mushroom Mario 🍄 +200!"
        collectObj.push("🍄")
    }
    if(Map[currentMoveupDown][currentMoveLeftRight].includes( '🌳💎🌳') ){
        score += 200
        text = "BLING BLING! 💎 +500!"
        collectObj.push("💎")
    }
    if(Map[currentMoveupDown][currentMoveLeftRight].includes( '🌳🍒🌳') ){
        score += 200
        text = "CHERRIES! 🍒 +200!"
        collectObj.push("🍒")
    }

 Map[currentMoveupDown][currentMoveLeftRight] = `${mapChar}${outCome}`
 
 }
 
//Used to randomize a moveoitcome
 function randomMove (){
 let randomOutcome = Math.floor(Math.random() * 10) //used for randomizer
    if (randomOutcome === 9){
        outCome = outcomeOptions[0]
    } else{
           outCome = outcomeOptions[1]
        }
        
 }


 // game uses 4 funtionc
function gameInmotion(previousMoveChange,Move,randomMove,nextMovechar,printMap){


//step 1 changes your previous move to grass
previousMoveChange (currentMoveupDown,currentMoveLeftRight)
// step 2 calculate your next move
Move(currentMove);
// step 3 randomizes outcome wolf/safe
randomMove ();
//step 4combines your new move and outcome 
nextMovechar (currentMoveupDown,currentMoveLeftRight,outCome);
console.clear();
// step 5 prints new map
printMap(Map);
}


let mapoutcomeOptions = [ "🌳🍄🌳","🌳💎🌳","🌳🍒🌳","🌳🌳🌳"]

function randomMapob (){
    let randomOutcome = Math.floor(Math.random() * 10) //used for randomizer
    let mapOutcome = ""

       if (randomOutcome === 9){
        mapOutcome = mapoutcomeOptions[0]
        } else if (randomOutcome === 8){
            mapOutcome = mapoutcomeOptions[1]
        }else if (randomOutcome === 7){
            mapOutcome = mapoutcomeOptions[2]
        } else{
            mapOutcome = mapoutcomeOptions[3]
        }
return mapOutcome
}


const randomMap = (randomMapob) => {


let rowNumber = 8
let colNumber = 8

for(let row = 0; row < rowNumber; row++){

    for (let col = 0; col < colNumber; col++){
        
        
        Map[row][col]= randomMapob()
    }

    
    

}
Map[7][7]= "🌳🏡🌳"

}

randomMap(randomMapob);

const readline = require('readline-sync')



let allChar = {
    1: "🐶",
    2:"🐰",
    3:"🦄",
    4:"🦏",
    5:"🐱"}
// let allWeapons = ["🗡️","🔪","⛏️"]

let nameInput = readline.question("\nNew game who this?: ")
console.clear()

// takes in a string if you want convert to a number

console.log(`\nHello ${nameInput}!  Welcome to D-Maze Game.`)

let charChoosen = readline.question("\nChoose your Character (1):🐶 (2):🐰 (3):🦄 (4):🦏 "+" ")

if (charChoosen > 4 || isNaN(charChoosen) ){
    console.clear()
    charChoosen = ""
    console.log ("You have choosen Wrong, Pick again")
    charChoosen = readline.question("Choose your character (1):🐶 (2):🐰 (3):🦄 (4):🦏 ")
}
displayChar = allChar[charChoosen];

console.clear
let WeaponChoosen = readline.question("\nChoose your weapon (1):🗡️ (2):🔪 (3):⛏" )
let weapon = ""
switch (WeaponChoosen) {
    case "1":
    weapon = "🗡️"
    break;
    case "2":
    weapon = "🔪"
    break;
    case "3":
    weapon = "⛏"
    break;
    
    }

mapChar = displayChar + weapon


Map[0][0]= mapChar


console.clear()

console.log ("\nLet's Get Started!");
console.log (`Help ${displayChar } `+" navagate through the forest 🌳  and get home 🏡");
console.log ("Collect 💎 🍄 🍒 "+" along the way for EXTRA POINTS!\n");
console.log ("Watch out for BIG BAD WOLF 🐺 "+" along the way!\n");
console.log("You have 3 lives ❤️ ❤️ ❤️")
console.log("\n Directions")
console.log ("\nTo Go \n Right - 'd'\n Left - 'a'\n Up - 'w \n down -'s' ");

let readyPlayerone = readline.question("\nReady Player One? Press (Enter) to Start")
console.clear()


console.log("This is your Map\n");

printMap(Map)
console.log("Score:")
console.log(score)
console.log ("HEALTH "+health)

//Game Works in Here

while (currentMoveupDown <= 8 && currentMoveLeftRight <= 8) {
text = "You got this 💪 "
currentMove = readline.question("\nEnter your next move: ");


gameInmotion(previousMoveChange,Move,randomMove,nextMovechar,printMap);




console.log("Score:")
console.log(score)
// console.log("health"+health)
console.log(collectObj.join());
console.log(text)

// 
if (outCome === "🐺" && health.length > 0){
    health.pop()
    console.log ("HEALTH " + health)
    console.log("😰 🐺WOLF!! YOU LOST A LIFE AND 200 POINTS! \n But, You Gon' Be Alright! Enter Next Move to Continue")
    score -=200
}else if (outCome === "🐺" && health.length === 0){
    console.log(`You lost 😥 and let down, yourself! your family and ${displayChar}`)
    break;

}else if(currentMoveLeftRight === 7 && currentMoveupDown === 7) {
    console.log ("HEALTH"+health)
    console.log( `🥳 YOU WON!!! ${nameInput} 🍻 on me!`)
    break;
}else{
    console.log ("Health: "+ health)
}

}

