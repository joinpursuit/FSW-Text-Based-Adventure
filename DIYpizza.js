const rls = require("readline-sync");
// let nameInput = readline.question("Enter your name: ")


    //initiate the player to begin
    function initiate()  {  
     if(rls.keyInYN("Ready to DIY Pizza?")) {
            play()
        }
        else {
            quitGame()
        }
    }
    initiate()

    function quitGame()  {
     console.log("Come back Soon!")
     process.exit()
     //exit function
    }
    

    function play() {
        //welcome and ask name
        //instructions
        //ask to move forward to game
        const name = rls.question('Welcome, What is your name:\n');
        console.log("Hi " + name + " nice to meet you!"); {
        console.log("")
        console.log("Let's make three different Pizzas!")
        console.log("One for you and the other two for a friend/s")
        console.log("Your options are vegan, meatLover, and veggie.")
        console.log("You will need to add 3 toppings out of 5 options provided for you.")
        console.log("Once you are done with all three pizzas, you can enjoy it for free .")
        console.log("")
        }    
        if (rls.keyInYN("Are you excited to create your 3 Pizza types?")) {
        startGame()
        } else {
            quitGame()
        }
    }
    
    function startGame () {
        //3 pizza types
        //total 5 topping option for each Pizza Type
        //ask player to chose pizza
        const pizzaType = ["vegan", "meatLover", "veggie"]
        let veganPizza = ["Vegan Parmesian", "Mushrooms", "Cauliflower", "Fresh Basil", "Zuchini"]
        let meatLoverPizza = ["Bacon", "Hot Sausage", "Cheese", "Chicken", "Pepperoni"]
        let veggiePizza = ["Baby Spinach", "Mozzarella", "Artichoke", "Bell Pepper", "Olives"]
        //have user choose pizza type        
        let userPizza = rls.question("Pick a PizzaType - vegan, meatLover, or veggie:\n")
        let toppings = []

        //vegan pizza
        //Provide options
        //join toppings
        //let them know how many toppings are left
        if(userPizza === pizzaType[0]) {
            console.log("Let's make a " + pizzaType[0] + " pizza!")
            console.log(veganPizza.join())
            let userToppings
            let numOfToppings = 3
        while (numOfToppings >= 1) {
            userToppings = rls.question("Enter Vegan Pizza Toppings:\n")
            if(veganPizza.includes(userToppings)) {
                toppings.push(userToppings)
                numOfToppings--
                console.log("You have " + numOfToppings + " remaining")
            }
            else {
                console.log(userToppings + " is not " + userPizza + " topping!")
            }  
        }
    }
       
    
        //meatLover pizza
        //chose 3 toppings
        //join them
        //tell them how many toppings are left
        //ask if they want to continue
        if(userPizza === pizzaType[1]) {
            console.log("Let's make a " + pizzaType[1] + " pizza!")
            console.log(meatLoverPizza.join())
            let userToppings
            let numOfToppings = 3
        while (numOfToppings >= 1) {
           userToppings = rls.question("Enter meatLover Pizza Toppings:\n")
           if(meatLoverPizza.includes(userToppings)) {
                toppings.push(userToppings)
                numOfToppings--
                console.log("You have " + numOfToppings + " remaining")
            }
            else {
                console.log(userToppings + " is not " + userPizza + " topping!")
            }
        }
    }
    //veggie pizza"""
    if (userPizza=== pizzaType[2]) {
            console.log("Let's make a " + pizzaType[2] + " pizza!")
            console.log(veggiePizza.join())
            let userToppings
            let numOfToppings = 3
        while (numOfToppings >= 1) {
            userToppings = rls.question("Enter Veggie Pizza Toppings:\n")
            if(veggiePizza.includes(userToppings)) {
                toppings.push(userToppings)
                numOfToppings--
                console.log("You have " + numOfToppings + " remaining")
            }
            else {
                console.log(userToppings + " is not " + userPizza + " topping!")
            }  
        }
        }
    console.log("You have selected " + toppings.join())
    rls.keyInYN("Will that be all?") ? quitGame() : startGame()
        //lists toppings chosen
        //asks player to restart or end game after each pizza
       }
    startGame()    
