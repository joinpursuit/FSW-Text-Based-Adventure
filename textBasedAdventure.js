const readline = require("readline-sync")
let userInput = userInput.toLowerCase();

const play = () => {
    userInput = readline.question("This life I tell ya, want me to tell you about it; yes, or no?")
    while(userInput !== "yes") {
        console.log("Oh, I'm sure you have the time.")
    }
    if(userInput === "yes"){
        dice();
    }

function dice(){
    userInput =  readline.question("Thanks, I'd be glad to tell you. Anyone can have a rough time, but let me tell you; with my life, lady luck doesn't just ignore me she sent me a restraining order. I tell ya, me and my wife were happy for twenty years. Would you believe that? Yes / No")
    while(userInput !== "yes") {
        console.log("I'm waiting.")
    }
    if(userInput === "yes"){
        noDice();
    }
}

const noDice = () => {
    userInput = readline.question("Yeah then we met. But that's not totally true, even as a kid I got the short end of the stick. I asked my dad if I counld go out ice skating at the local pond, and he told me, wait till it gets warmer. It doesn't just go for people either. You get where I'm coming from? Yes / No")
    while(userInput !== "no"){
        console.log("I doubt it.")
    }
    if(userInput === "no"){
        aLikelyStory();
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
    if(userInput === "yes"){
        question();
    }
}

const question = () => {
    readline.question("I tell ya, not in life and not in service do I get any respect. The other day I told the bell boy to handle my bag and he starts feeling up my wife. 'No way / Tough luck pal'")

    if(userInput === "no way"){
        console.log("Haven't you been paying attention?")
    }else if(userInput === "tough luck pal"){
        console.log("Don't I know it")
    }
    if(userInput === "tough luck pal"){
        nextQuestion();
    }
}

const nextQuestion = () => {
    let answer = " "
    question = readline.question("So I ask the guy, hey buddy, who told you you could feel up my wife? An what do yoiu think he said?")
        switch (question){
        case "I couldn't guess" :
            answer = "Sure you could"
        case "Nobody?" :
            answer = "I wish"
        case "Everybody" :
            answer = "I tell ya no respect"
}
}
}
play()