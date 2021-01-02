 const { Console } = require('console')
const { monitorEventLoopDelay } = require('perf_hooks')
const readline = require('readline-sync')
const { start } = require('repl')
const colors = require('colors');
const chalk = require("chalk");
const { read } = require('fs');
const { kStringMaxLength } = require('buffer');


const stringOne = 'This is a plain string.';
const stringTwo = 'This string is red.'.red;
const stringThree = 'This string is blue.'.blue;
const today = new Date().toLocaleDateString(); // returns today's date in mm/dd/yyyy format

console.log(stringOne.black.bgMagenta);
console.log(stringOne.yellow.bgRed.bold);
console.log(`Today is: ${today}`.black.bgGreen);

console.log(stringTwo);
console.log(stringThree);

console.log(stringTwo.magenta);
console.log(stringThree.grey.bold);




// const fruitFunction = () => {
//     array = ['Eggs', 'Cereal', 'Spinach','Bacon']
//     console.log("What is your favorite fruit?")
//     fruitChoice = readline.keyInSelect(array)
//     // fruitChoice === array[fruitChoice]
//     if(fruitChoice === 1){
//         console.log(chalk.greenBright('Delicious'))
//             } else{
//         console.log(chalk.green('Buget food. Perhaps you can work on changing old habits'))
//         // subtract 10 dollars from daily balance

//             }
// }
// fruitFunction ()


const investmentsHelp = (bid)=>{
    switch(bid){
        case stocks:
            console.log('Stock of a corporation is all of the shares into which ownership of the corporation is divided. A single share of the stock represents fractional ownership of the corporation in proportion to the total number of shares.')
            return 100
        break;
        case bonds:
            console.log('In finance, a bond is an instrument of indebtedness of the bond issuer to the holders. Bonds can be in mutual funds or can be in private investing where a person would give a loan to a company or the government.')
            return -500
        break;
        case options:
            console.log('In finance, an option is a contract which conveys its owner, the holder, the right, but not the obligation, to buy or sell an underlying asset or instrument at a specified strike price prior to or on a specified date, depending on the form of the option')
            return -200
        break;
        case annuities:
            console.log('An annuity is a financial product that pays out a fixed stream of payments to an individual, and these financial products are primarily used as an income stream for retirees.')
            return 50
        break;
        case precious-metals-ira:
            console.log('Precious metals IRA is an Individual Retirement Account in which physical gold or other approved precious metals are held in custody for the benefit of the IRA account owner. It functions the same as a regular IRA, only instead of holding paper assets, it holds physical bullion coins or bars.')
            return 300
        break;
        case mutual-funds:
            console.log('A mutual fund is an open-end professionally managed investment fund that pools money from many investors to purchase securities.')
            return -100
        break;
        case reit:
            console.log('A real estate investment trust is a company that owns, and in most cases operates, income-producing real estate.')
            return -100
        break;
        case cryptocurrency:
            console.log('A cryptocurrency is a digital or virtual currency that is secured by cryptography, which makes it nearly impossible to counterfeit or double-spend.')
            return 500
          break;
        case forex:
            console.log('Foreign Exchange (forex or FX) is the trading of one currency for another.')
            return 500
          break;
        case ipo-stocks:
            console.log('An initial public offering (IPO) refers to the process of offering shares of a private corporation to the public in a new stock issuance.')
            return 1000
          break;
        default:console.log('Please check your spelling and re-type in your investment choice in all lower case letters.')
        investmentsHelp(bid)
    }
    play()
  }

say = '...says the stranger.'



let balance = 2000


 const startGame = () => {
play()
 }
 const leaveGame = () => {
   console.log("It's been a pleasure. Bye Bye!")  
   process.exit()
 }
 const quitGame = () => {
    leaveGame()
 }

 
 const gameLoop = () => {

 }
let amount = ''

 const investmentTypes = () => {
    investments = ["Stocks", "Bonds", "Options", "Annuities", "Precious-Metals", "Mutual-Fund", "Real-Estate", "REIT", "Cryptocurrency", "Forex", "IPO stocks"],
      index = readline.keyInSelect(investments, 'Which invesetment type');
    console.log('Nice! ' + investments[index] + ' is your investment of choice!')
    return investments[index]
    }

