const readlineSync = require('readline-sync')

const startGame = () => {
   console.log("Welcome") 
let answer = readlineSync.keyInYN("Are you ready?")
if (answer) {
    play()
} else {
    leaveGame()
    Process.exit()
}

}
const leaveGame = () => {
    let leavingAnswer = readlineSync.keyInYN("Aww man, it looks like you kicked the bucket\n Would you like to try again?")
    if (leavingAnswer) {
        play()
    } else {
        console.log("Goodbye")
    }
}

const youWin = () => {
    let winningResponse = readlineSync.keyInYN('Would you like to play again')
    if (winningResponse) {
        play()
    }else console.log("Goodbye")
}


const play = () => {

let nameInput = readlineSync.question("Enter your name: ")

let title = "A Warrior's Digest!"

console.log('Hello ' + nameInput)

console.log("Welcome to " + title)

console.log('You ' + nameInput + ' are a gifted warrior from the ancient lands of True North.\n After countless years away you have finally returned home. Only to find  ')
console.log('The objective of the game is to defeat the dragon and save your homeland.')

let arr = ["Sword", "Bow & Arrow"]

let warriorChoice = readlineSync.keyInSelect(arr, "Please, choose your weapon: ")

console.log(nameInput +' has chosen the ' + arr[warriorChoice])


console.log('There is a terrible dragon that has been destroying the lands of True North! \n You are the only hope for your lands survival!')

let arr2 = ["Head", "Body", "Tail"]
let question2 = readlineSync.keyInYN("Will you " + nameInput + " face said dragon now?") 
  if (question2 === true)  {
     let question3 = readlineSync.keyInYN("Will you use the " + arr[warriorChoice] + " to attack?")
    console.log(question3)
} else {console.log('Welp... the dragon ate you')
leaveGame()
process.exit()
}
if (question3 === arr2.length-2) {
    let question4 = readlineSync.keyInSelect(arr2, "where will you use the " + arr[warriorChoice] + " to attack next?")
console.log(question4)
} else {
    leaveGame()
    process.exit()
}
let question5 = readlineSync.keyInSelect(arr2, 'Where will you attack next?')
if (question5 === arr2.length-1) {
    console.log("Congratulations!!!!!!!!!!!!!!!\n You have slain the dragon!!!!!!!!!")
    youWin()
} else {
    leaveGame()
}

}


startGame()
