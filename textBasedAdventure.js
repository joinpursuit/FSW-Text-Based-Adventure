const readline = require('readline-sync')

let nameInput = readline.question("Enter your name: ")

console.log(`Hello ${nameInput}!  Welcome to my game.`)

// // Adjectives for Alliteration Pirate Name
// nameObj = {
//     A : "Adventurous",
//     B : ,
//     C : ,
//     D : ,
//     E : ,

// }

console.log("The Great Pirate alliterationName. How does it feel to be a free man? After 30 days in jail I'm sure you're ready to breath some salty air again? Good luck getting your ship back.")

let dockOptions = readline.question("You see your crew with a new captain at the docks. Do you STEAL your ship back like the true pirate you are, or BUY your ship back like the true captain you are?: ")

//Option#1 buy or steal
if (dockOptions === "buy") {
    console.log("Like a true captain you've bought your ship back with some hidden spoils stashed in town and therefore, in addition, keep your trusty crew.")
} else if (dockOptions === "steal") {
    console.log("Like a true pirate you've stolen your ship back and therefore lost a large portion of the crew.")
}

console.log("It's been several weeks since you've been on the water, it's about time you set sail.")

//Option#2a steal(Black Seas or Lagoon of Doom)
if (dockOptions === "steal") {
    let sailOptions = readline.question("Do you want to sail across the BLACK SEAS in search of the buried treasure, or sail to the LAGOON OF DOOM in search of the Isles of Paradise?: ")
    if (sailOptions === "Black Seas") {
        console.log("You've hit a storm in the middle of the Black Seas but successfully made it to Tortuga Island where your crew finds a cave full of riches beyond their wildest dreams.")
    } else if (sailOptions === "Lagoon of Doom") {
        console.log("It was a long journey and you're almost out of resources but you've successfully battled the great monster of the Lagoon of Doom and have landed on the Isles of Paradise.")
    }
}
//Option#2b buy(North or South)
if (dockOptions === "buy") {
    let sailOptions = readline.question("Do you want to sail NORTH to the Isles of the Abyss or SOUTH to Sunken Cove?: ")
    if (sailOptions === "North") {
        console.log("You've reached the Isles of the Abyss where you and your crew discover COMPLETE NARRATIVE")
    } else if (sailOptions === "South") {
        console.log("COMPLETE NARRATIVE")
    }
    console.log("Here you've found a community of rich powerful politicans and royal families partying with the wealth they've collected from poor tax payers.")
}

//Option#3a
if (sailOptions === "Black Seas") {
    let sailOptions = readline.question("")
}