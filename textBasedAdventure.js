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



console.log("option of who they would like to fight first compared to army strength")
console.log("WHO WOULD YOU LIKE TO CONQUER FIRST!?")

listRivals()

const fightOption = () => {
    let userInput

    userInput = readline.question("WHO'S KINGDOM WOULD YOU LIKE TO CONQUER!?")
    if (userInput === "John Snow" || userInput === "john snow") {
        console.log("YOU HAVE CHOSE TO CHALLENGE " + rivalsName(userInput + "'s KINGDOM, LET THE SHOWDOWN BEGIN !")
        fight1(myArmySize, jSnowArmy, "John Snow")
    }else if (userInput === "K") || userInput === "k") {
        console.log("YOU HAVE CHOSE TO CHALLENGE " + rivalsName(userInput + "'s KINGDOM, LET THE SHOWDOWN BEGIN !")
        fight1(myArmySize, kArmy, "K")
    }else if (userInput === "B") || userInput === "b") {
        console.log("YOU HAVE CHOSE TO CHALLENGE " + rivalsName(userInput + "'s KINGDOM, LET THE SHOWDOWN BEGIN !")
        fight1(myArmySize, bSnowArmy, "B")
    }
}
fightOption()

const rivalsName = (name) => {
    let rName = name
    return rName
}
const fight1 = (sizeOfArmy, oppArmy, oppName) => {
    if(myWins() === 3){
        victory()
    }else if(sizeOfArmy > oppArmy) {
        listRivals.pop(oppName)
        sizeOfArmy(oppArmy * .7 + sizeOfArmy)
        myWins(1)
        console.log("CONGRATS!!! YOU HAVE DEFEATED " + oopName + ". YOU TOOK 70 PERCENT OF YOUR RIVALS ARMY AND ADDED THEM TO YOUR KINGDOM'S ARMY ! YOU NOW HAVE " + myArmySize + " PEOPLE IN YOUR ARMY ! NOW CHOOSE WHO YOU WILL CONQUER NEXT !" )
    } else {
        console.log("SORRY YOU WERE SADLY DEFEATED TRY AGAIN NEXT TIME")
        return process.exit()
    }
//compare strenth to rivals strength
}
const myArmySize = (num) => {
    let size = 450000
    size += num
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
    for(let i = 0; i < arr.length; i++){
        console.log(arr[i])
    }
    return arr
}
const myWins = (num) => {
    let counter = 0
    counter += num
    return counter
}
const victory = () => {
    console.log("CONGRATS YOU ARE NOW THE KING/QUEEN OVER ALL LANDS WITH AN ARMY SIZE OF " + myArmySize + ". THANKS FOR PLAYING GAME OF THRONES !!")
}

