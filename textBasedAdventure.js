const readline = require("readline-sync")

const play = () => {
    let userInput;
    while(userInput !== "yes") {
        userInput = readline.question("This life I tell ya, want me to tell you about it; Yes, or No?").toLowerCase()
    } if (userInput === "yes"){
        dice();
    }
function dice(){
    let userInput;
    while(userInput !== "yes") {
        userInput =  readline.question("Thanks, I'd be glad to tell you. Anyone can have a rough time, but let me tell you; with my life, lady luck doesn't just ignore me she sent me a restraining order. I tell ya, me and my wife were happy for twenty years. Would you believe that? Yes / No").toLowerCase()
        console.log("I'm waiting.")
    }
    if(userInput === "yes"){
        noDice();
    }
}
}

const noDice = () => {
    let userInput
    while(userInput !== "yes"){
    userInput = readline.question("Yeah then we met. But that's not totally true, even as a kid I got the short end of the stick. I asked my dad if I counld go out ice skating at the local pond, and he told me, wait till it gets warmer. It doesn't just go for people either. You get where I'm coming from? Yes / No").toLowerCase()
        console.log("I doubt it.")
    }
    if(userInput === "yes"){
        aLikelyStory();
    }
}
const aLikelyStory = () => {
    let userInput;
   userInput = readline.question("Cause the thing is people say that eventually people and their pets start to look alike. My dog found out about that and he ran away. Let me tell you another story. Yes / No").toLowerCase()
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
    let userInput;
    userInput = readline.question("I tell ya, not in life and not in service do I get any respect. The other day I told the bell boy to handle my bag and he starts feeling up my wife. 'No way / Tough luck pal'").toLowerCase()

    if(userInput === "no way"){
        console.log("Haven't you been paying attention?")
    }else if(userInput === "tough luck pal"){
        console.log("Don't I know it")
    }
    if(userInput === "tough luck pal"){
        nextQuestion();
    }
}

function nextQuestion(){
    let answer = ""
    let userInput = readline.question("So I ask the guy, hey buddy, who told you you could feel up my wife? An what do yoiu think he said? 1. I couldn't guess / 2. Nobody / 3.Everybody")
        switch (userInput){
        case "1" :
            answer = "Sure you could";
            break;
        case "2" :
            answer = "I wish";
            break;
        case "3" :
            answer = "I tell ya no respect";
            break;
}
    if(userInput){
        anotherQuestion();
    }else{
        nextQuestion();
    }
}
    const anotherQuestion = () => {
        for(let userInput = readline.question("Once when I was kidnapped they sent my father one of my fingers. Know what he told them? yes/no? ").toLowerCase(); userInput !== "yes";){
            if(userInput === "yes"){
                console.log("He said he wanted more proof.")
          
        }
    }

        oneMore();
    }

    const oneMore = () => {
        for(let userInput = readline.question("I tell ya its not like I'm compleatly innocent in all this either. I'm a terrible lover, you know what happened when a peeping tom came to my house? yes/no").toLowerCase(); userInput !== "yes";){
            if(userInput !== "no"){
                console.log("he started booing me.")
            }
        }
        otherQuestion();
    }

    const otherQuestion = () => {
        for(let userInput = readline.question("A girl phoned me and said, “Come on over. There’s nobody home.” I went over, and what do you think happened next? Nothing / Let me know").toLowerCase(); userInput !== "let me know"; ){
            if(userInput !== "nothing"){
                console.log("Well let me tell ya, I went over and nobody was home!")
            }
        }
        lastOne();
    }

    const lastOne = () => {
        for(let userInput = readline.question("But all in all I can't complain, there's this story I heard about recently that I think about whenever I get too down. Want to hear it? yes / no").toLowerCase(); userInput !== "yes";){
            if(userInput !== "no"){
                console.log("I knew a girl so ugly, they use her in prisons to cure sex offenders.")
            }
        }
    }
play()