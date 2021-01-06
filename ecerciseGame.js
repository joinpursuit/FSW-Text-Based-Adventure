const rls = require("readline-sync")

let name = " "
let age = " "
//initial question to exercise or not. 

const initialQ = () => {
    name = rls.question("Hi!\nWhat's your name? ")
    setTimeout(function () { console.log("Hi " + name + ". Nice to meet you!") }, 300)

    setTimeout(function () { rls.keyInYNStrict("Would you like to exercise?") ? exerciseGame() : shameQandA() }, 1300)

}
//exercise game
// ask some questions about age 
//determine what loop or option is right for the user
const exerciseGame = () => {
    console.log("Good choice.")
    age = rls.question("What's your age? \n")
    setTimeout(function () {
        if (age >= 65) {
            console.log("My elder.")
            setTimeout(function () { console.log("Let's do some sit-ups.") }, 1000)
            setTimeout(function () { seniorLoop() }, 2000)

        } else if (age >= 21) {
            console.log("You're an adult.")
            setTimeout(function () { console.log("Let's do some quick push-ups.") }, 1000)
            setTimeout(function () { adultLoop() }, 2000)
        }
        else if (age >= 13) {
            console.log("Youngen.")
            setTimeout(function () { console.log("Lets see how many pull-ups you can do.") }, 800)
            setTimeout(function () { minorLoop() }, 3000)

        } else if (age >= 5) {
            console.log("You're just a kid.")
            setTimeout(function () { console.log("Join a little league team.") }, 2000)
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
        let answer = rls.keyInYNStrict("Do you eat at McDonalds?")
        if (answer) {
            console.log("Ok.... Hmmm")
            setTimeout(function () {
                fastFoodNumber = rls.questionInt("How many times a week do you eat fast food? ")
                if (fastFoodNumber >= 10) {
                    setTimeout(function () { console.log(name + "! You are going to die young.") }, 100)
                    setTimeout(function () { quitGame() }, 4000)

                } else {
                    



                   answer = rls.question("Can I ask you more about your diet?\nType 'sure' if you would like to else type anything to quit ")
                        if (answer === 'sure') {
                            diet()
                        } else {
                            console.log("No worries") + quitGame()

                        }
                    


                }
            }, 2000)

        } else {
            console.log("That is a good but you probably consume other saturated fats.")
            setTimeout(function () {rls.keyInYNStrict("Can I ask you more about your diet?") ? diet() : console.log("No worries") + quitGame()}, 2000)
        }
    }, 4000)
}
//diet q and a
const diet = () => {
    typeOfFood = ['Meat', 'Fish', 'Vegetable', 'Fruit', 'Pasta', 'Rice', 'Potatoes']
    typeOfFood[-1] = ['no food']
    index = rls.keyInSelect(typeOfFood, 'Which food do you like the most?')
    if (index === -1) {
        console.log("You chose to cancel.")
        setTimeout(function () { console.log("Have a nice day " + name + ".") }, 1500)
        setTimeout(function () { quitGame() }, 2500)

    } else {
        console.log('Im happy you like ' + typeOfFood[index])
        setTimeout(function () { console.log(name + "! You have somewhat of a chance in life.") }, 1500)
        setTimeout(function () { quitGame() }, 2500)
    }
}
//Senior exercise loop 
const seniorLoop = () => {
    setTimeout(function () {
        let answer = rls.keyInYNStrict("Are you ready? ")
        if (answer) {
            for (let i = 1; i <= 6; i++) {
                let sitUp = i
                if (i === 1) {
                    setTimeout(function () { console.log(sitUp + "! sit-up") }, 3000)

                } else if (i === 2) {
                    setTimeout(function () { console.log(sitUp + "!") }, 6000)

                } else if (i === 3) {
                    setTimeout(function () { console.log(sitUp + "! sit-ups") }, 9000)
                } else if (i === 4) {
                    setTimeout(function () { console.log(sitUp + "!") }, 12000)


                } else if (i === 5) {
                    setTimeout(function () { console.log(sitUp + "!") }, 15000)
                } else {
                    setTimeout(function () { console.log(sitUp + "! sit-ups"); }, 18000)
                    setTimeout(function () { console.log("Wow" + name) }, 19000)
                    setTimeout(function () { console.log("You look younger already!") }, 19500)
                    setTimeout(function () { rls.keyInYNStrict("Can you do 6 more?") ? seniorLoop() : quitGame() }, 20500)
                }
            }
        } else {
            rls.keyInYNStrict("Do you want to quit?") ? quitGame() : console.log("Great"), setTimeout(function () { seniorLoop() }, 650)
        }
    }, 1000)
}
//Adult exercise loop 
const adultLoop = () => {
    setTimeout(function () {
        let answer = rls.keyInYNStrict("Are you ready? ")
        if (answer) {
            for (let i = 1; i <= 10; i++) {
                let pushUp = i
                if (i === 1) {
                    setTimeout(function () { console.log(pushUp + "!") }, 1500)
                } else if (i === 2) {
                    setTimeout(function () { console.log(pushUp + "!") }, 3000)
                } else if (i === 3) {
                    setTimeout(function () { console.log(pushUp + "!") }, 4500)
                } else if (i === 4) {
                    setTimeout(function () { console.log(pushUp + "!") }, 6000)
                } else if (i === 5) {
                    setTimeout(function () { console.log(pushUp + "!") }, 7500)
                } else if (i === 6) {
                    setTimeout(function () { console.log(pushUp + "!") }, 9000)
                } else if (i === 7) {
                    setTimeout(function () { console.log(pushUp + "!") }, 10500)
                } else if (i === 8) {
                    setTimeout(function () { console.log(pushUp + "!") }, 12000)
                } else if (i === 9) {
                    setTimeout(function () { console.log(pushUp + "!") }, 13500)

                } else {
                    setTimeout(function () { console.log(pushUp + "! push-ups") }, 15000)
                    setTimeout(function () { console.log("Great job " + name + "!") }, 16000)
                    setTimeout(function () { rls.keyInYNStrict("Another rep?") ? adultLoop() : quitGame() }, 17000)

                }
            }
        } else {

            rls.keyInYNStrict("Do you want to quit?") ? quitGame() : console.log("Great"), setTimeout(function () { adultLoop() }, 650)

        }
    }, 1000)

}
//Minor exercise loop 
const minorLoop = () => {

    let answer = rls.keyInYNStrict("Are you ready? ")
    if (answer) {
        for (let i = 1; i <= 10; i++) {
            let pullUp = i
            if (i === 1) {
                setTimeout(function () { console.log(pullUp + "!") }, 1000)
            } else if (i === 2) {
                setTimeout(function () { console.log(pullUp + "!") }, 2000)
            } else if (i === 3) {
                setTimeout(function () { console.log(pullUp + "!") }, 3000)
            } else if (i === 4) {
                setTimeout(function () { console.log(pullUp + "!") }, 4000)
            } else if (i === 5) {
                setTimeout(function () { console.log(pullUp + "!") }, 5000)
            } else if (i === 6) {
                setTimeout(function () { console.log(pullUp + "!") }, 6000)
            } else if (i === 7) {
                setTimeout(function () { console.log(pullUp + "!") }, 7000)
            } else if (i === 8) {
                setTimeout(function () { console.log(pullUp + "!") }, 8000)
            } else if (i === 9) {
                setTimeout(function () { console.log(pullUp + "!") }, 9000)

            } else {
                setTimeout(function () { console.log(pullUp + "! pull-ups") }, 10000)
                setTimeout(function () { console.log("Great job " + name + "!") }, 11000)
                setTimeout(function () { rls.keyInYNStrict("Another rep?") ? minorLoop() : quitGame() }, 13000)
            }
        }
    } else {
        rls.keyInYNStrict("Do you want to quit?") ? quitGame() : console.log("Great"), setTimeout(function () { minorLoop() }, 650)

    }
}

//Quit game and say goodbye 

initialQ()

const quitGame = () => {
    //setTimeout(function () {
    rls.keyInYNStrict("Does someone else want to play?") ? initialQ() : console.log("Goodbye!") + process.exit()
    //}, 2000)
}