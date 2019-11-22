class Player {
    constructor(name, health) {
        this.name = name;
        this.health = health;
        this.questions = [];
        this.answers = [];
    } // End of constructor() 

    isDead(damage) {
        this.health -= damage;
        this.healthDamage(damage);
        if(this.health <= 0) {
            return true;
        }
        return false;
    } // End of isDead() function

    healthDamage(damage) {
        console.log(`You take ${damage} points of damage! You have ${this.health}HP.`);
    } // End of healthDamage() function

    choiceCreation(choiceOne, choiceTwo, choiceThree, choiceFour) {
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
    } // End of choiceCreation() function

    answersPush(answer) {
        this.answers.push(answer);
    } // End of answersPush() function

    questionsPush(question) {
        this.questions.push(question);
    } // End of questionsPush() function

}

module.exports = Player;