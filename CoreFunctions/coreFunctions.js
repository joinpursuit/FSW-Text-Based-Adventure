const dice = (nat, min) => {
  return Math.floor(Math.random() * nat + min);
};

const dmg = (herostat, enemy) => {
  const d6Roll = dice(6, 1);
  const critRoll = dice(3, 1);

  let atk, level;
  [atk, level] = [herostat.attack, herostat.level];
  const enemyDef = enemy.defense;

  let damage = Math.ceil(
    (((2 * level + 10) / 50) * (atk / enemyDef) + 2) * d6Roll
  );

  let critical = Math.ceil(
    (((2 * level + 10) / 50) * (atk / enemyDef) + 2) * critRoll
  );

  if (d6Roll !== 1 && d6Roll !== 6) {
    // console.log('+--------------------------------------------------------------------------------------+')
    console.log("Normal hit.");
    return damage;
  } else if (d6Roll === 6) {
    let critDmg = damage + critical;
    console.log("Critical hit!");
    return critDmg;
  } else if (d6Roll === 1) {
    console.log(`Your attack missed!`);
    return 0;
  }
};

const enemyDmg = (herostat, enemy) => {
  //dice dependencies
  const d6 = dice(6, 1);
  const d2 = dice(2, 1);

  //character dependencies
  const heroDef = herostat.defense;

  let enemyAtk, enemyLvl;
  [enemyAtk, enemyLvl] = [enemy.attack, enemy.level];
  // console.log(enemyAtk, enemyLvl)
  let damage = Math.ceil(
    (((2 * enemyLvl + 10) / 50) * (enemyAtk / heroDef) + 2) * d6
  );
  // console.log(damage)
  return d2 === 2 ? damage : 0;
};

const fight = (herostat, enemy, risk, experience) => {
  while (herostat.health > 0 || enemy.health > 0) {
    const options = ["Attack", "Dodge", "Special Attack", "Run"];
    let index = keyInSelect(options, `What's your move?`);

    if (options[index] === options[0]) {
      const damage = dmg(herostat, enemy);
      enemy.health = enemy.health - damage;
      console.log(
        `Hero did ${damage} damage to the enemy \n${herostat.health}❤️ \n${enemy.health}🖤`
      );
      if (hero.health < 1) {
        console.log(` ||=====\ ======== //=====+=   ||=====\\ `);
        console.log(` ||  -   |    ||    ||          ||  -   | `);
        console.log(` ||  |   |    ||    ||---|      ||  |   | `);
        console.log(` ||  1   |    ||    ||          ||  1   | `);
        console.log(` ||=====// ======*= ||======\\ ||======// `);
        start();
      } else if (enemy.health < 1) {
        console.log(" ==       ==  ========  ||     || |  ");
        console.log(" ||  ___  ||     ||     || |   || |  ");
        console.log(" ||   |   ||     ||     ||  |  || |  ");
        console.log(" ||   1   ||     ||     ||   |||| |  ");
        console.log("  |==|+|==//  ======*=  ||    ||   O  ");
      }
    } else if (options[index] === options[1]) {
      let dodge = dodge(risk);
      return dodge;
    } else if (options[index] === options[2]) {
      if (herostat.level > 3) {
        return true;
      } else {
        console.log(`Do you even lift? Your level is too low, scrub.`);
      }
    } else if (options[index] === options[3]) {
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
    const enDamage = enemyDmg(herostat, enemy);
    hero.health = hero.health - enDamage;

    console.log(
      `Enemy did ${enDamage} damage to our hero \nHP❤️ ${hero.health} \nHP🖤 ${enemy.health}`
    );
    if (hero.health < 1) {
      console.log(` ||======\  ======== //=====+=  ||======\ `);
      console.log(`  ||  -   |    ||    ||          ||  -   | `);
      console.log(`  ||  |   |    ||    ||---|      ||  |   | `);
      console.log(`  ||  1   |    ||    ||          ||  1   | `);
      console.log(` ||======// ======*= ||======\\ ||======// `);
      start();
    } else if (enemy.health < 1) {
      console.log(" ==       ==  ========  ||     || |  ");
      console.log(" ||  ___  ||     ||     || |   || |  ");
      console.log(" ||   |   ||     ||     ||  |  || |  ");
      console.log(" ||   1   ||     ||     ||   |||| |  ");
      console.log("  |==|+|==//  ======*=  ||    ||   O  ");
    }
  }
};

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
  

module.exports = {
    dice,
    dmg,
    fight,
    enDamage,
    showDialogue,
    quitGame
}