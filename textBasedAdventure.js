const readline1 = require('readline-sync')

const play = ()=>{
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
    default:
        console.log("you're not eligible to buy a baconeggandcheese!")
}
let howNy = readline.question("Are you from NYC, not upstate?")
if(howNy === "no"){
    console.log("its cool but you cant eat an baconeggandcheese")
} else if(howNy === "yes"){
    console.log("you can get a baconeggandcheese, if you dont eat pork, we have vegan options and turkey bacon")
}
let firstSurvey = readline.question("how do you say Tremont A or B?")
if(firstSurvey ==="A"){
    console.log("Tree-Mott")
    console.log("Tree-Mont")
}else if(firstSurvey ==="B"){
    console.log("Tre'Mont nahhhhh unless you speak French")
    console.log("you dont know how to say it its cool no one goes there!")
}


}
const bustelloCafe =()=>{
    let sugarAmount;
    sugarAmount = readline.question("How much sugar in your Bustello?")
    if(sugarAmount === "None"){
        readline.question("you are from another world, you need a sugar at least")
    }
    while(sugarAmount ===3){
        if(Number(sugarAmount>3)){
            console.log("check your blood sugar, con tres is the max")
        } else if(Number(sugarAmount<3)) {
            console.log("check if you were born on earffff")
        }else{
            console.log("youre gucci!")
        }
    }
}
bustelloCafe()
play()