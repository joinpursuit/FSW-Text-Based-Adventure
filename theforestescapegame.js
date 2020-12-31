const readlineSync = require("readline-sync");

let nameOfPlayer = readlineSync.question("what's you poor unfortunate soul? ");
console.log(`Hello ${nameOfPlayer}!  Welcome to The Hyrule Castle`);
console.log(
  `The goal is to save princess Zelda without getting dettected or killed.`
);
console.log(`Your decision are important so choose wisely...`);

const game = () => {
  console.log(`I hope you're brave enough to play ${nameOfPlayer}.`);
  if (readlineSync.keyInYN(`Are you ready ?`)) {
    startGame();
  } else {
    leaveGame();
  };
};

const startGame = () => {
  console.log(`Ok ${nameOfPlayer}. Let's start!`);
  console.log(
    `You got teleported from central Hyrule to entrance of the castle`
  );
  console.log(
    `You're standing in front of what appears to be the big entrance of Hyrule Castle.`
  );
  console.log(
    `You walk in, a Korok appear oferring you a Mighty Elixir to boost your attack and a Tough Elixir to help you in the journey`
  );
  console.log("Your attack went up by + 50");
  console.log("Your defense went up by +50");
  console.log("There's two huge stairs in front of you.");

  choiceOne = readlineSync.question(
    `${nameOfPlayer} Do you wanna go left or right ?\n`
  );
  choiceOne = choiceOne.trim().toLowerCase();
  if (choiceOne === "left") {
    console.log(`You went up the left stairs and entered the guards' chamber`);
    console.log(`Inside the chamber, there's a treasure chest.`);
    chamberChest();
  } else if (choiceOne === "right") {
    console.log(`You walked up the right stairs and entered teh dinning hall.`);
    console.log(
      "Inside the dining hall, you found a few powerfull dishes that you ate."
    );
    console.log(`You're full now, your attack and defense went up.`);
    console.log(`There is 3 doors to leave the dininr room.`);
    console.log(`One to the left, one to the right and one forward`);
    dinningHallDoors();
  }
};

const dinningHallDoors = () => {
  doorChoiceOne = readlineSync.question(
    `Which door do you want to go through ?\n`
  );
  doorChoiceOne = doorChoiceOne.trim().toLowerCase();
  if (doorChoiceOne === "left") {
    dinningHallLeftDoor();
  } else if (doorChoiceOne === "right") {
    dinningHallRightDoor();
  } else if (doorChoiceOne === "forward") {
    dinningHallForwardDoor();
  } else {
    console.log(`Please choose a correct answer`);
    dinningHallDoors();
  }
};

const dinningHallForwardDoor = () => {
  console.log(
    `You went through the door in front of you and walked into a room with only a huge set of spirling stairs.`
  );
  console.log(
    ` You went up the stairs, and walked into the library on the third floor of the castle`
  );
  libraryFullPower();
};
const dinningHallLeftDoor = () => {
  console.log(`You walked out the left door into the second floor hall.`);
  secondFloorFullPower();
};
const dinningHallRightDoor = () => {
  console.log(
    "You opened and walked into a room with a slide that you took, and it kicked you out of the castle."
  );
  kickedOutOfCastle();
};

const libraryFullPower = () => {
  console.log(
    `You're in the library, there's only one door to get out of the room.`
  );
  console.log(
    `You tried opening the door but an inscription appeared in the door.`
  );
  console.log(`Answer this question correctly and the door will open.`);
  array = ["Zelda", "Link", "Ganon"];
  console.log(`Who is the princess you're trying to save?`);
  quizzanswer = readlineSync.keyInSelect(array);
  playerChoice = array[quizzanswer];
  if (playerChoice === array[0]) {
    console.log(`The door opened and you walked through it`);
    thirdFloor();
  } else {
    console.log(`Wrong answer choose again.`);
    libraryFullPower();
  }
};

const kickedOutOfCastle = () => {
  console.log(`You're out of the castle which means you lost.`);
  if (readlineSync.keyInYN(`Do you wanna play again?`)) {
    console.clear();
    startGame();
  } else {
    leaveGame();
  }
};

const chamberChest = () => {
  console.log("Should you open the chest or no ?");
  if (readlineSync.keyInYN(`What do you say?`)) {
    console.log(`You opened the chest, inside is the guards' body armor.`);
    console.log(
      `You changed into the armor and you felt this powerful energy go through your whole body.`
    );
    console.log(`You're strength and defense are at it's max.`);
    secondFloorFullPower();
  } else {
    secondFloorNoChest();
  }
};

const secondFloorNoChest = () => {
  console.log(`You're in the second floor of the castle now.`);
  console.log(`But no extra power`);
  console.log(
    `There's two sets of stairs, one to the left and one to the right.`
  );
  doorChoiceTwo = readlineSync.question(
    `Which door do you want to go through ?\n`
  );
  doorChoiceTwo = doorChoiceTwo.trim().toLowerCase();
  if (doorChoiceTwo === "right") {
    console.log(`You walked up the stairs to your right.`);
    thirdFloorHalfPower();
  } else if (doorChoiceTwo === "left") {
    console.log(`You went up the stairs and it is a dead end.`);
    console.log(`You walk down the stairs back to the second floor`);
    secondFloorNoChest();
  } else {
    console.log(`Please choose the correct door`);
    secondFloorNoChest();
  }
};

