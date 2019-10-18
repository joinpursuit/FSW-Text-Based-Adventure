const readline = require('readline-sync')

let nameInput = readline.question("Enter your name: ")
console.log(`Hello ${nameInput}!  Welcome to my Island.`)

let monsK1 = readline.question("Enter an animal name: ")

console.log("\nYou are in vacation island and you ship is waiting for you")
console.log(`\n${monsK1}! who stolen your wallet, your ticket of the ship is inside`)
console.log(`\nSmarty pants ${monsK1}! is in top of Plam tree, \nPlease knok it down to retrieve you Wallet`)
console.log(`\n\nThen ${nameInput} start look around and I find some weapons over the island
`)

let monsK1LifeHP = 100 

while (monsK1LifeHP <=100){

if  (monsK1LifeHP > 20){

var readlineSync = require('readline-sync');
Weapons = ['Rock', 'Starfish', 'Stone Crab', 'Dead Shark', 'Blue Lobster'],
console.log("\n\n```Select from Weapons List below```")
index = readlineSync.keyInSelect(Weapons, 'Pick your weapons?');
console.log("\n\nI Pick up a weapon [" + Weapons[index] + `] throw it to ${monsK1}.`);

//wepower selection
var readlineSync = require('readline-sync'),
MAX = 10, MIN = 0, value = 5, key;
console.log(`\nHow hard you want to throw that to ${monsK1}?` )
console.log('\n\n' + (new Array(2)).join(' ') +
  '[Z] <- -> [X]  Enter: [SPACE]\n');
while (true) {
  console.log('\x1B[1A\x1B[K|' +
    (new Array(value + 1)).join('-') + 'O' +
    (new Array(MAX - value + 1)).join('-') + '| ' + value);
  key = readlineSync.keyIn('',
    {hideEchoBack: true, mask: '', limit: 'zx '});
  if (key === 'z') { if (value > MIN) { value--; } }
  else if (key === 'x') { if (value < MAX) { value++; } }
  else { break; }
}

console.log(`\n${nameInput} try hit with power: ` + value);
value = value * Math.floor(Math.random() * 5) //random att from 1-10
monsK1LifeHP = monsK1LifeHP - value; //taking count the damage
console.log(`\n${monsK1} taking damage ${value}, try harder if you can!`);
console.table(`\n${monsK1} HP ${monsK1LifeHP}`);
}

else if(monsK1LifeHP <= 20 && monsK1LifeHP>0){
  var readlineSync = require('readline-sync');
  Weapons = ['Banana', 'Apple X!!', 'Galaxy GG', 'Pixel P9', 'HUAWEI'],
  console.log("\n```Select from Weapons List below```")
  index = readlineSync.keyInSelect(Weapons, 'Pick your weapons?');

  console.log("\n\nI Pick up a weapon [" + Weapons[index] + `] throw it to ${monsK1}.`);
  //wepower selection
  var readlineSync = require('readline-sync'),
  MAX = 10, MIN = 0, value = 5, key;
  console.log(`\nHow hard you want to throw that to ${monsK1}?` )
  console.log('\n\n' + (new Array(2)).join(' ') +
    '[Z] <- -> [X]  Enter: [SPACE]\n');
  while (true) {
    console.log('\x1B[1A\x1B[K|' +
      (new Array(value + 1)).join('-') + 'O' +
      (new Array(MAX - value + 1)).join('-') + '| ' + value);
    key = readlineSync.keyIn('',
      {hideEchoBack: true, mask: '', limit: 'zx '});
    if (key === 'z') { if (value > MIN) { value--; } }
    else if (key === 'x') { if (value < MAX) { value++; } }
    else { break; }
  }

  console.log(`\n${nameInput} try hit with power: ` + value);
  value = value * Math.floor(Math.random() * 1.9) //random att from 1-10
  monsK1LifeHP = monsK1LifeHP - value; //taking count the damage
  console.log(`\n${monsK1} taking damage ${value}! and ${monsK1} rage on fire, please hurry up`);
  console.table(`\n${monsK1} HP ${monsK1LifeHP}`)
}

else if(monsK1LifeHP <= 0){
  console.log(`${nameInput} knok down ${monsK1} badly, \nCongratulations, retrieve your ticket, \nYou can go Home `)
  break;
}
}

