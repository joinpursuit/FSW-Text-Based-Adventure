const readline1 = require('readline-sync')


const beginGame = () => {
    console.log(`Welcome to my game.`)
    let nameInput = readline1.question(`What is your name?\n`)
    console.log(`\nHello ${nameInput}! In this game, you're a bank robber and the decisions that you enter in the console determine whether or not you will go to jail, \nbut you don't know which path takes you where and you might have a chance to escape. Good luck! 🍀 (User input must be lowercase)`)
    playGame()
}  
 
const playGame = () => {
    let play = readline1.question(`Do you want to play? "yes" or "no" 🎮\n`)
    if(play.toLowerCase() === `yes`){
        ageRestriction()
    } else if (play.toLowerCase() === `no`){
        console.log(`Maybe next time! ✌🏽`)
        process.exit()
    } else {
        console.log(`Please re-enter a valid answer.`)
        playGame()
    }
}

const ageRestriction = () => {
    console.log(`WAIT A MINUTE! ✋🏽`)
    
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
    console.log(`\nYou arrive at the bank and your choice is to either pass a note 📝 to the teller demanding all the money in the drawer or you can brandish your gun 🔫.`)
    
    let noteOrGun = readline1.question(`Which would you like to choose? "pass note" or "show gun"\n`)
    
    if (noteOrGun.toLowerCase() === `pass note`) {
        passNote()
    } else if (noteOrGun.toLowerCase() === `show gun`) {
        showGun()
    } else {
        console.log(`Please re-enter a valid answer.`)
        gamePlay()
    }
        
}

const passNote = () => {
    console.log(`You give your empty backpack to the teller and she nervously puts all the money in the bag. 💰`)
    console.log(`Oh no! You hear police sirens outside! 🚓`)

    let surrenderOrGetaway = readline1.question(`Will you panic and surrender to the police or drive off in the getaway car? "surrender" or "getaway car"\n`)

    switch(surrenderOrGetaway.toLowerCase()){
        case `surrender`: 
            surrender()
        case `getaway car`:
            getawayCar()
        break
        default:
            console.log(`Please re-enter a valid answer.`)
            passNote()
    }
}

const showGun = () => {
    passNote()
}

const surrender = () => {
    console.log(`YOU'VE BEEN ARRESTED`)
    console.log(`but you might have a chance to escape jail`)
    console.log(`You sit next to your cellmate while you're watching TV and you get up to change the channel, he tells you not to, but you do it anyway. 📺`)
    
    let fightorBathroom = readline1.question(`Do you want to fight him or go to the bathroom to walk away from the argument? "fight" or "go to the bathroom"\n`)
    switch (fightorBathroom.toLowerCase()){
        case `fight`:
            console.log(`You get into a fight with you cellmate and you have to be hospitalized.`)
            fight()
        case `go to the bathroom`:
            console.log(`You go to the bathroom and type in the code: 3418.`)
            bathroomCode()
        default:
            console.log(`Please re-enter a valid answer.`)
            surrender()
    }

}

const getawayCar = () => {
    console.log(`The dye pack explodes as you try to count the money in the backseat and the driver crashes. 💣`)
    console.log(`You get out of the car and still hear police sirens. Do you want to surrender or run into the gas station to clean the dye off your clothes?`)
    
    const surrenderOrCleanUp = readline1.question(`"surrender" or "clean up"\n`)
    
    surrenderOrCleanUp.toLowerCase() === `surrender` ? surrender()
    : surrenderOrCleanUp.toLowerCase() === `clean up` ? cleanUp()
    : console.log(`Please re-enter a valid answer.`)
        getawayCar()
    
}

const fight = () => {
    console.log(`You type in 3418 as the bathroom code to wash the blood off your face. 🧼`)
    bathroomCode()
}

const cleanUp = () => {
    console.log(`The gas station attendant passes you a receipt with 3418 written on it when you ask for the bathroom passcode. You have 3 attempts.`)
    bathroomCode()
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
    console.log(`You entered the wrong passcode too many times! You broke the bathroom lock. 🔓`)
    escape()
}

const escape = () => {
    console.log(`You squeeze through the window and you're free!!`)
    console.log(`You're a wanted criminal, so you still hear sirens! The police are looking for you.`)
    let input = readline1.question(`Do you want to go to the amusement park or hideout in the psychic parlor? "amusement park" or "hideout"\n`)

    input.toLowerCase() === `amusement park` ? amusementPark()
    : input.toLowerCase() === `hideout` ? psychic()
    : console.log(`Please re-enter a valid answer.`)
       escape()
}

