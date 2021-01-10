const readline1 = require('readline-sync')
//quit the test after the user is done
const quitTest = () => {
    console.log("Goodbye!")
    process.exit()
}
//init the test and gives the intro line to start it
const testLoop = () => {
    console.log("Please answer these series of questions")
    mentalQuestions()
}

//the start menu to decide if you want to start the test
const mentalHealthTest = () => {
    //ask if they want to start the test
    let enterChoice = readline1.keyInYN("Hello! Would you like to take the mental health test?")
    //to start the test questions
    if (enterChoice) {
        console.log("Let's start!")
        testLoop()
    }
    //if they do not want to take the test
    else {
        console.log("Wish you the best with your life!")
        quitTest()
    }
}    

//create the function to start the test questions
const mentalQuestions = () => {
    //create stored variables for the answers in terms of point values
    let drugScore = 0
    //create test options
    let drugAnswers = ["never", "a few times a year", "a few times a month", "a few times a week", "daily"]
    console.log("In the last year, have you used the following substances? If so, how often?")
    //create test for alcohol
    const drugTest = (drugResponse) => {
        //repeat the loop until a proper answer is given
        while (true) {
            //match answer to options and decide what points to be stored
            let substanceUseDisorder1 = readline1.question(drugResponse)
            if (substanceUseDisorder1 === drugAnswers[0]) {
                //replace the drug score when answer matches the option
                drugScore = drugScore + 0
                return drugScore
            }
            else if (substanceUseDisorder1 === drugAnswers[1]) {
                drugScore = drugScore + 1
                return drugScore
            }
            else if (substanceUseDisorder1 === drugAnswers[2]) {
                drugScore = drugScore + 2
                return drugScore
            }
            else if (substanceUseDisorder1 === drugAnswers[3]) {
                drugScore = drugScore + 3
                return drugScore
            }
            else if (substanceUseDisorder1 === drugAnswers[4]) {
                drugScore = drugScore + 4
                return drugScore
            }
            else {
                console.log("Please give an acceptable answer!")
            }
        }
    }
    //run the function
    drugTest("Alcohol (never, a few times a year, a few times a month, a few times a week, daily)\n")
    //create cannabuis question
    drugTest("Cannabis (never, a few times a year, a few times a month, a few times a week, daily)\n")
    //create hallucinogen question
    drugTest("LSD, Peyote, Psilocybin, PCP (never, a few times a year, a few times a month, a few times a week, daily)\n")
    //create inhalant question
    drugTest("glue, aerosols, lighter fuilds, gasoline (never, a few times a year, a few times a month, a few times a week, daily)\n")
    //create cocaine question
    drugTest("Cocaine or heroin (never, a few times a year, a few times a month, a few times a week, daily)\n")

    let mddScore = 0
    let majorDepressiveDisorderAnswers = ["not at all", "mild", "moderate", "severe"]
    const mddQuestions = (mddResponses) => {
        //repeat until proper answer is given
        while (true) {
            //ask for answer
            const mddAnswer1 = readline1.question(mddResponses)
            if (mddAnswer1 === majorDepressiveDisorderAnswers[0]) {
                mddScore = mddScore + 0
                return mddScore
            }
            else if (mddAnswer1 === majorDepressiveDisorderAnswers[1]) {
                mddScore = mddScore + 3.3
                return mddScore
            }
            else if (mddAnswer1 === majorDepressiveDisorderAnswers[2]) {
                mddScore = mddScore + 6.6
                return mddScore
            }
            else if (mddAnswer1 === majorDepressiveDisorderAnswers[3]) {
                mddScore = mddScore + 10
                return mddScore
            }
            else {
                console.log("Please give an acceptable answer!")
            }
        }
    }
    //run the function for mddQuestion 1
    mddQuestions("I felt exhausted. (not at all, mild, moderate, severe)\n")
    //run the function for mddQuestion 2
    mddQuestions("I kept thinking about death or taking my own life. (not at all, mild, moderate, severe)\n")
    //run the function for mddQuestion 3
    mddQuestions("The sadness I was feeling made it difficult for me to function in my personal, social, or work life. (not at all, mild, moderate, severe)\n")
    //run the function for mddQuestion 4
    mddQuestions("I felt slowed down compared to my usual pace. (not at all, mild, moderate, severe)\n")
    //run the function for mddQuestion 5
    mddQuestions("I stopped having fun doing things that I used to enjoy. (not at all, mild, moderate, severe)\n")
    
    //create pstdScore
    let ptsdScore = 0
    //create a set of questions for ptsd in a function
    const ptsdQuestions = () => {
        //prompt the user how to respond
        console.log("In the last month, did you experience any of the following symptoms caused by a traumatic event?")
        console.log("Please answer with (yes/no)")
        //create the function for the first question
        const ptsdQuestions = (ptsdResponse) => {
            //repeat until proper answer is given
            while (true) {
                //ask the first ptsd question
                let ptsdAnswer1 = readline1.question(ptsdResponse)
                if (ptsdAnswer1 === 'yes') {
                    ptsdScore = ptsdScore + 10
                    return ptsdScore
                }
                else if (ptsdAnswer1 === 'no') {
                    ptsdScore = ptsdScore + 0
                    return ptsdScore
                }
                else {
                    //ask for acceptable answer
                    console.log("Please give an acceptable answer!")
                }
            }
        }
        //call the ptsd Question 1
        ptsdQuestions("I became reckless or took unncessary risks. \n")
        //call the ptsd Question 2
        ptsdQuestions('I became excessively vigilant, tense, or jumpy. \n')
        //call the ptsd Question 3
        ptsdQuestions('I had trouble focusing, concentrating, or remembering things. \n')
        //call the ptsd Question 4
        ptsdQuestions('I purposely avoided anything that reminded me of the event \n')
        //call the ptsd Question 5
        ptsdQuestions('I was unable to feel happiness, contentment, joy, or love, or had trouble connecting with people. \n')
    }
    //call the ptsd questions
    ptsdQuestions()

    //store genernalized anxiety disorder score
    let gadScore = 0
    //create options
    let gadResponses = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    //create the gad function
    const generatizedAnxietyDisorderTest = () => {
        console.log("In the last 6 months, did you experience any of the following symptoms? If so, how strong?")
        console.log("Please answer with a number from 0 - 10 (Not at all to very strong)")
        const gadQuestions = (gadResponse) => {
            //repeat until proper answer is given
            while (true) {
                //ask the gad question
                let gadAnswer1 = readline1.question(gadResponse)
                //only accept numbers less than or equal to 10
                gadAnswer1 = Number(gadAnswer1)
                if (gadAnswer1 <= 10) {
                    //create loop to compare the answer to all answer choices for a match
                    for (let i = 0; i < gadResponses.length; i++) {
                        if (gadAnswer1 === gadResponses[i]) {
                            gadScore = gadScore + i
                            return gadScore
                        }
                    }
                    break
                }
                else {
                    //ask for acceptable answer
                    console.log("Please give an acceptable answer!")
                }
            }
        }
        //call the gadQuestion1 function
        gadQuestions("I had pain in my chest, almost like I was having a heart attack. \n")
        //call the gadQuestion2 function
        gadQuestions("I felt sick to my stomach, like I was going to throw up, or had diarrhea. \n")
        //call the gadQuestion3 function
        gadQuestions("I felt dizzy, my head was spinning, or felt like I was going to faint. \n")
        //call the gadQuestion4 function
        gadQuestions("I had cold or hot flashes. \n")
        //call the gadQuestion5 function
        gadQuestions("I was scared that I would lose control, go crazy, or die. \n")
    }
    //call the Generatized Anxiety Disorder test
    generatizedAnxietyDisorderTest()
    //create function for the test results
    const testResults = () => {
        //compare the drugScore to options to determine situation
        if (drugScore < 4) {
            console.log("You do not have Substance Use Disorder")
        }
        else if (drugScore < 8) {
            console.log("You have a slight Subtance Use Disorder")
        }
        else if (drugScore < 12) {
            console.log("You have a forming Substance Use Disorder")
        }
        else if (drugScore < 16) {
            console.log("You have a moderate Substance Use Disorder")
        }
        else {
            console.log("You have a severe Substance Use Disorder")
        }
        //compare the mddScore to options to determine situation
        if (mddScore < 10) {
            console.log("You do not have Major Depressive Disorder")
        }
        else if (mddScore < 20) {
            console.log("You have a slight Major Depressive Disorder")
        }
        else if (mddScore < 30) {
            console.log("You have a forming Major Depressive Disorder")
        }
        else if (mddScore < 40) {
            console.log("You have a moderate Major Depressive Disorder")
        }
        else {
            console.log("You have a severe Major Depressive Disorder")
        }
        //compare the ptsdScore to options to determine situation
        if (ptsdScore < 10) {
            console.log("You do not have Post-Traumatic Stress Disorder")
        }
        else if (ptsdScore < 20) {
            console.log("You have a Post-Traumatic Stress Disorder")
        }
        else if (ptsdScore < 30) {
            console.log("You have a forming Post-Traumatic Stress Disorder")
        }
        else if (ptsdScore < 40) {
            console.log("You have a moderate Post-Traumatic Stress Disorder")
        }
        else {
            console.log("You have a severe Post-Traumatic Stress Disorder")
        }
        //compare the gadScore to options to determine situation
        if (gadScore < 10) {
            console.log("You do not have Generatized Anxiety Disorder")
        }
        else if (gadScore < 20) {
            console.log("You have a slight Generatized Anxiety Disorder")
        }
        else if (gadScore < 30) {
            console.log("You have a forming Generatized Anxiety Disorder")
        }
        else if (gadScore < 40) {
            console.log("You have a moderate Generatized Anxiety Disorder")
        }
        else {
            console.log("You have a severe Generatized Anxiety Disorder")
        }
    }
    //call test results
    testResults()
    //call test to restart or stop
    testRestart()
}

//create test restart function
const testRestart = () => {
    //ask if they want to restart the test or not
    let restartChoice = readline1.keyInYN("Do you want to retake the test or not?")
    //if they restart then redo test loop
    if (restartChoice) {
        testLoop()
    }
    else {
        //if they choose no then quit the test
        quitTest()
    }
}
//call the mental health function to start the whole test
mentalHealthTest()