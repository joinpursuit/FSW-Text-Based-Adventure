const rls = require("readline-sync");

const startGame = () => {
	// welcomes user
	const name = rls.question(`Welcome, please enter your name:\n`);
	console.log(`Hello ${name}`);

	const ask = rls.keyInYN("Do you want to play?\n");
	if (ask == true) {
		console.log("Let's Go!\n");
		playGame();
	} else {
		exitGame();
	}
};

const playAgain = () => {
	let restart = rls.keyInYN("Do you want to play again?");
	if (restart) {
		playGame();
	} else {
		exitGame();
	}
};

const exitGame = () => {
	console.log(`See you next time.`);
	process.exit();
};

const playGame = () => {
	console.log("Niko Tyson wakes up at 7am everyday");
	console.log("This gives him enough time to go to Daily Dose Diner");
	console.log("and get his morning cup of coffee.");
	console.log("Today his alarm didn't go off and he's running late to work.\n");

	let stops;
	let flag = false;
	while (flag === false) {
		stops = rls.question(
			"What do you do?\nChoices:[walk-in, drive-thru, skip coffee]\n"
		);
		if (stops.toLowerCase() === "walk-in") {
			console.log("");
			console.log(
				"Dan works the register at Daily Dose Diner, He ask Niko which brew he'd like.."
			);
			flag = true;
			stageCoffee();
		} else if (stops.toLowerCase() === "drive-thru") {
			console.log("");
			console.log("Sarah is the new employee and is working at the window");
			console.log("She always ge Niko's order wrong...");
			console.log("So he settles for a toasted crossiant and an orange juice.");
			console.log(
				"Niko forgets to check his order at drive-thru and when he does.."
			);
			console.log(
				"he realizes that Sarah gave him the wrong order....again!\n"
			);
			stageDriveThru();
			flag = true;
		} else if (stops.toLowerCase() === "skip coffee") {
			console.log("");
			console.log("Coffee is always a good idea");
			playAgain();
		} else {
			console.log("huh?");
			flag = false;
		}
	}
};

const stageCoffee = () => {
	let newCoffee;
	let flag = true;
	while (flag === true) {
		newCoffee = rls.question(
			"Good Morning Niko, Would you like?\nChoices:[regular coffee or our new aeroxpress 5k]\n"
		);
		if (newCoffee.toLowerCase() === "our new aeroxpress 5k") {
			console.log("Great!");
			let sugarCount = rls.question(
				"How many sugars would you like?\nChoices:[1 or 2]\n"
			);
			if (sugarCount.toLowerCase() === "1") {
				console.log("You get your coffee and sip it on your way to the car");
				console.log(
					"as you get ready to drive off and put your hands on the steering wheel"
				);
				console.log("you notice your hands have aged.\n");
				flag = false;
				stageGoBack();
			} else if (sugarCount.toLowerCase() === "2") {
				console.log("");
				console.log("You get your coffee and head to your car in a rush");
				console.log(
					"while driving and sipping on your coffee, you approach a stop sign.."
				);
				console.log(
					"you look around and notice a guy chasing after his dog but they look like statues"
				);
				console.log("and you see a little boy about to drop his ice cream");
				console.log("but the ice cream seems to be suspended in the air\n");
				flag = false;
				stageStopSign();
			}
		} else if (newCoffee.toLowerCase() === "regular coffee") {
			console.log("");
			console.log("You get your regular coffee and head to work");
			console.log("as you arrive at the parking lot you're 5 mins early");
			console.log(
				"and decided to take a quick nap because the coffee wasn't strong"
			);
			console.log(
				"enough to keep you awake...the nap turned into a deep sleep"
			);
			console.log(
				"Niko woke up 7hrs later...to his boss knocking on his car window."
			);
			console.log("That was Niko's last day at work.");
			console.log("Niko should've got the aeroxpress 5k\n");
			flag = false;
			playAgain();
		} else {
			console.log("huh?");
			flag = true;
		}
	}
};

const stageDriveThru = () => {
	let flag = true;
	while (flag === true) {
		let wrongOrder = rls.question(
			"Choices:[go back to drive-thru or keep driving to work]\n"
		);
		if (wrongOrder.toLowerCase() === "go back to drive-thru") {
			console.log("");
			console.log("Niko arrives at the drive-thru and explains to Sarah");
			console.log("how she gave him the wrong order..");
			console.log("Sarah apologizes and gives him the right order");
			console.log("and a $5 gift card for her mistake");
			console.log(
				"Now Niko is back on his way to work but traffic starts building up"
			);
			console.log("moments later a guy pulls up next to him on a bike...");
			console.log("Niko wonders what if he could park his car and trade");
			console.log("his breakfast and giftcard for the bike..\n");
			flag = false;
			stageTradeAll();
		} else if (wrongOrder.toLowerCase() === "keep driving to work") {
			console.log("");
			console.log("Niko made it to work on time but was grumpy all morning.");
			console.log("Niko should've went for his coffee\n");
			flag = false;
			playAgain();
		} else {
			console.log("huh?");
			flag = true;
		}
	}
};

