const readlineSync = require("readline-sync");
const chalk = require("chalk");

console.log(
  chalk.redBright.italic(
    `You awaken in the middle of what seems\nto look like Central Hyrule.`
  )
);
console.log(
  chalk.redBright.italic(
    `Far away, you can see The Hyrule Castle standing in front of you with a weird red energy surrounding it.`
  )
);
console.log(
  chalk.redBright.italic(`it sounds like Princess Zelda but you can't see her.`)
);
let nameOfPlayer = readlineSync.question(
  chalk.magenta.bold(`What is your name hero ?`)
);
console.log(
  chalk.redBright.italic(
    `${nameOfPlayer}!  It's me Zelda, Ganon has me captive in The Study Hall in my quarters.\nPlease help me ${nameOfPlayer}!!!!`
  )
);
console.log(
  chalk.redBright.italic(
    `the voice fades away with the words "Please Help me" echoing over and over`
  )
);
console.log(
  chalk.redBright.italic(`Welcome to The Hyrule Castle Adventure Game`)
);
console.log(
  chalk.redBright.italic(
    `In this game ${nameOfPlayer}, you will have to go through the castle and try to save princess Zelda.`
  )
);
console.log(
  chalk.redBright.italic(
    `Your choices in this game are very important as you can either save the princess easily or you might not...`
  )
);
console.log(
  chalk.redBright.italic(
    `Be careful of deadends and ways that sends you flying out of the castle.`
  )
);

const game = () => {
  console.log(
    chalk.magenta.bold(`I hope you're brave enough to play ${nameOfPlayer}.`)
  );
  if (readlineSync.keyInYNStrict(chalk.magenta.bold(`Are you ready ?`))) {
    startGame();
  } else {
    leaveGame();
  }
};

const startGame = () => {
  console.log(chalk.redBright.italic(`Ok ${nameOfPlayer}. Let's start!`));
  console.log(
    chalk.redBright.italic(
      `You got teleported from central Hyrule to entrance of the castle`
    )
  );
  console.log(
    chalk.redBright.italic(
      `You're standing in front of what appears to be the big entrance of Hyrule Castle.`
    )
  );
  console.log(
    chalk.redBright.italic(
      `You walk in, a Korok appear oferring you a Mighty Elixir to boost your attack and a Tough Elixir to help you in the journey`
    )
  );
  console.log(chalk.redBright.italic(`Your attack went up by + 50`));
  console.log(chalk.redBright.italic(`Your defense went up by +50`));
  console.log(
    chalk.redBright.italic(`There's two huge stairs in front of you.`)
  );

  choiceOne = readlineSync.question(
    chalk.magenta.bold(`${nameOfPlayer} Do you wanna go left or right ?\n`)
  );
  choiceOne = choiceOne.trim().toLowerCase();
  if (choiceOne === "left") {
    console.log(
      chalk.redBright.italic(
        `You went up the left stairs and entered the guards' chamber`
      )
    );
    console.log(
      chalk.redBright.italic(`Inside the chamber, there's a treasure chest.`)
    );
    chamberChest();
  } else if (choiceOne === "right") {
    console.log(
      chalk.redBright.italic(
        `You walked up the right stairs and entered teh dinning hall.`
      )
    );
    console.log(
      chalk.redBright.italic(
        `Inside the dining hall, you found a few powerfull dishes that you ate.`
      )
    );
    console.log(
      chalk.redBright.italic(
        `You're full now, your attack and defense went up.`
      )
    );
    console.log(chalk.redBright.italic(`There is 3 doors to leave the room.`));
    console.log(
      chalk.redBright.italic(
        `One to the left, one to the right and one forward`
      )
    );
    dinningHallDoors();
  }
};

const dinningHallDoors = () => {
  doorChoiceOne = readlineSync.question(
    chalk.magenta.bold(`Which door do you want to go through ?\n`)
  );
  doorChoiceOne = doorChoiceOne.trim().toLowerCase();
  if (doorChoiceOne === "left") {
    dinningHallLeftDoor();
  } else if (doorChoiceOne === "right") {
    dinningHallRightDoor();
  } else if (doorChoiceOne === "forward") {
    dinningHallForwardDoor();
  } else {
    console.log(chalk.redBright.italic(`Please choose a correct answer`));
    dinningHallDoors();
  }
};

