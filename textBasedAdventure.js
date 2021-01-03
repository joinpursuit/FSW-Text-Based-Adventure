const readline1 = require('readline-sync')

let nameInput = readline.question("Enter your name: ")

console.log(`I'm pleased to meet you ${nameInput}!`)

console.log(`Let's go travel ${nameInput}! around the world game Lalala!`)

console.log()

const readLineSync = require('readline-sync')

const startGame = () => {
    let tryAgain = 3
    while ( tryAgain > 0) {
        console.log("You can do it!")
    
        if(readLineSync.keyInYN("spain")) {
            play(secondCountry)

        } else if (readLineSync.keyInYN("hungary")) {
            play(thirdCountry)

        }else if (readLineSync.keyInYN("mauritius")) {
            play(fourthCountry)
        }else if (readLineSync.keyInYN("kenya")) {
            play(fifthCountry)
        }else if (readLineSync.keyInYN("qatar")) {
            play(sixthCountry)
        }else if (readLineSync.keyInYN("singapore")) {
            play(seventhCountry)
        }else if (readLineSync.keyInYN("vanuatu")) {
            play(eightCountry)
        }else if (readLineSync.keyInYN("china")) {
            play (nineCountry) 
        }else if (readLineSync.keyInYN("panama")) {
            play (tenthCountry)
        }else if (readLineSync.keyInYN("tunisia")){
            gameOver (false)
            
        }else {
            console.log ("You were close but not quite " + tryAgain + " Try left!")
            let country
            while ( country !== "spain" || country !== "hungary" || country !== "mauritius" || country !== "kenya"  || country !== "qatar"
            || country !== "singapore" || country !== vanuatu || country !== china || country !== panama || country !== tunisia ) {
                country = readLineSync.keyIn()
                country = country.toLowerCase().trim()
            }
            console.log(`Let's find out... Computer what is ${country}`)
            if ( country === "spain" || "hungary" || "mauritius" || "kenya" || "qatar" ||"singapore" || "vanuata" || "china" || "panama" || "tunisia" ) {
                play()
            } else {
                leaveGame()
            }
        }
    gameOver(false)
}

const leaveGame = () => {}




if(readLineSync.keyInYN(` Do you want to play around the world Lalalala`)) {
    console.log(` Nice! can't wait to show you cool fact learn fun Fact in each country`)

} else { 
    console.log("It's small world! we will meet again");
}

const play = () => {
    console.log("Thank you for playing I've been around the world");
    console.log("Let's start by unscrabbling the first country");
    console.log("If you use the letter provided to find the correct country will advance you throughout the 10 countries to discover");
    console.log("If you can't get the country name you will be offer a deal for your briefcase");
    console.log("Each country stop you will only have up to three try or I will Win your briefcase");
 if(readLineSync.KeyInYN(" Are we ready to see the World!")) {
     startGame();
  } else {
    console.log("It's a small world, we will meet again!")
        leaveGame()
  }

}
const play = (firstCountry) => {
    
    console.log(" What country is " + "ipnsa")

    const country = readLinesync.question ("Enter the country. \n")
    string = toLowerCase

    if( country === spain) {
        console.log(` Spain is correct! Pablo Picasso was a spanish painter, he helped develop Cubism
         a newly- invented style in which objects were represented by cubes, cones and cylinders.`)

         if(readLineSync.keyInYN("Try again!")) {
             play()
         }
    }else {
        console.log("It's a small world, we will meet again!")
        leaveGame()
    }
}

const readLineSync = require("readline-sync")

const play = (secondCountry) => {

    console.log(" What country is " + "ahyngur")

    const country = readLinesync.question ("Enter the country. \n")
    "string" = toLowerCase

    if( country === hungary ) {
        console.log(` Hungary is correct! It is customary to celebrate the name day (Nevnapot)
        and the birthday of a person. Name days are based on religious traditions and Historical figures and events.`)

         if(readLineSync.keyInYN("Try again!")) {
             play()
         }
    }else {
        console.log("It's a small world, we will meet again!")
        leaveGame()
    }
}

const play = (thirdCountry) => {

    console.log(" What country is " + "mtiisuaur")

    const country = readLinesync.question ("Enter the country. \n")
    string = toLowerCase

    if( country === mauritius) {
        console.log(`  Mauritius is correct! The island of Mauritius was created by volcanic activity
        and emerged from the water more than 8 million years ago`)

         if(readLineSync.keyInYN("Try again!")) {
             play()
         }
    }else {
        console.log("It's a small world, we will meet again!")
        leaveGame()
    }
}

const play = (fourthCountry) => {
    
    console.log(" What country is " + "yknae")

    const country = readLinesync.question ("Enter the country. \n")
    string = toLowerCase

    if( country === kenya) {
        console.log(` Kenya is correct! There are 42 etcnic groups in Kenya, all with different languages and 
        different customs. `)

         if(readLineSync.keyInYN("Try again!")) {
             play()
         }
    }else {
        console.log("It's a small world, we will meet again!")
        leaveGame()
    }
}

const play = (fifthCountry) => {
    
    console.log(" What country is " + "rqtaa")

    const country = readLinesync.question ("Enter the country. \n")
    string = toLowerCase

    if( country === qatar) {
        console.log(` Qatar is correct! The work week in Qatar runs from Sundays to Thursday, as the shops are 
        usually closed on Fridays and Saturdays`)

         if(readLineSync.keyInYN("Try again!")) {
             play()
         }
    }else {
        console.log("It's a small world, we will meet again!")
        leaveGame()
    }

}


const play = (sixthCountry) => {
    
    console.log(" What country is " + "gaposinre")

    const country = readLinesync.question ("Enter the country. \n")
    string = toLowerCase

    if( country === singapore) {
        console.log(`Singapore is correct! The Singaporeans speak English with a local twist: 'Singlish' adds
        often a 'lah' or 'leh' at the end of a world. can lah means 'Yes it is possible' can can means 'Yes. Sure. Let's do this'.`)

         if(readLineSync.keyInYN("Try again!")) {
             play()
         }
    }else {
        console.log("It's a small world, we will meet again!")
        leaveGame()
    }
}

const play = (seventhCountry) => {
    
    console.log(" What country is " + "uatvanu")

    const country = readLinesync.question ("Enter the country. \n")
    string = toLowerCase

    if( country === vanuatu) {
        console.log(` Vanuatu is correct! The water temperatures in Vanuatu range between 72 F in winter and 82 F in summer.`)

         if(readLineSync.keyInYN("Try again!")) {
             play()
         }
    }else {
        console.log("It's a small world, we will meet again!")
        leaveGame()
    }
}
const play = (eightCountry) => {
    
    console.log(" What country is " + "hinca")

    const country = readLinesync.question ("Enter the country. \n")
    string = toLowerCase

    if( country === china) {
        console.log(` China is correct! The world highest mountain 29,000 ft Mount Everest on the border, Chinese writing is done
        top to bottom in a little symbols or signs, called characters of which ann adult usually knows about 8,000 of them.`)

         if(readLineSync.keyInYN("Try again!")) {
             play()
         }
    }else {
        console.log("It's a small world, we will meet again!")
        leaveGame()
    }
}

const play = (nineCountry) => {
    console.log(" What country is " + "napaam")

    const country = readLinesync.question ("Enter the country. \n")
    string = toLowerCase

    if( country === panama) {
        console.log(` Panama is correct! The world's longest road, the Pan-American Highway, is interrupted in Panama
        by the Darien Gap which is dense jungle and rainforest at the border to columbia.`)

         if(readLineSync.keyInYN("Try again!")) {
             play()
         }
    }else {
        console.log("It's a small world, we will meet again!")
        leaveGame()
    }
}

const play = () => {
    (tenthCountry)
    console.log(" What country is " + "asiunit")

    const country = readLinesync.question ("Enter the country. \n")
    string = toLowerCase

    if( country === tunisia) {
        console.log(` Tunisia is correct! El Djem Amphitheatre was built when Tunisia once belonged to the Roman Empire
        and is one the largest amphitheatres in the world. It could seat over 30,000 spectators.`)

         if(readLineSync.keyInYN("Try again!")) {
             play()
         }
    }else {
        console.log("It's a small world, we will meet again!")
        leaveGame()
    }
}

const gameOver = (AroundTheWorld) => {
    if(computerWin) {
        console.log("Would you like a Deal or No Deal?")
        console.log("If your Briefcase is more valuable than Bank offer")
        console.log("I will reveal the answer")
    }else {
        console.log("Great deal your case is more valuable")
    }

    if(readLineSync.keyInYN("Ready for your answer?")) {
       console.log(country);
       play();
    } else {
        console.log("It's a small world we will meet again");
         leaveGame();
    }

    

}



