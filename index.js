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
            console.log("You're an adult.")
            setTimeout(function () { console.log("Let's do some quick pushups.") }, 1000)
            setTimeout(function () { adultLoop() }, 2000)
        }
        else if (age >= 13) {
            console.log("Youngen.")
            setTimeout(function () { console.log("Lets see how many pullups you can do.") }, 800)
            setTimeout(function () { minorLoop() }, 3000)

        } else if (age >= 5) {
            console.log("Your just a kid.")
            setTimeout(function () { console.log("Join a little leugue team.") }, 2000)
            setTimeout(function () { quitGame() }, 3500)
        } else {
            console.log("How did you get on here?")
            setTimeout(function () { console.log("Go find your mommy.") }, 2000)
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
                fastFoodNumber = rls.questionInt("How many times a week do you eat fast food? ")
                if (fastFoodNumber >= 10) {
                    setTimeout(function () { console.log(name + "! You are going to die young.") }, 100)
                    setTimeout(function () { quitGame() }, 4000)

                } else {
                    rls.keyInYN("Can ask you more about your diet?") ? diet() : console.log("No worries") + quitGame()




                }
            }, 2000)

        } else {
            console.log("That is a good but you probably consume other saturated fats.")
            rls.keyInYN("Can ask you more about your diet?") ? diet() : console.log("No worries") + quitGame()
        }
    }, 4000)



}
const diet = () => {
    typeOfFood = ['Meat', 'Fish', 'Vegitables', 'Fruit', 'Pasta', 'Rice', 'Potatoes']
    index = rls.keyInSelect(typeOfFood, 'Which food do you like most most?')
    console.log('Im happy you like ' + typeOfFood[index])
    setTimeout(function () { console.log(name + "! You have somewhat of a chance in life.") }, 1500)
    setTimeout(function () {  quitGame()}, 2500)

}
//Senior exercise loop 
const seniorLoop = () => {
    setTimeout(function () {
        let answer = rls.keyInYN("Are you ready? ")
        if (answer) {
            for (let i = 1; i <= 6; i++) {
                let sitUp = i
                if (i === 1) {
                    setTimeout(function () { console.log(sitUp + "! situp") }, 3000)

                } else if (i === 2) {
                    setTimeout(function () { console.log(sitUp + "!") }, 6000)

                } else if (i === 3) {
                    setTimeout(function () { console.log(sitUp + "! situps") }, 9000)
                } else if (i === 4) {
                    setTimeout(function () { console.log(sitUp + "!") }, 12000)


                } else if (i === 5) {
                    setTimeout(function () { console.log(sitUp + "!") }, 15000)
                } else {
                    setTimeout(function () { console.log(sitUp + "! situps"); }, 18000)
                    setTimeout(function () { console.log("Wow" + name) }, 19000)
                    setTimeout(function () { console.log("You look younger already!") }, 19500)
                    setTimeout(function () { rls.keyInYN("Can you do 6 more?") ? seniorLoop() : quitGame() }, 20500)
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
                    setTimeout(function () { console.log(sitUp + "!") }, 1500)
                } else if (i === 2) {
                    setTimeout(function () { console.log(sitUp + "!") }, 3000)
                } else if (i === 3) {
                    setTimeout(function () { console.log(sitUp + "!") }, 4500)
                } else if (i === 4) {
                    setTimeout(function () { console.log(sitUp + "!") }, 6000)
                } else if (i === 5) {
                    setTimeout(function () { console.log(sitUp + "!") }, 7500)
                } else if (i === 6) {
                    setTimeout(function () { console.log(sitUp + "!") }, 9000)
                } else if (i === 7) {
                    setTimeout(function () { console.log(sitUp + "!") }, 10500)
                } else if (i === 8) {
                    setTimeout(function () { console.log(sitUp + "!") }, 12000)
                } else if (i === 9) {
                    setTimeout(function () { console.log(sitUp + "!") }, 13500)

                } else {
                    setTimeout(function () { console.log(sitUp + " pushups!") }, 15000)
                    setTimeout(function () { console.log("Great job " + name + "!") }, 16000)
                    setTimeout(function () { rls.keyInYN("Another rep?") ? adultLoop() : quitGame() }, 17000)

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

    let answer = rls.keyInYN("Are you ready? ")
    if (answer) {
        for (let i = 1; i <= 10; i++) {
            let sitUp = i
            if (i === 1) {
                setTimeout(function () { console.log(sitUp + "!") }, 1000)
            } else if (i === 2) {
                setTimeout(function () { console.log(sitUp + "!") }, 2000)
            } else if (i === 3) {
                setTimeout(function () { console.log(sitUp + "!") }, 3000)
            } else if (i === 4) {
                setTimeout(function () { console.log(sitUp + "!") }, 4000)
            } else if (i === 5) {
                setTimeout(function () { console.log(sitUp + "!") }, 5000)
            } else if (i === 6) {
                setTimeout(function () { console.log(sitUp + "!") }, 6000)
            } else if (i === 7) {
                setTimeout(function () { console.log(sitUp + "!") }, 7000)
            } else if (i === 8) {
                setTimeout(function () { console.log(sitUp + "!") }, 8000)
            } else if (i === 9) {
                setTimeout(function () { console.log(sitUp + "!") }, 9000)

            } else {
                setTimeout(function () { console.log(sitUp + " pullups!") }, 10000)
                setTimeout(function () { console.log("Great job " + name + "!") }, 11000)
                setTimeout(function () { rls.keyInYN("Another rep?") ? minorLoop() : quitGame() }, 13000)
            }
        }
    } else {
        console.log("Let me know when ")
        quitGame()
    }


}
//Child questionare 

//Quit game and say goodbye 

//setTimeout(function () { }, 2000)

initialQ()

const quitGame = () => {
    //setTimeout(function () {
    rls.keyInYN("Does someone else want to play?") ? initialQ() : console.log("Goodbye!") + process.exit()
    //}, 2000)
}