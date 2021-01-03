const readline = require('readline-sync')
let userName = readline.question("Enter your name: ")

const play = () => {
    console.clear();
    console.log(`Welcome, ${userName}! Would you like to play a text-based Adventure game?
You'll be placed in a difficult hypothetical scenario as a traveler, and you'll need to make the right choices in order to survive.
This game will teach you how to survive in a desert based on real experiences`);

    if (readline.keyInYNStrict("Sound good? ")) {
        startGame();
    } else {
        endGame();
    }
}

const startGame = () => {
    console.clear();
    console.log(`*********** STARTING GAME **********
You are traveling on a small plane across the Sahara desert. Late at night, your plane crashes down 
in the middle of nowhere. You are the only survivor left alone in the dark and you have no way to contact another person.
You realize that the only way to survive is to travel to the nearest town up north.
Time is crucial. The town is far away and you have no choice but to walk on foot through the hot desert.
Do you search for resources in the wrekage first or do you immediately start heading for the local town?`);

    let response;
    while (response !== "search" && response !== "travel") {
        response = readline.question("Type 'Search' or 'Travel':\n");
        response = response.trim().toLowerCase();
    }
    if (response === "travel") {
        console.log("\ntraveling a long distance without any resources was not a smart choice.")
        console.log("It won't be long before you become dehydrated and succumb to your death.")
        gameOver();
    } else {
        selectResources();
    }

}

const selectResources = () => {
    console.log("\nYou find several items to take, including several bottles of water")

    let numOfBottles;

    while (true) {

        numOfBottles = readline.questionInt("How many bottles of water do you take with you on your trip? Enter a number: ");

        if (numOfBottles > 27) {
            console.log(`You can't find ${numOfBottles} bottles of water. Try again: `)
        } else if (numOfBottles > 11) {
            console.log(`You find it too hard to carry ${numOfBottles} bottles of water. Choose again:`);
        } else if (numOfBottles === 1) {
            console.log(`With only a single bottle of water, it's not long before you become dehydrated and eventually die in the hot desert Sun.`);
            gameOver();
        } else if (numOfBottles < 1) {
            console.log("Pick a reasonable number")
        } else if (numOfBottles < 4) {
            console.log(`With only ${numOfBottles} bottles of water, it's not long before you become dehydrated and eventually die in the hot desert Sun.`);
            gameOver();
        } else {
            printItems(numOfBottles);
            navigate();
            break;
        }
    }
}

const printItems = num => {
    console.log("\n+ map\n+ hat\n+ clothes\n+ backpack")
    for (let i = 0; i < num; i++) {
        console.log("+ bottle of water")
    }
    console.log(`\nYou take a map, a hat, some clothes and ${num} bottles of water into a backpack to take with you`)
}

const navigate = () => {
    console.log(`\nYou're ready to travel to your destination. It's dark outside but you have a map.
Do you want to use the map to navigate or do you try using the stars to navigate?`)

    let response;

    while (response !== "map" && response !== "stars") {
        response = readline.question("Type 'Map' or 'Stars'\n");
        response = response.trim().toLowerCase();
    }
    if (response === "map") {
        console.log("\nYou find it too hard to keep looking at the map in the dark to determine your relative position.")
        console.log("You end up going in circles and eventually tire out, going nowhere.")
        gameOver();
    } else {
        console.log("\nYou locate the North star and start traveling north for several hours until the Sun begins to rise");
        rest();
    }

}

const rest = () => {
    console.log("Do you find shade to rest for the morning or do you continue traveling onward in the Sun?")

    let response;

    while (response !== "rest" && response !== "travel") {
        response = readline.question("Type 'Rest' or 'Travel'\n");
        response = response.trim().toLowerCase();
    }
    if (response === "travel") {
        console.log("\nThe heat greatly intensifies in the day. It was not wise to travel in such a poor climate when low on energy.")
        console.log("Finding no refuge against the Sun, you run out of energy and die of a heat stroke.")
        gameOver();
    } else {
        console.log("\nYou go to sleep in the shade to regain energy.");
        console.log("You wake up in the afternoon and are ready to start traveling again.");
        clothes();
    }
}

const clothes = () => {
    console.log("You continue to walk for another day and you start running out of water.")
    console.log("You feel really hot. You consider peeling off some of your clothes to feel more cool.")

    if (readline.keyInYN("Do you take your clothes off? ")) {
        console.log("\nYou take off your long-sleeves shirt and hat and start moving agian.");
        console.log("You feel cool initially but with more exposed skin, you start to sweat quicker.")
        console.log("You get dehydrated faster and get a sunburn. You don't have enough electrolytes to go on.")
        gameOver();
    } else {
        console.log("\nYou keep your clothes on and travel for another day.");
        drink();
    }

}

