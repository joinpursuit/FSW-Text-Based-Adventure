 const { Console } = require('console')
const { monitorEventLoopDelay } = require('perf_hooks')
const readline = require('readline-sync')
const { start } = require('repl')
 const startGame = () => {
     play()
 }
 const leaveGame = () => {
   console.log("It's been a pleasure. Bye Bye!")  
 }
 
 
//  const { quitGame } = require('../Guessing-Game-cli-lab/game')
//  let yourVariableHere = readline.question()
// let nameInput = readline.question("And your name dear?: ")
//let nameInput = readline.question("Enter your name: ")

// function investment(type, amount){}
// function bidAmount(){}
// function randomNumber(number){
//     return Math.floor(Math.random * 100)
// }

// // let pause = setTimeout(function() {
// //     alert('Hello, Mr. Universe!');
// //   }, 2000)



// while (true) {
//     input = readlineSync.prompt();
//     console.log('-- You said "' + input + '"');
//     if (input === 'bye') {
//       break;
//     }
//   }



    // setTimeout(() => console.log(beginingDialogue), 1000)
 
    const introduction = () => {

    console.log('Greetings. My name is Debonaire.')
    let nameInput = readline.question("And your name dear?: ")
    console.log(`${nameInput}, ...${nameInput} I think I knew a ${nameInput} once.`,'Peculiar indivisual')
    console.log("Anyway. I am  your long lost cousin's brother's aunt. Three times removed. Or something of that sorts.")
    console.log("My point is, you're family. And as family, I've been instructed to give you a portion of the family's wealth")

    let playGame = readline.question("Are you interested in a portion of our family's wealth?:")
    console.log(playGame)
    if(playGame = 'yes'){console.log("Of course you are. Who doesn't love free money")} else if (playGame = 'no') {
        console.log("That's okay, I have a proposition for you either way")
} else { console.log(playgame)}


console.log("Unfortuantely, I can't just hand over the money, my dear. At least not without knowing if you're responsible enought to handle it")
console.log("You'll have to prove yourself. ")
console.log("How do you prove yourself? I am glad you asks")
console.log(`I have a test for you, ${nameInput}. A game, if that suits you better`)

if(readline.keyInYN('Do you want to play?')){
    play()
} else{
    leaveGame()
}
}
    

const rules = () =>{
            console.log('Okay, here are the rules. You can choose to invest or save your money. You have 15 days to make $5000 or more.')
            console.log("When you are ready to invest you can enter investment type plus amount. Example stocks 2 dollars. Or you can choose not to invest by typing the word 'bank'.")
            console.log('Good Luck!')
        }
        rulesInstructions()
        rules()
        

const investmentsHelp = (bid)=>{
      switch(bid){
          case stocks:
              console.log('Stock of a corporation is all of the shares into which ownership of the corporation is divided. A single share of the stock represents fractional ownership of the corporation in proportion to the total number of shares.')
          break;
          case bonds:
              console.log('In finance, a bond is an instrument of indebtedness of the bond issuer to the holders. Bonds can be in mutual funds or can be in private investing where a person would give a loan to a company or the government.')
          break;
          case options:
              console.log('In finance, an option is a contract which conveys its owner, the holder, the right, but not the obligation, to buy or sell an underlying asset or instrument at a specified strike price prior to or on a specified date, depending on the form of the option')
          break;
          case annuities:
              console.log('An annuity is a financial product that pays out a fixed stream of payments to an individual, and these financial products are primarily used as an income stream for retirees.')
          break;
          case precious-metals-ira:
              console.log('Precious metals IRA is an Individual Retirement Account in which physical gold or other approved precious metals are held in custody for the benefit of the IRA account owner. It functions the same as a regular IRA, only instead of holding paper assets, it holds physical bullion coins or bars.')
          break;
          case mutual-funds:
              console.log('A mutual fund is an open-end professionally managed investment fund that pools money from many investors to purchase securities.')
          break;
          case reit:
              console.log('A real estate investment trust is a company that owns, and in most cases operates, income-producing real estate.')
          break;
          case cryptocurrency:
              console.log('A cryptocurrency is a digital or virtual currency that is secured by cryptography, which makes it nearly impossible to counterfeit or double-spend.')
            break;
          case forex:
              console.log('Foreign Exchange (forex or FX) is the trading of one currency for another.')
            break;
          case ipo-stocks:
              console.log('An initial public offering (IPO) refers to the process of offering shares of a private corporation to the public in a new stock issuance.')
            break;
          default:console.log('Please check your spelling and re-type in your investment choice in all lower case letters.')
          investmentsHelp(bid)
      }
      play()
    }

