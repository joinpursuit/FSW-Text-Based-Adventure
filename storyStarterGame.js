const readLineSync = require('readline-sync');

    
const welcome = () => {
    let nameInput = readLineSync.question("What is your name?") // Ask the player what is their name. 

console.log (`Hello ${nameInput}!  It's nice to meet you.`) // Using the information gotten above, this line prints a greeting with the player's name 
console.log ("Welcome to Story Generator Game!") // Welcoming the player to the game
    console.log ("Where I will help you write the next best seller!") // Stating the purpose of the game
    if (readLineSync.keyInYN("Are you ready to begin?")) { // This line ask asks the player if they are ready to begin the game. 
        console.clear() // This clears all of the previous lines 
        startGame(); // If the player presses Y then the game will go straight to this function, starting the game!
    } else {
        leaveGame(); // If the player presses N then the game will go straight to this function, ending the game!
    }
}


    // Starting Story Game 
const startGame = () => {
    console.log ("There are two genres we will be working with today") // Letting the player know that there are going to be two chocies here. 
    let choice = readLineSync.question("The choices are Romance and Suspense! Which would you like to choose to be your genre?") // Asking whether or not the player wants a romance story or a suspense story
    if (choice === "Suspense" || choice === "suspense") { // if the choice that was made equal to the input "Suspense" 
        console.clear(); // Clears all of the previous lines 
        suspenseStory(); // If player's input equals to "suspense" than it will run into the next function.
    } else if (choice === "Romance" || choice === "romance"){ // if the choice that was made equal to "romance"
        romanceStory(); // If the player's input equals to "romance" than it will run into the next funtion 
    } else {
        leaveGame(); // If the player's input is anything else then it will leave the game. 
    }
} 


// suspenseStory
const suspenseStory = () => {
    console.log("Now with any good story there are great characters to tell their stories.")
    let characterNum = readLineSync.question ("How many character you want in this story?")
    if (characterNum > 3) {
        tooManyChar();
    } else {
        perfectNum();
    }
} 

//perfectNum
const perfectNum = () => {
    console.log ("Perfect!!!")
    console.log ("You will now have to choose your storyline!")
    let setting = readLineSync.question ("Do you want to start your story in the dark woods or on the dark road?")
    if (setting === "dark woods") {
        console.clear();
        darkWoodsStoryLine();
    } else {
        darkRoadStoryLine();
    }
}
//tooManyChar
const tooManyChar = () => {
    let characterNum = readLineSync.question (" You need to choose less characters! How many character you want in this story?") 
    if (characterNum <= 3) { 
        console.clear();
        perfectNum();
    } else {
        console.log ("Seriously?! Please choose less than 4! We are not writing Game of Thrones!")
        tooManyChar();
    } 
}


// darkWoodsStoryLine
const darkWoodsStoryLine = () => {
    let darkWood = readLineSync.question ("Do you want walk through the woods or camp out and wait for help to come?")
    if (darkWood === "walk through the woods" || darkWood === "walk") {
        walkTheWoodsAlone()
    } else if (darkWood === "camp out" || darkWood === "camp") {
        campOut();
    } else {
        leaveGame();
    }
}