const dinningHallForwardDoor = () => {
  console.log(
    chalk.redBright.italic(
      `You went through the door in front of you and walked into a room with only a huge set of spirling stairs.`
    )
  );
  console.log(
    chalk.redBright.italic(
      ` You went up the stairs, and walked into the library on the third floor of the castle`
    )
  );
  libraryFullPower();
};
const dinningHallLeftDoor = () => {
  console.log(
    chalk.redBright.italic(
      `You walked out of the left door into the second floor hallway.`
    )
  );
  secondFloorFullPower();
};
const dinningHallRightDoor = () => {
  console.log(
    chalk.redBright.italic(
      `You opened and walked into a room with a slide that you took, and it kicked you out of the castle.`
    )
  );
  kickedOutOfCastle();
};

const libraryFullPower = () => {
  console.log(
    chalk.redBright.italic(
      `You're in the library, there's only one door to get out of the room.`
    )
  );
  console.log(
    chalk.redBright.italic(
      `You tried opening the door but an inscription appeared in the door.`
    )
  );
  console.log(
    chalk.redBright.italic(
      `Answer this question correctly and the door will open.`
    )
  );
  array = ["Zelda", "Link", "Ganon"];
  console.log(chalk.magenta.bold(`Who is the princess you're trying to save?`));
  quizzanswer = readlineSync.keyInSelect(array);
  playerChoice = array[quizzanswer];
  if (playerChoice === array[0]) {
    console.log(
      chalk.redBright.italic(`The door opened and you walked through it`)
    );
    thirdFloor();
  } else {
    console.log(chalk.redBright.italic(`Wrong answer choose again.`));
    libraryFullPower();
  }
};

const kickedOutOfCastle = () => {
  console.log(
    chalk.redBright.italic(`You're out of the castle which means you lost.`)
  );
  if (readlineSync.keyInYN(chalk.magenta.bold(`Do you wanna play again?`))) {
    console.clear();
    startGame();
  } else {
    leaveGame();
  }
};

const chamberChest = () => {
  console.log(chalk.redBright.italic(`Should you open the chest or no ?`));
  if (readlineSync.keyInYNStrict(chalk.magenta.bold(`What do you say?`))) {
    console.log(
      chalk.redBright.italic(
        `You opened the chest, inside is the guards' body armor.`
      )
    );
    console.log(
      chalk.redBright.italic(
        `You changed into the armor and you felt this powerful energy go through your whole body.`
      )
    );
    console.log(
      chalk.redBright.italic(`You're strength and defense are at it's max.`)
    );
    secondFloorFullPower();
  } else {
    secondFloorNoChest();
  }
};

const secondFloorNoChest = () => {
  console.log(
    chalk.redBright.italic(`You're in the second floor of the castle now.`)
  );
  console.log(chalk.redBright.italic(`But no extra power`));
  console.log(
    chalk.redBright.italic(
      `There's two sets of stairs, one to the left and one to the right.`
    )
  );
  doorChoiceTwo = readlineSync.question(
    chalk.magenta.bold(`Which door do you want to go through ?\n`)
  );
  doorChoiceTwo = doorChoiceTwo.trim().toLowerCase();
  if (doorChoiceTwo === "right") {
    console.log(chalk.magenta.bold(`You walked up the stairs to your right.`));
    thirdFloorHalfPower();
  } else if (doorChoiceTwo === "left") {
    console.log(chalk.magenta.bold(`You went up the left stairs.`));
    ganonSurpriseRoomHalfPower();
  } else {
    console.log(chalk.redBright.italic(`Please choose the correct door`));
    secondFloorNoChest();
  }
};

