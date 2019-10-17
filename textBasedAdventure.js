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

function option2a() {
    let sailOptionsB = readline.question("Do you want to sail NORTH to the Isles of the Abyss or SOUTH to Sunken Cove?: ")
    if (sailOptionsB === "North") {
        console.log("You safely reached the Isles of the Abyss!")
    } else if (sailOptionsB === "South") {
        console.log("After a turbulent trip across the Southern Seas you've arrived at Sunken Cove.")
    }
    console.log("Here you've found a community of rich powerful politicans and royal families partying with the wealth they've collected from poor tax payers.")
    option3a();
}

function option2b() {
    let sailOptionsA = readline.question("Do you want to sail across the BLACK SEAS in search of the buried treasure, or sail to the LAGOON OF DOOM in search of the Isles of Paradise?: ")
    if (sailOptionsA === "Black Seas") {
        console.log("You've hit a storm in the middle of the Black Seas but successfully made it to Tortuga Island where your crew finds a cave full of riches beyond their wildest dreams.")
    } else if (sailOptionsA === "Lagoon of Doom") {
        console.log("It was a long journey and you're almost out of resources but you've successfully battled the great monster of the Lagoon of Doom and have landed on the Isles of Paradise.")
    }
}

function option3a() {
    let thiefOptions = readline.question("You and your crew have just stolen a chest full of gold and jewels from the party; you can't stay here! Do you want to CONTINUE forward on your journey or RETURN to town with your new riches?: ")
    if (thiefOptions === "Continue") {
        console.log("You've chosen to continue on your journey, and kudos to you for it. On your way you've managed to come upon the Lagoon of Doom where, with all of your riches, you were able to settle down and form a small community of the biggest badasses. Enjoy ruling like a King!")
    } else if (thiefOptions === "Return") {
        console.log("You've chosen to return to town. Let's see what we can get ourself into with all these riches.")
        option4a();
    }
}

function option4a() {
    let returnOptions = readline.question("You've just arrived in town and are ready to put these riches to use. Do you want to go to the nearest BROTHEL and see what trouble we can get ourselves into or do you want to GIVE some of these riches back to the tax-ridden townspeople?: ")
    if (returnOptions === "Brothel") {
        console.log("While in the brothel you got into a bar fight and was apprehended by officers. It's back to jail for you. Better luck next time!")
    } else if (returnOptions === "Give") {
        console.log("You've given riches to the poor and they love you for it. You've gained notariety and loyalty among the masses, but you can't stay here. You take to the Black Seas!")
        option5a();
    }
}

function option5a() {
    let blackSeas = readline.question("Sail around & creative pirate paradise vs Find Treasure CONTINUE")
    if (blackSeas === "Sail Around CONTINUE") {
        console.log("CONTINUE")
    } else if (blackSeas === "Find Treasure CONTINUE") {
        console.log("CONTINUE")
        option6a();
    }
}

function option6a() {
    let afterTreasure = readline.question("Sunken Cove vs Return to Town CONTINUE")
    if (afterTreasure === "Sunken Cove CONTINUE") {
        console.log("CONTINUE")
        option7a();
    } else if (afterTreasure === "Return to Town") {
        console.log("CONTINUE")
        option7b();
    }
}

function option7a() {
    console.log("DIES")
}

function option7b() {
    let returnOptions = readline.question("You've just arrived in town and are ready to put these riches to use. Do you want to go to the nearest BROTHEL and see what trouble we can get ourselves into or do you want to GIVE some of these riches back to the tax-ridden townspeople?: ")
    if (returnOptions === "Brothel") {
        console.log("While in the brothel you got into a bar fight and was apprehended by officers. It's back to jail for you. Better luck next time!")
    } else if (returnOptions === "Give") {
        console.log("You've given riches to the poor and they love you for it. You've gained notariety and loyalty among the masses, but you can't stay here. You take to the Black Seas!")
        option8a();
    }    
}

function option8a() {
    console.log("You're the mayor CONTINUE");
}

option1();