const dice = require(`./dice.js`)

const enDmg = (enemyAtk, def, enemyLvl) => {
    //dice dependencies
    const d6Roll = dice(6, 1)
    const d2Roll = dice(2, 1)

  let damage = Math.ceil(((
    (2 * enemyLvl + 10) / 150) * (enemyAtk / def) + 2) * d6Roll)
    if (d2Roll === 2) {
        let hit = heroStat.health - damage
        return hit
    } else if (d2 === 1) {
        console.log('+ The enemy missed! You take no damage.              +')
        return 0
    }
}