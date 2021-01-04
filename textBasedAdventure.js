const rls = require("readline-sync");
const chalk = require("chalk");
let bookbag1 = "";
let eq1 = 10;
let iq1 = 10;
let money1 = 100; // each money point is equivalent to 100 dollars, so you begin with 10k in your inventory
let resources = { money: money1, bookbag: bookbag1};

const choosetoPlay = () => {
  let choose = rls.keyInYN(`Hello Human, welcome to the Virtual Altered Life game,
if you choose to play, type in 'y' for 'yes', if
you don't want to play, type in 'n' for 'no': `);
  if (choose) {
    startGame();
  } else {
    console.clear();
    endGame();
  }
};


const startGame = () =>{
    let startName = rls.question(
        chalk.blue(
          "Good choice human. You are about to embark \non the journey of a virual lifetime. \nBefore we move forward, what is your name? "
        )
      );
      console.clear()
    console.log(
        chalk.blue(
          `It is very nice to make your acquaitance ${startName}, lets go over some game rules. `
        )
      );
      rls.keyInPause(
        chalk.blue(`there will be many multiple choice options during the game, 
when you are asked to make a choice, please type in the corresponding 
number of your choice in order to make a selection. Choosing the cancel option cancels the game.
To continue reading......`
        )
      );


rls.keyInPause(`
You have a bookbag and a bankaccount in your inventory
to continue.......`)
      console.clear()
      
      console.table(resources)
      rls.keyInPause(`
      that is your current inventory. 
      You have chances to win and lose inventory
      to continue........`)
      console.clear()
     rls.keyInPause(
`In order to activate your Virtual Altered Life, 
you must first follow me into the kitchen. 
Look over to the counterspace on the right of the sink. 
To continue......`);  
console.log(`-----------------------------------------`)
console.clear()
pillChoose()
}


const pillChoose = ()=>{
    console.clear()
  console.log(`There is a white plate with four different colored pills on it. 
Please pour yourself a glass of water and pick one of these pills to swallow.`)
    pills = ["yellow pill","green pill","grey pill"]
      pillsIndex = rls.keyInSelect(pills,("Which pill do you choose?"));
     if(pills[pillsIndex]==="yellow pill"){
         console.clear
      yellowLife()
     }else if(pills[pillsIndex]==="grey pill"){
        greyLife()
     }else if(pills[pillsIndex]==="green pill"){
         greenLife()

     }
    
     
    }

