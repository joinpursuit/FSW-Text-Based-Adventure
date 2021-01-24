const readLineSync = require("readline-sync");

let salute = readLineSync.question("What's your name?");
console.log("Hi,  It's nice to meet you")

salute = readLineSync.keyInYN('Would you like to play a Game with me?');{
    if(readLineSync.keyInYN === "y"){
    console.log("Awesome.  Let me tell you about it");
}   else{(readLineSync.keyInYN === "N")
    console.log("No worries, maybe some other time we'll play.")
}
}

    
        



        //console.log(`Hello ${nameInput}!  Welcome to my game.`)

        //I did not feel I had the concepts (e.i. looping, objects, chaining methods) well understood in order to move forward with the project.