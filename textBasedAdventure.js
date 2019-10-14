const readline = require('readline-sync')
const readlineSync = require('readline-sync')
// currentDefaultOptions = readlineSync.setDefaultOptions([newDefaultOptions])

let payGame = true
let playerHealth = 30
let position = {
    x : 0,
    y : 0
};

const upLeft = () =>{
    let upLeftChoice;
    while(upLeftChoice !== "u" && upLeftChoice !== "l" ){
        upLeftChoice = readline.question('Which room would you like to move to? Left [l], up [u] ');
        console.log(upLeftChoice)
    }

    if(String(upLeftChoice) === "u"){
        position["y"] += 1;
    } else if(String(upLeftChoice) === "l"){
        position["x"] -= 1;
    }
}

const upRight = () =>{
    let upRightChoice;
    while(upRightChoice !== "u" && upRightChoice !== "r" ){
        upRightChoice = readline.question('Which room would you like to move to? Up [u], right [r] ');
        console.log(upRightChoice)
    }

    if(String(upRightChoice) === "u"){
        position["y"] += 1;
    } else if(String(upRightChoice) === "r"){
        position["x"] += 1;
    }
}

const upDownRight = () =>{
    let upDownLeftChoice;
    while(upDownLeftChoice !== "u" && upDownLeftChoice !== "r" && upDownLeftChoice !== "d" ){
        upDownLeftChoice = readline.question('Which room would you like to move to? Up [u], Down [d], right [r] ');
        console.log(upDownLeftChoice)
    }

    if(String(upDownLeftChoice) === "u"){
        position["y"] += 1;
    } else if(String(upDownLeftChoice) === "r"){
        position["x"] += 1;
    } else if(String(upDownRight) === "d"){
        position["y"] -= 1;
    }
}

const upDownLeft = () =>{
    let upDownLeftChoice;
    while(upDownLeftChoice !== "u" && upDownLeftChoice !== "l" && upDownLeftChoice !== "d" ){
        upDownLeftChoice = readline.question('Which room would you like to move to? Up [u], Down [d], left [l] ');
        console.log(upDownLeftChoice)
    }

    if(String(upDownLeftChoice) === "u"){
        position["y"] += 1;
    } else if(String(upDownLeftChoice) === "l"){
        position["x"] -= 1;
    } else if(String(upDownLeftChoice) === "d"){
        position["y"] -= 1;
    }
}

const upDownLeftRight = () =>{
    lDownet upLeftChoice;
    while(upLeftChoice !== "u" && upLeftChoice !== "l" && upLeftChoice !== "d" && upLeftChoice !== "r" ){
        upLeftChoice = readline.question('Which room would you like to move to? Up [u], Down [d], left [l], right [r]');
        console.log(upLeftChoice)
    }

    if(String(upLeftChoice) === "u"){
        position["y"] += 1;
    } else if(String(upLeftChoice) === "l"){
        position["x"] -= 1;
    } else if(String(upDownRight) === "d"){
        position["y"] -= 1;
    } else if(String(upLeftChoice) === "r"){
        position["x"] += 1;
}
}

const upLeftRight = () =>{
    let upLeftChoice;
    while(upLeftChoice !== "u" && upLeftChoice !== "l" && upLeftChoice !== "r" ){
        upLeftChoice = readline.question('Which room would you like to move to? Up [u], left [l], right [r]');
        console.log(upLeftChoice)
    }

    if(String(upLeftChoice) === "u"){
        position["y"] += 1;
    } else if(String(upLeftChoice) === "l"){
        position["x"] -= 1;
    } else if(String(upLeftChoice) === "r"){
        position["x"] += 1;
}
}

const chestChance = () =>{
    let cContains;
    cContains = Math.floor((Math.random() * 4) + 1);
    return cContains
}

const chestContains = () =>{
    // chestChance()
    if(chestChance() === 1){
        console.log(`The chest contains a position. Your health went up by 4 pts`)
        playerHealth += 4
    } else if(chestChance() === 2){
        console.log(`The chest contained a booby trap. You took 6 pts of damage`)
        playerHealth -= 6
    } else {
        console.log(`The chest was empty. Better luck next time`)
    }
}

const chest = () =>{
    let findChest = Math.floor((Math.random() * 3) + 1)
    if( findChest === 1){
        let openChest;
        while(openChest !== "y" && openChest !== "n"){
            openChest = readline.question('You found a chest. Do you want to open it? Yes [y] No [n]');
        }
        if( String(openChest) === "y" ){
            chestContains()
        } else {
            console.log("Chest contain helpful items, open one next time")
        }
    }
}

chest()