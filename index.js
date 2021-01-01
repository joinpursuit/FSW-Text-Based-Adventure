const rls = require("readline-sync")

let name = " "
let age = " "
//initial question to exercise or not. 

const initialQ = () => {
    name = rls.question("Hi!\nWhat's your name? ")
    setTimeout(function () { console.log("Hi " + name + " nice to meet you!") }, 300)

    setTimeout(function () { rls.keyInYN("Would you like to exercise?") ? exerciseGame() : shameQandA() }, 3000)

}
//exercise game
// ask some quesions about age 
//determin what loop or option is right for the user
const exerciseGame = () => {
    console.log("Good choice.")
    age = rls.question("What's your age? \n")
    setTimeout(function () {
        if (age >= 65) {
            console.log("My elder.")
            setTimeout(function () { console.log("Let's do some situps.") }, 1000)
            setTimeout(function () { seniorLoop() }, 2000)

        } else if (age >= 21) {
            console.log("Your an adult.")
            setTimeout(function () { console.log("Let's do some quick pushups.") }, 1000)
            setTimeout(function () { adultLoop() }, 2000)
        }
        else if (age >= 14) {
            console.log("Youngen.")
            setTimeout(function () { console.log("Great! You are still a minor but you are welcome to get some exercise.") }, 500)
            setTimeout(function () { minorLoop() }, 2000)

        } else {
            console.log("Your just a kid.")
            setTimeout(function () { console.log("Join a little leugue team") }, 2000)
            setTimeout(function () { quitGame() }, 3500)
        }
    }, 400)


}
//setTimeout(function () { }, 2000)
//shame Q and A
const shameQandA = () => {
    setTimeout(function () { console.log("What!!!???") }, 200)
    setTimeout(function () { console.log(name + "! You should be ashamed of yourself!") }, 2000)
    setTimeout(function () {
        let answer = rls.keyInYN("Do you eat at McDonalds?")
        if (answer) {
            console.log("Ok.... Hmmm")
            setTimeout(function () {
                fastFoodNumber = rls.questionInt("How many times a month do you eat fast food? ")
                if (fastFoodNumber >= 10) {
                    setTimeout(function () { console.log(name + "! You are going to die young.") }, 100)
                    setTimeout(function () { quitGame() }, 4000)
                } else {
                    console.log(name + "! You have somewhat of a chance in life.")
                    quitGame()

                }
            }, 2000)

        } else {
            console.log("That is a good but you probably consume other saturated fats.")
            quitGame()

        }
    }, 4000)



}
//Senior exercise loop 
const seniorLoop = () => {
    setTimeout(function () {
        let answer = rls.keyInYN("Are you ready? ")
        if (answer) {
            for (let i = 1; i <= 6; i++) {
                let sitUp = i
                if (i === 1) {
                    setTimeout(function () { console.log(sitUp + " situp! Lets go " + name + "!" )}, 3000)
                } else if (i === 2) {
                    setTimeout(function () { console.log(sitUp + " situps!" + "\nLooking good " + name) }, 6000)
                } else if (i === 3) {
                    setTimeout(function () { console.log(sitUp + " situps!") }, 9000)
                } else if (i === 4) {
                    setTimeout(function () { console.log(sitUp + " situps!" + "\nWow " + name + " I cant believe my eyes!") }, 12000)
                } else if (i === 5) {
                    setTimeout(function () { console.log(sitUp + " situps!") }, 15000)
                }else {
                    setTimeout(function () { console.log(sitUp + " situps!" + " you look younger already!"); rls.keyInYN("Another rep?") ? seniorLoop() : quitGame() }, 18000)
                }
            }
        } else {
            console.log("Let me know when ")
            quitGame()
        }
    }, 1000)
}





//Adult exercise loop 
const adultLoop = () => {
    setTimeout(function () {
        let answer = rls.keyInYN("Are you ready? ")
        if (answer) {
            for (let i = 1; i <= 10; i++) {
                let sitUp = i
                if (i === 1) {
                    setTimeout(function () { console.log(sitUp + " pushup!") }, 1500)
                } else if (i === 2) {
                    setTimeout(function () { console.log(sitUp + " pushups! Lets go " + name + "!") }, 3000)
                } else if (i === 3) {
                    setTimeout(function () { console.log(sitUp + " pushups!") }, 4500)
                } else if (i === 4) {
                    setTimeout(function () { console.log(sitUp + " pushups!" + "\nLooking good " + name) }, 6000)
                } else if (i === 5) {
                    setTimeout(function () { console.log(sitUp + " pushups!") }, 7500)
                } else if (i === 6) {
                    setTimeout(function () { console.log(sitUp + " pushups!") }, 9000)
                } else if (i === 7) {
                    setTimeout(function () { console.log(sitUp + " pushups!" + "\nWow " + name + " I cant believe my eyes!") }, 10500)
                } else if (i === 8) {
                    setTimeout(function () { console.log(sitUp + " pushups!") }, 12000)
                } else if (i === 9) {
                    setTimeout(function () { console.log(sitUp + " pushups!") }, 13500)

                } else {
                    setTimeout(function () { console.log(sitUp + " pushups!" + " you look younger already!"); rls.keyInYN("Another rep?") ? adultLoop() : quitGame() }, 15000)
                }
            }
        } else {
            console.log("Let me know when ")
            quitGame()
        }
    }, 1000)

}
//Minor exercise loop 
const minorLoop = () => {
    setTimeout(function () {
        let answer = rls.keyInYN("Are you ready? ")
        if (answer) {
            for (let i = 1; i <= 10; i++) {
                let sitUp = i
                if (i === 1) {
                    setTimeout(function () { console.log(sitUp + " situp!") }, 2000)
                } else if (i === 2) {
                    setTimeout(function () { console.log(sitUp + " situps! Lets go " + name + "!") }, 4000)
                } else if (i === 3) {
                    setTimeout(function () { console.log(sitUp + " situps!") }, 6000)
                } else if (i === 4) {
                    setTimeout(function () { console.log(sitUp + " situps!" + "\nLooking good " + name) }, 8000)
                } else if (i === 5) {
                    setTimeout(function () { console.log(sitUp + " situps!") }, 10000)
                } else if (i === 6) {
                    setTimeout(function () { console.log(sitUp + " situps!") }, 12000)
                } else if (i === 7) {
                    setTimeout(function () { console.log(sitUp + " situps!" + "\nWow " + name + " I cant believe my eyes!") }, 14000)
                } else if (i === 8) {
                    setTimeout(function () { console.log(sitUp + " situps!") }, 16000)
                } else if (i === 9) {
                    setTimeout(function () { console.log(sitUp + " situps!") }, 18000)

                } else {
                    setTimeout(function () { console.log(sitUp + " situps!" + " you look younger already!"); rls.keyInYN("Another rep?") ? minorLoop() : quitGame() }, 20000)
                }
            }
        } else {
            console.log("Let me know when ")
            quitGame()
        }
    }, 1000)

}
//Child questionare 

//Quit game and say goodbye 

//setTimeout(function () { }, 2000)

initialQ()

const quitGame = () => {
    //setTimeout(function () {
    rls.keyInYN("Does someone else want to play?") ? initialQ() : console.log("Goodbye!"), process.exit()
    //}, 2000)
}