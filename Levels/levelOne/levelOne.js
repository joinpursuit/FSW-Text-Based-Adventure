function levelOne() {
  const arr = [
    "+ Winged Light => Hero! Qeldrin, Eater Of All has taken nest in the great bastion of   +",
    "+                 Heldana VII Crown, Castle Ironbark. Fight your way to Ironbark and   +",
    "+                 slay the beast!                                                      +",
    "+                 By what name shall I address thee?                                => +\n",
    "+--------------------------------------------------------------------------------------+",
    "+ <= My name is " + nameInput + "                                                      +\n",
    "+ The light brightens to a dazzling glare, then vanishes.                              +",
    "+ A small owl like any but somehow none other comes to rest on a nearby branch.        +\n",
    "+ Qaspiel => I wilt beest thy companion then. I cannot assist thee on thy journey yet  +",
    "+            I shall keep thee privy to all things proper and true. Qaspiel is mine    +",
    "+            name, PUKUKUKUKUKUKUKUKUKUKUKUU!                                       => +\n"
  ]
  
  const rls1 = require("readline-sync");
  classPick = ["Sword", "Wand", "Rifle"];
  index = rls1.keyInSelect(classPick, "What weapon should I take?");
  if (classPick[index] === classPick[0]) {
    const arr = [
      "+ You grab your sword!                                                                 +",
      "+ Qaspiel => How nice another warrior (>_>), can I drop the mystic accent noweth?   => +\n",
      "+ You gawk at the insolent bird with annoyance and slight contempt.                    +",
      '+  description says "bE mYsTiCaLlllLLlL qASpiEllLL" as if "Be Not Afraid" isn\'t      +',
      "+  soooooo overdone. Blame Gabriel. Don't even get me started on that guy. 200% a tool.+"
    ]
  } else if (classPick[index] === classPick[1]) {
    const arr = [
      "+ You grab your wand!                                                                  +",
      "+--------------------------------------------------------------------------------------+",
      "+ You gawk at the insolent bird with annoyance and slight contempt.                    +\n",
      "+ => Awesome, it was annoying to talk like that but the job (~REDACTED~)damn job       +",
      '+    description says "bE mYsTiCaLlllLLlL qASpiEllLL" as if "Be Not Afraid" isn\'t        +',
      "+    soooooo overdone. Blame Gabriel. Don't even get me started on that guy. 200% total +",
      "+    toolbag. Remember you didn't hear that from me!                               => +\n"
    ]
    stageOne();
  } else if (classPick[index] === classPick[2]) {
      const arr = [
      "+ You grab your rifle!                                                              \n +",
      "+ Qaspiel => A mage?? In these parts? I thought only the university could train mages! +",
      "+            Watch where you point those Fireballs!                                 => +\n",
      "+ You gawk at the insolent bird with annoyance and slight contempt.                    +\n",
      "+ Qaspiel => Awesome, it was annoying to talk like that but the job (~REDACTED~)damn   +",
      '+            job description says "bE mYsTiCaLlllLLlL qASpiEllLL" as if "Be Not Afraid"+',
      "+            isn't soooooo overdone. Blame Gabriel. Don't even get me started on that +",
      "+            guy. 200% total toolbag. Remember you didn't hear that from me!       => +\n"
      ]
    stageOne();
  } else {
    quitGame();
  }
  
  function stageOne() {
    const arr = [
    "+--------------------------------------------------------------------------------------+",
    "+ " + nameInput + " => Shut up bird brain, lets kick some lizard booty!                     +",
    "+ " + nameInput + " darts down the dirt path of the front garden and through the village to +",
    "+ the village center where a gaping pit wide enough to host four wagon abreast at its  +",
    "+ diameter. " +  nameInput + " the hero stops right at its edge and Qaspien perches on your  +",
    "+ shoulder.                                                                            +"
    ]
    
    let help = keyInYN(
      "+ Qaspiel => ~Psssssssst pssst pssssssst~                                     <=+\n"
    );
    if (help === true) {
      const arr = [
        "+--------------------------------------------------------------------------------------+",
        "+ Qaspiel => If you let me help you down into the tunnel you could gain some wisdown & +",
        "+            wisdom is healthy for the body!                                           +",
        "+--------------------------------------------------------------------------------------+"
      ]
      let lift = keyInYN(
        "+ Do you let Qaspiel assist you down, " +
        nameInput +
        "?                                     +\n"
      );
      if (lift === true) {
        console.log(
          "+ Qaspiel hops on your shoulders and flaps their little wings as you decend.           +"
        );
        constitutionRoll(3, 10, 2);
        stageOneTwo();
      } else {
        console.log(
          "+--------------------------------------------------------------------------------------+"
        );
        console.log(
          "+ Qaspiel => Ahh tough luck buddy...                                                   +"
        );
        constitutionRoll(2, 2);
        console.log("+ Your health is now " + heroStat[0] + "!         + ");
        stageOneTwo();
      }
    } else {
      console.log(
        "+--------------------------------------------------------------------------------------+"
      );
      console.log(
        "+ Qaspiel => (<_<) (>_>) (;_;) k then...                                               +"
      );
      console.log("+ You fall down the hole and take some damage +");
      console.log(`+ Your health is now ${heroStat[0]}!         + `);
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