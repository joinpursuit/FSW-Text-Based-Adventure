const readline = require("readline-sync");

let nameInput = readline.question("Enter your name: ");

console.log(`Hello ${nameInput}!  Welcome to my game.`);

const startGame = () => {
  if (readline.keyInYN("Do you want to play?")) {
    console.log("Thank you for playing 'Choose your adventure' game.");
    console.log(
      "Throughout this game, you will get to make 10 choices to get to the ultimate adventure in the end."
    );
    console.log("Good luck!");
    walkOrBike();
  } else {
    quitGame();
  }
};

function walkOrBike() {
    console.log("\n");
    console.log("There is a forest path ahead of you. Would you like to walk or ride a bike?")
  let res 
  while(res !== "walk" && res !== "bike") {
 res = readline
    .question(
       "Please enter walk or bike \n"
    )
    .trim()
    .toLowerCase();

  if (res === "walk") {
    chooseAnimalWhileWalking();
  } else if (res === "bike") {
    chooseAnimalWhileBiking();
  }
}
}
function chooseAnimalWhileWalking() {
  console.log("\n");
    console.log(
    "While walking you see several animals in the forest: rabbit, deer, tiger, lion, bear. "
  );
  let ind = readline.keyIn(
    "Which one would you follow? (only the first letter) ",
    { limit: 'rdtlb'}
  ).toLowerCase();
  if (ind === "r") {
    console.log("OK, you are following rabbit.");
  } else if (ind === "d") {
    console.log("OK, you are following deer.");
  } else if (ind === "t") {
    console.log("OK, you are following tiger.");
  } else if (ind === "l") {
    console.log("OK, you are following lion.");
  } else if (ind === "b") {
    console.log("OK, you are following bear.");
  }

  inFrontOfLake();
}

function chooseAnimalWhileBiking() {
  console.log("\n");
    console.log(
    "While riding a bike you see several animals in the forest: rabbit, deer, tiger, lion, bear. "
  );
  let ind = readline.keyIn(
    "Which one would you follow? (only the first letter) ",
    { limit: 'rdtlb' }
  ).toLowerCase();
  if (ind === "r") {
    console.log("OK, you are following a rabbit.");
  } else if (ind === "d") {
    console.log("OK, you are following a deer.");
  } else if (ind === "t") {
    console.log("OK, you are following a tiger.");
  } else if (ind === "l") {
    console.log("OK, you are following a lion.");
  } else if (ind === "b") {
    console.log("OK, you are following a bear.");
  }
  inFrontOfLake();
}

function inFrontOfLake() {
  console.log("\n");
    console.log("The animal has wondered off and you came across a lake.");
  let res = readline.keyIn(
    "How would you like to cross it by: swimming (s), boat (b) or helicopter (h)? ",
    { limit: 'sbh' }
  ).toLowerCase();
  if (res === "s") {
    inTownAfterSwimming();
  } else if (res === "b") {
    inTownAfterBoat();
  } else if (res === "h") {
    inTownAfterHelicopter();
  }
}

function inTownAfterSwimming() {
  console.log("\n");
    console.log("You swam across the lake and reached a town. ");
  console.log(
    "You feel hungry and want to get a bite. You have few different choices."
  );
  let res = readline.keyIn(
    "Would you eat at McDonalds (m), Chinese food bar (c) or Seafood restaurant (s)? ",
    { limit: 'mcs' }
  ).toLowerCase();
  if (res === "m") {
    inMcDonalds();
  } else if (res === "c") {
    inChineseRest();
  } else if (res === "s") {
    inSeafoodRest();
  }
}

function inTownAfterBoat() {
 console.log("\n");
    console.log("You crossed the lake by boat and reached a town. ");
  console.log(
    "You feel hungry and want to get a bite. You have few different choices."
  );
  let res = readline.keyIn(
    "Would you eat at McDonalds (m), Chinese food bar (c) or Seafood restaurant (s)? ",
    { limit: 'mcs' }
  ).toLowerCase();
  if (res === "m") {
    inMcDonalds();
  } else if (res === "c") {
    inChineseRest();
  } else if (res === "s") {
    inSeafoodRest();
  }
}

function inTownAfterHelicopter() {
  console.log("\n");
    console.log("You crossed the lake by helicopter and reached a town. ");
  console.log(
    "You feel hungry and want to get a bite. You have few different choices."
  );
  let res = readline.keyIn(
    "Would you eat at McDonalds (m), Chinese food bar (c) or Seafood restaurant (s)? ",
    { limit: 'mcs' }
  ).toLowerCase();
  if (res === "m") {
    inMcDonalds();
  } else if (res === "c") {
    inChineseRest();
  } else if (res === "s") {
    inSeafoodRest();
  }
}

function inMcDonalds() {
  console.log("\n");
    console.log("You've got your food and now need to choose the seating.");
  let res = readline.keyIn(
    "Would you like a seat in the center of dining room on the first floor (f), by the window on the second floor (s) or at the outdoor seating place (o)? ",
    { limit: 'fso'}
  ).toLowerCase();
  if (res === "f") {
    console.log("Enjoy your food!");
    outsideRestaurant();
  } else if (res === "s") {
    console.log("Enjoy your food!");
    outsideRestaurant();
  } else if (res === "o") {
    console.log("Enjoy your food!");
    outsideRestaurant();
  }
}

