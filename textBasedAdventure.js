const readline = require('readline-sync')

let nameInput = readline.question("Enter your name: ")

console.log(`Hello ${nameInput}!  Welcome to my game.`)
console.log(`In this game, we will be...`)


// Get to know user and build rapport
let ageInput = readline.question(`How old are you ${nameInput}?: `)
if(ageInput <= 19){
    console.log(`Hey ${nameInput}, just missed the 90s by the hair of your nose.`)
} else if (ageInput > 19 && ageInput < 65){
    console.log(`That is a brilliant age ${nameInput}`)
    console.clear()
} else if (ageInput >= 65 && ageInput < 110){
    console.log(`Wow ${nameInput}, I see you're of a golden age`)
    console.clear()
} else {
    console.log('Does not compute, please try again.')
    ageInput = readline.question(`How old are you ${nameInput}?: `)
}


let teamLight = 'Your weapon is a sword. Your protection is armor.'
let teamDark = 'Your weapon is a spear. Your protection is a shield.'
// Team choice
let teamChoice = readline.question(`Would you like the path of Light (enter 1) or to walk the Roads of Night (enter 2): `)
if (teamChoice === 1){
    console.log(teamLight)
} else {
    console.log(teamDark)
}



// let colorInput = readline.question('What color would you like (please only use one): ')
// if (colorInput === 'blue' || colorInput=== 'red' || colorInput === 'orange' || colorInput === 'yellow' || colorInput === 'white' || colorInput === 'green' || colorInput === 'pink'){
//     console.log('You are Team Light' + teamLight)
// } else if (colorInput === 'purple' || colorInput === 'black' || colorInput === 'grey' || colorInput === 'brown' || colorInput === 'gray'){
//     console.log('You Team Dark' + teamDark)
// }else {
//         console.log('Your color taste it too exquisite for our game. Please try again.')
//         //readline.question('What color would you like (please only use one): ')
//     }



 let team1 = teamLight
 let team2 = teamDark
 

if(team1){
     console.log('Welcome to the Light. We must defeat the darkness once and for all to keep balance between the realms')
     readline.question('What would your first act of peace be: ')
} else{
    console.log('Welcome to the Darkness. You are more powerful than our light adversary. To war we go!')
    readline.question('What would your first act of war be: ')
}
