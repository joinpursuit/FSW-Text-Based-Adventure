// const readline = require('readline-sync')

// let nameInput = readline.question("Enter your name: ")

// console.log(`Hello ${nameInput}!  Welcome to my game, Survive.`)


// const play = () => {
//     let userInput;
//     while (userInput !== "yes") {
//         userInput = readline.question("Would you like to play? yes or no?")
//         if (userInput === "no") {
//             console.log("Come on, it's just one game...")
//             userInput = readline.question("Are you going to play? okay or no?")
//             break;
//         } else {
//             console.log("Glad I could convince you.")
//         }
//     }
// }
// play()

// readline.question("This is a game of survival where your choices will determine your future. Are you ready to fight for your life? yes or no?")

// console.log(`${nameInput}, you are a skilled Air Marshall who has served a decade in the Army Special Forces.You are currently transporting a high-priority prisoner to an underground facility on a commercial flight. Word reaches you that there is a bomb on the plane.`) 

// const bomb = () => {
//     let userInput = readline.question("What do you do? alert the passengers or search for bomb?")
//     if (userInput === "alert the passengers") {
//         console.log("Panic breaks out in the cabin and the plane becomes unstable. In the commotion, your prisoner escapes to the bathroom.")
//         readline.question("Do you...ease panic or get prisoner?")
//     } else if (userInput === "search for bomb") {
//         console.log("You locate the bomb in the cargo compartment. You have 30 minutes before detonation.")
//         readline.question("Do you...defuse the bomb or call for back-up?")
//     }
// }
// bomb()

// const panic = () => {
//     let userInput = readline.question("")
//     if (userInput === "ease panic") {
//         console.log("Plane stabilizes.")
//         readline.question("Do you...search for bomb or get prisoner?")
//     } else if (userInput === "get prisoner") {
//         console.log("Prisoner jumps you from the bathroom and manages to steal your firearm.")
//         readline.question("Do you...disarm the prisoner or surrender?")
//     }
// }
// panic()

// const search = () => {
//     let userInput = readline.question("")
//     if (userInput === "defuse bomb") {
//         console.log("You have no background in Explosive Ordnance Disposal. You set the bomb off and everyone dies!")
//         readline.question("Enter your name:")
//     } else if (userInput === "call for back-up") {
//         console.log("Homeland Security assists on call with instructions to defuse the bomb. It's a success! The bomb is now deactivated!")
//     }
// }
// search()


const readline = require('readline-sync')
let nameInput = readline.question("Enter your name: ")
console.log("Hello " + nameInput + " !  Welcome to my game, Survive.")
const play = () => {
   let userInput;
   while (userInput !== "yes") {
       userInput = readline.question("Would you like to play? yes or no?")
       if (userInput === "no") {
           console.log("Come on, it's just one game...")
           userInput = readline.question("Are you going to play? okay or no?")
           break;
       } else {
           console.log("Glad I could convince you.")
       }
   }
   play()
}
readline.question("This is a game of survival where your choices will determine your future. Are you ready to fight for your life? yes or no?")
console.log(nameInput + " you are a skilled Air Marshall who has served a decade in the Army Special Forces.You are currently transporting a high-priority prisoner to an underground facility on a commercial flight. Word reaches you that there is a bomb on the plane.")
const bomb = () => {
   let userInput = readline.question("What do you do? alert the passengers or search for bomb?")
   if (userInput === "alert the passengers") {
       console.log("Panic breaks out in the cabin and the plane becomes unstable. In the commotion, your prisoner escapes to the bathroom.")
       readline.question("Do you...ease panic or get prisoner?")
   } else if (userInput === "search for bomb") {
       console.log("You locate the bomb in the cargo compartment. You have 30 minutes before detonation.")
       readline.question("Do you...defuse the bomb or call for back-up?")
   }
}
bomb()
const panic = () => {
   let userInput = readline.question("")
   if (userInput === "ease panic") {
       console.log("Plane stabilizes.")
       userInput = readline.question("Do you...search for bomb or get prisoner?")
   } else if (userInput === "get prisoner") {
       console.log("Prisoner jumps you from the bathroom and manages to steal your firearm.")
       userInput = readline.question("Do you...disarm the prisoner or surrender?")
   }
   panic()
}
const search = () => {
   let userInput = readline.question("")
   if (userInput === "defuse bomb") {
       console.log("You have no background in Explosive Ordnance Disposal. You set the bomb off and everyone dies!")
       userInput = readline.question("Enter your name:")
   } else if (userInput === "call for back-up") {
       console.log("Homeland Security assists on call with instructions to defuse the bomb. It's a success! The bomb is now deactivated!")
   }
   search()
}


