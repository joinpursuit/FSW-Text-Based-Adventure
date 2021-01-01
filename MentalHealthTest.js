const readline1 = require('readline-sync')

const mentalHealthTest = () => {
    let enterChoice = readline1.keyInYN("Hello! Would you like to take the mental health test?")
    if (enterChoice) {
        console.log("Let's start!")
        testLoop()
    }
    else {
        console.log("Wish you the best with your life!")
        quitTest()
    }
}    

const quitTest = () => {
    console.log("Goodbye!")
    process.exit()
}
mentalHealthTest()

const testLoop = () => {
    console.log("Please answer these series of questions")
    questions()
}

const questions = () => {
    let drugScore = 0
    let drugAnswers = ["never", "a few times a year", "a few times a month", "a few times a week", "daily"]
    console.log("In the last year, have you used the following substances? If so, how often?")
    const alcohol = () => {
        let subtanceUseDisorder1 = readline1.question("Alcohol (never, a few times a year, a few times a month, a few times a week, daily)\n")
        while (true) {
            if (substanceUseDisorder1 === drugAnswers[0]) {
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
    alcohol()

    const cannabis = () => {
        const subtanceUseDisorder2 = readline1.question("Cannabis (never, a few times a year, a few times a month, a few times a week, daily)\n")
        while (true) {
            if (substanceUseDisorder2 === drugAnswers[0]) {
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
                console.log("Please give an acceptable answer!")
            }
        }
    }
    cannabis()
    
    const hallucinogens = () => {
        while (true) {
            const subtanceUseDisorder3 = readline1.question("LSD, Peyote, Psilocybin, PCP (never, a few times a year, a few times a month, a few times a week, daily)\n")
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
                console.log("Please give an acceptable answer!")
            }
        }
    }
    hallucinogens()

    const inhalants = () => {
        while (true) {
            const subtanceUseDisorder4 = readline1.question("glue, aerosols, lighter fuilds, gasoline (never, a few times a year, a few times a month, a few times a week, daily)\n")
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
                console.log("Please give an acceptable answer!")
            }
        }
    }
    inhalants()

    const cocaine = () => {
        while (true) {
            const subtanceUseDisorder5 = readline1.question("Cocaine or heroin (never, a few times a year, a few times a month, a few times a week, daily)\n")
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
    cocaine()

    let mddScore = 0
    let majorDepressiveDisorderAnswers = ["not at all", "mild", "moderate", "severe"]
    const mddQuestion1 = () => {
        while (true) {
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
    mddQuestion1()

    const mddQuestion2 = () => {
        while (true) {
            const mddAnswer2 = readline1.question("I kept thinking about death or taking my own life. (not at all, mild, moderate, severe)\n")
            if (mddAnswer2 === majorDepressiveDisorderAnswers[0]) {
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
                console.log("Please give an acceptable answer!")
            }
        }
    }
    mddQuestion2()

    const mddQuestion3 = () => {
        while (true) {
            const mddAnswer3 = readline1.question("The sadness I was feeling made it difficult for me to function in my personal, social, or work life. (not at all, mild, moderate, severe)\n")
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
    mddQuestion3()    

    const mddQuestion4 = () => {
        while (true) {
            const mddAnswer4 = readline1.question("The sadness I was feeling made it difficult for me to function in my personal, social, or work life. (not at all, mild, moderate, severe)\n")
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
    mddQuestion4()    

    const mddQuestion5 = () => {
        while (true) {
            const mddAnswer5 = readline1.question("I stopped having fun doing things that I used to enjoy. (not at all, mild, moderate, severe)\n")
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
    mddQuestion5()    


    let ptsdScore = 0
    const ptsdQuestions = () => {
        console.log("In the last month, did you experience any of the following symptoms caused by a traumatic event?")
        console.log("Please answer with (yes/no)")
        const ptsdQuestion1 = () => {
            while (true) {
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
                    console.log("Please give an acceptable answer!")
                }
            }
        }
        ptsdQuestion1()
        
        const ptsdQuestion2 = () => {
            while (true) {
                let ptsdAnswer2 = readline1.question('I became excessively vigilant, tense, or jumpy. \n')
                if (ptsdAnswer2 === 'yes') {
                    ptsdScore = ptsdScore + 10
                    return ptsdScore
                }
                else if (ptsdAnswer2 === 'no') {
                    ptsdScore = ptsdScore + 0
                    return ptsdScore
                }
                else {
                    console.log("Please give an acceptable answer!")
                }
            }
        }
        ptsdQuestion2()    

        const ptsdQuestion3 = () => {
            while (true) {
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
        ptsdQuestion3()  
        
        const ptsdQuestion4 = () => {
            while (true) {
                let ptsdAnswer4 = readline1.question('I purposely avoided anything that reminded me of the event \n')
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
        ptsdQuestion4()  

        const ptsdQuestion5 = () => {
            while (true) {
                let ptsdAnswer5 = readline1.question('I was unable to feel happiness, contentment, joy, or love, or had trouble connecting with people. \n')
                if (ptsdAnswer5 === 'yes') {
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
        ptsdQuestion5()  
    }
    ptsdQuestions()

    let gadScore = 0
    let gadResponses = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const generatizedAnxietyDisorderTest = () => {
        console.log("In the last 6 months, did you experience any of the following symptoms? If so, how strong?")
        console.log("Please answer with a number from 0 - 10 (Not at all to very strong)")
        const gadQuestion1 = () => {
            while (true) {
                let gadAnswer1 = readline1.question("I had pain in my chest, almost like I was having a heart attack. \n")
                if ((gadAnswer1 === 0) && (gadAnswer1 <= 10)) {
                    for (let i = 0; i < gadResponses.length; i++) {
                        if (gadAnswer1 === gadResponses[i]) {
                            gadScore = gadScore + i
                            return gadScore
                        }
                    }

                }
                else {
                    console.log("Please give an acceptable answer!")
                }
            }
        }
        gadQuestion1()
    
        const gadQuestion2 = () => {
            while (true) {
                let gadAnswer2 = readline1.question("I felt sick to my stomach, like I was going to throw up, or had diarrhea. \n")
                if ((gadAnswer2 === 0) && (gadAnswer2 <= 10)) {
                    for (let i = 0; i < gadResponses.length; i++) {
                        if (gadAnswer2 === gadResponses[i]) {
                            gadScore = gadScore + i
                            return gadScore
                        }
                    }

                }
                else {
                    console.log("Please give an acceptable answer!")
                }
            }
        }
        gadQuestion2()

        const gadQuestion3 = () => {
            while (true) {
                let gadAnswer3 = readline1.question("	I felt dizzy, my head was spinning, or felt like I was going to faint. \n")
                if ((gadAnswer3 === 0) && (gadAnswer3 <= 10)) {
                    for (let i = 0; i < gadResponses.length; i++) {
                        if (gadAnswer3 === gadResponses[i]) {
                            gadScore = gadScore + i
                            return gadScore
                        }
                    }

                }
                else {
                    console.log("Please give an acceptable answer!")
                }
            }
        }
        gadQuestion3()

        const gadQuestion4 = () => {
            while (true) {
                let gadAnswer4 = readline1.question("I had cold or hot flashes. \n")
                if ((gadAnswer4 === 0) && (gadAnswer4 <= 10)) {
                    for (let i = 0; i < gadResponses.length; i++) {
                        if (gadAnswer4 === gadResponses[i]) {
                            gadScore = gadScore + i
                            return gadScore
                        }
                    }

                }
                else {
                    console.log("Please give an acceptable answer!")
                }
            }
        }
        gadQuestion4()

        const gadQuestion5 = () => {
            while (true) {
                let gadAnswer5 = readline1.question("I was scared that I would lose control, go crazy, or die. \n")
                if ((gadAnswer5 === 0) && (gadAnswer5 <= 10)) {
                    for (let i = 0; i < gadResponses.length; i++) {
                        if (gadAnswer5 === gadResponses[i]) {
                            gadScore = gadScore + i
                            return gadScore
                        }
                    }

                }
                else {
                    console.log("Please give an acceptable answer!")
                }
            }
        }
        gadQuestion5()
    }
    generatizedAnxietyDisorderTest()
    testResults()
}

const testResults = () => {
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

    mddScore.round()

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

    testRestart()
}

const testRestart = () => {
    let restartChoice = readline1.keyInYN("Do you want to retake the test or not?")
    if (restartChoice) {
        testLoop()
    }
    else {
        quitTest()
    }
}
