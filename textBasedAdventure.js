const readline = require('readline-sync')
const chalk = require('chalk')
/*https://www.npmjs.com/package/chalk
Some console.log end on next line for white space in between sentences to go easy on your eyes in terminal 
*/

const welcome = () => {
    console.log(squirrel((`Wake up sleepyhead! \nI told you not to eat those weird mushrooms.`)))
    console.log(`(You stand up dazed with a throbbing headache \nand see a floating, chunky-sized black chipmunk \ngrinning from floofy ear to floofy ear)
    `)
    console.log(squirrel((`This is Neverending Land. \nYou can't just sleep whenever you want, the adventure never stops!`))) 
    console.log(squirrel((`What? You forgot me too? \nI'm your extraordinary-narrating-adventure-buddy, Squirrel.
    `))) 
    console.log(squirrel(`And yes, I realize I'm a chipmunk named Squirrel.`))
    console.log(squirrel((`All you have to do is listen to my bootyful \nsqueeking voice and type in your answer!
    `)))
    
    const welcomePrompt = () => {
        if (welcomeQuestion = readline.keyInYNStrict(quest(`Are you alert, kicking and ready to start our adventure? \nJust type in y or n.`))) {
            console.log(squirrel((`Alrighty, let's get going!`)))
            console.log(squirrel((`And remember, all you have to do is listen to my bootyful \nvoice and type an answer when I ask a question.
            `)))
            travel1()
        }
        else {
            endgame()
        }          
    }
    welcomePrompt()
}

let inventory = []
let equipment = []
let health
let attack

const currentHP = () => {
    return console.log(`You now have ` + HP(`${health}HP`) + `
    `)
}

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
const healthGenerator = (min, max) => {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1) + min)
}

//https://stackoverflow.com/questions/5767325/how-can-i-remove-a-specific-item-from-an-array
const removingItem = (item) => {
    const itemRemoval = inventory.indexOf(item)
    if (itemRemoval > -1) {
        inventory.splice(itemRemoval, 1)
    }
}

let enTurn = (enHP, enAtk, enName, victory) => {
   
    while (health > 0 && enHP > 0) {
        console.log(enName + ` has ` + npc(enHP + `HP`) + ` left!`)
        console.log(enName + ` hit you for ` + HPLoss(enAtk + `damage`) + `!`)
        health = health - enAtk
        
        if (health <= 0) {
            console.log(enName + ` defeated you!
            `)
            return badEnding()
        }
        currentHP()
        battle(enHP, enAtk, enName, victory)
    }
}
/*Sry for messy battle function. I couldn't separate the nested inventory function without logging errors.
    https://www.w3schools.com/js/js_function_call.asp
*/
let battle = (enHP, enAtk, enName, victory) => {
    let battleOption = ['attack', 'inventory']
    
    while (health > 0 && enHP > 0) {
        let turn = readline.keyInSelect(battleOption, `What would you like to do?`)
    
        if (battleOption[turn] === 'attack') {
            enHP = enHP - attack
            console.log(`You hit ` + enName + ` for ` + HPLoss(attack + `damage`) +`!`)
            
            if (enHP <= 0) {
                console.log(`You defeated ` + enName + `!
                `)
                victory.call()
            }
            enTurn(enHP, enAtk, enName, victory)
        }
        else if (battleOption[turn] === 'inventory' && inventory.length > 0) {
            let item = readline.keyInSelect(inventory, `Which item would you like to use?`)
        
            if (inventory[item]) {

                let itemSelection = (item) => {
                    
                    if (healItem[item]) {
                        health = health + healItem[item]
                        removingItem(item)
                        console.log(`You use the ` + item + ` to heal for ` + HPGain(healItem[item] + `HP!`))
                        currentHP()
                        enTurn(enHP, enAtk, enName, victory)
                    }
                    else if (atkItem[item]) {
                        enHP = enHP - atkItem[item]
                        removingItem(item)
                        atkItems(item, enName)
                        console.log(`You did ` + HPLoss(`${atkItem[item]}damage`) + `!`)
                        
                        if (enHP <= 0) {
                            console.log(`You defeated ` + enName + `!
                            `)
                            victory.call()
                        }
                        enTurn(enHP, enAtk, enName, victory)
                    }
                    else {
                        console.log(`Try again.`)
                        battle(enHP, enAtk, enName, victory)
                    }
                }
                itemSelection(inventory[item])
            }
            else {
                battle(enHP, enAtk, enName, victory)
            }
        }
        else if (battleOption[turn] === 'inventory' && inventory.length === 0) {
            console.log(`There is nothing in your inventory.`)
            battle(enHP, enAtk, enName, victory)
        }
        else {
            console.log(squirrel(`There is no escaping battle. Hehe...`))
            battle(enHP, enAtk, enName, victory)
        }
    }
}

const travel1 = () => {
    console.log(squirrel((`Let's get out of this horrid, rodent-infested place.`)))
    console.log(squirrel((`Yes, I realize I'm a rodent too. \nBut I'm a talking rodent. Ha! I'm special like that.`)))
    console.log(squirrel((`Let's head into town. Look! There's a fairy coming towards us.`)))
    console.log(squirrel((`But look! There's a fuzzy wuzzy brown coconut!
    `)))    
    let coconutPrompt = readline.keyInYNStrict(quest(`Do you want to pick up the coconut? y or n?`))
    
    if (coconutPrompt) {
        itemAdd('coconut')
        console.log(squirrel((`Now let's see what this fairy wants.
        `)))
        fairy()
    }
    else {
        console.log(squirrel((`I like your mentality. Less items, less responsibilities. Let's meet this fairy now.
        `)))
        fairy()
    }
}

const travel2Town = () => {
    console.log(squirrel((`Let's finally get going into town. I'm hungry. \nLook, it's a shady-looking ragged dog in a long black trenchcoat.`)))
    
    if (rustyHat = readline.keyInYNStrict(quest(`Do you want to talk to him? y or n? `))) {
        rusty()
    }
    else {
        console.log(squirrel((`Can't blame you. He makes my tail all bushy too.
        `)))
        console.log(`(You see white-specked orange kitty twins pounce toward you)`)
        twins()
    } 
}

const itemAdd = (item) => {
    inventory.push(item)
    switch(item) {
        case 'coconut':
            console.log(`Ooh, it's so fuzzy and sturdy. I bet it's juicy inside. \nLet's save it for later.`)
            break;
        case 'apple':
            console.log(`An apple a day keeps the doctor away...or that's what I heard.
            `)
            break;
        case 'bait':
            console.log(`Bait. Nice! Wait...What am I trying to lure??`)
            break;
        case 'watch':
            console.log(`A watch! Now I can check the time, wait, why is it not moving...`)
            break;
        case 'eyeball':
            console.log(`An eyeball of mystical origin. You feel it staring back at you...`)
            break;
        case 'fuzzy blue creature':
            console.log(`A fuzzy-blue-haired-big-eyed-short-eared thing looks up at you with baby eyes...`)
            break;
        case 'fox meat':
            console.log(`I'm not proud of how I got this meat but I did what I had to...
            `)
            break;
        case 'tentacle':
            console.log(`A slimy, tentacle that's still squirming...`)
            break;
        case 'bunch o berries':
            console.log(`Assortment of berries, wait, did Squirrel munch on some already?...`)
            break;
    }
}
// Myra && https://javascript.info/object                            
let healItem = {
    coconut: 15,
    apple: 25,
    'fox meat': 30,
    tentacle: 30,
    'bunch o berries': 30,
}

let atkItem = {
    watch: 40,
    eyeball: 40,
    bait: 40,
    'fuzzy blue creature': 40,
}

const equipAdd = (item) => {
    equipment.push(item)
    switch (item) {
        case 'rusty steel hat':
            console.log(`Rusty..but now I can steel myself against enemies.`)
            break;
        case 'rubber sword':
            console.log(`Flexible. Each hit goes Boing!`)
            break;
        case `stick`:
            console.log(`A stick? I wonder if Squirrel plays fetch...`)
            break;
        case `clam necklace`:
            console.log(`A necklace made of clams. Smells fishy...`)
            break;
        case 'calcified coral':
            console.log(`Coral that's been fused together and sharpened. How do you sharpen coral?`) 
            break;
        case 'turquoise ring':
            console.log(`A ring as blue as the ocean. Is it glowing green?`)
            break;
        case 'spiked gauntlets':
            console.log(`Gloves with spikes. This will be useful.`)
            break;
        case 'airy slacks':
            console.log(`Ahh, so light...almost feels like I'm wearing nothing...`)
            break;
        case 'dragon mail':
            console.log(`Armor made from dragon hide, but can it protect me from a dragon?`)
            break;
        case 'dragon tooth':
            console.log(`A old tooth that's still sharp, better not touch that tip...`)
            break;
        case 'spotted cloak':
            console.log(`Extravagent, soft pelt with vibrant spots...`)
            break;
    }
}

