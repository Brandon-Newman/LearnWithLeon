// *Variables*
// Create a variable and console log the value
let myTestVar = 8
console.log(myTestVar)
// Create a variable, add 10 to it, and alert the value
let my2ndVar = 5
alert(my2ndVar + 10)
// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function sub4Numbers (a,b,c,d) {
    let mySubNumber = a-b-c-d
    alert(mySubNumber)
}
sub4Numbers (100,10,2,1)
// Create a function that divides one number by another and returns the remainder
function modThatShit (a,b) {
    let myMod = a%b
    return myMod
}
console.log(modThatShit (6,5))
// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function cond1 (a,b) {
    let sumCond = a+b
    if (sumCond > 50) {
        alert("Jumanji")
    }
}
cond1 (49,2)
// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function cond2 (a,b,c) {
    let sumCond2 = a*b*c
    if (sumCond2%3===0) {
        alert("Zebra")
    }
}
cond2 (2,2,3)
//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in
function myLoop (a,b) {
    for (i=1; i <= b; i++) {
        console.log(a)
    }
}
myLoop ('My Milkshake',4)