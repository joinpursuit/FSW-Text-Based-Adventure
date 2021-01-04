const readLineSync = require('readline-sync')

let array= []

const startGame = () => {
    array = ["time", "love", "power"]
    let nameInput = readLineSync.question("Enter your name: ")
    console.log(`Hello ${nameInput}!  Welcome to my game.`)
    if (readLineSync.keyInYNStrict("You  are in the 'dimension of imagination' and have encountered a magic wallet that lets you buy anything your heart desires. \nAre you ready to try your luck with destiny?")){
        gameFlow();
    } else {
        quitGame();
    }
}


const gameFlow = () => {
    console.clear()
    let options=readLineSync.keyInSelect(array, "Do you want to buy time, love, or power? ", {cancel: 'Must choose 1, 2, or 3'})
    if (array[options] === "time") {
        array.splice(options,1)
        time()
    } else if ( array[options]==="love") {
        array.splice(options,1)
        love()
    }else if (array[options] === "power") {
        array.splice(options,1)
        power()
    }else{
        gameFlow()
    }
}
 
const time = () => { 
   console.clear() 
   if (readLineSync.keyInYN("You can spin the wheel of time and the number you land on is the number of days you have left to live. \nYou can choose to keep your number or spin again. You can spin up to three times. Beware, not all the numbers are lucky ones \nand if you get 0 you can not spin again.")){
       let count= 2
       while (count >0) {
        const days = ['0', '365', 'infinite', '3650', '36500']
        const randomDays = days[Math.floor(Math.random() * days.length)]  
        console.log(`You have ${randomDays} days left to live.`)
        if (randomDays === "0") {
            readLineSync.keyInPause()
            moreOptions();
        }
           userInput =readLineSync.keyInYNStrict("Do you want to spin again?")
           if (userInput=== false) {
               readLineSync.keyInPause()
               moreOptions();
           } else if (userInput === true) {
               count--
               console.log(`${count} spin left`)
               if (count === 0) {
                   console.log(`You have ${randomDays} days left to live. `)
                   readLineSync.keyInPause()
                   moreOptions();
               }
           }
        }
        readLineSync.keyInPause()
        moreOptions()
   }
   readLineSync.keyInPause()
   moreOptions()
}        
            

const love = () => {
    console.clear()
    const lovers= ['true love', 'unrequited love', 'fake love']
    const random = Math.floor(Math.random() * lovers.length)
    if (readLineSync.keyInYNStrict("You will be randomly chosen a lover --- true love, unrequited love, or fake love. Are you ready?")) {
        if (lovers[random] === "true love") {
            console.log("You got a true love. You will spend the rest of your life with your true love!")
            readLineSync.keyInPause()
            moreOptions()
        } else if (lovers[random] === 'unrequited love') { 
            console.log("You got an unrequited love. You will spend the rest of your life loving someone who doesn't love you.")
            readLineSync.keyInPause()
            moreOptions()
        } else if (lovers[random] === "fake love") {
            console.log("You got a fake love, you will spend the rest  of your life with the person you do not love. ")
            readLineSync.keyInPause()
            moreOptions()
        }
    } else {
        console.log("Good choice, love can't be bought in the real world!")
        readLineSync.keyInPause()
        moreOptions()
    }
}

const power = () => {
    let scenario3=readLineSync.question("There are three curtains in front of you. Each curtain has a leader behind it.\nOnce you select a curtain, you will become that leader.\nPick curtain 1,2, or 3. Curtain: ")
    if (scenario3 === "1" || scenario3.toLowerCase() === "option 1") {
        console.log("You are Heinrich Himmler, the SS brain behind the Final Solution to the Jewish question \nleading to the brutal deaths of 6 millions Jews. Power in the wrong hands can be dangerous.")
        readLineSync.keyInPause()
        moreOptions()
    } else if (scenario3 === '2' || scenario3.toLowerCase() === "option 2") {
        console.log("You are Oprah Winfrey. With the longest running daytime talk show on televison and becoming\nthe first black billionaire, you will inspire others to own their power.")
        readLineSync.keyInPause()
        moreOptions()
    } else if (scenario3 === '3' || scenario3.toLowerCase()=== "option 3") {
        console.log("You are Mary Antoinette, the queen of France from 1774 to 1793. Your obliviousness to the poor\ncondiitons of your subjects has led to you to the guillotine.\nMaybe it's better to have a head rather than let power get to your head.")
        readLineSync.keyInPause()
        moreOptions()
    } else {
        console.log("Invalid entry.Try again")
        readLineSync.keyInPause()
        power()
    }
}

const moreOptions = () => {
    console.clear()
    let i =0
    let i2=1
    if (array.length===1) {
        if (array[i]==="time"){
            let options=readLineSync.keyInSelect(array, "Do you want to buy time? ", {cancel:"Must choose above option"})
            if (array[options] === "time") {
                array.splice(0,1)
                time()
            }
        }else if (array [i] === "power") {
            let options=readLineSync.keyInSelect(array, "Do you want to buy power? ", {cancel:"Must choose above option"})
            if (array[options]=== "power") {
                array.splice(0,1)
                power()
            }
        }else if (array[i] === "love") {
            let options=readLineSync.keyInSelect(array, "Do you want to buy love?", {cancel: "Must choose above option"})
            if (array[options] === "love") {
                array.splice(0,1)
                love()
            }
        }
    } else if (array.length===2){
         if (array[i] === "time" && array[i2] === "power"){
            let options = readLineSync.keyInSelect(array, "Do you want to buy time or power? ", {cancel: "Must choose above options"})
             if (array[options]==="time") {
                array.splice(options,1) 
                time()
             }else if (array[options] === "power") {
                array.splice(options,1)
                power()
             }
         } else if (array[i] === "love" && array[i2] === "power") {
             let options = readLineSync.keyInSelect(array, "Do you want to buy love or power? ", {cancel: "Must choose above options"})
             if (array[options] === "power") {
                 array.splice(options,1)
                 power()
             } else if (array[options] === "love") {
                 array.splice(options,1)
                 love()
             }
         } else if (array[i] === "time" && array[i2] === "love") {
             let options = readLineSync.keyInSelect(array, "Do you want to buy time or love? ", {cancel: "Must choose above options"})
             if (array[options] === "love") {
                 array.splice(options,1)
                 love()
             } else if (array[options] === "time") {
                 array.splice(options, 1)
                 time()
             }
         }
    } else if (array.length=== 0) {
        if (readLineSync.keyInYNStrict("Do you want to restart game?")) {
            console.clear()
            startGame()
        } else {
            quitGame()
        }
    }
}

const quitGame= () => {
    console.log("Congrats, you've left the Twilight Zone. Come back if you dare.");
    process.exit()
};

startGame();