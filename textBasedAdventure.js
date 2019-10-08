"use strict";
// do all changes here!!!!!!!!!!!
let currentMoveupDown = 0;
let currentMoveLeftRight = 0;
let currentMove = "";
let mapChar = "";
let outcomeOptions = ["💣","◼️"];
let outcomeOption = "";

// Prints map in readable form
function printMap(Map) {

      console.clear()
    
    for (let i = 0; i < Map.length; i++){
        console.log((Map[i].join(" ")));
    
    }
   
 }

 // adds or subtacts to current move and keeps track of coordinates

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
 function printHello() {
    return "hello"    
}

 function callFunction(fn) {
     return fn()
 }

 callFunction(printHello)

 // changes previous move to tunnel
 function perviousMoveChange (currentMoveupDown,currentMoveLeftRight){

    Map[currentMoveupDown][currentMoveLeftRight] = " ◼️"
    }
    

 //moves and saves character on to the new 

 function nextMovechar (currentMoveupDown,currentMoveLeftRight){

 Map[currentMoveupDown][currentMoveLeftRight] = mapChar
 }
 

const readline = require('readline-sync')

let Map = [
    [" ⛰️"," ⛰"," ⛰️"," ⛰️", " ⛰️"],
    [" ⛰️"," ⛰️"," ⛰️"," ⛰️", " ⛰️"],
    [" ⛰️"," ⛰️"," ⛰️"," ⛰️", " ⛰️"],
    [" ⛰️"," ⛰️"," ⛰️"," ⛰️", " ⛰️"],
    [" ⛰️"," ⛰️"," ⛰️"," ⛰️", " 💎"],
 
]




let nameInput = readline.question("\nEnter your name: ")

// takes in a string if you want convert to a number

console.log(`\nHello ${nameInput}!  Welcome to my Dig-Dug Console Game.`)

let charChoosen = readline.question("\nChoose your Characther 😸 (1) 🐶 (2): ");


if (charChoosen === "1"){
    mapChar ="😸⛏"
    charChoosen = "😸";
    Map[0][0] = (mapChar);
    
    

} else if (charChoosen === "2") {
    mapChar = " 🐶⛏️"
    Map[0][0] = mapChar;
    charChoosen = "🐶";
}else {
console.log ("you have choosen Wrong, Pick again")
let charChoosen = readline.question("\nChoose your Characther 😸(1) 😸 (2): ")
}

console.log ("Good Luck! You'll Need it\n");

console.log (`\nHelp ${charChoosen } navagate through the Moutains ⛰️ and get to the 💎`);
console.log ("\nWrite right, left, down, up");
console.log ("\nWatch out for 💣 "+"along the way\n");

console.log ("\nLet's Get Start");
console.log("This is your Map\n");

printMap(Map)

// 1st move
currentMove = readline.question("\nEnter your next move: ");
//console.log (currentMove,currentMoveLeftRight, currentMoveupDown);
perviousMoveChange (currentMoveupDown,currentMoveLeftRight)
//moves char and prints
Move(currentMove);
nextMovechar (currentMoveupDown,currentMoveLeftRight)
printMap(Map)


// 2nd move
console.log("\nSAFE! Keep Going");
currentMove = readline.question("Enter your next move: ");
//console.log (currentMove,currentMoveLeftRight, currentMoveupDown);
perviousMoveChange (currentMoveupDown,currentMoveLeftRight)
//moves char and prints
Move(currentMove);
nextMovechar (currentMoveupDown,currentMoveLeftRight)
printMap(Map)

// 3rd move
console.log("\nSAFE! Keep Going"+"Be Careful");
currentMove = readline.question("Enter your next move: ");
//console.log (currentMove,currentMoveLeftRight, currentMoveupDown);
perviousMoveChange (currentMoveupDown,currentMoveLeftRight)
//moves char and prints
Move(currentMove);
nextMovechar (currentMoveupDown,currentMoveLeftRight)
printMap(Map)

// 4th move
console.log("\nSAFE! Keep Going");
currentMove = readline.question("Enter your next move: ");
//console.log (currentMove,currentMoveLeftRight, currentMoveupDown);
perviousMoveChange (currentMoveupDown,currentMoveLeftRight)
//moves char and prints
Move(currentMove);
nextMovechar (currentMoveupDown,currentMoveLeftRight)
printMap(Map)

// 5th move 
console.log("\nSAFE! Keep Going");
currentMove = readline.question("Enter your next move: ");
//console.log (currentMove,currentMoveLeftRight, currentMoveupDown);
perviousMoveChange (currentMoveupDown,currentMoveLeftRight)
//moves char and prints
Move(currentMove);
nextMovechar (currentMoveupDown,currentMoveLeftRight)
printMap(Map)