const atkItems = (item, enName) => {
    switch (item) {
        case 'watch':
            console.log(`You spin the watch and turn back time. Nice! \nYou were able to get a couple of hits on ` + enName + `!`)
            break;
        case 'eyeball':
            console.log(`You hold out the eyeball toward ` + enName + ` \nand a bright, blue laser beam shoots out!`)
            break;
        case 'bait':
            console.log(`You toss the bait on ` + enName + ` and a pack of wolves come \ngnashing their jaws to get a piece.`)
            break;
        case 'fuzzy blue creature':
            console.log(`The fuzzy blue creature blows up into a giant and explodes on ` + enName + `!`)
            break;
    }
}

let equipItem = {
    stick: 5,
    'rubber sword': 10,
    'rusty steel hat': 10,
    'clam necklace': 20,
    'calcified coral': 20,
    'turquoise ring': 30,
    'spiked gauntlets': 25,
    'airy slacks': 25,
    'dragon mail': 30,
    'dragon tooth': 20,
    'spotted cloak': 30,
}

const equipHP = (item) => {
    health = health + equipItem[item]
    return console.log(`You equip ` + item + ` and gain ` + HPGain(`${equipItem[item]}HP `) + `!
    `)
}

const attackStatus = (item) => {
    attack = attack + equipItem[item]
    return console.log(`Your attack increased. You will now do ` + HPLoss(`${attack}damage`) + `!
    `)
}

const currentAtk = (value) => {
    attack = attack + value
    return console.log(`Your attack increased. You will now do ` + HPLoss(`${attack}damage`) + `!
    `)
}

let fairyStat = {
    health: 15,
    attack: 1,
}

const fairy = () => {
    console.log(npc((`Ooh, a human! I haven't seen one since I left that wicked witch's prison.`)))
    console.log(npc((`I admire humans so I'll give you a gift. \nMy wand here is a little bent but it should work as intended.
    `)))
                                
    const chooseHealth1 = () => {
        let chooseMin = readline.question(quest(`Choose and type a number between 100 - 150 then press enter. `))
        
        if (chooseMin < 100 || chooseMin > 150) {
            console.log(`Only choose a number between 100 and 150.`)
            chooseHealth1()
        }
           
        const chooseHealth2 = () => {
            let chooseMax = readline.question(quest(`Now choose a number between 150 - 200. `))
            
            if (chooseMax < 150 || chooseMax > 200) {
                console.log(`Only choose a number between 150 and 200.`)
                chooseHealth2()
            }
                                        
            const finalHealth = () => {
                health = healthGenerator(chooseMin, chooseMax)
                console.log(`SHAZZAMM!!
                `)
                console.log(npc((HP(`${health}`) + ` is now your health points or HP or life points. \nWhatever you wanna call it.`)))
                console.log(npc((`If your HP goes down to ` + noHP(`0`) + `, it's game over. \nAnd trust me, you don't want to be stuck in Neverending Land.
                `)))
                console.log(npc(`Let me give you a base attack of 5. \nEquipment are automatically equipped and increase either your attack or HP.`))
                console.log(npc(`Here's another parting gift. I found this stick on the ground. You're welcome!`))
                attack = 5
                equipment.push(`stick`)
                attackStatus('stick')
                console.log(npc(`Let me show you your first battle! Battle will be a common occurence in Neverending Land.`))
                console.log(npc(`Remember, never let your HP go down to 0. \nWhen you have items, you can use them for either healing or extra damage.`))
                
                battle(fairyStat.health, fairyStat.attack, 'Daisy the Fairy', fairyVictory)
            }
            finalHealth()
        }
        chooseHealth2()
    }
    chooseHealth1()
}

const fairyVictory = () => {
    console.log(npc((`Well that was fun. I just wanted to see if my wand still works. \nThanks and maybe we'll see each other again.
    `)))
    travel2Town()
}

const rusty = () => {
    console.log(npc((`Hello-woof. I'm looking around for food-woof.`)))
    console.log(npc((`Do you have anything to spare in exchange for a hat-woof?
    `)))
                                
    if (inventory.includes('coconut')) {
        console.log(squirrel(`Psst, I don't think you should give your coconut. You only have 1.`))
        
        if (giveCoco = readline.keyInYNStrict(quest(`Are you going to give your coconut? `))) {
            removingItem('coconut')
            console.log(npc((`Thank you, blessed child-woof! \nTake this as a token of my gratitude-woof.
            `)))
            console.log(`The dog takes out a rusty steel hat and hands it over to you.`) 
            equipAdd('rusty steel hat')
            equipHP(`rusty steel hat`)
            currentHP()
            console.log(npc((`That should help defend against attacks.`)))
            console.log(`(You see white-specked orange kitty twins pounce toward you)
            `)
            twins()
        }
        else {
            health = health - 10
            console.log(`Rusty the Doggo bites your hand damaging you for ` + HPLoss(`${10}HP`) + `!`)
            currentHP()
            console.log(npc((`Grr...Never can trust humans-woof.`)))
            console.log(squirrel((`Don't feel bad, we may need it more than that grumpy doggo.
            `)))
            console.log(`Just then you see white-specked orange kitty twins pounce toward you.
            `)
            twins()
        }
    }
    else {
        console.log(npc((`Hmm..I don't smell any food on you-woof. \nThere is nothing you can give me-woof.`)))
        console.log(`Doggo scampers off with a rumbling tummy.`)
        console.log(squirrel((`Guess you can say, he was wroode.
        `)))
        console.log(`Just then you see white-specked orange kitty twins pounce toward you
        `)
        twins()
    }
}

let kittyStat = {
    health: 20,
    attack: 2,
}
                            
const twins = () => {
    console.log(npc((`Meoww. This here a swipe up. Get those paws up!`)))
    console.log(squirrel((`These kitties seem serious.
    `)))
    let twinsPrompt = readline.keyInYNStrict(quest(`Wanna fight'em? Type y or n. `))
    
    if (twinsPrompt) {
        console.log(npc((`Let's get swiping!! Meow!
        `)))                           
        
        battle(kittyStat.health, kittyStat.attack, 'The Kitty Twins', kittyVictory)
    }
    else {
        health = health - 5
        console.log(npc((`Meoww. We thought so. Purrfection cannot be touched.`)))
        console.log(`The kitty twins pounce on your head damaging you for ` + HPLoss(`5HP`) + (` before scurrying away.`))
        currentHP()
        console.log(squirrel((`I think they were just bored. Let's continue.`)))
        console.log(squirrel((`Look, there's a fortune teller. I wanna see your fortune.`)))
        fortune()
    }
}

let kittyVictory = () => {
    console.log(`You grab their tails, twirl, then throw them across the town! KO!
    `)
    console.log(`You pick up a rubber sword that they dropped.`)
    equipAdd(`rubber sword`)
    attackStatus(`rubber sword`)
    console.log(squirrel(`I think they were just bored. \nLet's move on to that fortune teller across the street.`))
    fortune()
}

