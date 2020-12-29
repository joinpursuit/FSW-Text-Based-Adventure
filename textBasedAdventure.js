const readline= require('readline-sync')

let yourVariableHere = readline.question("Enter your name: \n ")
 console.log( "Hello " + yourVariableHere + " It's a pleasure to have you here!")
  console.log("Welcome to Traveling the World in 80 Days!")

const startGame = () => {
let user = readline.keyInYN("Do you wanna play \n")
 if(user){
    console.log("Let's play")
        gameHistories()
  }else{
        console.log("Have a nice Day "  + yourVariableHere)
        quitGame()
    }
}    


const playloop = () => {
    console.log("Sweden", "Canada", "China", "Haiti", "Brazil", "Austria", "Greece", "Chile", "Colombia", "Cuba")

    let answer = readline.question(yourVariableHere + " Where would you like to go \n" )  
    let countries = ("Sweden", "Canada", "China", "Haiti", "Brazil", "Austria", "Greece", "Chile", "Colombia", "Cuba")
    let choice = "Canada"
    let choice2 = "Haiti"
    for( let i = 0; i > countries;i++ )
        choice(countries[i])
      if(answer === choice) {
         console.log("Amazing" + " Let's go to Canada")
         canadaTrip()
        }else if( answer === choice2){
             console.log("Amazing" + " Let's go to Haiti")
             haitiTrip()
            }else{
             console.log("Sorry " + yourVariableHere)
             console.log("Unfortunally we don't have more tickets" )
             console.log("However we still have others destinations")
              playloop()
            }
   
} 


const gameHistories = () => {
    console.log(" June 28, 1856")
    console.log(" Welcome to the airport " +  " MATIAS PEREZ ")
    console.log(" In this game you will have the opportunity to travel and learn more about the culture, and traditions of different countries.")   
    console.log(" To achieve this you will have to make decisions and choose what things you want to know and from where " )
    console.log( " Regardless of how much you learn from these countries, you will earn points that you can accumulate to obtain a discount on the tickets you can buy for other trips ")
    console.log(" If you are ready, go to the other platform to obtain your flight ticket. ")
    
    let answer = readline.keyInYN("Are you ready? \n")  
    if (answer) {
        console.log( " Let's travel" )
        playloop()
    }else{
        console.log(" Come back when you're ready ")
        quitGame()
    }
}

const canadaTrip =() =>{
    console.log("History", "Traditions", "Religions"," Holidays"," Cuisine"," Place to Go")

    let answ = readline.question(yourVariableHere + " What would you like to know \n" )
    let attractions = ["History", "Traditions", "Religions","Holidays","Cuisine","Place to Go"]
    

    if (answ === attractions[0]){
       historyView()
    }else if(answ === attractions[1]){
           traditionsView()
    }else if(answ === attractions[2]){
           religionsView()
    }else if(answ === attractions[3]){
            holidaysView()
    }else if(answ === attractions[4]){
            cuisineView()
    }else if(answ === attractions[5]){
            placeToGoView()
    }

}

const haitiTrip =() =>{
    console.log("History", "Traditions", "Religions"," Holidays"," Cuisine"," Place to Go")

    let answ = readline.question(yourVariableHere + " What would you like to know \n" )
    let attractions = ["History", "Traditions", "Religions","Holidays","Cuisine","Place to Go"]
    

    if (answ === attractions[0]){
       historyView()
    }else if(answ === attractions[1]){
           traditionsView()
    }else if(answ === attractions[2]){
           religionsView()
    }else if(answ === attractions[3]){
            holidaysView()
    }else if(answ === attractions[4]){
            cuisineView()
    }else if(answ === attractions[5]){
            placeToGoView()
    }
}

