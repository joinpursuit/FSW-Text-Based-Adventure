const readline = require('readline-sync')

let nameInput = readline.question("Enter your name: ")

console.log(`Hello ${nameInput}!  Welcome to my game.`)

let pAge = readline.question("Enter your age: ")
let playAgain=0;

for(let i=0; i <= playAgain; i++){  //for Loop

if(pAge > 18 ){
    console.log("You are old enough to play")
    console.log("This game is a maze game can you get out!")
    console.log("The only way to get out if you answer 5 riddles, ")

    let ans =0;
    let qAns= []
    while(ans <= 5){    // While loop
        qAns[0] = readline.question("What gets wet while it’s drying? ")
        if(qAns[0] === "a towel" || qAns[0] === "towel"){  // If statments
            ans++;
            console.log("Correct")
        }
        qAns[1] = readline.question("What comes down but never goes up? ")
        if(qAns[1] === "rain" || qAns[1] === "Rain"){
            ans++;
            console.log("Correct")
        }
        qAns[2] = readline.question("What goes up when rain comes down? ")
        if(qAns[2] === "A umbrella" || qAns[2] === "umbrella"){
            ans++;
            console.log("Correct")
        }
        qAns[3] = readline.question("What has a neck but no head? ")
        if(qAns[3] === "a bottle" || qAns[3] === "bottle"){
            ans++;
            console.log("Correct")
        }
        console.log("your score is "+ ans)
        qAns[4] = readline.question("What stays where it is when it goes off? ")
        if(qAns[4] === "alarm clock" || qAns[4] === "alarm"){
            ans++;
            console.log("Correct")
        }
        qAns[5] = readline.question("If you took two apples from three apples how many apples would you have? ")
        if(qAns[5] === "2" || qAns[5] === "two"){
            ans++;
            console.log("Correct")
        }
        qAns[6] = readline.question("What has hands but can’t clap? ")
        if(qAns[6] === "watch" || qAns[6] === "clock"){
            ans++;
            console.log("Correct")
        }
        qAns[7] = readline.question("What belongs to you but is used more by others? ")
        if(qAns[7] === "name" || qAns[7] === "your name"){
            ans++;
            console.log("Correct")
        }
        qAns[8] = readline.question("What has one head, one foot and four legs? ")
        if(qAns[8] === "bed" || qAns[8] === "a bed"){
            ans++;
            console.log("Correct")
        }
        qAns[9] = readline.question("Joe’s father had three sons – Snap, Crackle and …? ")
        if(qAns[9] === "Joe" || qAns[9] === "joe"){
            ans++;
            console.log("Correct")
        }

    }
        
    
} else {
    console.log("You are to young to play or are not human age SORRY!");
    break;
}

let gameOver = readline.question("You WON!!!! DO YOU WANT TO PLAY AGAIN? ")
switch(gameOver === "yes"|| gameOver === "Yes" ||gameOver === "YES"){
    case "yes":
        playAgain =1;
        break;
    case "no":    
        playAgain =0;
        break;
    default :
    console.log("No Values Found!")    

}
}
