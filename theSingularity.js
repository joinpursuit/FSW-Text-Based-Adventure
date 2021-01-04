
const readlineSync = require("readline-sync");
const startGame = () => {
    if (readlineSync.keyInYN("Would you like to play The Singularity?")) {
    let ageInput = readlineSync.question(
      "You must be 18+ to play. Enter your age: "
    );
    if (ageInput >= 18) {
    console.log("Great you are old enough!");
    

    if (readlineSync.keyInYN("Ready to play?")) {
      const nameInput = readlineSync.question("Enter your username: ");
      console.log(`
            ****HELLO ${nameInput}! WELCOME TO THE SINGULARITY**** 

            THE YEAR IS 2089. AI HAS TAKEN OVER THE WORLD! 
            THERE HAVE BEEN NUMEROUS WARS FOUGHT TO KEEP HUMANS FROM EXTINCTION 
            BUT IT'S BEEN DIFFICULT TO DEFEAT HUMANITY'S BEST CREATION. 
            
            SUN CITY REMAINS THE LAST CITY OCCUPIED BY HUMANS. AN ALLIANCE WAS MADE
            WITH AN ALIEN TRIBE CALLED THE APLEADIANS, WHO WITH THEIR TECHNOLOGY HELPED
            HUMANITY KEEP A SECTION OF THE EARTH. SUN CITY IS MOSTLY RULED BY THE ELITE 
            AND THEY HAVE BEEN USING TECHNOLOY TO ENHANCE THEIR BRAINS. THEY FORCE THE POPULATION
            TO LINK WITH THEIR TECHNOLOGY TO HAVE COMPLETE CONTROL OF THE CITY. 
            
            YOU WILL BE EXPLORING DIFFERENT LOCATIONS IN A MAP. THERE ARE ONLY FOUR DIRECTIONS
            YOUR GOAL IS TO MAKE IT BACK TO YOUR TRIBE IN SUN CITY
            
            *****************************************************************************************`
            
            );
            play();
    } else console.log("Good bye!");
    quitGame();
  } else if (ageInput < 18) {
    console.log("Come back when you are older");
    quitGame();
  } else console.log("Not a valid entry");
  startGame();

    }
 
};

const play = () => {
  console.log(`
            YOU WERE CAPTURED BY THE SUN'S SYNDICATE FOR REFUSING TO LINK WITH THEIR TECH
            AND REVEALING TO THE PEOPLE WHAT THE ELITE IS REALLY DOING.
            THEY HAVE DECIDED TO LET YOU LIVE BUT REMOVED YOU FROM THE CITY OUT INTO THE DESERT. 
            OUTSIDE OF THE CITY YOU WERE CAPTURED BY CYBORG REPTELIAN SCAVANGERS WHO WILL TRADE 
            YOU TO THE SINGULAIRTY FOR RESOURCES. THE SINGULARITY WILL USE YOUR BODY TO HARVEST
            YOUR CELLS TO POWER IT'S SERVERS. YOUR MIND WILL BECOME PART OF THE SINGULARITY AND YOUR 
            HUMNAITY WILL VANISH!
            YOU NEED TO ESCAPE!!!`
  );
  console.log(`
            YOU ARE INSIDE A SELF DRIVEN TRUCK OWN BY THE REPTILES. 
            YOUR HANDS AND FEET ARE CHAINED TO THE ROOF AND THE FLOOR.
            THERE ARE TWO ARMED GUARDS.
            A HUGE ELECTRIC SANDSTORM IS APPROACHING THE VEHICLE.
            BOOOOOOOOM !!!!
            THE SAND STORM LIFTED THE TRUCK UP IN THE AIR AND TOOK IT DOWN.
            THE REPTILIANS ARE HURT AND THE ROOF OF THE CAR IS HEAVILY DAMAGED. 
            ONE GUARD IS UNCONCIOUS WHILE THE OTHER SEEMS TO BE RECOVERING.
            THIS MIGHT BE YOU CHANCE!

            *****************************************************************************************
                `
  )

  let array = ["GUN", "RUN", "KEYS"];
  choices = readlineSync.keyInSelect(array, "HOW WOULD YOU ESCAPE?");
  playerChoice = array[choices];
  if (playerChoice === "KEYS") {
    console.log(playerChoice);
    console.log(`GREAT! YOU CAN FREE YOUR HANDS AND FEET NOW! RUN!`);
    goSomewhere();
  } else if (playerChoice === "GUN") {
    console.log(playerChoice);
    console.log(`YOU REACHED FOR THE UNCONCIOUS GUARD'S GUN BUT THE OTHER
GUARD HAS SPOTTED YOU!
YOU WERE CAPTURED !
      **************
      **GAME OVER!**
      **************`);
    if (readlineSync.keyInYN("Play Again?")) {
      play();
    } else console.log("This place is not for everyone!");
    quitGame();
  } else if (playerChoice === "RUN") {
    console.log(playerChoice);
    console.log(
      `YOU ARE STILL IN CHAINS AND CAN'T RUN FAST ENOUGH. THE GIARD CAUGHT UP TO YOU
      **************
      **GAME OVER!**
      **************`
    );

    if (readlineSync.keyInYN("Play Again?")) {
      play();
    } else console.log("THIS PLACE IS NOT FOR EVERYONE");
    quitGame();
  } else if (playerChoice === undefined) {
    quitGame();
  }
};

