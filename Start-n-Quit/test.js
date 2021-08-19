const { keyInYN } = require('readline-sync');

const dialogues = {
    start:  [
      "+=======================================================================================+",
      "+---------------------------------------------------------------------------------------+",
      "+ ============//                                     ========/                     __   +",
      "+ |    _      //.———----.—---—.—.———.———.———--.-----||.       /  ______.______.____| /  +",
      "+ |.   |      ||   ____|   _   |    _  |  _  |      ||.   00  /_|  -___|       | _ | |  +",
      "+ |.   |      ||___|   |_____._|____|  |_____|___|__||.     _   |______|___|___|_____/  +",
      "+ |:   1     //                _____|  |            ||:    | |  |                       +",
      "+ |: : . .  ./                 |_______|            ||: :. | :  |                       +",
      "+ `---------’                                       `----' `--‘                         +",
      "+---------------------------------------------------------------------------------------+",
      "+---------------------------------------------------------------------------------------+",
      "+ In the land of Phimiba on the black sand coast of the Banar provinces, there lives    +",
      "+ the small village of Strinostra. A valley untouched by the wars of yore for an eon.   +",
      "+ Great heroes and villians alike have wrecked and gone asunder in the bony beaches of  +",
      "+ Strinostra and ten thousand fold more in the windblown summit alps to the moutainous  +",
      "+ east. Here in Strinostra grows then mystic Ironbark tree. The last in fact. It's sap  +",
      "+ gave the first dragons their fire and their barks gave men their first swords, whose  +",
      "+ branches were cut and bent into wands and whose fruit seeds now make load for rifles. +",
      "+ We find you, dear adventurer in your forest garden, where a strange wilting flower of +",
      "+ magenta and periwinkle glows faintly.                                                 +",
    ],  
    pickNo: [
      "+======================================================================================+",
      "+ You choose not to pick the beautiful dying flower but nuturture it instead!          +\n\n",
      "+ Until one day...                                                                     +",
    ],
    pickYes: [
      "+======================================================================================+",
      "+ Thy name is MUD. Prithee maketh haste hence and returneth to thy hutch.              +",
    ]  
};

const start_Quest = () => {
    const start = keyInYN('Do you pick the flower?')
    let i = 0

    if (!start) {
        const len = dialogues.pickNo.length
        const timer = setInterval(() => {
            console.log(dialogues.pickNo[i])
            i++
            i === len
                ? clearInterval(timer)
                : null
        }, 250);
    }
    else {
        const len = dialogues.pickYes.length
        const timer = setInterval(() => {
            console.log(dislogues.pickYes[i])
            i++
            i === len
                ? clearInterval(timer)
                : null
        })
    }
}

start_Quest()













































