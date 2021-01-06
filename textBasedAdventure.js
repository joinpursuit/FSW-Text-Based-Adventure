const rls = require('readline-sync')

const chalk = require('chalk')

let yourName = rls.question("Enter your name: ")    
    
console.log(`Welcome to my game ${yourName}! \nI invite you to play this game with the intent of getting the best possible ending. Remember that - much like in real life - your choices matter!\nGet ready to open your heart to romance!`)

rls.question("Press number or string keys when prompted. Press the 'Enter' key to continue past dialogue...")

rls.question("P.S. try to get the best ending before looking through the code ;)\n")


function gameStart() {
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
    if (answer === true) {
        hp = 4
        gameLoop()
    }
    else if (answer === false) {
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
    console.log(``)
    scenarioTwo()
    console.log(`You currently have ${loveCounter} love points`)
    console.log(``)
     scenarioThree()
     console.log(`You currently have ${loveCounter} love points`)
     console.log(``)
    scenarioFour()
    console.log(`You currently have ${loveCounter} love points`)
    console.log(``)
     scenarioFive()
     console.log(`You currently have ${loveCounter} love points`)
     console.log(``)
    scenarioSix()
    console.log(`You currently have ${loveCounter} love points`)
    console.log(``)
     scenarioSeven()
     console.log(`You currently have ${loveCounter} love points`)
     console.log('')
    scenarioWalkHome()
    console.log('')
    transitionScenario()
    console.log('')
    survivalScenario()
    console.log('')
    firstFloorScenario()

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
    rls.question("\nThe alarm rings. Oh no! You’re late to class! After scrounging for your belongings, you run for the bus. You’re almost there. You see the bus approach to drop passengers off. You’re seconds away from missing it. The bus stop is right around the corner. If you slow down, you risk missing the bus. If you run past the corner, you don’t know what’s beyond it.")
    let leaveLoop = 0

    while (leaveLoop < 1) {
        let answer = rls.keyInYN("Will you continue to run as you round the corner?")   

        if (answer === true) {
            rls.question("You knock over a young lady. You stop to help her to her feet. You notice an angry look on her face. She yells 'Was running for the bus worth it?!' The bus takes off. To your amazement, the scowl on her face reverts. She gazes at your face with a confusing look of captivation. You apologize profusely. While she gives the body language that she still seems to mind, she simultaneously seems enchanted. She asks you what your name is. You’ve got an hour before the next bus shows up so you can make it to your next class. The two of you begin conversing. Her name is Ella.\n");
            loveDecrement();
            leaveLoop++
            }
        else if (answer === false) {
            rls.question("You slow down. You notice a young lady reaching the corner just as you round it. You have missed the bus. The young lady has noticed that you’ve slowed down and missed the bus. She thanks you for being careful. She gazes at your face with a look of allure. She doesn’t understand why. She asks you what your name is. You’ve got an hour before the next bus shows up so you can make it to your next class. The two of you begin conversing. Her name is Ella.\n");
            loveIncrement();
            leaveLoop++
        }
        else {
            rls.question("\nInvalid input. Please provide a valid response of either y/n")
        }
}
    timeIncrement()		 
}		//end scenarioOne


function scenarioTwo() {
    rls.question("You wonder why such an attractive young lady is giving you the time of day. She’s so interesting. She’s nothing like the generic expectations you’d normally have if you saw her but hadn’t spoken to her. You begin thinking of the age-old paradox of the dating game: if you come across as too enthusiastic, you risk repelling the very person you’re attracted to.")

    let options = ["Play aloof. She might like me more.", "Show interest, but don't engage so much that it comes off as desperate.", "Playing it cool is bs. This girl is awesome, and I want to show her how awesome she is."]
    let leaveLoop = 0

    while (leaveLoop < 1) {
        let answer = rls.keyInSelect(options, "What's your gameplan? (1-3)") 

        if (answer === 0) {
            rls.question("You play it cool. She tries to tell you of all these interesting things, but you seem unresponsive. She feels like she’s talking to herself. She wonders if you’re even interested. Her fervor starts to die down. In a desperate attempt to retain her interest, you start talking about how much you loved that movie by Takashi Miike she mentioned earlier. She asks why you remained quiet as she spoke about it. You lie that you just didn’t feel talking, even though you were dying to nerd out. Sounds like a cheap excuse.")
            loveDecrement()
            leaveLoop++
        }
        else if (answer === 1) {
            rls.question("She goes off on the movies she's into. You reciprocate with a little back and forth, but you aren't letting her know exactly how much you're loving this conversation. You try to hold back a huge smile every time you feel it coming across your face. She seems happy that she met somebody with similar interests, but a part of her feels like she should be more reserved. She wishes you shared the same enthusiasm that she does.")
            loveIncrement()
            leaveLoop++
        }
        else if (answer === 2) {
            rls.question("A voice inside tells you not to care so much what others think. You let go of your reservations. The more you do this, the more positively she responds. You forget you're talking to somebody you're attracted to. Not doing so left you acting standoffish in the past, mostly as some type of defense mechanism, so you pretended that you didn't care. This is different. You talk about your favorite animes. You share a love of biology and chemistry. You even get into you past experiences, and even touch on traumas. She stops suddenly. It seems like something she's uncomfortable sharing, so you don't press it.")
            loveIncrement(2)
            leaveLoop++
        }
        else {
            rls.question("\nInvalid input. Please choose from numbers 1-3")
        }
    }
    timeIncrement()
        
}       //end scenarioTwo


function scenarioThree() {
    rls.question("Another bus rolls by. You’re enjoying the conversation so much, that you haven’t noticed the time. You missed it again! Have you two been talking for an hour already???")

    for (let leaveLoop = 0; leaveLoop < 1;) {
        answer = rls.keyInYN("Do you yell in frustration?")

        if (answer) {
            rls.question("Ella looks at you with a shocked expression. You apologize for the sudden outburst.")
            loveDecrement()
            leaveLoop++
        }
        else if (answer === false) {
            console.log("No use worrying about it now. You just met this awesome person, and you want to keep hanging out with her. Ella appreciates your calm demeanor, and takes it as eagerness to spend more time with her.")
            loveIncrement()
            leaveLoop++
        }
        else {
            rls.question("\nThat is not a valid response. Please use y/n")
        }
    }
    timeIncrement()

}


function scenarioFour() {
    rls.question("You decide you might as well just ditch today. You missed half your day’s classes already. Your attendance was perfect for this semester, so you can spare missing a few classes. Ella exclaims ‘I’m sorry. If I hadn’t distracted you so much, you wouldn’t have missed that last bus.’ You assure her that it’s ok. You’d much rather spend time with her than in your boring classes. Except biology class, which you both love. She asks ‘Do you feel like doing anything?’")

    let options = ["Sure, let’s take a walk!", "Netflix and chill?", "Hmmm. Not sure. What do you feel like doing?"]
    let leaveLoop = 0
while (leaveLoop < 1) {    
    let answer = rls.keyInSelect(options, "What will you suggest?")

if (answer === 0) {
    rls.question("Ella seems excited. ‘I’d love to walk around.’ She appreciates that you took it upon yourself to figure something out, since she was unsure. Of course, it helps that she loves to take walks.")
    loveIncrement(2)
    rls.question("Ella's body language is radiant. She loudly proclaims 'I'm so glad that you suggested taking this walk.'")
        let options2 = ["Oh, I love walking too. We get to talk AND enjoy the scenery.", "It was my second choice honestly. I'd rather sit on a bench and quietly joke about people who walk by"]
        let exitLoop = 0
        while (exitLoop < 1) {
            answer2 = rls.keyInSelect(options2, "How will you respond?", {cancel: false})
            if (answer2 === 0) {
                rls.question("A fellow lover of long walks? ^__^")
                loveIncrement(2)
                exitLoop++
            }
            else if (answer2 === 1) {
                rls.question("That's so mean! It's funny though...")
                loveIncrement()
                exitLoop++
            }
            else{
                rls.question("\nInvalid input. Please pick either 1 or 2")
            }
        }

    leaveLoop++
}

else if (answer === 1) {
    rls.question("‘Are you joking?!’ Ella looks at you with a meaner scowl than when you tackled her on your way to the bus. She’s disappointed. I’m just a narrator, but even I need to interject that you need to learn some tact, buddy. You try to play it off as if you’re kidding, but she sees right through you. You now feel embarrassed. After a full minute of awkward silence, she says ‘Let’s go for a walk.’ At this point you know better than to say no.")
    loveDecrement(3)
    rls.question("You realize the consequences of what you said can and will cost you Ella's trust. You think of what to say to regain her trust. ")
        let options2 = ["I really was joking about what I said back there...", "I'm sorry Ella. What I said back there was rude. I don't expect you to forget, just know that I'm sorry."]
        let exitLoop = 0
        while (exitLoop < 1) {
            answer2 = rls.keyInSelect(options2, "How will you break the silence?")
            if (answer2 === 0) {
                rls.question("You can see a wave of seriousness wash over Ella's face. She sees right through you again. When will you learn?")
                loveDecrement()
                exitLoop++
            }
            else if (answer2 === 1) {
                rls.question("Ella thinks about it for a second. 'It's alright. Maybe it's best not to mention it anymore. But I appreciate the honesty'")
                loveIncrement(2)
                exitLoop++
            }
            else {
                rls.question("Invalid input. Pick either 1 or 2")
            }
        }

    leaveLoop++
}

else if (answer === 2) {
    rls.question("Ella thinks for a few seconds. ‘I didn’t want to do the brainwork of figuring something out, that’s why I asked YOU haha! Hmmm...") 
    loveIncrement()
    rls.question("Ella thinks for a few minutes. Well, we can play a road game from this bench when people pass by. Orrr we can go for a walk!’")
        let options2 = ["A walk sounds great!", "Let's play the game. I love making fun of people walking by"]
        let exitLoop = 0
        while (exitLoop < 1) {
            let answer2 = rls.keyInSelect(options2, "Both options sound good, which one will you pick?")
            if (answer2 === 0) {
                rls.question("Ella: 'That sounds like my favorite option of the two honestly.'")
                loveIncrement()
                exitLoop++
            }
            else if (answer2 === 1) {
                rls.question("Ella: 'I regretted coming up with that idea right after I mentioned it. It's so mean lol'")
                exitLoop++
            }
            else {
                rls.question("Invalid input. Pick either 1 or 2")
            }
        }
    leaveLoop++
}
else {
    rls.question("\nInvalid input. Please pick numbers 1-3")
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
            rls.question("Ella: 'Star Wars is ok. I like the direction Abrams was taking it in. But that last movie felt too rushed, like they were trying to cram too many characters and locations into one movie'")
            leaveLoop++
        }
        else if (answer === 1) {
            rls.question("Ella: 'Wow, I agree! That film was so great. The suspense, the beautiful imagery of the Victorian era that he was new in implementing. What else would we expect from the master of thrillers that brought us Oldboy and - arguably better in my opinion - Lady Vengeance'")
            loveIncrement()
            leaveLoop++
        }
        else if (answer === 2) {
            rls.question("Ella: 'uhh Transformers was alright I guess. Did you say you liked Takashi Miike earlier?'")
            loveDecrement()
            leaveLoop++
        }
        else {
            rls.question("Invalid input. Please choose from numbers 1-3\n")
        }
    }

    timeIncrement()
}


function scenarioSix() {
    rls.question("You guys come across a hot dog stand. Ella mentions she's hungry, but she also needs to use the bathrooms. She only wants one hot dog. You can only eat two.")
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
            rls.question("Ella wonders why you didn't just buy it instead of waiting. She runs to the bathroom. You catch some shade under a tree while you wait. She returns. You're now ready to buy the hot dog. You both walk up to the hot dog stand, but then Ella sees a Corgi dog, and starts playing with it while calling it baby names. You decide to just buy both your hot dogs without her. (oh, so NOW you decide to buy it without her??)")
            loveDecrement()
            leaveLoop++
        }
        else {
            rls.question("Invalid input. Please choose 1 or 2")
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
            rls.question("You can only eat two hotdogs. Ella assures you that she only wanted one. But she forces herself to eat the rest because she hates seeing food go to waste. She seems really full, and slightly unhappy that you weren't listening to her")
            loveDecrement()
            exitLoop++
        }
        else if (answer2 <= 3) {
            rls.question("Ella thanks you for the hot dog. She only wanted one, so you bought just enough. She's happy that you listened earlier")
                loveIncrement(2)
                exitLoop++
        }
        else {
            rls.question("Invalid input. Please choose a number and press enter")
        }
    }

    timeIncrement(2)
}


