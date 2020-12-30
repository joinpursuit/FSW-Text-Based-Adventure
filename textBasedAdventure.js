const readline1 = require('readline-sync')


const beginGame = () => {
    console.log(`Welcome to my game.`)
    let nameInput = readline1.question(`What is your name?\n`)
   
    console.log(`\nHello ${nameInput}! In this game, you're a bank robber and the decisions that you enter in the console determine whether you will go to jail or not \nbut you don't know which path takes you where and you have one chance to escape. Good luck! (User input must be lowercase)`)
    if(readline1.keyInYNStrict(`Do you want to play?`)){
        ageRestriction()
    } else {
        console.log(`Maybe next time!`)
        console.clear()
        beginGame()
    }
}

const ageRestriction = () => {
    console.log(`WAIT A MINUTE!`)
    
    let age = readline1.questionInt(`How old are you?\n`)
    
    if(age >= 18){
        console.log(`You are old enough to play.`)
        gamePlay()
    } else {
        console.log(`Sorry, this game is rated R!`)
        console.clear()
        beginGame()
    }
}

const gamePlay = () => {
    console.log(`\nYou arrive at the bank and your choice is to either pass a note to the teller demanding all the money in the drawer or you can brandish your gun.`)
    
    let noteOrGun = readline1.question(`Which would you like to choose? "pass note" or "show gun"\n`)
    
    if (noteOrGun.toLowerCase() === "pass note") {
        passNote()
    } else if (noteOrGun.toLowerCase() === "show gun") {
        showGun()
    } else {
        console.log("Please re-enter a valid answer.")
        gamePlay()
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
    console.log(`You sit next to your cellmate while you're watching TV and you get up to change the channel, \nhe tells you not to, but you do it anyway.`)
    
    let fightorBathroom = readline1.question(`Do you want to "fight" him or "go to the bathroom" to walk away from the argument?\n`)
    switch (fightorBathroom.toLowerCase()){
        case `fight`:
            console.log(`You get into a fight with you cellmate and you have to be hospitalized.`)
            fight()
        case `go to the bathroom`:
            console.log(`You go to the bathroom and type in the code: 3418`)
            bathroomCode()
        default:
            console.log("Please re-enter a valid answer.")
            surrender()
    }

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
    console.log(`You type in 3418 as the bathroom code to wash the blood off your face`)
    bathroomCode()
}

const cleanUp = () => {
    console.log(`The gas station attendant passes you a receipt with 3418 written on it when you ask for the bathroom passcode. You have 3 attempts.`)
    bathroomCode()
}

const escape = () => {
    console.log(``)
}

const bathroomCode = () => {

    for(let i = 0; i < 3; i++) {
        let code = readline1.questionInt(`Enter code\n`)
        
        if (code === 3418){
           console.log(`UNLOCKED`)
           console.log(`You see a window in the bathroom and you try to escape.`)
           escape()
        } else {
           console.log(`LOCKED`)
        }
    }
    console.log(`You double check the passcode and it's 3418`)
    bathroomCode()
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

