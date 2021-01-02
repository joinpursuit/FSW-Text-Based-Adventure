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
    const alcohol = () => {
        //repeat the loop until a proper answer is given
        while (true) {
            //match answer to options and decide what points to be stored
            let substanceUseDisorder1 = readline1.question("Alcohol (never, a few times a year, a few times a month, a few times a week, daily)\n")
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
    alcohol()
    //create cannabuis question
    const cannabis = () => {
        //repeat until proper answer is given
        while (true) {
            //ask the user for an answer
            const substanceUseDisorder2 = readline1.question("Cannabis (never, a few times a year, a few times a month, a few times a week, daily)\n")
            //check if answer matches option
            if (substanceUseDisorder2 === drugAnswers[0]) {
                //store answer
                drugScore = drugScore + 0
                return drugScore
            }
            else if (substanceUseDisorder2 === drugAnswers[1]) {
                drugScore = drugScore + 1
                return drugScore
            }
            else if (substanceUseDisorder2 === drugAnswers[2]) {
                drugScore = drugScore + 2
                return drugScore
            }
            else if (substanceUseDisorder2 === drugAnswers[3]) {
                drugScore = drugScore + 3
                return drugScore
            }
            else if (substanceUseDisorder2 === drugAnswers[4]) {
                drugScore = drugScore + 4
                return drugScore
            }
            else {
                //ask for repeat answer
                console.log("Please give an acceptable answer23!")
            }
        }
    }
    //run the function
    cannabis()
    //create hallucinogen question
    const hallucinogens = () => {
        //repeat until proper answer is given
        while (true) {
            //ask for answer
            const substanceUseDisorder3 = readline1.question("LSD, Peyote, Psilocybin, PCP (never, a few times a year, a few times a month, a few times a week, daily)\n")
            if (substanceUseDisorder3 === drugAnswers[0]) {
                drugScore = drugScore + 0
                return drugScore
            }
            else if (substanceUseDisorder3 === drugAnswers[1]) {
                drugScore = drugScore + 1
                return drugScore
            }
            else if (substanceUseDisorder3 === drugAnswers[2]) {
                drugScore = drugScore + 2
                return drugScore
            }
            else if (substanceUseDisorder3 === drugAnswers[3]) {
                drugScore = drugScore + 3
                return drugScore
            }
            else if (substanceUseDisorder3 === drugAnswers[4]) {
                drugScore = drugScore + 4
                return drugScore
            }
            else {
                //ask for a repeat answer
                console.log("Please give an acceptable answer!")
            }
        }
    }
    //run the function
    hallucinogens()

    const inhalants = () => {
        //repeat until proper answer is given
        while (true) {
            //ask for answer
            const substanceUseDisorder4 = readline1.question("glue, aerosols, lighter fuilds, gasoline (never, a few times a year, a few times a month, a few times a week, daily)\n")
            //check if answer matches option
            if (substanceUseDisorder4 === drugAnswers[0]) {
                drugScore = drugScore + 0
                return drugScore
            }
            else if (substanceUseDisorder4 === drugAnswers[1]) {
                drugScore = drugScore + 1
                return drugScore
            }
            else if (substanceUseDisorder4 === drugAnswers[2]) {
                drugScore = drugScore + 2
                return drugScore
            }
            else if (substanceUseDisorder4 === drugAnswers[3]) {
                drugScore = drugScore + 3
                return drugScore
            }
            else if (substanceUseDisorder4 === drugAnswers[4]) {
                drugScore = drugScore + 4
                return drugScore
            }
            else {
                //ask for acceptable answer
                console.log("Please give an acceptable answer!")
            }
        }
    }
    //run the function
    inhalants()

    const cocaine = () => {
        //repeat until proper answer is given
        while (true) {
            //ask for answer
            const substanceUseDisorder5 = readline1.question("Cocaine or heroin (never, a few times a year, a few times a month, a few times a week, daily)\n")
            if (substanceUseDisorder5 === drugAnswers[0]) {
                drugScore = drugScore + 0
                return drugScore
            }
            else if (substanceUseDisorder5 === drugAnswers[1]) {
                drugScore = drugScore + 1
                return drugScore
            }
            else if (substanceUseDisorder5 === drugAnswers[2]) {
                drugScore = drugScore + 2
                return drugScore
            }
            else if (substanceUseDisorder5 === drugAnswers[3]) {
                drugScore = drugScore + 3
                return drugScore
            }
            else if (substanceUseDisorder5 === drugAnswers[4]) {
                drugScore = drugScore + 4
                return drugScore
            }
            else {
                console.log("Please give an acceptable answer!")
            }
        }
    }
    //run the function
    cocaine()

    let mddScore = 0
    let majorDepressiveDisorderAnswers = ["not at all", "mild", "moderate", "severe"]
    const mddQuestion1 = () => {
        //repeat until proper answer is given
        while (true) {
            //ask for answer
            const mddAnswer1 = readline1.question("I felt exhausted. (not at all, mild, moderate, severe)\n")
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
    //run the function
    mddQuestion1()
    //start the second question function
    const mddQuestion2 = () => {
        //ask until proper answer is given
        while (true) {
            //repeat until proper answer is given
            const mddAnswer2 = readline1.question("I kept thinking about death or taking my own life. (not at all, mild, moderate, severe)\n")
            //match answer to options
            if (mddAnswer2 === majorDepressiveDisorderAnswers[0]) {
                //rewrite the score
                mddScore = mddScore + 0
                return mddScore
            }
            else if (mddAnswer2 === majorDepressiveDisorderAnswers[1]) {
                mddScore = mddScore + 3.3
                return mddScore
            }
            else if (mddAnswer2 === majorDepressiveDisorderAnswers[2]) {
                mddScore = mddScore + 6.6
                return mddScore
            }
            else if (mddAnswer2 === majorDepressiveDisorderAnswers[3]) {
                mddScore = mddScore + 10
                return mddScore
            }
            else {
                //ask for proper answer
                console.log("Please give an acceptable answer!")
            }
        }
    }
    mddQuestion2()

    const mddQuestion3 = () => {
        //repeat until proper answer is given
        while (true) {
            //ask for an answer
            const mddAnswer3 = readline1.question("The sadness I was feeling made it difficult for me to function in my personal, social, or work life. (not at all, mild, moderate, severe)\n")
            //match answer to option
            if (mddAnswer3 === majorDepressiveDisorderAnswers[0]) {
                mddScore = mddScore + 0
                return mddScore
            }
            else if (mddAnswer3 === majorDepressiveDisorderAnswers[1]) {
                mddScore = mddScore + 3.3
                return mddScore
            }
            else if (mddAnswer3 === majorDepressiveDisorderAnswers[2]) {
                mddScore = mddScore + 6.6
                return mddScore
            }
            else if (mddAnswer3 === majorDepressiveDisorderAnswers[3]) {
                mddScore = mddScore + 10
                return mddScore
            }
            else {
                console.log("Please give an acceptable answer!")
            }
        }
    }
    //call function to activiate the question
    mddQuestion3()    
    //write variable for question 4
    const mddQuestion4 = () => {
        //repeat until proper answer is given
        while (true) {
            //ask the question and get response
            const mddAnswer4 = readline1.question("I felt slowed down compared to my usual pace. (not at all, mild, moderate, severe)\n")
            //match reponse to options
            if (mddAnswer4 === majorDepressiveDisorderAnswers[0]) {
                mddScore = mddScore + 0
                return mddScore
            }
            else if (mddAnswer4 === majorDepressiveDisorderAnswers[1]) {
                mddScore = mddScore + 3.3
                return mddScore
            }
            else if (mddAnswer4 === majorDepressiveDisorderAnswers[2]) {
                mddScore = mddScore + 6.6
                return mddScore
            }
            else if (mddAnswer4 === majorDepressiveDisorderAnswers[3]) {
                mddScore = mddScore + 10
                return mddScore
            }
            else {
                console.log("Please give an acceptable answer!")
            }
        }
    }
    //call question 4
    mddQuestion4()    
    //create function for mmd Question 5
    const mddQuestion5 = () => {
        //repeat until proper answer is given
        while (true) {
            //ask for the response
            const mddAnswer5 = readline1.question("I stopped having fun doing things that I used to enjoy. (not at all, mild, moderate, severe)\n")
            //match reponse to options
            if (mddAnswer5 === majorDepressiveDisorderAnswers[0]) {
                mddScore = mddScore + 0
                return mddScore
            }
            else if (mddAnswer5 === majorDepressiveDisorderAnswers[1]) {
                mddScore = mddScore + 3.3
                return mddScore
            }
            else if (mddAnswer5 === majorDepressiveDisorderAnswers[2]) {
                mddScore = mddScore + 6.6
                return mddScore
            }
            else if (mddAnswer5 === majorDepressiveDisorderAnswers[3]) {
                mddScore = mddScore + 10
                return mddScore
            }
            else {
                console.log("Please give an acceptable answer!")
            }
        }
    }
    //call mddQuestion5 
    mddQuestion5()    

    //create pstdScore
    let ptsdScore = 0
    //create a set of questions for ptsd in a function
    const ptsdQuestions = () => {
        //prompt the user how to respond
        console.log("In the last month, did you experience any of the following symptoms caused by a traumatic event?")
        console.log("Please answer with (yes/no)")
        //create the function for the first question
        const ptsdQuestion1 = () => {
            //repeat until proper answer is given
            while (true) {
                //ask the first ptsd question
                let ptsdAnswer1 = readline1.question("I became reckless or took unncessary risks. \n")
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
        //call the function
        ptsdQuestion1()
        //create the second question function
        const ptsdQuestion2 = () => {
            //repeat until proper answer is given
            while (true) {
                //ask the second question
                let ptsdAnswer2 = readline1.question('I became excessively vigilant, tense, or jumpy. \n')
                //create yes or no response
                if (ptsdAnswer2 === 'yes') {
                    //change the score value
                    ptsdScore = ptsdScore + 10
                    return ptsdScore
                }
                else if (ptsdAnswer2 === 'no') {
                    ptsdScore = ptsdScore + 0
                    return ptsdScore
                }
                else {
                    //ask for a proper answer
                    console.log("Please give an acceptable answer!")
                }
            }
        }
        //call for the function
        ptsdQuestion2()    
        //create ptsd question 3 function
        const ptsdQuestion3 = () => {
            //repeat until proper answer is given
            while (true) {
                //ask the third question
                let ptsdAnswer3 = readline1.question('I had trouble focusing, concentrating, or remembering things. \n')
                if (ptsdAnswer3 === 'yes') {
                    ptsdScore = ptsdScore + 10
                    return ptsdScore
                }
                else if (ptsdAnswer3 === 'no') {
                    ptsdScore = ptsdScore + 0
                    return ptsdScore
                }
                else {
                    console.log("Please give an acceptable answer!")
                }
            }
        }
        //call the function
        ptsdQuestion3()  
        //create fourth question function
        const ptsdQuestion4 = () => {
            //repeat until proper answer is given
            while (true) {
                //ask the question
                let ptsdAnswer4 = readline1.question('I purposely avoided anything that reminded me of the event \n')
                //create yes or no response
                if (ptsdAnswer4 === 'yes') {
                    ptsdScore = ptsdScore + 10
                    return ptsdScore
                }
                else if (ptsdAnswer4 === 'no') {
                    ptsdScore = ptsdScore + 0
                    return ptsdScore
                }
                else {
                    console.log("Please give an acceptable answer!")
                }
            }
        }
        //call the function
        ptsdQuestion4()  

        const ptsdQuestion5 = () => {
            //repeat until proper answer is given
            while (true) {
                //ask the fifth question
                let ptsdAnswer5 = readline1.question('I was unable to feel happiness, contentment, joy, or love, or had trouble connecting with people. \n')
                //create yes or no match response
                if (ptsdAnswer5 === 'yes') {
                    //store the score
                    ptsdScore = ptsdScore + 10
                    return ptsdScore
                }
                else if (ptsdAnswer5 === 'no') {
                    ptsdScore = ptsdScore + 0
                    return ptsdScore
                }
                else {
                    console.log("Please give an acceptable answer!")
                }
            }
        }
        //call the fifth question function
        ptsdQuestion5()  
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
        const gadQuestion1 = () => {
            //repeat until proper answer is given
            while (true) {
                //ask the gad question
                let gadAnswer1 = readline1.question("I had pain in my chest, almost like I was having a heart attack. \n")
                //only accept numbers less than or equal to 10
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
        gadQuestion1()
        //create gadQuestion2 function
        const gadQuestion2 = () => {
            //repeat until proper answer is given
            while (true) {
                //ask gad question
                let gadAnswer2 = readline1.question("I felt sick to my stomach, like I was going to throw up, or had diarrhea. \n")
                //only accepts numbers less than and equal to 10
                if (gadAnswer2 <= 10) {
                    //match answer to options
                    for (let i = 0; i < gadResponses.length; i++) {
                        if (gadAnswer2 === gadResponses[i]) {
                            gadScore = gadScore + i
                            return gadScore
                        }
                    }
                    break
                }
                else {
                    //ask for repeat if answer is not acceptable
                    console.log("Please give an acceptable answer!")
                }
            }
        }
        //call the function
        gadQuestion2()

        const gadQuestion3 = () => {
            //repeat until proper answer is given
            while (true) {
                //ask the question
                let gadAnswer3 = readline1.question("I felt dizzy, my head was spinning, or felt like I was going to faint. \n")
                //check answer within the options
                if (gadAnswer3 <= 10) {
                    for (let i = 0; i < gadResponses.length; i++) {
                        if (gadAnswer3 === gadResponses[i]) {
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
        //call the function
        gadQuestion3()

        const gadQuestion4 = () => {
            //repeat until proper answer is given
            while (true) {
                //ask for gad answer
                let gadAnswer4 = readline1.question("I had cold or hot flashes. \n")
                //check if the answer is number less than or equal to 10
                if (gadAnswer4 <= 10) {
                    //check answer within the options
                    for (let i = 0; i < gadResponses.length; i++) {
                        if (gadAnswer4 === gadResponses[i]) {
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
        //call the function
        gadQuestion4()

        const gadQuestion5 = () => {
            //repeat until proper answer is given
            while (true) {
                //ask the question
                let gadAnswer5 = readline1.question("I was scared that I would lose control, go crazy, or die. \n")
                //make sure the answer is less than or equal to 10
                if (gadAnswer5 <= 10) {
                    //check answer within the options
                    for (let i = 0; i < gadResponses.length; i++) {
                        if (gadAnswer5 === gadResponses[i]) {
                            gadScore = gadScore + i
                            return gadScore
                        }
                    }
                    break
                }
                else {
                    console.log("Please give an acceptable answer!")
                }
            }
        }
        //call the function
        gadQuestion5()
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