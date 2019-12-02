const readline = require('readline-sync')

let nearDeathCount = 0

//1. Create a video game

const create = () => {

    let createGame = readline.question("Would you like to create a game? (Y/N) ")

    while(createGame.toUpperCase() !== "Y" && createGame.toUpperCase() !== "N") {
        console.log("Please enter 'Y' or 'N'")
        createGame = readline.question("Would you like to create a game? (Y/N) ")
    }

    switch(createGame.toUpperCase()) {
        case "Y": 
            time()
            break

        case "N":
            console.log("You rejected the task. (Answer yes)")
            create()
    }
}

//2. How will you spend your time

const time = () => {
    decisions = ["Start the day before it's due", "Start now", "Ask someone for help"],
    
    i = readline.keyInSelect(decisions, 'You only have 2 weeks to complete make a video game. What will you do next?')
    console.log("You decided to " + decisions[i])
    enterPassword()
}   

//3. Enter your password

const enterPassword = () => {
    
    let password = readline.question('Your password is either 369, 246, or 51015. Guess your password: ', {limit: 51015});
    
        switch (Number(password)) {

            case 369:
            console.log("Incorrect Password")
            enterPassword()
                
            case 246:
            console.log("Incorrect Password")
            enterPassword()

            case 51015:
            takeBreak()
            break

            default:
            console.log("Incorrect Password")
            enterPassword()

    }
}

//4. You take a break

const takeBreak = () => {
    
    let choices = ["Watch T.V", "Take a walk", "See a friend"]
    let userInput = readline.keyInSelect(choices, "You decide to take a break, what do you do?")

    if(userInput === 0){
        watchTv()
    } else if (userInput === 1){
        bodega()
    } else {
        seeFriend()
    }
}

//5. Go to the store

const bodega = () => {
    console.log("You feel like you need brain food to start your project, so you walk to the bodega")
    console.log("You order a chopped cheese")
    let feeling
    if(readline.keyInYN("Do you buy a drink?")){
        feeling = {feeling: "sick"}
    } else {
        feeling = {feeling: "healthy"}
    }
    console.log("While wait for your chopped cheese you pet the store's cat")
    goHome(feeling)
}

//6. See your friend

const seeFriend = () => {
    console.log("You meet Thalia at a bar")
    let feeling
    if(readline.keyInYN("Would you like to get a drink with her?")){
        feeling = {feeling: "drunk"}
    } else {
        feeling = {feeling: "healthy"}
    }
    console.log("It's time to go home.")
    goHome(feeling)
}


const goHome = (feeling) => {
    console.log("You get home and continue work on your game")
    if(feeling["feeling"] === "drunk"){
        vomit()
    } else if (feeling["feeling"] === "sick") {
        console.log("You start feeling nauseous")
        console.log("You check the expiry date on the drink, and notice it's expired.")
        if(readline.keyInYN("Do you want to take medication?")){
            takeMeds()
        } else {
            vomit()
        }
    } else {
        finishGame();
    }
}

const vomit = () => {
    console.log("You feel as if you're going to throw up.")
    console.log("Before you can react, you throw up on your laptop!")
    console.log("All your data is gone.")
    endGame()
}

const takeMeds = () => {
    nearDeathCount++
    console.log("You run to your bathroom cabinet and grab medication.")
    let choices = ["Take recommended dose", "Take what you feel is right" ]
    let userInput = readline.keyInSelect(choices, "Do you:" )

    switch (userInput){
        case 0: 
            finishGame()
        case 1:
            hallucination()

    }
    
}

const hallucination = () => {
    console.log("You see a silhouette appear in the dark across from you")
    let choices = ["Walk towards it", "Run away", "Throw a brick"]
    let userInput = readline.keyInSelect(choices, "What action do you take?")

    switch (userInput){
        case 0:
            walkTowardsIt()
        case 1: 
            runAway()
        case 2:
            throwBrick()
    }
}

const walkTowardsIt = () => {
    console.log("As you walk towards it the shadow disappears")
    console.log("It hits you and you collapse")
    console.log("As your eyes close for the last time, you see the shadow standing over you")
    endGame()
}

const runAway = () => {
    console.log("You leave your apartment and try to find help from your next door neighbor.")
    console.log("Your neighbors call the police and you are sent to a mental asylum.")
    endGame()
}

const throwBrick = () => {
    nearDeathCount++
    console.log("The shadow screeches")
    console.log("The shadow grabs the brick and throws it back")
    
    let choices = ["Run away", "Turn on the lights", "Splash water on face"]
    let userInput = readline.keyInSelect(choices,"What action do you take?" )

    switch(userInput){
        case 0: 
            runAway()
        case 1:
            turnOnLight()
        case 2:
            splashWater()
    }
}

const turnOnLight = () => {
    nearDeathCount++
    console.log("The silhouette does not disappear")
    console.log("It hits you and you collapse")
    console.log("As your eyes close for the last time, you see the silhouette standing over you")
    endGame()
    process.exit()
}

const splashWater = () => {
    nearDeathCount++
    console.log("You return to your normal senses.")
    console.log("You sit back down at your desk to continue your game.")
    finishGame()
    process.exit()
}

const finishGame = () => {
    console.log("Congrats! You made it to the end alive")
    for(let i = 0; i <= nearDeathCount; i++ ){
        console.log("You have survived! " + i)
    }
    process.exit()
}

const endGame = () => {
    console.log("You weren't able to stay alive")
    for(let i = 0; i <= nearDeathCount; i++ ){
        console.log("You have survived! " + i)
    }
    process.exit()
}

let nameInput = readline.question("Enter your name: ")

console.log("Hello " + nameInput + " welcome to my game.")
create()