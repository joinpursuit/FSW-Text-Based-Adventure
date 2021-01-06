const rls = require('readline-sync')
const chalk = require('chalk');


function fightOrc() {
  console.log("You have encountered an Orc.");
  let playerHP = 15;

  while (playerHP >= 0) {
    let attack = rls.keyIn("Press a to attack \n", { limit: "a" });
    playerHP = playerHP - (Math.random() * (6 - 3) + 3);
  }


  if (playerHP > 0) {
    console.log(
      "Congrats, you win. Also, you found 10 gold coins in Orc's pocket"
    );

    playerGold += 10;
    //coins
    console.log(global.playerGold);
    forrestOrTown();
  } else {
    console.log("Sorry, you lose");
    forrestOrTown();
  }
}



  
