const readline = require('readline-sync')

let nameInput = readline.question("Enter your name: ")
let health = 100
let patient = {
    name: "Jana Nazim",
    age: 24,
    height: "5' 4inches",
    illness: "Addicted to sweaters",
    State: "New Jersey"

}
let reaction = "No that's not correct, your patient has"
let reaction2 = "Alright that's great doctor."


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
        console.log("oooh sorry, time is running out, your patient has" + " " + (health - 10) + " " + "life")
        nameInput3 = readline.question("scapel, hammer, or stetescope?")
    }
if (nameInput3 === "scapel"){
    console.log(reaction2)
    
    let nameInput4 = readline.question ("The patient is starting to get weary, should we grab the incubator?")
    while (nameInput4 !== "yes"){
        console.log("What do you mean no? you are wasting time, the patient now has" + " " + (health - 20) + " " + "life")
        nameInput4 = readline.question("yes or no?")
    }
    if(nameInput4 === "grab the incubator")
    console.log(reaction2)
    let nameInput5 = readline.question("Doctor, there seems to be a huge black spot in her heart, should we clean that or leave it alone?")
    if (nameInput5 === "clean"){
        console.log("Wow doctor, her health is going up.")
        console.log("good job, we kept her alive for a little bit more")
    
    }
}   else if (nameInput3 === "hammer" || nameInput3 === "stethescope"){
    
    console.log()
    let health = 90
} else {
    console.log("That is not a proper response, please try again")
    
    
    }
    
}   else if(nameInput2 === "no"){

         
         }
    


