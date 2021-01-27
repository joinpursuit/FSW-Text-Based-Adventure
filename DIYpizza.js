const rls = require("readline-sync");
let veganPizza = [
  "Vegan Parmesian",
  "Mushrooms",
  "Cauliflower",
  "Fresh Basil",
  "Zuchini",
];
let meatLoverPizza = ["Bacon", "Hot Sausage", "Cheese", "Chicken", "Pepperoni"];
let veggiePizza = [
  "Baby Spinach",
  "Mozzarella",
  "Artichoke",
  "Bell Pepper",
  "Olives",
];
let toppings = [];
const name = rls.question("Welcome, What is your name:\n");
let numOfToppings = 3;

function play() {
  console.log("Hi " + name + " nice to meet you! \n");
  console.log("Let's make three different Pizzas!");
  console.log("\nOne for you and the other two for a friend/s");
  console.log("Your options are vegan, meatLover, and veggie.");
  console.log(
    "You will need to add 3 toppings out of 5 options provided for you."
  );
  console.log(
    "Once you are done with all three pizzas, you can enjoy it for free. \n"
  );

  if (rls.keyInYN("Ready to DIY Pizza?")) {
    startGame();
  } else {
    quitGame();
  }
}
//play()

function startGame() {
  //play();
  pizzaType = ["vegan", "meatLover", "veggie"];
  index = rls.keyInSelect(pizzaType, "Which pizza would you like?");

  //   let userPizza = rls.question(
  //     "Pick a PizzaType - vegan, meatLover, or veggie:\n"
  //   );
  // if (pizzaType === index[1]) {
  console.log("You have selected " + pizzaType[index] + " pizza.");
  //console.log("Let's make a " + index[1] + " pizza!");
  console.log(veganPizza.join());
  let userToppings;
  //let numOfToppings = 3;
  while (numOfToppings >= 1) {
    userToppings = rls.question("Enter Vegan Pizza Toppings:\n");
    if (veganPizza.includes(userToppings)) {
      toppings.push(userToppings);
      numOfToppings--;
      console.log("You have " + numOfToppings + " remaining");
    } else if (veganPizza !== userToppings) {
      console.log(userToppings + " is not " + pizzaType[index] + " topping!");
    } else {
      console.log("This is not an option. Please choose specified toppings.");
      veganPizza;
    }
  }
  numberOfSlices();
  review(pizzaType[index]);
  //}

  if (pizzaType === index[2]) {
    console.log("Let's make a " + pizzaType[index] + " pizza!");
    console.log(meatLoverPizza.join());
    while (numOfToppings >= 1) {
      let userToppings = rls.question("Enter meatLover Pizza Toppings:\n");
      if (meatLoverPizza.includes(userToppings)) {
        toppings.push(userToppings);
        numOfToppings--;
        console.log("You have " + numOfToppings + " remaining");
      } else {
        console.log(userToppings + " is not " + pizzaType[index] + " topping!");
      }
    }
    numberOfSlices();
    review(pizzaType[index]);
    //}

    if (pizzaType === pizzaType[3]) {
      console.log("Let's make a " + index[3] + " pizza!");
      console.log(veggiePizza.join());
      let userToppings;
      let numOfToppings = 3;
      while (numOfToppings >= 1) {
        userToppings = rls.question("Enter Veggie Pizza Toppings:\n");
        if (veggiePizza.includes(userToppings)) {
          toppings.push(userToppings);
          numOfToppings--;
          console.log("You have " + numOfToppings + " remaining");
        } else {
          console.log(userToppings + " is not " + userPizza + " topping!");
        }
      }
      numberOfSlices();
      review(userPizza);
    }
    //}

    function numberOfSlices() {
      let slice = rls.question(
        "How many slices would you like this pizza cut? Please choose number of slices:6 slices, 8 slices, or 12 slices.\n"
      );
      if (slice === "6") {
        console.log("You cut this pizza into 6 slices.");
      } else if (slice === "8") {
        console.log("You cut this into 8 slices.");
      } else if (slice === "12") {
        console.log("You cut this pizza into 12 slices");
      } else {
        console.log("Invalid number of pizza slices. ");
        numberOfSlices();
      }
    }

    function review(userPizzaToppings) {
      //creat a forEach loop
      let order = rls.keyInYN("Will that be all?");
      if (order) {
        console.log("You have selected " + toppings); //.join())
        console.log("Enjoy your " + userPizzaToppings + " pizza!");
        quitGame();
      } else {
        startGame();
      }

      function quitGame() {
        console.log("Come back Soon!");
        process.exit();
      }
    }
  }
}
play()
//startGame();
