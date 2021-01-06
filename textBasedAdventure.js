const readline1 = require('readline-sync')
const readlineSync = require("readline-sync")

const chalk = require('chalk');
const { greenBright } = require("chalk");


const loseGame = () => {
    console.log(chalk.redBright.underline("============================================================================"))
    console.log(chalk.redBright("Sorry, You didn't find Aslan!\nYou can keep trying though!"))
    leaveGame()
}


const winGame = () => {
    console.log(chalk.redBright.underline("============================================================================"))
    console.log(chalk.redBright.underline("You did it! You've just entered the Kingdom of Narnia!\nYou found Aslan, The king Of Narnia!\nYou have been rewarded infinite life in Narnia!\n................To be continued! =)"))
}


const play = () => {


    console.log(chalk.whiteBright.underline("============================================================================"))
    console.log(chalk.cyanBright.bold("Great! We are so glad you want to explore Narnia today!\n"))
    const userName = readlineSync.question(chalk.cyanBright("Please introduce yourself by entering your name:\n"))
    console.log(chalk.cyanBright(`Welcome ${userName}! You are now beginning a quest into Narnia!`))


    const beginPLayQ = () => {

        const askAge = () => {
            const age = readlineSync.question("How old are you?: )\n")
            if (age <= 7) {
                console.log(chalk.yellow("Wow, are you really that young? =) Let's play Narnia!"))
            }

            else if (age <= 23) {
                console.log(chalk.yellow("Hello Generation Z - lets play Narnia!"))
            }

            else if (age <= 39) {
                console.log(chalk.yellow("Welcome fellow Millenial, You must know about Narnia =)!"))
            }

            else if (age <= 55) {
                console.log(chalk.yellow("Hello Generation X! Let's play!"))
            }

            else if (age <= 74) {
                console.log(chalk.yellow("Boomers! Welcome!"))
            }

            else if (age > 74) {
                console.log(chalk.yellow("Hello Silent generation! "))
            }
            else {
                console.log('Error! - Incorrect input');
                askAge();
            }
        }

        askAge()

        const askHowRU = () => {
            const ansHowRU = readlineSync.question(chalk.cyanBright("How are you doing today? (Please answer with: great, okay, bad : )\n"))
            if (ansHowRU === "great") {
                console.log(chalk.cyanBright("Glad to hear it, Let's keep it going!"))
            }
            else if (ansHowRU === "okay") {
                console.log(chalk.cyanBright("Just okay? Let's make it better!"))
            }
            else if (ansHowRU === "bad") {
                console.log(chalk.cyanBright("Well then, we have some work to do, lets get started!"))
            }
            else {
                console.log('Error! - Incorrect input');
                askHowRU()
            }
        }

        askHowRU()



    }

    beginPLayQ()

    console.log(chalk.whiteBright.underline("============================================================================"))
    console.log(chalk.whiteBright.underline("You have just been transported to the world of Narnia.\nYou find yourself in the middle of a snow covered forest."))
    console.log(chalk.cyan("You have to find the way to get to the King of Narnia who will reward you!\nBe careful not to encounter the White Witch, she's not who she says she is."))



    const directionToGo = () => {

        const direction = readlineSync.question("Where would you like to go? Please type north, south, east, or west to proceed\n")
        if (direction === 'north') {

            console.log(chalk.whiteBright.underline("============================================================================"))
            console.log(chalk.cyan("You have just encountered a fawn who lives in the forest"))

            if (readlineSync.keyInYNStrict(chalk.blueBright("The fawn asks you a question: 'It's so cold out here, would you like to join me for some biscuits and a hot cup of tea?' (Please type Y or N)\n"))) {
                console.log(chalk.blueBright("The fawn says: 'I am so glad you can join me! It's not often we have human visitors! =)'"))
            }
            else {
                console.log("Oh no! quitting already? The goal is to get to the King of Narnia!")
                leaveGame()
            }


            if (readlineSync.keyInYNStrict(chalk.blueBright("The fawn asks you another question: 'Do you trust me?' (Please type Y or N)\n"))) {
                console.log(chalk.blueBright("The fawn says, 'I am so sorry, I have something to tell you... I work for the White Witch and I was going to lead you to her."))
                console.log(chalk.blueBright("Your kindness has changed my mind and I want to help you get to Aslan, the King of Narnia!"))
            }
            else {
                console.log(chalk.cyan("Oh no! quitting already? The goal is to get to the King of Narnia!"))
                leaveGame()
            }


            if (readlineSync.keyInYNStrict("The faun asks: 'Are you ready to enter the Kingdom of Narnia? (Please type Y or N)'\n")) {
                console.log(chalk.whiteBright.underline("============================================================================"))
                console.log(chalk.cyan("The Fawn leads you to the Great Kingdom of Aslan!"))
                winGame()
            }

            else {
                console.log(chalk.cyan("Oh no! The goal is to get to the King of Narnia!"))
                leaveGame()
            }
        }

        else if (direction === 'south') {
            console.log(chalk.whiteBright.underline("============================================================================"))
            console.log(chalk.cyan("You've just entered the White Witch's territory! You can see her in the far distance."))
            if (readlineSync.keyInYNStrict("Do you wish to proceed?(Please type Y or N)'\n")) {
                console.log(chalk.cyan("You have just encountered the White Witch and her orcas have tied you up and taken you captive."));
                readlineSync.keyInYNStrict(chalk.redBright("The White Witch asks: 'Are you looking for the King of Narnia?' (Please type Y or N)\n"))
                console.log(chalk.whiteBright.underline("============================================================================"))
                console.log(chalk.redBright("The White Witch says, 'There is no King of Narnia! You are now under my control and you will do as I say!'"))
                console.log(chalk.whiteBright.underline("============================================================================"))
                console.log(chalk.cyan("Unfortunately, you have been imprisoned and you are now under control of the White Witch."))
                loseGame()
            }
            else {
                loseGame()
            }
        }


        else if (direction === "east") {
            console.log(chalk.whiteBright.underline("============================================================================"))
            console.log(chalk.cyan("You have just encountered Mr. Beaver in the forest and he is thrilled to see you!"))
            console.log(chalk.greenBright("Mr. Beaver says: 'Hey there! We have been waiting for you a very long time!'"))
            if (readlineSync.keyInYNStrict(greenBright.greenBright("Mr. Beaver asks: 'Are you here to save our forest?'"))) {
                console.log(chalk.greenBright(`Mr. Beaver says: 'We are truly thankful for your bravery!'`))
                if (readlineSync.keyInYNStrict(chalk.greenBright("Mr. Beaver asks: Would you like us to lead you to the King of Narnia?'")))
                    console.log(chalk.cyan("Your bravery has been rewarded, Mr. Beaver is now leading you to the King of Narnia!"))
                winGame()
            }
            else {
                loseGame()
            }
        }


        else if (direction === "west") {
            console.log(chalk.whiteBright.underline("============================================================================"))
            console.log(chalk.cyan("You have encountered a black wolf walking through the western part of the forest"))
            if (readlineSync.keyInYNStrict("Do you wish to proceed?(Please type Y or N)'\n")) {
                console.log(chalk.magentaBright("The black wolf says: 'I smell a human! Just what the White Witch was looking for!'"))
                if (readlineSync.keyInYNStrict(greenBright.magentaBright("The black wolf asks: 'Are you here to find the King of Narnia?'"))) {
                    console.log(chalk.magentaBright("The black wolf says: 'Well follow me and I can show you something better!'"))
                    loseGame()
                }
                else {
                    loseGame()
                }
            }
        }


        else {
            console.log('Error! - Incorrect input');
            directionToGo()
        }


    }

    directionToGo()

}




const leaveGame = () => {
    console.log(chalk.whiteBright.underline("It's okay if you don't want to explore Narnia today!"))
    console.log(chalk.whiteBright.bold("We'd like to say see you next time..."))
    console.log(chalk.whiteBright.bold("But... we dont know if there will be another chance to explore Narnia!"))
    if (readlineSync.keyInYNStrict("Do you want to continue to explore the world of Narnia? (Please type Y or N)")) {
        play()
    }
    else {
        console.log(chalk.yellowBright.bold("Good luck to you! We hope to see you again someday!"))
        process.exit()
    }
}


console.log("Hello there! Welcome to Narnia!")

if (readlineSync.keyInYNStrict("Would you like to explore the world of Narnia? (Please type Y or N)")) {
    play()
}
else {
    leaveGame()
}