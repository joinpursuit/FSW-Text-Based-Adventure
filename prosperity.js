const { Console } = require('console')
const { monitorEventLoopDelay } = require('perf_hooks')
const readline = require('readline-sync')
const { start } = require('repl')
const colors = require('colors');
const chalk = require("chalk");
const { read } = require('fs');
const { kStringMaxLength } = require('buffer');
const today = new Date().toLocaleDateString();
say = '...says the stranger.'
let balance = 2000
const optionArray = (arr)=>{
    if(arr == 0){
        balance += 50
    }else if (arr === 1){
        balance -= 100
    }else if (arr === 2){
        balance += 100

    }else if (arr === 3){
        balance -= 50
    }else{}
} 

const investmentsHelp = bid=>{
    switch(bid){
        case 'stocks':
            console.log('Stock of a corporation is all of the shares into which ownership of the corporation is divided. A single share of the stock represents fractional ownership of the corporation in proportion to the total number of shares.')
        break;
        case 'bonds':
            console.log('In finance, a bond is an instrument of indebtedness of the bond issuer to the holders. Bonds can be in mutual funds or can be in private investing where a person would give a loan to a company or the government.')
        break;
        case 'options':
            console.log('In finance, an option is a contract which conveys its owner, the holder, the right, but not the obligation, to buy or sell an underlying asset or instrument at a specified strike price prior to or on a specified date, depending on the form of the option')
        break;
        case 'annuities':
            console.log('An annuity is a financial product that pays out a fixed stream of payments to an individual, and these financial products are primarily used as an income stream for retirees.')
        break;
        case 'precious-metals-ira':
            console.log('Precious metals IRA is an Individual Retirement Account in which physical gold or other approved precious metals are held in custody for the benefit of the IRA account owner. It functions the same as a regular IRA, only instead of holding paper assets, it holds physical bullion coins or bars.')
        break;
        case 'mutual-funds':
            console.log('A mutual fund is an open-end professionally managed investment fund that pools money from many investors to purchase securities.')
        break;
        case 'reit':
            console.log('A real estate investment trust is a company that owns, and in most cases operates, income-producing real estate.')
        break;
        case 'cryptocurrency':
            console.log('A cryptocurrency is a digital or virtual currency that is secured by cryptography, which makes it nearly impossible to counterfeit or double-spend.')
          break;
        case 'forex':
            console.log('Foreign Exchange (forex or FX) is the trading of one currency for another.')
          break;
        case 'ipo-stocks':
            console.log('An initial public offering (IPO) refers to the process of offering shares of a private corporation to the public in a new stock issuance.')
          break;
        default:
            command = readline.prompt({
            limit: ["Stocks", "Bonds", "Options", "Annuities", "Precious-Metals", "Mutual-Fund", "Real-Estate", "REIT", "Cryptocurrency", "Forex", "IPO stocks"],
            limitMessage: `I can not accept $<lastImput> . Please input another.`
        
            })
    }
}
const startGame = () => {play()}
const leaveGame = () => {console.log("It's been a pleasure. Bye Bye!")  
    process.exit()}
const quitGame = () => {
    leaveGame()}
