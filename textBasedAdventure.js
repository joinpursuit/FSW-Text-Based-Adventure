const readline = require('readline-sync')

let nameInput = readline.question("Hey! what's your name?: ")

console.log(`Hello ${nameInput}!`)

const gameIntro = (space = " ") => {

    let userInput = readline.question("Would you like to play The Dungeon Of Questions?: ")
console.clear()
if (userInput === "yes"){
    console.log(`Welcome to the Dungeon of Questions ${nameInput}!. You must navigate through the dungeon by going through various chambers. Each chamber is gaurded by the Questions  Reeper! Answer the question correctly, continue your path through the dungeon. Answer the question incorrectly, The reeper will take your soul!, and you will have to start your journey from the BEGINING Good Luck!`)
} else {
    console.log("Ha!, Someone's afraid. Well you should be!, Come back at your own risk! ")
} 
return space
}
console.log(gameIntro());




const startGame = (space = " ") => {
   let userInput;  
   while (userInput !== "enter"){
   userInput = readline.question("Type enter when you are ready to enter the dungeon:")
}
console.clear() 

return space; 
}
console.log(startGame())


function doorSelction(space = "...")  {
    let userInput;
    console.log("Reeper: STOP RITE THERE!")
      userInput = readline.question("Reeper: Which chamber would you like to enter? Type (1) for chamber one or Type (2) for chamber two:");
    if(userInput === "1"){
      door1();
    } else {
      door2();                      
    
    }
    return space;
    
}
    console.log(doorSelction());




function door1(space = " ")  {
    console.clear()
    let userInput1;
      console.log("Reeper:I have 300 stickes I gave 199 to Mujtaba. how many do  I have now ?");
    while (userInput1 !== "c"){
    if (userInput1 !== "c"){
      console.log("Reeper: Your answer is incorrect try again or i must take your soul!");
      userInput1 = readline.question("(A).100 (B).423 (C).101 :PLEASE TYPE THE LETTER THAT CORRESPONDS WITH YOUR ANSWER!:");
    }
    }
    if (userInput1 === "c"){
      console.log("Reeper: You May Enter")   
      doorSelction2() 
    } 
    return space;
}


function door2() {
    console.clear()
    let userInput1;
      console.log("Reeper:What is 3 multiplied by 20?");
    userInput1 = readline.question("if (A). 4 (B). 60 (C). 19 :PLEASE TYPE THE LETTER THAT CORRESPONDS WITH YOUR ANSWER!:");
    if (userInput1 === "b"){
      console.log("Reeper: You May Enter")    
    } else {
      console.log("Reeper: Try again or i must take your soul!")
}
return space
}




function doorSelction2(space = "...")  {
    let userInput;
    console.log("Reeper: You have made it past the first chamber, but i have a strong feeling i will be taking your soul soon!")
      userInput = readline.question("Reeper: Which chamber would you like to enter? Type (1) for chamber one or Type (2) for chamber two:");
    if(userInput === "1"){
      door3();
    } else {
      door4();                      
    
    }
    return space;
    
}
    console.log(doorSelction2());














 


























 //  Which chamber would you like to enter? Type (1) for chamber one or Type (2) for chamber two:")),5000);{
//     if (userInput !== yes){
//         console.log("Hint: breh")
//     } else {
//         console.log("great")            // write a if else statement to enter function of door one or door 2
//     }
//     }
//     return space
    
//     }
//      console.log(doorSelction())