const yellowLife = ()=>{  
    console.clear()
    rls.keyInPause(chalk.yellow(
`Welcome to your yellow life. You are 19 years 
old in your second year of college and student 
services as just emailed you that you need to 
declare a major, something you
have been putting off for over a year. 
to continue........`
    ))
    console.clear()
    let majors = ["English", "Biology", "Nursing"];
    indexMajors = rls.keyInSelect(
      majors,
      "You must make a choice,Which major do you chooose?")
      if(majors[indexMajors]){
          console.clear()
          rls.keyInPause(`
          You've made an excellent choice to major in ${majors[indexMajors]}. You are now 
          in your final year of school and need to pass your ${majors[indexMajors]} final in
          order to graduate.
          to continue............`)
       switch(majors[indexMajors]){
           case "English":
               console.clear()
            let EnglishStudy = rls.keyInPause(chalk.yellow(
`Please study the following definitions for your English final:
    
colloquial language: the use of slang or informalities in speech or writing 
    
didactic text: from the Greek, literally means 'teaching'

equivocation: falsification by means of vague or ambiguous language

once you are finished studying and ready to take your test..........`
            ));
             console.clear()
                englishChoices = ["Coyoquial", "Alliteration", "Coloquial"];
                console.log(
                  "Which word means the use of slang or informalities in speech or writing "
                );
                eIdx = rls.keyInSelect(
                  englishChoices,
                  "type in the number corresponding with your choice"
                );
                if (englishChoices[eIdx] === "Coloquial") {
                  console.log("\n");
                  console.log(`
congragulations, you have passed your final 
and you have earned you college degree in English
your degree is now in your bookbag`);
                  resources.bookbag += " College Degree "
                  yardSale();
                } else if (englishChoices[eIdx] !== "Coloquial") {
                  console.log(
                    "I'm sorry you've failed your final and need to take another semester of college. You lose 3k, but you you still graduate so congrats!"
                  );
                  resources.money = Number(resources.money) - Number("30");
                  resources.bookbag += " College Degree "
                  console.table(resources);
                  yardSale();
                }
                case "Biology":
                    console.clear()
                    let bioStudy = rls.keyInPause(chalk.yellow(`
                Organelles: tiny structures within the cell that carry out specific functions
                        
                plasma membrane: forms a flexible boundary between the living cell and its surroundings; made if phospholipids
                        
                nucleus: oval-shaped organelle that contains DNA and controls much of the cell's activities by directing protein synthesis`
                                    ));

                        console.clear()
                        bioChoices = ["Cottonelle", "Organelles", "Nucleus"];
                        console.log(
                            "Which word means tiny structures within the cell that carry out specific functions"
                        );
                        bIdx = rls.keyInSelect(
                         bioChoices,
                            "type in the number corresponding with your choice"
                        );
                        if (bioChoices[bIdx] === "Organelles") {
                            console.clear()
                            console.log(`
        congragulations, you have passed your final 
        and you have earned you college degree in Bio
        your degree is now in your bookbag`);
        resources.bookbag += " College Degree "
        yardSale();
    } else if (bioChoices[bIdx] !== "Organelles") {
        console.clear
        console.log(
        "I'm sorry you've failed your final and need to take another semester of college. You lose 3k, but you you still graduate so congrats!"
        );
        resources.money = Number(resources.money) - Number("30");
        resources.bookbag += " College Degree "
        console.table(resources);
        yardSale();
    }
    case "Nursing":
        console.clear()
        majors = ["English","Biology"]
        rls.keyInPause(`I'm sorry but you missed the deadline for picking your major. You will have to take the semester off
        and work as a bartender. You must study bartending ane learn how to make a dirty martini.
        to continue........`)
        console.clear()
        rls.keyInPause(`
        Dirty Martini
        * 2 1/2 shots vodka
        * 1⁄2 shot dry vermouth
        * 1⁄2 shot olive brine
        * 2 olives
        * Serve in a cocktail glass
        Add all the ingredients into a mixing glass with ice and gently stir. 
        Then, strain into a chilled cocktail glass and garnish with olives. 
        
        it is time to take your bartending test
        to continue............`)
        console.clear()
        let cocktail = rls.question(`How many olives does a dirty martini take?`)
        if(cocktail = "2"){
            console.log(`congrats you got the job and make 500 dollars in tips in one night`)
            resources.money = Number(resources.money) + Number("50");
        }else{
console.log(`sorry you didn't pass the test and get hired, and your rent is due, 
so your inventory money has to be used and you are broke. But your best friend is having 
a party so you head over to cheer up`)
resources.money = Number(resources.money) - Number("50");
yardSale()
        }



}

       }
      
  }//end of yellow life
  const greenLife = ()=>{
rls.keyInPause(`It turns out you're allergic to the color green and vomit the pill immediately. 
You look for the other pills on the plate and the grey one has some vomit on it, so you
cross your fingers that you are not allergic to yellow, and take the yellow pill.
to continue...........`)
yellowLife()
  }
const greyLife = () =>{
    rls.keyInPause(`It turns out you're allergic to the color grey and vomit the pill immediately. 
    You look for the other pills on the plate and the green one has some vomit on it, so you
    cross your fingers that you are not allergic to yellow, and take the yellow pill.
    to continue...........`)
    yellowLife()
  }

  const yardSale = () => {
    console.log(
      `
      Your best friend is having a party 
      you head over to their house which is only two blocks 
      from yours. As you are walking cheerfully along you come 
      across a yard sale with a huge sign that says “EVERYTHING is 
      FREE, take whatever three items you want”. You walk over to 
      the table on the lawn and there are only four items left. 
      You can only choose three items to go into your book bag`
    );
    //A book on love languages, a solar powered calculator, A snow Globe, a thermometer.
    yardItems = [
      "book on Love Languages",
      "Solar powered Calculator",
      "Snow Globe",
      "Thermometer",
    ];
    yardIdx = rls.keyInSelect(
      yardItems,
      "Since you can only take 3 out of the 4 items, you must choose the one item you will leave behind"
    );
    console.log(yardItems.splice(yardIdx, 1));
    resources.bookbag = resources.bookbag + yardItems;
    bookbag1 = bookbag1 + yardItems;
    console.log(resources);
  };
  
//   const willSmith = () => {
//     console.log(
//       "On your way home from the party, you bump into Will Smith who looks sweaty and frantic, he asks you if you have a thermometer. If you do he will give you 10k for it "
//     );
//     if (resources.bookbag.includes("Thermometer")) {
//       resources.money = Number(resources.money) + Number("100");
//       console.log("You are 10k richer!");
//     } else {
//       console.log(
//         "It's too bad you left the thermometer behind at the yardsale. No money for you..run"
//       );
//     }
//   };
  








const endGame = () => {
  console.log("goodbye, hope you will come by again.");
};

// const welcomeGreet = rl.question(`Welcome Human. My name Val and if you are ready to take
// the plunge into the Virtual Altered Life game, I will be your guide. In order to activate
// the game, please type in your name into the console, if you decide not to play today, type in "E" for exit and
// to the console and `)

choosetoPlay();
