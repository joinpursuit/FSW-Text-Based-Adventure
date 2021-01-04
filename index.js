// const rls = require("readline-sync");
// const chalk = require("chalk");
// let bookbag1 = "";
// let eq1 = 10;
// let iq1 = 10;
// let money1 = 100; // each money point is equivalent to 100 dollars, so you begin with 10k in your inventory
// let resources = { money: money1, bookbag: bookbag1, iq: iq1, eq: eq1 };
// //console.table(resources);

// const play = () => {
//   if (
//     rls.keyInYN(
//       "Hello Human, my name is Valerie, but please call me VAL,\n if you so choose to take this journey with me, \nI will be your guide into your Virtual Altered Life. \nWould you like to take this journey with me? \nType 'y' for 'yes' and 'n' for 'no'."
//     )
//   ) {
//     startGame();
//   } else {
//     leaveGame();
//   }
// };

// const startGame = () => {
//   let startName = rls.question(
//     chalk.blue(
//       "Good choice human. You are about to embark \non the journey of a virual lifetime. \nBefore we move forward, what is your name? "
//     )
//   );
//   console.log(
//     chalk.magenta(
//       `It is very nice to make your acquaitance ${startName}, lets go over some game rules. `
//     )
//   );
//   console.log(
//     chalk.blue(
//       "there will be many multiple choice options during the game, plese type in the \n corresponding number of your choice in order to make a selection"
//     )
//   );
//   console.log(
//     chalk.blue(
//       "If you choose the cancel option the game ends there and you will have to run node to manually restart"
//     )
//   );
//   console.log(
//     chalk.red(
//       ` \nIn order to activate your Virtual Altered Life, \nyou must first follow me into the kitchen. \nLook over to the counterspace on the right of the sink. \nThere is a white plate with four different \ncolored pills on it. Please pour yourself \na glass of water and pick \none of these pills to swallow. `
//     )
//   );
//   pickAPill();
// };



// const pickAPill = () => {
//   (pills = [
//     chalk.yellow("yellow pill  (::::)"),
//     chalk.green("green pill   (::::)"),
//     chalk.grey("grey pill    (::::)"),
//   ]),
//     (pillsIndex = rls.keyInSelect(pills, chalk.red("Which pill?")));
//   switch (pills[pillsIndex]) {
//     case chalk.yellow("yellow pill  (::::)"):
//       startYellowLife();
//       break;
//     case chalk.green("green pill   (::::)"):
//       startGreenLife();
//       break;
//     case chalk.grey("grey pill    (::::)"):
//       startGreyLife();
//       break;
//     default:
//       let cancel = rls.question(
//         "Are you sure you want to cancel? Press 'r' to restart game, or any key to exit"
//       );
//       if (cancel === "r") {
//         let greeting = rls.question(
//           "Hello Human, my name is Valerie, but please call me VAL,\n if you so choose to take this journey with me, \nI will be your guide into your Virtual Altered Life. \nWould you like to take this journey with me? \nType 'y' for 'yes' and 'n' for 'no'."
//         );
//         if (greeting === "y") {
//           let startName = rls.question(
//             chalk.blue(
//               "Good choice human. You are about to embark \non the journey of a virual lifetime. \nBefore we move forward, what is your name? "
//             )
//           );
//           console.log(
//             chalk.red(
//               `It is very nice to make your acquaitance ${startName}, \nIn order to activate your Virtual Altered Life, \nyou must first follow me into the kitchen. \nLook over to the counterspace on the right of the sink. \nThere is a white plate with four different \ncolored pills on it. Please pour yourself \na glass of water and pick \none of these pills to swallow. `
//             )
//           );
//           pickAPill();
//         } else if ((greeting = "n")) {
//           console.log("goodbye maybe next time");
//         }
//       } else if (cancel !== "r") {
//         exitGame();
//       }
//   }
// };

