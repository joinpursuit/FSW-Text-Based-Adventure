const readline = require('readline-sync');

const chalk = require('chalk');

const figlet = require('figlet')

console.log(chalk.redBright(figlet.textSync('THE FLAME ' + '   OF' + ' RAGNAROK', {
    font: 'Fire Font-k',
    horizontalLayout: 'default',
    verticalLayout: 'default',
    width: 60,
    whitespaceBreak: true
})))

let nameInput = readline.question(chalk.bold.yellowBright("Enter your name: "));

console.log(chalk.bold.red(`Hello ` + chalk.bold.yellowBright(nameInput) + `! ` + `Welcome to The Flame Of Ragnarok.`));
console.log(chalk.green("In this adventure you will explore the caves of Asgard!!"));
console.log(chalk.green("Be wary of your actions Young God or they might be you last!!"));
console.log(chalk.blueBright("Also if come across " + chalk.bold.greenBright("Loki ") + "remember he is the Trickster God and just loves mayhem and mischief!!!"))
console.log(chalk.green("In your exploration you will need to find " + chalk.bold.yellowBright("Gungnir ") + "the spear of Odin himself inorder to stop Ragnarok!!!!"))

const startGame = () => {
    console.log(chalk.red.bold("Welcome " + chalk.bold.yellowBright(nameInput) + "!"))
     if (chalk.blueBright(readline.keyInYN('Would you like to start your adventure? \n'))) {
      console.log(chalk.green("Let's Begin!"))
      console.log(chalk.green("This will be an epic adventure ") + chalk.bold.yellowBright(nameInput) + chalk.green(", may the odds be your favor!!!"))
      console.log(chalk.green("Good luck!!!! \n"))
      runOrFly()
    }
    else{
      quitGame()
      }
      
  }

function runOrFly(){
   console.log(chalk.green("You wake up in the Castle of Asgard. \n"))
   console.log(chalk.green("You just got word that Thor, The God of Thunder himself wants to speak to you about a very important quest! \n"))
   console.log(chalk.green("He is waiting for you in Thrudheim. Would you like to run or fly?"))
   let ability
   while(ability !== "run" && ability !== "fly"){
   ability = readline.question("Please choose run or fly \n")
   if(ability === "run"){
       chooseArmorInCastle()
   }
   else if(ability === "fly"){
       chooseArmorThorOffers()
   }
   else{
       console.log(chalk.redBright("Invalid choice, Please choose run or fly! \n"))
       runOrFly()
   }
  }
}

function chooseArmorInCastle(){
    console.log(chalk.green("Before heading to Thrudheim, you see a few armor sets that are element based: Fire, Earth, Water, Thunder, & Steel \n"))
let armor = readline.question("Which armor would you like to wear? (Choose only the Element) \n")
if(armor === "Fire"){
    console.log(chalk.green("Wow you chose the Fire Armor! You feel like an unstoppable Inferno!! \n" ))
    console.log(chalk.green("You now head to Thrudheim \n"))
}
else if(armor === "Earth"){
    console.log(chalk.green("Wow you chose the Earth Armor! You feel like Mother Nature will always protect you!! \n"))
    console.log(chalk.green("You now head to Thrudheim \n"))
}
else if(armor === "Water"){
    console.log(chalk.green("Wow you chose the Water Armor! You feel calm and focused, Just like the calm before the storm!! \n "))
    console.log(chalk.green("You now head to Thrudheim \n"))
}
else if(armor === "Thunder"){
    console.log(chalk.green("Wow you chose the Thunder Armor! You feel powerful just like a Thunder storm or even Thor himself!! \n"))
    console.log(chalk.green("You now head to Thrudheim \n"))
}
else if(armor === "Steel"){
    console.log(chalk.green("Wow you chose the Steel Armor! You feel invincible, just like an indestructible force!! \n"))
    console.log(chalk.green("You now head to Thrudheim \n"))
}
else{
console.log(chalk.redBright("Invalid Choice, Remember that you can only choose the elements and Pay close attention to how the element is written, Please try again... \n"))
chooseArmorInCastle()
}

thrudheimCaves()
}

