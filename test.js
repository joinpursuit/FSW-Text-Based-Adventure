// // const dice = (nat,min) => {
// //     return Math.floor((Math.random() * nat) + min)
// // }
// // console.log(dice(6, 1))

// // const heroStat = {
// //     health: 10,
// //     attack: 10,
// //     defense: 8,
// //     level: 1,
// //     experience: 0
// // }

// // const oppStat = {
// //     troll: {
// //         health: 10,
// //         attack: 10,
// //         defense: 10,
// //         level: 1,
// //         experince: 0
// //     },
// //     ent: {
// //         health: 12,
// //         attack: 5,
// //         defense: 5,
// //         level: 1,
// //         experience: 0
// //     },
// //     enemy: {
// //         health: 0,
// //         attack: 0,
// //         defense:0 ,
// //         level: 0,
// //         experience: 0
// //     }
// // }

// // // const dmg = (atk, enemyDef, level, enemy) => {
// // const dmg = (herostat, enemy) => {
// //     const d6Roll = dice(6,1)
// //     const critRoll = dice(3, 1)
// //     console.log(d6Roll, critRoll)

// //     let damage   = Math.ceil((((2 * herostat.level + 10) / 150) * (herostat.attack / enemy.defense) + 2) * d6Roll)
// //     // let damage = Math.ceil((((2 * level + 10) / 150) * (atk / enemyDef) + 2) * d6Roll)
    
// //     let critical = Math.ceil((((2 * herostat.level + 10) / 150) * (herostat.attack / enemy.defense) + 2) * critRoll)
// //     // let critical = Math.ceil((((2 * level + 10) / 150) * (atk / enemyDef) + 2) * critRoll)
    
// //     console.log(damage, critical)

// //     if (d6Roll !== 1 && d6Roll !== 6) {        
// //         console.log('+--------------------------------------------------------------------------------------+') 
// //         // console.log(`${nameInput}`)
// //         return enemy.health - damage
// //     } else if (d6Roll === 6) {        
// //         let critDmg = damage + critical                        
// //         // console.log('Critical hit!')
// //         return enemy.health - critDmg
// //     } else if (d6Roll === 1) {
// //         console.log(`Your attack missed                      `)
// //         return 0
// //     }
// // }

// // const enDmg = (herostat, enemy) => {
// //     const d6Roll = dice(6, 1)
// //     const d2Roll = dice(2, 1)

// //     let damage = Math.ceil((((2 * enemy.level + 10) / 150) * (enemy.attack / herostat.defense) + 2) * d6Roll)
// //     if (d2Roll === 2) {
// //         let hit = heroStat.health - damage
// //         return hit
// //     } else if (d2 === 1) {
// //         console.log('+ The enemy missed! You take no damage.              +')
// //         return 0
// //     }
// // }


// // const dodge = (risk) => {//if dodge roll is > 3, nullify damage
// //     const d6 = dice(6,1)
// //     if (d6 > 3){
// //         console.log('+ Succesful dodge!                                              +')
// //         return true;

// //     } else if (d6 < 4) {
// //        console.log('+ You tripped during your dodge and took '+risk+' damage!       +')
// //        console.log(`+ Your health is now ${heroStat.health}!                        +`)
// //        return false;
// //     }
// // }

// // /*
// // herostat -> reference the heroStat object
// // enemy -> reference the oppStat object !! be sure to specify what opponent the player is fighting !!
// // risk     -> integer value tbd by the dev
// // next     -> move ahead to next stage
// // */

// // const fight = (herostat, enemy, risk, next) => {
// //     while (herostat.health > 0 || enemy.health < 1) {
// //         const options = ['Attack', 'Dodge', 'Special Attack', 'Run']
// //         index = rls1.keyInSelect(options, `What's your move?`)

// //         if (options[i] === options[0]) {
// //             const damage = dmg(herostat, enemy)
// //             const enDmg = enDmg(herostat, enemy)
// //             enemy.health - damage
// //             herostat.health - enDmg.health

// //         } else if (options[i] === options[1]) {
// //             let dodge = dodge(risk)
// //             return dodge

// //         } else if (options[i] === options[2]) {
// //             if (herostat.level > 3) {
// //                 return true;                
// //             } else {
// //                 console.log(`Do you even lift? Your level is too low, scrub.`)
// //             }

// //         } else if (options[i] === options[3]) {
// //             const d2 = dice(2, 1)
// //             if (d2 === 1) {
// //                 console.log(`How could 1 tail beat 2 heads? `)
// //                 fight(herostat, enemy, risk, next)
// //             } else {
// //                 console.log(`2 heads are indeed better than one. However, a hero never runs, the Heads beyond the skies have judged you and condemn thee to die`)
// //                 quitGame()
// //             }
// //         }
// //     }
// //     if (herostat.health === 0) {
// //         console.log(` ||=====\\ ======== //=====+= ||=====\\ `)
// //         console.log(` ||  -   |    ||    ||        ||  -   | `)
// //         console.log(` ||  |   |    ||    ||---|    ||  |   | `)
// //         console.log(` ||  1   |    ||    ||        ||  1   | `)
// //         console.log(` ||=====// ======*= ||======\\||=====// `)
// //         start()
// //     } else if (enemy.health === 0) {
// //         next
// //     }
// // }















































// // function fight(health0,atk1,def2,lvl3,enHealth0,enAtk1,enDef2,enLvl3,dodgeRisk){
    
