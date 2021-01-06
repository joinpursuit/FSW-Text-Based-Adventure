const rls = require('readline-sync')
// const chalk = require('chalk')
// let introductionOptions = ["Hi", "for - passenger name?",'nothing', "What's Your name?",
// let musicOptions = ["radio", " library","science podcast", "self-help podcast", "no music"]
// let conversationOptions = ["start","wait","no conversation"]
// let dialogueOptions = ["Their day", "Music", "Podcast", "Goals","Secrets", "Your day"]
// let endTripOptions = ["Say nothing", "Be polite", "Thank them for talking to you"]
// // let shortTripsCount = 0
// let longTripsCount = 0
// const shortTrip = 0
// const longTrip = 0
// // let trips = 0
// let totalTrips = 0
let money = 0
let longTripsLuck = 0
let shortTripsLuck = 0
let trip = 0



let name = rls.question("Enter your name: ")

//1 Initial Welcome + Directions, You're an Uber driver, trying to meet your quote for the day. Want to play yes or no?

function startGame() {
    console.log(`\nHi ${name}, in this game you need to make your daily quota as an Uber Driver in a 12 hour shift.\n
    It's a combination of skill and luck, but your decisions are key! \n
    There will be 3 types of prompts: Y/N(Yes or No), type in, or select 0-3 from the list.\n
    After each prompt you need to press enter.\n `)
    if(rls.keyInYNStrict("\nThink you can make it?")) {
        console.log(`\nGreat let's get on the road!\n`)
        chooseCar()
        startApp()
        firstPassenger()
        secondPassenger()

    }else { 
        leaveGame()
    }

}

startGame()

//2 Choose what car youre driving uberbBack (long trips), uberXL(more short trips), uberX (equal long/short)
function chooseCar() {
    console.log(`What car are you driving? Type in a number`)
    let carOptions = ['Toyota Camry', 'Toyota Sienna','Cadillac XTS']
    let carChoice= rls.keyInSelect(carOptions)

    if (carOptions[carChoice] === 'Toyota Camry'){
        longTripsLuck = 5
        shortTripsLuck = 5
        moneyLuck = 5
        console.log("Ah, I see you're driving a Camry! You have an equal chance of long and short trips.")
      
        

    } else if (carOptions[carChoice] === 'Toyota Sienna'){
        longTripsLuck = 3
        shortTripsLuck = 7
        moneyLuck = 5
        console.log("Ah, I see you're driving a Sienna! You have a higher chance for short trips!")
        


    } else if (carOptions[carChoice] === 'Cadillac XTS'){
        longTripsLuck = 7
        shortTripsLuck = 3
        moneyLuck = 7
        console.log("Ah, I see you're driving a Cadillac! You have a higher chance for long trips!")
      

    } else {
        leaveGame()
    }
    
}

//4 Choose where you're starting your app rich, populated, current // how may trips you'll get for the day
function startApp(){
    let locationOption = ['Rich Area', 'Shopping District','Parking Spot']
    console.log("I see you're in you car now. Where do you turn on your app? Pick a number")
    let startLocation = rls.keyInSelect(locationOption)
    
    if (locationOption[startLocation] === 'Rich Area'){
         let trip = richAreaFunction()
    //     longTripsCount > shortTripsCount

    //    longTripsCount = (longTripsLuck * (Math.random() * 10) * (getRandom(200,350)))
    //    shortTripsCount = (shortTripsLuck * (Math.random() * 2)) * (getRandom(50,150))
    //   totalTrips = longTripsCount + shortTripsCount 
    //   console.log('Starting from a rich area means you have a higher chance to start with a long trip, but longer wait time between trips')
      
    }else if (locationOption[startLocation] === 'Shopping District'){
        let trip = shoppingDistrictFunction()

    //     longTripsCount = (longTripsLuck * (Math.random() * 6)) * (getRandom(200,350))
    //    shortTripsCount = (shortTripsLuck * (Math.random() * 12)) * (getRandom(50,150))
    //     totalTrips = longTripsCount + shortTripsCount 

    } else if (locationOption[startLocation] === 'Parking Spot'){
        let trip = parkingSpotFunction()

    //     longTripsCount = (longTripsLuck * (Math.random() * 6)) * (getRandom(200,350))
    //    shortTripsCount = (shortTripsCount * (Math.random() * 6)) *(getRandom(50,150))
        // totalTrips = longTripsCount + shortTripsCount 

    }else {
        leaveGame()
    }
}

