const showDialogue = (dialogue) => {
    let i = 0;
    const len = dialogue.length;
  
    const timer = setInterval(() => { 
      console.log(dialogue[i]);
        i++;
        i === len
          ? clearInterval(timer)
          : null
    }, 250);
  };

module.exports = {
    showDialogue
}
