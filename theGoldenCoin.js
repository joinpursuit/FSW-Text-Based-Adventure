const readline1 = require('readline-sync')
const chalk = require('chalk')

let nameInput = readline1.question("Enter your name: \n")

console.log(`\nHello ${nameInput}!  Welcome to The Golden Coin!\nAll your decisions matter.\nBe careful!\nYou can die at any moment, and you will restart the game again\n`)

const startGame = () => {
    if (readline1.keyInYN("Are you ready to inmerse yourself in this adventure?")) {
        console.log("\n");
        console.log("Let's go!!\n");
        gamePlay()
    } else {
        quitGame()
    }
}

const quitGame = () => {
    console.log("Perfect!! See you next time!!");
    process.exit()
}

const gamePlay = () => {
   
    console.log("You dropped off a golden coin and now you have to find it." + "\n" + 
    "The thing is you don't remember anything, and you don't even know who you are!!" + "\n");
    
    genericInput1()
    
}

const genericInput1 = () => {
    
    console.log("You are surrounded by flowers!! You see a path to the east, a cow to the south and a village to the north.\n");

    let genericInput1 = ["north", "south", "east"]
    
    while (genericInput1 !== "north" || genericInput1 !== "south" || genericInput1 !== "east") {

    readline1.setDefaultOptions({limit:genericInput1, limitMessage:"\nInvalid move! Use 'north', 'south' or 'east'"})

    let input1 = readline1.question("Where do you want to go?\n")
    
        switch (input1) {
            case "north":
                console.log("\n");
                console.log("You ran into the village and you are surrounded by 3 houses: one on your left, one on your right and one in front of you.\n");
                genericInput1North()
                break;
            case "south":
                console.log("\n");
                console.log("You encounter a cow and it looks familiar?\n");
                console.log(chalk.yellow("Cow:")) + console.log(`${nameInput}, what happened to you? Why are you looking me with those eyes? I'm your friend, ` + chalk.yellow("Milky") + "!!\n");
                genericInput1South()
                break;
            case "east":
                console.log("\n");
                console.log("You are walking through the path, the path breaks and you fall into a hole!! Oh no!!\n");
                if (readline1.keyInYN("Do you want to try again?")) {
                    console.log("\n");
                    gamePlay()
                } else {
                    console.log("\n");
                    quitGame()
                }
                break;
            default: 
        } 
    break;
    } 
}

const genericInput1North = () => {
    
    console.log("All 3 houses looks very familiar to you. You also have the option to go back\n");

    let genericInput1North = ["left", "right", "front", "back"]
    
    while (genericInput1North !== "left" || genericInput1North !== "right" || genericInput1North !== "front" || genericInput1North !== "back") {
    readline1.setDefaultOptions({limit:genericInput1North})
    let input2 = readline1.question("Which one do you want to enter?\n")
        switch (input2) {
            case "left":
                console.log("Your enter the left house. There's bag with 10 coins in it");
                genericInput1NorthLeft()
                break;
            case "right":
                console.log("\nYou enter the right house. It's a private property . Oh no!!");
                if (readline1.keyInYN("Do you want to try again?")) {
                    console.log("\n");
                    gamePlay()
                } else {
                    console.log("\n");
                    quitGame()
                }
                break;
            case "front":
                console.log("\nYou enter the front house. You found a big portrait inside the house that says: " + `'${nameInput}'s House'`);
                genericInput1NorthFront();
                break;
            case "back":
                console.log("\nYou came back to the beginning\n");
                genericInput1()
                break;
            default:       
        }
        break;
    }

}

const genericInput1South = () => {
   
    console.log("You are so confused right now\n");

    let genericInput1South = ["Why are you able to talk?", `Wait, you say my name is ${nameInput}?`] 
    let input3 = readline1.keyInSelect(genericInput1South, "Choose an option")
    let input4 = genericInput1South[input3]

    if (input4 === "Why are you able to talk?") {
       console.log("\n");
       console.log(chalk.yellow("Milky:")) + console.log("It doesn't matter!! What matters is that you are my best friend.\nIt seems that you dont remember anything.\n");
       for( var i = 0; i < genericInput1South.length; i++){ 
            if (genericInput1South[i] === "Why are you able to talk?") {
                genericInput1South.splice(i, 1); 
             }
        }

        input3 = readline1.keyInSelect(genericInput1South, "1 option left")
        input4 = genericInput1South[input3]

        if (input4 === `Wait, you say my name is ${nameInput}?`) {
            console.log("\nYes, it is!! You have been living in the village for 8 years.\nYou went to look for the Golden Coin two weeks ago!! What happened?");
        }

    } else if (input4 === `Wait, you say my name is ${nameInput}?`) {
        console.log("\nYes, it is!! You have been living in the village for 8 years.\nYou went to look for the Golden Coin two weeks ago!! What happened?");
        for( var i = 0; i < genericInput1South.length; i++){ 
             if (genericInput1South[i] === `Wait, you say my name is ${nameInput}?`) {
                 genericInput1South.splice(i, 1); 
              }
         }

         input3 = readline1.keyInSelect(genericInput1South, "1 option left")
         input4 = genericInput1South[input3]

         if (input4 === "Why are you able to talk?") {
            console.log("\n");
            console.log(chalk.yellow("Milky:")) + console.log("It doesn't matter!! What matters is that you are my best friend.\nIt seems that you dont remember anything.\n");
         }
     }

}