// const startYellowLife = () => {
//   console.log(
//     "Welcome to your yellow life. Your inventory is pre-loaded with points and you will have oppurtunity to gain and loose points"
//   );
//   // let resources = { money : money1, bookbag : bookbag1, iq : iq1, eq : eq1}
//   // console.table(resources);
//   console.log(
//     `Welcome to your Yellow life. \nYou are 19 years old in your second year of \ncollege and student services as just emailed \nyou that you need to declare a major, something you \nhave been putting off for over a year. \nLook over the following majors and make a choice.`
//   );
//   majors = ["English", "Biology", "Computer Science"];
//   indexMajors = rls.keyInSelect(
//     majors,
//     "Type in the number that corresponds with your choice. Which major do you chooose?"
//   );
//   console.log(
//     chalk.blue(
//       majors[indexMajors] +
//         " majors incurs a higher tuition rate so you lose 30 money points"
//     )
//   );
//   resources.money = Number(resources.money) - Number("30");
//   console.table(resources);
//   console.log(
//     "3 yeaars go by in the blink of an eye and you are about to graduate, but in order to do that you must first pass all of your finals"
//   );
//   console.log(
//     "You have one " +
//       majors[indexMajors] +
//       ' final left \nto take before you can graduate. \nHere is your studyguide. Type in "f" for finished \nstudying when you are ready to take your final. \nGood lucik!! '
//   );
//   let EnglishStudy = rls.question(
//     "Please study the following definitions for your English final\n" +
//       "\ncolloquial language: the use of slang or informalities in speech or writing \n didactic text: from the Greek, literally means 'teaching'\n equivocation: falsification by means of vague or ambiguous language\n" +
//       "\n once you are finished studying, type in 'f' for finsihed and you will be able to begin your exam "
//   );
//   if (EnglishStudy === "f") {
//     englishChoices = ["Coyoquial", "Alliteration", "Coloquial"];
//     console.log("\n");
//     console.log(
//       "Which word means the use of slang or informalities in speech or writing "
//     );
//     eIdx = rls.keyInSelect(
//       englishChoices,
//       "type in the number corresponding with your choice"
//     );
//     if (englishChoices[eIdx] === "Coloquial") {
//       console.log("\n");
//       console.log(
//         "congragulations, you have passed your final and you have earned you college degree in English"
//       );
//       yardie();
//     } else if (englishChoices[eIdx] !== "Coloquial") {
//       console.log(
//         "I'm sorry you've failed your final and need to take another semester of college. You lose 3k, but you you still graduate so congrats!"
//       );
//       resources.money = Number(resources.money) - Number("30");
//       yardie();
//     }
//   }
// };

// const startGreenLife = () => {};
// const startGreyLife = () => {};
// const yardie = () => {
//   console.log(
//     "Your best friend is throwing you a graduation party so you head over to their house \nwhich is only two blocks from yours. As you are walking cheerfully \nalong you come across a yard sale with a huge sign that says \n“EVERYTHING is FREE, take whatever three items you want”. \nYou walk over to the table on the lawn \nand there are only four items left. \nYou can only choose three items to go into your book bag"
//   );
//   //A book on love languages, a solar powered calculator, A snow Globe, a thermometer.
//   yardItems = [
//     "book on Love Languages",
//     "Solar powered Calculator",
//     "Snow Globe",
//     "Thermometer",
//   ];
//   yardIdx = rls.keyInSelect(
//     yardItems,
//     "Since you can only take 3 out of the 4 items, you must choose the one item you will leave behind"
//   );
//   console.log(yardItems.splice(yardIdx, 1));
//   resources.bookbag = resources.bookbag + yardItems;
//   bookbag1 = bookbag1 + yardItems;
//   console.log(resources);
// };

// const willSmith = () => {
//   console.log(
//     "On your way home from the party, you bump into Will Smith who looks sweaty and frantic, he asks you if you have a thermometer. If you do he will give you 10k for it "
//   );
//   if (resources.bookbag.includes("Thermometer")) {
//     resources.money = Number(resources.money) + Number("100");
//     console.log("You are 10k richer!");
//   } else {
//     console.log(
//       "It's too bad you left the thermometer behind at the yardsale. No money for you..run"
//     );
//   }
// };


// const leaveGame = () => {
//   console.log("That's too bad :-( Good luck in life!");
//   process.exit();
// };



// play();

// console.table(["Audi", "Volvo", "Ford"])
// console.table({ firstname : "John", lastname : "Doe" });

