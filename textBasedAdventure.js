const readline = require('readline-sync')

let nameInput = readline.question("Please enter your name: ")

let name = nameInput
const fail = "you died"
const beat = "Congrats you beat have escaped"
const secret = "you've found the super mario secret pipe that sends you to world 3, you beat the game. You and Ban have escaped congrats... tell no one about this."



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
                    userInput = readline.question("Hats off!, \
                    You and Ban enter Room 7" + " \
                    Room 4 contains a blue door and a red door\
                     " + "make your pick " + "\
                     please enter number 1 for the blue door or number 2 for the red door ")
                        if(userInput === "1") {
                            roomEight()
                        } else {    
                            console.log(fail)
                        }
                    }



                    const roomEight = () => {
                        console.log(" ")
                        userInput = readline.question("Mazel tov!, \
                        You and Ban enter Room 8" + " \
                        Room 8 contains 2 doors \
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
                            userInput = readline.question("Respects, \
                            You and Ban enter Room 9" + " \
                            Room 9 contains 10  doors\
                             " + "make your pick " + "\
                             please enter a number between 1 and 6 ")
                                if(userInput === "7") {
                                    roomTen()
                                } else {    
                                    console.log(fail)
                                }
                            }

                            // const roomTen = () => {
                            //     console.log(" ")
                            //     userInput = readline.question("\
                            //     you and Ban enter room 10" + " \
                            //     Room 10 contains no doors\
                            //     however there is a button on the floor that\ 
                            //     someone must stand and stay on for the final\
                            //     door to stay open
                            //      " + "make your pick " + "\
                            //      please enter a number between 1 and 6 ")
                            //         if(userInput === "1" ||userInput === "2") {
                            //             Math.random {
                            //                 if (Math.random)
                            //             }
                            //         } else {    
                            //             console.log(fail)
                            //         }
                            //     }



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
