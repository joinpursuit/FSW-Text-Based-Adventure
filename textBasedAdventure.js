const readline = require('readline-sync')
// DR. BANDERSNATCH 
let nameInput = readline.question("Enter your name: ")
let patient = {
    name: "Jana Nazim",
    age: 23,
    height: "5' 4inches",
    illness: "None",
    State: "Michigan"

}
let reaction1 = "No that's not correct, your patient has"
let reaction2 = "Alright that's great doctor."
let reaction3 = "I almost thought we were going to lose him, but it looks like that bought us some more time."

  let health = 70;
    const takeDamage = (num) =>{
    health -= num
    if (health > 0){
        return health
        
    } else if (health <= 0){
    console.log("The patient has died")

    }
}
    let health2 = health
    const healthIncrease = (num) => {
    health2 += num
    health2 = health
    }
    console.log(health2)

   


console.log(`Hello ${nameInput}!  Welcome to my game.`)
let response = "Good Evening Doctor. It seem's a patient has had a major heart attack and we need your help. Can you please help?"
console.log(response)
let nameInput2 = readline.question("yes or no ")
while (nameInput2 !== "yes") {
    console.log("oh ok, let the patient die then. Do you want to save the Patient?")
    nameInput2 = readline.question("yes or no")
}
if (nameInput2 === "yes"){
    console.log ("Awesome, let's go, heres what we know about the patient")
    console.table (patient)
    
    let nameInput3 = readline.question("What should we grab now? we can choose between the scapel, hammer or the stetescope?")
    while (nameInput3 !== "scapel"){ 
        console.log("oooh sorry, time is running out")
        takeDamage(10)
        console.log("the patient has " + health + " " + "left")
        nameInput3 = readline.question("scapel, hammer, or stetescope? ")
    }
if (nameInput3 === "scapel"){
    console.log(reaction2)
    
    let nameInput4 = readline.question ("The patient is starting to get weary, should we grab the defribullator?")
    while (nameInput4 !== "yes"){
        console.log("What do you mean no? you are wasting time")
        takeDamage(10)
        console.log("the patient has " + health + " life left.")
        nameInput4 = readline.question("yes or no?")
    }
    if(nameInput4 === "grab the incubator" || "yes")
    healthIncrease(10)
    console.log("The patient has " + health2 + " life.")
    console.log(reaction3)
    
    console.log("After giving a few minutes to make sure the body is sedated, the doctor made an incision and opened the chest")

    let nameInput5 = readline.question("Doctor, there seems to be a huge black spot in her heart, should we clean that or leave it alone?")
    while(nameInput5 !== "clean"){
        console.log("Doc, that's only going to create bacteria. We need to clean it.")
        takeDamage(5)
        console.log("The patient has " + health + " life left.")
        nameInput5 = readline.question("clean or leave it alone?")
    }
    if (nameInput5 === "clean" || "clean it"){
        console.log("Wow doctor, her health is going up.")
        healthIncrease(20)
        console.log("good job, we kept her alive for a little bit more")
        
    }
    
        let nameInput6 = readline.question("Dr, the operation looks succesful. We can sew up the wounds or wait an hour, What do you want to do? ")
            while (nameInput6 !== "sew") {
            console.log("Doctor, her organs are getting infected. I think you should sew them up")
            takeDamage (10)
            console.log("The patient has" + health + "life left. ")
            nameInput6 = readline.question ("sew up the wound or wait an hour?")
            }
            if (nameInput6 === "sew up the wounds" || "sew" || "sew up the wound"){
                console.log("Ok, looks like we did well")
            }
                
            let nameInput7 = readline.question("Doctor you can go home for an hour if you want")
                while (nameInput7 !== "no"){
                    console.log("DOCTOR HURRY, SHE SEEMS TO BE HAVING ANOTHER HEART ATTACK PLEASE HELP")
                    console.log("DOCTOR???????")
                    console.log("THE PATIENCE HAS DIED")
                    console.log("Let's try to see if we have a better option.")
                    nameInput7 = readline.question("Doctor you can go home if you want")
                }
                
                 if (nameInput7 === "no"){
                console.log("The Doctor stayed with the patient for 20 hours while he slept and recovered")
                 }
                 
                 console.log("Ok Doctor, there seems to be a small complication")
                 console.log("You have to choose between giving him the red pull or blue pill")
                 let nameInput8 = readline.question("OK doctor, which one is it going to be?")
                    while (nameInput8 !== "blue"){
                        console.log("Doctor, the patient is waking up")
                        console.log("the patient asks where he is and is told about her heart attack.")
                        console.log("Alright Ms. Nazim, you seem well rested. I think you can go home now.")
                        console.log("As ms. Nazim steps out of the hospital, she realizes that")
                        console.log("By taking the red pill, she fell into a rabbits hole and the world is inside a matrix")
                        console.log("She was too overwhelmed by the truth and couldn't believe what she was seeing")
                        console.log("Not paying attention, she walked into the road and got hit by a bus and died.")
                        nameInput8 = readline.question("Ok doctor, is she getting the red or blue pill?")
                    }
                    if (nameInput8 === "blue"){
                        console.log("The patien survived thanks to you doctor.")
                    console.log("The patient thanks you for her recovery and I hope you have enough time to make it to your pursuit class!")
                    }
                
                }
                
            }
            
     
    


    // create possibilities withion possiblity
    // next create an option that the patient is recovering and needs rest, we can sew her now or wait
    // or wait a little bit for the heart to heal up a bit before doing it. 
    
   
    
   