function richAreaFunction(trip, longTripsLuck, shortTripsLuck){{
     if ((longTripsLuck * 5) > (shortTripsLuck * 2)) {
         return trip = 'long trip'
     } else {
         return trip = 'short trip'
     }
    }
 
 }


 function shoppingDistrictFunction(trip,longTripsLuck, shortTripsLuck) {
        if ((Math.random() * (longTripsLuck * 2)) > (Math.random() * (shortTripsLuck * 5))) {
            return trip = 'long trip'
        } else {
            return trip = 'short trip'
        }
   
   
 }


function parkingSpotFunction(trip, longTripsLuck, shortTripsLuck){
            if ((Math.random() * (longTripsLuck * 3)) > (Math.random() * (shortTripsLuck * 5))) {
                return trip = 'long trip'
            } else {
                return trip ='short trip'
            }
           }

function getRandom(min,max) {
    return Math.random() * (max - min) + min

}


///3 Choose how many hours what hours you're working 8, 10, 12 (3 passengers total * hours less hours more luck)




//5 3 choice per passenger random long/short trip based on above^ Passenger one conversation (play music +2, play podcast +3, no music +1)
//6 passenger one conversation (engage in conversation no conversation +1, conversation +2)
//while loops use to determine set of given answers 
// let introductionOptions = ["Hi", "for - passenger name?",'nothing', "What's Your name?",
// let musicOptions = ["play radio station", "shuffle your music","play science podcast", "play self-help podcast", "play specific choices from your music"]
// let conversationOptions = ["start conversation","wait to passenger starts conversation","no conversation"]
// let dialogueOptions = ["Talk about their day", "Talk about music", "Talk about podcast", "Ask about goals","Ask about Secrets","Say random silly fact"]
// let endTripOptions = ["Say nothing", "Thank you, hope you have a good day!", "Thanks for talking with me, hope you have a good day!", "Be safe"]
function firstPassenger(){
    if(trip === 'long trip') {
  console.log(`"You're using autoaccept, and get a ding for your first passenger! It's 5 min away.\n
     Upon arriving, you notice it looks like a a couple and their kids.
      They open your back door. You ask, "Hi, for Angel?"
    The man says yes and loudly tells the two kids to hurry up getting in. What do you do next?
    Looking in the passenger window expecatantly he ask, "Can I sit in the front?" 
    What do you say to him?`)
     introductionOptions = ["Hi", "for - passenger name?",'nothing', "What's Your name?"]
     musicOptions = ["radio", " library","science podcast", "self-help podcast", "no music"]
     conversationOptions = ["start","wait","no conversation"]
    dialogueOptions = ["Their day", "Music", "Podcast", "Goals","Secrets", "Your day"]
     endTripOptions = ["Say nothing", "Be polite", "Thank them for talking to you"]
    
   passOne1 = rls.keyInSelect(introductionOptions) 
   passOne2 = rls.keyInSelect(conversationOptions)
   passOne3 = rls.keyInSelect(dialogueOptions)
   passOne4 = rls.keyInSelect(endTripOptions)
   passOne5 = rls.keyInSelect(musicOptions)
    
    } else {
    console.log(` Sure, just keep the window open.- Once sitting he ask "Busy day?"
    "Not really, but it's a beautiful day out here, hows your day going?"
    He ends up coughing heavily , taking off his mask, saying man, "I cant breathe we these things on."
    
    Do you tell him to put it on? yes/no
    yes- You end up having a day of averegae trips, thinking of course the tarot was balogney, and up getting covid. 
    
    No, Uber made a rule for covid that no one can sit in the front - he angrily sits in the back with a kid on his lap. 
    His energy feels very off. But you can't pinpoint it, so you feel uneasy the whole ride. 
    You end up having a productive day of average trips, but think the tarot was balogney`)
     introductionOptions = ["Hi", "for - passenger name?",'nothing', "What's Your name?"]
     musicOptions = ["radio", " library","science podcast", "self-help podcast", "no music"]
     conversationOptions = ["start","wait","no conversation"]
     dialogueOptions = ["Their day", "Music", "Podcast", "Goals","Secrets", "Your day"]
     endTripOptions = ["Say nothing", "Be polite", "Thank them for talking to you"]
    
   passOne1 = rls.keyInSelect(introductionOptions)
   passOne2 = rls.keyInSelect(conversationOptions)
   passOne3 = rls.keyInSelect(dialogueOptions)
   passOne4 = rls.keyInSelect(endTripOptions)
   passOne5 = rls.keyInSelect(musicOptions)
}
}
   

