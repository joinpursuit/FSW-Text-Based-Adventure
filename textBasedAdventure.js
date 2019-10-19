const readline = require('readline-sync')

let playerName = readline.question('What is your name?')

let playAGame = readline.question(`${playerName},would you like to play a game? Please answer "yes" or "no"`)

const roomOne = () => {
  let userInputRoomOne = readline.question('You awake to find yourself strapped to a chair in a poorly lit and unfamiliar room with a strange device attached to your head and mouth. You spot a tape recorder hanging from the ceiling. Do you play the tape or try to leave the room? Please type "play" or "leave"');
    
    if (userInputRoomOne.toLowerCase() === 'play'){
        userInputRoomOne = readline.question(`Hello, ${playerName}. You are guilty of many atrocities in your lifetime, some that have deprived others of their lives. It is now time to see how much you value your own life. The device attached to you is a reverse bear trap of sorts with a 60-second timer. The trap will rip your mouth open at the end of the timer if you do not unlock the device. The key is inside the dead body of your cellmate. Do you retrieve the key or head for the door? Please type "key"  or "door"`)

          if (userInputRoomOne.toLowerCase() === 'key'){
            userInputRoomOne = readline.question('You feel a pin fall from your device and hear a timer begin to countdown. You head over to the body in the corner and see a small pen-knife next to the body. You pickup the knife and begin cutting, but the body begins to move. The cellmate is actually alive! Do you keep cutting or do you stop? Please type "cut" or "stop"')
              if (userInputRoomOne.toLowerCase() === 'cut'){
                  console.log(`You continue to plunge your knife into your cellmate and keep cutting until you find the key deep inside of the stomach. You quickly unlock your trap with only seconds to spare as the trap flies open as soon as your pull it over your head. You hear the door unlock. You rush outside and find yourself in the middle of the city as cars fly by and the bright sun burns your eyes. You have survived another day ${playerName}!` )
              } else if (userInputRoomOne.toLowerCase() === 'stop' ){
                  console.log(`You begin to panic and realize that you have just stabbed a live person. You try to administer aid, but your frantic cellmate punches you in the stomach and makes you double over. You pick up the knife and stab  them to get the key, but it's too late. The trap flies open and your jaw is ripped apart and your blood paints the floor. It was a strange time to choose compassion ${playerName}. GAME OVER!`)
              } else {
                  console.log(`You are intent on defying me ${playerName}. I trigger the trap remotely and kill you immediately. The trap separates your jaw into pieces as your blood pools around you. I make the rules here. GAME OVER!`)
              }
          }else if (userInputRoomOne.toLowerCase() === 'door') {
              console.log(`Oh, ${playerName} are you trying to leave our game early? That's not very fun of you. You hear rapid beeping from the device as it flies open and rips your jaw apart. You collapse in front of a mirror and see your mangled face as the life leaves your body. GAME OVER!`)
          } else {
              console.log(`You are intent on defying me ${playerName}. I trigger the trap remotely and kill you immediately. The trap separates your jaw into pieces as your blood pools around you. I make the rules here. GAME OVER!`)
          }
    } else if (userInputRoomOne.toLowerCase() === 'leave'){
        console.log('You bolt for the door, only to find that it is locked. You hear a ticking behind you and realize you have activated something as you freed yourself from the chair. A man in a pig mask appears in the room and knocks you to the ground. He stops the timer and straps you back to the chair. He begins to speak, "No one defies the game master". He proceeds to remove all of your limbs one by one and finally activates the device manually. The device rips your jaw apart and you writhe in agony as you bleed out. GAME OVER!')
    } else {
        console.log (`Insolence is not tolerated ${playerName}. A trap door opens and fires a gun that hits you in the heart and you bleed out slowly as your body is dragged into the darkness. GAME OVER!`)
    }
}

