const readline = require('readline-sync')


let nameInput = readline.question("Enter your name: ")
let lifeCount = 3

const startGame = () => {
lifeCount = 3
console.log(`\nHello ${nameInput}!  Welcome to the trivial realm of Academicus!`)
let answer = readline.keyInYN("Shall we begin?")
  if(answer) {
      console.log("Excellent!\n")
      introLevel()
  } 
  else {
      console.log("Best of luck.")
      exitGame()
  }
}

const introLevel = () => {
console.log(`So ${nameInput}, behold Academicus!`)
console.log("The aim of the game is to solve problems and answer questions as you navigate within the realm.\n")
console.log("To navigate, use the keys on your keyboard:")
console.log(" w - forward/north/up  s - backwards/south/down")
console.log(" a - left/west         d - right/east\n")
console.log("You have 3 lives.")
console.log("If you solve the problems correctly, you will advance further into the realm.")
console.log("If you get a wrong answer, you will lose a life and have the option to try it again.")
console.log("If you lose all three lives, you will be exiled from the realm.....\n")
let answer1 = readline.keyInYN("Still up for it?")
 if (answer1) {
     console.log("\nJust what I wanted to hear!\n")
     levelOne()
 }
 else {
     exitGame()
 }
}

const levelOne = () => {
console.log("Level 1:\n") 
console.log("Nestled deep in midst of the darken forest, you stand alone in a clearing.\n")
let move = readline.question("Navigate:")
 if (move === "w" || move === "W") {
     console.log("\nAs you move north, you see an upward path that leads you to a hilltop.")
     console.log("Just as you are about to reach the top, you trip over and drop some of your belongings on the ground.")
     console.log("As you dust yourself off, you reach for your belongings and spot one of your lucky dices on the ground.")
     console.log("Which number of the dice is facing up towards you?\n")
     let randDice = diceRoll()
     while (lifeCount >= 0) {
      if (lifeCount === 0) {
          console.log("0 lives left.")
          console.log("Your life in exile begins.")
          gameOver()
      } 
      let guessDice = readline.question("Guess a number between 1 and 6:")   

      if (guessDice === randDice) {
          console.log("Correct! Good job!")
          levelTwo()
          break;
      } 
      else {
          console.log("\nWrong answer!\n")
      } 
      --lifeCount
    }
  } 
  if (move === "d" || move === "D") {
      console.log("\nYou face east and see a path in the woods. You proceed on this path.")
      console.log("As the sun sets, the trees around you grow ever more dark. A spine-chilling burst of wind begins to blow in your path as you are walking.")
      console.log("With the wretched eastern winds becoming more and more unbearable, you are fortunate enough to find a cabin in the woods...")
      console.log("Without hesitation, you enter the cabin in search of warmth and nourishment. Inside of the one roomed cabin, dwells not a single soul.")
      console.log("On a table, you find a piece of bread to eat and some ale to drink.")
      console.log("As you are enjoying your free meal, you spot a torn up news article with only the title of it barely visible and with letters missing.")
      console.log("\nFinish the two words of the title (all lowercase): 1. _r_if_ci_l.    2. in_e_l_g_n_e.")
      while (lifeCount >= 0) {
       if (lifeCount === 0) {
           console.log("0 lives left.")
           console.log("Your life in exile begins.")
           gameOver()
       } 
       let wordGuess = readline.question("Input answer:")

       if (wordGuess === "artificial intelligence" || wordGuess === "artificialintelligence" || wordGuess === "artificial intelligence." || wordGuess === "artificialintelligence." || wordGuess === "artificial. intelligence." || wordGuess === "artificial.intelligence." || wordGuess === "artificial, intelligence." || wordGuess === "artificial,intelligence." || wordGuess === "artificial, intelligence" || wordGuess === "artificial,intelligence" || wordGuess === "1. artificial. 2. intelligence.")  {
           console.log("Correct! Good job!")
           levelTwo()
           break;
       }
       else {
           console.log("\nWrong answer!\n")
       } 
       --lifeCount
      }

  }
  else if (move === "a" || move === "A") {
      console.log("\nProceeding west takes you into the forest. As you walk on, it is not long until you encounter a familiar scent, that of the ocean!")
      console.log("You walk towards it with excitement. It had been a rough couple of days of being stranded in the darken forests of Academicus. ")
      console.log("The ocean presents you with the imperative task of distilling water for survival, along with the opportunity to bathe and cool yourself off.")
      console.log("The deepest part of the Ocean is Mariana Trench. How deep do you think it is?\n")
      console.log("- 35,702 ft             - 32,963 ft")
      console.log("- 38,632 ft             - 36,201 ft\n")
      while (lifeCount >= 0) {
      if (lifeCount === 0) {
         console.log("0 lives left.")
         console.log("Your life in exile begins.")
         gameOver() 
       } 
       let oceanGuess = readline.question("Input answer:") 

       if (oceanGuess === "36,201 ft" || oceanGuess === "36201ft" || oceanGuess === "36,201ft" || oceanGuess === "36201 ft" || oceanGuess === "36,201 feet" || oceanGuess === "36201feet" || oceanGuess === "36,201feet" || oceanGuess === "36201 feet" || oceanGuess === "36,201" || oceanGuess === "36201") {
         console.log("Correct! Good job!")
         levelTwo()
         break;
       } 
       else {
         console.log("\nWrong answer!\n")
       } 
       --lifeCount
      }
  } 
  else if (move === "s" || move === "S") {
      console.log("\nHeading south, you immediatly encounter the southern rocky shore. Here is where the boldest of storms are born.")
      console.log("Storms on this end come in all shapes and forms, each with its own bit of personality.")
      console.log("You reluctantly approach the hilly rocks of the south, peering curiously at the far reaches of the horizon.")
      console.log("Suddenly a strong storm erupts, sending you flying backwards.\n")
      console.log("Which of these English words comes from Chinese:")
      console.log("- Typhoon        - Lagoon         - Hurricane       - Magne ")
      while (lifeCount >= 0) {
      if (lifeCount === 0)  {
         console.log("0 lives left.")
         console.log("Your life in exile begins.")
         gameOver()  
       } 
       let storm = readline.question("\nInput answer:") 

       if (storm === "Typhoon" || storm === "typhoon") {
         console.log("Correct! Good job!\n")
         console.log("Fun Facts:")
         console.log("Typhoons are tropical cyclones that occur in the North Eastern Pacific ocean.")
         console.log("The Chinese word for them means big wind.\n")
         levelTwo()
         break;
       }
       else {
         console.log("\nWrong answer!\n")
       } 
       --lifeCount
      }
  } 
  else {
      console.log("Invalid input! Remember to use the navigation keys stated before. \n")
      levelOne()
  }
} 

