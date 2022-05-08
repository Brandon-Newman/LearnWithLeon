//Arrays
//Your pokemon party order which is a list of pokemon has been leaked to Misty. Please create a function that reverses your list and prints it to the console. 

myArray = [1,2,3,4,5,6,7]

function reverseIt (arrayToTest) {
    let reversedArray = []
    for (i=(arrayToTest.length-1); i >=0; i--){
        reversedArray.push(arrayToTest[i])
    }
    console.log(reversedArray)
}

reverseIt(myArray)
    //Leon's version
function reverseParty(partyList){
    console.log(partyList.reverse())
}
reverseParty([1, 2,3,4,5,6,9])

//Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.

let arrayA = [1,2,3,4,5,6]
let arrayB = [4,3,3]

function whichIsBigger (a, b) {
    let sumOfA = 0
    let sumOfB = 0
    for (i=0; i<a.length; i++) {
        sumOfA += (a[i] * a[i])
    }
    for (i=0; i<b.length; i++) {
        sumOfB += (b[i] * b[i] * b[i])
    }

    console.log(sumOfA > sumOfB)
}

whichIsBigger(arrayA, arrayB)

    //Leon's version
function compareSquareToCube(a,b){
    console.log( a.reduce((acc,c) => acc + c**2, 0) > b.reduce((acc,c) => acc + c**3, 0))
}

compareSquareToCube(arrayA, arrayB)

//Return a new array consisting of elements which are multiple of their own index in input array (length > 1).
// Some cases:
// [22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]
// [68, -1, 1, -7, 10, 10] => [-1, 10]

/*function isItDivisbleByIndes (array) {
    console.log(array)
    for (i=0; i < array.length; i++){
        console.log('number in array ' + array[i])
        console.log('index in array ' + i )
        console.log('number divided by index = ' + array[i] % i )

        if (array[i] % i !== 0) {
            array.splice(i,1)
        }
    }
    console.log(array)
}

isItDivisbleByIndes([22, -6, 32, 82, 9, 25])
isItDivisbleByIndes([68, -1, 1, -7, 10, 10])
*/

    //Mine ignores the first negative for some reason
    //Leon's version

function isMultiple(arr) {
    return arr.filter((element, index) => element % index === 0)
}

console.log(isMultiple([22, -6, 32, 82, 9, 25]))
console.log(isMultiple([68, -1, 1, -7, 10, 10]))

//Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.Return your answer as a number.

function sumOfValues(arr){
    return arr.reduce((acc,c) => acc + Number(c), 0)
}

console.log(sumOfValues(['5', 3, '2', 1]))