function chooseArmorThorOffers(){
    console.log(chalk.green("After hearing that the mighty Thor has summoned you,"))
    console.log(chalk.green("You decided that flying would be fastest getting to him.... \n"))
    console.log(chalk.green("You are stopped half way in your flight by no other than Thor himself.... \n"))
    console.log(chalk.bold.yellowBright(nameInput) + chalk.green(" what's taking you so long he asks? I asked to speak with you over an hour ago!! \n"))
    console.log(chalk.green("Also where is your armor?!?!?!?! You know that God needs their armor without it can be very dangerous!! \n"))
    console.log(chalk.green("Luckily I brought a few armor sets with me just in case they are element based: Fire, Earth, Water, Thunder, & Steel \n"))
let armor = readline.question("Which armor would you like to wear? (Choose only the Element) \n")
if(armor === "Fire"){
    console.log(chalk.green("Wow you chose the Fire Armor! You feel like an unstoppable Inferno!! \n" ))
    console.log(chalk.green("You now head to Thrudheim together with Thor \n"))
}
else if(armor === "Earth"){
    console.log(chalk.green("Wow you chose the Earth Armor! You feel like Mother Nature will always protect you!! \n"))
    console.log(chalk.green("You now head to Thrudheim together with Thor \n"))
}
else if(armor === "Water"){
    console.log(chalk.green("Wow you chose the Water Armor! You feel calm and focused, Just like the calm before the storm!! \n "))
    console.log(chalk.green("You now head to Thrudheim together with Thor \n"))
}
else if(armor === "Thunder"){
    console.log(chalk.green("Wow you chose the Thunder Armor! You feel powerful just like a Thunder storm or even Thor himself!! \n"))
    console.log(chalk.green("You now head to Thrudheim together with Thor \n"))
}
else if(armor === "Steel"){
    console.log(chalk.green("Wow you chose the Steel Armor! You feel invincible, just like an indestructible force!! \n"))
    console.log(chalk.green("You now head to Thrudheim together with Thor \n"))
}
else{
console.log(chalk.redBright("Invalid Choice, Remember that you can only choose the elements and Pay close attention to how the element is written, Please try again... \n"))
chooseArmorThorOffers()
}

thrudheimCaves()
}

function thrudheimCaves(){
console.log(chalk.green("After a few minutes you have reached The Thrudheim Caves \n"))
console.log(chalk.green("Thor stops and seems confused and says ") + chalk.bold.yellowBright(nameInput) + chalk.green(" these four paths weren't here before, \n"))
console.log(chalk.green("You see ") + chalk.bold.yellowBright(nameInput) + chalk.green(" why I called you here now? It's my brother Loki he is up to his no good deeds again.... \n"))
console.log(chalk.green("And it seems like this time he has gone too far!!! \n"))
console.log(chalk.bold.yellowBright(nameInput) + chalk.green(" It's up to you to stop him or Ragnarok will spread throughout Asgard and then to the rest of the multi-verse!!! \n"))
console.log(chalk.green("He will be in the Cave of Time find him and stop him Young God!!!!!! \n"))
let path = readline.question("Which of the four paths would you like to take: path (1), path (2), path (3), or path (4); (Choose a number) \n")
if(path === "1"){
    goingThroughPathOne()
}
else if(path === "2"){
    goingThroughPathTwo()
}
else if(path === "3"){
    goingThroughPathThree()
}
else if(path === "4"){
    goingThroughPathFour()
}
else{
    console.log(chalk.redBright("Invalid Entry, Remember it's number... Please try again \n"))
    thrudheimCaves()
}
}

function goingThroughPathOne(){
    console.log(chalk.green("You decided to take the first path. \n"))
    console.log(chalk.green("While walking along the path you notice that there is a vendor selling goods. \n"))
    console.log(chalk.green("Hoping that he has something to help you along your journey you carefully approach. \n"))
    let merchant = readline.question("Would you like to buy: Health Potions, Vitality Potions, or Stamina Potions? \n")
    if (merchant === "Health Potions"){
        healthPotion()
    }
    else if (merchant === "Vitality Potions"){
        vitalityPotion()
    }
    else if(merchant === "Stamina Potions"){
        staminaPotion()
    }
    else{
        console.log(chalk.redBright("Wrong entry please choose one of the following Health Potions, Vitality Potions, or Stamina Potions and try again. \n"))
        goingThroughPathOne()
    }
}

