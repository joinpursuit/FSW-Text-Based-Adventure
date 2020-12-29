const readline = require('readline-sync')

const introGameSequence = () => {
  
   let age = readline.questionInt
   age('Verify your age: \n');
   if (age >= 18) {
      console.log('Proceed with caution!');
      // loadingVisual()
   } else { 
     console.log('You are too young for the underbelly of the silver web');
     process.exit() 
  }
} 

 introGameSequence()