const levelTwo = () => {
 console.log("\nLevel 2:\n")
 console.log("Suddenly, you were teleported to the ancient burial grounds of the fallen scholars that once ruled this realm, so rich in history and archaic wisdom.")
 console.log("At the peak of their existance, they were a race to be both revered and feared. They ruled over the realm not with brute force, but with the power of knowledge.")
 console.log("But that knowledge consumed them, becoming the very things they swore to oppose. Here were you now stand, is all that remains of them.\n")
 let move1 = readline.question("Navigate:")
  if (move1 === "w" || move1 === "W") {
      console.log("\nMoving north through the necropolis, you encounter a golden tomb.")
      console.log("Gold to loot? Precious gems to steal? The grave robbers work is never done. The hours are shit, with hell to pay!")
      console.log("Longing to brim your pockets with this unique brand of sinning, you attempt to open the tomb.")
      console.log("Inscrbed on the tomb is the sentence: To open the tomb, find the next three numbers in the sequence:\n")
      console.log("8,15,24,39,64,103,160,239,344,?,?,?\n")
      while (lifeCount >= 0) {
      if (lifeCount === 0) {
         console.log("0 lives left.")
         console.log("Your life in exile begins.")
         gameOver()  
       }  
       let sequence = readline.question("Input answer:") 

       if (sequence === "479, 648, 855" || sequence === "479, 648, 855." || sequence === "479,648,855" || sequence === "479,648,855." || sequence === "479 648 855" || sequence === "479648855" || sequence === "479 648 855." || sequence === "479648855.") {
         console.log("Correct! Good job!")
         levelThree()
         break;
       }
       else {
         console.log("\nWrong answer!\n")
       } 
       --lifeCount
      }
  } 
  if (move1 === "a" || move1 === "A") {
      console.log("\nAs you turn westward, you walk up to a building of immense beauty. Grand and gray with ebony black doors, a picturesque view.")
      console.log("Getting closer to the building, you read the words inscribed: Hall of the Wise Ones")
      console.log("You enter the building and within it, you see several crypts buried in a sea of cobwebbs.")
      console.log("Suddenly a scroll rolls in front of you. You pick it up and read: Which of the following Greek gods/goddesses are associated with wisdom?\n")
      console.log("- Apollo       - Artemis       - Athena          - Ares\n")
      while (lifeCount >= 0) {
       if (lifeCount === 0)  {
         console.log("0 lives left.")
         console.log("Your life in exile begins.")
         gameOver()  
       } 
       let gods = readline.question("Input answer:") 

       if (gods === "Athena" || gods === "Athena." || gods === "athena" || gods === "athena.") {
         console.log("Correct! Good job!\n")
         console.log('Fun Facts:')
         console.log('Apollo was the Greek god associated with the bow, music, and divination.')
         console.log('Artemis was the Greek goddess associated with hunting, wild nature, and chastity.')
         console.log('Ares was the Greek god associated with war \n')
         levelThree()
         break;
       } 
       else {
         console.log("\nWrong answer!\n") 
       } 
       --lifeCount
    }
  } 
  else if (move1 === "d" || move1 === "D")  {
       console.log("\nEast you proceed to the historic section of the burial grounds, Where some of the oldest of the fallen were laid to rest.")
       console.log('They once flourished, living in perfect symbiosis with the elements of the realm.')
       console.log('What remains? Hundreds of old, moldy books, and few eyes to read them.')
       console.log('You pick up a random book and attempt to read the barely visible one worded title: 1. _e_u_c_r_.\n')
       console.log('What is the word?\n')
       
       while (lifeCount >= 0) {
       if (lifeCount === 0) {
          console.log("0 lives left.")
          console.log("Your life in exile begins.")
          gameOver()  
        } 
       let guessWord = readline.question('Input answer:')  

       if (guessWord === "sepulchre" || guessWord === "Sepulchre" || guessWord === "sepulchre." || guessWord === "Sepulchre." || guessWord === "1. Sepulchre." || guessWord === "1. sepulchre." || guessWord === "1.Sepulchre." || guessWord === "1.sepulchre.") {
          console.log("Correct! Good job!\n")
          console.log('Fun Fact:')
          console.log('A Sepulchre is a small room or monument, cut in rock or built of stone, in which a dead person is laid or buried.')
          levelThree()
          break;
        } 
        else {
          console.log("\nWrong answer!\n")
           if (lifeCount === 2) {
             console.log("1 life left.") 
             let tapOut = readline.keyInYN('Would you like a hint?') 
              if (tapOut) {
                console.log("\nHint: the word is related to the location of this level.")
              } 
              else {
                console.log('Ok then. One last try!')
              }
           }
        }
        --lifeCount
       }
  } 
  else if (move1 === "s" || move1 === "S") {
     console.log('\nTaking a step backwards, you suddenly fall through a trap door with a deep, dark drop. Oblivion.')
     console.log('You have fallen into the unending abyss named Harkenfall. A place where the living do not belong.')
     console.log('You are now suspended in mid air, eternally falling, and yearning for an end that does not seem to exist....')
     console.log('As you are eternally falling, rotating and twisting in all different directions, you spot one of your lucky dices.')
     console.log('The number on the dice that faces you is constantly changing, as you and the dice are both rotating in mid air.\n')
     console.log('Which number could be facing towards you at any moment?\n')
     
     while (lifeCount >= 0) {
      let randDice1 = diceRoll()
      if (lifeCount === 0) {
          console.log("0 lives left.")
          console.log("Your life in exile begins.")
          gameOver()
      } 
      let guessDice1 = readline.question("Guess a number between 1 and 6:")   

      if (guessDice1 === randDice1) {
          console.log("Correct! Good job!")
          levelThree()
          break;
      } 
      else {
          console.log("\nWrong answer!\n")
      } 
      --lifeCount
    } 
  } 
  else {
      console.log("Invalid input! Remember to use the navigation keys stated before. \n")
      levelTwo()
  }
}

