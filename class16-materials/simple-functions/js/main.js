//---Easy
//create a function that subtracts two numbers and alerts the difference
console.log("Hello simple functions test")

function subtractTwoNumbers (a, b) {
    alert(a-b)
}
subtractTwoNumbers (10,2)

//create a function that divides three numbers and console logs the quotient
function divide3Numbers (a,b,c) {
    console.log(a/b/c)
}

divide3Numbers (100,10,2)
//create a function that multiplys three numbers and returns the product
function multiply3Number (a,b,c) {
    return(a*b*c)
}
let multipleTest= multiply3Number(2,4,5)
console.log(multipleTest)
//---Medium
//create a function that takes in three numbers. Add the first two numbers and return the remainder of dividing the sum of the first two numbers by the third number
function mediumTest (a,b,c) {
    return((a+b)%c)
}
let testMed = mediumTest(82,18,24)
console.log(testMed)
//---Hard
//create a function that takes in 4 numbers. Multiply the first two numbers. If the product is greater than 100 add the sum of the last two numbers and console log the value. 
//If the product is less that 100, subtract the difference of the last two numbers and console log the value. If the product is 100, multiply the first three numbers together and alert the remainder of dividing the fourth number
function hardTest (a,b,c,d) {
    let myMultiple= a*b
    if (myMultiple>100) {
        let newSum =  c + d
        console.log(newSum)
    }
    else if (myMultiple<100) {
        let newSum = c - d
        console.log(newSum)
    }
    else {
        let newSum = (a*b*c)%d
        alert(newSum)
    }
}
hardTest (10,10,2,6)