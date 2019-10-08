const readline = require('readline-sync')

let nameInput = readline.question("Enter your name: ")

console.log(`Hello ${nameInput}!  Welcome to my game.`)


// Get to know user and build rapport
let ageInput = readline.question(`How old are you ${nameInput}?: `)
if(ageInput <= 19){
    console.log(`Hey ${nameInput}, just missed the 90s by the hair of your nose.`)
} else if (ageInput > 19 && ageInput < 65){
    console.log(`That is a brilliant age ${nameInput}`)
} else if (ageInput >= 65 && ageInput < 110){
    console.log(`Wow ${nameInput}, I see you're of a golden age`)
} else {
    console.log('Does not compute, please try again.')
    ageInput = readline.question(`How old are you ${nameInput}?: `)
}

// Team choice based on color preference
let colorInput = readline.question('What color would you like (please only use one): ')
    if (colorInput === 'blue' || colorInput=== 'red' || colorInput === 'orange' || colorInput === 'yellow' || colorInput === 'white' || colorInput === 'green' || colorInput === 'pink'){
        console.log('You are Team Light')
        let teamLight = 'Your weapon is a sword. Your protection is armor.'
        console.log(teamLight)
    } else if (colorInput === 'purple' || colorInput === 'black' || colorInput === 'grey' || colorInput === 'brown' || colorInput === 'gray'){
        console.log('You Team Dark')
        let teamDark = 'Your weapon is a spear. Your protection is a shield.'
        console.log(teamDark)
    } else {
        console.log('Your color taste it too exquisite for our game. Please try again.')
        readline.question('What color would you like (please only use one): ')
    }    


