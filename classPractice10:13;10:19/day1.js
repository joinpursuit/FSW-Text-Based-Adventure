//WARM UP
//write a function that takes in an array of nums and returns a new array with on the even numbers
// let arr1 = [5,7,9,10,18,4]
// function findEven(arr){
//     let newarr = [0]
//     for (let i =0; i < arr.length; i++ ){
//         if (arr[i] % 2 === 0){
//             newarr[1] = arr[i]          
//             }newarr.push(e
//         }return evenNums
//     }console.log(findEven(arr1))
//     //Failed to solve problem
// //class review
// let arr = something;
// let evens = [];
// for (let i = 0; i < arr.length; i++){
//     if (arr[i] % 2 === 0){
//         evens.push(arr[i])
//     }
// }
//this is the general logic that you think through;
//first define the variables, you're getting something and returning something;
//think of what you need to do once you go through that variable in an arr for this instance;
//then what you want out of that loop;
//once you go through the logic for the genral instance you declare the function;
function evenArr(arr){
let evens = [];
for (let i = 0; i < arr.length; i++){
    if (arr[i] % 2 === 0){
        evens.push(arr[i])
        }
    }
}
//you add a few more curly braces and you're done;
//again you're given something and you giving something if you're given an array and out putting an array you want to start;
//with that then you think about what you're doing with what you're given and what you want out of it;
//in relation to what you're outputting
//
//
//FUNCTION REVIEW
function evenorOdd(num){
    if(num % 2 === 1){
        return "NUMBER IS ODD"
    }else{
        return "NUMBER IS EVEN"
    }return "Neither even or odd"
}
//in this case when you put in a number the code will execute as expected, but when a different kind of variable is inuted 
//like a string the statement evaluates as falsey and returns the else statement
//the third return statement
//
function summ(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i]
        return sum
    }
    return sum
}
//in this case the return is an absolute order that ends the function
//the second return would only occur if you change the value of sum (possibly(was distracted))
//
// ES5 AND ABOVE SYNTAX
// function sayHello(){//ES5
//     return "Hello"
// }
// var sayHello = function(){//progression of syntax
//     return "Hello"
// }
// console.log(sayHello)
// //
// //
// const sayHello = (name)=>{//ES6
//     return "Hello " +name;
//}
//changes this like  this(?)
// in ES6 can also be writen like this
// const sayHello = (name) => "Hello " + name; //implicit return
// //console.log(sayHello(corey))
// const sum = (num1,num2) => (num1 + num2);
// console.log(sum(3,4))
// const double = (num) => (num * 2);
// const squared = (num) => (num * num);
// const doubleSquared = (num) => squared(double(num));
// console.log(doubleSquared(3))
//OTHER EXAMPLES
// const doubleSquare = (num)=>{
//     num = num + num;
//     num = Math.pow(num,2);
//     return num;
// }
// const doubleNum = (num)=>num*2;
// const squareNum = (num)=>Math.pow(num,2);
// const doubleSquare = (num)=>squareNum(doubleNum(num));
//if your only input is one number then you don't even need the parenthesis 