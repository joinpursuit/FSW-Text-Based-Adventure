const rls = require("readline-sync");
let type = " ";
let points = 0;

const nameInput = rls.question("Enter your name: \n"); //ask user their name and allow them to enter it.
console.log(`Hello ${nameInput}!  Welcome to my food adventure! \n`); // greet the user

// function comes from group review with myra
function pause(seconds) {
  let pauseDuration = seconds * 1000;
  // start time of calling the function
  let startTime = Date.now(); // start time equals the amount of milliseconds that pass from 1970

  // keep track of time as it passes
  let now = Date.now(); // now = milliseconds passed since the 1970's
  let timeElapsed = now - startTime; // new variable timeElapsed will eqaual now - startTime 

  while (timeElapsed < pauseDuration) {  
    now = Date.now();
    timeElapsed = now - startTime;
  }
}

function giftCard(amount) {
  points += amount;
  console.log(`You earned: ${points} points!`);
  if (points === 75) {
    console.log("Congrats! You just won a free DoorDash gift card !!");
  } else if (points >= 100) {
    console.log(
      "Congrats, you racked up a lot of points! Not only do you get the gift card but also a 3 month free gym membership to UFC gym to stay fit!"
    );
  }
}

let age = rls.question(`How old are you ${nameInput}? \n`); // asks user age

if (age >= 16) {
  console.log(`Have a good time ${nameInput}!`); // check if age is greater than or equal to 16 and say something
  pause(1);
} else {
  console.log("You can still explore! Just make sure you go with an adult!"); // else allow to play but give warning to go out with an adult
}

const startGame = () => {
  let question = rls.keyInYN(
    `Hello would you like to know the some of my favorite places to eat and get treats in the 5 boroughs ${nameInput}? \n`
  ); // prompt the user if they would like to play

  if (question) {
    // if yes
    console.log(`Let's get it then ${nameInput}!`); // log something to console.
    pause(2);
    play(); // start the game
  } else {
    // else
    console.log("Okay, maybe next time."); // log something to console.
    leaveGame(); // leave the game
  }
};

function usrIns() {
  console.log(`Okay ${nameInput} so here's how it goes! \n`);
  pause(3);
  console.log(
    "In each borough you have two choices eats (more for food people) or treats (more for the sweet tooth.)"
  );
  pause(3);
  console.log(
    "As you explore the boroughs you earn points. Earn 75 points for a prize or 100 points for 2 prizes!"
  );
  pause(3);
  console.log(
    "The prizes are secret so explore a lot to find out what they are!"
  );
  pause(3);
  console.log(
    "In each category are my top 3-5 places I'll suggest and my favorite dish or treat there!"
  );
  pause(3);
  console.log(
    "The goal is to let you know some of my top food picks in NYC and then for you go out and experience it!"
  );
  pause(3);
  console.log(
    "So take some notes and pop some og these suggestions into yelp or google for exact locations! "
  );
  pause(3);
  console.log("Go out, enjoy some food and take a friend! \n");
}

usrIns();

const play = () => {
  let borough = " ";

  while (
    borough !== "brooklyn" &&
    borough !== "queens" &&
    borough !== "manhattan" &&
    borough !== "staten island" &&
    borough !== "the bronx"
  ) {
    borough = rls.question(
      `What borough would you like to explore ${nameInput}? \n`
    );
    borough = borough.toLowerCase();

    if (borough === "brooklyn") {
      console.log("Brooklyn sounds good!");
      brookLand();
    } else if (borough === "queens") {
      console.log("Queens sounds good!");
      queensLand();
    } else if (borough === "manhattan") {
      console.log("The city sounds good!");
      theCity();
    } else if (borough === "staten Island") {
      console.log("Ohhh! The Forbidden Island sounds good");
      statenIsland();
    } else if (borough === "the bronx") {
      console.log("The Bronx sounds good!");
      theBX();
    } else {
      console.log("Pick a borough or leave!");
    }
  }
};