const fortune = () => {
    let fortuneChoice1 = ['watch', 'eyeball', 'bait', 'fuzzy blue creature']
    let fortuneChoice2 = ['earth', 'water', 'sky', 'fire']
    console.log(npc(`Step right up. Let me see your future child.`))
    console.log(`You walk up curious but cautious of this wart-nosed, emaciated woman-being-person-thingie...
    `)
    
    let fortune1 = () => {
        console.log(npc(`I've seen your impending doom. I can help deter that fate.`))
        
        if (firstChoice = readline.keyInYNStrict(quest(`Would you like a beverage?`))) {
            health = health + 25
            console.log(`The teller hands you a dirt-speckled clay cup filled with ominous-looking green sludge.`)
            console.log(`You force it down your throat trying to ignore the feeling of slugs sliding down your throat.`)
            console.log(`You healed for ` + HPGain(`25HP`) + `!`)
            currentHP()
            fortune2()
        }
        else {
            health = health - 5
            console.log(npc(`Ugh! You deny my hospitality. Rudeness is not tolerated.`))
            console.log(`The witch flicks your nose and damages you for ` + HPLoss(`5HP`) + `!`)
            currentHP()
            fortune2()
        }
    }
    let fortune2 = () => {
        console.log(npc(`My insight tells me to offer you an item.`))
        let secondChoice = readline.question(quest(`Which item do you desire? \n${fortuneChoice1.join(`, `)} \nType the item and press enter. `))
        
        if (secondChoice === 'watch') {
            itemAdd(secondChoice)
            console.log(npc(`My father's watch. Although I think it's broken...`))
            fortune3()
        }
        else if (secondChoice === 'eyeball') {
            itemAdd(secondChoice)
            console.log(npc(`Hehe, I personally ripped that one out of a unicorn.`))
            fortune3()
        }
        else if (secondChoice === 'bait') {
            itemAdd(secondChoice)
            console.log(npc(`I made that bait myself from poo. Won't say who's poo..`))
            fortune3()
        }
        else if (secondChoice === 'fuzzy blue creature') {
            itemAdd(secondChoice)
            console.log(npc(`I found this thing in my brew pot! It ruined my unicorn stew.`))
            fortune3()
        }
        else {
            console.log(npc(`My insight tells me you're being tricky. Try again.`))
            fortune2()
        }
    }
    const fortune3 = () => {
        console.log(npc(`Now, onto more interesting decisions.`))
        let thirdChoice = readline.keyInSelect(fortuneChoice2, `Which element defines you? Type in a number.`)
        
        if (fortuneChoice2[thirdChoice] === 'earth') {
            console.log(`Your hands start to crack and out grows a scaley, hardened skin.`)
            console.log(`You look disgustingly at your molted skin on the floor \nand try to erase it from your memory.`)
            console.log(npc(`Now you have hands as hard as the mountains.
            `))
            currentAtk(20)
            console.log(`The ground starts to shake. It's an earthquake! You pack up all your belongings `)
            console.log(`and stuff Squirrel into your invenory. You see a floating cloud and jump on...
            `)
            travel3Sky()
        }
        else if (fortuneChoice2[thirdChoice] === 'water') {
            console.log(`Your hands disintegrate! You start hyperventilating and black out!`)
            console.log(`You wake up and see a translucent, blue-tinged formless blob for hands!`)
            console.log(npc(`Now you have hands as fluid as the ocean.
            `))
            currentAtk(20)
            console.log(squirrel(`Tsunami!! We're doomed! We're going to drowwnnn!!`))
            console.log(`A massive wave burst through the town and you get tossed around \nin the wave as you hold onto Squirrel...
            `)
            travel3Fire()
        }
        else if (fortuneChoice2[thirdChoice] === 'sky') {
            console.log(`Your hands start moving as if there are bugs under your skin!`)
            console.log(`Your fingers. No. Now they're claws! And there's some silver feathers sticking out!`)
            console.log(npc(`Now you have hands made for flight.
            `))
            currentAtk(20)
            console.log(`A gust of wind rips through town. Floorboards, dirt and creatures get swept away.`)
            console.log(`You slice through the wind with your claws and head towards the ocean...
            `)
            travel3Water()
        }
        else if (fortuneChoice2[thirdChoice] === 'fire') {
            console.log(`Your hands burst into flames!! But you don't feel anthing.`)
            console.log(npc(`Now you have hands made for destruction. Hehe.
            `))
            currentAtk(20)
            console.log(`You accidentally put the tent on fire! The fire spreads throughout the town!`)
            console.log(npc(`My tent! Are you trying to make me a penniless woman?!`))
            console.log(squirrel(`Ooh, she's fiery right now. Let's scram. I'll dig us a way outta here.`))
            console.log(`You look down the dark abyss, hesitate and jump....
            `)
            travel3Earth()
        }
        else {
            console.log(`You must choose an element. Try again.`)
            fortune3()
        }
    }
    fortune1()    
}

const travel3Earth = () => {
    console.log(squirrel(`My what a ride. I've got dirt all over my luscious black fur.`))
    console.log(squirrel(`I think I dug to the other side of the world! We're in the Grassy Plains now.`))
    console.log(`Looking around, you see something moving in the grass ahead of you.
    `)
    let plainsQuestion = readline.keyInYNStrict(quest(`Would you like to check what's in the grass?`))
    
    if (plainsQuestion) {
        foxPrompt()
    }
    else {
        console.log(squirrel(`Let's not have any unknown encounters. You never know what's lurking in these lands.`))
        console.log(squirrel(`There is only one path I see. That's toward the Spooky Forest.`))
        console.log(squirrel(`Supposedly it's haunted by the wicked witch of NeverLand.`))
        travel4Forest()
    }
}

let octopusStat = {
    health: 90,
    attack: 10,
}

const travel3Water = () => {
    console.log(squirrel(`You're flying! That teller was good for something.`))
    console.log(squirrel(`Let's look for land. That tornado probably destroyed the town.`))
    console.log(`As you flap your arms, you notice an octopus to the left and a shark to the right.
    `)
    let seaEncounter = readline.question(quest(`Which way will you go? Type left or right then press enter. `))

    if (seaEncounter === `left`) {
        console.log(squirrel(`Smart move. Sharks are well, sharks. Can't trust'em.`))
        console.log(npc(`Who are you? You and that rodent are trespassing!`))
        console.log(`Now that you're up close, you can see that it's about the size of a bus.`)
        console.log(squirrel(`Psst, that octopus is huge! His meat would be nutritious and beneficial for our journey.
        `))
        let octopus = readline.keyInYNStrict(`Will you attempt to get some octopus meat?`)

        if (octopus) {
            console.log(`You dive down with your claws ready to slash..`)
            console.log(npc(`I knew you came into my territory to get my scrumptious flesh.`))
            console.log(npc(`But, it is you who will end up as a lump of flesh.`))
            
            battle(octopusStat.health, octopusStat.attack, `Bob the Octopus`, bobVictory)
        }
        else {
            console.log(npc(`Since you don't seem to be of ill intent. I shall let you pass.`))
            console.log(npc(`If you seek land, go west. There is an island there, `))
            console.log(npc(`although there were rumors of demons and creatures roaming about there.`))
            console.log(npc(`Accept this parting gift and good luck on your adeventure.
            `))
            equipAdd(`clam necklace`)
            equipHP(`clam necklace`)
            currentHP()
            console.log(squirrel(`West huh? Well get's going. I'm getting seasick.`))
            console.log(`As you head west gliding over the dark blue sea you take in the moment..`)
            console.log(`Then the sea splits open! And it swallows you and Squirrel!`)
            console.log(`You hold onto Squirrel, close your eyes and hold your breath...
            `)
            travel4UnderSea()
        }
    }
    else if (seaEncounter === `right`) {
        console.log(squirrel(`The shark! You wanna meet a shark! What kind of hooman are you?`))
        console.log(`You fly up to the shark and notice it's a battered great white. It looks like `)
        console.log(`it just came out of a battle. Scratches and claw marks exposing bright red flesh...
        `)
        console.log(npc(`Hooman, I don't have much time left. Here take this and beware of the king of the deep sea...`))
        equipAdd(`calcified coral`)
        attackStatus(`calcified coral`)
        console.log(npc(`Get out of the sea. Head west, there is an island there. The sea is dangerous.
        `))
        console.log(squirrel(`Don't need to tell me twice. I don't wanna stay to end up like that shark.`))
        console.log(`As you head west gliding over the dark blue sea you take in the moment..`)
        console.log(`Then the sea splits open! And it swallows you and Squirrel!`)
        console.log(`You hold onto Squirrel, close your eyes and hold your breath...
        `)
        travel4UnderSea()
    }
    else {
        console.log(`Only left or right.`)
        travel3Water()
    }
}

const bobVictory = () => {
    console.log(`You shred the octopus into pieces and take one big chunk before it sinks.
    `)
    itemAdd('tentacle')
    console.log(squirrel(`Yum, I bit a chunk out of him. I bet he tastes better grilled.`))
    console.log(squirrel(`Let's head toward that speck in the distance to the west. Hopefully it's land.
    `))
    console.log(`As you head west gliding over the dark blue sea you take in the moment..`)
    console.log(`Then the sea splits open! And it swallows you and Squirrel!`)
    console.log(`You hold onto Squirrel, close your eyes and hold your breath...
    `)
    travel4UnderSea()
}

