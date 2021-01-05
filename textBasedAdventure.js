
const readline = require('readline-sync')

function startGame(){
    // welcome to the user
    const nameInput = readline.question("Enter your name: ")
    console.log(`Hi, ${nameInput}. Welcome to my game!`)
    // asking user to play or not.
    if(readline.keyInYN("Would you like to play?")){
       console.log("Let's start!")
      } else {
        console.log("Have a nice life!")
       leaveGame()
      }
let enterHouse = readline.question("You come acrose a strange house in the forest. Do you want to go in?(Hints:yes) \n")

if(enterHouse == "yes") {
        // You decide to enter hosue and find some food in the freezer

  let foodChoice =['Chocolate', 'Ice-cream', 'Beer']
  let index = 0
  while(foodChoice[index] !== "Beer"){
  console.log("You walk into the Kitchen found a freezer. In the freezer you see Chocolate,Ice-cream,and Beer. which one would you try?(Hints:3) \n")
  index = readline.keyInSelect(foodChoice, 'Which foods?');
  if(foodChoice[index] == "Chocolate"){
   // choose foodChoice #1 Chocolate
  console.log("The Chocolate is too sweet! The end.")

  }else if(foodChoice[index] =="Ice-cream"){
    // choose foodChoice #2 Ice-cream
  console.log("The Ice-cream is too cold! The end.")
}else if(foodChoice[index] == "Beer"){
    // If the choice is not 1 or 2, it must be foodChoice #3 Beer
    console.log("The Beer is just right!")
    // if you drink then beer is just right then you want to go sit in some chairs!
}else{
  console.log( "go back to freez find new one")
} 
  }
 
        
    
let chairChoice
   while(chairChoice !== "small"){
       // if you drink then beer is just right then you want to go sit in some chairs!
     chairChoice = readline.question("You walk into the living room and see three chairs. A big, a medium,and a small one.Which one do you choose?(Hints:small)")

    if(chairChoice == 'big'){
        console.log("The chair is way too big. The end.")
    } else if (chairChoice == "medium"){
        console.log("The chair is kind of too big. The end.")
    } else{
        console.log("The small chair is right...")

   }
}

        // now you thinking you need some rest and looking for bed in the other rooms.
let bedChoice
while(bedChoice !== "small"){

  bedChoice =readline.question("You walk into next room over and see three beds. a big, a medium,and a small one. Which one do you choose?(Hints:small)")
        if(bedChoice == "big"){
            console.log("It's too hard and you can't sleep. The end!")
        }else if(bedChoice == "medium"){
            console.log("It's too soft and you can't sleep. The End1")
        } else if(bedChoice === "small")
        {
          // You sleep and wake up with shocked
           console.log("It's just right for you and you fall into deep sleep.")
            console.log("You wake up to see three wolves looking at you!!")
            console.log("Shocked you after get up and run away, never to return again!!")
        }else{
            console.log('You made wrong choice!!')
        }
    
    }  
    // You win and user can see prompt messages!
    console.log("Congratulation! You won!!")
    console.log("Do you want to paly again?")
    if(readline.keyInYN("Would you like to play?")){
        console.log("Let's start!")
        startGame()
       } else {
         console.log("Have a nice life!")
        leaveGame()
       }
}else{
  
console.log("End the game, Have nice life!")
}
}




function leaveGame() {
  console.log("Good luck, and Goodbye!!!")
  process.exit()
}
  

startGame()
