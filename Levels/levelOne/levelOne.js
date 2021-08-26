import { dialogues } from "./dialogues";


const showDialogue = (dialogue) => {
  let i = 0;
  const len = dialogue.length;

  const timer = setInterval(() => { 
    console.log(dialogue[i]);
      i++;
      i === len
        ? clearInterval(timer)
        : null
  }, 250);
};
const levelOne = () => {
  showDialogue(dialogues.opening) 
  
  const rls1 = require("readline-sync");
  classPick = ["Sword", "Wand", "Rifle"];
  index = rls1.keyInSelect(classPick, "What weapon should I take?");
  if (classPick[index] === classPick[0]) {
    showDialogue(dialogues.classPick_sword)
    stageOne()
  }
  else if (classPick[index] === classPick[1]) {
    showDialogue(dialogues.classPick_wand)
    stageOne();
  }
  else if (classPick[index] === classPick[2]) {
    showDialogue(dialogues.classPick_rifle)
    stageOne();
  }
  else {
    quitGame();
  }
  
  const stageOne = () => {
    showDialogue(dialogues.stageOne.opening)
    
    let help = keyInYN(
      "+ Qaspiel => ~Psssssssst pssst pssssssst~                                     <=+\n"
    );
    if (help === true) {
      showDialogue(dialogues.stageOne.help_isTrue)
      let lift = keyInYN(
        `+ Do you let  Qaspiel assist you down, ${nameInput}? +\n`
      );
      if (lift === true) {
        console.log(
          "+ Qaspiel hops on your shoulders and flaps their little wings as you decend.           +"
        );
        constitutionRoll(3, 10, 2);
        stageOneTwo();
      }
      else {
        console.log(
         " +--------------------------------------------------------------------------------------+");
        console.log(
          "+ Qaspiel => Ahh tough luck buddy...                                                   +"
        );
        constitutionRoll(2, 2);
        console.log("+ Your health is now " + heroStat[0] + "!         + ");
        stageOneTwo();
      }
    } else {
      
        "+--------------------------------------------------------------------------------------+"
      
      
        "+ Qaspiel => (<_<) (>_>) (;_;) k then...                                               +"
      
      "+ You fall down the hole and take some damage +"
      `+ Your health is now ${heroStat[0]}!         + `
      stageOneTwo();
    }
  }
  
  function stageOneTwo() {
    console.log(
      "+--------------------------------------------------------------------------------------+"
    );
    console.log(
      "+ You find yourself in a dark tunnel. A faint glint pierces the darkness to your left. +"
    );
    const rls2 = require("readline-sync");
    investigate = ["Go left!", "Go right!"];
    index = rls2.keyInSelect(investigate, "Left or Right?");
  
    if (investigate[index] === investigate[0]) {
      const arr = [
        "+--------------------------------------------------------------------------------------+",
        "+ You went left!                                                                       +",
        "+ Upon closer inspection, you find that the glint is reflecting off a metal surface as +",
        "+ Qaspiel's light dimly illuminates the tunnel.                                        +\n",
        `+ ${nameInput} => Aha! A mining cart! Its in great condition!                          +\n`,
        "+ Qaspiel => I don't trust this rust bucket not one bit but hey I can fly so suit      +",
        "+            yourself! PUKUKUKUKUKUUU!                                                 +\n"
      ]
      
      stageOneThree()
    } else if (investigate[index] === investigate[1]) {
      const arr =[     
        "+--------------------------------------------------------------------------------------+",
        "+ You went right!                                                                       +",
        "+ As you approach the dripping, the air thickens with malice and the smell of iron      +",
        "+ permeates the darkness and dread.                                                     +",
        "+ ?????????  => Feed? Feed! CATCH AND FEED!!!!!                                         +\n",
        "+ Qaspiel => Watch it kid! Close your eyeballs!                                         +\n",
        "+ The angel to takes to wing and air, their small but mighty wings growing brighter with+",
        "+ each wingbeat.                                                                        +",
        "+ The sconces of the tunnel wall blaze to life and cast an ugly orange aura on a bloody +",
        "+ mouthed Troll and the few remains of a villager that hung from the ceiling. How could +",
        "+ one have gotten this far to the surface? No matter, let's RUMBLE!!                    +"
      ]
    }
  }
  
  function stageOneThree() {
    console.log("you made it!");
    quitGame();
  }
}