index = ''
const investmentTypes = () => {
    investments = ["Stocks", "Bonds", "Options", "Annuities", "Precious-Metals", "Mutual-Fund", "Real-Estate", "REIT", "Cryptocurrency", "Forex"]
    
    for(i=0;i<investments.length;i++){
    console.log(investments[i])}
    index = readline.question(chalk.greenBright('Which invesetment type?: \n'))
    console.log(chalk.greenBright('Nice! ' + index + ' is your investment of choice!\n'))
    index.toLocaleLowerCase
    index = index
    if(index === "stocks"){
        balance += 150
    }else if(index === "bonds"){
        balance -= 100
    }
    else if(index === "options"){
        balance += 250
    }
    else if(index === "annuities"){
        balance += 300
    }
    else if(index === "precious-metals"){
        balance += 350}
    else if(index === "mutual-fund"){
        balance -= 300
    }
    else if(investments === "real-estate"){
        balance += 500
    }
    else if(index === "reit"){
        balance += 600
    }
    else if(index === "cryptocurrency"){
        balance += 480
    }
    else if(index === "forex"){
        balance -= 500
    }
    else if(index === 10){
        balance += 555
    }else {
        console.log(chalk.greenBright("You didn't input a choice from the list. Unfortunetly time is money so it looks like you put a bid on nothing\n\n"))
        index ='nothing'
    }
    
    return index
}
const today2 =(day)=>{
        day = 1
        let message = ''
        
    while(day <= 4){
        let randomNum = Math.floor(Math.random()* 100)
            if(randomNum % 10 === 0){
            message = "Rule number one: Don't lose money"
        }   else if(randomNum % 5 === 0){
            message = '"The stock market is filled with individuals who know the price of everything, but the value of nothing."'
        }   else if(randomNum % 2 === 0 && randomNum < 30){
            message = '"An investment in knowledge pays the best interest."'
        }   else if (randomNum % 2 !== 0 && randomNum < 50) {
            message = '"Know what you own, and know why you own it."'
        }   else if (randomNum % 2 !== 0 && randomNum > 50){
            message = '"Derivatives are financial weapons of mass destruction."'
        }   else if (randomNum % 3 !== 0){
            message = 'Use the day wisely'
        }   else{
            message ='"Everyone has the brainpower to make money in stocks. Not everyone has the stomach.”'
        }
    
    console.log(chalk.cyan(`Good Morning, Today is day ${day}. \n ${message}.`))
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
        console.log(chalk.greenBright('Delicious! You gained $50\n\n'))
            } else if (index === -1){
                console.log(chalk.greenBright("Did I ever tell you 'The Avatar' was my favorite childhood cartoon?"))
            } else if(index === 1){
        console.log(chalk.green('Buget food. \n Perhaps you can work on changing old habits. You lost $100\n\n'))
        

            } else if (index === 2){
        console.log(chalk.greenBright('Great choice! The food of wealth. \n You gained $100\n\n'))
        

            } else if(index === 3){
                console.log(chalk.green('Mmmm..Bring home the bacon! \n Actual bacon not metaphorically. You lost $50\n\n'))
            }else {
        command = readline.prompt({
            limit: ['eggs', 'cereal', 'spinach', 'bacon'],
            limitMessage: `I can not accept ${index} . Please input another.`
        })
    }
    optionArray(index)

}    
const morningGreeting = ()=>{
        
        morning = 'The morning sunlight of a new day hits your eyes as Debornaire opens the curtains to your bedroom, waking you up.'
        readline.keyInPause(morning.italic)
            console.log(chalk.greenBright("Good Morning Sunshine. You didn't think I would abandon you on your journey to riches, did you? Of course not!"))
            
        breakfast()


        watch = 'Debonaire checks her watch'
        readline.keyInPause(watch.italic);
        console.log(chalk.greenBright(`It's 9:29am. Markets open at 9:30am. Your current balance is ${balance}\n`))
    let invest =()=>{
        let moolah =readline.question(chalk.greenBright('Would you like to bank your money?'))

        if(moolah === 'yes'){
        console.log(chalk.greenBright('Okay, Your money will survive long enough to fight another day\n\n'))
    
        let note = `Your balance after banking is ${balance} `
        console.log(note.italic)
            } else if (moolah === 'stocks'){
                investmentsHelp('stocks')
                invest()
            } else if (moolah === '?'){
                rules()
                invest()
            } else if (moolah === 'bonds'){
                investmentsHelp('bonds')
                invest()
            } else if (moolah === 'options'){
                investmentsHelp('stocks')
                invest()
            } else if (moolah === 'annuities'){
                investmentsHelp('annuities')
                invest()
            } else if (moolah === 'precious-metals-ira'){
                investmentsHelp('precious-metals-ira')
                invest()
            } else if (moolah === 'mutual-funds'){
                investmentsHelp('mutual-funds')
                invest()
            } else if (moolah === 'reit'){
                investmentsHelp('reit')
                invest()
            } else if (moolah === 'cryptocurrency'){
                investmentsHelp('cryptocurrency')
                invest()
            } else if (moolah === 'forex'){
                investmentsHelp('forex')
                invest()
            }else if (moolah === 'ipo-stocks'){
                investmentsHelp('ipo-stocks')
                invest()
            }else if(moolah ==='no'){
        readline.keyInPause(chalk.green())
        
        let holdMessage = readline.question(chalk.green(`And how much money do you want to invest? `))
        console.log('\n\n')
        investmentTypes()
        console.log(chalk.greenBright(`So you want to invest ${holdMessage} dollars in ${index}?\n`))
        
      
        balance = balance - holdMessage
        readline.keyInPause(chalk.greenBright(`Your Account has been reduced by ${holdMessage} dollars after you invested ${holdMessage} dollars in `+ index))
        } else {
            invest()
        }
        
    }
    invest()
       
            
}            
const rulesInstructions =()=>{
        console.log(chalk.greenBright('So, Its simple. I will test your skills as a day trader. A day trader is someone who buys and sells shares of an an investment, such as stocks, in a single day. Ill give you $2000 to start.\n \n You can either bank all your money, invest all of it or invest a portion of you money. You have 4 days to turn that $2000 into $4000 or more.\n \n'))
        readline.keyInPause();
        console.log(chalk.greenBright('Each day you will be given a chance to invest or bank. Remeber, you dont have to invest. \n \n'))
        readline.keyInPause();
        console.log(chalk.greenBright('I should warn you; Investment can be tricky. You can lose all your money just as easy as you can gain it. So invest wisely.\n \n'))
        readline.keyInPause();
        console.log(chalk.greenBright("If by the end of day 4 you have $4000 dollars or more, You win the game. \n \n"))
        console.log(chalk.greenBright('However, make $3999 or less and....well....lets say youll win the right to grind the 9-5 with all the other saps \n \n'))
        readline.keyInPause();
        console.log(chalk.greenBright("You can get a brief explaination of each investment type by typing the investment name when you are asked if you want to bank. Example, type the word 'stocks' and you will be given a description of what stocks are. \n\n"))
        readline.keyInPause();
        console.log(chalk.greenBright("When entering the amount you want to invest; Only enter the numerical value (Numbers ONLY) Example 200 dollars should be enteredd as only 200. You have one opportunity to bank your money per day \n\n"))
        readline.keyInPause();
        console.log(chalk.greenBright("You can also type in '?' to get a reminder of the rules\n\n"))
        console.log(chalk.greenBright(" Well, thats all. Happy Investings!"))
        readline.keyInPause('\n')
        console.log('\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n')
   
        
    
}
 const beginingMessage = ()=> {
secret = readline.question(`A stranger approaches you on....today..You check your phone... your phone tells you that today is ${today}. \n\n`, {
    hideEchoBack: true,});}
