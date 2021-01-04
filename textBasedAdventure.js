const rls = require('readline-sync')

const chalk = require('chalk')



function gameStart() {
    let yourName = rls.question("Enter your name: ")
    
    console.log(`Welcome to my game ${yourName}! \nI invite you to play this game with the intent of getting the best possible ending. Remember that - much like in real life - your choices matter! \nP.S. try to get the best ending before looking through the code ;)\n`)

    let startPrompt = rls.keyInYN(chalk.black.bgWhite.bold("Would you like to play my game? "))
        if (startPrompt) {
            gameLoop()
        }
        else {
            endGame()
        }
}

function playAgain() {
    answer = rls.keyInYN("Would you like to play again?")
    if (answer = true) {
        gameLoop()
    }
    else if (answer = false) {
        endGame()
    }
    else {
        console.log("Invalid input. Please press y or n")
    }
}

function endGame() {
    console.log("Goodbye")
    process.exit()
}


function gameLoop() {

    scenarioOne()
    console.log(`You currently have ${loveCounter} love points`)
    console.log(`Time counter: ${timeCounter}`)
    scenarioTwo()
    console.log(`You currently have ${loveCounter} love points`)
    console.log(`Time counter: ${timeCounter}`)
    scenarioThree()
    console.log(`You currently have ${loveCounter} love points`)
    console.log(`Time counter: ${timeCounter}`)
    scenarioFour()
    console.log(`You currently have ${loveCounter} love points`)
    console.log(`Time counter: ${timeCounter}`)
    scenarioFive()
    console.log(`You currently have ${loveCounter} love points`)
    console.log(`Time counter: ${timeCounter}`)
    scenarioSix()
    console.log(`You currently have ${loveCounter} love points`)
    console.log(`Time counter: ${timeCounter}`)
    scenarioSeven()
    console.log(`You currently have ${loveCounter} love points`)
    console.log(`Time counter: ${timeCounter}`)
    scenarioWalkHome()
}


// This increments at the end of every scenario
let timeCounter = 0
function timeIncrement(num) {
    if (num === undefined) {
        return timeCounter++
    }
    else {
        return timeCounter = timeCounter + num
    }
}


//This either increments or decrements at the end of every scenario
let loveCounter = 0
function loveIncrement(num) {
    if (num === undefined) {
        return loveCounter++
    }
    else {
        return loveCounter = loveCounter + num
    }
}
function loveDecrement (num) {
    if (num === undefined) {
        return loveCounter--
    }
    else {
        return loveCounter -= num
    }
}


function scenarioOne() {
    console.log("\nThe alarm rings. Oh no! You’re late to class! After scrounging for your belongings, you run for the bus. You’re almost there. You see the bus approach to drop passengers off. You’re seconds away from missing it. The bus stop is right around the corner. If you slow down, you risk missing the bus. If you run past the corner, you don’t know what’s beyond it.")
    let leaveLoop = 0

    while (leaveLoop < 1) {
        let answer = rls.keyInYN("Will you continue to run as you round the corner?")   

        if (answer === true) {
            console.log("You knock over a young lady. You stop to help her to her feet. You notice an angry look on her face. She yells 'Was running for the bus worth it?!' The bus takes off. To your amazement, the scowl on her face reverts. She gazes at your face with a confusing look of captivation. You apologize profusely. While she gives the body language that she still seems to mind, she simultaneously seems enchanted. She asks you what your name is. You’ve got an hour before the next bus shows up so you can make it to your next class. The two of you begin conversing. Her name is Ella.\n");
            loveDecrement();
            leaveLoop++
            }
        else if (answer === false) {
            console.log("You slow down. You notice a young lady reaching the corner just as you round it. You have missed the bus. The young lady has noticed that you’ve slowed down and missed the bus. She thanks you for being careful. She gazes at your face with a look of allure. She doesn’t understand why. She asks you what your name is. You’ve got an hour before the next bus shows up so you can make it to your next class. The two of you begin conversing. Her name is Ella.\n");
            loveIncrement();
            leaveLoop++
        }
        else {
            console.log("\nInvalid input. Please provide a valid response of either y/n")
        }
}
    timeIncrement()		 
}		//end scenarioOne


