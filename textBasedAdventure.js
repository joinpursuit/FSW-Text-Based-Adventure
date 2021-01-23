const readline = require('readline-sync')
// previous code: let nameInput = readline.question("Enter your name: ")



const play = () => { 
    if(readline.keyInYN("Would you like to enter this coffee shop?")){
        startGame()
    }
    else{
        console.log("Ok! Maybe next time.")
        endGame() 
    }

}

const endGame = () => {

    console.log("Goodbye!")
    process.exit()
}

const startGame = () => {

    let nameInput = readline.question("Please enter your name: ")

    console.log(`Hi ${nameInput}! Welcome to The Village Coffee Shop. We pride ourselves on providing excellent service and education to our customers. We're going to ask you some questions about how you'd like your coffee.`)


    let coffeeYesNo = readline.keyInYN("Have you ever had a freshly-ground cup of coffee before?")
        
    function coffeeFunction(){
        if(coffeeYesNo === true){

            console.log("That's fantastic.")
        }
        else if(coffeeYesNo === false){
            console.log("Ok, first time! That's exciting! Here at The Village Coffee Shop, we grind the beans for every cup and then use a pour-over method to make your coffee.")
        }
    }
    
    coffeeFunction()

    if(coffeeYesNo !== true && coffeeYesNo !== false){

        console.log("I'm sorry, that's not a valid response. Try again.")
        coffeeYesNo = readline.keyInYN("Have you ever had a freshly-ground cup of coffee before?")
        coffeeFunction()
    }
                
    let allergies = readline.keyInYN("Do you have any food allergies we should know about?")



    if(allergies !== true && allergies !== false){

        console.log("I'm sorry, that's not a valid response. Please try again.")
        allergies = readline.keyInYN("Do you have any food allergies we should know about?")

    }


    let roastType = readline.question("What kind of roast would you like? Light, medium, or dark? Type your response in all lowercase letters.\n")




    function stringTest(){            
                    
        if(roastType === "light"){
            console.log("Excellent. Our Farmer's Roast is our light roast.")
        }
        else if(roastType === "medium"){
            console.log("Excellent. Our Central American Blend is our medium roast.")
        }
        else if(roastType === "dark"){
            console.log("Excellent. Our Ethiopian Wake Up Blend is our dark roast.")
        }

    }

    stringTest()

    if(roastType !== "light" && roastType !== "medium" && roastType !== "dark"){
        console.log("I'm sorry, that's not a valid response. Try again.")
        roastType = readline.question("What kind of roast would you like? Light, medium, or dark? Type your response in all lowercase letters.\n")
        stringTest()
    }
    function instructions(){


        function instruction2(){
            console.log("The grounds will fall directly into this paper filter.")
        }
        function instruction3(){// wait 5 seconds
            console.log("Now, we use this chemex. Think of it like an hourglass, but for making coffee.")
        }
        function instruction4(){ // wait 10 seconds
            console.log("Now I’m going to take this water (kept at a temperature of 200°F), and slowly pour it over the grains. Note that 200 is below boiling. You don’t want it that hot.")
        }
        function instruction5(){ // wait 5 seconds
            console.log("I’ll let it steep for 30 seconds to get the grounds wet, and then I’ll start mixing it with this spoon.")
        }
        function instruction6(){ // wait 10 seconds
            console.log("Notice, now, as I’m mixing the water and the grounds, how the color of the water is changing inside the chemex. It’s getting darker.")
        }

      
        instruction2()
        instruction3()
        instruction4()
        instruction5()
        instruction6()

    }
    
    if(coffeeYesNo === false){

        console.log("Let me walk you through our process, since it’s your first time. First we take the beans, and then we put them into this grinding machine. We want the consistency of the grind to be somewhat coarse, but not too much. Otherwise the water will run right through, and your coffee will be watery.") //wait 10 seconds
        
        instructions()

        trickQuestion()

        function trickQuestion(){

            let coolRight = readline.keyInYN("Cool, right?")

            if(coolRight === false){
                console.log("Leave this place.")
                process.exit()
            }
               
            if(coolRight !== true && coolRight !== false){
                console.log("I'm sorry, that's not a valid response. Try again.")
                trickQuestion()
            }

        }

    }



    
    let milk = readline.keyInYN("Would you like room for milk?")

        //example: readline.question("Please enter your name: ")

    let sugarNum = readline.questionInt("How many sugars would you like? (Max 10)\n")

    

    if(sugarNum < 0 || sugarNum > 10){
        console.log("I'm sorry, that's not a valid response. Please try again.")
        sugarNum = readline.questionInt("How many sugars would you like? (Max 10)\n")
    }

    

    if(milk === true){
        milk = "room for milk"
    }
    else if(milk === false){
        milk = "no room for milk"
    }

    

    console.log(`Ok! You're all set. You ordered a ${roastType} roast with ${milk} and ${sugarNum} sugars. That will be five dollars. Milk is over at that counter. `)

    let donation= readline.keyInYN("Before you go, would you like to donate money to hungry families today?")

    if(donation === true){
        console.log("Amazing. Thank you very much.")
    }
    else if(donation === false){
        console.log("Not a problem.")
    }


    function playAgainYN(){
        let playagain = readline.keyInYN("Thank you for visiting The Village Coffee Shop. Would you like to play again?")
         if(playagain === true){
            console.log("You got it!")
            startGame()
        }
        else if(playagain === false){
            console.log("Thanks again. Until next time.")
            endGame()
        }

    }

    playAgainYN()

}
play()









//make sure that errors keep running a loop until the user gives the right input. This probably means I need to do a for or while loop. 

//fix sugars() function so that it only takes numbers that are between 0-10 

//get setTimeout() to work, or find another way to do timed console.log()s for the coffee instructions. For now, I'm just doing a regular console.log, 
//all at the same time.

// setTimeout(instruction2, 10000)
// setTimeout(instruction3, 5000)
// setTimeout(instruction4, 10000)
// setTimeout(instruction6, 10000)


//after interracting with the staff, create interractions with other customers.

//note: for this following section, it might make sense to describe what's happening to the user before the 
//question just pops up. 

//Someone walks up to you and asks you for a pen. 
//"Excuse me, do you happen to have a pen?"Y/N
// if yes, "Can I keep it?"y/n
//if no, they respond, I never liked you anyway. 

//Someone strange approaches you. 
//they ask: Do I know you? 


//Someone walks up to you asking for money. 
//Do you have any spare change?Y/N
//if yes, "God bless" is their response
//if no, ok, maybe next time. 

//Someone has recognized your beauty and would like your digits. 
//I think you're cute. Can I have your number?Y/N
//If no, console.log("The person looks mortified. They run away.")
//If yes, you have made this person's day. They look very happy. 



