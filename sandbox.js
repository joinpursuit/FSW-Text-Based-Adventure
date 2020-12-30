
let dice = function (nat,min){
    return Math.floor((Math.random()* nat)+min)}//nest this globally
let roll = dice(6,1)

console.log(roll)