let boaStat = {
    health: 100,
    attack: 15,
}

const travel3Fire = () => {
    console.log(`You and Squirrel wash up on an island. You see a volcano! \nThere's hardened lava all over the shore.`)
    console.log(squirrel(`Well, I don't know about you but I am not going near that volcano. \nLet's head into the jungle.`))
    console.log(`You make your way into the jungle brushing away branches getting in your face.`)
    console.log(squirrel(`There's so much vegetation here! Here, I picked some berries along the way.
    `))
    itemAdd('bunch o berries')
    console.log(npc(`Hss, theives! Hss, who said you can eat the fruits of my labor?`))
    console.log(`A 20foot golden boa slithers out from the bushes, fangs baring...`)
    console.log(squirrel(`NOPE!! Let's make a run for it hooman!
    `))
    console.log(`You run past bushes, trees and come upon a fork. Left goes toward the volcano's base.`)
    console.log(`Right seems to go deeper into the jungle.`)

    const forkFunc = () => {
        let fork = readline.question(quest(`Are you going left or right? Type left or right then press enter.`))

        if (fork === 'left') {
            console.log(squirrel(`Eek! You want to go toward the volcano! Fine, let's go!`))
            travel4Volcano()
        }
        else if (fork === 'right') {
            console.log(npc(`Hss, Haha..you will never come out of this jungle alive!`))

            battle(boaStat.health, boaStat.attack, 'Boo the Boa', booVictory)
        }
        else {
            console.log(`Type only left or right. Then press enter.`)
            forkFunc()
        }
    }
    forkFunc()
}

const booVictory = () => {
    console.log(squirrel(`Ha! Take that! Big meanie! I wasn't scared...`))
    console.log(npc(`A snake is nothing to fear. But I am another story.`))
    console.log(`A spotted jaguar comes out of the foliage nearby.`)
    console.log(squirrel(`I'm starting to think you're bad luck hooman.`))
    console.log(`The jaguar chomps on Squirrel and runs off!`)
    console.log(squirrel(`AHHH...Help me!!...`))
    console.log(`You jet off in their direction hoping to catch up...
    `)
    travel4Jungle()
}

let innkeeperStat = {
    health: 90,
    attack: 10,
}

const travel3Sky = () => {
    console.log(squirrel(`Woah..we're standing on clouds! And there's a whole city on clouds!`))
    console.log(squirrel(`There's a bustling market, an open-air spa and flying horses!`))
    console.log(squirrel(`Let's get into an inn so we can get information on our whereabouts.`))
    console.log(`You wave away some clouds as you enter and walk up to the innkeeper.
    `)
    console.log(npc(`You two! I saw you both land here a second ago. Welcome land-dwellers to Celestial City!`))
    console.log(npc(`Would you like some Celestial Ale? or maybe a \nfiery-sizzling-made-by-yours-truly-Celestial-Inn-Burger?`))
    console.log(npc(`Or maybe both? You can get both with the Celestial Combo for a fraction of the cost.
    `))
    console.log(squirrel(`Ooh, I would love to rest my little paws. Some of that ale and burger sounds good.`))
    
    if (celestial = readline.keyInYNStrict(quest(`Would you like the Celestial Combo? Type in y or n.`))) {
        console.log(npc(`Fantastic! Here are two combos! Your rooms are on the second floor. Enjoy your stay here.`))
        health = health + 30
        console.log(`The Celestial Combo increased your health by ` + HPGain(`30`) + `!`)
        currentHP()
        console.log(`After you and Squirrel scarf down the scrumptious food, you both head to your rooms.`)
        console.log(`The second your head lands in the nimbus pillow, you get sleepy....
        `)
        travel4Arena()
    }
    else {
        console.log(npc(`Not hungry eh? It's alright, no hard feelings. Your rooms are right upstairs.`))
        console.log(npc(`How would you like to play a game? We Celestians love our games.`))
        console.log(npc(`If you win. I'll give you this pair of airy slacks. \nIt's as light as a feather but tough enough to take hits.
        `))
        console.log(squirrel(`Nice! We accept! I am the king of cards. Ya better watch out boy.`))
        console.log(npc(`Cards? I never said anything about cards. Haha! This is a duel!`))
        console.log(`Just then the innkeeper rips off his shirt exposing his furry chest and charges at you!`)

        battle(innkeeperStat.health, innkeeperStat.attack, `The Innkeeper`, innVictory)
    }
} 

const innVictory = () => {
    console.log(npc(`Hoho! Well played! That was thrilling. As promised, here are the slacks.`))
    equipAdd('airy slacks')
    equipHP('airy slacks')
    currentHP()
    console.log(squirrel(`Well, that was fun. I'm exhausted..yeah I know I didn't do anything.`))
    console.log(squirrel(`Listen, it takes alot of energy to be your personal cheerleader okay?
    `))
    console.log(`You both head into your rooms and jump into bed. Everything is so soft..`)
    console.log(`The second your head lands in the nimbus pillow, you get sleepy...
    `)
    travel4Arena()
}

let foxStat = {
    health: 90,
    attack: 10,
}

const foxPrompt = () => {
    let foxOptions = ['fight', 'pet', 'talk', 'flee']
    console.log(squirrel(`Ooh, it's a cute little red fox. Psst, I think you should pet it.`))
    let foxQuestion = readline.question(quest(`What do you want to do? \n${foxOptions.join(`, `)}\nType in your answer and press enter. `))
    
    if (foxQuestion === 'fight') {
        console.log(npc(`Grr..I know you want my fur! Just like all the other hoomans.`))
        
        battle(foxStat.health, foxStat.attack, 'Kitsune', foxVictory)
    }
    else if (foxQuestion === 'pet') {
        health - 10
        console.log(`The fox snarls and bites your hand for ` + HPLoss(`10damage`) + `!`)
        currentHP()
        console.log(npc(`How dare you try to touch my fur! I just got a perm.`))
        console.log(`The fox prances away muttering something about getting her fur brushed.
        `)
        console.log(squirrel(`She never was very friendly. Let's move on to the Spooky Forest up ahead.`))
        travel4Forest()
    }
    else if (foxQuestion === 'talk') {
        console.log(npc(`I see you have another hooman Squirrel. You tricky little devil.`))
        console.log(npc(`Has Squirrel told you what happened to the other hoomans he has ..`))
        console.log(`Squirrel smacks the fox across the face and she prances away with a whimper.
        `)
        console.log(squirrel(`I think that's enough shoptalk for now. Let's get moving into that forest.`))
        travel4Forest()
    }
    else if (foxQuestion === 'flee') {
        console.log(`The fox watches you inquisitively...`)
        console.log(squirrel(`Why did you show yourself if you were going to flee?`))
        console.log(`You bolt past the fox and through the tall grass unknowingly headed toward the Spooky Forest...
        `)
        travel4Forest()
    }
    else {
        console.log(`Stop making up words. Try again.`)
        foxPrompt()
    }
}

const foxVictory = () => {
    console.log(`You incinerate the fox with flame bursting from your hands.
    `)
    console.log(`You obtained cooked fox meat!`)
    itemAdd('fox meat')
    console.log(squirrel(`Don't worry. It was self-defense. Now you have some meat to heal yourself.`))
    console.log(squirrel(`Now there's only one way forward. On to the Spooky Forest!`))
    travel4Forest()
}

let treeStat = {
    health: 90,
    attack: 10,
}

const travel4Forest = () => {
    console.log(squirrel(`Supposedly the witch of this forest hates all living creatures so she keeps around dead ones.`))
    console.log(squirrel(`They say she was sleighted by a demon and so now she curses everything she sees.
    `))
    console.log(`You walk steadily through the black, dilapidated trees. They look sad?`)
    console.log(squirrel(`The old legend says that these trees used to be living, talking trees \nthat act as guardians for the forest.`))
    console.log(squirrel(`But now they stand guard for the witch and her territory...or so I heard.`))
    console.log(`As you walk through the burnt, desolate forest, \nyou notice a bright red apple on one of the trees.
    `)
    let applePrompt = readline.keyInYNStrict(quest(`Are you going to pick the apple?`))
    
    if (applePrompt) {
        console.log(`You reach out to grab the apple...`)
        console.log(`Suddenly the tree with the apple starts moving!
        `)
        console.log(npc(`THIEF! In the name of the Lady of the Woods, I will strike you down`))
        console.log(npc(`and feed your nutritious body to my roots!`))
        
        battle(treeStat.health, treeStat.attack, `Woody the Dead Tree`, woodyVictory)
    }
    else {
        console.log(squirrel(`Smart move. We don't know if that apple is safe.`))
        console.log(squirrel(`Now, brace yourself. We're finally at the witch's hut.
        `))
        travel5Hut()
    }
}

