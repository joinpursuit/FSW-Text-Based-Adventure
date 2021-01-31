# 🌬 ❄️ 🐺 🦫 Text-Based-Adventure Game - Narnia!  🦫 🐺 ❄️ 🌬

This project was built with javascript as a text based adventure game that you can play in terminal! 

My Trello project link: [Trello](https://trello.com/b/vjRX7ODW/my-text-based-adventure-project)

Instructions to run this code:
1. Git clone this repo
2. Open up the code in VSCode or your choice of IDE
3. Run npm install to install dependencies that this project uses
4. Run node textBasedAdventure.js
5. Play!

![Gamegif](https://github.com/sbweins/FSW-Text-Based-Adventure/blob/master/Narniagameplay.gif?raw=true)


```javascript
console.log("Hello there! Welcome to Narnia!")

if (readlineSync.keyInYNStrict("Would you like to explore the world of Narnia? (Please type Y or N)")) {
    play()
}
else {
    leaveGame()
}
```