//5 3 choices per passenger random long/short trip based on above^ Passenger one conversation (play music +2, play podcast +3, no music +1)
//6 passenger one conversation (engage in conversation no conversation +1, conversation +2)
//for loops used to determine if this was a long or short trrip
// let introductionOptions = ["Hi", "for - passenger name?",'nothing', "What's Your name?",
// let musicOptions = ["play radio station", "shuffle your music","play science podcast", "play self-help podcast", "play specific choices from your music"]
// let conversationOptions = ["start conversation","wait to passenger starts conversation","no conversation"]
// let dialogueOptions = ["Talk about their day", "Talk about music", "Talk about podcast", "Ask about goals","Ask about Secrets","Say random silly fact"]
// let endTripOptions = ["Say nothing", "Thank you, hope you have a good day!", "Thanks for talking with me, hope you have a good day!", "Be safe"]
function secondPassenger(){
    console.log()
    if(trip === 'short trip') {
        console.log(`Looks like you got a short trip!
        3)If short trip: you pick up what looks like a couple with their two cute kids. Thankfully they all have mask.
        "Hi, for Angel?"
        The man says yes and loudly tells the two kids to hurry up getting in. You put the radio on. 103.5ktu cause its more kid friendly
        Looking in the passenger window expecatantly he ask, "Can I sit in the front?" 
        You tell him:
        A) Sure, just keep the window open.- Once sitting he ask "Busy day?"
        "Not really, but it's a beautiful day out here, hows your day going?"
        He ends up coughing heavily , taking off his mask, saying man, "I cant breathe we these things on."
        1)Do you tell him to put it on? yes/no
        a)yes- You end up having a day of averegae trips, thinking of course the tarot was balogney, and up getting covid. 
        B)No, Uber made a rule for covid that no one can sit in the front - he angrily sits in the back with a kid on his lap. 
        His energy feels very off. But you can't pinpoint it, so you feel uneasy the whole ride. 
        You end up having a productive day of average trips, but think the tarot was balogney`)
        introductionOptions = ["Hi", "for - passenger name?",'nothing', "What's Your name?"]
        musicOptions = ["radio", " library","science podcast", "self-help podcast", "no music"]
        conversationOptions = ["start","wait","no conversation"]
        dialogueOptions = ["Their day", "Music", "Podcast", "Goals","Secrets", "Your day"]
        endTripOptions = ["Say nothing", "Be polite", "Thank them for talking to you"]
        
   passTwo1 = rls.keyInSelect(introductionOptions)
   passTwo2 = rls.keyInSelect(conversationOptions)
   passTwo3 = rls.keyInSelect(dialogueOptions)
   PassTwo4 = rls.keyInSelect(endTripOptions)
   passTwo5 = rls.keyInSelect(musicOptions)
        money += 15
        
    } else (trip === 'long trip')
        console.log(`Looks like you got a long trip Looks like you got a long trip, says 1hr 33 mins. This is a great way to start your day! You happily drive to the pick up location. 
        A women with a powerful aura gets into your car. She's dressed to the nines and her perfume is lovely. 
            "Hi, for Jema?"
           "Yes, Hi, how are you?" 
           "Good, good, and you? Any music you prefer?" 
           "No, play want you want."
           "Cool, I'm listening to the real catch me if you can guy tell his story." 
            She chuckles, "Ah, I saw that movie with Leonadrio Decaprio, sounds good!" `)
         introductionOptions = ["Hi", "for - passenger name?",'nothing', "What's Your name?"]
        musicOptions = ["radio", " library","science podcast", "self-help podcast", "no music"]
        conversationOptions = ["start","wait","no conversation"]
             dialogueOptions = ["Their day", "Music", "Podcast", "Goals","Secrets", "Your day"]
             endTripOptions = ["Say nothing", "Be polite", "Thank them for talking to you"]
            
            passTwo1 = rls.keyInSelect(introductionOptions)
            passTwo2 = rls.keyInSelect(conversationOptions)
            passTwo3 = rls.keyInSelect(dialogueOptions)
            passTwo4 = rls.keyInSelect(endTripOptions)
            passTwo5 = rls.keyInSelect(musicOptions)
        money += 45


    }



    console.log(money)
    