const introduction = () => {
    beginingMessage()
    scratch = 'Debonaire scratches her head as she ponders your name \n'
    sus = "That\'s not suspicous at all \n"
    money = 'ooh, money! \n'
    plaOrNay = 'Do you want to play?'
    nah = 'Thats too bad. I was looking forward to watching you play'
    say = 'Says the lady who randomly approached YOU. \n'

        console.log(chalk.green('Greetings!') + chalk.green( ' My name is Debonaire'))
    let nameInput = readline.question(chalk.green("And your name dear?: \n\n"))
        console.log(chalk.green(`${nameInput}, ...${nameInput} I think I knew a ${nameInput} once.`,'Peculiar indivisual \n'))
        readline.keyInPause(scratch.italic);
        console.log('')
        console.log(chalk.green("Anyway. I am  your long lost cousin's brother's aunt. Three times removed. Or something of that sorts. \n"))
        readline.keyInPause(sus.italic);
        console.log('')
        console.log(chalk.green("My point is, you're family. And as family, I've been instructed to give you a portion of the family's wealth \n"))
        readline.keyInPause(money.italic)
        console.log('')
    let playGame = readline.question(chalk.green("Are you interested in a portion of our family's wealth? Please answer Yes or No?:"))
    if(playGame === "Yes"|| playGame === "yes" || playGame ==="YES"){console.log(chalk.green("Of course you are. Who doesn't love free money"))} else if (playGame === 'NO'|| playGame === "no"|| playGame ==="No"){
        console.log(chalk.green("That's okay, I have a proposition for you either way"))
    } else{
        console.log(chalk.green(`${playGame}..You're funny. Humor runs in the family. Now let's get back to the subject of our family's wealth!`))
    }
        console.log('')
        console.log(chalk.green("Unfortuantely, I can't just hand over the money, my dear. At least not without knowing if you're responsible enought to handle it \n"))
        console.log(chalk.green("You'll have to prove yourself. "))
        readline.keyInPause('Says the lady who randomly approached YOU. \n')
        console.log(chalk.green("How do you prove yourself? I am glad you asked \n"))
        console.log(chalk.green(`I have a test for you, ${nameInput}. A game, if that suits you better \n`))

        answer = readline.keyInYN(plaOrNay.italic)
    if (answer === true){
        console.log(chalk.green('Great! Let me explain the rules'))
    }else  if (answer === false){
        console.log(nah.italic)
        leaveGame()
    } else if (answer === ''){
        console.log('Ill accept that as a yes!')
    } else {}
}
    const rules = () =>{
    console.log('Okay, here are the rules. You can choose to invest or save your money. You have 4 days to make $4000 or more.')
    readline.keyInPause()
    console.log("When you are ready to invest you can enter investment type plus amount. Example stocks 2 dollars. Or you can choose not to invest by typing the word 'bank'.")
    readline.keyInPause()
    console.log('Good Luck!')
}
const onTheJob = ()=>{
    
    console.log(chalk.greenBright("Well that was fun! But let's not forget about work"))
    let car = 'A plesant 15 minuet ride later'
    readline.keyInPause(car.italic)
    console.log('\n\n')

    const jobAM = () => {
        jobTask = ['Work', 'Read', 'Chat','Dance']
        index = readline.keyInSelect(jobTask, chalk.greenBright(chalk.greenBright("So this is what you call work? Now that we are here, what will you do?\n\n"))) 
        if(index === 0||jobTask === 'word' ){
        console.log(chalk.greenBright("*Yawn* Wake me up when you're done. \n Gained $50 from working\n\n"))
        } else if(index === -1){
            console.log(chalk.greenBright(" My favorite character in 'The Avatar was Uncle\n"))
        } else if (index === 1){
        let news = 'According to webnews.aw, Walmart will use fully driverless trucks to make deliveries in 2021. \n Unfortunately that was unproductive. You lose $100\n\n'
        console.log(chalk.green(news.italic))

        } else if (index=== 2){
        console.log(chalk.greenBright('Oh, you rather chat with someone other than me...okay. \n Turns out, speaking to new people caused you to learn new things. You earned $100\n\n'))
    
        } else if(index === 3){
            console.log(chalk.green("Dancing always bring up my spirits! \n Unfortunately you weren't dancing for money so you lost $50\n\n"))
        }else {
        command = readline.prompt({
        limit: ['Work', 'Read', 'Chat','leave-early', 'Check-Stock'],
        limitMessage: 'I can not accept $<lastImput> . Please input another.'
            })
        }
        optionArray(index)
    }
        jobAM()
        readline.keyInPause()
}
const lunchBreak = ()=>{

    readline.keyInPause('After 4 hours of eye strain its now time for lunch!')
    
    const midDay = () => {
        array = ['Kiss up to superiors', 'Have Lunch', 'Charm coworker', 'Work Through Lunch']
        index = readline.keyInSelect(array, chalk.greenBright(chalk.greenBright("Glad that whole work thing is over. What? This is only a lunch break? What do you do on your lunch break?\n\n"))) 
        if(index === 0 ){
        console.log(chalk.greenBright("Nice, Now you're only 1999 kisses away from an actual raise! \n You gained $50 out of pity\n\n"))
        } else if (index === 1){
        console.log(chalk.green(chalk.greenBright("Remmeber when you asked me what that smell was in the car? Well, it's your lunch! I made you a tuna sandwhich with onion and eggs! Enjoy! \n You'll regret eating that later. You lose $100\n\n")))
        } else if (index === -1){
            console.log(chalk.greenBright(" Uncle was apart of an ancient secret society called 'The Order of the white lotus' Which he gained access to by saying 'white lotus'\n"))
        }else if(index === 2){
        console.log(chalk.greenBright("Aren't you the charmer. Having charisma gets you everything. You gained $100 \n\n"))
    

        } else if(index === 3){
            console.log(chalk.green("well, at least you'll have a job to return to if this investment plan doesn't work out for you. \n You lost $50 becuase...who works through lunch!\n\n"))
        }else {
        command = readline.prompt({
        limit: ['Kiss up to superiors', 'Have Lunch', 'Charm coworker','Sleep', 'Work Through Lunch'],
        limitMessage: 'I can not accept $<lastImput> . Please input another.'
            })
        }
        optionArray(array)
    }
        midDay()
        console.log('\n\n')
}
const endOfDay = ()=>{
        morning = 'The sun began to set, signalling the end of your workday. '
        readline.keyInPause(morning.italic)
            console.log(chalk.greenBright("I took the liberty to sell all your shares\n"))

        watch = 'Debonaire checks her watch'
        readline.keyInPause(watch.italic);
        console.log(chalk.greenBright(`It's 3:59am. Markets close at 4pm. \n After selling all your shares, your current balance is ${balance}\n\n`))

        readline.keyInPause(chalk.greenBright('Phew, what a day'))
        let feelings = readline.question(chalk.green("How did you do in the market today? Great or Okay:\n"))
        feelings.toLocaleLowerCase
        if (feelings === 'great'){
            console.log(chalk.greenBright('I knew you would be good at this'))
        } else if (feelings === 'okay'){
            console.log(chalk.greenBright("Just okay? Perhaps a joke will cheer you up.\n\n If you boil a funny bone it becomes a laughing stock. \n   That's pretty humerus."))
        } else {console.log(chalk.greenBright(`*in robot voice* Does not compute .."${feelings}" hehe again with your humor \n\n`))}
        readline.keyInPause(' ')
        console.log(chalk.greenBright(`You should head home and get some sleep. Tomorrow will be a new day of investing.`))
        readline.keyInPause(' ')
        console.log('\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n')
}
 const bankAccount =()=>{
    
    if(balance <= 4000){
        console.log(chalk.bgBlueBright('Oh, sorry dear, looks like you ran out of money. Unfortunately You do not inherit any wealth\n\n'))
        fun()
    } else if(balance >= 4001){
        console.log(chalk.bgMagentaBright("Cel-e-brate good times, C'mon!! Congratulations you made it to $4000. You get to live it up with the filthy rich\n\n"))
        readline.keyInPause()
        console.log(chalk.greenBright("Those who are filthy rich in knowledge, that is! \n Here is our family secret, An investment in knowledge pays the best interest.” -Benjamin Franklin-  \n By playing my game you learned the first steps in a life long skill of investment.\n\n You know more now than you did before we met and therefor can build on what you've learned. Congratulations!! You are now wealthy in mind.\n\n\n"))
        readline.keyInPause()
        console.log(chalk.greenBright('That was so much fun that I want to play again'))
        fun()
    }
    return balance
}
const gameLoop = () => {
    while(true){
        let play = readline.keyInYN('Welcome to the game Prosperity. Would you like to play?')  
    if(play === true){
        startGame()
        }  else {
        quitGame()
        }
    }

}
let fun = ()=> {
    plaOrNay = 'Do you want to play? \n \n'
    nah = 'Thats too bad. I was looking forward to watching you play'
    answer = readline.keyInYN(plaOrNay.italic)
        if (answer === true){
            let yey = "Yey! Let's do it again!"
            console.log(yey.italic)
            console.clear()
            gameLoop()
        }else if (answer === false ){console.log(nah.italic)
        quitGame()
        } else if (answer === ''){
        fun()}
}
const play = () => {
    introduction()
    rulesInstructions()
    today2()
    bankAccount()   

}

password = readline.question("Interested in a game of Pai Sho? \n \n \n", {hideEchoBack: true});
password.toLocaleLowerCase
if(password === 'white lotus'){
    console.log(chalk.greenBright('Welcome to the Order of the White Lotus. \n You are a member of the elite. You automatically win the game!'))
    balance += 5000
    bankAccount()
    } else{
        gameLoop()
}







