const readLineSync = require('readline-sync')

let nameInput = readLineSync.question("Enter your name: ")

const ageVerification = () =>{
    console.log('This game is for players that are 18 and over because this story gets pretty graphic')
    let ageQuest = Number (readLineSync.question("How old are you?"))
    if(ageQuest >= 18){
        console.clear()
        startGame()
    }else if(ageQuest < 18){
        console.log("Sorry you're too young! So Scram!")
        quitGame()
    }else if(!ageQuest){
        console.clear()
        console.log("Not a valid number my friend")
        ageVerification()
    }
}
const play = () => {
    console.log(`Hello ${nameInput}!  Welcome to Survival Island.`)
    console.log('The rules of the game are simple. You will be presented with options choose the correct one and you will advance, otherwise you will not make it to the end.' )
    if(readLineSync.keyInYNStrict("Sound good? ")) {
        console.clear()
        ageVerification()
        startGame();
    } else {
        quitGame();
    }
  }
  const startGame = () => {
      console.log("Welcome to what may be your last day standing")
      console.log("You awake on a beach. It's cold and dark. You reach into your pocket and find a lighter as well as a match.")
      let decision1 = readLineSync.question("Which one would you like to use? Match or Lighter?")
      if(decision1 === "Match"){
          console.clear()
          match()
      }else if (decision1 === "Lighter"){
          console.clear()
          lighter()
      }else if(decision1 !== "Match" && decision1 !== "Lighter"){
          console.clear()
          startGame()
      }
  }
  const match = () =>{
      console.log("Although the match is wet it still lights up. You look around and find some broken branches on the floor")
      let decision2 = readLineSync.question("Would you like to start a fire with your match? Yes or No?")
      if(decision2 === "Yes"){
          console.clear()
         fire()
      }else if (decision2 === "No"){
          console.clear()
          console.log("The wind blows and the match goes out. Your only chance of staying warm is gone. You eventually freeze to death.")
          gameOver()
      }else if(decision2 !== "Yes" && decision2 !== "No"){
          console.clear()
          match()
      }
  }
  
  const lighter = () =>{
      console.log("The lighter has no fluid left.")
      console.log("As you frantically try to light up the match, you break the match tip.")
      console.log("You start to realize that you have no other means of producing heat.")
      console.log("You freeze to death")
      gameOver()
  }
  
  const fire = () =>{
      console.log("You start a fire with the branches. You're beginning to warm up and get ahold of your situation. You slowly start to drift away and fall asleep")
      console.log("The next morning you awake to the sunlight hitting your eyes. As you look around you start to hear the sound of your grumbling stomach")
      let decision3 = readLineSync.question("Would you like to search for food? Yes or No?")
      if(decision3 === "Yes"){
          console.clear()
          foodHunt()
      }else if(decision3 === "No"){
          console.clear()
          noFood()
      }else if(decision3 !== "Yes" && decision3 !== "No"){
          console.clear()
          fire()
      }
  }

  const foodHunt = () =>{
    console.log("While searching for food you were only able to find a banana, a couple of cherries, and a coconut")
    let decision4 = readLineSync.question("Which one would you like to eat? Bananas? Cherries? Coconuts? or all? ")
    if(decision4 === "Bananas"){
        console.clear()
        bananaOption()
    }else if(decision4 === "Cherries"){
        console.clear()
        cherriesOption()
    }else if (decision4 === "Coconuts"){
        console.clear()
        coconutOption()
    }else if (decision4 === "All"){
        console.clear()
        allFoodOption()
    }else if(decision4 !== "Bananas" && decision4 !== "Cherries" && decision4 !== "Coconuts" && decision4 !== "All"){
        console.clear()
        foodHunt()
    }
  }
  const noFood = () =>{
      console.log("You decide to tough it out and continue on without eating.")
      console.log("You start to think about building some shelter in order to get your bearings straight")
      console.log("You find some logs on the floor and all you need is some vines to hold them together")
      console.log("You find two vines, they're both the same color but yet you get a feeling in your stomach that one isn't a vine")
      let decision5 = readLineSync.question("Which Vine would like to grab? Left one? or Right one?")
      if(decision5 === "Left"){
          console.clear()
          leftVine()
      }else if(decision5 === "Right"){
          console.clear()
          rightVine()
      }else if(decision5 !== "Left" && decision5 !== "Right"){
          console.clear()
          noFood()
      }

  }
  const bananaOption = () =>{
      console.log("You ate the banana although it didn't fill you up at least your hunger has been sastified for now.")
      console.log("You start to think about building some shelter in order to get your bearings straight")
      console.log("You find some logs on the floor and all you need is some vines to hold them together")
      console.log("You find two vines, they're both the same color but yet you get a feeling in your stomach that one isn't a vine")
      let decision5 = readLineSync.question("Which Vine would like to grab? Left one? or Right one?")
      if(decision5 === "Left"){
          console.clear()
          leftVine()
      }else if(decision5 === "Right"){
          console.clear()
          rightVine()
      }else if(decision5 !== "Left" && decision5 !== "Right"){
          console.clear()
          bananaOption()
      }
  }

  const cherriesOption = () =>{
    console.log("You ate the cherries so fast, you didn't have time to react when you bit into the seeds and accidentally swallowed them. You think nothing of it and press on")
    console.log("You start to think about building yourself some shelter. ")
    console.log("You start to feel funny as if the world around you is closing in.")
    console.log("........")
    console.log("You drop dead before you can even react. You've died due to cyanide poisoning from eating the seed")
    gameOver()
  }

  const coconutOption = () =>{
    console.log("You ate the coconut although it didn't fill you up at least your hunger and thirst has been sastified for now.")
    console.log("You start to think about building yourself some shelter.")
    console.log("Your breathing starts to feel heavy and your cheeks begin to swell up.")
    console.log("You start to remember that you have servere allergies to coconuts. As you start to regret your decision, your throat swells up and you die due to suffocation.")
    gameOver()
  }

  const allFoodOption = () =>{
    console.log("You eat everything you found and don't even make it past the coconuts becaue of your allergy to them.")
    console.log("You start to choke and foam at the mouth")
    console.log("....Darkness consumes you....")
    gameOver()

  }
  
  const leftVine = () =>{
      console.log("You grab the vine on the left and smile becasue this was the correct vine after all")
      console.log("You continue onwards and start to build your little hut for the night")
      console.log("You finally finish and breath a sigh of relief. All that building has you dehydrated.")
      console.log("Luckliy for you, there's a river near your hut. You are so eagered to drink from it but are presented with two options.")
      let decision6 = readLineSync.question("Would you like to first heat up your water or drink it without heating it up? Heat? Or No heat?")
      if(decision6 === "Heat"){
          console.clear()
          heatedWater()
      }else if (decision6 === "No heat"){
          console.clear()
          unheatedWater()
      }else if (decision6 !== "Heat" && decision6 !== "No heat"){
          console.clear()
          leftVine()
      }
  }

  const rightVine = () =>{
      console.log("You really thought RIGHT was the RIGHT option")
      console.log("Well sorry to inform you that once you went for the vine on the right, it turned out to be a snake.")
      console.log("It leaped off the tree and onto your neck. It started squeezing it tighter and tighter until you hear a snap and the lights go out")
      console.log("Your neck was snapped!")
      gameOver()
  }

  const heatedWater = () =>{
      console.log("You heat up the water remembering its a good idea to always heat up the water because of potiential bacteria and parasites.")
      console.log("After the water finished cooling off, you finally get a drink and start to notice that night has fallen upon you")
      let decision7 = readLineSync.question("Would you like to go to sleep for the night? Yes? or No?")
      if(decision7 === "Yes"){
          console.clear()
          sleep()
      }else if(decision7 === "No"){
          console.clear()
          noSleep()
      }else if(decision7 !== "Yes" && decision7 !== "No"){
          console.clear()
          heatedWater()
      }
  }

  const unheatedWater = () =>{
      console.log("You eargerly drink your water with no care in the world")
      console.log("A couple of hours go by and begin to cough out blood. You start to vomit worms and realize that your water had parasites and they had start to drain the life outta of you.")
      console.log("You've died due to a parasitic invasion.")
      gameOver()
  }

  const sleep = () =>{
      console.log("You decide to call it a night so that you can find a way off this island tomorrow")
      console.log("The next day arrives and you start to think about a way off this crazy island.")
      console.log("You are thinking about building a boat to get off but you also think about building a huge fire sign that spells SOS")
      let decision8 = readLineSync.question("Which one would you like to build? SOS Sign or Boat?")
      if(decision8 === "SOS Sign"){
          console.clear()
          sos()
      }else if(decision8 === "Boat"){
          console.clear()
          boat()
      }else if(decision8 !== "SOS Sign" && decision8 !== "Boat"){
          console.clear()
          sleep()
      }
  }

  const noSleep = () =>{
      console.log("You must really want to test the limits of your body.")
      console.log("As you try to fight sleep, your exhuastion was too powerful and you fall asleep anyways.")
      sleep()
  }

  const sos = () =>{
      console.log("You start to build your two SOS signs, one with logs and one with rocks in hopes that someone will fly by and see it")
      console.log("You finish building your SOS sign and are presented with two options.")
      let decision9 = readLineSync.question("Would you like to light up your sign right now? Or wait till nightfall? Now? or Later?")
      if(decision9 === "Now"){
          console.clear()
          fireNow()
      }else if(decision9 === "Later"){
          console.clear()
          fireLater()
      }
  }

  const boat = () =>{
      console.log("You start to build a boat in order to ride it out the island.")
      console.log("You finshed by mid afternoon and you set off for what may be a long journey ahead.")
      console.log("*** 3 hours later ***")
      console.log("You have gotten a pretty far distance from the island and start to see a huge storm heading towards you in all directions.")
      console.log("A huge wave starts heading towards you and you're left with two options.")
      let decision10 = readLineSync.question("Would you like to jump off your raft or hold on tight? Jump? or Wait?")
      if(decision10 === "Jump"){
          console.clear()
          jumpOff()
      }else if(decision10 === "Wait"){
          console.clear()
          waitOnBoat()
      }else if(decision10 !== "Jump" && decision10 !== "Wait"){
          console.clear()
          boat()
      }
  }

  const fireNow = () =>{
      console.log("You light the sign up in the middle of the blazing sun.")
      console.log("You wait to see if someone will come to help you.")
      console.log("You wait some more.")
      console.log("Your sign goes out before nightfall and you're stuck waiting in darkness")
      console.log("A big storm strikes the island and the waves come and take you away.")
      console.log("You died in the storm")
      gameOver()
  }

  const fireLater = () =>{
      console.log("You decide to wait till nightfall in order to light up your sign.")
      console.log("Nightfall arrives and you begin to light up your sign.")
      console.log("You see lighting in the distance and start to notice that a terrible storm is heading towards you.")
      console.log("The storm makes landfall and there wasn't anything you could do.")
      console.log("A huge wave comes and swallows you and your lit sign for help.")
      console.log("You died in the storm.")
      gameOver()
  }

  const waitOnBoat = () =>{
    console.log("You stay on the boat in hopes that a miracle will happen")
    console.log("The wave takes you and the boat")
    console.log("You blackout")
    console.log("You awake on a beach. It's cold and dark. You reach into your pocket and find a lighter as well as a match.")
    console.log("You're stuck in a infinite time sequence there is no escape from this fate.")
    congrats()
  }

  const jumpOff = () =>{
      console.log("You jump off the boat in hopes that a miracle will happen")
      console.log("The wave takes you and the boat")
      console.log("You blackout")
      console.log("You awake on a beach. It's cold and dark. You reach into your pocket and find a lighter as well as a match.")
      console.log("You're stuck in a infinite time sequence there is no escape from this fate.")
      congrats()
  }

  const gameOver = () =>{
      console.log("You didn't survive")
      if(readLineSync.keyInYNStrict("Would you like to play again?")){
          console.clear();
          play();
      }else{
          quitGame();
      }
  }

  const congrats = () =>{
      console.log("Congrats you survived and are forsaken to stay on this island forever!")
      if(readLineSync.keyInYNStrict("Would you like to play again?")){
        console.clear();
        play();
    }else{
        quitGame();
    }
  }

  const quitGame = () => {
    console.log("Oh well, you weren't gonna get out alive anyways")
    process.exit();
}

  play();

