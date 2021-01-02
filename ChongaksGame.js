const readLineSync = require("readLine-sync");



const play = () => {
    console.log("Are you ready to take on Chongaks the corruptor?");
    console.log("He is one of the four Old Gods,");
    console.log("malefic beings that were sequestered by the titans during the primordial ages.");
    console.log("Until the events from the old war, Chongaks has remained dorment.");
    console.log("Now he has as awoken and has promised to corrupt the minds of everyone to bend their minds to his will!");
    if(readLineSync.keyInYN("Will you help us in the fight against Chongaks?")) {
        console.log("As long as we work together Chongaks will fall!")
        startGame();
    } else {
        console.log("WHAT!? Coward! How could you say no!? Fine get out of here!")
    }
}


const gameOver = (playerWin) => {
    if(readLineSync.keyInYN("Would you like to try again?")) {
        console.clear();
        play();
        
        
    } else {
        leaveGame();
    }
    
}

const weaponsChoice = (weapons) => {
    
    while(weapons !== "longsword" && weapons !== "battle axe" && weapons !== "spear") {
        console.log("");
        console.log("longsword");
        console.log("battle axe");
        console.log("spear");
        weapons = readLineSync.question("Which weapon will you take with you to fight? \n");
        weapons = weapons.trim().toLowerCase()
        
    } 
    switch (weapons){
        case "longsword":
        console.log("")
        console.log("A longsword, a bladed melee weapon intended for cutting or thrusting, good choice.");
        break;
        case "battle axe":
        console.log("")
        console.log("A battle axe, a weapon with a crescent-shaped head this will leave devastating wounds, good choice. ");
        break;
        case "spear":
        console.log("")
        console.log("A spear, a pole weapon with a sharp point, either thrown or thrust at an enemy, good choice");
        break;
        default:
        
    }
}

const armorChoice = (armor) => {
    while(armor !== "plate armor" && armor !== "leather armor" && armor !== "cloth armor"){
        console.log("")
        console.log("plate armor")
        console.log("leather armor")
        console.log("cloth armor")
        armor = readLineSync.question("Ok which set of armor would you like to use? \n")
        armor = armor.trim().toLowerCase()
        
    }switch (armor){
        case "plate armor":
        console.log("")
        console.log("Plate armor will provide you with protection against attacks but it will slow you down a bit.")
        break;
        case "leather armor":
        console.log("")
        console.log("Leather armor will provide you with some protection and will also allow some mobility")
        break;
        case "cloth armor":
        console.log("")
        console.log("Cloth armor allows you to be very nimble but at the cost of protection")    
        break;
        default:    
    }
}   
const consumableChoice = (potion) => {
    while(potion !== "attack potion" && potion !== "health potion" && potion !== "defense potion") {
        console.log("")
        console.log("attack potion")
        console.log("health potion")
        console.log("defense potion")
        potion = readLineSync.question("You can only have one we are low on supplies!")
        potion = potion.trim().toLowerCase()
        
    }switch (potion) {
        case "attack potion":
        console.log("")
        console.log("This attack potion will give you a boost to your power")
        break;
        case "health potion":
        console.log("")
        console.log("This health potion will give you a boost to your health")
        break;
        case "defense potion":
        console.log("")
        console.log("This defense potion will allow you to take more hits")
    }
    
}

const offHandChoice = (offHand) => {
    if(readLineSync.keyInYN("Oh you're missing an offhand would you like to grab an offhand? \n")) {
        let offHand = ["Shield ", "Sword", "Axe", "Dagger"];
        indexoffHand = readLineSync.keyInSelect(offHand, "So what will you bring for your offhand?")
        console.log("")
        console.log("This " + offHand[indexoffHand] + " will provide support for you in battle")
    } else {
        console.log("Alright i respect your decision lets move on.")
    }
    
}

const allyChoice = (ally) => {
    if(readLineSync.keyInYN("There arent many of us available for this fight so we're moving in groups of two, would you like a partner to watch your back? \n")){
        console.log("Alright please let me know who will join you on your fight with Chongaks")
        let ally = ["Margo the wizard" , "Remornia the archer"]
        indexAlly = readLineSync.keyInSelect(ally,)
        console.log("")
        console.log(ally[indexAlly] + " will be a reliable ally for you.")
        
    } else {
        console.log("Ok if you're that confident in your abilities i cant go against that.")
    }
    
}

const bossInfo = () => {
    if(readLineSync.keyInYN("Would you like to know why Chongaks is here? \n")){
        console.log("")
        console.log("Due to the destruction of the Well of Corruption, Kinshu known as the faceless one seeked vengeance!")
        console.log("")
        console.log("He promised to bring destruction to our world due to the amount of power he and his people have lost due to the well being destroyed.")
        console.log("")
        console.log("Kinshu made a deal with the being known as Seltharion, Seltharion has granted him power to unleash Chongaks onto our world.")
        console.log("")
        console.log("Kinshu had agree to sell the planet to Seltharion as soon as Chongaks is finished wiping every living thing that exist here.")
        console.log("")
        console.log("Together they used up all of their power to release Chongaks the corruptor. ")
    } else {
        console.log("That's fine lets finish setting up so we can end this nightmare.")
    }
}
let gold = 100_000 
let playerWin = "CONGRATS YOU SLAYED HIM!"
const fightScene = (fight) => {
    if(readLineSync.keyInYN("Alright you have all of the equipment needed to destroy Chongaks are you ready? \n")) {
        console.log("ok lets sneak up behind him to get an edge")
        console.log("")
        console.log("You land a heavy blow on Chongaks, that attack alone has weaken him!" )
        console.log("")
        console.log("N'zoth attempts to strike back but he misses!" + " Quick! finish him off!")
        console.log("")
        console.log("You strike one more time and hit him straight in the eye, Chongaks screams as he turns to dust!")
        console.log(playerWin)
    }if(playerWin) {
        console.log("Thank you for defeating Chongaks, you will forever be known as the corrupters end.");
        
    } else {
        console.log("Oh no! Chongaks has corrupted your mind!!");
    }
}

function startGame() {  
    let gender = ["Man", "Woman"];
    indexGender = readLineSync.keyInSelect(gender, );
    console.log("")
    console.log("Interesting a " + gender[indexGender] + " will be the one to lead us to victory!")
    let name = readLineSync.question("Ok so what's your name?");
    console.log("")
    console.log("Hello " + name + " thank you for taking up the challenge to rid our world from Chongaks the corruptor! ");
    console.log("")
    weaponsChoice();
    armorChoice();
    consumableChoice();
    offHandChoice();
    allyChoice();
    bossInfo();
    fightScene();
    gameOver();
    console.log("")
    console.log("")
    console.log("")      
    
    
    
    
    
    process.exit();
    
    
    
}

const leaveGame = () => {
    console.log("Thanks for playing!")
    process.exit();
}


play();







