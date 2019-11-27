const readline = require('readline-sync')

// let nameInput = readline.question("Enter your name: ")

// console.log(`Hello ${nameInput}!  Welcome to my game.`)
let countc=0;
let countw=0;
let question1 = readline.question("Is Washington DC the capital city of the United States: ")
if(question1==="yes"){
    countc++;
    console.log("your answer is right");
}else if(question1==="no"){
    console.log("your answer is wrong");
    countw++;
}
let question2 = readline.question("Is Montgomery the capital city of Alabama: ")
if(question2==="yes"){
    countc++;
    console.log("your answer is right");
}else if(question2==="no"){
    console.log("your answer is wrong");
    countw++;
}
let question3 = readline.question("Is Phoenix the capital city of Arizona: ")
if(question3==="yes"){
    countc++;
    console.log("your answer is right");
}else if(question3==="no"){
    console.log("your answer is wrong");
    countw++;
}
let question4 = readline.question("Is Tallahassee the capital city of Florida: ")
if(question4==="yes"){
    countc++;
    console.log("your answer is right");
}else if(question4==="no"){
    console.log("your answer is wrong");
    countw++;
}
let question5 = readline.question("Is Honolulu the capital city of Hawaii ")
if(question5==="yes"){
    countc++;
    console.log("your answer is right");
}else if(question5==="no"){
    console.log("your answer is wrong");
    countw++;
}
let question6 = readline.question("Is Atlanta the capital city of Georgia: ")
if(question6==="yes"){
    countc++;
    console.log("your answer is right");
}else if(question6==="no"){
    console.log("your answer is wrong");
    countw++;
}
let question7 = readline.question("Is Des Moines the capital city of Iowa: ")
if(question7==="yes"){
    countc++;
    console.log("your answer is right");
}else if(question7==="no"){
    console.log("your answer is wrong");
    countw++;
}
let question8 = readline.question("Is Indianapolis the capital city of Indiana: ")
if(question8==="yes"){
    countc++;
    console.log("your answer is right");
}else if(question8==="no"){
    console.log("your answer is wrong");
    countw++;
}
let question9 = readline.question("Is Topeka the capital city of Kansas: ")
if(question9==="yes"){
    countc++;
    console.log("your answer is right");
}else if(question9==="no"){
    console.log("your answer is wrong");
    countw++;
}
let question10 = readline.question("what was the year of the Declaration of Independence: ")
        if(question10===1776){
            countc++;
            console.log("your answer is right");
        }else if(question10!=1776){
            console.log("your answer is wrong");
            countw++;
        } 
    }

    console.log(`your correct answers are ${countc} and the wrong ones ${countw}`)