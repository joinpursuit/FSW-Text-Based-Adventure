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
    J : "Jackal",
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
    if (dockOptions.toLowerCase() === "buy") {
        console.log("Like a true captain you've bought your ship back with some hidden spoils stashed in town and therefore, in addition, keep your trusty crew.")
        option2a();
    } else if (dockOptions.toLowerCase() === "steal") {
        console.log("Like a true pirate you've stolen your ship back and therefore lost a large portion of the crew.")
        option2b();
    }
}

console.log("It's been several weeks since you've been on the water, it's about time you set sail.")

function option2a() {
    let sailOptionsB = readline.question("Do you want to sail NORTH to the Isles of the Abyss or SOUTH to Sunken Cove?: ")
    switch (sailOptionsB.toLowerCase()) {
        case "north":
            console.log("You safely reached the Isles of the Abyss!")
            break;
        case "south":
            console.log("After a turbulent trip across the Southern Seas you've arrived at Sunken Cove.")
            break;
    }
    // if (sailOptionsB === "North") {
    //     console.log("You safely reached the Isles of the Abyss!")
    // } else if (sailOptionsB === "South") {
    //     console.log("After a turbulent trip across the Southern Seas you've arrived at Sunken Cove.")
    // }
    console.log("Here you've found a community of rich powerful politicans and royal families partying with the wealth they've collected from poor tax payers.")
    option3a();
}

function option2b() {
    let sailOptionsA = readline.question("Do you want to sail across the BLACK SEAS in search of the buried treasure, or sail to the LAGOON OF DOOM in search of the Isles of Paradise?: ")
    if (sailOptionsA.toLowerCase() === "black seas") {
        console.log("You've hit a storm in the middle of the Black Seas but successfully made it to Tortuga Island where your crew finds a cave full of riches beyond their wildest dreams.")
        option3b();
    } else if (sailOptionsA.toLowerCase() === "lagoon of doom") {
        console.log("It was a long journey and you're almost out of resources but you've successfully battled the great monster of the Lagoon of Doom and have landed on the Isles of Paradise.")
        option3c();
    }
}

function option3a() {
    let thiefOptions = readline.question("You and your crew have just stolen a chest full of gold and jewels from the party; you can't stay here! Do you want to CONTINUE forward on your journey or go BACK to town with your new riches?: ")
    if (thiefOptions.toLowerCase() === "continue") {
        console.log("You've chosen to continue on your journey, and kudos to you for it. On your way you've managed to come upon the Lagoon of Doom where, with all of your riches, you were able to settle down and form a small community of the biggest badasses. Enjoy ruling like a King!")
    } else if (thiefOptions.toLowerCase() === "back") {
        console.log("You've chosen to return to town. Let's see what we can get ourself into with all these riches.")
        option4a();
    }
}

function option3b() {
    let treasOptions = readline.question("You've just discovered a cave full of treasure! Do you want to CONTINUE sailing or go BACK to town with your new riches?: ")
    if (treasOptions.toLowerCase() === "continue") {
        console.log("You've chosen to continue on your journey, and kudos to you for it. On your way you've managed to come upon the Lagoon of Doom where, with all of your riches, you were able to settle down and form a small community of the biggest badasses. Enjoy ruling like a King!")
    } else if (treasOptions.toLowerCase() === "back") {
        console.log("You've chosen to return to town. Let's see what we can get ourselves into with all these riches.")
        option4a();
    }
}

function option3c() {
    let islesOptions = readline.question("You've found a community of pirates and won a few hands at a game of cards. You now have your resources and funds replenished. Do you want to STAY on the Isles of Paradise or go BACK to town with your new riches?: ")
    if (islesOptions.toLowerCase() === "stay") {
        console.log("You've decided to live in Pirates Paradise and retire away on a hammock.")
    } else if (islesOptions.toLowerCase() === "back") {
        console.log("You've chosen to return to town. Let's see what we can get ourselves into with all these riches.")
        option4a();
    }
}

function option4a() {
    let returnOptions = readline.question("You've just arrived in town and are ready to put these riches to use. Do you want to go to the nearest BROTHEL and see what trouble we can get ourselves into or do you want to GIVE some of these riches back to the tax-ridden townspeople?: ")
    if (returnOptions.toLowerCase() === "brothel") {
        console.log("While in the brothel you got into a bar fight and was apprehended by officers. It's back to jail for you. Better luck next time!")
    } else if (returnOptions.toLowerCase() === "give") {
        console.log("You've given riches to the poor and they love you for it. You've gained notariety and loyalty among the masses, but you can't stay here. You take to the Black Seas!")
        option5a();
    }
}

function option5a() {
    let blackSeas = readline.question("You've reached the Black Seas, do you want to sails towards SUNKEN COVE or continue to EXPLORE the Black Seas?: ")
    if (blackSeas.toLowerCase() === "sunken cove") {
        console.log("You've hit a storm in the middle of the Black Seas and was consumed by the great monster of the Lagoon of Doom.")
        option7a();
    } else if (blackSeas.toLowerCase() === "explore") {
        console.log("You've hit a storm in the middle of the Black Seas but successfully made it to Tortuga Island where your crew finds a cave full of riches beyond their wildest dreams.")
        option6a();
    }
}

function option6a() {
    let afterTreasure = readline.question("Do you want to take your riches and head to SUNKEN COVE or go BACK to town with your new riches?: ")
    if (afterTreasure.toLowerCase() === "sunken cove") {
        console.log("You've hit a storm in the middle of the Black Seas and was consumed by the great monster of the Lagoon of Doom.")
        option7a();
    } else if (afterTreasure.toLowerCase() === "back") {
        console.log("You've chosen to return to town. Let's see what we can get ourself into with all these riches.")
        option7b();
    }
}

function option7a() {
    let transportOption = readline.question("You decide to use your riches to pay the monster of the Lagoon of Doom to release you and your crew. Do you give him: (1) - Four of your largest diamonds, (2) - Two treasure chests full of pure gold jewels, (3) - Six rubies and a rare pearl, (4) - All of your treasure!: ")
    switch (transportOption) {
        case "1":
            console.log("The monster has transported you back to the docks!")
            option1();
            break;
        case "2":
            console.log("The monster has transported you back to your ship!")
            option2a();
            break;
        case "3":
            console.log("The monster has transported you back to your ship!")
            option2b();
            break;
        case "4":
            console.log("The monster has transported you to Tortuga Island!")
            option3b();
    }

}

function option7b() {
    let returnOptions = readline.question("You've just arrived in town and are ready to put these riches to use. Do you want to go to the nearest BROTHEL and see what trouble we can get ourselves into or do you want to GIVE some of these riches back to the tax-ridden townspeople?: ")
    if (returnOptions.toLowerCase() === "brothel") {
        console.log("While in the brothel you got into a bar fight and was apprehended by officers. It's back to jail for you. Better luck next time!")
    } else if (returnOptions.toLowerCase() === "give") {
        console.log("You've given riches to the poor and they love you for it. You've gained notariety and loyalty among the masses.")
        option8a(nameInput, nameObj);
    }    
}

function option8a(name, object) {
    for (let key in object) {
        if (name[0] === key)
        console.log(`The townspeople have decided to overthrow the greedy politicians and now you're The Great Mayor ${object[key]} ${name}. Hooray!`);
    }
    let replayOption = readline.question("Would you like to play again? YES or NO: ")
    while (replayOption.toLowerCase() === "yes") {
        option1();
    }
}

option1();