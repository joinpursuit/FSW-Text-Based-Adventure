class Player {
    constructor(name, health) {
        this.name = name;
        this.health = health;
        this.questions = [];
        this.answers = [];
    }

    isDead(damage) {
        this.health -= damage;
        this.healthDamage(damage);
        if(this.health <= 0) {
            return true;
        }
        return false;
    }

    healthDamage(damage) {
        console.log(`You take ${damage} points of damage! You have ${this.health}HP.`);
    }

}

export default Player;