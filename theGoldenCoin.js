const readline1 = require('readline-sync')
const chalk = require('chalk')

console.log(`The Golden Coin.`);
console.log(chalk.gray(`Created by Jordan Bobadilla\n`));
let nameInput = readline1.question("Enter your name: \n")
console.clear()
console.log(`Hello ${nameInput}!  Welcome to ` + chalk.yellow(`The Golden Coin!\n`) + `All your decisions matter.\n\nBe careful!\nYou can die at any moment, and you will restart the game again\n`)

const startGame = () => {
    if (readline1.keyInYN("Are you ready to inmerse yourself in this adventure?")) {
        console.clear()
        console.log("Let's go!!\n");
        gamePlay()
    } else {
        quitGame()
    }
}

const quitGame = () => {
    console.clear()
    console.log("Perfect!! See you next time!!\n");
    process.exit()
}

const gamePlay = () => {
   
    console.log("You dropped off a golden coin and now you have to find it." + "\n" + 
    "The thing is you don't remember anything, and you don't even know who you are!!" + "\n");
    
    genericInput1()
    
}

const genericInput1 = () => {
    
    console.log("You are surrounded by flowers!! You see a path to the east, and a village to the north.\n");

    let genericInput1 = ["north", "east"]
    
    while (genericInput1 !== "north" || genericInput1 !== "east") {

    readline1.setDefaultOptions({limit:genericInput1, limitMessage:"\nInvalid move! Use 'north' or 'east'"})

    let input1 = readline1.question("Where do you want to go?\n").toLowerCase()
    
        switch (input1) {
            case "north":
                console.clear()
                console.log("You ran into the village and you are surrounded by 3 houses: one on your left, one on your right and one in front of you.\n");
                genericInput1North()
                break;
            case "east":
                console.clear()
                console.log("You are walking through the path, the path breaks and you fall into a hole!! Oh no!!\n");
                if (readline1.keyInYN("Do you want to try again?")) {
                    console.clear()
                    gamePlay()
                } else {
                    console.clear()
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
    readline1.setDefaultOptions({limit:genericInput1North, limitMessage:"\nInvalid move!! Use 'left', 'right', 'front' or 'back'"})
    let input2 = readline1.question("Which one do you want to enter?\n").toLowerCase()
        switch (input2) {
            case "left":
                console.clear()
                console.log("Your enter the left house. There's bag with 10 coins in it");
                genericInput1NorthLeft()
                break;
            case "right":
                console.clear()
                console.log("You enter the right house. It's a private property . Oh no!!\n");
                if (readline1.keyInYN("Do you want to try again?")) {
                    console.clear()
                    gamePlay()
                } else {
                    console.clear()
                    quitGame()
                }
                break;
            case "front":
                console.clear()
                console.log("You enter the front house. You found a big portrait inside the house that says: " + `'${nameInput}'s House'`);
                genericInput1NorthFront();
                break;
            case "back":
                console.clear()
                console.log("You came back to the beginning\n");
                genericInput1()
                break;
            default:       
        }
        break;
    }

}



const genericInput1NorthLeft = () => {

    console.log("These are silver coins.");

    let genericInput1NorthLeft = ["Take the bag", "Go back outside"]
    let input5 = readline1.keyInSelect(genericInput1NorthLeft, "What do you want to do?")
    let input6 = genericInput1NorthLeft[input5]

    if (input6 === "Take the bag") {
        console.clear()
        console.log("Amazing!! You got 10 silver coins!!");
        for( var i = 0; i < genericInput1NorthLeft.length; i++){ 
             if (genericInput1NorthLeft[i] === "Take the bag") {
                 genericInput1NorthLeft.splice(i, 1); 
              }
         }
 
         input5 = readline1.keyInSelect(genericInput1NorthLeft, "1 choice left")
         input6 = genericInput1NorthLeft[input5]
 
         if (input6 === "Go back outside") {
            console.clear()
            console.log("You are outside now\n");
            genericInput1NorthLeftToOutside();

         }
 
     } else if (input6 === "Go back outside") {
        console.clear()
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
        console.clear()
        console.log("You are outside now\n");
        genericInput1NorthFrontToOutside()
    }
}

const genericInput1NorthFrontToOutside = () => {
    
    console.log("Now you are only missing 2 houses: one to the left and one to the right. Remember that you have the option to go back to the beginning.\n");

    let genericInput1NorthFrontToOutside = ["left", "right", "back"]
    
    while (genericInput1NorthFrontToOutside !== "left" || genericInput1NorthFrontToOutside !== "right"  || genericInput1NorthFrontToOutside !== "back") {
    readline1.setDefaultOptions({limit:genericInput1NorthFrontToOutside, limitMessage:"\nInvalid move!! Use 'left', 'right' or 'back'"})
    let input9 = readline1.question("Which one do you want to enter?\n").toLowerCase()
        switch (input9) {
            case "left":
                console.clear()
                console.log("Your enter the left house. There's bag with 10 coins in it\n");
                genericInput1NorthFrontToOutsideLeft()
                break;
            case "right":
                console.clear()
                console.log("You enter the right house. It's a private property . Oh no!!\n");
                if (readline1.keyInYN("Do you want to try again?")) {
                    console.clear()
                    gamePlay()
                } else {
                    console.clear()
                    quitGame()
                }
                break;
            case "back":
                console.clear()
                console.log("You came back to the beginning\n");
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
        console.clear()
        console.log("Amazing!! You got 10 silver coins!!");
        for( var i = 0; i < genericInput1NorthFrontToOutsideLeft.length; i++){ 
             if (genericInput1NorthFrontToOutsideLeft[i] === "Take the bag") {
                 genericInput1NorthFrontToOutsideLeft.splice(i, 1); 
              }
         }
 
         input10 = readline1.keyInSelect(genericInput1NorthFrontToOutsideLeft, "1 choice left")
         input11 = genericInput1NorthFrontToOutsideLeft[input10]
 
         if (input11 === "Go back outside") {
             console.clear()
             console.log("\nYou are outside now\n");
             genericInput1NorthFrontToOutsideLeftToOutside()
         }
 
     } else if (input11 === "Go back outside") {
        console.clear()
        console.log("You are outside now\n");
        genericInput1NorthFrontToOutside()
      }
}

const genericInput1NorthFrontToOutsideLeftToOutside = () => {
    
    console.log("Now you are only missing 1 house: the one to the right. Remember that you have the option to go back to the beginning.\n");

    let genericInput1NorthFrontToOutsideLeftToOutside = ["right", "back"]
    
    while (genericInput1NorthFrontToOutsideLeftToOutside !== "right"  || genericInput1NorthFrontToOutsideLeftToOutside !== "back") {
    readline1.setDefaultOptions({limit:genericInput1NorthFrontToOutsideLeftToOutside, limitMessage:"\nInvalid move!! Use 'right' or 'back'"})
    let input12 = readline1.question("Which one do you want to enter?\n").toLowerCase()
        switch (input12) {
            case "right":
                console.log("\nYou enter the right house. It's a private property . Oh no!!");
                if (readline1.keyInYN("Do you want to try again?")) {
                    console.clear()
                    gamePlay()
                } else {
                    console.clear()
                    quitGame()
                }
                break;
            case "back":
                console.clear()
                console.log("You came back to the beginning\n");
                genericInput1Back2()
                break;
            default:       
        }
        break;
    }

}

const genericInput1Back1 = () => {
    console.log("Now you remember your name\n");
    console.log("You are surrounded by flowers!! You see a path to the east and a village to the north\n");

    let genericInput1Back1 = ["north", "east"]
    
    while (genericInput1Back1 !== "north" || genericInput1Back1 !== "east") {

    readline1.setDefaultOptions({limit:genericInput1Back1, limitMessage:"\nInvalid move! Use 'north' or 'east'"})

    let input13 = readline1.question("Where do you want to go?\n").toLowerCase()
    
        switch (input13) {
            case "north":
                console.clear()
                genericInput1NorthFrontToOutside()
                break;
            case "east":
                console.clear()
                console.log("You are walking through the path, the path breaks and you fall into a hole!! Oh no!!\n");
                if (readline1.keyInYN("Do you want to try again?")) {
                    console.clear()
                    gamePlay()
                } else {
                    console.clear()
                    quitGame()
                }
                break;
            default: 
        } 
    break;
    } 
}

const genericInput1Back2 = () => {
    console.log("Now, you remember your name and got your coins. You don't need to go north anymore\n");
    console.log("You are surrounded by flowers!! You see a path to the east and a cow to the south\n");

    let genericInput1Back2 = ["south", "east"]
    
    while (genericInput1Back2 !== "south" || genericInput1Back2 !== "east") {

    readline1.setDefaultOptions({limit:genericInput1Back2, limitMessage:"\nInvalid move! Use 'south' or 'east'"})

    let input14 = readline1.question("Where do you want to go?\n").toLowerCase()
    
        switch (input14) {
            case "south":
                console.clear()
                console.log("You encounter a cow and it looks familiar?\n");
                console.log(chalk.yellow("Cow:")) + console.log(`${nameInput}, what happened to you? Why are you looking me with those eyes? I'm your friend, ` + chalk.yellow("Milky") + "!!\n");
                genericInput1South2()
                break;
            case "east":
                console.clear()
                console.log("You are walking through the path, the path breaks and you fall into a hole!! Oh no!!\n");
                if (readline1.keyInYN("Do you want to try again?")) {
                    console.clear()
                    gamePlay()
                } else {
                    console.clear()
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
    readline1.setDefaultOptions({limit:genericInput1NorthLeftToOutside, limitMessage:"\nInvalid move!! Use 'front', 'right' or 'back'"})
    let input15 = readline1.question("Which one do you want to enter?\n").toLowerCase()
        switch (input15) {
            case "front":
                console.clear()
                console.log("You enter the front house. You found a big portrait inside the house that says: " + `'${nameInput}'s House'`);
                genericInput1NorthLeftToOutsideFront();
                break;
            case "right":
                console.clear()
                console.log("You enter the right house. It's a private property . Oh no!!");
                if (readline1.keyInYN("Do you want to try again?")) {
                    console.clear()
                    gamePlay()
                } else {
                    console.clear()
                    quitGame()
                }
                break;
            case "back":
                console.clear()
                console.log("You came back to the beginning\n");
                genericInput1Back3()
                break;
            default:       
        }
        break;
    }
}

const genericInput1NorthLeftToOutsideFront = () => {
    console.log(`\nYou are shocked!! You remembered that ${nameInput} is your name!! So, this is your house and you have a collection of coins.\n`);

    let genericInput1NorthLeftToOutsideFront = ["Go back outside"]
    let input16 = readline1.keyInSelect(genericInput1NorthLeftToOutsideFront, "What do you want to do now?")
    let input17 = genericInput1NorthLeftToOutsideFront[input16]

    if (input17 === "Go back outside") {
        console.clear()
        console.log("You are outside now\n");
        genericInput1NorthFrontToOutsideLeftToOutside()
    }
}

const genericInput1Back3 = () => {
    console.log("Now you have 10 coins\n");
    console.log("You are surrounded by flowers!! You see a path to the east and a village to the north\n");

    let genericInput1Back3 = ["north", "south", "east"]
    
    while (genericInput1Back3 !== "north"  || genericInput1Back3 !== "east") {

    readline1.setDefaultOptions({limit:genericInput1Back3, limitMessage:"\nInvalid move! Use 'north' or 'east'"})

    let input18 = readline1.question("Where do you want to go?\n").toLowerCase()
    
        switch (input18) {
            case "north":
                console.clear()
                genericInput1NorthLeftToOutside()
                break;
            case "east":
                console.clear()
                console.log("You are walking through the path, the path breaks and you fall into a hole!! Oh no!!\n");
                if (readline1.keyInYN("Do you want to try again?")) {
                    console.clear()
                    gamePlay()
                } else {
                    console.clear()
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
       console.clear()
       console.log(chalk.yellow("Milky:")) + console.log("It doesn't matter!! What matters is that you are my best friend.\nIt seems that you don't remember anything.\n");
       for( var i = 0; i < genericInput1South2.length; i++){ 
            if (genericInput1South2[i] === "Why are you able to talk?") {
                genericInput1South2.splice(i, 1); 
             }
        }

        input19 = readline1.keyInSelect(genericInput1South2, "1 option left")
        input20 = genericInput1South2[input19]

        if (input20 === `Wait, do you know me?`) {
            console.clear()
            console.log("Yes, I do!! You have been living in the village for 8 years.\nYou went to look for the Golden Coin two weeks ago!! What happened?\n");
            genericInput1South3()
        }

    } else if (input20 === `Wait, do you know me?`) {
        console.clear()
        console.log("Yes, I do!! You have been living in the village for 8 years.\nYou went to look for the Golden Coin two weeks ago!! What happened?\n");
        for( var i = 0; i < genericInput1South2.length; i++){ 
             if (genericInput1South2[i] === `Wait, do you know me?`) {
                 genericInput1South2.splice(i, 1); 
              }
         }

         input19 = readline1.keyInSelect(genericInput1South2, "1 option left")
         input20 = genericInput1South2[input19]

         if (input20 === "Why are you able to talk?") {
            console.clear()
            console.log(chalk.yellow("Milky:")) + console.log("It doesn't matter!! What matters is that you are my best friend.\nIt seems that you don't remember anything.\n");
            genericInput1South3()
         }
     }
}


const genericInput1South3 = () => {
   
    console.log("Where is the Golden Coin?\n");
    

    let genericInput1South3 = ["That's the thing!! I don't remember", `Maybe, it's in my house.`] 
    let input21 = readline1.keyInSelect(genericInput1South3, "Choose an option")
    let input22 = genericInput1South3[input21]

    if (input22 === "That's the thing!! I don't remember") {
       console.clear()
       console.log(chalk.yellow("Milky:")) + console.log("It has to be somewhere!! I know you have it!!\n");
       for( var i = 0; i < genericInput1South3.length; i++){ 
            if (genericInput1South3[i] === "That's the thing!! I don't remember") {
                genericInput1South3.splice(i, 1); 
             }
        }

        input21 = readline1.keyInSelect(genericInput1South3, "1 option left")
        input22 = genericInput1South3[input21]

        if (input22 === `Maybe, it's in my house.`) {
            console.clear()
            console.log("\nSure!! Good luck finding it!!\n");
            genericInput1Back4()
        }

    } else if (input22 === `Maybe, it's in my house.`) {
        console.clear()
        console.log("Yes, it is!! You have been living in the village for 8 years.\nYou went to look for the Golden Coin two weeks ago!! What happened?");
        for( var i = 0; i < genericInput1South3.length; i++){ 
             if (genericInput1South3[i] === `Maybe, it's in my house.`) {
                 genericInput1South3.splice(i, 1); 
              }
         }

         input21 = readline1.keyInSelect(genericInput1South3, "1 option left")
         input22 = genericInput1South3[input21]

         if (input22 === "That's the thing!! I don't remember") {
            console.clear()
            console.log(chalk.yellow("Milky:")) + console.log("It has to be somewhere!! I know you have it!!\n");
            genericInput1Back4()
         }
     }
}


const genericInput1Back4 = () => {
    console.log("Now, you have to go to your house. \n");
    console.log("You are surrounded by flowers!! You see a path to the east and a village to the north\n");

    let genericInput1Back4 = ["north", "east"]
    
    while (genericInput1Back4 !== "north"  || genericInput1Back4 !== "east") {

    readline1.setDefaultOptions({limit:genericInput1Back4, limitMessage:"\nInvalid move! Use 'north' or 'east'"})

    let input23 = readline1.question("Where do you want to go?\n").toLowerCase()
    
        switch (input23) {
            case "north":
                console.clear()
                genericInput1NorthLeftToOutside2()
                break;
            case "east":
                console.clear()
                console.log("You are walking through the path, the path breaks and you fall into a hole!! Oh no!!\n");
                if (readline1.keyInYN("Do you want to try again?")) {
                    console.clear()
                    gamePlay()
                } else {
                    console.clear()
                    quitGame()
                }
                break;
            default: 
        } 
    break;
    } 
}


const genericInput1NorthLeftToOutside2 = () => {
    
    console.log("Now, you are only 2 options: home and the house on the right\n");

    let genericInput1NorthLeftToOutside2 = ["home", "right"]
    
    while (genericInput1NorthLeftToOutside2 !== "home" || genericInput1NorthLeftToOutside2 !== "right") {
    readline1.setDefaultOptions({limit:genericInput1NorthLeftToOutside2, limitMessage:"\nInvalid move!! Use 'home' or 'right'"})
    let input24 = readline1.question("Which one do you want to enter?\n").toLowerCase()
        switch (input24) {
            case "home":
                console.clear()
                console.log("You enter your house. You added all the coins you found to your collections!!\n");
                finalInput()
                break;
            case "right":
                console.log("\nYou enter the right house. It's a private property . Oh no!!");
                if (readline1.keyInYN("Do you want to try again?")) {
                    console.clear()
                    gamePlay()
                } else {
                    console.clear()
                    quitGame()
                }
                break;
            default:       
        }
        break;
    }

}

const finalInput = () => {
    console.log(`But wait!!\n`);

    let genericInput1NorthFront = ["Look inside your pocket"]
    let input25 = readline1.keyInSelect(genericInput1NorthFront, "What is this?")
    let input26 = genericInput1NorthFront[input25]

    if (input26 === "Look inside your pocket") {
        console.clear()
        console.log("It's the Golden Coin!! It was inside of your pocket this whole time!!\n");
        console.log("This game is a little reminder on always keep notes of everything you have to do\n");
        console.log("I hope you like it!!\n");
        console.log("\nSee you next time!!\n");
        
        if (readline1.keyInYN("Do you want to play again?")) {
            console.clear()
            gamePlay()
        } else {
            console.clear9
            quitGame()
        }
    }
}




startGame()