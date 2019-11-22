const Player = require("./player.js");
const readline = require("readline-sync");

class Helper {
    constructor() {
        this.player = new Player("John", 100);
        this.bathroom;
        this.breakfast;
        this.job;
        this.nightmare;
    } // End of constructor

    newLine() {
        console.log("");
    } // End of newLine() function

    answersPush(player, answer) {
        player.answersPush(answer);
    } // End of answersPush() function

    questionsPush(player, question) {
        player.questionsPush(question);
    } // End of questionsPush() function

    randomInt(max, min = 0) {
        return Math.floor(Math.random() * max) + min;
    } // End of randomInt() function

    userInput(question) {
        return readline.question(question);
    } // End of userInput() function

    YN(question) {
        return readline.keyInYN(question);
    } // End of YN() function

    choiceSelection(choices, question) {
        return readline.keyInSelect(choices, question);
    } // End of choiceSelection() function

    pressEnter() {
        this.userInput("Press enter to continue.");
    } // End of pressEnter() function

    reflect() {
        console.log("You reflect on the long day you've had, proud of everything you've accomplished.");
        console.log("You get back in bed and knock out, only to start it all again tomorrow.");
    } // End of reflect() function

    endGame(player) {
        //End program review
        this.pressEnter();
        console.clear()
        console.log("Thank you for playing my game!");

        if(readline.keyInYN("Would you like to see review the answers you gave?")) {
            console.clear();
            for (let i = 0; i < player.answers.length; i++) {
                console.log(`Question ${i + 1}: ${player.questions[i]}`);
                console.log(`Answer ${i + 1}: ${player.answers[i]}`);
                process.exit();
            } 
        } else {
            console.log("I hope you enjoyed the game!");
            process.exit();
        }
    } // End of endGame() function
}

module.exports = Helper;