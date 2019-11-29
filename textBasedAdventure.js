const readline = require("readline-sync")
console.log("Sometimes, things just go from bad to worse.")

const play = () => {
    let userInput;
    while(userInput !== "yes") {
        userInput = readline.question("Want me to tell you about it; yes, or no?")
    }
}
console.log("Well I'd be glad to tell you. Anyone can have a rough time,
but let me tell you; with my life, lady luck doesn't just ignore me she 
sent me a restraining order.")
const dice = () => {
    let userInput;
    while(userInput !== "Really?") {
        userInput =  readline.question("I tell ya, me and my wife were happy for twenty years. Answer: Really")
    }
}
console.log("Yeah then we met. But that's not totally true, even as a kid I got the short end of the stick. I asked my dad if I counld go out ice skating at the local pond, and he told me, wait till it gets warmer.")
const noDice = () => {
    let userInput;
    while(userInput !== "Tell me more")
        userInput = readline.question("It doesn't just go for people either. Answer: Tell me more")
}
console.log("Do you still need me to go on? yes or no")

const aLikelyStory = () => {
    let userInput;
    if(userInput === "yes"){
        console.log("I had no idea you cared so much")
    }else if(userInput === "no") {
        console.log("playing hard to get I see")
    }else{
        console.log("Come on buddy")
    }
}
console.log("I tell ya, not in life and not in service do I get any respect. THe other day I told the bell boy to handle my bag and he starts feeling up my wife. ")
const question = () =>{
    let userInput;
    if(userInput === "oh, I'm sorry sir"){
        console.log("Haven't you been paying attention?")
    }else if(userInput === "Everybody"){
        console.log("How'd you guess?")
    }readline.question("So I ask the guy, hey buddy, who told you you could feel up my wife? An what do yoiu think he said?")
}
// console.log("")
//people keep saying that dogs and their owners end up looking alike, and when my dog found that out he ran away
//when i was a kid my parents took me to the zoo an they thanked them for returning me 