//campOut
const campOut = () => {
    let charMainName = readLineSync.question ("What's your main character's name?")
    console.log(`${charMainName} was brutally murder in their sleep!`) 
//     arr1 = ["avenge death", "haunt criminals", "rest peacefully"] 
//     let afterLife = readLineSync.keyInSelect (arr1)
//    let yourchoice = arr1[afterLife] 
//     if (yourchoice === "avenge death") {
//     avengeDeath ();
// } else if (yourchoice === "haunt criminals") {
//     hauntCriminals();
// } else if (yourchoice === "rest peacefully") {
//     restPeacefully();
// } else {
//     leaveGame();
// }
// } 
let i =0
let i2=1
arr1 = ["avenge death", "haunt criminals", "rest peacefully"]
if (arr1.length===1) {
    if (arr1[i]==="avenge death"){
        let afterLife =readLineSync.keyInSelect(arr1, "Do you want to avenge their death? ", {cancel:"Must choose above option"})
        if (arr1[afterLife] === "avenge death") {
            arr1.splice(0,1)
            avengeDeath()
        }
    }else if (arr1[i] === "haunt criminals") {
        let afterLife = readLineSync.keyInSelect(arr1, "Do you want to haunt criminals? ", {cancel:"Must choose above option"})
        if (arr1[afterLife]=== "haunt criminals") {
            arr1.splice(0,1)
            hauntCriminals()
        }
    }else if (arr1[i] === "rest peacefully") {
        let afterLife=readLineSync.keyInSelect(arr1, "Do you want them to rest peacefully?", {cancel: "Must choose above option"})
        if (arr1[afterLife] === "rest peacefully") {
            arr1.splice(0,1)
            restPeacefully()
        }
    }
} else if (arr1.length===2){
     if (arr1[i] === "avenge death" && arr1[i2] === "haunt criminals"){
        let afterLife = readLineSync.keyInSelect(arr1, "Do you want them to avenge their death or haunt criminals ? ", {cancel: "Must choose above options"})
         if (arr1[afterLife]==="avenge death") {
            arr1.splice(afterLife,1) 
            avengeDeath()
         }else if (arr1[afterLife] === "haunt criminals") {
            arr1.splice(afterLife,1)
            hauntCriminals()
         }
     } else if (arr1[i] === "rest peacefully" && arr1[i2] === "haunt criminals") {
         let afterLife = readLineSync.keyInSelect(arr1, "Do you want them to haunt criminals or rest peacefully? ", {cancel: "Must choose above options"})
         if (arr1[afterLife] === "haunt criminals") {
             arr1.splice(afterLife,1)
             hauntCriminals()
         } else if (arr1[afterLife] === "rest peacefully") {
             arr1.splice(afterLife,1)
             restPeacefully()
         }
     } else if (arr1[i] === "avenge death" && arr1[i2] === "rest peacefully") {
         let afterLife = readLineSync.keyInSelect(arr1, "Do you want them to avenge their death or rest peacefully? ", {cancel: "Must choose above options"})
         if (arr1[afterLife] === "rest peacefully") {
             arr1.splice(afterLife,1)
             restPeacefully()
         } else if (arr1[afterLife] === "avenge death") {
             arr1.splice(afterLife, 1)
             avengeDeath()
         }
     }
} else if (arr1.length=== 0) {
    replayTheGame()
}
}



 // avengeDeath 
 const avengeDeath = (charMainName) => {
console.log(`${charMainName} could not just rest! They want to find out who killed them.`)
console.log (`Now after endless searching, finally ${charMainName} has found the killer and its their own brother!!!`)
console.log(`You must choose for what ${charMainName}`)
let avengerAnswer = readLineSync.question("Do you want to kill your character's brother or do you want to investegate more on the brother?")

if (avengerAnswer === "investegate more") {
    investegateTheBrother();
} else {
} (avengerAnswer === "kill the brother") 
    console.log(`Your character have killed their own brother. However! \nThey have gain nothing but more regret because ${charMainName} did not investegate more! \nIf they had, ${charMainName} would have found out their brother was trying to save them from fully turning into a zombie! \nWhen ${charMainName}'s brother found them it was far too late on the outside to save them so he did what he thought was a good choice`)
    campOutArrOptions(); 
}


 // investagateTheBrother
 const investegateTheBrother = () => {
     console.log("Wow our brother carried such a painful duty for the country upon his shoulder")
     console.log("Now listen I provided you with golden materials, however you must now write the story on your own! ")
     replayTheGame();
 }
 

 //hauntCriminals 
 const hauntCriminals = () => {

 }

 //restPeacefully
 const restPeacefully = () => {

 }

 //campOutArrOptions
 const campOutArrOptions = () => {

 }
// walkTheWoodsAlone
const walkTheWoodsAlone = () => {
    let charMainName = readLineSync.question("What's your main character's name?")
    console.log(`${charMainName} is walking through the dark woods and they hit a path of three.You have to select the path that ${charMainName} will take.`)
    arr3 = ["left", "middle", "right"]
   let woodsPaths = readLineSync.keyInSelect (arr3)
   let youchoose = arr3[woodsPaths] 
   for (i = 0; i < arr3.length; i++)
    if (youchoose === "left") {
    leftPath ();
} else if (youchoose === "middle") {
    middlePath();
} else if (youchoose === "right") {
    rightPath();
} else if (youchoose === undefined){
    leaveGame();
}
}