//5 3 choice per passenger 
//random long/short trip based on above^ Passenger one conversation (play music +2, play podcast +3, no music +1)
//6 passenger one conversation (engage in conversation no conversation +1, conversation +2)
// let introductionOptions = ["Hi", "for - passenger name?",'nothing', "What's Your name?",
// let musicOptions = ["play radio station", "shuffle your music","play science podcast", "play self-help podcast", "play specific choices from your music"]
// let conversationOptions = ["start conversation","wait to passenger starts conversation","no conversation"]
// let dialogueOptions = ["Talk about their day", "Talk about music", "Talk about podcast", "Ask about goals","Ask about Secrets","Say random silly fact"]
// let endTripOptions = ["Say nothing", "Thank you, hope you have a good day!", "Thanks for talking with me, hope you have a good day!", "Be safe"]
function thirdPassenger(){
    if(trip === 'long trip') {
        console.log(`"You're using autoaccept, and get a ding for your first passenger! It's 5 min away.\n
           Upon arriving, you notice it looks like a a couple and their kids.
            They open your back door. You ask, "Hi, for Angel?"
          The man says yes and loudly tells the two kids to hurry up getting in. What do you do next?
          Looking in the passenger window expecatantly he ask, "Can I sit in the front?" 
          What do you say to him?`)
          introductionOptions = ["Hi", "for - passenger name?",'nothing', "What's Your name?"]
           musicOptions = ["radio", " library","science podcast", "self-help podcast", "no music"]
conversationOptions = ["start","wait","no conversation"]
           dialogueOptions = ["Their day", "Music", "Podcast", "Goals","Secrets", "Your day"]
           endTripOptions = ["Say nothing", "Be polite", "Thank them for talking to you"]
          
         passthree1 = rls.keyInSelect(introductionOptions, "Start conversation")
         passthree2 = rls.keyInSelect(conversationOptions)
         passthree3 = rls.keyInSelect(dialogueOptions)
         passthree4 = rls.keyInSelect(endTripOptions)
         passThree5 = rls.keyInSelect(musicOptions)
          
          
          } else 
         introductionOptions = ["Hi", "for - passenger name?",'nothing', "What's Your name?"]
          musicOptions = ["radio", " library","science podcast", "self-help podcast", "no music"]
           conversationOptions = ["start","wait","no conversation"]
           dialogueOptions = ["Their day", "Music", "Podcast", "Goals","Secrets", "Your day"]
           endTripOptions = ["Say nothing", "Be polite", "Thank them for talking to you"]
          
          console.log(` Sure, just keep the window open.- Once`)
        passThree1 = rls.keyInSelect(introductionOptions)
         passThree2 = rls.keyInSelect(conversationOptions)
         passThree3 = rls.keyInSelect(dialogueOptions)
         passThree4 = rls.keyInSelect(endTripOptions)
         passThree5 = rls.keyInSelect(musicOptions)
          


        }


//whethere you get a long or short trip
function trips(){

}

function quota(){  
    while (money < 300) {
    (totalTripCount *= moneyLuck)
    money
}


}

function gameOver(){
    console.log("Seems you didnt meet you quota!")
    if(rls.keyInYNStrict("Would you like to try again?")){
        restartGame()
    }else {
       leaveGame()
    }
}

function leaveGame() {
    console.log(`\nGuess luck wasn't on your side. See you next time!\n`)
    process.exit()

}

function restartGame(){
     passengers = 0
     money = 0
     longTrips = 0
     shortTrips = 0
     waitTime = 0
     luck = 0
     music = 0
     podcast = 0
     noConvo = 0
     convo = 0
     startGame()

}  
   
