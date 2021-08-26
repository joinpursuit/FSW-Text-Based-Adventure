//
const heroStat = {
  health: 10,
  attack: 10,
  defense: 8,
  level: 1,
  experience: 0,
};
//ALL OPPONENT STATS
const oppStat = {
  troll: {
    health: 10,
    attack: 10,
    defense: 10,
    level: 1,
    experince: 0,
  },
  ent: {
    health: 12,
    attack: 5,
    defense: 5,
    level: 1,
    experience: 0,
  },
  enemy: {
    health: 0,
    attack: 0,
    defense: 0,
    level: 0,
    experience: 0,
  },
};

const constitutionRoll = (passVal, reward, risk) => {
  let roll = dice(6, 1);
  if (roll >= passVal) {
    console.log(`${heroStat.health} health before`);
    heroStat.health + reward;
    console.log(`${heroStat.health} health after`);
    console.log(
      "+--------------------------------------------------------------------------------------+"
    );
    console.log(`+ You rolled {roll}`);
    console.log(
      `+ You gain ${reward} heart points. Health is now ${heroStat.health} +`
    );
  } else if (roll < passVal) {
    heroStat.health - risk;
    console.log(
      "+--------------------------------------------------------------------------------------+"
    );
    console.log("+ You rolled ${roll}+");
    console.log(
      `+ you lose ${reward} heart points. Health is now ${heroStat.health} +`
    );
  } else {
    console.log(
      "+--------------------------------------------------------------------------------------+"
    );
    console.log(`Whoa something went really wrong here`);
  }
};

// const { question, keyInYN } = require("readline-sync");
// let nameInput = question("Enter your name: ");
// console.log(`Hello ${nameInput}!  Welcome to my game.`);

const name = require("./HeroName.js");
name();

const quitGame = () => {
  let restart = keyInYN(
    "To the well-organised mind, death is but the next great adventure. Restart?"
  );
  console.log("Til next time " + nameInput);
  if (restart === true) {
    start();
  } else if (restart === false) {
    console.log("Til next time " + nameInput);
    process.exit();
  }
};

const dice = (nat, min) => {
  return Math.floor(Math.random() * nat + min);
};

// const dmg = (atk, enemyDef, level, enemy) => {
//     const d6Roll = dice(6,1)
//     const critRoll = dice(3, 1)
//     // console.log(d6Roll, critRoll)

//     let damage = Math.ceil((((2 * level + 10) / 150) * (atk / enemyDef) + 2) * d6Roll)
//     let critical = Math.ceil((((2 * level + 10) / 150) * (atk / enemyDef) + 2) * critRoll)
//     // console.log(damage, critical)

//     if (d6Roll !== 1 && d6Roll !== 6) {
//         console.log('+--------------------------------------------------------------------------------------+')
//         console.log('normal hit')
//         return enemy.health - damage

//     } else if (d6Roll === 6) {
//         let critDmg = damage + critical
//         let troll = enemy.health
//         console.log('Critical hit!')
//         return troll - critDmg

//     } else if (d6Roll === 1) {
//         console.log(`Your attack missed                      `)
//         return 0
//     }
// }

const enDmg = (enemyAtk, def, enemyLvl) => {
  const d6Roll = dice(6, 1);
  const d2Roll = dice(2, 1);

  let damage = Math.ceil(
    (((2 * enemyLvl + 10) / 150) * (enemyAtk / def) + 2) * d6Roll
  );
  if (d2Roll === 2) {
    let hit = heroStat.health - damage;
    return hit;
  } else if (d2 === 1) {
    console.log("+ The enemy missed! You take no damage.              +");
    return 0;
  }
};

// const dodge = (risk,enemyAtk,def) => {//if dodge roll is > 3, nullify damage
//     const d6 = dice(6,1)
//     if (d6 > 3){
//         console.log('+ Succesful dodge!                                              +')
//         return 1;