function goingThroughPathTwo(){
    console.log(chalk.green("You decided to take the second path. \n"))
    console.log(chalk.green("While walking along the path you notice that there is a vendor selling goods. \n"))
    console.log(chalk.green("Hoping that he has something to help you along your journey you carefully approach. \n"))
    let merchant = readline.question("Would you like to buy: Health Potions, Vitality Potions, or Stamina Potions? \n")
    if (merchant === "Health Potions"){
        healthPotion()
    }
    else if (merchant === "Vitality Potions"){
        vitalityPotion()
    }
    else if(merchant === "Stamina Potions"){
        staminaPotion()
    }
    else{
        console.log(chalk.redBright("Wrong entry please choose one of the following Health Potions, Vitality Potions, or Stamina Potions and try again. \n"))
        goingThroughPathTwo()
    }
}

function goingThroughPathThree(){
    console.log(chalk.green("You decided to take the third path. \n"))
    console.log(chalk.green("While walking through this path all of a sudden you hear a loud sinister laugh!!!"))
    console.log(chalk.green("Oh no it's Loki!! He brings down the boulder right on top of you!! \n"))
    let blocked = readline.question("What would you like to do: quit or restart? \n")
if (blocked === "quit"){
    quitGame()
}
else if(blocked === "restart"){
    restartGame()
}
else{
    console.log(chalk.redBright("Invalid response please select either: quit or restart, and try again!! \n"))
    goingThroughPathThree()
}
}

function goingThroughPathFour(){
    console.log(chalk.green("You decided to take the fourth path. \n"))
    console.log(chalk.green("While walking along the path you notice that there is a vendor selling goods. \n"))
    console.log(chalk.green("Hoping that he has something to help you along your journey you carefully approach. \n"))
    let merchant = readline.question("Would you like to buy: Health Potions, Vitality Potions, or Stamina Potions? \n")
    if (merchant === "Health Potions"){
        healthPotion()
    }
    else if (merchant === "Vitality Potions"){
        vitalityPotion()
    }
    else if(merchant === "Stamina Potions"){
        staminaPotion()
    }
    else{
        console.log(chalk.redBright("Wrong entry please choose one of the following Health Potions, Vitality Potions, or Stamina Potions and try again. \n"))
        goingThroughPathFourth()
    }
}

function healthPotion(){
    console.log(chalk.green("You chose the Health Potion that is a very wise choice!! \n"))
    console.log(chalk.green("I would recommend that you use it wisely.. \n"))
    console.log(chalk.green("Now that you have everything you need, you need to decide what you want to do to continue your path. \n"))
    let continuedPath = readline.question("Would you like to: Rest, Carry On, or Quit? \n")
    if (continuedPath === "Rest"){
        console.log(chalk.green("You rested for a bit and then drank the Health Potion. \n"))
        console.log(chalk.green("You then carried on the path feeling full of energy, it was hard but you got the feeling that it's only the begining. \n"))
        caveOfTime()
    }
    else if (continuedPath === "Carry On"){
        console.log(chalk.green("You then carried on the path feeling full of energy. \n"))
        console.log(chalk.green("It was a long and hard path but you got the feeling that it's only the begining, but so far you have managed to overcome every obstacle!! \n"))
        caveOfTime()
    }
    else if (continuedPath === "Quit"){
        console.log(chalk.red("It's a shame that you decided not to continue your adventure Young God... \n"))
        console.log(chalk.red("Until next time remember that the fate of the multi-verse is in your hands!! \n"))
        quitGame()
    }
}

