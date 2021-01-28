// I collaborated various ideas and took suggestions  from Du Min Chen (Pursuit fellow).
const readline = require('readline-sync')

function startGame() {
    // welcome to the user
    const nameInput = readline.question("Enter your name: ")
    console.log(`Hi, ${nameInput}. Welcome to my game!`)
    // asking user to play or not.
    if(readline.keyInYN("Would you like to play?"))
      {
       console.log("Let's start!")
      } 
      else 
      {
       leaveGame("Have a nice life!")
      }
    
let enterHouse = readline.question("You come acrose a strange house in the forest. Do you want to go in?(Hints:yes) \n")

if(enterHouse === "no") {
  leaveGame("You have selected to quit the game")
}
// 1st question start
let question = "You walk into the Kitchen found a freezer. In the freezer you see Chocolate,Ice-cream,and Beer. which one would you try? \n"
let options =['Chocolate', 'Ice-cream', 'Beer'];
let messages =[
  "The Chocolate is too sweet! The end.",
  "The Ice-cream is too cold! The end",
  "The Beer is just rigt!"
]
let answer =2;
basicQuestionBlock(question, answer, options, messages);
// 1st question end
// 2nd question start

 question = "You walk into the living room and see three chairs. A big, a medium,and a small one.Which one do you choose?\n"
 options=['big', 'medium', 'small'];
 messages =[
  "The chair is way too big. The end.",
  "The chair is kind of too big. The end.",
  "The small chair is right..."
]
 answer =2;
basicQuestionBlock(question, answer, options, messages)
// 2nd question end 
// 3rd question start
 question= "You walk into next room over and see three beds. a big, a medium,and a small one. Which one do you choose?\n";
 options =['big', 'medium', 'small'];
 messages =[
  "It's too hard and you can't sleep. The end!",
  "It's too soft and you can't sleep. The End!",
  "It's just right for you and you fall into deep sleep."
]
answer =2;
basicQuestionBlock(question, answer, options, messages)
// 3rd end
// 4th question start

question="During sleep, Every indidulal is having experinced with dream! what kind of dreams did you see in your sleep and do you know the meaning of that dream? \n"
options =['being chased', 'falling','flying']
messages =[
  'Being chased suggests you are running away from something that is causing you fear',
  'If you see the feeling of falling suggests that you are not afraid of changes',
  'A tough time flying in your dreams suggests that someone is stopping you from moving to next step in life'
]
answer =2;
basicQuestionBlock(question, answer, options, messages)
// 4th end 
// 5th start
question="You fall into deep sleep and you found yourself flying in the dream waht could be meaning of this dream?\n";
options =[
  'Being chased',
  'Falling',
  'flying'
  ]
messages =['causing fear', 
'not afraid of change', 
'stopping you from moving']
answer =2;
basicQuestionBlock(question, answer, options, messages)
//5th end
//6th start

question="You wake up to see three wolves looking at you!!\n";
options =['run', 'stay']
messages =[
  'The wolve looks so scary, run and never come back...!',
  'The wolve looks friendly, I want to stay.'

]
answer =0;
basicQuestionBlock(question, answer, options, messages)
//6th end 
// 7th start
question="You just save your life in this journey, What would you do if wolve attack you\n";
options =['nervous', 'create loud sound', 'fight back']
messages =[
"Don't be nervous",
"It's may not  working",
"You got it! hold your nerve and fight back"
]
answer =2;
basicQuestionBlock(question, answer, options, messages)
// 7th end
//8th start
question="What would you do during adventure journey?\n";
options =['stay together', 'alone']
messages =[
  'stay together, never leave team',
  'Not a good choice'
]
answer =0;
basicQuestionBlock(question, answer, options, messages);
//8th end
// 9th start
question="You have done very good job so far! would you deserve win?\n";
options =['yes','no']
messages =[
'Congratulation! Yes,you deserve win!!',
'Yes you did it, do not say no!'
]
answer =0;
basicQuestionBlock(question, answer, options, messages);
//9th end

leaveGame("You have completed the tough game!!.");
}
function leaveGame(myLastWish){
  console.log(myLastWish)
  if (readline.keyInYN("would you like to play again?"))
  {
    console.log("Let's Start!")
      startGame()
  }
  else
  {
    process.exit()

  }
}

startGame()

function basicQuestionBlock(question, answer, options, messages){
  let userAnswer = null;
  let userTryCount =0;
  //show the question with answer
  console.log(question + "  [" + options[answer]+ "]")
  // show the options
  userAnswer =readline.keyInSelect(options, "Please select: ");
  while(userAnswer != answer){
    // until user select the correct answer or 
    // user reached limit while loop will go on...
    // increase user try count
    userTryCount = userTryCount +1;
    console.log("You have" +(10 - userTryCount) + " try left...");
    // check if user try count exceeded, then end the game.
    if(userTryCount > 9)
    {
      leaveGame("You have tried 10 times. GoodBye!");
    }
    // show the question again.
    console.log(question + " [" + answer +"]");
    // show the option again
    userAnswer =readline.keyInSelect(options, "Please select: ");
  }
  console.log(messages[userAnswer]);
  
  return;
}

