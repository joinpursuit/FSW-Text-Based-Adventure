const readline = require('readline-sync')

let nameInput = readline.question(`Enter your sun sign: \n`)
// let weaponsInput = readline.question(`Enter the "weapon" of your choice: \n`)

// console.log(`\nHello fellow ${nameInput}!\n(Kenia is a Sagittarius, but all signs are welcome here!)\n
// ~*~ Welcome to my cosmic text based adventure. ~*~
// ~*~ To play, please input your choices to the upcoming series of questions. ~*~\n`);

// console.log(`A blusterous gust of wind roars by... ~~~`);

function startGame() {
    console.log(`\nHello fellow ${nameInput}!\n(kenia-r is a Sagittarius, but all signs are welcome here!)\n
~*~ Welcome to my cosmic text based adventure. ~*~
~*~ To play, please input your choices to the upcoming series of questions. ~*~\n`);
    console.log(`A blusterous gust of wind roars by... ~~~`);
    console.log(`\nSun sign of ${nameInput}, you wake up by a small moonlit pond. You are surrounded by barren trees
that emit a luminescent white light. You sit up, admiring the beautiful setting when you turn your head
to see a deck of Tarot cards by your left hand.\n`);
    if (readline.keyInYN("Do you want to pick up the deck?\n")) {
        // console.log("\nYou take the Tarot cards!\n");
        highPriestessMission();
    } else {
        console.log(`\nAwww! You chose to live the normy/muggle life. Sad to see you go... :(`);
        // console.clear();
        quitGame();
    }
}

//High Priestess Mission
function highPriestessMission() {
    console.log(`\nYou hold the Tarot cards for a moment...\nInstinctively, you pull a card and
You summon the High Priestess!\nShe presents you with an important mission.`);
    if (readline.keyInYN(`Do you take the High Priestess up on her request?\n`)) {
        weaponsChoice();
    } else {
        quitGame();
    }
}

function weaponsChoice() {
    console.log(`\nYou follow the High Priestess into the trees until you come across a clearing.
She presents you with four magical items that you must choose from...`);
    let items = [`sword`, `wand`, `pentacle`, `chalice`]
    while (items !== `sword` || items !== `wand` || items !== `pentacle` || items !== `chalice`) {
        readline.setDefaultOptions({ limit: items, limitMessage: `\nSorry, but this option is not valid in this World` })
        let itemsInput = readline.question(`\nEnter the magical item of your choice:
(You can choose between the following: sword, wand, pentacle or chalice.)\n`)
        if (itemsInput === `sword`) {
            console.log(`\nA ${itemsInput}! Great choice! (Are you an air sign?)`);
            getReadyForBattleSword();
        } else if (itemsInput === `wand`) {
            console.log(`\nA ${itemsInput}! Great choice! (Are you a fire sign?)`);
            getReadyForBattleWand();
        } else if (itemsInput === `pentacle`) {
            console.log(`\nA ${itemsInput}! Great choice! (Are you an earth sign?)`);
            getReadyForBattlePentacle();
        } else if (itemsInput === `chalice`) {
            console.log(`\nA ${itemsInput}! Great choice! (Are you a water sign?)`);
            getReadyForBattleCups();
        }
        break;
    }
}

function getReadyForBattleSword() {
    console.log(`\nWith a flick of the wrist, the High Priestess transports you to the Empress' Tower. Under Her command
you will prepare for a great battle.`)
    ladies();
}

function getReadyForBattleWand() {
    console.log(`\nThe High Priestess gives you a smirk. With a flick of the wrist, She transports you to the Magician.
You will become a mage under His apprenticeship and take part in a great battle alongside him.`)
    gentlemen();
}

function getReadyForBattlePentacle() {
    console.log(`\nThe High Priestess gives you a smirk. She communicates to you that you will become a mage under her apprenticeship
and take part in a great battle alongside her.`)
    ladies();
}

