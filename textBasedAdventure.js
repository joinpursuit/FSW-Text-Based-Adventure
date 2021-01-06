const rls = require('readline-sync')
const chalk = require('chalk')
const uberBlack = 0
const uberXL = 0
const uberX = 0
let passengers = 0
let money = 0
let longTrips = 0
let shortTrips = 0
let waitTime = 0
let luck = 0
let music = 0
let podcast = 0
let noConvo = 0
let convo = 0


let name = rls.question("Enter your name: ")

//1 Initial Welcome + Directions, You're an Uber driver, trying to meet your quote for the day. Want to play yes or no?

function startGame() {
    console.log(`\nHi ${name}, in this game you need to make your daily quota as an Uber Driver.\n
    It's a combination of skill and luck, but your decisions are key! \n
    There will be 3 types of prompts: Y/N(Yes or No), type in, or select 0-3 from the list.\n
    After each prompt you need to press enter.\n `)
    if(rls.keyInYNStrict("\nThink you can make it?")) {
        console.log(`\nGreat let's get on the road!\n`)
        beginShift()
    }else { 
        leaveGame()
    }

}


startGame()
//2 Choose what car youre driving uberbBack (long trips), uberXL(more short trips), uberX (equal long/short)
//3 Choose how many hours what hours you're working 8, 10, 12 (3 passengers total * hours less hours more luck)
//4 Choose where you're starting your app rich, populated, current (wait times)
function beginShift() {
    
    
}

function leaveGame(){
    console.log(`\nGuess luck wasn't on your side. See you next time!\n`)
    process.exit()

}

//5 random long/short trip based on above^ Passenger one conversation (play music +2, play podcast +3, no music +1)
//6 passenger one conversation (engage in conversation no conversation +1, conversation +2)
function firstPassenger(){

}

//5 random long/short trip based on above^ Passenger one conversation (play music +2, play podcast +3, no music +1)
//6 passenger one conversation (engage in conversation no conversation +1, conversation +2)
function secondPassenger(){

}

//5 random long/short trip based on above^ Passenger one conversation (play music +2, play podcast +3, no music +1)
//6 passenger one conversation (engage in conversation no conversation +1, conversation +2)
function thirdPassenger(){

}

//whethere you get a long or short trip
function trips(){

}

function quota(){
    
}
