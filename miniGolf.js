const readlineSync = require('readline-sync')


function startGolf() 
 // welcome to the game
 { const nameInput = readlineSync.question('Hello, what is your name ? \n')
    console.log(`Hi ${nameInput}, welcome to miniGolf. \n`)

    
    if(readlineSync.keyInYN('Would you like to play miniGolf ?\n')) {
        play()
    }
    else {
        leaveGolf()
    }

console.log('Okay then, from the back 9th let\'s get started. \n\n', 'miniGolf - Rules: \n\n', 'The virtual miniGolf course has 9 marked holes that are numbered. \n', 'Players must complete each hole in number order without skipping any hole. \n', 'Players hit the golf ball from the tee area and straight into the hole. \n', 'The objective is to make it into each hole in as few strokes as possible. \n\n', 'The game begins\, The maximum number of strokes per hole is 6. \n', 'If the 6-stroke fails\, the player receives one penalty stroke and scores 7 in the scorecard. \n\n')
console.log(' Scoring Terms            What It Means \n', 'Ace                      Hole in one  (One point) \n', 'Albatross/double eagle   Three strokes under par on a hole (Two points) \n', 'Eagle                    Two strokes under par on a hole. (Three points) \n', 'Birdie                   One stroke under par on a hole. (Four points) \n', 'Par                      Score a good player would expect to make on a hole or round. (Five Points) \n', 'Bogey                    One stroke over par on a hole. (Six points) \n', 'Double bogey             Two strokes over par on a hole  (Seven points) \n\n')


if(readlineSync.keyInYN('Now that you know the rules, are you ready to play ? \n')) {
    play()
}

else {
    leaveGolf()
}



}

 const leaveGolf = () => {
    console.log('Oh well, thanks from MiniGolf, come back soon. \n')
    process.exit()
}
//player swings
// ramdom number from 1 - 7
// use switch func.
// func if randNum = 1 go to next hole (console.log ("") )
// swing again = 
// else if randNum < 7 && ! > 7 
// swing again add sum of num 

const play = () => { 
  }
  //let hole1 = ''
  //let swing = ''
  //const play = () => {
    //if(readlineSync.keyInYN('? \n'))
    
  



play()



startGolf()
  