function getReadyForBattleCups() {
    console.log(`\nWith a flick of the wrist, the High Priestess transports you to the Hierophant's lair. You will serve as
His advisor in the great battle to come.`)
    gentlemen();
}

function ladies() {
    console.log(`\nYou are a fellow of the Divine Feminine, now!
As your first task, She simply asks you to pick a number between 1 and 4:\n
"It sounds cruel, but You get two chances to choose your destiny..."`);

    let destinyNum = generateRandomNumber();
    guessCount = 2
    while (guessCount !== 0) {
        // for (let guessCount = 2; guessCount > 0; guessCount--) {
        let guess = readline.questionInt(`What number do you speak to Her? \n`)
        guessCount--
        if (guess === destinyNum) {
            console.log(`"You got it right.. It seems like you are a highly intuitive individual.
As a reward, dearest ${nameInput} you get to take a nice, relaxing bath."`)
            lastFunction();
        } else {
            if (guessCount === 0) {
                console.log(`You blink and in an instant you feel groggy and find yourself in your bed..?
You are in your house in your neighborhood... Was it all a dream?`);
                quitGame();
            } else {
                if (guess < destinyNum) {
                    console.log(`"Try again, dearest..."`);
                } else if (guess > destinyNum) {
                    console.log(`"Try again, dearest..."`);
                }
            }
            // console.log(`You blink and suddenly find yourself in your bed. You are in the muggle world.`)
            // quitGame()
        }
    }
}

function gentlemen() {
    console.log(`\nYou are a fellow of the Divine Masculine, now!
As your first task, He simply asks you to pick a number between 1 and 4:\n
"It seems cruel, but You get two chances to choose your destiny..."`);

    let destinyNum = generateRandomNumber();
    guessCount = 2
    while (guessCount !== 0) {
        let guess = readline.questionInt(`What number do you speak to Him? \n`);
        guessCount--
        if (guess === destinyNum) {
            console.log(`\n"You got it right! It seems like you are a highly intuitive individual.
As a reward, ${nameInput} you get to take a nice, relaxing bath."\n`);
            lastFunction();
        } else {
            if (guessCount === 0) {
                console.log(`\nYou blink and in an instant you feel groggy and find yourself in your bed..?
You are in your house in your neighborhood... Was it all a dream?`);
                quitGame();
            } else {
                if (guess < destinyNum) {
                    console.log(`"Try again..."`);
                } else if (guess > destinyNum)
                    console.log(`"Try again..."`);
            }
        }
    }
}
function lastFunction () {
    console.log(`
~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~
~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~
~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~

It's been grueling hard work since you took that bath!
Does time exist here...? You have been training alongside your Cosmic Being for what seems like many many years...
The Great Battle against Darkness is now upon the Realm. `)
    winBattle();
}

function winBattle() {
    console.log(`
~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~
~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~
~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~

You have proven yourself a mighty Cosmic Warrior. There is one final battle to be had.`);
    if (readline.keyInYN(`\nDo you engage in this Final Battle?\n`)) {
        wonBattle();
    } else {
        quitGame();
    }
}

function wonBattle() {
    console.log('\nYOU EMERGE VICTORIOUS!!')
    wakeUp();
}

function wakeUp() {
    console.log(`\n
~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~
~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~
~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~

You open your eyes slowly and stretch your body. You feel very well rested
you suddenly recall the most amazing dream you've had in a while! ...Or was it a dream?`)
    quitGame();
}

function generateRandomNumber() {
    let bottom = 1;
    let top = 4;
    return Math.round(Math.random() * top) + bottom
}

function quitGame() {
    if (readline.keyInYN(`\nBy chance, do you want to play again?\n`)) {
        console.clear()
        console.log(`Alright Alright Alright! Let's try this again...\n`);
        // console.clear();
        startGame();
    } else {
        console.clear();
        console.log(`\nThank you for playing! Have a nice life!`);
        process.exit();
    }
}




startGame();