function scenarioSeven() {
    rls.question("Your journey with Ella takes you across one of those fancy new whole foods markets in town. She mentions how much she loves being in a supermarket. Browsing the aisles while looking at all the different products (some of which she's never even heard of before) gives her a nice feeling in her tummy. She doesn't know why. She seems like she wants to go in.")
    let options = ["'Would you like to go in?'", "'I feel like walking around some more'"]
    let leaveLoop = 0
    while (leaveLoop < 1) {
        let answer = rls.keyInSelect(options, "What will you do?")
        if (answer === 0) {
            rls.question("Ella: 'Yesss! Let's go!'")
            loveIncrement(2)
            leaveLoop++
        }
        else if (answer === 1) {
            rls.question("Ella: 'Are you sure? Can we please go in? If there's anything I would've liked to do most today, it's this!'")
            loveDecrement()
            rls.question("Current love points: " + loveCounter)
        }
        else {
            rls.question("Invalid input. Please choose 1 or 2")
        }
    }
    rls.question("You enter the supermarket. Ella looks elated. She reminds you about that nice feeling she gets in her tummy. You can slightly understand what she's talking about. In fact, you can feel it yourself. Especially while you walk past the frozen foods section. Maybe it's something you've always felt but have never noticed. She tells you to pay special attention to the smells. You follow her instructions, and you understand what she means. This girl is amazing. As you loop back around near the front of the store after walking through every aisle, Ella asks if you'd like to buy anything before we leave. She said it in a tone that hinted she was craving something")

    let fruits = rls.question("What will you buy? ")
    if (fruits === "strawberries") {
        rls.question("You tell her you have something in mind, but you won't tell her what it is. You tell her to wait. You walk to the produce section, and grab a case of strawberries. You walk toward her while holding the strawberries, and she hugs you. She looks at you with a huge smile on her face. She's so happy you remembered")
        loveIncrement(5)
    }
    else if (fruits === "strawberry") {
        rls.question("You tell her you have something in mind, but you won't tell her what it is. You tell her to wait. You walk to the produce section, and grab a case of strawberries. You walk toward her while holding the strawberries, and she hugs you. She looks at you with a huge smile on her face. She's so happy you remembered")
        loveIncrement(5)
    }
    else {
        rls.question("You're going to enjoy these later! Ella looks dissapointed. You don't understand why.")
        loveDecrement()
    }

    // let foodOptions = ["cereal", "milk", "eggs", "fruits", "peanut butter", "bread"]
    // let exitLoop = 0
    // while (exitLoop < 1) {
    //     let buyFood = rls.keyInSelect(foodOptions, "What would you like to buy? ")
    //     if (buyFood === 3) {    
    //         let fruits = ["bananas", "blueberries", "pears", "apples", "kiwis", "strawberries", "oranges"]
    //         let buyFruit = rls.keyInSelect(fruits, "Which fruit will you buy? ")
    //         if (buyFruit === 5) {
    //             console.log("You tell her you have something in mind, but you won't tell her what it is. You tell her to wait. You walk to the produce section, and grab a case of strawberries. You walk toward her while holding the strawberries, and she hugs you. She looks at you with a huge smile on her face. She's so happy you remembered")
    //             loveIncrement(4)
    //         }
    //         else {
    //             console.log("You're going to enjoy these later! Ella looks dissapointed. You don't understand why.")
    //             loveDecrement(2)
    //         }
    //         exitLoop++
    //     }
    //     else {
    //         console.log("You're going to enjoy these later! Ella looks dissapointed. You don't understand why.")
    //         loveDecrement(2)
    //         exitLoop++
    //     }
    // }

    timeIncrement(2)
}


