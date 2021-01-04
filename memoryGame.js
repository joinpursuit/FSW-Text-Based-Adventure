const rls = require('readline-sync')

// let nameInput = rls.question("Enter your name: ",, {hideEchoBack: true})

// console.log(`Hello ${nameInput}!  Welcome to my game.`)

let poss ="1234567890"
let arr =[]
let userAns 
let gameArr = [];


const gameLoop = () => {
    let tries = 2;
    console.log(`
    _____**Todays game is a small memory test!**_____
    that will allow you to pick two slots out of nine nine slot table and it will check whether 
    they match and although it wont let you see what it is real value it will 
    tell you which one is higher and which one is lower of the two values
    ...The catch is you only have a limited amount of tries...(10)`)
    
    let str = rls.question("Please enter four single-digit numbers in a row \n") //will add non repeating later on
   
    
    while( tries > 0){
        if( correctOriginal(str)){
            
            gameArr = gameArrayAssign(arr)
            console.log("Now your numbers have been duplicated and randomly assigned")
            console.log("to an empty line with 8 available slots")
            console.log("Now we are dealing with 8 numbers which are in a random order \n")
            

            let answer = correctInput(userInput())
            console.log(answer)

        
        }else{
            console.clear()
            console.log("Lets read the instrctions again")
            gameLoop()
        }
        tries--
        console.log("OH Oh! You have the following amount of tries: " + tries )
    }

    restart()    
}

const startGame = () =>{
    if(rls.keyInYN("Would you like to play a memory test?")){
        console.log("Cheers! , Lets kick it")
       gameLoop()
     }else {
       console.log("Not up for it? No worries")
       endGame()
     }
}

const endGame = () => {
    console.log(" Try harder next time, lets fight aging by playing more memory games!")
    process.exit()
}

const correctOriginal =(str) =>{
    if(str.length === 4){
    let arrStr = str.split("")
    arr = arrStr.map(String)
    console.log(typeof arr)    // to test 
    console.log(arr)            // to test 
        for( i = 0; i< arr.length; i++){
            if(poss.includes(arr[i])){

                for(i = 1 ; i < arr.length; i++){

                    if (arr[0]===arr[i]){

                        console.clear()
                        console.log("Typo? if not, lets read the fineprint too!")
                        gameLoop()
                    } 
                }
            }else{

                console.log("Only numbers please now you have to start all over!")
                gameLoop()
            }
        }
        return arr
    }    
    
}

const gameArrayAssign = (arr) =>{
    console.log(shuffleArray(arr.concat(arr)))       // to test
    return shuffleArray(arr.concat(arr))
     
}

const shuffleArray = (arr) =>{
    for ( i = arr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = arr[i];
        arr[i] = arr[j]
        arr[j] = temp
        return arr 
    }
}


const userInput = () => {
    userAns = rls.question("enter the possible order of the new list of numbers \n")
    console.log(typeof userAns)             // to test purposes
    return userAns
}


// this function checks if the inputted values from the user are of the correct length 
const correctInput = (userAns ) => {       
    tempo = userAns.split("")
    for(i = 0; i < tempo.length; i++){
        userAns = tempo.map(String)
        console.log(userAns)                    //testing
        if(poss.includes(userAns[i])){    
            if(userAns.length > 8){
                console.log("the amount of values is too much")
                userInput()
            } else if(userAns.length < 8){
                console.log("the amount of values is too little")
                userInput()
            }else{
                return  userAns
            }
        } else{
            console.log("Only numbers please")
            userInput()
        }    
    }    
}

const checkCorrect =() => {
//checks to see if the order we randomized is equal to the order provided by user 
}

const closerOrNot =() => {
    // lets user know if combination is closer to the answer than the previous entry or not
}

const restart = () => {
    if(rls.keyInYN("You made it to the other side, want to try play again?")){
        console.log("Lady luck might not be with you this time, nonetheless goodluck!")
       gameLoop()
     }else {
       console.log("Rest is important")
       endGame()
     }
}
startGame()
