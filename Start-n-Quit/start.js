// const { keyInYN } = require("readline-sync");

const start = () => {
  const start_Dialog = [
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
  ];

  const start_Dialog_starter = () => {
    // () => {
    let i = 0;
    const len = start_Dialog.length;

    const speak = setInterval(() => {
    //   console.log(start_Dialog[i]);
    //   i++;
    //   if (i === len) {
    //     clearInterval(speak);
    //   }
    }, 250);

    while (i < len) {
      let timer = setTimeout(() => {
        console.log(start_Dialog[i]);
        i++;
      }, 250)
        // const myStopFunc = () => {
          // clearTimeout(timer);
        // }
      i === len
        ? clearTimeout(timer)
        : null
    }
  };
  start_Dialog_starter();

  const quest_begins = () => {
    // let start = keyInYN(
    //   "+ Do you pick the flower?                                                     +"
    // );
    const start = false;
    //FLOWER PICK -> NO
    if (start === false) {
      const arr = [
        "+======================================================================================+",
        "+ You choose not to pick the beautiful dying flower but nuturture it instead!          +\n\n",
        "+ Until one day...                                                                     +",
      ];

      let i = 0;
      const len = arr.length;
      const speak2 = setInterval(() => {
        i++;
        if (i === len) {
          clearInterval(speak2);
        }
      }, 250);
      // levelOne();
    } else {
      const chat = [
        "+======================================================================================+",
        "+ Thy name is MUD. Prithee maketh haste hence and returneth to thy hutch.              +",
      ];
      let i = 0;
      const len = chat.length;
      const speak3 = setInterval(() => {
        i++;
        if (i === len) {
          clearInterval(speak3);
        }
      }, 250);
      // quitGame();
    }
  };
  quest_begins();
  return "  ";
};
console.log(start());

module.exports = start;
