const rls = require("readline-sync");
const say = require("say");
const player = require('node-wav-player');
const chalk = require("chalk");
const startTitle = require("figlet");

startTitle("Silver Web", function (err, data) {
   if (err) {
     console.log("Something went wrong...");
     console.dir(err);
     return;
   }
   console.log(data);
 });


 const evacuate = () => {
   process.exit();
 };
 const startLoop = () => {
     let game = rls.keyInYN("\n\tDo you want to play again?\n\t");
 
         if (game) {
           gameIntro();
         } else {
           evacuate();
         }
 }
 
 
 
 const gameIntro = () => {
   let nameInput = rls.question("Enter your name: \n");
   let nInput = say.speak(`Hello ${nameInput}`);
   console.log(
     `\nHello ` + nInput + chalk.red` ${nameInput} ` + `Welcome to the game.`
   );
 
   let x = 18;
   let age = rls.questionInt("\nVerify your age: \n");
 
   age;
   if (age >= x) {
     player.play({
       path: "./Kani VO.wav",
     });
     console.log(`\n\tPROCEED WITH CAUTION!`);
     let rules = console.log(
       `\tThis isn't a game for the faint of heart. \n ` +
         chalk.blue("\tYou") +
         ` have decided you want to help us take down the worst offenders of the web. \n` +
         ` \tEach choice you make will send you deeper into the web where you will either choose to infiltrate until we can apprehend or risk getting caught. \n \tChoose wisely. They are always watching. \n`
     );
     rules;
 
     console.log(
       "\n\tGame Rules:" +
         chalk.yellow(
           "\n\tYou will be met with a series of questions and decisions that progress the story."
         )
     );
     console.log(
       "\n\tGoal:" +
         chalk.yellow(
           "\n\tYou want to make the choice that gets you closes to revealing the master mind in the game and bring their crime to light."
         )
     );
 
     // First in game scenario
     const choices = () => {
       let optionOne = ["Report", "Invitation"];
       let decisionOne = `\nWhich option will you be taking?`;
 
       console.log(
         `${nameInput} you have found an advertisement for an event that says ` +
           (chalk.underline.red(`invitation only.`) +
             ` You have the option to report your findings or try to get an invitation to this "exclusive" virtual gathering."`)
       );
 
       console.log(decisionOne);
       let index = rls.keyInSelect(optionOne);
 
       if (index == [0]) {
         console.log(
           "\nYour message has been intercepted. You've been compromised. They won't let you out alive."
         );
 
         // let startLoop = rls.keyInYN("\n\tDo you want to play again?\n\t");
 
         // if (startLoop) {
         //   gameIntro();
         // } else {
         //   evacuate();
         // }
         startLoop()
       } else if (index == [1]) {
         console.log(
           "\nYou find yourself tracing the IP address that posted the advertisement. Finish entering the last part of your trace by solving the question: \n"
         );
         let questOne = Math.floor(Math.random() * 20 + 1);
         let questTwo = Math.floor(Math.random() * 20 + 1);
 
         let solution = questOne * questTwo;
         let probSolve = rls.question(`What is ${questOne} * ${questTwo}: \n`);
 
         const userAnswer = () => {
           if (probSolve == solution) {
             let input2 = say.speak("Access Granted");
             console.log(input2 + chalk.green("\nACCESS"));
           } else if (probSolve != solution) {
             let input3 = say.speak("Warning! Warning!");
             console.log(
               input3 +
                 chalk.red("\nWARNING!") +
                 "They have located you trying to access their servers. We must shut down now❗️❗️❗️"
             );
             evacuate();
           }
         };
         userAnswer();
       }
     };
 
     const play = () => {
       let startQuestion = rls.keyInYN("\n\tDo you want to continue?");
       if (startQuestion) {
         choices();
       } else evacuate();
     };
 
     play();
 
     const alphaNumeric = (code, characters) => {
       let inviteCode = "";
 
       for (let i = code; i > 0; --i)
         inviteCode += characters[Math.floor(Math.random() * characters.length)];
       return inviteCode;
     };
 
     const choiceTwo = () => {
       let randomInvitationNumber = alphaNumeric(
         16,
         "01234456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
       );
       let decisionTwo = "What do you want to do?";
       let optionTwo = ["Place a bid", "Try to shutdown stream"];
 
       console.log(
         `\n\t\tGreat Work ${nameInput}! \n\n\tWe are one step closer. \n\tNow that you have an invitation you can attend the event. \n\tYou press enter and an alpha-numeric code generates invitation access: \n\n\t` +
           chalk.red(randomInvitationNumber) +
           ` \n\n\tOnce the code is entered, you gain entry where you are met with a waiting graphic of a red curtain and a very active participant chat of people saying \n\n\t'We hope this is as good as the last one. \n\n\tAfter about a 5 minute wait a live feed starts to stream of a man covered in a butcher's apron and a mask pushing an operation table with a long white sheet covering something. \n\tHe begins to speak ..."You who have been lucky enough to be invited are in for a treat." \n\n\t He then unveils what's hidden under the sheet. \n\n\tWhats revealed is a person who appears scared and bound. Right as the person is revealed the participants of the chat begin placing their bids for auction.\n\n\t` +
           decisionTwo
       );
 
       let index = rls.keyInSelect(optionTwo);
 
       if (index == [0]) {
         let instrumentArr = [
           "Tonsil Guillotine",
           "Ostetome",
           "Lithotome Caché",
           "Rectal Needle",
         ];
 
         console.log(
           chalk.green("\n\tYou are the highest bidder!") +
             ' You are then private messaged to choose a tool for the "operation"'
         );
 
         let index2 = rls.keyInSelect(instrumentArr);
 
         if (index2 == [0]) {
           console.log(
             `\n\n\t${instrumentArr[0]} has been chosen. You then watch the butcher begin to tear out the victim\'s tonsils. As they attempt to scream in agony. `
           );
         } else if (index2 == [1]) {
           console.log(
             `\n\n\t${instrumentArr[1]} has been chosen. You see the butcher pick up the ostetome and start gliding it towards the bound subject. The butcher then starts cutting past the flesh and into the bone. `
           );
         } else if (index2 == [2]) {
           console.log(
             `\n\n\t${instrumentArr[2]} been chosen. The subject begins to scream `
           );
         } else if (index2 == [3]) {
           console.log(
             `\n\n\t${instrumentArr[3]} has been chosen. The subject begs not to be torchered ::You look away:: `
           );
         }
       }
       if (index == [1]) {
         console.log(
           "\nYou open a new terminal tab, but it appears someone has gained control of your command line"
         );
         let stream = [
           "Do you want to continue trying to stop the stream",
           "Do you want to return to place your bid",
         ];
         let streamChoice = rls.keyInSelect(stream);
 
         if (streamChoice == [0]) {
           console.log(chalk.red("You've been compromised"));
           startLoop();
         } else if (streamChoice == [1]) {
           choiceTwo();
         }
       }
 
        const choiceThree = () => {
            console.log('\nAfter the auction you are invited to a private chatroom with other participants of the auction. \n Where they congratulate you on your win:')
 
            let afterAuction = ['Continue with friendly banter', 'be direct and ask questions']
        }
     };
 
     choiceTwo();
   } else if (age < x) {
     console.log("You are too young for the underbelly of the silver web");
     evacuate();
   }
 };
 
 gameIntro();
 