const traditionsView = () => {
    console.log("Canada")
    console.log("Haiti")
    let answer = readline.question(yourVariableHere + " Which country \n" )
    
    switch (answer){
        case "Canada":
           console.log("Halloween" + " : " +  "Although people around the world celebrate Halloween, it’s a big deal in Canada. Between 2004 and 2014, the commercial revenue from the holiday doubled. The Retail Council of Canada estimated that in 2014, Halloween became a billion dollar industry in Canada alone.In Vancouver, the only time residents can legally set off fireworks in their backyard is on Halloween. Permits must be obtained, and people must be over 19 to buy and set off the fireworks. But this tradition means the city gets very loud on Halloween night.") 
           console.log("New Year's Levee" + " : " +  "A dated European tradition, Canada is now the only country that participates in the New Year’s Levee. The tradition began in Canada in the 1600s. It’s an event held by each province’s lieutenant governor and the governor general to mark the start of a new year and to allow citizens to pay their respects.In Edmonton, for example, residents can tour Government House, enjoy refreshments and send a postcard to Canadian troops serving overseas. It’s also a tradition in the units and headquarters of Canadian Forces, where officials receive and greet guests to welcome in the new year.")
           console.log("Calgary Stampede" + " : " +  "The Greatest Outdoor Show on Earth”—that’s the Calgary Stampede, an annual extravaganza that happens every July in Calgary, Alberta.The Stampede’s core purpose is “to preserve and celebrate western heritage, culture and community spirit.” They celebrate through concerts, rodeo events (with big money prizes), carnival rides, exhibitions, a parade, and agricultural competitions. The Stampede is one of Canada’s biggest traditions, as over one million people from around the world visit every year.")
           console.log("New Shoes on Budget Day" + " : " + "This tradition is an unusual one that involves the Canadian Minister of Finance, and now provincial finance ministers, wearing new shoes to deliver the new budget. Its roots can be traced back to 1960 when Donald M. Fleming followed the practice after the media described it as traditional.But in 1966 when Mitchell Sharp wore new shoes on budget day, he learned there was no tradition behind it at all. Nevertheless, the custom has continued to the present day. In 2016 and 2017, Finance Minister Bill Morneau wore new black lace-up shoes for both of his deliveries, which were each made by different Canadian designers.")
           console.log("Thanksgiving " + " : " + "Canada has its own Thanksgiving tradition, which is slightly different to its American counterpart. Turkey and pumpkin pie are still both centerpieces of a Thanksgiving meal in Canada. However, the date is always the second Monday in October, and it’s a statutory holiday across the nation, except for in the Atlantic provinces.Thanksgiving was celebrated on different days and for different reasons until January 31, 1957, when Canadian Parliament said: “A Day of General Thanksgiving to Almighty God for the bountiful harvest with which Canada has been blessed…to be observed on the second Monday in October.")
           break;
           case "Haiti":
               console.log("Family" + " : " + "Urban families might have three or four children, while rural families have ten or more. The basic unit of society is the extended family. Grandparents may act as parents in place of an absent or working mother or father. Relatives may also fill the role of godparent, which entails responsibility for a child if a parent dies. Children from cities may be sent to live with relatives in the countryside during summer vacations, and children from the countryside may be sent to live with relatives in cities to attend school. Adult children are expected to remain with their parents until marriage, and occasionally, married children live with one spouse’s parents until they can afford a home of their own. Married couples usually live close to their families. This is especially true in the countryside, where the traditional “lakou” form of housing (a common courtyard surrounded by a family compound of small sleeping rooms) is prevalent. ") 
               console.log("In urban areas, the father, if present in the home, is head of the household and responsible for earning an income. Mothers are responsible for cooking, cleaning, and teaching their children religion and morality.")
               console.log("Middle-class urban families may have a servant to cook and do other chores. Rural men work their fields, while women sell produce in the market and care for the household and children. Though men may earn the money and make decisions, it is often the women who manage the household’s money. Single-mother households are very common, as men typically have children by more than one woman. In such households, mothers often rely on older children and relatives to help earn income and to care for younger children. In most families, a child's main concerns are succeeding in school and completing household chores.")
               console.log("In wealthier families, children may be responsible only for keeping their rooms clean; in poorer families, chores include cooking, laundry, and cleaning. Some families can afford to send only one child, usually the oldest or the boy, to school while the other kids especially girls, are expected to do housework. Educated children are expected to better the social and financial status of the family, providing for parents or less fortunate siblings later in life. Other children are expected to help more around the house or with the family business, which could simply mean being a street vendor.")
               break;
               default:
    }  
}

