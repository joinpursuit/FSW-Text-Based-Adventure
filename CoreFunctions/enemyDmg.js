const dice = require(`./dice.js`)

// const enDmg = (enemyAtk, def, enemyLvl) => {
const enDmg = (herostat, enemy) => {
    //dice dependencies
    const d6Roll = dice(6, 1)
    const d2Roll = dice(2, 1)

    //character dependencies
    const heroDef = herostat.def
    const enemyAtk, enemyLvl;
    [enemyAtk, enemyLvl] = [enemy.atk, enemy.level]

  let damage = Math.ceil(((
    (2 * enemyLvl + 10) / 150) * (enemyAtk / heroDef) + 2) * d6Roll)

    d2 === 2
        ? damage
        : 0
}