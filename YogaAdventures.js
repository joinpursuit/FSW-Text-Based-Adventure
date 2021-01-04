const rls = require('readline-sync')
"use strict"

/**
 * START GAME     
 */
const startGame = () => {
    console.log("")
    console.log(name + ", let's get started with a few yoga poses.")
    if (rls.keyInYNStrict("Have you ever done yoga before?")) {
        console.log("")
        console.log("Awesome! This will be a cinch then! Get your yoga mat and some water.")
        rls.keyIn
    } else {
        console.log("")
        console.log("Don't worry. I'll guide you every step of the way. Get a yoga mat or towel to place on the floor, and some water.")
    }
}

/**
 * GAME OVER/RESTART
 * Invites the user to play again.
 * Calls process.exit() to end the game.
 */
const gameOver = () => {
    console.log("")
    if(rls.keyInYNStrict("Would you like to play another round?")) {
        gameLoop()
    }
    console.log("See you soon then!")
    process.exit()
}

/**
 * QUIT GAME
 * Calls process.exit() to quit the game.
 */
const quitGame = () => {
    console.log("")
    console.log("Good luck dealing with stress! GOOD BYE!")
    process.exit()
 }

/**
 * WELCOME/START/QUIT
 * Welcomes the user.
 * Starts the game by prompting the user to play.
 * Calls either startGame() or quitGame().
 */
const name = rls.question("What's your name?"); {
    console.log("")
    console.log("Hello, " + name + "!" + " Welcome to Yoga Adventures!")
    console.log("")
    if(rls.keyInYNStrict("Are you a current Pursuit Fellow?")) {
        console.log("")
        console.log("Excellent! Yoga Adventures is a great tool to help maintain equanamity as you journey through the program.")
        startGame()
    } else {
        console.log("Congratulations on completing the program!")
        console.log("")
        console.log("Yoga Adventures is a great tool to help current Fellows maintain equanamity as they journey through the program.")
        console.log("")
        console.log("You're more than welcome to use this tool also.")
        if(rls.keyInYNStrict("Would you like to continue?")) {
            startGame()
        } else {
            quitGame()
        }
    }
}

/**
 * HEEL POSE
 */
const heelPose = () => {
    console.log("")
    console.log("Start on your mat by sitting on your heels. Relax your body from your head to your toes.")
    console.log("Rest your palms either FACE DOWN or FACE UP on your thighs.")
    console.log("")
    console.log("We'll do this three times: Take a deep breath in through your nose and open mouth exhale. \nRelease any thoughts that won't serve you on this journey of success.")
    console.log("")
    console.log("Inhale love, gratitude, and an 'I CAN' energy. \nNOTE: You can take this 'I CAN' energy with you everywhere you go.")
    console.log("")
    console.log("Take a few more deep breaths in and out.")
    console.log("")
    if(rls.keyInYNStrict("Do you need more time?")) {
        console.log("")
        console.log("Take all the time you need.")
        console.log("")
        rls.keyIn("Press the SPACEBAR when you're done.")
    } else {
        console.log("Wonderful!")
    }
}

/**
 * PALM UP/DOWN
 */
const palmQuestion = () => {
    let palmUpDownResp = ""
    do {
        palmUpDownResp = rls.question("During HEEL POSE, were your palms FACE UP (UP) or FACE DOWN (DOWN)?")
    }
    while (palmUpDownResp !== "UP" && palmUpDownResp !== "DOWN") {
    if(palmUpDownResp === "UP") {
        console.log("You Now Have The Power of Greyskull!!!")
        console.log("")
        console.log("Just kidding! LOL...I hope you're laughing. Greyskull is an old-school cartoon reference.")
        console.log("On a serious note though, you now have the power of 'INSIGHT' and a 'GROUNDING' energy. You can carry 'INSIGHT' and 'GROUNDING' with \nyou everywhere you go.")
    } else {
        console.log("Palms face down help with groundedness. You now have the power of 'INSIGHT' and a 'GROUNDING' energy. You can carry 'INSIGHT' and 'GROUNDING' with \nyou everywhere you go.")
    } 
    }
}

/** 
 * CHILD POSE
 */
const childPose = () => {
    console.log("")
    console.log("Let's get into CHILD'S POSE. You're already sitting on your heels. Now, inhale and gently roll your chest down to the mat as you exhale.")
    console.log("Extend your arms and fingertips out in front of you.")
    console.log("")
    if(rls.keyInYNStrict("Are you comfortable?")) {
        console.log("")
        console.log("Great! Let's take a few UJJAYI PRANAYAMA breaths.")
    } else {
        console.log("Sit on your bum with your legs stretched out in front of you.")
        console.log("Now, let's take a few UJJAYI PRANAYAMA breaths.")
    }
}

