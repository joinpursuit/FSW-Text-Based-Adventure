const readLineSync = require("readline-sync");

const leaveGame = () => {
console.log("I don't blame you for wanting out! This adventure is not for the weak of heart!")
process.exit();
}

const name = readLineSync.question("What's your name?");

console.log("hello " + name + " it's nice to meet you!");

console.log("Welcome to my game!");

if(readLineSync.keyInYN("Do you wish to begin?")){
    startGame();
} else {
    leaveGame();
}

