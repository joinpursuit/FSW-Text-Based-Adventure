const rls = require('readline-sync')




// calling sleep(2000) will delay by 2 seconds for text function below for delaying text
function sleep(mil) {
  const date = Date.now();
  let currDate = null;
  do {
    currDate = Date.now();
  } while (currDate - date < mil);
}

// FUNCTION FOR ROLLING SOME DICE 
function diceRoll(){
 let variable = Math.floor(Math.random() * 6) + 1
 return variable
}


// Function for reversing words
function backwards(words){
  return words.split("").reverse().join("")

}



// Starting the game
function startGame(){
      
      
      let answer = rls.keyInYN("Ready player one?")
      
      if(answer) {
       
       gameLoop()
      }
      else {
        console.log(" Death ")
        quitGame()
      }
}





   
    
     // Controls the flow of the game.
    //******************MAIN BULK OF GAME LOOP BELOW********************* */
    function gameLoop() {

      
      let nameInput = rls.question("Enter your name: \n ")
      console.log("Welcome to " + nameInput + " Parable!")
      console.log("lets's start, here are some instructions on how to play. first you will need fingers to click your mouse and clickity clack on your keyboard!")
      
      console.log(" to win you must find out if there is cake at the end of your journey!")
      console.log("difficult I know now lets begin!" ) 
      






        console.log( "Two doors appear before you they have a sign on them" )
        console.log( "you lean in to read what is written on both doors" )
       //ask for a name before starting the game and what type of human they are
       
       choices = ['Earth', 'Not Earth'],
       index = rls.keyInSelect(choices, 'Which door do you choose?');

       if (choices[index] === 'Earth' ){ 
         console.log("you are human!")
         
         console.log( "you died because the aliens blew up the earth")

         rls.keyInYN("do you really wanna play again?") ? gameLoop() : quitGame()
        
       }
       else { choices[index] === 'Not Earth'


        console.log ( "you are a alien!")


        choices1 = ['Capture Humans', 'Save Humans'],

          index = rls.keyInSelect(choices1, 'your species is invading earth and some manage to escape as you try to kill them all but a thought crosses your mind maybe I should keep one as a pet?');
         












                // PATH TO WINNING THE GAME AND FINDING CAKE THE EASY WAY
          if (choices1[index] === 'Capture Humans' ){

            console.log( "you capture a tiny human and interrogate him about where all the cake is ")
            //sleep(3000)
            console.log(" the human named " + nameInput + " sobs says he does not know where the cake is")
            console.log(" you hold a plasma laser up to the head of" + nameInput + " and say")
            console.log(" you must be the cake that I have been looking for maybe I will just eat you after I fatten you up")
            console.log(" you imprison the human several years pass as you feed him his own kind")
            console.log( nameInput + " cries out please no more I cannot eat any more")
            // 
             numberFeed = rls.question("you force feed " + nameInput + "  \n sets of human arms ( or will you be merciful and feed him no arms )")
              if(numberFeed == 0 ){
               console.log( "they cry out in praise and say thank you for not feeding me any more arms ")
                console.log(" I will give you a hint to how to get or make cake")
                console.log ( " he whispers the ingredients into your ears ")
                console.log ( " you pateintly listen")
                console.log ( " you back up in astonishment of how cakes are made")
                console.log ( " you demand for the secret ingredient to make the ulimate cake")
                console.log ( nameInput + " says: I will only tell you if you can beat me in a game of dice if you can roll a higher dice number then me I will make you the cake if you fail to You will have to go and make the cake your self ! ")
                console.log ( " I agree to the amusing game")


                let myDice = diceRoll()
                let theirDice = diceRoll()
                console.log( "I the Alien roll a " + myDice)
                console.log( "The human roll a " + theirDice)

                  if(myDice > theirDice){
                    console.log("HAHA I WON NOW GIVE ME THE SECRET INGREDENT TO THE CAKE!")
                    console.log( " YOU HAVE WON and now make cake for your entire race and are a HERO!")
                    rls.keyInYN("do you really wanna play again?") ? gameLoop() : quitGame()
                  }
                  else {
                    console.log( " you have lost the battle of the dice you must now work harder to find out how to get cake")
                    console.log( "you torture the human regardless to find out the secrets of the cake only to find out the cake is a lie :( ")
                    rls.keyInYN("oh common cant you just leave me alone ok do you wanna play this again little annoying human") ? gameLoop() : quitGame()
                  }
               }  
          
          else if (numberFeed >= 1){
            console.log( "no no no more please I beg of you")
            console.log ( " I say: if you can say what ever phrase I say but backwards I will spare you and give u a chance at playing me at a game of dice to decide you fate!")
            console.log ( nameInput + " nodes in agreement")
            let sayWord = rls.question("I say: \n ")
            wordSaid = backwards(sayWord)
            console.log (nameInput + " says back " + wordSaid )
            // now we prompt the dice game again if u loose u loose the game if u pass u move on to the next decision

            console.log ("I like what you just said ok lets play a game of dice ")
            console.log ("but a fair warning im pretty lucky wink* ")
            let myDice = diceRoll()
            let theirDice = diceRoll()
            console.log( "I the Alien roll a " + myDice)
            console.log( "The human roll a " + theirDice)

            if(myDice > theirDice){
              console.log ("HAHA I WIN now I am going to turn you into a cake weather you like it or not")
              console.log (" Now I will turn you into a delicious human cake")
              console.log (" you have won the game CONGRATS or have you!")
              rls.keyInYN("sike the cake was a lie do you wanna play again to find the real cake cause real cakes dont got human in them") ? gameLoop() : quitGame()
             
            }
            else {
              console.log ("oh no I Lost Darn you human I will let you live for now but let play one more game ")
              rls.keyInYN("do you really wanna play again?") ? gameLoop() : quitGame()
            }
          }
           









          }
          else{
            console.log("you save the human named " + nameInput + " !")
            sleep(4000)
            console.log( "you died because " + nameInput + " grabbed your gun and shot you in the groin ouch")
  
            rls.keyInYN("do you really wanna play again?") ? gameLoop() : quitGame()

          }



          
       }

       
       
     

    
 
    















      // ^^^^^^ MAIN BULK OF THE GAME LOOP ^^^^^^^^^^^^^^
      //prompt the user to play again
      rls.keyInYN("do you really wanna play again?") ? gameLoop() : quitGame()
         }
        // ^^^^^^ MAIN BULK OF THE GAME LOOP ^^^^^^^^^^^^^^
  
    


      // FUNCTION FOR QUITING THE GAME
      function quitGame() {
        console.log("Good riddens you filthy animal and a happy new year!")
        process.exit()
      }


 //END OF FUNCTIONS 



    startGame()
   
    quitGame()
    