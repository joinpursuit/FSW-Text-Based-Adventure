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
      console.log("Reeper: You May Enter");   
      doorSelction2() 
    } 
    return space;
}


function door2() {
    console.clear()
    let userInput1;
     console.log("Reeper:What is 3 multiplied by 20?");
    while (userInput1 !== "b"){
    if (userInput1 !== "b"){
        console.log("Reeper: Try again or i must take your soul!");
        userInput1 = readline.question("if (A). 4 (B). 60 (C). 19 :PLEASE TYPE THE LETTER THAT CORRESPONDS WITH YOUR ANSWER!:");
    }
    }
    if (userInput1 === "b"){
      console.log("Reeper: You May Enter");
      doorSelction2
} 
return space;
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





function door3(space = " ")  {
    console.clear()
     let userInput1;
        console.log("Reeper:How much will your bill be if your pasta cost $6.75 and your two drinks were $3.85 each?");
    while (userInput1 !== "a"){
    if (userInput1 !== "a"){
        console.log("Reeper: Your answer is incorrect try again or i must take your soul!");
        userInput1 = readline.question("(A). $14.45 (B). $33.50 (C). $10.10 :PLEASE TYPE THE LETTER THAT CORRESPONDS WITH YOUR ANSWER!:");
    }
    }
    if (userInput1 === "a"){
        console.log("Reeper: You May Enter");   
        doorSelction3() 
    } 
        return space;
}
    
    
function door4() {
    console.clear()
      let userInput1;
        console.log("If 7/8 of a grade one class are six or older, what percentage of them are five or younger?");
    while (userInput1 !== "c"){
    if (userInput1 !== "c")
        console.log("Reeper: Try again or i must take your soul!");
        userInput1 = readline.question("if (A).40.0% (B).33.30%(C).12.50% :PLEASE TYPE THE LETTER THAT CORRESPONDS WITH YOUR ANSWER!:");
    }
    if (userInput1 === "c"){
        console.log("Reeper: You May Enter");
        doorSelction3()
    } 
    return space;
}






function doorSelction3(space = "...")  {
    let userInput;
    console.log("Reeper:Ha! your sould will be mines soon!")
        userInput = readline.question("Reeper: Which chamber would you like to enter? Type (1) for chamber one or Type (2) for chamber two:");
    if(userInput === "1"){
        door5();
    } else {
        door6();                      
    }
    return space;
}
console.log(doorSelction3());
        
    





 




function door5(space = " ")  {
    console.clear()
     let userInput1;
        console.log("Reeper:How long will it take a tree to reach 14 feet tall if it grows at a rate of 8 inches per year?");
    while (userInput1 !== "c"){
    if (userInput1 !== "c"){
        console.log("Reeper: Your answer is incorrect try again or i must take your soul!");
        userInput1 = readline.question("(A). 32 years (B). 24 years (C). 21 years :PLEASE TYPE THE LETTER THAT CORRESPONDS WITH YOUR ANSWER!:");
    }
    }
    if (userInput1 === "c"){
        console.log("Reeper: You May Enter");   
        doorSelction4() 
    } 
        return space;
}
    
    
function door6() {
    console.clear()
      let userInput1;
        console.log("One movie ticket costs $1.20, how much you have to pay for 10 tickets?");
    while (userInput1 !== "a"){
    if (userInput1 !== "a")
        console.log("Reeper: Try again or i must take your soul!");
        userInput1 = readline.question("if (A). $12.00 (B). $13.00 (C). $15.00 :PLEASE TYPE THE LETTER THAT CORRESPONDS WITH YOUR ANSWER!:");
    }
    if (userInput1 === "a"){
        console.log("Reeper: You May Enter");
        doorSelction4()
    } 
    return space;
}






function doorSelction4(space = "...")  {
    let userInput;
    console.log("Reeper:Ha! your sould will be mines soon!")
        userInput = readline.question("Reeper: Which chamber would you like to enter? Type (1) for chamber one or Type (2) for chamber two:");
    if(userInput === "1"){
        door7();
    } else {
        door8();                      
    }
    return space;
}
console.log(doorSelction4());
        














