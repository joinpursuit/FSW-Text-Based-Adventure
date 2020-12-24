const readline= require('readline-sync')

let yourVariableHere = readline.question("Enter your name: \n ")
 console.log( "Hello " + yourVariableHere + " It's a pleasure to have you here!")
  console.log("Welcome to Traveling the World in 80 Days!")

const startGame = () => {
let user = readline.keyInYN("Do you wanna play \n")
 if(user){
    console.log("Let's play")
        gameHistories()
  }else{
        console.log("Have a nice Day "  + yourVariableHere)
        quitGame()
    }
}    


const playloop = () => {
    console.log("Sweden", "Canada", "China", "Haiti", "Brazil", "Austria", "Greece", "Chile", "Colombia", "Cuba")

    let answer = readline.question(yourVariableHere + " Where would you like to go \n" )  
    let countries = ("Sweden", "Canada", "China", "Haiti", "Brazil", "Austria", "Greece", "Chile", "Colombia", "Cuba")
    let choice = "Canada"
    for( let i = 0; i > contries;i++ )
    choice(contries[i])
   if(answer = choice) {
    console.log("Amazing" + "Let's go to Canda")
    canadaTrip()
   }else{
       console.log("Sorry" + yourVariableHere)
       console.log("Unfortunally we don't have more tickets to Canada")
       console.log("However we still have others destinations")
       playloop()
   }
   
} 


const gameHistories = () => {
    console.log(" June 28, 1856")
    console.log(" Welcome to the airport " +  " MATIAS PEREZ ")
    console.log(" In this game you will have the opportunity to travel and learn more about the culture, and traditions of different countries.")   
    console.log(" To achieve this you will have to make decisions and choose what things you want to know and from where " )
    console.log( " Regardless of how much you learn from these countries, you will earn points that you can accumulate to obtain a discount on the tickets you can buy for other trips ")
    console.log(" If you are ready, go to the other platform to obtain your flight ticket. ")
    
    let answer = readline.keyInYN("Are you ready? \n")  
    if (answer) {
        console.log( " Let's travel" )
        playloop()
    }else{
        console.log(" Come back when you're ready ")
        quitGame()
    }
}

const canadaTrip =() =>{
    let attractions = ("Historia", "Tradiciones", "Religions"," Holidays"," Cuisine"," ")
}



const quitGame = () => {
    console.log("GoodBye" + yourVariableHere)
    process.exit()
}

startGame()