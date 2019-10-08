const readline = require('readline-sync')

let nameInput = readline.question("Enter your name: ")
console.log(`Hello ${nameInput}!  Welcome to my Island.`)

let monK1 = readline.question("Enter an animal name")
console.log(monK1)
console.log("The Game Began, you are in vacation island and you ship is waiting for you")
console.log(`${monK1}! who stolen your wallet and you want to get that back. your ticket of ship is inside that Wallet`)
console.log(`smarty pants ${monK1}! is in top of Plam tree, Please knok it down to retrieve you Wallet`)
console.log("Then I start look around and I find some weapons over the island")
var readlineSync = require('readline-sync'),
  Weapons = ['Rock1', 'Rock2', 'Rock3', 'Rock4', 'Rock5'],
  index = readlineSync.keyInSelect(Weapons, 'Which One?');
console.log("I Pick up, " + Weapons[index] + `" throw it to ${monK1}"`);

var readlineSync = require('readline-sync'),
MAX = 10, MIN = 0, value = 10, key;
console.log(`How hard you want to throw that${monK1}` )
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