const woodyVictory = () => {
    console.log(`You decide to burn the dead tree just in case...and pick the apple up from the ashes.`)
    itemAdd(`apple`)
    console.log(squirrel(`Fascinating that the apple is the only living thing here. \nI don't trust it. It smells weird.`))
    console.log(squirrel(`Now, brace yourself. We're finally at the witch's hut.
        `))
    travel5Hut()
}

const travel4UnderSea = () => {
    console.log(`As you open your eyes you hear voices...`)
    console.log(squirrel(`How do we get out of here?! I did not consent to living in a prison!`))
    console.log(npc(`Shhh..just stay still so I unlock those chains. Hm, I haven't seen another `))
    console.log(npc(`human in years. Hey, get up! We need to get outta here.
    `))
    console.log(`Your eyes finally adjusted to low light. You see a ragged, black-bearded scruffy man. `)
    console.log(`You're all sitting on the floor surrounded by waterfalls on all sides and `)
    console.log(`as you look up, you see the ocean above you! You're underwater!
    `)
    console.log(squirrel(`This is the witch's underwater prison! We're doomed! No one ever leaves.`))
    console.log(npc(`There is a way out but...the witch's pet is guarding the exit. Which is the `))
    console.log(npc(`direction we're headed now. Together, we might have a chance to escape.
    `))
    console.log(`As you walk into a waterfall, you are teleported to another chamber....`)
    console.log(`You wipe the water off your eyes, you notice that there is only one way forward.`)
    console.log(`Halfway through the hallway, a pedestal sprouts up with a turquoise button..
    `)
    let button = readline.keyInYNStrict(quest(`Will you press the button?`))

    if (button) {
        console.log(`You press the button and it sinks in upon itself exposing a turquoise ring!`)
        console.log(squirrel(`Ooh, I sense a protective spell around it. Put it on.
        `))
        equipAdd(`turquoise ring`)
        equipHP(`turquoise ring`)
        currentHP()
        console.log(`Water starts to flood into the hallway and you dash forward.`)
        console.log(`The door closes behind you but you notice that the prisoner `)
        console.log(`is still in the hallway. You try to open the door but it's locked.
        `)
        console.log(squirrel(`There's nothing you can do. Sacrifices must be made.`))
        console.log(`You look around the room you entered...`)
        travel5Shell()
    }
    else {
        console.log(squirrel(`Always cautious. I like your mentality.`))
        console.log(`You step forward and the tile slips down! The walls start to close in from both sides!`)
        console.log(squirrel(`Ahh! I spoke too soon!
        `))
        console.log(npc(`Watch where you're stepping! Make a run for the door now.`))
        console.log(`The walls are closing faster than you're running!`)
        console.log(npc(`I'm not going to make it. Take this adventurer. You will need it.`))
        console.log(`You make it into the next room as the walls close in.
        `)
        console.log(`You look down and see a pair of gauntlets in your hands.`)
        equipAdd(`spiked gauntlets`)
        attackStatus(`spiked gauntlets`)
        console.log(squirrel(`Well, at least he was useful for something.`))
        console.log(`You look around the room you just entered...`)
        travel5Shell()
    } 
}

let clownStat = {
    health: 90,
    attack: 10,
}

travel4Arena = () => {
    console.log(npc(`Get up you smelly, butt-faced scoundrels! You're up next!`))
    console.log(squirrel(`What? Where are we? Why is it so noisy?`))
    console.log(`You sit up dazed and look around. \nYou're in a massive circle surrounded by jeering creatures.`)
    console.log(`Mugs, coins and blood flies your way as you try to get up.`)
    console.log(`There's blood, metal scraps and bits of flesh scattered across the floor!
    `)
    console.log(npc(`Next up! We got us some land-dwellers! Let's see who makes it out of here in one piece!`))
    console.log(squirrel(`This is an arena! I'm cute and floofy and brittle! How can this happen to me?!`))
    console.log(`Just then, the gates open up and out comes....a clown? holding a scythe??!`)
    console.log(npc(`PLACE YOUR BETS BOIS!! LET THE GAMES BEGIN!!`))
    console.log(`The clown comes charging at you maniacally swinging his scythe.`)

    battle(clownStat.health, clownStat.attack, 'IT the Clown', itVictory)
}

let skunkStat = {
    health: 100,
    attack: 5,
}

const itVictory = () => {
    console.log(npc(`We have a WINNER!! Discard the clown and bring in the next contestant.`))
    console.log(squirrel(`The next contestant? I'm gonna look for a way out...hang in there.
    `))
    console.log(`The gates open and a pair of, are those mushrooms? Green-capped mushrooms with spears??`)
    console.log(`The mushrooms pick up the clown and drag him back in. They then toss out a skunk!`)
    console.log(npc(`Ooh, that thing may look cute but watch out! That thing has rabies!`))
    console.log(npc(`And don't forget Celestians to place your bets! Ooh, I have a good feeling about these land-dwellers.`))
    console.log(`The skunk charges at you with foam dripping from the mouth...`)

    battle(skunkStat.health, skunkStat.attack, 'Stinky the Skunk', stinkyVictory)
}

const stinkyVictory = () => {
    console.log(npc(`We got a two-time winner here! Hoho! I can buy myself 10 Celestial Combos tonight!`))
    console.log(npc(`Hold up...The King wants an audience with the winner here! \nYou must've impressed him. Good luck!
    `))
    console.log(`The green mushrooms come running out and put bags over you and Squirrel.`)
    console.log(squirrel(`Can you be gentle?? My fur is getting ruffled up.`))
    console.log(`You get tossed around and bang into something hard. You hear some grunts and clanking...`)
    console.log(`You get tossed out and you're in front of a giant mushroom clad in armor....
    `)
    travel5Shroom()
}

let dragonStat = {
    health: 200,
    attack: 25,
}

const travel4Volcano = () => {
    console.log(`You run up to the base of the volcano and see a cave to the right..
    `)
    console.log(squirrel(`There doesn't seem to be anyone in here. There's a passage, let's go.`))
    console.log(squirrel(`Is it just me or is it getting hotter in here?`))
    console.log(`The passage opens up to huge room with a pedestal in the middle surrounded by lava.`)
    console.log(squirrel(`Hmm, there's a mask on top and lines carved on the stone under the mask...`))
    console.log(squirrel(`I know! Put some of your blood on the mask! I swear I'm not crazy!
    `))
    console.log(`You take a knife and slice open your hand above the mask losing ` + HPLoss(`5HP`) + `!`)
    health = health - 5
    currentHP()
    console.log(`The eyes of the mask light up and the ground shakes! \nLava boils! Something shoots out of the lava!`)
    console.log(npc(`Hooman! The smell of your blood has awakened me from my slumber!`))
    console.log(squirrel(`Eek! It's a talking, gold-scaled, fire-breathing dragon! \nThis is worse than the boa!`))
    console.log(npc(`You have come to plunder the riches in this volcano! \nAs guardian, I will not let you pass!`))

    battle(dragonStat.health, dragonStat.attack, 'The Guardian', dragonVictory)
}