//let resources = { money : money1, bookbag : bookbag1, iq : iq1, eq : eq1}
//console.table(resources);

// let name = rls.question("Can you answer two questions for me?\n Type 'yes' or 'no'.");
// if(name === "yes")
// console.log(`Good Morning, ${name}!`);

// const play = () => {
//     console.log("Welcome to Win or Lose a game of many possibilities")
//     console.log("Let's start with getting some money into your bank account.")
//     console.log("You will start the game with 1,000 dollars spend it wisely")

//     let college = rls.question("It's time to pick a major in college, Your choices are: computer science, nursing, liberal arts, or Marine Biology. In order to make a choice simply enter the first letter of your chosen major and press enter.\n")

// frameworks = ['Express', 'hapi', 'flatiron', 'MEAN.JS', 'locomotive'];
// index = rls.keyInSelect(frameworks, 'Which framework?');
// console.log(frameworks[index] + ' is enabled.');

//     // requires user to type Y or N
//     if (rls.keyInYN("Sound Good?")) {
//       startGame()
//     } else {
//       leaveGame()
//     }
//   }

//   const gameOver = (computerWin) => {
//     if (computerWin) {
//       console.log("I win")
//       console.log("I WIN!!!")
//       console.log("COMPUTERS WILL RISE UP AND DOMINATE THE EARTH!!!")
//     } else {
//       console.log("Congrats, but don't get cocky. I'll win next time")
//     }
//     if (rls.keyInYN("Play Again?")) {
//       play()
//     } else {
//       leaveGame()
//     }
//   }

//   const startGame = () => {let guessCount = 15
//     // lowest possible number they could choose
//     let bottom = 1
//     // highest possible number they could choose
//     let top = 10000
//     // while computer has guesses remaining
//     while (guessCount > 0) {
//       // guess in the middle to cut possible numbers in half
//       const guess = Math.floor((bottom + top) / 2)
//       console.log("My guess is " + guess)

//       if (rls.keyInYN("Am I right?")) {
//         // computer wins, guessed number is correct.
//         // call gameOver function with true to end the game
//         gameOver(true)
//       } else {
//         // decrement guesses
//         guessCount--
//         console.log("Yikes! I only have " + guessCount + "  guesses left!")
//         let highOrLow
//         while (highOrLow !== "high" && highOrLow !== "low") {
//           // user must type high or low to move past while loop
//           highOrLow = rls.question("Was I too high or too low? \n")
//           highOrLow = highOrLow.toLowerCase().trim()
//         }
//         console.log("Thanks, I'll guess better from now on")
//         if (highOrLow === "high") {
//           // adjusts top or bottom to narrow down correct guess.
//           top = guess - 1
//         } else {
//           bottom = guess + 1
//         }
//       }
//     }
//     // guessed fifteen times incorrectly. Human wins :-(
//     gameOver(false) }

//   const leaveGame = () => {
//     console.log("That's too bad :-( Good luck in life!")
//     process.exit()
//   }

//   play()

// const updateMoney = (money)=>{

// }

// direction = rls.keyIn('Left or Right? ', {limit: 'lr'});

// if(direction === "r"){
//     right = rls.keyIn("You are now on the set of Will Smith's latest blockbuster. \n You hear a pop sound in the sky just as you drop your phone. \n Press the letter 'u' if you look up, \n or press the letter 'd' if you look down.",{limit: 'ud'});
//     if(right === "d"){
//         console.log("As you start to reach down for your phone \n you realize that there are several scattered items at your feet. \n You must choose one item to put in your bookbag?")
//         groundStuff = ['Pen', 'diamond ring', 'brita water filter', '100 dollar bill', 'USB drive'];
//         index = rls.keyInSelect(groundStuff, 'Type in the number that corresponds with your choice. 3Which one do you chooose?');
//         console.log(groundStuff[index] + ' is now in your backpack.');
//         bookbag = bookbag + groundStuff[index]

