const rls = require("readline-sync");

/// -- LEAVE GAME --
const leaveGame = () => {
  console.log(`--* So long ${userName}.\n`);
  process.exit();
};

/// -- INCAPACITATED --
const incapacitated = () => {
  let choice;
  rls.keyInPause();
  console.log("\n-*- INCAPACITATED -*-");
  console.log("-*- GAME OVER -*- \n");
  console.log(
    `\n--* Do you want to play again or leave the game?
    YES To play again
    NO To leave\n`
  );
  theEnd();
};

const theEnd = () => {
  let choiceEnd;
  console.log(`\n--* Do you wan to play again?\n`)
  while (choiceEnd !== "yes" && choiceEnd !== "no") {
    choiceEnd = rls.question("CHOOSE: Yes? or No? \n");
    choiceEnd = choiceEnd.trim().toLowerCase();
    if (choiceEnd !== "yes" && choiceEnd !== "no") {
      console.log("\n--* Don't make me change my mind about you.");
    }
  }
  if (choiceEnd === "yes") {
    console.clear();
    startGame();
  } else {
    leaveGame();
  }
};

const like = () => {
  console.log(
    `\n--* Mean Mug gobbled up that chicken before you could blink twice, 
    followed by the loudest belch you have ever heard in your life.
    Then the most amazing thing happened.\n
    Mean Mug transformed into a most beautiful creature and said in the   
    softest, sweetest voice: 
    "Excuse me." then giggles 
    "Mamma always said I get a little disagreeable when I'm hungry."
    and then Mean Mug giggles again.\n`
  );
  rls.keyInPause();
  console.log(
    `\n--* --* Congratulations, You have made a new friend!\n
    Thank you for playing my Adventure Game.
    Feel free to play again to find all the possibilities.\n`
  );
  leaveGame();
};

const dontLike = () => {
  console.log(
    `\n--* You don't like it? ... What do you mean you don't like it?
    After I slaved away to make you this deliciousness. 
    WHAT DO YOU MEAN DON'T LIKE IT?!\n
    Mean Mug: I'm just saying it's a bit salty. I didn't say it wasn't good.
    (mumbling) I thought I was disagreeable when I'm hungry. Geez.\n
    You turn your back still in your feelings about your cooking.
    Mean Mug comes over and offers you to share a cool drink.
    How can you resist?\n`
  );
  rls.keyInPause();
  console.log(
    `\n--* --* Congratulations, You have made a new friend!\n
    Thank you for playing my Adventure Game.
    Feel free to play again to find all the possibilities.\n`
  );
  theEnd();
};

const grill = () => {
  let choiceGrill;
  console.log(
    `\n--* Mean Mug: "I'm watching my cholesterol. Grilling is healthier."\n
    You whip up a delicious feast for you and Mean Mug.
    Proudly, you present your masterpiece to Mean Mug, but Mamma didn't raise no fool so
    you move closer to the door ... you know, just in case.\n
    Does Mean Mug like the chicken?`
  );
  while (choiceGrill !== true && choiceGrill !== false) {
    choiceGrill = rls.keyInYN("--* CHOOSE");
    if (choiceGrill !== true && choiceGrill !== false) {
      console.log("You haven't figured this part out yet?");
    }
  }
  if (choiceGrill === true) {
    like();
  }
  dontLike();
};

const fry = () => {
  let choiceFry;
  console.log(
    `\n--* You whip up a delicious feast for you and Mean Mug.
    You give Mean Mug the plate. 
    You move closer to the door ... you know, just in case.\n
    Does Mean Mug like the chicken?`
  );
  while (choiceFry !== true && choiceFry !== false) {
    choiceFry = rls.keyInYN("--* CHOOSE");
    if (choiceFry !== true && choiceFry !== false) {
      console.log("You haven't figured this part out yet?");
    }
  }
  if (choiceFry === true) {
    like();
  }
  dontLike();
};

const path = () => {
  let choicePath;
  console.log("Are you sure you want to leave the game?\n");
  while (choicePath !== "1" && choicePath !== "2") {
    choicePath = rls.question("--*CHOOSE: 1 to Leave or 2 to Continue\n");
    choicePath = choicePath.trim().toLowerCase();
    if (choicePath !== "1" && choicePath !== "2") {
      console.log("Just when I was getting to like you.\n");
    }
  }
  if (choicePath === "2") {
    cook();
  } else {
    leaveGame();
  }
};

