const readline = require("readline-sync");
const Player = require("./player.js");

let questionsArr = [];
let answersArr = [];

const newLine = () => {
    console.log("");
}

const answersPush = (player, answer) => {
    player.answers.push(answer);
}

const questionsPush = (player, question) => {
    player.questions.push(question);
}

const randomInt = (max, min = 0) => {
    return Math.floor(Math.random() * max) + min;
}

const userInput = (question) => {
    return readline.question(question);
}

const pressEnter = () => {
    userInput("Press enter to continue.");
}

const choiceCreation = (choiceOne, choiceTwo, choiceThree, choiceFour) => {
    if(choiceFour) {
        console.log(`[1] ${choiceOne}`);
        console.log(`[2] ${choiceTwo}`);
        console.log(`[3] ${choiceThree}`);
        console.log(`[4] ${choiceFour}`);
    } else if(choiceThree) {
        console.log(`[1] ${choiceOne}`);
        console.log(`[2] ${choiceTwo}`);
        console.log(`[3] ${choiceThree}`);
    } else {
        console.log(`[1] ${choiceOne}`);
        console.log(`[2] ${choiceTwo}`);
    }
}

const game = () => {
    console.clear();
    let nameInput = userInput("Please enter your first name.");
    let player = new Player(nameInput, 100);

    questionsPush(player, "Enter your first name.");
    answersPush(player, nameInput);
}
