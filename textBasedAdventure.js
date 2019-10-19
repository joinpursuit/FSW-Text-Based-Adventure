const readline = require('readline-sync')



const play = () => {
    let userInput 
    while(userInput != "yes") {
        userInput = readline.question("Would you like to play Game of Thrones, yes or no?")
    }
    console.log("WELCOME TO BATTLE FOR THRONES, PROTECT YOUR KINGDOM AT ALL COST !!")
}


const gameIntro = () => {
    console.log("GAME INTRODUCTION")

}


const kingdomName = () => { // gets the name from the user and saves it 
    let userInput
    userInput = readline.question("What would you like to name your kingdom?")
    return userInput 
}




console.log("option of who they would like to fight first compared to army strength")
console.log("WHO WOULD YOU LIKE TO CONQUER FIRST!?")


const removeConquered = (array, oppName) => {
    let search = oppName
    for(let i = 0; i < array.length; i++) {
        if(array[i] === search){
            array.splice(i, 1)
        }
    }
}


const fightOption = () => {
    let userInput

    userInput = readline.question("WHO'S KINGDOM WOULD YOU LIKE TO CONQUER!?")
    listRivals()
    if (userInput === "John Snow" || userInput === "john snow") {
        console.log("YOU HAVE CHOSE TO CHALLENGE " + rivalsName(userInput + "'s KINGDOM, LET THE SHOWDOWN BEGIN !"))
        fight1(myArmySize, jSnowArmy, userInput)
    }else if (userInput === "K" || userInput === "k") {
        console.log("YOU HAVE CHOSE TO CHALLENGE " + rivalsName(userInput + "'s KINGDOM, LET THE SHOWDOWN BEGIN !"))
        fight1(myArmySize, kArmy, userInput)
    }else if (userInput === "B" || userInput === "b") {
        console.log("YOU HAVE CHOSE TO CHALLENGE " + rivalsName(userInput + "'s KINGDOM, LET THE SHOWDOWN BEGIN !"))
        fight1(myArmySize, bSnowArmy, userInput)
    }
}
const rivalsName = (name) => {
    let rName = name
    return rName
}
const fight1 = (oppArmy, oppName) => {
    if(myWins() === 3){
        victory()
    }else if(armyIncrease > oppArmy) {
        removeConquered(listRivals, oppName)
        
        myWins(1)
        console.log("CONGRATS!!! YOU HAVE DEFEATED " + oppName + "'s Kingdom. YOU TOOK 70 PERCENT OF YOUR RIVALS ARMY AND ADDED THEM TO YOUR KINGDOM'S ARMY !") 
        console.log("YOU NOW HAVE " + armyIncrease(oppArmy) + " PEOPLE IN YOUR ARMY ! NOW CHOOSE WHO YOU WILL CONQUER NEXT !" )
    } else {
        console.log("SORRY YOU WERE SADLY DEFEATED TRY AGAIN NEXT TIME")
        return process.exit()
    }
//compare strenth to rivals strength
}
const myArmySize = () => {
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
    let arr = ["john snow", "K", "B"]
    return arr
}
const myWins = (num) => {
    let counter = 0
    counter += num
    return counter
}
const armyIncrease = (oppArmy) => {
    let size = myArmySize
    size = oppArmy * .7 + size
    return size
    
}

const victory = () => {
    console.log("CONGRATS YOU ARE NOW THE KING/QUEEN OVER ALL LANDS WITH AN ARMY SIZE OF " + myArmySize + ". THANKS FOR PLAYING GAME OF THRONES !!")
}





play()
gameIntro()
kingdomName()
fightOption()