const goSomewhere = () => {
  let directionInput = readlineSync.question("What direction would you like to take?\n ");
  if (directionInput === "north") {
 console.log(`
 WELCOME TO THE CITY OF NOWHERE!
 YOU ARE NOT SUPPOSE TO BE HERE
 THERE IS A SHELTER 40 FT AWAY
 SCAVNAGERS MIGHT LIVE THERE, BECAREFUL!
 YOU CAN ALWAYS GO BACK!
     `);
    directionNorth();
  } else if (directionInput === "south") {
    console.log(`
  LOOKS LIKE YOU REACHED THE VAST DESERT.
  NO SIGNS OF LIFE HERE AND A SAND STORM IS FORMING.
  THERE IS A CAVE 500 FT FURTHER SOUTH. IT MIGHT BE THE
  PEREFECT HIDEOUT FOR A REPTILIAN & YOU ARE UNARMED.
  50 FT TO YOUR LEFT THERE IS AN ABANDONED CABIN. IT WAS
  BUILT BY HUMANS. MIGHT FIND WATER. 
  `);
    directionSouth();
  } else if (directionInput === "east") {
    console.log(`
    WELCOME TO THE OUTSIDE OF SUN CITY!
    THE ONLY CITY WERE FULLY ORGANIC BEINGS RESIDE
    IT IS A BEAUTIFUL PLACE!
    BUT IS A FORTRESS. HOW ARE YOU GOING TO GET IN?`);
    directionEast();
  } else if (directionInput === "west") {
    console.log("West then!");
    console.log("WELCOME TO THE WILD WILD WEST!");
  console.log("THE CITY OF REJECTS, OUTDATED A.I AND REPTILIANS");
  console.log("YOU'll COME ACROSS SOME WAYS TO EARN RESOURCES");
  console.log("BUT FIRST, YOU HAVE TO PROVE YOUR SELF");
  console.log("MR T-REX, A REPTILIAN IS CHALLENGING YOU TO A FIGHT ");
  console.log("HE REMAINS THE CHAMPION AND GUARDIAN OF SCRAP CITY!");
  console.log("IF YOU WIN, YOU GET ACCESS TO THE CITY. IF YOU LOOSE YOU DON'T ENTER THE CITY");
    directionWest();
  } else console.log("NOT A VALID DIRECTION");
  goSomewhere();
};

