const readline = require("readline-sync")

const play = () => {
    userInput = readline.question("This life I tell ya, want me to tell you about it; yes, or no?")
    while(userInput !== "yes") {
        console.log("Oh, I'm sure you have the time.")
    }
}
console.log("Thanks, I'd be glad to tell you. Anyone can have a rough time, but let me tell you; with my life, lady luck doesn't just ignore me she sent me a restraining order.")

const dice = () => {
    userInput =  readline.question("I tell ya, me and my wife were happy for twenty years. Would you believe that? Yes / No")
    while(userInput !== "Yes") {
        console.log("I'm waiting.")
    }
}
console.log("Yeah then we met. But that's not totally true, even as a kid I got the short end of the stick. I asked my dad if I counld go out ice skating at the local pond, and he told me, wait till it gets warmer.")

const noDice = () => {
    userInput = readline.question("It doesn't just go for people either. You get where I'm coming from? Yes / No")
    while(userInput !== "No"){
        console.log("I doubt it.")
    }
}
const aLikelyStory = () => {
   userInput = readline.question("Cause the thing is people say that eventually people and their pets start to look alike. My dog found out about that and he ran away. Let me tell you another story. Yes / No")
    if(userInput === "yes"){
        console.log("I had no idea you cared so much")
    }else if(userInput === "no") {
        console.log("playing hard to get I see")
    }else{
        console.log("Come on buddy")
    }
}

const question = () =>{
    readline.question("I tell ya, not in life and not in service do I get any respect. THe other day I told the bell boy to handle my bag and he starts feeling up my wife. ")

    if(userInput === "oh, I'm sorry sir"){
        console.log("Haven't you been paying attention?")
    }else if(userInput === "Everybody"){
        console.log("How'd you guess?")
}

const nextQuestion = () =>{
    
}
"So I ask the guy, hey buddy, who told you you could feel up my wife? An what do yoiu think he said?"
// console.log("")
//people keep saying that dogs and their owners end up looking alike, and when my dog found that out he ran away
//when i was a kid my parents took me to the zoo an they thanked them for returning me 
//needs 5 more instances and a switch case and a for loop, edit it to 
//switch the console logs to be readline questions and make sure it works on play