// * This section is dedicated to libraries

const readlineSync = require('readline-sync')
const chalk = require('chalk')
const { reset } = require('chalk')

// * This section is dedicated to Declaration of constants and variables

let aa = false

var option = 99
var position = 0
var entryprice = 0
var fee = 0
var equity = 0
var original = 10500
var balance = 10500
var indexp = 0

let nam = 'Player'
let stonk = 'AMZN'
var PORTFOLIO = [0, 0, 0, 0, 0, 0, 0, 0]

/* This was hard to understand, I wanted to make a good presentation of the game
 From a github repo, I learned how to execute a shell command,    source: https://gist.github.com/harrypujols/2a6da11afbd9ee1bef92ddd3402a2fc4
 Google help me find this, apparently uses compiling languaje,    source: https://apple.stackexchange.com/questions/33736/can-a-terminal-window-be-resized-with-a-terminal-command/52054

- Was unable to use this

const cmd = (command = 'clear') => {
  const exec = require('child_process').exec
  exec(command, (err, stdout, stderr) => {
    process.stdout.write(stdout)
  })
}
*/

// * This Function restart the vars and consts

const again = () => {
  aa = false

  option = 99
  position = 0
  entryprice = 0
  fee = 0
  equity = 0
  original = 10500
  balance = 10500
  indexp = 0

  nam = 'Player'
  stonk = 'AMZN'
  PORTFOLIO = [0, 0, 0, 0, 0, 0, 0, 0]
}

// * This is a Top Banner for GUI

const topbanner = () => {
  console.clear()
  for (let x = 1; x <= 189; x += 1) {
    process.stdout.write(chalk.bold.bgWhite(' '))
  }
  process.stdout.cursorTo(85, 0)
  process.stdout.write(chalk.bgWhite.black.bold(`TRADER DOS 2021`))
}

// * This is the welcoming Screen and brief description of the Game

const description = () => {
  process.stdout.cursorTo(1, 5)
  process.stdout.write(
    chalk.yellow(
      `\v\t\t * * *     Welcome to Trader DOS    * * *\n\v\v\tCopyright (c) 2020, 2021 Carbonate, Inc. All rights reserved.\n\tTRADER DOS is a registered trademark of Carbonate, Inc.\n\tVersion 1.0_beta`
    )
  )

  let dual = ['Instructions', 'Start trading']
  process.stdout.write(chalk.magenta(`\n\n\vAwesome Menu\n |\n |\n v\n`))
  option = readlineSync.keyInSelect(dual, `\nSelect one : `)

  return option
}

// * This is Where the Price of the Stock is determined

const priceaction = stonk => {
  // * Here a function generates a random spotprice within a range (min,max) given as parameters
  function range (min, max) {
    spotprice = Math.random() * (max - min) + min
    spotprice = spotprice.toFixed(2)
    return spotprice
  }
  // * According to wich Stock, the parameters are executed

  switch (stonk) {
    case 'AMZN':
      range(2000, 4000)
      break

    case 'TSLA':
      range(100, 1000)
      break

    case 'AAPL':
      range(60, 200)
      break
  }
  entryprice = spotprice
  fee = (entryprice * 0.01).toFixed(2)
  return entryprice
}

// * This Function Updates the price of the security acording to the market

const priceupdate = stonk => {
  priceaction(stonk)

  switch (stonk) {
    case 'AMZN':
      stonkname = 'Amazon'
      break
    case 'TSLA':
      stonkname = 'Tesla'
      break
    case 'AAPL':
      stonkname = 'Apple'
  }
  console.log(
    chalk.gray(
      `\n\v\t\t\t\t ${stonkname} stock   :  ${chalk.cyan(
        stonk
      )} current price : $ ${chalk.white(
        entryprice
      )}\t\tBALANCE : ${chalk.white(
        '$ ' + balance
      )}\t\tTraderDOS Fee 1% ${chalk.redBright('$ ' + fee)}\n\n`
    )
  )
}

// * This Function executes the buy option

const buy = stonk => {
  switch (stonk) {
    case 'AMZN':
      indexp = 3
      PORTFOLIO[3] += 1
      break

    case 'TSLA':
      indexp = 4
      PORTFOLIO[4] += 1
      break

    case 'AAPL':
      indexp = 5
      PORTFOLIO[5] += 1
      break
  }
}

// * This Function executes the sell option

const sell = stonk => {
  switch (stonk) {
    case 'AMZN':
      indexp = 3
      equity = PORTFOLIO[3] * entryprice
      PORTFOLIO[3] = 0
      return equity

    case 'TSLA':
      indexp = 4
      equity = PORTFOLIO[4] * entryprice
      PORTFOLIO[4] = 0
      return equity

    case 'AAPL':
      indexp = 5
      equity = PORTFOLIO[5] * entryprice
      PORTFOLIO[5] = 0
      return equity
  }
}

