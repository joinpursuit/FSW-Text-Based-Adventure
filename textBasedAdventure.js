const readLineSync= require('readline-sync');
let nameInput = readLineSync.question("Enter your name: ")
console.log(`Hello ${nameInput}!  Welcome to my game!`)

 const howOldAreYou = () => {
     let age = Number(readLineSync.question("How old are you?"))
if (!age) {
    console.clear();
    console.log("Not a valid input")
    howOldAreYou();
} else if(age >= 18) {  
    console.clear();
    console.log("You are old enough to play this game!")
    startGame();
   } else if (age < 18){
     console.log("You are underage")
     exitGame();
}
}

const play = () =>{
    if (readLineSync.keyInYNStrict("Start?")) {
        console.clear();
        howOldAreYou();
        startGame();
        
    } else {
        console.log("Have a nice day!")
       exitGame();
    }
}

const phoenix = () => {
    console.log("Congratulations you have passed my riddle with that I shall send you off with a gift knowledge.")
    console.log("There are five paths that will lead you to your own demise and 5 paths that will lead you to the princess.")
    console.log("Once you reach the cave of the legendary Sphinx he willl ask you a questions.")
    console.log("One of the answer to his question represent information about the world in a simple, visual way.")
    console.log("They teach about the world by showing sizes and shapes of countries, locations of features, and distances between places.")
    tenCaves();
    console.clear();
}

const startGame = () => {
    console.log("Let's begin!")
    console.log("The princess is captured by the Sphinx and there is a rumor that the Sphinx hides the princess inside the cave.")
    console.log("You are chosen by the king to rescue the princess from the Sphinx.");
    console.log("Many knights have tried to rescue the princess but failed they are either get killed or lost in the cave.");
    console.log("The wizard warns you that only the wisest person can save the princess from the Sphinx");
    console.log("In order for you to save the princess and survive is to answer each riddle questions.");
    console.log("You 3 chances to answer each question.");
    console.log("If you failed to give a correct answer, you have to stay in the cave to be his slave or die.");
    console.log("If you successfully answered all the questions, the Sphinx will leave the town and release the princess.");
    if(readLineSync.keyInYNStrict("Are you sure you're up to the challenge? ")) {
        console.clear();
        tenCaves()
    } else {
        exitGame();
    }
    } 
const tenCaves = () =>{
    console.log("While you are on a task you were able to see 10 diffrent caves")
    let choices = readLineSync.question("Which cave would you like to enter? Cave1? Cave2? Cave3? Cave4? Cave5? Cave6? Cave7? Cave8? Cave9? Cave10?")
    if(choices === "Cave1"){
        console.clear();
        cave1();
    } else if (choices === "Cave2"){
        console.clear();
        cave2();
    } else if(choices=== "Cave3"){
        console.clear();
        cave3();
    } else if (choices === "Cave4"){
        console.clear();
        cave4();

    } else if (choices === "Cave5"){
        console.clear();
        cave5();

    } else if ( choices === "Cave6"){
        console.clear();
        cave6();
    } else if ( choices === "Cave7"){
        console.clear();
        cave7();
    } else if (choices === "Cave8"){
        console.clear();
        cave8();
    } else if (choices === "Cave9"){
        console.clear();
        cave9();
    } else if (choices === "Cave10"){
        console.clear();
        cave10();
    } else if(choices !=="Cave1" && choices !=="Cave2" && choices !=="Cave3" && choices !=="Cave4" && choices !=="Cave5" && choices !=="Cave6" && choices !== "Cave7" && choices !== "Cave8" && choices !== "Cave9" && choices !== "Cave10"){
        console.clear();
        console.log("Not a valid answer, must choise Cave1, Cave2, Cave3, Cave4, Cave5, Cave6, Cave7, Cave8, Cave9, and Cave10")
        tenCaves();
        play()
    }

}
const cave1 =() =>{
    console.log("Cave 1 is full of insanely venomous snakes and there is no way out! Try again!")
    gameOver(true);
    play(false);
}

const cave2= () => {
    console.log("Cave 2 is a cage trap that looks like a regular cave. The Sphinx designed this trap without harming their prey.")
    console.log("Therefore, whoever tries to enter this cave is either eaten alive or turn into slaves.")
    gameOver(true);
}
const cave3 = () => {
    console.log("Cave 3 is a trap that is full of monster!")
    gameOver(true);
}

const cave4 = () => {
    console.log("Cave 4: You'll see an Ogre and you need to answer his questions. He will lead you back the way you came from.")
    console.log("If you lose, the ogre will eat you!")
    console.log("Here you go!")
    ogreQuestion();
}

const cave5 = () =>{
    console.log("You have entered the cave of the great Phoenix. Her beauty will distract you, but remember her fire may burn your skin. Answer her question and you shall live!")
    console.log("Here you go!")
    phoenixQuestion();
}

const cave6 = () =>{
    console.log("You have enetered Cave6 and step on the trap. You start falling into the iron spikes and die.")
    gameOver(true);
}

const cave7 = () => {
    console.log("This cave is the cave of Pixies. A small humanoid creature with pointy ears who likes to cause mischief. They will lead you back the way you came from.")
    console.log("Answer the questions with the correct answer and you shall live!")
    console.log("Here you go!")
    pixiesQ1();
    gameOver(true);
}

const cave8 = () => {
    console.log("In this cave you'll encounter an Imp. Imp is Small, mischievous creatures who liked to play pranks on people.")
    console.log("They will lead you back the way you came from. However, failed to pass the game and you will be forever lost inside the cave and die.")
    console.log("Here you go!")
    impQuestion();
    gameOver(true);
}

