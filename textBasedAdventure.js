const readline = require('readline-sync')
// DR. BANDERSNATCH 
let nameInput = readline.question("Enter your name: ")
let patient = {
    name: "Jana Nazim",
    age: 23,
    height: "5' 4inches",
    illness: "FUCKING IDIOT",
    State: "Michigan"

}
let reaction1 = "No that's not correct, your patient has"
let reaction2 = "Alright that's great doctor."
let reaction3 = "I almost thought we were going to lose him, but it looks like that bought us some more time."

  let health = 70;
    const takeDamage = (num) =>{
    health -= num
    }
    console.log(health)

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
        nameInput3 = readline.question("scapel, hammer, or stetescope?")
    }
if (nameInput3 === "scapel"){
    console.log(reaction2)
    
    let nameInput4 = readline.question ("The patient is starting to get weary, should we grab the incubator?")
    while (nameInput4 !== "yes"){
        console.log("What do you mean no? you are wasting time")
        takeDamage(10)
        console.log("the patient has " + health + " life left.")
        nameInput4 = readline.question("yes or no?")
    }
    if(nameInput4 === "grab the incubator")
    healthIncrease(10)
    console.log("The patient has " + health2 + " life.")
    console.log(reaction3)
    
    console.log("After giving a few minutes to make sure the body is sedated, the doctor made an incision and opened the chest")

    let nameInput5 = readline.question("Doctor, there seems to be a huge black spot in her heart, should we clean that or leave it alone?")
    if (nameInput5 === "clean"){
        console.log("Wow doctor, her health is going up.")
        healthIncrease(20)
        console.log(health2)
        console.log("....")
        console.log("....")
        console.log("....")
        console.log("....")
        console.log("....")
        console.log("....")
        console.log("....")
        console.log("....")
        console.log("....")
        console.log("....")
        console.log("....")
        console.log("....")
        console.log(".....")
        console.log("....")
        console.log("....")
        console.log("....")
        console.log("....")
        console.log("....")
        console.log("....")

        console.log("good job, we kept her alive for a little bit more")
        let nameInput6 = readline.question("Dr, the operation looks succesful. We can sew up the wounds or wait an hour, What do you want to do?")
            if (nameInput6 === "sew up the wounds"){
                console.log("Ok, looks like we did well")
                let nameInput7 = readline.question("Doctor you can go home for an hour if you want")
                while (nameInput7 !== "no"){
                    console.log("DOCTOR HURRY, SHE SEEMS TO BE HAVING ANOTHER HEART ATTACK PLEASE HELP")
                    console.log("DOCTOR???????")
                    console.log("THE PATIENCE HAS DIED")
                    console.log("Let's try to see if we have a better option.")
                    nameInput7 = readline.question("Doctor you can go home if you want")
                    
                }   
            } else if (nameInput7 === "no"){
                let nameInput7 = readline.question("doctor, the patient had another major attack. He died ,try again?")
                while (nameInput7 !== "yes") {
                    console.log("OK what do you want to do now")
                }
                
            }
         }       
     }   

}

    // create possibilities withion possiblity
    // next create an option that the patient is recovering and needs rest, we can sew her now or wait
    // or wait a little bit for the heart to heal up a bit before doing it. 
    
   
    
   


