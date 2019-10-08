"use strict";
// do all changes here!!!!!!!!!!!
let currentMoveupDown = 0; // value for index arr.[0][x]
let currentMoveLeftRight = 0; //value for index arr.[x][0]
let currentMove = ""; // takes in current move 'right' 'left' 'up' 'down'
let mapChar = ""; // the char user has choosen and the weapon
let displayChar = ""; // just the char
let outcomeOptions = ["🍃","🐺"]; // options of what happens when you break through
let outCome = ""


// Prints map in readable form
function printMap(Map) {


    
    for (let i = 0; i < Map.length; i++){
        console.log((Map[i].join(" ")));
    
    }
   
 }

 // adds or subtacts to current move and keeps track of coordinates arr[x][x]

 function Move(currentMove){

    if ( currentMove === "right"){

        currentMoveLeftRight += 1;
        
        
    } else if (currentMove === "left"){
        currentMoveLeftRight -= 1

    } else if (currentMove === "down"){
        currentMoveupDown += 1

    } else if( currentMove === "up") {

        currentMoveupDown -= 1
    }

 }
 // changes previous move to tunnel
 function previousMoveChange (currentMoveupDown,currentMoveLeftRight){

    Map[currentMoveupDown][currentMoveLeftRight] = "🌱🌱🌱"
    }
    

 //moves and saves character on to the new 

 function nextMovechar (currentMoveupDown,currentMoveLeftRight,outCome){

 Map[currentMoveupDown][currentMoveLeftRight] = `${mapChar}${outCome}`
 }
 
//Used to randomize a moveoitcome
 function randomMove (){
 let randomOutcome = Math.floor(Math.random() * 10) //used for randomizer
    if (randomOutcome > 8){
        outCome = outcomeOptions[1]
    } else{
           outCome = outcomeOptions[0]
        }
        
 }

 function gameInmotion(previousMoveChange,Move,randomMove,nextMovechar,printMap){

// currentMove = readline.question("\nEnter your next move: ");
//console.log (currentMove,currentMoveLeftRight, currentMoveupDown);
previousMoveChange (currentMoveupDown,currentMoveLeftRight)
//moves char and prints
Move(currentMove);
randomMove ();
nextMovechar (currentMoveupDown,currentMoveLeftRight,outCome);
console.clear();
printMap(Map);
}

const readline = require('readline-sync')

let Map = [
    ["🌳🌳🌳","🌳🌳🌳","🌳🌳🌳","🌳🌳🌳", "🌳🌳🌳", "🌳🌳🌳"],
    ["🌳🌳🌳","🌳🌳🌳","🌳🌳🌳","🌳🌳🌳", "🌳🌳🌳", "🌳🌳🌳"],
    ["🌳🌳🌳","🌳🌳🌳","🌳🌳🌳","🌳🌳🌳", "🌳🌳🌳", "🌳🌳🌳"],
    ["🌳🌳🌳","🌳🌳🌳","🌳🌳🌳","🌳🌳🌳", "🌳🌳🌳", "🌳🌳🌳"],
    ["🌳🌳🌳","🌳🌳🌳","🌳🌳🌳","🌳🌳🌳", "🌳🌳🌳", "🌳🌳🌳"],
    ["🌳🌳🌳","🌳🌳🌳","🌳🌳🌳","🌳🌳🌳", "🌳🌳🌳", "🌳🏡🌳"],
 
]
let allChar = ["🐷","🐰","🦄","🐱","🦏"]
let allWeapons = ["🗡️","🔪","⛏️"]



let nameInput = readline.question("\nEnter your name: ")

// takes in a string if you want convert to a number

console.log(`\nHello ${nameInput}!  Welcome to D-Maze Game.`)

let charChoosen = readline.question("\nChoose your Characther (1):🐷 (2):🐰 (3):🦄 (4):🐱"+" ")

if (charChoosen > 4 || isNaN(charChoosen) ){
    console.clear()
    charChoosen = ""
    console.log ("you have choosen Wrong, Pick again")
    charChoosen = readline.question("\nChoose your Characther (1):🐷 (2):🐰 (3):🦄 (4):🐱"+" ")
}
displayChar = allChar[charChoosen];

let WeaponChoosen = readline.question("\nChoose your Characther (1):🗡️ (2):🔪 (3):⛏" )

mapChar += displayChar
mapChar += allWeapons[WeaponChoosen]

Map[0][0]= mapChar


console.clear()

console.log (`\nHelp ${charChoosen }`+" navagate through the forest 🌳 and get home 🏡");

console.log ("\nWatch out for BIG BAD WOLF 🐺 "+" along the way!\n");

console.log ("\nLet's Get Started");
console.log("This is your Map\n");
console.log ("\nWrite right, left, down, up\n");

printMap(Map)



//Game Works in Here

while (currentMoveupDown <= 5 && currentMoveLeftRight <= 5) {
currentMove = readline.question("\nEnter your next move: ");

gameInmotion(previousMoveChange,Move,randomMove,nextMovechar,printMap);


}
// currentMove = readline.question("\nEnter your next move: ");

// gameInmotion(previousMoveChange,Move,randomMove,nextMovechar,printMap);

// //move2
// currentMove = readline.question("\nEnter your next move: ");
// gameInmotion(previousMoveChange,Move,randomMove,nextMovechar,printMap);

// //move3
// currentMove = readline.question("\nEnter your next move: ");
// gameInmotion(previousMoveChange,Move,randomMove,nextMovechar,printMap);

// //move4
// currentMove = readline.question("\nEnter your next move: ");
// gameInmotion(previousMoveChange,Move,randomMove,nextMovechar,printMap);

// //move5
// currentMove = readline.question("\nEnter your next move: ");
// gameInmotion(previousMoveChange,Move,randomMove,nextMovechar,printMap);