function vitalityPotion(){
    console.log(chalk.green("You chose the Vitality Potion that is a very wise choice!! \n"))
    console.log(chalk.green("I would recommend that you use it wisely.. \n"))
    console.log(chalk.green("Now that you have everything you need, you need to decide what you want to do to continue your path. \n"))
    let continuedPath = readline.question("Would you like to: Rest, Carry On, or Quit? \n")
    if (continuedPath === "Rest"){
        console.log(chalk.green("You rested for a bit and then drank the Vitality Potion. \n"))
        console.log(chalk.green("You then carried on the path feeling full of magic energy, this magic is powerful making you unstoppable!! \n"))
        caveOfTime()
    }
    else if (continuedPath === "Carry On"){
        console.log(chalk.green("You then carried on the path feeling full of magic energy. \n"))
        console.log(chalk.green("The path was long but using the magic potion really helped and made it a little easier!! \n"))
        caveOfTime()
    }
    else if (continuedPath === "Quit"){
        console.log(chalk.red("It's a shame that you decided not to continue your adventure Young God... \n"))
        console.log(chalk.red("Until next time remember that the fate of the multi-verse is in your hands!! \n"))
        quitGame()
    }
}

function staminaPotion(){
    console.log(chalk.green("You chose the Stamina Potion that is a very wise choice!! \n"))
    console.log(chalk.green("I would recommend that you use it wisely.. \n"))
    console.log(chalk.green("Now that you have everything you need, you need to decide what you want to do to continue your path. \n"))
    let continuedPath = readline.question("Would you like to: Rest, Carry On, or Quit? \n")
    if (continuedPath === "Rest"){
        console.log(chalk.green("You rested for a bit and then drank the Stamina Potion. \n"))
        console.log(chalk.green("You then carried on the path feeling full of stamina, it was quick and easy, wow these potions are amazing!! \n"))
        caveOfTime()
    }
    else if (continuedPath === "Carry On"){
        console.log(chalk.green("You then carried on the path feeling full of energy. \n"))
        console.log(chalk.green("The path was long but so far you have managed to overcome every obstacle quickly!! \n"))
        caveOfTime()
    }
    else if (continuedPath === "Quit"){
        console.log(chalk.red("It's a shame that you decided not to continue your adventure Young God... \n"))
        console.log(chalk.red("Until next time remember that the fate of the multi-verse is in your hands!! \n"))
        quitGame()
    }
}
    
function caveOfTime(){
   console.log(chalk.green("After a few minutes you reach the Cave of Time!! \n"))
   console.log(chalk.bold.yellowBright(nameInput) + chalk.green(" wait I need to tell you something..."))
   console.log(chalk.green("'Thor flew down' ") + chalk.bold.yellowBright(nameInput) + chalk.green(" you need to becareful inside the Cave of Time, Loki will be up to no good!!! \n"))
   console.log(chalk.green("Once you go inside there will be four pathways one of them will lead you to Gungnir,"))
   console.log(chalk.green("That is the Spear of Odin himself, we will need it to stop Ragnarok and save the multi-verse good luck ") + chalk.yellowBright(nameInput) + chalk.red("!!! \n"))
   let cavePath = readline.question("You have entered the Cave of Time and you have found the four paths Thor was talking about, which path route will you take: route(1), route(2), route(3), or route(4). Please choose a number. \n")
   if (cavePath === "1"){
       routePathOne()
   }
   else if (cavePath === "2"){
       routePathTwo()
   }
   else if (cavePath === "3"){
       routePathThree()
   }
   else if (cavePath === "4"){
       routePathFour()
   }
   else{
    console.log(chalk.redBright("Invalid Entry, Remember it's number... Please try again \n"))
    caveOfTime()
   }
}

function routePathOne(){
     console.log(chalk.green("You decided to take the first path..."))
     console.log(chalk.green("You walk deep into the cave and it seems like that it goes on forever...."))
     console.log(chalk.green("After sometime and what seemed like an eternity later, you take a step and fall into the Hole of Eternal Darkness. \n"))
     setTimeout(() => {  console.log(chalk.cyanBright(".")); }, 2000)
     setTimeout(() => {  console.log(chalk.cyanBright("..")); }, 6000)
     setTimeout(() => {  console.log(chalk.cyanBright("...")); }, 8000)
     setTimeout(() => {  console.log(chalk.cyanBright("....")); }, 10000)
     setTimeout(() => {  console.log(chalk.cyanBright(".....")); }, 12000)
 setTimeout(() => { let fall = chalk.blueBright(readline.question("What would you like to do: quit or restart? \n"))
 if (fall === "quit"){
   quitGame()
}
else if(fall === "restart"){
   caveOfTime()
}
else{
   console.log(chalk.redBright("Invalid response please select either: quit or restart, and try again!! \n"))
   routePathOne()
}
}, 14000)
}