let day = 1
    const today2 =(day)=>{
        day = 1
        let message = ''
    while(day <= 1){
        let randomNum = Math.floor(Math.random()* 100)
        if(randomNum % 10 === 0){
            message = "Rule number one: Don't lose money"
        } else if(randomNum % 5 === 0){
            message = '"The stock market is filled with individuals who know the price of everything, but the value of nothing."'
        } else if(randomNum % 2 === 0 && randomNum < 30){
            message = '"An investment in knowledge pays the best interest."'
        } else if (randomNum % 2 !== 0 && randomNum < 50) {
            message = '"Know what you own, and know why you own it."'
        } else if (randomNum % 2 !== 0 && randomNum > 50){
            message = '"Derivatives are financial weapons of mass destruction."'
        } else if (randomNum % 3 !== 0){
            message = 'Use the day wisely'
        } else{
          message ='"Everyone has the brainpower to make money in stocks. Not everyone has the stomach.”'
        }
    
        console.log(`Good Morning, Today is day ${day}. \n ${message}.`)
        morningGreeting()
        onTheJob()
        lunchBreak()
        endOfDay()

        day = day + 1
    }
    return message
    }

    

    const breakfast = () => {
        breakfastFoods = ['Eggs', 'Cereal', 'Spinach','Bacon']
        let index = readline.keyInSelect(breakfastFoods, "I've made breakfast for you! which breakfask would you like?:") 
    if(index === 0){
        console.log(chalk.greenBright('Delicious'))
            } else if (index === 1){
        console.log(chalk.green('Buget food. Perhaps you can work on changing old habits'))
        // subtract 10 dollars from daily balance

            } else if (index === 2){
        console.log(chalk.greenBright('Great choice! The food of wealth.'))
        // Add 10 dollars to daily balance

            } else if(index === 3){
                console.log(chalk.green('Mmmm..Bring home the bacon!'))
            }else {
        command = readline.prompt({
            limit: ['eggs', 'cereal', 'spinach', 'bacon'],
            limitMessage: `I can not accept ${index} . Please input another.`
        })
    }

    }
    
    const morningGreeting = ()=>{
        let balance = 1800
        morning = 'The morning sunlight of a new day hits your eyes as Debornaire opens the curtains to your bedroom, waking you up.'
        readline.keyInPause(morning.italic)
            console.log(chalk.greenBright("Good Morning Sunshine. You didn't think I would abandon you on your journey to riches, did you? Of course not!"))
        // console.log(chalk.greenBright('Today is ${day}: ${today2}'))
            
        breakfast()


        watch = 'Debonaire checks her watch'
        readline.keyInPause(watch.italic);
        console.log(chalk.greenBright(`It's 9:29am. Markets open at 9:30am. Your current balance is ` + mathFun(balance)))
        let moolah =readline.question(chalk.greenBright('Would you like to bank your money?'))
        if(moolah === 'yes'){
        console.log(chalk.greenBright('Okay, Your money will survive long enough to fight another day'))
        console.log(mathFun(balance))
            } else{
        readline.keyInPause(chalk.green("Okay, What will you invest in today?"))
        
        let holdMessage = readline.question(chalk.green(`And how much money do you want to invest in ${investmentTypes()}? `))
        console.log(chalk.greenBright(`So you want to invest ${holdMessage} dollars in ${investmentTypes(index)}?`))
        
        // balance = 500
        // balance = balance - holdMessage
        readline.keyInPause(chalk.greenBright(`You now have ${balance} dollars left after purchasing ${holdMessage} dollars worth of ${investmentTypes(index)}.`))
            }
            
}
    


