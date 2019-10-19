const readline = require('readline-sync')



const play = () => {
    let userInput 
    while(userInput != "yes") {
        userInput = readline.question("Would you like to play Game of Thrones, yes or no?")
    }
    console.log("WELCOME TO GAME OF THRONES, PROTECT YOUR KINGDOM AT ALL COST !!")
}
play()

const gameIntro = () => {
    console.log("GAME INTRODUCTION")

}
gameIntro()

const kingdomName = () => { // gets the name from the user and saves it 
    let userInput
    userInput = readline.question("What would you like to name your kingdom?")
    return userInput 
}
kingdomName()



const fightOption = () => {
    let userInput
    console.log("option of who they would like to fight first compared to army strength")
    console.log("Who would you like to conquer first!?")
    userInput = readline.question("Level options")
    if (userInput === "John Snow" || userInput === "john snow") {
        fight1()
    }else if (userInput === "K") || userInput === "k") {
        fight2()
    }else if (userInput === "B") || userInput === "b") {
        fight3()
    }
}
const rivalsName = (name) => {
    let rName = name
    return rName
}
const fight1 = (sizeOfArmy, oppArmy, oppName) => {
    if(sizeOfArmy > oppArmy) {
        console.log("CONGRATS!!! YOU HAVE DEFEATED " + oopName + ". NOW CHOOSE WHO YOU WILL CONQUER NEXT !" )
    } else {
        console.log("SORRY YOU WERE SADLY DEFEATED TRY AGAIN NEXT TIME")
        //end program
    }
//compare strenth to rivals strength
}
const fight2 = (sizeOfArmy, oppName) => {
    //compare strenth to rivals strength
}
const fight3 = (sizeOfArmy, oppName) => {
    //compare strenth to rivals strength
}
// const takeDamage = (num) => {
// //reduce army and save army strength

// }
const armySize = () => {
    let size = 450000
    return size
}
const jSnowArmy = () => {
    const size = 1000000
    return size
}
const bSnowArmy = () => {
    const size = 400000
    return size
}
const kArmy = () => {
    const size = 700000
    return size
}
const listRivals = () => {
    let arr = ["John Snow", "K", "B"]
}
// const armyIncrease = (num) => {
// // increases army and saves army strength
// }
// const inventory = () => {
// //shows you your updated inventory

// }

