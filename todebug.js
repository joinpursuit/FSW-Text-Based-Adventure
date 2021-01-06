// * This section is dedicated to libraries

const readlineSync = require('readline-sync')
const readline = require('readline')
const chalk = require('chalk')

// * This section is dedicated to Declaration of constants and variables

let aa = false
let option = 99
let position = 0
var entryprice = 0
let stonk = 'AMZN'
var fee = 0
var equity = 0
var original = 10500
var balance = 10500
var indexp = 0
var PORTFOLIO = [0, 0, 0, 0, 0, 0, 0, 0]



/* This was hard to understand, I wanted to make a good presentation of the game
 From a github repo, I learned how to execute a shell command,    source: https://gist.github.com/harrypujols/2a6da11afbd9ee1bef92ddd3402a2fc4
 Google help me find this, apparently uses compiling languaje,    source: https://apple.stackexchange.com/questions/33736/can-a-terminal-window-be-resized-with-a-terminal-command/52054

const cmd = (command = 'clear') => {
  const exec = require('child_process').exec
  exec(command, (err, stdout, stderr) => {
    process.stdout.write(stdout)
  })
}
*/

// // * This Function
// function cursor (a, b) {
//   process.stdout.cursorTo(a, b)
// }

// * Here is the Introduction Page of the Game 

const introduction = (h = 0) => {

  console.clear()

  //cmd("printf '\\e[3;0;0t' && printf '\\e[8;50;190t'")
  for (let x = 1; x <= 188; x += 1) {
    process.stdout.write(chalk.bold.bgWhite(' '))
  }
  if (h === 0) {
    process.stdout.cursorTo(85, 0)
    process.stdout.write(chalk.bgWhite.black.bold(`TRADER DOS 2021`))
  }
}




const description = () => {
  process.stdout.cursorTo(1,5)
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

const priceaction = (stonk = '') => {
  function range (min, max) {
    spotprice = Math.random() * (max - min) + min
    spotprice = spotprice.toFixed(2)
    return spotprice
  }

  switch (stonk) {
    case 'AMZN':
      range(400, 700)
      entryprice = spotprice
      break
  }
  fee = (entryprice * 0.01).toFixed(2)
  return entryprice
}

const buy = stonk => {
  switch (stonk) {
    case 'AMZN':
      indexp = 3
      PORTFOLIO[3] += 1

      break
  }
}

const sell = stonk => {
  switch (stonk) {
    case 'AMZN':
      indexp = 3
      equity = PORTFOLIO[3] * entryprice
      PORTFOLIO[3] = 0
      return equity
  }
}

const check = (length = 7) => {
  for (let z = 0; z <= length; z += 1) {
    if (PORTFOLIO[z] != 0) {
      aa = true
    }
  }

  return aa
}

const menu1 = () => {
  console.clear()
  introduction(1)
  priceaction(stonk)
  if (option === 0) {
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
            ${chalk.cyan('\tAAPL\t\tTSLA\t\tAMZN')}${chalk.yellowBright(
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

    let buysell = ['BUY', 'SELL']
    position = readlineSync.keyInSelect(buysell, `I WANT TO       :`)

    if (position === 0) {
      buy(stonk)
      balance = balance - entryprice - fee
      balance = balance.toFixed(2)
      console.log(
        `\nCongratulations you bougth 1 AMZN stock at     :  $ ${chalk.white(
          entryprice
        )}\t\t\t\t\tBALANCE : $ ${balance}\t\tPORTFOLIO : ${
          PORTFOLIO[indexp]
        }  ${stonk}`
      )
      console.log(
        chalk.gray(
          `\n\nAs you can see, the Spotprice changes everytime.\nSo you can take advantage and sell for a profit or cut loses\nLet\'s sell your position ${chalk.white(
            PORTFOLIO[indexp] + ' ' + stonk
          )} ...`
        )
      )
      priceaction(stonk)
      console.log(
        chalk.gray(
          `\n\v\t\t\t\t Amazon stock   :  ${chalk.cyan(
            'AMZN'
          )} current price : $ ${chalk.white(
            entryprice
          )}\t\tBALANCE : ${chalk.white(
            '$ ' + balance
          )}\t\tTraderDOS Fee 1% ${chalk.redBright('$ ' + fee)}`
        )
      )

      if (readlineSync.keyInYNStrict(`\nDo you want to continue ??? : `)) {
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
        if (balance > original) {
          console.log(
            chalk.gray(
              `\n\nAmazing..!! It looks like you made a Profit of  : ${chalk.greenBright('$ ' + (balance - original).toFixed(2)
              )}`
            )
          )
        } else if (balance === original) {
          console.log(
            chalk.gray(
              `\n\nNot Bad..!! It looks like you ${chalk.blueBright(
                'break even'
              )}`
            )
          )
        } else {
          console.log(
            chalk.gray(
              `\n\nWoooaah..!! It looks like you took a  Loss  of  : ${chalk.redBright('$ '+ (balance - original).toFixed(2)
              )}`
            )
          )
        }
      } else {
        menu1()
      }
    } else if (position === 1) {
      check()

      if (aa === true) {
        sell(stonk)
        console.log(`\nYou sold 1 AMZN stock at : $ ${chalk.white(entryprice)}`)
      } else {
        console.log("\nYou don't have any position....")
        if (readlineSync.keyInYNStrict('\nDo you want to try again ??? : ')) {
          menu1()
        } else {
          process.exit()
        }
      }
    }
  } else if (option === 1) {
    readlineSync.question('\n\v\tWhats your name : ')
  }
}

const startGame = () => {
  console.clear()
  //cmd()
  //This is a general shell command to position terminal on left corner & sets up the terminal to 50 rows & 190 columns
  //cmd("printf \'\\e[2t\' && sleep 5 && printf \'\\e[1t\'")
  //readlineSync.question("\n\v\t New session initialized....\n\v\tEnter password : ")
  introduction()
  description()
  menu1()
}
//cmd("printf '\\e[3;0;0t' && printf '\\e[8;50;190t'")

startGame()
