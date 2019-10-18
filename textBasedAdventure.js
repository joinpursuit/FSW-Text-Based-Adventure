const readline = require('readline-sync');

let nameInput = readline.question("Enter your name: ");
console.log(`Hello ${nameInput}!  Welcome to my game.`);


let ageInput = readline.question("How old are you?: ");
let age = (" ");
let ageAsNumber = " "
parseInt(age, 1000);
typeof ageAsNumber
console.log(age);

let guide = readline.question("Hey, I'm your Guide. I'll pop in from time to time, so see you soon!!");


let genderInput = readline.question("Are you Male or Female? ");
if(  "Male" && "male" || "Female" && "female" === genderInput)
console.log("Great!");
    




let player = readline.question("Do you want to play a math game? ");

let words = "Yes" && "yes";
let words2 = "No" && "no"

if(words === "Yes" && "yes"){
    console.log("Let's Go!!");
}else if(words2 === "No" && "no"){
    console.log("Aww Goodbye")
}



let gameInput = readline.question( "Question 1");
console.log(`What does this array print?`);


let numbers = [10,29,99];
console.log(numbers);

let guide2 = readline.question("Hey there, continue to press enter until you hit the answer option.");


let stringInput = readline.question("let sum = 0");
let stringInput2 = readline.question("for(let i = 0; i < numbers.length; i++){");
let stringInput3 = readline.question("sum += numbers[i]}");
let stringInput4 = readline.question("console.log(sum/numbers.length)");


let guide3 = readline.question("You have a timer for this one.");
let guide4 = readline.question("Here's 1 minute");
let numAnsr = {
    1: 20,
    2: 78,
    3: 39,
    4: 46,
};
console.log(numAnsr);


let answerInput = readline.question("Answer:");



let sum = 0;
for(let i = 0; i < numbers.length; i ++){
    sum += numbers[i];
}    if (answerInput != sum/numbers.length){
     console.log("wrong answer, Try again.")
}else if(answerInput === sum/numbers.length){
    console.log("...");
} else if(answerInput == sum/numbers.length){
console.log("Great job!!!!");
};

let answerInput2 = readline.question("Answer:");


console.log("Correct answer: " + sum/numbers.length);



let guide5 = readline.question("Hey I'm back. Did you get that First one right?: ");
let input1 = "Yes" || "yes";
let input2 = "No" && "no";

if(input1 === "Yes" || "yes" ){
    console.log("Yes!! Nice work!")
}else if (input2 = "No" || "no"){
    console.log("No!! Aww maybe next time.");
}else (' ');







let gameInput2 = readline.question( "Question 2");
console.log("what is an Object?");

let choice = {
    1: "An Object is a collection of key/value pairs.",
    2: "An Object provides a convenient way to store a collection of things.",
    3: "Objects allow us to reuse code so that we don't have to repeat ourselves.",
    4: "An object logs someting."
};
console.log(choice);


let answerInput3 = readline.question("Answer:");

let options =  choice;

    switch (options) {
      case "1":
            console.log("An Object is a collection of key/value pairs.");
            break;
      case "2":
            console.log("An Object provides a convenient way to store a collection of things.");
            break;
      case "3":
        console.log("Objects allow us to reuse code so that we don't have to repeat ourselves.");
        break;
        case "4":
                console.log("An object logs someting.");
                break;       
      default:
        console.log("Try again");
        
}


let answerInput4 = readline.question("Answer:");
if(answerInput4 === "1"){
    console.log("Nice!")
}else if(answerInput4 != "1"){
    console.log("Correct answer:" + " " + "1. An Object is a collection of key/value pairs.")

}



