const genericInput1NorthLeft = () => {

    console.log("These are silver coins.");

    let genericInput1NorthLeft = ["Take the bag", "Go back outside"]
    let input5 = readline1.keyInSelect(genericInput1NorthLeft, "What do you want to do?")
    let input6 = genericInput1NorthLeft[input5]

    if (input6 === "Take the bag") {
        console.log("\n");
        console.log("Amazing!! You got 10 silver coins!!");
        for( var i = 0; i < genericInput1NorthLeft.length; i++){ 
             if (genericInput1NorthLeft[i] === "Take the bag") {
                 genericInput1NorthLeft.splice(i, 1); 
              }
         }
 
         input5 = readline1.keyInSelect(genericInput1NorthLeft, "1 choice left")
         input6 = genericInput1NorthLeft[input5]
 
         if (input6 === "Go back outside") {
            console.log("\nYou are outside now\n");
            genericInput1NorthLeftToOutside();

         }
 
     } else if (input6 === "Go back outside") {
        console.log("\nYou are outside now\n");
        genericInput1North();
      }
}

const genericInput1NorthFront = () => {
    console.log(`\nYou are shocked!! You remembered that ${nameInput} is your name!! So, this is your house and you have a collection of coins?\n`);

    let genericInput1NorthFront = ["Go back outside"]
    let input7 = readline1.keyInSelect(genericInput1NorthFront, "What do you want to do now?")
    let input8 = genericInput1NorthFront[input7]

    if (input8 === "Go back outside") {
        console.log("\nYou are outside now\n");
        genericInput1NorthFrontToOutside()
    }
}

const genericInput1NorthFrontToOutside = () => {
    
    console.log("Now you are only missing 2 houses: one to the left and one to the right. Remember that you have the option to go back to the beginning.\n");

    let genericInput1NorthFrontToOutside = ["left", "right", "back"]
    
    while (genericInput1NorthFrontToOutside !== "left" || genericInput1NorthFrontToOutside !== "right"  || genericInput1NorthFrontToOutside !== "back") {
    readline1.setDefaultOptions({limit:genericInput1NorthFrontToOutside})
    let input9 = readline1.question("Which one do you want to enter?\n")
        switch (input9) {
            case "left":
                console.log("Your enter the left house. There's bag with 10 coins in it");
                genericInput1NorthFrontToOutsideLeft()
                break;
            case "right":
                console.log("\nYou enter the right house. It's a private property . Oh no!!");
                if (readline1.keyInYN("Do you want to try again?")) {
                    console.log("\n");
                    gamePlay()
                } else {
                    console.log("\n");
                    quitGame()
                }
                break;
            case "back":
                console.log("\nYou came back to the beginning\n");
                genericInput1Back1()
                break;
            default:       
        }
        break;
    }

}

const genericInput1NorthFrontToOutsideLeft = () => {

    console.log("These are silver coins. You want to add them to your collection");

    let genericInput1NorthFrontToOutsideLeft = ["Take the bag", "Go back outside"]
    let input10 = readline1.keyInSelect(genericInput1NorthFrontToOutsideLeft, "What do you want to do?")
    let input11 = genericInput1NorthFrontToOutsideLeft[input10]

    if (input11 === "Take the bag") {
        console.log("\n");
        console.log("Amazing!! You got 10 silver coins!!");
        for( var i = 0; i < genericInput1NorthFrontToOutsideLeft.length; i++){ 
             if (genericInput1NorthFrontToOutsideLeft[i] === "Take the bag") {
                 genericInput1NorthFrontToOutsideLeft.splice(i, 1); 
              }
         }
 
         input10 = readline1.keyInSelect(genericInput1NorthFrontToOutsideLeft, "1 choice left")
         input11 = genericInput1NorthFrontToOutsideLeft[input10]
 
         if (input11 === "Go back outside") {
             console.log("\nYou are outside now\n");
             genericInput1NorthFrontToOutsideLeftToOutside()
         }
 
     } else if (input11 === "Go back outside") {
        console.log("\nYou are outside now\n");
        genericInput1NorthFrontToOutsideLeftToOutside()
      }
}