const roomTwo = () => {
  let userInputRoomTwo = readline.question('You awake to find yourself handcuffed to chair with some sort of drill mechanism attached to your head and a triple-beam scale in front of you. There is a door behind the table. You spot a tape recorder to your right. Do you play the tape or make a run for the door? Please type "play" or "run"')
  if (userInputRoomTwo.toLowerCase() === 'play'){
      userInputRoomTwo = readline.question(`Hello ${playerName}, you took great pleasure in torturing the kids at the fat camp your worked at. It is now time for you to shed some weight of your own. I require a pound of your flesh placed on the scale. The drills you see mounted to the device on your head will continue to inch closer and closer to your head until they scramble your brains. I hope your teeth are a sharp as your words, because there is no knife. Do you begin to chew away at your flesh or make your way to the door. Please type "chew" or "door"`)
        
        if (userInputRoomTwo.toLowerCase() === 'chew'){
            userInputRoomTwo = readline.question('You slip off the handcuffs and stare at your bare arm. You take a deep breath and take a huge bite of your arm. Pain shoots through your arm as you tear the flesh away and the taste of your own blood fills your mouth. You begin to gag. Do you keep continue or do you head for the door? Please type "continue" or "door"')

              if (userInputRoomTwo.toLowerCase() === 'continue'){
                  console.log(`You continue to tear away pieces of your arm and pile them up on the scale as you can hear the drill whirring. Just as the drill makes contact with the sides of your head you place the final piece of your arm on the scale and the whirring comes to a halt. The device falls to the ground and you hear the door unlock. You walk through the door and open another door that leads to a back alley way. You are in the middle of the city at what appears to be midnight. You have survived the ordeal. Congratulations ${playerName}, live your new life with humility or you will find yourself in an unwinnable game.`)
              } else if (userInputRoomTwo.toLowerCase() === 'door'){
                  console.log('You run for the door and as you approach you begin to hear a rapid beeping. The drills begin to spin at full speed and drive straight into your skull. You collapse in front of the door and your body is dragged away into the darkness by a man in a pig mask. The game master always gets their way. GAME OVER!')
              } else {
                  console.log(`Defiance is not tolerated ${playerName}. A man in a pig mask emerges and straps you back to the chair. He proceeds to slowly flay the flesh from your body as the drill continues to inch closer and closer to your skull. When the drills finally put you out of your misery he has cut both of your arms and one of your legs to the bone. GAME OVER! `)
              }
        } else if (userInputRoomTwo.toLowerCase === 'door'){
            console.log('Are you trying to end our game early? So be it! The drills begin to spin at full speed and drive their way into your skull. Your body collapses and a man in a pig mask drags your body into the next room. He dismembers you and feeds you to his pigs. GAME OVER!')
        } else {
            console.log ('It seems your are incapable of following simple directions. We must make you more compliant. A man in a pig mask appears and sticks an ice pick in your skull. He lobotimizes you and drags you to another room where you become a prop for another one of his sick games. Better luck next time. GAME OVER!')
        }
  } else if (userInputRoomTwo.toLowerCase() === 'run'){
      console.log("There is no running from your fate. A man in a pig mask appears and slices the tendons at back of your feet to keep you from running. The man drags you to a back room where he begins to drill into you repeatedly as the drills on your head inch closer and closer. You begin to pray for the drills to end your suffering and after what felt like an eternity , your prayers are answered. GAME OVER!")
  } else {
      console.log ('It appears you can not read simple directions. Then, you must have no use for your eyes. A man in a pig mask appears with a drill of his own and drills through you eyes. He leaves the drills on your head to finish you off as you wail in agony. GAME OVER! ')
  }
} 

const roomThree = () => {
  let bulletChamber = [1,6,3,5,4,2]
  let userInputRoomThree = readline.question('You awake to find one of your hands handcuffed to a table and Colt .45 placed in front of you. There is a tape recorder next to it. Do you try and flee or play the tape? Please type "flee" or "play"')
  if (userInputRoomThree.toLowerCase() === 'play'){
    userInputRoomThree = readline.question(`${playerName} the game is quite simple. Pick up the gun and pull the trigger. You must pull the trigger three times to be released. Do not to try to run. Will you pick up the gun or run? Please type "gun" or "run"`)
      if (userInputRoomThree.toLowerCase() === 'gun'){
        for (let i = 0; i < bulletChamber.length; i++){
          if (bulletChamber[i] === 1){
            console.log ('There was never a way out for you. You are the worst of the worst. You pull the trigger and gun goes off spilling your brains on the floor beneath you. GAME OVER!')
            break;
          }else{
            console.log ('There was never a way out for you. You are the worst of the worst. You pull the trigger and gun goes off spilling your brains on the floor beneath you. GAME OVER!')
          }
        
      } 
    } else {
        console.log ('For a depraved individual like you the game will always end the same way. A turret descends from the ceiling and sprays you with bullets. You are still alive after the barrage and bleed out slowly. GAME OVER!')
    }

    
  } else {
      console.log('I apologize if I made it seem like you had a choice. You disgust me more than anyone I have ever let enter my game. A man in a pig mask emerges and decapatates you. GAME OVER!')
  }

  }
const chooseRoom = () => {
  let roomNumber = Math.floor((Math.random()*3)+1)
  switch (roomNumber){
    case 1:
      roomOne()
      break;
    case 2:
      roomTwo()
      break;
    case 3:
      roomThree()
      break;
  }
}
if (playAGame.toLowerCase() === 'yes'){
  chooseRoom()
} else{
  console.log('You were foolish to think there was a way out of this.')
  chooseRoom()
}