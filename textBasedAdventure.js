const readLine = require('readline-sync')


let nameInput = readLine.question("To enter a sweepstakes for a 7 day trip to Morocco, please enter your name: ");

console.log(`CONGRATULATIONS ${nameInput}!  YOU HAVE WON THE SWEEPSTAKES!!!`);

const beginVacay = () => {
    console.log("You have been gifted a special vacation package to the Kingdom of Morocco!") 
    console.log("If you have never been to Morocco, have no fear, i will be your tour guide! I have curated a special trip just for you and i believe you'll have a great time and learn a lot about the culture! \n");
    console.log("NOTE: Due to the restriction of time, you will find that in many cases you will only have the opportunity to experience two attractions at most in most cities if we are to hit all the major cities. But no worries, the choices will be all yours and I promise you'll have a great time!")
    if(readLine.keyInYN("Do you want to claim your vacation prize?")) {
        startVacay();
    }else {
        abortVacay();
    }
}

const abortVacay = () => {
    console.log("How could you possibly deny a free trip to Morocco!? Welp, guess someone else will take advantage. Have a good day! \n")
    process.exit();
}

const startVacay = () => {
    console.log("Morocco is a land of contrasts; Where Africa meets Europe and the Middle East adds its own flavor. Considered a moderate Islamic state, Morocco opens its doors to everyone regardless of ethnicity, religion or political status. From ancient philosophers to scholars, Morocco has hosted many! If you´re looking for a colorful and diverse experience, you made a great choice in accepting your trip! From the wild markets of Marrakech to the snowy peaks of the Atlas, the silence of the Sahara and pristine beaches of the Atlantic, Morocco is simply amazing. Our journey will combines the best of everything – cities, villages, mountains, desert, music, food, shops and the coast. Expect plenty of interaction with the friendly Berber tribes (people of North Africa). Experience their unique drumming, practice the language and taste the delicious food. We´ll fill your week with a lifetime of memories and educational experiences that are second to none! \n");
    console.log("After a 7 hour flight from NYC, you finally arrive at Morocco's international airport in Casablanca early afternoon.");
    console.log("I am already there waiting for you at the exit and drive you to your hotel in the heart of Casablanca.");
    console.log("I see that you have been yawning the entire way to the hotel but you are also very excited to begin your journey!");
    console.log("Do you want to explore Casablanca for the rest of the day or would prefer to get some rest and hope to explore Casablanca another day if time permits?")
    travChoiceOne();
}

const travChoiceOne = () => {
    let answ 
    answ = readLine.question("Explore Casa? or Rest? \n");
    if(answ === "Explore Casa") {
        exploreCasa();
    }else if (answ === "Rest") {
        console.log("Great idea. Get some rest. We have a big day ahead of us tomorrow and you'll need your energy.. we'll be traveling to the city of Essaouira first thing tomorrow morning!")
        exploreEssaouira();
    }   if (answ !== "Explore Casa" && answ !== "Rest"){
        console.log("NOT A VALID ANSWER! TIME IS PRECIOUS!")
        travChoiceOne()
        }
}




const exploreCasa = () => {
    console.log("Casablanca is the main gateway to Morocco and most visitors first taste of the country. The bustling city is Morocco's business powerhouse and industrial center, with a modern swagger that is unseen in other parts of the country. Needless to say, compared to the exotic charms of Marrakesh and Fes, it can't compete, and most visitors only pass through. Despite the fact that Casablanca's tourist attractions and sights may be few, you will find some gems if you delve a little deeper. The big sight is the massive Hassan II Mosque, and a tour of the building is worth an overnight stay in town. \n");
    if(readLine.keyInYN("So what do you say we take a tour at one of the finest things Casablanca has to offer? \n")) {
        hassanMosque()
    }else {
        console.log("No worries, we'll have many things to see in other cities. Get some rest. \n")
        exploreEssaouira()
    }
}

