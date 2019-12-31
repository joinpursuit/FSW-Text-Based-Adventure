const readline =  require("readline-sync");
const play = () => {
    console.log("You wake up, feeling a sharp cold wind, and find yourself in the middle of a ragging storm.")
    let userInput;
    while(userInput!== "yes"){
       userInput = readline.question("Do you try to find shelter? Yes or no?")
       if(userInput.toLowerCase() === "yes"){
           continued()
       }
    }

}
play()
// stormlight backdrop
// be in the middle of a storm
// find shellter or die
// once find shelter find spren and bond with it
// if you don't bond with it it flees and you wait until morning in the morning found by enemy soldiers
//choose to run or fight
//if fight die
// if run encounter spren again.
// combine with first choice 
//once combine with spren talk set for loop to decide on abilities
// for loop is to combine hightenings and unlocks more abilities
//push new abilities into array 
//2 inital abilities for this the ability to see in color and the ability to breath life into objects. 