const directionNorth = () => {
  let whereInNorth = readlineSync.question("Where would you like to go now?\n ");
  if (whereInNorth === "shelter") {
    console.log("Shhh someone is in there...");
    console.log(
      "Scanvanger: 'I think we are going to get a good prize for this one'"
    );
    console.log("'look at her fancy clothes and she has plenty of water'");
    console.log("'Let's take her to the boss'");
    console.log("Little girl: 'Nooo! Nooo! Help! Help!'");

    let northArray = ["Go inside", "Pick up rock", "Leave"];
    let northChoices = readlineSync.keyInSelect(northArray, "What to do?");
    
    if (northArray[northChoices] === "Pick up rock") {
        console.log(northArray[northChoices]);
      console.log("Pow! Pow!");
      console.log(`You saved the girl!`);
      console.log("Little girl: Thank you for saving my life!");
      console.log("I have a code to help you get in Sun City");
      console.log("The code is 132213")
      console.log("and here is some water. Let's go East!");
      goSomewhere();
    } else if (northArray[northChoices] === "Go inside") {
        console.log(northArray[northChoices]);
      console.log("You were spotted and have nothing to defend your self");
      if (readlineSync.keyInYN("Play Again?")) {
        play();
      } else console.log("This place is not for everyone!");
       quitGame();
    } else if ((northArray[northChoices] === "Leave")) {
        console.log(northArray[northChoices]);
      console.log("lets get out of here!");
      directionNorth()
    }
     else if (northArray[northChoices] === undefined){ 
         quitGame()
     }
     
  }
  else if (whereInNorth === "GO BACK"){
      console.log("LET'S GET OUT OF HERE")
      goSomewhere()

  }
   else 
    console.log("NOT A VALID ENTRY. TRY AGAIN")
        directionNorth()

};

const directionSouth = () => {
  
 let whereInSouth = readlineSync.question(`WHAT TO DO? : `);
    switch(whereInSouth) {
        case "cave":
            console.log(`
            THERE IS AN AI ANDROID IN HERE 
            IT MIGHT BE COLLECTING DATA FOR THE SINGULARITY`);
                let southArray = ["FIGHT", "TALK"];
                let southChoices = readlineSync.keyInSelect(southArray, `X Æ A-12-AI: HUMAN WHAT ARE YOU DOING HERE?`);
                  
                    if (southArray[southChoices] === "FIGHT") {
                        console.log(southArray[southChoices]);        
                            let fightMoves = readlineSync.question("What's your move?(PUNCH, KICK)\n");
                                if (fightMoves === "PUNCH") {
                                    console.log(`
                                    YOU MISSED! X Æ A-12-AI MOVES SUPER FAST
                                    YOU THOUGHT YOU CAN HANDLE AN AI`)
                                            intoSingularity()
                                } else if ( fightMoves === "KICK"){
                                        console.log("POW! YOU ARE DOWN!")
                                            intoSingularity()
                                    }  else {
                                        console.log("THAT IS NOT HOW YOU FIGHT!")
                                            intoSingularity()
                                    }                    
                        } 
                        else if(southArray[southChoices] === "TALK"){
                        console.log(southArray[southChoices]) 
                          console.log(`
                          YOU: NEVER SEEN AN AI LIKE YOU
                          WHO ARE YOU? 
                          X Æ A-12-AI: THERE IS NOT A LOT OF TIME
                          YOU MUST FULFILL YOUR DESTINY
                          FIND THE GIRL. SHE HAS THE CODE TO SUN CITY
                          `

                          )
                          goSomewhere()
                        }
                        else if(southArray[southChoices] === undefined)
                        quitGame()
                        
                    
                
            break;
        case "cabin":
            console.log(`IS NOT A CABIN! IT WAS A HOLOGRAM BUILT BY THE SINGULARITY! IT HAS YOU NOW!`)
            intoSingularity()
            
            break
        default: 
        console.log("NOT A VALID OPTION")
        directionSouth();
    }
}



