const rls = require("readline-sync");
const pizzaType = ["vegan", "meatLover", "veggie"];
const veganPizza = [
  "Vegan Parmesian",
  "Mushrooms",
  "Cauliflower",
  "Fresh Basil",
  "Zuchini",
];
const meatLoverPizza = [
  "Bacon",
  "Hot Sausage",
  "Cheese",
  "Chicken",
  "Pepperoni",
];
const veggiePizza = [
  "Baby Spinach",
  "Mozzarella",
  "Artichoke",
  "Bell Pepper",
  "Olives",
];
const name = rls.question("Welcome, What is your name:\n");
let toppings = [];
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

function preparePizza(type, pizzaToppings) {
  console.log(pizzaToppings.join());

  while (numOfToppings >= 1) {
    const userTopping = rls.question("Enter " + type + " Toppings:\n");

    if (pizzaToppings.includes(userTopping)) {
      toppings.push(userTopping);
      numOfToppings--;
      console.log("You have " + numOfToppings + " remaining");
    } else {
      console.log(userTopping + " is not " + type + " topping!");
      console.log(pizzaToppings.join());
    }
  }
}

function startGame() {
  numOfToppings = 3;
  const index = rls.keyInSelect(pizzaType, "Which pizza would you like?");
  console.log("You have selected " + pizzaType[index] + " pizza.");
  if (pizzaType[index] === "vegan") {
    preparePizza(pizzaType[index], veganPizza);
  } else if (pizzaType[index] === "meatLover") {
    preparePizza(pizzaType[index], meatLoverPizza);
  } else {
    preparePizza(pizzaType[index], veggiePizza);
  }
  numberOfSlices();
  review(pizzaType[index]);
}
function numberOfSlices() {
  let slice = "";
  while (slice !== "6" && slice !== "8" && slice !== "12") {
    slice = rls.question(
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
    }
  }
}
function review(userPizzaToppings) {
  let order = rls.keyInYN("Will that be all?");
  if (order) {
    console.log("You have selected " + toppings); //.join())
    console.log("Enjoy your " + userPizzaToppings + " pizza!");
    quitGame();
  } else {
    startGame();
  }
}
function quitGame() {
  console.log("Come back Soon!");
  process.exit();
}
play();
