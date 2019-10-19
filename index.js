const readline = require('readline-sync')

let nameInput = readline.question("Enter your name: ")

console.log(`Hello ${nameInput}!  Welcome to Journey to Light.`)
// console.log(`In this game, we will be...`)

let ageInput = readline.question(`How old are you ${nameInput}?: `)
if(ageInput <= 19){
    console.log(`Hey ${nameInput}, just missed the 90s by the hair of your nose.`)
} else if (ageInput > 19 && ageInput < 65){
    console.log(`That is a brilliant age ${nameInput}`)
} else if (ageInput >= 65 && ageInput < 110){
    console.log(`Wow ${nameInput}, I see you're of a golden age`)
} else {
    console.log("Does not compute, please try again.")
    ageInput = readline.question(`How old are you ${nameInput}?: `)
}

// console.clear()

console.log("You wake up in a cave with a sword and shield");
let choiceOne = readline.question(`Would you like to 'A' explore the cave or 'B' exit the cave: `)
    if(choiceOne === 'A'){
        console.log("You've disturbed a colony of bats. They attack. You are now dead.");
    } else if(choiceOne === 'B'){
        console.log("You are now outside. It is dawn, the birds are chirpping.");
        console.log("Your stomach growls. You are hungry. There is a berry tree to your left and a pond to your right.")
        let storyLine = readline.question(`Would you like to go to the berry tree 'A' or the pond 'B' :`)
    if(storyLine === 'A'){
        console.log("You pick a few berries and eat them. They were posionous. You are now dead")
    } else if(storyLine === 'B'){
        console.log("You go to the pond and use your shield to capture a fish.")
        console.log("You have a successful meal.")
        console.log("As you relax in the sun, you witness a wild horse approach the pond to drink water.")
        let storyLinePtTwo = readline.question(` Do you: 'A' attempt to mount the horse or 'B' shoo the horse away :`)
        if(storyLinePtTwo === 'A'){
            console.log("The horse takes to your kid approach and allows you to mount.")
            console.log("You horse takes you down a dirt road and you come to a fork.")
            let crossRoads = readline.question(`'A' go left or 'B' go right? :`)
                if(crossRoads === 'A'){
                    console.log("Dead end. Sorry, try again.")
                } else if(crossRoads === 'B'){
                    console.log("Along the side of this road, there is a woman walking. She asks for a ride.")
                    let hitchHiker = readline.question(`'A' allow her to ride with you or 'B' ignore her and continue on? :`)
                    if(hitchHiker === 'A'){
                        console.log("The woman you've encountered is a princess. She offers you an award to take her home.")
                        let princessRide = readline.question(`'A' accept her offer or 'B' decline: `)
                        if(princessRide === 'A'){
                            console.log("She guides you to her castle and introduces you to her parents")
                            console.log("They accept you as their daughters saviour and knight you")
                            console.log("You are now rich and live happily ever after.")
                        } else if(princessRide === 'B'){
                            console.log("The princess brings you to the front gate of her kingdom and leaves thanking you for your service.")
                            console.log("The princess makes one last offer to come inside and accept an award")
                            
                        }
                    } else if(hitchHiker === 'B'){
                        console.log("You run into a gang of bandits. They rob you of your shield, sword and horse then kill you.")
                    }
                }
            }
        } else if(storyLinePtTwo === 'B'){
            console.log("The horse took your act as an act of transgression. The horse tramples you to death.")
        }
    }


    