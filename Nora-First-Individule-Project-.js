
// Not done yet: The game displays initial instructions about how to play 

//The game asks the user for his/her name and displays a welcome message

var readlineSync = require('readline-sync');
var userName = readlineSync.question('What is your name ? ');
console.log('Have you heared the greatest news ' + userName + ' ?! YOU are HERE!\n \nThinking about your feelings...');

//As a user, I want to be able to make decisions during the game
//The user must enter a string to make a decision
//The user must enter a number to make a decision
//There are at least 10 opportunities to make a decision

  feelings = ['Happy', 'Lazy', 'Angry', 'Sad'],
  index = readlineSync.keyInSelect(feelings, 'How do you feel ?');
console.log('From 1 to 5 how ' + feelings[index]);
var scale = readlineSync.question(' are you (when 1 is th lowest and 5 is the highest)? ');


//Invalid entires are re-prompted