let mathFun = (balance)=>{
    if(balance > 1800){
    balance = balance + 200
    return balance}
    else {
    return balance 
    }
}
            
    
    const rulesInstructions =()=>{
        console.log(chalk.greenBright('So, Its simple. I will test your skills as a day trader. A day trader is someone who buys and sells all their shares in a single day. Ill give you $500 to start.\n You can bank all your money, invest all of it or invest any amount from $1 up to your current balance. Reguadless of what you do, you have 7 days to turn that $500 into $5000 or more.'))
        readline.keyInPause();
        console.log(chalk.greenBright('Each day you will be given a chance to choose what you want to invest in for that day and how much money you want to invest. Remeber, you dont have to invest'))
        readline.keyInPause();
        console.log(chalk.greenBright('I should warn you; Investment can be tricky. You can lose all your money just as easy as you can gain it. Different investment options have differnt perks, payouts times and consequences. So invest wisely.'))
        readline.keyInPause();
        console.log(chalk.greenBright("If by the end of day 7 you have $5000 dollars or more, You will recieve your share of the familie's wealth. And win the game."))
        console.log(chalk.greenBright('However, make $4999 or less and....well....lets say youll win the right to grind the 9-5 like all the other saps'))
        readline.keyInPause();
        console.log(chalk.greenBright("Again, choose wisely. You can get a brief explaination of each investment type by typing the investment name. Example, typing the word 'stocks' and you will be given a description of what stocks are"))
        readline.keyInPause();
        console.log(chalk.greenBright("When you are ready to invest you can enter investment type then amount.  Or you can choose not to invest by typing the word 'bank'."))
        readline.keyInPause();
        console.log(chalk.greenBright("You can also type in 'rules' to get a reminder of the rules"))
        console.log(chalk.greenBright(" Well, thats all. Happy Investings!"))
        readline.keyInPause()
        // morningGreeting()
    
    }



 let currentDay = 1
 




secret = readline.question(`A stranger approaches you on....today..You check your phone... your phone tells you that today is ${today}. `, {
    hideEchoBack: true,
   
  });


const introduction = () => {
    scratch = 'Debonaire scratches her head as she ponders your name \n'
    sus = "That\'s not suspicous at all \n"
    money = 'ooh, money! \n'
    plaOrNay = 'Do you want to play?'
    nah = 'Thats too bad. I was looking forward to watching you play'
    say = 'Says the lady who randomly approached YOU. \n'

        console.log(chalk.green('Greetings!') + say.italic + chalk.green( ' My name is Debonaire'))
    let nameInput = readline.question(chalk.green("And your name dear?: "))
        console.log(chalk.green(`${nameInput}, ...${nameInput} I think I knew a ${nameInput} once.`,'Peculiar indivisual \n'))
    readline.keyInPause(scratch.italic);
    console.log('')
    console.log(chalk.green("Anyway. I am  your long lost cousin's brother's aunt. Three times removed. Or something of that sorts. \n"))
    readline.keyInPause(sus.italic);
    console.log('')
        console.log(chalk.green("My point is, you're family. And as family, I've been instructed to give you a portion of the family's wealth \n"))
    readline.keyInPause(money.italic)
    console.log('')
    let playGame = readline.question(chalk.green("Are you interested in a portion of our family's wealth?:"))
    console.log('')
    if(playGame = 'yes'){console.log(chalk.green("Of course you are. Who doesn't love free money"))} else if (playGame = 'no') {
        console.log(chalk.green("That's okay, I have a proposition for you either way"))
    } else { 
        command = readline.prompt({limitMessage:'$<lastInput> is not avaiable'})
    }
    console.log('')
        console.log(chalk.green("Unfortuantely, I can't just hand over the money, my dear. At least not without knowing if you're responsible enought to handle it \n"))
        console.log(chalk.green("You'll have to prove yourself. "))
        readline.keyInPause('Says the lady who randomly approached YOU. \n')
        console.log(chalk.green("How do you prove yourself? I am glad you asks \n"))
        console.log(chalk.green(`I have a test for you, ${nameInput}. A game, if that suits you better \n`))

    answer = readline.keyInYN(plaOrNay.italic)
    if (1){
        console.log(chalk.green('Great! Let me explain the rules'))
        // rulesInstructions()
    } else{
        console.log(nah.italic)
        leaveGame()
    }
}
    

const rules = () =>{
    console.log('Okay, here are the rules. You can choose to invest or save your money. You have 7 days to make $5000 or more.')
    readline.keyInPause()
     console.log("When you are ready to invest you can enter investment type plus amount. Example stocks 2 dollars. Or you can choose not to invest by typing the word 'bank'.")
     readline.keyInPause()
    console.log('Good Luck!')
}

let drive = ()=> {
    console.log(chalk.greenBright("Well that was fun! But let's not forget about work"))
    let car = 'A plesant 15 minuet ride later'
    readline.keyInPause(car.italic)
}


