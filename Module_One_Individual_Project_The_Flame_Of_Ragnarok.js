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
     if (readline.keyInYN('Would you like to start your adventure?')) {
      console.log("Let's Begin!")
      console.log("This will be an epic adventure " + nameInput + ", may the odds be your favor!!!")
      console.log("Good luck!!!! \n")
      runOrFly()
    }
    else{
      console.log("Remember that Asgard is where it's people are not the where the land is Young God!!!")
      quitGame()
      }
      
  }

function runOrFly(){
   console.log("You wake up in the Castle of Asgard. \n")
   console.log("You just got word that Thor, The God of Thunder himself wants to speak to you about a very important quest! \n")
   console.log("He is waiting for you in Thrudheim. Would you like to run or fly?")
   let ability
   while(ability !== "run" && ability !== "fly"){
   ability = readline.question("Please choose run or fly \n")
   if(ability === "run"){
       chooseArmorInCastle()
   }
   else if(ability === "fly"){
       chooseArmorThorOffers()
   }
  }
}

function chooseArmorInCastle(){
    console.log("Before heading to Thrudheim, you see a few armor sets that are element based: Fire, Earth, Water, Thunder, & Steel \n")
let armor = readline.question("Which armor would you like to wear? (Choose only the Element) \n")
if(armor === "Fire"){
    console.log("Wow you chose the Fire Armor! You feel like an unstoppable Inferno!! \n" )
    console.log("You now head to Thrudheim \n")
}
else if(armor === "Earth"){
    console.log("Wow you chose the Earth Armor! You feel like Mother Nature will always protect you!! \n")
    console.log("You now head to Thrudheim \n")
}
else if(armor === "Water"){
    console.log("Wow you chose the Water Armor! You feel calm and focused, Just like the calm before the storm!! \n ")
    console.log("You now head to Thrudheim \n")
}
else if(armor === "Thunder"){
    console.log("Wow you chose the Thunder Armor! You feel powerful just like a Thunder storm or even Thor himself!! \n")
    console.log("You now head to Thrudheim \n")
}
else if(armor === "Steel"){
    console.log("Wow you chose the Steel Armor! You feel invincible, just like an indestructible force!! \n")
    console.log("You now head to Thrudheim \n")
}
else{
console.log("Invalid Choice, Remember that you can only choose the elements and Pay close attention to how the element is written, Please try again... \n")
chooseArmorInCastle()
}

thrudheimCaves()
}

function chooseArmorThorOffers(){
    console.log("After hearing that the mighty Thor has summoned you,")
    console.log("You decided that flying would be fastest getting to him.... \n")
    console.log("You are stopped half way in your flight by no other than Thor himself.... \n")
    console.log(nameInput + "what's taking you so long he asks? I asked to speak with you over an hour ago!! \n")
    console.log("Also where is your armor?!?!?!?! You know that God needs their armor without it can be very dangerous!! \n")
    console.log("Luckily I brought a few armor sets with me just in case they are element based: Fire, Earth, Water, Thunder, & Steel \n")
let armor = readline.question("Which armor would you like to wear? (Choose only the Element) \n")
if(armor === "Fire"){
    console.log("Wow you chose the Fire Armor! You feel like an unstoppable Inferno!! \n" )
    console.log("You now head to Thrudheim together with Thor \n")
}
else if(armor === "Earth"){
    console.log("Wow you chose the Earth Armor! You feel like Mother Nature will always protect you!! \n")
    console.log("You now head to Thrudheim together with Thor \n")
}
else if(armor === "Water"){
    console.log("Wow you chose the Water Armor! You feel calm and focused, Just like the calm before the storm!! \n ")
    console.log("You now head to Thrudheim together with Thor \n")
}
else if(armor === "Thunder"){
    console.log("Wow you chose the Thunder Armor! You feel powerful just like a Thunder storm or even Thor himself!! \n")
    console.log("You now head to Thrudheim together with Thor \n")
}
else if(armor === "Steel"){
    console.log("Wow you chose the Steel Armor! You feel invincible, just like an indestructible force!! \n")
    console.log("You now head to Thrudheim together with Thor \n")
}
else{
console.log("Invalid Choice, Remember that you can only choose the elements and Pay close attention to how the element is written, Please try again... \n")
chooseArmorThorOffers()
}

thrudheimCaves()
}

function thrudheimCaves(){
console.log("After a few minutes you have reached The Thrudheim Caves \n")
console.log("Thor stops and seems confused and says" + nameInput + "these four paths weren't here before \n")
console.log("You see" + nameInput + "why I called you here now? It's my brother Loki he is up to his no good deeds again.... \n")
console.log("And it seems like this time he has gone too far!!! \n")
console.log(nameInput + "It's up to you to stop him or Ragnorak will spread throughout Asgard and then to the rest of the multi-verse!!! \n")
console.log("He will be in the Cave of Time find him and stop him Young God!!!!!! \n")
let path = readline.question("Which of the four paths would you like to take: path (1), path (2), path (3), or path (4); (Choose a number) \n")
if(path === "1"){}
else if(path === "2"){}
else if(path === "3"){}
else if(path === "4"){}
else{
    console.log("Invalid Entry, Remember it's number... Please try again")
    thrudheimCaves()
}
}
    
const restartGame = () => {
    if(readline.keyInYN("Would you like to play again? \n")){
        runOrFly()
    }
    else{
        quitGame()
    }
  }

  const quitGame = () => {
    console.log("Goodbye! Until we meet again!!")
    process.exit()
    }






















startGame()