function scenarioWalkHome() {
    rls.question("\nThe two of you get your last fills of each other as the day winds down. Your conversation continues even as you approach the front of her house. Ella says 'Well, this is me.'")

    if (loveCounter >= 9) {
        rls.question("Today was such a great day! You think back at how great it was, but you snap out of it just as Ella leans in for a kiss. You're probably as shocked as I am, and I'm a narrator. I already knew what was going to happen!")
        transitionScenario()
    }
    else {
        rls.question("The day could've been so much better. You've never had an experience like this, where you happen to come across somebody you like this much by chance. You regret making certain choices in her presence. She shakes your hand and tells you she had a good day. She walks in. You'll probably never see her again. A nagging voice inside you says maybe it's for the best...")
        playAgain()
    }
}



function transitionScenario() {
    rls.question("You walk into her home. She lives in a house by herself? You ask what of her parents. She tells you that they died years ago, and she inherited the house. She asks you to sit, and offers you a drink.")
    
    let drinks = ["pepsi", "wine", "orange juice", "water -- your favorite!"]
    let drinkLoop = 0
    while (drinkLoop < 1) {
        let whichDrink = rls.keyInSelect(drinks, "Which drink will you choose? ")
        
        if (whichDrink === 0) {
            rls.question("She leaves and comes back with your drink. You take a couple of chugs. You didn't realize how parched you were until she brought the drink back.")
            drinkLoop++
        }
        else if (whichDrink === 1) {
            console.log("She leaves and comes back with your drink. You take a couple of chugs. You didn't realize how parched you were until she brought the drink back.")
            drinkLoop++
        }
        else if (whichDrink === 2) {
            console.log("She leaves and comes back with your drink. You take a couple of chugs. You didn't realize how parched you were until she brought the drink back.")
            drinkLoop++
        }
        else if (whichDrink === 3) {
            rls.question("Sorry. The only water in the house is from the tap, and the plumbing has some issues so the water comes out dirty. Choose another drink")
        }
        else {
            rls.question("Invalid input. Please choose numbers 1-4")
        }
    }
    rls.question("You ask if the drink is supposed to taste like this. She apologizes that it might be a bit stale. She tells you that it's been so long since she last met somebody she liked as much as you. She admits that she's falling in love with you. You think to yourself 'On the first day??' You start to feel lightheaded and weak.")
    rls.question("Ella: 'Everything will be ok, now that you're here with me.' You now understand why she didn't want to give you water earlier: you would taste the date rape drug. You try to stand up, but your body goes limp. You fall to the floor and black out.")
}


