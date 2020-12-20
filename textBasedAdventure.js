const readline1 = require('readline-sync')

const beginGame = () => {
    console.log(`Welcome to my game.`)
    let nameInput = readline1.question(`What is your name? \n`)
   // console.log(`Hello ${nameInput}!  Welcome to my game.`)
    
    console.log(`Hello ${nameInput}! In this game, you're a bank robber and the decisions that you enter in the console determine whether you will go to jail or not \nbut you don't know which path takes you where and you have one chance to escape. Good luck!`)
    if(readline1.keyInYNStrict(`Do you want to play?`)){
        startGame()
    } else {
        console.log(`Maybe next time!`)
        console.clear()
        beginGame()
    }
}

const startGame = () => {
    console.log(`\nYou arrive at the bank and your choice is to either pass a note to the teller demanding all the money in the drawer or you can brandish your gun.`)
    
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
    console.log(`You give your empty backpack to the teller and she nervously puts all the money in the bag.`)
    console.log(`Oh no! You hear police sirens outside!`)

    let surrenderOrGetaway = readline1.question(`Will you panic and surrender to the police or drive off in the getaway car? Type in 'surrender to the police' or 'get in the getaway car!'\n`)

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
    passNote()
}

const surrender = () => {
    console.log(`hello`)
    // fight()
}

const getawayCar = () => {
    console.log(`The dye pack explodes as you try to count the money in the backseat and the driver crashes.`)
    console.log(`You get out of the car and still hear police sirens. Do you want to surrender or run into the gas station to clean the dye off your clothes?`)
    
    const surrenderOrCleanUp = readline1.question(`surrender to police or clean up dye\n`)
    
    surrenderOrCleanUp === `surrender to police` ? surrender()
    : surrenderOrCleanUp === `clean up dye` ? cleanUp()
    : getawayCar()
    
}

const fight = () => {
    // escape()
    // goToJail()
}

const cleanUp = () => {
//     bathroomPasscode() //if entered wrong then go back and get caught
//     surrender()
    console.log(`hi`)
}

const escape = () => {
//     getCaught()
// }
}

const avoidPolice = () => {

}

const getCaught = () => {

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

