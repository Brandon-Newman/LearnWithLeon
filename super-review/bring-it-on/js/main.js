// *Variables*
// Create a variable and console log the value
let myFirstVariable = 21
console.log(myFirstVariable)
// Create a variable, add 10 to it, and alert the value
let secondVar = myFirstVariable + 10
alert(secondVar)
// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function subtract4 (a,b,c,d){
    alert(a-b-c-d)
}
subtract4(100,20,5,1)
// Create a function that divides one number by another and returns the remainder
function divideThatStuff(a,b){
    console.log(a%b)
}
divideThatStuff(100,3)
// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function addAndThen (a,b) {
    let variable = a + b
    if (variable > 50){
        alert('Jumanji')
    }
}
addAndThen(26,27)
// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function zebraNumbers(a,b,c){
    let var2 = a * b * c
    if (var2 % 3 === 0 ){
        alert('Zebra')
    }
}

zebraNumbers(8,9,10)
//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in
function loopingStuff(a,num){
    for (let i = 0; i < num; i++){
        console.log(a)
    }
}
loopingStuff('alphabet', 4)