let hp = 4
function loseHP(num) {
    if (num === undefined) {
        hp = hp - 1
        console.log(`\nYou've lost 1 hp`)
        if (hp < 0) {
            console.log(`You have 0 hp left\n`)
        }
        else {
            console.log(`You have ${hp} hp left\n`)
        }
    }
    else {
        hp = hp - num
        console.log(`\nYou've lost ${num} hp`)
        if (hp < 0) {
            console.log(`You have 0 hp left\n`)
        }
        else {
            console.log(`You have ${hp} hp left\n`)
        }
        
    }
    if (hp < 1) {
        youDied()
    }
}

function youDied() {
    rls.question("You collapse as you draw your last breath. You hear Ella say 'You see what you made me do??'\nIt's the last thing you ever hear.")
    playAgain()
}


function survivalScenario() {
    rls.question("\nYou wake up in what looks like a basement. It's dark. You briefly look around and there's nobody in sight. You feel a sharp pain behind your right ankle. You realize that Ella has cut across your achilles’ tendon. Your hands are bound with what feels like sash behind you, tied around a radiator pipe. You can feel the rust scraping against your skin. You see a bloody scapel about 6 feet away. It's probably what she used to cut across your tendon.\n")

    let choices = ["Try to wriggle your hands free from the sash", "Reach for the scalpel with your feet", "Yell for help as loud as you can", "Look around some more"]
    let wakeUpLoop = 0
    while (wakeUpLoop < 1) {
        let wakeUp = rls.keyInSelect(choices, "What will you do? ") 
        if (wakeUp < 3) {
            rls.question("A figure rises from the dark corner. You didn't notice her earlier. Ella: 'You're trying to leave me?!' She leaves and returns with a hammer. She winds back and swings with all her power. She hits you across the head.")
            loseHP()
            rls.question(`Surprisingly you don't feel much pain -- yet. Ella looks down at you. "I wanted to love you ${yourName}. And now do you see what you made me do?" You finally feel blood dripping down your face from the open gash in your head. The metallic smell fills your nostril as it runs past your nose. The numbness subsides, and the pain sets in.\nElla: \"Does it hurt?\" You begin to accept that you're about to die. You feel at peace.\n`) 
            rls.question("I didn't want to do this. Ella winds the hammer back again.")
            let wakeUpLoop2 = 0
            let choices2 = ["It's inevitable. Accept your fate.", "A second wind of survival instinct! Jerk your head out of the way"]
            while (wakeUpLoop2 < 1) {
                let thinkFast = rls.keyInSelect(choices2, "There's no time to think!")
                if (thinkFast === 0) {
                    rls.question("All you can think before your life is snuffed out is that you'll never get to see the final season of Attack on Titan.")
                    loseHP(4)
                }
                else if (thinkFast === 1) {
                    rls.question("One final effort. There's barely any room. Just moving your head won't help. You muster all your strength to jolt your body just enough. You manage to dodge the hammer by an inch. The force from the movement dislocates the rusty pipe from the base. Ella slips to the side and her body slams down. Now that you're hands are free from the pipe, you head to the stairs. You've forgotten that your heel had been deeply sliced across. You fall forward. Ella is taking her time to get up, she might have hurt herself.")
                    let choices3 = ["Now's your chance! Try to subdue Ella while she's stumbling", "Don't take the chance and continue up the stairs."]
                    let wakeUpLoop3 = 0
                    while (wakeUpLoop3 < 1) {
                        let whatNow = rls.keyInSelect(choices3, "What now??")  
                        if (whatNow === 0) {
                            rls.question("You decide it's all or nothing on Ella. You wanted to give her your heart, but now you want to stab her heart. Literally. You limp towards Ella with bad intentions. She yells at the top of her lungs and swings her arm around. She was holding the scalpel you saw on the floor earlier. She's sliced you across the abdomen.")
                            loseHP(2)
                            rls.question("Despite your wounds, you can still move. You push her with all of your force and she bangs against the wall. She struggles to collect herself. You won't be trying that again. You head up the stairs while you can.")
                            wakeUpLoop3++
                        }
                        else if (whatNow === 1) {
                            rls.question("You won't risk it. You don't know the length of how dangerous Ella is. You don't know if she's done this before. If she has, then they definitely never made it out. You decide make the smart choice and head up the stairs.")
                            wakeUpLoop3++
                        }
                        else {
                            rls.question("Invalid input. Stop wasting time")
                        }
                    }
                }
                else {
                    rls.question("Not a valid option. If you don't care enough to press the right key, then you might as well just let Ella end you.")
                }
                wakeUpLoop2++
            }
        }
        else if (wakeUp === 3) {
            rls.question(`\nYou decide to take a closer look around the room. First looks can be decieving. You notice a figure crouched down in the dark corner. After 3 seconds of silence, the figure rises. "I'm so happy you're here with me now. You didn't try to escape. I love you."`) 
            rls.question("Ella steps toward you with a grim smile on her face. Her eyes look dead. You plead with her to let you go. You notice her getting agitated. Fear rushes through your body. Her voice cracks. Ella: \"Don't you love me?\" She's deranged.")
            let choices4 = ["'You're special to me'", "'I care about you'", "Don't say anything and try to kick her feet out from under her"]
            let endLoop = 0
            while (endLoop < 1) {
                let sayWhat = rls.keyInSelect(choices4, "How will you convince her to let you go?")
                if (sayWhat < 2) {
                    rls.question("Ella senses the fear in your voice. Something tells you that nothing you said could've mattered. You can see the annoyance in her face. 'You're lying to me.' She steps towards the scalpel and picks it up.")
                    let choices5 = ["Struggle to free yourself from the pipe", "Beg her not to do it"]
                    let endLoop2 = 0
                    while (endLoop2 < 1) {
                        let lastChance = rls.keyInSelect(choices5, "This might be your last chance to survive...")
                        if (lastChance === 0) {
                            rls.question("A rush of adrenaline hits your bloodstream. Before she bends back up, you've pulled the rusty pipe you're tied to from the base. Your hands are now free of the pipe. She rushes over to you with the scalpel.")
                            endLoop2++
                        }
                        else if (lastChance === 1) {
                            rls.question("She doesn't want to hear it. Ella: 'I want you to suffer like you made me suffer.' She drives the scalpel into your abdomen and pulls it out. You screech from the pain")
                            loseHP()
                            rls.question("Is this the end? For a brief moment you forget the puncture as your sympathetic nervous system causes you to kick your leg back and thrust it into her face. She falls back, losing her bearings momentarily. The kick must've hurt, but not as much as this stabwound in your midsection. The force from the movement knocked the pipe you were tied to from the base. The blood spurts out from your wound. That kick is going to cost you. But at least you're now free.")
                            loseHP()
                            endLoop2++
                        }
                        else {
                            console.log("There's no time to press wrong buttons!")
                        }
                    }
                    
                }
                else if (sayWhat === 2) {
                    rls.question("Ella is in the perfect range. You kick her shins as hard as you can. Her feet fly out from underneath her, and she falls straight down. Despite the fall, she manages to roll out from your range. She stands up and takes a hammer from the table right next to her. She walks toward you. Is this the end? Your fight or flight response causes you to pull the entire pipe forward off the base. You are now free. The top of the pipe hits Ella and knocks her down. The hammer goes flying. Ella rolls away from you for safety in the opposite direction, but you can tell she's disoriented. The last thing you see before you disappear up the stairs is Ella grabbing the scalpel.")
                    endLoop++
                }
                else {
                    rls.question("Is this the right moment to be pressing wrong keys?")
                }
                endLoop++
            }
        }
        wakeUpLoop++
    }
    rls.question("You are now on the first floor. You shut the door behind you. Despite the possibility of Ella being just steps behind you, you feel a huge wave of relief. But there's no time to relish in it.")
}