const hassanMosque = () => {
    console.log("It took over seven years and 10,000 craftsman to construct the Hassan II Mosque, but the result is a modern and massive tribute to the former King of Morocco that beautifully blends traditional Moorish architecture with 20th century innovation and equipment. Although it is only the 7th largest mosque in the world, Hassan II claims the title of having the largest minaret in the world. Capped with a spotlight that shines east towards Mecca, the minaret is 700-feet tall, towering above the Atlantic Ocean. Almost lighthouse-like in its position, it is also built directly on the Atlantic Ocean on reclaimed land, which was done with intention by the architect to recall a verse of the Qur’an stating that “the throne of Allah was built on water. The final construction took 2,500 men working around the clock. Besides the mosque’s intricate beauty and incredible size, it was also built with modern concerns in mind. The mosque can withstand earthquakes and also features a sliding roof and a heated floor. \n");
    console.log("After traveling through the Medina of Casablanca and touring the great Mosque, it's starts to get late and it's time to head back to the hotel to get some rest for our big day tomorrow. \n")
    exploreEssaouira();
}

const exploreEssaouira = () => {
    console.log("Good morning! I hope you slept well and are ready for our first road trip! Today we hit 'The Wind City of Africa' Essaouira! \n");
    console.log("Essaouira is an exceptional example of a late-18th-century fortified town, built according to the principles of contemporary European military architecture in a North African context. Perched on Morocco’s Atlantic coast, Essaouira is a cross between North Africa and the Mediterranean. Surrounded by golden-stone city walls, it mixes bright blues and dazzling whitewash with flowing djellabas (Loose hooded cloak, traditionally worn by Arabs) and the smell of spices. Influences from the Arabs, Africans, Romans and French all blend together to create a mellow, relaxed beach town. \n");
    console.log("Add in 300 days of sunshine and constant warm but not baking hot temperatures, and you’ve got the perfect short break destination. Although Essaouira hasn’t got much in the way of must-see sights, it’s an easy place to spend a relaxed day or two, so here are my favorite things to do in Essaouira...")
    console.log("NOTE: Due to time restrictions, We'll only have time for one activity. We want to leave half a day to explore the inner city!")
    let attractions = ["Surfing", "ATV", "Horse Riding"];
    console.log(`What would you like to do first ${nameInput} ?`);
    answ = readLine.keyInSelect(attractions)
    choices = attractions[answ]
    if(choices === attractions[0]) {
        goSurfing();
    }else if(choices === attractions[1]) {
        goATV();
    }else if(choices === attractions[2]) {
        goHorseRiding();
    }
}

const goSurfing = () => {
    console.log(`Great idea ${nameInput}! Looks like you love the water.. I do too!`);
    console.log(`Essaouira is known for its year-round winds, hence its nickname, which attracts many surfers from all over the world.`);
    goCityTour();
}

const goATV = () => {
    console.log(`Great pick ${nameInput}! Who doesn't love a thrill ride on some ATV's! We'll ride up and down the steep dunes and hit high speeds along the beach! Make sure you have a cloth covering the lower part of your face as the high winds give you a nice sand blasting.`);
    goCityTour();
}
const goHorseRiding = () => {
    console.log(`Animal Lover! I love horseback riding too! Now let's enjoy a nice long stroll along the coast and take in the nice warm sun. Make sure you have a cloth covering the lower part of your face as the high winds give you a nice sand blasting.`);
    goCityTour();
}
const goCityTour = () => {
    if(readLine.keyInYN("Did you have a fun during your first actvity in Essaouira?")){
        console.log("I'm glad to hear that! There will be plenty of other activities for us to do later on! Now lets go hit the city to get a bite to eat and maybe do some shopping! \n");
    }else {
        console.log("I'm sorry you didn't enjoy your activity. I'm sure we can make up for it in the coming days! There is plenty for us to do! Hopefully you'll have a better experience touring the city! \n");
    }
    console.log(`Welcome to the inner city of Essaouira. This is a great place to practice your bargaining skills here in Morocco, we'll travel through the many beautifully colored souks that sell fresh meat, fish and piles of aromatic spices. There are also souks for hand-made jewellery or made-to-measure tailoring. You can also search for treasures at the flea market in La Joutia square. Elsewhere in the medina you can pick up gifts like local artworks, argan oil from the cooperatives around town, silver ornaments from the Jewish silversmiths, ornate marquetry boxes and furniture carved from thuya wood, and the mysterious lotions and potions concocted by the Berber pharmacists. \n`);
    console.log("You're walking around the city and you find that you want to buy everything that catches your eye! I implore you to hold on to your wallet as you will have a much wider and better selection of goods in Marrakech, which will be our next destination. \n") 
    console.log("All the walking has made you hungry. We approach two restaurants adjascent from eachother; One servers freshly caught fish from the sea just a few meters away; The other servers the best Tagin (Traditional Moroccan food made in a cone shaped clay vessel) in Essaouira.");
    console.log("Suggestion: Go for the fish! The people of Essaouira have mastered the culunary arts of seasoning and cooking fish!")
    travChoiceTwo();
}

