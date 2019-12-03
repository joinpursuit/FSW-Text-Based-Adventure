const readline = require('readline-sync')

const play = () => {
    let userInput;
    while(userInput !== "yes") {
        userInput = readline.question("Would you like to play my game?")
    } 
    console.log("You've made a good choice")
    nameInput = readline.question("What's your name traveller?")
    console.log(`Hello ${nameInput}!  Welcome to my game.`)
    ageInput = readline.question(`How old are you ${nameInput}?`)
    if(ageInput < 18) {
        console.log("Much too young to be traveling by yourself.")
    } else {
        console.log("Just the right age for a journey!")
    }
    // userInput = readline.question("Are you going to the woods or the swamp?")
    while(userInput !== "woods" || userInput !== "swamp") {
        userInput = readline.question("Please choose between the woods and the swamp: ")
        if(userInput === "woods") {
            woods();
            break;
        } else if(userInput === "swamp") {
            swamp();
            break;
        }
    }
}
const swamp = () => {
    console.clear();
    console.log("The bog witch is before you, approach or run?")
    let userInput = readline.question("")
    if(userInput === "run") {
        console.log("Got away from the bog witch and ran to the woods.")
        woods();
    } else {
        console.log("The bog witch ate you, you died.")
    }
}
const woods = () => {
    console.log("You've made it to the woods.")
    let userInput = readline.question("You see a clearing, will you go forward or back?")
    if(userInput === "back") {
        swamp();
    } else {
        clearing();
    }
}
const clearing = () => {
    
    let direction = readline.question("Welcome. Pick a direction?").toLowerCase()
    switch(direction) {
        case "north":
            console.log("It starts to rain");
            break;
        case "east":    
            console.log("A strong wind knocks you down");
            break;
        case "south":    
            console.log("It's getting dark, you need to start a campfire");
            break;
        case "west":    
            pit();
            break;    
    }
}
const pit = () => {
    let fruits = ["banana", "strawberry", "apple", "orange"];
    userInput = readline.question("You fall into the pit and now the ogres are coming for you. Choose a fruit: ")
    for(let i = 0; i < fruits.length; i++) {
        let chosen = !fruits;
        if(userInput !== chosen) {
            gameOver();
            break;
        } else if(userInput === chosen)
            console.log("You survived, you win!");
            break;
    }
}
const gameOver = () => {
    console.log("The ogre gives you the fruit. It's poisonous. You die.");
}
play();