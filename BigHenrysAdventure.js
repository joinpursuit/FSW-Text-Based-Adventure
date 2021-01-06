const rls = require('readline-sync')


// exit game with process.exit and  gives a friendly daily remainder
const quitGame = () => {
    console.log("Well make sure to drink Water, stretch daily and walk you dog :)\n")
    process.exit()
} //alien quiz function
const alienQuiz = () => {
    console.log('You and Big Henry are teleprted to a strange planet it seems to be hmmmm...very odd...very odd indeed\n')
    console.log('Guess you shouldn\'t pick up strange objects..hehehe but anyway your approached by a strange figure who tells you the following: ')
    let alienQuestion = rls.keyInYN('Hello earth creatures are you ready to play a game of wits for your lives?')
    if (alienQuestion) {
        console.log('good come forward to begin')
    }
    else {
        console.log('not good hombre... the alien stuck some probe in your head and disected you, took Big Henry and you were never heard of again....')
        retry()
    }
    console.log('Alien: ok earth creature i will return you back to your home if you answer these questions about your civilzation that i have studied over the past 28 years and if you lie i can tell and kill you on sight.\n')
    console.log('i notice you earthlings champion sports and athleticism especially in this sport called basketball\n')
    let firstQuestion = rls.question('of the one called "Lebron James" and "Michael Jordan" who is greater? \n')
    if (firstQuestion === "Michael Jordan") {
        console.log("Correct...i also agree\n")
    }
    else {
        wrongAnswer()
    }
    console.log('I also have noticed how you earthings have these "console wars" but yet there is no casualties?\n')
    let secondQuestion = rls.question('Of the "Xbox" and "Playstation" which of the is supposedly the better "console"as you put it\n')
    if (secondQuestion === "Playstation") {
        console.log('Agreed!!! I have this new one called the ps5 and the little astro bot game entertains me much!\n')
    }
    else {
        wrongAnswer()
    }
    console.log('2 questions left earthling and your free\n')
    console.log('Now my skin of a grayish tone that turns pitch black at night and illuminated white in the day so this next topic puzzled me at first but i see it now!\n')
    let thirdQuestion = rls.keyInYN('Don\'t Black Lives Matter? like why is this such a big debate??? ')
    if (thirdQuestion) {
        console.log('Agreed!!!! why would a small thing like genetic code of skin cells reaction to sun-absorbtion dictate if a human should be treated equally or not?\n')
        console.log('....never on my planet')
    }
    else {
        wrongAnswer()
    }
    console.log('Final Question human and for your sake I hope we agree on it\n')
    console.log('I seek to go undercover in your society and so i have decided to join a program to teach me coding in the NYC metro area..perferably Long island city\n')
    let finalQuestion = rls.question('Give me the name of a "GREAT" coding program \n')
    if (finalQuestion === "Pursuit" || "pursuit") {
        console.log('Much obliged Earthing your really helpful.. you and this extremly musical inclined dog are free to go...i saw him on that tik tok app the other day\n')
    }
    else {
        wrongAnswer()
    }
    console.log('The Alien sprayed you with elixr that caused you to pass out and wake up in your bed 3 days later, thirsty, starving but you and Big Henry are safe\n')
    console.log('Obviously no one believed your story but the looming thought remains in the back of your head of if you would of left that damn glowing rock alone')
    let rating = rls.keyInYN("Wasn't it fun though?")
    if (rating) {
        console.log('Awesome I had fun too!! Me and Big henry will see you later! BYE!!!!!')
        quitGame()
    }
    else {
        retry()
    }
}