const secondFloorFullPower = () => {
  console.log(`You're in the second floor hallway of the castle now.`);
  console.log(
    `There's two sets of stairs, one to the left and one to the right.`
  );
  doorChoiceTwo = readlineSync.question(
    `Which door do you want to go through ?\n`
  );
  doorChoiceTwo = doorChoiceTwo.trim().toLowerCase();
  if (doorChoiceTwo === "right") {
    console.log(`You walked up the stairs to your right.`);
    thirdFloor();
  } else if (doorChoiceTwo === "left") {
    console.log(`You went up the stairs and it is a dead end.`);
    console.log(`You walk down the stairs back to the second floor`);
    secondFloorFullPower();
  } else {
    console.log(`Please choose the correct door`);
    secondFloorFullPower();
  }
};

thirdFloorHalfPower = () => {
  console.log(`You're in the 3rd floor now.`);
  console.log(
    `There's a door in front of you that seems to lead to Princess Zelda's room`
  );
  console.log(
    "You go inside the room and you find the master sword standing in the middle with half of it burried in the ground"
  );
  console.log(`You try to take it out but you're not strong enough to do so.`);
  if (
    readlineSync.keyInYN(
      `Would you like to start from the begining to improve your change of getting the sword or no ?`
    )
  ) {
    startGame();
  } else {
    zeldaRoomNosword();
  }
};

thirdFloor = () => {
  console.log(`You're in the 3rd floor now.`);
  console.log(
    `There's a door in front of you that seems to lead to Princess Zelda's room`
  );
  console.log(
    "You go inside the room and you find the master sword standing in the middle with half of it burried in the ground"
  );
  console.log(
    `You try to take it out and the whole sword came out and makes you feel ready for whatever may come.`
  );
  if (readlineSync.keyInYN(`Would you like to keep it`)) {
    console.log(`You put the sword in your inventory.`);
    zeldaRoomSword();
  } else {
    zeldaRoomNosword();
  }
};
const zeldaRoomSword = () => {
  console.log(
    `You walked up the stairs leading you from Princess Zelda's room into the study where she is locked up.`
  );
  console.log(
    ` You walk into the study and you see Zelda held up in the middle of the air by some inchanted chains.`
  );
  console.log(
    `A voice start speaking saying: you finally made it and I see that you also have The Master Sword.`
  );
  console.log(
    `The voice continue to say that to destroy the chains you can either use the sword or answer a riddle.`
  );
  swordOrRiddle = readlineSync.question(
    `Would you like to use the sword or would you like to hear the riddle ?\n`
  );
  swordOrRiddle = swordOrRiddle.trim().toLowerCase();
  if (swordOrRiddle === "sword") {
    swordPath();
  } else if (swordOrRiddle === "riddle") {
    riddlePath();
  } else {
    console.log(`Please choose the correct answer`);
    zeldaRoomSword();
  }
};

const zeldaRoomNosword = () => {
  console.log(
    `You walked up the stairs leading you from Princess Zelda's room into the study where she is locked up.`
  );
  console.log(
    ` You walk into the study and you see Zelda held up in the middle of the air by some inchanted chains.`
  );
  console.log(
    `A voice start speaking saying: You finally made it but i don't see The Master Sword.`
  );
  console.log(
    `In that case, the only way you can break those chains is by answering the riddle.`
  );
  riddlePath();
};

const riddlePath = () => {
  console.log(
    `If you answer this riddle, the chains will break. here's the riddle:`
  );
  console.log(`Kakariko Village's specialty fruit!
    Its rock-hard flesh is quite resolute!`);
  riddleAnswer = readlineSync.question(`what is your answer ?\n`); //fortified pumpkins
  riddleAnswer = riddleAnswer.trim().toLowerCase();
  if (riddleAnswer === "fortified pumpkins") {
    console.log(`You got the correct answer.`);
    console.log("The chains were magically broken and disappeared.");
    console.log(`You were successful and saved the princess.`);
    console.log(`Princess Zelda is very thankfull and names her personal guard.`);
    playAgain();
  } else {
    console.log(`sorry wrong answer.`);
    console.log(`you lost.`);
    console.log(`Princess Zelda remains locked until someone saves her.`)
    playAgain();
  }
};

const swordPath = () => {
  console.log("You used your Master Sword to destroy the the chains.");
  console.log(`you were successful and saved the princess.`);
  console.log(`Princess Zelda is very thankfull and names her personal guard.`);
  playAgain();
};

const playAgain = () => {
  if (readlineSync.keyInYN(`would you like like to play again ?`)) {
    startGame();
  } else {
    console.log(`thank you for saving the princess.`);
    console.log(`have a good day!`);
    process.exit();
  }
};

const leaveGame = () => {
  console.log(`I knew you weren't the brave hero I thought you would be...`);
  console.log(`you're getting teleported away from the island. GOODBYE`);
  process.exit();
};

game();
