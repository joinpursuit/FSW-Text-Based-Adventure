const readLineSync = require('readline-sync');
let array = []
    
const welcome = () => {
    let nameInput = readLineSync.question("What is your name?")

console.log (`Hello ${nameInput}!  It's nice to meet you.`)
console.log ("Welcome to Story Generator Game!")
    console.log ("Where I will help you write the next best seller!")
    if (readLineSync.keyInYN("Are you ready to begin?")) {
        console.clear()
        startGame();
    } else {
        leaveGame();
    }
}


    // Starting Story Game 
const startGame = () => {
    console.log ("There are two genres we will be working with today")
    let res = readLineSync.question("The choices are Romance and Suspense! Which would you like to choose to be your genre?")
    if (res === "Suspense") {
        console.clear();
        suspenseStory();
    } else {
        romanceStory();
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
    let characterNum = readLineSync.question ("How many character you want in this story?") 
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
        suspenseCharName()
    } else {
        leaveGame()
    }
}

//campOut
const campOut = () => {
    console.log("Your character was brutally murder in their sleep! ") 
    array = ["avenge death", "haunt criminals", "rest peacefully"] 
    let afterLife = readLineSync.keyInSelect (array)
   let yourchoice = array[afterLife] 
    if (yourchoice === "avenge death") {
    avengeDeath ();
} else if (yourchoice === "haunt criminals") {
    hauntCriminals();
} else if (yourchoice === "rest peacefully") {
    restPeacefully();
} else {
    leaveGame();
}
}


// walkTheWoodsAlone
const walkTheWoodsAlone = () => {
    let charMainName = readLineSync.question("What's your main character's name?")
    console.log(`${charMainName} is walking through the dark woods and they hit a path of three.You have to select the path that ${charMainName} will take.`)
    array = ["left", "middle", "right"]
   let woodsPaths = readLineSync.keyInSelect (array)
   let youchoose = array[woodsPaths] 
    if (youchoose === "left") {
    leftPath ();
} else if (youchoose === "middle") {
    middlePath();
} else if (youchoose === "right") {
    rightPath();
} else {
    leaveGame();
}
}

//leftPath 
const leftPath = () => {
    console.log ("Your character is walking through the thickets of poison ivy. \nBy the time they noticed they it already got everywhere and I mean EVERYWHERE!!") 
    for (i = 0; i < array.length; i++) {
        if (array[i] === "left") {
            array.splice(i,1)
        }
    }
    let woodsPaths = readLineSync.keyInSelect (array)
   let youchoose = array[woodsPaths]
   if (youchoose === "middle") {
       middlePath();
   } else if (youchoose === "right"){
       rightPath();
   } else if (youchoose === undefined){
       leaveGame();
   }
   // if the player choose middle path call middle path function 
   // need both if statements for middle and right 
   // need extra if statment for cancel : if youchoose = undefined 
}

//middlePath
const middlePath = () => {
    console.log("Your character finds a beheaded chicken in the middle of the road! \nAaaaaahhhhh, screams are being heard from further." )
    for (i = 0; i < array.length; i++) {
        if (array[i] === "middle") {
            array.splice(i,1)
        }
    }
    let woodsPaths = readLineSync.keyInSelect(array)
   let youchoose = array[woodsPaths]
   if (youchoose === "left") {
    leftPath();
} else if (youchoose === "right"){
    rightPath();
} else if (youchoose === undefined){
    leaveGame();
}
} // if statments left and right and undefined

//rightPath
const rightPath = () => {
    console.log("Your character reached a cliff. If they're not careful they will fall!")
    for (i = 0; i < array.length; i++) {
        if (array[i] === "right") {
            array.splice(i,1)
        }
    }
    let woodsPaths = readLineSync.keyInSelect(array)
   let youchoose = array[woodsPaths]
   if (youchoose === "middle") {
    middlePath();
} else if (youchoose === "left"){
    leftPath();
} else if (youchoose === undefined){
    leaveGame();
}
} // if statemt left amnd middle and undefined 


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
        array = ["5 star resturant", "street vendors", "home-cooked meal"]
       let eatingDate = readLineSync.keyInSelect (array)
       let youChooseFood = array[eatingDate] 
        if (youChooseFood === "5 star resturant") {
        fiveStarResturant ();
    } else if (youChooseFood === "street vendors") {
        streetVendor();
    } else if (youChooseFood === "home-cooked meal") {
        homeCooked();
    } else if (youChooseFood === undefined){ 
        if (readLineSync.keyInYN("Would you like to choose another story?")) {
            startGame();
        } else {
            leaveGame();
        }

    }
    
}
// fiveStarResturant
const fiveStarResturant = () => {
        console.log("Your character ate bad oyster! Your character got food poisioning!")
        for (i = 0; i < array.length; i++) {
            if (array[i] === "5 star resturant") {
                array.splice(i,1)
            }
        }
        let eatingDate = readLineSync.keyInSelect (array)
       let youChooseFood = array[eatingDate]
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
    console.log("Oooooo! New York Hot Dogs! It's one of your chacter's favorite!")
        for (i = 0; i < array.length; i++) {
            if (array[i] === "street vendors") {
                array.splice(i,1)
            }
        }
        let eatingDate = readLineSync.keyInSelect (array)
       let youChooseFood = array[eatingDate]
       if (youChooseFood === "5 star resturant"){
           fiveStarResturant();
       } else if (youChooseFood === "home-cooked meal") {
           homeCooked();
       } else if (youChooseFood === undefined) {
           leaveGame();
       }
    
}

//homeCooked
const homeCooked = () => {
    console.log("Damn! Neither your character or their date can cook! They burnt down the house! Now your character is homeless! \nPick another option.")
        for (i = 0; i < array.length; i++) {
            if (array[i] === "home-cooked meal") {
                array.splice(i,1)
            }
        }
        let eatingDate = readLineSync.keyInSelect (array)
       let youChooseFood = array[eatingDate]
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
    if (readLineSync.keyInYN ("Would you like to try another storyline?")){
        cityDate();
    } else {
        leaveGame();
    }
}

//leaveGame
const leaveGame = () => {
    console.log("Awww, it's really sad to see you go! Good luck writing your book by yourself!")
    process.exit()
}



welcome();
startGame();
suspenseStory();
perfectNum();
tooManyChar();
darkWoodsStoryLine();
campOut();
walkTheWoodsAlone();
leftPath();
middlePath();
rightPath();
darkRoadStoryLine();



leaveGame();

