//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.
let myArr = [2,5,8,34,5,22]
function sumItUp (arr) {
    let sum = 0
    for (i=0;i<arr.length;i++) {
        sum += arr[i]
}
alert(sum)}
sumItUp(myArr)

//alternative

alert(myArr.reduce( (x,a) => x + a, 0) )
//adding that 0 to the ends makes sure the system knows to use numbers in case the array starts with a string

//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared
let squareArray = myArr.map( a => a*a)

//to return
squareArray =myArr => myArr.map( a => a*a)

//Create a function that takes string
//Print the reverse of that string to the console

// SPLIT REVERSE JOIN!!!
let unoReverse = str => console.log( str.split('').reverse().join('') )


//Create a function that takes in a string
//Alert if the string is a palindrome or not

const palindromeCheck = str => alert(str === str.split('').reverse().join(''))

palindromeCheck('racecar')