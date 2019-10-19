const readline = require('readline-sync')

let nameInput = readline.question("Enter your name: ")
console.log(`Hello ${nameInput}!  Welcome to my Island.`)

let monsName = readline.question("Enter an animal name: ")
let monsK1LifeHP = 100 
console.clear();
const storyLine = () =>{
console.log(`You are in vacation island and you ship is waiting for you,
\n${monsName}! who stolen your wallet, your ticket of the ship is inside,
\nSmarty pants ${monsName}! is in top of Plam tree, \nPlease knok it down to retrieve you Wallet,
`)};

const play = () => {
  console.log(`You want "default" this ${monsName} and retrieve ticket or DO NOTHING and try to survice in Island`)
  let userInput = readline.question("")
  if(userInput === "default") {
  console.clear();
  console.log(`\n\n\nThen ${nameInput} start look around and ${nameInput} find some weapons over the island`)
  
  
  while (monsK1LifeHP <=100){
  if  (monsK1LifeHP > 20){
  var readlineSync = require('readline-sync');
  weapons = ['Rock', 'Starfish', 'Stone Crab', 'Dead Shark', 'Blue Lobster'],
  console.log("\n\n```Select from Weapons List below```")
  index = readlineSync.keyInSelect(weapons, 'Pick your weapons?');
  console.log("\nI Pick up a weapon [" + weapons[index] + `] throw it to ${monsName}.`);
  
  //wepower selection
  var readlineSync = require('readline-sync'),
  MAX = 10, MIN = 0, value = 5, key;
  console.log(`\nHow hard you want to throw that to ${monsName}?` )
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
  console.clear();
  console.log(`\n${nameInput} try hit with power: ` + value);
  value = value * Math.floor(Math.random() * 5) //random att from 1-10
  monsK1LifeHP = monsK1LifeHP - value; //taking count the damage
  console.log(`\n${monsName} taking damage ${value}, try harder if you can!`);
  console.table(`\n${monsName} HP ${monsK1LifeHP}`);
  }
  
  else if(monsK1LifeHP <= 20 && monsK1LifeHP>0){
    var readlineSync = require('readline-sync');
    weapons = ['Banana', 'Apple X!!', 'Galaxy GG', 'Pixel P9', 'HUAWEI'],
    console.log("\n```Select from Weapons List below```")
    index = readlineSync.keyInSelect(weapons, 'Pick your weapon?');
    console.log("\n\nI Pick up a weapon [" + weapons[index] + `] throw it to ${monsName}.`);
    //wepower selection
    var readlineSync = require('readline-sync'),
    MAX = 10, MIN = 0, value = 5, key;
    console.log(`\nHow hard you want to throw that to ${monsName}?` )
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
    console.clear();
    console.log(`\n${nameInput} try hit with power: ` + value);
    value = value * Math.floor(Math.random() * 1.9) //random att from 1-10
    monsK1LifeHP = monsK1LifeHP - value; //taking count the damage
    console.log(`\n${monsName} taking damage ${value}! and ${monsName} rage on fire, please hurry up`);
    console.table(`\n${monsName} HP ${monsK1LifeHP}`)
  }
  else if(monsK1LifeHP <= 0){
    console.log(`${nameInput} knok down ${monsName} badly, \nCongratulations, retrieve your ticket, \nYou can go Home `)
    break;
  }
  }
  } else {
      console.log("Happy ever after survive about 7 day and died")
  }
}


storyLine();
play()



