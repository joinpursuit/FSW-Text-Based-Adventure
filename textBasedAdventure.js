const readline1 = require('readline-sync')

const beginGame = () => {
    console.log(`Welcome to my game.`)
    let nameInput = readline1.question(`What is your name? \n`)
   // console.log(`Hello ${nameInput}!  Welcome to my game.`)
    
    console.log(`Hello ${nameInput}! In this game, you're a bank robber and the decisions that you enter in the console determine whether you will go to jail or not \nbut you don't know which path takes you where and you have chances to escape. Good luck!`)
    if(readline1.keyInYNStrict(`Do you want to play?\n`)){
        startGame()
    } else {
        console.log(`Maybe next time!`)
        console.clear()
        beginGame()
    }
}

const startGame = () => {
    console.log(`You arrive at the bank and your choice is to either pass a note to the teller demanding all the money in the drawer or you can brandish your gun.\n`)
    
    let noteOrGun = readline1.question(`Which would you like to choose? Type "pass note" or "show gun"\n`)
    
    if (noteOrGun === "pass note") {
        passNote()
    } else if (noteOrGun === "show gun") {
        showGun()
    } else {
        console.log("Sorry, decisions are case sensitive. Please re-enter a valid answer with all lowercase letters.")
        startGame()
    }
        
}

const passNote = () => {
    console.log(`You pass the note and your backpack to the teller and she nervously puts all the money in the bag`)
    console.log(`Oh no! You hear police sirens outside!`)

    let surrenderOrGetaway = readline1.question(`Will you panic and surrender to the police or drive off in the getaway car?\n`)

    switch(surrenderOrGetaway){
        case `surrender to the police`: 
            surrender()
        case `get in the getaway car!`:
            getawayCar()
        break
        default:
            passNote()
    }
}

const showGun = () => {
    // getawayCar()
}

const surrender = () => {

    // fight()
}

const getawayCar = () => {
    console.log(`hi`)
    // surrender()
    // cleanUp()
}

const fight = () => {
    // escape()
    // goToJail()
}

const cleanUp = () => {
//     bathroomPasscode() //if entered wrong then go back and get caught
//     surrender()
}

const escape = () => {
//     getCaught()
// }
}

const goToJail = () => {
    // gameOver()
}

const gameOver = () => {

    // restartGame()
}

const restartGame = () => {
    if(readline1.keyInYN(`Play again?`)){
        beginGame()
    } else {
        console.log(`Thanks for playing!`)
        console.clear()
        process.exit()
    }
}

beginGame()

