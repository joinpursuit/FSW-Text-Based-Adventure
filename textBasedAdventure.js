const rls = require("readline-sync");

/// -- LEAVE GAME --
const leaveGame = () => {
  console.log(`--* So long ${userName}.\n`);
  process.exit();
};

/* -- GIVE OPTION TO CONTINUE --
 * if I can figure out how to count number of chances/lives(3)
 * across the various function calls
 */

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
  console.log(`\n--* Do you want to play again?\n`);
  while (choiceEnd !== "yes" && choiceEnd !== "no") {
    choiceEnd = rls.question("CHOOSE: Yes? or No? \n");
    choiceEnd = choiceEnd.trim().toLowerCase();
    if (choiceEnd !== "yes" && choiceEnd !== "no") {
      console.log("--* Don't make me change my mind about you.\n");
    }
  }
  if (choiceEnd === "yes") {
    console.clear();
    startGame();
  } else {
    leaveGame();
  }
};

const congratulations = () => {
  console.log(
    `\n--* --* Congratulations, You have made a new friend!\n
    Thank you for playing my Adventure Game.
    Feel free to play again to find all the possibilities.\n`
  );
  theEnd();
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
  congratulations();
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
  congratulations();
};

const grill = () => {
  let choiceGrill;
  console.log(
    `\n--* Mean Mug: "I'm watching my cholesterol. Grilling is healthier."\n
    You whip up a delicious feast for you and Mean Mug.
    Proudly, you present your masterpiece, but Mamma didn't raise no fool so
    you move closer to the door ... you know, just in case.\n
    --* Does Mean Mug like the chicken?\n`
  );
  while (choiceGrill !== true && choiceGrill !== false) {
    choiceGrill = rls.keyInYN("--* CHOOSE");
    if (choiceGrill !== true && choiceGrill !== false) {
      console.log("--* You haven't figured this part out yet?");
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
    `\n--* You whip up a delicious feast in no time.
    Proudly you present your creation, then cautiously you move closer to the door 
    ... you know, just in case.\n
    --* Does Mean Mug like the chicken?`
  );
  while (choiceFry !== true && choiceFry !== false) {
    choiceFry = rls.keyInYN("--* CHOOSE");
    if (choiceFry !== true && choiceFry !== false) {
      console.log("--* You haven't figured this part out yet?");
    }
  }
  if (choiceFry === true) {
    like();
  }
  dontLike();
};

const pathTwo = () => {
  let choicePathTwo;
  console.log("Are you sure you want to leave the game?\n");
  while (choicePathTwo !== "1" && choicePathTwo !== "2") {
    choicePathTwo = rls.question("--*CHOOSE: 1 to Leave or 2 to Continue\n");
    choicePathTwo = choicePathTwo.trim().toLowerCase();
    if (choicePathTwo !== "1" && choicePathTwo !== "2") {
      console.log("--* Just when I was getting to like you.\n");
    }
  }
  if (choicePathTwo === "2") {
    yes();
  } else {
    leaveGame();
  }
};

const path = () => {
  let choicePath;
  console.log("Are you sure you want to leave the game?\n");
  while (choicePath !== "1" && choicePath !== "2") {
    choicePath = rls.question("--*CHOOSE: 1 to Leave or 2 to Continue\n");
    choicePath = choicePath.trim().toLowerCase();
    if (choicePath !== "1" && choicePath !== "2") {
      console.log("--* Just when I was getting to like you.\n");
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
    `\n--* Ooooh, luck must be on your side today.
    You breathe a sigh of relief and get busy cooking before Mean Mug 
    has a change of heart and snaps you in two.
    But you only know how to cook chicken 2 ways.\n
  --* How does Mean Mug want the chicken cooked?\n`
  );
  choiceCook = ["grill", "fry"];
  index = rls.keyInSelect(choiceCook, "--* CHOOSE:\n");

  switch (index) {
    case 0:
      grill();
      break;
    case 1:
      fry();
      break;
    case -1:
      path(); //--> calls cook();
  }
};

const diner = () => {
  let choiceDiner;
  console.log(
    `\n--* You are seated in a quaint little cafe with your new friend. Getting on just fine.
    After a few Hot Chocolates and some food you feel fantastic.
    The waitress and offers a choice of 2 treats 
    A slice of apple pie or a slice of carrot cake.\n
  --* Which one do you eat?\n`
  );
  while (choiceDiner !== "pie" && choiceDiner !== "cake") {
    choiceDiner = rls.question("\n--* CHOOSE: Pie? or Cake?\n");
    choiceDiner = choiceDiner.trim().toLowerCase();
    if (choiceDiner !== "pie" && choiceDiner !== "cake") {
      consoleDiner.log("--* I don't think so.\n");
    }
  }
  if (choiceDiner === "pie") {
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

const ask = () => {
  console.log(
    `\n--* ${userName}: "Hey, hey ... no need for all that. 
          What's the matter? Why are you looking so mean? 
          Maybe I can help you."
    Mean Mug (wails): "I'm just so hungry, I can't think straight!"
    ${userName}: "Well you're in luck! I know how to cook. Where's that chicken?"\n`
  );
  rls.keyInPause();
  cook();
};

const attack = () => {
  let choiceAttack;
  console.log(
    `\n--* Shaky legs and all you get ready to strike. 
  Then Mean Mug does something unexpected. 
  Mean Mug begins to cry.
  You are absolutely baffled.\n
  --* What do you do now?
  Do you ask what's wrong, or take the opportunity to run away?\n`
  );
  while (choiceAttack !== "ask" && choiceAttack !== "run") {
    choiceAttack = rls.question("CHOOSE: Ask? or Run?\n");
    choiceAttack = choiceAttack.trim().toLowerCase();
    if (choiceAttack !== "ask" && choiceAttack !== "run") {
      console.log("--* It's only 3 letters.\n");
    }
  }
  if (choiceAttack == "ask") {
    ask();
  } else {
    run();
  }
};

const sword = () => {
  let choiceSword;
  console.log(`\n--* You pick up the sword and approach Mean Mug.
  Mean Mug take a look at you and growls even more ferociously?
  Your knees start shaking uncontrollably. \n
  --* What do you do now?\n`);
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
      path(); //--> calls cook();
  }
};

const chicken = () => {
  let choiceChicken;
  console.log(
    `\n--* Mean Mug takes a step towards you.
    ${userName}: "Listen! Let's be diplomatic here.
    I have this chicken.  
    How about I make us something to eat 
    That way, you don't eat me?"\n
  --* Does Mean Mug agree to eat the chicken?\n`
  );
  while (choiceChicken !== true && choiceChicken !== false) {
    choiceChicken = rls.keyInYN("\n--* CHOOSE:\n");
    if (choiceChicken !== true && choiceChicken !== false) {
      console.log("--* My time is valuable.\n");
    }
  }
  if (choiceChicken === true) {
    cook();
  } else {
    console.log(`--* Oh sugar!\n`);
    run();
  }
};

const wave = () => {
  let choiceWave;
  console.log(
    `\n--* Before you realize it, you are drowning in the most beautiful brown eyes you have ever seen.
        Beautiful One: That was quite a performance up there. 
        ${userName}: I'd offer an encore but .... 
        Beautiful One: You ok?
        ${userName}: Yup.
        Beautiful One: You look like you could use a cup of something not alcoholic and warm.
        There's a diner up the street. Come on. \n
  --* What do you do?
        Go to the diner or decline?\n`
  );
  while (choiceWave !== "diner" && choiceWave !== "decline") {
    choiceWave = rls.question("\n--* Diner? or Decline?\n");
    choiceWave = choiceWave.trim().toLowerCase();
    if (choiceWave !== "diner" && choiceWave !== "decline") {
      console.log("--* Sober up Dearie.\n");
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
    Only it's not a room at all and you fall down a shaft.\n`
  );
  rls.keyInPause();
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
  --* What do you do?
    Wave and smile semi-soberly? or Find somewhere to hide?\n`
  );
  while (choiceStay !== "wave" && choiceStay !== "hide") {
    choiceStay = rls.question("\n--* CHOOSE: Wave? or Hide? \n");
    choiceStay = choiceStay.trim().toLowerCase();
    if (choiceStay !== "wave" && choiceStay !== "hide") {
      console.log("--* Do you need coffee or something?\n");
    }
  }
  if (choiceStay === "wave") {
    wave();
  } else {
    hide();
  }
};

const fight = () => {
  let choiceFight;
  console.log(
    `\n--* You look around and in the corner you see a sword and a chicken.
  --* Which you do you choose to go into battle with?\n`
  );
  while (choiceFight !== "sword" && choiceFight !== "chicken") {
    choiceFight = rls.question("\n--* CHOOSE: Sword? or Chicken?\n");
    choiceFight = choiceFight.trim().toLowerCase();
    if (choiceFight !== "sword" && choiceFight !== "chicken") {
      console.log("--* You're holding up progress here!\n");
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
  --* Do you turn back and fight or do you keep running?\n
    Enter 1 to turn back and fight
    Enter 2 to keep running\n`
  );
  while (choiceRun !== "1" && choiceRun !== "2") {
    choiceRun = rls.question("\n--* CHOOSE: 1? or 2?\n");
    choiceRun = choiceRun.trim().toLowerCase();
    if (choiceRun !== "1" && choiceRun !== "2") {
      console.log("--* Nope. Try again.\n");
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
    Go ${userName}! Go ${userName}! Go ${userName}!\n`
  );
  rls.keyInPause(
    `\n--* uh-oh, you slip and fall banging your head on something really hard.`
  );
  console.log("--* ooooh. That's gonna leave a nasty bruise.\n");
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
  --* Do you want to stay or leave?\n`
  );
  while (choice5 !== "stay" && choice5 !== "leave") {
    choice5 = rls.question("\n--* CHOOSE: Stay? or Leave? \n");
    choice5 = choice5.trim().toLowerCase();
    if (choice5 !== "stay" && choice5 !== "leave") {
      console.log("--* Get it together!\n");
    }
  }
  if (choice5 === "stay") {
    stay();
  } else {
    outside();
  }
};

const cabin = () => {
  console.log(
    `\n--* You get to the cabin safely and head straight to the kitchen.
  Maybe if Mean Mug likes your cooking you can get another ride.
  In the cooler you find a chicken.\n`
  );
  cook();
};

const ride = () => {
  let choiceRide;
  console.log(
    `\n--* Mean Mug whistles sharply and a beautiful unicorn appears.
  Mean Mug: "This is my friend Minx. She can take us there."\n
  --* Do you get on?\n`
  );
  while (choiceRide !== true && choiceRide !== false) {
    choiceRide = rls.keyInYN("--* CHOOSE: \n");
    if (choiceRide !== true && choiceRide !== false) {
      console.log("--* Do I need to call your Mother?\n");
    }
  }
  if (choiceRide === true) {
    go();
  } else {
    console.log(
      `\n--* Mean Mug looks at you and grumbles loudly: "Ain't nobody got time for this!"
      Then grabs you by the neck and climbs onto Minx. 
      Mean Mug: "Let's go!"\n`
    );
    rls.keyInPause();
    go();
  }
};

const go = () => {
  let choiceGo;
  console.log(
    `\n--* Before you know it Minx gallops a few paces and does the most extrordinary thing.
    Wings unfurl from Lord knows where and with a swift leap you are soaring into the sky.\n`
  );
  cabin();
};

const foe = () => {
  let choiceRunFight;
  console.log(
    `\n--* Mean Mug catches sight of you and let's out a ferocious growl.
      Oh Snap! It's about to get live.
  --* Do You want to run or fight?\n`
  );
  while (choiceRunFight !== "run" && choiceRunFight !== "fight") {
    choiceRunFight = rls.question("\n--* CHOOSE: Run? or Fight?\n");
    choiceRunFight = choiceRunFight.trim().toLowerCase();
    if (choiceRunFight !== "run" && choiceRunFight !== "fight") {
      console.log("--* uhmmmm...\n");
    }
  }
  if (choiceRunFight === "run") {
    run();
  } else {
    fight();
  }
};

const friend = () => {
  let choiceFriend;
  console.log(
    `\n--* Because you are so very brave you nervously wave hello. 
    Mean Mug smiles back and looks so much better as a result.\n
    ${userName}: "Why are you looking so mean?"
    Mean Mug: "Oh I'm not mean at all. I'm just starving!"
    ${userName}: "I know the feeling. Ok, let's find you something to eat."
    Mean Mug: "Oh. you're so kind. There's a cabin not too far."\n
  --* Do you ride or fly?\n`
  );
  while (choiceFriend !== "ride" && choiceFriend !== "fly") {
    choiceFriend = rls.question("CHOOSE: Ride? or Fly?\n");
    choiceFriend = choiceFriend.trim().toLowerCase();
    if (choiceFriend !== "ride" && choiceFriend !== "fly") {
      console.log("--* What's the problem here?\n");
    }
  }
  if (choiceFriend === "ride") {
    ride();
  } else {
    console.log("\ns--* You hop onto Minx excitedly.\n");
    go();
  }
};

const reunion = () => {
  console.log(`--* Solara! a voice boomed. Lionel! I new I'd find you here.
  This is our new friend ${userName}. Come on let's go eat before the Crumb-snatchers get here.\n`);
  congratulations();
};

const sugarLoaf = () => {
  console.log(
    `\n--* Welcome to the Feast of the SugarLoaf Queen!
    nesteled under the canopy of trees was the most magical sight yet.
    All the characters of this world were here dancing and singing. Fireflies lit the night sky
    twinking all about. Little lanterns hung from from the trees and swayed in the cool night air. \n`
    );
  pass = rls.keyInYN("--* Have you looked in all 3 places?\n");
  if (pass === true) {
    reunion();
  } else {
    console.log(
      "--* Don't come back here until you've looked in all 3 places!\n"
    );
    yes();
  }
};

const tearDrop = () => {
  let tearDropDance;
  console.log(`\n--* You get magically whisked away to Teardrop Valley.
  At first look it seems a dark and glumy sort of place. Just grey and washed out.\n
  ${userName}: "Why would you guys come here? It's depressing."
  MAGICAL FRIEND: "That's to keep out people like you."
  ${userName}: "You know, you could be nice to me.
  MAGICAL FRIEND: "Why?"\n
  Just as you were about to come up with a clever reply thunder cracked and lightning
  flashed across the sky. As the rain began to fall, the sky turned a lunimous shade of blue.
  When each raindrop fell and touched something it place became full of color.
  Soon the entire place was transformed.
  As the flowers opened little sprites came out to sing and dance.
  ${userName}: "Ohhhh, now I see why."\n`);
  while (tearDropDance !== true && tearDropDance !== false) {
    tearDropDance = rls.keyInYN("--* Do you dance with the sprites?\n");
    if (tearDropDance !== true && tearDropDance !== false) {
      console.log("--* Boooooooo!\n");
    }
  }
  if (tearDropDance === true) {
    console.log(`\n--* You dance and dance until your feet are about to fall off. 
    You cannot remmeber when you were so happy to get caught in a rainstorm.
    Eventually the rains stops and the sprites go away.\n
  --* Where do we look now?`);
  }
  if (tearDropDance === false) {
    console.log("You can't dance huh?")
  }
  where = ["Cottontail Beach", "Paperstraw Tower"];
  index = rls.keyInSelect(where, "--* NO friend here. Where do we look now?");
  switch (index) {
    case 0:
      cottonTail();
      break;
    case 1:
      paperStraw();
      break;
    case -1:
      pathTwo(); 
  }
};

const cottonTail = () => {
  let cottonTailContest;
  console.log(
    `\n--* A blinding light appears and once your eyes readjust you are in a never ending beach of white 
    sparking sand. The air is fresh and it is eeriely quiet. In the distance you see a stage.\n
    ${userName}: "Ok, What happens here?"
    MAGICAL FRIEND: "You'll see."
    ${userName}: "Why can't you just tell me?"
    MAGICAL FRIEND: "Why can't you just wait and see?"
    ${userName}: "I'm picking up a bit of attitude here."\n
    The sound came to your ears faintly, a steady rhythmic marching. You have no idea where
    it's coming from but it gets louder steadily shaking the ground.
    Suddenly a drum beat fills the air and little bunny heads pop up all around you. Some hopped 
    to the stage. But you know they aren't normal bunnies. 
    Soon they start performing one after another. Ballerina bunnies, Hip-Hop Dancing bunnies, Singing bunnies. 
    It's a talent show!\n`
  );

  while (cottonTailContest !== true && cottonTailContest !== false) {
    cottonTailContest = rls.keyInYN("--* Do you get on stage too?\n");
    if (cottonTailContest !== true && cottonTailContest !== false) {
      console.log("--* What's the problem here?\n");
    }
  }

  if (cottonTailContest === true) {
    console.log(
      `\n--* You get up on stage and strut your stuff. Soon you have bunny 
    groupies as your back up singers. The crowd goes wild. 
    GO ${userName}! GO ${userName}! GO ${userName}!
    Your bunny groupies flock around you for autographs and selfies.
    You can get used to this life.\n
    Alas, all good things must come to an end.
    --* Where do we look now?`
    );
  }
  if (cottonTailContest === false) {
    console.log("You're no fun.\n");
  }
  where = ["Teardrop Valley", "Paperstraw Tower"];
  index = rls.keyInSelect(where, "--* NO friend here. Where do we look now?");
  switch (index) {
    case 0:
      tearDrop();
      break;
    case 1:
      paperStraw();
      break;
    case -1:
      pathTwo(); 
  }
};

const paperStraw = () => {
  let choicePaperStraw;
  console.log(
    `\n--* Paperstraw Tower was truely out of this world. Everywhere you looked 
    reaching far into the sky where these astoundingly tall structures made enitrely of
    all paper. They were designed in all hues and styles with different designs. Some 
    twisted and looped around at odd angles. And they all swayed gently in the breeze.
    ${userName}: "Does anyone live in these towers?
    MAGICAL FRIEND: "You don't live in them. You have fun in them." 
    You take a lift to the top of a hill. You walk to the opening for one of the towers. 
    It's a slide! \n`
  );
  while (choicePaperStraw !== true && choicePaperStraw !== false) {
    choicePaperStraw = rls.keyInYN("--* Do you take a ride?\n");
    if (choicePaperStraw !== true && choicePaperStraw !== false) {
      console.log("--* OMG. I can't.\n");
    }
  }
  if (choicePaperStraw === true) {
    console.log(
      `\n--* Wheeeeeeeeeee! For what seemed like hours and hours you dared death itself
      over and over sliding through the towers at breakneck speed. Eventually your nerves 
      and organs begin to protest. That was fun.\n`
    );
  }
  if (choicePaperStraw === false) {
    console.log("Party Pooper.\n");
  }
  where = ["Teardrop Valley", "Cottontail Beach","Feast of the Sugarloaf Queen"];
  index = rls.keyInSelect(where, "--* CHOOSE: \n");
  switch (index) {
    case 0:
      tearDrop();
      break;
    case 1:
      cottonTail();
      break;
    case 2:
      sugarLoaf();
      break;
    case -1:
      pathTwo(); 
  }
};

const yes = () => {
  let choiceYes;
  where = ["Teardrop Valley", "Cottontail Beach", "Paperstraw Tower"];
  console.log(
    `\n${userName}: Well, where did you last see your friend?
    Your magical friend gives you these choices to choose from:`
  );
  index = rls.keyInSelect(where, "--* CHOOSE:\n");
  switch (index) {
    case 0:
      tearDrop();
      break;
    case 1:
      cottonTail();
      break;
    case 2:
      paperStraw();
      break;
    case -1:
      pathTwo(); 
  }
};

const stillNo = () => {
  console.log(
    `\n--* The Voice: You know, you really are beastly.
    Well you have no choice but to help. 
    But don't think I won't forget this when 
    we get to the Crumb-snatchers part.\n`
  );
  rls.keyInPause();
  console.log(`\n--* You get whisked away to catch up.
  Magic Friend: "Well look who's back."\n`);
  yes();
};

const no = () => {
  let choiceNo;
  console.log(
    `--* Magic Friend: "Well you're a mean one aren't you, ${userName}?
    Good luck when the Crumb-snatchers come out tonight."\n
    ${userName}: "Crumb-snatcher? 
    Wait, what's a Crumb-snatcher?!"\n
    The Voice: "Tsk, Tsk, Tsk. You're in a pickle.\n`
  );
  while (choiceNo !== true && choiceNo !== false) {
    choiceNo = rls.keyInYN("--* Do you want to help now?\n");
    if (choiceNo !== true && choiceNo !== false) {
      console.log("--* Don't make this complicated.\n");
    }
  }
  if (choiceNo === true) {
    yes();
  } else {
    stillNo();
  }
};

const lion = () => {
  let choiceLion;
  console.log(
    `--* Before you can help yourself you let out an undignified shriek.
    ${userName}: "I must be dreaming. You can't be real." 
    Lionel: "Hi, my name is Lionel."
    ${userName}: "You're a-a-a a talking lion?"
    Lionel: "Well aren't a genius. 
          Can you help me look for my friend Solara? I seem to have misplaced her.\n"
  --* Do you help Lionel find his friend?\n`
  );
  while (choiceLion !== true && choiceLion !== false) {
    choiceLion = rls.keyInYN("\n--* CHOOSE: \n");
    if (choiceLion !== true && choiceLion !== false) {
      console.log("--* Don't make this complicated.\n");
    }
  }
  if (choiceLion === true) {
    yes();
  } else {
    no();
  }
};

const fairy = () => {
  let choiceFairy;
  console.log(
    `\n--* Twirling about in mid air is what can only be called a fairy.
    ${userName}: "I'm going to need heart medication if this keeps up."
    Solara: "Hi, My name is Soalra. You're a strange looking one. What are you doing here?"
    ${userName}: "Acutally, I don't know. Did you just call ME strange?"
    Solara: "Well, while you figure that out, can you help me look for my friend?"\n 
  --* Do you help Solara find her friend?\n`
  );
  while (choiceFairy !== true && choiceFairy !== false) {
    choiceFairy = rls.keyInYN("\n--* CHOOSE: \n");
    if (choiceFairy !== true && choiceFairy !== false) {
      console.log("--* Don't make this complicated.\n");
    }
  }
  if (choiceFairy === true) {
    yes();
  } else {
    no();
  }
};

const fruit = () => {
  let choiceFruit;
  console.log(
    `\n--* You feel youself waking up even though you don't remember falling asleep.
    As you slowly stand up you hear the voice say:
    "Welcome to the Enchanted Forrest."\n
    You spin in circles trying to take it all in. What a wonderous and magical place.
    Is that a Cotton Candy Tree?
    There is movement to your left. As you turn and focus, your eyes open wide in shock.
    Before you can help yourself you let out an undignified shriek. "Eeek!"
    What do you see?\n`
  );
  while (choiceFruit !== "fairy" && choiceFruit !== "lion") {
    choiceFruit = rls.question("CHOOSE: Fairy? or Lion?\n");
    choiceFruit = choiceFruit.trim().toLowerCase();
    if (choiceFruit !== "fairy" && choiceFruit !== "lion") {
      console.log("--* How about you read that line again?\n");
    }
  }
  if (choiceFruit === "fairy") {
    fairy();
  } else {
    lion();
  }
};

const cake = () => {
  let choiceDarkWood;
  console.log(
    `\n--* You feel youself waking up even though you don't remember falling asleep.
    Slowly you stand up and hear the voice say:
    "Welcome to Dark Wood Forrest."\n
    Startled, you spin around.
    Standing in front of you is someone with the meanest mug you have ever seen. 
    And a whole lotta drooling too! Yuck!
    What the hell was in that cake?\n
  --* Is Mean Mug a friend or foe?\n`
  );
  while (choiceDarkWood !== "friend" && choiceDarkWood !== "foe") {
    choiceDarkWood = rls.question("\n--* CHOOSE: Friend? or Foe?\n");
    choiceDarkWood = choiceDarkWood.trim().toLowerCase();
    if (choiceDarkWood !== "friend" && choiceDarkWood !== "foe") {
      console.log("It's a simple question.\n");
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
  --* Do want to dance? or sing? \n`
  );
  while (choiceDanceSing !== "dance" && choiceDanceSing !== "sing") {
    choiceDanceSing = rls.question("\n--* CHOOSE: Dance? or Sing?\n");
    choiceDanceSing = choiceDanceSing.trim().toLowerCase();
    if (choiceDanceSing !== "dance" && choiceDanceSing !== "sing") {
      console.log("--* I know you're a bit loopy but, FOCUS!\n ");
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
      One is a fruit salad and the other is a slice of cake.
      Oh these look so very tasy. 
  --* Which one do you choose?\n`
  );
  while (choiceFruitCake !== "fruit" && choiceFruitCake !== "cake") {
    choiceFruitCake = rls.question("\n--* CHOOSE: Fruit? or Cake?\n");
    choiceFruitCake = choiceFruitCake.trim().toLowerCase();
    if (choiceFruitCake !== "fruit" && choiceFruitCake !== "cake") {
      console.log("Try Again.\n ");
    }
  }
  if (choiceFruitCake === "fruit") {
    fruit();
  } else {
    cake();
  }
};

const approach = () => {
  let choiceApproach;
  console.log(
    `\n--* You walk closer and say hello.  
    Old Lady: "Hello Dearie."
    ${userName}: "I'm famished. Can I buy one of your treats?"
    Old Lady: "No need for that dearie. I'll gladly share some new samples I am working on.
    You can tell me if they taste good enough to sell."\n
    She brings you 2 dishes to try.
    One is a fruit salad and the other is a mini cake.
    Oh these look so very tasy.
    Which one do you eat first?\n`
  );
  while (choiceApproach !== "fruit" && choiceApproach !== "cake") {
    choiceApproach = rls.question("\n--* CHOOSE: Fruit? or Cake?\n");
    choiceApproach = choiceApproach.trim().toLowerCase();
    if (choiceApproach !== "fruit" && choiceApproach !== "cake") {
      console.log("Oh, come on!\n");
    }
  }
  if (choiceApproach === "fruit") {
    fruit();
  } else {
    cake();
  }
};

const lost = () => {
  console.log(
    `\n--* You keep walking and your stoamach is now cursing furiously at you.
  Before long you have no idea where you are. You are officially lost.\n
  Just as you are about to give, up your nose picks up that all to 
  familiar smell of tasty delights.
  I guess it's time to eat.\n
  Again you follow your trusty nose back to the cabin.\n`
  );
  rls.keyInPause();
  approach();
};

const door1 = () => {
  let choiceMartiniBox;
  console.log(
    `\n--* You are now at a rooftop party.
    A waiter approaches and offers you a tray of delectable martinis.
    In the middle of the tray is a box.
    --* Which one do you take?\n`
  );
  while (choiceMartiniBox !== "martini" && choiceMartiniBox !== "box") {
    choiceMartiniBox = rls.question("\n--* CHOOSE: Martini? or Box? \n");
    choiceMartiniBox = choiceMartiniBox.trim().toLowerCase();
    if (choiceMartiniBox !== "martini" && choiceMartiniBox !== "box") {
      console.log(`--* ${userName}, please pay attention.\n`);
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
      One is a fruit salad and the other is a cake.
      Oh these look so very tasy. 
    --* Which one do you eat?\n`
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

const outside = () => {
  let choiceOutside;
  console.log(
    `\n--* Ahhh. The great outdoors. You take a deep breath and catch a whiff of
    of something delicious. So naturally you follow your nose.\n
    After a few minutes of walking, you come to a little cabin where you see a nice old lady outside.
    Even better, there are lots of tasty treats and mouth watering delights!
    Your stomach rumbles.\n
    --* Do you approach?`
  );
  while (choiceOutside !== true && choiceOutside !== false) {
    choiceOutside = rls.keyInYN("--* CHOOSE Yes? or No?\n");
    if (choiceOutside !== true && choiceOutside !== false) {
      console.log("This is getting old, fast.\n");
    }
  }
  if (choiceOutside === true) {
    approach();
  } else {
    lost();
  }
};

const inside = () => {
  let choiceDoors;
  console.log(
    `\n--* You step into a darkened room that is a bit warm when you hear a voice say.
        "Welcome to my Parlor, ${userName} darling." 
    You look around nervously but you can't see who is speaking. \n
    The Voice: "Pick a door to begin your adventure darling.
    --* Door number 1? or Door number 2?"\n`
  );
  while (choiceDoors !== "1" && choiceDoors !== "2") {
    choiceDoors = rls.question("--* CHOOSE: 1? or 2? \n");
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
  console.log(`--* Welcome to my Text Adventure Game.\n`);
  console.log(
    `--* Here are the rules:
    You will be asked a series of questions so you can choose the path we take.
    The goal is to find your way to the end.\n
    If you get yourself ...let's say killed or incapacitated...
    Yeah, You lose.\n`
  );
  rls.keyInPause();
  startGame();
};

/// -- INTRO --
let userName = rls.question("--* Hi there. What's your name?\n");
console.log(`\n--* Nice to meet you ${userName}.\n`);

/// -- WANT TO PLAY? --
const play = () => {
  let answer;
  console.log("--* Do you want to play a game with me?\n");
  while (answer !== true && answer !== false) {
    answer = rls.keyInYN("CHOOSE: Yes? or No?");
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
