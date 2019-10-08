const readline = require('readline-sync')

let nameInput = readline.question("Enter your name: ")
console.log(`Hello ${nameInput}!  Welcome to my Island.`)

let monsK1 = readline.question("Enter an animal name: ")
let monsK1LifeHP = 100
console.log("\nYou are in vacation island and you ship is waiting for you")
console.log(`\n${monsK1}! who stolen your wallet, your ticket of the ship is inside`)
console.log(`\nSmarty pants ${monsK1}! is in top of Plam tree, \nPlease knok it down to retrieve you Wallet`)
console.log(`\n\n\nThen ${nameInput} start look around and I find some weapons over the island
`)


while (monsK1LifeHP <= 100){
if(monsK1LifeHP > 0){
var readlineSync = require('readline-sync');
Weapons = ['Useless Rock', 'Empty Bottle', 'Blue Craby', 'Dead Fish', 'Gaint Rock'],
console.log("\n\n\n\n\n```Select from Weapons List below```")
index = readlineSync.keyInSelect(Weapons, 'Pick your weapons?');
console.log("\n\n\n\n\nI Pick up a weapon [" + Weapons[index] + `] throw it to ${monsK1}.`);

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
value = value * Math.floor(Math.random() * 10)//random att from 1-10
console.log(`\n${nameInput} try hit with power: ` + value);
monsK1LifeHP -= value;
console.log(`\n${monsK1} taking damage ${monsK1LifeHP}`);
console.log(monsK1LifeHP);
} 
else (monsK1LifeHP < 0); {
console.log(`${nameInput} knok down ${monsK1} badly, \nCongratulations, retrieve your ticket, \nYou can go Home `)
console.log(monsK1LifeHP);
break;
}
}
