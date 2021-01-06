const readline1 = require('readline-sync')

let nameInput = readline1.question("Enter your name: ")
let questionTracker = ''
let injuryTracker = 0
let fightNOLTracker = 0
let barChoice = 0
let backFood = 0
let backDrink = 0
let backFind = 0
let platinumMoney = 0
let answer = ''

console.log("")
readline1.question("Hello " +`${nameInput}! ` + "Welcome to FrostBlast. A heavily story-driven expierence. For the best experience, please fullscreen your terminal. \n\nThere will be moments where it seems like the text has stopped. Press enter, (Or type anything you want, there won't be any impact unless you have come up to a story decision) to reveal the next line of text when not given a prompt, like here! \n")
readline1.question("There will be certain decisions where the wrong choice can inflict you with damage. Be careful, because if you get hurt twice, it's game over.\n")
const playGame = () => {
    answer = readline1.keyInYN("Do you want to play? \n")
    if(answer === true){
      console.log("")
      console.log("Alright! GAME ON!")
      console.log("")
      gameStart()
    }
    
    else{
        console.log("")
        quitGame()
    }
}

    const gameStart = () => {
      readline1.question('"Damn... these guys are persistent. I gotta get away." \n') 
      readline1.question("You are a wanted man, on the run in the city of Kagutsuchi. The NOL (Novus Orbis Librarium) has placed a bounty of 90 billion platinum dollars on your head. \n")
      readline1.question("(In the distance) \"RAGNA THE BLOODEDGE! BY ORDER OF THE NOL, YOU ARE UNDER ARREST! FAILURE TO COMPLY WILL RESULT IN THE USE OF LETHAL FORCE!\" \n")
      readline1.question('-R "Man who even came up with that stupid name?!? Either way, not gonna let a little lethal force deter me from getting away, I\'ve fought way worse." \n')
      questionTracker = readline1.question('-R "That being said... master Jubei always said that a tactical retreat is a viable option, even if it isn\'t my style. What should I do?" (Fight / Retreat) \n')
          while((questionTracker !== "Fight") || (questionTracker !== "Retreat")) {
            if(questionTracker === "Fight") {
                console.log("")
                readline1.question('-R "These guys are punks, I\'ll get them off my tail, even if only for a brief moment." \n')
                return startFightNOL()
            }
      
            else if(questionTracker === "Retreat") {
                console.log("")
                readline1.question('-R "Hmph, I\'d much rather fight, but a smart man is better than a dead man I suppose." \n')
                return retreatFightNOL()
            }
            
            else {
              questionTracker = readline1.question('-R "Nahh, that won\'t work. I have to make a choice" (Fight / Retreat) \n')
            }
        }
    }
    const startFightNOL = () => {
        readline1.question("You charge towards the NOL soldiers, who are shocked by the sudden threat you impose upon them. \"FALL BACK! FALL BACK!\", but it's already too late.\n")
        readline1.question("They are no match for your unprecendented speed and might, as you blowback the officers that challenged you.\n")
        questionTracker = readline1.question("You come up to one NOL officer petrified in fear, \"NO, STAY BACK!! PLEASE!\" (Kill / Mercy)\n")

        if(questionTracker === "Kill") {
            console.log("")
            readline1.question("As you approach the cowering officer, a projectile in the shape of a large ice knife strikes you from behind!\n")
            injuryTracker++
            fightNOLTracker++
            readline1.question("-R \"AUGHH, DAMMIT!\"\n")
        }
        else if(questionTracker === "Mercy") {
            console.log("")
            readline1.question("-R \"At least you know when you are in over your head. Get lost!\" You wave off the officer, when you sense something rapidly approaching! Luckily, you were able to dodge it in time.\n")
        }
        else{
            readline1.question("As your mind races to a decision, the air grows cold, when you are suddenly slashed in the back by a blade! The officer sees his opportunity, and scurries away! \n")
            injuryTracker++
            fightNOLTracker++
            readline1.question("\"AUGHH, DAMMIT!\" \n")
        }
        readline1.question("You turn around to meet your assailant.\n")
        return startFightJin()
    }

    const retreatFightNOL = () => {
        readline1.question("As you continue your retreat, the cries of NOL soldiers fade in the distance. \n\n-R \"FINALLY, a moment to breathe.\" \n")
        readline1.question("You take a moment to sit in an alley and catch your breath. Several minutes pass and you realize the air gets cold around you. You aren't as home free as you thought. \n")
        return startFightJin()
    }

    const startFightJin = () => {
        readline1.question("-R \"I should've known you\'d show up.\"\n")
        if(fightNOLTracker === 1) {
            readline1.question("\"WELL WELL WELL! LOOKS LIKE YOU'VE GOTTEN QUITE SLUGGISH, DEAR BROTHERRR!!!\"\n")
        }
        else{
            readline1.question("\"WELL WELL WELL! LOOKS YOUR SENSES ARE STILL JUST AS SHARP AS EVER, DEAR BROTHERRR!!!\"\n")
        }
        readline1.question("-R \"Jin. I don't have time for your theatrics.\"\n")
        readline1.question("-J \"OH BUT DEAR BROTHER, IT SEEMS FATE IS ALWAYS DRAWING THE TWO OF US TOGETHER HEHEHE!!! YOU KNOW WHAT THAT MEANS?!? IT MEANS WE GET TO KILL EACH OTHER NOW!!!\"\n")
        readline1.question("-R \"Dammit Jin, you\'re annoying... Fine, get over here and I'll put you to sleep!\" \n")
        readline1.question("Time feels like it freezes, as the two stare each other down...\nThen in an instant, the two brothers charge at each other, one filled with rage, the other with bloodlust. \n")
        readline1.question('-J "BROTHERRRRRRRRRR!!!"')
        readline1.question('-R "JINNNNNNNNN!!!"\n')
        readline1.question("The two brothers CLASH, the resulting hellfire from Ragna's soul clashing with Jin's sheer ice, finally culminating in a beautiful, yet horrifying aurora. \n")
        readline1.question("The brothers trade blows with one another, having fought each other time and time again. They've fought with each other ever since they were young... \nYears of clashing, chasing, and fleeing.\n")
        readline1.question("-J \"TAKE THIS BROTHER!!! ARROWS OF ICE!!!\"\n")
        questionTracker = readline1.question("-R \"Damn, here it comes!!! What am I gonna do?\" (Hell\'s Fang / Carnage Scissors) \n")
        while(injuryTracker < 2) {
            if(questionTracker === "Hell's Fang") {
                console.log("")
                readline1.question("You let the rage come to a boiling point, and tap into some of the Azure's power. \nYou focus the hellfire into your fist.")
                readline1.question("-R \"Alright Jin... TAKE THIIISS!!!\"\n")
                readline1.question("You charge forward, fist ablazened in hellfire, melting the frosted arrows. \n")
                readline1.question("-R \"HELL'S...\"")
                readline1.question("You impact Jin, and follow up with a strike so powerful, it conjures a hellhound to deal the finishing blow!")
                readline1.question("-R \"FAAANG!!!\"\n")
                readline1.question("The force of the attack is so powerful, it sends Jin careening towards the wall!")
                readline1.question("-J \"D-D-DAMN YOU BROTHERRRRRR!!!\"\n")
                return endFightJin()
            }
            else if(questionTracker === "Carnage Scissors") {
                console.log()
                readline1.question("As the frosted arrows rapidly approach you feel something awaken inside of you... the Azure.\n")
                readline1.question("-R \"This is it Jin... THIS IS THE POWER OF THE AZURE!!!\"\n")
                readline1.question("-R \"CARNAAAAAGE...\"")
                readline1.question("In an INSTANT, you flash right by the frozen arrows, almost like you teleported. Jin can only stare in utter shock for a brief moment...")
                readline1.question("-R \"SCISSORRRRRRRRSS!!!\"")
                readline1.question("Unleashing your full force, you unsheathe your weapon with a strike so POWERFUL, it both launches and engulfs Jin in hellfire!")
                readline1.question("-J \"AHHHHHHHHHHHHHHHHH HAHAHAHAHA\"\n")
                return endFightJin()
            }
            else if(injuryTracker === 0){
                    readline1.question("As you hesitate to make a decision, an arrows strikes you square in the stomach.\n")
                    injuryTracker++
                    questionTracker = readline1.question("-R \"AGHHH, DAMMIT ALL... he's firing a second barrage, I HAVE to make a choice!!!\" (Hell's Fang / Carnage Scissors) \n")
            }
            else{
                    return loseFightJin()
            }
        }
    }

    const endFightJin = () => {
        readline1.question("You lower your fighting stance, \n-R \"And stay down.\"\n")
        readline1.question("As you walk over to an unconscious Jin, you take a look back to see the street... half consumed in fire, the other frozen in ice.\n")
        readline1.question("-R \"Just another day in my life I suppose.\"\n")
        if(injuryTracker === 1) {
            readline1.question("The azure quickly mends the wounds you received, and removes the chill that you were too adrenaline driven to feel.\n")
            readline1.question("-R \"Ahhhh, much better.\"\n")
            injuryTracker = 0
        }

        readline1.question("You look at Jin, -R \"I put my all into that attack. I don't know what makes him tick, but that ice of his prevents him from dying. \nAt least he won't be bothering me for awhile... That being said...\"\n")
        questionTracker = readline1.question("You see a payphone beside Jin, \"It wouldn't hurt to call an ambulance for him... hmmm.\" (Call / Leave) \n")
        if(questionTracker === "Call") {
            readline1.question("You walk up to the payphone, insert some platinum, and dial the ambulance. \n-R \"Hello? Yes, there is an injured NOL Liutenant at the corner of Nakimichi Street and Shokufocho Ave. Five minutes? Got it, thank you.\"\n")
            readline1.question("With that taken care of, you begin leaving, -R \"Take care, Jin.\"\n")
        }
        else if(questionTracker === "Leave") {
            readline1.question("You start walking away, -R \"He'll be fine, I've given him way worse beatings.\"\n")
        }
        else{
            readline1.question("As you ponder your decision, you hear more NOL soldiers heading this direction, -R \"Damn, time to go!\"\n")
        }

        readline1.question("This day is over... Time moves forward onto the next one.\n")
        return timeSkip()
    }

    const loseFightJin = () => {
        readline1.question("The barrage of icy hell hurls towards you, landing multiple ice arrows. You scream in agony, \n-R \"AAA-AAUUUUGGGHHH!!!\"\n")
        readline1.question("Jin slowly starts walking towards you, \n-J \"I FINALLY DID IT, I'VE FINALLY BEATEN YOU BROTHERRRRR!!! TIME TO DIEEEEE AHAHAHAHAHAHA!!!\"\n")
        readline1.question("As Jin draws near, things continue to fade to black... until you feel one last fleeting moment of pain.\n")
        readline1.question("-R \"It... can't end... like... t-this...\"\n")

        answer = readline1.keyInYN("Do you want to try the fight again? (Resets you to peak performance if injured) \n")
        if(answer === true){
            injuryTracker = 0
            console.log("")
            startFightJin()
        }
        else{
            answer = readline1.keyInYN("Do you want to return to the beginning of the story?")
            if(answer === true){
                injuryTracker = 0
                console.log("")
                gameStart()
            }
            else{
                console.log("")
                quitGame()
            }
        }
    }

    const timeSkip = () => {
        readline1.question("A FEW DAYS LATER")
        readline1.question("-R \"Thank god the hostess was nice enough to let me use her spare room. I'll take a bed over a bench everytime.\"")
        readline1.question("As you walk out of the room and down the stairs, you see the hostess getting prepared for the workday ahead of her.")
        readline1.question("-R \"Morning Saeko, thanks again for letting me lay low here for awhile.\"\n")
        readline1.question("-S \"Good morning Ragna, and it's no problem!\nAlthough... you really shouldn't be fighting your brother like that. The entire town is still feeling the effects of that fight!\"\n")
        readline1.question("-R \"I KNOW, I know. I don't have a choice though when he becomes maniacal if he even hears my name mentioned...\nCold-hearted to everyone else, and a manical killer to me...\"\n")
        questionTracker = readline1.question("Saeko see's Ragna starting to check out. (Talk / Give Water / Motivate / Give Hug)\n")
        while(questionTracker !== "Give Hug"){
            if(questionTracker === "Talk") {
                readline1.question("-S \"You normally aren't like this Ragna, all the dimensional loops starting to get to ya?\"\n")
                questionTracker = readline1.question("Ragna gives you a slightly annoyed look, then sighs. (Give Water / Motivate / Give Hug)\n")
            }
            else if(questionTracker === "Give Water") {
                readline1.question("-S \"You must be thirsty, why don't have this glass of water?\"\n")
                questionTracker = readline1.question("Ragna gives a slight smile, -R \"Thanks.\" (Talk / Motivate / Give Hug)\n")
            }
            else if(questionTracker === "Motivate") {
                readline1.question("-S \"Awww, come on! Cheer up! I know Jin will come around!! Just have to get past his... cold and... maniacal nature, easy-peasy!\"\n")
                questionTracker = readline1.question("Ragna lets out a small chuckle, -R \"That'd be rich, Jin coming around and NOT killing me.\" (Talk / Give Water / Give Hug)\n")
            }
            else{
                questionTracker = readline1.question("-S \"I can't just ignore him. What can I do?\" (Talk / Give Water / Motivate / Give Hug)\n")
            }
        }
        readline1.question("You sit down on the stool next to Ragna, and give him a hug. -S \"I know things are hard right now, but you're super tough. I know you'll make things right.\"\n")
        readline1.question("Ragna is shocked at first, since he isn't used to this kind of affection. -R \"Oh, Thank you Saeko.\"\n")
        return barHub()
    }

    const barHub = () => {
        let activities = ["Order Food", "Order Drink", "Find The Ball", "Head Out"]
        platinumMoney = 60000
        readline1.question("Saeko steps away from Ragna, -S \"Well, while you're here. You might be my friend, but you are also a customer! Feel free to partake in the activities here!\"\n")
        readline1.question("-R \"Thanks Saeko, you're the best. What should I do? (You have 60,000 platinum money)")
        while(platinumMoney > 0) {
            barChoice = readline1.keyInSelect(activities, "")
            if(barChoice === 0){
                orderFood()
                readline1.question(`-R "I have ${platinumMoney} platinum money left. What else should I do?"`)
            }
            else if(barChoice === 1) {
                orderDrink()
                readline1.question(`-R "I have ${platinumMoney} platinum money left. What else should I do?"`)
            }
            else if(barChoice === 2) {
                if(backFind > 0) {
                    answer = readline1.keyInYN('-S "Hey Ragna! Back to play, \"Find The Ball?\" again?"\n')
                    if(answer === true) {
                        platinumMoney -= 500
                        findTheBall()
                        readline1.question(`-R "I have ${platinumMoney} platinum money left. What else should I do?"`)
                    }
                    else{
                        readline1.question('-R "Thanks Saeko, but maybe next time."\n')
                    }    
                }
                else{
                    answer = readline1.keyInYN('-S "Hey Ragna! Do you want to play, \"Find The Ball?\""\n')
                    if(answer === true) {
                        platinumMoney -= 500
                        findTheBall()
                        readline1.question(`-R "I have ${platinumMoney} platinum money left. What else should I do?"`)
                    }
                    else{
                        readline1.question('-R "Thanks Saeko, but maybe next time."\n')
                    }
                }
            }
            else if(barChoice === 3) {
                answer = readline1.keyInYN('-R "Should I really head out?" (This will prompt you to either end or restart the game)\n')
                if(answer === true) {
                    endCutscene()
                }
                else{
                    readline1.question("-R \"I can hang around a little while longer. What should I do?\"")
                }
            }
            else {
                readline1.question("-R \"I can't just sit here. What should I do?")
            }
        }
    }
    const orderFood = () => {
        let food = ["Cheeseburger", "Soup", "Pizza"]
        let foodOrdered = 0
        if(backFood > 0){
            readline1.question("-S \"Still hungry? No problem, Have another look!\"\n")
        }
        else{
            readline1.question("-S \"Hey Ragna! What are ya lookin to eat today? Here are the choices!\"\n")
        }
        let foodChoice = readline1.keyInSelect(food, "")
        while(foodOrdered === 0) {
            if(foodChoice === 0){
                answer = readline1.keyInYN('-S "Cheeseburger! I heard this is a popular cookout meal in a certain country! Is this what you want?"\n')
                if(answer === true){
                    readline1.question('-S "Great choice! Coming right up!"')
                    backFood++
                    foodOrdered++
                    platinumMoney -= 5000
                }
                else{
                    readline1.question('-S "Having second thoughts? No problem, take another look!"')
                    foodChoice = readline1.keyInSelect(food, "")
                }
            }
            else if(foodChoice === 1){
                answer = readline1.keyInYN('-S "Soup! This one is a great warm meal for both sick and healthy people! Is this what you want?"\n')
                if(answer === true){
                    readline1.question('-S "Great choice! Coming right up!"')
                    backFood++
                    foodOrdered++
                    platinumMoney -= 2500
                }
                else{
                    readline1.question('-S "Having second thoughts? No problem, take another look!"')
                    foodChoice = readline1.keyInSelect(food, "")
                }
            }    
            else if(foodChoice === 2){
                answer = readline1.keyInYN('-S "Pizza! A classic cheesy meal that is a fan favorite with the kids! Is this what you want?"\n')
                if(answer === true){
                    readline1.question('-S "Great choice! Coming right up!"')
                    backFood++
                    foodOrdered++
                    platinumMoney -= 4000
                }
                else{
                    readline1.question('-S "Having second thoughts? No problem, take another look!"')
                    foodChoice = readline1.keyInSelect(food, "")
                }
            }
            else{
                answer = readline1.keyInYN('-S "Not hungry?"\n')
                if(answer === true){
                    return readline1.question('-S "No problem! Maybe next time!"')
                }
                else{
                    readline1.question('-S "Hungry after all? Yay, lets take another look!"')
                    foodChoice = readline1.keyInSelect(food, "")
                }
            }
        }
    }

    const orderDrink = () => {
        let drink = ["Juice", "Soda", "Water"]
        let drinkOrdered = 0
        if(backDrink > 0){
            readline1.question("-S \"Still thirsty? No problem, Have another look!\"\n")
        }
        else{
            readline1.question("-S \"Hey Ragna! What are ya lookin to drink today? Here are the choices!\"\n")
        }
        let drinkChoice = readline1.keyInSelect(drink, "")
        while(drinkOrdered === 0) {
            if(drinkChoice === 0){
                answer = readline1.keyInYN('-S "Juice! A rather sweet drink that has a TON of different varieties Is this what you want?"\n')
                if(answer === true){
                    readline1.question('-S "Great choice! Coming right up!"')
                    backDrink++
                    drinkOrdered++
                    platinumMoney -= 1000
                }
                else{
                    readline1.question('-S "Having second thoughts? No problem, take another look!"')
                    drinkChoice = readline1.keyInSelect(drink, "")
                }
            }
            else if(drinkChoice === 1){
                answer = readline1.keyInYN('-S "Soda! A very fizzy drink that can make those who drink it quite burpy! Is this what you want?"\n')
                if(answer === true){
                    readline1.question('-S "Great choice! Coming right up!"')
                    backDrink++
                    drinkOrdered++
                    platinumMoney -= 3000
                }
                else{
                    readline1.question('-S "Having second thoughts? No problem, take another look!"')
                    drinkChoice = readline1.keyInSelect(drink, "")
                }
            }    
            else if(drinkChoice === 2){
                answer = readline1.keyInYN('-S "Water! About as standard as a drink can get, and refreshing to boot! Is this what you want?"\n')
                if(answer === true){
                    readline1.question('-S "Great choice! Coming right up!"')
                    backDrink++
                    drinkOrdered++
                    platinumMoney -= 4000
                }
                else{
                    readline1.question('-S "Having second thoughts? No problem, take another look!"')
                    drinkChoice = readline1.keyInSelect(drink, "")
                }
            }
            else{
                answer = readline1.keyInYN('-S "Not thirsty?"\n')
                if(answer === true){
                    return readline1.question('-S "No problem! Maybe next time!"')
                }
                else{
                    readline1.question('-S "Need a drink after all? Yay, lets take another look!"')
                    drinkChoice = readline1.keyInSelect(drink, "")
                }
            }
        }
    }

    const findTheBall = () => {
        let ballPreShuffle = Math.round(Math.random() * 5)
        let ballShuffle = Math.round(Math.random() * 5)
        readline1.question(`The ball before shuffle is ${ballPreShuffle}. \n`)
        readline1.question("The shuffle begins... NOW!\n")
        for(let i = 0; i < 8; i++) {
            console.log(ballShuffle = Math.ceil(Math.random() * 5))
        }
        ballShuffle.toString()
        let choice = readline1.question("Pick a cup, any cup between 1 to 5!\n")
        if(Number(choice) === ballShuffle) {
        answer = readline1.keyInYN('-S "Congratulations Ragna, you win! Do you wanna play again?\n"')
            if(answer === true){
                platinumMoney -= 500
                backFind++
                findTheBall()
            }
        }   
        else if(Number(choice) !== ballShuffle) {
            answer = readline1.keyInYN(`-S "Too bad, Ragna. The ball was under cup ${ballShuffle}. Would you like to play again?\n"`)
            if(answer === true) {
                platinumMoney -= 500
                backFind++
                findTheBall()
            }
        }
        else{
            choice = readline1.keyInYN('-S "Come on, Ragna! Please pick a number this time!"')
        }
        backFind++
    }

    const endCutscene = () => {
        readline1.question("-R \"Hey Saeko, I'm heading out... I think it's time to finally put an end to all of this.\"\n")
        readline1.question("-S \"Ragna... please be careful.\"\n")
        readline1.question("Ragna turns away, as they both know full well that he won't be coming back...\n-R \"Thank you Saeko... for being the one to show me compassion, when everyone else saw me as a monster or a bounty. I'll take care of myself. So long...\"\n")
        questionTracker = readline1.question("As Ragna leaves the bar, Saeko notices that he sheds a tear. (Cry)\n")
        if(questionTracker === "Cry") {
            readline1.question('-S "Ra... Ra... RAAAGNAAAAAA!!!..."\n')
        }
        else {
            readline1.question('It\'s impossible for Saeko to think about anything else other than Ragna\'s departure. \n-S "Ra... Ra... RAAAGNAAAAAA!!!..."\n')
        }
        readline1.question("And thus, Ragna continued forth on his mission to put an end to the dimensional loops... Never to return...")
        gameFinish()
    }

    const gameFinish = () =>{
        answer = readline1.keyInYN(`Congratulations ${nameInput} on finishing the game! Would you like to play it again?`)
        if(answer === true){
            console.log("")
            gameStart()
        }
        else{
            answer = readline1.keyInYN("Would you like to play the timeskip section again?")
            if(answer === true){
                console.log("")
                timeSkip()
            }
            else{
                console.log("")
                quitGame()
            }
        }
    }

    const quitGame = () => {
    console.log("That's too bad. Don't worry, we will patiently wait for your return!")
    process.exit()
    }

     playGame()