const travChoiceTwo = () => {
    let answ 
    answ = readLine.question("Fish or Tagine? \n");
    if(answ === "Fish") {
        console.log(`Great pick ${nameInput}! I was thinking the same thing. We'll have plenty of opportunities to have Tagine in other cities!`);
        essHotel();
    }else if (answ === "Tagine") {
        console.log(`Not big on fish I see. No worries, you'll love the Tagine!`);
        essHotel();
        }if (answ !== "Fish" && answ !== "Tagine"){
            console.log("SORRY THATS NOT ON THE MENU!")
            travChoiceTwo()
            }
}

const essHotel = () => {
    console.log("\n");
    console.log("After a fun day and a lovely dinner in Essaouira, it's time we head back to the hotel for some well needed rest. We'll have to be up early and full of energy if we are to experience one of my all time favorite cities in Morocco! \n")
    exploreMarrakech();
}


const exploreMarrakech = () => {
    
    console.log(`Rise and Shine ${nameInput}. It's time we hit the road to the famous city of Marrakech! \n`);
    console.log("After a few hours on the road, we finally arrive in Marrakech! \n")
    console.log("Colorful souks, Moorish architecture, intimate gardens and boutique hotels--Marrakesh is unforgettable. For the organized, logical traveler, Marrakech may seem like a nightmare. Its labyrinth of twisty alleyways are almost impossible to navigate, not that its array of snake charmers, fortune tellers and spice sellers will let you go anywhere fast. The problem here isn't the city: It's your state-of-mind. Leave your structured daily routine behind and let the flow of Marrakech draw you deeper into its colorful chaos. \n");
    console.log("Marrakech also has a reputation of being one of the hotest cities in Morocco, so the souks and shops don't usually open untill later in the afternoon. So as promised we'll reserve the entire second half of the day for you to go shopping! \n");
    console.log("In the meantime, there are two major activities to choose from in Marrakech that I highly recommend!");
    console.log("We can have the ultimate experience of a lifetime going on a Hot Air Balloon or Visiting the beautiful Ourika Valley!");
    travChoiceThree();
}

const travChoiceThree = () => {
    console.log("Suggestion: I can count on one hand experiences that are as amazing as flying on a Hot Air Balloon!")
    let answ 
    answ = readLine.question("Balloon or Ourika? \n");
    if(answ === "Balloon") {
        console.log(`MAN ARE YOU IN FOR AN EXPERIENCE ${nameInput}!`);
        hotAirBalloon();
    }else if (answ === "Ourika") {
        console.log(`You must be afraid of heights! No worries, Ourika is an incredible place and you're going to love it!`);
        ourikaValley();
        }if (answ !== "Balloon" && answ !== "Ourika"){
            console.log("NOT A VALID ANSWER!")
            travChoiceThree()
            }
}


