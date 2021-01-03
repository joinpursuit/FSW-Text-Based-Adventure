const readLineSync = require("readline-sync");
let vaccs = 3


const quit3 = () => {
    console.log("Better luck next time! Have fun eating your fellow humans.")
    process.exit();
}
const quit2 = () => {
    console.log("\"I\'m sorry, this is just too much for me. I have to go.\" You drop the walkie-talkie and continue on your way. Good luck out there!")
    process.exit();
}

const quit1 = () => {
    console.log("You decide to leave it alone, and continue on your way.\nHopefully you come across water soon, but who knows how long you'll survive out here.\nGood luck.")
    process.exit();
}

const intro = () => {
console.log("A mysterious virus has taken over New York City.\nThose infected have turned in to mindless, hungry, cannibals. So far it seems nothing takes them down besides an direct brain injury.\nYou have been running for days now, food and water are becoming scarce.\nThe number of infected seems to grow by the hundreds a day.\nWhile on your search for water you come to the front of 120 Vernon Blvd. It is a 3-story-old walk up and the power seems to be out.\nAt the front of the door there is a dead soldier, a backpack on the floor beside him and walkie-talkie in his hand.\nSuddenly a mans voice comes through the device.",
 "\"Walker, are you there?\"") 
 if(readLineSync.keyInYN("Do you choose to answer?")) {
    console.clear()
    console.log("You pick up the walkie talkie and respond. \"Hello?\" \nTo your relief, the man answers back. \"This is Sergeant Pheonix. Where is Walker?\" You inform him that the soldier he is looking for is dead.\nHe sighs. \"Listen kid, Walker and his team were in the middle of an important mission.\mHe stayed behind to hold off a hoard while his team went in to try and get to the rooftop.\nIt seems they got separated.\nOn the rooftop there\'s a helicopter waiting to transport them back to base.\nHowever, one of the soldiers had the key to the rooftop and there was a scientist with them that had blueprints, notes, and samples that we told us how to\nput an end to this virus and recreate the vaccines.\nThere are 3 floors to make it through but if you can find the blueprints on floor 2 and the key on floor 3, we can guarantee your survival.\"")
    if(readLineSync.keyInYN("Will you attempt to help us?")){
        startGame() 
    } else {
        quit2()
    }
} else {
    quit1()
}

}

const gameOver = () => {
    console.log("You got bit again and are out of vaccines. You didn\t make it. You can feel the virus slowly taking over your body from the last bite. The world fades around you and all you feel is hunger. It's all you can think about... \"Must...eat...\"")
    tryAgain(); 
}

const tryAgain = () => {
    if(readLineSync.keyInYN("Would you like to try again?")) {
        console.clear();
        startGame()
    }
    else {
        quit3();
    }
}

let bitten = () => {
    console.log("\n\nSearing pain runs up your body from where you were bitten. You dig in the backpack and pull out a vaccine before plunging it in to your thigh.");
    vaccs--
    console.log(`Seargent Pheonix: "Careful, kid. You only have ${vaccs} vaccines left...keep moving."\n\n`);
}

const chooseDoor2 = () => {
    console.log("starting 2nd fl");
    let input = ""
    input = readLineSync.question("There are 4 doors. Two on the left and two on the right. Which door will you choose?")
    input.trim().toLowerCase()
    if(input === "left 1" ){
     console.clear()
     console.log("you're here 1")
        chooseDoor1()
     } if(input === "left 2"){
        console.clear()
        console.log("you're here 2")
     }
    }

  const chooseDoor1 = () => {
    let input = ""
    input = readLineSync.question("There are 4 doors. Two on the left and two on the right. Which door will you choose?")
    input.trim().toLowerCase()
    if(input === "left 1" ){
        console.clear()
     console.log("You slowly open the door and look inside. It\'s a bathroom.\n There is a dead soldier on the ground in a pool of blood.\nThere is nothing else here. You step back out.\n\n")
     chooseDoor1()
    } else if(input === "left 2"){
        console.clear()
       console.log("You press your ear against the door and listen for any sounds. You then step inside.\nThe light above flickers on and off and in the flashes of light you see a man in a lab coat on the ground. His body is covered in blood and bitemarks.\nNext to his body you see a briefcase. You open it and inside are vials of red liquids.\n\"You found the samples! Those are essential for our mission. That\'s it for this floor. Move on!\" Sargeant Phoenix instructs through the walkie-talkie.\nYou leave the room and head for the stairs.")
       chooseDoor2()
     }else if(input === "right 1") {
         console.clear()
         console.log("You listen for a moment but hear nothing. You slowly open the door and step inside.\nIt's pitch black, you can't tell whats in the room. You take a few steps forward before you feel a hand on your ankle.\nYou yell out and step back and trip. You land on the ground and kick at whatever is grabbing you.\nYou feel your pants rip and crawl towards the door. You then manage to get up but just as you reach the door you feel teeth sink in to your ankle.\nYou let out another yell as blood drips down your shoe. Somehow you manage to stumble in to the hallway and shut the door behind you.");
        bitten()
         chooseDoor1()
     } else if(input === "right 2") {
         console.clear()
         console.log("No sounds come from inside. You take a deep breath before opening the door. A knocked over lamp is the only light in the room.\nIt's an office with a few desks. Chairs are knocked over and a man in a suit lays on the ground. A chunk of his neck is missing.\nThere is nothing else here. You step back out.\n");
         chooseDoor1()
     }
    }
    

const floor1 = () => {
    console.log(`You enter the building, there\'s barely enough light to see.\n\nSeargent Phoenix: "Okay, there are 4 doors on each floor.\nThe team cleared some of the rooms but not all. Be careful!\n There\'s one item you need on each floor before going to the next. Good luck!"\n`)
    chooseDoor1()
      }

const startGame = () => {
    console.clear()
    while(vaccs > 0){
        console.clear()
        console.log(`Seargent Phoenix: "Okay, inside the backpack are three vaccines. If you get bitten, use them. Be careful though,\nthere are only three. I'll be helping you as much as I can with the information from my last communications with the team." \n`)
       floor1()
    }
    gameOver()    
    }


    intro()