const cook = () => {
  let choiceCook;
  console.log(
    `\n--* Ooooh Luck must be on your side today.
    You: "Excellent Choice!"
    You breathe a sigh of relief and get busy cooking before Mean Mug 
    has a change of heart.
    But you only know how to cook chicken 2 ways.\n`
  );
  choiceCook = ["grill", "fry"];
  index = rls.keyInSelect(choiceCook, "--* CHOOSE:");

  switch (index) {
    case 0:
      grill();
      break;
    case 1:
      fry();
      break;
    case -1:
      path();
  }
};

const diner = () => {
  let choice;
  console.log(
    `\n--* Blah
    Blah
    Blah\n`
  );
  while (choice !== "fruit" && choice !== "cake") {
    choice = rls.question("\n--* Do you eat the fruit or the cake?\n");
    choice = choice.trim().toLowerCase();
    if (choice !== "fruit" && choice !== "cake") {
      console.log("\nI don't think so.");
    }
  }
  if (choice === "fruit") {
    fruit();
  } else {
    cake();
  }
};
const decline = () => {
  console.log(
    `\n--* You stumble your way to the bathroom to splash some cold water on your face.
        Just as you turn the corner and take a few steps a door opens suddenly and
        slams into your head knocking you out cold.\n`
  );
  rls.keyInPause();
  console.log("\n--* ooooh. That's gonna leave a nasty bruise.\n");
  incapacitated();
};

const attack = () => {
  console.log(
  `\n--* Shaky legs and all you get ready to strike. 
  Then Mean Mug does something unexpected. 
  Mean Mug begins to cry.
  You are absolutelly baffeled.\n
  What do you do now?
  Do you approach or retreat?\n`
  );
  approach();
  retreat();
  }

const sword = () => {
  let choiceSword;
  console.log(`\n--* You pick up the sword and approach Mean Mug.
  Mean Mug take a look at you and growls even more ferociously?
  Your knees start shaking uncontrollably. \n
  Ok, time what do you do now?\n`);
  choiceSword = ["run", "attack"];
  index = rls.keyInSelect(choiceSword, "--* CHOOSE:\n");
  switch (index) {
    case 0:
      run();
      break;
    case 1:
      attack();
      break;
    case -1:
      path();
  }
};

const chicken = () => {
  let choiceChicken;
  console.log(
    `\n--* Mean Mug takes a step towards you.
    You: "Listen! Let's be diplomatic here.
    I have this chicken.  
    How about I make us something to eat 
    That way, you don't eat me?"\n
    Does Mean Mug agree to eat the chicken?`
  );
  while (choiceChicken !== true && choiceChicken !== false) {
    choiceChicken = rls.keyInYN("\n--* CHOOSE:\n");
    if (choiceChicken !== true && choiceChicken !== false) {
      console.log("\nMy time is valuable.");
    }
  }
  if (choiceChicken === true) {
    cook();
  } else {
    console.log(`Oh sugar!\n`);
    run();
  }
};

const wave = () => {
  let choiceWave;
  console.log(
    `\n--* Before you realize it, you are drowning in the most beautiful brown eyes you have ever seen.
        Beautiful One: That was quite a performance up there. 
        You: I'd offer an encore but .... 
        Beautiful One: You ok?
        You: Yup.
        Beautiful One: You look like you could use a cup of something not alcoholic and warm.
        There's a diner up the street. Come on. \n
        --* What do you do?\n`
  );
  while (choiceWave !== "diner" && choiceWave !== "decline") {
    choiceWave = rls.question("\n--* Go to the diner or decline?\n");
    choiceWave = choiceWave.trim().toLowerCase();
    if (choiceWave !== "diner" && choiceWave !== "decline") {
      console.log("\nSober up Dearie.");
    }
  }
  if (choiceWave === "diner") {
    diner();
  } else {
    decline();
  }
};
const hide = () => {
  console.log(
    `\n--* You stumble your way as quickly as you can away from the table and head towards
    the back. Just as you get near the kitchen area you feel really sick.
    Quickly  you duck into the nearest room you can find. 
    Only it's not a room at all and you fall down a shaft.`
  );
  door2();
};

