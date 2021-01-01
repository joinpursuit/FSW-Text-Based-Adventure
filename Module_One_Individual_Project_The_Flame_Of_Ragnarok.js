const readline = require('readline-sync');

const chalk = require('chalk');

let nameInput = readline.question(chalk.bold.yellowBright("Enter your name: "));

console.log(chalk.bold.red(`Hello ` + chalk.bold.yellowBright(nameInput) + `! ` + `Welcome to The Flame Of Ragnarok.`));
console.log(chalk.green("In this adventure you will explore the caves of Asgard!!"));
console.log(chalk.green("Be wary of your actions Young God or they might be you last!!"));
console.log(chalk.blueBright("Also if come across " + chalk.bold.greenBright("Loki ") + "remember he is the Trickster God and just loves mayhem and mischief!!!"))
console.log(chalk.green("In your exploration you will need to find " + chalk.bold.yellowBright("Gungnir ") + "the spear of Odin himself inorder to stop Ragnarok!!!!"))

const startGame = () => {
    console.log(chalk.red.bold("Welcome " + nameInput + "!"))
    let answer = readline.keyInYN('Would you like to start your adventure?')
    if (answer) {
      console.log("Let's Begin!")
      gameLoop()
    }
    else{
      console.log("Remember that Asgard is where it's people are not the where the land is Young God!!!")
      quitGame()
      }
      
  }

const quitGame = () => {
    console.log("Goodbye! Until we meet again!!")
    process.exit()
    }
    
const restartGame = () => {
    console.log(readline.keyInYN("Would you like to play again?"))
    if(answer){
        startGame()
    }
    else{
        quitGame()
    }
  }

  const gameLoop = () => {
    console.log("You walk into the Cave of Time")
    let choice1 = (nameInput + "You see that the cave has two paths to take. Which path do you take? The right path or the left path?")
    console.log("You chose to take " + choice1)
if(choice1 === "right path"){
    console.log("You have taken the right path")
    choice1 = ("You find something glowing in the distance do you want walk towards it? yes or no")
    if(choice1 === "yes"){
        console.log("You have found Gungnir!!! Congrats!!! You Have saved Asgard!!!")
        restartGame()
    }
    else if(choice1 === "no"){
        console.log("A mysterious fire came out of nowhere!! Oh no you are trapped in The Flame of Ragnorak!!")
        console.log("Unfortunately Young God you weren't able to save Asgard!!!!!")
        quitGame()
    }
}
else if(choice1 === "left path"){
    console.log("You have taken the left path")
    choice1 = ("You have found Loki and he wants to play a game!! He wants you to guess one of two numbers. One will set you free and the other will not. 666 or 333")
    if(choice1 === "333"){
        console.log("He smiles maliciously and says you have the guessed correctly!")
        console.log("Loki then disapears and you think you're safe to continue on your journey....")
        console.log("Oh no!!! That trickster set you up in a trap and you are burned by the Flames of Ragnorak!!")
        restartGame()
    }
    else if(choice1 === "666"){
        console.log("Loki looks at you furiously and offended!!")
        console.log("I am way smarter and not to mention better looking than the so called Devil, he says...")
        console.log("He starts laughing in a erie and evil way and then says good luck....")
        console.log("With that you are transported to another part of the cave where you see something glowing in the distance")
        console.log("Turns out Loki sent you to the right side of the cave where you find Gungnir!!!!!")
        console.log("Congrats!!! You saved Asgard!!!")
        quitGame()
    }

}
  }




















  startGame()
  quitGame()
  restartGame()
  gameLoop()