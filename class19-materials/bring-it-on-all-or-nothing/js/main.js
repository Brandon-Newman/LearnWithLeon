/*// *Variables*
// Declare a variable, assign it a boolean, and alert the value
let myBoo = true
alert(myBoo)

// Declare a variable, reassign it to your favorite color, and console log the value
let color = "blue"
console.log(color)

// *Functions*
// Create a function that takes in 4 numbers and returns the sum of the first 3 numbers divided by the fourth. Return the result. Call the function.
function firstFunction (a,b,c,d) {
    console.log((a+b+c)/d)
    return (a+b+c)/d;
}
firstFunction(2,6,8,2)

// Create a function that takes in 2 numbers. Console log the first number to the power of the second. Call the function.
function secondFunction (a,b) {
    console.log(Math.pow(a,b))
}
secondFunction(2,4)

// *Conditionals*
// Create a function that takes in a boolean and a string. If the boolean is true, alert the string. If the boolean is false, console log the string
//function condTraining (a,b) {
//    if (a) {
//        alert(b)
//    }
//   else console.log(b)
//    }

// a ? alert(b) : console.log(b)

const condTraining = (a,b) => a ? alert(b) : console.log(b)

condTraining (true, 'apples')
//*Loops*
//Create a function that takes in a number. Console log all values from 1 to that number, but if the number is divisible by 3 log "fizz" instead of that number, if the number is divisible by 5 log "buzz" instead of the number, and if the number is divisible by 3 and 5 log "fizzbuzz" instead of that number
function loopinStuff (a) {
    for (i=1; i<=a; i++) {
        if (i%3===0 && i%5===0) {
            console.log("fizzbuzz")}
        else if (i%3===0) {
            console.log("fizz")}
        else if (i%5===0) {
                console.log("buzz")}
        else console.log(i)
    }
}
loopinStuff (18)

function multiply(a,b){
    console.log(a*b)
  }
multiply(2,4)

let codeWar = ['a','b','c','d','e','f','g','h','i']
console.log(codeWar)
for (i = codeWar.length - 1; i >= 0; --i) {
    if (i% 2 === 1) {
        codeWar.splice(i, 1); }
        
        //for (i=0; i<codeWar.length; i++) {
            //    if (i%2 ===1) {
                //        codeWar.splice(i,1);        
                //    }
            }
            console.log(codeWar)
            */
//Sum of values
//Write a program that creates the following array, then calculates and shows the sum of its values (42 in that case).

const values = [3, 11, 7, 2, 9, 10];
let sum = 0;

for (let i = 0; i < values.length; i++) {
    sum += values[i];
}
console.log(sum);

//Array maximum
//Write a program that creates the following array, then calculates and shows the array's maximum value.

const nums = [3, 11, 7, 2, 9, 10];
console.log(Math.max(...nums));

//List of words
//Write a program that asks the user for a word until the user types "stop". The program then shows each of these words, except "stop".