const brookLand = () => {
  console.log(
    "Welcome to Brooklyn! I think Brooklyn has some of the best food in NY! It's a culinary grub hub!"
  );

  type = rls.question("So what're you in the mood for? eats or treats? \n");
  type = type.toLowerCase();

  while (type === "eats" || type === "treats") {
    if (type === "eats") {
      console.log("Ahhh you like big plates too! Let's go!");
      brooklynEats();
    } else if (type === "treats") {
      console.log("Yum! Sweets it is!");
      brooklynTreats();
    } else {
      if (rls.keyInYN(`Do you want to go back to browsing ${nameInput}?`)) {
        play();
      } else {
        leaveGame();
      }
    }
  }
};

const queensLand = () => {
  console.log(
    "Welcome to Queens! This is my favorite place for cheap and cultured eats!"
  );

  type = rls.question("So what're you in the mood for? eats or treats? \n");
  while (type === "eats" || type === "treats") {
    if (type === "eats") {
      console.log("Full belly it is!");
      queensEats();
    } else if (type === "treats") {
      console.log("Let's get ready for that dentist!");
      queensTreats();
    } else {
      if (rls.keyInYN(`Do you want to go back to browsing ${nameInput}? \n`)) {
        play();
      } else {
        leaveGame();
      }
    }
  }
};

const statenIsland = () => {
  console.log(
    "I'm sure this will be helpful because Staten Island is sort of the forgotten borough!"
  );
  console.log("But trust that there are some hidden gems here!");

  type = rls.question("So what're you in the mood for? eats or treats? \n");
  while (type === "eats" || type === "treats") {
    if (type === "eats") {
      console.log("Let's go!");
      statenEats();
    } else if (type === "treats") {
      console.log("You love your sweets huh? no judgement! let's go!");
      statenTreats();
    } else {
      if (rls.keyInYN(`Do you want to go back to browsing ${nameInput}? \n`)) {
        play();
      } else {
        leaveGame();
      }
    }
  }
};

const theCity = () => {
  console.log("Manhattan is home to all types of unique and deliecious food!");
  console.log("I tend to go out of my way just to get some of my favorites.");

  type = rls.question("So what're you in the mood for? eats or treats? \n");
  while (type === "eats" || type === "treats") {
    if (type === "eats") {
      console.log("I love a platter!");
      manhattanEats();
    } else if (type === "treats") {
      console.log("Let's satisfy that sweet tooth!");
      manhattanTreats();
    } else {
      if (rls.keyInYN(`Do you want to go back to browsing ${nameInput}? \n`)) {
        play();
      } else {
        leaveGame();
      }
    }
  }
};

const theBX = () => {
  console.log(
    "The Bronx is still very unknown to me but I might know a few places."
  );
  type = rls.question("So what're you in the mood for? eats or treats? \n");

  while (type === "eats" || type === "treats") {
    if (type === "eats") {
      console.log("Big eats!");
      bronxEats();
    } else if (type === "treats") {
      console.log("Sugar rush! Sugar rush!");
      bronxTreats();
    } else {
      if (rls.keyInYN(`Do you want to go back to browsing ${nameInput}? \n`)) {
        play();
      } else {
        leaveGame();
      }
    }
  }
};

const brooklynEats = () => {
  console.log("My first choice for good eats in Brooklyn is: Roberta's Pizza!");
  pause(3);
  console.log(
    "My Favorite dish there is a pizza called the Bee Sting! It has tomato, basil, sopressata, chili and honey! (yum)"
  );
  pause(3);
  console.log(
    "My second choice for Brooklyn is Peaches HotHouse! No doubt my favorite dish is their fried chicken with mac and cheese and collard greens! Hot sauce too please!"
  );
  pause(3);
  console.log(
    "This one is for my vegans and vegetarians! Taheni is awesome. If I'm going meatless their fries and falafels are A1! Dipping sauces too of course!"
  );
  pause(3);
  giftCard(15);

  if (rls.keyInYN("Would you like to see treats in Brooklyn? \n")) {
    brooklynTreats();
  } else if (rls.keyInYN("Would you like to browse the other boroughs? \n")) {
    play();
  } else {
    leaveGame();
  }
};

