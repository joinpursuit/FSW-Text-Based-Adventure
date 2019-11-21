const readline = require("readline-sync");
// Creating arrays that will display the questions and answers given for the user at the end.
let arrQuestions = [];
let arrAnswers = [];
let health = 100;

//Creating functions for cleaner code
function healthDamage(damage) {
    //Logs out how much damage taken for the argument "damage" and the users new HP
    console.log(`You take ${damage} points of damage! You have ${health}HP.`);
}

function newLine() {
    //Creates a line spacing
    console.log("");
}

function answersPush(arg) {
    //Pushes the argument to arrAnswers array
    arrAnswers.push(arg);
}

function questionsPush(arg) {
    //pushes the argument to arrQuestions array
    arrQuestions.push(arg);
}

function randomInt(max, min) {
    return Math.floor(Math.random() * max) + min;
}

function userInput(question) {
    return readline.question(question);
}

function reflect() {
    console.log("You reflect on the long day you've had, proud of everything you've accomplished.");
    console.log("You get back in bed and knock out, only to start it all again tomorrow.");
}

function pressEnter() {
    let pressEnter = userInput("")
}

function healthCheck(damage) {
    health -= damage;
    healthDamage(damage);
    if(health <= 0) {
        console.log("You have died.");
        endGame();
    }
}

function choiceCreation(choiceOne, choiceTwo, choiceThree, choiceFour) {
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
}// End of choiceCreation() function

console.clear();
let nameInput = userInput("Enter your first name: ");

// Game functions
function game() {
        //Array
        questionsPush("Enter your first name");
        answersPush(nameInput);
    
        console.log(`Good morning ${nameInput}!`);

        //Runs the bathroom branch
        bathroom();
}// End of game() function

function endGame() {
    //End program review
    newLine();
    console.log("Thank you for playing my game!");
    let review = userInput("Would you like to see review the answers you gave?(Y/N) ");
    review = review.toUpperCase();

    //Checking for valid user inputs, loops until the input is valid
    let reviewComplete = false;
    reviewComplete: 
    while (reviewComplete === false) {
        switch (review) {
            case "Y":
                console.clear();
                for (let i = 0; i < arrAnswers.length; i++) {
                    console.log(`Question ${i + 1}: ${arrQuestions[i]}`);
                    console.log(`Answer ${i + 1}: ${arrAnswers[i]}`);
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
}// End of endGame() function

game();