const ganonSurpriseRoomHalfPower = () => {
  console.log(
    chalk.redBright.italic(
      `you entered the hidden room and in front of you appear Ganon.`
    )
  );
  console.log(
    chalk.redBright.italic(
      `Ganon yells out: " MUAHAHAHA YOU THOUGHT YOU COULD SAVE THE PRINCESS WITHOUT ME INTERFEERING?\nWELL THINK AGAIN`
    )
  );
  console.log(
    chalk.redBright.italic(
      `Ganon attacked you and since you are not strong enough, he slashed you in half and you died`
    )
  );
  playAgain();
};

const secondFloorFullPower = () => {
  console.log(
    chalk.redBright.italic(
      `You're in the second floor hallway of the castle now.`
    )
  );
  console.log(
    chalk.redBright.italic(
      `There's two sets of stairs, one to the left and one to the right.`
    )
  );
  doorChoiceThree = readlineSync.question(
    chalk.magenta.bold(`Which door do you want to go through ?\n`)
  );
  doorChoiceThree = doorChoiceThree.trim().toLowerCase();
  if (doorChoiceThree === "right") {
    console.log(
      chalk.redBright.italic(`You walked up the stairs to your right.`)
    );
    thirdFloor();
  } else if (doorChoiceThree === "left") {
    console.log(chalk.redBright.italic(`You went up the left stairs.`));
    ganonSurpriseRoomPowerfull();
  } else {
    console.log(chalk.redBright.italic(`Please choose the correct door`));
    secondFloorFullPower();
  }
};

ganonSurpriseRoomPowerfull = () => {
  console.log(
    chalk.redBright.italic(
      `you entered the hidden room and in front of you appear Ganon.`
    )
  );
  console.log(
    chalk.redBright.italic(
      `Ganon yells out: " MUAHAHAHA YOU THOUGHT YOU COULD SAVE THE PRINCESS WITHOUT ME INTERFEERING?\nWELL THINK AGAIN`
    )
  );
  console.log(
    chalk.redBright.italic(
      `Ganon tries to attack you but with all the power surrounding you, you were able to dodge him\n and flew right out the window directly into the pits of fire surrounding the castle.`
    )
  );
  console.log(
    chalk.redBright.italic(
      `As a gift for not getting killed by ganon, you get automatically teleported to the third floor hall next to zelda's room.`
    )
  );
  thirdFloor();
};

thirdFloorHalfPower = () => {
  console.log(chalk.redBright.italic(`You're in the 3rd floor now.`));
  console.log(
    chalk.redBright.italic(
      `There's a door in front of you that seems to lead to Princess Zelda's room`
    )
  );
  console.log(
    chalk.redBright.italic(
      `You go inside the room and you find the master sword standing in the middle with half of it burried in the ground`
    )
  );
  console.log(
    chalk.redBright.italic(
      `You try to take it out but you're not strong enough to do so.`
    )
  );
  if (
    readlineSync.keyInYNStrict(
      `Would you like to start from the begining to improve your change of getting the sword or no ?`
    )
  ) {
    startGame();
  } else {
    zeldaRoomNosword();
  }
};

