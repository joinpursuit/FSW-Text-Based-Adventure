const readline = require('readline-sync')
// console.log(typeof Number(number))


let nameInput = readline.question("Enter your name: ")
console.log(`Hello ${nameInput}!  May the odds be ever in your favor. Let the games begin ! `)

let age = readline.question("How old are you?  ")
    if (age >= 0) {
        console.log("You’re never too young for the game  "); 

} 
const district= readline.question("pick a district from 1 - 3  ") 
switch (`${district}`) {
    case "1" :
        console.log("Luxory District, Welcome!")
    break;
    case "2":
        console.log("Masonary District, Welcome!")
      break;
    case "3":
        console.log("Technology, Welcome")
      break;
      default:
        console.log("You are outcasted, welcome to District Reject! ")

  }
  


let tributeAnswer = readline.question("Do you volunteer as tribute. Yes or No?  ")
    if (tributeAnswer === "yes" ) {
        console.log("Say goodbye to your family! ")
    } else if(tributeAnswer  === "no"){ 
        console.log("Your sister and bestfriend will be joining you in the game. Say your goodbyes! ")
} 

let faith = readline.question("Are you ready to see where fate takes you? Yes or No? ")
    if (faith === "yes"){
        console.log("You must enter the back room and you will meet Tink. Tink is not a friend but more so a head sponsor of the games. ")
        console.log("As well we have Miles here, as another head sponsor. They will be assisting with the game. ")
        console.log("You now have left behind all your possesions, follow Tink and Miles on to the train to destination battlegrounds. ")
        console.log("We have finally arrived. You must now pick a door 1 or 2 and see what's behind the door. ")
     } else if(faith === "no") {
                console.log("You now have no sponsors")
                console.log("We have finally arrived. You must now pick a door 1 or 2 and see what's behind the door. ")
            
        }


 whichDoor = readline.question("Which door would you like to enter, door 1 or door 2? ")
    if(whichDoor === "1"){
        console.log("Behind this door you have found yourself surrounded by a pit of fire.")
        console.log("If your survive all three phases of the game, you will be the victor. ")
        console.log("Countdown")
    } else if(whichDoor === "2"){
        console.log("Behind this door you have found yourself with no sponsors") 
        console.log("You willl have to try to beat the game without a sponsor")
        console.log("Countdown!")
        
}

for (let i=10; i >= 0; i--){ 
console.log(i);
}



let strike =  0;
const addStrike = (num) => {  
    strike += num;
    console.log("strike " + num)
} 



console.log("")
console.log("***_***-***_***-***_***-*** LET THE GAME BEGIN !!!!! ***-***_***-***_***-***_***")
console.log("")
console.log("Your knowledge will be put to the test! ")


let phaseOneQ1 = readline.question("How many dots are on two dice? ") 
if(phaseOneQ1 === "42"){
    console.log(" CORRECT! ")}
        else if(phaseOneQ1 !== "42"){
            addStrike(1)
        
    }
    
    let i = 0, out = " ";
      while( i <= 9)
         {
           out = out + '* ';
           console.log(out);
          i++;
        } 
        let phaseOneQ2 = readline.question("How many asteriks in are above. ")
            if(phaseOneQ2 === "55") {
                console.log("CORRECT! You move on to Phase two")
            } else {
                console.log(" WRONG ")
                addStrike(2)
            }

    console.log("")
    console.log("***_***-***_***-***_***-*** LET PHASE TWO BEGIN !!!!! ***-***_***-***_***-***_***")
    console.log("")
    console.log("You have now moved on to Phase Two. Please be aware you decision will lead your fate. ")
    console.log("You are now released into the jungle!")

    let phaseTwoQ1 = readline.question("Where would you like to go left, right?")
    if(phaseTwoQ1 === "right") {
        console.log("You've moved to the right to find your bestfriend already dead! ")
        console.log("However theres a little girl Vee remaining and you twp are the only ones left.")
        console.log("However only 1 can survive the game. You must make the decision to kill her or sacrafice yourself.")
    } else if (phaseTwoQ1 === "left"){
                console.log("You've moved to left only to fall into a boobie trap!")
                console.log("A dark cloud now lays about you!! ")
                console.log("DOWN POURS THE RAIN! ")
                console.log("IT BURNS!!, It's a chemical rain cloud. ")
                console.log("You, are badly hurt and see your bestfriend still alive")
                console.log("Annoucement has been made **ONLY TWO REMAINING")
                console.log("Your bestfriend helps you out of the boobie trap.")
                console.log("Only for you to look up and find drone flying past you and drops a message") 
    }
      

let finalAnswer = readline.question("Will you be willing to sacrifice yourself or will you spare your life for the other. Sacrafice or Spare?")
if(finalAnswer === "Sacrifice") {
    console.log("You are selfless, and we will spare your life as well")
    console.log("You both WIN. Count your blessings. ")
} else {
    console.log("SELFISH! You will pay the price, you will both die. ")
    addStrike(3)
    console.log(`Both ${nameInput} and reamining player get attacked by the chemical rain.`)
    console.log("DEATH! Game Over!")
}

