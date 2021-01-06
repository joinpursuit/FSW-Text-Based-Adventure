const rls = require('readline-sync')

// let nameInput = rls.question("Enter your name: ")

// console.log(`Hello ${nameInput}!  Welcome to my game.`)


function fourSeasons() {
    let sea = rls.question("\nSo...tell me, what is your favorite season?");
    let seasons =['autumn', 'fall', 'summer', 'spring', 'winter']
    let season = []
    sea = sea.toLowerCase()
    
    console.log(seasons.length)
    console.log(sea)
    let i = 0;
    while(i < seasons.length) {
        if(seasons[i] !== sea){
        i++
      } else{
          season.push(seasons[i])
        i++
      }
    }
    season = season.join("")
    console.log(season)
    console.log("\nWOW " + season.toUpperCase() + "! That's my favorite season too!");
    console.log("\nThe " + season + " is the time of the year when I like to use my coloring book.");
    let dec = rls.keyInYNStrict("Want to color with me now?");
    if (dec) {
      pickColor();
    } else {
      console.log("I dont think you know how to have fun.");
      restartGame();
    }
  }
  fourSeasons()
// const giveNickName=()=>{
//     let nick= ''
//     for(let i = 0; i < nameInput.length; i ++) {
//         if(nameInput.length < 3){
//         }
//         else { 
//           nick += (nameInput[i] + 'a')
//          }
    
// }
// return nick 
// }

// // function nickName(){
// //     console.log(`You know, ${nameInput}, I love giving people nicknames.`)
// //     let input = rls.keyInYNStrict('Can I please give you a nickname?')
   
// // if(input){
// //     giveNickName()
// //     } 
// // }else{
// //         console.log('I agreee, I do not know you too well yet')
// //         startGame()
// //   }
// // }
// giveNickName();
// console.log(giveNickName())