function routePathTwo(){
    console.log(chalk.green("You decided to take the second path..."))
    console.log(chalk.green("You walk deep into the cave and just you thought this is taking a long time... \n"))
    let cavePathLeftOrRight = readline.question("Deep inside The Cave of Time you come across another two paths that Thor never mentioned: A path to the (Right) and a path to the (Left), which would you like to choose? \n")
    if (cavePathLeftOrRight === "Right"){
    console.log("You entered the right path of the cave..")
    cavePathRight()
    }
    else if (cavePathLeftOrRight === "Left"){
    console.log("You entered the left path of the cave..")
    cavePathLeft()
    }
    else{
        console.log(chalk.redBright("Invalid Entry Please choose: Right or Left, try again!"))
        routePathTwo()
    }
}

function routePathThree(){
   console.log(chalk.green("You decided to take the third path..."))
   console.log(chalk.green("You walk deep into the cave and it seems like that it goes on forever...."))
   setTimeout(() => {  console.log(chalk.cyanBright("After a while Loki appeared... you shouldn't be here this will be your downfall!!")); }, 6000)
   setTimeout(() => {  console.log(chalk.cyanBright("He suddenly disappears and The Bifrost sweeps you away!!")); }, 10000)
   setTimeout(() => { let sweep = readline.question("What would you like to do: quit or restart? \n")
 if (sweep === "quit"){
   quitGame()
}
else if(sweep === "restart"){
   caveOfTime()
}
else{
   console.log(chalk.redBright("Invalid response please select either: quit or restart, and try again!! \n"))
   routePathThree()
}
}, 16000)
}

function routePathFour(){
    console.log(chalk.green("You decided to take the fourth path..."))
    console.log(chalk.green("You walk deep into the cave and just you thought this is taking a long time... \n"))
    let cavePathLeftOrRight = readline.question("Deep inside The Cave of Time you come across another two paths that Thor never mentioned: A path to the (Right) and a path to the (Left), which would you like to choose? \n")
    if (cavePathLeftOrRight === "Right"){
    console.log("You entered the right path of the cave.. \n")
    cavePathRight()
    }
    else if (cavePathLeftOrRight === "Left"){
    console.log("You entered the left path of the cave.. \n")
    cavePathLeft()
    }
    else{
        console.log(chalk.redBright("Invalid Entry Please choose: Right or Left, try again! \n"))
        routePathFour()
    }
}

function cavePathRight(){
    console.log(chalk.green("You see a glowing light coming from deep in the cave..."))
    console.log(chalk.green("You get excited and hurry torwards that light! \n"))
    console.log(chalk.green("When you reach the light you meet the old wizard and he says ") + chalk.bold.yellowBright(nameInput) + chalk.green(" in order to get what you need,"))
    console.log(chalk.green("You need to play a game I'm going to give you five treasure chests, only one has what you need while the others don't. \n"))
  if (readline.keyInYN('Would you like to play? \n')){
   let index = readline.question('Which chest would you like to chose? Please choose one: Chest 1, Chest 2, Chest 3, Chest 4, or Chest 5. \n' );
  if (index === 'Chest 1'){
      console.log(chalk.green("Wow gold and lots of it!! It's a shame that's not what you need"))
      console.log(chalk.magenta("Please try again!! \n"))
      cavePathRight()
  }
  else if(index === 'Chest 2'){
      console.log(chalk.yellowBright("It's Gungnir!!! Congrats!!!! Now it's time to stop Loki!!!!! \n"))
      finalShowDown()
  }
  else if(index === 'Chest 3'){
      console.log(chalk.green("It's Thors hammer!! To bad that's not what you need"))
      console.log(chalk.magenta("Please try again!! \n"))
      cavePathRight()
  }
  else if(index === 'Chest 4'){
      console.log(chalk.green("It's a feast of food, it looks so good it's making you hungry!!"))
      console.log(chalk.magenta("Please try again!! \n"))
      cavePathRight()
  }
  else if(index === 'Chest 5'){
      console.log(chalk.green("An empty chest?! Looks like this wizard has a sense of humor!!!"))
      console.log(chalk.magenta("Please try again!! \n"))
      cavePathRight()
  }
  else{
      console.log(chalk.magenta("He's a tricky wizard, Please try again Remember to Type 'Chest' with the number!! \n"))
  }
}
else{
    console.log(chalk.magenta("It is recommended that you play the fate of the multi-verse lies in your hands after all ") + chalk.bold.yellowBright(nameInput) + chalk.magenta("!! \n"))
    cavePathRight()
}
}

