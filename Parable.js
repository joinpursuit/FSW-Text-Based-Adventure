const rls = require('readline-sync')



function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
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
      sleep(2000)
      console.log("lets's start, here are some instructions on how to play. first you will need fingers \n to click your mouse and clickity clack on your keyboard! Ignore any cancel options they are the same as picking option 2")
      sleep(2000)
      console.log(" There is also a mini luck based game built in, so to get to the desired outcome you might first have to get luck! ")
      console.log(" to win you must find out if there is cake at the end of your journey!")
      sleep(2000)
      console.log("difficult I know now lets begin!" ) 
      





      sleep(2000)
        console.log( "Two doors appear before you they have a sign on them" )
        sleep(2000)
        console.log( "you lean in to read what is written on both doors" )
       //ask for a name before starting the game and what type of human they are
       
       choices = ['Earth', 'Not Earth'],
       index = rls.keyInSelect(choices, 'Which door do you choose?');

       if (choices[index] === 'Earth' ){ 
        sleep(2000)
         console.log("you are human!")
         sleep(2000)
         console.log( "you died because the aliens blew up the earth")
         sleep(2000)
         rls.keyInYN("do you really wanna play again?") ? gameLoop() : quitGame()
        
       }
       else { choices[index] === 'Not Earth'

       sleep(2000)
        console.log ( "you are a alien not the human named! " + nameInput)


        choices1 = ['Capture Humans', 'Save Humans'],
        sleep(2000)
          index = rls.keyInSelect(choices1, 'your species is invading earth and some manage to escape as you try to kill \n them all but a thought crosses your mind maybe I should keep one as a pet?');
         












                // PATH TO WINNING THE GAME AND FINDING CAKE THE EASY WAY
          if (choices1[index] === 'Capture Humans' ){
            sleep(2000)
            console.log( "you capture a tiny human and interrogate him about where all the cake is ")
            sleep(3000)
            console.log(" the human named " + nameInput + " sobs says he does not know where the cake is")
            sleep(2000)
            console.log(" you hold a plasma laser up to the head of" + nameInput + " and say")
            sleep(2000)
            console.log(" you must be the cake that I have been looking for maybe I will just eat you after I fatten you up")
            sleep(2000)
            console.log(" you imprison the human several years pass as you feed him his own kind")
            sleep(2000)
            console.log( nameInput + " cries out please no more I cannot eat any more")
            sleep(2000)
             numberFeed = rls.question("you force feed " + nameInput + "  \n sets of human arms ( or will you be merciful and feed him no arms ) \n Enter number of arms:")
             sleep(2000)
             if(numberFeed == 0 ){
               console.log( "they cry out in praise and say thank you for not feeding me any more arms ")
               sleep(2000)
                console.log(" I will give you a hint to how to get or make cake")
                sleep(2000)
                console.log ( " he whispers the ingredients into your ears ")
                sleep(2000)
                console.log ( " you pateintly listen")
                sleep(2000)
                console.log ( " you back up in astonishment of how cakes are made")
                sleep(2000)
                console.log ( " you demand for the secret ingredient to make the ulimate cake")
                sleep(2000)
                console.log ( nameInput + " says: I will only tell you if you can beat me in a game of dice if you can roll a higher \n dice number then me I will make you the cake if you fail to You will have to go and make the cake your self ! ")
                sleep(2000)
                console.log ( " I agree to the amusing game")
                sleep(2000)


                let myDice = diceRoll()
                let theirDice = diceRoll()
                sleep(2000)
                console.log( "I the Alien roll a " + myDice)
                console.log( "The human roll a " + theirDice)

                  if(myDice > theirDice){
                    sleep(2000)
                    console.log("HAHA I WON NOW GIVE ME THE SECRET INGREDENT TO THE CAKE!")
                    sleep(2000)
                    console.log( " YOU HAVE WON and now make cake for your entire race and are a HERO!")
                    sleep(2000)
                    rls.keyInYN("do you really wanna play again?") ? gameLoop() : quitGame()
                  }
                  else {
                    console.log( " you have lost the battle of the dice you must now work harder to find out how to get cake")
                    sleep(2000)
                    console.log( "you torture the human regardless to find out the secrets of the cake only to find out the cake is a lie :( ")
                    sleep(2000)
                    rls.keyInYN("oh common cant you just leave me alone ok do you wanna play this again little annoying human") ? gameLoop() : quitGame()
                    sleep(2000)
                  }
               }  
          
          else if (numberFeed >= 1){
            console.log( "no no no more please I beg of you")
            sleep(2000)
            console.log ( " I say: if you can say what ever phrase I say but backwards I will spare you and give \n u a chance at playing me at a game of dice to decide you fate!")
            sleep(2000)
            console.log ( nameInput + " nodes in agreement")
            sleep(2000)
            let sayWord = rls.question("I say: \n ")
            sleep(2000)
            wordSaid = backwards(sayWord)
            sleep(2000)
            console.log (nameInput + " says back " + wordSaid )
            // now we prompt the dice game again if u loose u loose the game if u pass u move on to the next decision
            sleep(2000)
            console.log ("I like what you just said ok lets play a game of dice ")
            sleep(2000)
            console.log ("but a fair warning im pretty lucky wink* ")
            sleep(2000)
            let myDice = diceRoll()
            let theirDice = diceRoll()
            console.log( "I the Alien roll a " + myDice)
            console.log( "The human roll a " + theirDice)
            sleep(2000)
            if(myDice > theirDice){
              console.log ("HAHA I WIN ")
              sleep(2000)
              rls.keyInYN("but the cake was a lie do you wanna play again to find the real cake \n cause real cakes dont have human flesh in them") ? gameLoop() : quitGame()
             
            }
            else {
              sleep(2000)
              console.log ("oh no I Lost Darn you human I will let you live for now ")
              sleep(2000)
              //function for another mini game 
              console.log ( nameInput + " says: so am i free to go will you let me live")
              sleep(2000)

              console.log ( "you the alien : ")
              sleep(2000)

              choices2 = ['fight the human', 'eat the human', 'tickle? 0.o'],
              index = rls.keyInSelect(choices2, 'what do you do?');
              sleep(2000)
              if (choices2[index] === 'fight the human' ){ 
                console.log("you died!")
                sleep(2000)
                console.log( "the human beat you to death with your own leg ")
                sleep(2000)
       
                rls.keyInYN("you loose wanna play again?") ? gameLoop() : quitGame()
                
               
              }
              else if (choices2[index] === 'eat the human'){
                sleep(2000)
               console.log ( "there is no human left so no way to find out how to get cake !")
               sleep(2000)
               rls.keyInYN("you loose wanna play again?") ? gameLoop() : quitGame()
               sleep(2000)
              }
              else if (choices2[index] === 'tickle? 0.o'){
                
                console.log ( "you tickle the human into submission you demand to")
                sleep(2000)
                



  
                rls.keyInYN("WOW THE CAKE WASENT A LIE CONGRATS U WIN WANNA Play again?") ? gameLoop() : quitGame()
               }
       
             











































              rls.keyInYN("do you really wanna play again?") ? gameLoop() : quitGame()
            }
          }
           









          }
          else{
            console.log("you save the human named " + nameInput + " !")
            sleep(2000)
            console.log("you died because " + nameInput + " grabbed your gun and shot you in the groin ouch")
            sleep(2000)
            rls.keyInYN("do you really wanna play again?") ? gameLoop() : quitGame()
            sleep(2000)
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
    