// * This Function sells all the stocks of the trader

const closeposition = stonk => {
  sell(stonk)

  balance = Number(balance)
  fee = Number(fee)
  balance = (balance + equity - fee).toFixed(2)

  console.log(
    chalk.gray(
      `\n\nYou closed your position succesfully            :\t\t\t\t\t\tBALANCE : ${chalk.white(
        '$ ' + balance
      )}\t\tPORTFOLIO : ${chalk.white(PORTFOLIO[indexp] + ' ' + stonk)}`
    )
  )
  profit(balance)
}

// * This Function checks If there is anything in the player's Portfolio

const check = (length = 7) => {
  for (let z = 0; z <= length; z += 1) {
    if (PORTFOLIO[z] != 0) {
      aa = true
    }
  }
  return aa
}

// * This Function checks if the player make or lose money

const profit = balance => {
  if (balance > original) {
    console.log(
      chalk.gray(
        `\n\nAmazing..!! It looks like you made a Profit of  : ${chalk.greenBright(
          '$ ' + (balance - original).toFixed(2)
        )}`
      )
    )
  } else if (balance === original) {
    console.log(
      chalk.gray(
        `\n\nNot Bad..!! It looks like you ${chalk.blueBright('break even')}`
      )
    )
  } else {
    console.log(
      chalk.gray(
        `\n\nWoooaah..!! It looks like you took a  Loss  of  : ${chalk.redBright(
          '$ ' + (balance - original).toFixed(2)
        )}`
      )
    )
  }
}

// * This Function logs in screen The Description of the game

const instruction = () => {
  console.clear()
  topbanner()

  console.log(
    chalk.gray(
      '\n\v* The foreign exchange market (Forex, FX, or currency market) is a global decentralized or over-the-counter (OTC) market for the trading of currencies.\n* This market determines foreign exchange rates for every currency. It includes all aspects of buying, selling and exchanging currencies at current or determined prices.\n* In terms of trading volume, it is by far the largest market in the world, followed by the credit market.\n\n'
    )
  )

  console.log(
    chalk.gray(`\n\vTrader DOS operates with the following         : ${chalk.blueBright(
      '\f Currencies >>'
    )}\
            ${chalk.cyan('\tGBP/JPY\t\tAUD/NZD\t\tUSD/JPY')} ${chalk.redBright(
      '\n\t\t\t\t\t\t  Stonks     >>'
    )}\
            ${chalk.cyan('\tAMZN\t\tTSLA\t\tAAPL')}${chalk.yellowBright(
      '\n\t\t\t\t\t\t  Crypto     >>'
    )}\
            ${chalk.cyan('\tBTC/USD\t\tETH/USD')}`)
  )

  console.log(
    chalk.gray(
      `\n\vForex is Binary, meaning there is only 2 cases :  ${chalk.green(
        'BUY'
      )} / ${chalk.red('SELL')}`
    )
  )
}

// * This Function emulates a trading session for the player to learn

const demostration = () => {
  instruction()
  priceaction(stonk)

  console.log(
    chalk.gray(
      `\n\vLet\'s try a transaction with Amazon stock      :  ${chalk.cyan(
        'AMZN'
      )}\tcurrent price : $ ${chalk.white(
        entryprice
      )}\t\tBALANCE : ${chalk.white(
        '$ ' + balance
      )}\t\tTraderDOS Fee 1% ${chalk.redBright('$ ' + fee)}`
    )
  )
  letmetrade('AMZN')
  check()
  if (aa === false) {
    letmetrade('AMZN')
  } else {
    demostration2()
  }
}

// * This Function continues the demostration

const demostration2 = () => {
  console.log(
    chalk.gray(
      `\n\nAs you can see, the Spotprice changes everytime.\nSo you can take advantage and sell for a profit or cut loses\nLet\'s sell your position ${chalk.white(
        PORTFOLIO[indexp] + ' ' + stonk
      )} ...`
    )
  )

  priceaction(stonk)
  priceupdate(stonk)

  if (readlineSync.keyInYNStrict(`\nDo you want to continue ??? : `)) {
    closeposition(stonk)
    salidagreeting()
    again()
    startGame()
  } else {
    priceaction(stonk)
    priceupdate(stonk)
    letmetrade(stonk)
    check()
    if (aa === false) {
      salidagreeting()
    }
    demostration2()
  }
}

// * This Function executes the BUYS or SELLS just like in a real Forex Trader