function firstFloorScenario() {
    rls.question("You know you need to be quick. You look around briefly. There's only one floor. You're in the living room. The front door is down the hall to your left. The kitchen is down the opposite direction to your right. There's a closet door just to your right, just before the kitchen. You can hear Ella approach from the bottom of the stairs.")
    rls.question("You hear the basement door slam open. Ella yells 'I THOUGHT YOU LOVED ME!' There's only two things you love: you and yourself. Ella now has an axe. You wish it were still a scalpel. What a bad time for Ella to have a mid-range weapon.")
    let decisions = ["The front door", "The back door", "The closet", "The bathroom"]
    let lastLoop = 0
    while (lastLoop < 1) {
        let innerLoop = 0
        let finalAnswer = rls.keyInSelect(decisions, "Where will you go?")
        while (innerLoop < 1) {
            
            if (finalAnswer === 0) {
                rls.question("You run towards the front door. It's locked. It can only be opened with a key. You manage to dodge just enough that it misses any deep organs, but it slices across your midsection.")
                loseHP()
                innerLoop++
            }
            else if (finalAnswer === 1) {
                rls.question("You figure the best bet would be to try the back door. Any door while escaping a deranged maniac is a good door, right? The back door is locked and can only be opened with a key. Ella walks towards you with an axe. The kitchen space is narrow. You only have so much space to run past. ")
                loseHP(2)
                innerLoop++
            }
            else if (finalAnswer === 2) {
                rls.question("You open and swing the closet door shut behind you. What a coincidence, there's a lock here! On the inside of a closet... Ella starts banging on the door. 'OPEN THE DOOR, I JUST WANT TO TALK!' You stay quiet. You hear a very loud sound. The brittle closet door is being torn open with an axe. You relive moments of your life in your head. Some are the best, some are the worst. The light shines through the hole in the door. Some moments you get flashbacks of are trivial and hardly worth remembering. Like the time you bought that meatball sub from the pizzeria down the street. But why are you thinking about this during the final moments of your life?")
                rls.question("The hole is finally big enough. Ella sticks her arm in and turns the lock. You hear a faint voice from outside yelling 'Open the door, it's the police!' As Ella swings the door open, you hear the cops pounding on the door to knock it down.")
                rls.question("Just as Ella Pulls the axe above her head to drive it into your skull, you hear the front door fly open. But it's too late.")
                loseHP(4)
            }
            else if (finalAnswer === 3) {
                rls.question("You run into the bathroom. The door has no lock! What kind of bathroom has no lock?? You hold the knob tight while Ella tries to open it. It won't budge. Your best bet is to keep this going for as long as you can. Wait! Maybe she'll eventually get tired and give you a chance to climb out of the window. You look around and there is no window. You hear a loud crash and see the axe's blade peak through the door.") 
                rls.question("The blade disappears and within another 2 seconds it crashes through the door again. A few more swings and the hole is now large enough for you to see Ella's face. Ella peaks her face into the hole and says \"HEEERE'S JOHNNY!\"") 
                rls.question(" Through the hole in the door, you hear somebody in the distance yelling 'Police! Open the door!' Ella disregards the cops, and keeps swinging the axe. You hear the cops trying to knock the door down. The hole in the door is too wide now, Ella can reach you with the axe. You back away and Ella opens the door.") 
                rls.question("There's nowhere for you to go. You have no space to dodge the axe.")
                innerLoop++
                lastLoop++
            }
            else {
                rls.question("You're almost dead. Stop wasting time!")
            }
        }
    }
    rls.question("You hear the cops finally break the door down. Just as Ella pulls the axe back for a final swing. You hear gunshots and see the exit wounds penetrate holes through her torso. The blood spurts out and soaks your face. Ella drops to her knees, and with her eyes locked on you. Her eyes roll back and she falls to the side.")
    rls.question("You've survived. The next time you knock a beautiful woman over, you will just keep on running.")


}



gameStart()