const historyView = () => {
    console.log("Canada")
    console.log("Haiti")
    let answer = readline.question(yourVariableHere + " Which country \n" )
    switch (answer){
        case "Canada":
            console.log("The history of Canada covers the period from the arrival of the Paleo-Indians thousands of years ago to the present day. Prior to European colonization, the lands encompassing present-day Canada were inhabited for millennia by Indigenous peoples, with distinct trade networks, spiritual beliefs, and styles of social organization. Some of these older civilizations had long faded by the time of the first European arrivals and have been discovered through archeological investigations.From the late 15th century, French and British expeditions explored, colonized, and fought over various places within North America in what constitutes present-day Canada. The colony of New France was claimed in 1534 with permanent settlements beginning in 1608. France ceded nearly all its North American possessions to the United Kingdom in 1763 after the French defeat in the Seven Years' War. The now British Province of Quebec was divided into Upper and Lower Canada in 1791 and reunified in 1841. In 1867, the Province of Canada was joined with two other British colonies of New Brunswick and Nova Scotia through Confederation, forming a self-governing entity named Canada. The new country expanded by incorporating other parts of British North America, finishing with Newfoundland and Labrador in 1949.")
            console.log("Although responsible government had existed in Canada since 1848, Britain continued to set its foreign and defence policies until the end of the First World War. The passing of the Statute of Westminster in 1931 recognized that Canada had become co-equal with the United Kingdom. After the Constitution was patriated in 1982, the final vestiges of legal dependence on the British parliament were removed. Canada currently consists of ten provinces and three territories and is a parliamentary democracy and a constitutional monarchy with Queen Elizabeth II as its head of state.")
            console.log("Over centuries, elements of Indigenous, French, British and more recent immigrant customs have combined to form a Canadian culture that has also been strongly influenced by its linguistic, geographic and economic neighbour, the United States. Since the conclusion of the Second World War, Canadians have supported multilateralism abroad and socioeconomic development.")
            break;
            case "Haiti":
                console.log("-After Columbus's discovery of Hispaniola, the Spanish established the first permanent European settlement on the island. Just before the turn of the 18th century, Spain ceded the western part of Hispaniola—a region that later adopted the name Haiti—to France, and thus began a century of French control in Haiti.The colony became independent from France under the name of Haiti. It is the second American nation to become independent, after the United States. It is also considered the world's first " + " Black" + " republic and one of the few successful slave rebellions. Slavery, the basis of the economy, is abolished.")
                break;
                default:
    }

}

const religionsView = () => {
    console.log("Canada")
    console.log("Haiti")
    let answer = readline.question(yourVariableHere + " Which country \n" )
    switch (answer){
        case "Canada":
            console.log("Our most recent survey in Canada, conducted in 2018, found that a slim majority of Canadian adults (55%) say they are Christian, including 29% who are Catholic and 18% who are Protestant. About three-in-ten Canadians say they are either atheist (8%), agnostic (5%) or “nothing in particular” (16%). Canadian census data indicate that the share of Canadians in this “religiously unaffiliated” category rose from 4% in 1971 to 24% in 2011, although it is lowest in Quebec. In addition, a rising share of Canadians identify with other faiths, including Islam, Hinduism, Sikhism, Judaism and Buddhism, due in large part to immigration. The 2018 Pew Research Center survey found that these five groups together make up 8% of Canadian adults.")
            break;
            case "Haiti":
                console.log("Religions is an integral part of Haitian life and culture. The two main religions are Roman Catholic and Voudou, or Voodoo, a mixture of African animism (the belief in spirits and nature) and Christianity. Many Haitians practice both of these religions at the same time. There are also protestants of various denominations. The Haitian government does not impose on any restrictions on religion or missionary activities.")
                console.log("Unlike the “Black Magic” reputation it has in books or movies, Voudou is in fact, a religion based on ancestral spirits, tribal deities, and mythical figures such as the goddess of the sea. It keeps alive old African beliefs while borrowing freely from Christianity. At funerals, it is not uncommon for Voudou ceremonies and rituals to be performed for family members first, followed by a traditional Roman Catholic ceremony presided over by a priest.")
                break;
                default:
    }
}