//game loop with acess to alien quiz at the end or just pacifist ending
const gameLoop = () => {
    console.log("In this adventure you play as the rotund  Dr.louieD walking his dog Big Henry\n")
    console.log("Your Objective: Get Big Henry ready, and take him for a walk, but today seems special for some reason so who knows what could happen ;)\n")
    console.log("First things first get Big henry his lease and let's get started on our journey\n")
    promptForColor()

    function promptForColor() {
        let leashColor = rls.question('What color Leash did you pick for Big Henry to wear?: ')
        if (leashColor === "green") {
            console.log(`Big Henry loves his ${leashColor} leash and he licks you all over your face to let you know that`)
        }
        else {
            console.log('Hint: his favorite color rhymes with the word MEAN')
            promptForColor()
        }
    }
    console.log(`Now with his GREEN leash were ready to go!\n`)
    console.log('As you set out on your Journey you come acrosss a strange glowing rock.....')
    let rockDecision = rls.keyInYN('Do you pick up the glowing rock?')
    if (rockDecision) {
        console.log('You notice Big Henry starts glowing and you pick him up only to be blinded from a luminous blinding light emitting from his body')
        alienQuiz()
    }
    else {
        console.log('You walk past the rock and continue on your walk\n')
    }
    console.log("While walking you notice you have your bluetooth speaker and decide to enjoy some tunes along the way. Big Henry's favorite artist is prince and it seems like the perfect day to enjoy some of his music \n")
    let princeSong = rls.question("Which one of Prince's songs do plan on playing?.....(Hint: Pick any of them they're all amazing!!)")
    console.log(`While ${princeSong} plays in the background you notice a small group forming around you, and they really enjoy the music alot!. You look down at Big Henry and he seems to really enjoy the people as well!!.`)
    console.log('He starts dancing and barking to the music and everyone cheers him on. "GO HENRY! GO HENRY!" the crowd starts chanting over and over\n')
    let nextSong = rls.question(`After ${princeSong} starts to go off you decide to follow it up with some Earth Wind and Fire.. Which one of their songs do you pick to play next?\n`)
    console.log(`With the crowd loving ${princeSong} and now jamming to ${nextSong} you decide it's time for the finisher and pull out the SECOND BLUETOOTH SPEAKER to really get the party started!!!! \n`)
    console.log(`2 speakers playing ${nextSong} Big Henry dancing and the crowd going crazy, How can this day get any better?!! The News station arrives thats how!!\n`)
    console.log('A Abc 7 News van pulls to record and report on the mini block party that has sprung up thanks to your music selections and Big Henry dancing.\n')
    console.log(" With the news station reporting live, you and Big Henry trending on twitter, tik tok amd instagram who would of though a simple walk would turn into this\n")
    let selfieDecision = rls.keyInYN('Do you want to take a selfie to commemerate this crazy day?\n')
    if (selfieDecision) {
        console.log("Say Cheese!!!")
        console.log('*FLASH*\n')
    }
    else {
        console.log('No prob, build up those memories fam')
    }
    console.log('You and Big Henry party allllll night and finally make your home\n')
    console.log('On the way home you notice the same glowing rock on the floor...hmmmm')
    let anotherRockDecision = rls.keyInYN('Do you pick up the rock now?')
    if (anotherRockDecision) {
        console.log('You notice Big Henry starts glowing and you pick him up only to be blinded from a luminous blinding light emitting from his body')
        alienQuiz()
    }
    else {
        console.log('ok cool... you and big henry walk in the house and get ready for bed..goodnight')
    }
    let bedtyme = rls.keyInYN('did you and Big henry have fun on your walk today?')
    if (bedtyme) {
        console.log('Nighty Night')
        quitGame()
    }
    else {
        retry()
    }



}// wrong answer for alien quizz
const wrongAnswer = () => {
    console.log('I disagree EARTHLING!!!! SAY GOODBYE\n')
    console.log('not good hombre... the alien stuck some probe in your head and disected you, took Big Henry and you were never heard of again....')
    retry()
}//retry prompt if you reach wrongAnswer() or end of pacifist ending...also restarts game
const retry = () => {
    let retryPrompt = rls.keyInYN("you wanna try again?\n")
    if (retryPrompt) {
        console.log("ok cool\n")
        startGame()
    }
    else {
        quitGame()
    }

}







const startGame = () => {
    // prompt if they want to play
    //if yes
    //console.log welcome message
    //call gameloop()
    //else
    // call guitGame()
    console.log("Welcome to the Adventures of Big Henry and Louie D!!!\n")
    let nameInput = rls.question("Who's playing today?\n")
    console.log(`Hey ${nameInput} thanks for checking this out\n`)
    let waterCheck = rls.keyInYN(`Umm real quick ${nameInput} did you drink some water today?\n`)
    if (waterCheck) {
        console.log("Ok good you may continue...\n")
    } else {
        console.log('STOP RIGHT THERE!!! Go grab some water now please for you and all living pets in the household\n')
    }
    let answer = rls.keyInYN("Roof!! Roof! (You ready to go now?)\n")
    if (answer) {
        console.log("Yayy! Let's GO! :)\n")
        gameLoop()
    } else {
        console.log("awww man :(\n")
        quitGame()
    }
}
startGame()