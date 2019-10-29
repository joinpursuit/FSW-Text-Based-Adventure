const readline = require('readline-sync');


function play () {
console.log("**WELCOME TO RECIPE GAME**")
let greetingName = readline.question('Welcome to my kitchen! ENTER YOUR NAME: ');
console.log("Hello " + greetingName + " !  Welcome to my kitchen.") 

let ask = readline.question("Would you to be my [executive sous chef]  or a [chef] for today?: ");

console.log("OK My "+  ask + " " + greetingName);

let enterRecipe = readline.question("Would you like to enter your own recipe [y]es or [n]o ? ");

console.log("Great!! " + greetingName + "  let do it!!");
console.clear( );

  if (enterRecipe === "y") {

    let getTitle = readline.question("Title: ");

    // console.log( );

    console.log("[EXAMPLE OF PREP && SERVES]: * PREP 5 MIN | TOTAL 5 MIN | PLUS OVERNIGHT CHILLING  | SERVES 1 *");
    console.log("Prep time should be written as follow: PREP [enter time] Min | TOTAL [enter time] MIN | SERVES [enter number]");
    let getPrep = readline.question(" ")
    
    // console.log( );

    console.log("Ingredients should be written as follow: ");
    console.log("Measurements : " + "your answer," + " Ingredients : " + "your answer.")
    let getIngredientsChef = readline.question( )

    //  console.log( );

    console.log("Instructions should be written as follow: ");
    console.log("Techniques: "+"your answer");

    let getIngInstructionsChef = readline.question( );

    console.log('~~~~~~~~~~ * * *' + getTitle + '* * * ~~~~~~~~~~');
    console.log('');

    console.log(' * '+ getPrep +'*');
    console.log('');

    console.log('~~~~~~~~~~ * * * Ingredients * * * ~~~~~~~~~~');
    console.log('');

    console.log('* ' + getIngredientsChef +' *');
    console.log(''),

    console.log('~~~~~~~~~~~~~ * * * Instructions * * * ~~~~~~~~~~~~~');
    console.log('');

    console.log('* '+ getIngInstructionsChef +' *')
    console.log('');

  } else {

  console.log("Let see what you have first as options.");

  }


const choiceRunner = (str) => {
  switch (str) {
    case "oatmeal":
      console.clear();
      oatmeal(); 
      break;
    case "sandwiches":
        console.clear();
      sandwiches();
      break;
    default:
        console.clear();
        smoothieBowls();
  }
}
      
let wantBreakfast = null;
while (wantBreakfast !== "y") {
  wantBreakfast = readline.question('Would you like to prepare a nice BREAKFAST to start your day, [y]es or [n]o? ');
  // console.log(wantBreakfast)
}
      
  console.log("Let see what you have first as options.");

let willUserChoose = readline.question("would you like to choose for your[self] or, be given a [random] option? ");
//  for (let i = 0; i < recipes.length; i++) {
  function getRecipe() {
      
    let recipes = ["oatmeal", "sandwiches", "smoothie bowls"];
    let selectedRecipe = recipes[Math.floor(Math.random() * recipes.length)];
    return selectedRecipe;

  }
  
  if (willUserChoose === "random") {
  
      let selected = getRecipe();
      console.log(selected)
      choiceRunner(selected) 

  } else if (willUserChoose === "self") {

    let usersChoice = readline.question("OK! would you like [oatmeal], [sandwiches], or [smoothie] bowls? ");
    choiceRunner(usersChoice);
      
  } else {
    wantBreakfast = readline.question('Would you like to prepare a nice BREAKFAST to start your day, [y]es or [n]o? ');
    // getAllRecipe();

  }


  askForGroceries = readline.question("Do you have all the groceries [y]es or [n]o? ");
  if (askForGroceries === "y") {
    console.log("Great let get started");
    getRecipe();
  } else {
    console.log("Go do your groceries then come back :( ")
  }
  willUserChoose = readline.question("would you like to choose for your[self] or, be given a [random] option again? ");
  usersChoice = readline.question("OK! would you like [oatmeal], [sandwiches], or [smoothie] bowls? ");
  choiceRunner(usersChoice);

  let willUserPrint = readline.question("would you like to print all the recipes [y]es or [n]o? ");
  function getAllRecipe() {
    console.clear();
    ingredientsOvernightOat();
    smoothieBowls();
    fruitNutOatmeal();
    eggBreakfastSandwich();
    SmokedSalmonDillEggsSandwich();
    GuacamoleBreakfastSandwich();
  }
  console.log(willUserPrint)
  
  if (willUserPrint === "y") {
    
    getAllRecipe()
    
  } else {

    willUserChoose = readline.question("would you like to choose for your[self] or, be given a [random] option again? ");
    usersChoice = readline.question("OK! would you like [oatmeal], [sandwiches], or [smoothie] bowls? ");
    choiceRunner(usersChoice);

  }



  usersPantryCheatCheat = readline.question("OK! would you like pantry cheat cheat how to double recipes [y] or [n]? ");
  console.log("Pantry Cheat Cheat How to Double Recipes")

if (usersPantryCheatCheat === "y"){
  const myForEach = ( arr, fn) => {
    for ( let i = 0 ; i< arr.length ; i ++) {
      fn([arr[i]])
    }
  }

  const doubleRecipeTsp = (num) => {
    console.log((num * 2)+ " tsp")
  }

  const doubleRecipeTbs = (num) => {
    console.log((num * 2)+ " Tbs")
  }

  const doubleRecipeCups = (num) => {
    console.log( (num * 2)+ " Cups")
  }

  console.log(`cheat cheat for teaspoon\n`)
  myForEach([1 ,2, 3, 4], doubleRecipeTsp);

  console.log(`cheat cheat for Tablespoon\n`)
  myForEach([1 ,2, 3, 4], doubleRecipeTbs);


  console.log(`cheat cheat for Cups\n`)
  myForEach([1/ 2, 1/3, 1/4, 1/8], doubleRecipeCups)

} else {

  willUserChoose = readline.question("would you like to choose for your[self] or, be given a [random] option again? ");
  usersChoice = readline.question("OK! would you like [oatmeal], [sandwiches], or [smoothie] bowls? ");
  choiceRunner(usersChoice);

}
}


  
  function oatmeal() {
    console.log( "Oatmeal Is The Right Choice :-) GREAT!!! ** IT HAS A PREPARATION TIME of either 5 or 10 minutes.");
      
    let timeChosen = readline.question('** Please choose 5 or 10: ')
      
    if (timeChosen < 6) {
      console.clear();
    ingredientsOvernightOat();
      
    } else {
      console.clear();
      fruitNutOatmeal();
    }
  }
    
    
    function ingredientsOvernightOat () {
      console.log('~~~~~~~~~~ * * * Overnight chia oatmeal in a mason jar * * * ~~~~~~~~~~\n\n');
      console.log(' * PREP 5 MIN | TOTAL 5 MIN | PLUS OVERNIGHT CHILLING  | SERVES 1 *\n');
      console.log('* review : * * * * \n')
      console.log('~~~~~~~~~~ * * * Ingredients * * * ~~~~~~~~~~\n');
      
      console.table([
        {
          Measurements : '3/4 cup',
          Ingredients : 'unsweetened almond milk'
        } , {
          Measurements : '1/3 cup' ,
          Ingredients : 'rolled oats'
        } , {
          Measurements : '1 tbsp',
          Ingredients : 'chia seeds'
        } , {
          Measurements : '2 tsp',
          Ingredients : 'honey'
        } , {
          Measurements : '1/3 cup' ,
          Ingredients : 'vanilla'
        } , {
          Measurements : '2 tbsp',
          Ingredients :'dried cranberries, or 1 finely chopped fig'
        } , {
          Measurements : '1 banana',
          Ingredients : 'thinly sliced'
        } , {
          Measurements: '2 tbsp',
          Ingredients: 'toasted sliced almonds'
        }
      ]);
      console.log('');
      console.log('~~~~~~~~~~~~~ * * * Instructions * * * ~~~~~~~~~~~~~');
      console.log('');
      
      console.table([
        {
          Instructions :'COMBINE : almond milk, oats, chia seeds, honey, vanilla and dried fruit in a 250-mL Mason jar.'
        } , {
          Instructions : 'STIR : well, then cover and refrigerate overnight.'
        } , {
          Instructions : 'BEFORE : serving, top with banana and almonds.'
        } ,{
          Instructions: 'NUTRITION : Calories 488, Protein 11 g, Carbohydrates 86 g, Fat 15 g, Fibre 14 g, Sodium 141 mg.'
        }
      ])
      console.log('');
    }
    
    function smoothieBowls () {
      console.log('~~~~~~~~~~ * * * Green goddess smoothie bowl * * * ~~~~~~~~~~\n\n');
      console.log(' * PREP 10 MIN | TOTAL 10 MIN | SERVES 2 *\n');
      console.log('* review : * * * *   \n');
      console.log('~~~~~~~~~~~~~ * * * Ingredients * * * ~~~~~~~~~~~~~\n');
      
      console.table([
        {
          Measurements : '1',
          Ingredients : 'Avocado, peeled and finely chopped'
        } , {
          Measurements : '1 cup' ,
          Ingredients : 'Packed baby spinach'
        } , {
          Measurements : '1 cup',
          Ingredients : 'Finely chopped romaine stems'
        } , {
          Measurements : '1',
          Ingredients : 'Granny Smith apple, finely chopped'
        } , {
          Measurements : '1' ,
          Ingredients : 'Frozen banana, broken in half'
        } , {
          Measurements : '1/2 cup',
          Ingredients :'2% Plain yogurt'
        } , {
          Measurements : '1 tsp',
          Ingredients : 'Manuka honey, optional'
        } 
      ]);
      console.log('\n~~~~~~~~~~~~~ * * * Instructions * * * ~~~~~~~~~~~~~\n');
      
      console.table([
        {
          Techniques : 'WHIRL',
          Instructions : 'avocado, spinach, apple, banana, yogurt and honey (optional) in a blender until smooth, Pour into 2 bowls.'
        } , {
          Techniques : 'TOP',
          Instructions : 'with your choice of smoothie toppers.'
        } , {
          Techniques : 'KITCHEN NOTE',
          Instructions : 'Smart Smoothie toppers( SEE THE TABLE BELOW)'
        } ,{
          Techniques: 'NUTRITION',
          Instructions: ' Calories 294, Protein 6 g, Carbohydrates 37 g, Fat 16 g, Fibre 10 g, Sodium 63 mg. Excellent source of Vitamin B6'
        }
      ])
      console.log('\n** Smart Smoothie toppers **');
      
      console.table([
        {
          Toppings : 'Pepitas',
          Instructions : 'Just 2 tbsp contains 5 g of protein and 5 g of fibre.'
        } , {
          Toppings : 'Figs',
          Instructions : 'High in vitamin K, fibre and copper.'
        } , {
          Toppings : 'Goji berries',
          Instructions : 'Great source of vitamins A and C.'
        } ,{
          Toppings: 'Almonds',
          Instructions: 'The nut with the most fibre: 3 g in 2 tbsp'
        },{
          Toppings: 'Chia:',
          Instructions: 'Rich in Omega-3 fatty acids, calcium, protein and fibre.'
        } ,{
          Toppings: 'Flax',
          Instructions: 'Nearly 4 g of fibre in 2 tbsp. Ground seeds are easier for your body to absorb.'
        } ,{
          Toppings: 'Hemp hearts',
          Instructions: 'Full of protein, magnesium and healthy fats.'
        } 
      ])
      console.log('');
    }
    
    
    function fruitNutOatmeal () {
      console.log('~~~~~~~~~~ * * * Fruit and nut steel-cut oats * * * ~~~~~~~~~~');
      console.log('');
      console.log('');
      console.log(' * PREP 10 MIN | TOTAL 20 MIN | SERVES 6 *');
      console.log('');
      console.log('* review : * * *  ');
      console.log('');
      console.log('~~~~~~~~~~~~~ * * * Ingredients * * * ~~~~~~~~~~~~~');
      console.log('');
      
      console.table([
        {
          Measurements : '2 cups',
          Ingredients : 'steel-cut oats'
        } , {
          Measurements : '1 tsp' ,
          Ingredients : 'salt'
        } , {
          Measurements : '3/4 tsp',
          Ingredients : 'cinnamon'
        } , {
          Measurements : '1/4 tsp',
          Ingredients : 'nutmeg'
        } , {
          Measurements : '8 cups' ,
          Ingredients : 'water'
        } , {
          Measurements : '1 cup',
          Ingredients :'milk'
        } , {
          Measurements : '1/2 cup',
          Ingredients : 'brown sugar'
        } , {
          Measurements: '1 cup',
          Ingredients: 'chopped pitted dates'
        } , {
          Measurements: '1/2 cup',
          Ingredients: 'dried cranberries'
        } , {
          Measurements: '1/2 cup',
          Ingredients: 'toasted sunflower seeds, or chopped walnuts (optional)'
        }
      ]);
      console.log('');
      console.log('~~~~~~~~~~~~~ * * * Instructions * * * ~~~~~~~~~~~~~');
      console.log('');
      
      console.table([
        {
          Techniques : 'COMBINE',
          Instructions : 'Oats with salt, cinnamon, nutmeg and water in rice cooker. press in oatmeal insert. let it cook.'
        } , {
          Techniques : 'STIR',
          Instructions : 'In milk, sugar, dates and cranberries. Scoop into bowls and sprinkle with seeds or walnuts.'
        } , {
          Techniques : 'KITCHEN NOTE',
          Instructions : 'Our rice cooker recipes are developed with a 7L rice cooker.'
        } ,{
          Techniques: 'NUTRITION',
          Instructions: ' Calories 483, Protein 14 g, Carbohydrates 88 g, Fat 11 g, Fibre 9 g, Sodium 423 mg. Excellent source of Iron'
        }
      ])
      console.log('');
    }
    
    
    function sandwiches () {
      // console.log( "You entered Sandwiches  :-) GREAT!!! ** WE HAVE PREPARATION TIME BETWEEN 5 To 10 minutes ** Please choose a random time between ");
      
      let userInputNum = readline.question('Sandwiches Is Right Choice  :-) GREAT!!! ** WE HAVE PREPARATION TIME BETWEEN 3 To 25 minutes ** Please choose a random time between "')
      console.clear();
      if ( userInputNum < 4) {
        eggBreakfastSandwich()
      } else if ( userInputNum >= 5 && userInputNum <= 20 ) {
        SmokedSalmonDillEggsSandwich ();
      } else {
        GuacamoleBreakfastSandwich ();
      }
    }
    
    function eggBreakfastSandwich () {
      console.log('~~~~~~~~~~ * * * Egg Breakfast Sandwich * * * ~~~~~~~~~~');
      console.log('');
      console.log('');
      console.log(' * PREP 3 MIN  | SERVES 1 *');
      console.log('');
      console.log('* review : * * * * ')
      console.log('');
      console.log('~~~~~~~~~~ * * * Ingredients * * * ~~~~~~~~~~');
      console.log('');
      
      console.table([
        {
          Measurements : '1',
          Ingredients : 'Egg'
        } , {
          Measurements : '1 to 2 Slices' ,
          Ingredients : 'Low-fat cheese'
        } , {
          Measurements : '4 Leaves',
          Ingredients : 'Baby spinach'
        } , {
          Measurements : '1',
          Ingredients : 'Whole grain English Muffin'
        } 
      ]);
      console.log('');
      console.log('~~~~~~~~~~~~~ * * * Instructions * * * ~~~~~~~~~~~~~');
      console.log('');
      
      console.table([
        {
          Instructions :'SPRAY : coffee mug or small bowl with oil'
        } , {
          Instructions : 'WHISK : egg in mug or bowl; season with salt and pepper.'
        } , {
          Instructions : 'MICROWAVE : egg on high for 1 minute.'
        } , {
          Instructions: 'SET UP: Place cheese, tomato and spinach on English muffin and top with egg.'
        } , {
          Instructions: 'NUTRITION : Calories 263, Protein 19 g, Carbohydrates 27 g, Fat 9 g, Sodium 499 mg.'
        }
      ])
      console.log('');
    }
    
    function SmokedSalmonDillEggsSandwich () {
      console.log('~~~~~~~~~~ * * * Smoked Salmon Dill Eggs Benedict * * * ~~~~~~~~~~\n\n');
      console.log(' * PREP 10 MIN | TOTAL 20 MIN | SERVES 2 *\n');
      console.log('* review : * * * * *  \n');
      console.log('~~~~~~~~~~~~~ * * * Ingredients * * * ~~~~~~~~~~~~~\n');
      
      console.table([
        {
          Measurements : '1/4 cup',
          Ingredients : 'Butter, softened'
        } , {
          Measurements : '2 Tbs' ,
          Ingredients : 'Fresh dill'
        } , {
          Measurements : '1 teaspoon',
          Ingredients : 'Lemon zest'
        } , {
          Measurements : '1 pinch',
          Ingredients : 'Salt'
        } , {
          Measurements : '4' ,
          Ingredients : 'Eggs'
        } , {
          Measurements : '2',
          Ingredients :'English muffins, split and toasted'
        } , {
          Measurements : '4 ounces',
          Ingredients : 'Sliced smoked salmon'
        } , {
          Measurements : '1 pinch',
          Ingredients : 'Cayenne pepper'
        } , {
          Measurements : '4' ,
          Ingredients : 'Small fresh dill springs '
        } , {
          Measurements : '1 pinch',
          Ingredients : 'Salt and ground black pepper to taste'
        } 
      ]);
     
      console.log('\n~~~~~~~~~~~~~ * * * Instructions * * * ~~~~~~~~~~~~~\n');
      console.table([
        {
          Techniques : 'STIR',
          Instructions : 'butter, dill, lemon zest, cayenne pepper, salt, and black pepper in a bowl until combined. Set aside.'
        } , {
          Techniques : 'POACH',
          Instructions : 'Eggs in boiled water for 4 to 6 minutes. Remove excess water, then transfer to a warm plate.  '
        } , {
          Techniques : 'SPREAD',
          Instructions : 'English muffin half with dill butter'
        } , {
          Techniques : "SET UP",
          Instructions : "Top with a layer of smoked salmon, then 1 poached egg. Season with cayenne pepper, salt, and black pepper to taste."
        } , {
          Techniques: 'NUTRITION',
          Instructions: '528 calories; 35.3 g fat; 27 g carbohydrates; 26.3 g protein; 400 mg cholesterol; 1298 mg sodium.'
        }
      ])
      
      console.log('');
    }
    
    function GuacamoleBreakfastSandwich () {
      console.log('~~~~~~~~~~ * * * GUACAMOLE BREAKFAST SANDWICH * * * ~~~~~~~~~~\n\n');
      console.log(' * PREP 15 MIN | TOTAL 25 MIN | SERVES 4 *\n');
      console.log('* review : * * * * * \n');
      console.log('~~~~~~~~~~~~~ * * * Ingredients * * * ~~~~~~~~~~~~~\n');
      
      console.table([
        {
          Measurements : '8 Slices',
          Ingredients : 'Bacon'
        } , {
          Measurements : '4 Large' ,
          Ingredients : 'Eggs'
        } , {
          Measurements : '4 slices',
          Ingredients : 'American cheese'
        } , {
          Measurements : '4 Tbs',
          Ingredients : 'Unsalted butter, at room temperature'
        } , {
          Measurements : '8 Slices' ,
          Ingredients : 'Bread'
        } , {
          Measurements : '1 cup',
          Ingredients :'Guacamole'
        } 
      ]);
      console.log('\n~~~~~~~~~~~~~ * * * Instructions * * * ~~~~~~~~~~~~~\n');
      console.table([
        {
          Techniques : 'COOK',
          Instructions : 'Bacon until brown and crispy, flipping once, about 3-4 minutes.'
        } , {
          Techniques : 'COOK',
          Instructions : 'Eggs about 3 minutes add salt and pepper. Place a slice of cheese over each egg during the last 30 seconds of cooking time.'
        } , {
          Techniques : 'SPREAD',
          Instructions : 'Spread butter on each slice of bread then toast it in both sides about 2-3 minutes.'
        } ,{
          
          Techniques : 'ASSEMBLE',
          Instructions : 'Spread 4 slices of bread with guacamole, topped with bacon, egg, cheese and another slice of bread.'
        } ,{
          Techniques: 'NUTRITION',
          Instructions: ' Calories 703.5, Protein 20.7 g, Carbohydrates 43.3 g, Fat 50.4 g, Fibre 5.5 g, Sodium 821.9 mg.'
        }
      ])
      console.log('');
    }


  play();