function scenarioTwo() {
    console.log("You wonder why such an attractive young lady is giving you the time of day. She’s so interesting. She’s nothing like the generic expectations you’d normally have if you saw her but hadn’t spoken to her. You begin thinking of the age-old paradox of the dating game: if you come across as too enthusiastic, you risk repelling the very person you’re attracted to.")

    let options = ["Play aloof. She might like me more.", "Show interest, but don't engage so much that it comes off as desperate.", "Playing it cool is bs. This girl is awesome, and I want to show her how awesome she is."]
    let leaveLoop = 0

    while (leaveLoop < 1) {
        let answer = rls.keyInSelect(options, "What's your gameplan? (1-3)") 

        if (answer === 0) {
            console.log("You play it cool. She tries to tell you of all these interesting things, but you seem unresponsive. She feels like she’s talking to herself. She wonders if you’re even interested. Her fervor starts to die down. In a desperate attempt to retain her interest, you start talking about how much you loved that movie by Takashi Miike she mentioned earlier. She asks why you remained quiet as she spoke about it. You lie that you just didn’t feel talking, even though you were dying to nerd out. Sounds like a cheap excuse.")
            loveDecrement()
            leaveLoop++
        }
        else if (answer === 1) {
            console.log("She goes off on the movies she's into. You reciprocate with a little back and forth, but you aren't letting her know exactly how much you're loving this conversation. You try to hold back a huge smile every time you feel it coming across your face. She seems happy that she met somebody with similar interests, but a part of her feels like she should be more reserved. She wishes you shared the same enthusiasm that she does.")
            loveIncrement()
            leaveLoop++
        }
        else if (answer === 2) {
            console.log("A voice inside tells you not to care so much what others think. You let go of your reservations. The more you do this, the more positively she responds. You forget you're talking to somebody you're attracted to. Not doing so left you acting standoffish in the past, mostly as some type of defense mechanism, so you pretended that you didn't care. This is different. You talk about your favorite animes. You share a love of biology and chemistry. You even get into you past experiences, and even touch on traumas. She stops suddenly. It seems like something she's uncomfortable sharing, so you don't press it.")
            loveIncrement(2)
            leaveLoop++
        }
        else {
            console.log("\nInvalid input. Please choose from numbers 1-3")
        }
    }
    timeIncrement()
        
}       //end scenarioTwo


function scenarioThree() {
    console.log("Another bus rolls by. You’re enjoying the conversation so much, that you haven’t noticed the time. You missed it again! Have you two been talking for an hour already???")

    for (let leaveLoop = 0; leaveLoop < 1;) {
        answer = rls.keyInYN("Do you yell in frustration?")

        if (answer) {
            console.log("Ella looks at you with a shocked expression. You apologize for the sudden outburst.")
            loveDecrement()
            leaveLoop++
        }
        else if (answer === false) {
            console.log("No use worrying about it now. You just met this awesome person, and you want to keep hanging out with her. Ella appreciates your calm demeanor, and takes it as eagerness to spend more time with her.")
            loveIncrement()
            leaveLoop++
        }
        else {
            console.log("\nThat is not a valid response. Please use y/n")
        }
    }
    timeIncrement()

}