introduction()
    const play = () => {
        rules()
       morningGreeting()
      


    if(userInput = 'bank'){
        deposit = deposit + profit

        eveningGreeting()
    }
}
function eveningGreeting(){
    console.log("You worked all day. It is now 3:59.")
    let marketClosed = readline.question("What do you want to do with your money?")
}
function morningGreeting(){
    console.log("Its 9:29am. Markets open at 9:30am")
    let marketOpen = readline.question("What will you invest in today?")
console.log('*The morning sunlight hits your eyes as Debornaire opens the curtains to yoru bedroom. \n Good Morning Sunshine. You didn\'t think I would abandon you on your journey to riches, did you? Of course not!')
const breakfast = () => {
    breakfastFoods = ['Eggs', 'Cereal', 'Spinach']
    index = readlineSync.keyInSelect(breakfastFoods, "I've made breakfast for you! which breakfask would you like?:") 
    if(breakfastFoods === 'eggs'||breakfastFoods === 'Eggs' ){
        console.log('Delicious')

    } else if (breakfastFoods === 'Cereal' || breakfastFoods === 'cereal'){
        console.log('Buget food. Perhaps you can work on changing old habits')
        // subtract 10 dollars from daily balance

    } else if (breakfastFoods === 'Spinach' || breakfastFoods === 'spinach'){
        Console.log('Great choice! The food of wealth.')
        // Add 10 dollars to daily balance

    } else {
        command = readlineSync.prompt({
            limit: ['add', 'remove'],
            limitMessage: 'Refused $<lastImput>  you requested. Please input another.'
        })
    }
}
}

function randomInvestingResponse(){
    
}
// function randonBankingResponse(){}
// function bankAccount (money){
//     return savedAmount + investmentGains
//     console.log()
// }


function rulesInstructions(){
    console.log('So, Its simply. Ill give you $500.\n You can bank it or you can invest it. Either way, you have 15 days to turn that $500 into $5000 or more.')
    console.log('Each day you will be given a chance to choose what you want to invest in for that day and how much money you want to invest. Remeber, you dont have to invest')
    console.log('I should warn you; Investment can be tricky. You can earn money or lose it. Different investment options have differnt perks, payouts times and consequences. So invest wisely.')
    console.log("If by the end of day 15 you have $5000 dollars or more, You will recieve your share of the familie's wealth.")
    console.log('However, make $4999 or less and....well....lets say youll win the right to grind the 9-5 like all the other saps')
    console.log("Again, choose wisely. You can get a brief explaination of each investment type by entering '?' and the type of investment. Example ?Stocks")
    console.log("When you are ready to invest you can enter investment type plus amount. Example stocks 2 dollars. Or you can choose not to invest by typing the word 'bank'.")
    console.log("You can also type in 'rules' to get a reminder of the rules")
    console.log(" Well, thats all. Happy Investings!")

}
// var readlineSync = require('readline-sync'),
// investments = ["Stocks", "Bonds", "Options", "Annuities", "Precious-Metals", "Mutual-Fund", "Real-Estate", "REIT", "Cryptocurrency", "Forex", "IPO stocks"],
//   index = readlineSync.keyInSelect(investments, 'Which invesetment type');
// console.log('okay, ' + investments[index] + ' is your investment of choice!')




//Produces a visual ranger a user can slide back and forth
// An UI like the Range Slider:
// (Press Z or X key to change a value, and Space Bar to exit)
// var readlineSync = require('readline-sync'),
//   MAX = 200, MIN = 0, value = 30, key;
// console.log('\n\n' + (new Array(20)).join(' ') +
//   '[Z] <- -> [X]  FIX: [SPACE]\n');
// while (true) {
//   console.log('\x1B[1A\x1B[K|' +
//     (new Array(value + 1)).join('-') + 'O' +
//     (new Array(MAX - value + 1)).join('-') + '| ' + value);
//   key = readlineSync.keyIn('',
//     {hideEchoBack: true, mask: '', limit: 'zx '});
//   if (key === 'z') { if (value > MIN) { value--; } }
//   else if (key === 'x') { if (value < MAX) { value++; } }
//   else { break; }
// }
// console.log('\nA value the user requested: ' + value);


// prosperity-game name OR Bank or Bust


//randomly generate number
// Math.floor(Math.random()* 100)
// console.log(startGame())
// end game
const quitGame = () => {}

//game loops
//const gameLoop = () => {}

// start game
