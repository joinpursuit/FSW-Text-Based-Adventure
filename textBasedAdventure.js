const rls = require('readline-sync')




// calling sleep(2000) will delay by 2 seconds for text function below for delaying text
function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}




// Starting the game
function startGame(){
      
      sleep(2000)
      let answer = rls.keyInYN("Ready player one?")
      
      if(answer) {
       sleep(2000)
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

      sleep(2000)
      let nameInput = rls.question("Enter your name: \n ")
      console.log("Welcome to " + nameInput + " Parable!")
      console.log("lets's start, here are some instructions on how to play. first you will need fingers to click your mouse and clickity clack on your keyboard!")
      sleep(3000)
      console.log(" to win you must find out if there is cake at the end of your journey!")
      console.log("difficult I know now lets begin!" ) 
      sleep(4000)






        console.log( "Two doors appear before you they have a sign on them" )
        console.log( "you lean in to read what is written on both doors" )
       //ask for a name before starting the game and what type of human they are
       
       choices = ['Earth', 'Not Earth'],
       index = rls.keyInSelect(choices, 'Which door do you choose?');

       if (choices[index] === 'Earth' ){ 
         console.log("you are human!")
         sleep(4000)
         console.log( "you died because the aliens blew up the earth")
         quitGame()
        
       }
       else { choices[index] === 'Not Earth'
        console.log ( "you are a alien!")
        choices1 = ['Capture Humans ', 'Save Humans'],
          index = rls.keyInSelect(choices1, 'your species is invading earth and some manage to escape as you try to kill them all but a thought crosses your mind maybe I should keep one as a pet?');
         
          if (choices1[index] === 'Capture Humans' ){
            console.log( "you capture a tiny human and interrogate him about where all the cake is ")
            sleep(3000)
            console.log(" the human named" + nameInput + " sobs says he does not know where the cake is"
             )
          }

          else{
            console.log("you save the human named " + nameInput + " !")
            sleep(4000)
            console.log( "you died because the human grabbed your gun and shot you in the groin ouch")
            quitGame()
          }

       }

       
       
     

    
 
    















      // ^^^^^^ MAIN BULK OF THE GAME LOOP ^^^^^^^^^^^^^^
      //prompt the user to play again
      rls.keyInYN("do you really wanna play again?") ? gameLoop() : quitGame()
         }
        
  
    


      // FUNCTION FOR QUITING THE GAME
      function quitGame() {
        console.log("Good riddens you filthy animal and a happy new year!")
        process.exit()
      }


 //END OF FUNCTIONS 













    startGame()
    
   
    quitGame()
    