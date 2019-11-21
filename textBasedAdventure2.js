const Bathroom = require("./Bathroom.js");
const Helper = require("./Helper.js")

class Game extends Helper{
    constructor() {
        super();
        this.gameStart();
    } // End of constructor

    gameStart() {
        console.clear();
        let nameInput = this.userInput("Please enter your first name. ");
        this.player.name = nameInput;

        this.questionsPush("Enter your first name.");
        this.answersPush(nameInput);

        console.log(`Good morning ${this.player.name}!`);

        this.bathroom();

    } // End of gameStart() function

    bathroom() {
        new Bathroom(this.player).bathroom();
    } // End of bathroom() function

} // End of Game Class

new Game()

module.exports = Game;