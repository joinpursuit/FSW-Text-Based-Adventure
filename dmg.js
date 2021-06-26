const dice = require('./CoreFunctions/dice.js')
const characterStats = require('./CoreFunctions/characterStats.js')

const attack = (atk, enemyDef, level, enemy) => {
    const d6Roll = dice(6,1)
    const critRoll = dice(3, 1)
    
    let damage = Math.ceil((((2 * level + 10) / 150) * (atk / enemyDef) + 2) * d6Roll)
    let critical = Math.ceil((((2 * level + 10) / 150) * (atk / enemyDef) + 2) * critRoll)
    

    if (d6Roll !== 1 && d6Roll !== 6) {
        console.log('+--------------------------------------------------------------------------------------+')
        console.log('normal hit')
        return enemy.health - damage

    } else if (d6Roll === 6) {
        let critDmg = damage + critical
        let troll = enemy.health
        console.log('Critical hit!')
        return troll - critDmg

    } else if (d6Roll === 1) {
        console.log(`Your attack missed                      `)
        return 0
    }
    
}

module.exports = attack