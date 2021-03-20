const rls = require('readline-sync')

let nameInput = rls.question("Enter your name: ")
console.log(`Hello ${nameInput}!  Welcome to my game.`)
console.log('To play pick one of the options and answer as truthfully as you can!')
//criteria to enter game? age requirement? 
//


const startGame = () => {
  let answer = rls.keyInYN("Would you like to play?");
  if (answer) {
    console.log("Let's start!");
    pickColor();
  } else {
    console.log("Have a nice life!");
    quitGame();
  }
};

  const quitGame = () => {
    
  };


  function stayInOrLeave(){
    console.log('Its been a long work week. Would you rather watch netflix and order in OR go out to a bar and see if you meet new people?')
    let rather = ['Stay in!' , 'Go Out!']
    let index = rls.keyInSelect(rather, 'Which do you prefer?' )
    ratherChoice = rather[index]
    if(rather === 'Go Out!'){
      stayIn()
    } else if(rather === 'Stay in!') {
      goOut()
  
    }
  }
  function goOut(){
    console.log('You are going out, what do you wear:')
    let wear = ['Whatever I have on because I am always stylish baby!/I am going for clean and put together ' , ' Umm where am I going because, what is everyone else wearing I dont want to be dressed wrong?' , ' I am thinking monochrome but different textures']
    let index = rls.keyInSelect(wear, 'What do you wear?' )
    wearChoice = wear[index]
  
  
  }
  function stayIn(){
  console.log('You are staying in, how are you spending the night in?')
  let plan = ['I am calling my boo over because I am not about be alone with my thoughts', ' Well, I am ordering my favortie appetizer from this spot not too far, a meal from my favorite place, and dessert from the only place that gets it right. Maybe a glass of wine?' , ' Well there is an order to these things I am going to eat maybe have a drink or two and pick up where I left off on my show while looking over my planner ']
  let index = rls.keyInSelect(plan, 'How are you spending your night?' )
  planChoice = plan[index]
    
  }
  
function pickColor(){
  console.log('Its time to draw in your coloring book! \nOh no, you can only choose to color in one color! \nWhich is it going to be ?')
  let color = ['green' , 'brown' , 'blue' , 'red', 'orange', 'grey', 'yellow']
  let index = rls.keyInSelect(color, 'Which color?');
  // console.log('You chose:' + color[index]);
  colorChoice = color[index]
 
  switch(color){
    case [1] || [2]:
      stayInOrLeave()
      break; 
    case 'blue':
      wantAMillion()
      break;
    case 'red' || 'orange':
    break;
    case 'grey' || 'yellow':
      break;  
    default:
      console.log('Invalid input: there\'s no room for creativity here')
      startGame()
  } 
}


function wantAMillion(){

}



  startGame();