const holidaysView = () => {
    console.log("Canada")
    console.log("Haiti")
    let answer = readline.question(yourVariableHere + " Which country \n" )
    switch (answer){
        case "Canada":
        console.log("Labour Day" + " - " + "the first Monday in September, has been a statutory holiday in Canada since 1894. It originated in the first workers’ rallies of the Victorian era. Historically, workers marked the day with various activities. These included parades, speeches, games, amateur competitions and picnics. The holiday promoted working-class solidarity and belonging during a time of rapid industrialization. Since the Second World War, fewer and fewer people have participated in Labour Day activities. Nevertheless, it remains a statutory holiday. Many Canadians now devote the Labour Day holiday to leisure activity and family time.")
        console.log("Federal Government Proposes Stat Holiday for Reconciliation" + " - " +  " Bill C-369 would make September 30 a statutory holiday called “National Day for Truth and Reconciliation.” (See also Truth and Reconciliation Commission.) September 30 currently recognizes residential school survivors as “Orange Shirt Day.” The goal of the stat holiday would be to ensure that “public commemoration of the history and legacy of residential schools and other atrocities committed against First Nations, Inuit, and Métis peoples remains a vital component of the reconciliation process.” The bill requires approval from the House of Commons and Senate to become law. It would then need approval from the provinces and territories to be officially observed.")
        console.log("Thanksgiving in Canada" + " - " + "The first official, annual Thanksgiving in Canada was celebrated on 6 November 1879, though Indigenous peoples in Canada have a history of celebrating the fall harvest that predates the arrival of European settlers. Sir Martin Frobisher  and his crew are credited as the first Europeans to celebrate a Thanksgiving ceremony in North America, in 1578. They were followed by the inhabitants of New France under Samuel de Champlain in 1606. The celebration featuring the uniquely North American turkey, squash and pumpkin was introduced to Nova Scotia in the 1750s and became common across Canada by the 1870s. In 1957, Thanksgiving was proclaimed an annual event to occur on the second Monday of October. It is an official statutory holiday in all provinces and territories except Prince Edward Island, New Brunswick, and Nova Scotia")
        console.log("Calder Memorial Trophy" + " - " + "The Calder Memorial Trophy is awarded annually “to the player selected as the most proficient in his first year of competition in the National Hockey League.” First presented in 1933, the trophy is named for Frank Calder, who was president of the NHL from 1917 to 1943. The winner is chosen through a poll of the Professional Hockey Writers’ Association at the end of the regular season and is awarded after the Stanley Cup playoffs. Players who have won the trophy and gone on to stardom include Terry Sawchuk, Bobby Orr, Ken Dryden, Ray Bourque, Mario Lemieux and Martin Brodeur")
        break;
        case "Haiti":
            console.log("Carnival" + " " + "Carnival is Haiti's biggest celebration. The word derives from" + "carnavale," + "which in Latin means" + "meat farewell. " + "Celebrations for carnival usually begin at the end of January and end with " + "Fat Tuesday, " + "or Mardi Gras, when different types of fats are consumed at home. Following Fat Tuesday is the Catholic holiday Ash Wednesday, which also marks the start of lent. Carnival is marked by colorful parades, lively music, traditional art and dances throughout Haiti.")
            console.log("Fet Gede" + " " + "Voodoo, an important belief system that shapes daily life in Haiti, was declared an official religion in 2003 by the Haitian government. It's no surprise, then, that several holidays originate from the practice, as voodoo priests now have the legal authority to perform baptisms and weddings. Fet Gede, or All Souls Day, is a national holiday arising from voodoo and celebrated on the first and second of November. During Fet Gede, voodoo practitioners go to cemeteries to give food and drink offerings and to pray. Celebrations also continue at voodoo temples during the evenings")
            console.log("Independence Day" + " " + "Independence Day is celebrated on New Year's Day, which is when Haiti gained independence from France in 1804. On January 1, thousands of people gather in Port-au-Prince, the country's capital, and watch parades, as well as visit the National Palace on the Champs de Mars. The day is also marked by fireworks, dancing in the streets and the singing of the national anthem.")
            console.log("Rara" + " " + "Rara, which originated in Haiti, is celebrated during Easter week. It revolves around festival music played during street processions; the vaksen (cylindrical bamboo trumpets), maracas and metal bells are often played during these processions. By Good Friday, the streets of cities and towns are packed with bands, dancers and colorful and glittering costumes. During the street processions, musicians shout out refrains of special songs, and people also create impromptu percussion instruments with soft-drink bottles and skillets.")
            break;
            default:
    }
}


