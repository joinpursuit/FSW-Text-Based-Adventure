const {question, keyInYN}=require('readline-sync')
let nameInput = question("Enter your name: ")
console.log(`Hello ${nameInput}!  Welcome to my game.`)

function quitGame() {
   let restart = keyInYN('To the well-organised mind, death is but the next great adventure. Restart?')
   console.log('Til next time '+ nameInput)
   if (restart === true) {
        start()
   } else {console.log('Til next time '+ heroName)
    return
   }
}

function start() {
   console.log('+======================================================================================+')   
   console.log('+--------------------------------------------------------------------------------------+')
   console.log('+ ============/                                      ========/                     __  +')
   console.log('+ |            /.———----.—---—.—.———.———.———--.-----|.       /  ______.______.____| /  +')
   console.log('+ |.   _       |   ____|   _   |    _  |  _  |      |.   00  /_|  -___|       | _ | |  +')
   console.log('+ |.   |       |___|   |_____._|____|  |_____|___|__|.     _   |______|___|___|_____/  +')
   console.log('+ |:   1      /                _____|  |            |:    | |  |                       +')
   console.log('+ |: : . .  ./                 |_______|            |: :. | :  |                       +')
   console.log('+ `---------’                                       `----\' `--‘                        +')
   console.log('+--------------------------------------------------------------------------------------+')
   console.log('+--------------------------------------------------------------------------------------+')
   console.log('+ In the land of Phimiba on the black sand coast of the Banar provinces, there thrives +')
   console.log('+ the small villageof Strinostra. A valley untouched by the wars of yore for an eon.   +')
   console.log('+ Great heroes and villians alike have wrecked and gone asunder in the bony beaches of +')
   console.log('+ Strinostra and ten thousand fold more in the windblown summit alps to the moutainous +')
   console.log('+ east. Here in Strinostra grows then mystic Ironbark tree. The last in fact. It\'s sap +')
   console.log('+ gave the first dragons their fire and their barks gave men their first swords, whose +') 
   console.log('+ branches were cut and bent into wands and whose fruit seeds now make load for rifles.+')
   console.log('+ We find you, dear adventurer in your forest garden, where a strange wilting flower of+')
   console.log('+ #00ffa2 glows faintly.                                                               +')

    let start = keyInYN('+ Do you pick the flower?                                                     +')
    if (start === false){
        console.log('+======================================================================================+')
        console.log('+ You choose not to pick the beautiful dying flower but nuturture it instead!          +\n\n')
        console.log('+ Until one day...                                                                     +')
        levelOne()
    } else {
        console.log('+======================================================================================+')
        console.log('+ Thy name is MUD. Prithee maketh haste hence and returneth to thy hutch.              +')
        quitGame()}
}

start()


//let dmg = function(lv, atk, def, roll, mod) {
//     Math.floor((2(lv)+10/250)*(atk/def)*roll+2)*mod}
// playerStat = [lv, atk, mod]
// diceArr = [roll, ]

// let mod = 0

// let level = 0



// let dice = function(bottom, top) {
//     return Math.floor(Math.random() * top) + bottom}

const heroStat = [1,1,1,10]
oppStat = [lv,atk, def]

let dice = function (nat,min){
    return Math.floor((Math.random()* nat)+min)//nest this globally
}
let roll = dice(6,1)
//console.log(dice(6,1))

//let heroDmg = function(heroStat[0], heroStat[1], dice, mod) {

   // return Math.floor((2(heroStat[0])+10/250)*(herotat[1]/oppStat[2])*dice+2)*mod}
    
//playerStat = [lv, atk, mod, lifepoints]

// let attack = function(){