const runMore = () => {
  console.log(
    `\n--* You start running again picking up speed. You look back and you can't even see Mean Mug now.
    And then it happened.\n`
  );
  rls.keyInPause();
  console.log(
    `\n--* You fall into a whole in the ground with no way to get out. You are knocked out cold.
    ooooh. That's gonna leave a nasty bruise. \n`
  );
  incapacitated();
};

const stay = () => {
  let choiceStay;
  console.log(
    `\n--* You give the ogre who took your spotlight a stank look and exit stage left as graceful 
    as only someone drunk can.
    While you are sitting at you table trying to collect yourself, you notice a beautiful 
    specimen of a human being looking right at you.\n
    What do you do?
    Wave and smile semi-soberly? or Find somewhere to hide?\n`
  );
  while (choiceStay !== "wave" && choiceStay !== "hide") {
    choiceStay = rls.question("\n--* CHOOSE: Wave? or Hide? \n");
    choiceStay = choiceStay.trim().toLowerCase();
    if (choiceStay !== "wave" && choiceStay !== "hide") {
      console.log("\nDo you need coffee or something?");
    }
  }
  if (choiceStay === "wave") {
    wave();
  } else {
    hide();
  }
};

const leave = () => {
  outside();
};

const fight = () => {
  let choiceFight;
  console.log(
    `\n--* You look arounnd and in the corner you see a sword and a chicken.
    Which you do you choose to go into battle with?\n`
  );
  while (choiceFight !== "sword" && choiceFight !== "chicken") {
    choiceFight = rls.question("\n--* CHOOSE: Sword? or Chicken?\n");
    choiceFight = choiceFight.trim().toLowerCase();
    if (choiceFight !== "sword" && choiceFight !== "chicken") {
      console.log("\nYou're holding up progress here!");
    }
  }
  if (choiceFight === "sword") {
    sword();
  } else {
    chicken();
  }
};

const run = () => {
  let choiceRun;
  console.log(
    `\n--* You took one look at the Mean Mug and said 
    "Awww, hell nah! I'm outta here!"
    You take of running like you the Road Runner.\n
    After a few minutes you take a look back and realize Mean Mug is not chasing you.
    You think ... Maybe I CAN beat Mean Mug.\n
    Do you turn back and fight or do you keep running?\n
    Enter 1 to turn back and fight
    Enter 2 to keep running`
  );
  while (choiceRun !== "1" && choiceRun !== "2") {
    choiceRun = rls.question("\n--* CHOOSE: 1? or 2?\n");
    choiceRun = choiceRun.trim().toLowerCase();
    if (choiceRun !== "1" && choiceRun !== "2") {
      console.log("\nNope. Try again.");
    }
  }
  if (choiceRun === "1") {
    fight();
  } else {
    runMore();
  }
};

const dance = () => {
  console.log(
    `\n--* You get on the dance floor showing off your cool moves.
    You bust another cool move. 
    Go ${userName}! Go ${userName}! Go ${userName}! 
    uh-oh, you slip and fall banging your head on something really hard.`
  );
  console.log("--* ooooh. That's gonna leave a nasty bruise. \n");
  incapacitated();
};

const sing = () => {
  let choice5;
  console.log(
    `\n--* You grab the mic and start to let the vibes flow.
    A low rumble is building in the room but you are so drunk and happy that you could care less.
    Just as you are about to give them the grand finalie. 
    Someone grabs your mic and you hear the voice again. 
    The Voice: "You think this is American Idol Auditions?!"
    Laughter erupts and you are mortified.\n
    Do you want to stay or leave?`
  );
  while (choice5 !== "stay" && choice5 !== "leave") {
    choice5 = rls.question("\n--* CHOOSE: Stay? or Leave? \n");
    choice5 = choice5.trim().toLowerCase();
    if (choice5 !== "stay" && choice5 !== "leave") {
      console.log("\n--* Get it together!");
    }
  }
  if (choice5 === "stay") {
    stay();
  } else {
    leave();
  }
};

const friend = () => {
  let choiceRideFly;
  console.log(`\n--* friend text`);
  //console.log("Testing, testing 1, 2, 3");
  if (choiceRideFly === "ride") {
    ride();
  } else {
    fly();
  }
};

