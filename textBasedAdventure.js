const readline = require('readline-sync')

//3.You need help
for(let i = 0; i <= Infinity; i++)
    if (i !== 'y' || i === 'n'){
  let i = readline.question("You started your project and realized you're stuck, so you ask your friend Tom for help and he offers you a cup of coffee to keep you up. Do you take the coffee?[y/n]")
  if (i === 'y') {
  console.log("You drank the coffee")
  break
 } 
  if(i === 'n') {
  console.log("You didnt drink the coffee [Answer yes]");

 }
}

//4. Enter your password
menuId = readline.question('You forgot your password to your github, but you know that your last three passwords are either 369, 246, or 51015. Guess your password: ', {limit: 51015});

var readline = 51015 
switch (readline) {

case 369:
console.log("Incorrect Password")

case 246:
console.log("Incorrect Password")

case 51015:
console.log("Logging in...")
break;

default:
console.log("Incorrect Password")

}

//5. The coffee made you nervous
  choices = ['take a walk', 'watch TV', 'call Tom'],
  index1 = readline4.keyInSelect(choices, "You're caffeine sensitive! The coffee you drank made you nervous and you need to relax. What do you do?");
console.log('You decided to ' + choices[index1]);

//6. Finally start
answer = readline5.question('The caffeine wears off. Are you ready to start making your video game?', {
  trueValue: ['yes', 'y'],
  falseValue: ['no', 'n']
});
if (answer === true) {
  console.log("I'm ready to start");
//y was pressed
} else if (answer === false) {
  console.log("I don't know how to start!");
//n was pressed
} else {
//Unknown answer was pressed
  console.log('Invalid answer');
}

//7. Mom calls you for dinner
c
var eatDinner = readline6.question("Mom asks if you're coming downstairs for dinner [y/n] ", {
  trueValue: ['yes', 'y'],
  falseValue: ['no', 'n']
}); 

switch (true) {
case (eatDinner === true):
  console.log("What's for dinner?")
  break
case (eatDinner === false):
  console.log("No thanks, mom")
}

//8. What's for dinner
readline7.setDefaultOptions({limit: ['pizza', 'lasagna', 'not hungry']});
a1 = readline7.question('What do you want for dinner? [pizza, lasagna, not hungry] ');

//9.What do you want to drink
readline7.setDefaultOptions({limit: ['soda', 'water', 'juice']});
a1 = readline7.question('What do you want to drink? [soda, water, juice] ');

//10. Finish your video game
if(readline8.keyInYN("Do you want to complete your video game")) {
  // 'Y' key was pressed.
  console.log('You completed it');
 
} else {
  // 'N' was pressed.
  console.log('You never finish it');
  
}
 