function cavePathLeft(){
  console.log(chalk.green("You are starting to grow weary and tired you didn't expect that the Cave of Time would be this big... \n"))
  console.log(chalk.green("You start to question your decision and wonder if you should give up..... \n"))
  setTimeout(() => {  console.log(chalk.cyanBright("Well what did you expect you are in the Cave of Time after all, A Voice Echoed From the Distance!!!!! \n")); }, 7000)
  setTimeout(() => {  console.log(chalk.cyanBright("I am just an old wizard trying to help don't get frightened Young God")); }, 10000)
  setTimeout(() => {  console.log(chalk.cyanBright("I will transport you over to the correct cave!!!!! \n")); }, 13000)
  setTimeout(() => {  cavePathRight(); }, 16000)
}

function finalShowDown(){
    setTimeout(() => {  console.log(chalk.cyanBright("Just like that old wizard transported you outside The Cave of Time!!!!! \n")); }, 5000)
    setTimeout(() => {  console.log(chalk.cyanBright("Congrats!!!! ") + chalk.bold.yellowBright(nameInput) + chalk.cyanBright(" I knew you can do it said Thor, by the way that old wizard is my father Odin himself!! \n")); }, 7000)
    setTimeout(() => {  console.log(chalk.cyanBright("He wanted to make sure you are worthy, he has done something similar to me in the past as well! \n")); }, 11000)
    setTimeout(() => {  console.log(chalk.cyanBright("Now that you have Gungnir you have to throw it in the Flame of Ragnarok while I take care of my brother Loki... \n")); }, 15000)
    setTimeout(() => { if(readline.keyInYN("Are you ready to stop Ragnarok? \n")){
    console.log(chalk.yellowBright("With all your might during the epic fight between Thor and Loki.."))
    console.log(chalk.yellowBright("You threw Gungnir into the Flame of Ragnarok and saved the multiverse..."))
    console.log(chalk.green("Congratulations ") + chalk.bold.yellowBright(nameInput) + chalk.green(" You beat the game!!!"))
    restartGame()
    }
    else{
        console.log(chalk.magenta("You get caught in the crossfire between Thor and Loki!!!"))
        console.log(chalk.magenta("The Staff of Odin flies from your hand, but you're not going to give up."))
        console.log(chalk.magenta("With every ounce of energy you have left you get up and start looking for Gungnir.... \n"))
        finalThrowItsAllOrNothing()
    }
 }, 19000)
}

function finalThrowItsAllOrNothing () {
    console.log(chalk.green("After what seemed like an eternity you finally find Gungnir... \n"))
    console.log(chalk.green("Asgard looks like a dead planet now due to Loki's actions, it was once a very beautiful place!!! \n"))
    setTimeout(() => {  console.log(chalk.cyanBright("It is now or never!! You take Gungnir and throw it with all your might right in the center of The Flame of Ragnarok!!! \n"))}, 8000)
    setTimeout(() => {  console.log(chalk.cyanBright("Congratulations " + chalk.bold.yellowBright(nameInput) + " You saved the multiverse and beat the game!!!! \n")); }, 14000)
    setTimeout(() => {  restartGame(); }, 17000)
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
    console.log(chalk.redBright("Goodbye! Until we meet again!!"))
    console.log(chalk.redBright("And remember that Asgard is where it's people are not the where the land is Young God!!!"))
    process.exit()
    }






















startGame()