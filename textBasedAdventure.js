const readlineSync = require('readline-sync')

function startGame() {
    console.log("Welcome to Quick Tarot Reading! Tarot decks date back to the 1400s, and were originally used for games rather than prediction. This game engages in fortune-telling through the use of playing cards. In this game, you will draw three random cards from the deck. The first card will be used to reflect from your past. The second card will be used to observe your present, and the third card will be used to predict your future. You will be given words to help you draw upon your own intuition. Use the words to ask yourself, What do the words mean to you? How is it related to my past, present, or future?")
    let answer = readlineSync.keyInYN("Do you want to play? \n")
    if (answer) { play() } else { leaveGame() }
}

const play = () => {

    let upMagician = "The Magician faced up: willpower, desire, creation, manifestation"
    let downMagician = "The Magician faced down: trickery, illusions, out of touch"
    let upPriestess = "The High Priestess faced up: intuitive, unconscious, inner voice"
    let downPriestess = "The High Priestess faced down: lack of center, lost inner voice, repressed feelings"
    let upEmpress = "The Empress faced up: motherhood, fertility, nature"
    let downEmpress = "The Empress faced down: dependence, smothering, emptiness, nosiness"
    let upEmperor = "The Emperor faced up: authority, structure, control, fatherhood"
    let downEmperor = "The Emperor faced down: tyranny, rigidity, coldness"
    let upHierophant = "The Hierophant faced up: tradition, conformity, morality, ethics"
    let downHierophant = "The Hierophant faced down: rebellion, subversiveness, new approaches"
    let upLovers = "The Lovers faced up: partnerships, duality, union"
    let downLovers = "The Lovers faced down: loss of balance, one - sidedness, disharmony"
    let upChariot = "The Chariot faced up: direction, control, willpower"
    let downChariot = "The Chariot faced down: lack of control, lack of direction, aggression"
    let upJustice = "Justice faced up: cause and effect, clarity, truth"
    let downJustice = "Justice faced down: dishonesty, unaccountability, unfairness"
    let upHermit = "The Hermit faced up: contemplation, search for truth, inner guidance"
    let downHermit = "The Hermit faced down: loneliness, isolation, lost your way"
    let upWheel = "Wheel of Fortune faced up: change, cycles, inevitable fate"
    let downWheel = "Wheel of Fortune faced down: no control, clinging to control, bad luck"
    let upStrength = "Strength faced up: inner strength, bravery, compassion, focus"
    let downStrength = "Strength faced down: self - doubt, weakness, insecurity"
    let upHangedMan = "The Hanged Man faced up: sacrifice, release, martyrdom"
    let downHangedMan = "The Hanged Man faced down: stalling, needless sacrifice, fear of sacrifice"
    let upDeath = "Death faced up: end of cycle, beginnings, change, metamorphosis"
    let downDeath = "Death faced down: fear of change, holding on, stagnation, decay"
    let upTemperance = "Temperance faced up: middle path, patience, finding meaning"
    let downTemperance = "Temperance faced down: extremes, excess, lack of balance"
    let upDevil = "The Devil faced up: addiction, materialism, playfulness"
    let downDevil = "The Devil faced down: freedom, release, restoring control"
    let upTower = "The Tower faced up: sudden upheaval, broken pride, disaster"
    let downTower = "The Tower faced down: disaster avoided, delayed disaster, fear of suffering"
    let upStar = "The Star faced up: hope, faith, rejuvenation"
    let downStar = "The Star faced down: faithlessness, discouragement, insecurity"
    let upMoon = "The Moon faced up: unconscious, illusions, intuition"
    let downMoon = "The Moon faced down: confusion, fear, misinterpretation"
    let upSun = "The Sun faced up: joy, success, celebration, positivity"
    let downSun = "The Sun faced down: negativity, depression, sadness"
    let upJudgement = "Judgement faced up: reflection, reckoning, awakening"
    let downJudgement = "Judgement faced down: lack of self awareness, doubt, self loathing"
    let upWorld = "The World faced up: fulfillment, harmony, completion"
    let downWorld = "The World faced down: incompletion, no closure"
    let upFool = "The Fool faced up: innocence, new beginnings, free spirit"
    let downFool = "The Fool faced down: recklessness, taken advantage of, inconsideration"

    let upFourW = "Four of Wands faced up: community, home, celebration"
    let downFourW = "Four of Wands faced down: lack of support, transience, home conflicts"
    let upAceW = "Ace of Wands faced up: creation, willpower, inspiration, desire"
    let downAceW = "Ace of Wands faced down: lack of energy, lack of passion, boredom"
    let upTenW = "Ten of Wands faced up: accomplishment, responsibility, burden"
    let downTenW = "Ten of Wands faced down: inability to delegate, overstressed, burnt out"
    let upNineW = "Nine of Wands faced up: resilience, grit, last stand"
    let downNineW = "Nine of Wands faced down: exhaustion, fatigue, questioning motivations"
    let upEightW = "Eight of Wands faced up: rapid action, movement, quick decisions"
    let downEightW = "Eight of Wands faced down: panic, waiting, slowdown"
    let upSixW = "Six of Wands faced up: victory, success, public reward"
    let downSixW = "Six of Wands faced down: excess pride, lack of recognition, punishment"
    let upFiveW = "Five of Wands faced up: competition, rivalry, conflict"
    let downFiveW = "Five of Wands faced down: avoiding conflict, respecting differences"
    let upThreeW = "Three of Wands faced up: looking ahead, expansion, rapid growth"
    let downThreeW = "Three of Wands faced down: obstacles, delays, frustration"
    let upTwoW = "Two of Wands faced up: planning, making decisions, leaving home"
    let downTwoW = "Two of Wands faced down: fear of change, playing safe, bad planning"
    let upPageW = "Page of Wands faced up: exploration, excitement, freedom"
    let downPageW = "Page of Wands faced down: lack of direction, procrastination, creating conflict"
    let upQueenW = "Queen of Wands faced up: courage, determination, joy"
    let downQueenW = "Queen of Wands faced down: selfishness, jealousy, insecurities"
    let upKingW = "King of Wands faced up: big picture, leader, overcoming challenges"
    let downKingW = "King of Wands faced down: impulsive, overbearing, unachievable expectations"
    let upKnightW = "Knight of Wands faced up: action, adventure, fearlessness"
    let downKnightW = "Knight of Wands faced down: anger, impulsiveness, recklessness"
    let upSevenW = "Seven of Wands faced up: perseverance, defensive, maintaining control"
    let downSevenW = "Seven of Wands faced down: give up, destroyed confidence, overwhelmed"

    let upQueenC = "Queen of Cups faced up: compassion, calm, comfort"
    let downQueenC = "Queen of Cups faced down: martyrdom, insecurity, dependence"
    let upKnightC = "Knight of Cups faced up: following the heart, idealist, romantic"
    let downKnightC = "Knight of Cups faced down: moodiness, disappointment"
    let upPageC = "Page of Cups faced up: happy surprise, dreamer, sensitivity"
    let downPageC = "Page of Cups faced down: emotional immaturity, insecurity, disappointment"
    let upTenC = "Ten of Cups faced up: inner happiness, fulfillment, dreams coming true"
    let downTenC = "Ten of Cups faced down: shattered dreams, broken family, domestic disharmony"
    let upNineC = "Nine of Cups faced up: satisfaction, emotional stability, luxury"
    let downNineC = "Nine of Cups faced down: lack of inner joy, smugness, dissatisfaction"
    let upEightC = "Eight of Cups faced up: walking away, disillusionment, leaving behind"
    let downEightC = "Eight of Cups faced down: avoidance, fear of change, fear of loss"
    let upSevenC = "Seven of Cups faced up: searching for purpose, choices, daydreaming"
    let downSevenC = "Seven of Cups faced down: lack of purpose, diversion, confusion"
    let upSixC = "Six of Cups faced up: familiarity, happy memories, healing"
    let downSixC = "Six of Cups faced down: moving forward, leaving home, independence"
    let upFiveC = "Five of Cups faced up: loss, grief, self-pity"
    let downFiveC = "Five of Cups faced down: acceptance, moving on, finding peace"
    let upFourC = "Four of Cups faced up: apathy, contemplation, disconnectedness"
    let downFourC = "Four of Cups faced down: sudden awareness, choosing happiness, acceptance"
    let upThreeC = "Three of Cups faced up: friendship, community, happiness"
    let downThreeC = "Three of Cups faced down: overindulgence, gossip, isolation"
    let upTwoC = "Two of Cups faced up: unity, partnership, connection"
    let downTwoC = "Two of Cups faced down: imbalance, broken communication, tension"
    let upAceC = "Ace of Cups faced up: new feelings, spirituality, intuition"
    let downAceC = "Ace of Cups faced down: emotional loss, blocked creativity, emptiness"
    let upKingC = "King of Cups faced up: compassion, control, balance"
    let downKingC = "King of Cups faced down: coldness, moodiness, bad advice"

    let upKnightS = "Knight of Swords faced up: action, impulsiveness, defending beliefs"
    let downKnightS = "Knight of Swords faced down: no direction, disregard for consequences, unpredictability"
    let upQueenS = "Queen of Swords faced up: complexity, perceptiveness, clear mindedness"
    let downQueenS = "Queen of Swords faced up: cold hearted, cruel, bitterness"
    let upPageS = "Page of Swords faced up: curiosity, restlessness, mental energy"
    let downPageS = "Page of Swords faced down: deception, manipulation, all talk"
    let upTenS = "Ten of Swords faced up: failure, collapse, defeat"
    let downTenS = "Ten of Swords faced down: can't get worse, only upwards, inevitable end"
    let upNineS = "Nine of Swords faced up: anxiety, hopelessness, trauma"
    let downNineS = "Nine of Swords faced down: hope, reaching out, despair"
    let upEightS = "Eight of Swords faced up: imprisonment, entrapment, self-victimization"
    let downEightS = "Eight of Swords faced down: self-acceptance, new perspective, freedom"
    let upSevenS = "Seven of Swords faced up: deception, trickery, tactics and strategy"
    let downSevenS = "Seven of Swords faced down: coming clean, rethinking approach, deception"
    let upSixS = "Six of Swords faced up: transition, leaving behind, moving on"
    let downSixS = "Six of Swords faced down: emotional baggage, unresolved issues, resisting transition"
    let upFiveS = "Five of Swords faced up: unbridled ambition, win at all costs, sneakiness"
    let downFiveS = "Five of Swords faced down: lingering resentment, desire to reconcile, forgiveness"
    let upThreeS = "Three of Swords faced up: heartbreak, suffering, grief"
    let downThreeS = "Three of Swords faced down: recovery, forgiveness, moving on"
    let upFourS = "Four of Swords faced up: rest, restoration, contemplation"
    let downFourS = "Four of Swords faced down: restlessness, burnout, stress"
    let upTwoS = "Two of Swords faced up: difficult choices, indecision, stalemate"
    let downTwoS = "Two of Swords faced down: lesser of two evils, no right choice, confusion"
    let upAceS = "Ace of Swords faced up: breakthrough, clarity, sharp mind"
    let downAceS = "Ace of Swords faced down: confusion, brutality, chaos"
    let upKingS = "King of Swords faced up: head over heart, discipline, truth"
    let downKingS = "King of Swords faced down: manipulative, cruel, weakness"

    let upQueenP = "Queen of Pentacles faced up: practicality, creature comforts, financial security"
    let downQueenP = "Queen of Pentacles faced down: self-centeredness, jealousy, smothering"
    let upKnightP = "Knight of Pentacles faced up: efficiency, hard work, responsibility"
    let downKnightP = "Knight of Pentacles faced down: laziness, obsessiveness, work without reward"
    let upPageP = "Page of Pentacles faced up: ambition, desire, diligence"
    let downPageP = "Page of Pentacles faced down: lack of commitment, greediness, laziness"
    let upTenP = "Ten of Pentacles faced up: legacy, culmination, inheritance"
    let downTenP = "Ten of Pentacles faced down: fleeting success, lack of stability, lack of resources"
    let upNineP = "Nine of Pentacles faced up: fruits of labor, rewards, luxury"
    let downNineP = "Nine of Pentacles faced down: reckless spending, living beyond means, false success"
    let upEightP = "Eight of Pentacles faced up: apprenticeship, passion, high standards"
    let downEightP = "Eight of Pentacles faced down: lack of passion, uninspired, no motivation"
    let upSevenP = "Seven of Pentacles faced up: hard work, perseverance, diligence"
    let downSevenP = "Seven of Pentacles faced down: work without results, distractions, lack of rewards"
    let upSixP = "Six of Pentacles faced up: charity, generosity, sharing"
    let downSixP = "Six of Pentacles faced down: strings attached, stinginess, power and domination"
    let upFiveP = "Five of Pentacles faced up: need, poverty, insecurity"
    let downFiveP = "Five of Pentacles faced down: recovery, charity, improvement"
    let upFourP = "Four of Pentacles faced up: conservation, frugality, security"
    let downFourP = "Four of Pentacles faced down: greediness, stinginess, possessiveness"
    let upThreeP = "Three of Pentacles faced up: teamwork, collaboration, building"
    let downThreeP = "Three of Pentacles faced down: lack of teamwork, disorganized, group conflict"
    let upTwoP = "Two of Pentacles faced up: balancing decisions, priorities, adapting to change"
    let downTwoP = "Two of Pentacles faced down: loss of balance, disorganized, overwhelmed"
    let upAceP = "Ace of Pentacles faced up: opportunity, prosperity, new venture"
    let downAceP = "Ace of Pentacles faced down: lost opportunity, missed chance, bad investment"
    let upKingP = "King of Pentacles faced up: abundance, prosperity, security"
    let downKingP = "King of Pentacles faced down: greed, indulgence, sensuality"

    // var majorArcana = [upWheel, downWheel, upStrength, downStrength, upHermit, downHermit, upHangedMan, downHangedMan, upDeath, downDeath, upDevil, downDevil, upTemperance, downTemperance, upJustice, downJustice, upTower, downTower, upStar, downStar, upMoon, downMoon, upSun, downSun, upMagician, downMagician, upPriestess, downPriestess, upEmpress, downEmpress, upEmperor, downEmperor, upHierophant, downHierophant, upLovers, downLovers, upWorld, downWorld, upFool, downFool, upJudgement, downJudgement, upChariot, downChariot, upJudgement, downJudgement];
    // var Wands = [upFiveW, downFiveW, upThreeW, downThreeW, upTwoW, downTwoW, upPageW, downPageW, upQueenW, downQueenW, upKingW, downKingW, upKnightW, downKnightW, upSevenW, downSevenW, upSixW, downSixW, upEightW, downEightW, upNineW, downNineW, upTenW, downTenW, upFourW, downFourW, upAceW, downAceW];
    // var Cups = [upEightC, downEightC, upNineC, downNineC, upSevenC, downSevenC, upSixC, downSixC, upFiveC, downFiveC, upFourC, downFourC, upThreeC, downThreeC, upTwoC, downTwoC, upAceC, downAceC, upKingC, downKingC, upTenC, downTenC, upPageC, downPageC, upKnightC, downKnightC, upQueenC, downQueenC];
    // var Swords = [upSixS, downSixS, upFiveS, downFiveS, upThreeS, downThreeS, upFourS, downFourS, upTwoS, downTwoS, upAceS, downAceS, upKingS, downKingS, upSevenS, downSevenS, upEightS, downEightS, upNineS, downNineS, upTenS, downTenS, upPageS, downPageS, upKnightS, downKnightS, upQueenS, downQueenS]
    // var Pentacles = [upEightP, downEightP, upSevenP, downSevenP, upNineP, downNineP, upSixP, downSixP, upFiveP, downFiveP, upFourP, downFourP, upPageP, downPageP, upTenP, downTenP, upThreeP, downThreeP, upTwoP, downTwoP, upKingP, downKingP, upAceP, downAceP, upQueenP, downQueenP, upKnightP, downKnightP, upKingP, downKingP]

    var card = [upWheel, downWheel, upStrength, downStrength, upHermit, downHermit, upHangedMan, downHangedMan, upDeath, downDeath, upDevil, downDevil, upTemperance, downTemperance, upJustice, downJustice, upTower, downTower, upStar, downStar, upMoon, downMoon, upSun, downSun, upMagician, downMagician, upPriestess, downPriestess, upEmpress, downEmpress, upEmperor, downEmperor, upHierophant, downHierophant, upLovers, downLovers, upWorld, downWorld, upFool, downFool, upJudgement, downJudgement, upChariot, downChariot, upJudgement, downJudgement, upFiveW, downFiveW, upThreeW, downThreeW, upTwoW, downTwoW, upPageW, downPageW, upQueenW, downQueenW, upKingW, downKingW, upKnightW, downKnightW, upSevenW, downSevenW, upSixW, downSixW, upEightW, downEightW, upNineW, downNineW, upTenW, downTenW, upFourW, downFourW, upAceW, downAceW, upEightC, downEightC, upNineC, downNineC, upSevenC, downSevenC, upSixC, downSixC, upFiveC, downFiveC, upFourC, downFourC, upThreeC, downThreeC, upTwoC, downTwoC, upAceC, downAceC, upKingC, downKingC, upTenC, downTenC, upPageC, downPageC, upKnightC, downKnightC, upQueenC, downQueenC, upSixS, downSixS, upFiveS, downFiveS, upThreeS, downThreeS, upFourS, downFourS, upTwoS, downTwoS, upAceS, downAceS, upKingS, downKingS, upSevenS, downSevenS, upEightS, downEightS, upNineS, downNineS, upTenS, downTenS, upPageS, downPageS, upKnightS, downKnightS, upQueenS, downQueenS, upEightP, downEightP, upSevenP, downSevenP, upNineP, downNineP, upSixP, downSixP, upFiveP, downFiveP, upFourP, downFourP, upPageP, downPageP, upTenP, downTenP, upThreeP, downThreeP, upTwoP, downTwoP, upKingP, downKingP, upAceP, downAceP, upQueenP, downQueenP, upKnightP, downKnightP, upKingP, downKingP];

    // var suits = ["Major Arcana", "Wands", "Pentacles", "Swords", "Cups"];

    const random1 = Math.floor(Math.random() * card.length);
    const random2 = Math.floor(Math.random() * card.length);
    const random3 = Math.floor(Math.random() * card.length);
    const random4 = Math.floor(Math.random() * card.length);
    const random5 = Math.floor(Math.random() * card.length);
    const random6 = Math.floor(Math.random() * card.length);

    // let arcL = majorArcana.length;
    // let wandsL = Wands.length;
    // let cupsL = Cups.length;
    // let swordsL = Swords.length;
    // let pentaclesL = Pentacles.length;

    const name = readlineSync.question("What is your name? \n")
    console.log("Hi " + name + "! You must be at least 18 years old to play this game.")

    const age = readlineSync.question("How old are you? \n")
    if (age >= 18) {
        console.log(name + " you are " + age + " years old and eligible to play. Please draw three cards. The cards you draw will either be faced up or faced down. Each will have a different result and/or interpretation. Draw the first card. The card you draw will be based upon your past. \n")
    } else { leaveGame() }

    const past = readlineSync.keyInYN("Are you ready to draw on the Tarot Card deck to reflect on your past? \n")
    if (past) { console.log(" This is the card and words that best describes your past " + random1, card[random1]); } else {
        play(past)

    }

    const past2 = readlineSync.keyInYN("What do you think about the card you've drawn? Would you like the opportunity to draw again? \n")
    if (past2) {
        console.log(" This is the card and words that best describes your past " + random4, card[random4]);

    }

    const present = readlineSync.keyInYN("Draw the second card. The card you draw will be based upon your present. Do you want to draw on the Tarot Card deck to observe on your present? \n")
    if (present) { console.log(" This is the card and words that best describes your present " + random2, card[random2]); } else {
        restart()
    }

    const present2 = readlineSync.keyInYN("What do you think about the card you've drawn? Would you like the opportunity to draw again? \n")
    if (present2) { console.log(" This is the card and words that best describes your past " + random5, card[random5]); }


    const future = readlineSync.keyInYN("Draw the third card. The card you draw will be based upon your future. Do you want to draw on the Tarot Card deck to predict your future? \n")
    if (future) { console.log(" This is the card and words that best describes your future " + random3, card[random3]); } else {
        restart()
    }

    const future2 = readlineSync.keyInYN("What do you think about the card you've drawn? Would you like the opportunity to draw again? \n")
    if (future2) { console.log(" This is the card and words that best describes your past " + random4, card[random4]); } else {
        restart()

    }
    restart()

}

const restart = () => {

    const reset = readlineSync.keyInYN("Would you like to restart the game? \n")
    if (reset) { console.log(" The game will restart now... "), startGame() } else { fun() }

}

const fun = () => {
    const rate = readlineSync.question("What would you rate this game from 1 to 10? \n")
    if (rate >= 5) {
        console.log("Your rating was " + rate + " and we're glad you've had a good time! \n"), leaveGame()
    } else { leaveGame() }
}

const leaveGame = () => {
    console.log("Quick Tarot Game is not responsible for unlucky past, present, or future results. If you are not at least 18 years old, you need a parent present to play the game. Goodbye!")
    process.exit()
}

startGame()