const genericInput1NorthFrontToOutsideLeftToOutside = () => {
    
    console.log("Now you are only missing 1 house: the one to the right. Remember that you have the option to go back to the beginning.\n");

    let genericInput1NorthFrontToOutsideLeftToOutside = ["right", "back"]
    
    while (genericInput1NorthFrontToOutsideLeftToOutside !== "right"  || genericInput1NorthFrontToOutsideLeftToOutside !== "back") {
    readline1.setDefaultOptions({limit:genericInput1NorthFrontToOutsideLeftToOutside})
    let input12 = readline1.question("Which one do you want to enter?\n")
        switch (input12) {
            case "right":
                console.log("\nYou enter the right house. It's a private property . Oh no!!");
                if (readline1.keyInYN("Do you want to try again?")) {
                    console.log("\n");
                    gamePlay()
                } else {
                    console.log("\n");
                    quitGame()
                }
                break;
            case "back":
                console.log("\nYou came back to the beginning\n");
                genericInput1Back2()
                break;
            default:       
        }
        break;
    }

}

const genericInput1Back1 = () => {
    console.log("Now you remember your name\n");
    console.log("You are surrounded by flowers!! You see a path to the east, a cow to the south and a village to the north\n");

    let genericInput1Back1 = ["north", "south", "east"]
    
    while (genericInput1Back1 !== "north" || genericInput1Back1 !== "south" || genericInput1Back1 !== "east") {

    readline1.setDefaultOptions({limit:genericInput1Back1, limitMessage:"\nInvalid move! Use 'north', 'south' or 'east'"})

    let input13 = readline1.question("Where do you want to go?\n")
    
        switch (input13) {
            case "north":
                console.log("\n");
                genericInput1NorthFrontToOutside()
                break;
            case "south":
                console.log("\n");
                console.log("You encounter a cow and it looks familiar?\n");
                console.log(chalk.yellow("Cow:")) + console.log(`${nameInput}, what happened to you? Why are you looking me with those eyes? I'm your friend, ` + chalk.yellow("Milky") + "!!\n");
                genericInput1South2()
                break;
            case "east":
                console.log("\n");
                console.log("You are walking through the path, the path breaks and you fall into a hole!! Oh no!!\n");
                if (readline1.keyInYN("Do you want to try again?")) {
                    console.log("\n");
                    gamePlay()
                } else {
                    console.log("\n");
                    quitGame()
                }
                break;
            default: 
        } 
    break;
    } 
}

const genericInput1Back2 = () => {
    console.log("Now you remember your name and got your coins. You don't need to go north anymore\n");
    console.log("You are surrounded by flowers!! You see a path to the east and a cow to the south\n");

    let genericInput1Back2 = ["south", "east"]
    
    while (genericInput1Back2 !== "south" || genericInput1Back2 !== "east") {

    readline1.setDefaultOptions({limit:genericInput1Back2, limitMessage:"\nInvalid move! Use 'south' or 'east'"})

    let input14 = readline1.question("Where do you want to go?\n")
    
        switch (input14) {
            case "south":
                console.log("\n");
                console.log("You encounter a cow and it looks familiar?\n");
                console.log(chalk.yellow("Cow:")) + console.log(`${nameInput}, what happened to you? Why are you looking me with those eyes? I'm your friend, ` + chalk.yellow("Milky") + "!!\n");
                genericInput1South2()
                break;
            case "east":
                console.log("\n");
                console.log("You are walking through the path, the path breaks and you fall into a hole!! Oh no!!\n");
                if (readline1.keyInYN("Do you want to try again?")) {
                    console.log("\n");
                    gamePlay()
                } else {
                    console.log("\n");
                    quitGame()
                }
                break;
            default: 
        } 
    break;
    } 
}

