const readLineSync = require("readline-sync");

//////////////////////////////////////////////////////////TRY AGAIN
const quit3 = () => {
  console.log("Better luck next time! Have fun eating your fellow humans.");
  process.exit();
};

const quit2 = () => {
  console.clear();
  console.log(
    '"I\'m sorry, this is just too much for me. I have to go." You drop the walkie-talkie and continue on your way. Good luck out there!'
  );
  process.exit();
};

const quit1 = () => {
  console.clear();
  console.log(
    "You decide to leave it alone, and continue on your way.\nHopefully you come across water soon, but who knows how long you'll survive out here.\nGood luck."
  );
  process.exit();
};

const gameOver = () => {
  console.log(
    "You got bit again and are out of vaccines. You didn't make it. You can feel the virus slowly taking over your body from the last bite.\nThe world fades around you and all you feel is hunger. It's all you can think about... \n\"Must...eat...\"\n"
  );
  tryAgain();
};

/////////////////////////////////////////////VARIABLES
let vaccs = 3;
let input = "";
let input2 = "";
let input3 = "";
let gunChoice = 0;
/////////////////////////////////////////////GAME FUNCTIONS


const tryAgain = () => {
  this,vaccs = 3
  if (readLineSync.keyInYN("Would you like to try again?")) {
    startGame();
  } else {
    quit3();
  }
};

const tryAgain2 = () => {
  this,vaccs = 3
  if (readLineSync.keyInYN("Would you like to play again?")) {    
    startGame();
  } else {
    console.log("Good job. Play again next time.");
    process.exit()
  } 
}

///////////////////////////////////////////////////////////QUITS


let bitten = () => {
  vaccs--;
  if (vaccs >= 0) {
    console.log(
      "\n\nSearing pain runs up your body from where you were bitten. You dig in the backpack and pull out a vaccine before plunging it in to your thigh."
    );
    console.log(
      `Sergeant Pheonix: "Careful, kid. You only have ${vaccs} vaccines left...keep moving."\n\n`
    );
  } else {
    gameOver();
  }
};

let floor2 = () => {
  console.clear();
  console.log(
    "You peer up the stairs. There are no sounds.\nSergeant Phoenix: \"Okay kid, on the second floor you need to find the doctors notes and bluepronts.\nThey should be in a black folder in one of the rooms. Careful though, only 2 of the rooms were cleared. Good luck.\nYou climb up the stairs. There's blood everywhere. A dead soldier lays in the middle of the staircase, it's legs are missing.\nAs you step over him you can see half of his face and brain is missing.\nYou arrive at floor 2.\n"
  );
  chooseDoor2();
};

