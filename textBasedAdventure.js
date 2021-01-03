const readline1 = require('readline-sync')

let nameInput = readline1.question("Enter your name: ")
    console.log(`I'm pleased to meet you ${nameInput}!`)
    let askOen =  readline1.keyIn("Im ready to go around the world Lalalala, are you set?")
    console.log(` Nice! can't wait to show you cool fun Fact we learnt in each country`)
    console.log("Each time we arrive at our destination we will need to Unscramble the word ");
    console.log("you will have up to three tries to get it RIGHT");

function tryInGame () {
    let question = readline1.keyInYN(`Do you want to fly around the world Lalalala`)
    if( question === true) {
         playGame()
     }else {
        leaveGame()
    }
}
tryInGame();

function playGame () {
   
    console.log("It will be an amazing Journey");
    console.log(" You will Unscramble the letter provided to find the correct country so we can advance you throughout your amazing journey");
    console.log("Each country you discover you will learn a secret fun fact about that country");

    if(readline1.keyInYN("Ready to hit the road!")) {
        firstCountry();

    } else {
        leaveGame();
    }

}

function firstCountry ()  {
     let question;
    
     while (question !== "spain" && question !== "Spain") {
         question = readline1.question(` What Country is "pains" ?`).trim().toLowerCase();    
     }
     if (question === "spain") {
        console.log(` Spain is correct! Pablo Picasso was a spanish painter, he helped develop Cubism
        a newly- invented style in which objects were represented by cubes, cones and cylinders.`) 
     
     }else if ( question !== "spain") {
         tryInGame()
    }
}
secondCountry()

function secondCountry () {
    let question2;
    
    while (question2 !== "hungary" && question2 !== "Hungary") {
        question2 = readline1.question(`What Country is "ahyngur": `).trim().toLowerCase();    
    }
    if (question2 === "hungary") {
        console.log(` Hungary is correct! It is customary to celebrate the name day (Nevnapot)
        and the birthday of a person. Name days are based on religious traditions and Historical figures and events.`)
    }else if ( question2 !== "hungary") {
        tryInGame()
   }
}

thirdCountry()

function thirdCountry () {

   let question3;
        
     while (question3 !== "mauritius" && question3 !== "Mauritius") {
            question3 = readline1.question(`What Country is "mtiisuaur": `).trim().toLowerCase();    
    }
   if (question3 === "mauritius") {
       console.log(`  Mauritius is correct! The island of Mauritius was created by volcanic activity
             and emerged from the water more than 8 million years ago`)
    }else if ( question3 !== "mauritius") {
            tryInGame()
  }

}

fourthCountry()

function fourthCountry () {

   let question4;
        
     while (question4 !== "kenya" && question4 !== "Kenya") {
            question4 = readline1.question(`What Country is "yknae": `).trim().toLowerCase();    
    }
   if (question4 === "kenya") {
    console.log(` Kenya is correct! There are 42 etcnic groups in Kenya, all with different languages and different customs. `)
    }else if ( question4 !== "kenya") {
            tryInGame()
  }

}
fifthCountry()

function fifthCountry () {

   let question5;
         while (question5 !== "qatar" && question5 !== "Qatar") {
            question5 = readline1.question(`What Country is "rqtaa": `).trim().toLowerCase();    
    }
   if (question5 === "qatar") {
    console.log(` Qatar is correct! The work week in Qatar runs from Sundays to Thursday, as the shops are usually closed on Fridays and Saturdays`)
    }else if ( question5 !== "qatar") {
            tryInGame()
  }

}

sixthCountry()

function sixthCountry () {

   let question6;
        
     while (question6 !== "switzerland" && question6 !== "Switzerland") {
            question6 = readline1.question(`What Country is "wtlnzairesd": `).trim().toLowerCase();    
    }
   if (question6 === "switzerland") {
    console.log(` officially called the Swiss Federation, is a small country in Central Europe made up of 16,000 square miles of glacier-carved Alps, lakes and valleys. It’s one of the world’s wealthiest countries, and has been well-known for centuries for its neutrality. `)
    }else if ( question6 !== "switzerland") {
            tryInGame()
  }

}

seventhCountry()

function seventhCountry () {

   let question7;
        
     while (question7 !== "singapore" && question7 !== "Singapore") {
            question7 = readline1.question(`What Country is "gaposinre": `).trim().toLowerCase();    
    }
   if (question7 === "singapore") {
    console.log(`Singapore is correct! The Singaporeans speak English with a local twist: 'Singlish' adds
    often a 'lah' or 'leh' at the end of a world. can lah means 'Yes it is possible' can can means 'Yes. Sure. Let's do this'.`)
    }else if ( question7 !== "singapore") {
            tryInGame()
  }

}

eighthCountry()

function eighthCountry () {

   let question8;
        
     while (question8 !== "vanuatu" && question8 !== "Vanuatu") {
            question8 = readline1.question(`What Country is "uatvanu": `).trim().toLowerCase();    
    }
   if (question8 === "vanuatu") {
    console.log(` Vanuatu is correct! The water temperatures in Vanuatu range between 72 F in winter and 82 F in summer.`)
    }else if ( question8 !== "vanuatu") {
            tryInGame()
  }

}

ninthCountry()

function ninthCountry () {

   let question9;
        
     while (question9 !== "china" && question9 !== "China") {
            question9 = readline1.question(`What Country is "hinca": `).trim().toLowerCase();    
    }
   if (question9 === "china") {
    console.log(` China is correct! The world highest mountain 29,000 ft Mount Everest is on the border. Chinese writing is done top to bottom in a little symbols or signs, called characters of which an adult usually knows about 8,000 of them.`)
    }else if ( question9 !== "china") {
            tryInGame()
  }

}

tenthCountry()

function tenthCountry () {

   let question10;
        
     while (question10 !== "panama" && question10 !== "Panama") {
            question10 = readline1.question(`What Country is "napaam": `).trim().toLowerCase();    
    }
   if (question10 === "panama") {
    console.log(` Panama is correct! The world's longest road, the Pan-American Highway, is interrupted in Panama by the Darien Gap which is dense jungle and rainforest at the border to columbia.`)
    }else if ( question10 !== "panama") {
            tryInGame()
  }

}

eleventhCountry()

function eleventhCountry () {

   let question11;
        
     while (question11 !== "tunisia" && question11 !== "Tunisia") {
            question11 = readline1.question(`What Country is "unitasi": `).trim().toLowerCase();    
    }
   if (question11 === "tunisia") {
    console.log(`Tunisia is correct! El Djem Amphitheatre was built when Tunisia once belonged to the Roman Empire and is one the biggest amphitheatres in the world. It could seat over 30,000 spectators.`)
    }else if ( question11 !== "tunisia") {
    }
    tryInGame()
}



gameOver()

function gameOver () {}


leaveGame()

function leaveGame() {
    console.log (`It's a small world we will meet again!`)
    process.exit();
}

    
    
    

    

    