const onTheJob = ()=>{
    drive()
    
const jobAM = () => {
    jobTask = ['Work', 'Read', 'Chat','Dance']
    index = readline.keyInSelect(jobTask, chalk.greenBright(chalk.greenBright("So this is what you call work? Now that we are here, what will you do?"))) 
if(index === 0||jobTask === 'word' ){
    console.log(chalk.greenBright("*Yawn* Wake me up when you're done."))
        } else if (index === 1){
      let news = 'According to webnews.aw, Walmart will use fully driverless trucks to make deliveries in 2021'
    console.log(chalk.green(news.italic))

        } else if (index=== 2){
    console.log(chalk.greenBright('Oh, you rather chat with someone other than me...okay'))
    
        } else if(index === 3){
            console.log(chalk.green('Dancing always bring up my spirits!'))
        }else {
    command = readline.prompt({
        limit: ['Work', 'Read', 'Chat','leave-early', 'Check-Stock'],
        limitMessage: 'I can not accept $<lastImput> . Please input another.'
    })
    
}
}
    jobAM()
    readline.keyInPause()
}





const lunchBreak = ()=>{

    readline.keyInPause('After 4 hours of eye strain its now time for lunch!')
    
const midDay = () => {
    array = ['Kiss up to superiors', 'Have Lunch', 'Charm coworker', 'Work Through Lunch']
    index = readline.keyInSelect(array, chalk.greenBright(chalk.greenBright("Glad that whole work thing is over. What? This is only a lunch break? What do you do on your lunch break?"))) 
if(index === 0 ){
    console.log(chalk.greenBright("Nice, Now you're only 1999 kisses away from an actual raise!"))
        } else if (index === 1){
    console.log(chalk.green(chalk.greenBright("Remmeber when you asked me what that smell was in the car? Well, it's your lunch! I made you a tuna sandwhich with onion and eggs! Enjoy!")))
    

        } else if (index === 2){
    console.log(chalk.greenBright("Aren't you the charmer"))
    

        } else if(index === 3){
            console.log(chalk.green("well, at least you'll have a job to return to if this investment plan doesn't work out for you."))
        }else {
    command = readline.prompt({
        limit: ['Kiss up to superiors', 'Have Lunch', 'Charm coworker','Sleep', 'Work Through Lunch'],
        limitMessage: 'I can not accept $<lastImput> . Please input another.'
    })
   
}
}
midDay()
}






    const endOfDay = ()=>{
        morning = 'The sun began to set, signalling the end of your workday '
        readline.keyInPause(morning.italic)
            console.log(chalk.greenBright("I took the liberty to sell all your shares"))

        watch = 'Debonaire checks her watch'
        readline.keyInPause(watch.italic);
        balance =
        console.log(chalk.greenBright(`It's 3:59am. Markets close at 4pm. After selling your shares, your current balance is ` + mathFun(balance)))
        

        readline.keyInPause(chalk.greenBright(`You should head home and get some sleep. Tomorrow will be a new day of investing.`))
}
 
    


const bankAccount =(balance)=>{
    
    if(balance <= 0){
        console.log(chalk.greenBright('Oh, sorry dear, looks like you ran out of money. Unfortunately You do not inherit any wealth'))
        gameLoop()
    } else if(balance >= 2800){
        console.log(chalk.greenBright('Celebrate good times, comeon!! Congratulations you made it to $5000. You get to live it up with the filthy rich'))
        readline.keyInPause()
        console.log(chalk.greenBright("Those who are filthy rich in knowledge, that is! Here is our family secret, An investment in knowledge pays the best interest.” -Benjamin Franklin-  \n By playing my game you learned the first steps in a life long skill of investment. You know more now than you did before we met and therefor can build on what you've learned. Congratulations!! You are now wealthy in mind."))
        readline.keyInPause()
        console.log(chalk.greenBright('That was so much fun that I want to play again'))
        fun()
    }
    return balance
}






// prosperity-game name OR Bank or Bust
let fun = ()=> {
    plaOrNay = 'Do you want to play?'
    nah = 'Thats too bad. I was looking forward to watching you play'
    answer = readline.keyInYN(plaOrNay.italic)
        if (answer){
            let yey = "Yey! Let's do it again!"
            console.log(yey.italic)
            play()
        }else {console.log(nah.italic)
        quitGame()
    }
}

const play = () => {
    introduction()
    rulesInstructions()
    today2()
    bankAccount(2800)
   
   
     
//     let response;
//     while (1) {
//         response = readline.question(">");
//         if ('?' === response) {
//             rules();
//         } else if ( 'quit' === response) {
//             leaveGame();
//         // } .... more else if ... {
//         // }
//     }


// }
}
startGame()