let stairChoice = () => {
    gunChoice = readLineSync.question("Which gun will you choose?");
    gunChoice.trim().toLowerCase();

    if (gunChoice === "1") {
      console.clear();
      console.log(
        "You pick up the gun and aim for the head. You pull the trigger but the gun is empty!\nThe dead soldier grunts and tugs at your foot. You fall forward on to the step.\nThe dead soldier then bites at your calf. You let out a yelp of pain and kick him straight in the head.\nHe lets you go and you scramble up the steps as quick as you can leaving a trail of blood behind you.\n"
      );
      bitten();
      chooseDoor3();
    } else if (gunChoice === "2") {
      console.clear();
      console.log(
        "You pick up the second gun you see, aim for the dead soldiers head and fire. His head bursts and you're covered in blood and he lays still on the ground.\nYou quickly wipe it from your face and shake your leg free before dashing up the steps.\n"
      );
      chooseDoor3();
    } else {
      console.log("Please choose either 1 or 2.");
      stairChoice();
    }
  };

  const roof = () => {
    console.log("Before climbing you make sure the stairs are clear. You hear a thud behind you. With a racing heart you sprint up the stairs.\nYou take out the keys and groan as you realize you have to find the right one. Another thud behinds you makes you jump.\nLooking back you now see 3 groaning dead soliders all having various bite wounds on their faces and bodies.\nTurning your attention back you try key after key. The dead ones are almost to you.\nFinally you one of the keys turn and you open the door and step out.\nOne of the soldiers is right behind you as you sprint to the waiting helicopter.\nWhen you reach it, a soldier helps you come on. You turn to the man and he speaks as the helicopter takes off leaving the dead ones on the roof behind you. \nSergeant Phoenix: \"You did it! With these items and notes we\'ll be able to end this once and for all.\n\n");
    tryAgain2()
  };

  let floor3 = () => {
    console.log(
      "At the foot of the stairs there's a dead body. It doesn't move. You step over it carefully. In the middle of the steps you come to a dead soldier.\nYou carefully push it aside so you can ascend. As you do he grabs your left calf with a snarl.\nThere are 2 guns on the floor beside him."
    );
    stairChoice();
    
  };

  const chooseDoor3 = () => {
    input3 = readLineSync.question(
      "There are 4 doors. Two on the left and two on the right. Which door will you choose?"
    );
    input3.trim().toLowerCase();

    if (input3 === "left 1") {
      console.clear();
      console.log(
        "You open the door and immediately a dead man in a lab coat lunges at you. His skull is exposed and he has an eyeball missing.\nYou yell out and fall back on to the floor.\nHe lands on top of you and he bites down at your shoulder. Blood spills from your shoulder as you manage to wrestle him off.mYou take the chance while he's on the ground and stomp on his head.\nIt turns to mush and your foot is coated in blood. You shut the door behind him so nothing else comes out.\n"
      );
      bitten();
      chooseDoor3();
    } else if (input3 === "left 2") {
      console.clear();
      console.log(
        "You take a deep breath and try to relax for a moment. After a moment you open the door. You're in a bathroonm.\nStepping in you take a look around. There are three stall and blood on the ground leading to the last stall.\nYou notice a gun on the ground and decide to check for the soldier with the key.\nReaching the stall you listen for any sounds. Slowly you open the stall.NYou're pushed back and somethinf heavy lands on top of you. A man in suit snarls as you try to get him off of you.\nYou manage to get him off but as you're getting up he sinks his teeth in to your forearm. Crying out, you scramble towards the door and shut it behind you.\n"
      );
      bitten();
      chooseDoor3();
    } else if (input3 === "right 1") {
      console.clear();
      console.log(
        "At door 3 you pause for moment. When you muster the courage you swing it open but don't let go of the handle.\nNothing happens for a moment and when your eyes adjust you're looking at a pair of grey eye's on a bloody face. The creature lunges at you and grabs your shirt.\nYou struggle to pull out of it's grasp. While you attempt to push it back it bite's your hand.\nAdreneline kicks in and you opt to kick it square in the chest. It's arm disconnects from it's body and blood pools at your feet from it and your hand.\nThe creature lands on the floor in the room and you shut the door quickly.\n"
      );
      bitten();
      chooseDoor3();
    } else if (input3 === "right 2") {
      console.clear();
      console.log(
        'Slowly, you open the door. The first thing you see is the dead soldier.\nHe\'s completely covered in bites and 2 dead women lay beside him. From the looks of it the solider was able to shoot them each in the eye but not before they took several chunks from his body.\nThere is also a bullet wound in his head from where he took his own life rather than turn. Kneeling down beside him you look through his pockets. You pull out a ring of keys.\n Sergeant Phoenix: "You did it! You got the keys! Now high-tail it out of there!"\n '
      );
      roof();
    } else {
      console.log("Please enter left or right followed by 1 or 2.");
      chooseDoor3();
    }
  };


const chooseDoor2 = () => {
  input2 = readLineSync.question(
    "There are 4 doors. Two on the left and two on the right. Which door will you choose?"
  );
  input2.trim().toLowerCase();

  if (input2 === "left 1") {
    console.clear();
    console.log(
      "You brace yourself as you open the door. Nothing pops out and there are no noises inside.\nYou step into an office. The light above flickers every once in a while but you can see.\nThere's a desk with a computer and a chair. On the chair there is a dismembered body. Blood covers the white button up on the body.\nYou gag a bit before you push the chair aside with your foot.\nYou start to look through the paperwork on the desk in search of the folder. You step closer to check some files in a folder organizer.\nBefore you realize what's happening you feel a sharp pain on at your ankle. You yell and step back. A dismembered head with chomping jaws is under the desk.\nBlood starts running from your ankle. You dash out of the room.\n"
    );
    bitten();
    chooseDoor2();
  } else if (input2 === "left 2") {
    console.clear();
    console.log(
      "Your hand shaking is shaking as take hold of the door knob. You open the door.\nYou swing it open. Suddenly, a soildier falls onto you. He's missing most of his left arm and his neck has several chunks missing.\nYou yell and push him back. In the process however he's able to sink his teeth in to your arm.\nBlood starts seeping down your arm as you give him another push. He falls back and you slam the door closed before stepping back.\n"
    );
    bitten();
    chooseDoor2();
  } else if (input2 === "right 1") {
    console.clear();
    console.log(
      "You open the door quickly, ready to close it if needed. This is the first time you can see what's ahead of your clearly.\nYou're in what used to be an office of sorts. Theres a desk with a computer on the ground beside it.\nYou step further in to the room and notice there's a dead soldier behind the desk.\nYou gag at the sight. Most of his torso is gone and bloody. Besides him you spot a black folder.\nYou pick it up and look inside. You found the notes.\nSergeant Phoenix: \"Good job, you found the notes! Now up to the last floor. Now you just need to find the key for the roof door.\"\n"
    );
    console.log(
      '\nSergeant Pheonix: "Careful, I don\'t know if this stairwell is clear. I do however know only one room on floor was cleared."\n'
    );
    floor3()
  } else if (input2 === "right 2") {
    console.clear();
    console.log(
      "You take a deep breath and slowly open the door. The only light in the room comes from a cracked window covered with newpapers.\nYou look around. It's a lounge of sorts. There's coffee ground and water all over the ground and the table and chairs are knocked over.\nBesides some drops of blood there is nothing in the room. You step out and close the door behind you.\n"
    );
    chooseDoor2();
  } else {
    console.log("Please enter left or right followed by 1 or 2.");
    chooseDoor2();
  }
};