//     } else if (d6 < 4) {
//        console.log('+ You tripped during your dodge and took '+risk+' damage!       +')
//        console.log(`+ Your health is now ${heroStat.health}!                        +`)
//     }
// }

// function fight(health0,atk1,def2,lvl3,enHealth0,enAtk1,enDef2,enLvl3,dodgeRisk){

//     while (health0 > 0 || enHealth0 > 0) {
//         const rls1 = require('readline-sync')
//         options  = ['Attack', 'Dodge', 'Sp. Attack', 'Run']
//         index = rls1.keyInSelect(options, 'What do you do?')

//         if (options[index] === options[0]){
//             damage = dmg(lvl3,atk1,enDef2)
//             finalDmg = enHealth0 - damage
//             //enDmg(enAtk, def, enLvl)
//             //iterate randomly through an array and return and indx of the array
//             //array contains options = ['Attack', 'Dodge', 'Sp. Attack', 'Run']
//             //then do that thing

//         } else if (options[index] === options[1]) {
//            dodge(dodgeRisk)

//         } else if (options[index] === options[2]) {
//             spAtk()

//         } else if (options[index] === options[3]) {

//             d6 = dmg(6,1)
//             d6two = dmg(6,1)

//             if (d6 !== d6two) {
//                 stageTwo()
//             } else { console.log('fill this') }
//         } else if (options[index] === options[4]){
//             stageOneThree()

//         } else {
//             quitGame()
//         }
//     }//while close
//     if (heroStat[0] === 0) {
//         console.log(` ||=====\\ ======== //=====+= ||=====\\ `)
//         console.log(` ||  -   |    ||    ||        ||  -   | `)
//         console.log(` ||  |   |    ||    ||---|    ||  |   | `)
//         console.log(` ||  1   |    ||    ||        ||  1   | `)
//         console.log(` ||=====// ======*= ||======\\||=====// `)
//         start()
//     }
// }

// function spAtk(){
//     console.log('+ Qaspiel =>  No Special Attacks until you\'re level 3 ya lout!       +')
// }

const dmg = (herostat, enemy) => {
  const d6Roll = dice(6, 1);
  const critRoll = dice(3, 1);
  console.log(d6Roll, critRoll);

  let damage = Math.ceil(
    (((2 * herostat.level + 10) / 150) * (herostat.attack / enemy.defense) +
      2) *
      d6Roll
  );
  // let damage = Math.ceil((((2 * level + 10) / 150) * (atk / enemyDef) + 2) * d6Roll)

  let critical = Math.ceil(
    (((2 * herostat.level + 10) / 150) * (herostat.attack / enemy.defense) +
      2) *
      critRoll
  );
  // let critical = Math.ceil((((2 * level + 10) / 150) * (atk / enemyDef) + 2) * critRoll)

  console.log(damage, critical);

  if (d6Roll !== 1 && d6Roll !== 6) {
    console.log(
      "+--------------------------------------------------------------------------------------+"
    );
    // console.log(`${nameInput}`)
    return enemy.health - damage;
  } else if (d6Roll === 6) {
    let critDmg = damage + critical;
    // console.log('Critical hit!')
    return enemy.health - critDmg;
  } else if (d6Roll === 1) {
    console.log(`Your attack missed                      `);
    return 0;
  }
};

const enDmg = (herostat, enemy) => {
  const d6Roll = dice(6, 1);
  const d2Roll = dice(2, 1);

  let damage = Math.ceil(
    (((2 * enemy.level + 10) / 150) * (enemy.attack / herostat.defense) + 2) *
      d6Roll
  );
  if (d2Roll === 2) {
    let hit = heroStat.health - damage;
    return hit;
  } else if (d2 === 1) {
    console.log("+ The enemy missed! You take no damage.              +");
    return 0;
  }
};