const hotAirBalloon = () => {
    console.log("\n");
    console.log("We drive to the HAB site to buy tickets. There we are greeted by the pilot and other travelers who will be going on this journey with us. Before our flight we are given a complimentary traditional Berber brekfast under a Moroccan styled tent!");
    console.log("As we're eating the pilot and his team are firing up the balloon for take off!");
    console.log("After about 30 minutes, the balloon is ready and we are allowed to board the balloon. Momements later we are off the ground and lifting away into the dry hot Marrakech air!");
    console.log("We watch the sun rise over red dust, palm groves, and majestic open landscapes.. the views are breathtaking and you find yourself never wanting to come back down to earth. Up in the sky you're worry free! \n");
    console.log("Over an hour passes by and unfortunately its time we start our descent. \n");
    console.log("I have done this activity a few times.. and each time is more incredible than the last!");
    fnaaMarket();
}


const ourikaValley = () => {
    console.log("\n")
    console.log("A lush expanse of terraced fields, forested hillsides, and cascading waterfalls in the foothills of the High Atlas Mountains, the Ourika Valley is a natural oasis just an hour from the city of Marrakech. Temperatures are cooler in the shadow of snowcapped High Atlas peaks, and this blooming valley is the city’s escape hatch from the soaring summer heat. The valley is especially mood-altering from February to April, when almond and cherry orchards bloom manically and wildflowers run riot. \n");
    console.log("After a short drive to this blooming valley, you'll immedietly notice makeshift cafes and BBQ joints line the riverside strung together by flimsy rope bridges that allow day-trippers to cross the river. You'll spot many of the locals sitting in their colorful plastic chairs ankle deep in the shallow river that flows down the entire valley. \n");
    console.log("After a long walk up stream soaking in the incredible vibe, its time we hit one of the countless shops that serve up; in my opinion; the best Tagine in Morocco! Yes, I know that is a bold statement, but of course to each their own opinion.");
    travChoiceFour();
}

const travChoiceFour = () => {
    console.log("\n");
    console.log("It can be a headache to make a decision as to which riverside restaurant you want to eat at, but I can assure you that one restuarant is just as good as the next.");
    console.log("We finally pick a place and take our seats.. our table just inches from the flowing river. You'll notice there are no menus at the table.. this is because every restaurant servers pretty much the exact same meals.. Tagine with potatoes that literally melt in your mouth and your choice of meat or veggies. The waiter arrives moments later and asks for your order..")
    let foods = ["Tagine W/ Chicken", "Tagine W/ Lamb", "Tagine W/ Beef", "Tagine W/ Veggies"];
    answ = readLine.keyInSelect(foods);
    choices = foods[answ];
    if (choices === foods[0]) {
        console.log("Great choice.. I love me some chicken in my Tagine.. I'll have that as well!");
    }else if(choices === foods[1]) {
        console.log("Lamb is a Moroccan speciality, I am a rare breed that never aquired the taste of lamb... I'll have the Tagine W/ Chicken.");
    }else if(choices === foods[2]) {
        console.log("Yummm... im caught between chicken or beef.. but i think I'll settle for the chicken today!");
    }else if(choices === foods[3]) {
        console.log("Yumm.. can't ever go wrong with straight veggies in Tagine!");
    }
    fnaaMarket();
}