//leftPath 
const leftPath = () => {
    
    console.log ("Your character is walking through the thickets of poison ivy. \nBy the time they noticed they it already got everywhere and I mean EVERYWHERE!!") 
    woodsPathsOptions()
   // if the player choose middle path call middle path function 
   // need both if statements for middle and right 
   // need extra if statment for cancel : if youchoose = undefined 
}

//middlePath
const middlePath = () => {
    console.log("Your character finds a beheaded chicken in the middle of the road! \nAaaaaahhhhh, screams are being heard from further." )
    woodsPathsOptions()

} // if statments left and right and undefined

//rightPath
const rightPath = () => {
    console.log("Your character reached a cliff. If they're not careful they will fall!")
    woodsPathsOptions()

} // if statemt left amnd middle and undefined
// THERE IS A BUG IN THE LOOPS AND I CANNOT FIND IT 

//woodsPathsOptions
const woodsPathsOptions = () => {
    console.clear()
    let i =0
    let i2=1
    if (arr3.length===1) {
        if (arr3[i]==="left"){
            let woodsPaths=readLineSync.keyInSelect(arr3, "Do you want to take the left path? ", {cancel:"Must choose above option"})
            if (arr3[woodsPaths] === "left") {
                arr3.splice(0,1)
                leftPath()
            }
        }else if (arr3[i] === "middle") {
            let woodsPaths=readLineSync.keyInSelect(arr3, "Do you want to take the middle path? ", {cancel:"Must choose above option"})
            if (arr3[woodsPaths]=== "middle") {
                arr3.splice(0,1)
                middlePath()
            }
        }else if (arr3[i] === "right") {
            let woodsPaths=readLineSync.keyInSelect(arr3, "Do you want to take the right path?", {cancel: "Must choose above option"})
            if (arr3[woodsPaths] === "right") {
                arr3.splice(0,1)
                rightPath()
            }
        }
    } else if (arr3.length===2){
         if (arr3[i] === "left" && arr3[i2] === "middle"){
            let woodsPaths = readLineSync.keyInSelect(arr3, "Do you want to take the left path or middle? ", {cancel: "Must choose above options"})
             if (arr3[woodsPaths]==="left") {
                arr3.splice(woodsPaths,1) 
                leftPath()
             }else if (arr3[woodsPaths] === "middle") {
                arr3.splice(woodsPaths,1)
                middlePath()
             }
         } else if (arr3[i] === "right" && arr3[i2] === "middle") {
             let woodsPaths = readLineSync.keyInSelect(arr3, "Do you want to take the middle or right path? ", {cancel: "Must choose above options"})
             if (arr3[woodsPaths] === "middle") {
                 arr3.splice(woodsPaths,1)
                middlePath()
             } else if (arr3[woodsPaths] === "right") {
                 arr3.splice(woodsPaths,1)
                 rightPath()
             }
         } else if (arr3[i] === "left" && arr3[i2] === "right") {
             let woodsPaths = readLineSync.keyInSelect(arr3, "Do you want to take the right path or left path? ", {cancel: "Must choose above options"})
             if (arr3[woodsPaths] === "right") {
                 arr3.splice(woodsPaths,1)
                 rightPath()
             } else if (arr3[woodsPaths] === "left") {
                 arr3.splice(woodsPaths, 1)
                 leftPath()
             }
         }
    // } else if (arr3.length=== 0) {
    //     if (readLineSync.keyInYNStrict("Do you want to restart game?")) {
    //         console.clear()
    //         startGame()
    //     } else {
    //         quitGame()
    //     }
    } 

}
// darkRoadStoryLine
const darkRoadStoryLine = () => {
    console.log ("Unfortunely the road was so too dark and your character died from a car crashing into them.") 
    if (readLineSync.keyInYN ("Would you like try another story?")) {
        darkWoodsStoryLine();
    } else {
        leaveGame();
    }

}

// romanceStory
const romanceStory = () => {
     let characterNumRom = readLineSync.question ("How many character you want in this story?") 
    if (characterNumRom > 3) {
        tooManyCharRom();
    } else {
        perfectNumRom();
    }
}

//romSetting
const romSetting = () => {
    let romanceSetting = readLineSync.question ("Do you want to start your story in the city or in a home?")
    if (romanceSetting === "city") {
        cityDate()
    } else if (romanceSetting === "home") {
        stayAtHomeDate()
    } else {
        leaveGame()
    }
}
    
