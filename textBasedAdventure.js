const readlineSync = require("readline-sync")

const play = () => {

  let nameInput = readlineSync.question("Enter your name: \n")

  console.log("Hello " + nameInput + ", welcome to my game! :)")

  console.log('You’re standing on the corner of Broadway and W 47th Street. It is 11:50pm on New Year’s Eve. Your view of the ball is currently obstructed. Make it to the front of the crowd before midnight.')
  //Decision 1 
  if (readlineSync.keyInYN("Ready to start?")) {
    console.log("Let's begin, goodluck!")
    startGame()
  } else {
    leaveGame()
  }

}

const startGame = () => {
  //Decision 2
  console.log("As you begin to cross over to 46th Street, a middle-aged couple asks if you could please take their photograph.")

  if (readlineSync.keyInYN("What do you say?")) {
    console.log("Taking their photo took two minutes. It is now 11:52pm")
  }
  else {
    console.log("You make it across the street right before the crosswalk is barricaded off. It is 11:51pm")
  }

  //Decision 3
  console.log("You’re so relieved to have advanced an entire block closer to the ball, you take your flask out for a celebratory sip. An officer suspicious of your open container approaches and asks ")

  let ageInput = readlineSync.question("How old are you?")
  if (Number(ageInput) >= 21) {
    console.log("The officer is surprised by how youthful you appear to be and allows you to carry-on. One minute has passed.")
  }
  else {
    console.log("The officer confiscates your flask and puts you in handcuffs.")
    leaveGame()
    //prompt to play again
  }

  //Decision 4
  console.log("There are still a few minutes left until the countdown. You continue to navigate your way through the throng when you realize your left shoelace has come untied. Enter 1 to fix your lace with a single knot, so you can hurry on your way. Enter 2 to fix your lace with a double knot to ensure you will not have to stop to tie it again.")


  let knotType = readlineSync.question("1 or 2?")
  if (Number(knotType) === 1) {
    console.log("You have saved yourself some time living life on the edge. One minute has passed.")
  }
  else if (Number(knotType) === 2) {
    console.log("You double-knotted your left lace so tightly that you had to re-tie your right shoelace in the same manner to make it even. Two minutes have passed.")
  }
  else {
    console.log("Your entry is invalid.")
    //re-prompt question here until valid entry received
  }

  //Decision 5

  console.log("As you reach the crosswalk of 44th street, you glance to your right and see Lady Gaga performing from the top of a halal cart. Do you head down the block for a once in a lifetime opportunity to hear Pokerface live?")
  if (readlineSync.keyInYN("Do you head down the block?")) {
    console.log("You hurry West down 44th street and squeeze your way up to the front only to find a Gaga impersonator lip syncing. You try to turn around and leave, but the crowd is too dense. You hear the countdown begin and accept failure.")
    leaveGame()
  } else {
    console.log("You hurry on forward and reach 45th street. Way to keep your eye on the ball. (haha get it)")

  }
  //Decsion 6
  console.log("Times Square is getting increasingly chaotic with only a few minutes left until the countdown. You notice a group of people towards the center of the crowd wearing neon yellow beanies. Perhaps they are members of your Pursuit cohort.")
  if (readlineSync.keyInYN("Do you make your way towards them?")) {
    console.log("Your classmates are excited to see you. You tell them you are trying to get closer for the perfect view, they help you move forward to 44th street.")
  }
  else {
    console.log("As you continue to walk forward, you feel your phone vibrate. You receive a picture via slack of the back of your head. You try to turn back around to make your way to your classmates, but the crowd is too dense. You hear the countdown begin and accept failure. ")
    leaveGame()
  }
  //Decision 7
  console.log("You are one block away from 43rd street. You walk by a live broadcast being filmed and scream I love you mom to the camera. Your phone begins to vibrate in your pocket, it’s your mom. ")
if (readlineSync.keyInYN("Do you answer the call?")) {
  console.log("Your mom is delighted by her on air shoutout. She has a bird’s eye view of the crowd on tv and tells you there is an opening if you head South-East down Broadway.")
  } 
else {
  console.log("As you go to decline the call, your phone slips out of your hand and the screen shatters on the ground. You pick it up and keep walking, thankful you opted to get the 2-year warranty coverage.")
  }
  
  //Decision 8
  console.log("You are approached by a man selling glow sticks. He tells you that his sales have been low for the night due to the other major companies handing out free light-up gear.")
if (readlineSync.keyInYN("Do you purchase a glow stick to support his small business?")) {
  console.log("He thanks you graciously as you place your glow necklace around your neck and hurry on your way.")
}
else {
  console.log("The salesman sticks his tongue out at you and strolls away into the night.")
}
//Decision 9
console.log("You are almost at the optimal viewing spot. You encounter a gathering of unpleasant smelling revelers who do not want to let you pass. They have camped out at their spots for the past 24hrs and think it is unfair to let you skip ahead.")

 
  if (readlineSync.keyInYN("Do you turn around and accept defeat?")) {
    console.log("You made it all this way for nothing. As the countdown begins, you are engulfed by the stench of the crowd ahead. What a way to ring in the new year…")
    leaveGame()
  }
  else {
    console.log("The campers respect your hustle and allow you to pass. You are 10 feet away from the front.")
  }
//Decision 10
console.log("You have made it to the front of the crowd. The countdown begins.") 
let languagePreference = readlineSync.question("Do you want to hear it in english or spanish?")

if(languagePreference === "english"){
  //decrement from 10
  console.log("10, 9, 8, 7, 6, 5, 4, 3, 2, 1. HAPPY NEW YEAR")
}
else if (languagePreference === "spanish"){
  console.log("Diez, Nueve, Ocho, Siete, Seis, Cinco, Quatro, Dos, Uno... FELIZ ANO NUEVO")
}
}








const leaveGame = () => {
  console.log("Sorry to hear that, there's always next year!")
  process.exit()
}

play() 
