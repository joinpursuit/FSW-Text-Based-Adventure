const readline = require("readline-sync");

let nameInput = readline.question("Enter your name: ");

console.log(`Hello ${nameInput}!  Welcome to my game.`);

const startGame = () => {
    // greet user and ask if they want to get a free car that comes with stimulus check
    console.log("This is the Luxuriy Car simulator where you can create your very own car!")
    console.log("Choose the car of your choice and fill out the customization for your FREE car!")
    if (readline.keyInYN("Would you like a new car?\n")) {
         play ()
    } else {
         leaveGame ()
    }

    }

    startGame()

function leaveGame() {
        console.log("That's a shame...well enjoy walking!")
        process.exit()
    }

function play() {

  let playerCarList = readline.question(
    "Our dealership has the following car brands: Mercedes-Benz , Audi , and BMW. Which would you like? Please enter the car brand of your choice.\n"
  );
  switch (playerCarList) {
    case 'Mercedes-Benz':
    mercedesList();
    break;
   case "BMW":
    bmwList();
    break;
   case "Audi":
    audiList();
    break;
    default:
    playerCarList = readline.question(
      "Our dealership has the following car brands: Mercedes-Benz , Audi , and BMW. Which would you like? Please enter the car brand of your choice.\n"
    );
    
  }

  function mercedesList() {
    console.log(
      "Great choice. You can now choose from our great list of Mercedes-Benz cars. What type of car would you like to choose from? \n"
    );
    mercTypeOfCar = ["SUV", "Coupe", "Sedan"];
    playerCar = readline.keyInSelect(mercTypeOfCar, "Which Type do you want?\n");
    console.log("Great! You chose " + mercTypeOfCar[playerCar]);
    let newCarList = mercTypeOfCar[playerCar];
    if (newCarList === "SUV") {
      console.log("Here are your options from our line of SUVs");
      mercedesSuv = ["GLA SUV", "GLB SUV", "GLC SUV", "GLS SUV"];
      userMercedesSuv = readline.keyInSelect(mercedesSuv, "Pick your SUv!\n");
      console.log("Great! You chose " + mercedesSuv[userMercedesSuv]);
      return mercedesSuv[userMercedesSuv]
    } else if (newCarList === "Coupe") {
      console.log("Here are your options from our line of Coupes");
      mercedesCoupe = [
        "CLA Coupe",
        "C-Class Coupe",
        "E-Class Coupe",
        "CLS-Class Coupe",
      ];
      userMercedesCoupe = readline.keyInSelect(
        mercedesCoupe,
        "Pick your Coupe!\n"
      );
      console.log("Great! You chose " + mercedesCoupe[userMercedesCoupe]);
      return mercedesCoupe[userMercedesCoupe]
    } else if (newCarList === "Sedan") {
      console.log("Here are your options from our line of Sedans");
      mercedesSedan = [
        "A-Class Sedan",
        "C-Class Sedan",
        "E-Class Sedan",
        "S-Class Sedan",
      ];
      userMercedesSedan = readline.keyInSelect(
        mercedesSedan,
        "Pick your Sedan!\n"
      );
      console.log("Great! You chose " + mercedesSedan[userMercedesSedan]);
      return mercedesCoupe[userMercedesCoupe]
    } else {
      mercedesList();
    }
  }
  
    
  


  function bmwList() {
    console.log(
      "Great choice. You can now choose from our great list of BMW cars. What type of car would you like to choose from? \n"
    );
    typeOfCar = ["SUV", "Coupe", "Sedan"];
    playerCar = readline.keyInSelect(typeOfCar, "Which Type do you want?\n");
    console.log("Great! You chose " + typeOfCar[playerCar]);
    let newCarList = typeOfCar[playerCar];
    if (newCarList === "SUV") {
      console.log("Here are your options from our line of SUVs");
      bmwSuv = ["X1", "X5", "X6", "X7"];
      userBmwSuv = readline.keyInSelect(bmwSuv, "Pick your SUV!\n");
      
      console.log("Great! You chose " + bmwSuv[userBmwSuv]);
      return bmwSuv[userBmwSuv]
    } else if (newCarList === "Coupe") {
      console.log("Here are your options from our line of Coupes");
      bmwCoupe = ["2 Series", "4 Series", "8 series"];
      userBmwCoupe = readline.keyInSelect(bmwCoupe, "Pick your Coupe!\n");
      
      console.log("Great! You chose " + bmwCoupe[userBmwCoupe]);
      return bmwCoupe[userBmwCoupe]
    } else if (newCarList === "Sedan") {
      console.log("Here are your options from our line of Sedans");
      bmwSedan = ["3 Series", "5 series", "7 Series"];
      userBmwSedan = readline.keyInSelect(bmwSedan, "Pick your Sedan!\n");
      
      console.log("Great! You chose " + bmwSedan[userBmwSedan]);
      return bmwSedan[userBmwSedan]
    } else {
      bmwList();
    }
  }
  
    
  

  function audiList() {
    console.log(
      "Great choice. You can now choose from our great list of Audi cars. What type of car would you like to choose from? \n"
    );
    typeOfCar = ["SUV", "Coupe", "Sedan"];
    playerCar = readline.keyInSelect(typeOfCar, "Which Type do you want?\n");
    
    console.log("Great! You chose " + typeOfCar[playerCar]);
    let newCarList = typeOfCar[playerCar];
    if (newCarList === "SUV") {
      console.log("Here are your options from our line of SUVs");
      audiSuv = ["Q3", "Q5", "Q7"];
      userAudiSuv = readline.keyInSelect(audiSuv, "Pick your SUV!\n");
      console.log("Great! You chose " + audiSuv[userAudiSuv]);
      return audiSuv[userAudiSuv]
    } else if (newCarList === "Coupe") {
      console.log("Here are your options from our line of Coupes");
      audiCoupe = ["A5", "S5", "TTS", "R8"];
      userAudiCoupe = readline.keyInSelect(audiCoupe, "Pick your Coupe!\n");
      console.log("Great! You chose " + audiCoupe[userAudiCoupe]);
      return audiCoupe[userAudiCoupe]
    } else if (newCarList === "Sedan") {
      console.log("Here are your options from our line of Sedans");
      audiSedan = ["A3", "A4", "A6"];
      userAudiSedan = readline.keyInSelect(audiSedan, "Pick your Sedan!\n");
      console.log("Great! You chose " + audiSedan[userAudiSedan]);
      return audiSedan[userAudiSedan]
    } else {
      audiList();
    }
  }
  
   
  

  function wheelDrive() {
    console.log(
      "Chose the configuration of your " +
        playerCarList +
        ". Remember we live in New York!"
    );
    carConfig = ["RWD", "AWD"];
    userCarConfig = readline.keyInSelect(
      carConfig,
      "What wheel drive do you want?\n"
    );
    console.log("You chose " + carConfig[userCarConfig]);
    return carConfig[userCarConfig]
  }
  wheelDrive();

  
  function driverTransmission() {
    console.log(
      "Would you like your car to be manual or automatic? Fun fact: IF you can drive manual you will save money on gas."
    );
    carDriveType = ["Manual", "Automatic"];
    userDriveType = readline.keyInSelect(
      carDriveType,
      "What configuration do you want?\n"
    );
    console.log("You chose " + carDriveType[userDriveType]);
    return carDriveType[userDriveType]
  }
  driverTransmission();

  
  function carColor() {
    console.log('We have a large variety of colors for your car. Please choose from the list below:')
    carColors = ['White', 'Silver', 'Black', 'Dark Blue', 'Dark Grey', 'Red', 'Dark Green', 'Light Brown']
    userCarColor = readline.keyInSelect(carColors, "What color would you like?\n")
    console.log("You have a " + carColors[userCarColor] + " " + playerCarList)
    return carColors[userCarColor]
  }
  carColor()


function carLicense(){
    console.log("At no charge you can make your own license plate. You must enter 1-7 characters.")
    let userLicense = readline.question('Pease enter custom license:\n')
    if (userLicense.length > 0 && userLicense.length <= 7) {
        console.log('Your license plate reads: ' + userLicense)
        return userLicense
    } else  {
        console.log('Invalid license plate.')
        carLicense()
    }

}
    carLicense()


function carHeadlights(){
  console.log('Here is a list of our high-end headlights.')
  headlightsInCar = ['LED headlights', 'Xenon headlights', 'Super blue halogen']
  userHeadlight = readline.keyInSelect(headlightsInCar, 'Please choose you headlights.')
  console.log('You have ' + headlightsInCar[userHeadlight])
  return headlightsInCar[userHeadlight]
}
carHeadlights()

function carInterior(){
    console.log("Because we specialize in luxury cars all our interior designs are based on high quality leather.")
    carIntDesign = ['Black', 'Pale', 'Grey-Tan', 'Black-Grey', 'White-Beige', 'Black-Red', 'Black-Silver']
    userIntColor = readline.keyInSelect(carIntDesign, 'Please choose your interior design')
    console.log('Your ' + playerCarList + ' will have a ' + carIntDesign[userIntColor] + ' interior')
    return carIntDesign[userIntColor]
}
carInterior()

function windowTint(){

    // carTint = ['Yes, I would like to tint my car?', 'No, I would prefer not to']
    //  userTint = readline.keyInSelect(carTint, "would you like to tint your windows?")
    //  let windowTint = carTint[userTint]
    // if (windowTint === 'Yes, I would like to tint my car?') {
        if (readline.keyInYN('Would you like to tint your car windows?')) {
        tintPercent = ['50 % tint', '35 % tint', '20 % tint', '5 % tint']
        userTintPercent =readline.keyInSelect(tintPercent, 'What percentage of tinting would you like?\n ')
        if (tintPercent[userTintPercent] === '50 % tint') {
            console.log('Be careful, police may pull you over regarding your tinted window. Thankfully 50 % is still leagal.')
            return tintPercent[userTintPercent]
        } else if (tintPercent[userTintPercent]=== '35 % tint') {
            console.log('Enjoy your tinted windows')
            return tintPercent[userTintPercent]
        } else if (tintPercent[userTintPercent] === '20 % tint') {
            console.log('Enjoy your tinted windows')
            return tintPercent[userTintPercent]
        } else if (tintPercent[userTintPercent] === '5 % tint') {
            console.log('Enjoy your tinted windows')
            return tintPercent[userTintPercent]
        } 
        // else {
        //   windowTint() 
      }
    } else {
      return 'Enjoy your ' + playerCarList + ' without tinted windows' 
    }
} 