//perfectNumRom
const perfectNumRom = () => {
    console.log ("Perfect!!!")
    console.log ("You will now have to choose your storyline!")
    let romSetting = readLineSync.question ("Do you want to start your story in the city or at home?")
    if (romSetting === "city") {
        console.clear();
        cityDate();
    } else if (romSetting === "home") {
        stayAtHomeDate();
    } else {
        leaveGame();
    }
}
//tooManyCharRom
const tooManyCharRom = () => {
    let characterNum = readLineSync.question ("How many character you want in this story?") 
    if (characterNum <= 2) { 
        console.clear();
        perfectNumRom();
    } else {
        console.log ("Seriously?! Please choose less than 3! This is not a tella novela! You want to build on them.")
        tooManyCharRom();
    } 
}

//cityDate
const cityDate = () => {
   let charMainName = readLineSync.question("What's your main character's name?")
     console.log(`${charMainName} is on a date! The first time in so long! \nWalking through the city and enjoying their date's company. \nNow they're getting hungry from all the walking and talking! \n"Let's grab something to eat", says ${charMainName}`)
        resturant = ["5 star resturant", "street vendors", "home-cooked meal"]
       let eatingDate = readLineSync.keyInSelect (resturant)
       let youChooseFood = array[eatingDate] 
        if (youChooseFood === "5 star resturant") {
        fiveStarResturant ();
    } else if (youChooseFood === "street vendors") {
        streetVendor();
    } else if (youChooseFood === "home-cooked meal") {
        homeCooked();
    } else if (youChooseFood === undefined){ 
        console.log("Listen that's not an availible choice")

    }
    
}
// fiveStarResturant
const fiveStarResturant = () => {
        console.log("Your character ate bad oyster! Your character got food poisioning!")
        for (i = 0; i < resturant.length; i++) {
            if (resturant[i] === "5 star resturant") {
                resturant.splice(i,1)
            }
        }
        let eatingDate = readLineSync.keyInSelect (array)
       let youChooseFood = resturant[eatingDate]
       if (youChooseFood === "street vendor"){
           streetVendor();
       } else if (youChooseFood === "home-cooked meal") {
           homeCooked();
       } else if (youChooseFood === undefined) {
            leaveGame();
       }
}

//streetVendor
const streetVendor = () => {
    console.log("Oooooo! New York Hot Dogs! It's one of your character's favorite! \nYour character just ate three hot dogs and now is very thirsty!")
    let successfulDate = readLineSync.keyInSelect (array)
    //     for (i = 0; i < array.length; i++) {
    //         if (array[i] === "street vendors") {
    //             array.splice(i,1)
    //         }
    //     }
    //     let eatingDate = readLineSync.keyInSelect (array)
    //    let youChooseFood = array[eatingDate]
    //    if (youChooseFood === "5 star resturant"){
    //        fiveStarResturant();
    //    } else if (youChooseFood === "home-cooked meal") {
    //        homeCooked();
    //    } else if (youChooseFood === undefined) {
    //        leaveGame();
    //    }
    
};

//homeCooked
const homeCooked = () => {
    console.log("Damn! Neither your character or their date can cook! They burnt down the house! Now your character is homeless! \nPick another option.")
        for (i = 0; i < resturant.length; i++) {
            if (resturant[i] === "home-cooked meal") {
                resturant.splice(i,1)
            }
        }
        let eatingDate = readLineSync.keyInSelect (array)
       let youChooseFood = resturant[eatingDate]
       if (youChooseFood === "5 star resturant"){
           fiveStarResturant();
       } else if (youChooseFood === "street vendor") {
           streetVendor();
       } else if (youChooseFood === undefined) {
           leaveGame();
       }
}
//homeDate
const stayAtHomeDate = () => {
    console.log("Stay at home dates are so hard to write because there little to no drama")
    if (readLineSync.keyInYN ("Would you like to try another romantic story?")){
        romanceStory();
    } else if (readLineSync.keyInYN("Would you like to start the game all over?")) {
        startGame();
    } else {
        leaveGame(); 
    }
}
//replayTheGame
const replayTheGame = () => {
    console.log("There are endless ideas to start a story and you just finished one!")
    if(readLineSync.keyInYN("Would you like the replay this game to get another story idea?")){
        startGame();
    } else {
        leaveGame();
    }
}
//leaveGame
const leaveGame = () => {
    console.log("Good luck writing the book by on your own with my ideas! MUAHAHAHA! HA! ")
    process.exit()
}



welcome();