const dodge = (risk) => {
  //if dodge roll is > 3, nullify damage
  const d6 = dice(6, 1);
  if (d6 > 3) {
    console.log(
      "+ Succesful dodge!                                              +"
    );
    return true;
  } else if (d6 < 4) {
    console.log(
      "+ You tripped during your dodge and took " + risk + " damage!       +"
    );
    console.log(
      `+ Your health is now ${heroStat.health}!                        +`
    );
    return false;
  }
};

/*
    herostat -> reference the heroStat object
    enemy    -> reference the oppStat object !! be sure to specify what opponent the player is fighting !!
    risk     -> integer value tbd by the dev
    next     -> move ahead to next stage
    */

const fight = (herostat, enemy, risk, next) => {
  while (herostat.health > 0) {
    const options = ["Attack", "Dodge", "Special Attack", "Run"];
    index = rls1.keyInSelect(options, `What's your move?`);

    if (options[i] === options[0]) {
      const damage = dmg(herostat, enemy);
      enemy.health - damage;
      herostat.health - enDmg.health;
    } else if (options[i] === options[1]) {
      let dodge = dodge(risk);
      return dodge;
    } else if (options[i] === options[2]) {
      if (herostat.level > 3) {
        return true;
      } else {
        console.log(`Do you even lift? Your level is too low, scrub.`);
      }
    } else if (options[i] === options[3]) {
      const d2 = dice(2, 1);
      if (d2 === 1) {
        console.log(`How could 1 tail beat 2 heads? `);
        fight(herostat, enemy, risk, next);
      } else {
        console.log(
          `2 heads are indeed better than one. However, a hero never runs, the Heads beyond the skies have judged you and condemn thee to die`
        );
        quitGame();
      }
    }
  }
  if (herostat.health === 0) {
    console.log(` ||=====\\ ======== //=====+= ||=====\\ `);
    console.log(` ||  -   |    ||    ||        ||  -   | `);
    console.log(` ||  |   |    ||    ||---|    ||  |   | `);
    console.log(` ||  1   |    ||    ||        ||  1   | `);
    console.log(` ||=====// ======*= ||======\\||=====// `);
    start();
  } else if (enemy.health === 0) {
    next;
  }
};

function start() {
  console.log("+=======================================================================================+"  );
  console.log("+---------------------------------------------------------------------------------------+"  );
  console.log("+ ============//                                     ========/                     __   +"  );
  console.log("+ |    _      //.———----.—---—.—.———.———.———--.-----||.       /  ______.______.____| /  +"  );
  console.log("+ |.   |      ||   ____|   _   |    _  |  _  |      ||.   00  /_|  -___|       | _ | |  +"  );
  console.log("+ |.   |      ||___|   |_____._|____|  |_____|___|__||.     _   |______|___|___|_____/  +"  );
  console.log("+ |:   1     //                _____|  |            ||:    | |  |                       +"  );
  console.log("+ |: : . .  ./                 |_______|            ||: :. | :  |                       +"  );
  console.log("+ `---------’                                       `----' `--‘                         +"  );
  console.log("+---------------------------------------------------------------------------------------+"  );
  console.log("+---------------------------------------------------------------------------------------+"  );
  console.log("+ In the land of Phimiba on the black sand coast of the Banar provinces, there lives    +"  );
  console.log(
    "+ the small village of Strinostra. A valley untouched by the wars of yore for an eon.   +"
  );
  console.log(
    "+ Great heroes and villians alike have wrecked and gone asunder in the bony beaches of  +"
  );
  console.log(
    "+ Strinostra and ten thousand fold more in the windblown summit alps to the moutainous  +"
  );
  console.log(
    "+ east. Here in Strinostra grows then mystic Ironbark tree. The last in fact. It's sap +"
  );
  console.log(
    "+ gave the first dragons their fire and their barks gave men their first swords, whose  +"
  );
  console.log(
    "+ branches were cut and bent into wands and whose fruit seeds now make load for rifles. +"
  );
  console.log(
    "+ We find you, dear adventurer in your forest garden, where a strange wilting flower of +"
  );
  console.log(
    "+ #00ffa2 glows faintly.                                                                +"
  );

  let start = keyInYN(
    "+ Do you pick the flower?                                                     +"
  );
  if (start === false) {
    console.log(
      "+======================================================================================+"
    );
    console.log(
      "+ You choose not to pick the beautiful dying flower but nuturture it instead!          +\n\n"
    );
    console.log(
      "+ Until one day...                                                                     +"
    );
    levelOne();
  } else {
    console.log(
      "+======================================================================================+"
    );
    console.log(
      "+ Thy name is MUD. Prithee maketh haste hence and returneth to thy hutch.              +"
    );
    quitGame();
  }
}