const dragonVictory = () => {
    let dragonGift = ['dragon mail', 'dragon blood', 'dragon tooth']
    console.log(npc(`You show as much bravery and ferocity as a dragon. I respect that.`))
    console.log(npc(`I offer a gift. Choose wisely hooman.`))

    const dragonChoice = () => {
        let choice = readline.keyInSelect(dragonGift, `Which item do you want? Type in a number.`)

        if (dragonGift[choice] === 'dragon mail') {
            equipAdd('dragon mail')
            equipHP('dragon mail')
            currentHP()
            console.log(npc(`That armor was forged by dwarves from the scales of my great-grandma.`))
            console.log(npc(`Come hooman, rodent. Let me show you something worth protecting.`))
            console.log(`You take Squirrel and jump on The Guardian's back as he takes off into a tunnel...
            `)
            travel5Volcano()
        }
        else if (dragonGift[choice] === 'dragon blood') {
            console.log(`You gulp down the blood and feel a ferocious energy deep inside..`)
            console.log(`You heal for ` + HPGain(`50HP`) + `!`)
            health = health + 50
            currentHP()
            console.log(npc(`That is the blood of my great-grandma. It holds massive energy.`))
            console.log(npc(`Come hooman, rodent. Let me show you something worth protecting.`))
            console.log(`You take Squirrel and jump on The Guardian's back as he takes off into a tunnel...
            `)
            travel5Volcano()
        }
        else if (dragonGift[choice] === 'dragon tooth') {
            equipAdd('dragon tooth')
            attackStatus('dragon tooth')
            console.log(npc(`That tooth was pulled from my great-grandma, still sturdy and sharp.`))
            console.log(npc(`Come hooman, rodent. Let me show you something worth protecting.`))
            console.log(`You take Squirrel and jump on The Guardian's back as he takes off into a tunnel...
            `)
            travel5Volcano()
        }
        else {
            console.log(npc(`Do not play games with me. Choose a number.`))
            dragonChoice()
        }
    }
    dragonChoice()
}

let jagStat = {
    health: 150,
    attack: 20,
}

const travel4Jungle = () => {
    let decision = ['throw rock', 'talk', 'fight']
    console.log(`You finally caught up to the leopard at a pond. It seems to be drowning Squirrel!`)
    console.log(squirrel(`I am not a toy! Let me go! I can't swim! Ahh!`))
    console.log(npc(`I like my food clean. Stay still rodent.`))
    console.log(`You look around and find a rock...`)
    console.log(squirrel(`Hooman, what are you doing? Help me! I thought we was fwends!`))

    const jungle = () => {
        let jag = readline.keyInSelect(decision, `What will you do? Type in a number.`)

        if (decision[jag] === 'throw rock') {
            console.log(`You throw the rock and the jaguar drops Squirrel, turning it's attention toward you.`)
            console.log(npc(`That's not very nice. Prrr...Are you offering yourself as dinner instead?`))
            console.log(`The jaguar silently approaches you and pounces..`)

            battle(jagStat.health, jagStat.attack, 'Big Neko', jagVictory)
        }
        else if (decision[jag] === 'talk') {
            console.log(npc(`Oh, a lover not a fighter eh? I respect that...`))
            console.log(npc(`Child, there is something I would like help with. If you help me, I won't kill this rodent.`))
            console.log(squirrel(`We accept! Please let me live!
            `))
            console.log(npc(`Come. There is a small village nearby. The tribesmen stole something from me.`))
            console.log(`You pick up the frazzled Squirrel and follow the feline...`)
            travel5Village()
        }
        else if (decision[jag] === 'fight') {
            console.log(`The jaguar drops Squirrel and pounces you..`)

            battle(jagStat.health, jagStat.attack, 'Big Neko', jagVictory)
        }
        jungle()
    }
    jungle()
}

const jagVictory = () => {
    console.log(squirrel(`Ha! I wasn't scared! I knew you would save me!`))
    console.log(squirrel(`Let me make something out of this fur for you.`))
    equipAdd('spotted cloak')
    equipHP('spotted cloak')
    currentHP()
    console.log(squirrel(`Ain't I talented? Aren't you glad to have me around?`))
    console.log(`Just then you hear drums coming from the heart of the jungle.`)
    console.log(squirrel(`Let's check out what that noise is.
    `))
    travel5Village()
}

let witchStat = {
    health: 150,
    attack: 20,
}

const travel5Hut = () => {
    let witchOption = ['fight', 'talk']
    console.log(`You open the front door and....it's so bright! \nEverything in the hut is made of gliterring gold!`)
    console.log(squirrel(`Shiny! Soo shiny! Hehe, maybe we can beat the witch and take some for ourselves.`))
    console.log(`You hear sorrowful crying coming from behind a glistening, golden door.`)
    console.log(npc(`Trickster..I will have my revenge.`))
    console.log(`You hold your breath as you open the door and step forth...
    `)
    
    let witchPrompt = () => {
        console.log(`You see a tall, pale-skinned woman with jet-black hair sitting on a golden throne.`)
        console.log(`She has streaks of blood pouring from her eyes and \nblood stains all over her golden silk dress.
        `)
        let witch = readline.question(quest(`What do you want to do? \n${witchOption.join(`, `)} \nType in an answer and press enter. `))
        
        if (witch === 'fight') {
            console.log(npc(`Fool! I am not the enemy. \nThat accursed little devil beside you cursed me and my beloved forest.`))
            console.log(npc(`But no matter. You have chosen death.`))
            
            battle(witchStat.health, witchStat.attack, 'The Lady of the Woods', ladyVictory)
        }
        else if (witch === 'talk') {
            console.log(npc(`That chipmunk beside you is the demon, the Cursed One. `))
            console.log(npc(`He is the demon who put this dreadful curse on me and my forest.
            `))
            console.log(`You have a strange feeling that the witch is speaking some truth and turn your hands toward Squirrel.`)
            console.log(squirrel(`You fool! I would've shared the glory and riches with you.`))
            console.log(`Squirrel no longer looks like a chipmunk. \nHe transformed into a goliath-sized, black-robed figure with`)
            console.log(`white, bony fingers protruding from the robe with \nglaring sharp golden eyes that pierce your soul...
            `)
            console.log(npc(`The demon has finally shown his true form! \nHooman, I shall pour my energy into you. Strike him down!`))
            currentAtk(30)
            health = health + 50
            currentHP()
            
            battle(demonStat.health, demonStat.attack, `Squirrel the Demon?`, demonVictory)
        }
        console.log(npc(`There is no escape. Type in a real answer.`))
        witchPrompt()
    }
    witchPrompt()
}

let demonStat = {
    health: 200,
    attack: 20,
}

const ladyVictory = () => {
    console.log(`You start to pour fire from your fingers.`)
    console.log(`Her dress starts to melt and attach to her skin.
    `)
    console.log(`You look back and forth between the witch and Squirrel.`)
    let finalDecision = readline.keyInYNStrict(quest(`Will you strike down the witch?`))
    
    if (finalDecision) {
        console.log(`You pour all your energy into your hands and incinerate the witch.
        `)
        console.log(`As the smoke clears you see a golden bald statue with streaks of blood...`)
        console.log(squirrel(`HAHA!! It's mine. This land is mine! This gold is mine!`))
        console.log(`Squirrel's menacing laugh brings a chill down your spine and you start to back away.
        `)
        console.log(`Squirrel no longer looks like a chipmunk. \nHe transformed into a goliath-sized, black-robed figure with`)
        console.log(`white, bony fingers protruding from the robe with \nglaring sharp golden eyes that pierce your soul...
        `)
        badEnding()
    }
    else {
        console.log(`You have a strange feeling that the witch is speaking some truth and \nturn your hands toward Squirrel.
        `)
        console.log(squirrel(`You fool! I would've shared the glory and riches with you.
        `))
        console.log(`Squirrel no longer looks like a chipmunk. \nHe transformed into a goliath-sized, black-robed figure with`)
        console.log(`white, bony fingers protruding from the robe with \nglaring sharp golden eyes that pierce your soul...
        `)
        console.log(npc(`The demon has finally shown his true form! \nHooman, I shall pour my energy into you. Strike him down!`))
        currentAtk(30)
        health = health + 50
        currentHP()
        
        battle(demonStat.health, demonStat.attack, `Squirrel the Demon?`, demonVictory)
    }
}

const demonVictory = () => {
    console.log(`As Squirrel writhes in pain, his body takes on many forms until nothing \nremains but a black cloak on the floor.`)
    console.log(npc(`Hooman. You have saved me, my land and my creatures from this demon's curse.`))
    console.log(npc(`Let me repay you. I will help you leave. This is no place for a hooman.
    `))
    console.log(`A warm, glowing shower surrounds you and your eyes start to droop...
    `)
    goodEnding()
}

let krakenStat = {
    health: 250,
    attack: 30,
}