// //     while (health0 > 0 || enHealth0 > 0) {
// //         const rls1 = require('readline-sync')
// //         options  = ['Attack', 'Dodge', 'Sp. Attack', 'Run']
// //         index = rls1.keyInSelect(options, 'What do you do?') 

// //         if (options[index] === options[0]){
// //             damage = dmg(lvl3,atk1,enDef2)
// //             finalDmg = enHealth0 - damage
// //             //enDmg(enAtk, def, enLvl)
// //             //iterate randomly through an array and return and indx of the array
// //             //array contains options = ['Attack', 'Dodge', 'Sp. Attack', 'Run']
// //             //then do that thing 

// //         } else if (options[index] === options[1]) {
// //            dodge(dodgeRisk)

// //         } else if (options[index] === options[2]) {
// //             spAtk()

// //         } else if (options[index] === options[3]) {

// //             d6 = dmg(6,1)
// //             d6two = dmg(6,1)

// //             if (d6 !== d6two) {
// //                 stageTwo()
// //             } else { console.log('fill this') }
// //         } else if (options[index] === options[4]){
// //             stageOneThree()

// //         } else {
// //             quitGame()
// //         }
// //     }//while close
// //     if (heroStat[0] === 0) {
// //         console.log(` ||=====\\ ======== //=====+= ||=====\\ `)
// //         console.log(` ||  -   |    ||    ||        ||  -   | `)
// //         console.log(` ||  |   |    ||    ||---|    ||  |   | `)
// //         console.log(` ||  1   |    ||    ||        ||  1   | `)
// //         console.log(` ||=====// ======*= ||======\\||=====// `)
// //         start()
// //     }
// // }













// // const reverse = (x) => {
// //     const arr = String(x).split("")
// //     if (x >= Number.MAX_SAFE_INTEGER || x <= Number.MIN_SAFE_INTEGER) {
// //            return 0
// //     }
// //     else if (arr.includes('-')) {
// //         console.log(`else if ran!`)
// //         arr.shift()
// //         arr.reverse().unshift('-')
// //         return Number(arr.join(''))
// //     }
// //     else {
// //         console.log(`else ran!`)
// //         arr.reverse()
// //         console.log(arr)
        
// //     }
// //     return Number(arr.join(''))
// // }

// // console.log(reverse(Number.MAX_SAFE_INTEGER))

// // var isPalindrome = function(x) {
// //     const arr = Array.from(String(x))
// //     let neuArr = []
// //     for (let i=arr.length-1; i >= 0; i--){
// //         neuArr.push(arr[i])
// //         console.log(neuArr)
// //     }
// //     if (arr.join('') === neuArr.join('')) {
// //         return true;
// //     }
// //     else {
// //         return false;
// //     }
// // };

// // var isPalindrome = function(x) {
// //     const arr = Number(String(x).split('').reverse().join(''))
// //     return arr === x ? true : false;
// // };

// // const twoSum = (nums, target) => {
// //     const neuArr = []
// //     const resultNums = nums.map(x => {
// //         for (let i = 0; i < nums.length - 1; i++) {
// //             if (x + nums[i] === target) {
// //                 neuArr.push([x, nums[i]])
// //                 console.log(neuArr)
// //             }
// //             // (x + nums[i] === target) ? neuArr.push(x, nums[i]) : null;
// //         }
// //     })
// //     index = 0

// //     while (index < neuArr.length){
// //         console.log(neuArr[index])
// //     }
// //     return neuArr
// // }
// // //input: [1,2,3] 5
// // //output: [2,3]

// // console.log(twoSum([1,2,3,4,5], 5))




// const speak = () => {
//     const start_Dialog = [
//         "+=======================================================================================+",
//         "+---------------------------------------------------------------------------------------+",
//         "+ ============//                                     ========/                     __   +",
//         "+ |    _      //.———----.—---—.—.———.———.———--.-----||.       /  ______.______.____| /  +",
//         "+ |.   |      ||   ____|   _   |    _  |  _  |      ||.   00  /_|  -___|       | _ | |  +",
//         "+ |.   |      ||___|   |_____._|____|  |_____|___|__||.     _   |______|___|___|_____/  +",
//         "+ |:   1     //                _____|  |            ||:    | |  |                       +",
//         "+ |: : . .  ./                 |_______|            ||: :. | :  |                       +",
//         "+ `---------’                                       `----' `--‘                         +",
//         "+---------------------------------------------------------------------------------------+",
//         "+---------------------------------------------------------------------------------------+",
//         "+ In the land of Phimiba on the black sand coast of the Banar provinces, there lives    +",
//         "+ the small village of Strinostra. A valley untouched by the wars of yore for millenia. +",
//         "+ Great heroes and villians alike have wrecked and gone asunder in the bony beaches of  +",
//         "+ Strinostra and ten thousand fold more in the windblown summit alps to the moutainous  +",
//         "+ east. Here in Strinostra grows then mystic Ironbark tree. The last in fact. It's sap  +",
//         "+ gave the first dragons their fire and their barks gave men their first swords, whose  +",
//         "+ branches were cut and bent into wands and whose fruit seeds now make load for rifles. +",
//         "+ We find you, dear adventurer in your forest garden, where a strange wilting flower of +",
//         "+ magenta and periwinkle glows faintly.                                                 +",
//     ];
//     let i = 0
//     const len = start_Dialog.length
//     const speak = setInterval(() => {
//         console.log(start_Dialog[i])
//         i++
//         if (i === len) {
//             clearInterval(speak)
//         }
//     }, 320);
// }
// console.log(speak())