const genericInput1NorthLeftToOutside = () => {
    
    console.log("Now you are only missing 2 houses: one to the front and one to the right. Remember that you have the option to go back to the beginning.\n");

    let genericInput1NorthLeftToOutside = ["front", "right", "back"]
    
    while (genericInput1NorthLeftToOutside !== "front" || genericInput1NorthLeftToOutside !== "right"  || genericInput1NorthLeftToOutside !== "back") {
    readline1.setDefaultOptions({limit:genericInput1NorthLeftToOutside})
    let input15 = readline1.question("Which one do you want to enter?\n")
        switch (input15) {
            case "front":
                console.log("\nYou enter the front house. You found a big portrait inside the house that says: " + `'${nameInput}'s House'`);
                genericInput1NorthLeftToOutsideFront();
                break;
            case "right":
                console.log("\nYou enter the right house. It's a private property . Oh no!!");
                if (readline1.keyInYN("Do you want to try again?")) {
                    console.log("\n");
                    gamePlay()
                } else {
                    console.log("\n");
                    quitGame()
                }
                break;
            case "back":
                console.log("\nYou came back to the beginning\n");
                genericInput1Back3()
                break;
            default:       
        }
        break;
    }

}

const genericInput1NorthLeftToOutsideFront = () => {
    console.log(`\nYou are shocked!! You remembered that ${nameInput} is your name!! So, this is your house and you have a collection of coins.\n`);
    console.log("Now you added the coins you founded in your collection\n");

    let genericInput1NorthLeftToOutsideFront = ["Go back outside"]
    let input16 = readline1.keyInSelect(genericInput1NorthLeftToOutsideFront, "What do you want to do now?")
    let input17 = genericInput1NorthLeftToOutsideFront[input16]

    if (input17 === "Go back outside") {
        console.log("\nYou are outside now\n");
        genericInput1NorthFrontToOutsideLeftToOutside()
    }
}

const genericInput1Back3 = () => {
    console.log("Now you have 10 coins\n");
    console.log("You are surrounded by flowers!! You see a path to the east, a cow to the south and a village to the north\n");

    let genericInput1Back3 = ["north", "south", "east"]
    
    while (genericInput1Back3 !== "north" || genericInput1Back3 !== "south" || genericInput1Back3 !== "east") {

    readline1.setDefaultOptions({limit:genericInput1Back3, limitMessage:"\nInvalid move! Use 'north', 'south' or 'east'"})

    let input18 = readline1.question("Where do you want to go?\n")
    
        switch (input18) {
            case "north":
                console.log("\n");
                genericInput1NorthLeftToOutside()
                break;
            case "south":
                console.log("\n");
                console.log("You encounter a cow and it looks familiar?\n");
                console.log(chalk.yellow("Cow:")) + console.log(`${nameInput}, what happened to you? Why are you looking me with those eyes? I'm your friend, ` + chalk.yellow("Milky") + "!!\n");
                genericInput1South()
                break;
            case "east":
                console.log("\n");
                console.log("You are walking through the path, the path breaks and you fall into a hole!! Oh no!!\n");
                if (readline1.keyInYN("Do you want to try again?")) {
                    console.log("\n");
                    gamePlay()
                } else {
                    console.log("\n");
                    quitGame()
                }
                break;
            default: 
        } 
    break;
    } 
}

const genericInput1South2 = () => {
   
    console.log("You are so confused right now\n");

    let genericInput1South2 = ["Why are you able to talk?", `Wait, do you know me?`] 
    let input19 = readline1.keyInSelect(genericInput1South2, "Choose an option")
    let input20 = genericInput1South2[input19]

    if (input20 === "Why are you able to talk?") {
       console.log("\n");
       console.log(chalk.yellow("Milky:")) + console.log("It doesn't matter!! What matters is that you are my best friend.\nIt seems that you dont remember anything.\n");
       for( var i = 0; i < genericInput1South2.length; i++){ 
            if (genericInput1South2[i] === "Why are you able to talk?") {
                genericInput1South2.splice(i, 1); 
             }
        }

        input19 = readline1.keyInSelect(genericInput1South2, "1 option left")
        input20 = genericInput1South2[input19]

        if (input20 === `Wait, do you know me?`) {
            console.log("\nYes, it is!! You have been living in the village for 8 years.\nYou went to look for the Golden Coin two weeks ago!! What happened?");
        }

    } else if (input20 === `Wait, do you know me?`) {
        console.log("\nYes, it is!! You have been living in the village for 8 years.\nYou went to look for the Golden Coin two weeks ago!! What happened?");
        for( var i = 0; i < genericInput1South2.length; i++){ 
             if (genericInput1South2[i] === `Wait, do you know me?`) {
                 genericInput1South2.splice(i, 1); 
              }
         }

         input19 = readline1.keyInSelect(genericInput1South2, "1 option left")
         input20 = genericInput1South2[input19]

         if (input20 === "Why are you able to talk?") {
            console.log("\n");
            console.log(chalk.yellow("Milky:")) + console.log("It doesn't matter!! What matters is that you are my best friend.\nIt seems that you dont remember anything.\n");
         }
     }
}



startGame()