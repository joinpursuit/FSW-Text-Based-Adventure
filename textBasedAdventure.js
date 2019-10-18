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
} else if (ageInput >= 65 && ageInput < 110){
    console.log(`Wow ${nameInput}, I see you're of a golden age`)
} else {
    console.log('Does not compute, please try again.')
    ageInput = readline.question(`How old are you ${nameInput}?: `)
}


// Team choice
// let teamLight = 
// let teamDark = 

let teamChoice = readline.question(`Would you like the path of Light (enter 1) or to walk the Roads of Night (enter 2): `)
if(teamChoice = 1){
console.log('Your weapon is a sword. Your protection is armor.')
} else if (teamChoice = 2){
console.log('Your weapon is a spear. Your protection is a shield.')
}
    
let team1 = 1
let team2 = 2
if(team1){
     console.log('Welcome to the Light. We must defeat the darkness once and for all to keep balance between the realms')
    //  readline.question('What would your first act of peace be: ')
} else if (team2){
    console.log('Welcome to the Darkness. You are more powerful than our light adversary. To war we go!')
    // readline.question('What would your first act of war be: ')
    }
