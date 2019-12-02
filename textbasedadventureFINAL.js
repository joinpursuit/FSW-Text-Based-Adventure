const readline = require('readline-sync')

let intro = "~Welcome to Tales of Pursuit~";
let dialogue1 = "In this quest you will embark on a journey to find peace or declare war against many...";
let enter = "Press 'enter' to continue";
let num1 = Math.floor((Math.random() *10) *15);

const randomNumber = () => {
    let num1 = (Math.floor((Math.random() *10) *15));
    console.log(num1)
}

const town = () => {
    console.log("You have now entered the town of Dalmasca");
    let userInput = readline.question("Do you want to explore the town? yes or no  ");
    while(userInput === "yes") {
        console.log("There is so much here to see!")
        explore();
    }
    while(userInput === "no") {
        console.log("You are suddenly in grave danger =O")
        battle();
    }
}

const city = () => {
    console.log("You have breached the city walls");
    let userInput = readline.question("Are you prepared for battle? Select a number 1 - 10 ");
    if(userInput < "5") {
        fishing();
    } else {
        battle()
    }
}

const greaterThan = () => {
    let userInput = readline.question(`Is your favorite number + ${num1} greater than 150? yes or no?  `);
    if(userInput === "yes") {
        town();
    } else{ 
        city();
    }
}
const explore = () => {
    console.log("There are all sorts of treasures hidden around town!");
    let userInput = readline.question("Shall we look for the treasure? yes or no ");
    if(userInput !== "yes") {
        fishing()
    } else {
        treasureHunting()
    }
}

const fishing = () => {
    console.log("It's been a long day...");
    console.log("So long, and thanks for all the fish");
    let userInput = readline.question("Given an array of fish [1 fish,2 fish,red fish,blue fish] let's log them all..");
    let arr = ["1 fish", "2 fish", "red fish", "blue fish"]
    for(let i = 0; i < arr.length; i++) {
        console.log(arr[i])
    }
    play();
}

const treasureHunting = () => {
    let value = randomNumber() * 100;
    console.log(`You have obtained ${value} dollars from exploring town.`);
}

const battle = () => {
    console.log("You must defeat all enemies! Your fate is left to CHANCE...")
    let userInput = Math.floor(Math.random()*10);
    switch(userInput) {
        case "1":
        case "2":
        case "3":
            console.log("GAME OVER!");
            break;
        case "4":
        case "5":
        case "6":
            fishing()
            break;
        case "7":
        case "8":
        case "9":
        case "10":
            console.log("YOU WIN!");
            break;
        default:
            console.log("War does not determine who is right.. Only who is left... DEFEAT");   
            play();
    }
}

const play = () => {
    console.log(intro);
    console.log(dialogue1);
    readline.question(enter);
    let name = readline.question("What is your name? ");
    readline.question(`Hi ${name}! Let us being with a game of chance.. You will now be given a random number. Press 'enter'`);
    console.log(num1);
    readline.question(`Your number is ${num1}. Remember this number. 'Press enter'`);
    readline.question(`So ${name}, what is your favorite number? `);
    greaterThan();
}
play();