const travel5Shell = () => {
    let option = ['riches', 'glory', 'knowledge']
    console.log(`A long path leading towards a large, \npink shell with a backdrop of the deep mysterious blue sea.
    `)
    console.log(squirrel(`We'll sightsee along the way. But I have a bad feeling about this.`))
    console.log(`With each step an echo reverberates throughout the chamber.`)
    console.log(squirrel(`Ooh, the shell is so shiny! and pink! I want it.
    `))
    console.log(`Before Squirrel could touch the shell. It moves and exposes it's underside.`)
    console.log(squirrel(`It's the Kraken!! It's the witch's pet! It makes my tail so bushy.`))
    
    const meetKraken = () => {
        console.log(npc(`Hooman, why are you here? Is it riches, glory or knowledge you seek?`))
        let kraken = readline.keyInSelect(option, `Type in the number of your answer. `)

        if (option[kraken] === 'riches') {
            console.log(npc(`You hoomans and your greed never fail to surprise me.`))
            console.log(npc(`Come, this is all yours...in exchange for your soul!
            `))
            console.log(`The Kraken pushed away the surrounding water exposing mountains of gold and treasure!`)
            console.log(`Enchanted by the treasure you walk forth, eyes glued forth.`)
            console.log(squirrel(`Ooh, sooo shiny...sooo bootyful.`))
            console.log(`You throw yourself into the treasure. Ahh...this is all life needs to be..
            `)
            badEnding()
        }
        else if (option[kraken] === 'glory') {
            console.log(npc(`Haha! An adventurer indeed! Come I will give you glory...in death!`))

            battle(krakenStat.health, krakenStat.attack, `Kraken or Squid?`, krakenVictory)
        }
        else if (option[kraken] === 'knowledge') {
            console.log(npc(`A scholar! Well, here's a little secret. That rodent with you is the pest`))
            console.log(npc(`who cursed Neverending Land. That rodent traps hoomans in this world to live an endless death.
            `))
            console.log(`The Kraken splashes some water onto Squirrel. \nSquirrel starts to writhe in pain, skin crawling...`)
            console.log(`Squirrel no longer looks like a chipmunk. \nHe transformed into a goliath-sized, black-robed figure with`)
            console.log(`white, bony fingers protruding from the robe with \nglaring sharp golden eyes that pierce your soul...
            `)
            console.log(npc(`Look! That is the truth. You've been trying to escape this world \nbut the devil was beside you the whole time!`))
            console.log(squirrel(`Why did you have to be a curious one? Now I can't let you live!`))

            battle(demonStat.health, demonStat.attack, 'Squirrel the Demon?', demonVictory)
        }
        else {
            console.log(`Type in a valid choice.`)
            meetKraken()
        }
    }
    meetKraken()
}

let krakenVictory = () => {
    console.log(npc(`A thrilling fight indeed. I am honoured to have met you.`))
    console.log(npc(`To show my gratitude let me help you escape this accursed land.`))
    console.log(`The Kraken grabs you with one of his slimny tentacles and throws you into a vortex of water!
    `)
    goodEnding()
}

let knightStat = {
    health: 200,
    attack: 25,
}

const travel5Shroom = () => {
    console.log(npc(`Where are your manners? Stand up before the king!!`))
    console.log(`You stand up and look around. You're in a spacious, open-ceiling cloud throne room!`)
    console.log(`Pillars of cloud, pillows of cloud and long table overflowing with food...`)
    console.log(`The knight steps aside and there's a tiny, cat-sized, pink-capped mushroom on the throne!
    `)
    console.log(npc(`Land-dwellers! I am King Oyster Shroom of Celestial City.`))
    console.log(npc(`I have been watching your performance from my terrace. How did you like the game?`))
    console.log(squirrel(`Game?! We could've been killed! And even worse, my fur is covered in dirt!
    `))
    console.log(npc(`But the game is not over. Hoho. The last opponent is my knight.`))
    console.log(npc(`Defeat him and you can take his place by my side. What greater honor could you ask for?`))
    console.log(npc(`But you are wounded and that wouldn't be fair. \nDrink some of this Celestial water. It has magical properties.
    `))
    health = health + 30
    console.log(`You gratefully slurp down the water. Hmm, it's kind of sweet. You heal for ` + HPGain(`40HP`) + `!`)
    currentHP()
    currentAtk(10)
    console.log(`The knight steps before you...`)

    battle(knightStat.health, knightStat.attack, 'The Shroom Knight', knightVictory)
}

let oysterStat = {
    health: 50,
    attack: 5,
}

const knightVictory = () => {
    let shroom = ['feast', 'fighter', 'home', 'king']
    console.log(npc(`Hoho! I knew you had it in you! Now, choose your reward.`))
    console.log(npc(`What would you like? A belly that never rumbles? To be the most feared fighter?`))
    console.log(npc(`Or would you like to go home?`))
    console.log(squirrel(`Psst, what about being king? He's so tiny, we can step on him.`))
    
    const shroomEnd = () => {
        let decision = readline.keyInSelect(shroom, `What do you want? Type in a number. `)
 
        if (shroom[decision] === 'feast') {
            console.log(npc(`A belly that never rumbles! Never again will you go hungry!`))
            console.log(npc(`Come and take a seat at my feast! It is magical. Never will you go hungry...`))
            console.log(npc(`...and never again will you leave this place!!
            `))
            console.log(`The second the food hit your tongue all your hunger and worries disappear...`)
            console.log(`It's so delicious! It's so fulfilling! There's nothing else in the world you want..`)
            console.log(`You can't stop eating! You can't control your body!
            `)
            console.log(squirrel(`Well, that's an effective way to subdue someone...`))
            badEnding()
        }
        else if (shroom[decision] === 'fighter') {
            console.log(npc(`The most feared fighter you shall be!`))
            console.log(`The Shroom King does a little twirly dance and the knight's armor attaches itself to you!
            `)
            console.log(npc(`You shall be my new knight. There is no greater honor than to serve me.`))
            console.log(npc(`You will guard me with your life and strike down all arena participants.`))
            console.log(npc(`Everyone in Celestial City will know that you are the most fearsome fighter in the skies.
            `))
            console.log(`No matter how hard you try to take off the armor it won't come off.`)
            console.log(`You feel it getting tighter and tighter...it's attached to your skin!!`)
            console.log(squirrel(`Well, would you look at that! You've got passive protection now! How convenient!`))
            console.log(`You see Squirrel prancing toward you with a sinister smile...
            `)
            badEnding()
        }
        else if (shroom[decision] === 'home') {
            console.log(npc(`Home? Alrighty. I guess you're the boring type. Stand right there.`))
            console.log(`The King Oyster comes wobbling over and kicks you! You fall backwards...`)
            console.log(`...into a huge hole behind you! You start falling....`)
            console.log(`You see the palace, the arena, the clouds...all fading away as you fall faster...`)
            console.log(`You think to yourself 'this is it then' as you stretch out your arms....
            `)
            goodEnding()
        }
        else if (shroom[decision] === 'king') {
            console.log(npc(`King? That's not an option! Wait...You came to steal the throne!`))
            console.log(`The little king whips out a tiny brown staff and puts on a defensive pose.`)
            console.log(npc(`I am King Oyster Shroom of Celestial City! and I will defend my throne!`))

            battle(oysterStat.health, oysterStat.attack, 'King Oyster Shroom of Celestial City', shroomVictory)
        }
        else {
            console.log(`Type in one of the options.`)
            shroomEnd()
        }
    }
    shroomEnd()
}

const shroomVictory = () => {
    console.log(npc(`Mutiny! Betrayal! Guards! This is unfair!`))
    console.log(squirrel(`Oh, shut it. Or else I'll grill you.
    `))
    console.log(`The little shroom got silent as Squrriel took his cloud crown and staff.`)
    console.log(`Squirrel smacked the little shroom back into a giant hole in the floor.`)
    console.log(`Where does the hole go? Nothing! There's nothing below but clouds and land far away.`)
    console.log(`Squirrel puts the crown on you and has a mischievious smile on his floofy face...
    `)
    badEnding()
}

let finalDragon = {
    health: 200,
    attack: 25,
}