const fnaaMarket = () => {
    console.log("\n");
    console.log("It's already late into the afternoon and we have experienced the beauty and calm that Ourika resonates! Its time to head back to Marrakech and experience the craziness of Jemaa el-Fnaa!")
    console.log("After a short drive we finally arrive to the bustling heart of the city. Once the sun sets, Jemaa el-Fna really comes alive. Restaurants around the square start serving hungry customers as they stroll around the plaza. Berber musicians and Gnaoua dancers begin their nightly performances, acrobats and slapstick comedians start performing all across the square, and henna tattoo artists vie for customers as storytellers, and poets pass on the oral traditions of Morocco. \n");
    console.log("Remember when I told you you'd have an opportunity to practice your bargaining skills in Essaouira... well.. its time to put those skills to the test!");
    console.log("As you enter the Market to begin the intest experience you are immediately bombarded by the first wave of shop owners pressuring you to buy their products... you'll find yourself saying 'No Thank You!' about a million times. Jemaa el-Fnaa is not for the faint hearted! Some shoppers love the experience and haggle back and forth with owners to get the price they want.. its a sport for many. Others can feel extremely intimidated and can find themselves buying products they don't want for prices well above true value!");
    console.log("But you're not a faint hearted person! You are loving this.. or maybe not. Either way you feel determined to leave the market with some souviner!");
    console.log("You continue to dodge shop owners and tourists alike who become unfortunate prey!");
    console.log("Time moves so quickly and you finally come across a shop that catches your eye. A shop that sells traditional clothing, jewelry, lanterns, leather goods, and gorgeous Moroccan Rugs of all sizes!");
    travChoiceFive();
}


const travChoiceFive = () => {
    console.log("\n");
    console.log("You take a look around and you feel the sense to buy everything! You're overwhelmed.. but again determined to walk away with something!");
    console.log("The owner isn't making the situation any easier by constantly showing you different items to buy that just add to your stress!");
    console.log("You've been there longer than you want and its time to finally make a decision! What item are you taking home with you!?");
    let items = ["Djellaba", "Jewelry", "Lanterns", "Tagine", "Rug"];
    answ = readLine.keyInSelect(items);
    choices = items[answ];
    if(choices === items[0]){
        console.log("Great choice! You'll surely get compliments on your new wardrobe piece.... and don't worry, I won't flag you for cultural appropraition.");
        negotiation();
    }else if(choices === items[1]){
        console.log("Can't go wrong with Moroccan jewelry!");
        negotiation();
    }else if(choices === items[2]){
        console.log("Excellent.. A Lantern definitely adds an incredible aesthetic to any home!");
        negotiation();
    }else if(choices === items[3]){
        console.log("Someones been loving the Tagine dishes.");
        negotiation();
    }else if(choices === items[4]){
        console.log("Excellent choice! A Moroccan designed rug would add an incredible aestehtic to any home!");
        negotiation();
    }
}

const negotiation = () => {
    console.log("\n");
    console.log("You FINALLY make your decision and the owner rushes to wrap your new souviner in a bag before you change your mind");
    console.log("You ask 'How Much?' ... you notice the owner takes a moment to give a price - he is sizing you up. You are not pleased with his price and you know from my advice that he is giving you a price that is probably triple the actualy value.")
    console.log("You take you first jab at haggling.. you give him a counter offer that is a fourth of his original offer. He gives you a look with a smirk on his and proceeds to give you the cliche response - 'That number is too low, I won't make any profit at that price.'");
    console.log("You know he's not telling you the truth, but you are also unsure about haggling for a better price. How badly do you want your souviner?");
    if(readLine.keyInYN("Do you walk away?")){
        negotiation2();
    }else {
        negotiation3();
    }
}

const negotiation2 = () => {
    console.log("\n");
    console.log("You proceed to walk away.. but just as you are about to exit the shop the owner calls you back. It seems he has not called your bluff.. \n");
    console.log("The owner tells you that he'll give you a special price that gives him little to no profit.. he offers to give you the item at half the original price");
    if(readLine.keyInYN("Do you accept his offer?")){
        console.log("CONGRATULATIONS! You have had your first successful purchase haggling in Morocco! \n");
        console.log("Its getting really late, the experience has left you exhausted.. and rightfully so.. it's time to head to a special hotel where we'll be spending the night!")
    }else {
        negotiation3();
    }
}