const amusementPark = () => {
    console.log(`You try to blend in with the crowd at Coney Island and you bump into your brother, Nick. 🎡`)
    let avoidFriend = readline1.question(`Do you avoid him? "yes" or "no"\n`)

    if(avoidFriend.toLowerCase() === `yes`){
        console.log(`He sees you sees that you're trying to avoid him and he asks you what you're doing at Adventureland.`)
        nick()
    } else if (avoidFriend.toLowerCase() === `no`) {
        console.log(`You ask him what he's doing at Adventureland.`)
        nick()
    } else {
        console.log(`Please re-enter a valid answer.`)
        amusementPark()
    }
    
}

const nick = () => {
    console.log(`He tells you to help him find a bottle of LSD solution he hid at the amusement park.`)
    let help = readline1.question(`Do you want to help him? "yes" or "no"\n`)
    
    if(help.toLowerCase() === `yes`){
        console.log(`That's not a good idea since the cops are still looking for you.`)
        helpNick()
        
    } else if(help.toLowerCase() === `no`){
        console.log(`That's a good idea, but he says no when you ask him for his car keys to drive home, so you help him find the bottle.`)
        helpNick()
    } else {
        console.log(`Please re-enter a valid answer.`)
        nick()
    }
}

const helpNick = () => {
    console.log(`Nick finds the bottle and asks you to try it. 🌀`)
    let tryIt = readline1.question(`Do you want to try it? "yes" or "no"\n`)
    if(tryIt.toLowerCase() === `yes`){
        console.log(`You try it and start hallucinating! Oh no! A cop sees you! You're too incoherent to avoid him.`)
        goToJail()
    } else if (tryIt.toLowerCase() === `no`){
        console.log(`You refuse to try it and he drives you home`)
        winGame()
    } else {
        console.log(`Please re-enter a valid answer.`)
        helpNick()
    }
}

const tarotCard = () => {
    let arr = []
    let i = 0
    while(i < 3){
      randomCard = Math.floor(Math.random() * 78)
      arr.push(randomCard)
      i++
    }
    return arr
}
  
const psychic = () => {
    console.log(`You walk into the parlor and take a seat, the fortune teller randomly gives you three numbers from 1 to 78 that you are most drawn to. 🔮`)
    console.log(`The numbers she chose for you are: ${tarotCard()[0]} ${tarotCard()[1]} ${tarotCard()[2]}`)
    if(tarotCard()[0] % 2 === 0 && tarotCard()[2] % 2 !== 0) {
        console.log(`Since the first number the fortune teller chose is even and the last number is odd, she sees handcuffs in her crystal ball`)
        doYouBelieveHer()
    } else {
        console.log(`The fortune teller sees that you are at home in the future. 🏡`)
        doYouBelieveHer()
    }
}

const doYouBelieveHer = () => {
    let believe = readline1.question(`Do you believe her? "yes" or "no"\n`)
    
    if(believe.toLowerCase() === `yes`){
        console.log(`You tip her $10 and as you leave the parlor, you run into your brother, Nick.`)
        nick()
    } else if (believe.toLowerCase() === `no`) {
        console.log(`What a buncha bologna! You tip her $1 and as you leave the parlor, you see you're brother, Nick.`)
        nick()
    } else {
        console.log(`Please re-enter a valid answer.`)
        doYouBelieveHer()
    }
}

const goToJail = () =>{
    console.log(`YOU GOT ARRESTED`)
    loseGame()
}

const winGame = () => {
    console.log(`You won! You avoided going to jail!`)
    restartGame()
}

const loseGame = () => {
    console.log(`You got caught by police!`)
    console.log(`You lost! Game over`)
    restartGame()
}

const restartGame = () => {
    let playAgain = readline1.question(`Play again? "yes" or "no"\n`)
    if(playAgain.toLowerCase() === `yes`){
        console.clear()
        beginGame()
    } else if(playAgain.toLowerCase() === `no`) {
        console.log(`Thanks for playing! 🙏🏽`)
        console.clear()
        process.exit()
    } else {
        console.log(`Please re-enter a valid answer.`)
        restartGame()
    }
}

beginGame()