const letmetrade = stonk => {
  let buysell = ['BUY', 'SELL']
  position = readlineSync.keyInSelect(buysell, `I WANT TO       :`)

  if (position === 0) {
    buy(stonk)
    timemachine = balance
    balance = balance - entryprice - fee
    balance = balance.toFixed(2)

    if (balance > 0) {
      console.log(
        `\nCongratulations you bougth 1 ${stonk} stock at     :  $ ${chalk.white(
          entryprice
        )}\t\t\t\t\tBALANCE : $ ${balance}\t\tPORTFOLIO : ${
          PORTFOLIO[indexp]
        }  ${stonk}`
      )
    } else {
      console.log(chalk.gray(`\nOooops!! You don\'t have enough money...`))
      if (
        readlineSync.keyInYNStrict(`\nDo you want to sell your position .?? `)
      ) {
        balance = timemachine
        closeposition(stonk)
        salidagreeting()
      } else {
        console.log(
          `\n\nCostumer service as a courtesy has sold your position..`
        )
        balance = timemachine
        closeposition(stonk)
        salidagreeting()
      }
    }
  } else if (position === 1) {
    check()

    if (aa === true) {
      closeposition(stonk)
      salidagreeting()
    } else {
      console.log("\nYou don't have any position....")
      if (readlineSync.keyInYNStrict('\nDo you want to try again ??? : ')) {
        topbanner()
        priceaction(stonk)
        priceupdate(stonk)
        letmetrade(stonk)
      } else {
        salida()
      }
    }
  } else {
    again()
    startGame()
  }
}

// * This Function greets the trader once the position is closed (all securities sold)

const salidagreeting = () => {
  console.log(
    chalk.white(
      `\n\nPerfect.!! you are a Trader now...\n\nLet\'s go back to the Game Console...\n`
    )
  )
  balance = -1
  readlineSync.question(chalk.gray(`\n\nPress enter to continue..`), {
    hideEchoBack: true
  })
  if (readlineSync.keyInYNStrict('\nDo you want to restart the game ??? : ')) {
    again()
    startGame()
  } else {
    salida()
  }
}

// * This is a Goodbye greeting

const salida = () => {
  console.clear()
  topbanner()
  console.log(
    chalk.bold.italic(`\n\n\nThanks for Playing...\n\nHave a good Day.!!\n\n`)
  )
  process.exit()
}

// * This is the main Function that controls the flow of the game

const startGame = () => {
  console.clear()
  topbanner()
  description()

  if (option === 0) {
    demostration()
  } else if (option === 1) {
    console.clear()
    topbanner()
    nam = readlineSync.question(
      `\n\n* Welcome to Trader DOS, what is your name .??  `
    )
    console.log(`\n- Nice to meet you ${chalk.white.italic.bold(nam)}\n`)
    console.log(
      `\n\t\t\tAs a Funded Trader your balance starts at ${chalk.greenBright(
        '$ 10 500'
      )}`
    )

    console.log(
      chalk.white(
        `\n\n- We still workin on bringing more securities to the broker, meanwhile...`
      )
    )
    console.log(chalk.yellowBright.underline(`\nWe have this Stocks 4U :`))
    console.log(
      chalk.redBright(
        `\n\t\t\tStonks     >>\t${chalk.italic.yellowBright(
          '\tAmazon\t\tTesla\t\tApple'
        )}`
      )
    )
    console.log(chalk.cyan('\t\t\t\t\t\t AMZN\t\t TSLA\t\t AAPL'))

    let securities = ['Amazon', 'Tesla', 'Apple']
    marketorder = readlineSync.keyInSelect(securities, `Execute Market Order :`)

    if (marketorder === 0) {
      stonk = 'AMZN'
      while (balance > 0) {
        priceaction(stonk)
        priceupdate(stonk)
        letmetrade(stonk)
      }
    } else if (marketorder === 1) {
      stonk = 'TSLA'
      while (balance > 0) {
        priceaction(stonk)
        priceupdate(stonk)
        letmetrade(stonk)
      }
    } else if (marketorder === 2) {
      stonk = 'AAPL'
      while (balance > 0) {
        priceaction(stonk)
        priceupdate(stonk)
        letmetrade(stonk)
      }
    } else {
      salida()
    }
  } else {
    salida()
  }
}

console.clear()
console.log(
  chalk.white(
    `\nPlease Maximize your terminal....\nIt\'s crucial for the game to start\n\nPlease install chalk library :\fnpm install chalk`
  )
)
readlineSync.question(chalk.gray(`\n\nPress enter to continue..`), {
  hideEchoBack: true
})

startGame()
