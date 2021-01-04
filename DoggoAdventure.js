const readline = require('readline-sync')
const chalk = require('chalk')
const quitGame = () => {
    console.log(chalk.blue("Okay Bye Bye!"))
    process.exit()
}
const startGame = () => {
    console.log(chalk.blue("You're walking down a hallway with cages on both sides..."))
    console.log(chalk.blue("You hear a noise on your left"))
}
const answerTwo = () => {
    let responseTwo = readline.question("What do you do?\n")
    if (responseTwo.toLowerCase() === "walk closer"){
        console.log(chalk.blue("You move closer to the cage and look inside"))
    } else if (responseTwo.toLowerCase() === "restart"){
        game()
    } else {
        console.log(chalk.blue("try 'walk closer'"))
        answerTwo()
    }
}
const answerThree = () => {
    console.log(chalk.blue("You see a puppy!"))
    console.log(chalk.blue("The puppy is looking at you with the biggest eyes"))
    let responseThree = readline.question("Would you like to pet the puppy?\n")
    if (responseThree.toLowerCase() === "yes") {
        console.log(chalk.blue("You gently pet the goodest doggo"))
    }
    else {
        console.log(chalk.red("Do you have any feelings?! Try again!"))
        answerThree()
    }
}
const answerFour = () => {
console.log(chalk.blue("While the pupper is licking your hand..."))
console.log(chalk.blue("A shelter volunteer approaches you"))
console.log(chalk.blue(' "I see you found Pupperoni!" '))
console.log(chalk.blue(' "Did you have any questions about him?" '))
    let responseFour = readline.question("You can ask how old is he, how long has he been here, what type of dog is he, or none\n")
    if (responseFour.toLowerCase() === "how old is he?"){
        console.log(` "He's only 3 years old. Any other questions?" `)
        answerFour()
        }
    else if (responseFour.toLowerCase() === "how long has he been here?"){
            console.log(` "He's been at the shelter for 6 months. Any other questions?"`)
            answerFour()
        }
    else if (responseFour.toLowerCase() === "what type of dog is he?"){
            console.log(` "We aren't entirely too sure, but he seems to be part Pembroke Welsh Corgi and Dachsund. Any other questions?" `)
            answerFour()
        }
    else    (responseFour.toLowerCase() === "none") 
                  
}
const answerFive = () => {
    console.log(chalk.blue("The Volunteer has noticed Pupperoni's change in behavior"))
    let responseFive = readline.keyInYN(chalk.blue("He asks 'He seems to have taken a liking to you. Would you like to play with him?' \n"))
    if (responseFive) {
        console.log("You squeal and say `Yes please!' ")
        }
        else 
        console.log("You seem unsure and decline for now")   
}

const answerSix = () => {
    console.log(chalk.blue("Pupperoni moves away from you..."))
    console.log(chalk.blue("and walks over to his toys"))
    console.log(chalk.blue("You laugh and think to yourself 'I guess I didn't have a choice anyway' "))
    console.log(chalk.blue("You look and see you have 3 options: a ball, a bone, and a rope. Which one do you choose?"))
    let toys = ['ball' , 'bone', 'rope']
    let responseSix = readline.keyInSelect(toys,'Which toy?\n')
    console.log ('You pick up the ' + toys[responseSix] + ' and throw it across the room')
    console.log ('Pupperoni chases after the '+ toys[responseSix] + ' with delight!')

}

const answerSeven = () => {
    console.log(chalk.blue("Pupperoni prances back to you with the toy in his mouth."))
    console.log(chalk.blue("He drops the toy at your feet and sits with a wagging tail"))
    console.log(chalk.blue("You look around and see a small bowl of treats."))
    console.log(chalk.blue("You decide to give him one"))
    let treatCount = [1 , 2 , 3 ]
    let responseSeven = readline.keyInSelect(treatCount,"How many treats?\n")
    console.log("You give " + treatCount[responseSeven] + " to Pupperoni " )
    
}

const answerEight = () => {
    console.log(chalk.blue("Pupperoni looks satiated"))
    console.log(chalk.blue("He flops over, patiently awaiting a belly rub"))
    console.log(chalk.blue("You're about to give him the best belly rub of his life.."))
    console.log(chalk.blue("and you notice a collar around his neck"))

    let responseEight = readline.keyInYN("Would you like to look closer at the collar?\n")
    if (responseEight){
        console.log("You move in closer and examine his collar. It reads 'My name is Pupperoni. If lost..")
        console.log("Please call 555-5555 for Pvt. William Smith' ")
        }
        else
        console.log ("Maybe I'll look at it another day")

}

const answerNine = () => {
    console.log(chalk.blue("You turn to the volunteer and ask to proceed with the adoption paperwork"))
    console.log(chalk.blue(`The volunteer smiles. "Pupperoni is amazing. I'm happy he found you."`))
    console.log(chalk.blue(`You ask about the collar and the volunteer says "Pup belonged to a hometown hero"`))

    let responseNine = readline.keyInYN("Would you like to hear a little about William?\n")
    if (responseNine){
        console.log(` "William was in the Army"`)
        console.log(`" He was actually killed on tour not too long ago while working his night shift" `)
        console.log(` "He was on volunteer guard duty when there was a surprise attack on base.." `)
        console.log(` "Everyone misses him. He had such a bright future. But he was also the type to take care of everyone else first" .`)
        }
        else
        console.log(`"No worries. I bet you'll hear all about him. He's kind of a local hero."`)

}

const answerTen = () => {
    console.log(chalk.blue(`The volunteer says "Looks like you're all set!"`))
    console.log(chalk.blue(`"William did leave a letter for the new owner"`))
    let responseTen = readline.keyInYN("Would you like to read the letter?\n")
    if (responseTen){
        console.log(`"Hey there! First, I would like to thank you for adopting Pupperoni"`)
        console.log(`"He's small in stature, but I can definitely tell you he has a really big heart"`)
        console.log(`"He loves cuddles and he's been trying to fit his ball perfectly into his mouth" `)
        console.log(`"I'm sure with enough practice, he'll get it. Until then..."`)
        console.log(`"Please give him lots of hugs and belly rubs for me".`) 
    }
        else {
            console.log("Maybe I should read it at home..")
        }
        console.log("You turn around and see Pupperoni, waiting with a ball, fitting snugly in his mouth")
        console.log(`"C'mon boy, let's head home!"`)

}
const restartGame = () => {
    let restart = readline.keyInYN("Would you like to play again?\n")
        if (restart){
            game()
        }
        else
        quitGame()
    }       
const game = () => {
    let nameInput = readline.question("Enter your name: ")
    console.log(`Hello ${nameInput}!  Welcome to my game.`)
    let answer = readline.keyInYN ("Would you like to play?")
    if (answer) {
        console.log(chalk.blue("You will be going on a fun adventure...by ADOPTING A PUPPY"))
        startGame()
        answerTwo()
        answerThree()
        answerFour()
        answerFive()
        answerSix()
        answerSeven()
        answerEight()
        answerNine()
        answerTen()
        restartGame()
    } else {
        quitGame()
    }
}
game()
//I would like to dedicate this first project to my first dog, Turbo
//He lived to the golden age of 13. He was also an osteosarcoma survivor
//He lived for a year with a leg amputation and was doing great.
//On August 6, 2020, He was taken from me in a hit and run accident.
//I had also found a dog that I wanted to adopt, also an amputee, but was denied
//because I have a toddler. He is actually one of my
//biggest reasons for applying to Pursuit
//This game is just an "what if?" and hopefully,
//I can adopt in the future. Thank you guys for taking the time to play this.
//All constructive criticism is welcome. :)