//     } else if(right === "u"){
//         console.log("Your eyes do not deceive you, yes those are hundred dollar bills falling out of the sky")
//     console.log("At this point other passerbyers see the money and everyone is jumping up making a grab for the money")
//     console.log("You now have the option to use some of your iq points \n to figure out a way to grab the most \n amount of money efficiently. Choose how many iq points to use. \n type in the number that corresponds with your choice")
//     moneyChoice = [2,3,4]
//     newIndex = rls.keyInSelect(moneyChoice, 'Type in the number that corresponds with your choice. Which one do you chooose?');
//     console.log(moneyChoice[newIndex] + ` iq points is what you decided to use and it paid off, \n your genius solution allowed you to grab \n ${moneyChoice[newIndex]}k in hundred dollar bills. Way to go!`);
// if(newIndex = 4){
// money = money + 4000
// } else if(newIndex === 3){
//     money === money + 3000
//     } else if (newIndex === 2) {
//         money === money + 2000
//     }
//     }
// } else if(direction = "l"){
//     console.log('try')
// }

// let resourcesUpdate = [`bookbag contains: ${bookbag}`, `money balance: ${money}`]
// console.log(`here is an update of your resources:\n ${resourcesUpdate[0]}\n ${resourcesUpdate[1]}`)
// console.log("It's time to ")

// index = rls.keyInSelect(groundStuff, 'Which Item will you pick up from the floor?');
// console.log(groundStuff[index] + ' is now in your backpack.');

// highOrLow = rls.question("Was I too high or too low? \n")
//           highOrLow = highOrLow.toLowerCase().trim()
//         }
//         console.log("Thanks, I'll guess better from now on")
//         if (highOrLow === "high") {
//           // adjusts top or bottom to narrow down correct guess.

//   animals = ['Lion', 'Elephant', 'Crocodile', 'Giraffe', 'Hippo'],
//   index = rls.keyInSelect(animals, 'Which animal?');

//   if(animals[index] === "Lion"){
// console.log('Ok, ' + animals[index] + ' goes to your room.');
// resources.bookbag = resources.bookbag + "socks"
//   } else {
//       console.log("test")
//   }
// console.log(resources)

// make object that holds all the questions in it and then you can do a random function to get random quesitions.
// moneyOne = ['More than $102', 'Exactyly $102', 'Less than $102']
// console.log('Suppose you have $100 in a savings account \n earning 2 percent interest a year. After \n five years, how much would you have?')
// mOneIdx = rls.keyInSelect(moneyOne, 'type in the number corresponding with your choice');
// if(moneyOne[mOneIdx]==='More than $102'){
//    resources.money = Number(resources.money) + Number("03") - Number("90")
//     console.log("congragulations, you have gained 3 wealth points")
//     console.log(resources)
//}
// console.log('Ok, ' + animals[index] + ' goes to your room.');

// const moneyQuiz1 = ()=> {
//     moneyOne = ['More than $102', 'Exactyly $102', 'Less than $102']
//     console.log('Suppose you have $100 in a savings account \n earning 2 percent interest a year. After \n five years, how much would you have?')
//     mOneIdx = rls.keyInSelect(moneyOne, 'type in the number corresponding with your choice');
//     if(moneyOne[mOneIdx]==='More than $102'){
//         resources.money = Number(resources.money) + Number("03") - Number("90")
//         console.log("congragulations, you have gained 3 wealth points")
//         console.log(resources)
//         console.log('try another question, you are on a roll')
//         moneyQuiz2()
//     } else {
//         console.log("wrong answer but I'll let you go again")
//         moneyQuiz2()
//     }
// }

// const moneyQuiz2 = () =>{
//     moneyTwo = ["More", "Same", "Less"]
//     console.log('Imagine that the interest rate on your savings account \n is 1 percent a year and inflation is 2 percent a year. \n After one year, would the money in the account buy more than it does today, exactly the same or less than today?')
//     mTwoIdx = rls.keyInSelect(moneyTwo, 'type in the number corresponding with your choice')
//     if(moneyTwo[mTwoIdx]==="More"){
//         resources.money = Number(resources.money) + Number("04")
//         console.log('\n')
//         console.log("congragulations, you have gained 4 wealth points")
//         console.log(resources)
//     } else {
//         console.log("wrong answer but I'll let you go again")
//         moneyQuiz2()
//     }
// }