/**
 * BREATHS TAKEN
 */
const breathsTaken = () => {
    let breathsTakenResp
    let firstTime = true
    do {
        if(firstTime !== true) {
            console.log("Please take 3 breaths.")
        }
        breathsTakenResp = rls.questionInt("How many breaths did you take?") 
        firstTime = false   
    } 
    while (breathsTakenResp !== 3)
    console.log("Great! Let's continue!")
}     

/**
 * UJJAYI PRANAYAMA BREATH 
 */
const ujjayi = () => {
    console.log("")
    if (rls.keyInYNStrict("Do you know how to take UJJAYI PRANAYAMA breaths?")) {
        console.log("")
        console.log("Good! Take 3 UJJAYI PRANAYAMA breaths.")
        console.log("Remember UJJAYI is your fire breath. It is a Sanskrit word that means victorious. Cherish it and you will always have 'VICTORY'.")
        rls.keyIn("Press the SPACEBAR when you're done.")
    } else {
        console.log("")
        console.log("All good! I'll teach you. Take a deep breath in through your nose. Seal your lips. Constrict the back of your throat and exhale \nback out through your nose.")
        console.log("")
        console.log("UJJAYI is your fire breath. It is a Sanskrit word that means victorious. Cherish it and you will always have VICTORY.")
        console.log("")
        rls.keyIn("Press the SPACEBAR when you're done.")
    }   
        breathsTaken()    
    // let breathsTaken
        // let firstTime = true
        // do {
        //     if(firstTime != true) {
        //         console.log("Please take 3 UJJAYI PRANAYAMA breaths.")
        //     }
        //     breathsTaken = rls.questionInt("How many UJJAYI PRANAYAMA breaths did you take?") 
        //     firstTime = false   
        // } 
        // while (breathsTaken !== 3)
        // console.log("Great! Let's continue!")
}

/**
 * TABLE TOP
 */
const tableTop = () =>{
    console.log("")
    console.log("We're going to move into TABLETOP now.")
    console.log("1. On your next inhale, come to a kneeling position.\n2. Bring your knees hip width apart.\n3. Place your palms directly under your shoulders with your fingers facing forward.\n4. Press into your palms.\n5. Drop your shoulders away from your ears. Allow your back to be flat.\n6. Press your tail bone towards the back wall and the crown of your head towards the front wall to lengthen your spine.\n7. Stay here for 3 breaths.")
    rls.keyIn("Press the SPACEBAR when you're done.")  
    breathsTaken()
}

/**
 * CAT AND COW
 */
const catAndCow = () => {
    console.log("")
    console.log("We're going to move into CAT AND COW POSE now.")
    console.log("1. From TABLETOP, we'll start with a neutral spine.\n2. As you inhale and move into COW POSE, lift your sit bones upward.\n3. Press your chest forward and allow your belly to sink.\n4. Lift your head, relax your shoulders away from your ears, and gaze straight ahead.")
    console.log("")
    console.log("As you exhale, we'll come into CAT POSE.\n1. Round your spine outward, tuck in your tailbone, and draw your pubic bone forward.\n2. Release your head toward the floor. Don’t force your chin to your chest. It's important to relax.")
    rls.keyIn("Press the SPACEBAR when you're done.")
}

/**
 * WARRIOR ONE 
 */
const warriorOne = () => {
    console.log("")
    console.log("We're going to move into WARRIOR ONE. WARRIOR ONE is great for building 'FOCUS'.")
    console.log("1. From a standing position, step your left foot to the back of your mat.\n2. Lower the inside of your foot so that your back foot is at an angle.\n3. Bend your right knee 90 degrees and straighten your back leg.\n4. Reach your arms overhead and keep your torso facing the front.\n5. Relax your shoulders and breathe gently in and out.\n6. Hold for 30 seconds and switch sides.")
    console.log("")
    if(rls.keyInYNStrict("Are you ready for the next pose?")) {
        console.log("")
        console.log("Awesome!")
    } else {
        rls.keyIn("Press the SPACEBAR when you're done.")
    }
}

/**
 * WARRIOR TWO
 */
const warriorTwo = () => {
    console.log("")
    console.log("Now let's move into WARRIOR TWO. WARRIOR TWO enhances 'CONCENTRATION'.")
    console.log("1. From a standing position, step your left foot to the back of your mat.\n2. Lower the inside of your foot so that your back foot is at an angle.\n3. Bend your right knee 90 degrees and straighten your back leg.\n4. Reach your right arm straight over your right leg and your left arm straight over your left leg.\n5. Relax your shoulders and breathe gently in and out.\n6. Hold for 30 seconds and switch sides.")
    console.log("")
    if(rls.keyInYNStrict("Are you ready for the next pose?")) {
        console.log("")
        console.log("Excellent!")
    } else {
        rls.keyIn("Press the SPACEBAR when you're done.")
    }
}