const drink = () => {

    console.log("You feel thirsty again. In the corner of your eye, you see a cactus plant not too far away");

    if (readline.keyInYNStrict("Do you attempt to get water out of the cactus? ")) {
        console.log("\nDrinking from the cactus can be toxic. You start to feel sick and you begin vomiting.");
        console.log("You've lost too much energy and you feel too weak to carry onward.")
        gameOver();
    } else {
        console.log("\nYou avoid the cactus as you struggle onwards in the hot desert, feeling low on energy");
        food();
    }

}

const food = () => {

    console.log("Your stromach aches for food as you start to become delirious.")
    console.log("You see some dried plants and a few creatures, and you start considering your next meal.")

    let foods = ["Snake", "Scorpion", "Rabbit", "Shrubs", "Nothing"]
    let food;

    while (food === undefined) {
        food = foods[readline.keyInSelect(foods, "Which do you choose to eat? Enter a number: ")];
    }
    console.log(food);
    switch (food) {
        case "Snake":
        case "Rabbit":
            console.log(`\nYou decided to go after the ${food}, but it moves too fast for you.`)
            console.log("You waste too much energy trying to catch it and you eventually faint in the hot desert Sun.")
            gameOver();
            break;
        case "Scorpion":
            console.log("\nYou decided to go after the scorpion, but the scorpion stings you and runs off.")
            console.log("Now hurt and tired, you give up and fall to the ground exhausted, unable to continue.")
            gameOver();
            break;
        case "Shrubs":
            console.log("\nYou go for the safe option and eat the shrubs.")
            console.log("It's dry but it nourishes your strength, and you are able to continue on your journey")
            rain();
            break;
        default:
            console.log("\nYou decided not to eat anything.")
            console.log("You try to go on, but without any energy left, you quickly collapse to the ground.")
            gameOver();
    }

}

const rain = () => {
    console.log("Another day passes by and you notice very heavy and dark clouds moving quickly towards you")
    console.log("Should you find higher ground and wait for the storm to pass by, or do you stay low to get water quicker?")

    let response;
    while (response !== "high" && response !== "low") {
        response = readline.question("Type 'high' to move up, or type 'low' to stay where you are:\n");
        response = response.trim().toLowerCase();
    }
    if (response === "low") {
        console.log("\nRain can be rare in the desert, but when it happens, it can get very heavy, very fast.")
        console.log("You panic as the rain turns to a flash flood and water starts accumulating quickly.")
        console.log("The water raises past your knees and begins to pull you backwards.")
        console.log("You don't have enough energy to fight the movement of the water and you eventually drown.")
        gameOver();
    } else {
        console.log("\nYou wait for the heavy rain to finish and then you go down to drink water.");
        console.log("After rehydrating yourself, you travel for another day until you reach an empty road.")
        road();
    }

}

const road = () => {
    console.log("It's your first sign of civilization, but you see no one on the road and you are almost out of energy")
    console.log("You could wait and hitchhike a vehicle or you could try walking a few more hours to your destination.")

    if (readline.keyInYNStrict("Do you stay and wait for a vehicle to come by?")) {
        console.log("\nYou sit by the road and and wait for a few hours.");
        driver()
    } else {
        console.log("\nWhy try to make it on your own? You continue traveling on the road in the hot climate.");
        console.log("But it's not long before you collapse to the ground due to exhaustion.")
        gameOver();
    }

}

const driver = () => {
    console.log(`A truck finally drives up to you and you step on the road to stop the driver.
You ask the driver for a ride but he speaks a different language and seems hostile to you.
You are completely exhausted as you try to figure a way out of this situation.
You consider fighting the driver and trying to take his vehicle by force,
or you could give him the little money you have left and hope he offers you a ride,
or you could just walk away and try to get to your destination on foot.`);

    let response;

    while (response !== "money" && response !== "fight" && response !== "walk") {
        response = readline.question("What do you choose to do? Type 'fight', 'money' or 'walk'\n");
        response = response.trim().toLowerCase();
    }
    if (response === "fight") {
        console.log("\nYou try to fight the man but you are too weak, so he easily beats you until you collapse.")
        gameOver();
    } else if (response === "walk") {
        console.log("\nYou ignore the driver and try to get to your destination on your own")
        console.log("Trying to do this on your own was a mistake as you immediately collapse due to exhaustion.");
        gameOver();
    } else {
        console.log("\nYou take out whatever money you have and give it to the driver.")
        console.log("The driver understands you and lets you in his vehicle.")
        console.log("Getting help from another person paid off. He drives you right up to your destination!")
        gameOver(true);
    }

}


const gameOver = (win = false) => {
    win ? console.log(`\n*** CONGRATULATIONS ${userName}! YOU WIN! ***\n`) : console.log("\n********** YOU LOSE *********\n");

    if (readline.keyInYNStrict("Would you like to play again?\n")) {
        startGame();
    } else {
        endGame();
    }
}

const endGame = () => {
    console.log("Sorry to see you go.")
    process.exit();
}

play();