const queensEats = () => {
  console.log(
    "First up, I love Filipino food so Ihawan is my go to in Queens. Very family style vibe cheap and delicious. If you like pork go with the Lechon Kawali you wont regret it!"
  );
  pause(3);
  console.log("Bonus: If pork is not your think try the chicken bbq ;-)");
  pause(3);
  console.log(
    "Next is C & J's is Rosedale Queens. This little spot makes some of the most bom and affordable carribean food money cad buy!"
  );
  pause(3);
  console.log(
    "The Jerk Chicken w. rice and peas also a side of Macaroni Salad is *chefs kiss*"
  );
  pause(3);
  console.log(
    "Another gem in Queens for me is BKNY Thai. I love Thai food and here you can never go wrong with Pad See Ew"
  );
  pause(3);
  giftCard(15);

  if (rls.keyInYN("Would you like to see treats in Queens? \n")) {
    queensTreats();
  } else if (rls.keyInYN("Would you like to browse the other boroughs? \n")) {
    play();
  } else {
    leaveGame();
  }
};

const manhattanEats = () => {
  console.log(
    "One of my favorite places in the city to eat is Wu's Wonton King. This place might look a bit run down but the food is amazing."
  );
  pause(3);
  console.log(
    "My favorite things to get there are the Roast Pig and the Salt & Pepper Pork!"
  );
  pause(3);
  console.log(
    "Next up, another great Filipino spot I love is Flip Sigi. Cheap, delicious, filling and also lots of different things for all types of cravings!"
  );
  pause(3);
  console.log(
    "I personally love the bowls. Specifically the Breakfast bowl and Chicken Adobo bowl. SO flavorful and filling."
  );
  pause(3);
  console.log(
    "another fan favorite of mine is Don Angie!. I love their take on lasanga. Trust me youve never had lasanga like this!"
  );
  pause(3);
  giftCard(10);

  if (rls.keyInYN("Would you like to see some treats in Manhattan? \n")) {
    manhattanTreats();
  } else if (rls.keyInYN("Would you like to browse the other boroughs? \n")) {
    play();
  } else {
    leaveGame();
  }
};

const statenEats = () => {
  console.log(
    "My favorite place to eat so far in Staten Island is Sakai Ramen. That's the name of the place AND my favorite dish!"
  );
  pause(3);
  console.log("Get the chili paste on the side and let your taste buds enjoy!");
  pause(3);
  console.log(
    "If you love tapas you'll love this next place called Beso! The food is so good you def have to get 3-4 tapas or else the decision gets tough!"
  );
  pause(3);
  console.log(
    "If youre there make sure you try the lamb chops, empanadas and calamari. All were super delicious and still left me wanting to try more!"
  );
  pause(3);
  console.log(
    "Last but not least there's a gem in S.I. called Country Donuts."
  );
  pause(3);
  console.log(
    "This place is like a healthy little diner WITH treats and a bunch of affordable and nutritious options!"
  );
  pause(3);
  console.log("* Bonus: You have to try their Bananna Coconut Pie shake!");
  pause(3);
  giftCard(7);

  if (rls.keyInYN("Would you like to see some treats in Staten Island? \n")) {
    statenTreats();
  } else if (rls.keyInYN("Would you like to browse the other boroughs? \n")) {
    play();
  } else {
    leaveGame();
  }
};

const bronxEats = () => {
  console.log(
    "The Bronx is full of life, food and heavily doused with Latin culture."
  );
  pause(3);
  console.log(
    "However let's start with breakfast. Probably the best breakfast spot in the BX is Jimmy's On the Go."
  );
  pause(3);
  console.log(
    "Very homey but everything is super affordable and delicious, they also have a nice section of seafood to choose from too!"
  );
  pause(3);
  console.log(
    "Another spot called Barrio BX pays homage to my Puetro Rican ancestry! Deliecious P.R. food and also has a bar and of course music! (have to wait until quarentine is over for that though!)"
  );
  pause(3);
  console.log("You have to try their pernil or Coquito French Toast!");
  pause(3);
  console.log(
    "I love Cuban food and Havana Cafe does it right. You can bever go wrong with steak and eggs, rice and black beans but there's tons of great options."
  );
  pause(3);
  giftCard(10);

  if (rls.keyInYN("Would you like to see some treats in The Bronx? \n")) {
    bronxTreats();
  } else if (rls.keyInYN("Would you like to browse the other boroughs? \n")) {
    play();
  } else {
    leaveGame();
  }
};