const foe = () => {
  let choiceRunFight;
  console.log(
    `\n--* Mean Mug catches sight of you and let's out a ferocious growl.
      Oh Snap! It's about to get live.
      Do You want to run or fight?\n`
  );
  while (choiceRunFight !== "run" && choiceRunFight !== "fight") {
    choiceRunFight = rls.question("\n--* CHOOSE: Run? or Fight?\n");
    choiceRunFight = choiceRunFight.trim().toLowerCase();
    if (choiceRunFight !== "run" && choiceRunFight !== "fight") {
      console.log("\n--* uhmmmm...");
    }
  }
  if (choiceRunFight === "run") {
    run();
  } else {
    fight();
  }
};

const approach = () => {
  console.log(`\n--* approach text`);
  //console.log("Testing, testing 1, 2, 3");
};
const retreat = () => {
  console.log(`\n--* retreat text`);
  //console.log("Testing, testing 1, 2, 3");
};

const fruit = () => {
  let choiceEnchanted;
  console.log(`\n--* Welcome to the Enchanted Forrest`);
  if (choiceEnchanted === "approach") {
    approach();
  } else {
    retreat();
  }
};

const cake = () => {
  let choiceDarkWood;
  console.log(
    `\n--* Welcome to the Dark Wood Forrest
      Standing in front of you is the ugliest mug you have ever seen. 
      And a whole lotta drooling too! Yuck!
      What the hell was in that cake?\n
      Is Mean Mug a firend or foe?`
  );
  while (choiceDarkWood != "friend" && choiceDarkWood !== "foe") {
    choiceDarkWood = rls.question("\n--* CHOOSE: Friend? or Foe?\n");
    choiceDarkWood = choiceDarkWood.trim().toLowerCase();
    if (choiceDarkWood != "friend" && choiceDarkWood !== "foe") {
      console.log("\nIt's a simple question.");
    }
  }
  if (choiceDarkWood === "friend") {
    friend();
  } else {
    foe();
  }
};

const martini = () => {
  let choiceDanceSing;
  console.log(
    `\n--* Looks like someone has had a few too many martinis. 
    They are pretty tasty.
    You decide to go with the flow and have some fun.
    Do want to dance? or sing? \n`
  );
  while (choiceDanceSing !== "dance" && choiceDanceSing !== "sing") {
    choiceDanceSing = rls.question("\n--* CHOOSE: Dance? or Sing?\n");
    choiceDanceSing = choiceDanceSing.trim().toLowerCase();
    if (choiceDanceSing !== "dance" && choiceDanceSing !== "sing") {
      console.log("\n--* I know you're a bit loopy but, FOCUS!");
    }
  }
  if (choiceDanceSing === "dance") {
    dance();
  } else {
    sing();
  }
};

const box = () => {
  let choiceFruitCake;
  console.log(
    `\n--* You open the box and you see two beautiful bite sized food creations.
      One is a fruit salad and the other is a mini cake.
      Oh these look so very tasy. 
      Which one do you choose?`
  );
  while (choiceFruitCake !== "fruit" && choiceFruitCake !== "cake") {
    choiceFruitCake = rls.question("\n--* CHOOSE: Fruit? or Cake?\n");
    choiceFruitCake = choiceFruitCake.trim().toLowerCase();
    if (choiceFruitCake !== "fruit" && choiceFruitCake !== "cake") {
      console.log("\n Try Again.");
    }
  }
  if (choiceFruitCake === "fruit") {
    fruit();
  } else {
    cake();
  }
};

const door1 = () => {
  let choiceMartiniBox;
  console.log(
    `\n--* You are now at a rooftop party.
    A waiter approaches and offers you a tray of delectable martinis.
    In the middle of the tray is a box.`
  );
  while (choiceMartiniBox !== "martini" && choiceMartiniBox !== "box") {
    choiceMartiniBox = rls.question("\n--* CHOOSE: Martini? or Box? \n");
    choiceMartiniBox = choiceMartiniBox.trim().toLowerCase();
    if (choiceMartiniBox !== "martini" && choiceMartiniBox !== "box") {
      console.log(`\n--* ${userName}, please pay attention.`);
    }
  }
  if (choiceMartiniBox === "martini") {
    martini();
  } else {
    box();
  }
};

