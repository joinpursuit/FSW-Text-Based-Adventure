const readlineSync = require("readline-sync")

let nameInput = readlineSync.question("Enter your name: ") // can change if needed

console.log(`Hello ${nameInput}!  Welcome to my chocolate game.`)

class Game {
  constructor() {
    this.play()
  }
  play() {
    let userInput = readlineSync.question(
      "Would you like to play? Enter yes or no?"
    )

    while (userInput !== "yes") {
      console.log("Aw man, this is awkward... Come back again soon :(")
      userInput = readlineSync.question(
        "Would you like to play? Enter yes or no?"
      )
    }
    if (userInput === "yes");
    {
      console.log("YAY! Let's go!")
    }
    userInput = readlineSync.question("Do you like chocolate?")
    while (userInput !== "yes") {
      console.log(
        "You've never had mine! Talk to me later on for some samples ;)"
      )
      userInput = readlineSync.question("Do you like chocolate?")
    }
    if (userInput === "yes");
    {
      console.log(
        "Awesome! Let's get ready to make some truffles! I'll show you how! Just help me with some measuring!"
      )
    }

    let readySetGo = readlineSync.question(
      "Let's get started, shall we? Enter and we shall!"
    )
    let pickOne = readlineSync.question(
      "First, pick your favorite! What's it gonna be?! Sweet, smooth, and creamy MILK CHOCOLATE |or| rich, robust, and decadent DARK CHOCOLATE? Enter milk or dark!"
    )
    // whichOne() {
    let which = userInput
    if (pickOne === "milk") {
      console.log("Sweet! Milk chocolate it is!")
    } else {
      console.log("Nice! Dark chocolate for you!")
    }

    let gramsToOz = readlineSync.question(
      "We have to measure how much chocolate we'll need to melt! We want a big batch, so lets's go for 24 ounces! Would you help convert 24 ounces to grams? Just get the product of the mass value (24 oz.) by 28.35!"
    )

    let arrGrams = [24, 28.35]
    for (let i = 0; i < 680.4; i++) {
      if (arrGrams[0] * arrGrams[1] === 680.4) {
        arrGrams += gramsToOz
        gramsToOz = arrGrams[0] * arrGrams[1]
      }
    }
    console.log("Cool! You did it! It's 680.40 grams!")

    readlineSync.question(
      "This is where we learn a little chemistry! Enter for SCIENCE!"
    )

    let meltingPoint = readlineSync.question(
      "Now, let's melt! We have to get up to the perfect melting point in order to manipulate the cocoa butter crystals in the chocolate, which give chocolate its irrisistible texture and shine. Do you know what the best temperature to melt chocolate is? Truthy or Falsy: chocolate melts at 108 F? Type true or false!!",
      {
        trueValue: ["true"],
        falseValue: ["false"]
      }
    )
    if (meltingPoint === true) {
      console.log("You got it!!")
    } else {
      console.log(
        "Nope! Chocolate melts at a warm 108 F! Not too far from our own body temperature! Coincidence? I think not!"
      )
    }

    readlineSync.question("We've melted, it's time for the REAL fun part...")

    let temperTime = readlineSync.question(
      "...TEMPERING! All we have to do is bring the cocoa butter crystals in perfect alignment by slowly reducing heat and constantly agitating the chocolate, WHILE adding just 1% SEED chocolate to help the crystals get into their best shape, creating beautifully smooth, rich, streak-free chocolate, and we do that by cooling the warm chocolate down to 88.7 F! Could you subtract 88.7 from 108?"
    )
    // calibrationQuestion() {
    let arrTemper = [108, 88.7]
    for (let i = 0; i < arrTemper.length; i++) {
      if (arrTemper[0] - arrTemper[1] === 19.3) {
        temperTime += arrTemper
        temperTime = arrTemper[0] - arrTemper[1]
      }
    }
    console.log(
      "Woohoo! You tempered chocolate! You're a chocolatier! And now, now we're ready to roll!"
    )

    let moldIt = readlineSync.question(
      "Pour your newly tempered chocolate into the pre-cooled ice-tray mold. There are 8 x 5 cavities in this mold! Multiply to get the total number of truffles we'll end up with!"
    )
    let arrMold = [8, 5]
    for (let i = 0; i < arrMold.length; i++) {
      if (arrMold[0] * arrMold[1] === 40) {
        moldIt += arrTemper
        moldIt = arrMold[0] * arrMold[1]
      }
    }
    console.log(
      "Nice! 40 truffles!! Let's put it in the fridge to cool and get ready to pop out of the mold!"
    )

    let bangIt = readlineSync.question(
      "Bang the mold on the counter 3 times in order to release the truffles! Ready-Set-GO! Enter 'bang' now!"
    )
    if (bangIt === "bang") {
    }
    console.log("You've done it!")

    let readyOrNot = readlineSync.question(
      "HOORAY! You did it! You made truffles! Are you ready to reap the rewards??"
    )

    if (readyOrNot === "yes") {
      console.log("Hell yeahhhhh")
    } else {
      console.log("Shucks, looks like I'll have to eat it all myself ;)")
    }

    let chocolateTime = readlineSync.question(
      "CUE THE FANFAIR! The moment of truth---It's chocolate time! Enter to fall in love <3"
    )

    let numInput = 1 < 10
    numInput = readlineSync.question("How many pieces? Pick a number from 0-10")

    switch (numInput) {
      case "10":
        console.log(
          "Wow! You're a chocoholic like me! Enjoy! Come back for more chocolate making any time!! Thank you for playing my game!"
        )
        break
      case "9":
      case "8":
      case "7":
      case "6":
        console.log(
          "Cool! You have enough for sharing--or not! Come back for more! Thanks for playing!"
        )
        break
      case "5":
      case "4":
      case "3":
      case "2":
      case "1":
        console.log(
          "That's great, just enough to tantilize ya! I hope you come back for more! Thanks for playing!"
        )
        break
      default:
        console.log("That's too bad! Come back when you change your mind!")
    }
  }
}

let GameTime = new Game()

GameTime.play()