const cuisineView = () => {
    console.log("Canada")
    console.log("Haiti")
    let answer = readline.question(yourVariableHere + " Which country \n" )
    switch (answer){
        case "Canada":
        console.log("Canadian cuisine varies widely depending on the regions of the nation. The four earliest cuisines of Canada have First Nations, English, Scottish and French roots, with the traditional cuisine of English Canada closely related to British cuisine, while the traditional cuisine of French Canada has evolved from French cuisine and the winter provisions of fur traders. With subsequent waves of immigration in the 19th and 20th century from Central, Southern, and Eastern Europe, South Asia, East Asia, and the Caribbean, the regional cuisines were subsequently affected.")
        console.log("Although certain dishes may be identified as" + "Canadian" + "due to the ingredients used or the origin of its inception, an overarching style of Canadian cuisine is more difficult to define. Some Canadians such as the former Canadian Prime Minister Joe Clark believe that Canadian cuisine is a collage of dishes from the cuisines of other cultures. Clark himself has been paraphrased to have noted: " + "Canada has a cuisine of cuisines. Not a stew pot, but a smorgasbord.")
        console.log("While the immense size of Canada and the diversity of its inhabitants compounds the difficulty in identifying a specific Canadian food identity, Hersch Jacobs acknowledges that the lack of a hegemonic definition does not preclude the existence of Canadian cuisine.[2] Lenore Newman argues that there is a distinctly Canadian creole cuisine. She identifies five key properties that together define Canadian cuisine, namely its reliance on seasonality, multiculturalism, wild foods, regional dishes, and the privileging of ingredients over recipes.")
        console.log("Indigenous food in particular is considered very Canadian. Métis food is especially so, since the Métis people played a particularly important role in the origin of Canada and Canadian cuisine. Foods such as bannock, moose, deer, bison, pemmican, maple taffy, and Métis stews such as barley stew are all either traditional Indigenous foods or originated in Canada with roots in Indigenous cuisines, and are eaten widely throughout the country. Other foods that originated in Canada are often thought of in the same overarching group of Canadian food as Indigenous foods, despite not being so, such as peameal bacon, cajun seasoning, and Nanaimo bars. There are also some foods of non-Canadian origin that are eaten very frequently. Pierogies (dumplings of Central and Eastern European origin) are an example of this, due to the large number of early Ukrainian and Polish immigrants. There are, however, some regional foods that are not eaten as often on one side of the country as on the other, such as dulse in the Maritimes, stews in the Territories, or poutine in the Francophone areas of Canada (not limited to Québec). In general, Canadian foods contain a lot of starch, breads, game meats (such as deer, moose, bison, etc.), and often involve a lot of stews and soups, most notably Métis-style and split-pea soup.")
        break;
        case "Haiti":
            console.log("Haitian cuisine consists of cooking traditions and practices from Haiti. It is a Creole cuisine, that originates from a blend of several culinary styles that populated the western portion of the island of Hispaniola, namely the African, French, indigenous Taíno, Spanish and Arab influence.")
            break;
            default:
    }
}


