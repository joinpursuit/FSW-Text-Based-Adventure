const readline1 = require('readline-sync')


const beginGame = () => {
    console.log(`Welcome to my game.`)
    let nameInput = readline1.question(`What is your name? \n`)
   
    console.log(`Hello ${nameInput}! In this game, you're a bank robber and the decisions that you enter in the console determine whether you will go to jail or not \nbut you don't know which path takes you where and you have one chance to escape. Good luck! (User input should be lowercase)`)
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
    
    let noteOrGun = readline1.question(`Which would you like to choose? "pass note" or "show gun"\n`)
    
    if (noteOrGun.toLowerCase() === "pass note") {
        passNote()
    } else if (noteOrGun.toLowerCase() === "show gun") {
        showGun()
    } else {
        console.log("Please re-enter a valid answer.")
        startGame()
    }
        
}

const passNote = () => {
    console.log(`You give your empty backpack to the teller and she nervously puts all the money in the bag.`)
    console.log(`Oh no! You hear police sirens outside!`)

    let surrenderOrGetaway = readline1.question(`Will you panic and surrender to the police or drive off in the getaway car? "surrender to the police" or "get in the getaway car"\n`)

    switch(surrenderOrGetaway.toLowerCase()){
    case `surrender to the police`: 
        surrender()
    case `get in the getaway car`:
        getawayCar()
    break
    default:
        console.log("Please re-enter a valid answer.")
        passNote()
    }
}

const showGun = () => {
    passNote()
}

const surrender = () => {
    console.log(`YOU'VE BEEN ARRESTED`)
    console.log(`but you have a chance to escape jail`)
    //fight()
    // escape()
}

const getawayCar = () => {
    console.log(`The dye pack explodes as you try to count the money in the backseat and the driver crashes.`)
    console.log(`You get out of the car and still hear police sirens. Do you want to surrender or run into the gas station to clean the dye off your clothes?`)
    
    const surrenderOrCleanUp = readline1.question(`surrender to police or clean up dye\n`)
    
    surrenderOrCleanUp.toLowerCase() === `surrender to police` ? surrender()
    : surrenderOrCleanUp.toLowerCase() === `clean up dye` ? cleanUp()
    : console.log(`Please re-enter a valid answer.`)
        getawayCar()
    
}

const fight = () => {
    console.log(`hi`)
    // escape()
    // goToJail()
}

const cleanUp = () => {
    console.log(`The gas station attendant passes you a receipt with 3418 written on it when you ask for the bathroom passcode. You have 3 attempts.`)
    bathroomCode()
}

const escape = () => {
//     gotoJail()
//
}

const bathroomCode = () => {

    for(let i = 0; i < 3; i++) {
        let code = readline1.questionInt(`Enter code\n`)
        
        if (code === 3418){
           console.log(`UNLOCKED`)
            meetNick()
        } else {
           console.log(`LOCKED`)
        }
    }
    console.log(`You go back to the gas station attendant and police are waiting to arrest you`)
    surrender()
}

const meetNick = () => {
 console.log(`You walk out the gas station and `)
}

const goToJail = () =>{
    console.log("YOU GOT ARRESTED AGAIN")
    console.log("You got caught ")
    loseGame()
}

const winGame = () => {
    console.log(`You won! You escaped jail and avoided going back to jail!`)
    restartGame()
}

const loseGame = () => {
    console.log(`You got caught by police again!`)
    console.log(`You lost! Game over`)
    restartGame()
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