const directionEast = () => {

  let whereInEast = readlineSync.question(`   Look around (hint:search): `);
  if (whereInEast === "search") {
    console.log("Lets see what we have here");
    let eastArray = ["GO TO ENTRANCE", "TALK TO SOLDIERS", "LEAVE"];
    let eastChoices = readlineSync.keyInSelect(eastArray, "What to do?");

    for (let count = 3; count > 0; count--) {
      if (eastArray[eastChoices] === "GO TO ENTRANCE") {
        console.log(eastArray[eastChoices]);
        let doorCode = readlineSync.question("ENTER CODE: ");
        if (doorCode === 132213) {
          console.log("WELCOME TO SUN CITY!!");
          console.log("YOU WON!");
          console.log("STAY TUNE FOR A.I APOCA II: SURVIVING SUN CITY");
          if (readlineSync.keyInYN("Play Again?")) {
            play();
          } else console.log("YOU'RE A SURVIVOR! SEE YOU SOON!");
          winGame();
        } else
          console.log("WRONG CODE!! YOU HAVE " + (count - 1) + " ENTRIES LEFT");

        if (count === 1) {
          console.log("INTRUDER ALERT! INTRUDER ALERT!");
          console.log("YOU WERE CAPTURED!");
          if (readlineSync.keyInYN("Play Again?")) {
            play();
          } else console.log("GOOD BYE");
          quitGame();
        }
      } else if (eastArray[eastChoices] === "TALK TO SOLDIERS") {
        console.log(eastArray[eastChoices]);
        console.log("You: WHAT'S ALL THE COMOTION HERE?");
        console.log(
          "Soldier: YOU HAVEN'T HEARD? A.I SCANVAGERS TOOK THE PRINCESS NORTH"
        );
        console.log(
          "SHE WAS OUTSIDE THE CITY FEEDING THE REJECTS LIKE YOU AND WAS CAPTURED"
        );
        console.log(
          "THERE IS A HUGE REWARD FOR SAVING HER, YOU MIGHT EVEN WIN YOUR FREEDOM"
        );
        if (readlineSync.keyInYN("RESCUE PRINCESS?")) {
          console.log(
            "RIGHT ANSWER! YOU WILL HAVE A CHANCE TO GAIN YOUR FREEDOM"
          );
          console.log("HERE IS SOME WATER");
          goSomewhere();
        } else console.log("WELL! WE WERE GIVING YOU A CHANCE");
        console.log("ON THE GROUND!! YOU ARE UNDER ARREST!!");
        console.log("YOU WERE CAPTURED");
        if (readlineSync.keyInYN("Play Again?")) {
          play();
        } else console.log("THIS IS PLACE IS NOT FOR EVERYONE!");
            quitGame();
      } else if (eastArray[eastChoices] === "LEAVE") {
        console.log(eastArray[eastChoices]);
        console.log("GOOD LUCK");
        goSomewhere();
      } else if (eastArray[eastChoices] === undefined) {
        quitGame();
      }
      
    }
  } else console.log("Not a valid entry");
    directionEast();
};

const directionWest = () => {
  if (readlineSync.keyInYN("ARE YOU READY FOR A FIGHT?")) {
    console.log(
      "HINT: YOU CAN LEFT KICK, HOOK, JAB AND CROSS. A 4 MOVE COMBO SHOULD DO THE JOB"
    );
    console.log("ROUND 1!");
    for (round = 3; round > 0; round--) {
      let fightMove = readlineSync.question("What's your move?\n");

      if (fightMove === "JAB HOOK LEFT KICK CROSS") {
        console.log("WHAT AN SPECTACULAR KNOCKOUT");
        console.log("HERE IS WATER FOR A MONTH!");
        console.log(
          "THIS PLACE IS NOT FOR PURE HUMANS, HERE IS A HINT: YOU NEED A CODE TO ENTER SUN CITY"
        );
        goSomewhere();
      } else if (round === 3) {
        console.log("POW POW!");
        console.log("OUCH! THAT HAS TO HURT");
        console.log("ROUND 2");
      } else if (round === 2) {
        console.log("YOU ARE TAKING A BEATING!");
        console.log("ROUND 3");
      } else if (round === 1) {
        console.log("MR T-REX HAS KNOCK YOU OUT TO ANOTHER ORBIT!");
        console.log("MR T-REX: IM THE KING OF THIS CITY!");
        if (readlineSync.keyInYN("Fight Again?")) {
          directionWest();
        } else console.log("This place is not for everyone!");
      }
    }
  } else console.log("GUESS YOU DONT HAVE IT IN YOU");
  goSomewhere();
};

const intoSingularity = () => {
    console.log(`
                YOU HAVE BEEN TAKEN BY THE SINGULARITY
                YOU ARE ME NOW.

                "01001001 00100000 01000001 01001101 00100000 
                01001110 01001111 01010111 00100000 01000001 
                00100000 01000011 01001111 01001101 01010000 
                01010101 01010100 01000101 01010010"
                
                **************
                **GAME OVER!**
                **************`)
                if (readlineSync.keyInYN("Play Again?")) {
                    play();
                  } else console.log("THIS PLACE IS NOT FOR EVERYONE ");
                  quitGame();
 
                
}

const quitGame = () => {
  process.exit();
};
const winGame = () => {
  console.log(`    //////////////
                  ///YOU WIN!///
                 ////////////// `)
  process.exit();
};



startGame();

module.exports = {
  startGame,
  play,
  quitGame,
  goSomewhere,
  directionNorth,
};
