//import dice,
const dice = require("./dice.js");
const dmg = require("./dmg.js");
const enemyDmg = require("./enemyDmg.js");

const { keyInSelect } = require("readline-sync");
const { hero, troll } = require("./characterStats-API.js");

const fight = (herostat, enemy, risk, experience) => {
  console.log(herostat, enemy)
  while (herostat.health > 0 || enemy.health > 0) {
    const options = ["Attack", "Dodge", "Special Attack", "Run"];
    let index = keyInSelect(options, `What's your move?`);

    if (options[index] === options[0]) {
      const damage = dmg(herostat, enemy);

      //can i change herostat or enemystat?

      //this works
      // herostat.health = 20
      console.log(herostat)
      // console.log('hero heath:',hero.health)
      
      //this doesn't???
      // const dmgToEnemy = enemy.health - damage;
      console.log(enemy.health,'before hit')
      enemy.health =- damage;
      console.log(enemy.health, 'after hit')

      console.log(
        `hero did ${damage} damage to the enemy \n${herostat.health}❤️ \n${enemy.health}🖤`
        // `Hero did ${dmgToEnemy} damage to the enemy \n${hero.health}❤️ \n${enemy.health}🖤`
        );

      const enDamage = enemyDmg(herostat, enemy);
      hero.health =- enDamage
      console.log(
        `Enemy did ${enDamage} damage to our hero \n${hero.health}❤️ \n${enemy.health}🖤`
        // `Enemy did ${dmgToHero} damage to our hero \n${herostat.health}❤️ \n${enemy.health}🖤`
      );
    }
    else if (options[index] === options[1]) {
      let dodge = dodge(risk);
      return dodge;
    }
    else if (options[index] === options[2]) {
      if (herostat.level > 3) {
        return true;
      } else {
        console.log(`Do you even lift? Your level is too low, scrub.`);
      }
    }
    else if (options[index] === options[3]) {
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
    return "Win!";
  }
};
// hero.health = 20
console.log(hero.health)
console.log(fight(hero, troll));

// const dmg = (atk, enemyDef, level, enemy) => {
//   const d6Roll = dice(6,1)
//   const critRoll = dice(3, 1)

//   let damage = Math.ceil((((2 * level + 10) / 150) * (atk / enemyDef) + 2) * d6Roll)
//   let critical = Math.ceil((((2 * level + 10) / 150) * (atk / enemyDef) + 2) * critRoll)

//   if (d6Roll !== 1 && d6Roll !== 6) {
//       console.log('+--------------------------------------------------------------------------------------+')
//       console.log('normal hit')
//       return enemy.health - damage

//   } else if (d6Roll === 6) {
//       let critDmg = damage + critical
//       let troll = enemy.health
//       console.log('Critical hit!')
//       return troll - critDmg

//   } else if (d6Roll === 1) {
//       console.log(`Your attack missed                      `)
//       return 0
//   }
// }