const levelThree = () => {
 console.log("\nLevel 3:\n")
 console.log("In the blink of an eye, you abruptly end up in the laboratory of Oudoor the Enlightened.")
 console.log('Born within the very halls of the fallen ones, a mysterious sect emerged, that sought to question the very essence of reality and of purpose.') 
 console.log('A couple of years before the fall of the Scholars, there was a great war.')
 console.log('It was quite a nasty war, in which kin fought kin. And whole worlds were destroyed.')
 console.log('This laboratory, is one of the last remnants of the mysterious sect.....\n')
 let move2 = readline.question("Navigate:")
  if (move2 === "a" || move2 === "A") {
      console.log('Dead End: Nothing to see here....')
      console.log('You return to the starting position. \n')
      levelThree()
  } 
  if (move2 === "d" || move2 === "D") {
      console.log('Dead End: Nothing to see here....')
      console.log('You return to the starting position. \n')
      levelThree()
  } 
  else if (move2 === "s" || move2 === "S") {
      console.log('Dead End: Nothing to see hear....')
      console.log('You return to the starting position. \n')
      levelThree()
  } 
  else if (move2 === "w" || move2 === "W") {
      console.log('\nYou move forward to examine the ruins of Oudoor.')
      console.log('The derelict laboratory has seen better days. Littered with broken test tubes, empty wine bottles and the scribbles of mad men.')
      console.log('You pick one of the scribbles up and read four words with letters missing (all lowercase): 1. _x_g_n.  2. c_r_o_.  3. _i_r_g_n.  4. h_d_o_e_.\n')
      console.log('What are the four words?\n')
      while (lifeCount >= 0) {
        if (lifeCount === 0) {
          console.log("0 lives left.")
          console.log("Your life in exile begins.")
          gameOver()
      } 
      let finishWord = readline.question('Input answer:')

       if (finishWord === "oxygen carbon nitrogen hydrogen" || finishWord === "oxygencarbonnitrogenhydrogen" || finishWord === "oxygen carbon nitrogen hydrogen." || finishWord === "oxygencarbonnitrogenhydrogen." || finishWord === "oxygen. carbon. nitrogen. hydrogen." || finishWord === "oxygen.carbon.nitrogen.hydrogen." || finishWord === "oxygen, carbon, nitrogen, hydrogen" || finishWord === "oxygen, carbon, nitrogen, hydrogen." || finishWord === "oxygen,carbon,nitrogen,hydrogen" || finishWord === "oxygen,carbon,nitrogen,hydrogen." || finishWord === "oxygen carbon nitrogen hydrogen." || finishWord === "oxygencarbonnitrogenhydrogen." || finishWord === "1. oxygen. 2. carbon. 3. nitrogen. 4. hydrogen.") {
          console.log("Correct! Good job!\n")
          console.log('Fun fact:')
          console.log('The four elements common to all living organisms are oxygen (O), carbon (C), hydrogen (H), and nitrogen (N). \n')
          rewardLevel()
          break;
       } 
       else {
          console.log("\nWrong answer!\n")
          if (lifeCount === 2) {
            console.log("1 life left.") 
            let tapOut1 = readline.keyInYN('Would you like a hint?') 
             if (tapOut1) {
               console.log("\nHint: Think Science............ \n")
             } 
             else {
               console.log('Ok then. One last try!')
             }
          }
       } 
       --lifeCount
    }
  } 
  else {
      console.log("Invalid input! Remember to use the navigation keys stated before. \n")
      levelThree()
  }
}

const rewardLevel = () => {
console.log('Congratulations! You are now the Imperial Majesty of all the realm!\n')
gameOver()
}


const gameOver = () => {
let answer2 = readline.keyInYN("Would you like to play again?")
 if (answer2) {
    console.log("\nEnter you name:") 
    nameInput = readline.question()
    startGame()
 }
 else {
     console.log("\nThanks for playing Academicus! How did you like it?\n")
     console.log("Please rate the game from 1 to 10? 1 being worst and 10 being best.")
     let rating = readline.question()
      if (rating >= 5) {
          console.log("\nThanks!\n")
          exitGame()
      } 
      else if (rating < 5) {
          console.log("\nHow could we improve the game?\n")
          let feedback = readline.question()
           if (feedback.length >= 5) {
               console.log("\nThanks for the feedback!\n")
               exitGame()
           }
           else {
               exitGame()
           }
      }
 }
}


const exitGame = () => {
    console.log("Goodbye!")
     process.exit()
}

const diceRoll = () => {
    let random1 = Math.floor(Math.random() * 6 + 1)
    return `${random1}`
}

startGame()