// }

 function levelOne(){

    console.log('+ Winged Light => Hero! Qeldrin, Eater Of All has taken nest in the great bastion of   +')
    console.log('+                 Heldana VII Crown, Castle Ironbark. Fight your way to Ironbark and   +')
    console.log('+                 slay the beast!                                                      +')    
    console.log('+                 By what name shall I address thee?                                => +\n')
    console.log('+--------------------------------------------------------------------------------------+')
    console.log('+ <= My name is '+nameInput+'                                                            <= +\n')        
    console.log('+ The light brightens to a dazzling glare, then vanishes.                              +')
    console.log('+ A small owl like any but somehow none other comes to rest on a nearby branch.        +\n')
    console.log('+ Qaspiel => I wilt beest thy companion then. I cannot assist thee on thy journey yet  +')
    console.log('+            I shall keep thee privy to all things proper and true. Qaspiel is mine    +')    
    console.log('+            name, PUKUKUKUKUKUKUKUKUKUKUKUU!                                       => +\n')
    
    const rls1 = require('readline-sync')
        classPick = ['Sword', 'Wand', 'Rifle']
        index = rls1.keyInSelect(classPick, 'What weapon should I take?')
        if (classPick[index] === classPick[0])
            {
            console.log('+ You grab your sword!                                                                 +')
            console.log('+ Qaspiel => How nice another warrior (>_>), can I drop the mystic accent noweth?   => +\n')
            console.log('+ You gawk at the insolent bird with annoyance and slight contempt.                    +')   
            console.log('+ => Awesome, it was annoying to talk like that but the job (~REDACTED~)damn job       +')
            console.log('+  description says "bE mYsTiCaLlllLLlL qASpiEllLL\" as if "Be Not Afraid" isn\'t      +')
            console.log('+  soooooo overdone. Blame Gabriel. Don\'t even get me started on that guy. 200% a tool.+')
            stageOne()}
        
        else if (classPick[index] === classPick[1]) {

            console.log('+ You grab your wand!                                                                  +')
            console.log('+--------------------------------------------------------------------------------------+')
            console.log('+ You gawk at the insolent bird with annoyance and slight contempt.                    +\n')   
            console.log('+ => Awesome, it was annoying to talk like that but the job (~REDACTED~)damn job       +')
            console.log('+    description says "bE mYsTiCaLlllLLlL qASpiEllLL\" as if "Be Not Afraid" isn\'t        +')
            console.log('+    soooooo overdone. Blame Gabriel. Don\'t even get me started on that guy. 200% total +')
            console.log('+    toolbag. Remember you didn\'t hear that from me!                               => +\n')
            stageOne()}
        
        else if (classPick[index] === classPick[2]) {
            console.log('+ You grab your rifle!                                                              \n +')
            console.log('+ Qaspiel => A mage?? In these parts? I thought only the university could train mages! +')
            console.log('+            Watch where you point those Fireballs!                                 => +\n')
            console.log('+ You gawk at the insolent bird with annoyance and slight contempt.                    +\n')   
            console.log('+ Qaspiel => Awesome, it was annoying to talk like that but the job (~REDACTED~)damn   +')
            console.log('+            job description says "bE mYsTiCaLlllLLlL qASpiEllLL\" as if "Be Not Afraid"+')
            console.log('+            isn\'t soooooo overdone. Blame Gabriel. Don\'t even get me started on that +')
            console.log('+            guy. 200% total toolbag. Remember you didn\'t hear that from me!       => +\n')
            stageOne()}
            
        else {
            quitGame()}

        function stageOne(){
            console.log('im here')
            function addHealth(){
                console.log('im here too')
                // if (roll > 3) {
                //     heroStat[3]+10 
                //     stageOneTwo()}
                // else {
                //     stageOneTwo()
               // }
            }
            
            
            
            console.log('+--------------------------------------------------------------------------------------+')
            console.log('+ '+nameInput+' => Shut up bird brain, lets kick some lizard booty!                     +')
            console.log('+ '+nameInput+' darts down the dirt path of the front garden and through the village to +') 
            console.log('+ the village center where a gaping pit wide enough to host four wagon abreast at its  +') 
            console.log('+ diameter. '+nameInput+' the hero stops right at its edge and Qaspien perches on your  +') 
            console.log('+ shoulder.                                                                            +') 
            let help = keyInYN('+ Qaspiel => ~Psssssssst pssst pssssssst~                                            <=+\n+ [Do you answer?]                                                                    +')
            if (help === true){
                console.log('+--------------------------------------------------------------------------------------+')
                console.log('+ Qaspiel => If you let me help you down into the tunnel you could gain some wisdown & +') 
                console.log('+            wisdom is healthy for the body!                                           +') 
                console.log('+--------------------------------------------------------------------------------------+')
                let lift = keyInYN('+ Do you let Qaspiel assist you down, '+nameInput+'?                                    +\n+                                                                                     +')           
                    if (lift === true){
                        addHealth()
                        stageOneTwo()}
                    else {
                        console.log('+--------------------------------------------------------------------------------------+')
                        console.log('+ Qaspiel => (<_<) (>_>) (;_;) k then...                                               +')
                        stageOneTwo()}
                }

            else {
                console.log('+--------------------------------------------------------------------------------------+')
                console.log('+ Qaspiel => (<_<) (>_>) (;_;) k then...                                               +')
                stageOneTwo()
            }    
            function stageOneTwo(){

            }

        }
 }

    
























        
        
    



 