/**
 * WARRIOR THREE
 */
const warriorThree = () => {
    console.log("")
    console.log("For our final warrior stance, let's move into WARRIOR THREE. WARRIOR THREE enhances 'STRENGTH'.")
    console.log("1. Engage your abs and lengthen your spine as you reach your arms in front of you.\n2. Begin lifting your left leg behind you.\n3. Continue reaching your arms forward and left leg back until your body is parallel to the floor. Your eyes should be gazing at the front of your mat.\n4. Keep your abs tight! Relax your neck and shoulders, and breathe gently in and out.\n5. Hold for 30 seconds and switch sides.")
    console.log("")
    if(rls.keyInYNStrict("Are you ready for the next pose?")) {
        console.log("")
        console.log("Supercalifragilisticexpialidocious!")
    } else {
        rls.keyIn("Press the SPACEBAR when you're done.")
    }
}

/** 
 * SAVANASA
 */
const savasana = () => {
    console.log("")
    if(rls.keyInYNStrict("Do you want to lie down in belly down Savasana?")) {
        console.log("")
        console.log("1. Lie on your belly with your hands stacked and elbows bent out to the side. Rest your forehead on your arms.\n2. Begin to release each part of your body, organ, and cells, consciously working from the soles of your feet to the crown of your head.\n3. Relax your face. Feel your eyes drop into your sockets and the softening of your jaw.\n4. If your mind starts to wander, bring your awareness to the sounds around you. Once we acknowledge the sounds from outside, the mind is more able to let go.\n5. Find the most distant sound until you find the sound closest to you.\n6. Tune into your breath.\n7. To exit the pose, gently bring your awareness back to your body.\n8. Start to wiggle your fingers and toes.\n9. With your eyes closed, draw your knees in and slowly roll over to your left or right side.\n10. Rest there for a moment and with an inhale, find a comfortable seated position.")
        console.log("")
        console.log("Take the 'PEACE' and 'STILLNESS' found in this pose with you for the rest of your journey.")
        console.log("")
        console.log("Namaste!")
    } else {
        console.log("")
        console.log("1. Lie on your back with your legs straight and arms relaxed at your sides.\n2. Let your feet fall to a natural position and rest your palms face up.\n3. Close your eyes. Breathe naturally. Allow your body to feel heavy on the ground.\n4. Begin to release each part of your body, organ and cells, consciously working from the soles of your feet to the crown of your head.\n5. Relax your face. Feel your eyes drop into your sockets and the softening of your jaw.\n6. If your mind starts to wander, bring your awareness to the sounds around you.\n7. Find the most distant sound until you find the sound closest to you.\n8. Tune into your breath. Once we acknowledge the sounds from outside, the mind is more able to let go.\n9. To exit the pose, gently bring your awareness back to your body.\n10. Start to wiggle your fingers and toes.\n11. With your eyes closed, draw your knees in and slowly roll over to your left or right side.\n12. Rest there for a moment and with an inhale, find a comfortable seated position.")
        console.log("")
        console.log("Take the 'PEACE' and 'STILLNESS' found in this pose with you for the rest of your journey.")
        console.log("")
        console.log("Namaste!")
    }
}

/**
 * YOGA ADVENTURES COMPLETION
 */
const yogaDone = () => {
    let toolsArray = ["'I CAN' ENERGY","INSIGHT","GROUNDING","VICTORY", "FOCUS", "CONCENTRATION" ,"STRENGTH", "PEACE", "STILLNESS"]
    console.log("")
    console.log("Congratulations! You have completed a round of Yoga Adventures.")
    console.log("You now have the tools to carry you during your Pursuit journey and beyond. There is no code you cannot write or debug with these tools: ")
    console.log(toolsArray.join(", "))
    console.log("")
    console.log("Enjoy your Yoga Adventures swag bag!")
}
/** 
 * GAME LOOP
 * Controls the flow of the game.
 * Prompts the user to play again once all yoga poses are done.
 * 
 */
const gameLoop = () => {
    heelPose()
    palmQuestion()
    childPose()
    ujjayi()
    tableTop()
    catAndCow()
    warriorOne()
    warriorTwo()
    warriorThree()
    savasana()   
    yogaDone()
    gameOver()
}
    
    
/**
 * GAME LOOP (Function Call)
 */  
gameLoop()