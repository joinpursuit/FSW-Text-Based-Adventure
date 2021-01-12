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
            setTimeout(function () { console.log("Let's do some squats.") }, 1000)
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
                    answer = rls.question("\n Can I ask you more about your diet?\n Type 'sure' for yes \n else type something random \n if you are giving up on life. ")
                    if (answer === 'sure') {
                        diet()
                    } else {
                        console.log("No worries") + quitGame()
                    }
                }
            }, 2000)
        } else {
            console.log("That is a good but you probably consume other saturated fats.")
            setTimeout(function () {
                answer = rls.question("\n Can I ask you more about your diet?\n Type 'sure' for yes \n else type something random \n if you are giving up on life. ")
                if (answer === 'sure') {
                    diet()
                } else {
                    console.log("No worries") + quitGame()
                }
            }, 2000)
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
    let squats = rls.questionInt("How many squats do you want to do in this rep? ")
    let onePush = 1000 * (rls.questionInt("How many seconds per a squat? "))
    if (((squats * onePush) / 1000) === 1) {
        console.log(`You have ${(squats * onePush) / 1000} second to do ${squats} squat!`)
    } else if (squats === 0 || onePush === 0) {
        console.log("This will be quick")
    } else {
        console.log(`You have ${(squats * onePush) / 1000} seconds to do ${squats} squats!`)
    }
    setTimeout(function () {
        let answer = rls.keyInYNStrict("Are you ready? ")
        if (answer) {
            for (let i = 1; i <= squats; i++) {
                setTimeout(function () { console.log(i + "!") }, (i * onePush))
            }
            setTimeout(function () { rls.keyInYNStrict(`Wow ${name}!\nWould you like to do some more?`) ? seniorLoop() : console.log(`You did great ${name}!\nYou look younger already.`) + quitGame() }, ((squats * onePush) + onePush))

        } else {
            rls.keyInYNStrict("Do you want to try again?") ? seniorLoop() : quitGame()
        }
    }, 1000)

}
//Adult exercise loop 
const adultLoop = () => {

    let pushups = rls.questionInt("How many push ups do you want to do in this rep? ")
    let onePush = 1000 * (rls.questionInt("How many seconds per a push-up? "))
    if (((pushups * onePush) / 1000) === 1) {
        console.log(`You have ${(pushups * onePush) / 1000} second to do ${pushups} push-up!`)
    } else if (pushups === 0 || onePush === 0) {
        console.log("This will be quick")
    } else {
        console.log(`You have ${(pushups * onePush) / 1000} seconds to do ${pushups} push-ups!`)
    }
    setTimeout(function () {
        let answer = rls.keyInYNStrict("Are you ready? ")
        if (answer) {
            for (let i = 1; i <= pushups; i++) {
                setTimeout(function () { console.log(i + "!") }, (i * onePush))
            }
            setTimeout(function () { rls.keyInYNStrict("Another rep?") ? adultLoop() : quitGame() }, ((pushups * onePush) + onePush))

        } else {
            rls.keyInYNStrict("Do you want to try again?") ? adultLoop() : console.log(`You did great ${name}!\nNow get back to your job.`) + quitGame()
        }
    }, 1000)

}
//Minor exercise loop 
const minorLoop  = () => {  
    let pullUps = rls.questionInt("How many pull-ups do you want to do in this rep? ")
    let onePush = 1000 * (rls.questionInt("How many seconds per a pull-up? "))
    if (((pullUps * onePush) / 1000) === 1) {
        console.log(`You have ${(pullUps * onePush) / 1000} second to do ${pullUps} pull-up!`)
    } else if (pullUps === 0 || onePush === 0) {
        console.log("This will be quick")
    } else {
        console.log(`You have ${(pullUps * onePush) / 1000} seconds to do ${pullUps} pull-ups!`)
    }
    setTimeout(function () {
        let answer = rls.keyInYNStrict("Are you ready? ")
        if (answer) {
            for (let i = 1; i <= pullUps; i++) {
                setTimeout(function () { console.log(i + "!") }, (i * onePush))
            }
            setTimeout(function () { rls.keyInYNStrict(`Wow ${name}!\nWould you like to do some more?`) ? minorLoop () : console.log(`${name}, you are young\nThis was expected.\nYou will need to do more reps to impress me.`) + quitGame() }, ((pullUps * onePush) + onePush))

        } else {
            rls.keyInYNStrict("Do you want to try again?") ? minorLoop () : quitGame()
        }
    }, 1000)
}

//Quit game and say goodbye 

initialQ()

const quitGame = () => {
    //setTimeout(function () {
    rls.keyInYNStrict("Does someone else want to play?") ? initialQ() : console.log("Goodbye!") + process.exit()
    //}, 2000)
}