const cave9 = () => {
    console.log ("You are walking inside the cave when you hear something hissing, you thought it was a snakes.")
    console.log("It was too late when you realized that something is covering the entire cave and it was a poisonous gas.")
    console.log("You enhaled the gas and die from soffucation.")
    gameOver(true);
}

const cave10 =() =>{
    console.log("You will see a Sphinx and ask you a question. If you answer all the questions correctly,  the Sphinx will release the princess and leave the town forever.")
    console.log("Here you go!")
    question1();
}

const gameOver = (iWin) => {
    if (iWin){
        console.log("You lose")
        console.log("Goodluck on your journey!")

     } else {
        console.log("Congrats, you have saved the princess!!!")
        console.log("The Sphinx will leave and never coming back to the town!")
    }
    if(readLineSync.keyInYNStrict("Play again? ")) {
        console.clear();
        play();
    } else {
        exitGame();
    }

}
const ogreQuestion = () =>{
    let attempts = 3;
        while(attempts > 0){
        let question = readLineSync.question("I speak without a mouth and hear without ears. I have no body, but I come alive with wind. What am I? ")
        if(question === "echo" || question === "Echo") {
            console.clear();
            console.log("Your answer is correct!")
            tenCaves();

        } else {
            attempts--;
            console.log("Try again! You only have " + attempts + " guesses left!")
}           
        }
        gameOver(true);
    } 

const phoenixQuestion = () =>{
    let attempts = 3;
        while(attempts > 0){
         let question = readLineSync.question("You measure my life in hours and I serve you by expiring. I’m quick when I’m thin and slow when I’m fat. The wind is my enemy. What am I?")
        if(question === "candle" || question === "Candle") {
            console.clear();
            console.log("Your answer is correct!")
            phoenix();

        } else {
            attempts--;
            console.log("Try again! You only have " + attempts + " guesses left!")
}
    }
        gameOver(true);
       
    }


const pixiesQ1 = ()=>{
    let attempts = 3;
        while(attempts > 0){
    let question = readLineSync.question("If there are three apples and you take away two, how many apples do you have?" )
        if(question === "two apples" || question === "2 apples" || question === "2") {
            console.clear();
            console.log("Your answer is correct!")
            pixiesQ2();
        } else {
            attempts--;
            console.log("Try again! You only have " + attempts + " guesses left!")
}
        }
        gameOver(true);
        
}

const pixiesQ2 = () =>{
    let attempts = 3;
        while(attempts > 0){
        let question = readLineSync.question("What is seen in the middle of March and April that can’t be seen at the beginning or end of either month?" )
        if(question === "r" || question === "R") {
            console.clear();
            console.log("Your answer is correct!")
            tenCaves();
        } else {
            attempts--;
            console.log("Try again! You only have " + attempts + " guesses left!")
}
        }
        gameOver(true);
        
}

const impQuestion = () => {
    let attempts = 3;
        while(attempts > 0){
        let question = readLineSync.question("What word is pronounced the same if you take away four of its five letters?" )
        if(question === "queue" || question === "Queue") {
            console.clear();
            console.log("Your answer is correct!")
            tenCaves();
        } else {
            attempts--;
            console.log("Try again! You only have " + attempts + " guesses left!")
}
        }
        gameOver(true);
       
}

const question1 = () => {
    let attempts = 3;
        while(attempts > 0){
        let question = readLineSync.question("The more of this there is, the less you see. What is it?" )
        if(question === "darkness" || question ==="Darkness") {
            console.clear();
            console.log("Your answer is correct!")
            question2();
        } else {
            attempts--;
            console.log("Try again! You only have " + attempts + " guesses left!")
}
        }
        gameOver(true);
        
}

const question2 = () => {
    let attempts = 3;
        while(attempts >0){
            let question = readLineSync.question("I have cities, but no houses. I have mountains, but no trees. I have water, but no fish. What am I? " )
        if(question === "map" || question === "Map") {
            console.clear();
            console.log("Your answer is correct!")
            question3();
        } else {
            attempts--;
            console.log("Try again! You only have " + attempts + " guesses left!")
}
        }
        gameOver(true);
        
}

const question3 = () => {
    let attempts = 3;
        while(attempts > 0){
        let question = readLineSync.question("Where does today come before yesterday?" )
        if(question === "dictionary" || question === "Dictionary") {
            console.clear();
            console.log("Your answer is correct!")
            question4();
        } else {
            attempts--;
            console.log("Try again! You only have " + attempts + " guesses left!")
}
        }
        gameOver(true);
        
}

const question4 = () => {
    let attempts = 3;
        while(attempts > 0){
            let question = readLineSync.question("I am always hungry and will die if not fed, but whatever I touch will soon turn red. What am I?" )
        if(question === "fire" || question === "Fire") {
            console.clear();
            console.log("Your answer is correct!")
            question5();

        } else {
            attempts--;
            console.log("Try again! You only have " + attempts + " guesses left!")
}
        }
        gameOver(true);
        
}

const question5 = () => {
    let attempts = 3;
        while(attempts > 0){
            let question = readLineSync.question("What 4-letter word can be written forward, backward or upside down, and can still be read from left to right?" )
        if(question === "noon" || question === "Noon") {
            console.clear();
            console.log("Your answer is correct!")
            gameOver(false);
            play();
        } else {
            attempts--;
            console.log("Try again! You only have " + attempts + " guesses left!")
}
        }
        gameOver(true);
       
      
}

const exitGame = () => {
    console.log("Sad to see you go! Thank you for your time!")
    console.log("Goodbye!");
    process.exit();
  }
  play();