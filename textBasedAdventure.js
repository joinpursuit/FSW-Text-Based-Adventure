const readline1 = require('readline-sync')

let nameInput = readline.question("Enter your name: ")
console.log(`hello ${nameInput} please play my game `)
let age = readline.question("How young are you?")
if(age >18){
    console.log("lets goooooooo!")
}else{
    console.log("its cool proceed with ease!")
}
console.log(`Hello ${nameInput}!  Welcome to my game.`)

const boro = readline.question("Pick one of the 5 Boroughs")
switch (`${boro}`){
    case "1":
        console.log("Brooklyn, The best!")
    break;
    case "2":
        console.log("Manhattan, The most expensive!")
    break;
    case "3":
            console.log("Bronx, The cheapest!")
    break;
    case "4":
            console.log("Queens, The in-between!")
    break;
    case "5":
            console.log("Staten Island, New Jersey!")
    break;
}