thirdFloor = () => {
  console.log(chalk.redBright.italic(`You're in the 3rd floor now.`));
  console.log(
    chalk.redBright.italic(
      `There's a door in front of you that seems to lead to Princess Zelda's room`
    )
  );
  console.log(
    chalk.redBright.italic(
      `You go inside the room and you find the master sword standing in the middle with half of it burried in the ground`
    )
  );
  console.log(
    chalk.redBright.italic(
      `You try to take it out and the whole sword came out and makes you feel ready for whatever may come.`
    )
  );
  if (readlineSync.keyInYNStrict(chalk.magenta.bold(`Would you like to keep it`))) {
    console.log(chalk.redBright.italic(`You put the sword in your inventory.`));
    zeldaRoomSword();
  } else {
    zeldaRoomNosword();
  }
};
const zeldaRoomSword = () => {
  console.log(
    chalk.redBright.italic(
      `You walked up the stairs leading you from Princess Zelda's room into the study where she is locked up.`
    )
  );
  console.log(
    chalk.redBright.italic(
      ` You walk into the study and you see Zelda held up in the middle of the air by some inchanted chains.`
    )
  );
  console.log(
    chalk.redBright.italic(
      `A voice start speaking saying: you finally made it and I see that you also have The Master Sword.`
    )
  );
  console.log(
    chalk.redBright.italic(
      `The voice continue to say that to destroy the chains you can either use the sword or answer a riddle.`
    )
  );
  swordOrRiddle = readlineSync.question(
    chalk.magenta.bold(
      `Would you like to use the sword or would you like to hear the riddle ?\n`
    )
  );
  swordOrRiddle = swordOrRiddle.trim().toLowerCase();
  switch(swordOrRiddle) {
    case 'sword':
      swordPath();
     case 'riddle':
      riddlePath();  
  }
  // if (swordOrRiddle === "sword") {
  //   swordPath();
  // } else if (swordOrRiddle === "riddle") {
  //   riddlePath();
  // } else {
  //   console.log(chalk.redBright.italic(`Please choose the correct answer`));
  //   zeldaRoomSword();
  // }
};

const zeldaRoomNosword = () => {
  console.log(
    chalk.redBright.italic(
      `You walked up the stairs leading you from Princess Zelda's room into the study where she is locked up.`
    )
  );
  console.log(
    chalk.redBright.italic(
      ` You walk into the study and you see Zelda held up in the middle of the air by some inchanted chains.`
    )
  );
  console.log(
    chalk.redBright.italic(
      `A voice start speaking saying: You finally made it but i don't see The Master Sword.`
    )
  );
  console.log(
    chalk.redBright.italic(
      `In that case, the only way you can break those chains is by answering the riddle.`
    )
  );
  riddlePath();
};

const riddlePath = () => {
  console.log(
    chalk.redBright.italic(
      `If you answer this riddle, the chains will break. here's the riddle:`
    )
  );
  console.log(
    chalk.redBright.italic(`Kakariko Village's specialty fruit!
    Its rock-hard flesh is quite resolute!`)
  );
  riddleAnswer = readlineSync.question(
    chalk.magenta.bold(`what is your answer ?\n`)
  ); //fortified pumpkins
  riddleAnswer = riddleAnswer.trim().toLowerCase();
  if (riddleAnswer === "fortified pumpkins") {
    console.log(chalk.redBright.italic(`You got the correct answer.`));
    console.log(
      chalk.redBright.italic(
        `The chains were magically broken and disappeared.`
      )
    );
    console.log(
      chalk.redBright.italic(`You were successful at saving the princess.`)
    );
    console.log(
      chalk.redBright.italic(
        `Princess Zelda is very thankfull and names her personal guard.`
      )
    );
    playAgain();
  } else {
    console.log(chalk.redBright.italic(`sorry wrong answer.`));
    console.log(chalk.redBright.italic(`you lost.`));
    console.log(
      chalk.redBright.italic(
        `Princess Zelda remains locked until someone else saves her.`
      )
    );
    playAgain();
  }
};

const swordPath = () => {
  console.log(
    chalk.redBright.italic(`You used your Master Sword to destroy the chains.`)
  );
  console.log(
    chalk.redBright.italic(`you were successful in saving Princess.`)
  );
  console.log(
    chalk.redBright.italic(
      `Princess Zelda is very thankfull and names her personal guard.`
    )
  );
  playAgain();
};

const playAgain = () => {
  if (
    readlineSync.keyInYNStrict(
      chalk.magenta.bold(`would you like like to play again ?`)
    )
  ) {
    startGame();
  } else {
    console.log(chalk.redBright.italic(`have a good day!`));
    process.exit();
  }
};

const leaveGame = () => {
  console.log(
    chalk.redBright.italic(
      `I knew you weren't the brave hero I thought you would be...`
    )
  );
  console.log(
    chalk.redBright.italic(
      `You're getting teleported away from Central Hyrule back to your home. GOODBYE`
    )
  );
  process.exit();
};

game();
