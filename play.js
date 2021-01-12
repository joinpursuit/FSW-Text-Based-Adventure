const rls = require("readline-sync")
let name = "damien"
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
minorLoop ()
const quitGame = () => {
    console.log("goodbye")
    process.exit()
}