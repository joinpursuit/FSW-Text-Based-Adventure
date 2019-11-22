const Player = require("./player.js");
const readline = require("readline-sync");

class Helper {
    constructor() {
        this.player = new Player("John", 100);
        this.bathroom;
        this.breakfast;
        this.job;
        this.nightmare;
    }

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
    }

    pressEnter() {
        this.userInput("Press enter to continue.");
    } // End of pressEnter() function

    reflect() {
        console.log("You reflect on the long day you've had, proud of everything you've accomplished.");
        console.log("You get back in bed and knock out, only to start it all again tomorrow.");
    }

    endGame(player) {
        //End program review
        this.newLine();
        this.player = player;
        console.log("Thank you for playing my game!");
        let review = this.userInput("Would you like to see review the answers you gave?(Y/N) ");
        review = review.toUpperCase();

        //Checking for valid user inputs, loops until the input is valid
        let reviewComplete = false;
        reviewComplete: 
        while (reviewComplete === false) {
            switch (review) {
                case "Y":
                    console.clear();
                    for (let i = 0; i < this.player.answers.length; i++) {
                        console.log(`Question ${i + 1}: ${this.player.questions[i]}`);
                        console.log(`Answer ${i + 1}: ${this.player.answers[i]}`);
                        this.newLine();
                    } 

                    //End loop
                    reviewComplete = true;
                    process.exit();

                case "N":
                    console.log("I hope you enjoyed the game!");

                    //End loop
                    reviewComplete = true;
                    process.exit();

                default:
                    console.log("I do not understand.");
                    review = userInput("Would you like to see review the answers you gave?(Y/N) ");

            }// End of reviewComplete switch
        }// End of reviewComplete validity check
    } // End of endGame() function
}

module.exports = Helper;