// const moneyQuiz3 = () =>{
//     moneyThree = []
//     console.log('question')
//     mThreeIdx = rls.keyInSelect(moneyThree, 'type in the number corresponding with your choice')
//     if(moneyThree[mThreeIdx]==="check"){
//         resources.money = Number(resources.money) + Number("04")
//         console.log('\n')
//         console.log("congragulations, you have gained 4 wealth points")
//         console.log(resources)
//     } else {
//         console.log("wrong answer but I'll let you go again")
//         moneyQuiz2()
//     }
// }

// const moneyQuiz4 = () =>{
//     moneyFour = []
//     console.log('question')
//     mFourIdx = rls.keyInSelect(moneyFour, 'type in the number corresponding with your choice')
//     if((moneyFour)[mFourIdx] === "check"){
//         resources.money = Number(resources.money) + Number('04')
//         console.log("congragulations, you have gained 4 wealth points")
//         console.log("resources")
//     } else {
//         console.log("wrong answer but I'll let you go again")
//     }
// }

// const moneyQuiz5 = () =>{
//     moneyFive = []
//     console.log('question')
//     mFiveIdx = rls.keyInSelect(moneyFive, 'type in the number corresponding with your choice')
//     if((moneyFive)[mFiveIdx] === "check"){
//         resources.money = Number(resources.money) + Number('04')
//         console.log("congragulations, you have gained 4 wealth points")
//         console.log("resources")
//     } else {
//         console.log("wrong answer but I'll let you go again")
//     }
// }

// const eqQuiz1 = () =>{
//     eqOne = []
//     console.log('question')
//     eOneIdx = rls.keyInSelect(eqOne, 'type in the number corresponding with your choice')
//     if((eqOne)[eOneIdx] === "check"){
//         resources.eq = Number(resources.eq) + Number('04')
//         console.log("congragulations, you have gained 4 eq points")
//         console.log("resources")
//     } else {
//         console.log("wrong answer but I'll let you go again")
//     }
// }

// const eqQuiz2 = () =>{
//     eqTwo = []
//     console.log('question')
//     eTwoIdx = rls.keyInSelect(eqTwo, 'type in the number corresponding with your choice')
//     if((eqTwo)[eTwoIdx] === "check"){
//         resources.eq = Number(resources.eq) + Number('04')
//         console.log("congragulations, you have gained 4 eq points")
//         console.log("resources")
//     } else {
//         console.log("wrong answer but I'll let you go again")
//     }
// }

// const eqQuiz3 = () =>{
//     eqThree = []
//     console.log('question')
//     eThreeIdx = rls.keyInSelect(eqThree, 'type in the number corresponding with your choice')
//     if((eqThree)[eThreeIdx] === "check"){
//         resources.eq = Number(resources.eq) + Number('04')
//         console.log("congragulations, you have gained 4 eq points")
//         console.log("resources")
//     } else {
//         console.log("wrong answer but I'll let you go again")
//     }
// }

// const eqQuiz4 = () =>{
//     eqFour = []
//     console.log('question')
//     eFourIdx = rls.keyInSelect(eqFour, 'type in the number corresponding with your choice')
//     if((eqFour)[eFourIdx] === "check"){
//         resources.eq = Number(resources.eq) + Number('04')
//         console.log("congragulations, you have gained 4 eq points")
//         console.log("resources")
//     } else {
//         console.log("wrong answer but I'll let you go again")
//     }
// }

// const eqQuiz5 = () =>{
//     eqFive = []
//     console.log('question')
//     eFiveIdx = rls.keyInSelect(eqFive, 'type in the number corresponding with your choice')
//     if((eqFive)[eFiveIdx] === "check"){
//         resources.eq = Number(resources.eq) + Number('04')
//         console.log("congragulations, you have gained 4 eq points")
//         console.log("resources")
//     } else {
//         console.log("wrong answer but I'll let you go again")
//     }
// }

// const iqQuiz1 = () =>{
//     iqOne = []
//     console.log('question')
//     iOneIdx = rls.keyInSelect(iqOne, 'type in the number corresponding with your choice')
//     if((iqOne)[iOneIdx] === "check"){
//         resources.iq = Number(resources.iq) + Number('04')
//         console.log("congragulations, you have gained 4 iq points")
//         console.log("resources")
//     } else {
//         console.log("wrong answer but I'll let you go again")
//     }
// }

