const readline1 = require('readline-sync')

let nameInput = readline1.question("Enter your name: ")

console.log(`I'm pleased to meet you ${nameInput}!`)

let question = readline1.keyInYN(`Do you want to play around the world Lalalala`)

if( question === true) {
    console.log(` Nice! can't wait to show you cool fact learn fun Fact in each country`)
    console.log("Thank you for playing I've been around the world");
    console.log("Let's start by unscrabbling the first country");
    console.log(" You will unscrabble the letter provided to find the correct country so we can advance you throughout your amazing journey");
    console.log("you will have up to three tries to get it RIGHT");
    console.log("Each country you discover you will get to read a find out a secret gem fact about that country");
    
    } else {
     (question === false) 
      console.log("It's small world! we will meet again");
      process.exit()
    }

const readline2 = require('readline-sync')
    let firstCountry = readline2.question(`What Country is "pains": `)
      let tryAgain = 1
       for ( let i= 0; i < tryAgain; i++)
       if (firstCountry === "spain") {
       console.log(` Spain is correct! Pablo Picasso was a spanish painter, he helped develop Cubism
       a newly- invented style in which objects were represented by cubes, cones and cylinders.`)
    }else {
        console.log("You are close but not QUITE!")
    }
       
const readline3= require('readline-sync')
    let secondCountry = readline3.question(`What Country is "ahyngur": `)
      let tryAgain2 = 1
         for ( let i= 0; i < tryAgain2; i++)
       if (secondCountry === "hungary") {
      console.log(` Hungary is correct! It is customary to celebrate the name day (Nevnapot)
       and the birthday of a person. Name days are based on religious traditions and Historical figures and events.`)
    }else {
        console.log("You are close but not QUITE!")
    }


const readline4= require('readline-sync')
    let thirdCountry = readline4.question(`What Country is "mtiisuaur": `)
        let tryAgain3 = 1
       for ( let i= 0; i < tryAgain3; i++)
       if (thirdCountry === "mauritius") {
        console.log(`  Mauritius is correct! The island of Mauritius was created by volcanic activity
        and emerged from the water more than 8 million years ago`)
    }else {
            console.log("You are close but not QUITE!")
    }
        
        
const readline5 = require('readline-sync')
    let fourthCountry = readline5.question(`What Country is "yknae": `)
        let tryAgain4 = 1
        for ( let i= 0; i < tryAgain4; i++)
        if (fourthCountry === "kenya") {
            console.log(` Kenya is correct! There are 42 etcnic groups in Kenya, all with different languages and different customs. `)
            }else {
                console.log("You are close but not QUITE!")
            }

const readline6 = require('readline-sync')
    let fifthCountry = readline6.question(`What Country is "rqtaa": `)
        let tryAgain6 = 1
        for ( let i= 0; i < tryAgain6; i++)
        if (fifthCountry === "qatar") {
            console.log(` Qatar is correct! The work week in Qatar runs from Sundays to Thursday, as the shops are usually closed on Fridays and Saturdays`)
            }else {
               console.log("You are close but not QUITE!")
            }
        
const readline7 = require('readline-sync')
    let sixthCountry = readline7.question(`What Country is "gaposinre": `)
     let tryAgain7 = 1
        for ( let i= 0; i < tryAgain7; i++)
        if (sixthCountry === "singapore") {
            console.log(`Singapore is correct! The Singaporeans speak English with a local twist: 'Singlish' adds
            often a 'lah' or 'leh' at the end of a world. can lah means 'Yes it is possible' can can means 'Yes. Sure. Let's do this'.`)
            }else {
             console.log("You are close but not QUITE!")
            }

const readline8 = require('readline-sync')
    let sevenCountry = readline8.question(`What Country is "uatvanu": `)
        let tryAgain8 = 1
        for ( let i= 0; i < tryAgain8; i++)
        if (sevenCountry === "vanuata") {
            console.log(` Vanuatu is correct! The water temperatures in Vanuatu range between 72 F in winter and 82 F in summer.`)
            }else {
             console.log("You are close but not QUITE!")
            }

    
const readline10 = require('readline-sync')
    let nineCountry = readline10.question(`What Country is "hinca": `)
      let tryAgain10 = 1
       for ( let i= 0; i < tryAgain10; i++)
       if (nineCountry === "china") {
        console.log(` China is correct! The world highest mountain 29,000 ft Mount Everest is on the border. Chinese writing is done
        top to bottom in a little symbols or signs, called characters of which ann adult usually knows about 8,000 of them.`)
     }else {
      console.log("You are close but not QUITE!")
     }

const readline11 = require('readline-sync')
     let tenthCountry = readline11.question(`What Country is "napaam": `)
       let tryAgain11 = 1
        for ( let i= 0; i < tryAgain11; i++)
        if (tenthCountry === "panama") {
            console.log(` Panama is correct! The world's longest road, the Pan-American Highway, is interrupted in Panama
            by the Darien Gap which is dense jungle and rainforest at the border to columbia.`)
      }else {
       console.log("You are close but not QUITE!")
      }


const readline12 = require('readline-sync')
      let eleventhCountry = readline12.question(`What Country is "asiunit": `)
        let tryAgain12 = 1
         for ( let i= 0; i < tryAgain12; i++)
         if (eleventhCountry === "tunisia") {
            console.log(` Tunisia is correct! El Djem Amphitheatre was built when Tunisia once belonged to the Roman Empire
            and is one the largest amphitheatres in the world. It could seat over 30,000 spectators.`)
       }else {
        console.log("You are close but not QUITE!")
        gameOver()
       }
    
    
    

    
    
const gameOver = (AroundTheWorld) => {
        if(play === true) {
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

    
