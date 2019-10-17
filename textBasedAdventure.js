const readline = require('readline-sync')

let nameInput = readline.question("Enter your name: ")

//console.log(`Hello ${nameInput}!  Welcome to my game.`)

// Adjectives for Alliteration Pirate Name
let nameObj = {
    A : "Adventurous",
    B : "Bandit",
    C : "Cruel",
    D : "Daring",
    E : "Eye Patch",
    F : "Fearsome",
    G : "Greedy",
    H : "Hurricane",
    I : "Infamous",
    J : "",
    K : "King",
    L : "Lawless",
    M : "Menace",
    N : "Notorious",
    O : "Outcast",
    P : "Pistol",
    Q : "QuestMaster",
    R : "Ransack",
    S : "Scalawag",
    T : "Trecherous",
    U : "Unlawful",
    V : "Vandal",
    W : "Wicked",
    X : "",
    Y : "Young",
    Z : "",
}
function hello(name, object) {
    for (let key in object) {
        if (name[0] === key)
        console.log(`The Great Pirate ${object[key]} ${name}. How does it feel to be free? After 30 days in jail I'm sure you're ready to breathe some salty air again? Good luck getting your ship back.`)
    }
}

hello(nameInput, nameObj);

function option1() {
    let dockOptions = readline.question("You see your crew with a new captain at the docks. Do you STEAL your ship back like the true pirate you are, or BUY your ship back like the true captain you are?: ")
    if (dockOptions === "buy") {
        console.log("Like a true captain you've bought your ship back with some hidden spoils stashed in town and therefore, in addition, keep your trusty crew.")
        option2a();
    } else if (dockOptions === "steal") {
        console.log("Like a true pirate you've stolen your ship back and therefore lost a large portion of the crew.")
        option2b();
    }
}

console.log("It's been several weeks since you've been on the water, it's about time you set sail.")

function option2b() {
    let sailOptionsA = readline.question("Do you want to sail across the BLACK SEAS in search of the buried treasure, or sail to the LAGOON OF DOOM in search of the Isles of Paradise?: ")
    if (sailOptionsA === "Black Seas") {
        console.log("You've hit a storm in the middle of the Black Seas but successfully made it to Tortuga Island where your crew finds a cave full of riches beyond their wildest dreams.")
    } else if (sailOptionsA === "Lagoon of Doom") {
        console.log("It was a long journey and you're almost out of resources but you've successfully battled the great monster of the Lagoon of Doom and have landed on the Isles of Paradise.")
    }
}

//Option#2a steal(Black Seas or Lagoon of Doom)
//Option#2b buy(North or South)
function option2a() {
    let sailOptionsB = readline.question("Do you want to sail NORTH to the Isles of the Abyss or SOUTH to Sunken Cove?: ")
    if (sailOptionsB === "North") {
        console.log("You've reached the Isles of the Abyss where you and your crew discover COMPLETE NARRATIVE")
    } else if (sailOptionsB === "South") {
        console.log("COMPLETE NARRATIVE")
    }
    console.log("Here you've found a community of rich powerful politicans and royal families partying with the wealth they've collected from poor tax payers.")
}

//Option#3a
// if (sailOptions === "Black Seas") {
//     let seasOptions = readline.question("COMPLETE NARRATIVE")
// } else if (sailOptions === "Lagoon of Doom") {
//     let lagoonOptions = readline.question("COMPLETE NARRATIVE")
// }

//Option#3b
// if (sailOptionsB === "North" || sailOptionsB === "South") {
//     let thiefOptions = readline.question("Do you want to CONTINUE on your journey or STEAL from these greedy selfish royals and corrupt politicians?: ")
// }

// if (thiefOptions === "Continue") {
//     console.log("COMPLETE NARRATIVE")
// } else if (thiefOptions === "Steal") { 
//     console.log("COMPLETE NARRATIVE")
// }

option1();