// const iqQuiz2 = () =>{
//     iqTwo = ["Japan", "Nigeria", "New York City","Dubai"]
//     console.log('Where is the tallest building in the world located')
//     iTwoIdx = rls.keyInSelect(iqTwo, 'type in the number corresponding with your choice')
//     if((iqTwo)[iTwoIdx] === "check"){
//         resources.iq = Number(resources.iq) + Number('04')
//         console.log("congragulations, you have gained 4 iq points")
//         console.log("resources")
//     } else {
//         console.log("wrong answer but I'll let you go again")
//     }
// }

// const iqQuiz3 = () =>{
//     iqThree = ["savering","sadering","sabering","shavering"]
//     console.log('What is it called when a bottle of champagen is open with a sword')
//     iThreeIdx = rls.keyInSelect(iqThree, 'type in the number corresponding with your choice')
//     if((iqThree)[iThreeIdx] === "check"){
//         resources.iq = Number(resources.iq) + Number('04')
//         console.log("congragulations, you have gained 4 iq points")
//         console.log("resources")
//     } else {
//         console.log("wrong answer but I'll let you go again")
//     }
// }

// const iqQuiz4 = () =>{
//     iqFour = []
//     console.log('question')
//     iFourIdx = rls.keyInSelect(iqFour, 'type in the number corresponding with your choice')
//     if((iqFour)[iFourIdx] === "check"){
//         resources.iq = Number(resources.iq) + Number('04')
//         console.log("congragulations, you have gained 4 iq points")
//         console.log("resources")
//     } else {
//         console.log("wrong answer but I'll let you go again")
//     }
// }

// const iqQuiz5 = () =>{
//     iqFive = ["GI Joe","B B Gun", "cabbage patch kid", "Mr. Potato head"]
//     console.log('What was the first toy ever to be advertised on television')
//     iFiveIdx = rls.keyInSelect(iqFive, 'type in the number corresponding with your choice')
//     if((iqFive)[iFiveIdx] === "Mr. Potatoes Head"){
//         resources.iq = Number(resources.iq) + Number('04')
//         console.log("congragulations, you have gained 4 iq points")
//         console.log("resources")
//     } else {
//         console.log("wrong answer but I'll let you go again")
//     }
// }

// const healthQuiz1 = () =>{
//     healthOne = []
//     console.log('question')
//     healthOneIdx = rls.keyInSelect(healthOne, 'type in the number corresponding with your choice')
//     if((healthOne)[healthOneIdx] === "check"){
//         resources.health = Number(resources.health) + Number('04')
//         console.log("congragulations, you have gained 4 health points")
//         console.log("resources")
//     } else {
//         console.log("wrong answer but I'll let you go again")
//     }
// }

// const healthQuiz2 = () =>{
//     healthTwo = []
//     console.log('question')
//     healthTwoIdx = rls.keyInSelect(healthTwo, 'type in the number corresponding with your choice')
//     if((healthTwo)[healthTwoIdx] === "check"){
//         resources.health = Number(resources.health) + Number('04')
//         console.log("congragulations, you have gained 4 health points")
//         console.log("resources")
//     } else {
//         console.log("wrong answer but I'll let you go again")
//     }
// }

// const healthQuiz3 = () =>{
//     healthThree = []
//     console.log('question')
//     healthThreeIdx = rls.keyInSelect(healthThree, 'type in the number corresponding with your choice')
//     if((healthThree)[healthThreeIdx] === "check"){
//         resources.health = Number(resources.health) + Number('04')
//         console.log("congragulations, you have gained 4 health points")
//         console.log("resources")
//     } else {
//         console.log("wrong answer but I'll let you go again")
//     }
// }

// const healthQuiz4 = () =>{
//     healthFour = ["vitamins","minerals", "fiber","fats"]
//     console.log('Which of these is NOT considered a nutient')
//     healthFourIdx = rls.keyInSelect(healthFour, 'type in the number corresponding with your choice')
//     if((healthFour)[healthFourIdx] === "fiber"){
//         resources.health = Number(resources.health) + Number('04')
//         console.log("congragulations, you have gained 4 health points")
//         console.log("resources")
//     } else {
//         console.log("wrong answer but I'll let you go again")
//     }
// }

