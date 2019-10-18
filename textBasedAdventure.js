const readline = require('readline-sync')

var readlineSync = require('readline-sync');
var userName = readlineSync.question('May I have your name? ');

console.log('Hi ' + userName + '!');


function gamePlay () {
  let userInput;

  while (userInput !== 'yes'){
      userInput = readline.question(`${userName} would you like to find out which type of runner you are? 'yes' or 'no'`)
  } 
  console.log(`I am so glad you said yes`);

  let worldPick;
  worldPick = readline.question(`${userName} on a scale from 1-3, how much do you run? (note: 1 being the least amount, 3 the highest)`);{
console.log(worldPick)}
    if(worldPick === '2'){
      escapedConvict();
    }else if(worldPick === '1'){
      portableDJ();
    }else if(worldPick === '3'){
      enduranceAudioBookRunner();
    }else(console.log(readline.question(`${userName} on a scale from 1-3, how much do you run?`)))
  }

function enduranceAudioBookRunner() {
  let books = ['I love reading multiple books at once?', 'Does the book include music lyrics?', 'I once read The Webster Dictionary', 'I used to read a lot, now I run a lot.', 'ReAd?!?' ]

  let worldA;
  worldA = readlineSync.keyInSelect(books, `${userName} How often do you read?`)
  worldA = readline.question(`${userName} do you live with a roommate? 'yes' or 'no'`);{
    if(worldA !== 'no'){
      worldA = readline.question(`${userName} do you guys share a bunk bed? 'yes' or 'no'`);
      if(worldA !== 'no'){
        escapedConvict()
      }else if(worldA !== 'yes' ){
        readline.question(`${userName} do you enjoy reading really fast? 'yes' or 'no'`);
        if(worldA !== 'no'){
          escapedConvict()
        }else if(worldA !== 'yes'){
          readline.question(`${userName} do you enjoy audio books? 'yes' or 'no'`);
        }else if(worldA !== 'no'){
          console.log(`WOW! ${userName} you must really enjoy to read`)
        }else if(worldA !== 'yes'){
          portableDJ()
        }
    }
    }else if (worldA !== 'yes'){
      readline.question(`${userName} do you enjoy long runs to Barnes and Nobel? 'yes' or 'no'`);
      if(worldA !== 'yes'){
        readline.question(`${userName} do you buy youre books from amazon? 'yes' or 'no'`);
      }else if(worldA !== 'no'){
        readline.question(`${userName} do your friends consider you a bookworm?`);}
        if(worldA !== 'yes'){
          console.log(`${userName} you are what other runners call an "An Audio-Book
          Endurance Runner," you enjoy long reads by Geroge Orwell, you enjoy getting
          lost in your long runs just as much as you love getting lost in the pages of
          the new book you just bought from a local barnes and nobles that you saw in
          route of your long run`);
          readlineSync.question('May I have your name? ');
        }else if(worldA !== 'no');{
            portableDJ ();
          }
          
          }
        }
      }



const portableDJ = () => {
  let worldC;

  worldC = readline.question(`${userName} is a walkman a MUST when goin out for a run?`);
  if(worldC !== 'yes'){
    readline.question(`${userName} be honest, do you even know what a walkman man is?`);}
    if(worldC !== 'no'){
      let nameInput = readline.question("Which year were you born in?")
      let bornYear = true;
      while(bornYear === 1999);{
         if(Number(bornYear > 1999)) {
          console.log(`🤮 you're a 👶`)
          escapedConvict()
        } else {
          console.log('😎')
        }
      }
  }else if(worldC !== 'yes'){
    readline.question(`${userName} are you a firm believer that a good playlist will be an indicator of how succesful your run will be?`)
    if(worldC !== 'no'){
      readline.question(`${userName} who is you're favorite artist?`)
      var favArtist = readlineSync.question('Who is your favorite artist? ',{
        hideEchoBack: true
      });
      console.log('Oh, ' + userName + ' loves ' + favArtist + '!');
    }else if(worldC !== 'no'){
      let nameInput = readline.question("Which year were you born in?")
      let bornYear = true;
      while(bornYear === 1999);{
         if(Number(bornYear > 1999)) {
          console.log(`🤮 you're a 👶`)
          escapedConvict()
        } else {
          console.log(`😎 ${userName} although your age has nothing to do with it, in the running community
          you're what we call a portable DJ. whether you still use a walkman or your phone to get you through
          those miles. You have a playlist set to amp you up on your running adventure.` );
          readlineSync.question('May I have your name? ');
        }
      }
  }
  }
}



const escapedConvict = () => {
  let worldB;
  worldB = readline.question(`${userName} do you recieve at least 1 hour of sunlight? 'yes' or 'no'`)
  if(worldB !== 'no'){
    readline.question(`${userName} do all your friends wear the same color outfits? 'yes' or 'no`)
    if(worldB !== 'no'){
      readline.question(`${userName} does the color orange mean anything to you? 'yes' or 'no'`)
    }else if(worldB !== 'no'){
      readline.question(`${userName} so you must be in a boy band or something? 'yes' or 'no'`);
      if(worldB !== 'yes'){
        readline.question(`${userName} did you or have you have had trouble with the law? 'yes' or 'no'`)
        if(worldB !== 'no'){
          console.log(`${userName} it seems to like like you are not a runner but an 'Escaped Convict'.
          I do not know what you did and to be honest, the less I know the better. The only suggestion
          I have for you is that, you can't and must not stop. Keep on going!!!`);
          readlineSync.question('May I have your name? ');
        }
      }
    }
  }else if(worldB !== 'yes'){
    portableDJ()
  }



}

gamePlay()
enduranceAudioBookRunner()
escapedConvict()
portableDJ()