const placeToGoView = () => {
    console.log("Canada")
    console.log("Haiti")
    let answer = readline.question(yourVariableHere + " Which country \n" )
    switch (answer){
        case "Canada":
        console.log("Banff National Park" + " :- " + "Banff—Canada’s first national park. In 1883, on the slopes of the Canadian Rocky Mountains, three railway workers discovered a natural hot spring, and from there the park was born. Nowadays, Banff is one of the world’s premier destinations, spanning a region of unparalleled majestic mountain scenery. Every year, millions of visitors make the pilgrimage to Banff to take in its stunning views and arsenal of activities. Banff village has evolved from a whistle-stop into a thriving year-round resort town with hotels, restaurants, art galleries, and outdoor adventure outfitters. Lodged inside a mock-Tudor building, Banff National Park Visitor Centre has everything you need to know about places, activities, road conditions, and weather in the park. Two blocks down the main street is the Banff Park Museum National Historic Site, which doubles as a rustic architectural wonder and storehouse of Victorian-era zoological, botanical, and geological specimens. The nearby Whyte Museum of the Canadian Rockies specializes in regional art and architecture, including paintings, sculptures, photography, and heritage homes on display in the gardens. Outdoor recreation of one sort or another surrounds the village. Laid out in 1911, the public nine-hole Banff Springs Golf Club takes full advantage of its location in the Rockies with epic mountain views and fairways along Bow River. Along the river’s north bank, the Banff Legacy Trail (16.65 miles) between Canmore town and Banff village is just one of the park’s many scenic cycling and mountain biking routes. Bow River between Lake Louise and Canmore offers plenty of scope for fly-fishing, self-guided kayaking, and guided float trips of the type offered by Rocky Mountain Raft Tours.")
        console.log("CN Tower" + " :- " + "The original concept of the CN Tower originated in 1968 when the Canadian National Railway wanted to build a large television and radio communication platform to serve the Toronto area, as well as demonstrate the strength of Canadian industry and CN in particular. These plans evolved over the next few years, and the project became official in 1972. The tower would have been part of Metro Centre (see CityPlace), a large development south of Front Street on the Railway Lands, a large railway switching yard that was being made redundant by newer yards outside the city. Key project team members were NCK Engineering as structural engineer; John Andrews Architects; Webb, Zerafa, Menkes, Housden Architects; Foundation Building Construction; and Canron (Eastern Structural Division). As Toronto grew rapidly during the late 1960s and early 1970s, multiple skyscrapers were constructed in the downtown core, most notably First Canadian Place. The reflective nature of the new buildings reduced the quality of broadcast signals requiring new, higher antennas that were at least 300 m (980 ft) tall.")
        console.log("Stanley Park" + " :- " + "Stanley Park is a magnificent green oasis in the midst of the urban landscape of Vancouver. Explore the 400-hectare natural West Coast rainforest and enjoy scenic views of water, mountains, sky, and majestic trees along Stanley Park's famous Seawall. Discover kilometres of trails, beautiful beaches, local wildlife, great eats, natural, cultural and historical landmarks, along with many other adventures. The park offers a wide range of unforgettable experiences for all ages and interests, including Canada’s largest aquarium. Vancouver parks are open from 6am to 10pm unless otherwise posted, and access to washrooms is available from dusk until dawn.")
        console.log("Horseshoe Falls" + " :- " + "Horseshoe Falls, also known as Canadian Falls, is the largest of the three waterfalls that collectively form Niagara Falls on the Niagara River along the Canada–United States border. Approximately 90% of the Niagara River, after diversions for hydropower generation, flows over Horseshoe Falls. The remaining 10% flows over American Falls and Bridal Veil Falls. It is located between Terrapin Point on Goat Island in the US state of New York, and Table Rock in the Canadian province of Ontario. When the boundary line between the United States and Canada was determined in 1819, based on the Treaty of Ghent, the northeastern end of the Horseshoe Falls was in New York, United States, flowing around the Terrapin Rocks, which were once connected to Goat Island by a series of bridges. In 1955, the area between the rocks and Goat Island was filled in, creating Terrapin Point.[3] In the early 1980s the United States Army Corps of Engineers filled in more land and built diversion dams and retaining walls to force the water away from Terrapin Point. Altogether, 400 ft (120 m) of the Horseshoe Falls was eliminated. Due to erosion, the falls will continue to move in relation to the boundary line in the future. The official national maps for both Canada and the United States indicate that a small portion of the Horseshoe Falls is located within the United States.")
        break;
        case "Haiti":
            console.log("Port-au-Prince" + " :- " + "The Musée du Panthéon National Haïtien was opened in 1983. This cultural center is to perpetuate and disseminate the memory of" + "Fathers of the Nation." + " One of its main missions is to participate in heritage conservation and dissemination of national culture. The MUPANAH is an institution whose function is the conservation, protection and enhancement of historical and cultural heritage.")
            console.log("Labadee" + " :- " + "(French: Labadie) is a port located on the northern coast of Haiti within the arrondissement of Cap-Haïtien in the Nord department. It is a private resort leased to Royal Caribbean Cruises Ltd., for the exclusive use of passengers of its three cruise lines: Royal Caribbean International, Celebrity Cruises, and Azamara Club Cruises, until 2050.[1] Royal Caribbean has contributed the largest proportion of tourist revenue to Haiti since 1986, employing 300 locals, allowing another 200 to sell their wares on the premises for a fee[2] and paying the Haitian government US$12 per tourist.[3] The resort is completely tourist-oriented, and is guarded by a private security force. The site is fenced off from the surrounding area, and passengers are not allowed to leave the property. Food available to tourists is brought from the cruise ships. A controlled group of Haitian merchants are given sole rights to sell their merchandise and establish their businesses in the resort. Although sometimes described as an island in advertisements, it is actually a peninsula contiguous with the island of Hispaniola. The cruise ship moors to the pier at Labadee capable of servicing the Oasis class ships, which was completed in late 2009. The commercial airport that is closest to Labadee is Cap-Haïtien International Airport.")
            console.log("Torutuga"+ " :- " + "Tortuga is 180 square kilometres (69 square miles)[3] in size and had a population of 25,936 at the 2003 Census. In the 17th century, Tortuga was a major center and haven of Caribbean piracy. Its tourist industry and reference in many works has made it one of the most recognized regions of Haiti. The first Europeans to land on Tortuga were the Spaniards in 1492 during the first voyage of Christopher Columbus into the New World. On December 6, 1492, three Spanish ships entered the" +  "Windward Passage" + " that separates Cuba and Haiti. At sunrise, Columbus noticed an island whose contours emerged from the morning mist. Because the shape reminded him of a turtle's shell, he chose the name of Tortuga.Tortuga was originally settled by a few Spanish colonists. In 1625, French and English settlers arrived on the island of Tortuga after initially planning to settle on the island of Hispaniola. The French and English settlers were attacked in 1629 by the Spanish commanded by Don Fadrique de Toledo, who fortified the island, and expelled the French and English. As most of the Spanish army left for Hispaniola to root out French colonists there, the French returned in 1630 to occupy the fort and expanded the Spanish-built fortifications.")
            console.log("Cap-Haitien" + " :- " + "Cap-Haïtien is a port city on the north coast of Haiti. It's known for its French colonial architecture. Facing the Place de la Cathédrale is the landmark early-20th-century Notre-Dame Cathedral. Northwest of the city, beaches include sandy Cormier. South, Laferrière Citadel is a hilltop fortress built by revolutionary leader Henri Christophe. The ruins of his 1813 Sans-Souci Palace are in the nearby town of Milot.")
            break;
            default:
    }
} 

const quitGame = () => {
    console.log("Good Bye " + yourVariableHere)
    process.exit()
}

startGame()