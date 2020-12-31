const readline1 = require('readline-sync')

let nameInput = readline.question("Enter your name: ")

console.log(`I'm pleased to meet you ${nameInput}!`)

console.log(`Hello ${nameInput}!  Welcome to I've been around the world game `)

if(readLineSync.keyInYN(` Do you want to play deal or no deal around the world`)) {
    console.log(` Nice! can't wait to show you cool fact learn fun Fact in each country`)

} else { 
    console.log("It's small world! we will meet again");
}

const play = () => {
    console.log("Thank you for playing I've been around the world");
    console.log("Let's start by unscrabbling the first country");
    console.log("If you use the letter provided to find the correct country will advance you throughout the 10 countries to discover");
    console.log("If you can't get the country name you will be offer a deal for your briefcase");
    console.log("Each country stop you will only have up to three try or I will Win your briefcase");
 if(readLineSync.KeyInYN(" Are we ready to see the World!")) {
     startGame();
  } else {
    sellBriefcase();
  }

}

const gameOver = (computerWin) => {
    if(computerWin) {
        console.log("Would you like a Deal or No Deal?")
        console.log("If your Briefcase is more valuable than Bank offer")
        console.log("I will reveal the answer")
    }else {
        console.log("Great deal your case is more valuable")
    }

    if(readLineSync.KEYINYN("Ready for your answer?")) {
       console.log(country);
       play();
    } else {
        console.log("It's a small world we will meet again");
         leaveGame();
    }

}

const startGame = () => {
  console.log

}
let names = ["a", "b", "c"]

for name in names {
    print(name)
}