const stageGoBack = () => {
	let flag = true;
	while (flag === true) {
		let diner = rls.question("Choices:[go back to diner or drive to work]\n");
		if (diner.toLowerCase() === "go back to diner") {
			console.log("");
			console.log("You enter the Diner and look for Dan desperately");
			console.log("When you finally find him, you ask him");
			console.log("What did he put in the coffee?");
			console.log("having a hard time recognizing you, he realizes,");
			console.log("that he confused the sugar with aging powder");
			console.log("and doesn't know how to reverse it..");
			console.log("Niko didn't make it to see another day..");
			console.log("Can you help Niko stay alive?");
			console.log("");
			flag = false;
			playAgain();
		} else if (diner.toLowerCase() === "drive to work") {
			console.log("");
			console.log("Niko aged in the car and couldn't make it to work");
			console.log("Niko should've went for 2 sugars\n");
			flag = false;
			playAgain();
		} else {
			console.log("huh?");
			flag = true;
		}
	}
};

const stageStopSign = () => {
	let flag = true;
	while (flag === true) {
		let stopSign = rls.question(
			"What do you do?\nChoices:[get out the car or keep driving to work]\n"
		);
		if (stopSign === "get out the car") {
			console.log("");
			console.log(
				"Niko grabs his coffee, gets out the car and starts walking around"
			);
			console.log("looking for answers.");
			console.log("He see's an elf repairing the town clock\n");
			flag = false;
			stageAsk();
		} else if (stopSign === "keep driving to work") {
			console.log("");
			console.log(
				"Niko finally got to work as he reaches for the door handle to"
			);
			console.log("walk in the building his muscles started getting tense");
			console.log(
				"when he couldn't take another step he realized he was stuck in time like everything around him..."
			);
			console.log("Can you help Niko unfreeze time?\n");
			flag = false;
			playAgain();
		} else {
			console.log("huh?");
			flag = true;
		}
	}
};

const stageAsk = () => {
	let flag = true;
	while (flag === true) {
		let randElf = rls.question(
			"What do you?\nChoice:[speak to elf or go back to car]\n"
		);
		if (randElf.toLowerCase() === "speak to elf") {
			console.log("");
			console.log(
				"Niko approaches the elf and ask: do you know whats going on?"
			);
			console.log("nothing seems to be moving.");
			console.log(
				"The elf replies: I don't know I've been trying to fix this clock all morning."
			);
			console.log(
				"If you help me fix it, I can help you figure out what's going on.\n"
			);
			flag = false;
			stageFixClock();
		} else if (randElf.toLowerCase() === "go back to car") {
			console.log("");
			console.log(
				"Niko finally got to work as he reaches for the door handle to"
			);
			console.log("walk in the building his muscles started getting tense");
			console.log(
				"when he couldn't take another step he realized he was stuck in time like everything around him..."
			);
			console.log("Help Niko unfreeze time...\n");
			flag = false;
			playAgain();
		} else {
			console.log("huh?");
			flag = true;
		}
	}
};

const stageFixClock = () => {
	let flag = true;
	while (flag === true) {
		let fix = rls.question(
			"What do you do?\nChoices:[help elf or go back to car]\n"
		);
		if (fix.toLowerCase() === "help elf") {
			console.log("");
			console.log(
				"Niko helps the elf fix the clock, noticing he's holding a cup the elf asked :"
			);
			console.log("What are you drinking?");
			console.log(
				"confused about everything, he says he stopped at DDD and got the aeroxpress 5k."
			);
			console.log(
				"The elf tells Niko that the coffee beans that are being used to make that coffee is causing"
			);
			console.log(
				"time to freeze, while giving a piece of paper with instructions he tells him"
			);
			console.log("he must go to DDD and get all the coffee beans\n");
			flag = false;
			getRidOfBeans();
		} else if (fix === "go back to car") {
			console.log("");
			console.log(
				"Niko finally got to work as he reaches for the door handle to"
			);
			console.log("walk in the building his muscles started getting tense");
			console.log(
				"when he couldn't take another step he realized he was stuck in time like everything around him..."
			);
			console.log("Can you help Niko unfreeze time?\n");
			flag = false;
			playAgain();
		} else {
			console.log("huh?");
			flag = true;
		}
	}
};