const travel5Volcano = () => {
    console.log(squirrel(`Who dug out all these tunnels through a volcano?`))
    console.log(npc(`Us dragons needed a warm habitat and a place to hide our riches.`))
    console.log(`Deep under the volcano the dragon flew until he reached a \ncavernous room filled with tunnels and...`)
    console.log(squirrel(`Treasure!! So many gems and gold! You've been hoarding all this?
    `))
    console.log(npc(`Us dragons cannot live without treasure. It is within our nature to hoard them.`))
    console.log(squirrel(`It's so shiny! I must have it! It's all mine!`))
    console.log(`Squirrel jumps off the dragon and no longer looks like a chipmunk. \nHe transformed into a goliath-sized, black-robed figure with`)
    console.log(`white, bony fingers protruding from the robe with \nglaring sharp golden eyes that pierce your soul...
    `)
    console.log(npc(`Thief! Demon! It is the demon that cursed the land afar.`))
    console.log(npc(`Hooman, you must help me.`))
    
    if (decision = readline.keyInYNStrict(`Will you help The Guardian? Type in y or n.`)) {
        console.log(squirrel(`You? Fight me? Fool..`))

        battle(demonStat.health, demonStat.attack, 'Squirel the Demon?', demonVictory2)
    }
    else {
        console.log(npc(`Traitor! Thief! The lot of you! I shall burn and devour both of you!`))
        battle(finalDragon.health, finalDragon.attack, 'The Final Guardian', guardianVictory)
    }
}

const demonVictory2 = () => {
    console.log(`As Squirrel writehes in pain, his body takes on many forms until nothing \nremains but a black cloak on the floor.`)
    console.log(npc(`Hooman. You have saved me, my clan and our treasure.`))
    console.log(npc(`Let me repay you. I will help you leave. This is no place for a hooman.
    `))
    console.log(`The Guardian breathes out a white fire onto you, but it isn't painful.`)
    console.log(`It's a soothing feeling, like all your worries and doubts are washed away...
    `)
    goodEnding()
}

const guardianVictory = () => {
    console.log(`The dragon falls into the lava wounded...`)
    console.log(squirrel(`Haha! It's all mine now! This treasure and now you...`))
    console.log(`Squirrel has a creepy, mischievious smile...
    `)
    badEnding()
}

let apeStat = {
    health: 180,
    attack: 20,
}

const travel5Village = () => {
    console.log(`As you get closer to the village, the drumming gets louder and faster.`)
    console.log(squirrel(`They seem to be having a celebration of some kind. Let's check it out.
    `))

    if (equipment.includes('spotted cloak')) {
        console.log(`You walk right up to the celebration. Baboons everywhere dancing and drinking.`)
        console.log(`Then silence. All of them staring at you, whispering.`)
        console.log(npc(`You there! You defeated the lord of the jungle? She was a nuisance.
        `))
        console.log(`You hear crying and wailing from a mushroom statue to your left. \nIt's a cage full of jaguar cubs.`)
        console.log(npc(`Mama! You killed mama! That's her pelt! Lemme outta this cage! Meow!`))
        console.log(squirrel(`Geez, you'd think they'd show more appreciation for the hard work I put into that cloak.`))
        console.log(npc(`Anyone that got rid of that big cat is a friend of mine. Come join me.
        `))

        if (join = readline.keyInYNStrict(`Will you join the baboons?`)) {
            console.log(npc(`An enemy of my enemy is my friend. Come and join our feast.`))
            console.log(`You drink and eat with the villagers hearing strange stories of a mushroom god.`)
            console.log(`You taste the boiling stew and see bits of spotted pelt ....
            `)
            console.log(`You gag and throw up, tossing the bowl away. But, it's too late, there is a `)
            console.log(`sense of shame and disgust creeping up and you can't fight it.
            `)
            badEnding()
        }
        else {
            console.log(npc(`Oh? I thought we could be friends? I guess not.`))
            console.log(`A beefy, towering ape steps out of the crowd with his fists up...`)
        
            battle(apeStat.health, apeStat.attack, 'Rambo the Ape', apeVictory)
        }
    }
    else {
        console.log(npc(`Come hooman. This way.`))
        console.log(`The jaguar leads you behind a big mushroom statue. There's a crate full of cubs!`)
        console.log(npc(`Mama! Meow! These buffy-bamboozling-baboons snatched us from the cave!`))
        console.log(`You help unlock the cage and pass the cubs to the jaguar silently.`)
        console.log(`Just then a baboon comes up and cries out attracting the whole tribe!
        `)
        console.log(npc(`I knew you would come eventually for your little cubs! Come and fight me!`))
        console.log(npc(`After I beat you, everyone will know that I, Rambo am king of the jungle.`))
        
        if (decision = readline.keyInYNStrict(`Will you help the jaguar?`)) {
            console.log(`You step in front of the jaguar and her cubs.`)
            console.log(`A beefy, towering ape comes out from the crowd with his fists up...`)

            battle(apeStat.health, apeStat.attack, 'Rambo the Ape', apeVictory1)
        }
        else {
            console.log(npc(`Grr, traitor! I thought we had a deal!
            `))
            console.log(`The leopard grabs a cub in her mouth runs away. The baboons chase after her`)
            console.log(`while the other half take the remaining cubs in the cage and tie them up.`)
            console.log(npc(`An enemy of my enemy is my friend. Come and join our feast.`))
            console.log(`You drink and eat with the villagers hearing strange stories of a mushroom god.
            `)
            console.log(`You taste the boiling stew and see bits of spotted pelt ....`)
            console.log(`You gag and throw up, tossing the bowl away. But, it's too late, there is a `)
            console.log(`sense of shame and disgust creeping up and you can't fight it.
            `)
            badEnding()
        }
    }
}

const apeVictory = () => {
    console.log(`As you lay the final hits on Rambo, the baboons in the village freeze in horror.`)
    console.log(`With their leader defeated they turn to you and bow.`)
    console.log(squirrel(`Psst, I think you're their new leader now. Take the throne man.`))
    console.log(`As you settle down on the throne, the baboons bring food and gifts.
    `)
    console.log(`You drink and eat with the villagers hearing strange stories of a mushroom god.`)
    console.log(`You taste the boiling stew and see bits of spotted pelt ....`)
    console.log(`You gag and throw up, tossing the bowl away. But, it's too late, there is a `)
    console.log(`sense of shame and disgust creeping up and you can't fight it.
    `)
    badEnding()
}

const apeVictory1 = () => {
    console.log(`As you lay the final hits on Rambo, the baboons run away in horror.`)
    console.log(`With their leader defeated, they deserted the village.
    `)
    console.log(npc(`Thank you hooman. That ape has been hunting and harrassing me and my cubs.`))
    console.log(npc(`With their leader defeated, the baboons will be disbanded.`))
    console.log(npc(`To show my gratitude, take this orb. I heard if you rub it `))
    console.log(npc(`your innermost desires will come to fruition.
    `))
    console.log(`You gratefully take the orb and rub it, thinking of home. `)
    console.log(`The world around you starts spinning and a bright light glares in your face...
    `)
    goodEnding()
}

const restart = () => {
    let restartGame = readline.keyInYNStrict(quest(`Would you like to start this game over from the beginning? \n(If you type n, the game will end)`))
    
    if (restartGame) {
        health = 0
        attack = 0
        inventory = []
        equipment = []
        welcome()
    }
    else {
        process.exit()
    }
}

const badEnding = () => {
    console.log(`Your body goes limp and you see Squirrel disintegrate \ninto a shadow that creeps toward you...`)
    console.log(`Your chest heavy, mind racing. Figures and thoughts race about..`)
    console.log(`Your eyes droop and mind sinks into the darkness and chaos \nas you hear cackling in the distance....
    `)
    restart()
}

const goodEnding = () => {
    console.log(`You wake up in your bed under the moonlight. Something inside you feels at peace.`)
    console.log(`No more running. No more fighting. Your mind feels clear now.`)
    console.log(`You have a feeling that nightmares will be a thing of the past and doze off peacefully...
    `)
    restart()
}

const endgame = () => {
    let endgamePrompt = readline.keyInYNStrict(quest(`You sure you want to be a quitter? `))
    
    if (endgamePrompt) {
        console.log(`(Squirrel whips out a hammer and bonks you on the head)
        `)
        console.log(`You wake up in your bed dripping in sweat and a bruise on your head.`)
        console.log(`You remember you had a weird dream but can't recall anything \nexcept something about a chatty chipmunk.`)
        console.log(`Strange...`)
        process.exit()
    }
    else {
        console.log(squirrel((`Exactomundo, that's what I thought.`)))
        console.log(squirrel((`Why would any of my vitims, I mean, partners leave this wunderful place.
        `)))
        restart()
    }
}

const squirrel = chalk.cyan
const npc = chalk.magenta
const noHP = chalk.red, HPLoss = chalk.red
const HP = chalk.greenBright
const HPGain = chalk.green
const quest = chalk.yellow


welcome()