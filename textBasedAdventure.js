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
    let choice2 = "Haiti"
    for( let i = 0; i > countries;i++ )
        choice(countries[i])
      if(answer === choice) {
         console.log("Amazing" + " Let's go to Canada")
         canadaTrip()
        }else if( answer === choice2){
             console.log("Amazing" + " Let's go to Haiti")
             haitiTrip()
            }else{
             console.log("Sorry " + yourVariableHere)
             console.log("Unfortunally we don't have more tickets" )
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
    console.log("History", "Traditions", "Religions"," Holidays"," Cuisine"," Place to Go")

    let answ = readline.question(yourVariableHere + " What would you like to know \n" )
    let attractions = ("History", "Traditions", "Religions"," Holidays"," Cuisine"," Place to Go")
    let choice = "History"
    let choice2 = "Traditions"
    let choice3 = " Religions"
    let choice4 = " Holidays"
    let choice5 = " Cuisine"
    let choice6 = " Place to Go"
    for( let user = 0; user < attractions; user++)
         choice(attractions[user])
       if(answ === choice) {
           historiaView()  
        }else if(answ === choice2){
              traditionsView()
            }else if(answ === choice3){
                   religionsView()
                }else if(answ === choice4){
                      holidaysView()
                    }else if(answ === choice5){
                           cuisineView()
                        }else if(answ === choice6){
                              placeToGoView()
    }

}

const haitiTrip =() =>{
    let attractions = ("History", "Traditions", "Religions"," Holidays"," Cuisine"," Place to Go")
}


const traditionsView = () => {
    console.log("Historia")
    let halloween = "Although people around the world celebrate Halloween, it’s a big deal in Canada. Between 2004 and 2014, the commercial revenue from the holiday doubled. The Retail Council of Canada estimated that in 2014, Halloween became a billion dollar industry in Canada alone.In Vancouver, the only time residents can legally set off fireworks in their backyard is on Halloween. Permits must be obtained, and people must be over 19 to buy and set off the fireworks. But this tradition means the city gets very loud on Halloween night."
    let newYearsLevee = "A dated European tradition, Canada is now the only country that participates in the New Year’s Levee. The tradition began in Canada in the 1600s. It’s an event held by each province’s lieutenant governor and the governor general to mark the start of a new year and to allow citizens to pay their respects.In Edmonton, for example, residents can tour Government House, enjoy refreshments and send a postcard to Canadian troops serving overseas. It’s also a tradition in the units and headquarters of Canadian Forces, where officials receive and greet guests to welcome in the new year."
    let calgaryStampede = "The Greatest Outdoor Show on Earth”—that’s the Calgary Stampede, an annual extravaganza that happens every July in Calgary, Alberta.The Stampede’s core purpose is “to preserve and celebrate western heritage, culture and community spirit.” They celebrate through concerts, rodeo events (with big money prizes), carnival rides, exhibitions, a parade, and agricultural competitions. The Stampede is one of Canada’s biggest traditions, as over one million people from around the world visit every year."
    let newShoesonBudgetday = "This tradition is an unusual one that involves the Canadian Minister of Finance, and now provincial finance ministers, wearing new shoes to deliver the new budget. Its roots can be traced back to 1960 when Donald M. Fleming followed the practice after the media described it as traditional.But in 1966 when Mitchell Sharp wore new shoes on budget day, he learned there was no tradition behind it at all. Nevertheless, the custom has continued to the present day. In 2016 and 2017, Finance Minister Bill Morneau wore new black lace-up shoes for both of his deliveries, which were each made by different Canadian designers."
    let thanksGiving = "Canada has its own Thanksgiving tradition, which is slightly different to its American counterpart. Turkey and pumpkin pie are still both centerpieces of a Thanksgiving meal in Canada. However, the date is always the second Monday in October, and it’s a statutory holiday across the nation, except for in the Atlantic provinces.Thanksgiving was celebrated on different days and for different reasons until January 31, 1957, when Canadian Parliament said: “A Day of General Thanksgiving to Almighty God for the bountiful harvest with which Canada has been blessed…to be observed on the second Monday in October."
}
const historiaView = () => {
    console.log("Historia")
}

const religionsView = () => {
    console.log("regl")
}
const holidaysView = () => {
    console.log("Labour Day")
}
const cuisineView = () => {
    console.log("plato")
}
const placeToGoView = () => {
    console.log("playa")
} 

const quitGame = () => {
    console.log("Good Bye " + yourVariableHere)
    process.exit()
}

startGame()