function scenarioFour() {
    console.log("You decide you might as well just ditch today. You missed half your day’s classes already. Your attendance was perfect for this semester, so you can spare missing a few classes. Ella exclaims ‘I’m sorry. If I hadn’t distracted you so much, you wouldn’t have missed that last bus.’ You assure her that it’s ok. You’d much rather spend time with her than in your boring classes. Except biology class, which you both love. She asks ‘Do you feel like doing anything?’")

    let options = ["Sure, let’s take a walk!", "Netflix and chill?", "Hmmm. Not sure. What do you feel like doing?"]
    let leaveLoop = 0
while (leaveLoop < 1) {    
    let answer = rls.keyInSelect(options, "What will you suggest?")

if (answer === 0) {
    console.log("Ella seems excited. ‘I’d love to walk around.’ She appreciates that you took it upon yourself to figure something out, since she was unsure. Of course, it helps that she loves to take walks.")
    loveIncrement(2)
    console.log("Ella's body language is radiant. She loudly proclaims 'I'm so glad that you suggested taking this walk.'")
        let options2 = ["Oh, I love walking too. We get to talk AND enjoy the scenery.", "It was my second choice honestly. I'd rather sit on a bench and quietly joke about people who walk by"]
        let exitLoop = 0
        while (exitLoop < 1) {
            answer2 = rls.keyInSelect(options2, "How will you respond?")
            if (answer2 === 0) {
                console.log("A fellow lover of long walks? ^__^")
                loveIncrement(2)
                exitLoop++
            }
            else if (answer2 === 1) {
                console.log("That's so mean! It's funny though...")
                loveIncrement()
                exitLoop++
            }
            else{
                console.log("\nInvalid input. Please pick either 1 or 2")
            }
        }

    leaveLoop++
}

else if (answer === 1) {
    console.log("‘Are you joking?!’ Ella looks at you with a meaner scowl than when you tackled her on your way to the bus. She’s disappointed. I’m just a narrator, but even I need to interject that you need to learn some tact, buddy. You try to play it off as if you’re kidding, but she sees right through you. You now feel embarrassed. After a full minute of awkward silence, she says ‘Let’s go for a walk.’ At this point you know better than to say no.")
    loveDecrement(3)
    console.log("You realize the consequences of what you said can and will cost you Ella's trust. You think of what to say to regain her trust. ")
        let options2 = ["I really was joking about what I said back there...", "I'm sorry Ella. What I said back there was rude. I don't expect you to forget, just know that I'm sorry."]
        let exitLoop = 0
        while (exitLoop < 1) {
            answer2 = rls.keyInSelect(options2, "How will you break the silence?")
            if (answer2 === 0) {
                console.log("You can see a wave of seriousness wash over Ella's face. She sees right through you again. When will you learn?")
                loveDecrement()
                exitLoop++
            }
            else if (answer2 === 1) {
                console.log("Ella thinks about it for a second. 'It's alright. Maybe it's best not to mention it anymore. But I appreciate the honesty'")
                loveIncrement(2)
                exitLoop++
            }
            else {
                console.log("Invalid input. Pick either 1 or 2")
            }
        }

    leaveLoop++
}

else if (answer === 2) {
    console.log("Ella thinks for a few seconds. ‘I didn’t want to do the brainwork of figuring something out, that’s why I asked YOU haha! Hmmm...") 
    loveIncrement()
    console.log("Ella thinks for a few minutes. Well, we can play a road game from this bench when people pass by. Orrr we can go for a walk!’")
        let options2 = ["A walk sounds great!", "Let's play the game. I love making fun of people walking by"]
        let exitLoop = 0
        while (exitLoop < 1) {
            let answer2 = rls.keyInSelect(options2, "Both options sound good, which one will you pick?")
            if (answer2 === 0) {
                console.log("Ella: 'That sounds like my favorite option of the two honestly.'")
                loveIncrement()
                exitLoop++
            }
            else if (answer2 === 1) {
                console.log("Ella: 'I regretted coming up with that idea right after I mentioned it. It's so mean lol'")
                exitLoop++
            }
            else {
                console.log("Invalid input. Pick either 1 or 2")
            }
        }
    leaveLoop++
}

else {
        console.log("\nInvalid input. Please pick numbers 1-3")
}
}
    timeIncrement(2)
}



function scenarioFive() {

    console.log("It's a beautiful day. You two share everything, right down to your favorite fruits. Hers are strawberries. Yours are blueberries. You resume your conversation about movies. Ella mentions she's not interested in any of the movies currently playing in theaters. Even the independent theaters are short on great movies because there's nothing out in the market. So the indie theaters are playing the same thing as the mainstream theaters. She asks for the last great movie you've watched.")

    let movies = ["That last Star Wars was pretty amazing!", "Park Chan-wook knocked out a banger with The Handmaiden", "I really loved the latest addition to the Transformers franchise"]
    let leaveLoop = 0
    while (leaveLoop < 1) {
        let answer = rls.keyInSelect(movies, "Hmmm the last great movie I watched...")

        if (answer === 0) {
            console.log("Ella: 'Star Wars is ok. I like the direction Abrams was taking it in. But that last movie felt too rushed, like they were trying to cram too many characters and locations into one movie'")
            leaveLoop++
        }
        else if (answer === 1) {
            console.log("Ella: 'Wow, I agree! That film was so great. The suspense, the beautiful imagery of the Victorian era that he was new in implementing. What else would we expect from the master of thrillers that brought us Oldboy and - arguably better in my opinion - Lady Vengeance'")
            loveIncrement()
            leaveLoop++
        }
        else if (answer === 2) {
            console.log("Ella: 'uhh Transformers was alright I guess. Did you say you liked Takashi Miike earlier?'")
            loveDecrement()
            leaveLoop++
        }
        else {
            console.log("Invalid input. Please choose from numbers 1-3\n")
        }
    }

    timeIncrement()
}