const door2 = () => {
  let choiceDoor2;
  console.log(
    `\n--* You are now in a pitch black room. At least you think it's a room.
      You hear the faint drip, drip of liquid in the distance.
      The Voice: Laughing... "Oh we're about to have some real fun now."
      You feel like you are about to have a nervous breakdown.\n
      Suddenly the lights come on and you see a tray with 2 beautiful 
      bite sized food creations.
      One is a fruit salad and the other is a mini cake.
      Oh these look so very tasy. 
      Which one do you choose?`
  );
  while (choiceDoor2 !== "fruit" && choiceDoor2 !== "cake") {
    choiceDoor2 = rls.question("\n--* CHOOSE: Fruit? or Cake?\n");
    choiceDoor2 = choiceDoor2.trim().toLowerCase();
    if (choiceDoor2 !== "fruit" && choiceDoor2 !== "cake") {
      console.log("Oh, come on!");
    }
  }
  if (choiceDoor2 === "fruit") {
    fruit();
  } else {
    cake();
  }
};

const inside = () => {
  let choiceDoors;
  console.log(
    `\n--* You step into a darkened room that is a bit warm when you hear a voice say.
        "Welcome to my Parlor, ${userName} darling." 
    You look around nervously but you can't see who is speaking. \n
    The Voice: 
        "Pick a door to begin your adventure darling.
        Just tell me what number you want Door number 1 or Door number 2."`
  );
  while (choiceDoors !== "1" && choiceDoors !== "2") {
    choiceDoors = rls.question("\n--* CHOOSE: 1? or 2? \n");
    choiceDoors = choiceDoors.trim().toLowerCase();
    if (choiceDoors !== "1" && choiceDoors !== "2") {
      console.log("\n--* Seriously?");
    }
  }
  if (choiceDoors === "1") {
    door1();
  } else {
    door2();
  }
};

const outside = () => {
  console.log(`\n--* Ahhh. The great outdoors.`);
// ***UNKNOWN AS YET
// const enchanted = () => {console.log("Testing, testing 1, 2, 3");}; //-->
// const woods = () => {console.log("Testing, testing 1, 2, 3");}; //-->
};

/// -- START GAME -- 
const startGame = () => {
  let choice1;
  while (choice1 !== "inside" && choice1 !== "outside") {
    choice1 = rls.question("\n--* CHOOSE: Inside? or Outside? \n");
    choice1 = choice1.trim().toLocaleLowerCase();
    if (choice1 !== "inside" && choice1 !== "outside") {
      console.log(`\n--* Uhmmm, NO!.
      Let's try this again.`);
    }
  }
  if (choice1 === "inside") {
    inside();
  } else {
    outside();
  }
};

/// -- RULES --
const rules = () => {
  let choiceRules;
  console.log("--* Here are the rules:");
  console.log(
    `--* You will be asked a series of questions and you will choose the path we take.
    If you get yourself ...let's say killed or incapacitated...
    Yeah, You lose.\n`
  );
  while (choiceRules !== true && choiceRules !== false) {
    choiceRules = rls.keyInYN("--* Ready to play?\n");
    console.log("Enter Y for yes, or N for no.\n");
  }
  if ((choiceRules = true)) {
    startGame();
  } else {
    leaveGame();
  }
};

/// -- INTRO --
let userName = rls.question("Enter your name: ");
console.log(`--* Hello ${userName}!  Welcome to my Text Adventure Game.`);

/// -- WANT TO PLAY? --
const play = () => {
  let answer;
  while (answer !== true && answer !== false) {
    answer = rls.keyInYN("--* Do you want to play a game with me?\n");
    if (answer !== true && answer !== false) {
      console.log("Enter Y for yes, or N for no.\n");
    }
  }
  if (answer === true) {
    console.log("\n--* Sweet! \n");
    rules();
  } else {
    leaveGame();
  }
};
play();

/// --SAMPLE of whhile loop with .trim() and .toLowerCase()
// while(highOrLow !== "high" && highOrLow !== "low") {
//     let highOrLow;
//     highOrLow = rls.question("Was I high or low? \n");
//     highOrLow =highOrLow.trim().toLowerCase();
//     // .trim() remove any leading or trailing white space(s)
//     // .toLowerCase() converts the input to all lowercase letters
//     if(highOrLow !== "high" && highOrLow !== "low") {
//         console.log("Not a valid guess. Must be high ot low.")
//     }
// }