const brooklynTreats = () => {
  console.log(
    "One of my favorite sweet spots in Brooklyn goes to Ample Hills Creamery!"
  );
  pause(3);
  console.log(
    "Their flavors vary by month and season but you can never go wrong with my favorite! Sweet Cream and Cookies (otherwise known as cookies and cream."
  );
  pause(3);
  console.log(
    "Martha's Country Bakery is my second choice. Whenever I'm there I have to get the red velevet hot chocolate!"
  );
  pause(3);
  console.log(
    "And last but certainly not least is the Little Cupcake Bakeshop, their Brooklyn Blackout cake is next level delecious."
  );
  pause(3);
  giftCard(12);

  if (rls.keyInYN("Would you like to see eats in Brooklyn? \n")) {
    brooklynEats();
  } else if (rls.keyInYN("Woild you like to browse the other boroughs? \n")) {
    play();
  } else {
    leaveGame();
  }
};

const queensTreats = () => {
  console.log(
    "Okay I'm excited, first on my Queens treat list is Spot Dessert Bar."
  );
  console.log(
    "My Favorite thing here is the Golden Toast with honey, strawberries and condensed ice cream (lord take me now!)"
  );
  pause(3);
  console.log(
    "Now that is hard to top but next up is Cafe Bench. A crepreie that specialized in sweet and savory! I go sweet and always nutella, banana and ice cream.(add a small coffee and you're golden.)"
  );
  pause(3);
  console.log(
    "Next and certainly just as good is Sweetory. Get anything with that's a dessert toast and thank me later."
  );
  pause(3);
  giftCard(15);

  if (rls.keyInYN("Would you like to see some eats in Queens? \n")) {
    queensEats();
  } else if (rls.keyInYN("Would you like to browse the other boroughs? \n")) {
    play();
  } else {
    leaveGame();
  }
};

const manhattanTreats = () => {
  console.log(
    "Now I can go off forever about unique treats in Manhattan but then we'd be here forever!"
  );
  pause(3);
  console.log(
    "The first spot you should try is Red Gate Bakery. They have a toasted carrot loaf w. cream cheese frosting that is wonderful to look at and eat."
  );
  pause(3);
  console.log(
    "Second place Taquero is a Mexican Joint. The star however is that once a week they have Donuts w. fruity pebbles and strawberry and lemon icing. I belive it's on Tuesdays!"
  );
  pause(3);
  console.log(
    "Midtown Creamery is another gem that will sure give you cavities."
  );
  console.log(
    "Love their cookie palooza ice cream. Made with chips ahoy, oreaos and fudge. Served on a  warm waffle cone."
  );
  pause(3);
  giftCard(12);

  if (rls.keyInYN("Would you like to see some eats in Manhattan? \n")) {
    manhattanEats();
  } else if (rls.keyInYN("Would you like to browse the other boroughs? \n")) {
    play();
  } else {
    leaveGame();
  }
};

const statenTreats = () => {
  console.log("This one will be short and sweet! No pun intended.");
  console.log(
    "First up is Eggars Ice Cream Parlor. I love this place mainly for the classic aesthetic but the icecream is good too."
  );
  pause(3);
  console.log(
    "Another classic is Ralph's Italian Ice. This place has every flavor imaginable and I always go cookies and cream. Old habits die hard haha."
  );
  pause(3);
  console.log(
    "Last place was a random gem I found called Cafe Con Pan (which is spanish for cofee with bread). It's a Mexican resturant/bakery. Walking by I saw the Churros and has to stop and try."
  );
  pause(3);
  giftCard(10);

  if (rls.keyInYN("Would you like to see some eats in Staten Island? \n")) {
    statenEats();
  } else if (rls.keyInYN("Would you like to browse the other boroughs? \n")) {
    play();
  } else {
    leaveGame();
  }
};

const bronxTreats = () => {
  console.log(
    "Error Code 59204: Cannot find places for good treats in The Bronx. You still get points for trying!"
  );
  giftCard(10);
  if (rls.keyInYN("Would you like to see some eats in The Bronx instead? \n")) {
    bronxEats();
  } else if (rls.keyInYN("Would you like to browse the other boroughs? \n")) {
    play();
  } else {
    leaveGame();
  }
};

const leaveGame = () => {
  console.log(
    `Don't let the keyboard hit ya where the good lord split ya ${nameInput}!`
  );
  process.exit();
};

startGame();