const stageTradeAll = () => {
	let flag = true;
	while (flag === true) {
		let trade = rls.question(
			"What do you do?\nChoices:[trade breakfast combo or stay in traffic]\n"
		);
		if (trade.toLowerCase() === "trade breakfast combo") {
			console.log("");
			console.log(
				"The guy on the bike was hungry so he made the trade with Niko.."
			);
			console.log("Niko parked his car and swerved thru traffic");
			console.log("on the bike, one light away from his job site...");
			console.log(
				"Niko gets hit by a car and with major injuries and was taken to the hospital\n"
			);
			console.log("Can you help Niko get to work w/o getting hit?");
			flag = false;
			playAgain();
		} else if (trade.toLowerCase() === "stay in traffic") {
			console.log("");
			console.log("While in traffic Niko debated whether to call his boss");
			console.log("and let him know he was running late...");
			console.log("but wasn't sure how his boss would take it...\n");
			flag = false;
			stagePhoneCall();
		} else {
			console.log("huh?");
			flag = true;
		}
	}
};

const stagePhoneCall = () => {
	let flag = true;
	while (flag === true) {
		let phoneCall = rls.question(
			"What do you do?\nChoices:[call boss or don't call]\n"
		);
		if (phoneCall.toLowerCase() === "call boss") {
			console.log("");
			console.log("Niko called his boss and explained");
			console.log(
				"that he was running late due to his alarm and him wanting to stop by Daily Dose Diner"
			);
			console.log(
				"His boss tells him that it's okay as long as he brings everyone breakfast"
			);
			console.log("or he would document his lateness....");
			console.log("Niko wasn't too happy about this deal");
			console.log("so he settled for the write up");
			console.log("Niko regretted calling his boss");
			console.log("Can you help Niko get to work on time?");
			console.log("");
			flag = false;
			playAgain();
		} else if (phoneCall.toLowerCase() === "don't call") {
			console.log("");
			console.log("15 mins later Niko recieves a call from his boss");
			console.log(
				"Niko explains his situation but his boss is not too happy about it"
			);
			console.log(
				"he tells Niko that unfortunately he will have to write him up."
			);
			console.log("Niko should've made that phone call..\n");
			flag = false;
			playAgain();
		} else {
			console.log("huh?");
			flag = true;
		}
	}
};

const getRidOfBeans = () => {
	let flag = true;
	while (flag === true) {
		let readInstructions = rls.question(
			"Read instructions?\nChoices:[yes or no]\n"
		);
		if (readInstructions.toLowerCase() === "yes") {
			console.log("");
			console.log(
				"Go back to Diner's Drive-Thru make sure Sarah is at the window"
			);
			console.log(
				"ask for a regular coffee, no milk, 3 sugars and make sure she doesn't stir it"
			);
			console.log(
				"This will confuse her and make her give you all the aeroxpress coffee beans inside 3 paper bags"
			);
			console.log("Take them home, grind them and bring them back to me\n");
			flag = false;
			followElfInstructions();
		} else if (readInstructions.toLowerCase() === "no") {
			console.log("");
			console.log(
				"Niko didn't follow the instructions and froze in time with everyone around him"
			);
			console.log("Can you help Niko unfreeze time?\n");
			flag = false;
			playAgain();
		} else {
			console.log("huh?");
			flag = true;
		}
	}
};

const followElfInstructions = () => {
	let flag = true;
	while (flag === true) {
		let listenToElf = rls.question(
			"What do you do?\nChoices:[follow instructions or go back to car]\n"
		);
		if (listenToElf.toLowerCase() === "follow instructions") {
			console.log("");
			console.log(
				"Niko followed the elf's instructions, after he grinded all the beans,"
			);
			console.log(
				"he curious as to what would happen if he didn't return ground coffee to the elf.\n"
			);
			flag = false;
			keepOrToss();
		} else if (listenToElf.toLowerCase() === "go back to car") {
			console.log("");
			console.log(
				"Niko finally got to work, as he reaches for the door handle to"
			);
			console.log("walk in the building his muscles started getting tense");
			console.log(
				"when he couldn't take another step he realized he was stuck in time like everything around him..."
			);
			console.log("Can you help Niko unfreeze time?\n");
			flag = false;
			playAgain();
		} else {
			console.log("huh?");
			flag = true;
		}
	}
};

const keepOrToss = () => {
	let flag = true;
	while (flag === true) {
		let final = rls.question(
			"What do you do?\nChoices:[return ground coffee or keep the coffee]\n"
		);
		if (final.toLowerCase() === "return ground coffee") {
			console.log("");
			console.log("Niko Tyson wakes up at 7am everyday");
			console.log("This gives him enough time to go to Daily Dose Diner");
			console.log("and get his morning cup of coffee.");
			console.log(
				"Today his alarm didn't go off and he's running late to work.\n"
			);
			console.log("What did you do?");
			console.log("");
			flag = false;
			playAgain();
		} else if (final.toLowerCase() === "keep the coffee") {
			console.log("");
			console.log(
				"Niko kept the coffee to himself and cause an anomaly which lead him to be stuck in a timeloop"
			);
			console.log("where he kept going thru the Diner's drive-thru");
			console.log("Can you help Niko get out the timeloop?\n");
			flag = false;
			playAgain();
		} else {
			console.log("huh?");
			flag = true;
		}
	}
};

startGame();
playGame();