start();
// console.log(dmg(10, 2, 1));

function levelOne() {
  console.log(
    "+ Winged Light => Hero! Qeldrin, Eater Of All has taken nest in the great bastion of   +"
  );
  console.log(
    "+                 Heldana VII Crown, Castle Ironbark. Fight your way to Ironbark and   +"
  );
  console.log(
    "+                 slay the beast!                                                      +"
  );
  console.log(
    "+                 By what name shall I address thee?                                => +\n"
  );
  console.log(
    "+--------------------------------------------------------------------------------------+"
  );
  console.log(
    "+ <= My name is " +
      nameInput +
      "                                                            <= +\n"
  );
  console.log(
    "+ The light brightens to a dazzling glare, then vanishes.                              +"
  );
  console.log(
    "+ A small owl like any but somehow none other comes to rest on a nearby branch.        +\n"
  );
  console.log(
    "+ Qaspiel => I wilt beest thy companion then. I cannot assist thee on thy journey yet  +"
  );
  console.log(
    "+            I shall keep thee privy to all things proper and true. Qaspiel is mine    +"
  );
  console.log(
    "+            name, PUKUKUKUKUKUKUKUKUKUKUKUU!                                       => +\n"
  );

  const rls1 = require("readline-sync");
  classPick = ["Sword", "Wand", "Rifle"];
  index = rls1.keyInSelect(classPick, "What weapon should I take?");
  if (classPick[index] === classPick[0]) {
    console.log(
      "+ You grab your sword!                                                                 +"
    );
    console.log(
      "+ Qaspiel => How nice another warrior (>_>), can I drop the mystic accent noweth?   => +\n"
    );
    console.log(
      "+ You gawk at the insolent bird with annoyance and slight contempt.                    +"
    );
    console.log(
      "+ => Awesome, it was annoying to talk like that but the job (~REDACTED~)damn job       +"
    );
    console.log(
      '+  description says "bE mYsTiCaLlllLLlL qASpiEllLL" as if "Be Not Afraid" isn\'t      +'
    );
    console.log(
      "+  soooooo overdone. Blame Gabriel. Don't even get me started on that guy. 200% a tool.+"
    );
    stageOne();
  } else if (classPick[index] === classPick[1]) {
    console.log(
      "+ You grab your wand!                                                                  +"
    );
    console.log(
      "+--------------------------------------------------------------------------------------+"
    );
    console.log(
      "+ You gawk at the insolent bird with annoyance and slight contempt.                    +\n"
    );
    console.log(
      "+ => Awesome, it was annoying to talk like that but the job (~REDACTED~)damn job       +"
    );
    console.log(
      '+    description says "bE mYsTiCaLlllLLlL qASpiEllLL" as if "Be Not Afraid" isn\'t        +'
    );
    console.log(
      "+    soooooo overdone. Blame Gabriel. Don't even get me started on that guy. 200% total +"
    );
    console.log(
      "+    toolbag. Remember you didn't hear that from me!                               => +\n"
    );
    stageOne();
  } else if (classPick[index] === classPick[2]) {
    console.log(
      "+ You grab your rifle!                                                              \n +"
    );
    console.log(
      "+ Qaspiel => A mage?? In these parts? I thought only the university could train mages! +"
    );
    console.log(
      "+            Watch where you point those Fireballs!                                 => +\n"
    );
    console.log(
      "+ You gawk at the insolent bird with annoyance and slight contempt.                    +\n"
    );
    console.log(
      "+ Qaspiel => Awesome, it was annoying to talk like that but the job (~REDACTED~)damn   +"
    );
    console.log(
      '+            job description says "bE mYsTiCaLlllLLlL qASpiEllLL" as if "Be Not Afraid"+'
    );
    console.log(
      "+            isn't soooooo overdone. Blame Gabriel. Don't even get me started on that +"
    );
    console.log(
      "+            guy. 200% total toolbag. Remember you didn't hear that from me!       => +\n"
    );
    stageOne();
  } else {
    quitGame();
  }

  function stageOne() {
    console.log(
      "+--------------------------------------------------------------------------------------+"
    );
    console.log(
      "+ " +
        nameInput +
        " => Shut up bird brain, lets kick some lizard booty!                     +"
    );
    console.log(
      "+ " +
        nameInput +
        " darts down the dirt path of the front garden and through the village to +"
    );
    console.log(
      "+ the village center where a gaping pit wide enough to host four wagon abreast at its  +"
    );
    console.log(
      "+ diameter. " +
        nameInput +
        " the hero stops right at its edge and Qaspien perches on your  +"
    );
    console.log(
      "+ shoulder.                                                                            +"
    );
    let help = keyInYN(
      "+ Qaspiel => ~Psssssssst pssst pssssssst~                                     <=+\n"
    );
    if (help === true) {
      console.log(
        "+--------------------------------------------------------------------------------------+"
      );
      console.log(
        "+ Qaspiel => If you let me help you down into the tunnel you could gain some wisdown & +"
      );
      console.log(
        "+            wisdom is healthy for the body!                                           +"
      );
      console.log(
        "+--------------------------------------------------------------------------------------+"
      );
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
      console.log(
        "+--------------------------------------------------------------------------------------+"
      );
      console.log(
        "+ You went left!                                                                       +"
      );
      console.log(
        "+ Upon closer inspection, you find that the glint is reflecting off a metal surface as +"
      );
      console.log(
        "+ Qaspiel's light dimly illuminates the tunnel.                                       +"
      );
      console.log(
        "+ " +
          nameInput +
          " => Aha! A mining cart! Its in great condition!                       <=+"
      );
      console.log(
        "+ Qaspiel => I don't trust this rust bucket not one bit but hey I can fly so suit     +"
      );
      console.log(
        "+            yourself! PUKUKUKUKUKUUU!                                               <=+"
      );
      stageOneThree();
    } else if (investigate[index] === investigate[1]) {
      console.log(
        "+--------------------------------------------------------------------------------------+"
      );
      console.log(
        "+ You went right!                                                                       +"
      );
      console.log(
        "+ As you approach the dripping, the air thickens with malice and the smell of iron      +"
      );
      console.log(
        "+ permeates the darkness and dread.                                                     +"
      );
      console.log(
        "+ ?????????  => Feed? Feed! CATCH AND FEED!!!!!                                       <=+"
      );
      console.log(
        "+ Qaspiel => Watch it kid! Close your eyeballs!                                       <=+\n"
      );
      console.log(
        "+ The angel to takes to wing and air, their small but mighty wings growing brighter with+"
      );
      console.log(
        "+ each wingbeat.                                                                        +"
      );
      console.log(
        "+ The sconces of the tunnel wall blaze to life and cast an ugly orange aura on a bloody +"
      );
      console.log(
        "+ mouthed Troll and the few remains of a villager that hung from the ceiling. How could +"
      );
      console.log(
        "+ one have gotten this far to the surface? No matter, let's RUMBLE!!                    +"
      );
    }
  }

  function stageOneThree() {
    console.log("you made it!");
    quitGame();
  }
  /*
        fight(herostat,enemy,risk,next)
        */
  fight(heroStat, oppStat.troll, 5, stageOneThree());
}