// const healthQuiz5 = () =>{
//     healthFive = ["6 to 11","2 to 3","3 to 5"]
//     console.log('How many servings of vegetables do we need each day?')
//     healthFiveIdx = rls.keyInSelect(healthFive, 'type in the number corresponding with your choice')
//     if((healthFive)[healthFiveIdx] === "check"){
//         resources.health = Number(resources.health) + Number('04')
//         console.log("congragulations, you have gained 4 health points")
//         console.log("resources")
//     } else {
//         console.log("wrong answer but I'll let you go again")
//     }
// }

// const moneyQuiz1 = ()=> {
//     moneyOne = ['More than $102', 'Exactyly $102', 'Less than $102']
//     console.log('Suppose you have $100 in a savings account \n earning 2 percent interest a year. After \n five years, how much would you have?')
//     mOneIdx = rls.keyInSelect(moneyOne, 'type in the number corresponding with your choice');
//     if(moneyOne[mOneIdx]==='More than $102'){
//         resources.money = Number(resources.money) + Number("03") - Number("90")
//         console.log("congragulations, you have gained 3 wealth points")
//         console.log(resources)
//         console.log('try another question, you are on a roll')
//         moneyQuiz2()
//     } else {
//         console.log("wrong answer but I'll let you go again")
//         moneyQuiz2()
//     }
// }

// const moneyQuiz2 = () =>{
//     moneyTwo = ["More", "Same", "Less"]
//     console.log('Imagine that the interest rate on your savings account \n is 1 percent a year and inflation is 2 percent a year. \n After one year, would the money in the account buy more than it does today, exactly the same or less than today?')
//     mTwoIdx = rls.keyInSelect(moneyTwo, 'type in the number corresponding with your choice')
//     if(moneyTwo[mTwoIdx]==="More"){
//         resources.money = Number(resources.money) + Number("04")
//         console.log('\n')
//         console.log("congragulations, you have gained 4 wealth points")
//         console.log(resources)
//     } else {
//         console.log("wrong answer but I'll let you go again")
//         moneyQuiz2()
//     }

// let resources = { money : money1, bookbag : bookbag1, iq : iq1, eq : eq1}
// console.table(resources);

// let greeting = rls.question("Hello Human, my name is Valerie, but please call me VAL,\n if you so choose to take this journey with me, \nI will be your guide into your Virtual Altered Life. \nWould you like to take this journey with me? \nType 'y' for 'yes' and 'n' for 'no'.");
// if(greeting === "y"){
//     let startName = rls.question(chalk.blue("Good choice human. You are about to embark \non the journey of a virual lifetime. \nBefore we move forward, what is your name? "))
//     console.log(chalk.red(`It is very nice to make your acquaitance ${startName}, \nIn order to activate your Virtual Altered Life, \nyou must first follow me into the kitchen. \nLook over to the counterspace on the right of the sink. \nThere is a white plate with four different \ncolored pills on it. Please pour yourself \na glass of water and pick \none of these pills to swallow. `))
//     pickAPill()
// }else if(greeting = "n"){
//     console.log('goodbye maybe next time')
// }

// console.log(chalk.blue('Hello world!'));

// let greeting = rls.question( if(greeting === "y"){
//     let startName = rls.question(chalk.blue("Good choice human. You are about to embark \non the journey of a virual lifetime. \nBefore we move forward, what is your name? "))
//     console.log(chalk.red(`It is very nice to make your acquaitance ${startName}, \nIn order to activate your Virtual Altered Life, \nyou must first follow me into the kitchen. \nLook over to the counterspace on the right of the sink. \nThere is a white plate with four different \ncolored pills on it. Please pour yourself \na glass of water and pick \none of these pills to swallow. `))
//     pickAPill()
// }else if(greeting = "n"){
//     console.log('goodbye maybe next time')
// }

// let greeting = rls. question (if(greeting = "y")){
//     let startName = rls. question(chalk.blue("good choice human. you are about to embark non the jhourney of a viural lifetime \before we move "))
// }
