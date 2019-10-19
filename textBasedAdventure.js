const readline = require('readline-sync')

let nameInput = readline.question("Please enter your name: ")

let name = nameInput
const fail = "you died"
const beat = "Congrats you beat have escaped"
const secret = "you've found the super mario secret pipe that sends you to world 3, you beat the game. You and Ban have escaped congrats... tell no one about this."
const theTen = Math.random
const arr2 = [1,2,3,4,5,6,7,8,9]
const arr = ["blue","yellow","red","green","black","white","brown","pink","silver"]


const roomThree = () => {
    console.log(" ")
    userInput = readline.question("Congratulations, \
    You and Ban enter Room 3" + " \
    Room 3 contains six doors\
     " + "make your pick " + "\
     please enter a number between 1 and 6 ")
        if(userInput === "1" ||userInput === "2"||userInput === "3") {
            roomFour()
        } else {    
            console.log(fail)
        }
    }

    const roomFour = () => {
        console.log(" ")
        userInput = readline.question("Props!, \
        You and Ban enter Room 4" + " \
        Room 4 contains eight doors\
         " + "make your pick " + "\
         please enter a number between 1 and 8 ")
            if(userInput === "1" ||userInput === "3"||userInput === "5"||userInput === "6") {
                roomFive()
            } else {    
                console.log(fail)
            }
        }


        const roomFive = () => {
            console.log(" ")
            userInput = readline.question("Hip, hip, hurrah!, \
            You and Ban enter Room 5" + " \
            Room 5 contains ten doors\
             " + "make your pick " + "\
             please enter a number between 1 and 10 ")
                if(userInput === "1" ||userInput === "3"||userInput === "8"||userInput === "9"||userInput === "5") {
                    roomSix()
                } else if (userInput === "7"){
                    console.log(secret)
                } else {    
                    console.log(fail)
                }
            }



            const roomSix = () => {
                console.log(" ")
                userInput = readline.question("Kudos!, \
                You and Ban enter Room 6" + " \
                Room 6 contains twelve doors\
                 " + "make your pick " + "\
                 please enter a number between 1 and 12 ")
                    if(userInput === "5" ||userInput === "9") {
                        roomSeven()
                    } else {    
                        console.log(fail)
                    }
                }


                const roomSeven = () => {
                    console.log(" ")
                    userInput3 = readline.question("Hats off!, \
                    You and Ban enter Room 7" + " \
                    Room 7 contains a blue door, a yellow door, a red door, a green door, a black door, a white door, a brown door, a pink door, and a silver door\
                     " + "make your pick " + "\
                     please enter in one of the door colors ")
                    //  for (let i = 0; i < arr.length; i+=3) 
                     let i = 0
                     while(i < arr.length){
                        userInput3 === arr[i]
                     }
                     i+=3; {
                        if(userInput3 = arr[i]) {
                            break ;
                            roomEight()
                        } else {    
                            console.log(fail)
                        }
                    }
                }


                    const roomEight = () => {
                        console.log(" ")
                        userInput = readline.question("Mazel tov!, \
                        You and Ban enter Room 8" + " \
                        Room 8 contains two doors \
                         " + "make your pick " + "\
                         please enter a number between 1 and 2 ")
                            if(userInput === "1" ||userInput === "2") {
                                roomNine()
                            } else {    
                                roomNine()
                            }
                        }

                        const roomNine = () => {
                            console.log(" ")
                            userInput2 = readline.question("Respects, \
                            You and Ban enter Room 9" + " \
                            Room 9 contains ten doors\
                             " + "make your pick " + "\
                             please enter a number between 1 and 10 ")
                             for (let i = 0; i < arr2.length; i+=2) {
                             userInput2 === arr2[i] 
                                if(userInput2 = i % 2 === 0) {
                                    roomTen()
                                    break ;
                                } else {    
                                    console.log(fail)
                                }
                        }
                    }

                            const roomTen = () => {
                                console.log(" ")
                                userInput = readline.question("Cannot Believe you have made it this far, You and Ban enter room 10. Room 10 contains no doors, however there is a button on the floor that someone must stand and stay on for the final\
                                door to stay open, this means only one person can leave. \
                                Ban glances at you and throws a punch. You fall to the floor, \
                                You notice a knife across the room, Ban does too. You and Ban each \
                                attempt to get the knife. \
                                let us leave this up to chance. Will you? \
                                Please enter 1 for Yes or 2 for No ")
                                    if(userInput === "1") {
                                              if(theTen <= 0.34) {
                                             console.log("you killed Ban and placed his body on the button and you found you way to freedom... and into police custody")
                                          } else if(theTen <= 0.67) {
                                            console.log("Ban Killed you... Well he wasn't your friend")
                                             } else {
                                             console.log("You and Ban fought over the knife and Killed each other")
                                        }
                                    } else {    
                                        console.log("You were too weak to take a life in order to save your own, and it costed you... You had a painful death")
                                    }
                                }
                    



console.log("You wake up in a dark room, there is a faint smell of shit and urine. \
You see that your legs are tied and there is someone next to you. \
This person seems to be in the same predicament that you are in. \
They turn to you and start to speak.")
console.log(" ")
console.log(`Hey I'm Ban, well that's at least what my name tag reads,\
 I see that you have finally woken up. Your name appears to be ${nameInput}`)
 console.log(" ")
console.log(`A voice appears over a speaker, Hello Ban and ${nameInput}.\
 There are many questions that you both may have, \
 however the answer to the biggest question that you both may have is, \
 yes there is a way to escape from this room. \
 If you can get out of my maze rooms then you may leave.\
 but any wrong turns will result in death, well at least most of the time`)
 console.log(" ")
console.log("Ban turns to you and says " + '"I do not know what is going on, ' + `${nameInput}` + ', \
but I hope we both make it out of here. \
I will attempt the first move and depending on if I do well or not you can go after"')
console.log(" ")
console.log("you and Ban enter Room 1")
console.log("Room 1 contains two doors")
console.log(" ")
console.log("okay, " + `${nameInput}` + ". I will pick Door number 2")
console.log("Door number two was the correct door")
console.log(" ")
userInput = readline.question("Fantastic, \
You and Ban enter Room 2 " + " \
Room 2 contains four doors \
 " + "make your pick " + "\
 please enter a number between 1 and 4 ")
    if(userInput === "1" ||userInput === "2") {
        roomThree()
    } else {    
        console.log(fail)
    }