const negotiation3 = () => {
    console.log("\n");
    console.log("It seems you are a lot tougher than you look! You seem to be enjoying the art of haggling.. it gives you a sense of superiority! Or maybe you just feel you are being cheated and won't leave till the price is just right!");
    console.log("Nevertheless.. The negotiations seem to be taking forever, other tourists have been in and out.. but you refuse to leave! You are determined!");
    console.log("You slowley realize that this owner relies on your purchase to make a living for himself and his family.. you don't want to be too greedy but you also don't want to be made a fool.");
    console.log("After throwing numbers back and forth.. the owner insists on his FINAL price.. he offers you a third of the original price!")
    if(readLine.keyInYN("Do you accept the owners final offer?")){
        console.log("HOLLY MOLLY! Wasn't that an experience! Congratulations, you have had your first successful purchase haggling in Morocco. You're pretty much a pro at it already! \n");
        console.log("Its getting really late, the experience has left you exhausted.. and rightfully so.. it's time to head to a special hotel where we'll be spending the night!")
        riadHotel();
    }else{
        console.log("Oh man! Shame you weren't able to work out a deal. All that time wasted for both of you to come out empty handed :/");
        console.log("Welp.. There's always another day and other souks to shop at.\n");
        console.log("Its getting really late, the experience has left you exhausted.. and rightfully so.. it's time to head to a special hotel where we'll be spending the night!")
    }
}


const riadHotel = () => {
    console.log("\n");
    console.log("If you've never heard of Riad Yasmine, you have most certainly seen photos of it on instagram! It is one of the most stunning Riad in all of Morocco, and the one we will be staying at for the night!");
    console.log("Essentially, a riad is a Moroccan house, but a very specific kind of house. Riad comes from the Arabic word for ‘garden’ and as such, a traditional riad is built around a courtyard or a garden. The gardens are usually very manicured and often include fountains. Some riads, particularly the luxury riads, also have on-site swimming pools and even private hammams for their guests. Another interesting and unique aspect of a riad compared to a traditional hotel is that there are no exterior windows. The windows in a riad all look inwards towards the garden or the courtyard. This reflects the importance of privacy in the Islamic culture, but also has the added benefit of keeping the air cool, which is a huge perk given the heat of Morocco’s temperatures. \n");
    console.log("Riad Yasmine offers Boho-chic vibes that flow from the rooms to the emerald-tiled pool, and the rooftop views at breakfast are just as gorgeous as the riad’s design. You will be enveloped by its bright and quiet atmosphere where only the chirping of birds comes to disturb the silence. Throughout the stay in the red city, the Riad Yasmine will be your safe haven of peace, a timeless nest preserved from the bustle of the medina. \n");
    console.log("After an exceptional complementary dinner and a restful night, it is time to say goodbye to this incredible city! We pack our things to hit the road to the desert city of Merzouga!!")
    merzouga();
}

const merzouga = () => {
    console.log("When a wealthy family refused hospitality to a poor woman and her son, God was offended and buried them under the mounds of sand called Erg Chebbi. So goes the legend of the dunes rising majestically above the twin villages of Merzouga and Hassi Labied, which for many travellers fulfil Morocco's promise as a dream desert destination.")
    console.log("Spending a night in the Sahara Desert is an unforgettable experience, and one I can promise you'll rave about for many years!");
    console.log("After a long drive to the city of Merzouga... we begin our tour a few hours before dusk");
    let choices = ["Camelback Ride", "4x4"];
    answ = readLine.keyInSelect(choices);
    options = answ[choices];
    if(options === answ[0]){
        console.log("Excellent choice.. Camelback is the most authentic way to experience the Saharan desert!")
    }else if(options === answ[1]){
        console.log("Are we afraid of Camels? Thats alright, we'll take the more convenient and fast way to the dunes!")
    }
    console.log("Soaring peaks of sand change color with the shifting light of dawn and dusk. Camel trains create romantic silhouettes, and Berber villages act as remote oases in an environment that has remained unchanged for thousands of years. These are the archetypal Sahara landscapes of which Moroccan dreams are made. ")
}

const fez = () => {}

const chefchaoun = () => {}












beginVacay()