function inChineseRest() {
    console.log("\n");
    console.log("You've got your food and now need to choose the seating.");
    let res = readline.keyIn(
      "Would you like a seat in the center of dining room on the first floor (f), by the window on the second floor (s) or at the outdoor seating place (o)? ",
      { limit: 'fso' }
    ).toLowerCase();
    if (res === "f") {
      console.log("Enjoy your food!");
      outsideRestaurant();
    } else if (res === "s") {
      console.log("Enjoy your food!");
      outsideRestaurant();
    } else if (res === "o") {
      console.log("Enjoy your food!");
      outsideRestaurant();
    }
  }

  function inSeafoodRest() {
    console.log("\n");
    console.log("You've ordered your food and now need to choose the seating.");
    let res = readline.keyIn(
      "Would you like a seat in the center of dining room on the first floor (f), by the window on the second floor (s) or at the outdoor seating place (o)? ",
      { limit: 'fso' }
    ).toLowerCase();
    if (res === "f") {
      console.log("Enjoy your food!");
      outsideRestaurant();
    } else if (res === "s") {
      console.log("Enjoy your food!");
      outsideRestaurant();
    } else if (res === "o") {
      console.log("Enjoy your food!");
      outsideRestaurant();
    }
  }

  function outsideRestaurant () {
    console.log("\n");  
    console.log("You've finished your food. It's time for some sightseeing.");
    let res = readline.keyIn(
        "Would you go the history museum (m), amusement park (p) or an aquarium (a)? ",
        { limit: 'mpa' }).toLowerCase();
        if(res === "m") {
            inMuseum();
        } else if(res === "p") {
            inAmusementPark();
        } else if(res === "a") {
            inAquarium();
        }
  }

function inMuseum () {
    console.log("\n");
    console.log("You are in the line to the history museum. You need to choose the type of ticket you'll purchase. ");
    let res = readline.keyIn("Would you like basic ticket (b) or pay one price ticket (p)? ", {limit: 'bp'}).toLowerCase();
    if(res === "b") {
        console.log("Enjoy!");
        chooseYourWay();
    } else if(res === "p") {
        console.log("Enjoy!");
        chooseYourWay();
    }
}

function inAmusementPark () {
    console.log("\n");
    console.log("You are in the line to an amusement park. You need to choose the type of ticket you'll purchase. ");
    let res = readline.keyIn("Would you like pay per ride ticket (r) or pay one price ticket (p)? " , {limit: 'rp'}).toLowerCase();
    if(res === "r") {
        console.log("Enjoy!");
        chooseYourWay();
    } else if(res === "p") {
        console.log("Enjoy!");
        chooseYourWay();
    }
}

function inAquarium () {
    console.log("\n");
    console.log("You are in the line to an aquarium. You need to choose the type of ticket you'll purchase. ");
    let res = readline.keyIn("Would you like basic ticket (b) or pay one price ticket (p)? " , {limit: 'bp'}).toLowerCase();
    if(res === "b") {
        console.log("Enjoy!");
        chooseYourWay();
    } else if(res === "p") {
        console.log("Enjoy!");
        chooseYourWay();
    }
}

function chooseYourWay () {
    console.log("\n");
    console.log("You are on your way to your ultimate adventure. You need to go a building that is a few miles away. ")
    readline.keyIn("How would you get there by: walking (w), bus (b) or cab (c)? ", {limit: 'wbc'}).toLowerCase();
        insideBuilding();
}

function insideBuilding () {
    console.log("\n");
    console.log("You've entered the building. You need to go to the fifth floor.");
    readline.keyIn("Would you like to take the stairs (s) or the elevator (e)? ", {limit:'se'}).toLowerCase();
    chooseYourDoor();
}

function chooseYourDoor () {
    console.log("\n");
    console.log("You are on the fifth floor. Prepare for your ultimate adventure! ")
    console.log("There are three doors in front of you. ");
    let res = readline.keyIn("Do you choose door #1, door #2 or door #3? ", {limit: '123'});
     if(res === '1') {
        console.log("\n"); 
        console.log("Congratulations! You are off to Niagara Falls on a bus tour.");
        playAgain()
     } else if(res === '2') {
        console.log("\n"); 
        console.log("Congratulations! You are off to Caribbean Islands on a plane.");
        playAgain();
     } else if(res === '3') {
        console.log("\n"); 
        console.log("Congratulations! You are off to a Fantasy World on a dragon. Good luck!");
        playAgain()
     }
    }


function playAgain () {
    console.log("\n"); 
    if(readline.keyInYN("Would you like to play again? ")) {
         console.clear()
      walkOrBike()
     } else {
         quitGame();
     }
}


const quitGame = () => {
  console.log("Sad to see you go. Goodbye!");
  process.exit();
};

startGame();
