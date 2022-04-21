//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.
let arr = [1,2,3,4,78]

function sumFunc(x) {
    let sum = 0
    for (i=0;i<x.length;i++) {
        sum += x[i]
    }
    alert(sum)
}

sumFunc(arr)
///////////////////////////again//////////////
let sum2 = arr.reduce( (acc,c) => acc + Number(c), 0)
// Only added the Number(x) to make sure string values are converted to numbers
alert(sum2)

//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared


//Create a function that takes string
//Print the reverse of that string to the console

//Create a function that takes in a string
//Alert if the string is a palindrome or not