function scenarioSix() {
    console.log("You guys come across a hot dog stand. Ella mentions she's hungry, but she also needs to use the bathrooms. She only wants one hot dog. You can only eat two.")
    let options = ["'I'll get you the hot dog. It'll be waiting for you when you get back'", "'Ok, I'll wait til you get back so we can buy it'"]
    let leaveLoop = 0

    while (leaveLoop < 1) {
        let answer = rls.keyInSelect(options, "Will you wait for her to get back?")
        if (answer === 0) {
            console.log("Ella thanks you and runs to the bathroom. Guess she really had to go. You walk up to the hot dog stand")
            loveIncrement()
            leaveLoop++
        }
        else if (answer === 1) {
            console.log("Ella wonders why you didn't just buy it instead of waiting. She runs to the bathroom. You catch some shade under a tree while you wait. She returns. You're now ready to buy the hot dog. You both walk up to the hot dog stand, but then Ella sees a Corgi dog, and starts playing with it while calling it baby names. You decide to just buy both your hot dogs without her. (oh, so NOW you decide to buy it without her??)")
            loveDecrement()
            leaveLoop++
        }
        else {
            console.log("Invalid input. Please choose 1 or 2")
        }
    }

    let exitLoop = 0
    while (exitLoop < 1) {
        let answer2 = rls.question("How many hot dogs will you buy? (Choose number and press enter) ")
        if (answer2 < 1) {
            console.log("You've decided not to buy any hot dogs. Ella looks disappointed.")
            loveDecrement(2)
            exitLoop++
        }
        else if (answer2 > 3) {
            console.log("You can only eat two hotdogs. Ella assures you that she only wanted one. But she forces herself to eat the rest because she hates seeing food go to waste. She seems really full, and slightly unhappy that you weren't listening to her")
            loveDecrement()
            exitLoop++
        }
        else if (answer2 <= 3) {
                console.log("Ella thanks you for the hot dog. She only wanted one, so you bought just enough. She's happy that you listened earlier")
                loveIncrement(2)
                exitLoop++
        }
        else {
            console.log("Invalid input. Please choose a number and press enter")
        }
    }

    timeIncrement(2)
}


function scenarioSeven() {
    console.log("Your journey with Ella takes you across one of those fancy new whole foods markets in town. She mentions how much she loves being in a supermarket. Browsing the aisles while looking at all the different products (some of which she's never even heard of before) gives her a nice feeling in her tummy. She doesn't know why. She seems like she wants to go in.")
    let options = ["'Would you like to go in?'", "'I feel like walking around some more'"]
    let leaveLoop = 0
    while (leaveLoop < 1) {
        let answer = rls.keyInSelect(options, "What will you do?")
        if (answer === 0) {
            console.log("Ella: 'Yesss! Let's go!'")
            loveIncrement(2)
            leaveLoop++
        }
        else if (answer === 1) {
            console.log("Ella: 'Are you sure? Can we please go in? If there's anything I would've liked to do most today, it's this!'")
            loveDecrement()
            console.log("Current love points: " + loveCounter)
        }
        else {
            console.log("Invalid input. Please choose 1 or 2")
        }
    }
    console.log("You enter the supermarket. Ella looks elated. She reminds you about that nice feeling she gets in her tummy. You can slightly understand what she's talking about. In fact, you can feel it yourself. Especially while you walk past the frozen foods section. Maybe it's something you've always felt but have never noticed. She tells you to pay special attention to the smells. You follow her instructions, and you understand what she means. This girl is amazing. As you loop back around near the front of the store after walking through every aisle, Ella asks if you'd like to buy anything before we leave. She said it in a tone the hinted she was craving something")

    let foodOptions = ["cereal", "milk", "eggs", "fruits", "peanut butter", "bread"]
    let exitLoop = 0
    while (exitLoop < 1) {
        let buyFood = rls.keyInSelect(foodOptions, "What would you like to buy? ")
        if (buyFood === 3) {    
            let fruits = ["bananas", "blueberries", "pears", "apples", "kiwis", "strawberries", "oranges"]
            let buyFruit = rls.keyInSelect(fruits, "Which fruit will you buy? ")
            if (buyFruit === 5) {
                console.log("You tell her you have something in mind, but you won't tell her what it is. You tell her to wait. You walk to the produce section, and grab a case of strawberries. You walk toward her while holding the strawberries, and she hugs you. She looks at you with a huge smile on her face. She's so happy you remembered")
                loveIncrement(4)
            }
            else {
                console.log("You're going to enjoy these later! Ella looks dissapointed. You don't understand why.")
                loveDecrement(2)
            }
            exitLoop++
        }
        else {
            console.log("You're going to enjoy these later! Ella looks dissapointed. You don't understand why.")
            loveDecrement(2)
            exitLoop++
        }
    }

    timeIncrement(2)
}


function scenarioWalkHome() {
    console.log("\nThe two of you get your last fills of each other as the day winds down. Your conversation continues even as you approach the front of her house. Ella says 'Well, this is me.'")

    if (loveCounter >= 9) {
        console.log("Today was such a great day! You think back at how great it was, but you snap out of it just as Ella leans in for a kiss. You're probably as shocked as I am, and I'm a narrator. I already knew what was going to happen!")
        survivalScenario()
    }
    else {
        console.log("The day could've been so much better. You've never had an experience like this, where you happen to come across somebody you like this much by chance. You regret making certain choices in her presence. She shakes your hand and tells you she had a good day. She walks in. You'll probably never see her again. A nagging voice inside you says maybe it's for the best...")
        playAgain()
    }
}


function survivalScenario() {
    
}


gameStart()