const chooseDoor1 = () => {
  input = readLineSync.question(
    "There are 4 doors. Two on the left and two on the right. Which door will you choose?"
  );
  input.trim().toLowerCase();
  if (input === "left 1") {
    console.clear();
    console.log(
      "You slowly open the door and look inside. It's a bathroom.\nThere is a dead soldier on the ground in a pool of blood.\nThere is nothing else here. You step back out.\n\n"
    );
    chooseDoor1();
  } else if (input === "left 2") {
    console.clear();
    console.log(
      'You press your ear against the door and listen for any sounds. You then step inside.\nThe light above flickers on and off and in the flashes of light you see a man in a lab coat on the ground. His body is covered in blood and bitemarks.\nNext to his body you see a briefcase. You open it and inside are vials of red liquids.\nSergeant Phoenix: "You found the samples! Those are essential for our mission. That\'s it for this floor. Move on!".\nYou leave the room and head for the stairs.'
    );
    floor2();
  } else if (input === "right 1") {
    console.clear();
    console.log(
      "You listen for a moment but hear nothing. You slowly open the door and step inside.\nIt's pitch black, you can't tell whats in the room. You take a few steps forward before you feel a hand on your ankle.\nYou yell out and step back and trip. You land on the ground and kick at whatever is grabbing you.\nYou feel your pants rip and crawl towards the door. You then manage to get up but just as you reach the door you feel teeth sink in to your ankle.\nYou let out another yell as blood drips down your shoe. Somehow you manage to stumble in to the hallway and shut the door behind you."
    );
    bitten();
    chooseDoor1();
  } else if (input === "right 2") {
    console.clear();
    console.log(
      "No sounds come from inside. You take a deep breath before opening the door. A knocked over lamp is the only light in the room.\nIt's an office with a few desks. Chairs are knocked over and a man in a suit lays on the ground. A chunk of his neck is missing.\nThere is nothing else here. You step back out.\n"
    );
    chooseDoor1();
  } else {
    console.log("Please enter left or right followed by 1 or 2.");
    chooseDoor1();
  }
};

const startGame = () => {
  console.clear();
  let vaccs = 3
  console.log(
    `Sergeant Phoenix: "Okay, inside the backpack are three vaccines. If you get bitten, use them. Be careful though,\nthere are only three. I'll be helping you as much as I can with the information from my last communications with the team." \n`
  );
  console.log(
    `You enter the building, there\'s barely enough light to see.\n\nSeageant Phoenix: "Okay, there are 4 doors on each floor.\nThe team cleared some of the rooms but not all. Be careful!\n There\'s one item you need on each floor before going to the next. Good luck!"\n`
  );
  chooseDoor1();
};

////////////////////////////////////////////////////INTRO
const intro = () => {
  console.log(
    "A mysterious virus has taken over New York City.\nThose infected have turned in to mindless, hungry, cannibals. So far it seems nothing takes them down besides an direct brain injury.\nYou have been running for days now, food and water are becoming scarce.\nThe number of infected seems to grow by the hundreds a day.\nWhile on your search for water you come to the front of 120 Vernon Blvd. It is a 3-story-old walk up and the power seems to be out.\nAt the front of the door there is a dead soldier, a backpack on the floor beside him and walkie-talkie in his hand.\nSuddenly a mans voice comes through the device.",
    '"Walker, are you there?"'
  );
  if (readLineSync.keyInYNStrict("Do you choose to answer?")) {
    console.clear();
    console.log(
      'You pick up the walkie talkie and respond. "Hello?" \nTo your relief, the man answers back. "This is Sergeant Pheonix. Where is Walker?" You inform him that the soldier he is looking for is dead.\nHe sighs. "Listen kid, Walker and his team were in the middle of an important mission.mHe stayed behind to hold off a hoard while his team went in to try and get to the rooftop.\nIt seems they got separated.\nOn the rooftop there\'s a helicopter waiting to transport them back to base.\nHowever, one of the soldiers had the key to the rooftop and there was a scientist with them that had blueprints, notes, and samples that we told us how to\nput an end to this virus and recreate the vaccines.\nThere are 3 floors to make it through but if you can find the blueprints on floor 2 and the key on floor 3, we can guarantee your survival."'
    );
    if (readLineSync.keyInYNStrict("Will you attempt to help us?")) {
      startGame();
    } else {
      quit2();
    }
  } else {
    quit1();
  }}

intro();