windowTint()


    // windowTint()

// function whichCar() {
//   //write for loop that calls the car brand and correct car type and model then runs the carReceipt function
//   if ((playerCarList === "Mercedes-Benz") && (newCarList === "SUV")) {
//     return mercedesSuv[userMercedesSuv]
//   }
// }
function receiptBrand(){
  let yourBenz = mercedesList()
  let yourBmw = bmwList()
  let yourAudi = audiList()
  if (playerCarList === 'Mercedes-Benz') {
      return 'Mercedes-Benz Model: ' + yourBenz + '\n'
    } else if (playerCarList === 'BMW') {
      return 'BMW Model: ' + yourBmw + '\n'
    } else if (playerCarList === 'Audi') {
      return 'Audi Model: ' + yourAudi + '\n'
    } else {
      console.log('N/A')
    }
}
  


function carReceipt() {
  // let finalCar = receiptBrand()
  // let yourWindow = windowTint()
    //write a loop that calls or returns the right value from wach function
    // let yourLicense = userLicense
    console.log('Here is your order summary:\n')
    console.log('Brand: ' + playerCarList + '\n')
    // console.log('Model: ' + finalCar + '\n')
    console.log('Wheel Drive: ' + carConfig[userCarConfig] + ' \n')
    console.log('Transmission: ' + carDriveType[userDriveType] + ' \n')
    console.log('Color: ' + carColors[userCarColor] + '\n')
    // console.log(`Custom License Plate:  ${yourLicense} `)
    console.log('Headlights: ' + headlightsInCar[userHeadlight] + '\n')
    console.log('Interior Color: ' + carIntDesign[userIntColor] + ' \n')
    console.log(helperWindow())
    function helperWindow(){
    if (tintPercent[userTintPercent] === 'Enjoy your ' + playerCarList + ' without tinted windows') {
        return 'Tint Percentage: N/A'
    } else {
        
        return 'Car Tint Percent: ' + tintPercent[userTintPercent] + ' \n'
    }

  }

  }
carReceipt()

if (readline.keyInYN('Congradulations on your new car!!! Would you like to play again?')) {
  play()
} else {
  console.log('Bye!!!')
  leaveGame()
}

}


play();

